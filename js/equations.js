/* Equation engine: builds one-step and two-step equations with worked "balancing" steps and a
   substitution check. Used by the quiz generators below and by the printable worksheets
   (js/worksheets.js). Every function takes an rng() so worksheets can be seeded. */
(function () {
  "use strict";
  const MINUS = "−";
  const ri = (rng, lo, hi) => lo + Math.floor(rng() * (hi - lo + 1));
  const pk = (rng, arr) => arr[Math.floor(rng() * arr.length)];
  const shuf = (rng, arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const nz = (rng, lo, hi) => { let v = 0; while (v === 0) v = ri(rng, lo, hi); return v; };
  const n = (x) => String(Math.round(x * 100) / 100).replace("-", MINUS);   // display with a true minus sign
  const paren = (x) => (x < 0 ? `(${n(x)})` : n(x));
  const VARS = ["x", "y", "n", "m", "p", "q", "r", "s", "t", "a", "b", "c", "d", "e", "g", "h", "k", "w", "z"];
  const escRx = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // ---- evaluating a side of an equation with a value plugged in ----
  function evalNum(str) {
    const s = str.replace(/−/g, "-").replace(/×/g, "*").replace(/÷/g, "/");
    if (!/^[0-9+\-*/().\s]+$/.test(s)) return NaN;
    try { return Function(`"use strict"; return (${s});`)(); } catch (e) { return NaN; }
  }
  function plug(side, v, val, display) {
    const rx = new RegExp(`(\\d)?${escRx(v)}`, "g");
    const v2 = display ? paren(val) : val < 0 ? `(${val})` : String(val);
    return side.replace(rx, (m, d) => (d ? `${d}${display ? " × " : "*"}${v2}` : v2));
  }
  // "4 × 3 + 2 = 14 ✓" style text for checking a proposed solution.
  function checkText(eq, val) {
    const [l, r] = eq.sides;
    const varSide = l.includes(eq.v) ? l : r, other = varSide === l ? r : l;
    const lv = evalNum(plug(varSide, eq.v, val, false)), rv = evalNum(other);
    const shown = `${plug(varSide, eq.v, val, true)} = ${n(lv)}`;
    return Math.abs(lv - rv) < 1e-9 ? `${shown} ✓` : `${shown}, but the other side is ${n(rv)} ✗`;
  }
  const verify = (eq) => { const [l, r] = eq.sides; const varSide = l.includes(eq.v) ? l : r; const other = varSide === l ? r : l; return Math.abs(evalNum(plug(varSide, eq.v, eq.answer)) - evalNum(other)) < 1e-9; };

  // ---- building equations ----
  // kind: add | sub | int | mul | div | two.  level 1 (easiest) to 3.  v: variable name.
  function makeEq(rng, kind, level, v) {
    v = v || pk(rng, VARS);
    const L = level || 1;
    const varRight = rng() < 0.35;               // sometimes write it as  72 = p + 78
    const out = { kind, v, level: L, p: {} };
    const finish = (expr, rhs, steps, explain) => {
      out.sides = varRight ? [String(rhs), expr] : [expr, String(rhs)];
      out.text = `${out.sides[0]} = ${out.sides[1]}`;
      out.steps = [out.text].concat(steps.map((s) => s.replace(/\{ANS\}/g, varRight ? `${n(out.answer)} = ${v}` : `${v} = ${n(out.answer)}`)));
      out.explain = explain;
      return out;
    };
    if (kind === "add") {
      const [lo, hi] = L === 1 ? [1, 15] : L === 2 ? [5, 90] : [20, 500];
      const x = ri(rng, lo, hi), a = ri(rng, lo, hi), b = x + a;
      Object.assign(out.p, { a, b }); out.answer = x;
      const expr = rng() < 0.5 ? `${v} + ${a}` : `${a} + ${v}`;
      return finish(expr, b, [`${MINUS}${a}   ${MINUS}${a}`, "{ANS}"], `Undo +${a} by subtracting ${a} from both sides: ${n(b)} ${MINUS} ${a} = ${x}.`);
    }
    if (kind === "sub") {
      const [lo, hi] = L === 1 ? [1, 15] : L === 2 ? [5, 70] : [20, 400];
      const b = ri(rng, lo, hi), a = ri(rng, lo, hi), x = a + b;
      Object.assign(out.p, { a, b }); out.answer = x;
      return finish(`${v} ${MINUS} ${a}`, b, [`+${a}   +${a}`, "{ANS}"], `Undo ${MINUS}${a} by adding ${a} to both sides: ${b} + ${a} = ${x}.`);
    }
    if (kind === "int") {
      const variant = L <= 2 ? ri(rng, 1, 2) : ri(rng, 1, 5);
      let x = ri(rng, -12, 12), a = ri(rng, 2, 12), expr, rhs, steps, explain;
      if (variant === 1) { rhs = x + a; expr = `${v} + ${a}`; steps = [`${MINUS}${a}   ${MINUS}${a}`, "{ANS}"]; explain = `Subtract ${a} from both sides: ${n(rhs)} ${MINUS} ${a} = ${n(x)}.`; }
      else if (variant === 2) { rhs = x - a; expr = `${v} ${MINUS} ${a}`; steps = [`+${a}   +${a}`, "{ANS}"]; explain = `Add ${a} to both sides: ${n(rhs)} + ${a} = ${n(x)}.`; }
      else if (variant === 3) { rhs = x - a; expr = `${v} + (${MINUS}${a})`; steps = [`+${a}   +${a}`, "{ANS}"]; explain = `Adding ${MINUS}${a} is the same as subtracting ${a}, so add ${a} to both sides: ${n(rhs)} + ${a} = ${n(x)}.`; }
      else if (variant === 4) { rhs = x - a; expr = `${MINUS}${a} + ${v}`; steps = [`+${a}   +${a}`, "{ANS}"]; explain = `Add ${a} to both sides: ${n(rhs)} + ${a} = ${n(x)}.`; }
      else { rhs = x + a; expr = `${v} ${MINUS} (${MINUS}${a})`; steps = [`${v} + ${a} = ${n(rhs)}`, `${MINUS}${a}   ${MINUS}${a}`, "{ANS}"]; explain = `Subtracting ${MINUS}${a} is the same as adding ${a}. Then subtract ${a} from both sides: ${n(rhs)} ${MINUS} ${a} = ${n(x)}.`; }
      Object.assign(out.p, { a, b: rhs, variant }); out.answer = x;
      return finish(expr, n(rhs), steps, explain);
    }
    if (kind === "mul") {
      const neg = L >= 2 && rng() < 0.5;
      const a = neg ? -ri(rng, 2, 9) : ri(rng, 2, L === 1 ? 9 : 12);
      const x = L === 1 ? ri(rng, 1, 12) : nz(rng, -12, 12), b = a * x;
      Object.assign(out.p, { a, b }); out.answer = x;
      return finish(`${n(a)}${v}`, n(b), [`÷${paren(a)}   ÷${paren(a)}`, "{ANS}"], `Undo multiplying by ${n(a)} by dividing both sides by ${n(a)}: ${n(b)} ÷ ${paren(a)} = ${n(x)}.`);
    }
    if (kind === "div") {
      const a = L >= 3 && rng() < 0.4 ? -ri(rng, 2, 9) : ri(rng, 2, 9);
      const b = L === 1 ? ri(rng, 1, 12) : nz(rng, -12, 12), x = a * b;
      Object.assign(out.p, { a, b }); out.answer = x;
      return finish(`${v} ÷ ${paren(a)}`, n(b), [`×${paren(a)}   ×${paren(a)}`, "{ANS}"], `Undo dividing by ${n(a)} by multiplying both sides by ${n(a)}: ${n(b)} × ${paren(a)} = ${n(x)}.`);
    }
    // two-step:  a·v ± b = c
    const a = L === 3 && rng() < 0.4 ? -ri(rng, 2, 6) : ri(rng, 2, L === 1 ? 6 : 9);
    const x = L === 1 ? ri(rng, 1, 9) : nz(rng, -9, 12);
    const b = L === 1 ? ri(rng, 1, 12) : nz(rng, -15, 15), c = a * x + b;
    Object.assign(out.p, { a, b, c }); out.answer = x;
    const expr = `${n(a)}${v} ${b >= 0 ? "+" : MINUS} ${Math.abs(b)}`;
    const undo = b >= 0 ? `${MINUS}${b}   ${MINUS}${b}` : `+${-b}   +${-b}`;
    return finish(expr, n(c), [undo, `${n(a)}${v} = ${n(c - b)}`, `÷${paren(a)}   ÷${paren(a)}`, "{ANS}"],
      `First undo ${b >= 0 ? "+" : MINUS}${Math.abs(b)}: ${n(a)}${v} = ${n(c - b)}. Then divide both sides by ${n(a)}: ${n(x)}.`);
  }

  // Plausible wrong answers for multiple choice (the usual mistakes).
  function wrongAnswers(eq, rng) {
    const { a, b, c } = eq.p, x = eq.answer, w = [];
    if (eq.kind === "add") w.push(b + a, a - b, b - a === x ? x + 1 : -x);
    else if (eq.kind === "sub") w.push(b - a, -x, a - b);
    else if (eq.kind === "int") w.push(-x, b + a, b - a, x + 2 * a);
    else if (eq.kind === "mul") w.push(b - a, b + a, -x, b * a);
    else if (eq.kind === "div") w.push(b - a, b + a, -x, a - b);
    else { w.push((c - b) % a === 0 ? (c + b) / a : c - b, c - b, -x, x + 1); }
    const out = [];
    [...w, x + 1, x - 1, x + 10, x - 10, -x + 2].forEach((v) => { if (v !== x && !out.includes(v) && out.length < 3) out.push(v); });
    return shuf(rng, out);
  }
  const mc = (eq, rng) => [`Solve: ${eq.text}`, [`${eq.v} = ${n(eq.answer)}`].concat(wrongAnswers(eq, rng).map((v) => `${eq.v} = ${n(v)}`)), 0, `${eq.explain} Check: ${checkText(eq, eq.answer)}`];

  // ---- quiz generators (use Math.random) ----
  const R = Math.random;
  const G = {
    eqAddSub7() { return mc(makeEq(R, pk(R, ["add", "sub"]), 2), R); },
    eqInt7() { return mc(makeEq(R, "int", pk(R, [2, 3])), R); },
    eqMulDiv7() { return mc(makeEq(R, pk(R, ["mul", "div"]), pk(R, [1, 2])), R); },
    eqMistake7() {
      const kind = pk(R, ["add", "sub", "mul", "div"]), eq = makeEq(R, kind, 2), { a, b } = eq.p;
      const wrong = kind === "add" ? b + a : kind === "sub" ? b - a : kind === "mul" ? b - a : b + a;
      const right = {
        add: `The student added ${a} to both sides instead of subtracting ${a}.`,
        sub: `The student subtracted ${a} from both sides instead of adding ${a}.`,
        mul: `The student subtracted ${n(a)} instead of dividing both sides by ${n(a)}.`,
        div: `The student added ${n(a)} instead of multiplying both sides by ${n(a)}.`,
      }[kind];
      const pool = shuf(R, [
        "The student did the operation on only one side of the equation.",
        "The student used the right operation but made an arithmetic mistake.",
        "The student multiplied when the student should have divided.",
        "The student wrote the variable on the wrong side.",
        "The student checked the answer and it was correct.",
      ]);
      return [`A student solved ${eq.text} and got ${eq.v} = ${n(wrong)}. What did the student do wrong?`, [right].concat(pool.slice(0, 3)), 0,
        `${eq.explain} Check the student's answer: ${checkText(eq, wrong)}`];
    },
    eqWords7() {
      const name = pk(R, ["Maya", "Jordan", "Sam", "Priya", "Leo", "Ava", "Marcus"]);
      const thing = pk(R, ["stickers", "baseball cards", "marbles", "books", "coins", "pencils"]);
      const kind = pk(R, ["add", "sub", "mul", "div"]), v = "n";
      let story, eqs, ask, x, a = ri(R, 3, 12), b;
      if (kind === "add") { x = ri(R, 8, 40); b = x + a; story = `${name} had some ${thing}. After finding ${a} more, ${name} had ${b}.`; eqs = [`${v} + ${a} = ${b}`, `${v} ${MINUS} ${a} = ${b}`, `${a}${v} = ${b}`, `${v} ÷ ${a} = ${b}`]; ask = `How many ${thing} did ${name} start with?`; }
      else if (kind === "sub") { b = ri(R, 8, 40); x = a + b; story = `${name} had some ${thing}. After giving away ${a}, ${name} had ${b} left.`; eqs = [`${v} ${MINUS} ${a} = ${b}`, `${v} + ${a} = ${b}`, `${a}${v} = ${b}`, `${v} ÷ ${a} = ${b}`]; ask = `How many ${thing} did ${name} start with?`; }
      else if (kind === "mul") { a = ri(R, 2, 9); x = ri(R, 3, 12); b = a * x; story = `Each pack has ${a} ${thing}. ${name} has ${b} ${thing} in all.`; eqs = [`${a}${v} = ${b}`, `${v} + ${a} = ${b}`, `${v} ${MINUS} ${a} = ${b}`, `${v} ÷ ${a} = ${b}`]; ask = `How many packs does ${name} have?`; }
      else { a = ri(R, 2, 8); b = ri(R, 3, 12); x = a * b; story = `${name} shared some ${thing} equally among ${a} friends. Each friend got ${b}.`; eqs = [`${v} ÷ ${a} = ${b}`, `${v} + ${a} = ${b}`, `${a}${v} = ${b}`, `${v} ${MINUS} ${a} = ${b}`]; ask = `How many ${thing} did ${name} start with?`; }
      const how = { add: "adds", sub: "subtracts", mul: "multiplies", div: "divides" }[kind];
      if (R() < 0.5) return [`${story}\nWhich equation fits the story? (Let n be the unknown number.)`, eqs, 0, `The unknown is combined with ${a} by ${how === "adds" ? "adding" : how === "subtracts" ? "subtracting" : how === "multiplies" ? "multiplying" : "dividing"}, so the equation is ${eqs[0]}.`];
      const wr = [x + a, Math.abs(b - a) === x ? x + 2 : Math.abs(b - a), b + a === x ? x + 3 : b + a, x + 1].filter((t, i, arr) => t !== x && arr.indexOf(t) === i).slice(0, 3);
      return [`${story}\n${ask}`, [String(x)].concat(wr.map(String)), 0, `Write the equation ${eqs[0]}, then solve it: n = ${x}.`];
    },
  };
  Object.assign(window.GENERATORS || (window.GENERATORS = {}), G);

  window.EQ = { MINUS, ri, pk, shuf, nz, n, paren, makeEq, checkText, verify, evalNum, wrongAnswers, VARS };
})();
