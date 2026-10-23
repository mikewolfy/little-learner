/* Grade 7 Honors & Gifted: bonus question banks. */
(function () {
  "use strict";
  const B = window.BONUS, T = B.T, K = (u) => "7/advanced/" + u;
  const A = (u, t) => B.add(K(u), t.split("\n").filter((x) => x.trim()).join("\n"));
  const ri = T.ri;
  const mn = (x) => String(x).replace(/^-/, "−");
  const near = (r, right, ds, fmt) => { fmt = fmt || mn; return T.mc(r, fmt(right), ds.map((d) => right + d).filter((x) => x !== right).map(fmt), (rr) => fmt(right + (ri(rr, -12, 12) || 13))); };
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const co = (c, v) => (c === 1 ? v : c === -1 ? "−" + v : mn(c) + v);
  const term = (c, v, first) => { if (c === 0) return ""; const s = c < 0 ? "−" : first ? "" : "+"; const a = Math.abs(c); const body = a === 1 ? v : a + v; return first ? (c < 0 ? "−" : "") + body : ` ${c < 0 ? "−" : "+"} ${body}`; };
  const supN = (n) => String(n).split("").map((d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[d]).join("");
  const ex = (v, e) => (e === 1 ? v : v + supN(e));
  const cf = (c) => (c === 1 ? "" : String(c));
  const lin = (m, b) => { const mp = m === 0 ? "" : m === 1 ? "x" : m === -1 ? "\u2212x" : mn(m) + "x"; if (b === 0) return mp || "0"; return mp ? mp + (b < 0 ? " \u2212 " : " + ") + Math.abs(b) : mn(b); };

  /* ---------- multistep equations ---------- */
  const MS = K("multistep-equations");
  B.tpl(MS, (r) => { const a = ri(r, 2, 9), b = ri(r, 1, 12), x = ri(r, -8, 12); const c = a * x + b; return [`Solve: ${a}x + ${b} = ${mn(c)}`, near(r, x, [-1, 1, 2, -2, b]), 0, `Subtract ${b}: ${a}x = ${mn(c - b)}; divide by ${a}: x = ${mn(x)}.`]; }, 14);
  B.tpl(MS, (r) => { const a = ri(r, 2, 9), b = ri(r, 1, 12), x = ri(r, 1, 12); const c = a * (x + b); return [`Solve: ${a}(x + ${b}) = ${c}`, near(r, x, [-1, 1, b, -b, a]), 0, `Divide by ${a}: x + ${b} = ${c / a}; x = ${x}.`]; }, 14);
  B.tpl(MS, (r) => { const a = ri(r, 3, 9), d = ri(r, 1, a - 1), x = ri(r, -6, 10), b = ri(r, 1, 12); const c = a * x + b - d * x; const rhs = d * x + 0; return [`Solve: ${a}x + ${b} = ${d}x + ${mn(c + 0 + d * x - a * x + 0 + 0) === "" ? 0 : mn(a * x + b - d * x + d * x - 0)}`.replace(/.*/, `${a}x + ${b} = ${d}x + ${mn(a * x + b - d * x)}`), near(r, x, [-1, 1, 2, -2, b]), 0, `Subtract ${d}x from both sides: ${a - d}x + ${b} = ${mn(a * x + b - d * x)}; then solve: x = ${mn(x)}.`]; }, 14);
  B.tpl(MS, (r) => { const x = ri(r, -5, 9), a = ri(r, 2, 6), b = ri(r, 2, 8); const c = a * (x - b); return [`Solve: ${a}(x − ${b}) = ${mn(c)}`, near(r, x, [-1, 1, b, -b]), 0, `Divide by ${a}: x − ${b} = ${mn(c / a)}; x = ${mn(x)}.`]; }, 12);
  B.tpl(MS, (r) => { const x = ri(r, 2, 15), m = ri(r, 2, 6), b = ri(r, 1, 9); return [`Solve: x/${m} + ${b} = ${x / 1 % m === 0 ? x / m + b : 0}`.replace(/.*/, `x/${m} + ${b} = ${x * m / m + b}`), near(r, x * m, [-m, m, 1, -1]), 0, `Subtract ${b}: x/${m} = ${x}; multiply by ${m}: x = ${x * m}.`]; }, 10);
  B.tpl(MS, (r) => { const x = ri(r, -5, 8), a = ri(r, 2, 5), b = ri(r, 1, 8), c = ri(r, 2, 5), d = ri(r, 1, 8); const L = a * (x + b), R = c * (x + d); if (a === c) return null; const lhs = `${a}(x + ${b})`, rhs = `${c}(x + ${d})`; const sol = (c * d - a * b) / (a - c); if (!Number.isInteger(sol)) return null; return [`Solve: ${lhs} = ${rhs}`, near(r, sol, [-1, 1, 2, -2]), 0, `Distribute: ${a}x + ${a * b} = ${c}x + ${c * d}; then x = ${mn(sol)}.`]; }, 14);
  B.tpl(MS, (r) => { const a = ri(r, 2, 6), b = ri(r, 1, 9), x = ri(r, 2, 10); const sum = (a + 1) * x + b; return [`The sum of ${a + 1} times a number and ${b} is ${sum}. What is the number?`, near(r, x, [-1, 1, b, -b]), 0, `${a + 1}x + ${b} = ${sum}, so x = ${x}.`]; }, 10);
  B.tpl(MS, (r) => { const n = ri(r, 3, 12), a = ri(r, 2, 6); return [`Three consecutive integers add to ${3 * n}. What is the smallest?`, near(r, n - 1, [-1, 1, 2, -2]), 0, `x + (x + 1) + (x + 2) = ${3 * n}; 3x + 3 = ${3 * n}; x = ${n - 1}.`]; }, 8);
  B.tpl(MS, (r) => { const L = ri(r, 4, 20), w = ri(r, 2, 10), P = 2 * (L + w); return [`A rectangle has perimeter ${P} and length ${L}. What is the width?`, near(r, w, [-1, 1, 2, L]), 0, `2(${L} + w) = ${P}; ${L} + w = ${P / 2}; w = ${w}.`]; }, 8);
  B.tpl(MS, (r) => { const a = ri(r, 2, 9), b = ri(r, 1, 9), x = ri(r, 1, 9); const rhs = a * x - b; return [`Solve: ${a}x − ${b} = ${rhs}. What is 2x + 1?`, near(r, 2 * x + 1, [-2, 2, 1, -1]), 0, `x = ${x}, so 2x + 1 = ${2 * x + 1}.`]; }, 8);
  A("multistep-equations", `
What does 'multistep equation' mean?|an equation that needs more than one step to solve|an equation with no variable|an equation with no solution|=>Two or more operations.
What is the order of operations when solving?|undo addition/subtraction first, then multiplication/division|undo multiplication first|any order|=>Reverse of PEMDAS.
What is the first step to solve 3x + 5 = 20?|subtract 5 from both sides|divide by 3|add 5|=>Undo addition.
What is the first step to solve 2(x − 4) = 10?|divide both sides by 2 (or distribute)|add 4|subtract 10|=>Either approach.
What is the distributive property?|a(b + c) = ab + ac|a + b = b + a|a × b = b × a|=>Multiply across.
Which expression equals 4(x + 3)?|4x + 12|4x + 3|x + 12|=>Distribute.
Which expression equals 5(2x − 1)?|10x − 5|10x − 1|7x − 5|=>Distribute.
Which expression equals −3(x + 2)?|−3x − 6|−3x + 6|3x − 6|=>Distribute the negative.
Which expression equals −(x − 4)?|−x + 4|−x − 4|x − 4|=>Change both signs.
What are like terms?|terms with the same variable part|any two terms|terms with different variables|=>3x and 5x.
Simplify: 4x + 7 − 2x + 1|2x + 8|6x + 8|2x + 6|=>Combine like terms.
Simplify: 3(x + 2) + 2x|5x + 6|5x + 2|6x|=>3x + 6 + 2x.
Simplify: 5x − 2(x − 3)|3x + 6|3x − 6|7x + 6|=>5x − 2x + 6.
Solve: 2x + 3x = 20|4|5|10|=>5x = 20.
Solve: 5x − 3x = 12|6|4|36|=>2x = 12.
Solve: 4x + 1 = 2x + 9|4|5|2|=>2x = 8.
Solve: 6x − 5 = 4x + 3|4|1|8|=>2x = 8.
Solve: 3x = x + 10|5|10|2|=>2x = 10.
Solve: x + 4 = 3x − 8|6|2|4|=>12 = 2x.
Solve: 7 − 2x = 1|3|4|−3|=>−2x = −6.
Solve: 10 − x = 2x + 1|3|9|1|=>9 = 3x.
Solve: (x + 3)/2 = 5|7|2|13|=>Multiply by 2, then subtract 3.
Solve: (2x − 1)/3 = 5|8|7|3|=>2x − 1 = 15.
Solve: x/2 + x/3 = 10|12|6|15|=>Common denominator 6: 5x/6 = 10.
Solve: 0.5x + 2 = 7|10|5|4.5|=>0.5x = 5.
Solve: 1.2x = 6|5|7.2|0.2|=>6 ÷ 1.2.
How many solutions does 2x + 3 = 2x + 5 have?|none|one|infinitely many|=>3 ≠ 5.
How many solutions does 3(x + 1) = 3x + 3 have?|infinitely many|none|one|=>Both sides are identical.
How many solutions does 4x = 12 have?|one|none|infinitely many|=>x = 3.
What is an identity?|an equation true for all values of the variable|an equation true for one value|an equation with no solution|=>x + 1 = x + 1.
What is a contradiction?|an equation false for all values of the variable|an equation true for all values|an equation true for one value|=>x = x + 1.
Which equation represents 'three more than twice a number is 17'?|2x + 3 = 17|3x + 2 = 17|2(x + 3) = 17|=>Twice, then plus 3.
Which equation represents 'twice the sum of a number and 3 is 14'?|2(x + 3) = 14|2x + 3 = 14|x + 6 = 14|=>Group the sum.
Which equation represents 'a number tripled and then decreased by 4 is 20'?|3x − 4 = 20|3(x − 4) = 20|x − 12 = 20|=>Triple, then subtract 4.
Which equation represents 'five less than four times a number is 23'?|4x − 5 = 23|5 − 4x = 23|4(x − 5) = 23|=>Four times x minus 5.
Two numbers sum to 30 and one is 6 more than the other. What is the smaller?|12|18|15|=>x + (x + 6) = 30.
A plan costs $15 plus $5 per visit. After how many visits is the cost $60?|9|12|8|=>5v + 15 = 60.
A taxi charges $3 plus $2 per mile. How many miles for a $19 fare?|8|11|16|=>2m + 3 = 19.
You have $40 and save $8 per week. After how many weeks will you have $120?|10|5|8|=>40 + 8w = 120.
A phone costs $12 per month plus a $30 activation fee. For how many months is the total $102?|6|8|7|=>12m + 30 = 102.
Which is a solution of 3(x − 2) = x + 4?|5|3|2|=>3x − 6 = x + 4 gives x = 5.
Which is a solution of 2(x + 5) = 3x?|10|5|−10|=>2x + 10 = 3x gives x = 10.
Why do we do the same operation to both sides of an equation?|to keep the equation balanced|to change the equation|to make it longer|=>Equality is preserved.
What is a good way to check your answer?|substitute it into the original equation|solve again the same way|ignore it|=>Plug it in.
True or false: 3(x + 2) = 3x + 2.|False|True|=>Distribute to both terms: 3x + 6.
True or false: 2x + 3x = 5x.|True|False|=>Combine like terms.
True or false: −(x + 3) = −x + 3.|False|True|=>It equals −x − 3.
True or false: If 5x = 20, then x = 100.|False|True|=>x = 4.
`);

  /* ---------- linear functions ---------- */
  const LF = K("linear-functions");
  B.tpl(LF, (r) => { const m = ri(r, -5, 6), b = ri(r, -8, 9); if (!m) return null; const x = ri(r, -4, 6); const y = m * x + b; return [`If y = ${lin(m, b)}, what is y when x = ${mn(x)}?`, near(r, y, [-1, 1, 2, -2, b]), 0, `Substitute x = ${mn(x)}: y = ${mn(y)}.`]; }, 14);
  B.tpl(LF, (r) => { const m = ri(r, -4, 5), b = ri(r, -6, 8) || 2; if (!m) return null; return [`What is the slope of y = ${lin(m, b)}?`, near(r, m, [-1, 1, 2, -m, b]), 0, `m is the coefficient of x: ${mn(m)}.`]; }, 12);
  B.tpl(LF, (r) => { const m = ri(r, -4, 5), b = ri(r, -6, 8) || 2; if (!m) return null; return [`What is the y-intercept of y = ${lin(m, b)}?`, near(r, b, [-1, 1, 2, -2, m]), 0, `b is the constant: ${mn(b)}.`]; }, 12);
  B.tpl(LF, (r) => { const x1 = ri(r, -3, 4), y1 = ri(r, -5, 6), m = ri(r, -4, 5), dx = ri(r, 1, 4); if (!m) return null; const x2 = x1 + dx, y2 = y1 + m * dx; return [`What is the slope of the line through (${mn(x1)}, ${mn(y1)}) and (${mn(x2)}, ${mn(y2)})?`, near(r, m, [-1, 1, 2, -2, -m]), 0, `(${mn(y2)} − ${mn(y1)}) ÷ (${mn(x2)} − ${mn(x1)}) = ${mn(m * dx)} ÷ ${dx} = ${mn(m)}.`]; }, 16);
  B.tpl(LF, (r) => { const m = ri(r, -4, 5), x1 = ri(r, -4, 5), y1 = ri(r, -6, 8); if (!m) return null; const b = y1 - m * x1; return [`A line has slope ${mn(m)} and passes through (${mn(x1)}, ${mn(y1)}). What is its y-intercept?`, near(r, b, [-1, 1, 2, -2, y1]), 0, `y = mx + b gives ${mn(y1)} = ${mn(m)}(${mn(x1)}) + b, so b = ${mn(b)}.`]; }, 14);
  B.tpl(LF, (r) => { const m = ri(r, -4, 5), b = ri(r, -6, 8); if (!m) return null; const eq = `y = ${lin(m, b)}`; return [`A line has slope ${mn(m)} and y-intercept ${mn(b)}. What is its equation?`, T.mc(r, eq, [`y = ${lin(b, m)}`, `y = ${lin(-m, b)}`, `y = ${lin(m, -b)}`].filter((x, i, arr) => x !== eq && arr.indexOf(x) === i)), 0, `y = mx + b.`]; }, 10);
  B.tpl(LF, (r) => { const m = ri(r, 2, 8), b = ri(r, 1, 15), x = ri(r, 2, 10); return [`A gym charges a $${b} fee plus $${m} per visit. Which equation gives the total cost y for x visits?`, T.mc(r, `y = ${m}x + ${b}`, [`y = ${b}x + ${m}`, `y = ${m + b}x`, `y = ${m}x − ${b}`]), 0, `Rate × visits + fee.`]; }, 8);
  B.tpl(LF, (r) => { const m = ri(r, 2, 8), b = ri(r, 1, 15), x = ri(r, 2, 10); return [`A gym charges a $${b} fee plus $${m} per visit. What is the total cost for ${x} visits?`, near(r, m * x + b, [-m, m, b, -b, 1].map((v) => v), (z) => "$" + z), 0, `${m}(${x}) + ${b} = ${m * x + b}.`]; }, 10);
  B.tpl(LF, (r) => { const m = ri(r, -4, 5), b = ri(r, -6, 8), x = ri(r, -4, 6); if (!m) return null; const y = m * x + b; const ok = r() < 0.5; const py = ok ? y : y + ri(r, 1, 3); return [`Is the point (${mn(x)}, ${mn(py)}) on the line y = ${lin(m, b)}?`, ok ? ["Yes", "No"] : ["No", "Yes"], 0, `When x = ${mn(x)}, y = ${mn(y)}.`]; }, 12);
  A("linear-functions", `
What is a function?|a relation where each input has exactly one output|a relation with multiple outputs for one input|a type of graph|=>One input, one output.
What is a linear function?|a function whose graph is a straight line|a function whose graph is a curve|a function with no graph|=>y = mx + b.
What does y = mx + b represent?|slope-intercept form of a line|standard form|point-slope form|=>m = slope, b = y-intercept.
What is the y-intercept?|where the line crosses the y-axis|where the line crosses the x-axis|the slope|=>x = 0.
What is the x-intercept?|where the line crosses the x-axis|where the line crosses the y-axis|the slope|=>y = 0.
What is the rate of change?|how fast y changes compared with x|the y-intercept|the x-intercept|=>Slope.
What is slope?|rise over run|run over rise|the y-intercept|=>Change in y over change in x.
A line with positive slope…|rises from left to right|falls from left to right|is horizontal|=>Upward.
A line with negative slope…|falls from left to right|rises from left to right|is vertical|=>Downward.
A line with slope 0 is…|horizontal|vertical|diagonal|=>No rise.
A line with undefined slope is…|vertical|horizontal|diagonal|=>No run.
What is the slope of the line y = 5?|0|5|undefined|=>Horizontal line.
What is the slope of the line x = 3?|undefined|0|3|=>Vertical line.
What is the equation of the x-axis?|y = 0|x = 0|y = x|=>All points have y = 0.
What is the equation of the y-axis?|x = 0|y = 0|y = x|=>All points have x = 0.
What is the equation of a line with slope 2 and y-intercept −3?|y = 2x − 3|y = −3x + 2|y = 2x + 3|=>y = mx + b.
What are parallel lines?|lines with the same slope|lines with opposite slopes|lines that cross at right angles|=>Never meet.
What are perpendicular lines?|lines whose slopes are negative reciprocals|lines with equal slopes|lines with equal intercepts|=>Meet at 90°.
Which line is parallel to y = 3x + 1?|y = 3x − 4|y = −3x + 1|y = x/3 + 1|=>Same slope 3.
Which line is perpendicular to y = 2x + 5?|y = −x/2 + 1|y = 2x − 1|y = −2x + 5|=>Negative reciprocal.
What is the negative reciprocal of 4?|−1/4|1/4|−4|=>Flip and change sign.
What is the negative reciprocal of −2/3?|3/2|−3/2|2/3|=>Flip and change sign.
What is the slope of the line through (0, 0) and (2, 6)?|3|2|6|=>6 ÷ 2.
What is the slope of the line through (1, 2) and (3, 2)?|0|1|2|=>No change in y.
What is the slope of the line through (2, 1) and (2, 5)?|undefined|0|4|=>Vertical line.
What is the y-intercept of y = −x + 4?|4|−1|−4|=>b = 4.
What is the x-intercept of y = 2x − 6?|3|−6|6|=>0 = 2x − 6.
What is the x-intercept of y = x + 5?|−5|5|0|=>0 = x + 5.
What is the y-intercept of the line through (0, −2) with slope 3?|−2|3|2|=>It crosses the y-axis at (0, −2).
Which point is on the line y = 2x + 1?|(1, 3)|(1, 2)|(2, 3)|=>2(1) + 1 = 3.
Which point is on the line y = −x + 5?|(2, 3)|(2, 4)|(3, 3)|=>−2 + 5 = 3.
Which table shows a linear function?|x: 1,2,3,4 / y: 3,5,7,9|x: 1,2,3,4 / y: 1,4,9,16|x: 1,2,3,4 / y: 2,4,8,16|=>Constant rate of change.
Which table shows a constant rate of change of 3?|x: 0,1,2,3 / y: 2,5,8,11|x: 0,1,2,3 / y: 2,4,8,16|x: 0,1,2,3 / y: 3,3,3,3|=>Add 3 each time.
What is the rate of change in 'y = 4x + 7'?|4|7|11|=>The slope.
A candle burns 2 inches per hour. After 3 hours, how much has burned?|6 inches|5 inches|1.5 inches|=>2 × 3.
A plant is 10 cm tall and grows 2 cm per week. What is its height after 5 weeks?|20 cm|12 cm|15 cm|=>10 + 2(5).
A graph shows a line through (0, 5) and (2, 11). What is the equation?|y = 3x + 5|y = 5x + 3|y = 2x + 5|=>Slope 6/2 = 3.
In y = 3x + 5, what does 5 mean in a real situation like cost?|a starting amount (fixed fee)|the rate|the number of items|=>y-intercept.
In y = 3x + 5, what does 3 mean in a real situation like cost?|the rate per item|a fixed fee|the total|=>Slope.
What is function notation?|writing y as f(x)|a type of graph|a type of equation|=>f(x) = 2x + 1.
If f(x) = 2x + 3, what is f(4)?|11|8|14|=>2(4) + 3.
If f(x) = −x + 6, what is f(2)?|4|8|−4|=>−2 + 6.
If f(x) = 3x − 1, what is f(−2)?|−7|−5|5|=>3(−2) − 1.
What is the domain of a function?|the set of possible inputs|the set of outputs|the slope|=>x-values.
What is the range of a function?|the set of possible outputs|the set of inputs|the slope|=>y-values.
Which graph is NOT a function?|a circle|a line|a parabola|=>Fails the vertical line test.
What is the vertical line test?|a vertical line crosses the graph at most once if it is a function|a horizontal line test|a type of equation|=>Tests functions.
What is standard form of a linear equation?|Ax + By = C|y = mx + b|y − y₁ = m(x − x₁)|=>A, B, C are integers.
Rewrite 2x + y = 6 in slope-intercept form.|y = −2x + 6|y = 2x + 6|y = −2x − 6|=>Solve for y.
Rewrite 3x + 2y = 12 in slope-intercept form.|y = −3/2 x + 6|y = 3/2 x + 6|y = −3/2 x + 12|=>2y = −3x + 12.
What is point-slope form?|y − y₁ = m(x − x₁)|y = mx + b|Ax + By = C|=>Uses a point and slope.
True or false: Every non-vertical line can be written as y = mx + b.|True|False|=>Vertical lines can't.
True or false: Two lines with the same slope and different intercepts are parallel.|True|False|=>They never meet.
True or false: The slope of a horizontal line is undefined.|False|True|=>It is 0.
`);

  /* ---------- systems of equations ---------- */
  const SY = K("systems");
  B.tpl(SY, (r) => { const x = ri(r, -4, 8), y = ri(r, -4, 8); const a = ri(r, 1, 4), b = ri(r, 1, 4), c = ri(r, 1, 4), d = ri(r, 1, 4); if (a * d === b * c) return null; const e = a * x + b * y, g = c * x + d * y; return [`Solve the system:{nl}${co(a, "x")} + ${co(b, "y")} = ${mn(e)}{nl}${co(c, "x")} + ${co(d, "y")} = ${mn(g)}`.replace(/\+ −/g, "− "), T.mc(r, `(${mn(x)}, ${mn(y)})`, [`(${mn(y)}, ${mn(x)})`, `(${mn(x + 1)}, ${mn(y)})`, `(${mn(x)}, ${mn(y + 1)})`, `(${mn(-x)}, ${mn(y)})`].filter((v) => v !== `(${mn(x)}, ${mn(y)})`), (rr) => `(${mn(ri(rr, -5, 9))}, ${mn(ri(rr, -5, 9))})`), 0, `Substituting x = ${mn(x)} and y = ${mn(y)} satisfies both equations.`]; }, 16);
  B.tpl(SY, (r) => { const x = ri(r, 1, 9), y = ri(r, 1, 9); return [`Two numbers have a sum of ${x + y} and a difference of ${Math.abs(x - y)}. What is the larger number?`, near(r, Math.max(x, y), [-1, 1, 2, -2, Math.min(x, y)]), 0, `Larger = (sum + difference) ÷ 2 = ${Math.max(x, y)}.`]; }, 12);
  B.tpl(SY, (r) => { const m = ri(r, -3, 4) || 1, b1 = ri(r, -4, 6), m2 = ri(r, -3, 4) || 2; if (m === m2) return null; const x = ri(r, -4, 6); const y = m * x + b1; const b2 = y - m2 * x; return [`Where do y = ${lin(m, b1)} and y = ${lin(m2, b2)} intersect?`, T.mc(r, `(${mn(x)}, ${mn(y)})`, [`(${mn(y)}, ${mn(x)})`, `(${mn(x + 1)}, ${mn(y)})`, `(${mn(x)}, ${mn(y - 1)})`, `(${mn(-x)}, ${mn(-y)})`].filter((v) => v !== `(${mn(x)}, ${mn(y)})`)), 0, `Set the expressions equal and solve: x = ${mn(x)}, y = ${mn(y)}.`]; }, 14);
  B.tpl(SY, (r) => { const a = ri(r, 2, 6), b = ri(r, 2, 6), n = ri(r, 3, 10), p = ri(r, 3, 10); const tot = a * n + b * p; return [`Adult tickets cost $${a} and child tickets cost $${b}. ${n} adult tickets and ${p} child tickets cost how much?`, near(r, tot, [-a, a, -b, b, 1].map((x) => x), (z) => "$" + z), 0, `${a}(${n}) + ${b}(${p}) = ${tot}.`]; }, 8);
  B.tpl(SY, (r) => { const m = ri(r, 1, 5), b = ri(r, -4, 6); const kind = T.pick(r, ["same", "different"]); if (kind === "same") return [`How many solutions does this system have?{nl}y = ${m}x + ${b}{nl}y = ${m}x + ${b + ri(r, 1, 4)}`, ["none (parallel lines)", "one", "infinitely many", "two"], 0, `Same slope, different intercepts: parallel lines never meet.`]; return [`How many solutions does this system have?{nl}y = ${m}x + ${b}{nl}y = ${m + ri(r, 1, 3)}x + ${b}`, ["exactly one", "none", "infinitely many", "two"], 0, `Different slopes: the lines cross at exactly one point.`]; }, 8);
  B.tpl(SY, (r) => { const a = ri(r, 2, 5), x = ri(r, 1, 6), y = ri(r, 1, 6); const e = x + y, g = a * x + y; if (a === 1) return null; return [`If x + y = ${e} and ${a}x + y = ${g}, what is x?`, near(r, x, [-1, 1, 2, -2, y]), 0, `Subtract the equations: ${a - 1}x = ${g - e}, so x = ${x}.`]; }, 12);
  A("systems", `
What is a system of equations?|two or more equations with the same variables|one equation with two variables|an equation with no variable|=>Solved together.
What is a solution to a system of two equations?|an ordered pair that satisfies both equations|an ordered pair that satisfies one equation|a number|=>Both must be true.
How can you solve a system graphically?|graph both lines and find where they intersect|find the y-intercepts only|add the equations|=>Intersection = solution.
What is the substitution method?|solve one equation for a variable and substitute it into the other|add the equations|graph the lines|=>Replace.
What is the elimination method?|add or subtract equations to eliminate a variable|graph the lines|substitute|=>Cancel a variable.
When is elimination easiest?|when the coefficients of a variable are opposites or equal|when no coefficients exist|never|=>Quick cancellation.
When is substitution easiest?|when a variable is already isolated|when no variable is isolated|never|=>y = 2x + 3.
How many solutions can a system of two linear equations have?|none, one, or infinitely many|only one|only two|=>Three cases.
When does a system have no solution?|the lines are parallel|the lines intersect once|the lines are the same|=>Same slope, different intercepts.
When does a system have exactly one solution?|the lines intersect at one point|the lines are parallel|the lines are the same|=>Different slopes.
When does a system have infinitely many solutions?|the equations describe the same line|the lines are parallel|the lines intersect once|=>Identical lines.
What is a consistent system?|a system with at least one solution|a system with no solution|a system with two equations|=>Solvable.
What is an inconsistent system?|a system with no solution|a system with one solution|a system with many solutions|=>Parallel lines.
What is a dependent system?|a system with infinitely many solutions|a system with no solution|a system with one solution|=>Same line.
Solve: y = x and y = 2x − 3|(3, 3)|(1, 1)|(2, 2)|=>x = 2x − 3 gives x = 3.
Solve: y = 2x and x + y = 9|(3, 6)|(6, 3)|(2, 4)|=>x + 2x = 9, x = 3.
Solve: x + y = 10 and x − y = 2|(6, 4)|(4, 6)|(5, 5)|=>Add: 2x = 12.
Solve: x + y = 7 and x − y = 3|(5, 2)|(2, 5)|(4, 3)|=>Add: 2x = 10.
Solve: 2x + y = 11 and x − y = 1|(4, 3)|(3, 4)|(5, 1)|=>Add: 3x = 12.
Solve: x + 2y = 8 and x = 2|(2, 3)|(3, 2)|(2, 2)|=>2 + 2y = 8.
Solve: y = 3x − 1 and y = x + 5|(3, 8)|(2, 5)|(1, 6)|=>3x − 1 = x + 5.
Solve: 3x + y = 9 and y = x + 1|(2, 3)|(3, 0)|(1, 2)|=>3x + x + 1 = 9.
Solve: x + y = 6 and 2x + y = 9|(3, 3)|(2, 4)|(4, 2)|=>Subtract: x = 3.
Which ordered pair is a solution of x + y = 5 and x − y = 1?|(3, 2)|(2, 3)|(4, 1)|=>Add: 2x = 6.
Which ordered pair is NOT a solution of x + y = 8?|(3, 6)|(5, 3)|(4, 4)|=>3 + 6 = 9.
Which system has no solution?|y = x + 2 and y = x + 5|y = x + 2 and y = 2x|y = x + 2 and y = −x|=>Parallel.
Which system has infinitely many solutions?|y = 2x + 1 and 2y = 4x + 2|y = 2x + 1 and y = 2x + 3|y = 2x + 1 and y = x|=>Same line.
Which system has exactly one solution?|y = x and y = −x + 4|y = 2x and y = 2x + 1|y = x + 1 and 2y = 2x + 2|=>Different slopes.
Two numbers add to 15 and one is 3 more than the other. What are the numbers?|6 and 9|5 and 10|7 and 8|=>x + (x + 3) = 15.
Two numbers add to 20 and differ by 4. What are they?|8 and 12|10 and 10|6 and 14|=>Sum and difference.
Pens cost $2 and notebooks cost $5. You buy 7 items for $20. How many pens?|5|2|3|=>p + n = 7 and 2p + 5n = 20.
A rental company charges a $20 fee plus $5 per hour; another charges $10 plus $7 per hour. When do they cost the same?|5 hours|10 hours|2 hours|=>20 + 5h = 10 + 7h.
Which is the solution to the system y = 2 and x = 3?|(3, 2)|(2, 3)|(3, 3)|=>Horizontal and vertical lines.
Which graphs show a system with one solution?|two lines that cross|two parallel lines|one line|=>Intersect once.
What is the first step in the elimination method?|line up the equations with like terms in columns|graph the lines|substitute|=>Organize.
When using elimination, what if the coefficients aren't opposites?|multiply one or both equations to make them opposites|give up|graph|=>Create a match.
After you find one variable, what next?|substitute into an equation to find the other variable|stop|graph|=>Back-substitute.
How can you check a system's solution?|plug it into both equations|plug it into one equation|ignore it|=>Both must work.
True or false: A solution of a system must satisfy every equation in the system.|True|False|=>Both equations.
True or false: Two lines with the same slope and the same y-intercept have one solution.|False|True|=>They're the same line (infinitely many).
True or false: The graph of x = 4 is a horizontal line.|False|True|=>It's vertical.
`);

  /* ---------- exponent laws & polynomials ---------- */
  const EL = K("exponent-laws");
  const bases = ["x", "a", "m", "y", "n", "p"];
  B.tpl(EL, (r) => { const v = T.pick(r, bases), a = ri(r, 2, 9), b = ri(r, 2, 9); return [`Simplify: ${ex(v, a)} · ${ex(v, b)}`, near(r, a + b, [-1, 1, a * b - (a + b), 2, -2].map((x) => x), (e) => `${ex(v, e)}`), 0, `Product rule: add exponents (${a} + ${b} = ${a + b}).`]; }, 12);
  B.tpl(EL, (r) => { const v = T.pick(r, bases), a = ri(r, 4, 10), b = ri(r, 2, a - 1); return [`Simplify: ${ex(v, a)} ÷ ${ex(v, b)}`, near(r, a - b, [-1, 1, 2, -2, a + b - (a - b)].map((x) => x), (e) => `${ex(v, e)}`), 0, `Quotient rule: subtract exponents (${a} − ${b} = ${a - b}).`]; }, 12);
  B.tpl(EL, (r) => { const v = T.pick(r, bases), a = ri(r, 2, 5), b = ri(r, 2, 4); return [`Simplify: (${ex(v, a)})${supN(b)}`, near(r, a * b, [-1, 1, a + b - a * b, 2, -2].map((x) => x), (e) => `${ex(v, e)}`), 0, `Power rule: multiply exponents (${a} × ${b} = ${a * b}).`]; }, 12);
  B.tpl(EL, (r) => { const c = ri(r, 2, 6), d = ri(r, 2, 6), a = ri(r, 2, 5), b = ri(r, 2, 5); return [`Simplify: ${c}x${supN(a)} · ${d}x${supN(b)}`, T.mc(r, `${c * d}x${supN(a + b)}`, [`${c + d}x${supN(a + b)}`, `${c * d}x${supN(a * b)}`, `${c * d}x${supN(Math.abs(a - b))}`.replace("x¹", "x")].filter((x, i, arr) => arr.indexOf(x) === i && x !== `${c * d}x${supN(a + b)}`)), 0, `Multiply coefficients (${c} × ${d} = ${c * d}) and add exponents.`]; }, 12);
  B.tpl(EL, (r) => { const a = ri(r, 2, 5), b = ri(r, 2, 4); return [`Simplify: (2x${supN(a)})${supN(b)}`, T.mc(r, `${2 ** b}x${supN(a * b)}`, [`2x${supN(a * b)}`, `${2 * b}x${supN(a * b)}`, `${2 ** b}x${supN(a + b)}`].filter((x, i, arr) => arr.indexOf(x) === i && x !== `${2 ** b}x${supN(a * b)}`)), 0, `Raise both the coefficient and the variable: 2^${b} = ${2 ** b}; ${a} × ${b} = ${a * b}.`]; }, 8);
  B.tpl(EL, (r) => { const a = ri(r, 2, 9); return [`What is 5⁰?`, ["1", "0", "5", "undefined"], 0, `Any nonzero number to the power 0 is 1.`]; }, 1);
  B.tpl(EL, (r) => { const a = ri(r, 2, 5), n = ri(r, 1, 4); return [`Write ${a}⁻${supN(n)} as a fraction.`, T.mc(r, `1/${a ** n}`, [`−${a ** n}`, `${a}/${n}`, `${a ** n}`, `−${a}${supN(n)}`.replace(/.*/, `1/${a * n}`)].filter((x, i, arr) => arr.indexOf(x) === i), (rr) => `1/${ri(rr, 2, 64)}`), 0, `A negative exponent means reciprocal: ${a}^−${n} = 1/${a ** n}.`]; }, 6);
  B.tpl(EL, (r) => { const a = ri(r, 2, 9), b = ri(r, 1, 9), c = ri(r, 1, 9), d = ri(r, 1, 9); const s = (x, p) => (p === 0 ? "" : p === 1 ? `${x === 1 ? "" : x}x` : `${x === 1 ? "" : x}x${supN(p)}`); return [`Add: (${cf(a)}x² + ${cf(b)}x) + (${cf(c)}x² + ${cf(d)}x)`, T.mc(r, `${a + c}x² + ${b + d}x`, [`${a + c}x⁴ + ${b + d}x²`, `${a + c + b + d}x²`, `${a * c}x² + ${b * d}x`]), 0, `Combine like terms: x² terms and x terms.`]; }, 10);
  B.tpl(EL, (r) => { const a = ri(r, 4, 9), b = ri(r, 1, 3), c = ri(r, 1, 9), d = ri(r, 1, 9); if (a - b < 2) return null; const sg = (n) => (n >= 0 ? "+" : "\u2212") + " " + cf(Math.abs(n)); const right = `${a - b}x² ${c - d === 0 ? "" : (c - d > 0 ? "+" : "\u2212") + " " + cf(Math.abs(c - d)) + "x"}`.trim(); return [`Subtract: (${a}x² + ${cf(c)}x) − (${cf(b)}x² + ${cf(d)}x)`, T.mc(r, right, [`${a + b}x² + ${cf(c + d)}x`, `${a - b}x² ${c + d >= 0 ? "+" : "\u2212"} ${cf(Math.abs(c + d))}x`, `${a - b}x² ${d - c >= 0 ? "+" : "\u2212"} ${cf(Math.abs(d - c))}x`].filter((x, i, arr) => x !== right && arr.indexOf(x) === i)), 0, `Subtract each term of the second polynomial.`]; }, 10);
  B.tpl(EL, (r) => { const a = ri(r, 2, 9), b = ri(r, 1, 9), c = ri(r, 2, 6); return [`Multiply: ${c}x(${cf(a)}x + ${b})`, T.mc(r, `${c * a}x² + ${c * b}x`, [`${c * a}x + ${c * b}x`, `${c + a}x² + ${c + b}x`, `${c * a}x² + ${b}`]), 0, `Distribute: ${c}x · ${a}x = ${c * a}x²; ${c}x · ${b} = ${c * b}x.`]; }, 10);
  B.tpl(EL, (r) => { const a = ri(r, 1, 6), b = ri(r, 1, 6); return [`Multiply: (x + ${a})(x + ${b})`, T.mc(r, `x² + ${a + b}x + ${a * b}`, [`x² + ${a * b}x + ${a + b}`, `x² + ${a + b}`, `x² + ${a * b}`]), 0, `FOIL: x² + ${b}x + ${a}x + ${a * b}.`]; }, 10);
  A("exponent-laws", `
What is the product rule for exponents?|x^a · x^b = x^(a+b)|x^a · x^b = x^(a·b)|x^a · x^b = x^(a−b)|=>Add exponents when multiplying.
What is the quotient rule for exponents?|x^a ÷ x^b = x^(a−b)|x^a ÷ x^b = x^(a+b)|x^a ÷ x^b = x^(a·b)|=>Subtract exponents when dividing.
What is the power rule?|(x^a)^b = x^(a·b)|(x^a)^b = x^(a+b)|(x^a)^b = x^(a−b)|=>Multiply exponents.
What is the zero exponent rule?|x⁰ = 1 (x ≠ 0)|x⁰ = 0|x⁰ = x|=>Any nonzero number to the power 0.
What is the negative exponent rule?|x^(−n) = 1/x^n|x^(−n) = −x^n|x^(−n) = x^n|=>Reciprocal.
What does (xy)^n equal?|x^n · y^n|x · y^n|x^n + y^n|=>Distribute the exponent.
What does (x/y)^n equal?|x^n / y^n|x / y^n|x^n − y^n|=>Distribute.
Simplify: x³ · x⁴|x⁷|x¹²|x¹|=>3 + 4.
Simplify: x⁸ ÷ x²|x⁶|x¹⁰|x⁴|=>8 − 2.
Simplify: (x²)³|x⁶|x⁵|x⁸|=>2 × 3.
Simplify: 2⁰|1|0|2|=>Any nonzero base to 0.
Simplify: 3⁻²|1/9|−9|−6|=>1/3².
Simplify: (3x)²|9x²|3x²|6x²|=>3² · x².
Simplify: (2x³)²|4x⁶|2x⁶|4x⁵|=>2² · x^(3·2).
Simplify: (x²y)³|x⁶y³|x⁵y³|x⁶y|=>Distribute the exponent.
Simplify: x⁵ / x⁵|1|0|x|=>Same base subtract exponents: x⁰ = 1.
Simplify: x · x · x|x³|3x|x|=>Three factors of x.
Simplify: 5x² · 2x³|10x⁵|7x⁵|10x⁶|=>Multiply coefficients, add exponents.
Simplify: 12x⁶ ÷ 4x²|3x⁴|8x⁴|3x³|=>Divide coefficients, subtract exponents.
Simplify: (−2x)³|−8x³|−6x³|8x³|=>(−2)³ = −8.
Simplify: (−x)²|x²|−x²|2x|=>A negative squared is positive.
Which is equivalent to 2⁻¹?|1/2|−2|−1/2|=>Reciprocal.
Which is equivalent to 10⁻³?|1/1000|−1000|−30|=>1/10³.
Which is equivalent to x⁻²?|1/x²|−x²|−2x|=>Reciprocal.
What is a monomial?|an expression with one term|an expression with two terms|an expression with no variable|=>5x².
What is a binomial?|an expression with two terms|an expression with one term|an expression with three terms|=>x + 3.
What is a trinomial?|an expression with three terms|an expression with two terms|an expression with one term|=>x² + 2x + 1.
What is a polynomial?|a sum of monomials|a single variable|a fraction|=>x² + 3x + 4.
What is the degree of 5x³?|3|5|8|=>The exponent on x.
What is the degree of x² + 3x + 1?|2|3|1|=>Highest exponent.
What is the degree of 7?|0|1|7|=>A constant.
What is the coefficient of x² in 4x² + 5x?|4|2|5|=>The number in front.
What is the constant term in x² + 3x − 7?|−7|3|1|=>No variable.
What are like terms?|terms with the same variable raised to the same power|any two terms|terms with different variables|=>3x² and 5x².
Which are like terms?|4x² and −7x²|4x² and 4x|4x² and 4y²|=>Same variable and power.
Simplify: 3x + 5x|8x|8x²|15x|=>Add coefficients.
Simplify: 4x² + 2x²|6x²|6x⁴|8x²|=>Add coefficients; the exponent stays.
Simplify: (2x + 3) + (x − 5)|3x − 2|3x + 8|2x² − 2|=>Combine like terms.
Simplify: (5x + 2) − (2x + 1)|3x + 1|3x + 3|7x + 3|=>Subtract each term.
Simplify: (3x² + 2x) + (x² − 5x)|4x² − 3x|4x⁴ − 3x|4x² + 7x|=>Combine like terms.
Simplify: 2(x + 4)|2x + 8|2x + 4|x + 8|=>Distribute.
Simplify: x(x + 3)|x² + 3x|x + 3x|x² + 3|=>Distribute.
Simplify: (x + 1)(x + 2)|x² + 3x + 2|x² + 2|x² + 3x + 3|=>FOIL.
Simplify: (x + 3)(x − 3)|x² − 9|x² + 9|x² − 6x − 9|=>Difference of squares.
Simplify: (x + 2)²|x² + 4x + 4|x² + 4|x² + 2x + 4|=>(x + 2)(x + 2).
Simplify: (x − 1)²|x² − 2x + 1|x² − 1|x² + 1|=>(x − 1)(x − 1).
What does FOIL stand for?|First, Outer, Inner, Last|Front, Out, In, Last|Find, Order, Insert, Label|=>Multiply two binomials.
Why can't you add x² and x³ into a single term?|they are not like terms|they have the same exponent|they are constants|=>Different powers.
True or false: x² · x³ = x⁶.|False|True|=>x⁵.
True or false: (x²)³ = x⁶.|True|False|=>2 × 3.
True or false: x⁰ = 0.|False|True|=>x⁰ = 1.
True or false: 2x + 3x = 5x².|False|True|=>5x.
`);

  /* ---------- honors english: rhetoric ---------- */
  A("rhetoric", `
What is rhetoric?|the art of effective or persuasive speaking and writing|a type of poem|a type of grammar|=>Used to persuade.
What is the rhetorical situation?|the context of a text: speaker, audience, purpose, and message|a type of poem|a grammar rule|=>Who, to whom, why, what.
What is ethos?|an appeal to credibility or character|an appeal to emotion|an appeal to logic|=>Trust the speaker.
What is pathos?|an appeal to emotion|an appeal to credibility|an appeal to logic|=>Feelings.
What is logos?|an appeal to logic and reason|an appeal to emotion|an appeal to credibility|=>Facts and reasoning.
What is kairos?|an appeal to timeliness or the right moment|an appeal to logic|an appeal to emotion|=>Why now.
Which is an example of ethos?|A doctor explaining a health issue by citing years of experience|A photograph of a crying child|A chart of statistics|=>Credibility.
Which is an example of pathos?|A story about a family losing their home|A statistic about home prices|A quote from an economist|=>Emotion.
Which is an example of logos?|A graph showing that crime dropped 20%|A photo of a smiling celebrity|A moving anecdote|=>Data.
What is a claim?|the main point the writer argues|a fact|a quote|=>The thesis.
What is a warrant?|the reasoning that connects evidence to a claim|the evidence|the claim|=>Toulmin model.
What is evidence?|facts, statistics, examples, or expert testimony|opinions|the claim|=>Support.
What is a rebuttal?|a response to a counterargument|a claim|a conclusion|=>Answering opposition.
What is a counterargument?|an opposing viewpoint|the main claim|evidence|=>The other side.
What is a concession?|acknowledging a valid point from the opposing side|a rebuttal|a claim|=>'It is true that...'
What is an anecdote?|a brief personal story used to illustrate a point|a statistic|a quote|=>Humanizes the argument.
What is a rhetorical question?|a question asked for effect rather than an answer|a question needing an answer|a statement|=>Makes readers think.
What is parallelism?|repeating the same grammatical structure for emphasis|using different structures|a type of rhyme|=>'I came, I saw, I conquered.'
What is anaphora?|repeating a word or phrase at the start of successive clauses|repeating at the end|a rhyme|=>'I have a dream...'
What is epistrophe?|repeating a word or phrase at the end of successive clauses|repeating at the start|a rhyme|=>Government of the people, by the people, for the people.
What is antithesis?|placing contrasting ideas side by side|repeating words|a rhyme|=>'Ask not what your country can do for you...'
What is juxtaposition?|placing two things side by side for contrast|a rhyme|a repetition|=>Highlights difference.
What is hyperbole?|deliberate exaggeration|understatement|a rhyme|=>For emphasis.
What is understatement?|deliberately minimizing something|exaggerating|a rhyme|=>Dry humor.
What is irony?|a contrast between expectation and reality|a rhyme|a repetition|=>Used for effect.
What is satire?|using humor and exaggeration to criticize|a type of poem|a type of grammar|=>Jonathan Swift.
What is diction?|the writer's word choice|the writer's age|the setting|=>Formal or informal.
What is syntax?|how words and sentences are arranged|word meaning|punctuation only|=>Sentence structure.
What is tone?|the writer's attitude toward the subject|the reader's feelings|the setting|=>Word choice reveals it.
What is mood?|the feeling the text creates in the reader|the writer's attitude|the setting|=>Atmosphere.
What is connotation?|the emotional associations of a word|the dictionary definition|the spelling|=>Implied meaning.
What is denotation?|the literal dictionary definition|emotional meaning|the sound|=>Explicit meaning.
What is a loaded word?|a word with strong emotional connotation|a neutral word|a long word|=>Slants a message.
What is bias?|prejudice toward one side|neutrality|a fact|=>One-sided.
What is audience?|the people a text is meant to reach|the writer|the topic|=>Shapes choices.
What is purpose?|the reason the author writes|the audience|the topic|=>Inform, persuade, entertain.
What is the intended effect of a call to action?|to move the audience to do something|to inform|to entertain|=>Final push.
What is a fallacy?|a flaw in reasoning|a strong argument|a fact|=>Weak logic.
What is a straw man fallacy?|misrepresenting an opponent's argument to attack it easily|attacking the person|using data|=>Fake target.
What is an ad hominem fallacy?|attacking the person instead of the argument|attacking the claim|citing evidence|=>Personal attack.
What is a bandwagon fallacy?|arguing that something is right because many people believe it|using data|citing experts|=>Popularity.
What is a slippery slope fallacy?|claiming one step will lead to extreme consequences without proof|a logical conclusion|a fact|=>Exaggerated chain.
What is a false dilemma?|presenting only two options when more exist|presenting many options|a fact|=>Either-or.
What is a hasty generalization?|a conclusion based on too little evidence|a careful conclusion|a fact|=>Small sample.
What is circular reasoning?|using the conclusion as a premise|using evidence|using data|=>Begs the question.
What is a red herring?|an irrelevant point that distracts from the issue|a relevant point|a fact|=>Distraction.
What is an appeal to authority?|citing an expert to support a claim|citing a rumor|citing a friend|=>Valid only if relevant.
What is a text's structure?|how its parts are organized|its length|its title|=>Order of ideas.
How does repetition affect a speech?|it emphasizes key ideas and makes them memorable|it confuses|it shortens|=>Rhythm and emphasis.
How do short sentences affect tone?|they create urgency or emphasis|they create calm|they create confusion|=>Punchy.
How do long, flowing sentences affect tone?|they can create a reflective or building effect|they create urgency|they create confusion|=>Momentum.
What is a rhetorical device?|a technique used to persuade or create effect|a type of poem|a grammar rule|=>Anaphora, rhetorical question.
Why would a speaker use 'we' and 'us'?|to include the audience and build unity|to exclude the audience|to confuse|=>Inclusive language.
Why might a speaker cite statistics?|to appeal to logic and credibility|to appeal to emotion|to make a joke|=>Logos.
Why might a speaker tell a personal story?|to build connection and appeal to emotion|to cite facts|to avoid the topic|=>Pathos.
Why might a writer acknowledge opposing views?|to show fairness and strengthen the argument|to weaken the argument|to avoid the topic|=>Credibility.
What is a thesis statement?|a sentence stating the main claim|a quote|a title|=>The central argument.
What is the purpose of a conclusion?|to reinforce the claim and leave a lasting impression|to add new topics|to repeat the introduction exactly|=>Closure.
What is rhetorical analysis?|examining how an author uses language and techniques to persuade|writing a story|summarizing|=>Analyze effects.
What question should a rhetorical analysis answer?|How does the author achieve their purpose?|Do I like it?|How long is it?|=>Focus on how.
`);

  /* ---------- honors life science: DNA & biotech ---------- */
  const DN = K("dna-biotech");
  const comp = { A: "T", T: "A", C: "G", G: "C" };
  const rna = { A: "U", T: "A", C: "G", G: "C" };
  const rndSeq = (r, n) => Array.from({ length: n }, () => T.pick(r, ["A", "T", "C", "G"])).join("");
  B.tpl(DN, (r) => { const s = rndSeq(r, 6); const c = s.split("").map((x) => comp[x]).join(""); const wrong = [s.split("").map((x) => rna[x]).join(""), s.split("").reverse().join(""), s.split("").map((x) => (x === "A" ? "C" : x === "C" ? "A" : x === "T" ? "G" : "T")).join("")]; return [`If one DNA strand is ${s}, what is the complementary strand?`, T.mc(r, c, wrong.filter((x) => x !== c)), 0, `A pairs with T and C pairs with G: ${c}.`]; }, 16);
  B.tpl(DN, (r) => { const s = rndSeq(r, 6); const m = s.split("").map((x) => rna[x]).join(""); return [`If a DNA strand reads ${s}, what is the mRNA strand transcribed from it?`, T.mc(r, m, [s.split("").map((x) => comp[x]).join(""), s.replace(/T/g, "U"), s.split("").reverse().join("")].filter((x) => x !== m)), 0, `In RNA, A pairs with U (not T): DNA ${s} → mRNA ${m}.`]; }, 12);
  B.tpl(DN, (r) => { const s = rndSeq(r, 3 * ri(r, 2, 4)); return [`A DNA strand has ${s.length} bases. How many codons does the mRNA made from it contain?`, near(r, s.length / 3, [-1, 1, 2, s.length - s.length / 3], String), 0, `Each codon is 3 bases: ${s.length} ÷ 3 = ${s.length / 3}.`]; }, 6);
  B.tpl(DN, (r) => { const a = ri(r, 10, 40), c = ri(r, 10, 40); const t = a, g = c; return [`In a DNA sample, ${a}% of the bases are adenine. What percent are thymine?`, near(r, t, [-5, 5, -a / 2, 100 - 2 * a].map((x) => Math.round(x)), (x) => x + "%"), 0, `A pairs with T, so thymine is also ${a}%.`]; }, 8);
  B.tpl(DN, (r) => { const a = ri(r, 10, 40); const g = (100 - 2 * a) / 2; if (!Number.isInteger(g) || g <= 0) return null; return [`In a DNA sample, ${a}% of the bases are adenine. What percent are guanine?`, near(r, g, [-5, 5, 10, -10].map((x) => x), (x) => x + "%"), 0, `A + T = ${2 * a}%; the rest (${100 - 2 * a}%) is G + C, so G = ${g}%.`]; }, 8);
  A("dna-biotech", `
What does DNA stand for?|deoxyribonucleic acid|dinitro acid|deoxyribose nucleic assembly|=>The genetic material.
What is the shape of DNA?|double helix|single strand|circle|=>Twisted ladder.
Who is credited with discovering the structure of DNA?|Watson and Crick (with Franklin's data)|Darwin and Mendel|Pasteur and Koch|=>1953.
What is the role of Rosalind Franklin?|her X-ray images were key to finding DNA's structure|she wrote the Origin of Species|she invented PCR|=>Photo 51.
What are the four bases in DNA?|adenine, thymine, cytosine, guanine|adenine, uracil, cytosine, guanine|alanine, tyrosine, cysteine, glycine|=>A, T, C, G.
Which base pairs with adenine in DNA?|thymine|cytosine|guanine|=>A–T.
Which base pairs with cytosine in DNA?|guanine|adenine|thymine|=>C–G.
What are the sides (backbone) of the DNA ladder made of?|sugar and phosphate|bases|amino acids|=>Deoxyribose and phosphate.
What are the rungs of the DNA ladder made of?|pairs of bases|sugars|phosphates|=>Held by hydrogen bonds.
What is a nucleotide?|a unit of DNA made of a sugar, a phosphate, and a base|a protein|a cell|=>Building block.
What is a gene?|a segment of DNA that codes for a protein or trait|a type of cell|a type of protein|=>Instructions.
What is a chromosome?|a coiled, packaged structure of DNA|a cell|a type of protein|=>Contains genes.
What is the genome?|an organism's complete set of DNA|a single gene|a single chromosome|=>Total genetic information.
What does the nucleus contain?|DNA|ribosomes|chloroplasts|=>In eukaryotes.
What is DNA replication?|the process of copying DNA before cell division|making protein|making RNA|=>Each strand serves as a template.
What enzyme joins nucleotides during DNA replication?|DNA polymerase|amylase|lipase|=>Builds the new strand.
What is a mutation?|a change in the DNA sequence|a type of cell|a type of protein|=>Can be harmful or helpful.
Which can cause a mutation?|radiation, chemicals, or copying errors|only food|only exercise|=>Mutagens.
What is the central dogma of biology?|DNA → RNA → protein|protein → RNA → DNA|RNA → DNA → protein|=>Flow of information.
What is transcription?|copying DNA into mRNA|making protein from mRNA|copying DNA|=>Occurs in the nucleus.
What is translation?|using mRNA to build a protein|copying DNA into mRNA|copying DNA|=>Occurs at the ribosome.
What is mRNA?|messenger RNA that carries a gene's instructions to the ribosome|a type of protein|a type of cell|=>Carries the message.
What is tRNA?|transfer RNA that brings amino acids to the ribosome|a type of protein|a type of cell|=>Delivers amino acids.
What is rRNA?|ribosomal RNA, part of the ribosome|a type of protein|a type of cell|=>Part of ribosomes.
What base replaces thymine in RNA?|uracil|adenine|cytosine|=>A–U.
What sugar is in RNA?|ribose|deoxyribose|glucose|=>DNA has deoxyribose.
Is DNA usually single-stranded or double-stranded?|double-stranded|single-stranded|triple-stranded|=>Double helix.
Is RNA usually single-stranded or double-stranded?|single-stranded|double-stranded|triple-stranded|=>Typically single.
What is a codon?|a three-base sequence in mRNA that codes for an amino acid|a type of protein|a type of cell|=>Genetic code unit.
What does the codon AUG signal?|start (and codes for methionine)|stop|nothing|=>Start codon.
What do stop codons do?|signal the end of translation|start translation|code for methionine|=>UAA, UAG, UGA.
What are amino acids?|the building blocks of proteins|the building blocks of DNA|a type of sugar|=>Twenty kinds.
What is a protein?|a molecule made of amino acids|a type of DNA|a type of sugar|=>Enzymes and structure.
What is an enzyme?|a protein that speeds up chemical reactions|a type of sugar|a type of DNA|=>Biological catalyst.
What is biotechnology?|using living organisms or their parts to make products|a type of cell|a type of protein|=>Insulin production.
What is genetic engineering?|changing an organism's DNA directly|selective breeding|natural selection|=>Gene editing.
What is a transgenic organism?|an organism that contains a gene from another species|a clone|a hybrid|=>Genetically modified.
What is a GMO?|a genetically modified organism|a type of cell|a type of protein|=>Crops like Bt corn.
What is gene therapy?|treating disease by changing a person's genes|a type of vaccine|a type of surgery|=>Experimental treatments.
What is CRISPR?|a tool for editing DNA|a type of cell|a type of protein|=>Gene editing technology.
What is PCR?|a technique for making many copies of a DNA segment|a type of cell|a type of surgery|=>Polymerase chain reaction.
What is gel electrophoresis?|a technique that separates DNA fragments by size|a type of surgery|a type of cell|=>DNA fingerprinting tool.
In gel electrophoresis, which fragments travel farthest?|smaller fragments|larger fragments|none|=>Easier to move through the gel.
What is DNA fingerprinting?|identifying individuals by their unique DNA patterns|taking fingerprints|a type of surgery|=>Forensics.
What is a clone?|a genetically identical copy of an organism|a hybrid|a sibling|=>Dolly the sheep.
What was Dolly the sheep?|the first mammal cloned from an adult cell|a type of GMO|a type of hybrid|=>1996.
What is selective breeding?|choosing parents with desired traits to produce offspring|a type of cloning|a type of mutation|=>Humans select.
What is a restriction enzyme?|an enzyme that cuts DNA at specific sequences|a type of sugar|a type of protein only|=>Genetic engineering tool.
What is a plasmid?|a small circular piece of DNA in bacteria|a type of cell|a type of protein|=>Used as vectors.
How is human insulin produced for diabetics?|by inserting the human insulin gene into bacteria|by harvesting from cows only|by making it from rocks|=>Recombinant DNA.
What is a stem cell?|an unspecialized cell that can become different cell types|a skin cell|a nerve cell|=>Potential.
What is an ethical issue in biotechnology?|questions about safety, fairness, and consent|a type of protein|a type of cell|=>Societal impacts.
What is a genetic disorder?|a disease caused by changes in genes or chromosomes|a cold|an injury|=>Cystic fibrosis.
What is the Human Genome Project?|an effort that mapped all human genes|a type of surgery|a type of vaccine|=>Completed in 2003.
How many base pairs are in the human genome?|about 3 billion|about 3 thousand|about 3 million|=>Very large.
What is a mutation that has no effect called?|a silent mutation|a lethal mutation|a beneficial mutation|=>No change in protein.
What is a point mutation?|a change in a single base|a change in a chromosome|a change in a cell|=>One letter.
What is a frameshift mutation?|an insertion or deletion that changes the reading frame|a swapped base|no change|=>Alters all later codons.
What is a karyotype?|a picture of an organism's chromosomes|a type of protein|a type of cell|=>Diagnostic tool.
What causes Down syndrome?|an extra copy of chromosome 21|a missing chromosome|a virus|=>Trisomy 21.
What is a pedigree chart?|a diagram of inheritance in a family|a type of protein|a type of cell|=>Tracks traits.
`);
})();
