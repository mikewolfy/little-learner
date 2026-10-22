/* Printable / on-screen math worksheets and tests. Each worksheet is built from a seed, so the
   same link always shows the same problems (and the printed answer key matches).
   build(def, seed) -> { title, instructions, items[], riddle? }
   item: { n, q, v, answer, answerText, type: "num" | "ineq", steps[], eq? } */
(function () {
  "use strict";
  const EQ = window.EQ;
  const { ri, pk, shuf, nz, n, paren, MINUS } = EQ;

  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  const RIDDLES = [
    ["What is smarter than a talking bird?", "A SPELLING BEE"],
    ["What do you call a bear with no teeth?", "A GUMMY BEAR"],
    ["What has hands but can't clap?", "A CLOCK"],
    ["What gets wetter the more it dries?", "A TOWEL"],
    ["What has a neck but no head?", "A BOTTLE"],
    ["What building has the most stories?", "A LIBRARY"],
    ["What can you catch but not throw?", "A COLD"],
    ["What has keys but can't open locks?", "A PIANO"],
    ["What do you call cheese that isn't yours?", "NACHO CHEESE"],
    ["Where do fish keep their money?", "IN A RIVER BANK"],
    ["What do you call a sleeping dinosaur?", "A DINO SNORE"],
    ["What do you get when you cross a snowman and a vampire?", "FROSTBITE"],
    ["What kind of room has no doors?", "A MUSHROOM"],
    ["What kind of tree fits in your hand?", "A PALM"],
  ];

  // ---- other item types (numeric answers unless noted) ----
  const evalNum = EQ.evalNum;
  const fmtAns = (v) => String(Math.round(v * 100) / 100);

  function intOpsItem(rng, level) {
    const op = pk(rng, ["+", "−", "×", "÷"]);
    const lim = level === 1 ? 9 : 15;
    let a = ri(rng, -lim, lim), b = nz(rng, -lim, lim), q, ans;
    if (level === 1) { a = Math.abs(a) + 1; if (op === "+" || op === "−") b = ri(rng, -9, 9) || 4; else b = nz(rng, 2, 9) * (rng() < 0.5 ? -1 : 1); }
    if (op === "÷") { ans = ri(rng, -12, 12) || 3; a = ans * b; q = `${n(a)} ÷ ${paren(b)}`; }
    else {
      q = `${n(a)} ${op} ${paren(b)}`;
      ans = op === "+" ? a + b : op === "−" ? a - b : a * b;
    }
    const how = { "+": "Same signs: add and keep the sign. Different signs: subtract and keep the sign of the larger absolute value.", "−": "Subtracting is adding the opposite.", "×": "Same signs give a positive; different signs give a negative.", "÷": "Same signs give a positive; different signs give a negative." }[op];
    return { q: `${q} = ?`, answer: ans, steps: [`${q} = ${n(ans)}`, how], type: "num" };
  }
  function orderOpsItem(rng, level) {
    const a = ri(rng, 2, 9), b = ri(rng, 2, 9), c = ri(rng, 2, 6), d = ri(rng, 1, 9);
    const sa = level === 2 ? nz(rng, -9, 9) : a;
    const forms = level === 1
      ? [[`${a} + ${b} × ${c}`, "Multiply first."], [`(${a} + ${b}) × ${c}`, "Parentheses first."], [`${a} × ${b} ${MINUS} ${c}`, "Multiply first, then subtract."], [`${a * c} ÷ ${c} + ${d}`, "Divide first, then add."]]
      : [[`${n(sa)} + ${b} × ${paren(-c)}`, "Multiply first, then add."], [`(${n(sa)} ${MINUS} ${b}) × ${c}`, "Parentheses first, then multiply."], [`${a}² ${MINUS} ${b} × ${c}`, "Exponent, then multiply, then subtract."], [`${n(sa)} × ${paren(-c)} + ${d}`, "Multiply first, then add."], [`${a * c} ÷ ${paren(-c)} + ${b}`, "Divide first, then add."]];
    const [expr, tip] = pk(rng, forms);
    const ans = evalNum(expr.replace(/(\d)²/g, "$1*$1"));
    return { q: `${expr} = ?`, answer: ans, steps: [`${expr} = ${n(ans)}`, `${tip} (Parentheses, Exponents, Multiply/Divide, Add/Subtract.)`], type: "num" };
  }
  function percentItem(rng) {
    const p = pk(rng, [5, 10, 15, 20, 25, 30, 40, 50, 75]), base = pk(rng, [20, 40, 60, 80, 120, 160, 200, 240]);
    const part = (p / 100) * base, t = ri(rng, 0, 2);
    if (t === 0) return { q: `What is ${p}% of ${base}?`, answer: part, steps: [`${p}% = ${p / 100}`, `${p / 100} × ${base} = ${fmtAns(part)}`], type: "num" };
    if (t === 1) return { q: `A $${base} jacket is ${p}% off. What is the sale price?`, answer: base - part, steps: [`Discount: ${p / 100} × ${base} = $${fmtAns(part)}`, `Sale price: ${base} ${MINUS} ${fmtAns(part)} = $${fmtAns(base - part)}`], type: "num", unit: "$" };
    return { q: `Dinner costs $${base}. You leave a ${p}% tip. How much is the tip?`, answer: part, steps: [`${p}% of ${base} = ${p / 100} × ${base} = $${fmtAns(part)}`], type: "num", unit: "$" };
  }
  function proportionItem(rng) {
    const k = ri(rng, 2, 8);
    if (rng() < 0.5) { const a = ri(rng, 2, 9), b = ri(rng, a + 1, 12), c = b * k; return { q: `${a}/${b} = x/${c}`, v: "x", answer: a * k, steps: [`${c} ÷ ${b} = ${k}, so multiply the top by ${k}.`, `x = ${a} × ${k} = ${a * k}`], type: "num" }; }
    const x0 = ri(rng, 2, 12), b = ri(rng, 2, 9);
    return { q: `x/${b} = ${x0 * k}/${b * k}`, v: "x", answer: x0, steps: [`${b * k} ÷ ${b} = ${k}`, `${x0 * k} ÷ ${k} = ${x0}, so x = ${x0}`], type: "num" };
  }
  function ineqItem(rng, level) {
    const v = pk(rng, ["x", "y", "n", "m", "t"]), op = pk(rng, [">", "<", "≥", "≤"]);
    const flip = { ">": "<", "<": ">", "≥": "≤", "≤": "≥" };
    const kind = level === 1 ? pk(rng, ["add", "sub", "mul"]) : pk(rng, ["add", "sub", "mul", "negmul", "div"]);
    let q, ans, ansOp = op, steps;
    const a = ri(rng, 2, 12);
    if (kind === "add") { const x = ri(rng, -5, 20); q = `${v} + ${a} ${op} ${n(x + a)}`; ans = x; steps = [`Subtract ${a} from both sides: ${v} ${op} ${n(x)}`]; }
    else if (kind === "sub") { const x = ri(rng, 1, 25); q = `${v} ${MINUS} ${a} ${op} ${n(x - a)}`; ans = x; steps = [`Add ${a} to both sides: ${v} ${op} ${n(x)}`]; }
    else if (kind === "mul") { const x = ri(rng, 1, 12); q = `${a}${v} ${op} ${a * x}`; ans = x; steps = [`Divide both sides by ${a} (positive, so the sign stays): ${v} ${op} ${x}`]; }
    else if (kind === "div") { const x = ri(rng, 2, 12); q = `${v} ÷ ${a} ${op} ${x}`; ans = a * x; steps = [`Multiply both sides by ${a} (positive, so the sign stays): ${v} ${op} ${a * x}`]; }
    else { const x = nz(rng, -9, 9); q = `${MINUS}${a}${v} ${op} ${n(-a * x)}`; ans = x; ansOp = flip[op]; steps = [`Divide both sides by ${MINUS}${a}. Dividing by a negative FLIPS the sign: ${v} ${ansOp} ${n(x)}`]; }
    return { q, v, type: "ineq", answer: `${v}${ansOp}${ans}`, answerText: `${v} ${ansOp} ${n(ans)}`, steps: [q].concat(steps) };
  }

  // ---- sheet builder ----
  function buildItems(rng, parts) {
    const items = [], used = new Set();
    const pickVar = () => { const free = EQ.VARS.filter((x) => !used.has(x)); const v = pk(rng, free.length ? free : EQ.VARS); used.add(v); return v; };
    const seen = new Set();
    parts.forEach((part) => {
      for (let i = 0; i < part.count; i++) {
        let it, tries = 0;
        do {
        if (part.type === "eq") {
          const kind = part.kinds[i % part.kinds.length];
          const eq = EQ.makeEq(rng, kind, part.level, pickVar());
          it = { q: eq.text, v: eq.v, answer: eq.answer, steps: eq.steps.concat(`Check: ${EQ.checkText(eq, eq.answer)}`), type: "num", eq };
        } else if (part.type === "intops") it = intOpsItem(rng, part.level);
        else if (part.type === "orderops") it = orderOpsItem(rng, part.level);
        else if (part.type === "percent") it = percentItem(rng);
        else if (part.type === "proportion") it = proportionItem(rng);
        else it = ineqItem(rng, part.level);
        } while (seen.has(it.q) && ++tries < 60);   // no repeated problems on one sheet
        seen.add(it.q);
        if (it.answerText == null) it.answerText = (it.unit || "") + n(it.answer);
        items.push(it);
      }
    });
    return items;
  }

  function buildRiddle(rng, def) {
    const [question, answer] = RIDDLES[def.riddle];
    const letters = [...new Set(answer.replace(/ /g, "").split(""))];
    const kinds = def.ops === "mixed" ? ["add", "sub", "mul", "div"] : ["add", "sub"];
    const solutions = new Set(), byLetter = {}, items = [];
    const make = (key, v) => {
      for (let t = 0; t < 200; t++) {
        const eq = EQ.makeEq(rng, pk(rng, kinds), 2, v);
        if (eq.answer > 0 && !solutions.has(eq.answer)) { solutions.add(eq.answer); byLetter[key] = eq; return eq; }
      }
      throw new Error("could not build riddle");
    };
    letters.forEach((L) => make(L, L.toLowerCase()));
    if (answer.includes(" ")) make(" ", "■");
    Object.entries(byLetter).forEach(([key, eq]) => items.push({ q: eq.text, v: eq.v, answer: eq.answer, steps: eq.steps.concat(`Check: ${EQ.checkText(eq, eq.answer)}`), type: "num", eq, letter: key }));
    const ordered = shuf(rng, items);
    const cells = answer.split("").map((ch) => ({ letter: ch === " " ? null : ch, number: byLetter[ch].answer }));
    ordered.forEach((it) => { it.answerText = n(it.answer); });
    return { items: ordered, riddle: { question, answer, cells } };
  }

  function build(def, seed) {
    const rng = mulberry32(seed);
    let items, riddle = null;
    if (def.riddle != null) { const r = buildRiddle(rng, def); items = r.items; riddle = r.riddle; }
    else items = buildItems(rng, def.parts);
    items.forEach((it, i) => { it.n = i + 1; });
    return { title: def.title, instructions: def.instructions, items, riddle };
  }

  // ---- checking a student's typed answer ----
  const parseNum = (s) => Number(String(s).replace(/[−–]/g, "-").replace(/[$,%\s]/g, ""));
  function normIneq(s) {
    let t = s.toLowerCase().replace(/\s+/g, "").replace(/−|–/g, "-").replace(/>=|=>/g, "≥").replace(/<=|=</g, "≤");
    const flip = { ">": "<", "<": ">", "≥": "≤", "≤": "≥" };
    const m = t.match(/^(-?\d+(?:\.\d+)?)([<>≤≥])([a-z])$/);
    if (m) t = `${m[3]}${flip[m[2]]}${m[1]}`;
    return t;
  }
  function check(item, raw) {
    const s = String(raw == null ? "" : raw).trim();
    if (!s) return { blank: true };
    if (item.type === "ineq") return { ok: normIneq(s) === item.answer };
    const val = parseNum(s);
    if (Number.isNaN(val)) return { ok: false, invalid: true };
    const ok = Math.abs(val - item.answer) < 0.005;
    return { ok, value: val, hint: !ok && item.eq ? EQ.checkText(item.eq, val) : "" };
  }

  // ---- worksheet catalog (Grade 7) ----
  const eqSheet = (id, title, blurb, parts, extra) => Object.assign({ id, group: "eq", title, blurb, instructions: "Solve each equation by balancing both sides. Show your work, then check your answer by plugging it back in.", parts }, extra);
  const defs7 = [
    eqSheet("eq-addsub-1", "One-Step Equations: Addition & Subtraction, Level 1", "Small numbers, like x + 9 = 12.", [{ type: "eq", kinds: ["add", "sub"], level: 1, count: 10 }]),
    eqSheet("eq-addsub-2", "One-Step Equations: Addition & Subtraction, Level 2", "Bigger numbers and the variable on either side, like 150 = p + 78.", [{ type: "eq", kinds: ["add", "sub"], level: 2, count: 10 }]),
    eqSheet("eq-addsub-3", "One-Step Equations: Addition & Subtraction, Level 3", "Three-digit numbers.", [{ type: "eq", kinds: ["add", "sub"], level: 3, count: 10 }]),
    eqSheet("eq-int-1", "One-Step Equations: Integers, Level 1", "Add and subtract with some negative answers.", [{ type: "eq", kinds: ["int"], level: 2, count: 10 }]),
    eqSheet("eq-int-2", "One-Step Equations: Integers, Level 2", "Negative numbers inside the equation too.", [{ type: "eq", kinds: ["int"], level: 3, count: 10 }]),
    eqSheet("eq-muldiv-1", "One-Step Equations: Multiplication & Division, Level 1", "Whole-number answers.", [{ type: "eq", kinds: ["mul", "div"], level: 1, count: 10 }]),
    eqSheet("eq-muldiv-2", "One-Step Equations: Multiplication & Division, Level 2", "Includes negative numbers.", [{ type: "eq", kinds: ["mul", "div"], level: 2, count: 10 }]),
    eqSheet("eq-mixed", "One-Step Equations: All Four Operations", "Add, subtract, multiply, and divide mixed together.", [{ type: "eq", kinds: ["add", "sub", "mul", "div"], level: 2, count: 12 }]),
    eqSheet("eq-two-1", "Two-Step Equations, Level 1", "Equations like 3x + 5 = 20.", [{ type: "eq", kinds: ["two"], level: 1, count: 10 }], { group: "two" }),
    eqSheet("eq-two-2", "Two-Step Equations, Level 2", "Negative numbers and negative answers.", [{ type: "eq", kinds: ["two"], level: 2, count: 10 }], { group: "two" }),
    {
      id: "num-int-1", group: "num", title: "Integer Operations, Level 1", blurb: "Add, subtract, multiply, and divide integers.", instructions: "Solve each problem. Watch the signs!", parts: [{ type: "intops", level: 1, count: 12 }],
    },
    { id: "num-int-2", group: "num", title: "Integer Operations, Level 2", blurb: "Bigger integers, mixed operations.", instructions: "Solve each problem. Watch the signs!", parts: [{ type: "intops", level: 2, count: 12 }] },
    { id: "num-order-1", group: "num", title: "Order of Operations, Level 1", blurb: "Parentheses, multiplying and dividing, adding and subtracting.", instructions: "Use the order of operations: Parentheses, Exponents, Multiply/Divide, Add/Subtract.", parts: [{ type: "orderops", level: 1, count: 10 }] },
    { id: "num-order-2", group: "num", title: "Order of Operations, Level 2", blurb: "Includes negative numbers and exponents.", instructions: "Use the order of operations: Parentheses, Exponents, Multiply/Divide, Add/Subtract.", parts: [{ type: "orderops", level: 2, count: 10 }] },
    { id: "num-percent", group: "num", title: "Percent Problems", blurb: "Percent of a number, discounts, and tips.", instructions: "Solve each percent problem. Write money amounts without the $ sign if you like.", parts: [{ type: "percent", count: 10 }] },
    { id: "num-proportions", group: "num", title: "Solving Proportions", blurb: "Find the missing value in a proportion.", instructions: "Find the value of x that makes each proportion true.", parts: [{ type: "proportion", count: 10 }] },
    { id: "num-ineq-1", group: "num", title: "One-Step Inequalities, Level 1", blurb: "Add, subtract, or multiply by a positive number.", instructions: "Solve each inequality and write the answer like x > 7 (type >= for ≥ and <= for ≤).", parts: [{ type: "ineq", level: 1, count: 10 }] },
    { id: "num-ineq-2", group: "num", title: "One-Step Inequalities, Level 2", blurb: "Includes dividing by a negative number, which flips the sign.", instructions: "Solve each inequality and write the answer like x > 7 (type >= for ≥ and <= for ≤). Remember to flip the sign when you multiply or divide by a negative!", parts: [{ type: "ineq", level: 2, count: 10 }] },
    {
      id: "test-equations", group: "test", title: "Test: Equations (20 questions)", blurb: "One-step and two-step equations.", instructions: "Solve each equation. Show your work and check your answers.",
      parts: [{ type: "eq", kinds: ["add", "sub"], level: 2, count: 5 }, { type: "eq", kinds: ["mul", "div"], level: 2, count: 5 }, { type: "eq", kinds: ["int"], level: 3, count: 4 }, { type: "eq", kinds: ["two"], level: 2, count: 6 }],
    },
    {
      id: "test-numbers", group: "test", title: "Test: Integers, Percents & Proportions (20 questions)", blurb: "Number skills mixed together.", instructions: "Solve each problem. Show your work.",
      parts: [{ type: "intops", level: 2, count: 6 }, { type: "orderops", level: 2, count: 5 }, { type: "percent", count: 5 }, { type: "proportion", count: 4 }],
    },
    {
      id: "test-mixed", group: "test", title: "Test: Grade 7 Math Mixed Review (20 questions)", blurb: "Equations, integers, percents, proportions, and inequalities.", instructions: "Solve each problem. For inequalities, write the answer like x > 7.",
      parts: [{ type: "eq", kinds: ["add", "sub", "mul", "div", "two"], level: 2, count: 8 }, { type: "intops", level: 2, count: 3 }, { type: "orderops", level: 1, count: 2 }, { type: "percent", count: 3 }, { type: "proportion", count: 2 }, { type: "ineq", level: 1, count: 2 }],
    },
  ];
  RIDDLES.forEach((r, i) => defs7.push({
    id: `riddle-${i + 1}`, group: "riddle", riddle: i, ops: i < 8 ? "addsub" : "mixed", title: `Riddle: ${r[0]}`,
    blurb: i < 8 ? "Solve addition and subtraction equations to decode the answer." : "Solve add, subtract, multiply, and divide equations to decode the answer.",
    instructions: "Solve each equation. Find each solution in the boxes at the bottom and write the variable you solved for above it. A ■ stands for a space between words. When you finish, you'll have the answer to the riddle!",
  }));

  const groups = [
    { id: "eq", title: "One-Step Equations", about: "Balance both sides to solve. This matches the one-step equation worksheets from class." },
    { id: "riddle", title: "Riddle Worksheets", about: "Solve the equations, then use the answers to decode a riddle, just like the worksheet with the talking bird." },
    { id: "two", title: "Two-Step Equations", about: "Undo adding or subtracting first, then undo multiplying." },
    { id: "num", title: "Integers, Percents, Proportions & Inequalities", about: "Other Grade 7 skills in the same worksheet style." },
    { id: "test", title: "Mixed Tests", about: "20-question tests. A new set of problems every time you press New worksheet." },
  ];

  window.WORKSHEETS = { defs: { 7: defs7 }, groups, build, check, mulberry32 };
})();
