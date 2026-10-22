/* Little Learner: hash-routed single-page app. Curriculum data lives in data/gradeN.js. */
(function () {
  "use strict";

  const C = window.CURRICULUM || {};
  const G = window.GENERATORS || {};
  const GRADES = Object.keys(C).map(Number).sort((a, b) => a - b);
  const QUIZ_LENGTH = 10;
  const app = document.getElementById("app");

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
        <p>${d.subjects.map((s) => s.icon + " " + esc(s.name)).join(" · ")}</p>
      </a>`;
    }).join("");
    render(`
      <section class="hero">
        <h1>Hi, ${esc(store.current)}! What are we learning today?</h1>
        <p>Pick a grade to see every unit in Math, English, Science, and History &amp; Social Science, based on the Virginia Standards of Learning (SOL). Read the study guide, flip the vocabulary cards, then take the quiz to earn stars.</p>
      </section>
      ${GRADES.map(focusBanner).join("")}
      <div class="grid">${cards}</div>
      <h2>How it works</h2>
      <div class="grid">
        <div class="card"><div class="big">📖</div><h3>Learn</h3><p>Each unit has key ideas, examples, and vocabulary flashcards.</p></div>
        <div class="card"><div class="big">✏️</div><h3>Quiz</h3><p>Up to 10 questions with explanations. Many math quizzes generate fresh problems every time.</p></div>
        <div class="card"><div class="big">⭐</div><h3>Earn stars</h3><p>Score 90% or better for 3 stars. Track progress for each child.</p></div>
      </div>`);
  }

  function viewGrade(g) {
    const d = C[g];
    if (!d) return viewNotFound();
    const cards = d.subjects.map((s) => {
      const keys = s.units.map((u) => `${g}/${s.id}/${u.id}`);
      const done = keys.filter((k) => (bestFor(k) || 0) >= 70).length;
      return `<a class="card subject subject-${s.id}" href="#/grade/${g}/${s.id}">
        <div class="big">${s.icon}</div>
        <h3>${esc(s.name)}</h3>
        <p>${s.units.length} units · ${done} mastered</p>
        <p><span class="tag">${esc(s.standards)}</span></p>
      </a>`;
    }).join("");
    render(`
      ${crumbs([["Home", "#/"], [`Grade ${g}`]])}
      <h1>Grade ${g}: ${esc(d.title)}</h1>
      <p class="muted">${esc(d.intro)}</p>
      ${focusBanner(g)}
      <div class="grid">${cards}</div>
      <div class="btn-row"><a class="btn" href="#/quiz/${g}/all/all">🎯 Mixed review: all subjects</a></div>`);
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
      <h1>${s.icon} Grade ${g} ${esc(s.name)}</h1>
      <p class="muted">${esc(s.about || "")} <span class="tag">${esc(s.standards)}</span></p>
      <ul class="unit-list">${rows}</ul>
      <div class="btn-row"><a class="btn" href="#/quiz/${g}/${sid}/all">${esc(s.reviewLabel || `🎯 Mixed review: all ${s.name} units`)}</a></div>`);
  }

  function viewLearn(g, sid, uid) {
    const s = findSubject(g, sid);
    const u = findUnit(g, sid, uid);
    if (!u) return viewNotFound();
    const idx = s.units.indexOf(u);
    const next = s.units[idx + 1];
    const prev = s.units[idx - 1];
    const vocab = (u.vocab || []).map(([t, def]) =>
      `<button class="flip" type="button"><div class="term">${esc(t)}</div><div class="def">${esc(def)}</div></button>`).join("");
    const readText = [u.title, u.summary].concat(u.points || []).join(". ");
    render(`
      ${crumbs([["Home", "#/"], [`Grade ${g}`, `#/grade/${g}`], [s.name, `#/grade/${g}/${sid}`], [u.title]])}
      <article class="learn">
        <h1>${esc(u.title)}</h1>
        <p>${u.sol ? `<span class="tag">${esc(u.sol)}</span>` : ""}<span class="muted">${esc(u.summary)}</span> ${speakBtn(readText)}</p>
        <h2>Key ideas</h2>
        <ul>${(u.points || []).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        ${u.example ? `<h2>Example</h2><div class="example">${esc(u.example)}</div>` : ""}
        ${vocab ? `<h2>Vocabulary <span class="muted" style="font-size:.85rem;font-weight:400">(tap a card to flip it)</span></h2><div class="vocab">${vocab}</div>` : ""}
        <div class="btn-row">
          <a class="btn" href="#/quiz/${g}/${sid}/${u.id}">✏️ Take the quiz</a>
          ${prev ? `<a class="btn secondary" href="#/learn/${g}/${sid}/${prev.id}">← ${esc(prev.title)}</a>` : ""}
          ${next ? `<a class="btn secondary" href="#/learn/${g}/${sid}/${next.id}">${esc(next.title)} →</a>` : ""}
        </div>
      </article>`);
  }

  // Normalizes a question tuple [q, choices, answerIndex, explain] into a shuffled object.
  function prepare(tuple, source) {
    const [q, choices, ans, explain] = tuple;
    const order = shuffle(choices.map((_, i) => i));
    return {
      q, explain: explain || "", source,
      choices: order.map((i) => choices[i]),
      answer: order.indexOf(ans),
    };
  }

  function unitPool(u, generatedCount) {
    const pool = (u.questions || []).map((t) => prepare(t, u.title));
    const gens = u.gen ? [].concat(u.gen) : [];
    for (let i = 0; i < generatedCount && gens.length; i++) {
      const fn = G[gens[i % gens.length]];
      if (fn) pool.push(prepare(fn(), u.title));
    }
    return pool;
  }

  function buildQuiz(g, sid, uid) {
    if (sid === "all") {
      const units = C[g].subjects.flatMap((s) => s.units);
      return shuffle(units).slice(0, 20).map((u) => shuffle(unitPool(u, 1))[0]).filter(Boolean);
    }
    const s = findSubject(g, sid);
    if (uid === "all") {
      const size = s.reviewSize || 15;
      const per = Math.ceil(size / s.units.length);
      const picks = shuffle(s.units).flatMap((u) => shuffle(unitPool(u, per)).slice(0, per));
      return shuffle(picks).slice(0, size);
    }
    const u = findUnit(g, sid, uid);
    // Units with generators keep at least 3 freshly generated problems per quiz.
    const written = shuffle(unitPool(u, 0));
    if (!u.gen) return written.slice(0, QUIZ_LENGTH);
    const keep = written.slice(0, QUIZ_LENGTH - 3);
    return shuffle(keep.concat(unitPool({ gen: u.gen }, QUIZ_LENGTH - keep.length)));
  }

  function viewQuiz(g, sid, uid) {
    if (!C[g]) return viewNotFound();
    if (sid !== "all" && !findSubject(g, sid)) return viewNotFound();
    if (sid !== "all" && uid !== "all" && !findUnit(g, sid, uid)) return viewNotFound();

    const subj = sid === "all" ? null : findSubject(g, sid);
    const unit = subj && uid !== "all" ? findUnit(g, sid, uid) : null;
    const title = unit ? unit.title : subj ? `${subj.name}: Mixed Review` : `Grade ${g}: Mixed Review`;
    const key = `${g}/${sid}/${uid}`;
    const back = unit ? `#/learn/${g}/${sid}/${uid}` : subj ? `#/grade/${g}/${sid}` : `#/grade/${g}`;
    const qs = buildQuiz(g, sid, uid);
    let i = 0, correct = 0;
    const missed = [];

    function showQuestion() {
      const q = qs[i];
      render(`
        ${crumbs([["Home", "#/"], [`Grade ${g}`, `#/grade/${g}`]].concat(subj ? [[subj.name, `#/grade/${g}/${sid}`]] : []).concat([["Quiz"]]))}
        <section class="quiz">
          <h1>✏️ ${esc(title)}</h1>
          <div class="muted">Question ${i + 1} of ${qs.length} · Score: ${correct}</div>
          <div class="progressbar"><div style="width:${(i / qs.length) * 100}%"></div></div>
          <p class="question">${esc(q.q)}</p>
          <p>${speakBtn(q.q + ". " + q.choices.map((c, k) => "Choice " + "ABCD"[k] + ": " + c).join(". "))}</p>
          <div class="choices">${q.choices.map((c, k) => `<button class="choice" type="button" data-k="${k}"><b>${"ABCDEF"[k]}.</b> ${esc(c)}</button>`).join("")}</div>
          <div id="fb"></div>
        </section>`);
      app.querySelectorAll(".choice").forEach((b) => b.addEventListener("click", () => answer(Number(b.dataset.k))));
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
            <a class="btn" href="#/quiz/${g}/${sid}/${uid}?r=${Date.now()}">🔁 Try again (new questions)</a>
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
    }))).join("");
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
    const flip = e.target.closest(".flip");
    if (flip) flip.classList.toggle("open");
    const sp = e.target.closest("[data-speak]");
    if (sp) speak(sp.dataset.speak);
  });

  // ---------- router ----------
  function route() {
    const path = (location.hash.replace(/^#\/?/, "").split("?")[0] || "").split("/").filter(Boolean);
    const [view, a, b, c] = path;
    if (!view) return viewHome();
    if (view === "grade" && a && b) return viewSubject(Number(a), b);
    if (view === "grade" && a) return viewGrade(Number(a));
    if (view === "learn") return viewLearn(Number(a), b, c);
    if (view === "quiz") return viewQuiz(Number(a), b, c);
    if (view === "progress") return viewProgress();
    viewNotFound();
  }
  window.addEventListener("hashchange", route);
  updateProfileName();
  route();
})();
