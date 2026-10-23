/* Little Learner: hash-routed single-page app. Curriculum data lives in data/gradeN.js. */
(function () {
  "use strict";

  const C = window.CURRICULUM || {};
  const G = window.GENERATORS || {};
  const P = window.PROGRAMS || { links: {}, subjectLinks: {}, gradeLinks: {} };
  const X = window.EXTRAS || {};
  const WS = window.WORKSHEETS || { defs: {}, groups: [] };
  const MR = window.MATH_ROADMAP || { stages: [], topics: [], links: {}, pathways: { head: [], rows: [] }, strands: [] };
  const mrTopic = (id) => MR.topics.find((t) => t.id === id);
  const MR_HERE = { 3: "arithmetic", 5: "fractions-decimals", 7: "pre-algebra" };   // where each grade sits on the roadmap
  const GRADES = Object.keys(C).map(Number).sort((a, b) => a - b);
  const QUIZ_LENGTH = 10;
  const LONG_LENGTH = 20;
  const VOCAB_PER_QUIZ = 2;
  const app = document.getElementById("app");

  // Merge extra examples and vocabulary examples (data/extras-gradeN.js) into each unit.
  // After this, every unit has `examples` (array) and vocab entries of [term, definition, example].
  GRADES.forEach((g) => C[g].subjects.forEach((s) => s.units.forEach((u) => {
    const x = X[`${g}/${s.id}/${u.id}`] || {};
    u.examples = [].concat(u.example || [], u.examples || [], x.examples || []);
    u.vocab = (u.vocab || []).concat(x.addVocab || []).map(([t, d, e]) => [t, d, e || (x.vocab || {})[t] || ""]);
  })));
  const isAdvanced = (s) => s.track === "advanced";

  // ---------- storage ----------
  const STORE_KEY = "littleLearner.v1";
  function loadStore() {
    try {
      const s = JSON.parse(localStorage.getItem(STORE_KEY));
      if (s && s.profiles) return s;
    } catch (e) { /* storage unavailable */ }
    return { current: "Guest", profiles: { Guest: { scores: {} } } };
  }
  let store = loadStore();
  function saveStore() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* ignore */ }
  }
  function profile() {
    if (!store.profiles[store.current]) store.profiles[store.current] = { scores: {} };
    return store.profiles[store.current];
  }
  function recordScore(key, correct, total) {
    const pct = Math.round((correct / total) * 100);
    const s = profile().scores[key] || { best: 0, attempts: 0 };
    s.best = Math.max(s.best, pct);
    s.last = pct;
    s.attempts += 1;
    s.date = new Date().toISOString().slice(0, 10);
    profile().scores[key] = s;
    saveStore();
  }

  // ---------- helpers ----------
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function stars(pct) {
    if (pct == null) return '<span class="stars muted" title="Not tried yet">☆☆☆</span>';
    const n = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0;
    return `<span class="stars" title="Best: ${pct}%">${"⭐".repeat(n)}${"☆".repeat(3 - n)}</span>`;
  }
  function findSubject(g, sid) { return C[g] && C[g].subjects.find((s) => s.id === sid); }
  function findUnit(g, sid, uid) { const s = findSubject(g, sid); return s && s.units.find((u) => u.id === uid); }
  function bestFor(key) { const s = profile().scores[key]; return s ? s.best : null; }
  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.95;
    speechSynthesis.speak(u);
  }
  const speakBtn = (text) => ("speechSynthesis" in window)
    ? `<button class="chip speak" type="button" data-speak="${esc(text)}" title="Read aloud">🔊 Read to me</button>` : "";
  function crumbs(parts) {
    return `<div class="crumbs">${parts.map(([label, href]) => href ? `<a href="${href}">${esc(label)}</a>` : esc(label)).join(" › ")}</div>`;
  }
  function render(html) {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    app.innerHTML = html;
    window.scrollTo(0, 0);
  }

  function resourceCard(keys, title) {
    const items = (keys || []).map((k) => P.links[k]).filter(Boolean);
    if (!items.length) return "";
    return `<section class="card resources">
      <h3>📎 ${esc(title || "Official CCPS & Virginia resources")}</h3>
      <ul>${items.map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a><span class="muted">: ${esc(l.note)}</span></li>`).join("")}</ul>
    </section>`;
  }
  const subjectLinkKeys = (s) => P.subjectLinks[isAdvanced(s) ? "advanced" : s.id];
  const vocabCount = (g) => C[g].subjects.reduce((n, s) => n + s.units.reduce((m, u) => m + u.vocab.length, 0), 0);
  const trackBadge = (s) => isAdvanced(s) ? `<span class="track-badge">🚀 Gifted &amp; Advanced</span>` : "";

  // Reading passages. text[] items are paragraphs ("## Title" makes a heading). format: prose | poem | script | steps.
  function passageHtml(p) {
    const numbered = p.numbered !== false && (p.format || "prose") === "prose";
    let n = 0;
    const body = p.text.map((t) => {
      if (t.startsWith("## ")) return `<h4>${esc(t.slice(3))}</h4>`;
      if (p.format === "poem") { n++; return `<div class="stanza"><span class="pnum">${n}</span><p>${esc(t)}</p></div>`; }
      if (p.format === "script") {
        const m = t.match(/^([A-Z][A-Z .'-]*):\s*(.*)$/s);
        const line = m ? `<b>${esc(m[1])}:</b> ${esc(m[2])}` : esc(t);
        return `<p class="script-line">${line.replace(/\(([^)]*)\)/g, "<em>($1)</em>")}</p>`;
      }
      if (numbered) { n++; return `<p><span class="pnum">${n}</span>${esc(t)}</p>`; }
      return `<p>${esc(t)}</p>`;
    }).join("");
    return `<article class="passage passage-${p.format || "prose"}">
      <h3>${esc(p.title)}</h3>
      <div class="byline">${esc(p.genre || "")}${p.byline ? " · " + esc(p.byline) : ""}</div>
      ${body}
    </article>`;
  }
  const passageText = (p) => [p.title].concat(p.text.map((t) => t.replace(/^## /, ""))).join(". ");

  // Highlights the unit a grade is currently studying in school (set via `focus` in the grade data).
  function focusBanner(g) {
    const f = C[g] && C[g].focus;
    const s = f && findSubject(g, f.subject);
    if (!s) return "";
    const tried = s.units.filter((u) => bestFor(`${g}/${s.id}/${u.id}`) != null).length;
    return `<section class="card focus">
      <div class="focus-tag">⭐ Grade ${g}: what we're studying now</div>
      <h2>${esc(f.label)}</h2>
      <p>${s.units.length} skills to practice · ${tried} tried so far</p>
      <div class="btn-row">
        <a class="btn" href="#/grade/${g}/${s.id}">📖 Study the skills</a>
        <a class="btn secondary" href="#/quiz/${g}/${s.id}/all">${esc(s.reviewLabel || "🎯 Mixed review")}</a>
        ${(s.mixes || [])[0] ? `<a class="btn secondary" href="#/quiz/${g}/${s.id}/mix-${s.mixes[0].id}">${esc(s.mixes[0].label)}</a>` : ""}
      </div>
    </section>`;
  }

  // ---------- views ----------
  function viewHome() {
    const cards = GRADES.map((g) => {
      const d = C[g];
      return `<a class="card grade-card" href="#/grade/${g}">
        <div class="big">${g}${["th", "st", "nd", "rd"][g] || "th"}</div>
        <h3>${esc(d.title)}</h3>
        <p>${d.subjects.filter((s) => !isAdvanced(s)).map((s) => s.icon + " " + esc(s.name)).join(" · ")}</p>
        ${d.subjects.some(isAdvanced) ? `<p><span class="track-badge">🚀 + Gifted &amp; Advanced</span></p>` : ""}
      </a>`;
    }).join("");
    render(`
      <section class="hero">
        <h1>Hi, ${esc(store.current)}! What are we learning today?</h1>
        <p>Pick a grade to see every unit in Math, English, Science, and History &amp; Social Science, based on the Virginia Standards of Learning (SOL). Read the study guide and examples, learn the vocabulary, then take the quiz to earn stars.</p>
      </section>
      ${GRADES.map(focusBanner).join("")}
      <div class="grid">${cards}</div>
      <h2>How it works</h2>
      <div class="grid">
        <div class="card"><div class="big">📖</div><h3>Learn</h3><p>Each unit has key ideas, examples, and vocabulary flashcards.</p></div>
        <div class="card"><div class="big">✏️</div><h3>Quiz</h3><p>Up to 10 questions with explanations. Many math quizzes generate fresh problems every time.</p></div>
        <div class="card"><div class="big">⭐</div><h3>Earn stars</h3><p>Score 90% or better for 3 stars. Track progress for each child.</p></div>
      </div>
      ${GRADES.some((g) => findSubject(g, "reading")) ? `<h2>📖 Reading Comprehension</h2>
      <div class="grid">${GRADES.filter((g) => findSubject(g, "reading")).map((g) => { const r = findSubject(g, "reading"); return `<a class="card subject subject-reading" href="#/grade/${g}/reading"><div class="big">📖</div><h3>Grade ${g} Reading</h3><p>${r.units.filter((u) => u.passage).length} passages with questions, plus ${r.units.filter((u) => !u.passage).length} reading skills guides.</p></a>`; }).join("")}</div>` : ""}
      ${Object.keys(WS.defs).length ? `<h2>📝 Math Worksheets &amp; Tests</h2>
      <div class="grid">${Object.keys(WS.defs).map((g) => `<a class="card subject subject-math" href="#/worksheets/${g}"><div class="big">📝</div><h3>Grade ${g} Math Worksheets</h3><p>${WS.defs[g].length} printable sheets: one-step equations, riddle worksheets, two-step equations, integers, percents, and mixed tests.</p></a>`).join("")}</div>` : ""}
      ${MR.topics.length ? `<h2>🧭 The Math Roadmap</h2>
      <div class="grid">
        <a class="card topic-card featured" href="#/math-roadmap"><div class="topic-top"><span class="big">🧭</span></div><h3>From counting to calculus</h3><p>Every level of math from kindergarten through college: arithmetic, algebra, geometry, trigonometry, calculus, and more, each with a plain-English summary.</p></a>
        ${mrTopic("pre-algebra") ? mrCard(mrTopic("pre-algebra")) : ""}
        ${mrTopic("algebra") ? mrCard(mrTopic("algebra")) : ""}
      </div>` : ""}
      <h2>For parents</h2>
      <div class="grid">
        <a class="card" href="#/programs"><div class="big">🧭</div><h3>Programs &amp; Tracks</h3><p>How CCPS gifted services work, and the standard, honors, and gifted course options for grades 6–8.</p></a>
        ${GRADES.map((g) => `<a class="card" href="#/vocab/${g}"><div class="big">📒</div><h3>Grade ${g} Vocabulary</h3><p>All ${vocabCount(g)} words with definitions and examples, plus vocabulary quizzes.</p></a>`).join("")}
      </div>
      ${resourceCard(["ccpsCurriculum", "ccpsGifted", "programOfStudies"])}`);
  }

  function viewGrade(g) {
    const d = C[g];
    if (!d) return viewNotFound();
    const card = (s) => {
      const keys = s.units.map((u) => `${g}/${s.id}/${u.id}`);
      const done = keys.filter((k) => (bestFor(k) || 0) >= 70).length;
      return `<a class="card subject subject-${s.id}" href="#/grade/${g}/${s.id}">
        <div class="big">${s.icon}</div>
        <h3>${esc(s.name)}</h3>
        <p>${s.units.length} units · ${done} mastered</p>
        <p><span class="tag">${esc(s.standards)}</span></p>
      </a>`;
    };
    const advanced = d.subjects.filter(isAdvanced);
    render(`
      ${crumbs([["Home", "#/"], [`Grade ${g}`]])}
      <h1>Grade ${g}: ${esc(d.title)}</h1>
      <p class="muted">${esc(d.intro)}</p>
      ${focusBanner(g)}
      <div class="grid">${d.subjects.filter((s) => !isAdvanced(s)).map(card).join("")}</div>
      <div class="btn-row">
        <a class="btn" href="#/quiz/${g}/all/all">🎯 Mixed review: all subjects</a>
        <a class="btn secondary" href="#/vocab/${g}">📒 Grade ${g} vocabulary (${vocabCount(g)} words)</a>
        ${WS.defs[g] ? `<a class="btn secondary" href="#/worksheets/${g}">📝 Math worksheets &amp; tests</a>` : ""}
      </div>
      ${advanced.length ? `<section class="track-advanced">
        <div class="track-badge">🚀 Gifted &amp; Advanced Track</div>
        <h2>Beyond grade level</h2>
        <p>${esc((P.gifted && P.gifted.byGrade && P.gifted.byGrade[g]) || "")} These units go deeper and faster than the standard Grade ${g} curriculum, matching what CCPS gifted, Center-Based Gifted, accelerated, and honors classes cover. <a href="#/programs">How these programs work →</a></p>
        <div class="grid">${advanced.map(card).join("")}</div>
      </section>` : ""}
      ${resourceCard(P.gradeLinks[g], `Official resources for Grade ${g}`)}`);
  }

  function viewSubject(g, sid) {
    const s = findSubject(g, sid);
    if (!s) return viewNotFound();
    const rows = s.units.map((u, i) => {
      const key = `${g}/${sid}/${u.id}`;
      return `<li class="unit-row">
        <div class="info">
          <a href="#/learn/${g}/${sid}/${u.id}">${i + 1}. ${esc(u.title)}</a>
          <div class="muted" style="font-size:.9rem">${u.sol ? `<span class="tag">${esc(u.sol)}</span>` : ""}${esc(u.summary)}</div>
        </div>
        <div class="actions">
          ${stars(bestFor(key))}
          <a class="btn secondary" href="#/learn/${g}/${sid}/${u.id}">Learn</a>
          <a class="btn" href="#/quiz/${g}/${sid}/${u.id}">Quiz</a>
        </div>
      </li>`;
    }).join("");
    render(`
      ${crumbs([["Home", "#/"], [`Grade ${g}`, `#/grade/${g}`], [s.name]])}
      ${trackBadge(s)}
      <h1>${s.icon} Grade ${g} ${esc(s.name)}</h1>
      ${sid === "math" && MR_HERE[g] && mrTopic(MR_HERE[g]) ? `<div class="callout">🧭 <b>Where this fits in the Math Roadmap:</b> Grade ${g} math is mostly <a href="#/math/${MR_HERE[g]}">${esc(mrTopic(MR_HERE[g]).title)}</a>${g === 7 ? `, the bridge to <a href="#/math/algebra-1">Algebra I</a> (see also <a href="#/math/algebra">the big picture of algebra</a>)` : ""}. <a href="#/math-roadmap">See the whole roadmap →</a></div>` : ""}
      <p class="muted">${esc(s.about || "")} <span class="tag">${esc(s.standards)}</span></p>
      <ul class="unit-list${isAdvanced(s) ? " advanced" : ""}">${rows}</ul>
      <div class="btn-row">
        <a class="btn" href="#/quiz/${g}/${sid}/all">${esc(s.reviewLabel || `🎯 Mixed review: all ${s.name} units`)}</a>
        <a class="btn secondary" href="#/quiz/${g}/${sid}/vocab">📒 ${esc(s.name)} vocabulary quiz</a>
        ${sid === "math" && WS.defs[g] ? `<a class="btn secondary" href="#/worksheets/${g}">📝 Worksheets &amp; tests</a>` : ""}
      </div>
      ${(s.mixes || []).length ? `<h2>More practice rounds</h2>
        <div class="grid">${s.mixes.map((m) => `<a class="card" href="#/quiz/${g}/${sid}/mix-${m.id}"><h3>${esc(m.label)}</h3><p>${esc(m.about)} New questions every time.</p></a>`).join("")}</div>` : ""}
      ${resourceCard(subjectLinkKeys(s))}`);
  }

  function viewLearn(g, sid, uid) {
    const s = findSubject(g, sid);
    const u = findUnit(g, sid, uid);
    if (!u) return viewNotFound();
    const idx = s.units.indexOf(u);
    const next = s.units[idx + 1];
    const prev = s.units[idx - 1];
    const vocab = u.vocab.map(([t, def, ex]) => `<button class="vcard" type="button">
        <span class="term">${esc(t)}</span>
        <span class="def">${esc(def)}</span>
        ${ex ? `<span class="vex"><b>Example:</b> ${esc(ex)}</span>` : ""}
      </button>`).join("");
    const readText = [u.title, u.summary].concat(u.points || []).join(". ");
    const hasPassage = !!u.passage;
    const longOk = !hasPassage && !s.passageSubject && ((u.questions || []).length > QUIZ_LENGTH + 4 || u.gen);
    render(`
      ${crumbs([["Home", "#/"], [`Grade ${g}`, `#/grade/${g}`], [s.name, `#/grade/${g}/${sid}`], [u.title]])}
      <article class="learn">
        ${trackBadge(s)}
        <h1>${esc(u.title)}</h1>
        <p>${u.sol ? `<span class="tag">${esc(u.sol)}</span>` : ""}<span class="muted">${esc(u.summary)}</span> ${speakBtn(readText)}</p>
        ${hasPassage ? `<h2>📄 Read the passage</h2><p class="muted">Read it carefully, then answer the questions. You can look back at the passage during the quiz. ${speakBtn(passageText(u.passage))}</p>${passageHtml(u.passage)}` : ""}
        <h2>${esc(u.pointsTitle || "Key ideas")}</h2>
        <ul>${(u.points || []).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        ${u.examples.length ? `<h2>${u.examples.length > 1 ? "Examples" : "Example"}</h2>${u.examples.map((ex) => `<div class="example">${esc(ex)}</div>`).join("")}` : ""}
        ${vocab ? `<h2>Vocabulary</h2>
          <p class="muted vocab-help"><span class="list-only">Read each word, what it means, and an example.</span><span class="cards-only">Say what each word means, then tap the card to check.</span>
          <button class="chip" type="button" data-action="flashcards"><span class="list-only">🃏 Practice as flashcards</span><span class="cards-only">📋 Show all definitions</span></button></p>
          <div class="vocab">${vocab}</div>` : ""}
        <div class="btn-row">
          <a class="btn" href="#/quiz/${g}/${sid}/${u.id}">${hasPassage ? "✏️ Answer the questions" : "✏️ Take the quiz"}</a>
          ${longOk ? `<a class="btn secondary" href="#/quiz/${g}/${sid}/${u.id}/long">📝 20-question practice</a>` : ""}
          ${prev ? `<a class="btn secondary" href="#/learn/${g}/${sid}/${prev.id}">← ${esc(prev.title)}</a>` : ""}
          ${next ? `<a class="btn secondary" href="#/learn/${g}/${sid}/${next.id}">${esc(next.title)} →</a>` : ""}
        </div>
      </article>`);
  }

  // Normalizes a question tuple [q, choices, answerIndex, explain] into a shuffled object.
  function prepare(tuple, source, passage) {
    const [q, choices, ans, explain] = tuple;
    const order = shuffle(choices.map((_, i) => i));
    return {
      q, explain: explain || "", source, passage,
      choices: order.map((i) => choices[i]),
      answer: order.indexOf(ans),
    };
  }

  function unitPool(u, generatedCount) {
    const pool = (u.questions || []).map((t) => prepare(t, u.title, u.passage));
    const gens = u.gen ? [].concat(u.gen) : [];
    // Generated questions skip any answer already in this pool, so one quiz never repeats a word.
    const used = new Set(pool.map((q) => q.choices[q.answer]));
    for (let i = 0; i < generatedCount && gens.length; i++) {
      const fn = G[gens[i % gens.length]];
      if (!fn) continue;
      let q = prepare(fn(), u.title);
      for (let t = 0; t < 12 && used.has(q.choices[q.answer]); t++) q = prepare(fn(), u.title);
      used.add(q.choices[q.answer]);
      pool.push(q);
    }
    return pool;
  }

  // Builds "what does this word mean?" questions from a unit's vocabulary.
  // Wrong answers come from other vocabulary in the same subject.
  function vocabQuestions(s, entries, n) {
    const all = s.units.flatMap((u) => u.vocab);
    return shuffle(entries).slice(0, n).map(([t, d, e]) => {
      const others = shuffle(all.filter(([t2, d2]) => t2.toLowerCase() !== t.toLowerCase() && d2 !== d));
      const wrong = [];
      for (const o of others) if (wrong.length < 3 && !wrong.some((w) => w[0] === o[0] || w[1] === o[1])) wrong.push(o);
      const explain = `${t}: ${d}${e ? ` Example: ${e}` : ""}`;
      return Math.random() < 0.5
        ? prepare([`What does "${t}" mean?`, [d].concat(wrong.map((w) => w[1])), 0, explain], "Vocabulary")
        : prepare([`Which word means: "${d}"`, [t].concat(wrong.map((w) => w[0])), 0, explain], "Vocabulary");
    }).filter((q) => q.choices.length >= 3);
  }

  // Drops questions that ask the same thing with the same answer (e.g. a handwritten and a generated one).
  function dedupe(list) {
    const seen = new Set();
    return list.filter((q) => { const k = q.q + "=>" + q.choices[q.answer]; if (seen.has(k)) return false; seen.add(k); return true; });
  }

  function buildQuiz(g, sid, uid, len = QUIZ_LENGTH) {
    if (sid === "all") {
      const units = C[g].subjects.filter((s) => !isAdvanced(s) && !s.passageSubject).flatMap((s) => s.units);
      return shuffle(units).slice(0, 20).map((u) => shuffle(unitPool(u, 1))[0]).filter(Boolean);
    }
    const s = findSubject(g, sid);
    if (uid === "vocab") return vocabQuestions(s, s.units.flatMap((u) => u.vocab), 15);
    if (uid.startsWith("mix-")) {
      const mix = (s.mixes || []).find((m) => "mix-" + m.id === uid);
      const units = mix.units.map((id) => s.units.find((u) => u.id === id));
      const per = Math.ceil(mix.size / units.length) + 1;
      const picks = shuffle(units).flatMap((u) => shuffle(unitPool(u, 2)).slice(0, per));
      return dedupe(shuffle(picks)).slice(0, mix.size);
    }
    if (uid === "all" && s.passageSubject) {
      // Reading: pick two passages and ask all their questions, one passage at a time.
      return shuffle(s.units.filter((u) => u.passage)).slice(0, 2).flatMap((u) => unitPool(u, 0));
    }
    if (uid === "all") {
      const size = s.reviewSize || 15;
      const per = Math.ceil(size / s.units.length);
      const picks = shuffle(s.units).flatMap((u) => shuffle(unitPool(u, per)).slice(0, per));
      return dedupe(shuffle(picks)).slice(0, size);
    }
    const u = findUnit(g, sid, uid);
    if (u.passage) return unitPool(u, 0); // passage questions stay in reading order
    // Each unit quiz mixes written questions, a couple of vocabulary questions,
    // and (for units with generators) at least 3 freshly generated problems.
    const vocab = vocabQuestions(s, u.vocab, len > QUIZ_LENGTH ? VOCAB_PER_QUIZ * 2 : VOCAB_PER_QUIZ);
    const genCount = u.gen ? (len > QUIZ_LENGTH ? 6 : 3) : 0;
    const written = shuffle(unitPool(u, 0)).slice(0, len - vocab.length - genCount);
    const extra = u.gen ? unitPool({ gen: u.gen }, len - vocab.length - written.length) : [];
    let list = dedupe(shuffle(written.concat(vocab, extra)));
    for (let t = 0; u.gen && list.length < len && t < 20; t++) list = dedupe(list.concat(unitPool({ gen: u.gen }, 1)));
    return shuffle(list).slice(0, len);
  }

  function viewQuiz(g, sid, uid, mode) {
    if (!C[g]) return viewNotFound();
    if (sid !== "all" && !findSubject(g, sid)) return viewNotFound();
    const isMix = uid && uid.startsWith("mix-");
    const mix = isMix && ((findSubject(g, sid) || {}).mixes || []).find((m) => "mix-" + m.id === uid);
    if (isMix && !mix) return viewNotFound();
    if (sid !== "all" && uid !== "all" && uid !== "vocab" && !isMix && !findUnit(g, sid, uid)) return viewNotFound();

    const long = mode === "long";
    const subj = sid === "all" ? null : findSubject(g, sid);
    const unit = subj && uid !== "all" && uid !== "vocab" && !isMix ? findUnit(g, sid, uid) : null;
    const title = unit ? unit.title + (long ? " (long practice)" : "") : mix ? mix.label.replace(/^\S+\s/, "") : subj ? `${subj.name}: ${uid === "vocab" ? "Vocabulary" : "Mixed Review"}` : `Grade ${g}: Mixed Review`;
    const key = `${g}/${sid}/${uid}`;
    const back = unit ? `#/learn/${g}/${sid}/${uid}` : subj ? `#/grade/${g}/${sid}` : `#/grade/${g}`;
    const qs = buildQuiz(g, sid, uid, long ? LONG_LENGTH : QUIZ_LENGTH);
    let i = 0, correct = 0;
    const missed = [];

    let passageOpen = true;
    function showQuestion() {
      const q = qs[i];
      render(`
        ${crumbs([["Home", "#/"], [`Grade ${g}`, `#/grade/${g}`]].concat(subj ? [[subj.name, `#/grade/${g}/${sid}`]] : []).concat([["Quiz"]]))}
        <section class="quiz${q.passage ? " wide" : ""}">
          <h1>✏️ ${esc(title)}</h1>
          <div class="muted">Question ${i + 1} of ${qs.length} · Score: ${correct}</div>
          <div class="progressbar"><div style="width:${(i / qs.length) * 100}%"></div></div>
          ${q.passage ? `<details class="passage-panel"${passageOpen ? " open" : ""}><summary>📄 ${esc(q.passage.title)} <span class="muted">(tap to show or hide)</span></summary>${speakBtn(passageText(q.passage))}${passageHtml(q.passage)}</details>` : ""}
          <p class="question">${esc(q.q)}</p>
          <p>${speakBtn(q.q + ". " + q.choices.map((c, k) => "Choice " + "ABCD"[k] + ": " + c).join(". "))}</p>
          <div class="choices">${q.choices.map((c, k) => `<button class="choice" type="button" data-k="${k}"><b>${"ABCDEF"[k]}.</b> ${esc(c)}</button>`).join("")}</div>
          <div id="fb"></div>
        </section>`);
      app.querySelectorAll(".choice").forEach((b) => b.addEventListener("click", () => answer(Number(b.dataset.k))));
      const panel = app.querySelector(".passage-panel");
      if (panel) panel.addEventListener("toggle", () => { passageOpen = panel.open; });
    }

    function answer(k) {
      const q = qs[i];
      const ok = k === q.answer;
      if (ok) correct++; else missed.push({ q, picked: k });
      app.querySelectorAll(".choice").forEach((b) => {
        b.disabled = true;
        const bk = Number(b.dataset.k);
        if (bk === q.answer) b.classList.add("correct");
        else if (bk === k) b.classList.add("wrong");
      });
      const last = i === qs.length - 1;
      document.getElementById("fb").innerHTML = `
        <div class="feedback ${ok ? "good" : "bad"}">
          <b>${ok ? "✅ Correct!" : "❌ Not quite."}</b>
          ${ok ? "" : ` The answer is <b>${esc(q.choices[q.answer])}</b>.`}
          ${q.explain ? `<div>${esc(q.explain)}</div>` : ""}
        </div>
        <div class="btn-row"><button class="btn" id="nextBtn" type="button">${last ? "See my score" : "Next question →"}</button></div>`;
      const nb = document.getElementById("nextBtn");
      nb.focus();
      nb.addEventListener("click", () => { i++; if (i < qs.length) showQuestion(); else finish(); });
    }

    function finish() {
      const pct = Math.round((correct / qs.length) * 100);
      recordScore(key, correct, qs.length);
      const msg = pct >= 90 ? "Amazing work! 🎉" : pct >= 70 ? "Great job! Keep it up! 💪" : pct >= 50 ? "Good effort! Review and try again. 📖" : "Let's review the study guide and try again. You've got this! 🌱";
      const review = missed.map(({ q, picked }) => `
        <div class="review-item">
          <div><b>${esc(q.q)}</b></div>
          <div>Your answer: ${esc(q.choices[picked])}</div>
          <div>Correct answer: <b>${esc(q.choices[q.answer])}</b></div>
          ${q.explain ? `<div class="muted">${esc(q.explain)}</div>` : ""}
        </div>`).join("");
      render(`
        <section class="quiz">
          <h1>${esc(title)}: Results</h1>
          <div class="card" style="text-align:center">
            <div class="score-big">${correct} / ${qs.length}</div>
            <div style="font-size:1.6rem">${stars(pct)}</div>
            <p style="font-size:1.1rem;color:var(--text)">${pct}%: ${msg}</p>
          </div>
          ${missed.length ? `<h2>Review what you missed</h2>${review}` : ""}
          <div class="btn-row">
            <a class="btn" href="#/quiz/${g}/${sid}/${uid}${long ? "/long" : ""}?r=${Date.now()}">🔁 Try again (new questions)</a>
            <a class="btn secondary" href="${back}">${unit ? "📖 Back to study guide" : "← Back"}</a>
          </div>
        </section>`);
    }

    if (!qs.length) return render(`<p>No questions yet for this unit.</p>`);
    showQuestion();
  }

  function viewProgress() {
    const scores = profile().scores;
    const keys = Object.keys(scores);
    const avg = keys.length ? Math.round(keys.reduce((a, k) => a + scores[k].best, 0) / keys.length) : 0;
    const quizzes = keys.reduce((a, k) => a + scores[k].attempts, 0);
    const mastered = keys.filter((k) => scores[k].best >= 90).length;
    const rows = GRADES.flatMap((g) => C[g].subjects.flatMap((s) => s.units.map((u) => {
      const k = `${g}/${s.id}/${u.id}`;
      const sc = scores[k];
      if (!sc) return "";
      return `<tr><td>Grade ${g}</td><td>${s.icon} ${esc(s.name)}</td><td><a href="#/learn/${g}/${s.id}/${u.id}">${esc(u.title)}</a></td>
        <td>${stars(sc.best)} ${sc.best}%</td><td>${sc.last}%</td><td>${sc.attempts}</td><td>${sc.date}</td></tr>`;
    }))).join("") + Object.keys(scores).filter((k) => k.includes("/worksheet/")).map((k) => {
      const [g, , id] = k.split("/"), sc = scores[k], d = ((WS.defs[g] || []).find((x) => x.id === id));
      if (!d) return "";
      return `<tr><td>Grade ${g}</td><td>📝 Worksheet</td><td><a href="#/worksheet/${g}/${id}">${esc(d.title)}</a></td>
        <td>${stars(sc.best)} ${sc.best}%</td><td>${sc.last}%</td><td>${sc.attempts}</td><td>${sc.date}</td></tr>`;
    }).join("");
    render(`
      ${crumbs([["Home", "#/"], ["My Progress"]])}
      <h1>📊 ${esc(store.current)}'s progress</h1>
      <div class="stat-row">
        <div class="card stat"><div class="num">${quizzes}</div>quizzes taken</div>
        <div class="card stat"><div class="num">${keys.length}</div>units tried</div>
        <div class="card stat"><div class="num">${mastered}</div>units mastered (90%+)</div>
        <div class="card stat"><div class="num">${avg}%</div>average best score</div>
      </div>
      ${rows ? `<div class="table-wrap"><table class="prog"><thead><tr><th>Grade</th><th>Subject</th><th>Unit</th><th>Best</th><th>Last</th><th>Tries</th><th>Date</th></tr></thead><tbody>${rows}</tbody></table></div>`
        : `<p class="muted">No quizzes yet. <a href="#/">Pick a grade</a> to get started!</p>`}
      <p class="muted" style="font-size:.85rem;margin-top:20px">Progress is saved in this browser only.</p>`);
  }

  function viewVocab(g) {
    const d = C[g];
    if (!d) return viewNotFound();
    const sections = d.subjects.map((s) => {
      const units = s.units.filter((u) => u.vocab.length).map((u) => `
        <div class="gloss-unit">
          <h3><a href="#/learn/${g}/${s.id}/${u.id}">${esc(u.title)}</a></h3>
          <dl class="glossary">${u.vocab.map(([t, def, ex]) => `<div class="gloss-item" data-text="${esc((t + " " + def + " " + ex).toLowerCase())}">
            <dt>${esc(t)}</dt><dd>${esc(def)}${ex ? `<div class="vex"><b>Example:</b> ${esc(ex)}</div>` : ""}</dd></div>`).join("")}</dl>
        </div>`).join("");
      return `<section class="gloss-subject${isAdvanced(s) ? " advanced" : ""}">
        <h2>${s.icon} ${esc(s.name)} ${trackBadge(s)} <a class="chip" href="#/quiz/${g}/${s.id}/vocab">📒 Quiz me</a></h2>${units}</section>`;
    }).join("");
    render(`
      ${crumbs([["Home", "#/"], [`Grade ${g}`, `#/grade/${g}`], ["Vocabulary"]])}
      <h1>📒 Grade ${g} Vocabulary</h1>
      <p class="muted">${vocabCount(g)} words with clear definitions and examples, organized by subject and unit.</p>
      <input id="glossSearch" class="search" type="search" placeholder="Search for a word…" autocomplete="off">
      <p id="glossEmpty" class="muted" hidden>No words match your search.</p>
      ${sections}`);
    const input = document.getElementById("glossSearch");
    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      let shown = 0;
      app.querySelectorAll(".gloss-item").forEach((el) => { const ok = !q || el.dataset.text.includes(q); el.hidden = !ok; if (ok) shown++; });
      app.querySelectorAll(".gloss-unit, .gloss-subject").forEach((el) => { el.hidden = !el.querySelector(".gloss-item:not([hidden])"); });
      document.getElementById("glossEmpty").hidden = shown > 0;
    });
  }

  function viewPrograms() {
    const gf = P.gifted, ms = P.middle;
    if (!gf || !ms) return viewNotFound();
    const verify = (x) => x.verify ? ` <span class="verify" title="Not confirmed on an official CCPS page. Check with your school.">check with school</span>` : "";
    const lanes = ms.mathLanes.map((l) => `<div class="lane">
        <div class="lane-name">${esc(l.name)}${verify(l)}</div>
        <div class="lane-steps">${l.steps.map((st) => `<span class="step">${esc(st)}</span>`).join('<span class="arrow">→</span>')}</div>
        <div class="muted">${esc(l.text)}</div>
      </div>`).join("");
    const grades = ms.grades.map((gr) => `
      <section class="card ms-grade">
        <h3>Grade ${gr.grade}${C[gr.grade] ? ` <a class="chip" href="#/grade/${gr.grade}">Study Grade ${gr.grade} on this site →</a>` : ""}</h3>
        <div class="table-wrap"><table class="prog tracks">
          <thead><tr><th>Subject</th><th>Standard</th><th>Honors</th><th>Gifted (CBG)</th></tr></thead>
          <tbody>${gr.courses.map((c) => `<tr><td><b>${esc(c.subject)}</b>${verify(c)}</td><td>${esc(c.standard)}</td><td class="t-honors">${esc(c.honors)}</td><td class="t-gifted">${esc(c.gifted)}</td></tr>`).join("")}</tbody>
        </table></div>
        ${Object.entries(gr.topics).map(([course, list]) => `<details><summary>What's covered: ${esc(course)}</summary><ul>${list.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></details>`).join("")}
      </section>`).join("");
    render(`
      ${crumbs([["Home", "#/"], ["Programs & Tracks"]])}
      <h1>🧭 CCPS Programs &amp; Tracks</h1>
      <p class="muted">A parent's guide to how CCPS's standard, honors, and gifted programs fit together. Always confirm placement with your child's school, since courses can change from year to year.</p>

      <h2>🚀 Gifted education (grades K–8)</h2>
      <p>${esc(gf.summary)}</p>
      <div class="grid">${gf.services.map((x) => `<div class="card track-card"><div class="big">${x.icon}</div><h3>${esc(x.name)}</h3><p>${esc(x.text)}</p></div>`).join("")}</div>
      <div class="card note"><b>How to refer your child:</b> ${esc(gf.referral)}</div>
      <p>On this site, each grade has a separate <span class="track-badge">🚀 Gifted &amp; Advanced</span> section with units that go beyond the standard curriculum:
        ${GRADES.filter((g) => C[g].subjects.some(isAdvanced)).map((g) => `<a href="#/grade/${g}/advanced">Grade ${g}</a>`).join(" · ")}</p>

      <h2>🏫 Middle school tracks (grades 6–8)</h2>
      <p>${esc(ms.honorsNote)}</p>
      <div class="card note">⚠️ ${esc(ms.socialStudiesNote)}</div>
      <h3>Math pathways</h3>
      <p class="muted">Want the big picture from counting to calculus? See the <a href="#/math-roadmap">Math Roadmap</a>.</p>
      <div class="lanes">${lanes}</div>
      ${grades}
      <p class="muted" style="font-size:.9rem">Items marked <span class="verify">check with school</span> came from the course list but not from an official description, so confirm them with your school counselor.</p>
      ${resourceCard(["programOfStudies", "ccpsCurriculum", "ccpsGifted", "giftedPlan", "ccpsSummer"], "Official CCPS documents")}`);
  }

  // ---------- math roadmap ----------
  const mrCard = (t) => `<a class="card topic-card${t.featured ? " featured" : ""}" href="#/math/${t.id}">
      <div class="topic-top"><span class="big">${t.icon}</span><span class="tag">${esc(t.grades)}</span></div>
      <h3>${esc(t.title)}</h3><p>${esc(t.tagline)}</p>${t.featured ? `<p class="feat-note">${esc(t.featNote || "⭐ Featured")}</p>` : ""}</a>`;
  const mrTable = (tb) => `<div class="table-wrap"><table class="prog roadtable"><thead><tr>${tb.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${tb.rows.map((r) => `<tr>${r.map((c, i) => i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;

  function viewMathRoadmap() {
    const here = Object.entries(MR_HERE).map(([g, id]) => { const t = mrTopic(id); return t ? `<li><b>Grade ${g}:</b> <a href="#/math/${id}">${esc(t.title)}</a>${g === "7" ? ` · heading toward <a href="#/math/algebra-1">Algebra I</a>` : ""}</li>` : ""; }).join("");
    const pw = MR.pathways;
    render(`
      ${crumbs([["Home", "#/"], ["Math Roadmap"]])}
      <h1>🧭 The Math Roadmap</h1>
      <p class="lead">Math isn't one subject. It's a staircase of connected branches, each one built on the one before. Here is every major level, from counting in kindergarten to calculus and beyond, with a plain-English summary, sample problems, and what comes next.</p>
      <section class="card here-card"><h3>Where our learners are now</h3><ul>${here}</ul>
        <p class="muted">Click any card below to see what a level covers, the key words, sample problems, and how to tell when a child is ready for the next step.</p></section>

      <h2>The five big strands</h2>
      <p class="muted">Every course you see on a report card (Algebra, Geometry, Calculus…) is one of these ideas at a different level.</p>
      <div class="grid">${MR.strands.map((x) => `<div class="card"><div class="big">${x.icon}</div><h3>${esc(x.name)}</h3><p>${esc(x.text)}</p></div>`).join("")}</div>

      ${["algebra", "pre-algebra", "algebra-1", "algebra-2"].every((x) => mrTopic(x)) ? `<section class="mr-stage mr-family"><div class="mr-stage-head"><h2>🔤 The Algebra family</h2><span class="tag">Grades 6–11</span></div>
        <p class="muted">Algebra is taught in three stages, and each has its own full page with step-by-step examples. Grade 7 is in <b>Pre-Algebra</b> right now.</p>
        <div class="grid">${["algebra", "pre-algebra", "algebra-1", "algebra-2"].map((x) => mrCard(mrTopic(x))).join("")}</div></section>` : ""}

      ${MR.stages.map((st) => `<section class="mr-stage mr-${st.id}"><div class="mr-stage-head"><h2>${esc(st.title)}</h2><span class="tag">${esc(st.grades)}</span></div>
        <p class="muted">${esc(st.blurb)}</p><div class="grid">${MR.topics.filter((t) => t.stage === st.id).map(mrCard).join("")}</div></section>`).join("")}

      <h2>Typical course pathways in Virginia</h2>
      <p class="muted">Which course a student takes each year depends on their school and readiness. This shows the usual lanes.</p>
      <div class="table-wrap"><table class="prog roadtable pathways"><thead><tr>${pw.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
        <tbody>${pw.rows.map((r) => `<tr><th scope="row">${esc(r.name)}${r.verify ? ` <span class="verify" title="Not confirmed on an official CCPS page. Check with your school.">check with school</span>` : ""}</th>${r.cells.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
      <p class="muted" style="font-size:.92rem">${esc(pw.note)} See <a href="#/programs">Programs &amp; Tracks</a> and the <a href="https://www.oneccps.org/curriculum-information/" target="_blank" rel="noopener">CCPS Curriculum Information ↗</a> page.</p>
      ${resourceCard(["vdoeMath", "programOfStudies", "ccpsCurriculum"], "Official math resources")}`);
  }

  const deepHtml = (t) => !(t.deepDive && t.deepDive.length) ? "" : `
        <h2>Topic-by-topic breakdown</h2>
        <p class="muted">Every skill below has a plain-English description, a worked example, and the mistake to watch for.</p>
        <div class="deep">${t.deepDive.map((d, i) => `<section class="card deep-card">
          <h3><span class="deep-icon" aria-hidden="true">${esc(d.icon || "")}</span> ${i + 1}. ${esc(d.title)}</h3>
          <p>${esc(d.desc)}</p>
          ${d.rules ? `<ul class="deep-rules">${d.rules.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>` : ""}
          <div class="worked"><div class="worked-q"><b>Example:</b> ${esc(d.example.q)}</div>
            <ol class="worked-steps">${d.example.steps.map((st) => `<li>${esc(st)}</li>`).join("")}</ol>
            <div class="worked-a">Answer: <b>${esc(d.example.a)}</b></div></div>
          <div class="mistake">⚠️ <b>Common mistake:</b> <span class="wrong">${esc(d.mistake.wrong)}</span> <span class="to">→</span> <span class="right">${esc(d.mistake.right)}</span></div>
          ${d.practice && d.practice.length ? `<div class="deep-practice"><b>Practice:</b> ${d.practice.map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`).join(" · ")}</div>` : ""}
        </section>`).join("")}</div>`;

  function viewMathTopic(id) {
    const t = mrTopic(id);
    if (!t) return viewNotFound();
    const i = MR.topics.indexOf(t), prev = MR.topics[i - 1], next = MR.topics[i + 1];
    const lk = MR.links[id] || { from: [], to: [] };
    const chips = (ids) => ids.length ? ids.map((x) => { const o = mrTopic(x); return o ? `<a class="chip" href="#/math/${x}">${o.icon} ${esc(o.title)}</a>` : ""; }).join(" ") : `<span class="muted">Nothing: this is where math begins.</span>`;
    const stage = MR.stages.find((s) => s.id === t.stage);
    const here = Object.entries(MR_HERE).filter(([, tid]) => tid === id).map(([g]) => `Grade ${g}`);
    render(`
      ${crumbs([["Home", "#/"], ["Math Roadmap", "#/math-roadmap"], [t.title]])}
      <article class="topic-page">
        <header class="topic-head">
          <div class="topic-icon" aria-hidden="true">${t.icon}</div>
          <div><h1>${esc(t.title)}</h1>
            <p class="topic-tags"><span class="tag">${esc(t.grades)}</span> <span class="tag">${esc(stage.title)}</span>${here.length ? ` <span class="tag here">📍 ${esc(here.join(" & "))} is here</span>` : ""}</p>
            <p class="muted">${esc(t.tagline)}</p></div>
        </header>
        <p class="lead">${esc(t.summary)}</p>
        <div class="callout"><b>💡 The big idea:</b> ${esc(t.bigIdea)}</div>

        <h2>What students learn</h2>
        <ul class="learn-list">${t.learn.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>

        ${(t.extras || []).map((e) => `<h2>${esc(e.title)}</h2>${e.text ? `<p>${esc(e.text)}</p>` : ""}${e.table ? mrTable(e.table) : ""}`).join("")}
        ${deepHtml(t)}

        <h2>Try a few problems</h2>
        <p class="muted">Think it through, then tap to see the answer and how to get it.</p>
        <div class="try-list">${t.examples.map((ex) => `<details class="try"><summary>${esc(ex.q)}</summary><div class="try-ans"><b>Answer: ${esc(ex.a)}</b><div class="muted">${esc(ex.how)}</div></div></details>`).join("")}</div>

        <h2>Key words</h2>
        <div class="vocab">${t.vocab.map(([w, d, ex]) => `<div class="vcard"><span class="term">${esc(w)}</span><span class="def">${esc(d)}</span><span class="vex"><b>Example:</b> ${esc(ex)}</span></div>`).join("")}</div>

        <h2>Where you'll use it</h2>
        <ul class="use-list">${t.useIn.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>

        <h2>How it connects</h2>
        <div class="connect"><div><div class="muted">Builds on</div>${chips(lk.from)}</div><div class="arrow-big" aria-hidden="true">➜</div><div><div class="muted">This level</div><span class="chip current">${t.icon} ${esc(t.title)}</span></div><div class="arrow-big" aria-hidden="true">➜</div><div><div class="muted">Leads to</div>${chips(lk.to)}</div></div>

        <div class="two-col">
          <section class="card"><h3>✅ Is your child ready?</h3><ul>${t.ready.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></section>
          <section class="card"><h3>👪 Tips for parents</h3><ul>${t.tips.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></section>
        </div>

        <h2>Practice on this site</h2>
        ${t.onSite.length ? `<ul class="onsite">${t.onSite.map((l) => `<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`).join("")}</ul>` : `<p class="muted">This site currently covers Grades 3, 5, and 7, so there is no practice for this level yet. See the levels that lead up to it to make sure the foundation is strong.</p>`}

        <div class="btn-row">
          ${prev ? `<a class="btn secondary" href="#/math/${prev.id}">← ${esc(prev.title)}</a>` : ""}
          <a class="btn secondary" href="#/math-roadmap">🧭 Roadmap</a>
          ${next ? `<a class="btn" href="#/math/${next.id}">${esc(next.title)} →</a>` : ""}
        </div>
      </article>`);
  }

  // ---------- worksheets ----------
  const worksheetKey = (g, id) => `${g}/worksheet/${id}`;

  function viewWorksheetList(g) {
    const defs = WS.defs[g];
    if (!defs) return viewNotFound();
    const sections = WS.groups.map((grp) => {
      const list = defs.filter((d) => d.group === grp.id);
      if (!list.length) return "";
      return `<h2>${esc(grp.title)}</h2><p class="muted">${esc(grp.about)}</p>
        <div class="grid">${list.map((d) => `<a class="card ws-card" href="#/worksheet/${g}/${d.id}">
          <h3>${esc(d.title.replace(/^Riddle: /, "🧩 "))}</h3><p>${esc(d.blurb)}</p>
          <p>${stars(bestFor(worksheetKey(g, d.id)))}</p></a>`).join("")}</div>`;
    }).join("");
    render(`
      ${crumbs([["Home", "#/"], [`Grade ${g}`, `#/grade/${g}`], ["Worksheets & Tests"]])}
      <h1>📝 Grade ${g} Math Worksheets &amp; Tests</h1>
      <p class="muted">Practice sheets in the same style as class worksheets. Each one makes a fresh set of problems, checks your answers, and shows the steps. Press <b>Print</b> to print the sheet (and an answer key for grown-ups).</p>
      ${sections}`);
  }

  function viewWorksheet(g, id, params) {
    const def = (WS.defs[g] || []).find((d) => d.id === id);
    if (!def) return viewNotFound();
    let seed = Number(params.get("s"));
    if (!seed) { seed = Math.floor(Math.random() * 1e9) + 1; history.replaceState(null, "", `#/worksheet/${g}/${id}?s=${seed}`); }
    const sheet = WS.build(def, seed);
    const total = sheet.items.length;
    const key = worksheetKey(g, id);
    const items = sheet.items.map((it, i) => `
      <li class="ws-item" data-i="${i}">
        <div class="ws-q"><span class="ws-n">${it.n}.</span> <span class="eq">${esc(it.q)}</span></div>
        <div class="ws-ans no-print"><label>${it.v ? `${esc(it.v)} =` : "Answer:"}
          <input type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Answer for problem ${it.n}" placeholder="${it.type === "ineq" ? "x > 7" : ""}"></label></div>
        <div class="ws-work print-only"></div>
        <div class="ws-fb no-print" aria-live="polite"></div>
        <details class="ws-steps no-print" hidden><summary>Show the steps</summary><pre>${esc(it.steps.join("\n"))}</pre></details>
        <div class="ws-key">Answer: <b>${esc(it.answerText)}</b></div>
      </li>`).join("");
    const rid = sheet.riddle;
    const riddleBox = rid ? `<section class="riddle">
        <h2 class="riddle-q">${esc(rid.question)}</h2>
        <div class="code-bar" role="group" aria-label="Riddle answer boxes">${rid.cells.map((c, i) => `<div class="code-cell${c.letter ? "" : " space"}" data-i="${i}" data-n="${c.number}"><div class="code-letter">${c.letter ? "" : ""}</div><div class="code-num">${c.number}</div></div>`).join("")}</div>
        <p class="muted riddle-help">Each box shows a solution. When you solve an equation correctly, its letter appears above its number. A diagonal box is a space between words.</p>
        <div class="riddle-done no-print" hidden></div>
      </section>` : "";
    render(`
      <div class="no-print">${crumbs([["Home", "#/"], [`Grade ${g}`, `#/grade/${g}`], ["Worksheets & Tests", `#/worksheets/${g}`], [def.title.replace(/^Riddle: /, "🧩 ")]])}</div>
      <article class="worksheet" id="ws">
        <header class="ws-head">
          <h1>${esc(def.title)}</h1>
          <div class="ws-meta print-only">Name: ____________________ &nbsp;&nbsp; Date: ____________ &nbsp;&nbsp; Score: ______ / ${total}</div>
          <p class="ws-inst">${esc(sheet.instructions)}</p>
          ${rid ? "" : `<p class="muted no-print">Type each answer. Negative answers can use a minus sign (−5).</p>`}
        </header>
        <ol class="ws-items${total > 12 ? " tight" : ""}">${items}</ol>
        ${riddleBox}
        <div class="btn-row no-print">
          <button class="btn" type="button" id="wsCheck">✔ Check my answers</button>
          <button class="btn secondary" type="button" id="wsKey">🔑 Show / hide answer key</button>
          <button class="btn secondary" type="button" id="wsNew">🔄 New worksheet</button>
          <button class="btn secondary" type="button" id="wsPrint">🖨 Print</button>
          <button class="btn secondary" type="button" id="wsPrintKey">🖨 Print with answer key</button>
        </div>
        <div id="wsResult" class="no-print" aria-live="polite"></div>
      </article>`);

    const root = document.getElementById("ws");
    const rows = [...root.querySelectorAll(".ws-item")];
    const inputs = rows.map((r) => r.querySelector("input"));
    inputs.forEach((inp, i) => inp.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); (inputs[i + 1] || document.getElementById("wsCheck")).focus(); } }));

    document.getElementById("wsCheck").addEventListener("click", () => {
      let right = 0, blank = 0;
      rows.forEach((row, i) => {
        const it = sheet.items[i], r = WS.check(it, inputs[i].value), fb = row.querySelector(".ws-fb");
        row.classList.remove("ok", "bad");
        if (r.blank) { blank++; fb.textContent = ""; return; }
        const steps = row.querySelector(".ws-steps");
        if (r.ok) { right++; row.classList.add("ok"); fb.textContent = "✅ Correct!"; steps.hidden = true; }
        else {
          row.classList.add("bad");
          fb.innerHTML = r.invalid ? "❌ Please type a number." : `❌ Not quite. ${r.hint ? `Check: ${esc(r.hint)}` : "Try again, or look at the steps."}`;
          steps.hidden = false;
        }
      });
      if (rid) {
        root.querySelectorAll(".code-cell").forEach((cell) => {
          const c = rid.cells[Number(cell.dataset.i)];
          const idx = sheet.items.findIndex((it) => it.letter === (c.letter || " "));
          const ok = idx >= 0 && rows[idx].classList.contains("ok");
          cell.querySelector(".code-letter").textContent = ok && c.letter ? c.letter : "";
          cell.classList.toggle("solved", ok);
        });
      }
      const pct = Math.round((right / total) * 100);
      const done = rid && root.querySelectorAll(".code-cell.solved").length === rid.cells.length;
      const riddleDone = root.querySelector(".riddle-done");
      if (riddleDone) { riddleDone.hidden = !done; riddleDone.innerHTML = done ? `🎉 <b>You solved the riddle!</b> ${esc(rid.answer)}` : ""; }
      document.getElementById("wsResult").innerHTML = blank === total ? `<p class="muted">Type some answers first, then press Check.</p>` : `
        <div class="card" style="text-align:center"><div class="score-big">${right} / ${total}</div><div style="font-size:1.5rem">${stars(pct)}</div>
        <p>${blank ? `${blank} not answered yet. ` : ""}${pct === 100 ? "Perfect! 🎉" : pct >= 80 ? "Great work! Check the ones that are marked ❌." : "Keep going! Look at the steps for the ones marked ❌ and try again."}</p></div>`;
      if (blank < total) recordScore(key, right, total);
    });
    document.getElementById("wsKey").addEventListener("click", () => root.classList.toggle("show-key"));
    document.getElementById("wsNew").addEventListener("click", () => { location.hash = `#/worksheet/${g}/${id}?s=${Math.floor(Math.random() * 1e9) + 1}`; });
    document.getElementById("wsPrint").addEventListener("click", () => { root.classList.remove("show-key"); window.print(); });
    document.getElementById("wsPrintKey").addEventListener("click", () => { root.classList.add("show-key"); window.print(); });
  }

  function viewNotFound() {
    render(`<h1>Oops! Page not found.</h1><p><a href="#/">Go home</a></p>`);
  }

  // ---------- profiles ----------
  function updateProfileName() { document.getElementById("profileName").textContent = store.current; }
  function openProfiles() {
    const names = Object.keys(store.profiles);
    const back = document.createElement("div");
    back.className = "modal-back";
    back.innerHTML = `<div class="modal" role="dialog" aria-modal="true" aria-label="Choose learner">
      <h2 style="margin-top:0">Who's learning?</h2>
      <ul class="profile-list">${names.map((n) => `<li><button class="chip" type="button" data-name="${esc(n)}">${n === store.current ? "✅" : "👤"} ${esc(n)}</button></li>`).join("")}</ul>
      <form id="newProfile"><label>Add a learner<br><input name="n" maxlength="24" placeholder="Name" autocomplete="off"></label>
      <div class="btn-row"><button class="btn" type="submit">Add</button><button class="btn secondary" type="button" id="closeModal">Close</button></div></form>
    </div>`;
    document.body.appendChild(back);
    const close = () => { back.remove(); route(); };
    back.addEventListener("click", (e) => { if (e.target === back) close(); });
    back.querySelector("#closeModal").addEventListener("click", close);
    back.querySelectorAll("[data-name]").forEach((b) => b.addEventListener("click", () => {
      store.current = b.dataset.name; saveStore(); updateProfileName(); close();
    }));
    back.querySelector("#newProfile").addEventListener("submit", (e) => {
      e.preventDefault();
      const n = e.target.n.value.trim();
      if (!n) return;
      if (!store.profiles[n]) store.profiles[n] = { scores: {} };
      store.current = n; saveStore(); updateProfileName(); close();
    });
    back.querySelector("input").focus();
  }
  document.getElementById("profileBtn").addEventListener("click", openProfiles);

  // Delegated handlers for flip cards and read-aloud buttons.
  app.addEventListener("click", (e) => {
    const card = e.target.closest(".vcard");
    if (card) card.classList.toggle("open");
    const fc = e.target.closest('[data-action="flashcards"]');
    if (fc) {
      const v = app.querySelector(".vocab");
      const on = !v.classList.contains("cards");
      v.classList.toggle("cards", on);
      fc.closest(".vocab-help").classList.toggle("cards", on);
      v.querySelectorAll(".vcard").forEach((c) => c.classList.remove("open"));
    }
    const sp = e.target.closest("[data-speak]");
    if (sp) speak(sp.dataset.speak);
  });

  // ---------- router ----------
  function route() {
    const [pathStr, query] = location.hash.replace(/^#\/?/, "").split("?");
    const params = new URLSearchParams(query || "");
    const path = (pathStr || "").split("/").filter(Boolean);
    const [view, a, b, c, d] = path;
    if (!view) return viewHome();
    if (view === "grade" && a && b) return viewSubject(Number(a), b);
    if (view === "grade" && a) return viewGrade(Number(a));
    if (view === "learn") return viewLearn(Number(a), b, c);
    if (view === "quiz") return viewQuiz(Number(a), b, c, d);
    if (view === "progress") return viewProgress();
    if (view === "vocab") return viewVocab(Number(a));
    if (view === "programs") return viewPrograms();
    if (view === "math-roadmap") return viewMathRoadmap();
    if (view === "math") return viewMathTopic(a);
    if (view === "worksheets") return viewWorksheetList(Number(a));
    if (view === "worksheet") return viewWorksheet(Number(a), b, params);
    viewNotFound();
  }
  window.addEventListener("hashchange", route);
  updateProfileName();
  route();
})();
