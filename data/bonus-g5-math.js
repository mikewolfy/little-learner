/* Grade 5 Math: bonus question banks. Numbers come from seeded templates, so every answer is computed. */
(function () {
  "use strict";
  const B = window.BONUS, T = B.T, K = (u) => "5/math/" + u;
  const ri = T.ri;
  const f = (n) => n.toLocaleString("en-US");
  const r2 = (x, d) => Math.round(x * Math.pow(10, d || 2)) / Math.pow(10, d || 2);
  const near = (r, right, ds, fmt) => { fmt = fmt || String; return T.mc(r, fmt(right), ds.map((d) => right + d).filter((x) => x >= 0 && x !== right).map(fmt), (rr) => fmt(Math.abs(right + (ri(rr, -12, 12) || 13)))); };
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const lcm = (a, b) => (a / gcd(a, b)) * b;
  const NAMES = ["Mia", "Noah", "Ava", "Liam", "Zoe", "Ben", "Lily", "Sam", "Ella", "Max", "Ruby", "Leo"];
  const nm = (r) => T.pick(r, NAMES);
  const A = (u, t) => B.add(K(u), t.split("\n").filter((x) => x.trim()).join("\n"));
  const frac = (n, d) => { const g = gcd(n, d); return d / g === 1 ? String(n / g) : `${n / g}/${d / g}`; };
  const mixed = (n, d) => { const w = Math.floor(n / d), rem = n % d; if (!rem) return String(w); if (!w) return frac(rem, d); const g = gcd(rem, d); return `${w} ${rem / g}/${d / g}`; };

  /* ---------- decimals ---------- */
  const DC = K("decimals");
  B.tpl(DC, (r) => { const n = ri(r, 1, 9999) / 1000; const s = n.toFixed(3); const idx = ri(r, 0, 2); const names = ["tenths", "hundredths", "thousandths"]; const digit = s.split(".")[1][idx]; return [`In ${s}, which digit is in the ${names[idx]} place?`, T.mc(r, digit, ["0123456789".split("").filter((d) => d !== digit)[ri(r, 0, 8)], "0123456789".split("").filter((d) => d !== digit)[ri(r, 0, 8)], s.split(".")[0].slice(-1)].filter((x, i, a) => a.indexOf(x) === i && x !== digit), (rr) => String(ri(rr, 0, 9))), 0, `After the decimal point: tenths, hundredths, thousandths.`]; }, 14);
  B.tpl(DC, (r) => { const n = ri(r, 1000, 99999) / 10000; const x = r2(n, 3); const dec = ri(r, 0, 2); const p = [1, 10, 100][dec]; const val = Math.round(n * Math.pow(10, [1, 2, 3][dec])) / Math.pow(10, [1, 2, 3][dec]); const name = ["tenth", "hundredth", "thousandth"][dec]; return [`Round ${n.toFixed(4)} to the nearest ${name}.`, near(r, val, [-1 / [10, 100, 1000][dec], 1 / [10, 100, 1000][dec], 0.5 / [10, 100, 1000][dec] * 0 + 2 / [10, 100, 1000][dec]].map((x) => r2(x, 4)), (z) => z.toFixed([1, 2, 3][dec])), 0, `Look at the digit to the right of the ${name} place: round up for 5 or more.`]; }, 16);
  B.tpl(DC, (r) => { const a = ri(r, 1, 9999) / 1000, b = ri(r, 1, 9999) / 1000; if (a === b) return null; const hi = Math.max(a, b), lo = Math.min(a, b); return [`Which is greater: ${a.toFixed(3)} or ${b.toFixed(3)}?`, [hi.toFixed(3), lo.toFixed(3)], 0, `Compare place by place from the left.`]; }, 14);
  B.tpl(DC, (r) => { const s = []; while (s.length < 4) { const v = ri(r, 1, 999) / 100; if (!s.includes(v)) s.push(v); } const sorted = s.slice().sort((a, b) => a - b); const toS = (arr) => arr.map((x) => x.toFixed(2)).join(", "); return [`Which list is in order from least to greatest?`, T.mc(r, toS(sorted), [toS(sorted.slice().reverse()), toS([sorted[1], sorted[0], sorted[2], sorted[3]]), toS(s)].filter((x, i, a) => a.indexOf(x) === i && x !== toS(sorted)), (rr) => toS(T.shuf(rr, sorted))), 0, `Compare each decimal's value.`]; }, 10);
  B.tpl(DC, (r) => { const n = ri(r, 1, 999), k = ri(r, 1, 3); const dec = n / Math.pow(10, k); const words = { 1: "tenths", 2: "hundredths", 3: "thousandths" }[k]; return [`Write ${f(n)} ${words} as a decimal.`.replace(/(\d)\s/, "$1 "), near(r, dec, [dec * 9 - dec, -dec + dec / 10, dec * 100 - dec].map((x) => x), (z) => String(r2(z, 4))), 0, `${n} ${words} = ${dec}.`]; }, 12);
  B.tpl(DC, (r) => { const a = ri(r, 2, 99); const places = ri(r, 1, 3); const d = a / Math.pow(10, places); const nn = a; const ex = `${Math.floor(nn / 10) * 10 ? "" : ""}`; return [`What is ${d} written as a fraction with a denominator of ${Math.pow(10, places)}?`, T.mc(r, `${a}/${Math.pow(10, places)}`, [`${a}/${Math.pow(10, places + 1)}`, `${a}/${Math.pow(10, Math.max(places - 1, 1))}`, `1/${a}`].filter((x, i, arr) => arr.indexOf(x) === i && x !== `${a}/${Math.pow(10, places)}`), (rr) => `${ri(rr, 1, 99)}/${[10, 100, 1000][ri(rr, 0, 2)]}`), 0, `${places === 1 ? "Tenths" : places === 2 ? "Hundredths" : "Thousandths"}: ${a}/${Math.pow(10, places)}.`]; }, 10);
  B.tpl(DC, (r) => { const n = ri(r, 11, 99) / 10; const k = ri(r, 1, 3); return [`What is ${n} × ${Math.pow(10, k)}?`, near(r, r2(n * Math.pow(10, k), 4), [-n, n, n * 10, n * 9].map((x) => r2(x, 4)), (z) => String(r2(z, 4))), 0, `Move the decimal point ${k} place${k > 1 ? "s" : ""} to the right.`]; }, 10);
  B.tpl(DC, (r) => { const n = ri(r, 11, 999) / 10; const k = ri(r, 1, 3); return [`What is ${n} ÷ ${Math.pow(10, k)}?`, near(r, r2(n / Math.pow(10, k), 5), [n / 100, n, -n / 100].map((x) => r2(x, 5)), (z) => String(r2(z, 5))), 0, `Move the decimal point ${k} place${k > 1 ? "s" : ""} to the left.`]; }, 10);
  A("decimals", `
What is a decimal?|a number with a decimal point separating whole parts from parts of a whole|a whole number|a fraction only|=>Like 3.25.
What does the decimal point separate?|the whole number part from the fractional part|the tens from the ones|the digits from the sign|=>Whole on the left.
What place is the first digit to the right of the decimal point?|tenths|ones|hundredths|=>0.1 = one tenth.
What place is the second digit to the right of the decimal point?|hundredths|tenths|thousandths|=>0.01 = one hundredth.
What place is the third digit to the right of the decimal point?|thousandths|hundredths|tenths|=>0.001.
How many tenths are in 1 whole?|10|100|1,000|=>10 × 0.1 = 1.
How many hundredths are in 1 whole?|100|10|1,000|=>100 × 0.01 = 1.
How many thousandths are in 1 whole?|1,000|100|10|=>1,000 × 0.001.
How many hundredths are in 1 tenth?|10|100|1|=>0.1 = 0.10.
What is 0.4 + 0.3?|0.7|0.07|7|=>4 tenths + 3 tenths.
What is 0.9 + 0.2?|1.1|0.11|1.0|=>9 tenths + 2 tenths = 11 tenths.
What is 1 − 0.25?|0.75|0.85|0.65|=>100 hundredths − 25.
Which decimal is equivalent to 0.5?|0.50|0.05|5.0|=>Equivalent decimals.
Which decimal is equivalent to 0.30?|0.3|0.03|3.0|=>Trailing zero.
Which decimal is equivalent to 2.40?|2.4|2.04|24|=>Same value.
Which decimal is NOT equivalent to 0.7?|0.07|0.70|0.700|=>0.07 is smaller.
Which is greater: 0.5 or 0.50?|They are equal|0.5|0.50|=>Same value.
Which is greater: 0.6 or 0.06?|0.6|0.06|They are equal|=>6 tenths vs 6 hundredths.
Which is greater: 0.08 or 0.1?|0.1|0.08|They are equal|=>0.10 > 0.08.
Which is the least: 0.3, 0.03, 0.33?|0.03|0.3|0.33|=>Hundredths < tenths.
What is the value of the 7 in 4.572?|7 hundredths (0.07)|7 tenths|7 thousandths|=>Second place after the decimal.
What is the value of the 5 in 4.572?|5 tenths (0.5)|5 hundredths|5 ones|=>First place after the decimal.
What is the value of the 2 in 4.572?|2 thousandths (0.002)|2 hundredths|2 tenths|=>Third place.
What is 3.46 in expanded form?|3 + 0.4 + 0.06|3 + 4 + 6|30 + 4 + 0.6|=>Value of each digit.
What is 5 + 0.2 + 0.03 in standard form?|5.23|5.32|52.3|=>5 ones, 2 tenths, 3 hundredths.
How is 'five and six hundredths' written?|5.06|5.6|5.006|=>Hundredths take two places.
How is 'two and three tenths' written?|2.3|2.03|23|=>One decimal place.
How is 'four thousandths' written?|0.004|0.04|4.000|=>Three decimal places.
How do you read 0.75?|seventy-five hundredths|seven and five tenths|seventy-five thousandths|=>0.75 = 75/100.
How do you read 6.008?|six and eight thousandths|six and eight hundredths|sixty-eight thousandths|=>Three decimal places.
Round 3.47 to the nearest tenth.|3.5|3.4|3.0|=>7 hundredths rounds up.
Round 6.231 to the nearest hundredth.|6.23|6.24|6.2|=>1 thousandth rounds down.
Round 8.95 to the nearest whole number.|9|8|10|=>0.95 rounds up.
Round 0.649 to the nearest hundredth.|0.65|0.64|0.6|=>9 thousandths rounds up.
Round 12.5 to the nearest whole number.|13|12|10|=>5 rounds up.
Round 2.049 to the nearest tenth.|2.0|2.1|2.05|=>4 hundredths rounds down.
Which number rounds to 4.6 when rounded to the nearest tenth?|4.58|4.54|4.64|=>4.58 ≈ 4.6.
Which number rounds to 7 when rounded to the nearest whole number?|6.5|6.4|7.5|=>6.5 rounds up.
Which number sentence is true?|0.4 > 0.39|0.4 < 0.39|0.4 = 0.39|=>0.40 > 0.39.
Which symbol makes this true? 1.25 ___ 1.3|<|>|=|=>1.25 < 1.30.
Which symbol makes this true? 0.80 ___ 0.8|=|<|>|=>Equivalent.
Which number is between 0.2 and 0.3?|0.25|0.35|0.15|=>0.20 < 0.25 < 0.30.
Which number is between 1.5 and 1.6?|1.55|1.65|1.45|=>Between tenths.
Which decimal is closest to 1?|0.98|0.89|0.5|=>2 hundredths away.
What is 0.1 × 10?|1|0.01|10|=>Move the decimal right.
What is 4.5 × 100?|450|45|4,500|=>Move two places right.
What is 36 ÷ 100?|0.36|3.6|0.036|=>Move two places left.
What is 7.2 ÷ 10?|0.72|72|0.072|=>Move one place left.
What is 0.06 × 100?|6|60|0.6|=>Two places right.
How many times greater is 5 than 0.5?|10|100|5|=>0.5 × 10 = 5.
How many times greater is 0.6 than 0.006?|100|10|1,000|=>Two places.
True or false: 0.5 is the same as 1/2.|True|False|=>5/10 = 1/2.
True or false: 0.25 is the same as 1/4.|True|False|=>25/100 = 1/4.
True or false: 0.75 is the same as 3/4.|True|False|=>75/100 = 3/4.
True or false: 0.3 is the same as 3/100.|False|True|=>0.3 = 3/10.
True or false: Adding a zero at the end of a decimal changes its value.|False|True|=>0.5 = 0.50.
`);

  /* ---------- number theory ---------- */
  const NT = K("number-theory");
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  const isP = (n) => n > 1 && primes.includes(n);
  B.tpl(NT, (r) => { const n = ri(r, 2, 99); return [`Is ${n} prime or composite?`, isP(n) ? ["prime", "composite", "neither"] : ["composite", "prime", "neither"], 0, isP(n) ? `${n} has exactly two factors: 1 and ${n}.` : `${n} has more than two factors.`]; }, 30);
  B.tpl(NT, (r) => { const n = ri(r, 12, 100); const fs = []; for (let i = 1; i <= n; i++) if (n % i === 0) fs.push(i); return [`How many factors does ${n} have?`, near(r, fs.length, [-1, 1, 2, -2, 3]), 0, `Factors of ${n}: ${fs.join(", ")}.`]; }, 14);
  B.tpl(NT, (r) => { const a = ri(r, 4, 24), b = ri(r, 4, 24); if (a === b) return null; return [`What is the greatest common factor (GCF) of ${a} and ${b}?`, near(r, gcd(a, b), [-1, 1, 2, a - gcd(a, b), 3]), 0, `The largest number that divides both: ${gcd(a, b)}.`]; }, 16);
  B.tpl(NT, (r) => { const a = ri(r, 2, 12), b = ri(r, 2, 12); if (a === b) return null; return [`What is the least common multiple (LCM) of ${a} and ${b}?`, near(r, lcm(a, b), [-a, a, b, a * b - lcm(a, b), lcm(a, b)].map((x) => x).filter((x) => x), (z) => String(z)), 0, `The smallest number that is a multiple of both: ${lcm(a, b)}.`]; }, 16);
  B.tpl(NT, (r) => { const n = ri(r, 2, 15), k = ri(r, 3, 6); const arr = Array.from({ length: k }, (_, i) => n * (i + 1)); return [`Which number is a multiple of ${n}?`, T.mc(r, n * (k + 1), [n * (k + 1) + 1, n * (k + 1) - 1, n * (k + 1) + 2], (rr) => ri(rr, 10, 150)), 0, `${n} × ${k + 1} = ${n * (k + 1)}.`]; }, 10);
  B.tpl(NT, (r) => { const n = ri(r, 12, 60); const fs = []; for (let i = 1; i <= n; i++) if (n % i === 0) fs.push(i); const nf = [n + 1, n + 3, n + 5, n * 2 + 1].find((x) => n % x !== 0); return [`Which is a factor of ${n}?`, T.mc(r, fs[ri(r, 1, fs.length - 1)], [nf, nf + 2, nf + 4]), 0, `A factor divides evenly into ${n}.`]; }, 10);
  B.tpl(NT, (r) => { const n = ri(r, 12, 90); const d = []; let m = n; const pf = []; for (let p = 2; p * p <= m; p++) while (m % p === 0) { pf.push(p); m /= p; } if (m > 1) pf.push(m); if (pf.length < 2) return null; return [`Which shows the prime factorization of ${n}?`, T.mc(r, pf.join(" × "), [pf.concat(1).join(" × "), (pf[0] * pf[1]) + " × " + pf.slice(2).concat(1).join(" × "), pf.map((x) => x + 1).join(" × ")].filter((x) => x !== pf.join(" × ")).slice(0, 3)), 0, `${pf.join(" × ")} = ${n}, and each factor is prime.`]; }, 12);
  B.tpl(NT, (r) => { const n = ri(r, 10, 400); const d3 = n % 3 === 0, d9 = n % 9 === 0, d2 = n % 2 === 0, d5 = n % 5 === 0; const which = T.pick(r, [[2, d2], [3, d3], [5, d5], [9, d9]]); return [`Is ${n} divisible by ${which[0]}?`, which[1] ? ["Yes", "No"] : ["No", "Yes"], 0, `${which[0] === 2 ? "Even numbers are divisible by 2." : which[0] === 5 ? "Numbers ending in 0 or 5 are divisible by 5." : which[0] === 3 ? "If the sum of the digits is divisible by 3, the number is." : "If the sum of the digits is divisible by 9, the number is."}`]; }, 14);
  A("number-theory", `
What is a prime number?|a number with exactly two factors, 1 and itself|a number with more than two factors|an even number|=>2, 3, 5, 7...
What is a composite number?|a number with more than two factors|a number with exactly two factors|a number with one factor|=>4, 6, 8, 9...
Is 1 prime or composite?|neither|prime|composite|=>1 has only one factor.
What is the only even prime number?|2|4|0|=>All other evens are divisible by 2.
Which number is prime?|13|15|21|=>Only 1 and 13 divide 13.
Which number is composite?|27|23|29|=>27 = 3 × 9.
Which list contains only prime numbers?|2, 3, 5, 7|2, 4, 6, 8|1, 3, 5, 7|=>No composites.
What is a factor?|a number that divides evenly into another|a number you get by multiplying|a prime|=>Divisors.
What is a multiple?|the product of a number and a whole number|a number that divides evenly|a prime|=>3, 6, 9...
What are the factors of 12?|1, 2, 3, 4, 6, 12|2, 4, 6, 12|1, 12|=>Pairs: 1×12, 2×6, 3×4.
What are the factors of 18?|1, 2, 3, 6, 9, 18|1, 2, 3, 9, 18|2, 3, 6, 9|=>Pairs: 1×18, 2×9, 3×6.
What are the first five multiples of 6?|6, 12, 18, 24, 30|6, 7, 8, 9, 10|1, 2, 3, 6, 12|=>Count by 6.
What is the GCF of 12 and 18?|6|3|36|=>Largest common factor.
What is the GCF of 8 and 20?|4|2|8|=>Common factors: 1, 2, 4.
What is the GCF of 15 and 25?|5|3|15|=>Common factors: 1, 5.
What is the LCM of 4 and 6?|12|24|10|=>Multiples of 4: 4, 8, 12; of 6: 6, 12.
What is the LCM of 3 and 5?|15|8|30|=>Smallest shared multiple.
What is the LCM of 2 and 8?|8|16|4|=>8 is a multiple of 2.
A number divisible by 10 must end in…|0|5|1|=>Ends in 0.
A number divisible by 5 ends in…|0 or 5|1 or 6|2 or 7|=>Divisibility rule.
A number divisible by 2 ends in…|0, 2, 4, 6, or 8|1, 3, 5, 7, or 9|0 or 5|=>Even digits.
Is 135 divisible by 3?|Yes, 1 + 3 + 5 = 9|No|Only by 5|=>Digit sum 9.
Is 214 divisible by 3?|No, 2 + 1 + 4 = 7|Yes|Only by 2|=>7 isn't divisible by 3.
Is 729 divisible by 9?|Yes, 7 + 2 + 9 = 18|No|Only by 3|=>Digit sum 18.
Which number is divisible by both 2 and 5?|60|45|52|=>Ends in 0.
Which number is divisible by both 3 and 4?|24|18|20|=>24 ÷ 3 = 8 and 24 ÷ 4 = 6.
What is a prime factorization?|expressing a number as a product of prime numbers|a list of all factors|a multiple|=>12 = 2 × 2 × 3.
What is the prime factorization of 12?|2 × 2 × 3|3 × 4|2 × 6|=>4 and 6 are not prime.
What is the prime factorization of 30?|2 × 3 × 5|5 × 6|3 × 10|=>All factors are prime.
What is the prime factorization of 18?|2 × 3 × 3|2 × 9|3 × 6|=>Break down 9.
What is the prime factorization of 20?|2 × 2 × 5|4 × 5|2 × 10|=>Break down 4.
What is a factor tree?|a diagram that breaks a number into factors until all are prime|a family tree|a type of graph|=>Branches.
A number is a perfect square if…|it is the square of a whole number|it is even|it is prime|=>9, 16, 25.
Which number is a perfect square?|36|35|40|=>6 × 6.
How many factors does a prime number have?|2|1|3|=>1 and itself.
How many factors does a perfect square usually have?|an odd number|an even number|exactly 2|=>Because one factor pairs with itself.
How many prime numbers are there between 1 and 10?|4|5|3|=>2, 3, 5, 7.
How many prime numbers are there between 10 and 20?|4|3|5|=>11, 13, 17, 19.
Which is the smallest prime number?|2|1|3|=>The first prime.
Which is the smallest composite number?|4|2|6|=>2 × 2.
Which number is neither prime nor composite?|1|2|0|=>1 has only one factor. (0 is not a counting number.)
True or false: All odd numbers are prime.|False|True|=>9 is odd but composite.
True or false: All prime numbers are odd.|False|True|=>2 is prime and even.
True or false: 51 is prime.|False|True|=>51 = 3 × 17.
True or false: 91 is prime.|False|True|=>91 = 7 × 13.
True or false: 97 is prime.|True|False|=>No factors other than 1 and 97.
True or false: The GCF of two prime numbers is always 1.|True|False|=>Different primes share no factors but 1.
True or false: The LCM of two numbers can be smaller than both numbers.|False|True|=>It is at least as large as the larger number.
`);

  /* ---------- adding & subtracting fractions ---------- */
  const FA = K("fraction-add");
  B.tpl(FA, (r) => { const d = T.pick(r, [3, 4, 5, 6, 8, 10, 12]), a = ri(r, 1, d - 1), b = ri(r, 1, d - 1); const n = a + b; return [`${a}/${d} + ${b}/${d} = ?`, T.mc(r, mixed(n, d), [`${n}/${d * 2}`, mixed(n + 1, d), mixed(Math.abs(a - b) || 1, d), frac(a + b, d + d)].filter((x, i, arr) => arr.indexOf(x) === i && x !== mixed(n, d)), (rr) => `${ri(rr, 1, 7)}/${d}`), 0, `Add the numerators and keep the denominator: ${n}/${d} = ${mixed(n, d)}.`]; }, 14);
  B.tpl(FA, (r) => { const d = T.pick(r, [4, 5, 6, 8, 10, 12]), a = ri(r, 2, d - 1), b = ri(r, 1, a - 1); return [`${a}/${d} − ${b}/${d} = ?`, T.mc(r, frac(a - b, d), [frac(a + b, d), frac(a - b, d - b), frac(b, d), frac(a - b, d * 2)].filter((x, i, arr) => arr.indexOf(x) === i && x !== frac(a - b, d)), (rr) => `${ri(rr, 1, d)}/${d}`), 0, `Subtract numerators: ${a - b}/${d} = ${frac(a - b, d)}.`]; }, 14);
  B.tpl(FA, (r) => { const d1 = T.pick(r, [2, 3, 4, 5, 6]), d2 = T.pick(r, [2, 3, 4, 5, 6, 8]); if (d1 === d2) return null; const n1 = ri(r, 1, d1 - 1), n2 = ri(r, 1, d2 - 1); const L = lcm(d1, d2); const sum = n1 * (L / d1) + n2 * (L / d2); return [`${n1}/${d1} + ${n2}/${d2} = ?`, T.mc(r, mixed(sum, L), [`${n1 + n2}/${d1 + d2}`, mixed(sum + 1, L), mixed(Math.max(sum - 1, 1), L), `${n1 + n2}/${L}`].filter((x, i, arr) => arr.indexOf(x) === i && x !== mixed(sum, L)), (rr) => `${ri(rr, 1, 9)}/${L}`), 0, `Use a common denominator of ${L}: ${n1 * (L / d1)}/${L} + ${n2 * (L / d2)}/${L} = ${mixed(sum, L)}.`]; }, 18);
  B.tpl(FA, (r) => { const d1 = T.pick(r, [2, 3, 4, 5, 6]), d2 = T.pick(r, [2, 3, 4, 5, 6, 8]); if (d1 === d2) return null; const L = lcm(d1, d2); const n1 = ri(r, 1, d1 - 1), n2 = ri(r, 1, d2 - 1); const v1 = n1 * (L / d1), v2 = n2 * (L / d2); if (v1 <= v2) return null; return [`${n1}/${d1} − ${n2}/${d2} = ?`, T.mc(r, frac(v1 - v2, L), [frac(Math.abs(n1 - n2) || 1, Math.abs(d1 - d2) || 1), frac(v1 + v2, L), frac(v1 - v2 + 1, L)].filter((x, i, arr) => arr.indexOf(x) === i && x !== frac(v1 - v2, L)), (rr) => `${ri(rr, 1, 9)}/${L}`), 0, `Common denominator ${L}: ${v1}/${L} − ${v2}/${L} = ${frac(v1 - v2, L)}.`]; }, 14);
  B.tpl(FA, (r) => { const d = T.pick(r, [2, 3, 4, 5, 6, 8]), w1 = ri(r, 1, 6), w2 = ri(r, 1, 6), n1 = ri(r, 1, d - 1), n2 = ri(r, 1, d - 1); const total = (w1 + w2) * d + n1 + n2; return [`${w1} ${n1}/${d} + ${w2} ${n2}/${d} = ?`, T.mc(r, mixed(total, d), [mixed(total + d, d), mixed(total - 1, d), mixed(total + 1, d)].filter((x, i, arr) => arr.indexOf(x) === i && x !== mixed(total, d)), (rr) => `${ri(rr, 1, 12)} ${ri(rr, 1, d - 1)}/${d}`), 0, `Add whole numbers and fractions: ${mixed(total, d)}.`]; }, 14);
  B.tpl(FA, (r) => { const n = nm(r), d = T.pick(r, [3, 4, 5, 6, 8]), a = ri(r, 1, d - 1), b = ri(r, 1, d - 1); return [`${n} ate ${a}/${d} of a pizza and a friend ate ${b}/${d}. How much of the pizza did they eat together?`, T.mc(r, mixed(a + b, d), [mixed(a + b + 1, d), `${a + b}/${d * 2}`, mixed(Math.abs(a - b) || 1, d)].filter((x, i, arr) => arr.indexOf(x) === i && x !== mixed(a + b, d)), (rr) => `${ri(rr, 1, 7)}/${d}`), 0, `${a}/${d} + ${b}/${d} = ${mixed(a + b, d)}.`]; }, 10);
  B.tpl(FA, (r) => { const d = T.pick(r, [4, 6, 8, 10, 12]), a = ri(r, 1, 6); const n = a * d + ri(r, 1, d - 1); const w = Math.floor(n / d), rem = n % d; return [`Write ${n}/${d} as a mixed number in simplest form.`, T.mc(r, mixed(n, d), [`${w} ${rem}/${d * 2}`.replace(/.*/, w + " " + (rem + 1) + "/" + d), `${w + 1} ${rem}/${d}`, `${rem} ${w}/${d}`].filter((x, i, arr) => arr.indexOf(x) === i && x !== mixed(n, d)), (rr) => `${ri(rr, 1, 8)} ${ri(rr, 1, 5)}/${d}`), 0, `${n} ÷ ${d} = ${w} remainder ${rem}.`]; }, 10);
  A("fraction-add", `
What is a common denominator?|a shared multiple of the denominators|the sum of the numerators|the largest numerator|=>Needed to add unlike fractions.
What is the least common denominator of 1/2 and 1/3?|6|5|2|=>LCM of 2 and 3.
What is the least common denominator of 1/4 and 1/6?|12|24|10|=>LCM of 4 and 6.
What is the least common denominator of 1/3 and 1/9?|9|3|27|=>9 is a multiple of 3.
What is 1/2 + 1/2?|1|1/4|2|=>Two halves make a whole.
What is 1/4 + 1/4?|1/2|2/8|1/8|=>2/4 = 1/2.
What is 1/3 + 1/3?|2/3|2/6|1/9|=>Add numerators.
What is 2/5 + 1/5?|3/5|3/10|2/5|=>Same denominator.
What is 3/8 + 1/8?|1/2|4/16|3/8|=>4/8 = 1/2.
What is 5/6 − 1/6?|2/3|4/12|5/6|=>4/6 = 2/3.
What is 3/4 − 1/4?|1/2|2/8|3/4|=>2/4 = 1/2.
What is 1 − 1/3?|2/3|1/3|3/3|=>3/3 − 1/3.
What is 1 − 3/8?|5/8|3/8|7/8|=>8/8 − 3/8.
What is 1/2 + 1/4?|3/4|2/6|1/6|=>2/4 + 1/4.
What is 1/2 + 1/3?|5/6|2/5|2/6|=>3/6 + 2/6.
What is 3/4 + 1/8?|7/8|4/12|4/8|=>6/8 + 1/8.
What is 2/3 − 1/6?|1/2|1/3|1/6|=>4/6 − 1/6 = 3/6.
What is 5/6 − 1/3?|1/2|4/3|2/3|=>5/6 − 2/6 = 3/6.
What is 1/2 − 1/3?|1/6|1/5|1/1|=>3/6 − 2/6.
What is 7/8 − 1/2?|3/8|6/6|5/8|=>7/8 − 4/8.
What is 1 1/2 + 1 1/2?|3|2|2 1/2|=>1.5 + 1.5.
What is 2 1/4 + 1 1/4?|3 1/2|3 1/4|4|=>Add wholes and fractions.
What is 3 3/4 + 1 1/4?|5|4 1/2|4 4/8|=>3/4 + 1/4 = 1 whole.
What is 4 1/3 − 1 1/3?|3|2 2/3|3 1/3|=>Subtract wholes.
What is 5 − 2 1/2?|2 1/2|3 1/2|3|=>Rename 5 as 4 2/2.
What is 3 1/2 − 1 3/4?|1 3/4|2 1/4|2 1/2|=>3 2/4 − 1 3/4 = 1 3/4.
How do you rename 1 as a fraction with denominator 4?|4/4|1/4|4/1|=>Same numerator and denominator.
How do you write 7/4 as a mixed number?|1 3/4|1 1/4|2 1/4|=>4 goes into 7 once with 3 left.
How do you write 2 1/3 as an improper fraction?|7/3|5/3|6/3|=>2 × 3 + 1 = 7.
How do you write 3 2/5 as an improper fraction?|17/5|15/5|11/5|=>3 × 5 + 2.
How do you write 11/3 as a mixed number?|3 2/3|2 3/3|3 1/3|=>3 × 3 + 2 = 11.
Which is an improper fraction?|9/5|3/5|1 2/5|=>Numerator > denominator.
Which is a proper fraction?|4/7|7/4|1 3/4|=>Numerator < denominator.
Which is a mixed number?|2 1/2|5/2|1/2|=>Whole number plus a fraction.
What is the simplest form of 6/8?|3/4|2/3|1/2|=>Divide by 2.
What is the simplest form of 10/15?|2/3|5/7|1/3|=>Divide by 5.
What is the simplest form of 12/18?|2/3|3/4|6/9|=>Divide by 6.
What is the simplest form of 4/12?|1/3|2/6|1/4|=>Divide by 4.
Which fraction is equivalent to 2/3?|8/12|6/12|4/9|=>Multiply by 4/4.
Which fraction is equivalent to 3/5?|9/15|6/15|3/10|=>Multiply by 3/3.
Which fraction is NOT equivalent to 1/2?|3/5|4/8|5/10|=>3/5 = 0.6.
Which is greater: 2/3 or 3/4?|3/4|2/3|They are equal|=>8/12 < 9/12.
Which is greater: 5/6 or 7/8?|7/8|5/6|They are equal|=>20/24 < 21/24.
Which is less: 3/5 or 2/3?|3/5|2/3|They are equal|=>9/15 < 10/15.
Which sentence is true?|1/2 < 2/3|1/2 > 2/3|1/2 = 2/3|=>3/6 < 4/6.
Maria uses 1/3 cup of sugar and 1/2 cup of flour. How much is that in all?|5/6 cup|2/5 cup|1/6 cup|=>2/6 + 3/6.
A board is 7/8 foot long. 1/4 foot is cut off. How long is it now?|5/8 foot|6/4 foot|3/8 foot|=>7/8 − 2/8.
You walk 1/2 mile and then 3/4 mile. How far did you walk?|1 1/4 miles|4/6 mile|1 mile|=>2/4 + 3/4 = 5/4.
A tank is 5/6 full and 1/3 of the tank is used. How full is it now?|1/2|4/6 is wrong; 4/3|2/3|=>5/6 − 2/6 = 3/6.
True or false: 1/2 + 1/3 = 2/5.|False|True|=>You can't add denominators; it's 5/6.
True or false: 3/4 − 1/4 = 2/4.|True|False|=>Subtract numerators.
True or false: 2/6 and 1/3 are equivalent.|True|False|=>Divide by 2.
True or false: When adding fractions with different denominators, you add the denominators.|False|True|=>Use a common denominator.
`.replace("A tank is 5/6 full and 1/3 of the tank is used. How full is it now?|1/2|4/6 is wrong; 4/3|2/3|=>5/6 − 2/6 = 3/6.","A tank is 5/6 full and 1/3 of the tank is used. How full is it now?|1/2|2/3|1/6|=>5/6 − 2/6 = 3/6 = 1/2."));

  /* ---------- multiplying & dividing fractions ---------- */
  const FM = K("fraction-multiply");
  B.tpl(FM, (r) => { const a = ri(r, 1, 5), b = ri(r, 2, 8), c = ri(r, 1, 5), d = ri(r, 2, 8); if (a >= b || c >= d) return null; return [`${a}/${b} × ${c}/${d} = ?`, T.mc(r, frac(a * c, b * d), [frac(a + c, b + d), frac(a * c, b + d), frac(a * d, b * c), frac(a * c + 1, b * d)].filter((x, i, arr) => arr.indexOf(x) === i && x !== frac(a * c, b * d)), (rr) => `${ri(rr, 1, 9)}/${ri(rr, 10, 40)}`), 0, `Multiply numerators and denominators: ${a * c}/${b * d} = ${frac(a * c, b * d)}.`]; }, 18);
  B.tpl(FM, (r) => { const w = ri(r, 2, 12), a = ri(r, 1, 4), b = ri(r, a + 1, 8); return [`${a}/${b} × ${w * b} = ?`, near(r, a * w, [-w, w, a, 1, -1]), 0, `Divide ${w * b} by ${b} to get ${w}, then multiply by ${a}: ${a * w}.`]; }, 12);
  B.tpl(FM, (r) => { const a = ri(r, 1, 5), b = ri(r, a + 1, 9), k = ri(r, 2, 8); return [`${k} × ${a}/${b} = ?`, T.mc(r, mixed(a * k, b), [mixed(a + k, b), mixed(a * k, b * k), mixed(a * k + 1, b), `${a}/${b * k}`].filter((x, i, arr) => arr.indexOf(x) === i && x !== mixed(a * k, b)), (rr) => `${ri(rr, 1, 9)}/${b}`), 0, `Multiply the whole number by the numerator: ${a * k}/${b} = ${mixed(a * k, b)}.`]; }, 12);
  B.tpl(FM, (r) => { const a = ri(r, 1, 3), d = ri(r, 2, 6), k = ri(r, 2, 6); return [`${a}/${d} ÷ ${k} = ?`, T.mc(r, frac(a, d * k), [frac(a * k, d), frac(a + k, d), frac(a, d + k), frac(a * d, k)].filter((x, i, arr) => arr.indexOf(x) === i && x !== frac(a, d * k)), (rr) => `${ri(rr, 1, 5)}/${ri(rr, 6, 30)}`), 0, `Dividing by ${k} is the same as multiplying by 1/${k}: ${frac(a, d * k)}.`]; }, 12);
  B.tpl(FM, (r) => { const k = ri(r, 2, 8), d = ri(r, 2, 6); return [`${k} ÷ 1/${d} = ?`, near(r, k * d, [-d, d, k, 1, -1]), 0, `Dividing by 1/${d} means multiplying by ${d}: ${k} × ${d} = ${k * d}.`]; }, 10);
  B.tpl(FM, (r) => { const d = ri(r, 2, 6), k = ri(r, 2, 9); return [`How many 1/${d}s are in ${k}?`, near(r, k * d, [-d, d, k, 1]), 0, `${k} × ${d} = ${k * d}.`]; }, 8);
  B.tpl(FM, (r) => { const n = nm(r), cups = ri(r, 2, 6), num = ri(r, 1, 3), den = ri(r, num + 1, 5); return [`A recipe uses ${num}/${den} cup of milk. ${n} makes ${cups} batches. How much milk is needed?`, T.mc(r, mixed(num * cups, den) + " cups", [mixed(num + cups, den) + " cups", `${num}/${den * cups} cup`, mixed(num * cups + 1, den) + " cups"].filter((x, i, arr) => arr.indexOf(x) === i && x !== mixed(num * cups, den) + " cups"), (rr) => `${ri(rr, 1, 5)}/${den} cup`), 0, `${cups} × ${num}/${den} = ${mixed(num * cups, den)} cups.`]; }, 10);
  B.tpl(FM, (r) => { const n = nm(r), w = ri(r, 2, 6) * 4, num = ri(r, 1, 3); const d = 4; return [`${n} has ${w} stickers and gives away ${num}/${d} of them. How many does ${n} give away?`, near(r, w / d * num, [-1, 1, num, w - w / d * num]), 0, `${w} ÷ ${d} = ${w / d}; × ${num} = ${w / d * num}.`]; }, 10);
  A("fraction-multiply", `
How do you multiply two fractions?|multiply the numerators and multiply the denominators|add the numerators|find a common denominator first|=>a/b × c/d = ac/bd.
What is 1/2 × 1/2?|1/4|1/2|1|=>1×1 / 2×2.
What is 1/2 × 1/3?|1/6|2/5|1/5|=>Multiply across.
What is 2/3 × 3/4?|1/2|6/7|5/7|=>6/12 = 1/2.
What is 3/5 × 5/6?|1/2|8/11|15/11|=>15/30 = 1/2.
What is 1/4 × 1/4?|1/16|1/8|1/2|=>1/(4 × 4).
What is 2/5 × 1/3?|2/15|3/8|2/8|=>2/(5 × 3).
What is 3/4 × 2/3?|1/2|5/7|6/7|=>6/12.
What is 1/2 of 8?|4|16|6|=>Half of 8.
What is 1/4 of 20?|5|80|16|=>20 ÷ 4.
What is 2/3 of 12?|8|6|18|=>12 ÷ 3 × 2.
What is 3/4 of 16?|12|4|19|=>16 ÷ 4 × 3.
What is 5/6 of 18?|15|3|23|=>18 ÷ 6 × 5.
What is 1/3 of 1/2?|1/6|1/5|2/3|=>1/3 × 1/2.
What is 4 × 1/2?|2|4/2 is 2|8|=>4/2 = 2.
What is 6 × 2/3?|4|12/9|9|=>12/3 = 4.
What is 5 × 3/10?|1 1/2|15/50|8/10|=>15/10 = 1 1/2.
What is a reciprocal?|the fraction flipped upside down|the same fraction|the negative of the fraction|=>Numerator and denominator swap.
What is the reciprocal of 2/3?|3/2|2/3|−2/3|=>Flip.
What is the reciprocal of 5?|1/5|5|−5|=>5 = 5/1.
What is the reciprocal of 1/7?|7|1/7|−7|=>Flip 1/7.
What is the product of a number and its reciprocal?|1|0|the number|=>2/3 × 3/2 = 1.
To divide by a fraction, you…|multiply by its reciprocal|subtract|add|=>Keep, change, flip.
What is 1/2 ÷ 1/4?|2|1/8|1/2|=>1/2 × 4/1.
What is 3/4 ÷ 1/2?|1 1/2|3/8|2/3|=>3/4 × 2/1 = 6/4.
What is 2 ÷ 1/3?|6|2/3|1/6|=>2 × 3.
What is 4 ÷ 1/2?|8|2|1/8|=>4 × 2.
What is 1/3 ÷ 2?|1/6|2/3|3/2|=>1/3 × 1/2.
What is 1/4 ÷ 3?|1/12|3/4|12|=>1/4 × 1/3.
What is 2/3 ÷ 2/3?|1|4/9|2|=>Anything divided by itself.
What is 5/6 ÷ 5/12?|2|1/2|25/72|=>5/6 × 12/5.
How many 1/2s are in 3?|6|3/2|1.5 is wrong|=>3 ÷ 1/2 = 6.
How many 1/4s are in 1 1/2?|6|4|3|=>1.5 ÷ 0.25.
How many 1/3-cup servings are in 2 cups?|6|2/3|3|=>2 ÷ 1/3.
A rope is 3 yards long and cut into 1/2-yard pieces. How many pieces?|6|1.5|3|=>3 ÷ 1/2.
A recipe needs 3/4 cup of rice per serving. How much for 4 servings?|3 cups|3/16 cup|7/4 cups|=>4 × 3/4 = 3.
A garden is 2/3 of an acre. Half is planted with corn. How much is corn?|1/3 acre|2/6 acre is 1/3 too|1 acre|=>1/2 × 2/3 = 1/3.
Mia ran 3/4 mile each day for 3 days. How far did she run?|2 1/4 miles|9/12 mile|1 1/2 miles|=>3 × 3/4 = 9/4.
A bag holds 1 1/2 pounds of flour and 1/3 is used. How much is used?|1/2 pound|1/3 pound|5/6 pound|=>3/2 × 1/3 = 1/2.
Which is greater: 1/2 × 8 or 1/2 × 6?|1/2 × 8|1/2 × 6|They are equal|=>Half of 8 is 4; half of 6 is 3.
When you multiply a number by a fraction less than 1, the product is…|less than the number|greater than the number|equal to the number|=>1/2 × 10 = 5.
When you multiply a number by a fraction greater than 1, the product is…|greater than the number|less than the number|equal to the number|=>3/2 × 10 = 15.
When you divide a number by a fraction less than 1, the quotient is…|greater than the number|less than the number|equal to the number|=>6 ÷ 1/2 = 12.
True or false: 1/2 × 1/3 = 1/5.|False|True|=>It is 1/6.
True or false: 3 ÷ 1/4 = 12.|True|False|=>3 × 4.
True or false: 1/5 ÷ 2 = 2/5.|False|True|=>It is 1/10.
True or false: The reciprocal of 3/4 is 4/3.|True|False|=>Flip it.
`.replace("A garden is 2/3 of an acre. Half is planted with corn. How much is corn?|1/3 acre|2/6 acre is 1/3 too|1 acre|=>1/2 × 2/3 = 1/3.","A garden is 2/3 of an acre. Half is planted with corn. How much is corn?|1/3 acre|1/2 acre|2/3 acre|=>1/2 × 2/3 = 1/3.").replace("What is 4 × 1/2?|2|4/2 is 2|8|=>4/2 = 2.","What is 4 × 1/2?|2|8|1/8|=>4/2 = 2.").replace("How many 1/2s are in 3?|6|3/2|1.5 is wrong|=>3 ÷ 1/2 = 6.","How many 1/2s are in 3?|6|3/2|1 1/2|=>3 ÷ 1/2 = 6."));

  /* ---------- decimal computation ---------- */
  const DO = K("decimal-ops");
  B.tpl(DO, (r) => { const a = ri(r, 100, 9999) / 100, b = ri(r, 100, 9999) / 100; const s = r2(a + b, 2); return [`${a.toFixed(2)} + ${b.toFixed(2)} = ?`, near(r, s, [-0.1, 0.1, -1, 1, 10].map((x) => x), (z) => z.toFixed(2)), 0, `Line up the decimal points and add: ${s.toFixed(2)}.`]; }, 16);
  B.tpl(DO, (r) => { const a = ri(r, 500, 9999) / 100, b = ri(r, 100, 499) / 100; const s = r2(a - b, 2); return [`${a.toFixed(2)} − ${b.toFixed(2)} = ?`, near(r, s, [-0.1, 0.1, -1, 1, 10].map((x) => x), (z) => z.toFixed(2)), 0, `Line up the decimal points and subtract: ${s.toFixed(2)}.`]; }, 16);
  B.tpl(DO, (r) => { const a = ri(r, 11, 99) / 10, b = ri(r, 2, 9); const s = r2(a * b, 1); return [`${a.toFixed(1)} × ${b} = ?`, near(r, s, [-b / 10, b / 10, -s + s * 10, -s + s / 10].map((x) => r2(x, 2)), (z) => String(r2(z, 2))), 0, `${a * 10} × ${b} = ${a * 10 * b}; with one decimal place: ${s}.`]; }, 14);
  B.tpl(DO, (r) => { const a = ri(r, 11, 99) / 10, b = ri(r, 11, 99) / 10; const s = r2(a * b, 2); return [`${a.toFixed(1)} × ${b.toFixed(1)} = ?`, near(r, s, [-0.1, 0.1, -s + s * 10, -s + s / 10].map((x) => r2(x, 3)), (z) => String(r2(z, 3))), 0, `${Math.round(a * 10)} × ${Math.round(b * 10)} = ${Math.round(a * 10) * Math.round(b * 10)}; two decimal places: ${s}.`]; }, 14);
  B.tpl(DO, (r) => { const q = ri(r, 12, 99) / 10, d = ri(r, 2, 9); const a = r2(q * d, 2); return [`${a} ÷ ${d} = ?`, near(r, q, [-0.1, 0.1, -q + q * 10, -q + q / 10].map((x) => r2(x, 3)), (z) => String(r2(z, 3))), 0, `${a} ÷ ${d} = ${q}.`]; }, 14);
  B.tpl(DO, (r) => { const q = ri(r, 12, 99), d = ri(r, 2, 9) / 10; const a = r2(q * d, 2); return [`${a} ÷ ${d} = ?`, near(r, q, [-1, 1, -q + q / 10, -q + q * 10].map((x) => r2(x, 2)), (z) => String(r2(z, 2))), 0, `Multiply both by 10: ${r2(a * 10, 1)} ÷ ${r2(d * 10, 1)} = ${q}.`]; }, 12);
  B.tpl(DO, (r) => { const n = nm(r), p = ri(r, 150, 999) / 100, q = ri(r, 2, 9); const t = r2(p * q, 2); return [`${n} buys ${q} notebooks that cost $${p.toFixed(2)} each. What is the total cost?`, near(r, t, [-0.1, 0.1, -p, p, 1].map((x) => x), (z) => "$" + z.toFixed(2)), 0, `${q} × $${p.toFixed(2)} = $${t.toFixed(2)}.`]; }, 10);
  B.tpl(DO, (r) => { const n = nm(r), a = ri(r, 1000, 3000) / 100, b = ri(r, 100, 900) / 100; const c = r2(a - b, 2); return [`${n} has $${a.toFixed(2)} and spends $${b.toFixed(2)}. How much is left?`, near(r, c, [-0.1, 0.1, -1, 1, 10].map((x) => x), (z) => "$" + z.toFixed(2)), 0, `${a.toFixed(2)} − ${b.toFixed(2)} = ${c.toFixed(2)}.`]; }, 10);
  B.tpl(DO, (r) => { const p = ri(r, 25, 95) / 10, k = ri(r, 3, 8); const t = r2(p * k, 2); return [`Gas costs $${p.toFixed(1)}0 per gallon... no`.replace(/.*/, `One pound of grapes costs $${p.toFixed(2)}. How much do ${k} pounds cost?`), near(r, t, [-0.1, 0.1, -p, p].map((x) => x), (z) => "$" + z.toFixed(2)), 0, `${k} × ${p.toFixed(2)} = ${t.toFixed(2)}.`]; }, 8);
  A("decimal-ops", `
When adding decimals, you must line up…|the decimal points|the last digits|the first digits|=>Place values must match.
What is a placeholder zero?|a zero added so place values line up|a zero that changes the value|a zero at the start|=>3.5 = 3.50.
What is 0.5 + 0.25?|0.75|0.30|0.525|=>0.50 + 0.25.
What is 1.2 + 3.45?|4.65|4.57|4.47|=>1.20 + 3.45.
What is 6 + 0.75?|6.75|6.075|0.81|=>6.00 + 0.75.
What is 2.5 − 0.75?|1.75|1.25|2.25|=>2.50 − 0.75.
What is 10 − 3.4?|6.6|7.4|6.4|=>10.0 − 3.4.
What is 5.02 − 1.9?|3.12|4.12|3.02|=>5.02 − 1.90.
What is 0.3 × 0.2?|0.06|0.6|0.006|=>3 × 2 = 6 with two decimal places.
What is 0.4 × 0.5?|0.20|2.0|0.02|=>4 × 5 = 20.
What is 0.6 × 0.7?|0.42|4.2|0.042|=>6 × 7 = 42.
What is 1.5 × 4?|6|5.4|60|=>15 × 4 = 60 with one decimal.
What is 2.5 × 2?|5|4.5|50|=>25 × 2 = 50 → 5.0.
What is 3 × 0.25?|0.75|7.5|0.075|=>3 quarters.
What is 12 × 0.1?|1.2|12|0.12|=>One-tenth of 12.
What is 12 × 0.01?|0.12|1.2|12|=>One-hundredth of 12.
What is 0.1 × 0.1?|0.01|0.1|1|=>Tenths times tenths.
What is 0.2 × 0.2?|0.04|0.4|0.004|=>2 × 2 = 4 in hundredths.
What is 8 ÷ 0.5?|16|4|0.4|=>How many halves in 8.
What is 3 ÷ 0.25?|12|0.75|1.2|=>How many quarters in 3.
What is 6.4 ÷ 8?|0.8|0.08|8|=>64 tenths ÷ 8.
What is 1.5 ÷ 3?|0.5|5|0.05|=>15 tenths ÷ 3.
What is 4.2 ÷ 6?|0.7|0.07|7|=>42 tenths ÷ 6.
What is 0.9 ÷ 3?|0.3|3|0.03|=>9 tenths ÷ 3.
What is 0.48 ÷ 0.6?|0.8|8|0.08|=>48 ÷ 60 or multiply by 10.
What is 7.5 ÷ 2.5?|3|30|0.3|=>75 ÷ 25.
What is 12.5 ÷ 5?|2.5|25|0.25|=>12.5 ÷ 5.
To divide by a decimal, you can…|multiply both numbers by a power of 10 to make the divisor whole|divide the dividend by 10|ignore the decimal|=>Move the decimal in both.
What do you do with the decimal point in the quotient when dividing a decimal by a whole number?|bring it straight up from the dividend|move it left|drop it|=>Keep the point aligned.
How many decimal places are in the product 0.3 × 0.04?|3|2|1|=>1 + 2 = 3.
What is 0.3 × 0.04?|0.012|0.12|0.0012|=>3 × 4 = 12 with three decimal places.
What is 2.4 × 0.5?|1.2|12|0.12|=>Half of 2.4.
What is 25 × 0.4?|10|100|1|=>25 × 4 / 10.
What is 100 × 0.07?|7|70|0.7|=>Two places right.
A shirt costs $12.99 and a hat costs $8.50. What is the total?|$21.49|$20.49|$21.39|=>12.99 + 8.50.
A snack costs $2.35. You pay with $5. What is your change?|$2.65|$3.65|$2.75|=>5.00 − 2.35.
A bottle holds 1.5 liters. How many liters in 4 bottles?|6 liters|5.4 liters|60 liters|=>4 × 1.5.
Ribbon costs $0.75 per foot. How much for 6 feet?|$4.50|$4.25|$5.50|=>6 × 0.75.
A race is 3.2 km. Mia has run 1.85 km. How much farther must she run?|1.35 km|2.35 km|1.45 km|=>3.20 − 1.85.
Four friends share $18.60 equally. How much does each get?|$4.65|$4.15|$5.65|=>18.60 ÷ 4.
A plant grew 0.8 cm per day for 5 days. How much did it grow?|4 cm|4.5 cm|0.4 cm|=>5 × 0.8.
Round 3.678 to the nearest hundredth to estimate 3.678 + 2.1.|about 5.78|about 6.78|about 5.58|=>3.68 + 2.1.
Which is the best estimate of 4.9 × 2.1?|10|8|12|=>5 × 2.
Which is the best estimate of 19.7 ÷ 4.1?|5|4|6|=>20 ÷ 4.
True or false: 0.5 × 0.5 = 0.25.|True|False|=>Half of a half.
True or false: Multiplying by 0.1 makes a number ten times greater.|False|True|=>It makes it ten times smaller.
True or false: 3.4 + 0.6 = 4.|True|False|=>3.4 + 0.6 = 4.0.
True or false: 5 − 0.5 = 4.5.|True|False|=>5.0 − 0.5.
`);

  /* ---------- operations / order of operations ---------- */
  const OP = K("operations");
  B.tpl(OP, (r) => { const a = ri(r, 2, 12), b = ri(r, 2, 9), c = ri(r, 2, 9); return [`${a} + ${b} × ${c} = ?`, near(r, a + b * c, [-b, b, (a + b) * c - (a + b * c), -c, c].map((x) => x)), 0, `Multiply first: ${b} × ${c} = ${b * c}; then add ${a}: ${a + b * c}.`]; }, 16);
  B.tpl(OP, (r) => { const a = ri(r, 10, 50), b = ri(r, 2, 9), c = ri(r, 2, 6); if (a < b * c) return null; return [`${a} − ${b} × ${c} = ?`, near(r, a - b * c, [-b, b, (a - b) * c - (a - b * c), -c, c].map((x) => x)), 0, `Multiply first: ${b * c}; then subtract: ${a - b * c}.`]; }, 14);
  B.tpl(OP, (r) => { const a = ri(r, 2, 9), b = ri(r, 2, 9), c = ri(r, 2, 9); return [`(${a} + ${b}) × ${c} = ?`, near(r, (a + b) * c, [-c, c, a + b * c - (a + b) * c, -a, a].map((x) => x)), 0, `Parentheses first: ${a + b}; then multiply: ${(a + b) * c}.`]; }, 14);
  B.tpl(OP, (r) => { const a = ri(r, 2, 9), b = ri(r, 2, 6), c = ri(r, 2, 9); return [`${a * b * c} ÷ (${a} × ${b}) = ?`, near(r, c, [-1, 1, a, b, 2].map((x) => x)), 0, `Parentheses first: ${a * b}; then divide: ${c}.`]; }, 10);
  B.tpl(OP, (r) => { const a = ri(r, 2, 8), b = ri(r, 2, 8), c = ri(r, 2, 5); return [`${a}² + ${b} × ${c} = ?`.replace("²", "²"), near(r, a * a + b * c, [-a, a, c, -c, 2 * a].map((x) => x)), 0, `${a}² = ${a * a}; ${b} × ${c} = ${b * c}; sum ${a * a + b * c}.`]; }, 8);
  B.tpl(OP, (r) => { const a = ri(r, 20, 80), b = ri(r, 2, 6), c = ri(r, 2, 6), d = ri(r, 2, 9); const v = a + b * c - d; return [`${a} + ${b} × ${c} − ${d} = ?`, near(r, v, [-b, b, d, -d, 2].map((x) => x)), 0, `Multiply first: ${b * c}; then left to right: ${a} + ${b * c} − ${d} = ${v}.`]; }, 10);
  B.tpl(OP, (r) => { const d = ri(r, 3, 9), q = ri(r, 100, 999); const a = d * q + ri(r, 0, d - 1); const rem = a % d; const qq = Math.floor(a / d); return [`${a} ÷ ${d} = ? (give the answer as a quotient and remainder)`, T.mc(r, rem ? `${qq} R ${rem}` : String(qq), [`${qq + 1} R ${rem}`, `${qq} R ${(rem + 1) % d}`, `${qq - 1} R ${rem}`, `${qq + 10} R ${rem}`].filter((x) => x !== (rem ? `${qq} R ${rem}` : String(qq))).slice(0, 3)), 0, `${d} × ${qq} = ${d * qq}; ${a} − ${d * qq} = ${rem}.`]; }, 12);
  B.tpl(OP, (r) => { const d = ri(r, 12, 35), q = ri(r, 10, 99); const a = d * q; return [`${f(a)} ÷ ${d} = ?`, near(r, q, [-1, 1, 10, -10, 2].map((x) => x)), 0, `${d} × ${q} = ${f(a)}.`]; }, 10);
  B.tpl(OP, (r) => { const n = nm(r), a = ri(r, 3, 9), b = ri(r, 2, 9), c = ri(r, 5, 30); return [`${n} buys ${a} packs of ${b} pencils and then gives away ${c}. How many pencils are left?`, near(r, a * b - c, [-1, 1, -a, a, 2].map((x) => x)).map((x) => x), 0, `${a} × ${b} − ${c} = ${a * b} − ${c} = ${a * b - c}.`].filter((x) => x); }, 8);
  A("operations", `
What is the order of operations?|parentheses, exponents, multiplication/division, addition/subtraction|addition, subtraction, multiplication, division|left to right always|=>PEMDAS.
What does the P in PEMDAS stand for?|parentheses|plus|product|=>Do these first.
What does the E in PEMDAS stand for?|exponents|equals|even|=>After parentheses.
What do M and D stand for?|multiplication and division|minus and divide|more and double|=>Same level; left to right.
What do A and S stand for?|addition and subtraction|add and sum|answer and solve|=>Last; left to right.
Which operation do you do first in 5 + 3 × 2?|multiplication|addition|subtraction|=>Multiply before adding.
What is 5 + 3 × 2?|11|16|13|=>3 × 2 = 6; 5 + 6 = 11.
What is (5 + 3) × 2?|16|11|13|=>Parentheses first.
What is 20 − 4 × 3?|8|48|11|=>20 − 12.
What is (20 − 4) × 3?|48|8|60|=>16 × 3.
What is 12 ÷ 3 + 1?|5|3|4|=>4 + 1.
What is 12 ÷ (3 + 1)?|3|5|4|=>12 ÷ 4.
What is 2 × 3 + 4 × 5?|26|50|34|=>6 + 20.
What is 18 − 6 + 2?|14|10|12|=>Left to right: 12 + 2.
What is 24 ÷ 4 × 2?|12|3|48|=>Left to right: 6 × 2.
What is 2³ + 1?|9|7|8|=>8 + 1.
What is (2 + 3)²?|25|13|10|=>5².
What is 2 + 3²?|11|25|10|=>2 + 9.
What is 10 − 2 × 3 + 1?|5|25|7|=>10 − 6 + 1.
What is 3 × (4 + 2) − 5?|13|17|7|=>3 × 6 − 5.
What is a numerical expression?|a mathematical phrase with numbers and operations but no equal sign|an equation|a number|=>Like 3 + 4 × 2.
What is an equation?|a statement that two expressions are equal|an expression|a number|=>Has an equal sign.
Which is an expression?|3 × 7 + 2|3 × 7 + 2 = 23|23|=>No equal sign.
Which is an equation?|4 + 5 = 9|4 + 5|9|=>Has an equal sign.
How can you write 'add 3 and 4, then multiply by 2'?|(3 + 4) × 2|3 + 4 × 2|3 × 2 + 4|=>Group the sum.
How can you write 'multiply 3 and 4, then add 2'?|3 × 4 + 2|3 × (4 + 2)|(3 + 4) × 2|=>Multiplication first.
How can you write '5 less than the product of 6 and 7'?|6 × 7 − 5|6 × (7 − 5)|5 − 6 × 7|=>Subtract from the product.
How can you write 'twice the sum of 8 and 5'?|2 × (8 + 5)|2 × 8 + 5|8 + 5 × 2|=>Twice the sum.
Which expression is equal to 4 × (3 + 2)?|4 × 3 + 4 × 2|4 × 3 + 2|4 + 3 × 2|=>Distributive property.
Which expression is equal to 6 × 15?|6 × 10 + 6 × 5|6 × 10 + 5|6 + 10 × 5|=>Break apart 15.
What is the first step to divide 845 ÷ 5?|divide 8 hundreds by 5|divide 5 by 8|add 8 + 4 + 5|=>Start with the greatest place.
What does the remainder mean in a division problem?|what is left over after dividing as evenly as possible|the answer|the divisor|=>Less than the divisor.
In 17 ÷ 5 = 3 R 2, what is the remainder?|2|3|5|=>Left over.
What is 17 ÷ 5 as a quotient and remainder?|3 R 2|2 R 3|3 R 5|=>5 × 3 = 15; 17 − 15 = 2.
What is 50 ÷ 6 as a quotient and remainder?|8 R 2|8 R 3|9 R 2|=>6 × 8 = 48.
What is 100 ÷ 8 as a quotient and remainder?|12 R 4|12 R 2|13 R 4|=>8 × 12 = 96.
What is 144 ÷ 12?|12|11|14|=>12 × 12.
What is 225 ÷ 15?|15|25|12|=>15 × 15.
What is 960 ÷ 30?|32|30|320|=>96 ÷ 3.
What is 1,200 ÷ 40?|30|300|3|=>120 ÷ 4.
You have 29 cookies for 6 people. How many does each get, and how many are left?|4 each, 5 left|5 each, 4 left|4 each, 4 left|=>6 × 4 = 24; 29 − 24 = 5.
You need 41 chairs. Each row holds 8. How many rows are needed?|6|5|5 R 1|=>41 ÷ 8 = 5 R 1, so you need a 6th row.
You have 100 pencils for 12 students. How many does each student get (whole pencils)?|8|9|12|=>12 × 8 = 96.
Which operation should be done first in 7 + 2 × 5 − 1?|2 × 5|7 + 2|5 − 1|=>Multiplication.
True or false: In 8 − 3 + 2 you should add first.|False|True|=>Go left to right: 5 + 2.
True or false: 6 ÷ 2 × 3 = 1.|False|True|=>3 × 3 = 9.
True or false: 3 + 4 × 2 = 14.|False|True|=>It's 11.
True or false: Parentheses can change the order of operations.|True|False|=>They come first.
`);

  /* ---------- measurement & conversions ---------- */
  const ME = K("measurement");
  const conv = [["feet", "inches", 12], ["yards", "feet", 3], ["yards", "inches", 36], ["miles", "feet", 5280], ["pounds", "ounces", 16], ["tons", "pounds", 2000], ["gallons", "quarts", 4], ["quarts", "pints", 2], ["pints", "cups", 2], ["quarts", "cups", 4], ["gallons", "pints", 8], ["cups", "fluid ounces", 8], ["hours", "minutes", 60], ["minutes", "seconds", 60], ["days", "hours", 24], ["weeks", "days", 7], ["meters", "centimeters", 100], ["kilometers", "meters", 1000], ["centimeters", "millimeters", 10], ["kilograms", "grams", 1000], ["grams", "milligrams", 1000], ["liters", "milliliters", 1000]];
  B.tpl(ME, (r) => { const [a, b, k] = T.pick(r, conv); const n = ri(r, 2, 12); const big = k > 100 ? ri(r, 2, 5) : n; return [`${big} ${a} = ___ ${b}`, near(r, big * k, [-k, k, big, big * k * 10 - big * k, k * 2].map((x) => x), f), 0, `1 ${a.replace(/s$/, "")} = ${k} ${b}, so ${big} × ${k} = ${f(big * k)}.`]; }, 22);
  B.tpl(ME, (r) => { const [a, b, k] = T.pick(r, conv.filter((c) => c[2] <= 100)); const n = ri(r, 2, 12); return [`${f(n * k)} ${b} = ___ ${a}`, near(r, n, [-1, 1, 2, k, -2].map((x) => x)), 0, `${f(n * k)} ÷ ${k} = ${n}.`]; }, 14);
  B.tpl(ME, (r) => { const [a, b, k] = T.pick(r, conv.filter((c) => c[2] <= 100 && c[2] >= 4)); const w = ri(r, 2, 6), p = ri(r, 2, k - 1); return [`${w} ${a} ${p} ${b} = ___ ${b}`, near(r, w * k + p, [-k, k, p, w, 1].map((x) => x), f), 0, `${w} × ${k} + ${p} = ${w * k + p}.`]; }, 10);
  B.tpl(ME, (r) => { const [a, b, k] = T.pick(r, [["meters", "centimeters", 100], ["kilometers", "meters", 1000], ["liters", "milliliters", 1000], ["kilograms", "grams", 1000]]); const x = ri(r, 11, 99) / 10; return [`${x} ${a} = ___ ${b}`, near(r, x * k, [-k, k, x * k * 10 - x * k, x * k / 10 - x * k].map((z) => r2(z, 1)), (z) => f(r2(z, 1))), 0, `Multiply by ${f(k)} (move the decimal ${String(k).length - 1} places right).`]; }, 12);
  B.tpl(ME, (r) => { const n = nm(r), ft = ri(r, 3, 9), inch = ri(r, 0, 11); return [`${n} is ${ft} feet ${inch} inches tall. How many inches tall is ${n}?`, near(r, ft * 12 + inch, [-12, 12, inch, ft, 1].map((x) => x)), 0, `${ft} × 12 + ${inch} = ${ft * 12 + inch} inches.`]; }, 8);
  B.tpl(ME, (r) => { const g = ri(r, 2, 8); return [`A recipe needs ${g} quarts of juice. How many cups is that?`, near(r, g * 4, [-4, 4, g * 2, g * 8, 1].map((x) => x)), 0, `1 quart = 4 cups, so ${g} × 4 = ${g * 4} cups.`]; }, 6);
  A("measurement", `
Which system uses feet, pounds, and gallons?|U.S. customary|metric|neither|=>Customary units.
Which system uses meters, grams, and liters?|metric|U.S. customary|neither|=>Based on 10.
How many inches are in a foot?|12|10|36|=>12 in = 1 ft.
How many feet are in a yard?|3|12|36|=>3 ft = 1 yd.
How many feet are in a mile?|5,280|1,760|3,000|=>5,280 ft.
How many yards are in a mile?|1,760|5,280|3,000|=>1,760 yd.
How many ounces are in a pound?|16|12|10|=>16 oz = 1 lb.
How many pounds are in a ton?|2,000|1,000|100|=>2,000 lb.
How many cups are in a pint?|2|4|8|=>2 c = 1 pt.
How many pints are in a quart?|2|4|8|=>2 pt = 1 qt.
How many quarts are in a gallon?|4|2|8|=>4 qt = 1 gal.
How many cups are in a quart?|4|2|8|=>4 c = 1 qt.
How many cups are in a gallon?|16|8|32|=>4 × 4.
How many fluid ounces are in a cup?|8|4|16|=>8 fl oz = 1 c.
How many millimeters are in a centimeter?|10|100|1,000|=>10 mm = 1 cm.
How many centimeters are in a meter?|100|10|1,000|=>100 cm = 1 m.
How many meters are in a kilometer?|1,000|100|10|=>1,000 m.
How many grams are in a kilogram?|1,000|100|10|=>1,000 g.
How many milliliters are in a liter?|1,000|100|10|=>1,000 mL.
What does the prefix 'kilo-' mean?|1,000|100|10|=>Kilometer = 1,000 meters.
What does the prefix 'centi-' mean?|one hundredth|one hundred|ten|=>Centimeter = 1/100 meter.
What does the prefix 'milli-' mean?|one thousandth|one thousand|ten|=>Millimeter = 1/1,000 meter.
Which unit is best for measuring the length of a pencil?|centimeters|kilometers|miles|=>A pencil is about 19 cm.
Which unit is best for measuring the distance between two cities?|kilometers|centimeters|inches|=>Long distances.
Which unit is best for measuring a person's weight?|pounds|ounces|tons|=>A person weighs about 100 pounds.
Which unit is best for measuring the weight of a paper clip?|grams|kilograms|tons|=>Very light.
Which unit is best for measuring the amount of water in a pool?|gallons|cups|ounces|=>Large volumes.
Which unit is best for measuring the amount of medicine in a dose?|milliliters|liters|gallons|=>Small amounts.
Which unit is best for measuring the length of a football field?|yards|inches|miles|=>A football field is 100 yards.
Which is the largest?|1 yard|1 foot|1 inch|=>3 ft > 1 ft > 1 in.
Which is the smallest?|1 centimeter|1 meter|1 kilometer|=>1 cm is smallest.
Which is the greatest amount?|1 gallon|1 quart|1 pint|=>4 qt = 1 gal.
Which is the greatest mass?|1 kilogram|1 gram|1 milligram|=>1,000 g.
Which is equal to 24 inches?|2 feet|3 feet|1 yard|=>24 ÷ 12 = 2.
Which is equal to 3 yards?|9 feet|6 feet|12 feet|=>3 × 3.
Which is equal to 32 ounces?|2 pounds|1 pound|3 pounds|=>32 ÷ 16.
Which is equal to 8 cups?|2 quarts|1 quart|4 quarts|=>8 ÷ 4.
Which is equal to 4,000 meters?|4 kilometers|40 kilometers|0.4 kilometers|=>4,000 ÷ 1,000.
Which is equal to 250 cm?|2.5 m|25 m|0.25 m|=>250 ÷ 100.
Which is equal to 3 liters?|3,000 mL|300 mL|30 mL|=>3 × 1,000.
Which is equal to 5,000 g?|5 kg|50 kg|0.5 kg|=>5,000 ÷ 1,000.
Which is equal to 2 1/2 hours?|150 minutes|120 minutes|250 minutes|=>2 × 60 + 30.
Which is equal to 180 seconds?|3 minutes|2 minutes|18 minutes|=>180 ÷ 60.
Which is equal to 3 days?|72 hours|36 hours|24 hours|=>3 × 24.
Which is equal to 2 weeks?|14 days|7 days|20 days|=>2 × 7.
When converting from a larger unit to a smaller unit, you…|multiply|divide|subtract|=>More small units.
When converting from a smaller unit to a larger unit, you…|divide|multiply|add|=>Fewer large units.
To convert 5 feet to inches, you…|multiply by 12|divide by 12|add 12|=>5 × 12 = 60.
To convert 48 inches to feet, you…|divide by 12|multiply by 12|subtract 12|=>48 ÷ 12 = 4.
A board is 6 feet long. How many inches?|72|60|18|=>6 × 12.
A rope is 144 inches long. How many yards?|4|12|3|=>144 ÷ 36.
A bag weighs 3 pounds. How many ounces?|48|30|16|=>3 × 16.
A jug holds 2 gallons. How many quarts?|8|4|16|=>2 × 4.
A track is 400 meters. How many kilometers is 10 laps?|4|40|0.4|=>4,000 m = 4 km.
A recipe calls for 500 mL of milk. How many liters is that?|0.5|5|50|=>500 ÷ 1,000.
A movie lasts 2 hours 15 minutes. How many minutes is that?|135|215|120|=>120 + 15.
A runner takes 4 minutes to run a mile. At that rate, how long for 5 miles?|20 minutes|9 minutes|15 minutes|=>5 × 4.
True or false: 1 kilometer is longer than 1 mile.|False|True|=>1 mile ≈ 1.6 km.
True or false: 100 centimeters equal 1 meter.|True|False|=>Centi = 1/100.
True or false: 1 quart is greater than 1 gallon.|False|True|=>A gallon holds 4 quarts.
True or false: 16 ounces equal 1 pound.|True|False|=>Standard.
`);

  /* ---------- perimeter, area, volume ---------- */
  const AV = K("area-volume");
  B.tpl(AV, (r) => { const l = ri(r, 3, 20), w = ri(r, 2, 15); return [`A rectangle is ${l} cm long and ${w} cm wide. What is its perimeter?`, near(r, 2 * (l + w), [-2, 2, l + w - 2 * (l + w), l * w - 2 * (l + w), 4].map((x) => x), (z) => z + " cm"), 0, `P = 2(${l} + ${w}) = ${2 * (l + w)} cm.`]; }, 14);
  B.tpl(AV, (r) => { const l = ri(r, 3, 20), w = ri(r, 2, 15); return [`A rectangle is ${l} m long and ${w} m wide. What is its area?`, near(r, l * w, [-l, l, w, 2 * (l + w) - l * w, 5].map((x) => x), (z) => z + " m²"), 0, `A = ${l} × ${w} = ${l * w} m².`]; }, 14);
  B.tpl(AV, (r) => { const b = ri(r, 3, 20), h = ri(r, 2, 14) * 2; return [`A triangle has a base of ${b} cm and a height of ${h} cm. What is its area?`, near(r, b * h / 2, [-b, b, b * h - b * h / 2, 2, -2].map((x) => x), (z) => z + " cm²"), 0, `A = ½ × ${b} × ${h} = ${b * h / 2} cm².`]; }, 12);
  B.tpl(AV, (r) => { const l = ri(r, 2, 12), w = ri(r, 2, 10), h = ri(r, 2, 10); return [`What is the volume of a rectangular prism ${l} cm by ${w} cm by ${h} cm?`, near(r, l * w * h, [-l, l, w * h, 2 * (l * w + l * h + w * h) - l * w * h].map((x) => x), (z) => f(z) + " cm³"), 0, `V = ${l} × ${w} × ${h} = ${f(l * w * h)} cm³.`]; }, 14);
  B.tpl(AV, (r) => { const s = ri(r, 2, 12); return [`A square has a perimeter of ${4 * s} cm. What is the length of each side?`, near(r, s, [-1, 1, 2, -2, s * 2].map((x) => x), (z) => z + " cm"), 0, `${4 * s} ÷ 4 = ${s}.`]; }, 8);
  B.tpl(AV, (r) => { const l = ri(r, 4, 20), w = ri(r, 2, 10), A2 = l * w; return [`A rectangle has an area of ${A2} square units and a length of ${l}. What is its width?`, near(r, w, [-1, 1, 2, -2, l].map((x) => x)), 0, `${A2} ÷ ${l} = ${w}.`]; }, 10);
  B.tpl(AV, (r) => { const V = ri(r, 3, 9) * ri(r, 2, 6) * ri(r, 2, 5); const l = ri(r, 2, 6), w = ri(r, 2, 6); const h = ri(r, 2, 8); return [`A box is ${l} units long, ${w} units wide, and ${h} units tall. How many unit cubes fill it?`, near(r, l * w * h, [-l, l, h, w * h - l * w * h].map((x) => x)), 0, `${l} × ${w} × ${h} = ${l * w * h}.`]; }, 8);
  B.tpl(AV, (r) => { const a = ri(r, 4, 12), b = ri(r, 3, 10), c = ri(r, 2, 6); return [`An L-shape is made from a ${a} by ${b} rectangle with a ${c} by ${c} square removed from a corner. What is its area?`, near(r, a * b - c * c, [-c, c, c * c, a + b, 2].map((x) => x)), 0, `${a} × ${b} − ${c} × ${c} = ${a * b - c * c}.`]; }, 8);
  A("area-volume", `
What is perimeter?|the distance around a shape|the space inside a shape|the volume|=>Add the side lengths.
What is area?|the amount of space inside a flat shape|the distance around|the volume|=>Square units.
What is volume?|the amount of space inside a 3D figure|the area of a face|the perimeter|=>Cubic units.
What is the formula for the perimeter of a rectangle?|2l + 2w|l × w|l + w|=>Add all four sides.
What is the formula for the area of a rectangle?|l × w|2l + 2w|l + w|=>Length times width.
What is the formula for the area of a square?|s × s|4s|2s|=>Side squared.
What is the formula for the perimeter of a square?|4s|s × s|2s|=>Four equal sides.
What is the formula for the area of a triangle?|½ × b × h|b × h|b + h|=>Half of a parallelogram.
What is the formula for the volume of a rectangular prism?|l × w × h|l + w + h|2(lw + lh + wh)|=>Length times width times height.
What is the formula for the area of a parallelogram?|b × h|½ × b × h|2b + 2h|=>Base times height.
What units are used for area?|square units|cubic units|units|=>cm², m².
What units are used for volume?|cubic units|square units|units|=>cm³, m³.
What units are used for perimeter?|units|square units|cubic units|=>cm, m.
A square has sides of 5 cm. What is its area?|25 cm²|20 cm²|10 cm²|=>5 × 5.
A square has sides of 5 cm. What is its perimeter?|20 cm|25 cm|10 cm|=>4 × 5.
A rectangle is 8 by 3. What is its area?|24|22|11|=>8 × 3.
A rectangle is 8 by 3. What is its perimeter?|22|24|11|=>2(8 + 3).
A triangle has base 10 and height 6. What is its area?|30|60|16|=>½ × 10 × 6.
A parallelogram has base 9 and height 4. What is its area?|36|18|26|=>9 × 4.
A cube has edges of 4 cm. What is its volume?|64 cm³|16 cm³|12 cm³|=>4 × 4 × 4.
A cube has edges of 3 cm. What is its volume?|27 cm³|9 cm³|18 cm³|=>3 × 3 × 3.
A box is 2 by 3 by 4. What is its volume?|24|9|20|=>2 × 3 × 4.
How many 1-cm cubes fill a box that is 5 cm by 2 cm by 2 cm?|20|9|10|=>5 × 2 × 2.
What is the area of a rectangle with length 7 and width 7?|49|28|14|=>It's a square.
If you double the side length of a square, the perimeter…|doubles|quadruples|stays the same|=>4 × 2s = 2 × 4s.
If you double the side length of a square, the area…|quadruples|doubles|stays the same|=>(2s)² = 4s².
If you double the height of a box, the volume…|doubles|quadruples|stays the same|=>V = lwh.
Two rectangles have the same perimeter. Must they have the same area?|No|Yes|Only if square|=>2×8 and 4×6 have P = 20 but different areas.
Which rectangle has the greatest area with a perimeter of 20?|5 by 5|2 by 8|1 by 9|=>A square gives the most area.
A rectangle has a perimeter of 24 and a length of 8. What is its width?|4|8|16|=>2(8 + w) = 24.
A rectangle has an area of 36 and a width of 4. What is its length?|9|32|8|=>36 ÷ 4.
A room is 12 ft by 10 ft. How many square feet of carpet are needed?|120|44|22|=>12 × 10.
A fence goes around a 20 ft by 15 ft yard. How many feet of fence are needed?|70|35|300|=>2(20 + 15).
A fish tank is 20 in by 10 in by 12 in. What is its volume?|2,400 in³|42 in³|240 in³|=>20 × 10 × 12.
A swimming pool is 25 m long, 10 m wide, and 2 m deep. What is its volume?|500 m³|37 m³|250 m³|=>25 × 10 × 2.
A square garden has an area of 49 m². What is its perimeter?|28 m|14 m|49 m|=>Side 7; 4 × 7.
A rectangular prism has a base area of 15 cm² and a height of 4 cm. What is its volume?|60 cm³|19 cm³|11 cm³|=>Base × height.
A triangle and a rectangle have the same base and height. Which has the greater area?|the rectangle|the triangle|They are equal|=>The triangle is half.
How many square units are in a 1 yard by 1 yard square?|1 square yard (9 square feet)|3 square feet|1 square foot|=>3 × 3 = 9 sq ft.
How many cubic feet are in 1 cubic yard?|27|9|3|=>3 × 3 × 3.
What is the area of an L-shape made of a 6 by 4 rectangle and a 2 by 3 rectangle?|30|24|10|=>24 + 6.
True or false: Area is measured in cubic units.|False|True|=>Square units.
True or false: Perimeter and area measure the same thing.|False|True|=>Distance around vs. space inside.
True or false: The volume of a cube with side 2 is 8.|True|False|=>2 × 2 × 2.
True or false: A triangle's area is half of its base times height.|True|False|=>½bh.
`);

  /* ---------- angles, triangles, circles ---------- */
  const GM = K("geometry");
  B.tpl(GM, (r) => { const a = ri(r, 25, 95), b = ri(r, 25, 120 - 10); if (a + b >= 170) return null; return [`Two angles of a triangle measure ${a}° and ${b}°. What is the third angle?`, near(r, 180 - a - b, [-10, 10, -5, 5, 20].map((x) => x), (z) => z + "°"), 0, `180 − ${a} − ${b} = ${180 - a - b}.`]; }, 14);
  B.tpl(GM, (r) => { const a = ri(r, 20, 160); return [`An angle measures ${a}°. Is it acute, right, obtuse, or straight?`, T.mc(r, a < 90 ? "acute" : a === 90 ? "right" : "obtuse", ["acute", "right", "obtuse", "straight"].filter((x) => x !== (a < 90 ? "acute" : a === 90 ? "right" : "obtuse"))), 0, `${a < 90 ? "Less than 90°" : "Between 90° and 180°"}.`]; }, 12);
  B.tpl(GM, (r) => { const a = ri(r, 10, 80); return [`The complement of a ${a}° angle is…`, near(r, 90 - a, [-10, 10, 180 - 2 * a, 5].map((x) => x), (z) => z + "°"), 0, `90 − ${a} = ${90 - a}.`]; }, 8);
  B.tpl(GM, (r) => { const a = ri(r, 20, 160); return [`The supplement of a ${a}° angle is…`, near(r, 180 - a, [-10, 10, 90 - a, 5].map((x) => x), (z) => z + "°"), 0, `180 − ${a} = ${180 - a}.`]; }, 8);
  B.tpl(GM, (r) => { const d = ri(r, 4, 40), rad = d / 2; return [`A circle has a diameter of ${d} cm. What is its radius?`, near(r, rad, [-1, 1, d, 2, -2].map((x) => x), (z) => z + " cm"), 0, `Radius = diameter ÷ 2 = ${rad}.`]; }, 8);
  B.tpl(GM, (r) => { const rad = ri(r, 2, 20); return [`A circle has a radius of ${rad} m. What is its diameter?`, near(r, rad * 2, [-1, 1, rad, rad * 3 - rad * 2, 2].map((x) => x), (z) => z + " m"), 0, `Diameter = 2 × radius = ${rad * 2}.`]; }, 8);
  B.tpl(GM, (r) => { const a = ri(r, 30, 70); const base = (180 - a) / 2; if (!Number.isInteger(base)) return null; return [`An isosceles triangle has a vertex angle of ${a}°. What is each base angle?`, near(r, base, [-5, 5, a, 10, -10].map((x) => x), (z) => z + "°"), 0, `(180 − ${a}) ÷ 2 = ${base}.`]; }, 8);
  B.tpl(GM, (r) => { const n = ri(r, 3, 10); const names = { 3: "triangle", 4: "quadrilateral", 5: "pentagon", 6: "hexagon", 7: "heptagon", 8: "octagon", 9: "nonagon", 10: "decagon" }; const all = Object.values(names); return [`What is the name of a polygon with ${n} sides?`, T.mc(r, names[n], all.filter((x) => x !== names[n]).slice(0, 3)), 0, `${n} sides: ${names[n]}.`]; }, 8);
  A("geometry", `
What is an angle?|two rays that share an endpoint|a straight line|a curved line|=>Measured in degrees.
What is a vertex?|the point where two rays or sides meet|a side|a ray|=>Corner.
What is a right angle?|an angle that measures exactly 90°|an angle less than 90°|an angle greater than 90°|=>Square corner.
What is an acute angle?|an angle less than 90°|an angle equal to 90°|an angle greater than 90°|=>Sharp.
What is an obtuse angle?|an angle greater than 90° and less than 180°|an angle less than 90°|an angle equal to 180°|=>Wide.
What is a straight angle?|an angle that measures 180°|an angle that measures 90°|an angle that measures 360°|=>A straight line.
What is a reflex angle?|an angle greater than 180°|an angle less than 90°|a right angle|=>More than a straight angle.
What tool measures angles?|protractor|ruler|compass|=>Degrees.
What are complementary angles?|two angles that add up to 90°|two angles that add up to 180°|two equal angles|=>Right angle.
What are supplementary angles?|two angles that add up to 180°|two angles that add up to 90°|two equal angles|=>Straight line.
What are vertical angles?|opposite angles formed when two lines cross|adjacent angles|complementary angles|=>They are equal.
What are adjacent angles?|angles that share a side and vertex|angles that are equal|opposite angles|=>Next to each other.
How many degrees are in a full circle?|360|180|90|=>A full turn.
How many degrees are in a triangle's angles?|180|360|90|=>Sum of interior angles.
How many degrees are in a quadrilateral's angles?|360|180|270|=>Two triangles.
What is an equilateral triangle?|a triangle with three equal sides|a triangle with two equal sides|a triangle with no equal sides|=>Equal sides and angles.
What is an isosceles triangle?|a triangle with two equal sides|a triangle with three equal sides|a triangle with no equal sides|=>Two sides equal.
What is a scalene triangle?|a triangle with no equal sides|a triangle with two equal sides|a triangle with three equal sides|=>All different.
What is a right triangle?|a triangle with one 90° angle|a triangle with three 60° angles|a triangle with no angles|=>One right angle.
What is an acute triangle?|a triangle with three acute angles|a triangle with a right angle|a triangle with an obtuse angle|=>All angles < 90°.
What is an obtuse triangle?|a triangle with one obtuse angle|a triangle with three acute angles|a triangle with a right angle|=>One angle > 90°.
Each angle in an equilateral triangle measures…|60°|90°|45°|=>180 ÷ 3.
Can a triangle have two right angles?|No|Yes|Sometimes|=>Sum would exceed 180°.
Can a triangle have two obtuse angles?|No|Yes|Sometimes|=>Sum would exceed 180°.
How many sides does a pentagon have?|5|6|8|=>Penta = five.
How many sides does a hexagon have?|6|5|8|=>Hex = six.
How many sides does an octagon have?|8|6|10|=>Oct = eight.
What is a polygon?|a closed figure made of straight line segments|a curved shape|an open figure|=>Triangles, squares.
What is a regular polygon?|a polygon with all sides and angles equal|a polygon with unequal sides|a circle|=>Like a square.
What is a parallelogram?|a quadrilateral with two pairs of parallel sides|a quadrilateral with one pair|a triangle|=>Opposite sides parallel.
What is a rectangle?|a parallelogram with four right angles|a quadrilateral with no right angles|a triangle|=>Four right angles.
What is a rhombus?|a parallelogram with four equal sides|a rectangle|a triangle|=>Four equal sides.
What is a square?|a rectangle with four equal sides|a trapezoid|a triangle|=>Special rectangle.
What is a trapezoid?|a quadrilateral with at least one pair of parallel sides|a quadrilateral with no parallel sides|a triangle|=>One pair.
Which quadrilaterals are parallelograms?|rectangle, rhombus, and square|trapezoid and kite|only squares|=>Two pairs of parallel sides.
Is every square a rectangle?|Yes|No|Sometimes|=>Squares have four right angles.
Is every rectangle a square?|No|Yes|Sometimes|=>Sides can differ.
What is a circle?|the set of points the same distance from a center|a polygon|a triangle|=>Round.
What is the radius of a circle?|the distance from the center to the edge|the distance across through the center|the distance around|=>Half the diameter.
What is the diameter of a circle?|the distance across through the center|the distance from the center to the edge|the distance around|=>Twice the radius.
What is the circumference of a circle?|the distance around|the distance across|the area|=>Perimeter of a circle.
What is a chord?|a line segment with both endpoints on the circle|the radius|the center|=>The diameter is the longest.
What is the relationship between a diameter and a radius?|diameter = 2 × radius|diameter = radius|diameter = radius + 2|=>Twice.
What is the diameter of a circle with radius 7?|14|3.5|49|=>2 × 7.
What is the radius of a circle with diameter 20?|10|40|5|=>20 ÷ 2.
What is a line of symmetry?|a line that divides a figure into two matching halves|a line that crosses a figure|a side|=>Mirror line.
How many lines of symmetry does a square have?|4|2|1|=>Two diagonals, two midlines.
How many lines of symmetry does a rectangle (non-square) have?|2|4|1|=>Two midlines.
How many lines of symmetry does an equilateral triangle have?|3|1|0|=>One per vertex.
What is a transformation?|a move or change of a figure's position or size|a type of angle|a type of triangle|=>Slides, flips, turns.
What is a translation?|a slide|a flip|a turn|=>Moves a figure.
What is a reflection?|a flip|a slide|a turn|=>Mirror image.
What is a rotation?|a turn around a point|a flip|a slide|=>Turn.
Which angle is greater: 45° or 120°?|120°|45°|They are equal|=>Larger measure.
True or false: The sum of the angles in any triangle is 180°.|True|False|=>Always.
True or false: A circle has a radius that is twice its diameter.|False|True|=>The diameter is twice the radius.
`);

  /* ---------- statistics ---------- */
  const ST = K("statistics");
  const list = (r, n, lo, hi) => Array.from({ length: n }, () => ri(r, lo, hi));
  const sortN = (a) => a.slice().sort((x, y) => x - y);
  B.tpl(ST, (r) => { const a = list(r, 5, 2, 20); const m = a.reduce((x, y) => x + y, 0) / 5; return [`What is the mean of ${a.join(", ")}?`, near(r, m, [-1, 1, 2, -2, 0.5].map((x) => x), (z) => String(r2(z, 2))), 0, `Sum ${a.reduce((x, y) => x + y, 0)} ÷ 5 = ${m}.`]; }, 14);
  B.tpl(ST, (r) => { const a = list(r, 7, 2, 30); const s = sortN(a); return [`What is the median of ${a.join(", ")}?`, near(r, s[3], [-1, 1, 2, -2, s[0] - s[3]].filter((x, i) => i < 4)), 0, `Ordered: ${s.join(", ")}. The middle is ${s[3]}.`]; }, 12);
  B.tpl(ST, (r) => { const a = list(r, 6, 2, 30); const s = sortN(a); const med = (s[2] + s[3]) / 2; return [`What is the median of ${a.join(", ")}?`, near(r, med, [-1, 1, 2, -2, 0.5].map((x) => x), (z) => String(r2(z, 1))), 0, `Ordered: ${s.join(", ")}. Average the two middle numbers: ${med}.`]; }, 12);
  B.tpl(ST, (r) => { const a = list(r, 6, 3, 25); const s = sortN(a); return [`What is the range of ${a.join(", ")}?`, near(r, s[5] - s[0], [-1, 1, 2, -2, s[0]].filter((x, i) => i < 4)), 0, `${s[5]} − ${s[0]} = ${s[5] - s[0]}.`]; }, 12);
  B.tpl(ST, (r) => { const m = ri(r, 3, 15); const a = [m, m, ri(r, 1, 20), ri(r, 1, 20), ri(r, 1, 20), m].sort(() => r() - 0.5); const c = {}; a.forEach((x) => (c[x] = (c[x] || 0) + 1)); const mx = Math.max(...Object.values(c)); const modes = Object.keys(c).filter((k) => c[k] === mx); if (modes.length !== 1) return null; return [`What is the mode of ${a.join(", ")}?`, near(r, +modes[0], [-1, 1, 2, -2, 5]), 0, `${modes[0]} appears most often.`]; }, 8);
  B.tpl(ST, (r) => { const a = list(r, 4, 5, 20), t = ri(r, 6, 18); const need = t * 5 - a.reduce((x, y) => x + y, 0); if (need < 0 || need > 40) return null; return [`Four test scores are ${a.join(", ")}. What score on the fifth test gives a mean of exactly ${t}?`, near(r, need, [-1, 1, 2, -2, 5]), 0, `Total needed ${t * 5}; ${t * 5} − ${a.reduce((x, y) => x + y, 0)} = ${need}.`]; }, 10);
  B.tpl(ST, (r) => { const tot = ri(r, 10, 40), mean = ri(r, 3, 12); return [`${tot > 0 ? tot : 0}`.replace(/.*/, `A set of 5 numbers has a mean of ${mean}. What is their sum?`), near(r, mean * 5, [-5, 5, mean, 10, -1].map((x) => x)), 0, `Mean × count = ${mean} × 5 = ${mean * 5}.`]; }, 8);
  A("statistics", `
What is data?|a collection of facts or numbers|a type of graph|a type of number|=>Information.
What is the mean?|the sum of the values divided by the number of values|the middle value|the most common value|=>The average.
What is the median?|the middle value when the data are ordered|the average|the most common value|=>Order first.
What is the mode?|the value that occurs most often|the middle value|the average|=>Most frequent.
What is the range?|the greatest value minus the least value|the sum|the middle|=>Spread.
What is an outlier?|a value far from the others|the mean|the median|=>Unusual value.
Which measure is the best 'typical' value when there is an outlier?|median|mean|range|=>Less affected.
What is the mean of 2, 4, 6?|4|6|12|=>12 ÷ 3.
What is the mean of 10, 20?|15|30|10|=>30 ÷ 2.
What is the median of 3, 5, 9?|5|3|9|=>Middle.
What is the median of 2, 4, 6, 8?|5|4|6|=>(4 + 6) ÷ 2.
What is the mode of 1, 2, 2, 3?|2|1|3|=>Appears twice.
What is the range of 4, 9, 12?|8|9|12|=>12 − 4.
Can a set of data have no mode?|Yes|No|Never|=>If all values appear once.
Can a set of data have two modes?|Yes|No|Never|=>Bimodal.
What happens to the mean if you add a very large number to the data?|it increases|it decreases|it stays the same|=>Pulled upward.
What happens to the median if you add a very large number?|it changes only a little|it doubles|it becomes zero|=>Less sensitive.
Which graph shows change over time?|line graph|circle graph|pictograph|=>Trends.
Which graph shows parts of a whole?|circle graph|line graph|stem-and-leaf plot|=>Percents.
Which graph compares categories?|bar graph|line graph|circle graph|=>Bars.
Which graph shows every data value using place value?|stem-and-leaf plot|bar graph|circle graph|=>Stems and leaves.
In a stem-and-leaf plot, what does 2 | 5 mean?|25|2.5|7|=>Stem 2, leaf 5.
What is a line plot?|a display with X marks above a number line|a graph with bars|a circle graph|=>Shows frequency.
What is a histogram?|a bar graph showing frequencies in equal intervals|a circle graph|a line graph|=>Bars touch.
What is a frequency table?|a table showing how often each value occurs|a type of graph|a type of number|=>Tally counts.
What is a tally mark?|a mark used to count|a type of graph|a number|=>Groups of five.
What is a scale on a graph?|the numbers that label the axis|the title|the key|=>Intervals.
What is the title of a graph for?|to tell what the graph shows|to list the data|to give the scale|=>Topic.
What is a key (legend)?|explains the symbols on a graph|tells the title|lists the data|=>Pictograph keys.
What is a survey?|a question asked to collect data|a type of graph|a type of number|=>Data collection.
What is a sample?|a smaller group chosen from a larger population|the whole population|a type of graph|=>Represents all.
What is a population in statistics?|the whole group being studied|a small group|a type of graph|=>All members.
What is a random sample?|each member has an equal chance of being chosen|chosen by friends|chosen on purpose|=>Fair.
What is a biased sample?|a sample that does not represent the population|a random sample|a large sample|=>Skewed.
Which is a biased sample for 'What is the favorite sport of students?'|asking only the basketball team|asking students from every grade|asking a random group|=>Not representative.
Which is a good survey question?|What is your favorite fruit?|Don't you agree apples are the best?|You like apples, right?|=>Neutral wording.
A bar graph shows 12 votes for pizza and 8 for tacos. How many more votes for pizza?|4|20|12|=>12 − 8.
A bar graph shows 5, 8, and 11 votes. How many votes in all?|24|16|19|=>5 + 8 + 11.
A line graph shows a plant's height rising each week. What does it show?|growth over time|parts of a whole|categories|=>A trend.
The mean of 5 numbers is 8. What is the sum?|40|13|8|=>5 × 8.
A student's test scores are 80, 85, 90, 85. What is the mode?|85|80|90|=>Appears twice.
A student's test scores are 80, 85, 90, 85. What is the median?|85|80|87.5|=>Order: 80, 85, 85, 90; average of 85 and 85.
A student's test scores are 80, 85, 90, 85. What is the range?|10|90|5|=>90 − 80.
Which measure of center would best describe house prices with a few very expensive mansions?|median|mean|range|=>Resistant to outliers.
True or false: The mean is always a data value.|False|True|=>Often not.
True or false: The median of an odd-sized ordered set is its middle value.|True|False|=>Yes.
True or false: A larger range means the data are more spread out.|True|False|=>Greater spread.
True or false: A line graph is best for showing data over time.|True|False|=>Trends.
`);

  /* ---------- probability ---------- */
  const PB = K("probability");
  B.tpl(PB, (r) => { const a = ri(r, 1, 9), b = ri(r, 1, 9), c = ri(r, 1, 9); const tot = a + b + c; return [`A bag has ${a} red, ${b} blue, and ${c} green marbles. What is the probability of picking a green marble?`, T.mc(r, frac(c, tot), [frac(a, tot), frac(b, tot), frac(c, tot - c || 1), frac(tot - c, tot)].filter((x, i, arr) => arr.indexOf(x) === i && x !== frac(c, tot)), (rr) => `${ri(rr, 1, 5)}/${ri(rr, 6, 20)}`), 0, `Favorable ${c} out of ${tot} total.`]; }, 14);
  B.tpl(PB, (r) => { const n = T.pick(r, [6, 8, 10, 12]), k = ri(r, 1, n - 1); return [`A spinner has ${n} equal parts numbered 1 to ${n}. What is the probability of spinning a number greater than ${k}?`, T.mc(r, frac(n - k, n), [frac(k, n), frac(n - k + 1, n), frac(1, n), frac(n - k, n + 1)].filter((x, i, arr) => arr.indexOf(x) === i && x !== frac(n - k, n)), (rr) => `${ri(rr, 1, n - 1)}/${n}`), 0, `${n - k} favorable outcomes out of ${n}.`]; }, 12);
  B.tpl(PB, (r) => { const a = ri(r, 2, 6), b = ri(r, 2, 6), c = ri(r, 2, 4); return [`A diner offers ${a} sandwiches, ${b} sides, and ${c} drinks. How many different meals (one of each) are possible?`, near(r, a * b * c, [-a, a, a + b + c - a * b * c, 1].map((x) => x)), 0, `${a} × ${b} × ${c} = ${a * b * c}.`]; }, 10);
  B.tpl(PB, (r) => { const n = ri(r, 2, 6), m = ri(r, 2, 6); return [`You flip a coin and spin a spinner with ${m} equal sections. How many outcomes are possible?`, near(r, 2 * m, [-1, 1, 2, m].map((x) => x)), 0, `2 × ${m} = ${2 * m}.`]; }, 6);
  B.tpl(PB, (r) => { const n = T.pick(r, [4, 5, 8, 10]), k = ri(r, 1, n - 1); return [`The probability of winning a game is ${k}/${n}. What is the probability of NOT winning?`, T.mc(r, frac(n - k, n), [frac(k, n), frac(k + 1, n), frac(n, k), frac(1, n)].filter((x, i, arr) => arr.indexOf(x) === i && x !== frac(n - k, n)), (rr) => `${ri(rr, 1, 9)}/${n}`), 0, `1 − ${k}/${n} = ${frac(n - k, n)}.`]; }, 8);
  B.tpl(PB, (r) => { const n = ri(r, 3, 12) * 10, p = T.pick(r, [[1, 2], [1, 4], [1, 5], [3, 5], [1, 10]]); if ((n * p[0]) % p[1]) return null; return [`The chance of rain is ${p[0]}/${p[1]}. In ${n} days, about how many rainy days would you expect?`, near(r, n * p[0] / p[1], [-5, 5, 10, -10, n].map((x) => x)), 0, `${p[0]}/${p[1]} of ${n} = ${n * p[0] / p[1]}.`]; }, 8);
  A("probability", `
What is probability?|how likely an event is to happen|the number of outcomes|a guess|=>From 0 to 1.
What is an outcome?|a possible result of an experiment|the number of trials|the probability|=>One result.
What is an event?|a set of one or more outcomes|the probability|a trial|=>Like rolling an even number.
What is a sample space?|the set of all possible outcomes|the probability|a graph|=>All results.
What is the probability of an impossible event?|0|1|1/2|=>Never happens.
What is the probability of a certain event?|1|0|1/2|=>Always happens.
Which probability is equally likely and unlikely?|1/2|1/4|3/4|=>50%.
Which probability is closest to certain?|9/10|1/2|1/10|=>Near 1.
Which probability is closest to impossible?|1/100|1/2|3/4|=>Near 0.
What is the formula for probability?|favorable outcomes ÷ total outcomes|total outcomes ÷ favorable|favorable × total|=>Part over whole.
What is the probability of rolling a 3 on a number cube?|1/6|1/3|3/6|=>One of six.
What is the probability of rolling an even number on a number cube?|1/2|1/6|1/3|=>2, 4, 6.
What is the probability of rolling a number less than 3 on a number cube?|1/3|1/6|1/2|=>1, 2.
What is the probability of flipping heads on a coin?|1/2|1/4|1|=>Two outcomes.
What is the probability of picking a red marble from a bag of 3 red and 2 blue marbles?|3/5|2/5|3/2|=>3 of 5.
What is the probability of picking a blue marble from a bag of 3 red and 2 blue marbles?|2/5|3/5|1/5|=>2 of 5.
What is the probability of picking a vowel from the letters in the word MATH?|1/4|1/2|3/4|=>A is the only vowel.
What is the probability of choosing a month that starts with J?|3/12 = 1/4|2/12|4/12|=>January, June, July.
What is the probability of choosing a day of the week that starts with T?|2/7|1/7|3/7|=>Tuesday, Thursday.
How many outcomes are there when you flip two coins?|4|2|3|=>HH, HT, TH, TT.
How many outcomes are there when you roll a die and flip a coin?|12|8|6|=>6 × 2.
How many outcomes are there when you flip three coins?|8|6|3|=>2 × 2 × 2.
What is a tree diagram used for?|listing all possible outcomes|measuring angles|graphing data|=>Branches.
What is the Fundamental Counting Principle?|multiply the number of choices at each step|add the number of choices|subtract them|=>Total outcomes.
How many outfits can you make from 3 shirts and 4 pants?|12|7|9|=>3 × 4.
How many 3-letter codes can you make with the letters A, B (repeat allowed)?|8|6|4|=>2 × 2 × 2.
A spinner has 4 equal sections: red, blue, green, yellow. What is the probability of landing on blue?|1/4|1/2|1/3|=>One of four.
A spinner has 4 equal sections: red, blue, green, yellow. What is the probability of NOT landing on blue?|3/4|1/4|1/2|=>1 − 1/4.
If the probability of snow is 20%, what is the probability it does not snow?|80%|20%|100%|=>100 − 20.
If you flip a coin 100 times, about how many heads do you expect?|50|100|25|=>Half.
If you roll a die 60 times, about how many 6s do you expect?|10|6|30|=>1/6 of 60.
What is experimental probability?|probability based on actual trials|probability based on theory|a guess|=>Data from experiments.
What is theoretical probability?|probability based on equally likely outcomes|probability based on trials|a guess|=>What should happen.
A coin lands on heads 6 times out of 10 flips. What is the experimental probability of heads?|6/10 = 3/5|1/2|4/10|=>Observed ratio.
Which event is unlikely?|rolling a 6 twice in a row|rolling an even number|flipping heads|=>1/36.
Which event is likely?|rolling a number from 1 to 5|rolling a 6|rolling a 7|=>5/6.
Which event is certain?|rolling a number from 1 to 6 on a standard die|rolling a 6|rolling an even number|=>All outcomes.
Which event is impossible?|rolling a 7 on a standard die|rolling a 1|rolling an even number|=>Only 1–6.
Are the outcomes of flipping a fair coin equally likely?|Yes|No|Sometimes|=>Each 1/2.
Are the outcomes of spinning a spinner with unequal parts equally likely?|No|Yes|Always|=>Bigger sections are more likely.
Which spinner is most likely to land on red?|a spinner with red covering half|a spinner with red covering a quarter|a spinner with red covering a tenth|=>Bigger area.
True or false: A probability of 0.5 is the same as 1/2.|True|False|=>50%.
True or false: A probability can be greater than 1.|False|True|=>Max is 1.
True or false: If an event has a probability of 0, it can still happen.|False|True|=>Impossible.
True or false: After 5 heads in a row, tails is more likely next.|False|True|=>Flips are independent.
`);

  /* ---------- patterns, variables, expressions ---------- */
  const AL = K("algebra");
  B.tpl(AL, (r) => { const s = ri(r, 1, 30), d = ri(r, 2, 12); const seq = [0, 1, 2, 3].map((i) => s + i * d); return [`What is the next number?{nl}${seq.join(", ")}, ___`, near(r, s + 4 * d, [-d, d, 1, 2 * d].map((x) => x)), 0, `Add ${d} each time.`]; }, 12);
  B.tpl(AL, (r) => { const s = ri(r, 2, 5), m = ri(r, 2, 4); const seq = [s, s * m, s * m * m, s * m * m * m]; return [`What is the next number?{nl}${seq.join(", ")}, ___`, near(r, s * m * m * m * m, [-s * m * m * m, s * m * m * m, 1].map((x) => x)), 0, `Multiply by ${m} each time.`]; }, 8);
  B.tpl(AL, (r) => { const a = ri(r, 2, 9), n = ri(r, 2, 12); return [`Evaluate ${a}n when n = ${n}.`, near(r, a * n, [-a, a, n, 2, -2].map((x) => x)), 0, `${a} × ${n} = ${a * n}.`]; }, 12);
  B.tpl(AL, (r) => { const a = ri(r, 2, 9), b = ri(r, 1, 15), n = ri(r, 2, 10); return [`Evaluate ${a}n + ${b} when n = ${n}.`, near(r, a * n + b, [-a, a, b, -b, 2].map((x) => x)), 0, `${a}(${n}) + ${b} = ${a * n + b}.`]; }, 12);
  B.tpl(AL, (r) => { const a = ri(r, 2, 9), n = ri(r, 2, 9); return [`Which expression means '${a} more than a number n'?`, T.mc(r, `n + ${a}`, [`${a}n`, `n − ${a}`, `${a} − n`]), 0, `More than means add.`]; }, 6);
  B.tpl(AL, (r) => { const a = ri(r, 2, 9); return [`Which expression means '${a} times a number n'?`, T.mc(r, `${a}n`, [`n + ${a}`, `n/${a}`, `${a} + n`]), 0, `Times means multiply.`]; }, 5);
  B.tpl(AL, (r) => { const a = ri(r, 2, 9); return [`Which expression means 'a number n divided by ${a}'?`, T.mc(r, `n ÷ ${a}`, [`${a} ÷ n`, `n × ${a}`, `n − ${a}`]), 0, `Divided by means ÷.`]; }, 5);
  B.tpl(AL, (r) => { const a = ri(r, 2, 9), b = ri(r, 1, 20), x = ri(r, 2, 12); return [`Solve for n: n + ${a} = ${a + x}`, near(r, x, [-1, 1, a, 2].map((z) => z)), 0, `n = ${a + x} − ${a} = ${x}.`]; }, 8);
  B.tpl(AL, (r) => { const rule = ri(r, 2, 6), add = ri(r, 0, 5); const ins = [1, 2, 3, 4]; const outs = ins.map((x) => rule * x + add); return [`A rule turns 1, 2, 3, 4 into ${outs.join(", ")}. What is the output for an input of 5?`, near(r, rule * 5 + add, [-rule, rule, 1, -1].map((x) => x)), 0, `The rule is ${rule}n${add ? " + " + add : ""}; for n = 5, the output is ${rule * 5 + add}.`]; }, 8);
  A("algebra", `
What is a variable?|a letter or symbol that stands for an unknown number|a number|an operation|=>n, x.
What is an expression?|a mathematical phrase with numbers, variables, and operations|a statement with an equal sign|a number|=>Like 3n + 2.
What is an equation?|a statement that two expressions are equal|an expression|a number|=>Has an equal sign.
What is a pattern?|a sequence that follows a rule|a random set of numbers|a single number|=>Repeats or grows.
What is the rule for 2, 4, 6, 8?|add 2|multiply by 2|add 4|=>+2 each time.
What is the rule for 3, 6, 12, 24?|multiply by 2|add 3|add 6|=>×2 each time.
What is the rule for 20, 17, 14, 11?|subtract 3|divide by 3|add 3|=>−3 each time.
What is the next number: 5, 10, 15, 20, ___?|25|30|24|=>Add 5.
What is the next number: 1, 4, 7, 10, ___?|13|12|14|=>Add 3.
What is the next number: 100, 90, 80, ___?|70|60|75|=>Subtract 10.
What is the next number: 2, 6, 18, ___?|54|24|36|=>Multiply by 3.
What is the next number: 1, 2, 4, 8, ___?|16|12|10|=>Double.
What is the next number: 1, 3, 6, 10, ___?|15|13|14|=>Add 2, 3, 4, 5.
What is the next number: 1, 4, 9, 16, ___?|25|20|24|=>Square numbers.
What is a term in a sequence?|one number in the sequence|the rule|the pattern|=>1st, 2nd...
What is the 5th term of 3, 6, 9, 12?|15|18|14|=>Add 3.
What is the 10th term of 2, 4, 6, 8...?|20|18|22|=>2 × 10.
Which expression represents 'a number plus 5'?|n + 5|5n|n − 5|=>Plus means add.
Which expression represents '5 less than a number'?|n − 5|5 − n|5n|=>Subtract from the number.
Which expression represents 'twice a number'?|2n|n + 2|n/2|=>Twice means × 2.
Which expression represents 'a number divided by 3'?|n ÷ 3|3n|n − 3|=>÷.
Which expression represents 'the sum of a number and 8'?|n + 8|8n|n − 8|=>Sum means add.
Which expression represents 'the product of 6 and a number'?|6n|n + 6|n/6|=>Product means multiply.
Which expression represents 'three more than twice a number'?|2n + 3|3n + 2|2(n + 3)|=>Twice, then plus 3.
Which expression represents 'one less than three times a number'?|3n − 1|3(n − 1)|n − 3|=>Three times, then minus 1.
Evaluate n + 6 when n = 4.|10|24|2|=>4 + 6.
Evaluate 3n when n = 5.|15|8|35|=>3 × 5.
Evaluate 2n + 1 when n = 7.|15|16|21|=>2(7) + 1.
Evaluate 10 − n when n = 3.|7|13|30|=>10 − 3.
Evaluate n² when n = 6.|36|12|66|=>6 × 6.
Evaluate (n + 2) × 3 when n = 4.|18|14|10|=>6 × 3.
What is the value of 4(n − 1) when n = 5?|16|19|20|=>4 × 4.
What is the value of 5 + 2n when n = 6?|17|42|13|=>5 + 12.
What is the distributive property?|a(b + c) = ab + ac|a + b = b + a|a × b = b × a|=>Distribute.
Which expression equals 3(4 + 5)?|3 × 4 + 3 × 5|3 × 4 + 5|3 + 4 × 5|=>Distributive property.
Which expression equals 2(n + 6)?|2n + 12|2n + 6|n + 12|=>Distribute.
Which expression equals 5(n − 2)?|5n − 10|5n − 2|n − 10|=>Distribute.
What is a coefficient?|the number multiplied by a variable|the variable|the sum|=>In 4n, the coefficient is 4.
What is a constant?|a number that doesn't change|a variable|an operation|=>In 3n + 7, the constant is 7.
What are like terms?|terms with the same variable|any two terms|terms with different variables|=>3n and 5n.
Simplify: 3n + 2n|5n|6n|5n²|=>Combine like terms.
Simplify: 7n − 3n|4n|10n|4|=>Subtract coefficients.
Solve: n + 5 = 12|7|17|60|=>12 − 5.
Solve: n − 4 = 6|10|2|24|=>6 + 4.
Solve: 3n = 21|7|18|63|=>21 ÷ 3.
Solve: n/4 = 5|20|9|1.25|=>5 × 4.
What does the equal sign mean?|the two sides have the same value|add|the answer comes next|=>Balance.
Which value of n makes n + 3 = 10 true?|7|13|30|=>10 − 3.
Which value of n makes 2n = 14 true?|7|12|28|=>14 ÷ 2.
Which equation is true when n = 4?|n + 6 = 10|n + 6 = 11|n + 6 = 9|=>4 + 6 = 10.
A table shows inputs 1, 2, 3 and outputs 4, 5, 6. What is the rule?|add 3|multiply by 4|add 4|=>Each output is 3 more.
A table shows inputs 1, 2, 3 and outputs 2, 4, 6. What is the rule?|multiply by 2|add 1|add 2|=>Double.
A table shows inputs 2, 4, 6 and outputs 1, 2, 3. What is the rule?|divide by 2|subtract 1|multiply by 2|=>Half.
Nina earns $8 per hour. Which expression gives her earnings for h hours?|8h|h + 8|8 − h|=>Rate × hours.
A book has 120 pages and Nina has read p pages. Which expression gives the pages left?|120 − p|120 + p|p − 120|=>Total − read.
True or false: n + 4 and 4 + n are equal.|True|False|=>Commutative.
True or false: 3n and n + 3 are the same.|False|True|=>3n = n + n + n.
True or false: In 5n, the 5 is the variable.|False|True|=>5 is the coefficient.
`);
})();
