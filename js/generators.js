/* Random math problem generators. Each returns [question, choices, answerIndex, explanation].
   The correct answer is always choices[0]; the quiz engine shuffles choices. */
(function () {
  "use strict";
  const r = (lo, hi) => lo + Math.floor(Math.random() * (hi - lo + 1));
  const pick = (arr) => arr[r(0, arr.length - 1)];
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const fmt = (n) => n.toLocaleString("en-US");
  const dec = (n, places = 2) => String(Number(n.toFixed(places)));

  // Builds a choice list from the answer plus distinct distractors.
  function choices(answer, distractors, fallback) {
    const out = [String(answer)];
    for (const d of distractors) {
      const s = String(d);
      if (!out.includes(s) && out.length < 4) out.push(s);
    }
    // Default distractor: nudge the last number in the answer up or down.
    fallback = fallback || (() => String(answer).replace(/\d+(?!.*\d)/, (m) => String(Math.max(0, Number(m) + pick([-2, -1, 1, 2, 3])))));
    let tries = 0;
    while (out.length < 4 && tries++ < 50) {
      const s = String(fallback());
      if (!out.includes(s)) out.push(s);
    }
    return out;
  }
  const near = (n, spread) => () => n + pick([-1, 1]) * r(1, spread);

  function frac(n, d) {
    const g = gcd(n, d);
    n /= g; d /= g;
    return d === 1 ? String(n) : `${n}/${d}`;
  }

  const G = {
    // ----- Grade 3 -----
    add3() {
      const a = r(100, 699), b = r(100, 299), s = a + b;
      return [`${a} + ${b} = ?`, choices(s, [s + 10, s - 10, s + 100, s - 1]), 0, `Line up the place values and add ones, tens, then hundreds. Regroup when a column is 10 or more.`];
    },
    sub3() {
      const a = r(400, 999), b = r(100, a - 50), d = a - b;
      return [`${a} − ${b} = ?`, choices(d, [d + 10, d - 10, d + 100, a + b]), 0, `Subtract each place value, starting with the ones. Regroup (borrow) when the top digit is smaller. Check: ${d} + ${b} = ${a}.`];
    },
    multFacts() {
      const a = r(0, 10), b = r(1, 10), p = a * b;
      return [`${a} × ${b} = ?`, choices(p, [p + a, p - b, a + b, p + 1].filter((x) => x >= 0), near(p, 6)), 0, `${a} × ${b} means ${b} groups of ${a}, or ${a} groups of ${b}. That's ${p}.`];
    },
    divFacts() {
      const b = r(1, 10), q = r(1, 10), a = b * q;
      return [`${a} ÷ ${b} = ?`, choices(q, [q + 1, q - 1, a - b, b].filter((x) => x >= 0), near(q, 4)), 0, `Think of the related multiplication fact: ${b} × ${q} = ${a}, so ${a} ÷ ${b} = ${q}.`];
    },
    round3() {
      const n = r(101, 9899);
      if (Math.random() < 0.5) {
        const ans = Math.round(n / 10) * 10;
        return [`Round ${fmt(n)} to the nearest ten.`, choices(fmt(ans), [fmt(Math.floor(n / 10) * 10 === ans ? ans + 10 : ans - 10), fmt(Math.round(n / 100) * 100), fmt(n), fmt(ans + 20), fmt(Math.max(ans - 20, 0))]), 0, `Look at the ones digit. 5 or more rounds up; 4 or less stays.`];
      }
      const ans = Math.round(n / 100) * 100;
      return [`Round ${fmt(n)} to the nearest hundred.`, choices(fmt(ans), [fmt(Math.floor(n / 100) * 100 === ans ? ans + 100 : ans - 100), fmt(Math.round(n / 10) * 10), fmt(Math.round(n / 1000) * 1000), fmt(ans + 200), fmt(Math.max(ans - 200, 0))]), 0, `Look at the tens digit. 5 or more rounds up; 4 or less stays.`];
    },
    placeValue3() {
      const n = r(1000, 99999), s = String(n), i = r(0, s.length - 1);
      const names = ["ones", "tens", "hundreds", "thousands", "ten thousands"];
      const place = s.length - 1 - i;
      const val = Number(s[i]) * Math.pow(10, place);
      return [`What is the value of the digit ${s[i]} in ${fmt(n)}?`, choices(fmt(val), [s[i], fmt(val * 10), fmt(val >= 10 ? val / 10 : val * 100)], () => fmt(r(1, 9) * 100)), 0, `The ${s[i]} is in the ${names[place]} place, so its value is ${fmt(val)}.`];
    },
    fracCompare3() {
      const d = pick([2, 3, 4, 6, 8, 10, 12]);
      let a = r(1, d - 1), b = r(1, d - 1);
      if (d === 2) { a = 1; b = 1; }
      if (Math.random() < 0.5 || d === 2) {
        // same numerator, different denominators
        const n = 1, d1 = pick([2, 3, 4, 6, 8]), d2 = pick([3, 4, 6, 8, 12].filter((x) => x !== d1));
        const big = d1 < d2 ? `${n}/${d1}` : `${n}/${d2}`;
        return [`Which fraction is greater: ${n}/${d1} or ${n}/${d2}?`, choices(big, [d1 < d2 ? `${n}/${d2}` : `${n}/${d1}`, "They are equal"]), 0, `When the numerators are the same, the fraction with the smaller denominator is greater. Fewer pieces means each piece is bigger.`];
      }
      if (a === b) b = a === d - 1 ? a - 1 : a + 1;
      const big = a > b ? `${a}/${d}` : `${b}/${d}`;
      const small = a > b ? `${b}/${d}` : `${a}/${d}`;
      return [`Which fraction is greater: ${a}/${d} or ${b}/${d}?`, choices(big, [small, "They are equal"]), 0, `When the denominators are the same, compare the numerators. More pieces of the same size is greater.`];
    },
    elapsed3() {
      const h = r(1, 10), m = pick([0, 5, 10, 15, 20, 30, 45]), add = pick([15, 20, 30, 45, 60, 75, 90, 120]);
      const tot = h * 60 + m + add;
      const t = (mins) => { let hh = Math.floor(mins / 60) % 12; if (hh === 0) hh = 12; return `${hh}:${String(mins % 60).padStart(2, "0")}`; };
      return [`A movie starts at ${t(h * 60 + m)}. It lasts ${add >= 60 ? `${Math.floor(add / 60)} hour${add >= 120 ? "s" : ""}${add % 60 ? ` and ${add % 60} minutes` : ""}` : `${add} minutes`}. What time does it end?`, choices(t(tot), [t(tot + 15), t(tot - 15), t(tot + 60)]), 0, `Count forward from the start time: first the hours, then the minutes.`];
    },
    perimeter3() {
      const l = r(2, 15), w = r(2, 12), p = 2 * (l + w);
      return [`A rectangle is ${l} cm long and ${w} cm wide. What is its perimeter?`, choices(`${p} cm`, [`${l * w} cm`, `${l + w} cm`, `${p + 2} cm`]), 0, `Perimeter is the distance around: ${l} + ${w} + ${l} + ${w} = ${p} cm.`];
    },
    area3() {
      const l = r(2, 10), w = r(2, 9), a = l * w;
      return [`A rectangle is ${l} units long and ${w} units wide. What is its area?`, choices(`${a} square units`, [`${2 * (l + w)} square units`, `${l + w} square units`, `${a + l} square units`]), 0, `Area = length × width = ${l} × ${w} = ${a} square units. You can count the unit squares too.`];
    },
    money3() {
      const cost = r(105, 975), paid = cost < 500 ? 500 : 1000, ch = paid - cost;
      const $ = (c) => `$${(c / 100).toFixed(2)}`;
      return [`Something costs ${$(cost)}. You pay with ${$(paid)}. How much change do you get?`, choices($(ch), [$(ch + 10), $(ch - 5 > 0 ? ch - 5 : ch + 25), $(ch + 100)]), 0, `Subtract: ${$(paid)} − ${$(cost)} = ${$(ch)}. You can also count up from ${$(cost)}.`];
    },
    pattern3() {
      const start = r(1, 30), step = r(2, 9), seq = [0, 1, 2, 3].map((k) => start + k * step), nxt = start + 4 * step;
      return [`What comes next? ${seq.join(", ")}, ___`, choices(nxt, [nxt + 1, nxt - step + 1, nxt + step]), 0, `The rule is "add ${step}." ${seq[3]} + ${step} = ${nxt}.`];
    },

    // ----- Grade 5 -----
    decAdd5() {
      const a = r(100, 9999) / 100, b = r(10, 999) / 100, s = a + b;
      return [`${dec(a)} + ${dec(b)} = ?`, choices(dec(s), [dec(s + 0.1), dec(s - 0.01), dec(s * 10)]), 0, `Line up the decimal points, then add like whole numbers.`];
    },
    decSub5() {
      const a = r(500, 9999) / 100, b = r(10, Math.floor(a * 100) - 10) / 100, d = a - b;
      return [`${dec(a)} − ${dec(b)} = ?`, choices(dec(d), [dec(d + 0.1), dec(d + 1), dec(Math.abs(d - 0.01))]), 0, `Line up the decimal points. Add zeros as placeholders if needed, then subtract.`];
    },
    decMult5() {
      const a = r(11, 99) / 10, b = r(2, 9), p = a * b;
      return [`${dec(a, 1)} × ${b} = ?`, choices(dec(p, 1), [dec(p * 10, 1), dec(p / 10, 2), dec(p + b, 1)]), 0, `Multiply ${Math.round(a * 10)} × ${b} = ${Math.round(p * 10)}, then place the decimal: one decimal place in the factors means one in the product.`];
    },
    fracAdd5() {
      const ds = pick([[2, 3], [2, 4], [3, 4], [2, 5], [3, 6], [4, 8], [2, 6], [3, 5], [4, 6]]);
      const a = r(1, ds[0] - 1), b = r(1, ds[1] - 1);
      const add = Math.random() < 0.6;
      const L = (ds[0] * ds[1]) / gcd(ds[0], ds[1]);
      const n = add ? a * (L / ds[0]) + b * (L / ds[1]) : a * (L / ds[0]) - b * (L / ds[1]);
      if (!add && n <= 0) return G.fracAdd5();
      const ans = frac(n, L);
      const wrong = frac(add ? a + b : Math.abs(a - b) || 1, add ? ds[0] + ds[1] : Math.abs(ds[0] - ds[1]) || 1);
      return [`${a}/${ds[0]} ${add ? "+" : "−"} ${b}/${ds[1]} = ? (simplest form)`, choices(ans, [wrong, frac(n + 1, L), frac(Math.max(n - 1, 1), L)]), 0, `Find a common denominator (${L}). ${a}/${ds[0]} = ${a * (L / ds[0])}/${L} and ${b}/${ds[1]} = ${b * (L / ds[1])}/${L}. Then ${add ? "add" : "subtract"} the numerators and simplify.`];
    },
    fracMult5() {
      const d = pick([2, 3, 4, 5, 6, 8]), n = r(1, d - 1), w = d * r(1, 6), ans = (w / d) * n;
      return [`What is ${n}/${d} of ${w}?`, choices(ans, [w / d, w * n, ans + n]), 0, `Divide ${w} by ${d} to get ${w / d}, then multiply by ${n}: ${ans}.`];
    },
    orderOps5() {
      const a = r(2, 9), b = r(2, 9), c = r(2, 6), d = r(1, 9);
      const forms = [
        [`${a} + ${b} × ${c}`, a + b * c, (a + b) * c, `Multiply first: ${b} × ${c} = ${b * c}. Then add ${a}.`],
        [`(${a} + ${b}) × ${c}`, (a + b) * c, a + b * c, `Parentheses first: ${a} + ${b} = ${a + b}. Then multiply by ${c}.`],
        [`${a * c} ÷ ${c} + ${d}`, a + d, (a * c) / (c + d), `Divide first: ${a * c} ÷ ${c} = ${a}. Then add ${d}.`],
        [`${b} × ${c} − ${d}`, b * c - d, b * (c - d), `Multiply first: ${b} × ${c} = ${b * c}. Then subtract ${d}.`],
      ];
      const [e, ans, w, ex] = pick(forms);
      return [`Simplify: ${e}`, choices(ans, [Number.isInteger(w) ? w : ans + c, ans + 1, ans - 2]), 0, ex];
    },
    volume5() {
      const l = r(2, 10), w = r(2, 8), h = r(2, 6), v = l * w * h;
      return [`A rectangular prism is ${l} cm long, ${w} cm wide, and ${h} cm tall. What is its volume?`, choices(`${v} cubic cm`, [`${l * w} cubic cm`, `${l + w + h} cubic cm`, `${2 * (l * w + l * h + w * h)} cubic cm`]), 0, `Volume = length × width × height = ${l} × ${w} × ${h} = ${v} cubic centimeters.`];
    },
    areaTri5() {
      const b = r(2, 14) * 2, h = r(2, 12), a = (b * h) / 2;
      return [`A triangle has a base of ${b} in. and a height of ${h} in. What is its area?`, choices(`${a} sq in.`, [`${b * h} sq in.`, `${b + h} sq in.`, `${a + h} sq in.`]), 0, `Area of a triangle = ½ × base × height = ½ × ${b} × ${h} = ${a} square inches.`];
    },
    mean5() {
      const n = r(4, 6), xs = Array.from({ length: n }, () => r(2, 20));
      const rem = xs.reduce((a, b) => a + b, 0) % n;
      xs[0] += rem ? n - rem : 0;
      const sum = xs.reduce((a, b) => a + b, 0), m = sum / n;
      const type = pick(["mean", "range", "median"]);
      if (type === "range") {
        const rg = Math.max(...xs) - Math.min(...xs);
        return [`What is the range of this data set? ${xs.join(", ")}`, choices(rg, [m, Math.max(...xs), rg + 1]), 0, `Range = greatest − least = ${Math.max(...xs)} − ${Math.min(...xs)} = ${rg}.`];
      }
      if (type === "median") {
        const s = xs.slice().sort((a, b) => a - b);
        const med = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
        return [`What is the median of this data set? ${xs.join(", ")}`, choices(med, [m === med ? med + 1 : m, s[0], s[n - 1]]), 0, `Put the numbers in order: ${s.join(", ")}. The median is the middle${n % 2 ? "" : " (average of the two middle numbers)"}: ${med}.`];
      }
      return [`What is the mean (average) of this data set? ${xs.join(", ")}`, choices(m, [m + 1, m - 1, sum]), 0, `Add them: ${sum}. Divide by how many (${n}): ${sum} ÷ ${n} = ${m}.`];
    },
    prime5() {
      const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
      const comps = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 21, 22, 25, 27, 33, 35, 39, 49, 51, 57, 63, 77, 81, 87, 91];
      const p = pick(primes);
      const cs = [];
      while (cs.length < 3) { const c = pick(comps); if (!cs.includes(c)) cs.push(c); }
      return [`Which number is prime?`, [String(p), ...cs.map(String)], 0, `${p} has exactly two factors: 1 and ${p}. The others have more than two factors.`];
    },
    longDiv5() {
      const b = r(2, 9), q = r(12, 99), rem = r(0, b - 1), a = b * q + rem;
      const ans = rem ? `${q} R${rem}` : String(q);
      return [`${a} ÷ ${b} = ?`, choices(ans, [rem ? `${q + 1} R${rem}` : String(q + 1), rem ? `${q} R${rem + 1 < b ? rem + 1 : 0}` : `${q} R1`, String(q - 1)]), 0, `${b} × ${q} = ${b * q}${rem ? `, with ${rem} left over` : ""}. Check: ${b} × ${q} + ${rem} = ${a}.`];
    },

    // ----- Grade 7 -----
    integers7() {
      const a = r(-15, 15), b = r(-15, 15) || 3;
      const op = pick(["+", "−", "×", "÷"]);
      let q, ans, ex;
      if (op === "+") { ans = a + b; q = `${a} + (${b})`; ex = `Same signs: add and keep the sign. Different signs: subtract and keep the sign of the larger absolute value.`; }
      if (op === "−") { ans = a - b; q = `${a} − (${b})`; ex = `Subtracting is adding the opposite: ${a} + (${-b}) = ${ans}.`; }
      if (op === "×") { ans = a * b; q = `${a} × (${b})`; ex = `Same signs give a positive product; different signs give a negative product.`; }
      if (op === "÷") { ans = a; q = `${a * b} ÷ (${b})`; ex = `Same signs give a positive quotient; different signs give a negative quotient.`; }
      return [`${q} = ?`, choices(ans, [-ans, ans + 2, ans - 1], near(ans, 5)), 0, ex];
    },
    percent7() {
      const p = pick([5, 10, 15, 20, 25, 30, 40, 50, 75]), n = pick([20, 40, 60, 80, 120, 200, 240, 360]), ans = (p / 100) * n;
      if (Math.random() < 0.5) {
        return [`What is ${p}% of ${n}?`, choices(dec(ans), [dec(ans * 10), dec(n - ans), dec(p + n)]), 0, `${p}% = ${p / 100}. Multiply: ${p / 100} × ${n} = ${dec(ans)}.`];
      }
      return [`A $${n} jacket is on sale for ${p}% off. What is the sale price?`, choices(`$${dec(n - ans)}`, [`$${dec(ans)}`, `$${dec(n - p)}`, `$${dec(n + ans)}`]), 0, `Discount = ${p}% of $${n} = $${dec(ans)}. Sale price = $${n} − $${dec(ans)} = $${dec(n - ans)}.`];
    },
    proportion7() {
      const a = r(2, 9), b = pick([2, 3, 4, 5, 6, 7, 8, 9].filter((n) => n !== a)), k = r(2, 8);
      const x = b * k;
      return [`Solve the proportion: ${a}/${b} = ${a * k}/x`, choices(x, [a * k + b, x + k, b + k]), 0, `Cross-multiply: ${a}x = ${b} × ${a * k} = ${b * a * k}. Divide by ${a}: x = ${x}. (Each part was multiplied by ${k}.)`];
    },
    unitRate7() {
      const u = r(2, 9), price = r(2, 12) * 0.25, total = price * u;
      return [`${u} notebooks cost $${total.toFixed(2)}. What is the cost per notebook?`, choices(`$${price.toFixed(2)}`, [`$${(price + 0.25).toFixed(2)}`, `$${(total * u).toFixed(2)}`, `$${(price - 0.25 > 0 ? price - 0.25 : price + 0.5).toFixed(2)}`]), 0, `Unit rate = total ÷ quantity = $${total.toFixed(2)} ÷ ${u} = $${price.toFixed(2)} per notebook.`];
    },
    twoStep7() {
      const a = pick([2, 3, 4, 5, 6, -2, -3]), x = r(-9, 12), b = r(-15, 15), c = a * x + b;
      const bs = b >= 0 ? `+ ${b}` : `− ${-b}`;
      return [`Solve for x: ${a}x ${bs} = ${c}`, choices(`x = ${x}`, [`x = ${-x}`, `x = ${x + 1}`, `x = ${(c + b) / a === x ? x + 2 : Number.isInteger((c + b) / a) ? (c + b) / a : x - 2}`]), 0, `${b >= 0 ? "Subtract" : "Add"} ${Math.abs(b)} on both sides: ${a}x = ${c - b}. Then divide by ${a}: x = ${x}.`];
    },
    slope7() {
      const m = pick([1, 2, 3, 4, 5, -1, -2, -3, 0.5]), x1 = r(-4, 4), y1 = r(-5, 5), dx = pick([2, 4]);
      const x2 = x1 + dx, y2 = y1 + m * dx;
      return [`What is the slope of the line through (${x1}, ${y1}) and (${x2}, ${y2})?`, choices(dec(m), [dec(-m), dec(1 / m), dec(m + 1)]), 0, `Slope = rise ÷ run = (${y2} − ${y1 < 0 ? `(${y1})` : y1}) ÷ (${x2} − ${x1 < 0 ? `(${x1})` : x1}) = ${y2 - y1} ÷ ${dx} = ${dec(m)}.`];
    },
    exponents7() {
      if (Math.random() < 0.5) {
        const n = r(1, 15), sq = n * n;
        return [`What is √${sq}?`, choices(n, [sq / 2, n + 1, n * 2]), 0, `${n} × ${n} = ${sq}, so the square root of ${sq} is ${n}.`];
      }
      const e = r(-4, 6), base = r(1, 9) + r(0, 9) / 10;
      const val = base * Math.pow(10, e);
      const std = e >= 0 ? fmt(Number(val.toFixed(Math.max(0, 1 - e)))) : val.toFixed(-e + 1).replace(/0+$/, "");
      return [`Write ${std} in scientific notation.`, choices(`${base} × 10^${e}`, [`${base} × 10^${-e || 1}`, `${base} × 10^${e + 1}`, `${(base * 10).toFixed(0)} × 10^${e - 1}`]), 0, `Move the decimal so there is one nonzero digit in front (${base}). You moved it ${Math.abs(e)} place${Math.abs(e) === 1 ? "" : "s"} ${e >= 0 ? "left, so the exponent is positive" : "right, so the exponent is negative"}.`];
    },
    cylinder7() {
      const rad = r(1, 6), h = r(2, 10);
      if (Math.random() < 0.5) {
        const v = Math.PI * rad * rad * h;
        return [`A cylinder has radius ${rad} cm and height ${h} cm. What is its volume? (Use π ≈ 3.14, rounded to the nearest whole number)`, choices(`${Math.round(3.14 * rad * rad * h)} cm³`, [`${Math.round(2 * 3.14 * rad * h)} cm³`, `${Math.round(3.14 * rad * h)} cm³`, `${Math.round(3.14 * 2 * rad * 2 * rad * h)} cm³`]), 0, `V = πr²h ≈ 3.14 × ${rad}² × ${h} ≈ ${Math.round(3.14 * rad * rad * h)} cm³.`];
      }
      const l = r(2, 9), w = r(2, 9), hh = r(2, 9), sa = 2 * (l * w + l * hh + w * hh);
      return [`What is the surface area of a rectangular prism ${l} in. × ${w} in. × ${hh} in.?`, choices(`${sa} in²`, [`${l * w * hh} in²`, `${l * w + l * hh + w * hh} in²`, `${sa + 2 * l} in²`]), 0, `SA = 2lw + 2lh + 2wh = 2(${l * w}) + 2(${l * hh}) + 2(${w * hh}) = ${sa} square inches.`];
    },
    probability7() {
      const red = r(1, 6), blue = r(1, 6), green = r(1, 6), tot = red + blue + green;
      const [name, cnt] = pick([["red", red], ["blue", blue], ["green", green]]);
      return [`A bag has ${red} red, ${blue} blue, and ${green} green marbles. What is P(${name})?`, choices(frac(cnt, tot), [frac(tot - cnt, tot), `${cnt}/${tot - cnt || 1}`, frac(1, 3)]), 0, `Probability = favorable ÷ total = ${cnt}/${tot}${gcd(cnt, tot) > 1 ? ` = ${frac(cnt, tot)}` : ""}.`];
    },
    inequality7() {
      const a = pick([2, 3, 4, 5]), x = r(-6, 10), b = r(1, 12), c = a * x + b, sym = pick(["<", ">", "≤", "≥"]);
      return [`Solve: ${a}x + ${b} ${sym} ${c}`, choices(`x ${sym} ${x}`, [`x ${sym} ${-x}`, `x ${{ "<": ">", ">": "<", "≤": "≥", "≥": "≤" }[sym]} ${x}`, `x ${sym} ${x + b}`]), 0, `Subtract ${b}: ${a}x ${sym} ${c - b}. Divide by ${a} (positive, so the sign stays): x ${sym} ${x}.`];
    },

    // ----- Gifted & Advanced -----
    mult2x1() {
      const a = r(12, 98), b = r(3, 9), p = a * b, t = Math.floor(a / 10) * 10, o = a % 10;
      return [`${a} × ${b} = ?`, choices(p, [p + b, p - 10, t * b + o, p + 10]), 0, `Break ${a} into ${t} + ${o}: ${t} × ${b} = ${t * b} and ${o} × ${b} = ${o * b}. Add: ${t * b} + ${o * b} = ${p}.`];
    },
    equivFrac3() {
      const d = pick([2, 3, 4, 5, 6]), n = r(1, d - 1), k = r(2, 4);
      return [`Which fraction is equivalent to ${n}/${d}?`, choices(`${n * k}/${d * k}`, [`${n + k}/${d + k}`, `${n * k}/${d}`, `${n}/${d * k}`]), 0, `Multiply the numerator AND denominator by the same number (${k}): ${n}×${k} = ${n * k}, ${d}×${k} = ${d * k}.`];
    },
    intAdd5() {
      const a = r(-12, 12), b = r(-12, 12) || 4, sub = Math.random() < 0.5;
      const ans = sub ? a - b : a + b;
      const q = sub ? `${a} − (${b})` : `${a} + (${b})`;
      return [`${q} = ?`, choices(ans, [-ans, ans + 2, ans - 2, sub ? a + b : a - b], near(ans, 5)), 0, sub ? `Subtracting is the same as adding the opposite: ${a} + (${-b}) = ${ans}. Picture moving on a number line.` : `Start at ${a} on the number line and move ${b >= 0 ? "right" : "left"} ${Math.abs(b)}: you land on ${ans}.`];
    },
    oneStep5() {
      const x = r(2, 15), k = r(2, 9), op = pick(["+", "−", "×", "÷"]);
      let q, ex;
      if (op === "+") { q = `x + ${k} = ${x + k}`; ex = `Subtract ${k} from both sides: x = ${x}.`; }
      if (op === "−") { q = `x − ${k} = ${x - k}`; ex = `Add ${k} to both sides: x = ${x}.`; }
      if (op === "×") { q = `${k}x = ${k * x}`; ex = `Divide both sides by ${k}: x = ${x}.`; }
      if (op === "÷") { q = `x ÷ ${k} = ${x}`; ex = `Multiply both sides by ${k}: x = ${x * k}.`; }
      const ans = op === "÷" ? x * k : x;
      return [`Solve: ${q}`, choices(`x = ${ans}`, [`x = ${ans + k}`, `x = ${Math.abs(ans - k) || ans + 1}`, `x = ${ans * 2}`]), 0, ex];
    },
    exponent5() {
      const b = r(2, 10), e = b <= 5 ? r(2, 4) : 2, v = Math.pow(b, e);
      return [`What is ${b}^${e}?`, choices(v, [b * e, b + e, v + b]), 0, `${b}^${e} means ${Array(e).fill(b).join(" × ")} = ${v}. It is NOT ${b} × ${e}.`];
    },
    quadrant5() {
      const x = r(-9, 9) || 3, y = r(-9, 9) || -2;
      const q = x > 0 && y > 0 ? "Quadrant I" : x < 0 && y > 0 ? "Quadrant II" : x < 0 && y < 0 ? "Quadrant III" : "Quadrant IV";
      return [`In which quadrant is the point (${x}, ${y})?`, ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"].sort((a, b) => (a === q ? -1 : b === q ? 1 : 0)), 0, `x is ${x > 0 ? "positive (right)" : "negative (left)"} and y is ${y > 0 ? "positive (up)" : "negative (down)"}, so it's in ${q}.`];
    },
    multiStep7() {
      const a = pick([2, 3, 4, 5]), c = pick([1, 2, 3].filter((n) => n !== a)), x = r(-6, 9), b = r(-10, 10), d = (a - c) * x + b;
      const bs = b >= 0 ? `+ ${b}` : `− ${-b}`, ds = d;
      return [`Solve: ${a}x ${bs} = ${c}x + ${ds}`, choices(`x = ${x}`, [`x = ${-x}`, `x = ${x + 1}`, `x = ${x - 2}`]), 0, `Subtract ${c}x from both sides: ${a - c}x ${bs} = ${ds}. Then ${b >= 0 ? "subtract" : "add"} ${Math.abs(b)}: ${a - c}x = ${d - b}. Divide by ${a - c}: x = ${x}.`];
    },
    slopeInt7() {
      const m = pick([-3, -2, -1, 1, 2, 3, 4]), b = r(-6, 6);
      const eq = `y = ${m === 1 ? "" : m === -1 ? "−" : m}x ${b >= 0 ? "+ " + b : "− " + -b}`;
      if (Math.random() < 0.5) return [`What is the slope of ${eq}?`, choices(m, [b, -m, m + 1].filter((v) => v !== m)), 0, `In y = mx + b, m is the slope. Here m = ${m}.`];
      return [`What is the y-intercept of ${eq}?`, choices(b, [m, -b, b + 1].filter((v) => v !== b)), 0, `In y = mx + b, b is the y-intercept (where the line crosses the y-axis). Here b = ${b}.`];
    },
    expLaws7() {
      const b = pick(["x", "a", "n", "2"]), m = r(2, 7), n = r(2, 5), kind = pick(["product", "quotient", "power"]);
      if (kind === "product") return [`Simplify: ${b}^${m} · ${b}^${n}`, choices(`${b}^${m + n}`, [`${b}^${m * n}`, `${b}^${Math.abs(m - n) || 1}`, `${2}${b}^${m + n}`]), 0, `Product rule: same base, ADD the exponents. ${m} + ${n} = ${m + n}.`];
      if (kind === "quotient") { const big = m + n; return [`Simplify: ${b}^${big} ÷ ${b}^${n}`, choices(`${b}^${m}`, [`${b}^${big + n}`, `${b}^${big * n}`, `${b}^${n}`].filter((c) => c !== `${b}^${m}`)), 0, `Quotient rule: same base, SUBTRACT the exponents. ${big} − ${n} = ${m}.`]; }
      return [`Simplify: (${b}^${m})^${n}`, choices(`${b}^${m * n}`, [`${b}^${m + n}`, `${b}^${m}`, `${n}${b}^${m}`]), 0, `Power rule: MULTIPLY the exponents. ${m} × ${n} = ${m * n}.`];
    },
    system7() {
      const x = r(-4, 8), y = r(-4, 8), a = r(1, 3), sum = x + y, diff = a * x - y;
      return [`Solve the system:\nx + y = ${sum}\n${a === 1 ? "" : a}x − y = ${diff}`, choices(`(${x}, ${y})`, [`(${y}, ${x})`, `(${x + 1}, ${y - 1})`, `(${-x}, ${y})`]), 0, `Add the equations to eliminate y: ${a + 1}x = ${sum + diff}, so x = ${x}. Then ${x} + y = ${sum}, so y = ${y}. Check both equations!`];
    },
  };

  window.GENERATORS = G;
})();
