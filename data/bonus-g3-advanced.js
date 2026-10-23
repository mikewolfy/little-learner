/* Grade 3 Gifted & Advanced: bonus question banks. */
(function () {
  "use strict";
  const B = window.BONUS, T = B.T, K = (u) => "3/advanced/" + u;
  const A = (u, t) => B.add(K(u), t.split("\n").filter((x) => x.trim()).join("\n"));
  const f = (n) => n.toLocaleString("en-US");
  const near = (r, right, ds, fmt) => { fmt = fmt || String; return T.mc(r, fmt(right), ds.map((d) => right + d).filter((x) => x >= 0 && x !== right).map(fmt), (rr) => fmt(Math.abs(right + T.ri(rr, -15, 15)))); };
  const NAMES = ["Mia", "Noah", "Ava", "Liam", "Zoe", "Ben", "Lily", "Sam", "Ella", "Max", "Ruby", "Leo"];
  const nm = (r) => T.pick(r, NAMES);

  /* ---- multi-digit multiplication ---- */
  const MM = K("multi-digit-multiplication");
  B.tpl(MM, (r) => { const a = T.ri(r, 12, 99), b = T.ri(r, 2, 9); return [`${a} × ${b} = ?`, near(r, a * b, [-10, 10, -b, b, 100]), 0, `${a} × ${b} = ${a * b}.`]; }, 20);
  B.tpl(MM, (r) => { const a = T.ri(r, 102, 499), b = T.ri(r, 2, 9); return [`${a} × ${b} = ?`, near(r, a * b, [-10, 10, -100, 100]), 0, `${a} × ${b} = ${f(a * b)}.`]; }, 14);
  B.tpl(MM, (r) => { const a = T.ri(r, 2, 9), b = T.ri(r, 1, 9) * 10 + T.ri(r, 0, 9); return [`${b} × ${a}: what is the partial product of the tens (${Math.floor(b / 10) * 10} × ${a})?`, near(r, Math.floor(b / 10) * 10 * a, [-10, 10, -100, 100]), 0, `${Math.floor(b / 10) * 10} × ${a} = ${Math.floor(b / 10) * 10 * a}.`]; }, 10);
  B.tpl(MM, (r) => { const a = T.ri(r, 13, 48), b = T.ri(r, 3, 9); const t = Math.floor(a / 10) * 10, o = a % 10; return [`Break apart ${a} × ${b}. Which is correct?`, T.mc(r, `${t} × ${b} + ${o} × ${b}`, [`${t} × ${b} + ${o}`, `${t} + ${o} × ${b}`, `${t} × ${o} + ${b}`]), 0, `Distribute: (${t} + ${o}) × ${b} = ${t} × ${b} + ${o} × ${b} = ${a * b}.`]; }, 10);
  B.tpl(MM, (r) => { const n = nm(r), a = T.ri(r, 12, 60), b = T.ri(r, 3, 9); return [`${n} buys ${b} packs of cards. Each pack has ${a} cards. How many cards does ${n} have?`, near(r, a * b, [-a, a, -10, 10]), 0, `${b} × ${a} = ${a * b}.`]; }, 14);
  B.tpl(MM, (r) => { const a = T.ri(r, 12, 98), b = T.ri(r, 3, 9); const est = Math.round(a / 10) * 10 * b; return [`Estimate ${a} × ${b} by rounding ${a} to the nearest ten.`, near(r, est, [-b * 10, b * 10, 100, -100]), 0, `Round ${a} to ${Math.round(a / 10) * 10}, then ${Math.round(a / 10) * 10} × ${b} = ${est}.`]; }, 10);
  B.tpl(MM, (r) => { const a = T.ri(r, 2, 9), b = T.ri(r, 2, 9), m = T.pick(r, [10, 100]); return [`${a * b} × ${m} = ?`, near(r, a * b * m, [-m, m, a * b, a * b * m * 10]), 0, `Multiply by ${m}: add ${m === 10 ? "one zero" : "two zeros"}.`]; }, 10);
  B.tpl(MM, (r) => { const a = T.ri(r, 2, 9), b = T.ri(r, 11, 59); const p = a * b; return [`If ${a} × ___ = ${p}, what is the missing number?`, near(r, b, [-1, 1, 10, -10]), 0, `${p} ÷ ${a} = ${b}.`]; }, 10);
  B.tpl(MM, (r) => { const a = T.ri(r, 12, 40), b = T.ri(r, 2, 6); return [`An array has ${b} rows of ${a}. Which equation finds the total?`, [`${b} × ${a}`, `${b} + ${a}`, `${a} − ${b}`, `${a} ÷ ${b}`], 0, `Rows × columns.`]; }, 6);
  B.tpl(MM, (r) => { const a = T.ri(r, 12, 99), b = T.ri(r, 3, 9); const c = T.ri(r, 12, 99), d = T.ri(r, 3, 9); const bigger = a * b >= c * d ? `${a} × ${b}` : `${c} × ${d}`; const smaller = a * b >= c * d ? `${c} × ${d}` : `${a} × ${b}`; if (a * b === c * d) return null; return [`Which is greater: ${a} × ${b} or ${c} × ${d}?`, [bigger, smaller], 0, `${a} × ${b} = ${a * b}; ${c} × ${d} = ${c * d}.`]; }, 12);
  A("multi-digit-multiplication", `
What is a partial product?|one part of a multiplication problem before adding|the final answer|a factor|=>Break the problem into pieces.
Which property lets you write 6 × 14 as 6 × 10 + 6 × 4?|distributive property|commutative property|identity property|=>Distribute across a sum.
What is the area model for 3 × 24?|3 × 20 plus 3 × 4|3 + 20 + 4|24 ÷ 3|=>Split 24 into 20 + 4.
What is 5 × 40?|200|45|20|=>5 × 4 = 20; times 10 = 200.
What is 6 × 50?|300|56|30|=>6 × 5 = 30; times 10 = 300.
What is 8 × 70?|560|78|56|=>8 × 7 = 56; times 10 = 560.
What is 9 × 30?|270|39|90|=>9 × 3 = 27; times 10 = 270.
What is 4 × 25?|100|29|50|=>4 quarters make 100.
What is 3 × 33?|99|36|66|=>3 × 30 + 3 × 3 = 99.
What is 7 × 15?|105|22|85|=>7 × 10 + 7 × 5 = 105.
What is 2 × 125?|250|127|225|=>Double 125.
What is 5 × 18?|90|23|85|=>Half of 10 × 18.
True or false: 12 × 4 = 48.|True|False|=>12 × 4 = 48.
True or false: 15 × 6 = 80.|False|True|=>15 × 6 = 90.
True or false: Multiplying by 10 adds one zero to a whole number.|True|False|=>25 × 10 = 250.
True or false: 3 × 24 equals 3 × 20 + 3 × 4.|True|False|=>Distributive property.
Which is the best estimate for 49 × 6?|300|200|400|=>50 × 6 = 300.
Which is the best estimate for 31 × 8?|240|300|200|=>30 × 8 = 240.
How many digits could a 2-digit × 1-digit product have?|2 or 3|only 2|only 4|=>Example: 12 × 2 = 24 and 99 × 9 = 891.
What is the largest product you can get from a 2-digit number times a 1-digit number?|891|999|900|=>99 × 9 = 891.
What is the smallest product you can get from a 2-digit number times a 1-digit number (excluding 0 and 1)?|20|10|12|=>10 × 2 = 20.
`);

  /* ---- fraction reasoning ---- */
  const FA = K("fraction-reasoning");
  B.tpl(FA, (r) => { const d = T.ri(r, 2, 6), n = T.ri(r, 1, d - 1), m = T.ri(r, 2, 5); return [`${n}/${d} = ___/${d * m}`, near(r, n * m, [-1, 1, m, 2]), 0, `Multiply numerator and denominator by ${m}.`]; }, 14);
  B.tpl(FA, (r) => { const d = T.ri(r, 2, 6), m = T.ri(r, 2, 5), n = T.ri(r, 1, d - 1); return [`${n * m}/${d * m} = ___/${d}`, near(r, n, [-1, 1, m]), 0, `Divide the top and bottom by ${m}.`]; }, 10);
  B.tpl(FA, (r) => { const d = T.pick(r, [3, 4, 5, 6, 8, 10]), a = T.ri(r, 1, d - 2), b = T.ri(r, a + 1, d - 1); return [`${a}/${d} + ${b - a}/${d} = ?`, T.mc(r, `${b}/${d}`, [`${b}/${d * 2}`, `${a + b - a + 1}/${d}`, `${a}/${d * 2}`, `${b + 1}/${d}`].filter((x) => x !== `${b}/${d}`), (rr) => `${T.ri(rr, 1, d)}/${d}`), 0, `Same denominator: add numerators, keep ${d}. ${a} + ${b - a} = ${b}.`]; }, 12);
  B.tpl(FA, (r) => { const d = T.pick(r, [4, 5, 6, 8, 10]), n = T.ri(r, 2, d - 1), m = T.ri(r, 1, n - 1); return [`${n}/${d} − ${m}/${d} = ?`, T.mc(r, `${n - m}/${d}`, [`${n - m}/${d - m}`, `${n + m}/${d}`, `${n - m}/0`.replace("/0", "/" + (d * 2)), `${m}/${d}`].filter((x) => x !== `${n - m}/${d}`), (rr) => `${T.ri(rr, 1, d)}/${d}`), 0, `Subtract numerators: ${n} − ${m} = ${n - m}; denominator stays ${d}.`]; }, 12);
  B.tpl(FA, (r) => { const m = T.ri(r, 2, 6), d = T.pick(r, [2, 3, 4, 5, 6]), n = T.ri(r, 1, d - 1); const tot = m * d; const ans = n * m; return [`What is ${n}/${d} of ${tot}?`, near(r, ans, [-m, m, tot, n]), 0, `${tot} ÷ ${d} = ${m}; ${m} × ${n} = ${ans}.`]; }, 14);
  B.tpl(FA, (r) => { const a = T.pick(r, [[1, 2], [1, 3], [1, 4], [2, 3], [3, 4], [2, 5], [3, 5]]), b = T.pick(r, [[1, 2], [1, 3], [1, 4], [2, 3], [3, 4], [2, 5], [3, 5]]); if (a[0] * b[1] === b[0] * a[1]) return null; const va = a[0] / a[1], vb = b[0] / b[1]; const hi = va > vb ? a : b, lo = va > vb ? b : a; return [`Which is greater: ${a[0]}/${a[1]} or ${b[0]}/${b[1]}?`, [`${hi[0]}/${hi[1]}`, `${lo[0]}/${lo[1]}`], 0, `${hi[0]}/${hi[1]} ≈ ${(hi[0] / hi[1]).toFixed(2)} and ${lo[0]}/${lo[1]} ≈ ${(lo[0] / lo[1]).toFixed(2)}.`]; }, 14);
  B.tpl(FA, (r) => { const d = T.pick(r, [4, 6, 8, 10]), n = T.ri(r, 1, d - 1); const half = d / 2; const rel = n < half ? "less than 1/2" : n > half ? "greater than 1/2" : "equal to 1/2"; return [`Is ${n}/${d} less than, equal to, or greater than 1/2?`, [rel, ["less than 1/2", "equal to 1/2", "greater than 1/2"].filter((x) => x !== rel)[0], ["less than 1/2", "equal to 1/2", "greater than 1/2"].filter((x) => x !== rel)[1]], 0, `Half of ${d} is ${half}; compare ${n} to ${half}.`]; }, 12);
  B.tpl(FA, (r) => { const h = T.pick(r, [6, 12, 8, 4, 3]); const n = nm(r); const frac = { 6: "1/4", 12: "1/2", 8: "1/3", 4: "1/6", 3: "1/8" }[h]; return [`What fraction of a day is ${h} hours?`, T.mc(r, frac, ["1/12", "1/5", "1/2", "1/3", "1/4", "1/6", "1/8"].filter((x) => x !== frac).slice(0, 3)), 0, `A day has 24 hours. ${h}/24 = ${frac}.`]; }, 5);
  B.tpl(FA, (r) => { const d = T.pick(r, [3, 4, 5, 6, 8]), w = T.ri(r, 1, 3), n = T.ri(r, 1, d - 1); const t = w * d + n; return [`${t}/${d} is the same as…`, T.mc(r, `${w} and ${n}/${d}`, [`${w + 1} and ${n}/${d}`, `${w} and ${n + 1}/${d}`, `${n} and ${w}/${d}`]), 0, `${t} ÷ ${d} = ${w} remainder ${n}.`]; }, 10);
  A("fraction-reasoning", `
Which fraction is equivalent to 1/2?|3/6|2/6|1/3|=>3/6 = 1/2.
Which fraction is equivalent to 2/3?|4/6|3/6|2/6|=>Multiply by 2/2.
Which fraction is equivalent to 3/4?|6/8|5/8|3/8|=>Multiply by 2/2.
Which fraction is equivalent to 1/4?|2/8|1/8|3/8|=>Multiply by 2/2.
Which fraction is equivalent to 1/5?|2/10|1/10|3/10|=>Multiply by 2/2.
Which fraction equals one whole?|7/7|1/7|7/1|=>Same top and bottom.
Which fraction is closest to 0?|1/10|1/2|9/10|=>Tiny piece of a whole.
Which fraction is closest to 1?|9/10|1/2|1/10|=>Almost a whole.
Which fraction is closest to 1/2?|5/10|1/10|9/10|=>5/10 = 1/2.
Which is the greatest?|3/4|1/2|1/4|=>Compare to a common denominator.
Which is the least?|1/8|1/4|1/2|=>The more pieces, the smaller each.
Which list is in order from least to greatest?|1/8, 1/4, 1/2|1/2, 1/4, 1/8|1/4, 1/8, 1/2|=>Fewer cuts = bigger pieces.
Which list is in order from greatest to least?|3/4, 1/2, 1/4|1/4, 1/2, 3/4|1/2, 3/4, 1/4|=>Compare quarters.
If two fractions have the same numerator, the one with the smaller denominator is…|greater|less|equal|=>1/3 > 1/4.
If two fractions have the same denominator, the one with the larger numerator is…|greater|less|equal|=>5/8 > 3/8.
Is 2/3 greater than 3/5?|yes|no|equal|=>10/15 > 9/15.
Is 3/8 greater than 1/2?|no|yes|equal|=>3/8 < 4/8.
How many sixths make 1/2?|3|2|6|=>3/6 = 1/2.
How many eighths make 3/4?|6|3|4|=>6/8 = 3/4.
How many twelfths make 1/3?|4|3|12|=>4/12 = 1/3.
What is 1/2 + 1/2?|1|1/4|2|=>Two halves make a whole.
What is 1/4 + 1/4 + 1/4 + 1/4?|1|4|1/16|=>Four quarters make a whole.
What is 1 − 1/4?|3/4|1/4|4/4|=>4/4 − 1/4 = 3/4.
What is 1 − 2/5?|3/5|2/5|1/5|=>5/5 − 2/5 = 3/5.
What is 3/4 of 8?|6|3|4|=>8 ÷ 4 = 2; 2 × 3 = 6.
What is 2/3 of 9?|6|3|2|=>9 ÷ 3 = 3; 3 × 2 = 6.
What is 1/5 of 20?|4|5|10|=>20 ÷ 5 = 4.
What is 1/8 of 24?|3|8|16|=>24 ÷ 8 = 3.
A pizza is cut into 8 equal slices and you eat 3. What fraction is left?|5/8|3/8|3/5|=>8 − 3 = 5 slices left.
Mia reads 2/5 of her book. What fraction is left?|3/5|2/5|5/2|=>1 − 2/5 = 3/5.
Which model shows 3/4?|a rectangle cut in 4 equal parts with 3 shaded|a rectangle cut in 3 equal parts with 4 shaded|a rectangle cut in 4 unequal parts|=>Fractions need equal parts.
Which number line point is 1/2?|halfway between 0 and 1|at 0|at 1|=>Halfway.
How many thirds are in 2?|6|2|3|=>Each whole is 3/3.
How many fourths are in 2?|8|4|2|=>Each whole is 4/4.
What is 5/5?|1|5|0|=>Same numerator and denominator.
What is 0/4?|0|4|1|=>Zero parts.
True or false: 4/8 = 1/2.|True|False|=>4/8 simplifies to 1/2.
True or false: 3/6 is greater than 1/2.|False|True|=>They are equal.
True or false: 2/3 is less than 3/4.|True|False|=>8/12 < 9/12.
True or false: 5/6 is less than 1.|True|False|=>5/6 is part of a whole.
`);

  /* ---- logic ---- */
  const LG = K("logic");
  B.tpl(LG, (r) => { const n = T.shuf(r, ["Mia", "Noah", "Ava", "Liam", "Zoe", "Ben", "Lily", "Sam"]).slice(0, 3); return [`${n[0]} is taller than ${n[1]}. ${n[1]} is taller than ${n[2]}. Who is the tallest?`, T.mc(r, n[0], [n[1], n[2]]), 0, `${n[0]} > ${n[1]} > ${n[2]}.`]; }, 12);
  B.tpl(LG, (r) => { const n = T.shuf(r, ["Mia", "Noah", "Ava", "Liam", "Zoe", "Ben", "Lily", "Sam"]).slice(0, 3); return [`${n[0]} is older than ${n[1]}. ${n[1]} is older than ${n[2]}. Who is the youngest?`, T.mc(r, n[2], [n[1], n[0]]), 0, `${n[0]} > ${n[1]} > ${n[2]}.`]; }, 12);
  B.tpl(LG, (r) => { const a = T.ri(r, 10, 40), b = a + T.pick(r, [10, 20, 30]); const m = T.pick(r, [5, 10]); const c = []; for (let x = a + 1; x < b; x++) if (x % m === 0 && x % 2 === 1 && m === 5) c.push(x); if (m === 10) for (let x = a + 1; x < b; x++) if (x % 10 === 0) c.push(x); if (c.length !== 1) return null; return [`I am a number between ${a} and ${b}. I am a multiple of ${m}${m === 5 ? " and I am odd" : ""}. What number am I?`, near(r, c[0], [-5, 5, 10, -10]), 0, `Check the multiples of ${m} in the range.`]; }, 12);
  B.tpl(LG, (r) => { const d = T.pick(r, ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]), k = T.ri(r, 2, 20); const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; const ans = days[(days.indexOf(d) + k) % 7]; return [`Today is ${d}. What day will it be in ${k} days?`, T.mc(r, ans, days.filter((x) => x !== ans).slice(0, 3).concat([])), 0, `${k} days = ${Math.floor(k / 7)} weeks and ${k % 7} days, so count ${k % 7} days forward.`]; }, 12);
  B.tpl(LG, (r) => { const n = T.ri(r, 3, 7); return [`${n} friends each shake hands once with every other friend. How many handshakes are there?`, near(r, n * (n - 1) / 2, [-1, 1, n, n * (n - 1)]), 0, `Each pair shakes once: ${n} × ${n - 1} ÷ 2 = ${n * (n - 1) / 2}.`]; }, 5);
  B.tpl(LG, (r) => { const s = T.ri(r, 10, 40), d = T.ri(r, 2, 8); if ((s + d) % 2) return null; const big = (s + d) / 2; return [`Two numbers add to ${s} and their difference is ${d}. What is the larger number?`, near(r, big, [-d, d, 1, -1]), 0, `Larger = (${s} + ${d}) ÷ 2 = ${big}.`]; }, 10);
  B.tpl(LG, (r) => { const a = T.ri(r, 2, 9), s = T.ri(r, 2, 6); const seq = [a, a * 2, a * 4, a * 8]; return [`What is the next number?{nl}${seq.join(", ")}, ___`, near(r, a * 16, [-a, a, a * 8, a * 4]), 0, `Each number doubles: ${seq[3]} × 2 = ${a * 16}.`]; }, 8);
  B.tpl(LG, (r) => { const k = T.ri(r, 2, 8); const seq = [1, 4, 9, 16, 25].slice(0, 4); return [`What is the next number?{nl}1, 4, 9, 16, ___`, ["25", "20", "24", "36"], 0, `These are square numbers: 5 × 5 = 25.`]; }, 1);
  B.tpl(LG, (r) => { const names = T.shuf(r, ["Mia", "Noah", "Ava", "Liam"]); const pets = T.shuf(r, ["dog", "cat", "fish", "bird"]); return [`${names[0]} has the ${pets[0]}. ${names[1]} does not have the ${pets[1]} or the ${pets[0]}. ${names[2]} has the ${pets[2]}. Which pet does ${names[1]} have?`, T.mc(r, pets[3], [pets[0], pets[1], pets[2]]), 0, `The ${pets[0]} and ${pets[2]} are taken, and ${names[1]} doesn't have the ${pets[1]}, so ${names[1]} has the ${pets[3]}.`]; }, 12);
  B.tpl(LG, (r) => { const a = T.ri(r, 3, 9), b = T.ri(r, 3, 9); const cats = T.pick(r, [["dog", "cat", "pig", "car"], ["apple", "grape", "plum", "chair"], ["red", "blue", "green", "table"], ["Monday", "Friday", "Sunday", "April"], ["square", "circle", "triangle", "rain"], ["pencil", "marker", "crayon", "spoon"]]); const odd = cats[3]; return [`Which word does NOT belong?{nl}${cats.slice(0).join(", ")}`, T.mc(r, odd, cats.slice(0, 3)), 0, `${odd} is not in the same group.`]; }, 6);
  A("logic", `
If all dogs are animals and Rex is a dog, then Rex is…|an animal|a cat|a plant|=>Rex belongs to the dog group, which is part of animals.
If all birds have feathers and a robin is a bird, then a robin…|has feathers|has fur|has scales|=>Birds have feathers.
If it is raining, the ground gets wet. The ground is dry. What can you conclude?|It is not raining.|It is raining.|It is snowing.|=>If it were raining, the ground would be wet.
If today is Wednesday, what day was it 3 days ago?|Sunday|Monday|Tuesday|=>Count back: Tuesday, Monday, Sunday.
If the day after tomorrow is Saturday, what day is today?|Thursday|Friday|Wednesday|=>Today + 2 = Saturday.
What day comes two days before Monday?|Saturday|Sunday|Friday|=>Sunday, Saturday.
How many sides do 3 triangles have altogether?|9|6|12|=>3 × 3.
How many legs do 4 dogs and 2 birds have altogether?|20|12|16|=>4 × 4 + 2 × 2 = 20.
A farmer has 10 animals: chickens and cows. They have 28 legs. How many cows are there?|4|6|2|=>4 cows = 16 legs, 6 chickens = 12 legs, total 28.
I am thinking of a number. I double it and add 3 to get 11. What is my number?|4|7|5|=>(11 − 3) ÷ 2 = 4.
I am thinking of a number. I add 5 and get 20. What is my number?|15|25|5|=>20 − 5 = 15.
I am thinking of a number. I multiply by 3 and get 21. What is my number?|7|18|63|=>21 ÷ 3 = 7.
I have 5 coins that add up to 30¢. Which coins could they be?|2 nickels and 2 dimes and 0 of others... no
`.split("\n").filter((l) => !/ no$/.test(l)).join("\n"));
  A("logic", `
How many different outfits can you make with 2 shirts and 3 pants?|6|5|3|=>2 × 3 = 6.
How many different sandwiches can you make with 3 breads and 4 fillings?|12|7|9|=>3 × 4 = 12.
How many ways can 3 children line up in a row?|6|3|9|=>3 × 2 × 1 = 6.
How many different 2-digit numbers can be made with the digits 1 and 2 (each used once)?|2|4|1|=>12 and 21.
If a clock strikes 3 times at 3 o'clock and it takes 2 seconds between each strike, how long does it take?|4 seconds|6 seconds|3 seconds|=>2 gaps × 2 seconds.
How many corners does a cube have?|8|6|12|=>A cube has 8 vertices.
How many faces does a cube have?|6|8|12|=>6 square faces.
How many edges does a cube have?|12|6|8|=>12 edges.
What comes next?{nl}A, C, E, G, ___|I|H|J|=>Skip a letter each time.
What comes next?{nl}Monday, Wednesday, Friday, ___|Sunday|Saturday|Thursday|=>Skip a day each time.
What comes next?{nl}2, 4, 8, 16, ___|32|24|20|=>Doubling.
What comes next?{nl}1, 3, 6, 10, ___|15|14|13|=>Add 2, 3, 4, then 5.
What comes next?{nl}100, 90, 80, 70, ___|60|65|50|=>Subtract 10.
What comes next?{nl}1, 1, 2, 3, 5, 8, ___|13|11|12|=>Each number is the sum of the two before it.
What comes next?{nl}○ □ ○ □ ○ ___|□|○|△|=>The pattern alternates.
Which shape is odd one out?{nl}△ △ □ △|□|△|none|=>Only one square.
A square has 4 sides. How many sides do 5 squares have altogether?|20|9|25|=>5 × 4.
There are 12 cookies. If you eat 1/3, how many are left?|8|4|9|=>1/3 of 12 is 4; 12 − 4 = 8.
If 2 apples cost $1, how much do 10 apples cost?|$5|$10|$2|=>10 ÷ 2 = 5 pairs.
If it takes 5 minutes to walk to school, how long to walk there and back?|10 minutes|5 minutes|15 minutes|=>Twice the trip.
If you flip a coin, what are the possible outcomes?|heads or tails|only heads|only tails|=>Two outcomes.
What is the chance of rolling a 7 on a regular die?|impossible|certain|likely|=>A die only has 1–6.
What is the chance of rolling a number from 1 to 6 on a regular die?|certain|impossible|unlikely|=>All outcomes are 1–6.
Which is more likely: rolling a 1 or rolling an even number on a die?|an even number|a 1|They are equally likely|=>3 even numbers vs 1.
Which statement is true?|If a shape is a square, then it is a rectangle.|If a shape is a rectangle, then it is a square.|All triangles have 4 sides.|=>Squares are special rectangles.
Which statement is false?|Every square is a triangle.|Every square is a rectangle.|Every square has 4 sides.|=>A square isn't a triangle.
Sam is in front of Ben. Ben is in front of Zoe. Who is last?|Zoe|Ben|Sam|=>Sam, Ben, Zoe.
Mia is third in line. How many people are in front of her?|2|3|1|=>The first and second are in front.
There are 5 people in a line. Zoe is in the middle. What position is she?|3rd|2nd|4th|=>The middle of 5 is 3.
A box has 3 red marbles and 2 blue marbles. What fraction are red?|3/5|2/5|3/2|=>3 red out of 5 total.
You have 4 coins that make 40¢. Which coins could they be?|3 dimes and 2 nickels (5 coins)... no
`.split("\n").filter((l) => !/ no$|\.\.\. no/.test(l)).join("\n"));

  /* ---- Greek & Latin roots ---- */
  (function () {
    const roots = [
      ["tele", "far", ["telephone", "television", "telescope"]], ["photo", "light", ["photograph", "photosynthesis", "photocopy"]], ["graph", "write or draw", ["autograph", "paragraph", "photograph"]],
      ["port", "carry", ["transport", "export", "portable"]], ["struct", "build", ["construct", "structure", "destruction"]],
      ["aud", "hear", ["audio", "audience", "auditorium"]], ["vis/vid", "see", ["visible", "video", "vision"]], 
      ["dict", "say", ["dictate", "predict", "dictionary"]], ["bio", "life", ["biology", "biography", "antibiotic"]], ["geo", "earth", ["geography", "geology", "geometry"]],
      ["therm", "heat", ["thermometer", "thermos", "thermal"]], ["meter", "measure", ["thermometer", "kilometer", "speedometer"]], ["phon", "sound", ["telephone", "microphone", "symphony"]],
      ["aqua", "water", ["aquarium", "aquatic", "aqueduct"]], ["terra", "land", ["terrain", "territory", "terrarium"]], ["ped", "foot", ["pedal", "pedestrian", "centipede"]],
      ["auto", "self", ["automatic", "autograph", "automobile"]], ["hydro", "water", ["hydrant", "hydrate", "hydroelectric"]], ["micro", "small", ["microscope", "microphone", "microwave"]],
      ["mega", "large", ["megaphone", "megabyte", "megastar"]], ["tri", "three", ["triangle", "tricycle", "triplet"]], ["uni", "one", ["unicycle", "uniform", "unicorn"]],
      ["bi", "two", ["bicycle", "binoculars", "biped"]], ["dec", "ten", ["decade", "decimal", "decagon"]], ["cent", "hundred", ["century", "centimeter", "percent"]],
      ["rupt", "break", ["erupt", "interrupt", "disrupt"]], ["form", "shape", ["uniform", "transform", "reform"]], ["sub", "under", ["submarine", "subway", "subtract"]],
      ["inter", "between", ["international", "interrupt", "intersection"]], ["trans", "across", ["transport", "transfer", "translate"]], ["pre", "before", ["preview", "predict", "prepare"]],
      ["anti", "against", ["antibiotic", "antifreeze", "antisocial"]], ["omni", "all", ["omnivore", "omnipresent"]], ["carn", "meat", ["carnivore", "carnival"]], ["herb", "plant", ["herbivore", "herbal"]],
      ["astro", "star", ["astronaut", "astronomy", "astrology"]], ["chrono", "time", ["chronological", "chronicle", "synchronize"]], ["cycl", "circle or wheel", ["bicycle", "cycle", "recycle"]], ["fract/frag", "break", ["fraction", "fracture", "fragile"]]
    ];
    const out = [];
    const meanings = roots.map((x) => x[1]);
    const allWords = roots.map((x) => [x[0], x[2]]);
    roots.forEach(([root, mean, words]) => {
      const others = meanings.filter((m) => m !== mean);
      const pick = (arr, k, seed) => { const r = B.rngFrom(B.hash(seed)); const o = []; let g = 0; while (o.length < k && g++ < 400) { const v = arr[Math.floor(r() * arr.length)]; if (!o.includes(v)) o.push(v); } return o; };
      out.push([`What does the root '${root}' mean?`, [mean].concat(pick(others, 3, "rm" + root)), 0, `The root ${root} means ${mean}.`]);
      words.forEach((w) => {
        out.push([`The word '${w}' contains the root '${root}'. What does that part mean?`, [mean].concat(pick(others, 3, "wm" + w)), 0, `${root} = ${mean}.`]);
        const toks = root.split("/");
        const bad = roots.filter((x) => x[1] === mean).flatMap((x) => x[2]);
        const okw = roots.filter((x) => x[1] !== mean).flatMap((x) => x[2]).filter((x) => !bad.includes(x) && !words.includes(x) && !toks.some((t) => x.includes(t)) && !roots.some((y) => y[1] === mean && y[0].split("/").some((t) => x.includes(t))));
        out.push([`Which word has the root meaning '${mean}'?`, [w].concat(pick(okw, 3, "rw" + w + root)), 0, `${w} has the root ${root} (${mean}).`]);
      });
    });
    out.forEach((t) => B.add(K("roots"), t[0].replace(/\|/g, "/") + "|" + t[1].join("|") + "|=>" + t[3]));
    A("roots", `
What is a root word?|the base part of a word that carries its core meaning|a plant part|a prefix|=>Roots build many words.
Many English words come from which two ancient languages?|Greek and Latin|French and German|Chinese and Arabic|=>Greek and Latin.
What does the Greek root 'tele' mean?|far|near|hear|=>Television, telephone.
What does 'telephone' mean based on its roots?|far sound|near light|big write|=>tele = far; phone = sound.
What does 'television' mean based on its roots?|far sight|far sound|big picture|=>tele = far; vision = see.
What does 'biography' mean based on its roots?|writing about a life|a study of earth|a type of measure|=>bio = life; graph = write.
What does 'thermometer' mean based on its roots?|heat measure|water measure|sound measure|=>therm = heat; meter = measure.
What does 'geology' mean based on its roots?|study of the earth|study of life|study of stars|=>geo = earth; -logy = study.
What does 'microscope' mean based on its roots?|a tool to view small things|a tool to view stars|a tool to measure heat|=>micro = small; scope = view.
What does 'telescope' mean based on its roots?|a tool to view far things|a tool to view small things|a tool to hear|=>tele = far; scope = view.
What does 'autograph' mean based on its roots?|self-written|far-written|water-written|=>auto = self; graph = write.
What does 'aquarium' mean based on its root?|a place for water animals|a place for plants|a place for stars|=>aqua = water.
What does 'bicycle' mean based on its roots?|two wheels|three wheels|one wheel|=>bi = two; cycle = wheel.
What does 'tricycle' mean based on its roots?|three wheels|two wheels|one wheel|=>tri = three.
What does 'unicycle' mean based on its roots?|one wheel|two wheels|three wheels|=>uni = one.
What does 'decade' mean?|ten years|100 years|one year|=>dec = ten.
What does 'century' mean?|one hundred years|ten years|one thousand years|=>cent = hundred.
What does 'transport' mean?|carry across|carry in|carry under|=>trans = across; port = carry.
What does 'export' mean?|carry out|carry in|carry under|=>ex = out; port = carry.
What does 'import' mean?|carry in|carry out|carry up|=>im = in.
What does 'inspect' mean?|look closely into|hear carefully|touch|=>in = into; spect = look.
What does 'spectator' mean?|someone who watches|someone who hears|someone who writes|=>spect = look.
What does 'audience' mean?|a group who listen|a group who write|a group who swim|=>aud = hear.
What does 'audible' mean?|able to be heard|able to be seen|able to be touched|=>aud = hear; -ible = able.
What does 'visible' mean?|able to be seen|able to be heard|able to be touched|=>vis = see.
What does 'predict' mean?|say before|say after|say again|=>pre = before; dict = say.
What does 'dictionary' have to do with the root 'dict'?|it tells what words say or mean|it is about heat|it is about water|=>dict = say.
What does 'construct' mean?|build together|break apart|carry away|=>con = together; struct = build.
What does 'destruction' mean?|tearing down what was built|building up|looking again|=>de = down/apart; struct = build.
What does 'interrupt' mean?|break between|break after|break before|=>inter = between; rupt = break.
What does 'erupt' mean?|break out|break in|break down|=>e = out.
What does 'submarine' mean?|under the sea|above the sea|on the sea|=>sub = under; marine = sea.
What does 'subway' mean?|a way under the ground|a way over the ground|a way in the air|=>sub = under.
What does 'international' mean?|between nations|within a city|under a nation|=>inter = between.
What does 'antibiotic' mean?|against life (germs)|for life|many lives|=>anti = against; bio = life.
What does 'omnivore' mean?|eats all things|eats only plants|eats only meat|=>omni = all; vore = eat.
What does 'carnivore' mean?|meat eater|plant eater|all eater|=>carn = meat.
What does 'herbivore' mean?|plant eater|meat eater|all eater|=>herb = plant.
What does 'astronaut' mean?|star sailor|sea sailor|sky writer|=>astro = star; naut = sailor.
What does 'chronological' mean?|in order of time|in order of size|in order of color|=>chrono = time.
What does 'hydrate' mean?|to add water|to remove water|to add heat|=>hydr = water.
What does 'terrain' mean?|the land and its features|the sea|the sky|=>terra = land.
What does 'pedal' have in common with 'pedestrian'?|the root for foot|the root for hand|the root for water|=>ped = foot.
What does 'megaphone' mean?|large sound|small sound|far sound|=>mega = large; phone = sound.
What does 'symphony' have in common with 'telephone'?|the root for sound|the root for heat|the root for earth|=>phon = sound.
What does 'photograph' mean?|light writing|water writing|heat writing|=>photo = light; graph = write.
What does 'photosynthesis' have to do with the root 'photo'?|plants use light to make food|plants use water to make light|plants make heat|=>photo = light.
What does 'geography' mean?|writing about the earth|writing about life|writing about stars|=>geo = earth; graph = write.
How can knowing roots help you read?|you can guess the meanings of new words|you can read faster only|you can skip words|=>Word parts carry meaning.
What is a prefix?|a word part at the start of a word|a word part at the end|a root only|=>pre-, un-, re-.
What is a suffix?|a word part at the end of a word|a word part at the start|a root only|=>-ful, -less, -ly.
What does the suffix '-ology' mean?|study of|full of|without|=>biology = study of life.
What does the suffix '-scope' mean?|tool for viewing|tool for measuring|tool for writing|=>telescope.
What does the suffix '-meter' mean?|measure|view|write|=>thermometer.
What does the suffix '-graph' mean?|write or draw|measure|view|=>autograph.
What does the suffix '-phone' mean?|sound|view|write|=>telephone.
`);
  })();

  /* ---- analogies ---- */
  (function () {
    const rel = {
      antonym: { say: "are opposites", pairs: [["hot", "cold"], ["up", "down"], ["day", "night"], ["fast", "slow"], ["open", "closed"], ["full", "empty"], ["happy", "sad"], ["hard", "soft"], ["early", "late"], ["big", "small"], ["wet", "dry"], ["tall", "short"], ["in", "out"], ["old", "new"], ["strong", "weak"]] },
      synonym: { say: "mean about the same", pairs: [["big", "large"], ["small", "tiny"], ["happy", "glad"], ["fast", "quick"], ["begin", "start"], ["end", "finish"], ["smart", "clever"], ["tired", "sleepy"], ["mad", "angry"], ["sick", "ill"], ["kid", "child"], ["road", "street"]] },
      part: { say: "is a part of", pairs: [["page", "book"], ["wheel", "car"], ["petal", "flower"], ["finger", "hand"], ["branch", "tree"], ["key", "keyboard"], ["room", "house"], ["chapter", "book"], ["toe", "foot"], ["wing", "bird"], ["slice", "pizza"], ["leaf", "tree"]] },
      tool: { say: "is used to", pairs: [["hammer", "build"], ["pen", "write"], ["scissors", "cut"], ["broom", "sweep"], ["spoon", "eat"], ["brush", "paint"], ["needle", "sew"], ["key", "unlock"], ["shovel", "dig"], ["telescope", "look"]] },
      home: { say: "lives in", pairs: [["bird", "nest"], ["bee", "hive"], ["bear", "den"], ["spider", "web"], ["horse", "barn"], ["rabbit", "burrow"], ["fish", "water"], ["ant", "anthill"], ["pig", "pen"], ["lion", "den"]] },
      baby: { say: "has the baby name", pairs: [["dog", "puppy"], ["cat", "kitten"], ["cow", "calf"], ["horse", "foal"], ["sheep", "lamb"], ["frog", "tadpole"], ["duck", "duckling"], ["bear", "cub"], ["chicken", "chick"], ["goat", "kid"]] },
      place: { say: "works in", pairs: [["teacher", "school"], ["doctor", "hospital"], ["farmer", "farm"], ["chef", "kitchen"], ["pilot", "airplane"], ["librarian", "library"], ["sailor", "ship"], ["baker", "bakery"], ["astronaut", "spaceship"], ["judge", "court"]] },
      group: { say: "is a kind of", pairs: [["apple", "fruit"], ["carrot", "vegetable"], ["robin", "bird"], ["rose", "flower"], ["oak", "tree"], ["shark", "fish"], ["red", "color"], ["dog", "animal"], ["Monday", "day"], ["April", "month"], ["triangle", "shape"], ["piano", "instrument"]] }
    };
    const rk = Object.keys(rel);
    const seconds = {}; rk.forEach((k) => (seconds[k] = rel[k].pairs.map((p) => p[1])));
    const pickK = (arr, k, seed, ex) => { const r = B.rngFrom(B.hash(seed)); const o = []; let g = 0; ex = ex || []; while (o.length < k && g++ < 400) { const v = arr[Math.floor(r() * arr.length)]; if (!o.includes(v) && !ex.includes(v)) o.push(v); } return o; };
    const out = [];
    rk.forEach((k) => {
      const ps = rel[k].pairs;
      ps.forEach(([a, b], i) => {
        const [c, d] = ps[(i + 1 + (i % 3)) % ps.length]; if (c === a) return;
        const wrong = pickK([].concat(...rk.filter((x) => x !== k).map((x) => seconds[x])), 3, "an" + a + c, [d, b, c, a]);
        out.push([`${a} is to ${b} as ${c} is to ___.`, [d].concat(wrong), 0, `${a} and ${b} ${rel[k].say} the same way ${c} and ${d} do.`]);
        const [c2, d2] = ps[(i + 3 + (i % 2)) % ps.length]; if (c2 !== a && c2 !== c) {
          const wrong2 = pickK([].concat(...rk.filter((x) => x !== k).map((x) => seconds[x])), 3, "ay" + a + c2, [d2, b, c2, a]);
          out.push([`${c2} : ${d2} :: ${a} : ___`, [b].concat(wrong2), 0, `${c2} and ${d2} are related the way ${a} and ${b} are.`]);
        }
      });
    });
    out.forEach((t) => B.add(K("analogies"), t[0] + "|" + t[1].join("|") + "|=>" + t[3]));
    A("analogies", `
What is an analogy?|a comparison showing how two pairs of words are alike|a type of story|a rhyme|=>Hot : cold :: up : down.
In an analogy, what does the symbol ':' mean?|'is to'|'plus'|'minus'|=>cat : kitten means 'cat is to kitten.'
In an analogy, what does '::' mean?|'as'|'and'|'or'|=>A : B :: C : D means 'A is to B as C is to D.'
What is the first thing to do when solving an analogy?|figure out how the first two words are related|guess|skip it|=>Find the relationship.
What type of relationship is 'hot : cold'?|antonyms|synonyms|part and whole|=>Opposites.
What type of relationship is 'big : large'?|synonyms|antonyms|part and whole|=>Same meaning.
What type of relationship is 'wheel : car'?|part and whole|antonyms|synonyms|=>A wheel is a part of a car.
What type of relationship is 'pencil : write'?|tool and use|antonyms|synonyms|=>A pencil is used to write.
What type of relationship is 'bird : nest'?|animal and home|antonyms|synonyms|=>A bird lives in a nest.
What type of relationship is 'puppy : dog'?|baby and adult|synonyms|part and whole|=>A puppy is a baby dog.
What type of relationship is 'apple : fruit'?|item and category|antonyms|part and whole|=>An apple is a kind of fruit.
What type of relationship is 'teacher : school'?|worker and workplace|antonyms|synonyms|=>A teacher works at school.
Which word completes: 'finger is to hand as toe is to ___'?|foot|shoe|walk|=>Part and whole.
Which word completes: 'cat is to kitten as dog is to ___'?|puppy|bark|bone|=>Baby animal.
Which word completes: 'fish is to swim as bird is to ___'?|fly|nest|sing|=>How they move.
Which word completes: 'teacher is to classroom as doctor is to ___'?|hospital|medicine|nurse|=>Worker and workplace.
Which word completes: 'sock is to foot as glove is to ___'?|hand|winter|finger|=>What each is worn on.
Which word completes: 'spoon is to soup as fork is to ___'?|salad|knife|plate|=>Utensil and food.
Which word completes: 'eye is to see as ear is to ___'?|hear|listen|sound|=>Body part and its function.
Which word completes: 'day is to night as summer is to ___'?|winter|fall|warm|=>Opposites.
Which word completes: 'rain is to umbrella as sun is to ___'?|sunscreen|cloud|moon|=>What protects you.
Which word completes: 'book is to read as song is to ___'?|sing|read|write|=>What you do with it.
Which word completes: 'painter is to brush as writer is to ___'?|pen|paper|story|=>Tool of the job.
Which word completes: 'chapter is to book as scene is to ___'?|play|movie star|film strip|=>Part and whole.
Which word completes: 'dark is to light as hard is to ___'?|soft|rock|heavy|=>Opposites.
Which word completes: 'hot is to boiling as cold is to ___'?|freezing|cool|warm|=>Degrees of intensity.
Which word completes: 'walk is to run as whisper is to ___'?|shout|talk|hum|=>Mild to strong.
Which word completes: 'second is to minute as minute is to ___'?|hour|day|week|=>Units of time.
Which word completes: 'inch is to foot as centimeter is to ___'?|meter|mile|gram|=>Small to larger unit.
Which word completes: 'ounce is to pound as gram is to ___'?|kilogram|liter|meter|=>Smaller to larger weight.
Which word completes: 'north is to south as east is to ___'?|west|up|left|=>Opposite directions.
Which word completes: 'triangle is to 3 as square is to ___'?|4|2|5|=>Number of sides.
Which word completes: 'one is to 1 as ten is to ___'?|10|100|11|=>Word to numeral.
Which word completes: 'egg is to chicken as seed is to ___'?|plant|farm|water|=>Starting stage.
Which word completes: 'caterpillar is to butterfly as tadpole is to ___'?|frog|fish|toad|=>Young and adult.
Which word completes: 'cow is to moo as dog is to ___'?|bark|bone|puppy|=>Sound it makes.
Which word completes: 'lion is to roar as cat is to ___'?|meow|purr loudly|bark|=>Sound it makes.
Which word completes: 'bee is to hive as ant is to ___'?|colony|queen|web|=>Where they live.
Which word completes: 'author is to book as artist is to ___'?|painting|canvas|school|=>Creator and creation.
Which word completes: 'car is to garage as plane is to ___'?|hangar|sky|runway|=>Where it is kept.
Which word completes: 'knife is to cut as pencil is to ___'?|write|draw only|erase|=>Tool and use.
Which word completes: 'hungry is to eat as thirsty is to ___'?|drink|water|cup|=>Need and action.
Which word completes: 'tired is to sleep as cold is to ___'?|shiver or wear a coat|run|sing|=>Cause and response.
Which word completes: 'sheep is to wool as cow is to ___'?|milk|barn|grass|=>Animal and product.
Which word completes: 'bee is to honey as cow is to ___'?|milk|moo|barn|=>Animal and product.
`);
  })();
})();
