/* Bonus question banks.
   Each unit (key "grade/subject/unit") can have a bank of extra questions that the app splits into
   "Bonus" quizzes of 10, plus an auto-built Vocabulary & Examples quiz.

   Data files add questions in a compact text format, one per line:
       question | right answer | wrong | wrong | wrong | => short explanation
   (the right answer is always listed first; the app shuffles the choices; {nl} makes a line break),
   or with template functions that build math problems from a seeded random generator:
       BONUS.tpl("7/math/slope", (r, T) => [...], 12);
   Banks are de-duplicated and shuffled the same way every time, so a given Bonus quiz always has the same questions. */
window.BONUS = (function () {
  "use strict";
  const lines = {}, tpls = {}, cache = {};

  const hash = (s) => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };
  const rngFrom = (seed) => {
    let a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };

  // Helpers for template functions.
  const T = {
    ri: (r, lo, hi) => lo + Math.floor(r() * (hi - lo + 1)),
    pick: (r, arr) => arr[Math.floor(r() * arr.length)],
    shuf: (r, arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; },
    // Four unique choices, the right answer first. `fill(r)` makes extra wrong answers if needed.
    mc: (r, right, wrongs, fill) => {
      const out = [String(right)];
      wrongs.forEach((w) => { const s = String(w); if (!out.includes(s) && out.length < 4) out.push(s); });
      for (let t = 0; fill && out.length < 4 && t < 60; t++) { const s = String(fill(r)); if (!out.includes(s)) out.push(s); }
      return out;
    },
    minus: (x) => String(x).replace("-", "−"),
  };

  function parseLine(raw) {
    const s = String(raw).trim();
    if (!s || s.startsWith("//")) return null;
    const parts = s.split("|").map((p) => p.trim().replace(/\{nl\}/g, "\n"));
    let expl = "";
    if (parts.length > 2 && parts[parts.length - 1].startsWith("=>")) expl = parts.pop().slice(2).trim();
    const q = parts.shift();
    if (!q || parts.length < 2) return null;
    return [q, parts, 0, expl];
  }

  function add(key, text) { (lines[key] = lines[key] || []).push(...String(text).split("\n")); }
  function tpl(key, fn, n) { (tpls[key] = tpls[key] || []).push([fn, n || 10]); }

  // The unit's bank: parsed lines + template output, de-duplicated and shuffled deterministically.
  function bank(key) {
    if (cache[key]) return cache[key];
    const out = [], seen = new Set();
    const push = (t) => { const k = t[0] + "=>" + t[1][0]; if (!seen.has(k)) { seen.add(k); out.push(t); return true; } return false; };
    (lines[key] || []).forEach((l) => { const t = parseLine(l); if (t) push(t); });
    (tpls[key] || []).forEach(([fn, n], ti) => {
      let made = 0;
      for (let a = 0; a < n * 5 && made < n; a++) {
        try {
          let t = fn(rngFrom(hash(`${key}#${ti}#${a}`)), T);
          if (typeof t === "string") t = parseLine(t);
          if (t && t[1].length >= 2 && push(t)) made++;
        } catch (e) { /* skip a bad draw */ }
      }
    });
    const r = rngFrom(hash(key));
    for (let i = out.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [out[i], out[j]] = [out[j], out[i]]; }
    return (cache[key] = out);
  }

  return { add, tpl, bank, parseLine, hash, rngFrom, T, has: (k) => !!(lines[k] || tpls[k]), keys: () => Object.keys(Object.assign({}, lines, tpls)) };
})();
