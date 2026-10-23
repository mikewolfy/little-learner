/* Grade 7 Math: bonus question banks. Numbers come from seeded templates, so every answer is computed. */
(function () {
  "use strict";
  const B = window.BONUS, T = B.T, K = (u) => "7/math/" + u;
  const f = (n) => n.toLocaleString("en-US");
  const mn = (x) => String(x).replace(/^-/, "−");
  const near = (r, right, ds, fmt) => { fmt = fmt || mn; const set = ds.map((d) => right + d).filter((x) => x !== right).map(fmt); return T.mc(r, fmt(right), set, (rr) => fmt(right + T.ri(rr, -12, 12) || right + 13)); };
  const NAMES = ["Mia", "Noah", "Ava", "Liam", "Zoe", "Ben", "Lily", "Sam", "Ella", "Max", "Ruby", "Leo", "Nina", "Omar"];
  const nm = (r) => T.pick(r, NAMES);
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const frac = (n, d) => { const g = gcd(n, d); return d / g === 1 ? String(n / g) : `${n / g}/${d / g}`; };
  const A = (u, t) => B.add(K(u), t.split("\n").filter((x) => x.trim()).join("\n"));
  const pw = (b, e) => Math.pow(b, e);
  const sup = { 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶" };
  const ri = T.ri;

  /* ---------- exponents, roots, scientific notation ---------- */
  const EX = K("exponents");
  B.tpl(EX, (r) => { const b = ri(r, 2, 12), e = ri(r, 2, 4); if (pw(b, e) > 20000) return null; return [`${b}${sup[e]} = ?`, near(r, pw(b, e), [-b, b, b * e, pw(b, e - 1), pw(b, e) * 2].filter((x) => x > 0 || true).map((x) => x - pw(b, e)), f), 0, `${b}${sup[e]} = ${Array(e).fill(b).join(" × ")} = ${f(pw(b, e))}.`]; }, 22);
  B.tpl(EX, (r) => { const n = ri(r, 2, 20); return [`√${n * n} = ?`, near(r, n, [-1, 1, 2, -2, n]), 0, `${n} × ${n} = ${n * n}, so √${n * n} = ${n}.`]; }, 16);
  B.tpl(EX, (r) => { const n = ri(r, 2, 14); const v = n * n + ri(r, 1, 2 * n); return [`Between which two consecutive whole numbers is √${v}?`, [`${n} and ${n + 1}`, `${n - 1} and ${n}`, `${n + 1} and ${n + 2}`, `${n + 2} and ${n + 3}`], 0, `${n}² = ${n * n} and ${(n + 1) ** 2} = ${(n + 1) ** 2}; ${v} is between them.`]; }, 12);
  B.tpl(EX, (r) => { const n = ri(r, 2, 10); return [`∛${n ** 3} = ?`, near(r, n, [-1, 1, 2, n * 3 - n]), 0, `${n} × ${n} × ${n} = ${n ** 3}.`]; }, 8);
  B.tpl(EX, (r) => { const a = ri(r, 2, 9), b = ri(r, 2, 4); const mantissa = ri(r, 11, 99) / 10; const k = ri(r, 2, 7); const v = Math.round(mantissa * pw(10, k)); return [`Write ${f(v)} in scientific notation.`, T.mc(r, `${mantissa} × 10${k < 10 ? ["", "", "²", "³", "⁴", "⁵", "⁶", "⁷"][k] : k}`, [`${mantissa} × 10${["", "", "²", "³", "⁴", "⁵", "⁶", "⁷"][k + 1] || "⁸"}`, `${mantissa * 10} × 10${["", "", "²", "³", "⁴", "⁵", "⁶", "⁷"][k - 1] || ""}`, `${mantissa / 10} × 10${["", "", "²", "³", "⁴", "⁵", "⁶", "⁷"][k] }`.replace(/× 10$/, "× 10")]), 0, `Move the decimal point so the first number is between 1 and 10.`]; }, 8);
  B.tpl(EX, (r) => { const m = ri(r, 11, 99) / 10, k = ri(r, 2, 6); const v = Math.round(m * pw(10, k)); return [`${m} × 10${["", "", "²", "³", "⁴", "⁵", "⁶"][k]} = ?`, near(r, v, [-v + v / 10, 0 - v + v * 10, -v + v * 100, -v + v / 100].map((x) => Math.round(x)), f), 0, `Move the decimal point ${k} places to the right.`]; }, 12);
  B.tpl(EX, (r) => { const a = ri(r, 2, 6), b = ri(r, 2, 6), c = ri(r, 2, 4); const v = a + b * c * c; return [`Simplify: ${a} + ${b} × ${c}${sup[2]}`, near(r, v, [-c, c, b * c, (a + b) * c * c - v, b], f), 0, `Exponent first: ${c}² = ${c * c}; then multiply and add: ${a} + ${b * c * c} = ${v}.`]; }, 12);
  B.tpl(EX, (r) => { const a = ri(r, 2, 6), b = ri(r, 2, 5); const A2 = [a, b].sort((x, y) => x - y); if (a === b) return null; return [`Which is greater: ${a}${sup[3]} or ${b}${sup[3]}?`, [`${Math.max(a, b)}${sup[3]}`, `${Math.min(a, b)}${sup[3]}`], 0, `${a}³ = ${a ** 3} and ${b}³ = ${b ** 3}.`]; }, 6);
  B.tpl(EX, (r) => { const b = ri(r, 2, 9), e = ri(r, 2, 4); return [`Which expression equals ${pw(b, e)}?`, T.mc(r, `${b}${sup[e]}`, [`${b} × ${e}`, `${b} + ${e}`, `${e}${sup[b > 6 ? 2 : 3]}`.replace(/\d$/, (m) => m)].filter((x) => x !== `${b}${sup[e]}`), (rr) => `${ri(rr, 2, 9)} × ${ri(rr, 2, 9)}`), 0, `${b}${sup[e]} = ${pw(b, e)}.`]; }, 8);
  A("exponents", `
In 5³, which number is the base?|5|3|15|=>The base is the number being multiplied.
In 5³, which number is the exponent?|3|5|15|=>The exponent tells how many times to multiply the base.
What does 4² mean?|4 × 4|4 × 2|4 + 4|=>Square means multiply the number by itself.
What does 2⁵ mean?|2 × 2 × 2 × 2 × 2|2 × 5|2 + 5|=>Five factors of 2.
What is any nonzero number to the power of 0?|1|0|the number itself|=>x⁰ = 1.
What is any number to the power of 1?|the number itself|1|0|=>x¹ = x.
What is 10⁴?|10,000|1,000|40|=>1 followed by 4 zeros.
What is 10²?|100|20|1,000|=>10 × 10.
What is a perfect square?|a number that is the square of a whole number|any even number|any number with a 2 in it|=>9, 16, 25...
Which number is a perfect square?|49|48|50|=>7 × 7 = 49.
Which number is NOT a perfect square?|50|36|64|=>No whole number squared equals 50.
Which number is a perfect cube?|27|28|18|=>3 × 3 × 3 = 27.
What is the square root of 144?|12|14|72|=>12 × 12 = 144.
What is the square root of 225?|15|25|45|=>15 × 15 = 225.
What is the square root of 400?|20|40|200|=>20 × 20 = 400.
Which is the value of √81?|9|8|81|=>9 × 9 = 81.
Which is between 6 and 7?|√40|√20|√60|=>36 < 40 < 49.
Which is between 4 and 5?|√20|√10|√30|=>16 < 20 < 25.
Which is the best estimate of √50?|about 7.1|about 5|about 25|=>7² = 49.
Which is the best estimate of √10?|about 3.2|about 5|about 1|=>3² = 9.
In scientific notation, the first number must be…|at least 1 and less than 10|greater than 10|less than 1|=>Like 4.5 × 10³.
Which is written in scientific notation?|3.2 × 10⁴|32 × 10³|0.32 × 10⁵|=>3.2 is between 1 and 10.
Which is NOT in scientific notation?|45 × 10²|4.5 × 10³|1.2 × 10⁻²|=>45 isn't between 1 and 10.
What is 6.2 × 10³ in standard form?|6,200|620|62,000|=>Move the decimal 3 places right.
What is 4 × 10⁵ in standard form?|400,000|40,000|4,000,000|=>4 followed by 5 zeros.
What is 7.5 × 10² in standard form?|750|7,500|75|=>Move the decimal 2 places.
What is 3 × 10⁻² in standard form?|0.03|0.3|0.003|=>Move the decimal 2 places left.
What is 0.0005 in scientific notation?|5 × 10⁻⁴|5 × 10⁻³|5 × 10⁴|=>Move the decimal 4 places right.
What is 8,000 in scientific notation?|8 × 10³|8 × 10²|80 × 10²|=>One digit before the decimal.
What is 45,000 in scientific notation?|4.5 × 10⁴|45 × 10³|4.5 × 10⁵|=>4.5 × 10,000.
Which is larger: 3 × 10⁵ or 3 × 10⁴?|3 × 10⁵|3 × 10⁴|They are equal|=>The larger exponent gives a larger number.
Which is larger: 2.5 × 10³ or 4.1 × 10²?|2.5 × 10³|4.1 × 10²|They are equal|=>2,500 vs 410.
True or false: 3² = 6.|False|True|=>3² = 9.
True or false: 2³ = 8.|True|False|=>2 × 2 × 2 = 8.
True or false: (−2)² = 4.|True|False|=>A negative times a negative is positive.
True or false: −2² (without parentheses) equals 4.|False|True|=>−2² = −(2²) = −4.
True or false: √16 = 4.|True|False|=>4 × 4 = 16.
True or false: √25 = 12.5.|False|True|=>√25 = 5.
True or false: 10⁰ = 0.|False|True|=>10⁰ = 1.
What is 2⁴?|16|8|24|=>2 × 2 × 2 × 2 = 16.
What is 3⁴?|81|12|64|=>3 × 3 × 3 × 3 = 81.
What is 5²?|25|10|52|=>5 × 5 = 25.
What is 4³?|64|12|34|=>4 × 4 × 4 = 64.
What is the order of operations?|parentheses, exponents, multiplication/division, addition/subtraction|addition, multiplication, exponents, parentheses|left to right always|=>PEMDAS.
`);

  /* ---------- comparing rational numbers ---------- */
  const RN = K("rational-numbers");
  const dec = (n, d) => { const v = n / d; return Number.isInteger(v * 1000) ? String(v) : v.toFixed(3); };
  const termFrac = [[1, 2], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [1, 8], [3, 8], [5, 8], [7, 8], [1, 10], [3, 10], [7, 10], [9, 10], [1, 20], [3, 20], [7, 20], [9, 20]];
  B.tpl(RN, (r) => { const [n, d] = T.pick(r, termFrac); const right = dec(n, d); return [`Write ${n}/${d} as a decimal.`, T.mc(r, right, [dec(d, n * 1) === right ? "0.5" : (n / d + 0.1).toFixed(2).replace(/0+$/, ""), (n / d * 10).toString(), (n / d / 10).toString(), (d / n).toFixed(2)].filter((x) => x !== right), (rr) => (ri(rr, 1, 99) / 100).toString()), 0, `${n} ÷ ${d} = ${right}.`]; }, 16);
  B.tpl(RN, (r) => { const [n, d] = T.pick(r, termFrac); const p = n / d * 100; return [`Write ${n}/${d} as a percent.`, near(r, p, [-5, 5, -10, 10, 50 - p].map((x) => x), (x) => (Math.round(x * 10) / 10) + "%"), 0, `${n} ÷ ${d} = ${dec(n, d)} = ${p}%.`]; }, 16);
  B.tpl(RN, (r) => { const p = T.pick(r, [5, 8, 12, 15, 20, 25, 30, 35, 40, 45, 60, 65, 75, 80, 85]); return [`Write ${p}% as a decimal.`, T.mc(r, String(p / 100), [String(p / 10), String(p / 1000), String(p)], (rr) => String(ri(rr, 1, 99) / 100)), 0, `Divide by 100: ${p}% = ${p / 100}.`]; }, 12);
  B.tpl(RN, (r) => { const p = T.pick(r, [10, 20, 25, 40, 50, 60, 75, 80]); const fr = frac(p, 100); return [`Write ${p}% as a fraction in simplest form.`, T.mc(r, fr, [frac(p, 10), `${p}/10`, `${p}/1000`, frac(100, p)].filter((x) => x !== fr), (rr) => `${ri(rr, 1, 9)}/${ri(rr, 10, 20)}`), 0, `${p}/100 simplifies to ${fr}.`]; }, 10);
  B.tpl(RN, (r) => { const [n, d] = T.pick(r, termFrac); const dv = n / d; const dd = Math.round((dv + T.pick(r, [-0.15, -0.1, -0.05, 0.05, 0.1, 0.15])) * 100) / 100; if (dd <= 0 || dd === dv) return null; const g = dv > dd ? `${n}/${d}` : String(dd); const l = dv > dd ? String(dd) : `${n}/${d}`; return [`Which is greater: ${n}/${d} or ${dd}?`, [g, l], 0, `${n}/${d} = ${dv}; compare ${dv} with ${dd}.`]; }, 14);
  B.tpl(RN, (r) => { const vals = T.shuf(r, [[1, 2], [1, 4], [3, 4], [3, 5], [2, 5], [7, 10], [3, 8]]).slice(0, 3); const sorted = vals.slice().sort((a, b) => a[0] / a[1] - b[0] / b[1]); if (new Set(vals.map((v) => v[0] / v[1])).size < 3) return null; const toS = (a) => a.map((x) => `${x[0]}/${x[1]}`).join(", "); const rev = sorted.slice().reverse(); const sw = [sorted[1], sorted[0], sorted[2]]; return [`Which list is in order from least to greatest?`, T.mc(r, toS(sorted), [toS(rev), toS(sw), toS(vals)].filter((x) => x !== toS(sorted))), 0, `Convert to decimals: ${sorted.map((x) => dec(x[0], x[1])).join(", ")}.`]; }, 10);
  B.tpl(RN, (r) => { const a = -ri(r, 1, 9), b = -ri(r, 1, 9); if (a === b) return null; const big = Math.max(a, b); return [`Which is greater: ${mn(a)} or ${mn(b)}?`, [mn(big), mn(Math.min(a, b))], 0, `On a number line, the number farther right is greater: ${mn(big)}.`]; }, 8);
  B.tpl(RN, (r) => { const a = ri(r, 1, 15) / 4 * (r() < 0.5 ? -1 : 1), b = ri(r, 1, 15) / 4 * (r() < 0.5 ? -1 : 1); if (a === b) return null; const big = Math.max(a, b); return [`Which is greater: ${mn(a)} or ${mn(b)}?`, [mn(big), mn(Math.min(a, b))], 0, `${mn(big)} is farther to the right on the number line.`]; }, 8);
  B.tpl(RN, (r) => { const v = ri(r, 1, 40) / 10 * (r() < 0.5 ? -1 : 1); return [`What is the absolute value of ${mn(v)}?`, T.mc(r, String(Math.abs(v)), [mn(-Math.abs(v)), "0", String(Math.abs(v) * 10)]), 0, `Distance from zero is never negative: |${mn(v)}| = ${Math.abs(v)}.`]; }, 8);
  A("rational-numbers", `
What is a rational number?|a number that can be written as a fraction of two integers|only a whole number|only a decimal that never ends|=>Includes fractions, decimals that end or repeat, and integers.
Which is a rational number?|0.75|√2|π|=>0.75 = 3/4.
Which is a rational number?|−4|√3|π|=>−4 = −4/1.
Which decimal is equivalent to 1/3?|0.333... (repeating)|0.3|0.13|=>1 ÷ 3 = 0.333...
Which decimal is equivalent to 2/3?|0.666... (repeating)|0.23|0.6|=>2 ÷ 3.
Which decimal is equivalent to 1/8?|0.125|0.18|0.8|=>1 ÷ 8 = 0.125.
Which decimal is equivalent to 1/6?|0.1666... (repeating)|0.16|0.6|=>1 ÷ 6.
Which fraction is equivalent to 0.5?|1/2|1/5|5/10 is wrong|=>0.5 = 5/10 = 1/2.
Which fraction is equivalent to 0.25?|1/4|1/25|2/5|=>25/100 = 1/4.
Which fraction is equivalent to 0.2?|1/5|2/5|1/2|=>2/10 = 1/5.
Which fraction is equivalent to 0.75?|3/4|7/5|1/4|=>75/100 = 3/4.
Which fraction is equivalent to 0.125?|1/8|1/12|1/125|=>125/1000 = 1/8.
Which number is the greatest?|0.8|0.75|0.08|=>0.80 > 0.75 > 0.08.
Which number is the least?|−0.5|−0.05|0.5|=>Negative numbers are less than positives; −0.5 < −0.05.
Which number is the least?|−3|−1|0|=>Farther left on the number line.
Which number is the greatest?|−1|−5|−10|=>The closest to zero among negatives.
Which symbol makes this true? −3 ___ −7|>|<|=|=>−3 is to the right of −7.
Which symbol makes this true? 0.4 ___ 2/5|=|<|>|=>2/5 = 0.4.
Which symbol makes this true? 3/4 ___ 0.7|>|<|=|=>0.75 > 0.7.
Which symbol makes this true? 1/3 ___ 0.33|>|<|=|=>1/3 = 0.3333... > 0.33.
Which symbol makes this true? 5/8 ___ 0.6|>|<|=|=>0.625 > 0.6.
Which symbol makes this true? 2/5 ___ 3/8|>|<|=|=>0.4 > 0.375.
Which is greater: 7/10 or 3/4?|3/4|7/10|They are equal|=>0.75 > 0.70.
Which is greater: 5/6 or 4/5?|5/6|4/5|They are equal|=>0.833 > 0.8.
Which is closest to 1/2?|0.48|0.2|0.9|=>0.48 is near 0.5.
Which is equivalent to 45%?|0.45|4.5|0.045|=>Divide by 100.
Which is equivalent to 6%?|0.06|0.6|6|=>6 ÷ 100.
Which is equivalent to 125%?|1.25|0.125|12.5|=>125 ÷ 100.
Which is equivalent to 0.4?|40%|4%|0.4%|=>Multiply by 100.
Which is equivalent to 0.03?|3%|30%|0.3%|=>0.03 × 100 = 3.
Which percent is equal to 3/5?|60%|35%|53%|=>3 ÷ 5 = 0.6.
Which percent is equal to 7/20?|35%|7%|27%|=>7 ÷ 20 = 0.35.
Which percent is equal to 1/8?|12.5%|18%|8%|=>1 ÷ 8 = 0.125.
Which number line point shows −1.5?|halfway between −2 and −1|halfway between 1 and 2|at −1|=>−1.5 is between −2 and −1.
What is the opposite of −7?|7|−7|1/7|=>Opposites are the same distance from 0 on opposite sides.
What is the opposite of 3.5?|−3.5|3.5|0.35|=>Opposite sign.
What is the absolute value of −12?|12|−12|0|=>Absolute value is distance from 0.
What is the absolute value of 5?|5|−5|0|=>Distance from 0.
Which statement is true?|The absolute values of −6 and 6 are equal.|The absolute value of −6 is negative.|6 is less than −6.|=>Both are 6 units from zero.
True or false: Every integer is a rational number.|True|False|=>Any integer n = n/1.
True or false: Every rational number is an integer.|False|True|=>1/2 is rational but not an integer.
True or false: 0.5 and 1/2 are equal.|True|False|=>Same value.
True or false: −0.7 is greater than −0.07.|False|True|=>−0.7 is farther left.
True or false: 3/8 is greater than 0.4.|False|True|=>0.375 < 0.4.
True or false: π is a rational number.|False|True|=>π can't be written as a fraction.
`);

  /* ---------- integers & rational number operations ---------- */
  const IN = K("integers");
  B.tpl(IN, (r) => { const a = ri(r, -20, 20), b = ri(r, -20, 20); const s = a + b; return [`${mn(a)} + (${mn(b)}) = ?`, near(r, s, [-2, 2, a - b - s, -s, 10]), 0, `${mn(a)} + ${mn(b)} = ${mn(s)}.`]; }, 18);
  B.tpl(IN, (r) => { const a = ri(r, -20, 20), b = ri(r, -20, 20); const s = a - b; return [`${mn(a)} − (${mn(b)}) = ?`, near(r, s, [-2, 2, a + b - s, -s]), 0, `Subtracting ${mn(b)} is the same as adding ${mn(-b)}: ${mn(s)}.`]; }, 18);
  B.tpl(IN, (r) => { const a = ri(r, -12, 12), b = ri(r, -12, 12); if (!a || !b) return null; return [`${mn(a)} × (${mn(b)}) = ?`, near(r, a * b, [-a * b - a * b, a, b, 10, -10].map((x) => x), mn), 0, `${Math.sign(a) === Math.sign(b) ? "Same signs give a positive" : "Different signs give a negative"} product: ${mn(a * b)}.`]; }, 18);
  B.tpl(IN, (r) => { const b = ri(r, -12, 12), q = ri(r, -12, 12); if (!b || !q) return null; const a = b * q; return [`${mn(a)} ÷ (${mn(b)}) = ?`, near(r, q, [-1, 1, -2 * q, 2, q * 2]), 0, `${mn(a)} ÷ ${mn(b)} = ${mn(q)}.`]; }, 18);
  B.tpl(IN, (r) => { const t = ri(r, -15, 10), d = ri(r, 3, 20), down = r() < 0.5; const nw = down ? t - d : t + d; return [`The temperature is ${mn(t)}°F. It ${down ? "drops" : "rises"} ${d} degrees. What is the new temperature?`, near(r, nw, [-d, d, 10, -10], (x) => mn(x) + "°F"), 0, `${mn(t)} ${down ? "−" : "+"} ${d} = ${mn(nw)}°F.`]; }, 12);
  B.tpl(IN, (r) => { const a = ri(r, -15, 15), b = ri(r, -15, 15); return [`What is the distance between ${mn(a)} and ${mn(b)} on a number line?`, near(r, Math.abs(a - b), [-1, 1, 2, a + b].map((x) => x), (x) => String(Math.abs(x))), 0, `|${mn(a)} − ${mn(b)}| = ${Math.abs(a - b)}.`]; }, 10);
  B.tpl(IN, (r) => { const a = ri(r, 2, 9) * (r() < 0.5 ? -1 : 1) / 2, b = ri(r, 2, 9) * (r() < 0.5 ? -1 : 1) / 2; const s = a + b; return [`${mn(a)} + (${mn(b)}) = ?`, near(r, s, [-1, 1, -2 * s, 0.5, -0.5], (x) => mn(Math.round(x * 10) / 10)), 0, `${mn(a)} + ${mn(b)} = ${mn(Math.round(s * 10) / 10)}.`]; }, 10);
  B.tpl(IN, (r) => { const a = ri(r, -9, 9), b = ri(r, -9, 9), c = ri(r, -9, 9); const s = a + b * c; const pp = (x) => (x < 0 ? `(${mn(x)})` : mn(x)); return [`Simplify: ${mn(a)} + ${pp(b)} × ${pp(c)}`, near(r, s, [-1, 1, (a + b) * c - s, 2, -2]), 0, `Multiply first: ${mn(b * c)}; then add ${mn(a)} to get ${mn(s)}.`]; }, 10);
  B.tpl(IN, (r) => { const n = nm(r), bal = ri(r, 10, 60), w = ri(r, 70, 120); return [`${n} has $${bal} and writes a check for $${w}. What is ${n}'s new balance?`, near(r, bal - w, [-10, 10, w + bal - (bal - w), -2], mn), 0, `${bal} − ${w} = ${mn(bal - w)}.`]; }, 8);
  A("integers", `
What are integers?|whole numbers and their opposites|only positive numbers|only fractions|=>…−2, −1, 0, 1, 2…
What is the sum of a number and its opposite?|0|1|the number|=>5 + (−5) = 0.
What is −8 + 8?|0|−16|16|=>Opposites cancel.
What is −5 + (−3)?|−8|−2|8|=>Same signs: add and keep the sign.
What is −5 + 3?|−2|−8|2|=>Different signs: subtract and keep the sign of the larger absolute value.
What is 5 + (−3)?|2|−2|8|=>Different signs.
What is −5 − 3?|−8|−2|2|=>Subtracting 3 is the same as adding −3.
What is 5 − (−3)?|8|2|−8|=>Subtracting a negative is adding.
What is −5 − (−3)?|−2|−8|2|=>−5 + 3 = −2.
What is −6 × 4?|−24|24|−10|=>Different signs give a negative.
What is −6 × (−4)?|24|−24|−10|=>Same signs give a positive.
What is 18 ÷ (−3)?|−6|6|−15|=>Different signs give a negative.
What is −18 ÷ (−3)?|6|−6|−15|=>Same signs give a positive.
What is −20 ÷ 4?|−5|5|−16|=>Different signs.
What is (−3)²?|9|−9|6|=>A negative times a negative.
What is (−2)³?|−8|8|−6|=>−2 × −2 × −2.
What is −3²?|−9|9|6|=>−(3²).
What is the absolute value of −9 minus the absolute value of 4?|5|−13|13|=>9 − 4.
What is the opposite of the absolute value of −7?|−7|7|0|=>The absolute value of −7 is 7; its opposite is −7.
Which is true?|The product of two negatives is positive.|The product of two negatives is negative.|The sum of two negatives is positive.|=>Rules of signs.
Which is true?|The sum of two negatives is negative.|The sum of two negatives is positive.|The sum of two negatives is zero.|=>−3 + −4 = −7.
Which is true?|Subtracting a negative number is like adding a positive.|Subtracting a negative number is like subtracting a positive.|Subtracting a negative gives a negative.|=>Keep-change-change.
Which expression has the same value as 4 − 9?|4 + (−9)|4 + 9|9 − 4|=>Subtracting is adding the opposite.
Which expression has the same value as −3 − (−8)?|−3 + 8|−3 − 8|3 + 8|=>Subtract a negative.
Which is greater: −12 or −3?|−3|−12|They are equal|=>−3 is to the right.
A submarine at −200 feet rises 75 feet. Where is it now?|−125 feet|−275 feet|125 feet|=>−200 + 75.
A diver at −30 feet dives 12 more feet down. Where is the diver now?|−42 feet|−18 feet|42 feet|=>−30 − 12.
The temperature falls from 3°F to −7°F. How many degrees did it drop?|10|4|−10|=>3 − (−7) = 10.
If a debt of $15 is paid with $20, what is the final balance?|$5|−$5|$35|=>−15 + 20 = 5.
What is the rule for multiplying integers with different signs?|the product is negative|the product is positive|the product is zero|=>(−)(+) = −.
What is the rule for dividing integers with the same sign?|the quotient is positive|the quotient is negative|the quotient is zero|=>(−) ÷ (−) = +.
Which equals 0?|7 + (−7)|7 × (−7)|7 − (−7)|=>Additive inverses.
Which equals 1?|−6 ÷ (−6)|−6 − 6|−6 × 6|=>A number divided by itself.
What is −1.5 + 4.5?|3|−3|6|=>4.5 − 1.5.
What is −2.5 − 1.5?|−4|−1|1|=>−2.5 + (−1.5).
What is −3/4 + 1/4?|−1/2|−1|1|=>Add numerators.
What is −1/2 − 1/4?|−3/4|−1/4|3/4|=>−2/4 − 1/4.
What is 2/3 × (−3/4)?|−1/2|1/2|−2/3|=>(2×3)/(3×4) = 1/2 negative.
What is −3/5 ÷ (1/5)?|−3|3|−1/3|=>Multiply by the reciprocal.
True or false: 0 is neither positive nor negative.|True|False|=>Zero is neutral.
True or false: −6 × 0 = −6.|False|True|=>Anything times 0 is 0.
True or false: The product of 3 negative numbers is negative.|True|False|=>−·−·− = −.
True or false: The quotient of two negatives is negative.|False|True|=>Same signs give a positive.
`);

  /* ---------- ratios, rates, percents ---------- */
  const PR = K("proportions");
  B.tpl(PR, (r) => { const p = T.pick(r, [10, 15, 20, 25, 30, 40, 50, 60, 75]), n = ri(r, 4, 40) * 10; const v = p * n / 100; return [`What is ${p}% of ${n}?`, near(r, v, [-v / 2, v / 2, n - v, v * 2, 10].map((x) => Math.round(x * 100) / 100), (x) => String(Math.round(x * 100) / 100)), 0, `${p}% of ${n} = ${p / 100} × ${n} = ${v}.`]; }, 16);
  B.tpl(PR, (r) => { const p = T.pick(r, [10, 15, 20, 25, 30]), price = ri(r, 4, 40) * 5; const disc = price * p / 100; const sale = price - disc; return [`A $${price} jacket is ${p}% off. What is the sale price?`, near(r, sale, [-disc, disc, -5, 5, price], (x) => "$" + (Math.round(x * 100) / 100).toFixed(2).replace(".00", "")), 0, `Discount = ${p}% of $${price} = $${disc}; $${price} − $${disc} = $${sale}.`]; }, 14);
  B.tpl(PR, (r) => { const price = ri(r, 4, 40) * 5, tax = T.pick(r, [5, 6, 7, 8]); const t = price * tax / 100; return [`A $${price} item has ${tax}% sales tax. What is the tax?`, near(r, t, [-t / 2, t / 2, t * 2, 1].map((x) => Math.round(x * 100) / 100), (x) => "$" + (Math.round(x * 100) / 100).toFixed(2)), 0, `${tax}% of $${price} = $${t.toFixed(2)}.`]; }, 10);
  B.tpl(PR, (r) => { const bill = ri(r, 12, 80), tip = T.pick(r, [10, 15, 20]); const t = bill * tip / 100; return [`Your meal costs $${bill}. What is a ${tip}% tip?`, near(r, t, [-t / 2, t / 2, t * 2, 1].map((x) => Math.round(x * 100) / 100), (x) => "$" + (Math.round(x * 100) / 100).toFixed(2)), 0, `${tip}% of $${bill} = $${t.toFixed(2)}.`]; }, 10);
  B.tpl(PR, (r) => { const old = ri(r, 4, 30) * 5, p = T.pick(r, [10, 20, 25, 50]); const nw = old + old * p / 100; return [`A price goes from $${old} to $${nw}. What is the percent increase?`, near(r, p, [-5, 5, 10, 25 - p].map((x) => x), (x) => x + "%"), 0, `Increase = $${nw - old}; ${nw - old} ÷ ${old} = ${p / 100} = ${p}%.`]; }, 10);
  B.tpl(PR, (r) => { const old = ri(r, 4, 30) * 5, p = T.pick(r, [10, 20, 25, 50]); const nw = old - old * p / 100; return [`A price drops from $${old} to $${nw}. What is the percent decrease?`, near(r, p, [-5, 5, 10, 25 - p].map((x) => x), (x) => x + "%"), 0, `Decrease = $${old - nw}; ${old - nw} ÷ ${old} = ${p / 100} = ${p}%.`]; }, 10);
  B.tpl(PR, (r) => { const a = ri(r, 2, 9), b = ri(r, 2, 9), k = ri(r, 2, 9); if (gcd(a, b) !== 1) return null; return [`${a}/${b} = x/${b * k}. What is x?`, near(r, a * k, [-k, k, a, 1, -1]), 0, `Multiply ${a} by ${k}: x = ${a * k}.`]; }, 12);
  B.tpl(PR, (r) => { const a = ri(r, 2, 8), b = ri(r, 3, 12), k = ri(r, 2, 6); return [`If ${a} notebooks cost $${a * b}, how much do ${a * k} notebooks cost?`, near(r, a * k * b, [-b, b, a * b, 10], (x) => "$" + x), 0, `Unit price $${b}; ${a * k} × $${b} = $${a * k * b}.`]; }, 12);
  B.tpl(PR, (r) => { const d = ri(r, 4, 20) * 10, t = ri(r, 2, 6); const rate = d; return [`A car travels ${d * t} miles in ${t} hours. What is its average speed?`, near(r, rate, [-10, 10, d * t, 5, d / 2].map((x) => x), (x) => x + " mph"), 0, `${d * t} ÷ ${t} = ${rate} miles per hour.`]; }, 10);
  B.tpl(PR, (r) => { const c = ri(r, 3, 12), n = ri(r, 2, 8); const p = c * n; return [`${n} pounds of apples cost $${p}. What is the unit rate?`, near(r, c, [-1, 1, 2, p], (x) => "$" + x + " per pound"), 0, `$${p} ÷ ${n} = $${c} per pound.`]; }, 10);
  B.tpl(PR, (r) => { const a = ri(r, 2, 9), b = ri(r, 2, 9); if (a === b) return null; const g = gcd(a * 3, b * 3); return [`The ratio of cats to dogs is ${a * 3}:${b * 3}. What is the simplest form?`, T.mc(r, `${a * 3 / g}:${b * 3 / g}`, [`${a * 3}:${b * 3}`.replace(/.*/, `${b * 3 / g}:${a * 3 / g}`), `${a}:${b * 3}`, `${a * 3}:${b}`].filter((x) => x !== `${a * 3 / g}:${b * 3 / g}`), (rr) => `${ri(rr, 1, 9)}:${ri(rr, 1, 9)}`), 0, `Divide both by ${g}.`]; }, 8);
  B.tpl(PR, (r) => { const n = ri(r, 3, 9), p = ri(r, 2, 8) * 10; const total = n * 100; return [`In a class of ${total / 10}, ${p}% are girls. How many are girls?`, near(r, total / 10 * p / 100, [-1, 1, 2, -2, 5]), 0, `${p}% of ${total / 10} = ${total / 10 * p / 100}.`]; }, 8);
  A("proportions", `
What is a ratio?|a comparison of two quantities|the sum of two numbers|a type of equation|=>Ratios compare quantities.
What are three ways to write the ratio 2 to 5?|2:5, 2/5, 2 to 5|2+5, 2−5, 2×5|5:2, 5/2, 5 to 2|=>Same comparison.
What is a rate?|a ratio comparing quantities with different units|a ratio with the same units|a percent only|=>Miles per hour.
What is a unit rate?|a rate with 1 as its denominator|any ratio|a percent|=>Cost per 1 item.
Which is a unit rate?|60 miles per 1 hour|120 miles per 2 hours|3 apples for $5|=>The second quantity is 1.
What is a proportion?|an equation saying two ratios are equal|a type of fraction|an inequality|=>a/b = c/d.
Which pair of ratios forms a proportion?|2/3 and 4/6|2/3 and 4/5|2/3 and 3/4|=>Both equal 2/3.
Solve: 3/5 = x/10.|6|3|15|=>Multiply by 2.
Solve: 4/9 = 12/x.|27|3|16|=>Multiply by 3.
Solve: x/6 = 5/10.|3|5|2|=>5/10 = 1/2.
Solve: 2/7 = 8/x.|28|4|14|=>Multiply by 4.
Which method solves a proportion?|cross multiplication|adding the numerators|subtracting the denominators|=>a·d = b·c.
What do you get by cross multiplying 3/4 = x/8?|3 × 8 = 4 × x|3 + 8 = 4 + x|3 × 4 = 8 × x|=>Cross products are equal.
What does 'percent' mean?|per hundred|per ten|per thousand|=>Cent means 100.
What is 50% of 80?|40|50|30|=>Half.
What is 25% of 80?|20|25|40|=>A quarter.
What is 10% of 350?|35|3.5|350|=>Move the decimal one place.
What is 1% of 600?|6|60|0.6|=>Divide by 100.
What is 200% of 15?|30|15|45|=>Twice the amount.
What is 150% of 20?|30|25|15|=>1.5 × 20.
What is 5% of 40?|2|20|4|=>10% is 4; half of that is 2.
If 20% of a number is 12, what is the number?|60|240|32|=>12 ÷ 0.2 = 60.
12 is what percent of 48?|25%|4%|12%|=>12/48 = 1/4.
9 is what percent of 36?|25%|9%|40%|=>9/36 = 1/4.
What is the percent increase from 20 to 30?|50%|10%|33%|=>10 ÷ 20 = 50%.
What is the percent decrease from 50 to 40?|20%|10%|25%|=>10 ÷ 50.
What is the best estimate of 19% of 400?|80|19|200|=>20% of 400.
A sweater costs $40 and is 25% off. What is the discount?|$10|$30|$25|=>25% of 40.
What is the final price after a 10% discount on $60?|$54|$6|$50|=>60 − 6.
What is the final price after 8% tax on $50?|$54|$58|$4|=>50 + 4.
What is simple interest?|interest earned only on the original amount|interest on interest|a fee|=>I = P × r × t.
What is the formula for simple interest?|I = P × r × t|I = P + r + t|I = P ÷ r|=>Principal × rate × time.
How much simple interest is earned on $200 at 5% for 2 years?|$20|$10|$100|=>200 × 0.05 × 2.
What does 'scale 1 inch = 5 miles' mean?|1 inch on the map equals 5 miles in real life|5 inches equal 1 mile|1 inch equals 5 feet|=>A scale relates map and real distance.
On a map, 2 inches = 10 miles. How many miles is 5 inches?|25|20|10|=>5 miles per inch.
Which is the better deal: 3 pencils for $1.20 or 5 pencils for $1.75?|5 pencils for $1.75|3 pencils for $1.20|They are equal|=>$0.35 vs $0.40 each.
Which is the unit rate of 150 words in 3 minutes?|50 words per minute|450 words per minute|153 words per minute|=>150 ÷ 3.
True or false: 50% is the same as 1/2.|True|False|=>50/100 = 1/2.
True or false: 25% is the same as 1/5.|False|True|=>25% = 1/4.
True or false: A percent can be greater than 100%.|True|False|=>150% is 1.5 times.
True or false: If the ratio of boys to girls is 3:2, there are more girls.|False|True|=>3 > 2, so more boys.
`);

  /* ---------- proportional relationships & slope ---------- */
  const SL = K("slope");
  B.tpl(SL, (r) => { const x1 = ri(r, 0, 5), y1 = ri(r, 0, 8), dx = ri(r, 1, 5), m = ri(r, -4, 6); if (!m) return null; const x2 = x1 + dx, y2 = y1 + m * dx; return [`What is the slope of the line through (${x1}, ${mn(y1)}) and (${x2}, ${mn(y2)})?`, near(r, m, [-1, 1, 2, -2, -2 * m].map((x) => x), mn), 0, `Slope = (${mn(y2)} − ${mn(y1)}) ÷ (${x2} − ${x1}) = ${mn(m * dx)} ÷ ${dx} = ${mn(m)}.`]; }, 22);
  B.tpl(SL, (r) => { const k = ri(r, 2, 9), x = ri(r, 2, 8); return [`y varies directly with x and y = ${k * x} when x = ${x}. What is the constant of proportionality k?`, near(r, k, [-1, 1, 2, k * x - k]), 0, `k = y ÷ x = ${k * x} ÷ ${x} = ${k}.`]; }, 12);
  B.tpl(SL, (r) => { const k = ri(r, 2, 9), x = ri(r, 3, 12); return [`y = ${k}x. What is y when x = ${x}?`, near(r, k * x, [-k, k, x, 10]), 0, `y = ${k} × ${x} = ${k * x}.`]; }, 12);
  B.tpl(SL, (r) => { const k = ri(r, 2, 8), pts = [1, 2, 3, 4].map((x) => [x, k * x]); return [`A table shows (1, ${pts[0][1]}), (2, ${pts[1][1]}), (3, ${pts[2][1]}), (4, ${pts[3][1]}). What is the equation?`, T.mc(r, `y = ${k}x`, [`y = x + ${k}`, `y = ${k}x + 1`, `y = x/${k}`, `y = ${k + 1}x`]), 0, `y ÷ x = ${k} each time, so y = ${k}x.`]; }, 10);
  B.tpl(SL, (r) => { const k = ri(r, 2, 8), x = ri(r, 2, 6); const n = nm(r); return [`${n} earns $${k} for each hour of work. How much does ${n} earn in ${x} hours?`, near(r, k * x, [-k, k, x, 10], (v) => "$" + v), 0, `Rate $${k}/hr × ${x} hrs = $${k * x}.`]; }, 10);
  B.tpl(SL, (r) => { const m = ri(r, 1, 6), b = ri(r, -8, 8); return [`What is the slope of y = ${m}x ${b >= 0 ? "+" : "−"} ${Math.abs(b) || 3}?`, near(r, m, [-1, 1, 2, -m, b]), 0, `In y = mx + b, the slope is m = ${m}.`]; }, 10);
  B.tpl(SL, (r) => { const m = ri(r, 1, 6), b = ri(r, 1, 9); return [`What is the y-intercept of y = ${m}x + ${b}?`, near(r, b, [-1, 1, m, -b]), 0, `In y = mx + b, b = ${b}.`]; }, 10);
  B.tpl(SL, (r) => { const n = ri(r, 1, 8), d = ri(r, 2, 8); if (gcd(n, d) !== 1) return null; return [`A line rises ${n} units for every ${d} units it moves right. What is its slope?`, T.mc(r, `${n}/${d}`, [`${d}/${n}`, `${n}`, `${d}`, `-${n}/${d}`.replace("-", "−")]), 0, `Slope = rise ÷ run = ${n}/${d}.`]; }, 10);
  A("slope", `
What is slope?|the steepness of a line, rise over run|the starting point|the x-intercept|=>Slope = rise ÷ run.
What does 'rise' mean in rise over run?|the vertical change|the horizontal change|the length|=>Up or down.
What does 'run' mean in rise over run?|the horizontal change|the vertical change|the length|=>Left or right.
What is the slope formula?|(y₂ − y₁) ÷ (x₂ − x₁)|(x₂ − x₁) ÷ (y₂ − y₁)|y₂ + y₁|=>Change in y over change in x.
A line that goes up from left to right has what kind of slope?|positive|negative|zero|=>Rises.
A line that goes down from left to right has what kind of slope?|negative|positive|zero|=>Falls.
A horizontal line has what slope?|0|undefined|1|=>No rise.
A vertical line has what slope?|undefined|0|1|=>Run is zero.
What is the slope of y = 4x?|4|1|0|=>m = 4.
What is the slope of y = −2x + 3?|−2|3|2|=>m = −2.
What is the y-intercept of y = 5x − 7?|−7|5|7|=>b = −7.
What does 'proportional relationship' mean?|y = kx; the ratio y/x is constant|y = x + k|y changes randomly|=>Passes through the origin.
Where does the graph of a proportional relationship pass through?|the origin (0, 0)|(1, 1) only|the y-axis only|=>y = kx has b = 0.
What is the constant of proportionality?|the constant ratio y/x|the y-intercept|the starting value|=>k.
In y = 3x, what is the constant of proportionality?|3|0|y|=>k = 3.
Which table shows a proportional relationship?|(1, 3), (2, 6), (3, 9)|(1, 4), (2, 6), (3, 8)|(1, 5), (2, 5), (3, 5)|=>y/x = 3 each time.
Which table does NOT show a proportional relationship?|(1, 4), (2, 6), (3, 8)|(1, 2), (2, 4), (3, 6)|(2, 6), (4, 12), (5, 15)|=>The ratio isn't constant.
Which equation shows a proportional relationship?|y = 6x|y = 6x + 2|y = x + 6|=>No added constant.
Which graph shows a proportional relationship?|a straight line through the origin|a straight line not through the origin|a curve|=>Starts at (0, 0).
What is the rate of change?|how much y changes for each 1 unit of x|the y-intercept|the area|=>Same as slope for a line.
A car goes 60 miles in 1 hour, 120 in 2 hours, 180 in 3 hours. What is the rate of change?|60 mph|120 mph|180 mph|=>60 per hour.
What is the slope between (0, 0) and (4, 8)?|2|4|8|=>8 ÷ 4.
What is the slope between (1, 3) and (3, 7)?|2|4|1/2|=>4 ÷ 2.
What is the slope between (2, 5) and (4, 5)?|0|2|5|=>No change in y.
What is the slope between (−1, 2) and (1, −2)?|−2|2|−1|=>−4 ÷ 2.
What is the slope between (0, 3) and (6, 0)?|−1/2|2|−2|=>−3 ÷ 6.
A line has slope 3 and passes through (0, 0). What is another point on the line?|(1, 3)|(1, 4)|(3, 1)|=>y = 3x.
A line has slope 1/2 and passes through (0, 0). What is another point on the line?|(2, 1)|(1, 2)|(2, 4)|=>y = x/2.
If the slope is 2 and you move right 3, how far do you move up?|6|3|5|=>2 × 3.
If a graph shows steeper slope, the rate of change is…|greater|smaller|zero|=>Steeper = greater.
True or false: A larger slope means a steeper line.|True|False|=>Absolute value matters.
True or false: The slope of every horizontal line is 0.|True|False|=>No vertical change.
True or false: Every straight line has a y-intercept.|False|True|=>Vertical lines have none.
True or false: In y = kx, when x = 0, y = 0.|True|False|=>b = 0.
True or false: The point (2, 7) is on the line y = 3x + 1.|True|False|=>3(2) + 1 = 7.
True or false: The point (1, 5) is on the line y = 2x + 4.|False|True|=>2(1) + 4 = 6.
`);

  /* ---------- one-step equations: add/subtract ---------- */
  const V = "xnabmy";
  const vr = (r) => T.pick(r, ["x", "n", "a", "b", "m", "p", "t"]);
  const OS1 = K("one-step-add-sub");
  B.tpl(OS1, (r) => { const v = vr(r), a = ri(r, 2, 40), s = ri(r, 2, 40); return [`Solve: ${v} + ${a} = ${a + s}`, near(r, s, [-a, a, 1, -1, a + s]), 0, `Subtract ${a} from both sides: ${v} = ${s}.`]; }, 14);
  B.tpl(OS1, (r) => { const v = vr(r), a = ri(r, 2, 40), s = ri(r, 2, 40); return [`Solve: ${v} − ${a} = ${s}`, near(r, a + s, [-a, a, 1, -1]), 0, `Add ${a} to both sides: ${v} = ${a + s}.`]; }, 14);
  B.tpl(OS1, (r) => { const v = vr(r), a = ri(r, 2, 40), t = ri(r, 2, 50); return [`Solve: ${a} + ${v} = ${a + t}`, near(r, t, [-a, a, 1, -1]), 0, `Subtract ${a}: ${v} = ${t}.`]; }, 10);
  B.tpl(OS1, (r) => { const v = vr(r), a = ri(r, 3, 60) / 10, s = ri(r, 3, 60) / 10; const sum = Math.round((a + s) * 10) / 10; return [`Solve: ${v} + ${a} = ${sum}`, near(r, s, [-0.1, 0.1, -a, 1].map((x) => Math.round(x * 10) / 10), (x) => String(Math.round(x * 10) / 10)), 0, `Subtract ${a} from both sides: ${v} = ${s}.`]; }, 10);
  B.tpl(OS1, (r) => { const v = vr(r), s = ri(r, 2, 30), a = ri(r, 2, 30); return [`Solve: ${v} + ${a} = ${s + a}. What is ${v} + 10?`, near(r, s + 10, [-a, a, 1, -1]), 0, `${v} = ${s}, so ${v} + 10 = ${s + 10}.`]; }, 6);
  B.tpl(OS1, (r) => { const n = nm(r), t = th(r), a = ri(r, 5, 40), s = ri(r, 3, 30); return [`${n} had some ${t}. After getting ${a} more, ${n} has ${a + s}. Which equation shows this?`, T.mc(r, `x + ${a} = ${a + s}`, [`x − ${a} = ${a + s}`, `${a} − x = ${a + s}`, `x × ${a} = ${a + s}`]), 0, `The unknown plus the ${a} added equals the total.`]; }, 8);
  function th(r) { return T.pick(r, ["cards", "marbles", "stickers", "coins", "books"]); }
  B.tpl(OS1, (r) => { const n = nm(r), t = th(r), a = ri(r, 5, 40), s = ri(r, 3, 30); return [`${n} had some ${t}. After giving away ${a}, ${n} has ${s} left. How many did ${n} start with?`, near(r, a + s, [-a, a, 1, -1]), 0, `x − ${a} = ${s}, so x = ${a + s}.`]; }, 12);
  B.tpl(OS1, (r) => { const v = vr(r), a = ri(r, 2, 30), s = ri(r, 2, 30); const ok = r() < 0.5; const c = ok ? s : s + ri(r, 1, 3); return [`Is ${v} = ${c} a solution to ${v} + ${a} = ${a + s}?`, ok ? ["Yes", "No"] : ["No", "Yes"], 0, `${c} + ${a} = ${c + a}, which ${ok ? "equals" : "does not equal"} ${a + s}.`]; }, 12);
  A("one-step-add-sub", `
What is an equation?|a statement that two expressions are equal|an expression with no equal sign|a type of fraction|=>It has an equal sign.
What does it mean to solve an equation?|find the value of the variable that makes it true|add all the numbers|graph it|=>Isolate the variable.
What is a variable?|a letter that stands for an unknown number|a number|an operation|=>x, n, a.
What is the inverse operation of addition?|subtraction|multiplication|addition|=>Subtraction undoes addition.
What is the inverse operation of subtraction?|addition|division|subtraction|=>Addition undoes subtraction.
What is the Subtraction Property of Equality?|subtracting the same number from both sides keeps the equation balanced|subtracting only from the left side|adding to one side|=>Keep both sides equal.
What is the Addition Property of Equality?|adding the same number to both sides keeps the equation balanced|adding only to the left|subtracting from one side|=>Keep both sides equal.
To solve x + 9 = 15, what should you do?|subtract 9 from both sides|add 9 to both sides|multiply both sides by 9|=>Undo addition.
To solve x − 6 = 10, what should you do?|add 6 to both sides|subtract 6 from both sides|divide both sides by 6|=>Undo subtraction.
Solve: x + 7 = 12|5|19|−5|=>12 − 7.
Solve: x − 4 = 9|13|5|−5|=>9 + 4.
Solve: 8 + x = 20|12|28|−12|=>20 − 8.
Solve: x + 15 = 15|0|30|15|=>15 − 15.
Solve: x − 12 = 0|12|0|−12|=>0 + 12.
Solve: x + 3.5 = 10|6.5|13.5|7|=>10 − 3.5.
Solve: x − 2.4 = 6|8.4|3.6|4.6|=>6 + 2.4.
Solve: x + 1/2 = 3/2|1|2|1/2|=>3/2 − 1/2.
Solve: x − 1/4 = 3/4|1|1/2|3/4|=>3/4 + 1/4.
Solve: n + 100 = 350|250|450|35|=>350 − 100.
Solve: p − 75 = 25|100|50|−50|=>25 + 75.
Which equation has the solution x = 7?|x + 3 = 10|x + 3 = 4|x − 3 = 10|=>7 + 3 = 10.
Which equation has the solution x = 5?|x − 2 = 3|x + 2 = 3|x − 2 = 7|=>5 − 2 = 3.
Which value of x makes x + 8 = 14 true?|6|22|−6|=>6 + 8.
Which value of x makes x − 9 = 3 true?|12|−6|6|=>12 − 9.
How do you check your solution?|substitute it back into the original equation|add it to the answer|multiply by 2|=>Plug it in.
Check: Is x = 6 a solution of x + 9 = 15?|Yes|No|Cannot tell|=>6 + 9 = 15.
Check: Is x = 11 a solution of x − 4 = 5?|No|Yes|Cannot tell|=>11 − 4 = 7, not 5.
Which equation matches 'a number increased by 8 is 20'?|x + 8 = 20|x − 8 = 20|8 − x = 20|=>Increased means add.
Which equation matches 'a number decreased by 5 is 12'?|x − 5 = 12|x + 5 = 12|5 − x = 12|=>Decreased means subtract.
Which equation matches '9 more than a number is 30'?|x + 9 = 30|x − 9 = 30|9x = 30|=>More than means add.
Which equation matches '7 less than a number is 11'?|x − 7 = 11|7 − x = 11|x + 7 = 11|=>Less than means subtract from the number.
A jacket costs $x. After a $15 discount it costs $40. Which equation matches?|x − 15 = 40|x + 15 = 40|15x = 40|=>The original minus the discount.
Maria had $x and earned $20 more. Now she has $65. Which equation matches?|x + 20 = 65|x − 20 = 65|20x = 65|=>Start plus earnings.
True or false: Adding 5 to only one side of an equation keeps it balanced.|False|True|=>Both sides must change equally.
True or false: x + 0 = x for any x.|True|False|=>Identity property.
True or false: The equation x + 4 = x + 9 has a solution.|False|True|=>4 never equals 9.
True or false: If x − 3 = 7, then x = 4.|False|True|=>x = 10.
`);

  /* ---------- one-step with integers ---------- */
  const OS2 = K("one-step-integers");
  B.tpl(OS2, (r) => { const v = vr(r), a = ri(r, -20, 20), s = ri(r, -20, 20); if (!a) return null; return [`Solve: ${v} + (${mn(a)}) = ${mn(a + s)}`, near(r, s, [-2, 2, -s * 2, 1]), 0, `Add ${mn(-a)} to both sides: ${v} = ${mn(s)}.`]; }, 16);
  B.tpl(OS2, (r) => { const v = vr(r), a = ri(r, -20, 20), s = ri(r, -20, 20); if (!a) return null; return [`Solve: ${v} − (${mn(a)}) = ${mn(s)}`, near(r, a + s, [-2, 2, -(a + s) * 2, 1]), 0, `${v} = ${mn(s)} + (${mn(a)}) = ${mn(a + s)}.`]; }, 14);
  B.tpl(OS2, (r) => { const v = vr(r), a = ri(r, -9, 9), s = ri(r, -9, 9); if (!a) return null; return [`Solve: ${mn(a)}${v} = ${mn(a * s)}`, near(r, s, [-1, 1, -2 * s, 2]), 0, `Divide both sides by ${mn(a)}: ${v} = ${mn(s)}.`]; }, 14);
  B.tpl(OS2, (r) => { const v = vr(r), a = ri(r, -9, 9), s = ri(r, -9, 9); if (!a || !s) return null; return [`Solve: ${v}/${mn(a)} = ${mn(s)}`, near(r, a * s, [-1, 1, -2 * a * s, 2]), 0, `Multiply both sides by ${mn(a)}: ${v} = ${mn(a * s)}.`]; }, 12);
  B.tpl(OS2, (r) => { const v = vr(r), a = ri(r, 2, 15), s = ri(r, -20, -1); return [`Solve: ${v} + ${a} = ${mn(s)}`, near(r, s - a, [-a, a, 1, -1]), 0, `Subtract ${a}: ${v} = ${mn(s - a)}.`]; }, 10);
  B.tpl(OS2, (r) => { const v = vr(r), a = ri(r, 2, 15), s = ri(r, -20, -1); return [`Solve: ${v} − ${a} = ${mn(s)}`, near(r, s + a, [-a, a, 1, -1]), 0, `Add ${a}: ${v} = ${mn(s + a)}.`]; }, 10);
  B.tpl(OS2, (r) => { const t = ri(r, -10, 5), nw = ri(r, -25, 10); if (t === nw) return null; return [`The temperature is now ${mn(nw)}°F after a change of ${mn(nw - t)}°F. What was the temperature before?`, near(r, t, [-2, 2, -t * 2, 1], (x) => mn(x) + "°F"), 0, `Before + change = after, so before = ${mn(nw)} − (${mn(nw - t)}) = ${mn(t)}°F.`]; }, 8);
  A("one-step-integers", `
Solve: x + (−6) = 10|16|4|−16|=>Add 6 to both sides.
Solve: x − (−4) = 9|5|13|−5|=>x + 4 = 9.
Solve: −3x = 15|−5|5|−45|=>Divide by −3.
Solve: x/(−2) = 6|−12|−3|12|=>Multiply by −2.
Solve: x + 12 = 5|−7|17|7|=>5 − 12.
Solve: x − 8 = −3|5|−11|11|=>−3 + 8.
Solve: −x = 7|−7|7|0|=>Multiply both sides by −1.
Solve: x + (−5) = −9|−4|−14|4|=>−9 + 5.
Solve: −5 + x = 3|8|−2|−8|=>3 + 5.
Solve: 4x = −20|−5|5|−80|=>−20 ÷ 4.
Solve: −7x = −28|4|−4|196|=>−28 ÷ −7.
Solve: x/5 = −3|−15|−2|15|=>Multiply by 5.
Solve: x/(−4) = −2|8|−8|2|=>Multiply by −4.
What do you do to both sides to solve −6x = 24?|divide by −6|add 6|multiply by 6|=>Undo multiplication.
What do you do to both sides to solve x/(−3) = 5?|multiply by −3|divide by 3|add 3|=>Undo division.
What do you do to both sides to solve x + 9 = −4?|subtract 9|add 9|divide by 9|=>Undo addition.
Which value of x makes x − 3 = −10 true?|−7|−13|7|=>−7 − 3 = −10.
Which value of x makes −2x = 18 true?|−9|9|−16|=>−2 × −9 = 18.
Which value of x makes x/4 = −5 true?|−20|20|−1.25|=>−20 ÷ 4.
Which value of x makes x + (−8) = −2 true?|6|−10|10|=>6 + (−8) = −2.
Check: Is x = −4 a solution to 3x = −12?|Yes|No|Cannot tell|=>3 × −4 = −12.
Check: Is x = 4 a solution to −3x = 12?|No|Yes|Cannot tell|=>−3 × 4 = −12, not 12.
Check: Is x = −6 a solution to x + 2 = −4?|Yes|No|Cannot tell|=>−6 + 2 = −4.
True or false: The solution of 2x = −10 is x = −5.|True|False|=>−10 ÷ 2.
True or false: The solution of −x = −3 is x = −3.|False|True|=>x = 3.
True or false: Multiplying both sides of an equation by a negative number is allowed.|True|False|=>As long as you do it to both sides.
A diver is at −24 feet after sinking 8 feet. What was the starting depth?|−16 feet|−32 feet|16 feet|=>x − 8 = −24; x = −16.
Four friends equally share a loss of $60. How much does each lose?|$15|$240|$64|=>60 ÷ 4.
The temperature dropped 3 degrees each hour for several hours and fell 12 degrees. How many hours?|4|36|9|=>12 ÷ 3.
A bank account changes by −$15 each week. After how many weeks is the change −$75?|5|60|90|=>75 ÷ 15.
`);

  /* ---------- one-step multiplication & division ---------- */
  const OS3 = K("one-step-mul-div");
  B.tpl(OS3, (r) => { const v = vr(r), a = ri(r, 2, 12), s = ri(r, 2, 15); return [`Solve: ${a}${v} = ${a * s}`, near(r, s, [-1, 1, a, -a, 2]), 0, `Divide both sides by ${a}: ${v} = ${s}.`]; }, 16);
  B.tpl(OS3, (r) => { const v = vr(r), a = ri(r, 2, 12), s = ri(r, 2, 15); return [`Solve: ${v}/${a} = ${s}`, near(r, a * s, [-a, a, 1, -1]), 0, `Multiply both sides by ${a}: ${v} = ${a * s}.`]; }, 16);
  B.tpl(OS3, (r) => { const v = vr(r), a = ri(r, 2, 9), n = ri(r, 2, 9), d = ri(r, 2, 9); if (gcd(n, d) !== 1) return null; return [`Solve: (${n}/${d})${v} = ${n * a}/${d}`.replace(/.*/, `(${n}/${d})${v} = ${a * n}/${d}`), near(r, a, [-1, 1, 2, a * n]), 0, `Multiply both sides by ${d}/${n}: ${v} = ${a}.`]; }, 8);
  B.tpl(OS3, (r) => { const v = vr(r), a = ri(r, 2, 9) / 2, s = ri(r, 2, 9); const p = Math.round(a * s * 100) / 100; return [`Solve: ${a}${v} = ${p}`, near(r, s, [-1, 1, 2, -2]), 0, `${p} ÷ ${a} = ${s}.`]; }, 8);
  B.tpl(OS3, (r) => { const n = nm(r), c = ri(r, 3, 15), q = ri(r, 2, 12); return [`${n} bought ${q} tickets for $${c * q} in all. How much does each ticket cost?`, near(r, c, [-1, 1, 2, c * q - c], (x) => "$" + x), 0, `${c * q} ÷ ${q} = ${c}.`]; }, 12);
  B.tpl(OS3, (r) => { const n = nm(r), g = ri(r, 3, 9), e = ri(r, 3, 12); return [`${n} shares some candy equally among ${g} friends. Each gets ${e} pieces. How much candy did ${n} start with?`, near(r, g * e, [-g, g, 1, -1]), 0, `x ÷ ${g} = ${e}, so x = ${g * e}.`]; }, 10);
  B.tpl(OS3, (r) => { const v = vr(r), a = ri(r, 2, 12), s = ri(r, 2, 15); const ok = r() < 0.5; const c = ok ? s : s + ri(r, 1, 3); return [`Is ${v} = ${c} a solution to ${a}${v} = ${a * s}?`, ok ? ["Yes", "No"] : ["No", "Yes"], 0, `${a} × ${c} = ${a * c}, which ${ok ? "equals" : "does not equal"} ${a * s}.`]; }, 10);
  B.tpl(OS3, (r) => { const a = ri(r, 2, 9), s = ri(r, 2, 12); return [`Which equation matches: 'a number divided by ${a} equals ${s}'?`, T.mc(r, `x ÷ ${a} = ${s}`, [`${a}x = ${s}`, `x − ${a} = ${s}`, `${a} ÷ x = ${s}`]), 0, `Divided by means ÷.`]; }, 8);
  A("one-step-mul-div", `
What is the inverse operation of multiplication?|division|subtraction|addition|=>Division undoes multiplication.
What is the inverse operation of division?|multiplication|subtraction|addition|=>Multiplication undoes division.
To solve 6x = 42, what should you do?|divide both sides by 6|multiply both sides by 6|subtract 6|=>Undo multiplication.
To solve x/7 = 5, what should you do?|multiply both sides by 7|divide both sides by 7|add 7|=>Undo division.
Solve: 5x = 45|9|40|225|=>45 ÷ 5.
Solve: 8x = 56|7|48|448|=>56 ÷ 8.
Solve: 12x = 36|3|24|432|=>36 ÷ 12.
Solve: x/3 = 11|33|8|3.67|=>Multiply by 3.
Solve: x/9 = 4|36|5|13|=>Multiply by 9.
Solve: x/12 = 2|24|10|6|=>Multiply by 12.
Solve: 0.5x = 8|16|4|8.5|=>8 ÷ 0.5.
Solve: x/0.5 = 6|3|12|6.5|=>Multiply by 0.5.
Solve: (1/2)x = 9|18|4.5|9|=>Multiply by 2.
Solve: (2/3)x = 10|15|20/3|12|=>Multiply by 3/2.
Solve: x/(1/4) = 8|2|32|8|=>Multiply by 1/4.
Solve: 100x = 700|7|600|70,000|=>Divide by 100.
Which is the solution of 4x = 20?|5|16|80|=>20 ÷ 4.
Which is the solution of x/6 = 7?|42|13|1|=>7 × 6.
Which value of x makes 9x = 63 true?|7|54|567|=>63 ÷ 9.
Which value of x makes x/5 = 12 true?|60|17|2.4|=>12 × 5.
Check: Is x = 8 a solution of 3x = 24?|Yes|No|Cannot tell|=>3 × 8 = 24.
Check: Is x = 9 a solution of x/3 = 4?|No|Yes|Cannot tell|=>9/3 = 3, not 4.
Which equation matches '5 times a number is 35'?|5x = 35|x/5 = 35|x + 5 = 35|=>Times means multiply.
Which equation matches 'a number divided by 4 is 9'?|x/4 = 9|4x = 9|x − 4 = 9|=>Divided by means ÷.
Which equation matches 'the quotient of a number and 8 is 3'?|x/8 = 3|8x = 3|x − 8 = 3|=>Quotient means division.
Which equation matches 'the product of 6 and a number is 54'?|6x = 54|x/6 = 54|6 + x = 54|=>Product means multiplication.
Tickets cost $x each. 6 tickets cost $48. Which equation matches?|6x = 48|x/6 = 48|x + 6 = 48|=>Count × price = total.
12 friends share a bill equally and each pays $x. The bill is $96. Which equation matches?|12x = 96|x/12 = 96|x − 12 = 96|=>People × share = total.
A recipe uses 3 cups of flour for every batch. For b batches, 21 cups were used. Which equation matches?|3b = 21|b/3 = 21|b + 3 = 21|=>Rate × batches.
If 7x = 49, what is 3x?|21|49|7|=>x = 7, so 3x = 21.
If x/4 = 5, what is 2x?|40|20|10|=>x = 20, so 2x = 40.
True or false: The solution of 15x = 60 is x = 4.|True|False|=>60 ÷ 15 = 4.
True or false: The solution of x/6 = 2 is x = 3.|False|True|=>x = 12.
True or false: You can divide both sides of an equation by any nonzero number.|True|False|=>Both sides stay equal.
True or false: Dividing both sides by 0 is allowed.|False|True|=>Division by zero is undefined.
`);

  /* ---------- checking solutions & finding mistakes ---------- */
  const CM = K("check-mistakes");
  B.tpl(CM, (r) => { const a = ri(r, 2, 12), s = ri(r, 2, 12), c = r() < 0.5 ? s : s + ri(r, 1, 4); const op = r() < 0.5; const lhs = op ? `x + ${a}` : `${a}x`; const rhs = op ? a + s : a * s; const val = op ? c + a : c * a; return [`Is x = ${c} a solution of ${lhs} = ${rhs}?`, c === s ? ["Yes", "No"] : ["No", "Yes"], 0, `Substitute: ${op ? `${c} + ${a}` : `${a} × ${c}`} = ${val}, which ${val === rhs ? "equals" : "does not equal"} ${rhs}.`]; }, 22);
  B.tpl(CM, (r) => { const a = ri(r, 2, 15), s = ri(r, 2, 15); return [`A student solved x + ${a} = ${a + s} and got x = ${a + a + s}. What mistake did the student make?`, [`added ${a} instead of subtracting`, `subtracted ${a} twice`, `multiplied by ${a}`, `divided by ${a}`], 0, `The student should subtract ${a}, giving x = ${s}.`]; }, 10);
  B.tpl(CM, (r) => { const a = ri(r, 2, 9), s = ri(r, 2, 9); return [`A student solved ${a}x = ${a * s} and got x = ${a * a * s}. What mistake did the student make?`, [`multiplied by ${a} instead of dividing`, `subtracted ${a}`, `added ${a}`, `divided by ${s}`], 0, `The student should divide by ${a}, giving x = ${s}.`]; }, 10);
  B.tpl(CM, (r) => { const a = ri(r, 2, 15), s = ri(r, 2, 15); return [`A student solved x − ${a} = ${s} and got x = ${s - a}. What mistake did the student make?`, [`subtracted ${a} instead of adding`, `added ${a} twice`, `multiplied`, `divided`], 0, `The student should add ${a}, giving x = ${s + a}.`]; }, 8);
  B.tpl(CM, (r) => { const a = ri(r, 2, 6), b = ri(r, 2, 9), s = ri(r, 2, 9); const c = a * s + b; return [`Which is the first step to solve ${a}x + ${b} = ${c}?`, [`subtract ${b} from both sides`, `divide both sides by ${a}`, `add ${b} to both sides`, `multiply both sides by ${a}`], 0, `Undo the addition first, then the multiplication.`]; }, 8);
  B.tpl(CM, (r) => { const a = ri(r, 3, 9), s = ri(r, 2, 9), c = ri(r, 1, 9); return [`A student says 3(x + ${c}) = 3x + ${c}. Is that correct?`, ["No, the 3 must multiply both terms: 3x + " + 3 * c, "Yes, it is correct", "No, it should be 3x − " + c, "No, it should be x + " + 3 * c], 0, `Distribute: 3(x + ${c}) = 3x + ${3 * c}.`]; }, 4);
  A("check-mistakes", `
Why should you check your solution?|to make sure it makes the equation true|to make it longer|to change the equation|=>Substitute and verify.
How do you check a solution?|substitute it into the original equation|solve again from scratch only|ignore the equation|=>Plug it in.
What does it mean if a value makes both sides equal?|it is a solution|it is not a solution|it is a variable|=>Both sides balance.
What does it mean if a value makes the sides unequal?|it is not a solution|it is a solution|it is a constant|=>The equation is false.
Which value is a solution of 3x = 18?|6|54|15|=>3 × 6 = 18.
Which value is NOT a solution of x + 5 = 12?|8|7|7.0|=>8 + 5 = 13.
Check: Is x = 5 a solution of 2x + 3 = 13?|Yes|No|Cannot tell|=>2(5) + 3 = 13.
Check: Is x = 4 a solution of 3x − 2 = 12?|No|Yes|Cannot tell|=>3(4) − 2 = 10.
Check: Is x = −2 a solution of x + 7 = 5?|Yes|No|Cannot tell|=>−2 + 7 = 5.
Check: Is x = 9 a solution of x/3 = 3?|Yes|No|Cannot tell|=>9 ÷ 3 = 3.
A student solved x + 6 = 15 and wrote x = 21. What went wrong?|added instead of subtracted|divided|multiplied|=>Should be 15 − 6 = 9.
A student solved 4x = 24 and wrote x = 96. What went wrong?|multiplied instead of divided|subtracted|added|=>Should be 24 ÷ 4 = 6.
A student solved x/5 = 3 and wrote x = 0.6. What went wrong?|divided instead of multiplied|added|subtracted|=>Should be 3 × 5 = 15.
A student solved x − 9 = 4 and wrote x = −5. What went wrong?|subtracted instead of adding|added twice|divided|=>Should be 4 + 9 = 13.
A student solved −2x = 10 and wrote x = 5. What went wrong?|ignored the negative sign|added|divided incorrectly by 5|=>Should be −5.
A student solved 3x + 2 = 11 by writing 3x = 13. What went wrong?|added 2 instead of subtracting|divided by 3 first|subtracted 11|=>Should be 3x = 9.
A student wrote 2(x + 3) = 2x + 3. What went wrong?|did not distribute the 2 to the 3|added|divided|=>Should be 2x + 6.
A student wrote 5 − (x − 2) = 5 − x − 2. What went wrong?|did not distribute the negative sign|added wrong|divided|=>Should be 5 − x + 2.
A student combined 3x + 4 as 7x. What went wrong?|combined unlike terms|forgot to add|forgot to multiply|=>3x and 4 are unlike terms.
A student wrote that 2x + 3x = 5x². What went wrong?|added exponents incorrectly|forgot to add|subtracted|=>2x + 3x = 5x.
Which step is correct? From 2x = 14.|x = 7|x = 28|x = 12|=>Divide by 2.
Which step is correct? From x − 3 = 8.|x = 11|x = 5|x = 24|=>Add 3.
Which step is correct? From x/4 = 9.|x = 36|x = 5|x = 13|=>Multiply by 4.
Which step is correct? From x + 6 = 2.|x = −4|x = 8|x = 4|=>Subtract 6.
Which is the same equation as x + 5 = 9?|x = 4|x = 14|x = −4|=>Subtract 5.
Which equation is NOT equivalent to 2x = 10?|x = 20|x = 5|4x = 20|=>x = 5.
Which equation is equivalent to x − 4 = 6?|x = 10|x = 2|x = 24|=>Add 4.
How many solutions does x + 3 = x + 3 have?|infinitely many|none|exactly one|=>Always true.
How many solutions does x + 3 = x + 4 have?|none|infinitely many|exactly one|=>Never true.
How many solutions does 2x = 8 have?|exactly one|none|infinitely many|=>x = 4.
True or false: If a value doesn't make the equation true, it is not a solution.|True|False|=>That's the definition.
True or false: You only need to check the solution on the left side.|False|True|=>Check both sides.
True or false: A correct solution is always a whole number.|False|True|=>Solutions can be fractions or decimals.
`);

  /* ---------- writing equations from word problems ---------- */
  const EW = K("equation-words");
  B.tpl(EW, (r) => { const n = nm(r), a = ri(r, 3, 30), s = ri(r, 3, 40); return [`${n} has $${s}. After earning some more money, ${n} has $${s + a}. Which equation finds the amount earned (e)?`, T.mc(r, `${s} + e = ${s + a}`, [`${s} − e = ${s + a}`, `${s}e = ${s + a}`, `e − ${s + a} = ${s}`]), 0, `Start + earned = total.`]; }, 10);
  B.tpl(EW, (r) => { const n = nm(r), c = ri(r, 2, 15), q = ri(r, 3, 12); return [`${n} buys ${q} notebooks for $${c * q}. Which equation finds the cost of one notebook (c)?`, T.mc(r, `${q}c = ${c * q}`, [`c/${q} = ${c * q}`, `c + ${q} = ${c * q}`, `c − ${q} = ${c * q}`]), 0, `Number × price = total.`]; }, 10);
  B.tpl(EW, (r) => { const n = nm(r), c = ri(r, 2, 15), q = ri(r, 3, 12); return [`${n} buys ${q} notebooks for $${c * q}. How much does one notebook cost?`, near(r, c, [-1, 1, 2, c * q - c], (x) => "$" + x), 0, `${c * q} ÷ ${q} = ${c}.`]; }, 10);
  B.tpl(EW, (r) => { const a = ri(r, 3, 30), s = ri(r, 3, 60); return [`A number plus ${a} is ${a + s}. What is the number?`, near(r, s, [-a, a, 1, -1]), 0, `x + ${a} = ${a + s}, so x = ${s}.`]; }, 10);
  B.tpl(EW, (r) => { const a = ri(r, 3, 30), s = ri(r, 3, 60); return [`A number minus ${a} is ${s}. What is the number?`, near(r, a + s, [-a, a, 1, -1]), 0, `x − ${a} = ${s}, so x = ${a + s}.`]; }, 10);
  B.tpl(EW, (r) => { const a = ri(r, 2, 12), s = ri(r, 2, 15); return [`${a} times a number is ${a * s}. What is the number?`, near(r, s, [-1, 1, a, 2]), 0, `${a}x = ${a * s}, so x = ${s}.`]; }, 10);
  B.tpl(EW, (r) => { const a = ri(r, 2, 12), s = ri(r, 2, 15); return [`A number divided by ${a} is ${s}. What is the number?`, near(r, a * s, [-a, a, 1, 2]), 0, `x/${a} = ${s}, so x = ${a * s}.`]; }, 10);
  B.tpl(EW, (r) => { const n = nm(r), a = ri(r, 3, 12), s = ri(r, 5, 30); const t = a * s; return [`${n} walks ${a} miles each day. How many days (d) until ${n} has walked ${t} miles? Choose the equation.`, T.mc(r, `${a}d = ${t}`, [`d + ${a} = ${t}`, `d/${a} = ${t}`, `${a} − d = ${t}`]), 0, `Miles per day × days = total miles.`]; }, 8);
  B.tpl(EW, (r) => { const n = nm(r), w = ri(r, 4, 20), a = ri(r, 2, 8); return [`${n} is ${a} years older than ${n === "Mia" ? "Noah" : "Mia"}, who is ${w}. How old is ${n}?`, near(r, w + a, [-a, a, 1, -1]), 0, `${w} + ${a} = ${w + a}.`]; }, 8);
  B.tpl(EW, (r) => { const t = ri(r, 4, 12) * 5, b = ri(r, 2, 9) * 5; return [`The ticket price is $${t}. Sam has $${b}. How much more does Sam need? Choose the equation.`, T.mc(r, `${b} + m = ${t}`, [`${b} − m = ${t}`, `${b}m = ${t}`, `m/${b} = ${t}`]), 0, `What Sam has + what he needs = price.`]; }, 6);
  A("equation-words", `
What does 'sum' tell you to do?|add|subtract|multiply|=>Sum = addition.
What does 'difference' tell you to do?|subtract|add|divide|=>Difference = subtraction.
What does 'product' tell you to do?|multiply|add|subtract|=>Product = multiplication.
What does 'quotient' tell you to do?|divide|multiply|add|=>Quotient = division.
What does 'more than' tell you to do?|add|subtract|divide|=>5 more than x is x + 5.
What does 'less than' tell you to do?|subtract (from the other number)|add|multiply|=>5 less than x is x − 5.
What does 'twice' mean?|multiply by 2|add 2|subtract 2|=>2x.
What does 'half of' mean?|multiply by 1/2 (divide by 2)|multiply by 2|add 2|=>x/2.
What does 'is' mean in a word problem?|equals|plus|minus|=>The equal sign.
What does 'per' mean?|divide or 'for each'|add|subtract|=>Miles per hour.
Write: 'a number increased by 6 is 15'.|x + 6 = 15|x − 6 = 15|6x = 15|=>Increased means add.
Write: 'a number decreased by 4 is 9'.|x − 4 = 9|x + 4 = 9|4x = 9|=>Decreased means subtract.
Write: 'three times a number is 27'.|3x = 27|x/3 = 27|x + 3 = 27|=>Times means multiply.
Write: 'a number divided by 5 is 8'.|x/5 = 8|5x = 8|x − 5 = 8|=>Divided by means ÷.
Write: '12 less than a number is 30'.|x − 12 = 30|12 − x = 30|x + 12 = 30|=>Less than means subtract from x.
Write: '8 more than a number is 25'.|x + 8 = 25|x − 8 = 25|8x = 25|=>More than means add.
Write: 'twice a number plus 3 is 17'.|2x + 3 = 17|2(x + 3) = 17|x + 2 + 3 = 17|=>Twice the number, then plus 3.
Write: 'the sum of a number and 9 is 20'.|x + 9 = 20|9x = 20|x − 9 = 20|=>Sum means add.
Write: 'the product of 7 and a number is 63'.|7x = 63|x/7 = 63|x + 7 = 63|=>Product means multiply.
Write: 'the quotient of a number and 6 is 4'.|x/6 = 4|6x = 4|x − 6 = 4|=>Quotient means divide.
A gym charges a $10 sign-up fee and $20 per month. Which expression gives the cost for m months?|20m + 10|10m + 20|30m|=>Fee plus monthly cost.
A plumber charges $50 plus $30 per hour. Which equation gives total cost c for h hours?|c = 30h + 50|c = 50h + 30|c = 80h|=>Per hour times hours plus fee.
A taxi costs $4 plus $2 per mile. What is the cost for 6 miles?|$16|$12|$48|=>4 + 2(6).
A phone plan costs $25 plus $5 per extra GB. What is the cost for 4 extra GB?|$45|$100|$29|=>25 + 5(4).
There are 5 boxes with x pencils each, and 3 loose pencils. Which expression is the total?|5x + 3|5(x + 3)|x + 8|=>5 groups of x plus 3.
A rectangle has length 8 and width w. Perimeter is 30. Which equation matches?|2(8 + w) = 30|8w = 30|8 + w = 30|=>Perimeter = 2(l + w).
A rectangle has area 48 and width 6. Which equation finds the length l?|6l = 48|l + 6 = 48|l/6 = 48|=>Area = l × w.
Maya saved $12 each week for w weeks and has $96. Which equation is correct?|12w = 96|w/12 = 96|w + 12 = 96|=>Rate × weeks = total.
Tom is 4 years older than twice his sister's age s. Which expression gives Tom's age?|2s + 4|2(s + 4)|s + 6|=>Twice s, then plus 4.
A number is increased by 20% of itself. Which expression represents the new amount?|1.2n|0.2n|n + 2|=>n + 0.2n = 1.2n.
After a 25% discount, a $60 item costs how much?|$45|$15|$35|=>60 − 15.
Which situation matches 5x = 35?|5 bags with the same number of marbles each, 35 marbles total|5 marbles added to a bag making 35|35 marbles shared among 5 equal parts as 35|=>Equal groups.
Which situation matches x/4 = 9?|a total split equally among 4 people, each getting 9|4 groups of 9 plus x|9 more than 4|=>Division of a total.
Which situation matches x + 7 = 18?|a number plus 7 more makes 18|a number split into 7|7 times a number|=>Addition.
True or false: 'x less than 10' means 10 − x.|True|False|=>'x less than 10' is 10 − x.
True or false: '10 less than x' means 10 − x.|False|True|=>It means x − 10.
`);

  /* ---------- expressions & two-step equations ---------- */
  const TW = K("equations");
  B.tpl(TW, (r) => { const a = ri(r, 2, 9), b = ri(r, 1, 15), s = ri(r, 2, 12); return [`Solve: ${a}x + ${b} = ${a * s + b}`, near(r, s, [-1, 1, a, 2, -s]), 0, `Subtract ${b}: ${a}x = ${a * s}; divide by ${a}: x = ${s}.`]; }, 20);
  B.tpl(TW, (r) => { const a = ri(r, 2, 9), b = ri(r, 1, 15), s = ri(r, 2, 12); return [`Solve: ${a}x − ${b} = ${a * s - b}`, near(r, s, [-1, 1, a, 2, -s]), 0, `Add ${b}: ${a}x = ${a * s}; divide by ${a}: x = ${s}.`]; }, 16);
  B.tpl(TW, (r) => { const a = ri(r, 2, 9), b = ri(r, 1, 15), s = ri(r, 2, 12); return [`Solve: x/${a} + ${b} = ${s + b}`, near(r, a * s, [-a, a, 1, 2]), 0, `Subtract ${b}: x/${a} = ${s}; multiply by ${a}: x = ${a * s}.`]; }, 12);
  B.tpl(TW, (r) => { const a = ri(r, 2, 9), s = ri(r, 2, 9), b = ri(r, 1, 12); const c = ri(r, 2, 6); const x = ri(r, 1, 9); return [`Evaluate ${a}x + ${b} when x = ${x}.`, near(r, a * x + b, [-a, a, b, -b, 2]), 0, `${a}(${x}) + ${b} = ${a * x + b}.`]; }, 14);
  B.tpl(TW, (r) => { const a = ri(r, 2, 9), b = ri(r, 2, 9), c = ri(r, 2, 9); return [`Simplify: ${a}x + ${b}x + ${c}`, T.mc(r, `${a + b}x + ${c}`, [`${a + b + c}x`, `${a * b}x + ${c}`, `${a + b}x² + ${c}`]), 0, `Combine like terms: ${a}x + ${b}x = ${a + b}x.`]; }, 8);
  B.tpl(TW, (r) => { const a = ri(r, 2, 9), b = ri(r, 1, 9), c = ri(r, 1, 9); return [`Use the distributive property: ${a}(x + ${b})`, T.mc(r, `${a}x + ${a * b}`, [`${a}x + ${b}`, `${a + 1}x + ${b}`, `${a}x + ${a + b}`]), 0, `Multiply both terms: ${a}x + ${a * b}.`]; }, 8);
  B.tpl(TW, (r) => { const a = ri(r, 2, 9), b = ri(r, 1, 9), s = ri(r, 2, 8); const c = a * (s + b); return [`Solve: ${a}(x + ${b}) = ${c}`, near(r, s, [-1, 1, b, a, -s]), 0, `Divide by ${a}: x + ${b} = ${c / a}; subtract ${b}: x = ${s}.`]; }, 10);
  B.tpl(TW, (r) => { const a = ri(r, 2, 9), b = ri(r, 1, 15), s = ri(r, 2, 12); const n = nm(r); return [`${n} spends $${b} on a book and $${a} on each of ${s} snacks. How much does ${n} spend?`, near(r, a * s + b, [-a, a, b, -b]), 0, `${a} × ${s} + ${b} = ${a * s + b}.`]; }, 8);
  A("equations", `
What is a term in an expression?|a number, variable, or product of numbers and variables|an equal sign|a solution|=>3x and 5 are terms in 3x + 5.
What is a coefficient?|the number multiplied by a variable|the variable|the constant|=>In 4x the coefficient is 4.
What is a constant term?|a term with no variable|a variable|a coefficient|=>5 in 3x + 5.
What are like terms?|terms with the same variable raised to the same power|any two terms|terms with different variables|=>3x and 5x are like terms.
Which are like terms?|4x and 9x|4x and 9|4x and 9y|=>Same variable.
Which are NOT like terms?|2x and 2y|2x and 7x|x and 3x|=>Different variables.
Simplify: 3x + 5x|8x|15x|8x²|=>Add coefficients.
Simplify: 7x − 2x|5x|9x|14x|=>Subtract coefficients.
Simplify: 4x + 3 + 2x + 1|6x + 4|10x|6x + 3|=>Combine like terms.
Simplify: 2(x + 4)|2x + 8|2x + 4|x + 8|=>Distribute.
Simplify: 3(2x − 1)|6x − 3|6x − 1|5x − 3|=>Distribute.
Simplify: −2(x + 5)|−2x − 10|−2x + 10|2x − 10|=>Distribute the negative.
Evaluate x + 7 when x = 3.|10|21|4|=>3 + 7.
Evaluate 2x − 1 when x = 5.|9|11|4|=>2(5) − 1.
Evaluate x² when x = 6.|36|12|8|=>6 × 6.
Evaluate 3x² when x = 2.|12|36|6|=>3 × 4.
What is the first step to solve 2x + 5 = 17?|subtract 5 from both sides|divide by 2 first|add 5 to both sides|=>Undo addition first.
What is the first step to solve 3x − 4 = 11?|add 4 to both sides|subtract 4|divide by 3 first|=>Undo subtraction first.
What is the second step to solve 2x + 5 = 17 after subtracting 5?|divide both sides by 2|subtract 2|add 2|=>2x = 12; divide by 2.
Solve: 2x + 4 = 10|3|7|6|=>2x = 6.
Solve: 3x − 5 = 10|5|15|3|=>3x = 15.
Solve: 5x + 2 = 27|5|25|6|=>5x = 25.
Solve: x/2 + 3 = 8|10|5|2.5|=>x/2 = 5.
Solve: x/4 − 1 = 3|16|1|8|=>x/4 = 4.
Solve: 4x + 1 = 1|0|1|−1|=>4x = 0.
Solve: 2x + 3 = −7|−5|5|−2|=>2x = −10.
Solve: −3x + 2 = 11|−3|3|−13/3|=>−3x = 9.
Solve: 2(x + 1) = 14|6|7|13|=>x + 1 = 7.
Solve: 3(x − 2) = 12|6|2|4|=>x − 2 = 4.
Which expression means 'five more than three times a number'?|3x + 5|5x + 3|3(x + 5)|=>Three times, then plus five.
Which expression means 'the product of 4 and the sum of a number and 3'?|4(x + 3)|4x + 3|x + 12|=>Group the sum.
Which equation matches 'twice a number decreased by 6 is 14'?|2x − 6 = 14|2(x − 6) = 14|x − 12 = 14|=>Twice first, then subtract 6.
True or false: 3x + 4x = 7x².|False|True|=>3x + 4x = 7x.
True or false: 2(x + 3) = 2x + 3.|False|True|=>2x + 6.
True or false: 5 + 3x can be simplified to 8x.|False|True|=>Unlike terms.
True or false: The solution of 2x + 3 = 9 is x = 3.|True|False|=>2x = 6.
`);

  /* ---------- inequalities ---------- */
  const IQ = K("inequalities");
  B.tpl(IQ, (r) => { const a = ri(r, 2, 20), s = ri(r, 2, 20), sym = T.pick(r, ["<", ">", "≤", "≥"]); return [`Solve: x + ${a} ${sym} ${a + s}`, T.mc(r, `x ${sym} ${s}`, [`x ${sym === "<" ? ">" : sym === ">" ? "<" : sym === "≤" ? "≥" : "≤"} ${s}`, `x ${sym} ${a + s + a}`, `x ${sym} ${a}`]), 0, `Subtract ${a} from both sides: x ${sym} ${s}.`]; }, 14);
  B.tpl(IQ, (r) => { const a = ri(r, 2, 12), s = ri(r, 2, 12), sym = T.pick(r, ["<", ">", "≤", "≥"]); return [`Solve: ${a}x ${sym} ${a * s}`, T.mc(r, `x ${sym} ${s}`, [`x ${sym === "<" ? ">" : sym === ">" ? "<" : sym === "≤" ? "≥" : "≤"} ${s}`, `x ${sym} ${a * s - a}`, `x ${sym} ${a * s * a}`]), 0, `Divide by ${a}: x ${sym} ${s}.`]; }, 14);
  B.tpl(IQ, (r) => { const a = ri(r, 2, 9), s = ri(r, 2, 9), sym = T.pick(r, ["<", ">", "≤", "≥"]); const flip = sym === "<" ? ">" : sym === ">" ? "<" : sym === "≤" ? "≥" : "≤"; return [`Solve: −${a}x ${sym} ${mn(-a * s)}`.replace(/−(\d)x/, "−$1x"), T.mc(r, `x ${flip} ${s}`, [`x ${sym} ${s}`, `x ${flip} ${mn(-s)}`, `x ${sym} ${mn(-s)}`]), 0, `Dividing by a negative number reverses the inequality symbol: x ${flip} ${s}.`]; }, 14);
  B.tpl(IQ, (r) => { const a = ri(r, 2, 6), b = ri(r, 1, 9), s = ri(r, 2, 8), sym = T.pick(r, ["<", ">", "≤", "≥"]); return [`Solve: ${a}x + ${b} ${sym} ${a * s + b}`, T.mc(r, `x ${sym} ${s}`, [`x ${sym === "<" ? ">" : sym === ">" ? "<" : sym === "≤" ? "≥" : "≤"} ${s}`, `x ${sym} ${a * s}`, `x ${sym} ${s + b}`]), 0, `Subtract ${b}, then divide by ${a}: x ${sym} ${s}.`]; }, 14);
  B.tpl(IQ, (r) => { const v = ri(r, -5, 12), sym = T.pick(r, ["<", ">", "≤", "≥"]), c = ri(r, -5, 12); const holds = sym === "<" ? v < c : sym === ">" ? v > c : sym === "≤" ? v <= c : v >= c; return [`Is x = ${mn(v)} a solution of x ${sym} ${mn(c)}?`, holds ? ["Yes", "No"] : ["No", "Yes"], 0, `${mn(v)} ${sym} ${mn(c)} is ${holds ? "true" : "false"}.`]; }, 14);
  B.tpl(IQ, (r) => { const c = ri(r, -5, 15), sym = T.pick(r, ["<", ">", "≤", "≥"]); const open = sym === "<" || sym === ">"; const dir = sym === "<" || sym === "≤" ? "left" : "right"; return [`How would you graph x ${sym} ${mn(c)} on a number line?`, [`${open ? "an open" : "a closed"} circle at ${mn(c)} with an arrow pointing ${dir}`, `${open ? "a closed" : "an open"} circle at ${mn(c)} with an arrow pointing ${dir}`, `${open ? "an open" : "a closed"} circle at ${mn(c)} with an arrow pointing ${dir === "left" ? "right" : "left"}`, `${open ? "a closed" : "an open"} circle at ${mn(c)} with an arrow pointing ${dir === "left" ? "right" : "left"}`], 0, `${sym === "<" || sym === ">" ? "< and > use open circles" : "≤ and ≥ use closed circles"}; the arrow points toward the values that work.`]; }, 12);
  B.tpl(IQ, (r) => { const a = ri(r, 5, 40), n = nm(r); return [`${n} needs at least ${a} points to pass. Which inequality shows the points p ${n} needs?`, T.mc(r, `p ≥ ${a}`, [`p ≤ ${a}`, `p > ${a}`, `p < ${a}`]), 0, `'At least' means greater than or equal to.`]; }, 6);
  B.tpl(IQ, (r) => { const a = ri(r, 5, 40), n = nm(r); return [`${n} can spend at most $${a}. Which inequality shows the amount m ${n} can spend?`, T.mc(r, `m ≤ ${a}`, [`m ≥ ${a}`, `m < ${a}`, `m > ${a}`]), 0, `'At most' means less than or equal to.`]; }, 6);
  A("inequalities", `
What does the symbol < mean?|less than|greater than|equal to|=>3 < 5.
What does the symbol > mean?|greater than|less than|equal to|=>5 > 3.
What does the symbol ≤ mean?|less than or equal to|greater than or equal to|not equal|=>Includes equality.
What does the symbol ≥ mean?|greater than or equal to|less than or equal to|not equal|=>Includes equality.
What does 'at least' mean?|≥|≤|<|=>At least 10 means 10 or more.
What does 'at most' mean?|≤|≥|>|=>At most 10 means 10 or less.
What does 'more than' mean?|>|≥|<|=>More than 10 means greater than 10.
What does 'fewer than' mean?|<|≤|>|=>Fewer than 10 means less than 10.
What does 'no more than' mean?|≤|≥|<|=>The most it can be.
What does 'no less than' mean?|≥|≤|>|=>The least it can be.
What does 'a minimum of' mean?|≥|≤|<|=>The smallest allowed.
What does 'a maximum of' mean?|≤|≥|>|=>The largest allowed.
Which of these is a solution of x > 4?|5|4|3|=>5 > 4.
Which of these is a solution of x ≥ 4?|4|3|2|=>4 ≥ 4.
Which of these is a solution of x < −2?|−3|−2|0|=>−3 < −2.
Which of these is a solution of x ≤ 7?|7|8|9|=>7 ≤ 7.
Which of these is NOT a solution of x > 6?|6|7|10|=>6 is not greater than 6.
Which of these is NOT a solution of x < 3?|3|2|−1|=>3 is not less than 3.
Which graph has an open circle?|x > 3|x ≥ 3|x ≤ 3|=>Strict inequalities use open circles.
Which graph has a closed circle?|x ≥ 3|x > 3|x < 3|=>Inclusive inequalities use closed circles.
On a number line, x > 2 has an arrow pointing…|right|left|up|=>Greater values are to the right.
On a number line, x < 2 has an arrow pointing…|left|right|up|=>Lesser values are to the left.
Solve: x + 3 > 10|x > 7|x > 13|x < 7|=>Subtract 3.
Solve: x − 5 ≤ 2|x ≤ 7|x ≤ −3|x ≥ 7|=>Add 5.
Solve: 2x < 12|x < 6|x < 24|x > 6|=>Divide by 2.
Solve: x/3 ≥ 4|x ≥ 12|x ≥ 7|x ≤ 12|=>Multiply by 3.
Solve: −x > 5|x < −5|x > −5|x > 5|=>Multiply by −1 and flip the sign.
Solve: −2x ≤ 8|x ≥ −4|x ≤ −4|x ≤ 4|=>Divide by −2 and flip.
Solve: −x/4 < 3|x > −12|x < −12|x < 12|=>Multiply by −4 and flip.
Solve: 2x + 1 > 9|x > 4|x > 5|x < 4|=>2x > 8.
Solve: 3x − 2 ≤ 10|x ≤ 4|x ≥ 4|x ≤ 8/3|=>3x ≤ 12.
Solve: 5 − x ≥ 2|x ≤ 3|x ≥ 3|x ≤ −3|=>−x ≥ −3 gives x ≤ 3.
When do you reverse the inequality symbol?|when multiplying or dividing by a negative number|when adding|when subtracting a positive|=>Only for negative multiplication or division.
Do you reverse the symbol when adding a negative number to both sides?|No|Yes|Only for ≥|=>Only multiplication/division by a negative flips the sign.
Which inequality matches 'a number is at least 5'?|x ≥ 5|x ≤ 5|x > 5|=>At least means ≥.
Which inequality matches 'a number is less than 10'?|x < 10|x ≤ 10|x > 10|=>Less than.
Which inequality matches 'a number is no more than 8'?|x ≤ 8|x ≥ 8|x < 8|=>No more than.
A bike costs $90 and you have $x. You need at least enough to buy it. Which inequality?|x ≥ 90|x ≤ 90|x < 90|=>At least.
An elevator holds at most 8 people. Which inequality shows the number of people p?|p ≤ 8|p ≥ 8|p < 8|=>At most.
True or false: x > 5 and 5 < x mean the same thing.|True|False|=>Both mean x is greater than 5.
True or false: x ≥ 3 includes 3.|True|False|=>It includes equality.
True or false: An inequality can have infinitely many solutions.|True|False|=>x > 5 has endless solutions.
True or false: −3 > −1.|False|True|=>−3 is to the left of −1.
`);

  /* ---------- surface area and volume ---------- */
  const G3 = K("geometry-3d");
  B.tpl(G3, (r) => { const l = ri(r, 2, 12), w = ri(r, 2, 10), h = ri(r, 2, 10); return [`What is the volume of a rectangular prism ${l} cm × ${w} cm × ${h} cm?`, near(r, l * w * h, [-l, l, w * h, -(w * h), 2 * (l * w + w * h + l * h) - l * w * h].filter((x, i) => i < 4).map((x) => x), (x) => f(x) + " cm³"), 0, `V = l × w × h = ${l} × ${w} × ${h} = ${l * w * h} cm³.`]; }, 18);
  B.tpl(G3, (r) => { const l = ri(r, 2, 12), w = ri(r, 2, 10), h = ri(r, 2, 10); const sa = 2 * (l * w + l * h + w * h); return [`What is the surface area of a rectangular prism ${l} in × ${w} in × ${h} in?`, near(r, sa, [-l, l, -2, 2, l * w * h - sa].filter((x, i) => i < 4), (x) => f(x) + " in²"), 0, `SA = 2(lw + lh + wh) = 2(${l * w} + ${l * h} + ${w * h}) = ${sa} in².`]; }, 16);
  B.tpl(G3, (r) => { const s = ri(r, 2, 12); return [`A cube has edges of ${s} cm. What is its volume?`, near(r, s ** 3, [-s, s, 6 * s * s - s ** 3, 3 * s].filter((x, i) => i < 4), (x) => f(x) + " cm³"), 0, `V = s³ = ${s}³ = ${s ** 3} cm³.`]; }, 10);
  B.tpl(G3, (r) => { const s = ri(r, 2, 12); return [`A cube has edges of ${s} cm. What is its surface area?`, near(r, 6 * s * s, [-s, s, s ** 3 - 6 * s * s, 2 * s * s].filter((x, i) => i < 4), (x) => f(x) + " cm²"), 0, `SA = 6s² = 6 × ${s * s} = ${6 * s * s} cm².`]; }, 10);
  B.tpl(G3, (r) => { const rad = ri(r, 2, 10), h = ri(r, 2, 12); const v = Math.round(3.14 * rad * rad * h * 100) / 100; return [`Using π ≈ 3.14, what is the volume of a cylinder with radius ${rad} cm and height ${h} cm?`, near(r, v, [-3.14 * rad * rad, 3.14 * rad * rad, 3.14 * rad * h * 2 - v, 100].filter((x, i) => i < 4).map((x) => Math.round(x * 100) / 100), (x) => f(Math.round(x * 100) / 100) + " cm³"), 0, `V = πr²h = 3.14 × ${rad * rad} × ${h} = ${f(v)} cm³.`]; }, 14);
  B.tpl(G3, (r) => { const rad = ri(r, 2, 10), h = ri(r, 2, 12); const sa = Math.round(2 * 3.14 * rad * (rad + h) * 100) / 100; return [`Using π ≈ 3.14, what is the surface area of a cylinder with radius ${rad} m and height ${h} m?`, near(r, sa, [-3.14 * rad, 3.14 * rad, 3.14 * rad * rad, 20].filter((x, i) => i < 4).map((x) => Math.round(x * 100) / 100), (x) => f(Math.round(x * 100) / 100) + " m²"), 0, `SA = 2πr² + 2πrh = 2(3.14)(${rad})(${rad} + ${h}) = ${f(sa)} m².`]; }, 12);
  B.tpl(G3, (r) => { const b = ri(r, 2, 10), hh = ri(r, 2, 10), l = ri(r, 3, 12); const v = (b * hh / 2) * l; return [`A triangular prism has a triangle with base ${b} cm and height ${hh} cm. The prism is ${l} cm long. What is the volume?`, near(r, v, [-l, l, b * hh * l - v, (b * hh) / 2].filter((x, i) => i < 4).map((x) => Math.round(x * 10) / 10), (x) => f(x) + " cm³"), 0, `V = (½ × ${b} × ${hh}) × ${l} = ${v} cm³.`]; }, 10);
  B.tpl(G3, (r) => { const l = ri(r, 2, 10), w = ri(r, 2, 10), v = l * w * ri(r, 2, 9); const h = v / (l * w); return [`A rectangular prism has volume ${v} cm³, length ${l} cm, and width ${w} cm. What is the height?`, near(r, h, [-1, 1, 2, -2], (x) => x + " cm"), 0, `h = V ÷ (l × w) = ${v} ÷ ${l * w} = ${h} cm.`]; }, 10);
  B.tpl(G3, (r) => { const l = ri(r, 4, 12), w = ri(r, 3, 9), h = ri(r, 2, 8); const n = nm(r); return [`${n} fills a fish tank ${l} in × ${w} in × ${h} in with water. How many cubic inches of water does it hold?`, near(r, l * w * h, [-l, l, w * h, 10].filter((x, i) => i < 4), (x) => f(x) + " in³"), 0, `V = ${l} × ${w} × ${h} = ${l * w * h} in³.`]; }, 8);
  A("geometry-3d", `
What is volume?|the amount of space inside a 3D figure|the distance around a shape|the area of a face|=>Measured in cubic units.
What is surface area?|the total area of all the faces of a 3D figure|the space inside|the length of an edge|=>Measured in square units.
What units are used for volume?|cubic units|square units|linear units|=>cm³, in³.
What units are used for surface area?|square units|cubic units|linear units|=>cm², in².
What is the formula for the volume of a rectangular prism?|V = lwh|V = 2(lw + lh + wh)|V = πr²h|=>Length × width × height.
What is the formula for the surface area of a rectangular prism?|SA = 2(lw + lh + wh)|SA = lwh|SA = πr²h|=>Add all 6 faces.
What is the formula for the volume of a cube?|V = s³|V = 6s²|V = s²|=>Edge cubed.
What is the formula for the surface area of a cube?|SA = 6s²|SA = s³|SA = 4s²|=>Six equal square faces.
What is the formula for the volume of a cylinder?|V = πr²h|V = 2πrh|V = πr²|=>Base area × height.
What is the formula for the surface area of a cylinder?|SA = 2πr² + 2πrh|SA = πr²h|SA = 2πr|=>Two circles plus the side.
What is the formula for the area of a circle?|A = πr²|A = 2πr|A = πd²|=>Pi times radius squared.
What is the formula for the circumference of a circle?|C = 2πr|C = πr²|C = r²|=>Distance around.
What is the volume of a prism in general?|base area × height|perimeter × height|length + width + height|=>V = Bh.
How many faces does a rectangular prism have?|6|4|8|=>Six faces.
How many edges does a rectangular prism have?|12|6|8|=>Twelve edges.
How many vertices does a rectangular prism have?|8|6|12|=>Eight vertices.
How many faces does a triangular prism have?|5|4|6|=>2 triangles + 3 rectangles.
What shape are the bases of a cylinder?|circles|squares|triangles|=>Two circles.
What is the net of a cylinder?|two circles and a rectangle|three squares|two triangles|=>The side unrolls into a rectangle.
What is the net of a cube?|six squares|four squares|six triangles|=>Unfolded cube.
What 3D figure has a net of 2 triangles and 3 rectangles?|triangular prism|rectangular prism|cylinder|=>Triangular prism.
What happens to the volume of a cube if each edge is doubled?|it becomes 8 times larger|it doubles|it becomes 4 times larger|=>2³ = 8.
What happens to the surface area of a cube if each edge is doubled?|it becomes 4 times larger|it doubles|it becomes 8 times larger|=>2² = 4.
What happens to the volume of a cylinder if its height is doubled?|it doubles|it quadruples|it stays the same|=>V = πr²h; h doubled doubles V.
What happens to the volume of a cylinder if its radius is doubled?|it becomes 4 times larger|it doubles|it becomes 8 times larger|=>r² is squared.
If the radius of a circle is 5, what is the diameter?|10|2.5|25|=>d = 2r.
If the diameter of a circle is 14, what is the radius?|7|28|14|=>r = d ÷ 2.
What is the approximate value of π?|3.14|2.14|3.41|=>π ≈ 3.14.
Which measurement would you use to find how much water a fish tank holds?|volume|surface area|perimeter|=>Capacity.
Which measurement would you use to find how much wrapping paper covers a box?|surface area|volume|perimeter|=>Outside covering.
Which measurement would you use to find how much paint covers the outside of a cylinder?|surface area|volume|circumference|=>Area of the surface.
What is the volume of a box that is 1 ft × 1 ft × 1 ft?|1 cubic foot|1 square foot|3 feet|=>1 × 1 × 1.
How many cubic centimeters are in 1 mL?|1|10|100|=>1 mL = 1 cm³.
How many milliliters are in 1 liter?|1,000|100|10|=>1 L = 1,000 mL.
True or false: A cube's volume and surface area use the same units.|False|True|=>Volume uses cubic units; surface area uses square units.
True or false: A cube is a rectangular prism.|True|False|=>All edges equal.
True or false: A cylinder has 3 flat faces.|False|True|=>Two flat circular faces plus a curved surface.
True or false: Doubling all dimensions of a rectangular prism doubles its volume.|False|True|=>It multiplies the volume by 8.
`);

  /* ---------- similar figures & quadrilaterals ---------- */
  const SM = K("similarity");
  B.tpl(SM, (r) => { const a = ri(r, 2, 9), k = ri(r, 2, 5), b = ri(r, 3, 12); return [`Two triangles are similar. A side of 'a' of the small triangle is ${a} and the corresponding side of the large triangle is ${a * k}. Another side of the small triangle is ${b}. What is the matching side of the large triangle?`, near(r, b * k, [-k, k, a, 2]), 0, `Scale factor = ${a * k} ÷ ${a} = ${k}; ${b} × ${k} = ${b * k}.`]; }, 18);
  B.tpl(SM, (r) => { const k = ri(r, 2, 6), s = ri(r, 2, 9); return [`A rectangle with a side of ${s} is enlarged by a scale factor of ${k}. What is the new side length?`, near(r, s * k, [-k, k, s, 2]), 0, `${s} × ${k} = ${s * k}.`]; }, 12);
  B.tpl(SM, (r) => { const p = ri(r, 3, 12) * 2, k = ri(r, 2, 5); return [`A triangle has a perimeter of ${p}. A similar triangle has sides ${k} times as long. What is its perimeter?`, near(r, p * k, [-k, k, p, 2]), 0, `Perimeters scale by the same factor: ${p} × ${k} = ${p * k}.`]; }, 10);
  B.tpl(SM, (r) => { const a = ri(r, 3, 10), b = ri(r, 4, 12), k = ri(r, 2, 4); return [`A rectangle is ${a} by ${b}. A similar rectangle is ${a * k} long. How wide is it?`, near(r, b * k, [-k, k, b, 2]), 0, `Scale factor ${k}; ${b} × ${k} = ${b * k}.`]; }, 10);
  B.tpl(SM, (r) => { const h = ri(r, 3, 8), s = ri(r, 2, 6), k = ri(r, 2, 6); return [`A ${h}-foot pole casts a ${s}-foot shadow. At the same time, a nearby tree casts a ${s * k}-foot shadow. How tall is the tree?`, near(r, h * k, [-k, k, h, 2], (x) => x + " ft"), 0, `The scale factor is ${k}: ${h} × ${k} = ${h * k} feet.`]; }, 10);
  B.tpl(SM, (r) => { const a = ri(r, 30, 80), b = ri(r, 30, 100 - 10); const c = 180 - a - b; if (c <= 0 || a + b >= 170) return null; return [`Two angles of a triangle measure ${a}° and ${b}°. What is the third angle?`, near(r, c, [-10, 10, -5, 5], (x) => x + "°"), 0, `180 − ${a} − ${b} = ${c}.`]; }, 10);
  B.tpl(SM, (r) => { const a = ri(r, 50, 120), b = 180 - a; return [`Two angles of a parallelogram next to each other (consecutive angles) measure ${a}° and x°. What is x?`, near(r, b, [-10, 10, -5, 5], (x) => x + "°"), 0, `Consecutive angles of a parallelogram add to 180°: 180 − ${a} = ${b}.`]; }, 8);
  A("similarity", `
What does 'similar' mean for two figures?|same shape, possibly different size|same size and shape|different shape|=>Corresponding angles equal, sides proportional.
What does 'congruent' mean?|same size and same shape|same shape only|different size|=>Exactly equal.
In similar figures, corresponding angles are…|equal|different|supplementary only|=>Same measures.
In similar figures, corresponding sides are…|proportional|equal|different always|=>Same ratio.
What is a scale factor?|the ratio of corresponding side lengths|the sum of side lengths|the perimeter|=>New ÷ original.
If the scale factor is greater than 1, the new figure is…|larger|smaller|the same|=>Enlargement.
If the scale factor is between 0 and 1, the new figure is…|smaller|larger|the same|=>Reduction.
If the scale factor is 1, the new figure is…|congruent to the original|larger|smaller|=>Same size.
If two figures are similar with scale factor 3, how do their perimeters compare?|the new is 3 times as large|the new is 9 times as large|they are the same|=>Perimeters scale by k.
If two figures are similar with scale factor 3, how do their areas compare?|the new is 9 times as large|the new is 3 times as large|they are the same|=>Areas scale by k².
Which are always similar?|any two squares|any two rectangles|any two triangles|=>All squares have the same shape.
Which are NOT always similar?|any two rectangles|any two circles|any two equilateral triangles|=>Rectangles can have different ratios.
Are all circles similar?|Yes|No|Only if the same size|=>All circles have the same shape.
What is a quadrilateral?|a four-sided polygon|a three-sided polygon|a five-sided polygon|=>Quad means four.
What is the sum of the interior angles of a quadrilateral?|360°|180°|720°|=>Two triangles' worth.
What is the sum of the interior angles of a triangle?|180°|360°|90°|=>All triangles.
What is a parallelogram?|a quadrilateral with two pairs of parallel sides|a quadrilateral with one pair of parallel sides|a polygon with 5 sides|=>Opposite sides parallel.
What is a rectangle?|a parallelogram with four right angles|a parallelogram with four equal sides|a trapezoid|=>Four right angles.
What is a rhombus?|a parallelogram with four equal sides|a shape with 3 sides|a trapezoid|=>Four equal sides.
What is a square?|a rectangle with four equal sides|a trapezoid|a triangle|=>Both rectangle and rhombus.
What is a trapezoid?|a quadrilateral with exactly one pair of parallel sides|a quadrilateral with two pairs of parallel sides|a polygon with 5 sides|=>One pair.
What is a kite?|a quadrilateral with two pairs of adjacent equal sides|a shape with 3 sides|a shape with 5 sides|=>Two pairs next to each other.
Which quadrilaterals have four right angles?|rectangle and square|rhombus and kite|trapezoid and kite|=>Right angles.
Which quadrilateral has four equal sides but not necessarily right angles?|rhombus|rectangle|trapezoid|=>Equal sides.
Which quadrilateral has exactly one pair of parallel sides?|trapezoid|parallelogram|square|=>One pair.
In a parallelogram, opposite angles are…|equal|supplementary|complementary|=>Opposite angles match.
In a parallelogram, consecutive angles are…|supplementary (add to 180°)|equal|complementary|=>They add to 180.
Are the diagonals of a rectangle equal in length?|Yes|No|Only in a square|=>They are congruent.
Do the diagonals of a rhombus meet at right angles?|Yes|No|Only in a rectangle|=>They are perpendicular.
Is every square a rectangle?|Yes|No|Sometimes|=>Squares have four right angles.
Is every rectangle a square?|No|Yes|Sometimes always|=>Rectangles can have unequal sides.
Is every rhombus a parallelogram?|Yes|No|Sometimes|=>Opposite sides parallel.
What is a supplementary pair of angles?|two angles adding to 180°|two angles adding to 90°|two equal angles|=>Straight line.
What is a complementary pair of angles?|two angles adding to 90°|two angles adding to 180°|two equal angles|=>Right angle.
What are vertical angles?|opposite angles formed by two intersecting lines|adjacent angles|supplementary angles|=>They are equal.
True or false: Congruent figures are always similar.|True|False|=>Scale factor 1.
True or false: Similar figures are always congruent.|False|True|=>Similar figures can differ in size.
True or false: The angles of similar triangles are equal.|True|False|=>Corresponding angles match.
True or false: A trapezoid has two pairs of parallel sides.|False|True|=>Exactly one pair (in the common definition).
`);

  /* ---------- probability ---------- */
  const PB = K("probability");
  B.tpl(PB, (r) => { const a = ri(r, 1, 9), b = ri(r, 1, 9), c = ri(r, 1, 9); const tot = a + b + c; return [`A bag has ${a} red, ${b} blue, and ${c} green marbles. What is the probability of picking a blue marble?`, T.mc(r, frac(b, tot), [frac(a, tot), frac(c, tot), frac(b, tot - b + 0 || 1), frac(tot - b, tot)].filter((x) => x !== frac(b, tot)), (rr) => `${ri(rr, 1, 5)}/${ri(rr, 6, 20)}`), 0, `Blue ÷ total = ${b}/${tot} = ${frac(b, tot)}.`]; }, 16);
  B.tpl(PB, (r) => { const n = T.pick(r, [6, 8, 10, 12, 20]), k = ri(r, 1, n - 1); return [`A spinner has ${n} equal sections numbered 1 to ${n}. What is the probability of landing on a number less than or equal to ${k}?`, T.mc(r, frac(k, n), [frac(n - k, n), frac(k + 1, n), frac(k, n + 1), frac(1, n)].filter((x) => x !== frac(k, n)), (rr) => `${ri(rr, 1, n - 1)}/${n}`), 0, `${k} favorable outcomes out of ${n}: ${frac(k, n)}.`]; }, 12);
  B.tpl(PB, (r) => { const a = T.pick(r, [2, 3, 4, 5, 6]), b = T.pick(r, [2, 3, 4, 5, 6]); return [`You flip a coin and roll a ${a * 2 <= 12 ? 6 : 6}-sided number cube. How many different outcomes are possible?`, ["12", "8", "6", "2"], 0, `2 × 6 = 12 outcomes.`]; }, 1);
  B.tpl(PB, (r) => { const a = ri(r, 2, 6), b = ri(r, 2, 6), c = ri(r, 2, 5); return [`A restaurant offers ${a} appetizers, ${b} main dishes, and ${c} desserts. How many different meals (one of each) are possible?`, near(r, a * b * c, [-a, a, a + b + c - a * b * c, b, 2].filter((x, i) => i < 4)), 0, `Fundamental counting principle: ${a} × ${b} × ${c} = ${a * b * c}.`]; }, 12);
  B.tpl(PB, (r) => { const a = ri(r, 2, 6), b = ri(r, 2, 6); return [`You have ${a} shirts and ${b} pairs of pants. How many different outfits are possible?`, near(r, a * b, [-1, 1, a + b - a * b, 2].filter((x, i) => i < 4)), 0, `${a} × ${b} = ${a * b}.`]; }, 8);
  B.tpl(PB, (r) => { const n = T.pick(r, [4, 5, 6, 8, 10, 20]), k = ri(r, 1, n - 1); return [`The probability of an event is ${frac(k, n)}. What is the probability it does NOT happen?`, T.mc(r, frac(n - k, n), [frac(k, n), frac(k + 1, n), frac(n, k), frac(1, n)].filter((x) => x !== frac(n - k, n)), (rr) => `${ri(rr, 1, 9)}/${n}`), 0, `1 − ${frac(k, n)} = ${frac(n - k, n)}.`]; }, 10);
  B.tpl(PB, (r) => { const a = T.pick(r, [2, 3, 4, 5, 6, 8]), b = T.pick(r, [2, 3, 4, 5, 6, 8]); return [`A spinner has ${a} equal parts and you also flip a coin. What is the probability of landing on part 1 AND heads?`, T.mc(r, `1/${a * 2}`, [`1/${a}`, `1/${a + 2}`, `2/${a}`, `1/2`].filter((x) => x !== `1/${a * 2}`)), 0, `Multiply independent probabilities: 1/${a} × 1/2 = 1/${a * 2}.`]; }, 6);
  B.tpl(PB, (r) => { const n = ri(r, 4, 10) * 10, p = T.pick(r, [[1, 2], [1, 4], [1, 5], [3, 5], [1, 10], [3, 10]]); if ((n * p[0]) % p[1]) return null; return [`The probability of rain on a given day is ${p[0]}/${p[1]}. About how many rainy days would you expect in ${n} days?`, near(r, n * p[0] / p[1], [-p[0] * 2, p[0] * 2, 5, -5, n]), 0, `Expected = ${p[0]}/${p[1]} × ${n} = ${n * p[0] / p[1]}.`]; }, 10);
  B.tpl(PB, (r) => { const a = ri(r, 2, 6), b = ri(r, 2, 6); return [`You roll a die and a ${a}-sided spinner. What is the probability of rolling a 6 and spinning a 1?`, T.mc(r, `1/${6 * a}`, [`1/${6 + a}`, `2/${6 * a}`, `1/6`, `1/${a}`].filter((x, i, arr) => x !== `1/${6 * a}` && arr.indexOf(x) === i)), 0, `1/6 × 1/${a} = 1/${6 * a}.`]; }, 5);
  A("probability", `
What is probability?|how likely an event is to happen|the number of outcomes|a guess|=>A number from 0 to 1.
What is the probability of an impossible event?|0|1|1/2|=>It never happens.
What is the probability of a certain event?|1|0|1/2|=>It always happens.
Probability is always a number between…|0 and 1|1 and 10|−1 and 1|=>0 to 1 inclusive.
Which probability is most likely?|0.9|0.5|0.1|=>Closer to 1.
Which probability is least likely?|1/10|1/2|3/4|=>Closer to 0.
Which probability means an event is equally likely to happen or not?|1/2|1/4|3/4|=>50%.
What is an outcome?|a possible result|the number of trials|the probability|=>Each result.
What is a sample space?|the list of all possible outcomes|only the favorable outcomes|the probability|=>All outcomes.
What is an event?|a set of one or more outcomes|the number of trials|the probability|=>A subset.
What is the formula for the probability of an event?|favorable outcomes ÷ total outcomes|total ÷ favorable|favorable + total|=>Part over whole.
What is the probability of rolling a 4 on a fair die?|1/6|1/4|4/6|=>One of six outcomes.
What is the probability of rolling an even number on a fair die?|1/2|1/3|2/3|=>2, 4, 6 out of 6.
What is the probability of rolling a number greater than 4 on a fair die?|1/3|1/2|2/3|=>5, 6 out of 6.
What is the probability of flipping heads?|1/2|1/4|1|=>Two equally likely outcomes.
What is the probability of flipping two heads in a row?|1/4|1/2|1/3|=>1/2 × 1/2.
What is the probability of flipping three heads in a row?|1/8|1/6|1/3|=>(1/2)³.
What is the probability of drawing a heart from a standard deck of 52 cards?|1/4|1/13|1/2|=>13 hearts out of 52.
What is the probability of drawing a king from a standard deck?|1/13|1/4|1/52|=>4 kings out of 52.
What are independent events?|events where one doesn't affect the other|events that always happen together|events that can't happen|=>Like two coin flips.
What are dependent events?|events where one affects the other|events with no connection|impossible events|=>Drawing without replacement.
For independent events A and B, P(A and B) =|P(A) × P(B)|P(A) + P(B)|P(A) − P(B)|=>Multiply.
What does 'with replacement' mean?|put the item back before the next draw|keep the item|replace the bag|=>Probability stays the same.
What does 'without replacement' mean?|do not put the item back|put the item back|replace everything|=>The next probability changes.
A bag has 3 red and 2 blue marbles. You draw one red and don't replace it. What is the probability the next is red?|2/4 = 1/2|3/5|2/5|=>2 red left of 4 total.
What is the Fundamental Counting Principle?|multiply the number of choices at each step|add the number of choices|subtract the number of choices|=>Total = n₁ × n₂ × ...
How many outcomes are there when you flip 3 coins?|8|6|3|=>2 × 2 × 2.
How many outcomes are there when you roll 2 dice?|36|12|6|=>6 × 6.
What is a permutation?|an arrangement where order matters|a selection where order doesn't matter|a probability|=>ABC and CBA are different.
What is a combination?|a selection where order does not matter|an arrangement where order matters|a probability|=>ABC and CBA are the same.
How many ways can 3 people line up?|6|3|9|=>3 × 2 × 1.
How many ways can 4 books be arranged on a shelf?|24|16|4|=>4 × 3 × 2 × 1.
What is the complement of an event?|the event not happening|the event happening twice|the sample space|=>P(not A) = 1 − P(A).
If the probability of rain is 30%, what is the probability it does not rain?|70%|30%|100%|=>1 − 0.3.
What is experimental probability?|probability based on actual trials|probability based on theory|a guess|=>Results from experiments.
What is theoretical probability?|probability based on equally likely outcomes|probability from experiments|a guess|=>What should happen.
If you flip a coin 100 times, how many heads do you expect?|about 50|exactly 50|100|=>About half.
A spinner landed on blue 12 times out of 40 spins. What is the experimental probability of blue?|3/10|12/52|1/4|=>12/40 = 3/10.
True or false: A probability can be 1.5.|False|True|=>It must be between 0 and 1.
True or false: If P(A) = 0.4, then P(not A) = 0.6.|True|False|=>They add to 1.
True or false: Rolling a fair die and getting a 6 is less likely than getting an even number.|True|False|=>1/6 vs 1/2.
True or false: A fair coin that landed heads 5 times is more likely to land tails next.|False|True|=>Each flip is independent.
`);

  /* ---------- data displays & statistics ---------- */
  const DT = K("data");
  const list = (r, n, lo, hi) => Array.from({ length: n }, () => ri(r, lo, hi));
  const sortN = (a) => a.slice().sort((x, y) => x - y);
  B.tpl(DT, (r) => { const a = list(r, 5, 2, 20); const m = a.reduce((x, y) => x + y, 0) / 5; const s = a.join(", "); return [`Find the mean of: ${s}`, near(r, m, [-1, 1, 2, -2, 0.5].map((x) => x), (x) => String(Math.round(x * 100) / 100)), 0, `Sum = ${a.reduce((x, y) => x + y, 0)}; ÷ 5 = ${m}.`]; }, 16);
  B.tpl(DT, (r) => { const a = list(r, 7, 2, 30); const s = sortN(a); return [`Find the median of: ${a.join(", ")}`, near(r, s[3], [-1, 1, 2, -2, s[0] - s[3]].filter((x, i) => i < 4)), 0, `Order: ${s.join(", ")}. The middle value is ${s[3]}.`]; }, 14);
  B.tpl(DT, (r) => { const a = list(r, 6, 2, 30); const s = sortN(a); const med = (s[2] + s[3]) / 2; return [`Find the median of: ${a.join(", ")}`, near(r, med, [-1, 1, 2, -2, 0.5].map((x) => x), (x) => String(Math.round(x * 10) / 10)), 0, `Order: ${s.join(", ")}. Average the two middle values: ${med}.`]; }, 14);
  B.tpl(DT, (r) => { const a = list(r, 6, 3, 25); const s = sortN(a); return [`Find the range of: ${a.join(", ")}`, near(r, s[5] - s[0], [-1, 1, 2, -2, s[0]].filter((x, i) => i < 4)), 0, `Range = max − min = ${s[5]} − ${s[0]} = ${s[5] - s[0]}.`]; }, 14);
  B.tpl(DT, (r) => { const m = ri(r, 3, 15); const a = [m, m, ri(r, 1, 20), ri(r, 1, 20), ri(r, 1, 20), m].sort(() => r() - 0.5); const counts = {}; a.forEach((x) => (counts[x] = (counts[x] || 0) + 1)); const mx = Math.max(...Object.values(counts)); const modes = Object.keys(counts).filter((k) => counts[k] === mx); if (modes.length !== 1) return null; return [`Find the mode of: ${a.join(", ")}`, near(r, +modes[0], [-1, 1, 2, -2, 5]), 0, `${modes[0]} appears most often (${mx} times).`]; }, 10);
  B.tpl(DT, (r) => { const a = list(r, 4, 5, 20); const m = a.reduce((x, y) => x + y, 0) / 4; const outlier = ri(r, 60, 120); const b = a.concat(outlier); const m2 = b.reduce((x, y) => x + y, 0) / 5; return [`The data ${a.join(", ")} has a mean of ${m}. If ${outlier} is added to the set, what happens to the mean?`, ["It increases", "It decreases", "It stays the same", "It becomes 0"], 0, `${outlier} is much larger than the other values, so the mean rises to ${Math.round(m2 * 10) / 10}.`]; }, 4);
  B.tpl(DT, (r) => { const a = list(r, 5, 4, 14), t = ri(r, 5, 14); const m = a.reduce((x, y) => x + y, 0); const need = t * 6 - m; if (need < 0 || need > 40) return null; return [`Scores on 5 quizzes are ${a.join(", ")}. What score on the 6th quiz gives a mean of exactly ${t}?`, near(r, need, [-1, 1, 2, -2, 5]), 0, `Total needed: ${t} × 6 = ${t * 6}; ${t * 6} − ${m} = ${need}.`]; }, 12);
  B.tpl(DT, (r) => { const s = sortN(list(r, 8, 3, 40)); const q1 = (s[1] + s[2]) / 2, q3 = (s[5] + s[6]) / 2; return [`The ordered data are ${s.join(", ")}. What is the interquartile range (IQR)?`, near(r, q3 - q1, [-1, 1, 2, -2, 0.5].map((x) => x), (x) => String(Math.round(x * 10) / 10)), 0, `Q1 = ${q1}, Q3 = ${q3}; IQR = ${q3 - q1}.`]; }, 10);
  A("data", `
What is the mean?|the average, found by adding all values and dividing by the count|the middle value|the most common value|=>Sum ÷ count.
What is the median?|the middle value when the data are ordered|the average|the most common value|=>Order first.
What is the mode?|the value that appears most often|the middle value|the average|=>Most frequent.
What is the range?|the difference between the greatest and least values|the average|the middle value|=>Max − min.
What is an outlier?|a value much larger or smaller than the others|the mean|the mode|=>An unusual value.
Which measure is most affected by an outlier?|mean|median|mode|=>Extreme values pull the mean.
Which measure is the best to describe data with a big outlier?|median|mean|range|=>The median resists outliers.
Can a data set have more than one mode?|Yes|No|Only two|=>Bimodal, multimodal.
Can a data set have no mode?|Yes|No|Never|=>If all values appear equally often.
What is the median of an even number of values?|the average of the two middle values|the lowest value|the first value|=>Average the middle two.
What are quartiles?|values that divide ordered data into four equal parts|the mean and median|the mode|=>Q1, Q2, Q3.
What is Q2 (the second quartile)?|the median|the mean|the minimum|=>Middle value.
What is the interquartile range?|Q3 − Q1|max − min|Q2 − Q1|=>The spread of the middle half.
What is a box-and-whisker plot?|a display showing the minimum, Q1, median, Q3, and maximum|a bar graph|a circle graph|=>Five-number summary.
What does the 'box' in a box plot show?|the middle 50% of the data|the mean|the outliers|=>Q1 to Q3.
What do the 'whiskers' in a box plot show?|the minimum and maximum (the rest of the data)|the median|the mode|=>Extend to min and max.
What is the five-number summary?|minimum, Q1, median, Q3, maximum|mean, median, mode, range, count|sum, mean, mode, min, max|=>Used for a box plot.
What is a histogram?|a bar graph showing how often data fall in equal intervals|a circle graph|a line graph|=>Bars touch.
What is a stem-and-leaf plot?|a display that shows data using place values|a bar graph|a circle graph|=>Stem = tens, leaf = ones.
In a stem-and-leaf plot, what does 3 | 4 represent?|34|3.4|7|=>Stem 3, leaf 4.
What is a line plot?|a display with X marks above a number line|a bar graph|a circle graph|=>Shows frequency.
What is a circle graph best for?|showing parts of a whole|showing change over time|showing exact values|=>Percents of a total.
What is a line graph best for?|showing change over time|showing parts of a whole|showing categories|=>Trends.
What is a scatterplot?|a graph of ordered pairs showing a relationship between two variables|a bar graph|a circle graph|=>Points.
If points on a scatterplot go up from left to right, the correlation is…|positive|negative|none|=>Both rise together.
If points on a scatterplot go down from left to right, the correlation is…|negative|positive|none|=>One rises as the other falls.
If points on a scatterplot show no pattern, the correlation is…|none|positive|negative|=>No relationship.
What is a line of best fit?|a line that best represents the trend in a scatterplot|a bar|a circle|=>Approximates the data.
Does correlation always mean causation?|No|Yes|Always|=>Two things can be related without one causing the other.
Which graph shows each data value in a stem-and-leaf plot?|stem-and-leaf plot|histogram|circle graph|=>All values remain visible.
Which is the mean of 2, 4, 6?|4|6|12|=>12 ÷ 3.
Which is the median of 3, 7, 9?|7|3|9|=>Middle value.
Which is the mode of 2, 2, 3, 4?|2|3|4|=>Appears twice.
Which is the range of 10, 4, 7?|6|3|10|=>10 − 4.
Which is the mean of 5, 5, 5, 5?|5|20|0|=>All the same.
If all values are the same, the range is…|0|1|the value|=>No spread.
How do you find the mean of a set of values?|add them and divide by how many there are|find the middle|find the most common|=>Sum ÷ n.
A survey asks only students at the basketball game about favorite sports. What is the problem?|The sample is biased.|The sample is random.|The sample is large.|=>Not representative.
Which sample is the most random?|choosing names from a hat of all students|asking only your friends|asking only the team|=>Every student has a chance.
True or false: The median is always one of the data values.|False|True|=>With an even count it may not be.
True or false: The mean is always one of the data values.|False|True|=>Often not.
True or false: Adding the same number to every value increases the mean by that number.|True|False|=>Everything shifts.
True or false: A histogram is the same as a bar graph with gaps between bars.|False|True|=>Histogram bars touch.
`);
})();
