/* Grade 5 Gifted & Advanced: bonus question banks. */
(function () {
  "use strict";
  const B = window.BONUS, T = B.T, K = (u) => "5/advanced/" + u;
  const ri = T.ri;
  const f = (n) => n.toLocaleString("en-US");
  const mn = (x) => String(x).replace(/^-/, "−");
  const r2 = (x, d) => Math.round(x * Math.pow(10, d || 2)) / Math.pow(10, d || 2);
  const near = (r, right, ds, fmt) => { fmt = fmt || mn; return T.mc(r, fmt(right), ds.map((d) => right + d).filter((x) => x !== right).map(fmt), (rr) => fmt(right + (ri(rr, -12, 12) || 13))); };
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const NAMES = ["Mia", "Noah", "Ava", "Liam", "Zoe", "Ben", "Lily", "Sam", "Ella", "Max", "Ruby", "Leo"];
  const nm = (r) => T.pick(r, NAMES);
  const A = (u, t) => B.add(K(u), t.split("\n").filter((x) => x.trim()).join("\n"));
  const sup = { 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶" };

  /* ---- integers ---- */
  const IN = K("integers");
  B.tpl(IN, (r) => { const a = ri(r, -15, 15), b = ri(r, -15, 15); return [`${mn(a)} + (${mn(b)}) = ?`, near(r, a + b, [-2, 2, -(a + b), 10]), 0, `Combine: ${mn(a)} + ${mn(b)} = ${mn(a + b)}.`]; }, 18);
  B.tpl(IN, (r) => { const a = ri(r, -15, 15), b = ri(r, -15, 15); return [`${mn(a)} − (${mn(b)}) = ?`, near(r, a - b, [-2, 2, -(a - b), 10]), 0, `Subtracting ${mn(b)} is the same as adding ${mn(-b)}: ${mn(a - b)}.`]; }, 18);
  B.tpl(IN, (r) => { const a = ri(r, -12, 12), b = ri(r, -12, 12); if (!a || !b) return null; return [`${mn(a)} × (${mn(b)}) = ?`, near(r, a * b, [-2 * a * b, a, b, 10]), 0, `${Math.sign(a) === Math.sign(b) ? "Same signs give a positive" : "Different signs give a negative"} product.`]; }, 14);
  B.tpl(IN, (r) => { const b = ri(r, -9, 9), q = ri(r, -9, 9); if (!b || !q) return null; return [`${mn(b * q)} ÷ (${mn(b)}) = ?`, near(r, q, [-1, 1, -2 * q, 2]), 0, `${mn(b * q)} ÷ ${mn(b)} = ${mn(q)}.`]; }, 12);
  B.tpl(IN, (r) => { const a = ri(r, -20, 20); return [`What is the absolute value of ${mn(a)}?`, T.mc(r, String(Math.abs(a)), [mn(-Math.abs(a)), "0", String(Math.abs(a) * 10)].filter((x, i, arr) => arr.indexOf(x) === i && x !== String(Math.abs(a)))), 0, `Distance from zero: ${Math.abs(a)}.`]; }, 10);
  B.tpl(IN, (r) => { const a = ri(r, -9, 9), b = ri(r, -9, 9); if (a === b) return null; return [`Which is greater: ${mn(a)} or ${mn(b)}?`, [mn(Math.max(a, b)), mn(Math.min(a, b))], 0, `The number farther right on the number line is greater.`]; }, 10);
  B.tpl(IN, (r) => { const t = ri(r, -10, 10), d = ri(r, 3, 15), up = r() < 0.5; const n = up ? t + d : t - d; return [`The temperature is ${mn(t)}°F. It ${up ? "rises" : "drops"} ${d} degrees. What is the new temperature?`, near(r, n, [-d, d, 10, -10], (x) => mn(x) + "°F"), 0, `${mn(t)} ${up ? "+" : "−"} ${d} = ${mn(n)}°F.`]; }, 10);
  B.tpl(IN, (r) => { const a = ri(r, -15, 15), b = ri(r, -15, 15); return [`How far apart are ${mn(a)} and ${mn(b)} on a number line?`, near(r, Math.abs(a - b), [-1, 1, 2, Math.abs(a + b) - Math.abs(a - b)], (x) => String(Math.abs(x))), 0, `|${mn(a)} − ${mn(b)}| = ${Math.abs(a - b)}.`]; }, 8);
  A("integers", `
What is an integer?|a whole number or its opposite|a fraction|a decimal|=>…−2, −1, 0, 1, 2…
What is a negative number?|a number less than zero|a number greater than zero|zero|=>−3.
What is a positive number?|a number greater than zero|a number less than zero|zero|=>3.
Is zero positive or negative?|neither|positive|negative|=>Zero is neutral.
What is the opposite of 7?|−7|7|1/7|=>Same distance from zero.
What is the opposite of −12?|12|−12|0|=>Opposites.
What is the absolute value?|a number's distance from zero|the opposite of a number|the square of a number|=>Always nonnegative.
What is the absolute value of −9?|9|−9|0|=>Distance from zero.
What is the absolute value of 5?|5|−5|0|=>Distance from zero.
Which is greater: −2 or −8?|−2|−8|They are equal|=>Closer to zero.
Which is less: −5 or 3?|−5|3|They are equal|=>Negatives are less than positives.
Which list is in order from least to greatest?|−6, −2, 0, 4|4, 0, −2, −6|−2, −6, 0, 4|=>Left to right on a number line.
What is −4 + 4?|0|−8|8|=>Opposites cancel.
What is −7 + 3?|−4|−10|4|=>Different signs.
What is 5 + (−9)?|−4|4|14|=>5 − 9.
What is −3 + (−6)?|−9|−3|9|=>Same signs.
What is 8 − 12?|−4|4|20|=>8 − 12.
What is −5 − 3?|−8|−2|2|=>−5 + (−3).
What is 6 − (−4)?|10|2|−10|=>6 + 4.
What is −2 − (−7)?|5|−9|−5|=>−2 + 7.
What is −3 × 5?|−15|15|−8|=>Different signs.
What is −4 × −6?|24|−24|−10|=>Same signs.
What is 18 ÷ (−3)?|−6|6|−15|=>Different signs.
What is −20 ÷ (−4)?|5|−5|−16|=>Same signs.
What happens when you multiply two negative numbers?|the product is positive|the product is negative|the product is zero|=>Rules of signs.
What happens when you add two negative numbers?|the sum is negative|the sum is positive|the sum is zero|=>−2 + −3 = −5.
What happens when you subtract a negative number?|it is like adding a positive|it is like subtracting a positive|it stays the same|=>Keep-change-change.
A diver is at −20 feet and rises 8 feet. Where is the diver now?|−12 feet|−28 feet|12 feet|=>−20 + 8.
A bank balance is −$15 and you deposit $40. What is the new balance?|$25|−$55|$55|=>−15 + 40.
The temperature falls from 5°F to −3°F. How many degrees did it fall?|8|2|−8|=>5 − (−3).
An elevator goes from floor 3 down to floor −2 (a basement). How many floors did it travel?|5|1|−5|=>3 − (−2).
Where is −3 on a number line?|3 units to the left of zero|3 units to the right of zero|at zero|=>Negative = left.
Which number is 4 less than −1?|−5|3|−3|=>−1 − 4.
Which number is 6 more than −10?|−4|−16|16|=>−10 + 6.
Which number is between −3 and 1?|−1|2|−4|=>Between on the line.
What is the sum of an integer and its opposite?|0|1|the integer|=>Additive inverse.
What is −(−8)?|8|−8|0|=>The opposite of −8.
What is |−3| + |3|?|6|0|−6|=>3 + 3.
What does '−5°C' mean?|5 degrees below zero|5 degrees above zero|zero|=>Cold.
What does a positive change mean?|an increase|a decrease|no change|=>Up.
What does a negative change mean?|a decrease|an increase|no change|=>Down.
True or false: −10 is greater than −2.|False|True|=>−10 is farther left.
True or false: The opposite of 0 is 0.|True|False|=>Zero is its own opposite.
True or false: |−6| = 6.|True|False|=>Distance is positive.
True or false: A negative times a positive is positive.|False|True|=>It is negative.
`.replace("What is |−3| + |3|?|6|0|−6|=>3 + 3.","What is the absolute value of −3 plus the absolute value of 3?|6|0|−6|=>3 + 3.").replace("True or false: |−6| = 6.|True|False|=>Distance is positive.","True or false: The absolute value of −6 is 6.|True|False|=>Distance is positive."));

  /* ---- ratios & rates ---- */
  const RT = K("ratios");
  B.tpl(RT, (r) => { const a = ri(r, 2, 9), b = ri(r, 2, 9), k = ri(r, 2, 6); if (gcd(a, b) !== 1) return null; return [`The ratio of cats to dogs is ${a * k}:${b * k}. What is the simplest form?`, T.mc(r, `${a}:${b}`, [`${b}:${a}`, `${a * k}:${b}`, `${a}:${b * k}`].filter((x) => x !== `${a}:${b}`)), 0, `Divide both numbers by ${k}.`]; }, 12);
  B.tpl(RT, (r) => { const a = ri(r, 2, 8), b = ri(r, 2, 8), k = ri(r, 2, 6); if (gcd(a, b) !== 1) return null; return [`The ratio of boys to girls is ${a}:${b}. If there are ${a * k} boys, how many girls are there?`, near(r, b * k, [-k, k, b, 2]), 0, `Scale factor ${k}: ${b} × ${k} = ${b * k}.`]; }, 14);
  B.tpl(RT, (r) => { const c = ri(r, 2, 12), n = ri(r, 2, 9); return [`${n} notebooks cost $${c * n}. What is the unit price?`, near(r, c, [-1, 1, 2, c * n - c], (x) => "$" + x), 0, `$${c * n} ÷ ${n} = $${c}.`]; }, 12);
  B.tpl(RT, (r) => { const s = ri(r, 3, 12) * 5, t = ri(r, 2, 6); return [`A car travels ${s * t} miles in ${t} hours. What is its speed in miles per hour?`, near(r, s, [-5, 5, 10, s * t - s], (x) => x + " mph"), 0, `${s * t} ÷ ${t} = ${s}.`]; }, 10);
  B.tpl(RT, (r) => { const a = ri(r, 2, 6), b = ri(r, 3, 9), k = ri(r, 2, 6); return [`If ${a} pencils cost $${a * b}, how much do ${a * k} pencils cost?`, near(r, a * k * b, [-b, b, a * b, 10], (x) => "$" + x), 0, `Unit cost $${b}; ${a * k} × ${b} = ${a * k * b}.`]; }, 12);
  B.tpl(RT, (r) => { const a = ri(r, 2, 9), b = ri(r, 2, 9), k = ri(r, 2, 8); if (a === b) return null; return [`${a}/${b} = x/${b * k}. What is x?`, near(r, a * k, [-k, k, a, 1]), 0, `Multiply ${a} by ${k}.`]; }, 12);
  B.tpl(RT, (r) => { const rate = ri(r, 3, 12), t = ri(r, 2, 10); return [`A faucet fills ${rate} gallons per minute. How many gallons in ${t} minutes?`, near(r, rate * t, [-rate, rate, t, 10], (x) => x + " gallons"), 0, `${rate} × ${t} = ${rate * t}.`]; }, 10);
  B.tpl(RT, (r) => { const a = ri(r, 2, 6), b = ri(r, 2, 6), tot = (a + b) * ri(r, 2, 8); return [`Paint is mixed in the ratio ${a}:${b} (blue to white). How much blue is in ${tot} cups of paint?`, near(r, tot * a / (a + b), [-a, a, 1, -1], (x) => x + " cups"), 0, `Blue is ${a}/${a + b} of the mix: ${tot * a / (a + b)} cups.`]; }, 10);
  A("ratios", `
What is a ratio?|a comparison of two quantities|the sum of two numbers|a type of equation|=>Part to part or part to whole.
What are three ways to write the ratio of 3 to 4?|3:4, 3/4, and 3 to 4|3+4, 3−4, 3×4|4:3, 4/3, and 4 to 3|=>Same comparison.
What is a rate?|a ratio that compares quantities with different units|a ratio with the same units|a fraction only|=>Miles per hour.
What is a unit rate?|a rate with 1 as the second quantity|any ratio|a percent|=>Cost per 1 item.
Which is a unit rate?|60 miles per 1 hour|120 miles per 2 hours|3 apples for $5|=>The second quantity is 1.
What is a ratio table?|a table of equivalent ratios|a graph|a type of rate|=>Scale up or down.
What are equivalent ratios?|ratios that express the same relationship|ratios with different values|ratios of different units|=>2:3 = 4:6.
Which ratio is equivalent to 1:2?|3:6|2:3|1:3|=>Multiply both by 3.
Which ratio is equivalent to 2:5?|4:10|4:5|2:10|=>Multiply both by 2.
Which ratio is equivalent to 3:4?|9:12|6:7|3:5|=>Multiply both by 3.
What is the simplest form of 6:9?|2:3|3:2|6:9|=>Divide by 3.
What is the simplest form of 10:15?|2:3|5:7|10:15|=>Divide by 5.
What is the simplest form of 12:8?|3:2|2:3|6:4|=>Divide by 4.
What is the ratio of 5 red marbles to 3 blue marbles?|5:3|3:5|8:5|=>Red to blue.
What is the ratio of blue marbles to the total if there are 5 red and 3 blue?|3:8|5:8|3:5|=>Part to whole.
If the ratio of boys to girls is 2:3 and there are 10 boys, how many girls?|15|20|6|=>Scale factor 5.
If the ratio of cats to dogs is 3:1 and there are 12 cats, how many dogs?|4|36|9|=>12 ÷ 3.
A recipe uses 2 cups of flour for every 1 cup of sugar. For 6 cups of flour, how much sugar?|3 cups|12 cups|4 cups|=>Ratio 2:1.
A recipe uses 3 eggs for 12 muffins. How many eggs for 36 muffins?|9|12|6|=>Scale factor 3.
A car travels 150 miles in 3 hours. What is its speed?|50 mph|450 mph|153 mph|=>150 ÷ 3.
A runner jogs 6 miles in 1 hour. How far in 3 hours?|18 miles|9 miles|2 miles|=>6 × 3.
Apples cost $2 per pound. How much do 5 pounds cost?|$10|$7|$2.50|=>2 × 5.
4 pounds of oranges cost $8. What is the cost per pound?|$2|$32|$4|=>8 ÷ 4.
Which is the better buy: 3 pens for $6 or 5 pens for $9?|5 pens for $9|3 pens for $6|They are equal|=>$1.80 vs. $2.00 each.
Which is the better buy: 2 lb for $5 or 3 lb for $6?|3 lb for $6|2 lb for $5|They are equal|=>$2 vs. $2.50 per lb.
A map scale says 1 inch = 20 miles. How many miles is 3 inches?|60|23|6.7|=>3 × 20.
A map scale says 1 cm = 5 km. How many km is 7 cm?|35|12|1.4|=>7 × 5.
A scale drawing uses 1 in for 4 ft. A room is 12 ft long. How long is it in the drawing?|3 in|48 in|8 in|=>12 ÷ 4.
What is the unit rate of 120 words in 4 minutes?|30 words per minute|480 words per minute|124 words per minute|=>120 ÷ 4.
What is the unit rate of $15 for 5 gallons?|$3 per gallon|$75 per gallon|$10 per gallon|=>15 ÷ 5.
What does 'per' mean in a rate?|for each|plus|minus|=>Miles per hour.
Which shows the ratio 'for every 2 boys there are 3 girls'?|2:3|3:2|2:5|=>Boys to girls.
Which is the part-to-whole ratio if 2 of 5 students wear glasses?|2:5|2:3|3:5|=>Part to whole.
Solve: 2/3 = x/12|8|6|18|=>Multiply by 4.
Solve: 3/5 = 9/x|15|12|27|=>Multiply by 3.
Solve: x/4 = 6/8|3|2|4|=>6/8 = 3/4.
Solve: 5/x = 15/21|7|3|9|=>Divide by 3.
Which method solves a proportion?|cross multiplying|adding denominators|subtracting numerators|=>a·d = b·c.
True or false: 2:3 and 4:6 are equivalent ratios.|True|False|=>Multiply by 2.
True or false: A rate always has the same units in both quantities.|False|True|=>Different units.
True or false: 3:5 is the same as 5:3.|False|True|=>Order matters.
`);

  /* ---- percents ---- */
  const PC = K("percents");
  B.tpl(PC, (r) => { const p = T.pick(r, [10, 20, 25, 30, 40, 50, 60, 75]), n = ri(r, 2, 20) * 10; return [`What is ${p}% of ${n}?`, near(r, n * p / 100, [-n / 10, n / 10, n - n * p / 100, 5].map((x) => r2(x, 2)), (x) => String(r2(x, 2))), 0, `${p}% of ${n} = ${p / 100} × ${n} = ${n * p / 100}.`]; }, 16);
  B.tpl(PC, (r) => { const p = T.pick(r, [5, 10, 15, 20, 25, 30, 50]), price = ri(r, 4, 40) * 5; const d = price * p / 100; return [`A $${price} toy is ${p}% off. What is the sale price?`, near(r, price - d, [-d, d, price, 5].map((x) => r2(x, 2)), (x) => "$" + r2(x, 2)), 0, `Discount $${d}; $${price} − $${d} = $${price - d}.`]; }, 14);
  B.tpl(PC, (r) => { const n = ri(r, 2, 9) * 20, p = ri(r, 1, 9) * 10; const part = n * p / 100; return [`${part} is what percent of ${n}?`, near(r, p, [-10, 10, 5, -5], (x) => x + "%"), 0, `${part} ÷ ${n} = ${p / 100} = ${p}%.`]; }, 12);
  B.tpl(PC, (r) => { const p = T.pick(r, [5, 8, 12, 15, 20, 25, 35, 40, 45, 60, 65, 80]); return [`Write ${p}% as a decimal.`, T.mc(r, String(p / 100), [String(p / 10), String(p / 1000), String(p)], (rr) => String(ri(rr, 1, 99) / 100)), 0, `Divide by 100: ${p / 100}.`]; }, 10);
  B.tpl(PC, (r) => { const d = ri(r, 1, 99) / 100; return [`Write ${d} as a percent.`, near(r, d * 100, [-10, 10, 1, -1].map((x) => x), (x) => r2(x, 1) + "%"), 0, `Multiply by 100: ${r2(d * 100, 1)}%.`]; }, 10);
  B.tpl(PC, (r) => { const p = T.pick(r, [10, 20, 25, 40, 50, 60, 75, 80]); const g = gcd(p, 100); return [`Write ${p}% as a fraction in simplest form.`, T.mc(r, `${p / g}/${100 / g}`, [`${p}/10`, `${p}/1000`, `${100 / g}/${p / g}`].filter((x) => x !== `${p / g}/${100 / g}`), (rr) => `${ri(rr, 1, 9)}/${ri(rr, 10, 20)}`), 0, `${p}/100 simplifies to ${p / g}/${100 / g}.`]; }, 10);
  B.tpl(PC, (r) => { const bill = ri(r, 8, 60), tip = T.pick(r, [10, 15, 20]); const t = bill * tip / 100; return [`Your meal costs $${bill}. What is a ${tip}% tip?`, near(r, t, [-t / 2, t / 2, t * 2, 1].map((x) => r2(x, 2)), (x) => "$" + r2(x, 2)), 0, `${tip}% of $${bill} = $${r2(t, 2)}.`]; }, 10);
  B.tpl(PC, (r) => { const pr = ri(r, 4, 40) * 5, tax = T.pick(r, [5, 6, 7]); const t = pr * tax / 100; return [`A $${pr} item has ${tax}% sales tax. What is the total cost?`, near(r, pr + t, [-t, t, tax, 1].map((x) => r2(x, 2)), (x) => "$" + r2(x, 2)), 0, `Tax = $${r2(t, 2)}; total = $${r2(pr + t, 2)}.`]; }, 10);
  A("percents", `
What does 'percent' mean?|per hundred|per ten|per thousand|=>Cent = 100.
What is 50% as a fraction?|1/2|1/5|5/10|=>50/100.
What is 25% as a fraction?|1/4|1/5|2/5|=>25/100.
What is 10% as a fraction?|1/10|1/100|10|=>10/100.
What is 75% as a fraction?|3/4|7/5|1/4|=>75/100.
What is 20% as a fraction?|1/5|1/2|2/5|=>20/100.
What is 100% of a number?|the whole number|half the number|zero|=>All of it.
What is 200% of a number?|twice the number|half the number|the same number|=>×2.
What is 1% of 500?|5|50|0.5|=>Divide by 100.
What is 10% of 90?|9|90|0.9|=>Divide by 10.
What is 50% of 64?|32|50|16|=>Half.
What is 25% of 80?|20|25|40|=>A quarter.
What is 75% of 40?|30|10|35|=>3 quarters.
What is 5% of 200?|10|20|5|=>10% is 20; half is 10.
What is 15% of 60?|9|15|6|=>10% + 5%.
What is 20% of 45?|9|20|4.5|=>10% is 4.5.
What is 30% of 70?|21|30|7|=>3 × 7.
What is 60% of 50?|30|20|60|=>0.6 × 50.
What is 125% of 80?|100|105|90|=>1.25 × 80.
What is 0.5 as a percent?|50%|5%|0.5%|=>×100.
What is 0.07 as a percent?|7%|70%|0.7%|=>×100.
What is 1.5 as a percent?|150%|15%|1.5%|=>×100.
What is 3/4 as a percent?|75%|34%|43%|=>0.75.
What is 2/5 as a percent?|40%|25%|52%|=>0.4.
What is 1/8 as a percent?|12.5%|18%|8%|=>0.125.
What is 3/10 as a percent?|30%|3%|0.3%|=>0.3.
What is 9/20 as a percent?|45%|9%|92%|=>0.45.
What is 120% as a decimal?|1.2|12|0.12|=>120 ÷ 100.
What is 4% as a decimal?|0.04|0.4|4|=>4 ÷ 100.
What is 35% as a decimal?|0.35|3.5|0.035|=>35 ÷ 100.
Which is greater: 40% or 0.5?|0.5|40%|They are equal|=>50% > 40%.
Which is greater: 3/5 or 55%?|3/5|55%|They are equal|=>60% > 55%.
Which is equal to 1/4?|25%|14%|40%|=>0.25.
Which is equal to 0.2?|20%|2%|0.2%|=>×100.
Order from least to greatest: 0.3, 25%, 1/2|25%, 0.3, 1/2|1/2, 0.3, 25%|0.3, 1/2, 25%|=>25% < 30% < 50%.
A sweater costs $40 and is 25% off. What is the discount?|$10|$30|$25|=>25% of 40.
A $60 jacket is 10% off. What is the sale price?|$54|$6|$50|=>60 − 6.
A $20 item has 5% sales tax. What is the tax?|$1|$5|$0.50|=>0.05 × 20.
A $50 meal gets a 20% tip. What is the tip?|$10|$20|$5|=>0.2 × 50.
A class has 20 students and 40% are girls. How many girls?|8|12|4|=>0.4 × 20.
A team won 9 of 12 games. What percent did they win?|75%|9%|50%|=>9/12 = 0.75.
A student answered 18 of 20 questions correctly. What percent is that?|90%|18%|80%|=>18/20.
A price rises from $10 to $12. What is the percent increase?|20%|2%|12%|=>2/10.
A price drops from $50 to $40. What is the percent decrease?|20%|10%|25%|=>10/50.
What does 'discount' mean?|a reduction in price|an increase in price|a tax|=>Savings.
What is sales tax?|an added percent of the price paid to the government|a discount|a tip|=>Added at checkout.
What is a tip?|an extra payment for service|a tax|a discount|=>Gratuity.
What is interest?|money paid for using money|a tax|a discount|=>Percent of principal.
True or false: 50% of 10 is the same as 10 ÷ 2.|True|False|=>Half.
True or false: 10% of 100 is 1.|False|True|=>It is 10.
True or false: A percent can be greater than 100%.|True|False|=>150%.
`);

  /* ---- exponents ---- */
  const EX = K("exponents");
  B.tpl(EX, (r) => { const b = ri(r, 2, 10), e = ri(r, 2, 4); if (Math.pow(b, e) > 10000) return null; return [`${b}${sup[e]} = ?`, near(r, Math.pow(b, e), [-b, b, b * e - Math.pow(b, e), Math.pow(b, e - 1) - Math.pow(b, e)].map((x) => x), f), 0, `${Array(e).fill(b).join(" × ")} = ${f(Math.pow(b, e))}.`]; }, 16);
  B.tpl(EX, (r) => { const n = ri(r, 2, 15); return [`What is the square root of ${n * n}?`, near(r, n, [-1, 1, 2, n]), 0, `${n} × ${n} = ${n * n}.`]; }, 12);
  B.tpl(EX, (r) => { const a = ri(r, 2, 9), b = ri(r, 2, 6), c = ri(r, 2, 4); return [`Evaluate: ${a} + ${b} × ${c}${sup[2]}`, near(r, a + b * c * c, [-c, c, b * c - 0, (a + b) * c * c - (a + b * c * c)].map((x) => x)), 0, `Exponent first: ${c * c}; multiply: ${b * c * c}; add: ${a + b * c * c}.`]; }, 12);
  B.tpl(EX, (r) => { const a = ri(r, 2, 6), b = ri(r, 2, 6); if (a === b) return null; return [`Which is greater: ${a}${sup[3]} or ${b}${sup[3]}?`, [`${Math.max(a, b)}${sup[3]}`, `${Math.min(a, b)}${sup[3]}`], 0, `${a}³ = ${a ** 3}; ${b}³ = ${b ** 3}.`]; }, 6);
  B.tpl(EX, (r) => { const k = ri(r, 2, 6); return [`What is 10${sup[k]}?`, T.mc(r, f(Math.pow(10, k)), [f(10 * k), f(Math.pow(10, k - 1)), f(Math.pow(10, k + 1))]), 0, `10^${k} is 1 followed by ${k} zeros.`]; }, 5);
  B.tpl(EX, (r) => { const b = ri(r, 2, 9), e = ri(r, 2, 4); return [`Which expression equals ${Math.pow(b, e)}?`, T.mc(r, `${b}${sup[e]}`, [`${b} × ${e}`, `${b} + ${e}`, `${e}${sup[b > 6 ? 2 : 3]}`], (rr) => `${ri(rr, 2, 9)} × ${ri(rr, 2, 9)}`), 0, `${b}^${e} = ${Math.pow(b, e)}.`]; }, 8);
  A("exponents", `
What is an exponent?|a number that tells how many times to multiply the base by itself|the base|the answer|=>2³ means 2 × 2 × 2.
What is the base?|the number being multiplied|the exponent|the answer|=>In 2³, the base is 2.
How do you read 5²?|five squared|five times two|five to the one|=>Squared means power of 2.
How do you read 4³?|four cubed|four squared|four times three|=>Cubed means power of 3.
What is 3²?|9|6|5|=>3 × 3.
What is 4²?|16|8|6|=>4 × 4.
What is 5²?|25|10|7|=>5 × 5.
What is 6²?|36|12|8|=>6 × 6.
What is 7²?|49|14|9|=>7 × 7.
What is 8²?|64|16|10|=>8 × 8.
What is 9²?|81|18|11|=>9 × 9.
What is 10²?|100|20|12|=>10 × 10.
What is 11²?|121|22|13|=>11 × 11.
What is 12²?|144|24|14|=>12 × 12.
What is 2³?|8|6|5|=>2 × 2 × 2.
What is 3³?|27|9|6|=>3 × 3 × 3.
What is 4³?|64|12|7|=>4 × 4 × 4.
What is 5³?|125|15|10|=>5 × 5 × 5.
What is 2⁴?|16|8|6|=>2 × 2 × 2 × 2.
What is 2⁵?|32|10|25|=>2⁴ × 2.
What is 10³?|1,000|30|100|=>10 × 10 × 10.
What is 10⁴?|10,000|40|1,000|=>1 and four zeros.
What is 1 to any power?|1|0|the power|=>1 × 1 × 1 = 1.
What is 5¹?|5|1|10|=>The number itself.
What is 7⁰?|1|0|7|=>Any nonzero number to the power 0.
What is the square root of 81?|9|8|18|=>9 × 9.
What is the square root of 49?|7|6|14|=>7 × 7.
What is the square root of 100?|10|50|20|=>10 × 10.
What is the square root of 144?|12|14|72|=>12 × 12.
What is a perfect square?|a number that is the square of a whole number|any even number|any number with 2 in it|=>9, 16, 25.
Which number is a perfect square?|36|35|40|=>6 × 6.
Which number is NOT a perfect square?|50|49|64|=>No whole number squared is 50.
What is a perfect cube?|a number that is the cube of a whole number|any odd number|any number ending in 3|=>8, 27, 64.
Which number is a perfect cube?|27|26|28|=>3 × 3 × 3.
Is 2³ the same as 2 × 3?|No, 2³ = 8 and 2 × 3 = 6|Yes|Only sometimes|=>Exponent is repeated multiplication.
Is 3² the same as 2³?|No, 9 ≠ 8|Yes|Only sometimes|=>Different values.
What is 2 + 3²?|11|25|10|=>Exponent first.
What is (2 + 3)²?|25|11|10|=>Parentheses first.
What is 4 × 2³?|32|64|24|=>4 × 8.
What is 5² − 3²?|16|4|34|=>25 − 9.
What is 2² + 2³?|12|10|16|=>4 + 8.
What is 10 − 2²?|6|64|4|=>10 − 4.
What is 3 × 10²?|300|900|60|=>3 × 100.
What is 6 × 10³?|6,000|600|60,000|=>6 × 1,000.
What is the order of operations?|parentheses, exponents, multiplication/division, addition/subtraction|addition first|left to right only|=>PEMDAS.
What does the E in PEMDAS stand for?|exponents|equals|even|=>After parentheses.
Write 2 × 2 × 2 × 2 using an exponent.|2⁴|4²|2 × 4|=>Four factors of 2.
Write 5 × 5 using an exponent.|5²|2⁵|5 × 2|=>Two factors of 5.
Write 7 × 7 × 7 using an exponent.|7³|3⁷|7 × 3|=>Three factors of 7.
What is 100 written as a power of 10?|10²|10¹|10³|=>10 × 10.
What is 1,000 written as a power of 10?|10³|10²|10⁴|=>10 × 10 × 10.
What is 1,000,000 written as a power of 10?|10⁶|10⁵|10⁷|=>Six zeros.
True or false: 2⁵ = 10.|False|True|=>It's 32.
True or false: 9² = 81.|True|False|=>9 × 9.
True or false: The square root of 64 is 8.|True|False|=>8 × 8.
`);

  /* ---- one-step equations ---- */
  const EQ = K("equations");
  const vr = (r) => T.pick(r, ["x", "n", "a", "m", "p", "t", "y"]);
  B.tpl(EQ, (r) => { const v = vr(r), a = ri(r, 2, 30), s = ri(r, 2, 30); return [`Solve: ${v} + ${a} = ${a + s}`, near(r, s, [-a, a, 1, -1, 10].map((x) => x), String), 0, `Subtract ${a} from both sides: ${v} = ${s}.`]; }, 14);
  B.tpl(EQ, (r) => { const v = vr(r), a = ri(r, 2, 30), s = ri(r, 2, 30); return [`Solve: ${v} − ${a} = ${s}`, near(r, a + s, [-a, a, 1, -1, 10], String), 0, `Add ${a} to both sides: ${v} = ${a + s}.`]; }, 14);
  B.tpl(EQ, (r) => { const v = vr(r), a = ri(r, 2, 12), s = ri(r, 2, 12); return [`Solve: ${a}${v} = ${a * s}`, near(r, s, [-1, 1, a, 2, -2], String), 0, `Divide both sides by ${a}: ${v} = ${s}.`]; }, 14);
  B.tpl(EQ, (r) => { const v = vr(r), a = ri(r, 2, 12), s = ri(r, 2, 12); return [`Solve: ${v}/${a} = ${s}`, near(r, a * s, [-a, a, 1, 2], String), 0, `Multiply both sides by ${a}: ${v} = ${a * s}.`]; }, 14);
  B.tpl(EQ, (r) => { const n = nm(r), a = ri(r, 5, 40), s = ri(r, 3, 30); return [`${n} had some stickers. After getting ${a} more, ${n} has ${a + s}. How many did ${n} have at first?`, near(r, s, [-a, a, 1, -1], String), 0, `x + ${a} = ${a + s}, so x = ${s}.`]; }, 10);
  B.tpl(EQ, (r) => { const n = nm(r), c = ri(r, 2, 12), q = ri(r, 3, 12); return [`${n} buys ${q} snacks for $${c * q} in all. How much does each snack cost?`, near(r, c, [-1, 1, 2, c * q - c], (x) => "$" + x), 0, `${q}x = ${c * q}, so x = ${c}.`]; }, 10);
  B.tpl(EQ, (r) => { const v = vr(r), a = ri(r, 2, 12), s = ri(r, 2, 12); const ok = r() < 0.5; const c = ok ? s : s + ri(r, 1, 3); return [`Is ${v} = ${c} a solution of ${a}${v} = ${a * s}?`, ok ? ["Yes", "No"] : ["No", "Yes"], 0, `${a} × ${c} = ${a * c}, which ${ok ? "equals" : "does not equal"} ${a * s}.`]; }, 10);
  B.tpl(EQ, (r) => { const a = ri(r, 2, 9), s = ri(r, 2, 12); return [`Which equation matches 'a number divided by ${a} equals ${s}'?`, T.mc(r, `x ÷ ${a} = ${s}`, [`${a}x = ${s}`, `x − ${a} = ${s}`, `${a} ÷ x = ${s}`]), 0, `Divided by means ÷.`]; }, 6);
  A("equations", `
What is an equation?|a statement that two expressions are equal|an expression|a number|=>Has an equal sign.
What is a variable?|a letter that stands for an unknown number|a number|an operation|=>x, n.
What does it mean to solve an equation?|find the value of the variable that makes it true|add all the numbers|graph it|=>Isolate the variable.
What is the inverse operation of addition?|subtraction|multiplication|addition|=>Undoes addition.
What is the inverse operation of subtraction?|addition|division|subtraction|=>Undoes subtraction.
What is the inverse operation of multiplication?|division|subtraction|addition|=>Undoes multiplication.
What is the inverse operation of division?|multiplication|subtraction|addition|=>Undoes division.
To solve x + 6 = 11, what do you do?|subtract 6 from both sides|add 6 to both sides|divide by 6|=>Undo addition.
To solve x − 4 = 7, what do you do?|add 4 to both sides|subtract 4|divide by 4|=>Undo subtraction.
To solve 5x = 30, what do you do?|divide both sides by 5|multiply by 5|subtract 5|=>Undo multiplication.
To solve x/3 = 8, what do you do?|multiply both sides by 3|divide by 3|add 3|=>Undo division.
Why do you do the same thing to both sides?|to keep the equation balanced|to make it longer|to change it|=>Equality.
Solve: x + 8 = 15|7|23|−7|=>15 − 8.
Solve: x − 6 = 9|15|3|−3|=>9 + 6.
Solve: 4x = 28|7|32|112|=>28 ÷ 4.
Solve: x/5 = 6|30|1.2|11|=>6 × 5.
Solve: 9 + x = 20|11|29|−11|=>20 − 9.
Solve: x + 0.5 = 2|1.5|2.5|1|=>2 − 0.5.
Solve: x − 1.5 = 3|4.5|1.5|3|=>3 + 1.5.
Solve: 0.5x = 4|8|2|4.5|=>4 ÷ 0.5.
Solve: x/4 = 2.5|10|0.625|6.5|=>2.5 × 4.
Solve: x + 1/2 = 3/2|1|2|1/2|=>3/2 − 1/2.
Which value of x makes x + 7 = 12 true?|5|19|−5|=>5 + 7.
Which value of x makes 3x = 18 true?|6|15|54|=>3 × 6.
Which value of x makes x/2 = 10 true?|20|5|12|=>20 ÷ 2.
How can you check your answer?|substitute it into the equation|add the answer to itself|multiply by 2|=>Plug in.
Check: Is x = 5 a solution of x + 4 = 9?|Yes|No|Cannot tell|=>5 + 4 = 9.
Check: Is x = 7 a solution of 2x = 16?|No|Yes|Cannot tell|=>2 × 7 = 14.
Which equation matches 'a number plus 5 equals 12'?|x + 5 = 12|x − 5 = 12|5x = 12|=>Plus means add.
Which equation matches 'a number minus 5 equals 12'?|x − 5 = 12|x + 5 = 12|5 − x = 12|=>Minus means subtract.
Which equation matches '5 times a number equals 40'?|5x = 40|x/5 = 40|x + 5 = 40|=>Times means multiply.
Which equation matches 'a number divided by 5 equals 8'?|x/5 = 8|5x = 8|x − 5 = 8|=>Divided by means ÷.
A book costs $x. After a $5 discount it costs $12. Which equation?|x − 5 = 12|x + 5 = 12|5x = 12|=>Original minus discount.
You earn $x each week. After 4 weeks you have $60. Which equation?|4x = 60|x/4 = 60|x + 4 = 60|=>Weeks × weekly pay.
You share 24 cookies among x friends and each gets 6. Which equation?|24 ÷ x = 6|24x = 6|x + 24 = 6|=>Total ÷ friends.
Mia had x marbles, lost 8, and has 15 left. Which equation?|x − 8 = 15|x + 8 = 15|8x = 15|=>Start minus lost.
What is a coefficient?|the number multiplied by a variable|the variable|a constant|=>In 4x, it's 4.
What is a constant?|a number that doesn't change|a variable|an operation|=>Like 7.
What is an expression?|a phrase with numbers, variables, and operations but no equal sign|an equation|a solution|=>3x + 2.
True or false: x + 5 = 9 and x = 4 mean the same thing.|True|False|=>x = 4 is the solution.
True or false: You may subtract from only one side of an equation.|False|True|=>Both sides.
True or false: The solution to 3x = 12 is x = 36.|False|True|=>x = 4.
`);

  /* ---- coordinate plane ---- */
  const CP = K("coordinate-plane");
  const quad = (x, y) => (x > 0 && y > 0 ? "I" : x < 0 && y > 0 ? "II" : x < 0 && y < 0 ? "III" : x > 0 && y < 0 ? "IV" : "on an axis");
  B.tpl(CP, (r) => { const x = ri(r, -9, 9), y = ri(r, -9, 9); if (!x || !y) return null; const q = quad(x, y); return [`In which quadrant is the point (${mn(x)}, ${mn(y)})?`, T.mc(r, "Quadrant " + q, ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"].filter((z) => z !== "Quadrant " + q)), 0, `x is ${x > 0 ? "positive" : "negative"} and y is ${y > 0 ? "positive" : "negative"}.`]; }, 20);
  B.tpl(CP, (r) => { const x = ri(r, -8, 8), y = ri(r, -8, 8); return [`Start at (0, 0). Move ${Math.abs(x)} units ${x >= 0 ? "right" : "left"} and ${Math.abs(y)} units ${y >= 0 ? "up" : "down"}. Where do you end?`, T.mc(r, `(${mn(x)}, ${mn(y)})`, [`(${mn(y)}, ${mn(x)})`, `(${mn(-x)}, ${mn(y)})`, `(${mn(x)}, ${mn(-y)})`].filter((z, i, a) => a.indexOf(z) === i && z !== `(${mn(x)}, ${mn(y)})`)), 0, `Right/left changes x; up/down changes y.`]; }, 14);
  B.tpl(CP, (r) => { const x = ri(r, -8, 8), y = ri(r, -8, 8); if (!x) return null; return [`What is the reflection of (${mn(x)}, ${mn(y)}) across the y-axis?`, T.mc(r, `(${mn(-x)}, ${mn(y)})`, [`(${mn(x)}, ${mn(-y)})`, `(${mn(-x)}, ${mn(-y)})`, `(${mn(y)}, ${mn(x)})`].filter((z, i, a) => a.indexOf(z) === i && z !== `(${mn(-x)}, ${mn(y)})`)), 0, `Reflecting across the y-axis changes the sign of x.`]; }, 10);
  B.tpl(CP, (r) => { const x = ri(r, -8, 8), y = ri(r, -8, 8); if (!y) return null; return [`What is the reflection of (${mn(x)}, ${mn(y)}) across the x-axis?`, T.mc(r, `(${mn(x)}, ${mn(-y)})`, [`(${mn(-x)}, ${mn(y)})`, `(${mn(-x)}, ${mn(-y)})`, `(${mn(y)}, ${mn(x)})`].filter((z, i, a) => a.indexOf(z) === i && z !== `(${mn(x)}, ${mn(-y)})`)), 0, `Reflecting across the x-axis changes the sign of y.`]; }, 10);
  B.tpl(CP, (r) => { const x1 = ri(r, -6, 6), y1 = ri(r, -6, 6), dx = ri(r, 1, 8); return [`The points (${mn(x1)}, ${mn(y1)}) and (${mn(x1 + dx)}, ${mn(y1)}) are on a horizontal line. How far apart are they?`, near(r, dx, [-1, 1, 2, -2].map((x) => x), String), 0, `Subtract the x-coordinates: ${dx}.`]; }, 8);
  B.tpl(CP, (r) => { const x1 = ri(r, -6, 6), y1 = ri(r, -6, 6), dy = ri(r, 1, 8); return [`The points (${mn(x1)}, ${mn(y1)}) and (${mn(x1)}, ${mn(y1 + dy)}) are on a vertical line. How far apart are they?`, near(r, dy, [-1, 1, 2, -2].map((x) => x), String), 0, `Subtract the y-coordinates: ${dy}.`]; }, 8);
  B.tpl(CP, (r) => { const x = ri(r, 1, 8), y = ri(r, 1, 8); const a = ri(r, 1, 6), b = ri(r, 1, 6); return [`A rectangle has corners at (0, 0), (${x}, 0), (${x}, ${y}), and (0, ${y}). What is its area?`, near(r, x * y, [-x, x, y, x + y].map((z) => z), String), 0, `Length ${x} × width ${y} = ${x * y}.`]; }, 8);
  B.tpl(CP, (r) => { const x = ri(r, -8, 8), y = ri(r, -8, 8); return [`What is the ordered pair for a point ${Math.abs(x)} ${x >= 0 ? "right" : "left"} and ${Math.abs(y)} ${y >= 0 ? "up" : "down"} from the origin?`, T.mc(r, `(${mn(x)}, ${mn(y)})`, [`(${mn(y)}, ${mn(x)})`, `(${mn(-x)}, ${mn(y)})`, `(${mn(x)}, ${mn(-y)})`].filter((z, i, a) => a.indexOf(z) === i && z !== `(${mn(x)}, ${mn(y)})`)), 0, `(x, y): horizontal first, then vertical.`]; }, 10);
  A("coordinate-plane", `
What is the coordinate plane?|a grid formed by a horizontal x-axis and a vertical y-axis|a type of graph|a type of map|=>Cartesian plane.
What is the x-axis?|the horizontal number line|the vertical number line|the origin|=>Left–right.
What is the y-axis?|the vertical number line|the horizontal number line|the origin|=>Up–down.
What is the origin?|the point (0, 0) where the axes meet|the x-axis|the y-axis|=>Center.
What is an ordered pair?|two numbers (x, y) that name a point|a pair of lines|a pair of axes|=>Coordinates.
In (3, 5), which number is the x-coordinate?|3|5|8|=>First number.
In (3, 5), which number is the y-coordinate?|5|3|8|=>Second number.
Which direction does the x-coordinate tell you to move?|left or right|up or down|diagonally|=>Horizontal.
Which direction does the y-coordinate tell you to move?|up or down|left or right|diagonally|=>Vertical.
Where is the point (0, 0)?|the origin|on the x-axis only|on the y-axis only|=>Center.
Where is the point (4, 0)?|on the x-axis|on the y-axis|at the origin|=>y = 0.
Where is the point (0, −3)?|on the y-axis|on the x-axis|in Quadrant I|=>x = 0.
How many quadrants are there?|4|2|8|=>I, II, III, IV.
In which direction are the quadrants numbered?|counterclockwise starting at the upper right|clockwise|left to right|=>I top right.
Which quadrant has positive x and positive y?|Quadrant I|Quadrant II|Quadrant III|=>Upper right.
Which quadrant has negative x and positive y?|Quadrant II|Quadrant I|Quadrant IV|=>Upper left.
Which quadrant has negative x and negative y?|Quadrant III|Quadrant I|Quadrant IV|=>Lower left.
Which quadrant has positive x and negative y?|Quadrant IV|Quadrant I|Quadrant II|=>Lower right.
In which quadrant is (2, 3)?|I|II|IV|=>Both positive.
In which quadrant is (−4, 1)?|II|I|III|=>x negative, y positive.
In which quadrant is (−2, −7)?|III|II|IV|=>Both negative.
In which quadrant is (5, −5)?|IV|I|III|=>x positive, y negative.
Which point is on the y-axis?|(0, 6)|(6, 0)|(6, 6)|=>x = 0.
Which point is on the x-axis?|(−3, 0)|(0, −3)|(−3, −3)|=>y = 0.
Which point is in Quadrant II?|(−1, 5)|(1, 5)|(−1, −5)|=>Negative x, positive y.
Which point is in Quadrant IV?|(3, −2)|(−3, 2)|(−3, −2)|=>Positive x, negative y.
Which point is 3 right and 2 up from the origin?|(3, 2)|(2, 3)|(−3, 2)|=>(x, y).
Which point is 4 left and 1 down from the origin?|(−4, −1)|(4, 1)|(−1, −4)|=>Left is negative x.
What is the distance between (1, 2) and (6, 2)?|5|4|7|=>Subtract x's.
What is the distance between (3, 1) and (3, 8)?|7|5|9|=>Subtract y's.
What is the distance between (−2, 4) and (3, 4)?|5|1|6|=>3 − (−2) = 5.
What is the distance between (0, −4) and (0, 3)?|7|1|−7|=>3 − (−4).
What happens to a point when it is reflected across the x-axis?|its y-coordinate changes sign|its x-coordinate changes sign|nothing|=>Flip vertically.
What happens to a point when it is reflected across the y-axis?|its x-coordinate changes sign|its y-coordinate changes sign|nothing|=>Flip horizontally.
What is the reflection of (2, 3) across the x-axis?|(2, −3)|(−2, 3)|(−2, −3)|=>Change the sign of y.
What is the reflection of (−4, 1) across the y-axis?|(4, 1)|(−4, −1)|(4, −1)|=>Change the sign of x.
What is a translation?|sliding a figure without turning or flipping|flipping a figure|turning a figure|=>Moves it.
If (2, 3) is translated 4 units right, what is the new point?|(6, 3)|(2, 7)|(−2, 3)|=>x + 4.
If (2, 3) is translated 5 units down, what is the new point?|(2, −2)|(−3, 3)|(7, 3)|=>y − 5.
If (−1, 4) is translated 3 units left and 2 units up, what is the new point?|(−4, 6)|(2, 6)|(−4, 2)|=>x − 3, y + 2.
What does a graph of a line show?|a relationship between two quantities|only one number|a list|=>x and y.
How do you plot the point (−3, 2)?|start at the origin, go 3 left and 2 up|go 3 right and 2 up|go 2 left and 3 up|=>(x, y).
Which axis do you move along first when plotting?|x-axis|y-axis|either|=>Run before you jump.
True or false: (3, 5) and (5, 3) are the same point.|False|True|=>Order matters.
True or false: The origin is (0, 0).|True|False|=>Center.
True or false: A point on the x-axis has y = 0.|True|False|=>Yes.
`);

  /* ---- honors literary analysis ---- */
  A("literary-analysis", `
What is theme?|the central message or insight about life in a text|the setting|the plot|=>A full statement.
Which is the best statement of a theme?|Perseverance can help you overcome obstacles.|Perseverance|A girl finishes a race.|=>A theme is a message.
What is the difference between theme and topic?|a topic is a subject; a theme is a message about it|they are the same|a theme is a title|=>Friendship vs. friends support each other.
What is a symbol?|an object or image that stands for a deeper idea|a rhyme|a character|=>A dove stands for peace.
What might a storm symbolize?|conflict or trouble|calm|joy|=>Turmoil.
What might a locked door symbolize?|a barrier or secret|a party|a gift|=>Obstacle.
What might a bird in a cage symbolize?|lack of freedom|joy|friendship|=>Trapped.
What is character development?|how a character changes during a story|the setting|the title|=>Growth.
How can you track character development?|compare the character's actions and feelings at the beginning and end|read only the title|count the pages|=>Change over time.
What is a dynamic character?|a character who changes|a character who stays the same|a minor character|=>Grows.
What is a static character?|a character who stays the same|a character who changes|the narrator|=>Unchanged.
What is a round character?|a complex character with many traits|a simple character|a minor character|=>Realistic.
What is a flat character?|a simple character with few traits|a complex character|the narrator|=>Stereotype.
What is the protagonist?|the main character|the villain|the narrator|=>The hero.
What is the antagonist?|the character or force opposing the protagonist|the main character|the narrator|=>Opponent.
What is internal conflict?|a struggle inside a character|a fight between characters|a storm|=>Character vs. self.
What is external conflict?|a struggle between a character and an outside force|a struggle in the mind|a poem|=>Character vs. nature, society, character.
What is textual evidence?|specific details from the text that support a claim|your opinion|the title|=>Proof.
How do you use textual evidence?|quote or paraphrase the text and explain how it supports your idea|state an opinion only|copy a paragraph|=>Cite and explain.
Which sentence is strong evidence for 'Max is brave'?|Max stepped forward to defend his friend when no one else would.|Max has brown hair.|Max likes pizza.|=>A brave action.
Which sentence is strong evidence for 'Mia is lonely'?|She ate lunch alone and stared at the empty seat beside her.|She liked soup.|She wore a coat.|=>Shows isolation.
What is point of view?|the perspective from which a story is told|the plot|the theme|=>Narrator.
How does first-person point of view affect a story?|readers know only the narrator's thoughts and feelings|readers know everyone's thoughts|readers know nothing|=>Limited.
How does third-person omniscient point of view affect a story?|readers know many characters' thoughts|readers know only one character|readers know nothing|=>Broad.
What is mood?|the feeling the text creates for the reader|the author's attitude|the setting|=>Atmosphere.
What is tone?|the author's attitude toward the subject|the reader's feelings|the setting|=>Word choice.
What is foreshadowing?|hints about what will happen later|a flashback|a rhyme|=>Clues.
What is irony?|a contrast between expectation and reality|a rhyme|a type of symbol|=>Surprise.
What is situational irony?|the outcome is opposite of what is expected|saying the opposite|an audience knowing more|=>Fire station burns.
What is dramatic irony?|the audience knows something the characters do not|a character lies|a surprise ending|=>Suspense.
What is imagery?|language that appeals to the senses|a rhyme|a symbol|=>Sights and sounds.
What is a motif?|a recurring element or idea in a text|a rhyme|a character|=>Repeated.
What is a flashback?|a scene that goes back in time|a hint about the future|a rhyme|=>Past events.
What is the climax?|the turning point or most intense moment|the introduction|the ending|=>Peak.
What is the resolution?|how the conflict is resolved|the setting|the theme|=>Ending.
How does setting affect a story?|it can shape mood, conflict, and characters' choices|it has no effect|it is only the title|=>Time and place matter.
What is an allegory?|a story in which characters and events represent deeper ideas|a poem|a biography|=>Animal Farm.
What is a fable?|a short story that teaches a lesson, often with animals|a long novel|a poem|=>Aesop.
What does it mean to analyze a text?|to break it into parts to understand how they work together|to memorize it|to skim it|=>Close reading.
What does it mean to compare two characters?|tell how they are alike and different|summarize the story|find the setting|=>Compare and contrast.
What does it mean to infer?|use clues and what you know to reach a conclusion|copy the text|guess|=>Reading between the lines.
A character slams a door and stomps away. What can you infer?|The character is angry.|The character is sleepy.|The character is happy.|=>Actions show feelings.
A character grins and jumps up and down. What can you infer?|The character is excited.|The character is sad.|The character is bored.|=>Body language.
What does 'show, don't tell' mean?|use actions and details to reveal feelings|only state the feeling|avoid details|=>Descriptive writing.
Which sentence shows rather than tells?|Her hands trembled as she opened the letter.|She was nervous.|She felt nervous.|=>Shows through action.
What is an author's purpose?|the reason an author writes|the theme|the setting|=>Inform, persuade, entertain.
What is dialogue?|characters' spoken words|the setting|the plot|=>Reveals character.
What is a narrator?|the voice that tells the story|the author|the main character always|=>May be a character.
What is the difference between summary and analysis?|a summary retells; analysis explains how and why|they are the same|analysis is shorter|=>Deeper thinking.
What does 'figurative language' do?|adds meaning beyond the literal words|states facts|shortens a text|=>Similes, metaphors.
How can a title help you understand a text?|it may hint at the theme or main idea|it shows the ending|it lists the characters|=>Clues.
What is a literary device?|a technique authors use to create effects|a type of book|a type of font|=>Symbolism, foreshadowing.
`);

  A("argument", `
What is an argument in writing?|a claim supported by reasons and evidence|a fight|a story|=>Persuasion.
What is a claim?|a statement that gives your position|a fact|the title|=>Your position.
What is a reason?|a statement that explains why your claim is true|the claim|the title|=>Because...
What is evidence?|facts, examples, or expert quotes that support reasons|an opinion|the title|=>Proof.
What is reasoning?|explaining how evidence supports a claim|the claim|the title|=>Connects.
What is a counterclaim?|an opposing viewpoint|your claim|your evidence|=>Other side.
What is a rebuttal?|a response that answers an opposing viewpoint|a claim|a conclusion|=>Answer.
Which is a claim?|Our school should have a longer recess.|Recess is 20 minutes.|Students play outside.|=>An arguable position.
Which is a fact that could be used as evidence?|Studies show that exercise helps students focus.|Recess is the best.|Everyone loves recess.|=>Verifiable.
Which is an opinion?|Recess should be longer.|Recess is 20 minutes.|Recess happens outside.|=>Belief.
What makes evidence strong?|it is relevant, accurate, and from a reliable source|it is long|it is funny|=>Quality.
Which source is the most reliable for facts about health?|a medical journal|an anonymous blog|a rumor|=>Experts.
What is an emotional appeal?|persuading by stirring feelings|persuading with facts|persuading with experts|=>Pathos.
What is a logical appeal?|persuading with facts and reasoning|persuading with feelings|persuading with fame|=>Logos.
What is a credibility appeal?|persuading by showing trustworthiness|persuading with data|persuading with fear|=>Ethos.
What is bias?|a one-sided slant|neutrality|a fact|=>Unfair preference.
What is a loaded word?|a word with strong emotion meant to sway readers|a neutral word|a long word|=>Slanted.
Which word is more loaded?|disaster|event|situation|=>Strong emotion.
What is a transition word that adds a reason?|also|however|but|=>Also.
What is a transition word that shows contrast?|however|also|furthermore|=>However.
What is a good opening for an argument?|a hook that introduces the topic and claim|a list of sources|a long summary|=>Grab attention.
What is a good closing for an argument?|restate the claim and leave a final thought|add new topics|list sources|=>Wrap up.
What is a call to action?|a statement that urges readers to do something|a fact|a title|=>Final push.
What is a debate?|a formal discussion where sides argue opposing positions|a casual chat|a story|=>Structured.
What is a rebuttal in a debate?|a response to the other team's argument|a claim|a vote|=>Counter.
What is a good way to respond to a counterclaim?|acknowledge it and explain why your claim is stronger|ignore it|call names|=>Respectful.
What is an ad hominem attack?|attacking the person instead of the argument|attacking the claim|citing evidence|=>Unfair.
What is a bandwagon appeal?|saying something is right because everyone does it|giving evidence|citing experts|=>Popularity.
What is a hasty generalization?|a conclusion from too little evidence|a careful conclusion|a fact|=>Small sample.
What is a false cause?|assuming one thing caused another just because it came first|a true cause|a fact|=>Rooster crowing.
What is a straw man?|misrepresenting an opponent's argument to attack it|citing evidence|using data|=>Fake target.
What is a slippery slope?|claiming one step will lead to extreme consequences without proof|a logical conclusion|a fact|=>Exaggerated chain.
What is a false dilemma?|presenting only two choices when more exist|presenting many choices|a fact|=>Either-or.
Which is an example of a bandwagon appeal?|Everybody is buying these shoes, so you should too.|These shoes were tested by experts.|These shoes cost $20.|=>Popularity.
Which is an example of a hasty generalization?|I met two rude people there, so everyone there is rude.|Most people there are polite.|The town has 5,000 people.|=>Too little evidence.
Which is the strongest reason?|Exercise improves memory, according to several studies.|I like exercise.|Exercise is cool.|=>Evidence-based.
Which is the strongest claim?|Our school should add a recycling program because it reduces waste.|Recycling is nice.|I like recycling.|=>Reason included.
Why should writers consider their audience?|to choose words and evidence that persuade them|to avoid evidence|to hide the claim|=>Tailor the message.
What is formal tone?|serious and polished language|casual language|slang|=>Essays.
How do statistics support an argument?|they provide numbers as evidence|they replace reasoning|they are always wrong|=>Data.
What is a survey?|a set of questions used to gather opinions|a type of essay|a type of speech|=>Evidence source.
What is an anecdote?|a short personal story used as an example|a statistic|a study|=>Illustration.
What is a quotation?|the exact words of a source|a paraphrase|a summary|=>Cite it.
What is paraphrasing?|restating in your own words|copying|ignoring|=>Rewrite.
What does 'cite your source' mean?|tell where information came from|ignore the source|copy it|=>Credit.
What is plagiarism?|using someone else's words as your own|quoting with credit|summarizing with credit|=>Dishonest.
What is a thesis statement?|a sentence that states the main claim of an essay|a quote|a title|=>Controlling idea.
What does it mean to 'counter' an argument?|to respond with evidence against it|to agree|to ignore it|=>Rebut.
Why is it important to be respectful in a debate?|it keeps the discussion productive|it doesn't matter|to win by volume|=>Courtesy.
What is a persuasive speech?|a speech meant to convince an audience|a speech to entertain|a speech to inform|=>Argument.
`);
})();
