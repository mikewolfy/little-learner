/* Grade 3 Math: bonus question banks. Numbers come from seeded templates, so every answer is computed. */
(function () {
  "use strict";
  const B = window.BONUS, T = B.T, K = (u) => "3/math/" + u;
  const NAMES = ["Mia", "Noah", "Ava", "Liam", "Zoe", "Ben", "Lily", "Sam", "Ella", "Max", "Ruby", "Leo", "Nina", "Omar"];
  const THINGS = ["stickers", "marbles", "cards", "pencils", "apples", "books", "shells", "crayons", "stamps", "coins"];
  const f = (n) => n.toLocaleString("en-US");
  // right answer first; three nearby wrong numbers
  const near = (r, right, ds, fmt) => {
    fmt = fmt || String;
    return T.mc(r, fmt(right), ds.map((d) => right + d).filter((x) => x >= 0 && x !== right).map(fmt), (rr) => fmt(Math.abs(right + T.ri(rr, -15, 15))));
  };
  const nm = (r) => T.pick(r, NAMES), th = (r) => T.pick(r, THINGS);
  const words = (n) => {
    const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const below100 = (x) => (x < 20 ? ones[x] : tens[Math.floor(x / 10)] + (x % 10 ? "-" + ones[x % 10] : ""));
    const below1000 = (x) => (x >= 100 ? ones[Math.floor(x / 100)] + " hundred" + (x % 100 ? " " + below100(x % 100) : "") : below100(x));
    return n >= 1000 ? ones[Math.floor(n / 1000)] + " thousand" + (n % 1000 ? " " + below1000(n % 1000) : "") : below1000(n);
  };
  const distinctDigits = (r, len) => { let d; do { d = T.shuf(r, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, len); } while (d[0] === 0); return d; };
  const PLACES = ["ones", "tens", "hundreds", "thousands"];
  const roundTo = (n, p) => { const x = Math.floor((n + p / 2) / p) * p; return x; };

  /* ---------- place value ---------- */
  const PV = K("place-value");
  B.tpl(PV, (r) => { const d = distinctDigits(r, 4), n = +d.join(""), i = T.ri(r, 0, 3); if (!d[i]) return null; const v = d[i] * Math.pow(10, 3 - i);
    return [`What is the value of the digit ${d[i]} in ${f(n)}?`, T.mc(r, f(v), [f(d[i]), f(d[i] * 10), f(d[i] * 1000), f(d[i] * 100)].filter((x) => x !== f(v)), (rr) => f(T.ri(rr, 1, 9) * 10)), 0, `The ${d[i]} is in the ${PLACES[3 - i]} place, so its value is ${f(v)}.`]; }, 18);
  B.tpl(PV, (r) => { const d = distinctDigits(r, 4), n = +d.join(""), i = T.ri(r, 0, 3);
    return [`Which digit is in the ${PLACES[3 - i]} place of ${f(n)}?`, T.mc(r, d[i], d.filter((x, j) => j !== i)), 0, `In ${f(n)}, the ${PLACES[3 - i]} digit is ${d[i]}.`]; }, 14);
  B.tpl(PV, (r) => { const n = T.ri(r, 11, 998); if (n % 10 === 0) return null; const a = roundTo(n, 10);
    return [`Round ${n} to the nearest ten.`, near(r, a, [-10, 10, 100, -100]), 0, `Look at the ones digit (${n % 10}). ${n % 10 >= 5 ? "5 or more rounds up" : "Less than 5 rounds down"}, so ${n} ≈ ${a}.`]; }, 18);
  B.tpl(PV, (r) => { const n = T.ri(r, 101, 9899); if (n % 100 === 0) return null; const a = roundTo(n, 100);
    return [`Round ${f(n)} to the nearest hundred.`, near(r, a, [-100, 100, 1000, 10], f), 0, `Look at the tens digit. ${(n % 100) >= 50 ? "50 or more rounds up" : "Less than 50 rounds down"}, so ${f(n)} ≈ ${f(a)}.`]; }, 18);
  B.tpl(PV, (r) => { const d = distinctDigits(r, 4), n = +d.join(""), th = d[0] * 1000, h = d[1] * 100, t = d[2] * 10, o = d[3];
    const ex = (a, b, c, e) => [a, b, c, e].filter((x) => x > 0).map(f).join(" + ");
    return [`Which shows ${f(n)} in expanded form?`, T.mc(r, ex(th, h, t, o), [ex(d[1] * 1000, d[0] * 100, t, o), ex(th, h, o * 10, d[2]), ex(th, d[2] * 100, d[1] * 10, o)].filter((x) => x !== ex(th, h, t, o)), (rr) => ex(th, T.ri(rr, 1, 9) * 100, t, o)), 0, `Each digit keeps its place value: ${ex(th, h, t, o)}.`]; }, 14);
  B.tpl(PV, (r) => { const a = T.ri(r, 100, 9999); let b = T.ri(r, 100, 9999); if (a === b) b++; const hi = Math.max(a, b), lo = Math.min(a, b);
    return [`Which number is greater: ${f(a)} or ${f(b)}?`, [f(hi), f(lo)], 0, `${f(hi)} is greater than ${f(lo)}.`]; }, 14);
  B.tpl(PV, (r) => { const s = new Set(); while (s.size < 4) s.add(T.ri(r, 100, 999)); const a = [...s].sort((x, y) => x - y);
    const least = T.ri(r, 0, 1) === 0;
    return [`Which is the ${least ? "least" : "greatest"} number?`, T.mc(r, least ? a[0] : a[3], least ? a.slice(1) : a.slice(0, 3)), 0, `Compare the hundreds, then the tens, then the ones.`]; }, 14);
  B.tpl(PV, (r) => { const n = T.ri(r, 110, 9890), k = T.pick(r, [10, 100]), up = T.ri(r, 0, 1) === 0; const a = up ? n + k : n - k;
    return [`What is ${k} ${up ? "more" : "less"} than ${f(n)}?`, near(r, a, [up ? -k : k, up ? k * 10 : -k * 10, up ? 1 : -1, 10 * (up ? 1 : -1) * (k === 10 ? 10 : 1)].map((x) => x - (n - n) ), f), 0, `${up ? "Add" : "Subtract"} ${k}: ${f(n)} ${up ? "+" : "−"} ${k} = ${f(a)}.`]; }, 14);
  B.tpl(PV, (r) => { const n = T.ri(r, 1000, 9999); return [`How do you write '${words(n)}' as a number?`, T.mc(r, f(n), [f(n + 10), f(n - 100), f(n + 1000)], (rr) => f(T.ri(rr, 1000, 9999))), 0, `${words(n)} = ${f(n)}.`]; }, 14);
  B.tpl(PV, (r) => { const a = T.ri(r, 100, 9999); let b = T.ri(r, 100, 9999); if (a === b) b++;
    return [`Which symbol makes this true?{nl}${f(a)} ___ ${f(b)}`, [a > b ? ">" : "<", a > b ? "<" : ">", "="], 0, `${f(a)} is ${a > b ? "greater" : "less"} than ${f(b)}.`]; }, 12);
  B.add(PV, `
What is the value of the 5 in 5,000?|5 thousands (5,000)|5 hundreds|5 ones|=>The 5 is in the thousands place.
How many tens are in 100?|10|1|100|=>10 tens make 100.
How many hundreds are in 1,000?|10|1|100|=>10 hundreds make 1,000.
How many ones are in 3 tens?|30|3|300|=>1 ten = 10 ones, so 3 tens = 30 ones.
Which is the smallest 3-digit number?|100|99|101|=>100 is the first 3-digit number.
Which is the largest 4-digit number?|9,999|10,000|9,000|=>9,999 is the greatest number with four digits.
When you round to the nearest ten, a ones digit of 5 or more…|rounds up|rounds down|stays the same|=>45 rounds to 50.
When you round to the nearest hundred, a tens digit of 4 or less…|rounds down|rounds up|stays the same|=>349 rounds to 300.
True or false: 3,462 rounds to 3,500 to the nearest hundred.|True|False|=>The tens digit is 6, so round up.
True or false: 78 rounds to 70 to the nearest ten.|False|True|=>The ones digit is 8, so round up to 80.
True or false: In 4,096, the 9 is in the hundreds place.|False|True|=>The 9 is in the tens place.
True or false: 500 + 30 + 2 = 532.|True|False|=>Expanded form adds the values of each digit.
Which number has a 7 in the hundreds place?|1,720|7,120|1,270|=>In 1,720 the 7 is in the hundreds place.
Which number has a 4 in the thousands place?|4,812|8,412|8,142|=>In 4,812 the 4 is in the thousands place.
Which digit is in the ones place of 2,589?|9|8|5|=>The ones place is the last digit.
Which number is an even number?|3,418|3,415|3,417|=>Even numbers end in 0, 2, 4, 6, or 8.
`);

  /* ---------- addition and subtraction ---------- */
  const AS = K("add-subtract");
  B.tpl(AS, (r) => { const a = T.ri(r, 120, 899), b = T.ri(r, 120, 899); return [`${f(a)} + ${f(b)} = ?`, near(r, a + b, [-10, 10, -100, 100, 1], f), 0, `${f(a)} + ${f(b)} = ${f(a + b)}.`]; }, 16);
  B.tpl(AS, (r) => { const a = T.ri(r, 400, 999), b = T.ri(r, 110, a - 20); return [`${a} − ${b} = ?`.replace("−", "−"), near(r, a - b, [-10, 10, -100, 100, 1]), 0, `${a} − ${b} = ${a - b}.`]; }, 16);
  B.tpl(AS, (r) => { const a = T.ri(r, 1000, 6000), b = T.ri(r, 1000, 3000); return [`${f(a)} + ${f(b)} = ?`, near(r, a + b, [-100, 100, -1000, 1000], f), 0, `${f(a)} + ${f(b)} = ${f(a + b)}.`]; }, 12);
  B.tpl(AS, (r) => { const a = T.ri(r, 3000, 9000), b = T.ri(r, 500, 2900); return [`${f(a)} − ${f(b)} = ?`, near(r, a - b, [-100, 100, -1000, 1000], f), 0, `${f(a)} − ${f(b)} = ${f(a - b)}.`]; }, 12);
  B.tpl(AS, (r) => { const a = T.ri(r, 20, 90), t = a + T.ri(r, 15, 80); return [`${a} + ___ = ${t}`, near(r, t - a, [-10, 10, 1, -1]), 0, `${t} − ${a} = ${t - a}.`]; }, 12);
  B.tpl(AS, (r) => { const b = T.ri(r, 20, 90), t = b + T.ri(r, 15, 80); return [`___ − ${b} = ${t - b}`, near(r, t, [-10, 10, 1, -1]), 0, `Add ${b} + ${t - b} = ${t}.`]; }, 10);
  B.tpl(AS, (r) => { const n = nm(r), t = th(r), a = T.ri(r, 120, 480), b = T.ri(r, 120, 480); return [`${n} had ${a} ${t}. Then ${n} got ${b} more. How many ${t} does ${n} have now?`, near(r, a + b, [-10, 10, -100, 100]), 0, `${a} + ${b} = ${a + b}.`]; }, 14);
  B.tpl(AS, (r) => { const n = nm(r), t = th(r), a = T.ri(r, 300, 900), b = T.ri(r, 50, 290); return [`${n} had ${a} ${t} and gave away ${b}. How many ${t} are left?`, near(r, a - b, [-10, 10, -100, 100]), 0, `${a} − ${b} = ${a - b}.`]; }, 14);
  B.tpl(AS, (r) => { const a = T.ri(r, 21, 99), b = T.ri(r, 21, 99), est = roundTo(a, 10) + roundTo(b, 10);
    return [`Estimate ${a} + ${b} by rounding each number to the nearest ten.`, near(r, est, [-20, 20, 10, -10, 100]), 0, `${roundTo(a, 10)} + ${roundTo(b, 10)} = ${est}.`]; }, 12);
  B.tpl(AS, (r) => { const a = T.ri(r, 200, 900), b = T.ri(r, 100, a - 50), est = roundTo(a, 100) - roundTo(b, 100);
    return [`Estimate ${a} − ${b} by rounding each number to the nearest hundred.`, near(r, est, [-100, 100, 200, -200]), 0, `${roundTo(a, 100)} − ${roundTo(b, 100)} = ${est}.`]; }, 10);
  B.tpl(AS, (r) => { const a = T.ri(r, 12, 60), b = T.ri(r, 12, 60), c = T.ri(r, 12, 60); return [`${a} + ${b} + ${c} = ?`, near(r, a + b + c, [-10, 10, 1, -1]), 0, `Add in any order: ${a + b + c}.`]; }, 10);
  B.add(AS, `
Which property says 9 + 4 = 4 + 9?|commutative property|associative property|zero property|=>Order doesn't change the sum.
Which property says (2 + 3) + 4 = 2 + (3 + 4)?|associative property|commutative property|identity property|=>Grouping doesn't change the sum.
What is 57 + 0?|57|0|570|=>Adding zero doesn't change a number.
Addition and subtraction are…|inverse operations|the same operation|not related|=>Subtraction undoes addition.
Which fact family goes with 7, 8, and 15?|7 + 8 = 15 and 15 − 8 = 7|7 × 8 = 15|15 + 8 = 7|=>The two parts add to the whole.
Which number sentence is true?|45 + 30 = 75|45 + 30 = 65|45 + 30 = 85|=>45 + 30 = 75.
To solve 83 − 47 you can…|add up from 47 to 83|multiply 83 by 47|divide 83 by 47|=>Count up: 47 + 36 = 83.
When you add 4 + 8, you regroup if…|the ones add to 10 or more|the ones add to less than 10|the number is odd|=>Regroup (carry) when ones make 10 or more.
Which is the best estimate for 398 + 205?|600|500|700|=>400 + 200 = 600.
Which is the best estimate for 702 − 298?|400|300|500|=>700 − 300 = 400.
True or false: 100 − 1 = 99.|True|False|=>One less than 100 is 99.
True or false: The sum of two even numbers is always even.|True|False|=>4 + 6 = 10, 8 + 2 = 10, etc.
True or false: The sum of two odd numbers is always odd.|False|True|=>3 + 5 = 8, which is even.
What word tells you to add?|total|difference|fewer|=>Total means all together.
What word tells you to subtract?|difference|sum|total|=>Difference means how many more or fewer.
`);

  /* ---------- multiplication ---------- */
  const MU = K("multiplication");
  B.tpl(MU, (r) => { const a = T.ri(r, 2, 10), b = T.ri(r, 2, 10); return [`${a} × ${b} = ?`, T.mc(r, a * b, [a * b + a, a * b - b, a + b, a * (b + 1)].filter((x) => x !== a * b), (rr) => T.ri(rr, 4, 100)), 0, `${a} × ${b} = ${a * b}.`]; }, 40);
  B.tpl(MU, (r) => { const a = T.ri(r, 2, 10), b = T.ri(r, 2, 10); return [`${a} × ___ = ${a * b}`, near(r, b, [1, -1, 2, -2]), 0, `${a * b} ÷ ${a} = ${b}.`]; }, 20);
  B.tpl(MU, (r) => { const a = T.ri(r, 2, 9), b = T.ri(r, 2, 9); return [`A garden has ${a} rows with ${b} plants in each row. How many plants in all?`, near(r, a * b, [a, b, a + b, a * (b + 1)]), 0, `${a} × ${b} = ${a * b}.`]; }, 14);
  B.tpl(MU, (r) => { const n = nm(r), a = T.ri(r, 2, 9), b = T.ri(r, 2, 9), t = th(r); return [`${n} has ${a} bags with ${b} ${t} in each bag. How many ${t} does ${n} have?`, near(r, a * b, [a + b, a * b - a, a * b + b, a]), 0, `${a} groups of ${b} is ${a} × ${b} = ${a * b}.`]; }, 14);
  B.tpl(MU, (r) => { const a = T.ri(r, 2, 9), b = T.ri(r, 2, 9); return [`${a} × ${b} is the same as ${b} × ___.`, near(r, a, [1, -1, b, 2]), 0, `Order doesn't matter: ${a} × ${b} = ${b} × ${a}.`]; }, 8);
  B.tpl(MU, (r) => { const a = T.ri(r, 2, 9), b = T.ri(r, 2, 9); return [`Which number sentence matches an array with ${a} rows and ${b} columns?`, [`${a} × ${b}`, `${a} + ${b}`, `${a} − ${b}`, `${a} ÷ ${b}`].slice(0, 4), 0, `Rows × columns = ${a} × ${b} = ${a * b}.`]; }, 10);
  B.tpl(MU, (r) => { const a = T.ri(r, 2, 9), b = T.ri(r, 1, 9) * 10; return [`${a} × ${b} = ?`, near(r, a * b, [-a * 10, a * 10, a, a * b / 10]), 0, `${a} × ${b / 10} = ${a * b / 10}, then times 10 = ${a * b}.`]; }, 14);
  B.tpl(MU, (r) => { const a = T.ri(r, 3, 9), s = T.ri(r, 2, 6); const seq = [0, 1, 2, 3].map((i) => a * (s + i));
    return [`Which number comes next when you skip count by ${a}?{nl}${seq.join(", ")}, ___`, near(r, a * (s + 4), [a, -a, 1, 2]), 0, `Add ${a}: ${seq[3]} + ${a} = ${a * (s + 4)}.`]; }, 12);
  B.tpl(MU, (r) => { const a = T.ri(r, 2, 9), b = T.ri(r, 2, 9), c = T.ri(r, 2, 5); return [`Use the distributive idea: ${a} × ${b} + ${a} × ${c} = ${a} × ___`, near(r, b + c, [1, -1, a, b * c]), 0, `${a} × (${b} + ${c}) = ${a} × ${b + c}.`]; }, 8);
  B.add(MU, `
What is 7 × 0?|0|7|1|=>Anything times zero is zero.
What is 8 × 1?|8|1|0|=>Anything times one is itself.
Which property says 3 × 5 = 5 × 3?|commutative property|associative property|zero property|=>Order doesn't change a product.
Which number is NOT a multiple of 3?|14|12|18|=>3, 6, 9, 12, 15, 18…
Which number is a multiple of 5?|35|32|38|=>Multiples of 5 end in 0 or 5.
Which number is a multiple of 10?|70|75|77|=>Multiples of 10 end in 0.
True or false: 6 × 4 = 4 × 6.|True|False|=>Both equal 24.
True or false: 9 × 9 = 81.|True|False|=>9 × 9 = 81.
True or false: 7 × 8 = 54.|False|True|=>7 × 8 = 56.
What is a product?|the answer to a multiplication problem|the answer to a division problem|a factor|=>In 3 × 4 = 12, 12 is the product.
In 4 × 6 = 24, what are 4 and 6 called?|factors|products|quotients|=>Factors are multiplied.
Which expression shows 5 groups of 3?|5 × 3|5 + 3|5 − 3|=>5 groups of 3 is 5 × 3.
Which is double 8?|16|64|4|=>Double means times 2.
Which fact can help you solve 6 × 8?|5 × 8 and one more 8|6 + 8|8 ÷ 6|=>5 × 8 = 40, plus 8 = 48.
What is 9 × 6?|54|45|63|=>9 × 6 = 54.
Which tells how many wheels are on 6 bicycles?|6 × 2 = 12|6 + 2 = 8|6 × 4 = 24|=>Each bicycle has 2 wheels.
`);

  /* ---------- division ---------- */
  const DV = K("division");
  B.tpl(DV, (r) => { const a = T.ri(r, 2, 10), b = T.ri(r, 2, 10); return [`${a * b} ÷ ${a} = ?`, near(r, b, [1, -1, 2, a]), 0, `${a} × ${b} = ${a * b}, so ${a * b} ÷ ${a} = ${b}.`]; }, 40);
  B.tpl(DV, (r) => { const a = T.ri(r, 2, 10), b = T.ri(r, 2, 10); return [`${a * b} ÷ ___ = ${a}`, near(r, b, [1, -1, 2, a]), 0, `${a * b} ÷ ${b} = ${a}.`]; }, 16);
  B.tpl(DV, (r) => { const n = nm(r), g = T.ri(r, 2, 9), e = T.ri(r, 2, 9), t = th(r); return [`${n} shares ${g * e} ${t} equally among ${g} friends. How many does each friend get?`, near(r, e, [1, -1, g, 2]), 0, `${g * e} ÷ ${g} = ${e}.`]; }, 14);
  B.tpl(DV, (r) => { const n = nm(r), g = T.ri(r, 2, 9), e = T.ri(r, 2, 9), t = th(r); return [`${n} puts ${g * e} ${t} into groups of ${e}. How many groups are there?`, near(r, g, [1, -1, e, 2]), 0, `${g * e} ÷ ${e} = ${g}.`]; }, 14);
  B.tpl(DV, (r) => { const a = T.ri(r, 2, 9), b = T.ri(r, 2, 9); return [`If ${a} × ${b} = ${a * b}, which division fact is also true?`, [`${a * b} ÷ ${a} = ${b}`, `${a * b} ÷ ${a} = ${a}`, `${a} ÷ ${a * b} = ${b}`, `${b} ÷ ${a * b} = ${a}`].filter((x, i, arr) => arr.indexOf(x) === i), 0, `Multiplication and division are inverse operations.`]; }, 10);
  B.tpl(DV, (r) => { const a = T.ri(r, 2, 9), b = T.ri(r, 2, 9); return [`Which number completes the fact family?{nl}${a} × ${b} = ${a * b}{nl}${b} × ${a} = ${a * b}{nl}${a * b} ÷ ${a} = ___`, near(r, b, [1, -1, a]), 0, `${a * b} ÷ ${a} = ${b}.`]; }, 8);
  B.tpl(DV, (r) => { const a = T.ri(r, 2, 9), b = T.ri(r, 2, 9); return [`${a * b * 10} ÷ ${a} = ?`, near(r, b * 10, [-10, 10, 1, b]), 0, `${a * b} ÷ ${a} = ${b}; one more zero makes ${b * 10}.`]; }, 10);
  B.tpl(DV, (r) => { const t = T.ri(r, 2, 9) * T.ri(r, 2, 6), g = T.ri(r, 2, 9); const rem = t % g; const q = Math.floor(t / g);
    return [`${t} ÷ ${g} = ? (Give the whole number part of the answer.)`, near(r, q, [1, -1, 2, g]), 0, `${g} × ${q} = ${g * q}, which is the closest you can get to ${t} without going over.`]; }, 8);
  B.add(DV, `
In 24 ÷ 4 = 6, what is 24 called?|dividend|divisor|quotient|=>The dividend is the number being divided.
In 24 ÷ 4 = 6, what is 4 called?|divisor|dividend|quotient|=>The divisor is the number you divide by.
In 24 ÷ 4 = 6, what is 6 called?|quotient|divisor|factor|=>The quotient is the answer.
What is 0 ÷ 5?|0|5|1|=>Zero divided by any number is zero.
What is 9 ÷ 1?|9|1|0|=>Dividing by one leaves the number the same.
What is 7 ÷ 7?|1|0|7|=>A number divided by itself is 1.
True or false: You can divide by zero.|False|True|=>Dividing by zero doesn't make sense.
True or false: 36 ÷ 6 = 6.|True|False|=>6 × 6 = 36.
True or false: 45 ÷ 9 = 6.|False|True|=>45 ÷ 9 = 5.
Division is the inverse of…|multiplication|addition|rounding|=>They undo each other.
Which operation tells how many equal groups you can make?|division|addition|subtraction|=>Division splits into equal groups.
Which number sentence shows 20 shared equally by 4?|20 ÷ 4 = 5|20 × 4 = 80|20 − 4 = 16|=>20 ÷ 4 = 5.
Which is an example of repeated subtraction?|20 − 4 − 4 − 4 − 4 − 4 = 0|20 + 4 + 4|20 × 4|=>Subtracting groups of 4 five times gives 0.
How many 3s are in 18?|6|5|9|=>18 ÷ 3 = 6.
What is the remainder when 10 is shared equally among 3?|1|0|2|=>3 groups of 3 use 9, and 1 is left over.
`);

  /* ---------- fractions ---------- */
  const FR = K("fractions");
  B.tpl(FR, (r) => { const d = T.pick(r, [2, 3, 4, 5, 6, 8, 10]), n = T.ri(r, 1, d - 1), who = nm(r); const t = T.pick(r, ["pizza", "pie", "sandwich", "cake", "chocolate bar"]);
    return [`A ${t} is cut into ${d} equal pieces. ${who} eats ${n} of them. What fraction did ${who} eat?`, T.mc(r, `${n}/${d}`, [`${d}/${n}`, `${n}/${d + 1}`, `${d - n}/${d + n}`, `${n + 1}/${d}`].filter((x, i) => x !== `${n}/${d}`), (rr) => `${T.ri(rr, 1, 7)}/${T.ri(rr, 8, 12)}`), 0, `${n} of ${d} equal pieces is ${n}/${d}.`]; }, 16);
  B.tpl(FR, (r) => { const d = T.pick(r, [3, 4, 5, 6, 8, 10, 12]), a = T.ri(r, 1, d - 2), b = a + T.ri(r, 1, d - 1 - a);
    return [`Which fraction is greater: ${a}/${d} or ${b}/${d}?`, [`${b}/${d}`, `${a}/${d}`], 0, `Same denominator, so compare numerators: ${b} > ${a}.`]; }, 12);
  B.tpl(FR, (r) => { const n = T.ri(r, 1, 4), d1 = T.ri(r, 2, 6); const d2 = d1 + T.ri(r, 1, 4);
    return [`Which fraction is greater: ${n}/${d2} or ${n}/${d1}?`, [`${n}/${d1}`, `${n}/${d2}`], 0, `Same numerator: the smaller denominator means bigger pieces, so ${n}/${d1} is greater.`]; }, 12);
  B.tpl(FR, (r) => { const d1 = T.ri(r, 2, 5), m = T.ri(r, 2, 4), n = T.ri(r, 1, d1 - 1);
    return [`${n}/${d1} = ___/${d1 * m}`, near(r, n * m, [1, -1, m, n]), 0, `Multiply the top and bottom by ${m}: ${n * m}/${d1 * m}.`]; }, 12);
  B.tpl(FR, (r) => { const d = T.pick(r, [4, 5, 6, 8, 10]), n = T.ri(r, 1, d - 1);
    return [`On a number line from 0 to 1 split into ${d} equal parts, which fraction is at the ${["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth"][n - 1]} mark?`, T.mc(r, `${n}/${d}`, [`${d}/${n}`, `${n + 1}/${d}`, `${n}/${d + 1}`, `${d - n}/${d}`].filter((x) => x !== `${n}/${d}`), (rr) => `${T.ri(rr, 1, 8)}/${d}`), 0, `Count ${n} parts from 0: ${n}/${d}.`]; }, 12);
  B.tpl(FR, (r) => { const d = T.pick(r, [2, 3, 4, 5, 6]), m = T.ri(r, 2, 6), t = d * m;
    return [`What is 1/${d} of ${t}?`, near(r, m, [1, -1, d, t - m]), 0, `${t} ÷ ${d} = ${m}.`]; }, 14);
  B.tpl(FR, (r) => { const a = T.ri(r, 2, 6), b = a + T.ri(r, 1, 6);
    return [`Which is greater: 1/${a} or 1/${b}?`, [`1/${a}`, `1/${b}`], 0, `The smaller the denominator, the larger each piece.`]; }, 10);
  B.tpl(FR, (r) => { const d = T.pick(r, [3, 4, 5, 6, 8]), n = T.ri(r, 1, d - 1); const t = th(r);
    return [`There are ${d} ${t} in a set. ${n} of them are red. What fraction of the set is red?`, T.mc(r, `${n}/${d}`, [`${d}/${n}`, `${n}/${d + n}`, `${d - n}/${d}`].filter((x) => x !== `${n}/${d}`), (rr) => `${T.ri(rr, 1, 9)}/${d}`), 0, `Part ${n} out of ${d} total is ${n}/${d}.`]; }, 12);
  B.add(FR, `
In the fraction 3/8, which number is the numerator?|3|8|11|=>The numerator is the top number.
In the fraction 3/8, which number is the denominator?|8|3|5|=>The denominator is the bottom number and tells the total equal parts.
What does the denominator tell you?|how many equal parts make the whole|how many parts you have|how many wholes|=>The bottom number is the total equal parts.
What does the numerator tell you?|how many parts you have|how many equal parts in the whole|the size of the pieces|=>The top number counts the parts.
Which fraction equals one whole?|4/4|1/4|0/4|=>When numerator equals denominator, it's 1 whole.
Which fraction is equal to 1/2?|2/4|1/4|2/3|=>2/4 is the same as 1/2.
Which fraction is equal to 1/2?|4/8|3/8|1/8|=>4/8 is half.
Which fraction is equal to 1/3?|2/6|1/6|3/6|=>2/6 = 1/3.
Which fraction is the smallest?|1/8|1/2|1/4|=>The more pieces, the smaller each piece.
Which fraction is the largest?|1/2|1/4|1/8|=>Fewer pieces means bigger pieces.
True or false: 1/4 is greater than 1/3.|False|True|=>Thirds are larger than fourths.
True or false: 2/2 equals 1 whole.|True|False|=>Both parts are shaded.
True or false: 3/4 is closer to 1 than 1/4 is.|True|False|=>3/4 is nearly a whole.
Which shape is divided into thirds?|a shape cut into 3 equal parts|a shape cut into 3 unequal parts|a shape cut into 4 parts|=>Fractions need equal parts.
Which fraction names half of a pizza cut into 8 slices?|4/8|2/8|6/8|=>4 of 8 slices is half.
A fraction with 6 as denominator has how many equal parts?|6|1|12|=>Sixths: 6 equal parts.
Which unit fraction is 'one fourth'?|1/4|4/1|1/3|=>One fourth is written 1/4.
How many halves make one whole?|2|1|4|=>2/2 = 1.
How many fourths make one whole?|4|2|8|=>4/4 = 1.
Which fraction is between 0 and 1?|3/5|5/5|7/5|=>Numerator less than denominator means less than 1.
`);

  /* ---------- money ---------- */
  const MO = K("money");
  const coin = { penny: 1, nickel: 5, dime: 10, quarter: 25 };
  const cents = (c) => (c >= 100 ? "$" + (c / 100).toFixed(2) : c + "¢");
  B.tpl(MO, (r) => { const q = T.ri(r, 1, 4), d = T.ri(r, 0, 4), n = T.ri(r, 0, 3), p = T.ri(r, 0, 4), tot = q * 25 + d * 10 + n * 5 + p; const who = nm(r);
    const parts = [q + (q === 1 ? " quarter" : " quarters"), d ? d + (d === 1 ? " dime" : " dimes") : null, n ? n + (n === 1 ? " nickel" : " nickels") : null, p ? p + (p === 1 ? " penny" : " pennies") : null].filter(Boolean);
    return [`${who} has ${parts.join(", ")}. How much money is that?`, near(r, tot, [-5, 5, -10, 10, 25], cents), 0, `Add the coin values: ${tot}¢.`]; }, 18);
  B.tpl(MO, (r) => { const cost = T.ri(r, 5, 95), c = T.pick(r, [50, 100]); if (cost >= c) return null;
    return [`A snack costs ${cost}¢. You pay with ${c === 100 ? "$1.00" : "50¢"}. How much change do you get?`, near(r, c - cost, [-5, 5, -10, 10], cents), 0, `${c} − ${cost} = ${c - cost}¢.`]; }, 16);
  B.tpl(MO, (r) => { const k = T.pick(r, ["nickels", "dimes", "quarters"]), v = { nickels: 5, dimes: 10, quarters: 25 }[k], c = T.ri(r, 2, 9);
    return [`How much money is ${c} ${k}?`, near(r, c * v, [v, -v, 2 * v, -2 * v, 5], cents), 0, `${c} × ${v}¢ = ${c * v}¢.`]; }, 14);
  B.tpl(MO, (r) => { const a = T.ri(r, 100, 800), b = T.ri(r, 50, 400); const d = (x) => "$" + (x / 100).toFixed(2);
    return [`A book costs ${d(a)} and a pen costs ${d(b)}. How much do they cost together?`, near(r, a + b, [-10, 10, -100, 100, 5], d), 0, `${d(a)} + ${d(b)} = ${d(a + b)}.`]; }, 14);
  B.tpl(MO, (r) => { const a = T.ri(r, 500, 1000), b = T.ri(r, 100, a - 50); const d = (x) => "$" + (x / 100).toFixed(2);
    return [`You have ${d(a)} and spend ${d(b)}. How much is left?`, near(r, a - b, [-10, 10, -100, 100, 5], d), 0, `${d(a)} − ${d(b)} = ${d(a - b)}.`]; }, 14);
  B.tpl(MO, (r) => { const v = T.pick(r, [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 90]); const n = v / 5;
    return [`How many nickels equal ${v}¢?`, near(r, n, [1, -1, 2, v / 10]), 0, `${v} ÷ 5 = ${n}.`]; }, 10);
  B.tpl(MO, (r) => { const v = T.pick(r, [30, 40, 50, 60, 70, 80, 90, 100]); const n = v / 10;
    return [`How many dimes equal ${v}¢?`, near(r, n, [1, -1, 2, v / 5]), 0, `${v} ÷ 10 = ${n}.`]; }, 8);
  B.add(MO, `
How many cents is a penny worth?|1¢|5¢|10¢|=>A penny is 1 cent.
How many cents is a nickel worth?|5¢|1¢|10¢|=>A nickel is 5 cents.
How many cents is a dime worth?|10¢|5¢|25¢|=>A dime is 10 cents.
How many cents is a quarter worth?|25¢|10¢|50¢|=>A quarter is 25 cents.
Which coin is worth the most?|quarter|dime|nickel|=>25¢ is the most.
Which coin is the smallest in size but worth more than a nickel?|dime|quarter|penny|=>A dime is small but worth 10¢.
How many quarters equal one dollar?|4|2|10|=>4 × 25¢ = $1.00.
How many dimes equal one dollar?|10|5|100|=>10 × 10¢ = $1.00.
How many nickels equal one dollar?|20|10|5|=>20 × 5¢ = $1.00.
How many pennies equal one dollar?|100|10|50|=>100 × 1¢ = $1.00.
How many cents are in a dollar?|100|10|1,000|=>1 dollar = 100 cents.
Which is the same as $1.50?|1 dollar and 50 cents|150 dollars|15 cents|=>The decimal point separates dollars from cents.
Which is the same as 3 quarters?|75¢|30¢|60¢|=>3 × 25 = 75.
Which set of coins makes 30¢?|1 quarter and 1 nickel|3 dimes and 1 nickel|2 quarters|=>25 + 5 = 30.
Which set of coins makes 45¢?|1 quarter and 2 dimes|2 quarters|4 nickels|=>25 + 20 = 45.
What do you call money you get back when you pay more than the price?|change|profit|tax|=>Change = paid − cost.
Which sign shows cents?|¢|$|%|=>¢ is the cent sign.
Which sign shows dollars?|$|¢|#|=>$ is the dollar sign.
True or false: $2.50 is more than $2.05.|True|False|=>50 cents is more than 5 cents.
True or false: 2 dimes are worth more than 1 quarter.|False|True|=>20¢ is less than 25¢.
`);

  /* ---------- time, calendar, temperature ---------- */
  const TI = K("time");
  const clock = (m) => { const h = Math.floor(m / 60) % 12 || 12, mm = m % 60; return h + ":" + String(mm).padStart(2, "0"); };
  B.tpl(TI, (r) => { const start = T.ri(r, 1, 11) * 60 + T.pick(r, [0, 15, 30, 45]), d = T.pick(r, [10, 15, 20, 25, 30, 35, 40, 45, 50, 55]), end = start + d;
    return [`A show starts at ${clock(start)} and ends at ${clock(end)}. How many minutes long is it?`, near(r, d, [-5, 5, -10, 10, 60]), 0, `From ${clock(start)} to ${clock(end)} is ${d} minutes.`]; }, 14);
  B.tpl(TI, (r) => { const start = T.ri(r, 1, 11) * 60 + T.pick(r, [0, 5, 10, 15, 20, 30, 40, 45]), d = T.pick(r, [10, 15, 20, 25, 30, 35, 40, 45, 50]), end = start + d;
    return [`What time is ${d} minutes after ${clock(start)}?`, T.mc(r, clock(end), [clock(end + 5), clock(end - 5), clock(end + 10), clock(end - 10)], (rr) => clock(T.ri(rr, 60, 700))), 0, `${clock(start)} + ${d} minutes = ${clock(end)}.`]; }, 14);
  B.tpl(TI, (r) => { const m = T.pick(r, [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]), h = T.ri(r, 1, 11);
    return [`The minute hand points to the ${m / 5}. The hour hand is just past ${h}. What time is it?`, T.mc(r, `${h}:${String(m).padStart(2, "0")}`, [`${m / 5}:${String(h * 5 % 60).padStart(2, "0")}`, `${h}:${String((m + 5) % 60).padStart(2, "0")}`, `${h + 1}:${String(m).padStart(2, "0")}`].filter((x) => x !== `${h}:${String(m).padStart(2, "0")}`), (rr) => `${T.ri(rr, 1, 12)}:${String(T.pick(rr, [0, 15, 30, 45])).padStart(2, "0")}`), 0, `Each number is 5 minutes; the ${m / 5} means ${m} minutes after ${h}.`]; }, 12);
  B.tpl(TI, (r) => { const h = T.ri(r, 1, 6); return [`${h} hours = ___ minutes`, near(r, h * 60, [-60, 60, 30, 100]), 0, `1 hour = 60 minutes, so ${h} hours = ${h * 60} minutes.`]; }, 6);
  B.tpl(TI, (r) => { const m = T.pick(r, [120, 180, 240, 300, 360]); return [`${m} minutes = ___ hours`, near(r, m / 60, [1, -1, 2]), 0, `${m} ÷ 60 = ${m / 60}.`]; }, 5);
  B.tpl(TI, (r) => { const t = T.ri(r, 40, 85), up = T.ri(r, 0, 1) === 0, d = T.ri(r, 3, 15); const a = up ? t + d : t - d;
    return [`The temperature is ${t}°F. It ${up ? "rises" : "falls"} ${d} degrees. What is the new temperature?`, near(r, a, [-d, d, 1, 10].filter((x) => x), (x) => x + "°F"), 0, `${t} ${up ? "+" : "−"} ${d} = ${a}°F.`]; }, 12);
  B.tpl(TI, (r) => { const d = T.ri(r, 2, 6); return [`How many days are in ${d} weeks?`, near(r, d * 7, [-7, 7, 1, -1]), 0, `${d} × 7 = ${d * 7}.`]; }, 5);
  B.tpl(TI, (r) => { const h = T.ri(r, 1, 11), mins = T.pick(r, [10, 20, 40, 50]); const ap = T.pick(r, ["a.m.", "p.m."]);
    return [`Which time is a good fit for lunch: ${h}:${String(mins).padStart(2, "0")} ${ap}?`.replace(/Which.*/, `${ap === "a.m." ? "Is" : "Is"} ${h}:${String(mins).padStart(2, "0")} ${ap} in the morning or afternoon/evening?`), ap === "a.m." ? ["morning (a.m.)", "afternoon or evening (p.m.)"] : ["afternoon or evening (p.m.)", "morning (a.m.)"], 0, `a.m. is midnight to noon; p.m. is noon to midnight.`]; }, 8);
  B.add(TI, `
How many minutes are in one hour?|60|100|30|=>1 hour = 60 minutes.
How many hours are in one day?|24|12|60|=>A day has 24 hours.
How many days are in one week?|7|5|10|=>7 days in a week.
How many months are in a year?|12|10|52|=>12 months in a year.
How many weeks are in a year?|52|12|365|=>About 52 weeks.
How many days are in a typical year?|365|360|366|=>365 (366 in a leap year).
Which month has 28 days (29 in a leap year)?|February|January|April|=>February is the shortest month.
Which month has 30 days?|April|March|July|=>April, June, September, November.
Which month has 31 days?|July|June|April|=>July has 31 days.
Which comes right after Wednesday?|Thursday|Tuesday|Friday|=>Wednesday, Thursday, Friday.
Which comes right before October?|September|November|August|=>September comes before October.
What does the short hand on a clock show?|hours|minutes|seconds|=>The short hand is the hour hand.
What does the long hand on a clock show?|minutes|hours|days|=>The long hand is the minute hand.
When the minute hand is on 6, how many minutes past the hour is it?|30|6|15|=>6 × 5 = 30.
When the minute hand is on 3, how many minutes past the hour is it?|15|3|30|=>3 × 5 = 15.
When the minute hand is on 12, it is…|o'clock|half past|quarter past|=>The minute hand on 12 is exactly on the hour.
Another way to say 'quarter past 4' is…|4:15|4:45|3:45|=>A quarter hour is 15 minutes.
Another way to say 'half past 7' is…|7:30|6:30|7:15|=>Half past is 30 minutes after.
Another way to say 'quarter to 9' is…|8:45|9:15|8:15|=>A quarter to 9 is 15 minutes before 9.
True or false: 1:00 a.m. is in the middle of the night.|True|False|=>a.m. hours start at midnight.
True or false: 3:00 p.m. is in the afternoon.|True|False|=>p.m. is after noon.
Which unit would you use to measure how long it takes to brush your teeth?|minutes|hours|days|=>Brushing takes a couple of minutes.
Which unit would you use to measure how long summer vacation is?|weeks|seconds|minutes|=>Vacation lasts weeks.
Which temperature is the freezing point of water?|32°F|0°F|100°F|=>Water freezes at 32°F (0°C).
Which temperature is the boiling point of water?|212°F|100°F|32°F|=>Water boils at 212°F (100°C).
Which tool measures temperature?|thermometer|ruler|scale|=>A thermometer shows how hot or cold.
Which temperature feels hottest?|95°F|65°F|35°F|=>Higher numbers are hotter.
Which temperature is best for wearing a heavy winter coat?|25°F|75°F|95°F|=>Cold weather means a coat.
`);

  /* ---------- measurement ---------- */
  const ME = K("measurement");
  B.tpl(ME, (r) => { const l = T.ri(r, 3, 15), w = T.ri(r, 2, 12); return [`A rectangle is ${l} cm long and ${w} cm wide. What is its perimeter?`, near(r, 2 * (l + w), [-2, 2, l + w, l * w].filter((x) => x !== 2 * (l + w)), (x) => x + " cm").map((x) => x), 0, `Add all sides: ${l} + ${w} + ${l} + ${w} = ${2 * (l + w)} cm.`]; }, 14);
  B.tpl(ME, (r) => { const l = T.ri(r, 3, 12), w = T.ri(r, 2, 10); return [`A rectangle is ${l} units long and ${w} units wide. What is its area?`, near(r, l * w, [l + w, 2 * (l + w), l, l * w + l]), 0, `Area = ${l} × ${w} = ${l * w} square units.`]; }, 14);
  B.tpl(ME, (r) => { const s = T.ri(r, 2, 12); return [`A square has sides of ${s} inches. What is its perimeter?`, near(r, 4 * s, [-4, 4, s * s, 2 * s].filter((x) => x !== 4 * s)), 0, `4 × ${s} = ${4 * s} inches.`]; }, 10);
  B.tpl(ME, (r) => { const s = T.ri(r, 2, 12); return [`A square has sides of ${s} feet. What is its area?`, near(r, s * s, [4 * s, 2 * s, s + s * 2, s * s + 1]), 0, `${s} × ${s} = ${s * s} square feet.`]; }, 8);
  B.tpl(ME, (r) => { const a = T.ri(r, 2, 12), b = T.ri(r, 2, 12), c = T.ri(r, 2, 12); return [`A triangle has sides ${a} in, ${b} in, and ${c} in. What is its perimeter?`, near(r, a + b + c, [-1, 1, a * b, 2]), 0, `${a} + ${b} + ${c} = ${a + b + c} inches.`]; }, 10);
  B.tpl(ME, (r) => { const ft = T.ri(r, 2, 9); return [`${ft} feet = ___ inches`, near(r, ft * 12, [-12, 12, ft * 10, ft * 3]), 0, `1 foot = 12 inches. ${ft} × 12 = ${ft * 12}.`]; }, 8);
  B.tpl(ME, (r) => { const y = T.ri(r, 2, 9); return [`${y} yards = ___ feet`, near(r, y * 3, [-3, 3, y * 12, y * 2]), 0, `1 yard = 3 feet. ${y} × 3 = ${y * 3}.`]; }, 8);
  B.tpl(ME, (r) => { const m = T.ri(r, 2, 9); return [`${m} meters = ___ centimeters`, near(r, m * 100, [-100, 100, m * 10, m * 1000]), 0, `1 meter = 100 cm.`]; }, 8);
  B.tpl(ME, (r) => { const k = T.ri(r, 2, 9); return [`${k} kilograms = ___ grams`, near(r, k * 1000, [-1000, 1000, k * 100, k * 10]), 0, `1 kg = 1,000 g.`]; }, 8);
  B.tpl(ME, (r) => { const l = T.ri(r, 2, 9); return [`${l} liters = ___ milliliters`, near(r, l * 1000, [-1000, 1000, l * 100, l * 10]), 0, `1 L = 1,000 mL.`]; }, 8);
  B.tpl(ME, (r) => { const g = T.ri(r, 2, 8); return [`${g} gallons = ___ quarts`, near(r, g * 4, [-4, 4, g * 2, g * 8]), 0, `1 gallon = 4 quarts.`]; }, 6);
  B.tpl(ME, (r) => { const q = T.ri(r, 2, 8); return [`${q} quarts = ___ cups`, near(r, q * 4, [-4, 4, q * 2, q * 8]), 0, `1 quart = 4 cups.`]; }, 6);
  B.tpl(ME, (r) => { const p = T.ri(r, 2, 8); return [`${p} pounds = ___ ounces`, near(r, p * 16, [-16, 16, p * 10, p * 8]), 0, `1 pound = 16 ounces.`]; }, 6);
  B.add(ME, `
What does perimeter measure?|the distance around a shape|the space inside a shape|the height of a shape|=>Perimeter is the outside edge added up.
What does area measure?|the space inside a shape|the distance around a shape|the number of sides|=>Area counts the square units that cover a shape.
Which unit is used for area?|square units|units|cubic units|=>Area is measured in square units.
Which unit would you use to measure the length of a pencil?|inches|miles|gallons|=>A pencil is a few inches long.
Which unit would you use to measure the distance from your house to another city?|miles|inches|ounces|=>Long distances use miles.
Which unit would you use to measure the weight of a cat?|pounds|inches|cups|=>Pounds measure weight.
Which unit would you use to measure how much milk is in a jug?|gallons|feet|pounds|=>Gallons measure liquid.
Which unit would you use to measure the length of a classroom?|feet|ounces|cups|=>A classroom is measured in feet.
Which is longer: 1 foot or 1 yard?|1 yard|1 foot|They are the same|=>A yard is 3 feet.
Which is heavier: 1 pound or 1 ounce?|1 pound|1 ounce|They are the same|=>A pound is 16 ounces.
Which is the larger amount: 1 quart or 1 cup?|1 quart|1 cup|They are the same|=>1 quart = 4 cups.
Which is longer: 1 meter or 1 centimeter?|1 meter|1 centimeter|They are the same|=>1 meter = 100 cm.
How many sides does a rectangle have?|4|3|6|=>A rectangle has four sides.
A rectangle has 4 equal sides only if it is a…|square|triangle|pentagon|=>A square is a special rectangle.
Which is an estimate for the length of a paper clip?|about 1 inch|about 1 foot|about 1 yard|=>A paper clip is about an inch.
Which is an estimate for the weight of an apple?|about 6 ounces|about 6 pounds|about 60 pounds|=>An apple weighs a few ounces.
True or false: 12 inches equals 1 foot.|True|False|=>12 inches = 1 foot.
True or false: 100 centimeters equals 1 meter.|True|False|=>100 cm = 1 m.
True or false: 1,000 grams equals 1 kilogram.|True|False|=>Kilo means 1,000.
True or false: Area is measured in feet, not square feet.|False|True|=>Area is measured in square feet.
`);

  /* ---------- geometry ---------- */
  const GE = K("geometry");
  const shapes = [["triangle", 3], ["quadrilateral", 4], ["pentagon", 5], ["hexagon", 6], ["heptagon", 7], ["octagon", 8], ["nonagon", 9], ["decagon", 10], ["square", 4], ["rectangle", 4], ["rhombus", 4], ["trapezoid", 4]];
  const g = [];
  shapes.forEach(([s, n]) => {
    g.push(`How many sides does ${s === "octagon" ? "an" : "a"} ${s} have?|${n}|${n + 1}|${n - 1}|${n + 2}|=>The ${s} has ${n} sides.`);
    g.push(`How many vertices (corners) does ${s === "octagon" ? "an" : "a"} ${s} have?|${n}|${n + 1}|${n - 1}|${n + 2}|=>The ${s} has ${n} vertices.`);
  });
  [[3, "triangle"], [4, "quadrilateral"], [5, "pentagon"], [6, "hexagon"], [8, "octagon"], [10, "decagon"]].forEach(([n, s]) => g.push(`What is the name of a polygon with ${n} sides?|${s}|${shapes.filter((x) => x[0] !== s && x[1] !== n)[n % 5][0]}|${shapes.filter((x) => x[0] !== s && x[1] !== n)[(n + 2) % 5 + 1][0]}|=>${n} sides is a ${s}.`));
  g.push(...`
Which is a quadrilateral?|rhombus|triangle|hexagon|=>Quadrilaterals have 4 sides.
Which shape always has 4 equal sides and 4 right angles?|square|rectangle|trapezoid|=>A square is the special case.
Which shape has opposite sides equal and 4 right angles?|rectangle|triangle|circle|=>A rectangle has 4 right angles.
Which shape has exactly one pair of parallel sides?|trapezoid|rectangle|square|=>A trapezoid has one pair of parallel sides.
Which shape has 4 equal sides but its angles are not all right angles?|rhombus|square|rectangle|=>A rhombus can look like a tilted square.
A right angle measures…|90°|45°|180°|=>A right angle is a square corner.
An angle less than a right angle is called…|acute|obtuse|straight|=>Acute angles are small.
An angle greater than a right angle but less than 180° is called…|obtuse|acute|right|=>Obtuse angles are wide.
A straight angle measures…|180°|90°|360°|=>A straight line is 180°.
Lines that never meet and stay the same distance apart are…|parallel|perpendicular|intersecting|=>Like railroad tracks.
Lines that cross to make a right angle are…|perpendicular|parallel|curved|=>They meet at 90°.
Lines that cross each other are…|intersecting|parallel|congruent|=>They share a point.
A line segment…|has two endpoints|goes on forever both ways|goes on forever in one direction|=>A segment is part of a line.
A ray…|has one endpoint and goes on forever in one direction|has two endpoints|goes on forever both ways|=>A ray starts at a point and goes on.
A line…|goes on forever in both directions|has two endpoints|is always curved|=>A line has no endpoints.
How many right angles does a rectangle have?|4|2|0|=>All 4 corners are right angles.
How many right angles does a typical triangle have (right triangle)?|1|3|4|=>A right triangle has exactly 1 right angle.
Which is NOT a polygon?|circle|triangle|square|=>A polygon has straight sides only.
Which is a 3D shape?|cube|square|triangle|=>3D shapes have length, width, and height.
Which 3D shape has 6 square faces?|cube|sphere|cone|=>A cube has 6 faces.
Which 3D shape looks like a ball?|sphere|cylinder|pyramid|=>A sphere is round.
Which 3D shape looks like a can?|cylinder|cone|cube|=>A cylinder has 2 circle faces.
Which 3D shape looks like an ice cream cone?|cone|cylinder|sphere|=>A cone has a circle base and a point.
Which 3D shape has a square base and triangle faces that meet at a point?|square pyramid|cone|cube|=>The Egyptian pyramids are this shape.
True or false: All squares are rectangles.|True|False|=>A square has 4 right angles and opposite sides equal.
True or false: All rectangles are squares.|False|True|=>Rectangles can have different length sides.
True or false: A triangle can have 4 sides.|False|True|=>A triangle always has 3 sides.
True or false: A shape with 5 sides is a pentagon.|True|False|=>Pent- means 5.
True or false: A hexagon has 8 sides.|False|True|=>A hexagon has 6 sides; an octagon has 8.
A shape has 0 sides and 0 vertices. It is a…|circle|triangle|square|=>A circle has a curved edge.
`.split("\n").filter((x) => x.trim()));
  B.add(GE, g.join("\n"));

  /* ---------- data and graphs ---------- */
  const DA = K("data");
  B.tpl(DA, (r) => { const f1 = ["apples", "bananas", "grapes", "oranges"]; const v = f1.map(() => T.ri(r, 3, 15)); const i = T.ri(r, 0, 3), j = (i + T.ri(r, 1, 3)) % 4; if (v[i] === v[j]) return null; const hi = v[i] > v[j] ? i : j, lo = hi === i ? j : i;
    return [`A bar graph shows how many children chose each fruit: ${f1.map((x, k) => x + " " + v[k]).join(", ")}. How many more chose ${f1[hi]} than ${f1[lo]}?`, near(r, v[hi] - v[lo], [1, -1, 2, v[hi] + v[lo]]), 0, `${v[hi]} − ${v[lo]} = ${v[hi] - v[lo]}.`]; }, 14);
  B.tpl(DA, (r) => { const f1 = ["dogs", "cats", "fish", "birds"]; const v = f1.map(() => T.ri(r, 2, 14)); const tot = v.reduce((a, b) => a + b, 0);
    return [`Votes for favorite pet: ${f1.map((x, k) => x + " " + v[k]).join(", ")}. How many votes were there in all?`, near(r, tot, [1, -1, 10, -10]), 0, `Add them all: ${v.join(" + ")} = ${tot}.`]; }, 12);
  B.tpl(DA, (r) => { const f1 = ["soccer", "swimming", "chess", "art"]; const v = [T.ri(r, 3, 9), T.ri(r, 10, 14), T.ri(r, 3, 9), T.ri(r, 3, 9)]; const mi = [...f1]; const m = f1[1];
    return [`Club sign-ups: ${f1.map((x, k) => x + " " + v[k]).join(", ")}. Which club is the most popular?`, T.mc(r, m, f1.filter((x) => x !== m)), 0, `${m} has the highest number (${v[1]}).`]; }, 8);
  B.tpl(DA, (r) => { const k = T.pick(r, [2, 5, 10]), s = T.ri(r, 3, 9); return [`In a pictograph, each ★ stands for ${k} books. A row has ${s} ★. How many books is that?`, near(r, k * s, [-k, k, s, s + k]), 0, `${s} × ${k} = ${k * s}.`]; }, 12);
  B.tpl(DA, (r) => { const g = T.ri(r, 2, 8), x = T.ri(r, 1, 4); return [`A tally chart shows ${g} groups of five tally marks and ${x} more marks. How many tallies is that?`, near(r, g * 5 + x, [-5, 5, g + x, 1]), 0, `${g} × 5 + ${x} = ${g * 5 + x}.`]; }, 10);
  B.tpl(DA, (r) => { const v = [T.ri(r, 3, 9), T.ri(r, 3, 9), T.ri(r, 3, 9)]; const mx = Math.max(...v), mn = Math.min(...v);
    return [`A graph shows 3 bars with heights ${v.join(", ")}. What is the difference between the tallest and shortest bar?`, near(r, mx - mn, [1, -1, 2, mx]), 0, `${mx} − ${mn} = ${mx - mn}.`]; }, 8);
  B.add(DA, `
Which graph uses pictures or symbols to show data?|pictograph|bar graph|line plot|=>A pictograph uses a key.
Which graph uses bars to compare amounts?|bar graph|pictograph|tally chart|=>Taller bars mean larger amounts.
What does a key in a pictograph tell you?|how many each picture stands for|the title|the colors|=>The key gives the value of each symbol.
What does the title of a graph tell you?|what the graph is about|how many bars there are|the answer to every question|=>The title names the topic.
What do the labels on a bar graph's axes tell you?|what is being counted and the categories|only the title|only the colors|=>Labels name each axis.
How many tally marks are in one bundle with a slash?|5|4|10|=>Four lines plus a slash make 5.
What is a tally chart used for?|counting with marks|measuring length|telling time|=>Tally marks count as you go.
A line plot uses what to show data above a number line?|X marks|bars|pictures|=>Each X stands for one data point.
Which tool helps you collect data by asking questions?|survey|calendar|ruler|=>A survey gathers answers.
In a survey, 8 chose red, 5 chose blue, and 2 chose green. Which color had the least?|green|blue|red|=>2 is the smallest number.
In a survey, 8 chose red, 5 chose blue, and 2 chose green. Which color had the most?|red|blue|green|=>8 is the biggest number.
True or false: A taller bar means a greater number.|True|False|=>Bar height shows the value.
True or false: A scale of 2 means each line on the graph goes up by 2.|True|False|=>A scale is the number step between lines.
True or false: A pictograph needs a key.|True|False|=>Without a key, you can't know the value of each picture.
Which question can be answered with a bar graph?|Which snack do most students like?|What time is it?|How many sides does a hexagon have?|=>Bar graphs compare categories.
What is the first step in making a graph?|collect the data|color the bars|write the title last|=>Start by gathering data.
`);

  /* ---------- patterns and equations ---------- */
  const PA = K("patterns");
  B.tpl(PA, (r) => { const s = T.ri(r, 2, 40), d = T.ri(r, 2, 12), seq = [0, 1, 2, 3].map((i) => s + i * d); return [`What is the next number in the pattern?{nl}${seq.join(", ")}, ___`, near(r, s + 4 * d, [-d, d, 1, 2 * d]), 0, `The rule is add ${d}. ${seq[3]} + ${d} = ${s + 4 * d}.`]; }, 16);
  B.tpl(PA, (r) => { const d = T.ri(r, 2, 9), s = T.ri(r, 50, 100), seq = [0, 1, 2, 3].map((i) => s - i * d); if (seq[3] - d < 0) return null; return [`What is the next number in the pattern?{nl}${seq.join(", ")}, ___`, near(r, s - 4 * d, [-d, d, 1, 2 * d]), 0, `The rule is subtract ${d}. ${seq[3]} − ${d} = ${s - 4 * d}.`]; }, 12);
  B.tpl(PA, (r) => { const s = T.ri(r, 5, 30), d = T.ri(r, 3, 9), seq = [0, 1, 2, 3, 4].map((i) => s + i * d); const miss = T.ri(r, 1, 3);
    return [`Find the missing number.{nl}${seq.map((x, i) => (i === miss ? "___" : x)).join(", ")}`, near(r, seq[miss], [-d, d, 1, -1]), 0, `The rule is add ${d}, so the missing number is ${seq[miss]}.`]; }, 14);
  B.tpl(PA, (r) => { const d = T.ri(r, 2, 9), s = T.ri(r, 1, 5) * d; return [`What is the rule for this pattern?{nl}${[0, 1, 2, 3].map((i) => s + i * d).join(", ")}`, T.mc(r, `add ${d}`, [`subtract ${d}`, `add ${d + 1}`, `multiply by ${d}`, `add ${d - 1 || 10}`]), 0, `Each number is ${d} more than the one before.`]; }, 10);
  B.tpl(PA, (r) => { const a = T.ri(r, 2, 40), t = a + T.ri(r, 3, 40); return [`n + ${a} = ${t}. What is n?`, near(r, t - a, [-1, 1, 10, -10]), 0, `n = ${t} − ${a} = ${t - a}.`]; }, 12);
  B.tpl(PA, (r) => { const a = T.ri(r, 2, 9), b = T.ri(r, 2, 9); return [`${a} × n = ${a * b}. What is n?`, near(r, b, [-1, 1, a, 2]), 0, `n = ${a * b} ÷ ${a} = ${b}.`]; }, 12);
  B.tpl(PA, (r) => { const a = T.ri(r, 5, 40), b = T.ri(r, 3, a); return [`n − ${b} = ${a - b}. What is n?`, near(r, a, [-1, 1, b, 10]), 0, `n = ${a - b} + ${b} = ${a}.`]; }, 10);
  B.tpl(PA, (r) => { const nm1 = nm(r), a = T.ri(r, 3, 9), b = T.ri(r, 2, 9); return [`${nm1} saves $${a} each week. How much does ${nm1} save in ${b} weeks?`, near(r, a * b, [a, b, a + b, a * (b - 1)]).map((x) => x), 0, `${b} weeks × $${a} = $${a * b}.`]; }, 10);
  B.add(PA, `
What is a pattern?|something that repeats or changes in a regular way|a random list|a single number|=>Patterns follow a rule.
What is a rule in a number pattern?|what you do to get from one number to the next|the last number|the first number|=>The rule tells how the pattern changes.
Which pattern follows the rule 'add 5'?|5, 10, 15, 20|5, 7, 9, 11|20, 15, 10, 5|=>Each term goes up by 5.
Which pattern follows the rule 'subtract 2'?|20, 18, 16, 14|20, 22, 24, 26|20, 10, 5, 2|=>Each term goes down by 2.
Which pattern is a growing pattern?|2, 4, 6, 8|8, 6, 4, 2|5, 5, 5, 5|=>The numbers increase.
Which pattern is a shrinking pattern?|9, 7, 5, 3|3, 5, 7, 9|4, 4, 4, 4|=>The numbers decrease.
What is the next shape?{nl}△ ○ △ ○ △ ___|○|△|□|=>The pattern repeats △ ○.
What is the next letter?{nl}A B C A B C A B ___|C|A|D|=>The pattern repeats A B C.
Which number is even?|46|47|49|=>Even numbers end in 0, 2, 4, 6, or 8.
Which number is odd?|83|84|86|=>Odd numbers end in 1, 3, 5, 7, or 9.
Which set shows only odd numbers?|3, 7, 11, 15|2, 4, 6, 8|1, 2, 3, 4|=>All end in odd digits.
What is the missing symbol?{nl}5 + 4 ___ 9|=|<|>|=>5 + 4 is exactly 9.
Which equation is true?|3 + 5 = 4 + 4|3 + 5 = 4 + 5|3 + 5 = 9|=>Both sides equal 8.
Which equation is NOT true?|6 + 2 = 7 + 2|6 + 2 = 8|6 + 2 = 4 + 4|=>6 + 2 = 8 but 7 + 2 = 9.
What does the equal sign (=) mean?|both sides have the same value|add|the answer comes next|=>It means 'is the same as.'
What is the unknown in 6 + ? = 15?|9|21|10|=>15 − 6 = 9.
What is the unknown in ? − 4 = 10?|14|6|40|=>10 + 4 = 14.
What is the unknown in 3 × ? = 12?|4|9|15|=>12 ÷ 3 = 4.
What is the unknown in 20 ÷ ? = 5?|4|100|15|=>20 ÷ 5 = 4.
Which expression shows 'a number plus 7'?|n + 7|n − 7|7 − n|=>Plus means add.
`);
})();
