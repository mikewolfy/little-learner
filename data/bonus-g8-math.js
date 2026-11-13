/* Grade 8 Math: bonus question banks. Numbers come from seeded templates, so every answer is computed. */
(function () {
  "use strict";
  const B = window.BONUS, T = B.T, K = (u) => "8/math/" + u;
  const ri = T.ri, pick = T.pick;
  const mn = (x) => String(x).replace(/^-/, "−");
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const frac = (n, d) => { const g = gcd(n, d); return d / g === 1 ? String(n / g) : `${n / g}/${d / g}`; };
  const A = (u, t) => B.add(K(u), t.split("\n").filter((x) => x.trim()).join("\n"));
  const sup = (e) => String(e).split("").map((c) => ({ "-": "⁻", 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" }[c])).join("");
  // four numeric choices, right first
  const num = (r, right, ds, fmt) => { fmt = fmt || mn; const set = ds.map((d) => right + d).filter((x) => x !== right && x >= 0 || (x !== right && x < 0)).map(fmt); return T.mc(r, fmt(right), set, (rr) => fmt(right + ri(rr, -9, 9))); };
  const pt = (x, y) => `(${mn(x)}, ${mn(y)})`;
  const ptChoices = (r, x, y, wrongs) => T.mc(r, pt(x, y), wrongs.map(([a, b]) => pt(a, b)).filter((s) => s !== pt(x, y)), (rr) => pt(x + ri(rr, -4, 4), y + ri(rr, -4, 4)));
  const TRIPLES = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29]];

  /* ---------- real numbers ---------- */
  const RN = K("real-numbers");
  B.tpl(RN, (r) => { const n = ri(r, 2, 200); const s = Math.floor(Math.sqrt(n)); if (s * s === n) return null; return [`Between which two consecutive integers is √${n}?`, T.mc(r, `${s} and ${s + 1}`, [`${s - 1} and ${s}`, `${s + 1} and ${s + 2}`, `${s - 2} and ${s - 1}`], null).slice(0, 4), 0, `${s}² = ${s * s} and ${s + 1}² = ${(s + 1) ** 2}, so √${n} is between ${s} and ${s + 1}.`]; }, 14);
  B.tpl(RN, (r) => { const k = ri(r, 2, 20); return [`√${k * k} = ?`, num(r, k, [-1, 1, 2, -2, k]), 0, `${k} × ${k} = ${k * k}.`]; }, 14);
  B.tpl(RN, (r) => { const k = ri(r, 2, 10); return [`∛${k ** 3} = ?`, num(r, k, [-1, 1, 2, k * 2]), 0, `${k} × ${k} × ${k} = ${k ** 3}.`]; }, 8);
  B.tpl(RN, (r) => { const n = ri(r, 2, 120); const s = Math.round(Math.sqrt(n)); const isP = s * s === n; return [`Is √${n} rational or irrational?`, [isP ? "rational" : "irrational", isP ? "irrational" : "rational", "neither", "imaginary"], 0, isP ? `√${n} = ${s}, a whole number, so it is rational.` : `${n} is not a perfect square, so √${n} is irrational.`]; }, 14);
  B.tpl(RN, (r) => { const m = ri(r, 11, 99) / 10, k = ri(r, 2, 7); const v = Math.round(m * 10 ** k); return [`Write ${v.toLocaleString("en-US")} in scientific notation.`, T.mc(r, `${m} × 10${sup(k)}`, [`${m * 10} × 10${sup(k - 1)}`, `${m} × 10${sup(k + 1)}`, `${(m / 10).toFixed(2)} × 10${sup(k + 1)}`], null).slice(0, 4), 0, `Move the decimal ${k} places: ${m} × 10${sup(k)}.`]; }, 12);
  B.tpl(RN, (r) => { const a = ri(r, 2, 3), b = ri(r, 2, 3), m = ri(r, 2, 8), n = ri(r, 2, 8); return [`(${a} × 10${sup(m)})(${b} × 10${sup(n)}) = ?`, T.mc(r, `${a * b} × 10${sup(m + n)}`, [`${a * b} × 10${sup(m * n)}`, `${a + b} × 10${sup(m + n)}`, `${a * b} × 10${sup(Math.abs(m - n))}`], null).slice(0, 4), 0, `Multiply ${a} × ${b} = ${a * b} and add exponents: ${m} + ${n} = ${m + n}.`]; }, 12);
  B.tpl(RN, (r) => { const b = ri(r, 2, 4), q = ri(r, 2, 3), m = ri(r, 6, 12), n = ri(r, 2, 5); return [`(${b * q} × 10${sup(m)}) ÷ (${b} × 10${sup(n)}) = ?`, T.mc(r, `${q} × 10${sup(m - n)}`, [`${q} × 10${sup(m + n)}`, `${b * q * b} × 10${sup(m - n)}`, `${q} × 10${sup(m / n | 0)}`], null).slice(0, 4), 0, `Divide ${b * q} ÷ ${b} = ${q} and subtract exponents: ${m} − ${n} = ${m - n}.`]; }, 10);
  B.tpl(RN, (r) => { const b = ri(r, 2, 9), m = ri(r, 2, 6), n = ri(r, 2, 6); return [`Simplify: ${b}${sup(m)} · ${b}${sup(n)}`, T.mc(r, `${b}${sup(m + n)}`, [`${b}${sup(m * n)}`, `${b * 2}${sup(m + n)}`, `${b}${sup(Math.abs(m - n))}`], null).slice(0, 4), 0, `Add the exponents: ${m} + ${n} = ${m + n}.`]; }, 12);
  B.tpl(RN, (r) => { const n = ri(r, 2, 40); if (Number.isInteger(Math.sqrt(n))) return null; const d = Math.round(Math.sqrt(n) * 10) / 10 + pick(r, [-0.4, -0.3, 0.3, 0.4]); const bigger = Math.sqrt(n) > d ? `√${n}` : String(d.toFixed(1)); return [`Which is greater: √${n} or ${d.toFixed(1)}?`, [bigger, bigger === `√${n}` ? d.toFixed(1) : `√${n}`, "They are equal", "Cannot be compared"], 0, `√${n} ≈ ${Math.sqrt(n).toFixed(2)}.`]; }, 12);
  A("real-numbers", `
What is a rational number?|a number that can be written as a fraction of two integers|a number whose decimal never ends or repeats|a negative number only|=>For example 0.75 = 3/4.
What is an irrational number?|a number whose decimal never ends or repeats|a number that can be written as a fraction|a whole number|=>√2 and π.
What are real numbers?|all rational and irrational numbers|only integers|only decimals|=>The whole number line.
What is a perfect square?|a number that is the square of an integer|any even number|a decimal|=>1, 4, 9, 16...
What is a square root?|a number that, multiplied by itself, gives the original number|half of a number|the square of a number|=>√49 = 7.
What is a cube root?|a number used as a factor three times to give the original number|a third of a number|the cube of a number|=>∛27 = 3.
What is a perfect cube?|a number that is the cube of an integer|any odd number|a square|=>1, 8, 27, 64.
What is scientific notation?|a number written as a × 10ⁿ with 1 ≤ a < 10|a number written with a calculator|a fraction|=>4.5 × 10³.
Is every integer a rational number?|yes|no|only positives|=>Integers can be written over 1.
Is π rational or irrational?|irrational|rational|an integer|=>Its decimal never ends or repeats.
Is 0.333… rational or irrational?|rational|irrational|neither|=>It equals 1/3.
Is 0.25 rational or irrational?|rational|irrational|neither|=>It equals 1/4.
Is √16 rational or irrational?|rational|irrational|neither|=>It equals 4.
Is √20 rational or irrational?|irrational|rational|neither|=>20 is not a perfect square.
Which is a perfect square?|121|120|122|=>11 × 11.
Which is a perfect cube?|125|120|100|=>5 × 5 × 5.
Which number is between 6 and 7?|√40|√20|√60|=>36 < 40 < 49.
Which is a better estimate of √10?|3.2|3.0|4.0|=>9 < 10 < 16.
Which is a better estimate of √90?|9.5|8.5|10.5|=>81 < 90 < 100.
Which is equal to 5⁰?|1|0|5|=>Any nonzero number to the zero power.
Which is equal to 10⁻²?|0.01|−20|0.1|=>1/100.
Which is equal to 2⁻³?|1/8|−8|1/6|=>1/2³.
Which is larger: 3 × 10⁴ or 5 × 10³?|3 × 10⁴|5 × 10³|They are equal|=>30,000 vs 5,000.
Which is smaller: 2 × 10⁻³ or 5 × 10⁻⁴?|5 × 10⁻⁴|2 × 10⁻³|They are equal|=>0.0005 vs 0.002.
What is 4.5 × 10³ in standard form?|4,500|450|45,000|=>Move decimal 3 places right.
What is 3.2 × 10⁻² in standard form?|0.032|0.32|320|=>Move decimal 2 places left.
Write 0.00086 in scientific notation.|8.6 × 10⁻⁴|86 × 10⁻⁵|0.86 × 10⁻³|=>Move decimal 4 places right.
Write 720,000 in scientific notation.|7.2 × 10⁵|72 × 10⁴|0.72 × 10⁶|=>Move decimal 5 places left.
Simplify (x²)³.|x⁶|x⁵|x⁸|=>Multiply exponents.
Simplify x⁵ ÷ x²|x³|x⁷|x¹⁰|=>Subtract exponents.
Simplify (2³)².|64|32|12|=>2⁶ = 64.
Evaluate 2 + 3 × 4².|50|80|34|=>Exponent, then multiply, then add.
Evaluate (2 + 3) × 4².|80|50|40|=>Parentheses first.
Which comes first in the order of operations?|parentheses|addition|subtraction|=>PEMDAS.
Order from least to greatest: √9, 2.5, √5|√5, 2.5, √9|√9, √5, 2.5|2.5, √5, √9|=>2.24, 2.5, 3.
What is the opposite of −√7?|√7|−7|1/√7|=>Additive inverse.
Can a number be both rational and irrational?|no|yes|only zero|=>Mutually exclusive.
True or false: √2 can be written exactly as a fraction.|False|True|=>It is irrational.
True or false: The square of a negative number is positive.|True|False|=>(−3)² = 9.
True or false: 0 is a rational number.|True|False|=>0 = 0/1.
`);

  /* ---------- pythagorean ---------- */
  const PY = K("pythagorean");
  B.tpl(PY, (r) => { const [a, b, c] = pick(r, TRIPLES); const k = ri(r, 1, 4); return [`A right triangle has legs of ${a * k} and ${b * k}. What is the length of the hypotenuse?`, num(r, c * k, [-1, 1, a * k, a * k + b * k]), 0, `c² = ${a * k}² + ${b * k}² = ${(a * k) ** 2 + (b * k) ** 2}, so c = ${c * k}.`]; }, 14);
  B.tpl(PY, (r) => { const [a, b, c] = pick(r, TRIPLES); const k = ri(r, 1, 4); return [`A right triangle has a hypotenuse of ${c * k} and one leg of ${a * k}. What is the other leg?`, num(r, b * k, [-1, 1, c * k - a * k, c * k]), 0, `b² = ${c * k}² − ${a * k}² = ${(b * k) ** 2}, so b = ${b * k}.`]; }, 14);
  B.tpl(PY, (r) => { const [a, b, c] = pick(r, TRIPLES); const k = ri(r, 1, 3); const ok = r() < 0.5; const cc = ok ? c * k : c * k + pick(r, [-2, -1, 1, 2]); const right = ok; return [`Can the side lengths ${a * k}, ${b * k}, and ${cc} form a right triangle?`, [right ? "Yes" : "No", right ? "No" : "Yes", "Only if the angles are known", "Only if it is isosceles"], 0, right ? `${(a * k) ** 2} + ${(b * k) ** 2} = ${cc ** 2}.` : `${(a * k) ** 2} + ${(b * k) ** 2} ≠ ${cc ** 2}.`]; }, 12);
  B.tpl(PY, (r) => { const [a, b, c] = pick(r, TRIPLES); const k = ri(r, 1, 3); const x = ri(r, -5, 5), y = ri(r, -5, 5); return [`What is the distance between ${pt(x, y)} and ${pt(x + a * k, y + b * k)}?`, num(r, c * k, [-1, 1, a * k + b * k, c * k + 2]), 0, `The legs are ${a * k} and ${b * k}, so the distance is ${c * k}.`]; }, 12);
  B.tpl(PY, (r) => { const [a, b, c] = pick(r, TRIPLES); const k = ri(r, 1, 3); return [`A rectangle is ${a * k} cm by ${b * k} cm. What is the length of its diagonal?`, num(r, c * k, [-1, 1, a * k + b * k, a * k * b * k]), 0, `√(${a * k}² + ${b * k}²) = ${c * k} cm.`]; }, 10);
  B.tpl(PY, (r) => { const [a, b, c] = pick(r, TRIPLES); const k = ri(r, 1, 3); return [`A ${c * k} ft ladder leans against a wall. Its base is ${a * k} ft from the wall. How high up the wall does it reach?`, num(r, b * k, [-1, 1, c * k - a * k, c * k + a * k]), 0, `Height² = ${c * k}² − ${a * k}² = ${(b * k) ** 2}, so the height is ${b * k} ft.`]; }, 10);
  B.tpl(PY, (r) => { const a = ri(r, 2, 9), b = ri(r, 2, 9); const c2 = a * a + b * b; return [`A right triangle has legs ${a} and ${b}. What is the hypotenuse squared?`, num(r, c2, [-2, 2, a + b, 2 * a * b]), 0, `c² = ${a}² + ${b}² = ${c2}.`]; }, 10);
  A("pythagorean", `
What is the hypotenuse?|the longest side of a right triangle, opposite the right angle|the shortest side|a leg|=>c in a² + b² = c².
What are the legs of a right triangle?|the two sides that form the right angle|the longest side|the base only|=>a and b.
What is the Pythagorean theorem?|a² + b² = c²|a + b = c|a² − b² = c²|=>For right triangles.
What is a Pythagorean triple?|three whole numbers that satisfy a² + b² = c²|three odd numbers|three consecutive numbers|=>3, 4, 5.
What is the converse of the Pythagorean theorem?|if a² + b² = c², the triangle is a right triangle|if a triangle is right, a² + b² = c²|a triangle has three sides|=>Used to test.
What is a right triangle?|a triangle with a 90° angle|a triangle with equal sides|a triangle with no angles|=>One right angle.
What is the distance formula based on?|the Pythagorean theorem|the slope formula|the area of a circle|=>Legs are horizontal and vertical.
Which is a Pythagorean triple?|5, 12, 13|4, 5, 6|6, 7, 8|=>25 + 144 = 169.
Which is a Pythagorean triple?|8, 15, 17|7, 8, 9|9, 10, 11|=>64 + 225 = 289.
Which is a Pythagorean triple?|7, 24, 25|10, 11, 12|12, 14, 15|=>49 + 576 = 625.
Which is NOT a Pythagorean triple?|5, 6, 7|3, 4, 5|6, 8, 10|=>25 + 36 ≠ 49.
Which sides form a right triangle?|9, 12, 15|6, 7, 8|5, 6, 7|=>81 + 144 = 225.
Which sides do NOT form a right triangle?|4, 6, 8|5, 12, 13|8, 15, 17|=>16 + 36 ≠ 64.
Which is the longest side in a right triangle?|the hypotenuse|a leg|the base|=>Opposite the right angle.
The hypotenuse of a right triangle with legs 1 and 1 is…|√2|2|1|=>√(1 + 1).
The hypotenuse of a right triangle with legs 2 and 2 is…|√8|4|2|=>√(4 + 4).
The hypotenuse of a right triangle with legs 1 and 2 is…|√5|3|√3|=>√(1 + 4).
What is √(3² + 4²)?|5|7|25|=>√25.
What is √(5² + 12²)?|13|17|169|=>√169.
What is √(13² − 5²)?|12|8|18|=>√144.
What is √(10² − 6²)?|8|4|16|=>√64.
Which step is first when finding a missing leg?|subtract the square of the known leg from the square of the hypotenuse|add the squares|multiply the legs|=>b² = c² − a².
Which step is last when finding a missing side?|take the square root|square the sides|add the sides|=>Undo the squaring.
Why is the hypotenuse the longest side?|it is opposite the largest angle (90°)|it is a leg|it is the base|=>Largest angle opposite longest side.
Why must the answer to c² = 100 be 10, not −10?|a length cannot be negative|10 is smaller|100 is negative|=>Distances are positive.
Why can't the Pythagorean theorem be used on any triangle?|it only works for right triangles|it works for all triangles|it needs a circle|=>Right angle required.
How can you find the diagonal of a rectangle?|use the Pythagorean theorem with the length and width|add the sides|multiply the sides|=>Diagonal is the hypotenuse.
How can you find the distance between two points?|draw a right triangle and use the Pythagorean theorem|add coordinates|multiply coordinates|=>Horizontal and vertical legs.
How do you test whether a triangle is right?|check whether a² + b² = c²|check the colors|check the perimeter|=>Converse.
A TV screen is 16 in wide and 12 in tall. What is its diagonal?|20 in|28 in|4 in|=>√(256 + 144).
A baseball diamond is a 90 ft square. What is the distance from home to second base? (nearest foot)|127 ft|180 ft|90 ft|=>90√2 ≈ 127.
A ramp is 12 ft long horizontally and rises 5 ft. How long is the ramp surface?|13 ft|17 ft|7 ft|=>√(144 + 25).
A kite string is 25 m long with the kite 24 m above the ground level at the string end. How far is the kite horizontally?|7 m|1 m|49 m|=>√(625 − 576).
True or false: In a right triangle, c is always the hypotenuse.|True|False|=>By convention.
True or false: a² + b² = c² works for all triangles.|False|True|=>Only right triangles.
True or false: 6, 8, 10 is a Pythagorean triple.|True|False|=>It is 2 × (3, 4, 5).
`);

  /* ---------- transformations ---------- */
  const TR = K("transformations");
  const rp = (r) => [ri(r, -8, 8), ri(r, -8, 8)];
  B.tpl(TR, (r) => { const [x, y] = rp(r), a = ri(r, -6, 6), b = ri(r, -6, 6); return [`Translate ${pt(x, y)} by ${pt(a, b)}. What is the image?`, ptChoices(r, x + a, y + b, [[x - a, y - b], [x + b, y + a], [x + a, y - b]]), 0, `Add: (${x} + ${a}, ${y} + ${b}).`]; }, 14);
  B.tpl(TR, (r) => { const [x, y] = rp(r); return [`Reflect ${pt(x, y)} across the x-axis.`, ptChoices(r, x, -y, [[-x, y], [-x, -y], [y, x]]), 0, "Across the x-axis, (x, y) → (x, −y)."]; }, 12);
  B.tpl(TR, (r) => { const [x, y] = rp(r); return [`Reflect ${pt(x, y)} across the y-axis.`, ptChoices(r, -x, y, [[x, -y], [-x, -y], [y, x]]), 0, "Across the y-axis, (x, y) → (−x, y)."]; }, 12);
  B.tpl(TR, (r) => { const [x, y] = rp(r); return [`Rotate ${pt(x, y)} 180° about the origin.`, ptChoices(r, -x, -y, [[x, -y], [-x, y], [y, x]]), 0, "A 180° rotation gives (−x, −y)."]; }, 12);
  B.tpl(TR, (r) => { const [x, y] = rp(r); return [`Rotate ${pt(x, y)} 90° clockwise about the origin.`, ptChoices(r, y, -x, [[-y, x], [-x, -y], [x, -y]]), 0, "A 90° clockwise rotation gives (y, −x)."]; }, 12);
  B.tpl(TR, (r) => { const [x, y] = rp(r); return [`Rotate ${pt(x, y)} 90° counterclockwise about the origin.`, ptChoices(r, -y, x, [[y, -x], [-x, -y], [x, -y]]), 0, "A 90° counterclockwise rotation gives (−y, x)."]; }, 12);
  B.tpl(TR, (r) => { const [x, y] = [ri(r, -6, 6), ri(r, -6, 6)], k = pick(r, [2, 3, 4, 5]); return [`Dilate ${pt(x, y)} by a scale factor of ${k} from the origin.`, ptChoices(r, x * k, y * k, [[x + k, y + k], [x / k | 0, y / k | 0], [-x * k, -y * k]]), 0, `Multiply each coordinate by ${k}.`]; }, 12);
  B.tpl(TR, (r) => { const [x, y] = rp(r), a = ri(r, 1, 6), b = ri(r, 1, 6); return [`The point ${pt(x, y)} is translated to ${pt(x + a, y - b)}. What is the translation?`, T.mc(r, `${a} right and ${b} down`, [`${a} left and ${b} down`, `${a} right and ${b} up`, `${b} right and ${a} down`], null).slice(0, 4), 0, `Change in x = ${a}, change in y = ${-b}.`]; }, 10);
  B.tpl(TR, (r) => { const [x, y] = rp(r); const which = pick(r, [["x-axis", x, -y], ["y-axis", -x, y], ["origin by 180°", -x, -y]]); const [nm, a, b] = which; if (a === x && b === y) return null; return [`The point ${pt(x, y)} becomes ${pt(a, b)}. Which transformation could this be?`, T.mc(r, nm === "origin by 180°" ? "a 180° rotation about the origin" : `a reflection across the ${nm}`, ["a translation by (1, 1)", "a dilation by 2", nm === "x-axis" ? "a reflection across the y-axis" : "a reflection across the x-axis"], null).slice(0, 4), 0, `The coordinates changed to ${pt(a, b)}.`]; }, 8);
  A("transformations", `
What is a transformation?|a change in position, size, or orientation of a figure|a type of triangle|a type of graph|=>Translations, reflections, rotations, dilations.
What is a preimage?|the original figure before a transformation|the new figure|a line|=>The starting shape.
What is an image?|the figure after a transformation|the original figure|a point|=>Often labeled A′.
What is a translation?|a slide of a figure|a flip|a turn|=>Same size, same orientation.
What is a reflection?|a flip across a line|a slide|a turn|=>Mirror image.
What is a rotation?|a turn around a fixed point|a flip|a slide|=>Angle and direction.
What is a dilation?|an enlargement or reduction by a scale factor|a slide|a flip|=>Same shape.
What is a scale factor?|the ratio of image size to original size|a type of angle|a translation|=>k.
What does congruent mean?|same size and shape|same shape only|same size only|=>Rigid motions keep this.
What does similar mean?|same shape and proportional sides|same size|same area|=>Dilation produces similar figures.
What is a line of reflection?|the line over which a figure is flipped|a line of symmetry|a slope|=>Mirror.
What is a center of rotation?|the point a figure turns around|the center of a circle|a vertex|=>Often the origin.
What is the center of dilation?|the fixed point from which a figure is enlarged or reduced|a vertex|the origin always|=>Often the origin.
What is a rigid motion?|a transformation that preserves size and shape|a dilation|a stretch|=>Translation, reflection, rotation.
Which transformations are rigid motions?|translations, reflections, and rotations|dilations|none|=>They preserve congruence.
Which transformation is not a rigid motion?|dilation|translation|reflection|=>Changes size.
Which transformation changes only position?|translation|dilation|rotation about a point only|=>Slide.
Which transformation creates a mirror image?|reflection|translation|rotation|=>Flip.
Which transformation turns a figure?|rotation|reflection|translation|=>Turn.
Which transformation makes a figure larger?|dilation with k > 1|reflection|translation|=>Enlargement.
Which transformation makes a figure smaller?|dilation with 0 < k < 1|translation|rotation|=>Reduction.
What is the rule for reflection across the x-axis?|(x, y) → (x, −y)|(x, y) → (−x, y)|(x, y) → (y, x)|=>y changes sign.
What is the rule for reflection across the y-axis?|(x, y) → (−x, y)|(x, y) → (x, −y)|(x, y) → (y, x)|=>x changes sign.
What is the rule for a 180° rotation about the origin?|(x, y) → (−x, −y)|(x, y) → (y, x)|(x, y) → (−x, y)|=>Both signs change.
What is the rule for a 90° clockwise rotation about the origin?|(x, y) → (y, −x)|(x, y) → (−y, x)|(x, y) → (−x, −y)|=>Swap, then negate the new y.
What is the rule for a 90° counterclockwise rotation about the origin?|(x, y) → (−y, x)|(x, y) → (y, −x)|(x, y) → (−x, −y)|=>Swap, then negate the new x.
What is the rule for a dilation by k from the origin?|(x, y) → (kx, ky)|(x, y) → (x + k, y + k)|(x, y) → (x/k, y)|=>Multiply coordinates.
What is the rule for a translation by (a, b)?|(x, y) → (x + a, y + b)|(x, y) → (ax, by)|(x, y) → (y, x)|=>Add.
What happens to the area when a figure is dilated by a scale factor of 2?|it is 4 times as large|it doubles|it is 8 times as large|=>k².
What happens to side lengths when dilated by 3?|they are 3 times as long|they are 9 times as long|they stay the same|=>Multiply by k.
What happens to angle measures in a dilation?|they stay the same|they double|they halve|=>Similar figures.
What happens to side lengths in a reflection?|they stay the same|they double|they halve|=>Congruent.
What happens to a figure's orientation in a reflection?|it is reversed|it stays the same|it doubles|=>Mirror.
Is a translated triangle congruent to the original?|yes|no|only sometimes|=>Rigid motion.
Is a dilated triangle (k = 2) congruent to the original?|no, it is similar|yes|only sometimes|=>Size changes.
Is a rotated rectangle congruent to the original?|yes|no|only sometimes|=>Rigid motion.
Which sequence maps a figure to a congruent one?|a reflection followed by a translation|a dilation by 3|a dilation by 1/2|=>Both are rigid.
True or false: A reflection changes the size of a figure.|False|True|=>Congruent.
True or false: A dilation preserves shape.|True|False|=>Similar.
True or false: Translations change orientation.|False|True|=>Orientation stays the same.
`);

  /* ---------- solids ---------- */
  const SO = K("solids");
  B.tpl(SO, (r) => { const rr = ri(r, 2, 10), h = ri(r, 2, 15); const v = rr * rr * h; return [`What is the volume of a cylinder with a radius of ${rr} cm and a height of ${h} cm? (in terms of π)`, T.mc(r, `${v}π cm³`, [`${2 * rr * h}π cm³`, `${rr * h}π cm³`, `${v * 2}π cm³`, `${rr * rr + h}π cm³`], null).slice(0, 4), 0, `V = πr²h = π(${rr}²)(${h}) = ${v}π.`]; }, 14);
  B.tpl(SO, (r) => { const rr = ri(r, 2, 9), h3 = ri(r, 1, 6) * 3; const v = rr * rr * h3 / 3; return [`What is the volume of a cone with a radius of ${rr} cm and a height of ${h3} cm? (in terms of π)`, T.mc(r, `${v}π cm³`, [`${v * 3}π cm³`, `${rr * h3}π cm³`, `${v * 2}π cm³`, `${rr * rr}π cm³`], null).slice(0, 4), 0, `V = ⅓πr²h = ⅓π(${rr}²)(${h3}) = ${v}π.`]; }, 14);
  B.tpl(SO, (r) => { const rr = pick(r, [3, 6, 9]); const v = (4 * rr ** 3) / 3; return [`What is the volume of a sphere with a radius of ${rr} cm? (in terms of π)`, T.mc(r, `${v}π cm³`, [`${4 * rr * rr}π cm³`, `${rr ** 3}π cm³`, `${v * 3}π cm³`, `${(4 * rr ** 3)}π cm³`], null).slice(0, 4), 0, `V = ⁴⁄₃πr³ = ⁴⁄₃π(${rr}³) = ${v}π.`]; }, 8);
  B.tpl(SO, (r) => { const rr = ri(r, 2, 12); return [`What is the surface area of a sphere with a radius of ${rr} cm? (in terms of π)`, T.mc(r, `${4 * rr * rr}π cm²`, [`${rr * rr}π cm²`, `${2 * rr * rr}π cm²`, `${8 * rr * rr}π cm²`], null).slice(0, 4), 0, `SA = 4πr² = 4π(${rr}²) = ${4 * rr * rr}π.`]; }, 12);
  B.tpl(SO, (r) => { const rr = ri(r, 2, 8), h = ri(r, 2, 12); const sa = 2 * rr * rr + 2 * rr * h; return [`What is the surface area of a cylinder with a radius of ${rr} cm and a height of ${h} cm? (in terms of π)`, T.mc(r, `${sa}π cm²`, [`${rr * rr * h}π cm²`, `${2 * rr * h}π cm²`, `${sa + rr * rr}π cm²`, `${rr * rr + rr * h}π cm²`], null).slice(0, 4), 0, `SA = 2πr² + 2πrh = ${2 * rr * rr}π + ${2 * rr * h}π = ${sa}π.`]; }, 12);
  B.tpl(SO, (r) => { const l = ri(r, 2, 10), w = ri(r, 2, 9), h = ri(r, 2, 8); return [`What is the volume of a rectangular prism that is ${l} cm by ${w} cm by ${h} cm?`, num(r, l * w * h, [-l, l, w, l + w + h], (x) => `${x} cm³`), 0, `V = lwh = ${l} × ${w} × ${h} = ${l * w * h}.`]; }, 12);
  B.tpl(SO, (r) => { const l = ri(r, 2, 10), w = ri(r, 2, 9), h = ri(r, 2, 8); const sa = 2 * (l * w + l * h + w * h); return [`What is the surface area of a rectangular prism that is ${l} cm by ${w} cm by ${h} cm?`, num(r, sa, [-4, 4, l * w * h, l * w + l * h + w * h], (x) => `${x} cm²`), 0, `SA = 2(${l * w} + ${l * h} + ${w * h}) = ${sa}.`]; }, 12);
  B.tpl(SO, (r) => { const k = pick(r, [2, 3, 4, 5]); return [`Every dimension of a solid is multiplied by ${k}. By what factor does its volume change?`, T.mc(r, `${k ** 3}`, [`${k}`, `${k ** 2}`, `${k * 2}`], null).slice(0, 4), 0, `Volume scales by k³ = ${k ** 3}.`]; }, 6);
  B.tpl(SO, (r) => { const k = pick(r, [2, 3, 4, 5]); return [`Every dimension of a solid is multiplied by ${k}. By what factor does its surface area change?`, T.mc(r, `${k ** 2}`, [`${k}`, `${k ** 3}`, `${k * 2}`], null).slice(0, 4), 0, `Surface area scales by k² = ${k ** 2}.`]; }, 6);
  A("solids", `
What is volume?|the amount of space inside a 3-D figure|the total area of the faces|the distance around|=>Cubic units.
What is surface area?|the total area of all the faces of a 3-D figure|the space inside|the perimeter|=>Square units.
What is a prism?|a solid with two parallel, congruent bases and rectangular lateral faces|a round solid|a cone|=>Named by its base.
What is a cylinder?|a solid with two parallel circular bases|a solid with one vertex|a round ball|=>A can.
What is a cone?|a solid with a circular base and a single vertex|a solid with two bases|a ball|=>Ice cream cone.
What is a sphere?|a round solid with every point the same distance from the center|a cone|a cylinder|=>A ball.
What is a pyramid?|a solid with a polygon base and triangular faces meeting at a vertex|a prism|a sphere|=>Egypt.
What is a net?|a flat pattern that folds into a solid|a type of volume|a type of graph|=>Find surface area.
What is the radius?|the distance from the center to the edge|the distance across the circle|the distance around|=>Half the diameter.
What is the diameter?|the distance across a circle through its center|half the radius|the circumference|=>Twice the radius.
What is the slant height of a cone?|the distance from the vertex to the edge of the base along the side|the height|the radius|=>ℓ.
What is the formula for the volume of a prism?|V = Bh|V = ⅓Bh|V = πr²h|=>Base area times height.
What is the formula for the volume of a cylinder?|V = πr²h|V = ⅓πr²h|V = 2πrh|=>Circle base area times height.
What is the formula for the volume of a cone?|V = ⅓πr²h|V = πr²h|V = ⁴⁄₃πr³|=>One-third of the cylinder.
What is the formula for the volume of a pyramid?|V = ⅓Bh|V = Bh|V = 2Bh|=>One-third.
What is the formula for the volume of a sphere?|V = ⁴⁄₃πr³|V = 4πr²|V = πr²h|=>r cubed.
What is the formula for the surface area of a sphere?|SA = 4πr²|SA = ⁴⁄₃πr³|SA = 2πr²|=>Four circles.
What is the formula for the surface area of a cylinder?|SA = 2πr² + 2πrh|SA = πr²h|SA = 4πr²|=>Two bases plus the side.
What is the formula for the surface area of a rectangular prism?|2(lw + lh + wh)|lwh|l + w + h|=>Six faces.
What is the volume of a cube with side 4?|64|16|48|=>4³.
What is the surface area of a cube with side 4?|96|64|24|=>6 × 16.
What is the volume of a cube with side 5?|125|25|75|=>5³.
What is the surface area of a cube with side 3?|54|27|18|=>6 × 9.
What are the units for volume?|cubic units|square units|linear units|=>cm³.
What are the units for surface area?|square units|cubic units|linear units|=>cm².
What are the units for the radius?|linear units|square units|cubic units|=>cm.
How does the volume of a cone compare to a cylinder with the same base and height?|it is one-third|it is twice|it is the same|=>⅓.
How does the volume of a sphere change when the radius doubles?|it is 8 times as large|it is 2 times as large|it is 4 times as large|=>r³.
How does the surface area of a sphere change when the radius doubles?|it is 4 times as large|it is 2 times as large|it is 8 times as large|=>r².
How does the volume of a cylinder change when only the height doubles?|it doubles|it quadruples|it stays the same|=>V ∝ h.
How does the volume of a cylinder change when only the radius doubles?|it quadruples|it doubles|it stays the same|=>V ∝ r².
Why is volume measured in cubic units?|it measures three dimensions|it measures two dimensions|it measures length|=>3-D.
Why is surface area measured in square units?|it measures area|it measures volume|it measures length|=>2-D covering.
Which solid has no edges or vertices?|a sphere|a cube|a cone|=>Smooth.
Which solid has exactly one vertex?|a cone|a cylinder|a cube|=>The apex.
Which solid has 6 faces?|a cube|a sphere|a cone|=>Six squares.
What is the volume of a cylinder with r = 5 and h = 2? (π ≈ 3.14)|157 cubic units|31.4 cubic units|78.5 cubic units|=>3.14 × 25 × 2.
What is the volume of a sphere with r = 3? (π ≈ 3.14)|113.04 cubic units|37.68 cubic units|84.78 cubic units|=>⁴⁄₃ × 3.14 × 27.
What is the circumference of a circle with r = 5? (π ≈ 3.14)|31.4|78.5|15.7|=>2πr.
What is the area of a circle with r = 4? (π ≈ 3.14)|50.24|25.12|12.56|=>πr².
True or false: Volume and surface area are measured in the same units.|False|True|=>Cubic vs square.
True or false: The volume of a cone is one-third the volume of a cylinder with the same base and height.|True|False|=>Yes.
True or false: A net can be used to find surface area.|True|False|=>Add the faces.
`);

  /* ---------- linear ---------- */
  const LI = K("linear");
  B.tpl(LI, (r) => { const m = pick(r, [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), x1 = ri(r, -4, 4), y1 = ri(r, -6, 6), dx = ri(r, 1, 4); const x2 = x1 + dx, y2 = y1 + m * dx; return [`What is the slope of the line through ${pt(x1, y1)} and ${pt(x2, y2)}?`, num(r, m, [-2 * m, 1, -1, 2, m + 2]), 0, `Slope = (${y2} − ${y1}) ÷ (${x2} − ${x1}) = ${m * dx} ÷ ${dx} = ${m}.`]; }, 14);
  B.tpl(LI, (r) => { const m = ri(r, -6, 6) || 2, b = ri(r, -9, 9) || 3; const eq = `y = ${m === 1 ? "" : m === -1 ? "−" : mn(m)}x ${b < 0 ? "−" : "+"} ${Math.abs(b)}`; return [`What is the slope of ${eq}?`, num(r, m, [-m * 2, 1, -1, 2, b]), 0, `In y = mx + b, m = ${m}.`]; }, 12);
  B.tpl(LI, (r) => { const m = ri(r, -6, 6) || 2, b = ri(r, -9, 9) || 3; const eq = `y = ${m === 1 ? "" : m === -1 ? "−" : mn(m)}x ${b < 0 ? "−" : "+"} ${Math.abs(b)}`; return [`What is the y-intercept of ${eq}?`, num(r, b, [-2 * b, 1, -1, 2, m]), 0, `In y = mx + b, b = ${b}.`]; }, 12);
  B.tpl(LI, (r) => { const m = pick(r, [2, 3, 4, 5, -2, -3]), b = ri(r, 1, 9); const right = `y = ${mn(m)}x + ${b}`; return [`A line has a slope of ${mn(m)} and a y-intercept of ${b}. Which equation represents it?`, T.mc(r, right, [`y = ${b}x + ${mn(m)}`, `y = ${mn(-m)}x + ${b}`, `y = ${mn(m)}x − ${b}`], null).slice(0, 4), 0, "Use y = mx + b."]; }, 10);
  B.tpl(LI, (r) => { const m = ri(r, 2, 5), x0 = ri(r, 1, 6); const b = -m * x0; return [`What is the x-intercept of y = ${m}x − ${m * x0}?`, num(r, x0, [-x0, 1, m, -1]), 0, `Set y = 0: ${m}x = ${m * x0}, so x = ${x0}.`]; }, 10);
  B.tpl(LI, (r) => { const m = ri(r, 2, 6), b = ri(r, -8, 8), x = ri(r, -4, 6); const y = m * x + b; return [`If y = ${m}x ${b < 0 ? "−" : "+"} ${Math.abs(b)}, what is y when x = ${mn(x)}?`, num(r, y, [m, -m, b, 2, -2, x]), 0, `y = ${m}(${mn(x)}) ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${mn(y)}.`]; }, 12);
  B.tpl(LI, (r) => { const k = ri(r, 2, 9), x = ri(r, 1, 6), x2 = x + ri(r, 1, 3); return [`In a proportional relationship, y = ${k * x} when x = ${x}. What is y when x = ${x2}?`, num(r, k * x2, [-k, k, x2, 2]), 0, `Constant of proportionality = ${k * x} ÷ ${x} = ${k}, so y = ${k} × ${x2} = ${k * x2}.`]; }, 10);
  B.tpl(LI, (r) => { const fee = ri(r, 2, 12), rate = ri(r, 2, 9), n = ri(r, 2, 10); const total = fee + rate * n; return [`A rental costs $${fee} plus $${rate} per hour. What is the cost for ${n} hours?`, num(r, total, [-fee, fee, rate, rate * n, -2], (x) => `$${x}`), 0, `${fee} + ${rate} × ${n} = ${total}.`]; }, 10);
  A("linear", `
What is slope?|the rate of change of a line, rise over run|the y-intercept|the x-intercept|=>m.
What is the slope formula?|(y₂ − y₁) ÷ (x₂ − x₁)|(x₂ − x₁) ÷ (y₂ − y₁)|y₁ + y₂|=>Change in y over change in x.
What is rise?|the vertical change between two points|the horizontal change|the slope|=>Up or down.
What is run?|the horizontal change between two points|the vertical change|the slope|=>Left or right.
What is the y-intercept?|the point where the line crosses the y-axis|the point where the line crosses the x-axis|the slope|=>(0, b).
What is the x-intercept?|the point where the line crosses the x-axis|the point where the line crosses the y-axis|the slope|=>y = 0.
What is slope-intercept form?|y = mx + b|ax + by = c|y − y₁ = m(x − x₁)|=>m is slope, b is the y-intercept.
What is a linear relationship?|a relationship with a straight-line graph|a curved graph|a random graph|=>Constant rate of change.
What is a proportional relationship?|a relationship y = kx whose graph passes through the origin|a relationship with y-intercept 5|a quadratic|=>Constant ratio.
What is the constant of proportionality?|the ratio y/x that stays the same|the y-intercept|the x-intercept|=>k.
What is the rate of change?|how one quantity changes compared with another|the y-intercept|the x-intercept|=>Slope.
What is the initial value?|the value of y when x = 0|the slope|the x-intercept|=>Starting amount.
What is a positive slope?|a line that rises from left to right|a line that falls|a horizontal line|=>Increasing.
What is a negative slope?|a line that falls from left to right|a line that rises|a vertical line|=>Decreasing.
What is a zero slope?|a horizontal line|a vertical line|a rising line|=>No change in y.
What is an undefined slope?|a vertical line|a horizontal line|a rising line|=>Run is zero.
What are parallel lines?|lines with the same slope that never meet|lines that cross|lines with opposite slopes|=>Equal slopes.
What are perpendicular lines?|lines whose slopes are negative reciprocals|lines with the same slope|lines that never meet|=>Meet at 90°.
Which equation has a slope of 4?|y = 4x + 1|y = x + 4|y = −4x|=>m = 4.
Which equation has a y-intercept of −3?|y = 2x − 3|y = −3x + 2|y = 3x + 3|=>b = −3.
Which equation is proportional?|y = 5x|y = 5x + 2|y = x − 5|=>No constant term.
Which line is steeper?|y = 4x|y = 2x|y = x|=>Larger absolute slope.
Which line is horizontal?|y = 5|x = 5|y = x|=>Slope 0.
Which line is vertical?|x = 3|y = 3|y = 3x|=>Undefined slope.
Which line passes through the origin?|y = −2x|y = 2x + 1|y = x − 3|=>b = 0.
Which line is parallel to y = 3x + 1?|y = 3x − 7|y = −3x + 1|y = x/3|=>Same slope.
Which line is perpendicular to y = 2x + 1?|y = −x/2 + 4|y = 2x + 4|y = −2x + 1|=>Negative reciprocal.
A line has slope 3 and passes through (0, 2). Its equation is…|y = 3x + 2|y = 2x + 3|y = 3x − 2|=>y = mx + b.
A line passes through (0, 5) and (1, 8). Its equation is…|y = 3x + 5|y = 5x + 3|y = 8x|=>Slope 3.
A line passes through (0, −2) and (2, 4). Its slope is…|3|2|6|=>(4 + 2) ÷ 2.
A line passes through (1, 3) and (3, 3). Its slope is…|0|2|3|=>Horizontal.
What is the slope of y = −x + 6?|−1|1|6|=>Coefficient of x.
What is the y-intercept of y = 7x?|0|7|1|=>No constant.
What does the slope represent in 'distance = 60t'?|speed of 60 per hour|a starting distance|the time|=>Rate.
What does the y-intercept represent in 'cost = 5h + 20'?|a fixed fee of $20|the hourly rate|the total hours|=>Starting value.
Why is y = x² not linear?|its rate of change is not constant|it has no variable|it is a line|=>It graphs as a curve.
Why do parallel lines never meet?|they have the same slope|they have different slopes|they cross|=>Equal slopes.
How can you graph y = 2x − 1?|plot (0, −1), then rise 2 and run 1|plot (2, −1)|plot (−1, 0)|=>b then slope.
How can you find the x-intercept?|set y = 0 and solve|set x = 0 and solve|find the slope|=>Where it crosses the x-axis.
How can you find the y-intercept from an equation y = mx + b?|read b|read m|set y = 0|=>(0, b).
True or false: A line with a negative slope falls from left to right.|True|False|=>Yes.
True or false: Every linear equation graphs through the origin.|False|True|=>Only proportional ones.
True or false: A vertical line has a slope of 0.|False|True|=>It is undefined.
`);

  /* ---------- functions ---------- */
  const FU = K("functions");
  B.tpl(FU, (r) => { const m = ri(r, 2, 9), b = ri(r, -8, 8), x = ri(r, -3, 7); const y = m * x + b; return [`If f(x) = ${m}x ${b < 0 ? "−" : "+"} ${Math.abs(b)}, what is f(${mn(x)})?`, num(r, y, [m, -m, b, 2, -2, 1]), 0, `f(${mn(x)}) = ${m}(${mn(x)}) ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${mn(y)}.`]; }, 14);
  B.tpl(FU, (r) => { const c = ri(r, -5, 9), x = ri(r, -4, 6); const y = x * x + c; return [`If f(x) = x² ${c < 0 ? "−" : "+"} ${Math.abs(c)}, what is f(${mn(x)})?`, num(r, y, [x * 2, -x, c, 2, -2, 1]), 0, `f(${mn(x)}) = (${mn(x)})² ${c < 0 ? "−" : "+"} ${Math.abs(c)} = ${mn(y)}.`]; }, 12);
  B.tpl(FU, (r) => { const m = ri(r, 2, 6), b = ri(r, -6, 8), x = ri(r, 0, 6); const y = m * x + b; return [`If f(x) = ${m}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} and f(x) = ${mn(y)}, what is x?`, num(r, x, [-1, 1, m, -x, 2]), 0, `${m}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${mn(y)} → x = ${x}.`]; }, 12);
  B.tpl(FU, (r) => { const m = ri(r, 2, 7), b = ri(r, -4, 9); const xs = [0, 1, 2, 3]; const ys = xs.map((x) => m * x + b); const right = `y = ${m}x ${b < 0 ? "−" : "+"} ${Math.abs(b)}`; return [`A table shows x = 0, 1, 2, 3 and y = ${ys.map(mn).join(", ")}. Which rule matches?`, T.mc(r, right, [`y = ${b}x + ${m}`, `y = ${m + 1}x ${b < 0 ? "−" : "+"} ${Math.abs(b)}`, `y = ${m}x ${b < 0 ? "+" : "−"} ${Math.abs(b)}`], null).slice(0, 4), 0, `The change in y is ${m} each step and y = ${mn(b)} at x = 0.`]; }, 10);
  B.tpl(FU, (r) => { const a = ri(r, 1, 5), pairs = [[a, ri(r, 1, 9)], [a + 1, ri(r, 1, 9)], [a + 2, ri(r, 1, 9)]]; const dup = r() < 0.5; if (dup) pairs[2][0] = pairs[0][0]; const isF = !dup; return [`Is {${pairs.map((p) => `(${p[0]}, ${p[1]})`).join(", ")}} a function?`, [isF ? "Yes" : "No", isF ? "No" : "Yes", "Only if y values repeat", "Only if x values are positive"], 0, isF ? "Each input has exactly one output." : `The input ${pairs[0][0]} has two different outputs.`]; }, 12);
  B.tpl(FU, (r) => { const m = ri(r, 2, 8), b = ri(r, 1, 9), x1 = ri(r, 0, 3), x2 = x1 + ri(r, 1, 3); const y1 = m * x1 + b, y2 = m * x2 + b; return [`A linear function has f(${x1}) = ${y1} and f(${x2}) = ${y2}. What is the rate of change?`, num(r, m, [-m, 1, 2, b]), 0, `(${y2} − ${y1}) ÷ (${x2} − ${x1}) = ${m}.`]; }, 10);
  A("functions", `
What is a relation?|a set of ordered pairs|a type of graph|a type of number|=>(x, y) pairs.
What is a function?|a relation where each input has exactly one output|a relation where an input has two outputs|a set of equations|=>Unique outputs.
What is the domain?|the set of all inputs|the set of all outputs|the slope|=>x-values.
What is the range?|the set of all outputs|the set of all inputs|the slope|=>y-values.
What is the independent variable?|the input variable, usually x|the output variable|a constant|=>You choose it.
What is the dependent variable?|the output variable, usually y|the input variable|a constant|=>Depends on x.
What is function notation?|a way to write a function such as f(x) = 2x + 3|a way to graph|a way to add|=>f of x.
What is the vertical line test?|a test showing whether a graph is a function|a test for slope|a test for intercepts|=>Each vertical line hits once.
What is a linear function?|a function with a constant rate of change|a function with a curved graph|a relation with repeats|=>Graph is a line.
What is a nonlinear function?|a function with a varying rate of change|a function with constant rate|a line|=>Curved graph.
What is a mapping diagram?|a diagram with arrows from inputs to outputs|a type of graph|a table|=>Shows relation.
What is a function table?|a table of input-output pairs|a graph|an equation|=>x and y columns.
What is an input?|a value substituted into a function|the output|the slope|=>x.
What is an output?|the value produced by a function|the input|the slope|=>y.
What is the rate of change in a linear function?|the slope|the y-intercept|the x-intercept|=>Change in y per change in x.
What is the initial value in y = 3x + 5?|5|3|8|=>When x = 0.
Which relation is a function?|{(1, 2), (2, 3), (3, 4)}|{(1, 2), (1, 3), (2, 4)}|{(0, 1), (0, 2)}|=>Each x appears once.
Which relation is not a function?|{(2, 3), (2, 5), (4, 1)}|{(1, 1), (2, 2), (3, 3)}|{(0, 0), (1, 1)}|=>x = 2 repeats.
Which graph is not a function?|a circle|a line|a parabola opening up|=>It fails the vertical line test.
Which graph is a function?|a straight line that is not vertical|a vertical line|a circle|=>One output per input.
Is a vertical line a function?|no|yes|only if it passes through the origin|=>One input, many outputs.
Is a horizontal line a function?|yes|no|only if it is the x-axis|=>Constant output.
Is {(1, 5), (2, 5), (3, 5)} a function?|yes|no|only sometimes|=>Different inputs may share an output.
Is {(5, 1), (5, 2), (5, 3)} a function?|no|yes|only sometimes|=>One input has three outputs.
Which equation is a function?|y = 2x + 1|x = 3|x² + y² = 4|=>One y per x.
Which equation is not a function of x?|x² + y² = 25|y = x²|y = 3x|=>Circle.
Which table shows a linear function?|x: 1, 2, 3, 4; y: 3, 5, 7, 9|x: 1, 2, 3, 4; y: 1, 4, 9, 16|x: 1, 2, 3, 4; y: 2, 4, 8, 16|=>Constant +2.
Which table shows a nonlinear function?|x: 1, 2, 3, 4; y: 1, 4, 9, 16|x: 1, 2, 3, 4; y: 2, 4, 6, 8|x: 1, 2, 3, 4; y: 5, 7, 9, 11|=>Changes grow.
In f(x) = 4x, what is f(3)?|12|7|43|=>4 × 3.
In f(x) = x + 10, what is f(−4)?|6|14|−14|=>−4 + 10.
In f(x) = 2x − 5, what is f(0)?|−5|0|5|=>The y-intercept.
In f(x) = x², what is f(−3)?|9|−9|6|=>(−3)².
In f(x) = 10 − x, what is f(4)?|6|14|−6|=>10 − 4.
If f(x) = 3x + 2 and f(x) = 14, what is x?|4|5|3|=>3x = 12.
If f(x) = 5x − 1 and f(x) = 19, what is x?|4|3|5|=>5x = 20.
A function maps input 3 to 12 and input 5 to 20. If it is linear through the origin, what is its rule?|f(x) = 4x|f(x) = 3x|f(x) = x + 9|=>12 ÷ 3 = 4.
The function C(n) = 12n gives the cost of n tickets. What is C(5)?|60|17|12|=>12 × 5.
Why is the cost of tickets a function of the number of tickets?|each number of tickets has exactly one cost|each cost has many numbers of tickets|it is random|=>One output.
Why does a circle not pass the vertical line test?|some vertical lines cross it twice|no vertical line crosses it|every vertical line crosses once|=>Two outputs.
Why can two different inputs have the same output in a function?|a function only needs one output per input|it cannot|only for lines|=>Allowed.
How can you tell if a table is linear?|equal changes in x give equal changes in y|y values are all the same|x values repeat|=>Constant rate.
How do you find the domain from a graph?|read all the x-values the graph covers|read the y-values|find the slope|=>Left to right.
True or false: A function can have an input with two outputs.|False|True|=>Not allowed.
True or false: A function can have two inputs with the same output.|True|False|=>Allowed.
True or false: Every line is a function except vertical lines.|True|False|=>Yes.
`);

  /* ---------- equations ---------- */
  const EQ = K("equations");
  B.tpl(EQ, (r) => { const x = ri(r, -6, 9), a = ri(r, 2, 9), b = ri(r, -9, 9); const c = a * x + b; return [`Solve ${a}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${mn(c)}.`, num(r, x, [-x, 1, -1, 2, a]).map((s) => s), 0, `${a}x = ${mn(c - b)}, so x = ${mn(x)}.`]; }, 14);
  B.tpl(EQ, (r) => { const x = ri(r, -5, 9), a = ri(r, 3, 9), c = ri(r, 1, a - 1), b = ri(r, -9, 9); const d = (a - c) * x + b; return [`Solve ${a}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${c}x + ${mn(d)}.`.replace("+ −", "− "), num(r, x, [-x, 1, -1, 2, a - c]), 0, `${a - c}x = ${mn(d - b)}, so x = ${mn(x)}.`]; }, 14);
  B.tpl(EQ, (r) => { const x = ri(r, -4, 9), a = ri(r, 2, 6), b = ri(r, 1, 8); const c = a * (x + b); return [`Solve ${a}(x + ${b}) = ${mn(c)}.`, num(r, x, [-x, 1, -1, 2, b]), 0, `x + ${b} = ${mn(c / a)}, so x = ${mn(x)}.`]; }, 12);
  B.tpl(EQ, (r) => { const x = ri(r, 2, 12), d = pick(r, [2, 3, 4, 5]), b = ri(r, 1, 9); const q = x * d; return [`Solve x/${d} + ${b} = ${x + b}.`, num(r, q, [-q, d, 1, -d]), 0, `x/${d} = ${x}, so x = ${q}.`]; }, 10);
  B.tpl(EQ, (r) => { const x = ri(r, -5, 8), a = pick(r, [-2, -3, -4, -5]), b = ri(r, 1, 12); const c = a * x + b; return [`Solve ${mn(a)}x + ${b} = ${mn(c)}.`, num(r, x, [-x, 1, -1, 2, a]), 0, `${mn(a)}x = ${mn(c - b)}, so x = ${mn(x)}.`]; }, 12);
  B.tpl(EQ, (r) => { const a = ri(r, 2, 6), b = ri(r, 1, 9); const neg = r() < 0.5, lt = r() < 0.5; const s = ri(r, 1, 9); const rhs = (neg ? -a : a) * s + b; const flip = neg ? !lt : lt; const sol = `x ${flip ? "<" : ">"} ${mn(s)}`; const bad1 = `x ${flip ? ">" : "<"} ${mn(s)}`; return [`Solve ${neg ? "−" : ""}${a}x + ${b} ${lt ? "<" : ">"} ${mn(rhs)}.`, T.mc(r, sol, [bad1, `x ${flip ? "<" : ">"} ${mn(-s)}`, `x ${flip ? ">" : "<"} ${mn(-s)}`], null).slice(0, 4), 0, neg ? `Dividing by −${a} reverses the inequality: ${sol}.` : `${a}x ${lt ? "<" : ">"} ${a * s}, so ${sol}.`]; }, 12);
  B.tpl(EQ, (r) => { const n = ri(r, 3, 9), t = ri(r, 2, 8), x = ri(r, 2, 10); const total = n * x + t; return [`Maya buys ${n} notebooks that cost the same, plus a $${t} pen. The total is $${total}. How much does each notebook cost?`, num(r, x, [-1, 1, t, n], (v) => `$${v}`), 0, `${n}x + ${t} = ${total} → x = ${x}.`]; }, 10);
  A("equations", `
What is an equation?|a statement that two expressions are equal|an inequality|an expression|=>Has an equals sign.
What is an expression?|a combination of numbers, variables, and operations without an equals sign|an equation|an inequality|=>3x + 2.
What is a variable?|a letter that stands for an unknown number|a number|an operation|=>x.
What is a coefficient?|the number multiplied by a variable|a variable|a constant|=>In 7x, 7.
What is a constant?|a number that does not change|a variable|a coefficient|=>No variable.
What are like terms?|terms with the same variable part|any two terms|terms with different variables|=>3x and 5x.
What is the distributive property?|a(b + c) = ab + ac|a + b = b + a|a(bc) = (ab)c|=>Multiply across.
What is an inverse operation?|an operation that undoes another operation|an operation of the same kind|a type of equation|=>Addition and subtraction.
What is the inverse of addition?|subtraction|multiplication|division|=>Undo it.
What is the inverse of multiplication?|division|addition|subtraction|=>Undo it.
What is a solution to an equation?|a value that makes the equation true|any number|the variable|=>Check by substituting.
What is an inequality?|a statement comparing two expressions using <, >, ≤, or ≥|an equation|an expression|=>Not equal.
What does ≤ mean?|less than or equal to|greater than or equal to|not equal to|=>Includes equality.
What does ≥ mean?|greater than or equal to|less than or equal to|less than|=>Includes equality.
What does 'at least' mean?|≥|≤|<|=>Minimum.
What does 'at most' mean?|≤|≥|>|=>Maximum.
What does 'more than' mean?|>|≥|<|=>Strict.
What does 'no more than' mean?|≤|≥|>|=>Maximum.
What is a solution set?|all values that make an equation or inequality true|one value|a graph|=>May be many values.
Which equation has no solution?|x + 3 = x + 5|2x = 6|x = 5|=>3 ≠ 5.
Which equation has infinitely many solutions?|2(x + 1) = 2x + 2|x + 1 = 5|3x = 9|=>Both sides are equal.
Which equation has exactly one solution?|3x + 1 = 10|x + 1 = x + 2|2(x + 1) = 2x + 2|=>x = 3.
Solve x + 7 = 15.|x = 8|x = 22|x = −8|=>Subtract 7.
Solve x − 4 = 10.|x = 14|x = 6|x = −14|=>Add 4.
Solve 3x = 21.|x = 7|x = 18|x = 63|=>Divide by 3.
Solve x/5 = 4.|x = 20|x = 9|x = 0.8|=>Multiply by 5.
Solve 2x + 1 = 11.|x = 5|x = 6|x = 10|=>2x = 10.
Solve 4x − 8 = 12.|x = 5|x = 1|x = 20|=>4x = 20.
Solve 6 = 2x − 4.|x = 5|x = 1|x = 10|=>2x = 10.
Solve 3x + 4 = x + 12.|x = 4|x = 8|x = 2|=>2x = 8.
Solve 5x − 3 = 2x + 9.|x = 4|x = 2|x = 12|=>3x = 12.
Solve 2(x − 3) = 10.|x = 8|x = 13|x = 4|=>x − 3 = 5.
Solve 3(2x + 1) = 21.|x = 3|x = 4|x = 10|=>2x + 1 = 7.
Solve x + 6 > 10.|x > 4|x < 4|x > 16|=>Subtract 6.
Solve 2x ≤ 14.|x ≤ 7|x ≥ 7|x ≤ 28|=>Divide by 2.
Solve −x > 3.|x < −3|x > −3|x > 3|=>Reverse the sign.
Solve −2x ≥ 8.|x ≤ −4|x ≥ −4|x ≥ 4|=>Divide by −2 and flip.
Solve 3x − 2 < 10.|x < 4|x > 4|x < 3|=>3x < 12.
Which graph shows x > 2?|open circle at 2 shaded right|closed circle at 2 shaded right|open circle at 2 shaded left|=>Strict inequality.
Which graph shows x ≤ 2?|closed circle at 2 shaded left|open circle at 2 shaded left|closed circle at 2 shaded right|=>Includes 2.
Why do you flip the inequality sign when dividing by a negative number?|multiplying by a negative reverses order|it is a rule only|it makes it easier|=>−2 < 3 but 2 > −3.
Why is it helpful to check a solution?|it confirms the equation is true|it changes the solution|it is required for inequalities|=>Substitute and compare.
How do you solve an equation with variables on both sides?|collect variables on one side and constants on the other|add the variables|ignore constants|=>Balance.
True or false: x + 1 = x + 2 has a solution.|False|True|=>No solution.
True or false: When you multiply both sides of an inequality by −1, you reverse the sign.|True|False|=>Yes.
True or false: 3x + 2 is an equation.|False|True|=>It is an expression.
`);

  /* ---------- statistics & probability ---------- */
  const SP = K("stats-probability");
  B.tpl(SP, (r) => { const n = pick(r, [4, 5, 6]); const m = ri(r, 5, 20); const arr = []; let s = 0; for (let i = 0; i < n - 1; i++) { const v = m + ri(r, -4, 4); arr.push(v); s += v; } arr.push(m * n - s); if (arr[n - 1] < 0) return null; return [`What is the mean of ${arr.join(", ")}?`, num(r, m, [-1, 1, 2, -2, 3]), 0, `Sum = ${m * n}; ${m * n} ÷ ${n} = ${m}.`]; }, 14);
  B.tpl(SP, (r) => { const a = []; const n = pick(r, [5, 7, 9]); for (let i = 0; i < n; i++) a.push(ri(r, 1, 30)); const sorted = a.slice().sort((x, y) => x - y); const med = sorted[(n - 1) / 2]; return [`What is the median of ${a.join(", ")}?`, num(r, med, [-1, 1, 2, -2, 3, sorted[0] - med]).filter((x, i, arr) => arr.indexOf(x) === i), 0, `Sorted: ${sorted.join(", ")}; the middle value is ${med}.`]; }, 14);
  B.tpl(SP, (r) => { const n = ri(r, 5, 8); const a = []; for (let i = 0; i < n; i++) a.push(ri(r, 2, 40)); const rg = Math.max(...a) - Math.min(...a); return [`What is the range of ${a.join(", ")}?`, num(r, rg, [-1, 1, 2, -2, Math.min(...a)]), 0, `${Math.max(...a)} − ${Math.min(...a)} = ${rg}.`]; }, 12);
  B.tpl(SP, (r) => { const q1 = ri(r, 5, 25), iqr = ri(r, 2, 15); const q3 = q1 + iqr; return [`In a box plot, Q1 = ${q1} and Q3 = ${q3}. What is the interquartile range?`, num(r, iqr, [-1, 1, q1, q3, 2]), 0, `IQR = ${q3} − ${q1} = ${iqr}.`]; }, 10);
  B.tpl(SP, (r) => { const s = ri(r, 2, 12); const ways = [0, 0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1][s]; return [`Two fair number cubes are rolled. What is the probability that the sum is ${s}?`, T.mc(r, frac(ways, 36), [frac(ways + 1, 36), frac(ways * 2, 36), frac(ways, 12), frac(ways + 2, 36)].filter((x) => x !== frac(ways, 36)), (rr) => frac(ri(rr, 1, 12), 36)), 0, `There are ${ways} ways out of 36 outcomes.`]; }, 10);
  B.tpl(SP, (r) => { const a = ri(r, 1, 5), b = ri(r, 2, 6), c = ri(r, 1, 5), d = ri(r, 2, 6); if (a >= b || c >= d) return null; return [`P(A) = ${a}/${b} and P(B) = ${c}/${d} for independent events. What is P(A and B)?`, T.mc(r, frac(a * c, b * d), [frac(a + c, b + d), frac(a * d, b * c), frac(a * c, b + d)].filter((x) => x !== frac(a * c, b * d)), (rr) => frac(ri(rr, 1, 7), 12)), 0, `Multiply: ${a}/${b} × ${c}/${d} = ${frac(a * c, b * d)}.`]; }, 10);
  B.tpl(SP, (r) => { const red = ri(r, 2, 7), blue = ri(r, 2, 7); const t = red + blue; return [`A bag has ${red} red and ${blue} blue marbles. Two marbles are drawn without replacement. What is P(red, then red)?`, T.mc(r, frac(red * (red - 1), t * (t - 1)), [frac(red * red, t * t), frac(red, t), frac(red * (red - 1), t * t)].filter((x) => x !== frac(red * (red - 1), t * (t - 1))), (rr) => frac(ri(rr, 1, 9), 20)), 0, `${red}/${t} × ${red - 1}/${t - 1} = ${frac(red * (red - 1), t * (t - 1))}.`]; }, 10);
  B.tpl(SP, (r) => { const f = ri(r, 2, 6), s = ri(r, 2, 8); return [`A coin is flipped and a number cube is rolled. How many outcomes are in the sample space?`, T.mc(r, "12", ["8", "6", "36", "7"], null).slice(0, 4), 0, "2 coin outcomes × 6 die outcomes = 12."]; }, 1);
  B.tpl(SP, (r) => { const n = ri(r, 5, 8); const base = ri(r, 10, 20); const a = []; for (let i = 0; i < n - 1; i++) a.push(base + ri(r, -2, 2)); const out = base + pick(r, [20, 25, 30]); a.push(out); const mean1 = a.reduce((x, y) => x + y, 0) / n; const sorted = a.slice().sort((x, y) => x - y); const med = n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2; return [`The data ${a.join(", ")} include an outlier. Which is closer to the outlier: the mean or the median?`, ["the mean", "the median", "They are equal", "Neither is affected"], 0, `The mean (${mean1.toFixed(1)}) is pulled toward the outlier; the median (${med}) is not.`]; }, 6);
  A("stats-probability", `
What is a scatterplot?|a graph that plots pairs of data to show a relationship|a graph of one variable|a circle graph|=>Points on a coordinate plane.
What is a positive association?|as x increases, y tends to increase|as x increases, y tends to decrease|no pattern|=>Upward trend.
What is a negative association?|as x increases, y tends to decrease|as x increases, y tends to increase|no pattern|=>Downward trend.
What is no association?|no clear pattern between x and y|y always increases|a linear pattern|=>Scattered.
What is a line of best fit?|a line that approximates the trend in a scatterplot|a line through every point|a vertical line|=>Used for prediction.
What is an outlier?|a data value far from the others|the mean|the median|=>May skew the mean.
What is correlation?|a relationship between two variables|proof of cause|a type of graph|=>Does not prove causation.
What is causation?|one event directly causing another|any relationship|a pattern|=>Needs evidence.
What is the mean?|the sum of the data divided by the number of values|the middle value|the most frequent value|=>Average.
What is the median?|the middle value when the data are ordered|the average|the most frequent value|=>Middle.
What is the mode?|the most frequent value|the middle value|the average|=>Most often.
What is the range?|the maximum minus the minimum|the middle value|the average|=>Spread.
What is a quartile?|a value that divides ordered data into four parts|a type of graph|an outlier|=>Q1, Q2, Q3.
What is the interquartile range (IQR)?|Q3 minus Q1|max minus min|the median|=>Middle spread.
What is a box plot?|a graph showing the five-number summary|a graph of pairs|a circle graph|=>Min, Q1, median, Q3, max.
What is the five-number summary?|minimum, Q1, median, Q3, maximum|mean, median, mode, range, IQR|mode, range, mean|=>Used in box plots.
What is probability?|the likelihood that an event will occur|a type of average|a type of graph|=>0 to 1.
What is a sample space?|the set of all possible outcomes|the favorable outcomes|a graph|=>All outcomes.
What is an event?|an outcome or set of outcomes|a type of graph|a probability|=>Sum of 7.
What are independent events?|events where one outcome does not affect the other|events where one affects the other|impossible events|=>Coin flips.
What are dependent events?|events where one outcome affects the other|events that do not affect each other|certain events|=>Without replacement.
What is a compound event?|an event made of two or more simple events|a single event|an impossible event|=>Two dice.
What is a tree diagram?|a diagram that lists all outcomes of compound events|a type of graph|a box plot|=>Branches.
What is a two-way table?|a table showing data by two categories|a graph|a list|=>Rows and columns.
What is relative frequency?|the fraction of observations in a category|the count|the mean|=>Part of the total.
What is the probability of an impossible event?|0|1|1/2|=>Cannot happen.
What is the probability of a certain event?|1|0|1/2|=>Will happen.
What is the probability of flipping heads on a fair coin?|1/2|1/4|1|=>Two equal outcomes.
What is the probability of rolling a 4 on a fair number cube?|1/6|1/4|1/2|=>One of six.
What is the probability of rolling an even number on a number cube?|1/2|1/3|1/6|=>3 of 6.
What is the probability of flipping two heads in a row?|1/4|1/2|1/3|=>½ × ½.
What is the probability of flipping three heads in a row?|1/8|1/6|1/3|=>(½)³.
How many outcomes are there for flipping two coins?|4|2|3|=>HH, HT, TH, TT.
How many outcomes are there for flipping three coins?|8|6|4|=>2³.
How many outcomes are there for rolling two number cubes?|36|12|6|=>6 × 6.
What is the probability of drawing a red marble from a bag of 3 red and 7 blue?|3/10|7/10|3/7|=>Favorable over total.
What is the mean of 2, 4, 6?|4|3|6|=>12 ÷ 3.
What is the median of 3, 9, 5?|5|9|3|=>Order: 3, 5, 9.
What is the mode of 2, 3, 3, 5?|3|2|5|=>Most often.
What is the range of 4, 8, 15?|11|19|8|=>15 − 4.
Which measure of center is least affected by an outlier?|median|mean|range|=>Resistant.
Which graph shows the five-number summary?|box plot|bar graph|circle graph|=>Quartiles.
Which graph best shows a relationship between two numerical variables?|scatterplot|bar graph|circle graph|=>Pairs of values.
Which suggests a positive association?|more study time and higher test scores|more TV time and lower test scores|shoe size and test scores|=>Both increase.
Which suggests a negative association?|more TV time and lower test scores|more study time and higher test scores|height and shoe size|=>One increases, one decreases.
Why can a line of best fit make predictions?|it describes the trend in the data|it passes through every point|it ignores the data|=>Within the data range.
Why is correlation not the same as causation?|two variables may change together without one causing the other|correlation never exists|causation is always present|=>Ice cream and sunburns.
Why is the median a better measure when there are outliers?|it is not pulled toward extreme values|it is always larger|it is always smaller|=>Resistant.
Why do compound probabilities multiply for independent events?|each outcome occurs in the same fraction of cases|they add|they subtract|=>P(A) × P(B).
How do you find P(A and B) for independent events?|multiply P(A) and P(B)|add P(A) and P(B)|subtract|=>Product.
How does drawing without replacement affect probability?|the second probability changes|nothing changes|it always doubles|=>Total decreases.
True or false: The mean is always equal to the median.|False|True|=>Not usually.
True or false: A probability can be greater than 1.|False|True|=>0 to 1.
True or false: Correlation proves causation.|False|True|=>It does not.
`);
})();
