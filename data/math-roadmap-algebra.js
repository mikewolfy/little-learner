/* Extends the Math Roadmap with the full algebra family: Algebra overview, Pre-Algebra, Algebra I, and Algebra II,
   each with a topic-by-topic "deep dive". deepDive item: { title, icon, desc, rules?, example: {q, steps[], a}, mistake: {wrong, right}, practice?: [{label, href}] } */
(function () {
  const MR = window.MATH_ROADMAP;
  const get = (id) => MR.topics.find((t) => t.id === id);

  // ---------- Algebra: the big picture (overview of the three stages) ----------
  const overview = get("algebra");
  Object.assign(overview, {
    title: "Algebra: The Big Picture",
    grades: "6–11", stage: "middle", featured: true, featNote: "⭐ Start here: how Pre-Algebra, Algebra I & II fit together",
    tagline: "One big idea (use letters for unknown numbers) taught at three levels.",
    learn: [
      "Pre-Algebra (grades 6–8): the bridge. Negative numbers, order of operations, expressions, one- and two-step equations, ratios, and slope.",
      "Algebra I (grades 8–9): the heart of algebra. Multi-step equations, graphing lines, systems of equations, polynomials, factoring, quadratics, and functions.",
      "Algebra II (grades 10–11): many kinds of functions. Polynomials, rational and radical expressions, exponentials, logarithms, complex numbers, and sequences.",
    ],
  });
  overview.extras = [
    { title: "The three stages of algebra", table: { head: ["Course", "Typical grades", "What it adds", "A typical problem"], rows: [
      ["Pre-Algebra", "6–8", "Negative numbers, ratios, one- and two-step equations, an introduction to slope", "Solve 3x − 7 = 11"],
      ["Algebra I", "8–9", "Linear equations and graphs, systems, polynomials, factoring, quadratics, and functions", "Solve x² − 5x + 6 = 0"],
      ["Algebra II", "10–11", "Polynomial, rational, radical, exponential, and logarithmic functions; complex numbers; sequences", "Solve 2ˣ = 32 or log₁₀ 1000"],
    ] } },
    { title: "Arithmetic vs. Pre-Algebra vs. Algebra", table: { head: ["", "Arithmetic", "Pre-Algebra", "Algebra"], rows: [
      ["What you work with", "Numbers", "Numbers, negatives, and simple variables", "Variables, expressions, and functions"],
      ["A typical question", "What is 12 + 9?", "Solve x + 9 = 21", "Solve 2x² + 3x − 5 = 0"],
      ["The thinking", "Calculate an answer", "Find an unknown using inverse operations", "Describe and solve relationships and patterns"],
    ] } },
    { title: "Your 7th grader right now", text: "In 7th grade, a student is usually in Pre-Algebra. They work on negative numbers, one- and two-step equations (balancing both sides with a T-chart), inequalities, proportional relationships, and slope. These are exactly the skills Algebra I starts with. If these feel solid, Algebra I will feel like a natural next step. Students in an honors or accelerated pathway often take Algebra I in 8th grade for high school credit." },
  ];
  overview.onSite = [
    { label: "Pre-Algebra: the full breakdown", href: "#/math/pre-algebra" },
    { label: "Algebra I: the full breakdown", href: "#/math/algebra-1" },
    { label: "Algebra II: the full breakdown", href: "#/math/algebra-2" },
    { label: "Grade 7 equation worksheets, riddle sheets & tests", href: "#/worksheets/7" },
  ];
  overview.examples = [
    { q: "Solve 3x + 5 = 20 (Pre-Algebra level)", a: "x = 5", how: "Subtract 5 from both sides: 3x = 15. Divide by 3: x = 5. Check: 3(5) + 5 = 20 ✓" },
    { q: "Solve the system x + y = 10 and x − y = 4 (Algebra I level)", a: "x = 7, y = 3", how: "Add the equations: 2x = 14, so x = 7. Then 7 + y = 10, so y = 3." },
    { q: "Solve 2ˣ = 32 (Algebra II level)", a: "x = 5", how: "2 × 2 × 2 × 2 × 2 = 32, so x = 5." },
  ];

  // ---------- Pre-Algebra ----------
  const pre = get("pre-algebra");
  Object.assign(pre, {
    featured: true, featNote: "⭐ Where Grade 7 is today",
    grades: "6–8",
    tagline: "The bridge from arithmetic to algebra.",
    summary: "Pre-Algebra isn't one new topic. It's the set of skills that make algebra possible: working confidently with negative numbers, using letters for unknown numbers, following the order of operations, and solving simple equations. In arithmetic you calculate an answer; in Pre-Algebra you start to find an unknown. Most students meet it across 6th to 8th grade, and in 7th grade it's usually the main focus. A strong Pre-Algebra year is the best preparation for Algebra I.",
    bigIdea: "Numbers follow rules. Once you know the rules, you can use a letter in place of a number, and the same rules still work.",
  });
  pre.learn = [
    "Integers and rational numbers, including negatives, fractions, decimals, and percents",
    "Exponents, square roots, and scientific notation",
    "Order of operations and simplifying expressions",
    "Variables, combining like terms, and the distributive property",
    "One- and two-step equations and inequalities",
    "Ratios, rates, proportions, and percent problems",
    "Proportional relationships and slope",
    "Introduction to functions and graphing on the coordinate plane",
    "The Pythagorean theorem (grade 8)",
    "Data, statistics, and probability",
  ];
  pre.extras = [
    { title: "Pre-Algebra compared with the courses on either side", table: { head: ["", "Arithmetic (K–5)", "Pre-Algebra (6–8)", "Algebra I (8–9)"], rows: [
      ["Numbers used", "Whole numbers, fractions, decimals", "Adds negatives and rational numbers", "All real numbers"],
      ["Letters (variables)", "Rarely", "Introduced: expressions and simple equations", "Central: equations, functions, polynomials"],
      ["Typical problem", "What is 48 ÷ 6?", "Solve 6x = 48", "Solve 6x² + x − 12 = 0"],
      ["Main skill", "Fast, accurate calculation", "Finding an unknown by undoing operations", "Modeling with and graphing functions"],
    ] } },
    { title: "Where Pre-Algebra shows up in Grade 7 on this site", table: { head: ["Skill", "Where to practice"], rows: [
      ["Negative numbers", "Grade 7: Operations with Integers"],
      ["One-step equations", "Grade 7: One-Step Equations (add/subtract, integers, multiply/divide)"],
      ["Two-step equations", "Grade 7: Expressions & Two-Step Equations"],
      ["Proportional relationships and slope", "Grade 7: Proportional Relationships & Slope"],
      ["Inequalities", "Grade 7: Inequalities"],
    ] } },
  ];
  pre.deepDive = [
    {
      title: "Integers & negative numbers", icon: "➖",
      desc: "Integers are the whole numbers and their opposites (…−3, −2, −1, 0, 1, 2, 3…). Negative numbers show amounts below zero: a temperature of −5°F, a debt of $20, or a dive 30 feet below the surface. Pre-Algebra is where students learn to add, subtract, multiply, and divide them with confidence.",
      rules: ["Adding same signs: add the sizes and keep the sign. −3 + (−4) = −7.", "Adding different signs: subtract the sizes and keep the sign of the larger one. −9 + 4 = −5.", "Subtracting means adding the opposite. 5 − (−2) = 5 + 2 = 7.", "Multiplying or dividing: same signs give a positive; different signs give a negative."],
      example: { q: "Evaluate −8 + 3 − (−6)", steps: ["Rewrite the subtraction as adding the opposite: −8 + 3 + 6", "−8 + 3 = −5", "−5 + 6 = 1"], a: "1" },
      mistake: { wrong: "5 − (−2) = 3", right: "5 − (−2) = 7, because subtracting a negative is the same as adding." },
      practice: [{ label: "Grade 7: Operations with Integers", href: "#/learn/7/math/integers" }, { label: "Integer worksheets", href: "#/worksheet/7/num-int-1" }],
    },
    {
      title: "Rational numbers: fractions, decimals & percents", icon: "🍕",
      desc: "A rational number is any number that can be written as a fraction, which includes decimals and percents (and their negatives). Students compare, order, convert, and compute with them. Comparing is easiest after converting everything to decimals.",
      rules: ["1/2 = 0.5 = 50%.", "On a number line, numbers farther left are smaller, so −0.75 < −0.5.", "To add or subtract fractions, first find a common denominator."],
      example: { q: "Order from least to greatest: −1/2, 0.3, −0.75, 40%", steps: ["Convert to decimals: −0.5, 0.3, −0.75, 0.4", "Negatives are smaller than positives, and −0.75 is farther left than −0.5", "Order: −0.75, −0.5, 0.3, 0.4"], a: "−3/4 (−0.75), −1/2, 0.3, 40%" },
      mistake: { wrong: "−0.5 < −0.75 (because 0.5 is less than 0.75)", right: "−0.75 < −0.5, because for negatives the bigger size means farther left." },
      practice: [{ label: "Grade 7: Comparing Rational Numbers", href: "#/learn/7/math/rational-numbers" }],
    },
    {
      title: "Exponents, roots & scientific notation", icon: "²",
      desc: "An exponent tells how many times to multiply a number by itself: 2⁵ = 2 × 2 × 2 × 2 × 2 = 32. A square root undoes squaring: √49 = 7. Scientific notation uses powers of 10 to write very large or very small numbers, like the distance to the sun or the width of a cell.",
      rules: ["a⁰ = 1 for any nonzero a.", "Perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100.", "Scientific notation looks like (number from 1 to 10) × 10ⁿ."],
      example: { q: "Write 45,000 in scientific notation, and find √81.", steps: ["Move the decimal 4 places left to get 4.5", "45,000 = 4.5 × 10⁴", "9 × 9 = 81, so √81 = 9"], a: "4.5 × 10⁴ and 9" },
      mistake: { wrong: "3² = 6", right: "3² = 3 × 3 = 9. The exponent says how many times to multiply, not what to multiply by." },
      practice: [{ label: "Grade 7: Exponents, Roots & Scientific Notation", href: "#/learn/7/math/exponents" }],
    },
    {
      title: "Order of operations", icon: "🔢",
      desc: "When an expression has several operations, mathematicians agree on one order so everyone gets the same answer: Parentheses, Exponents, then Multiplication and Division (left to right), then Addition and Subtraction (left to right).",
      rules: ["Multiplication and division share the same level: work left to right.", "Addition and subtraction share the same level: work left to right."],
      example: { q: "Simplify 8 + 2 × (7 − 4)² ÷ 3", steps: ["Parentheses: 7 − 4 = 3", "Exponent: 3² = 9", "Multiply and divide left to right: 2 × 9 = 18, then 18 ÷ 3 = 6", "Add: 8 + 6 = 14"], a: "14" },
      mistake: { wrong: "8 + 2 = 10, then 10 × 9 ÷ 3 = 30", right: "Do the multiplication and division before the addition: the answer is 14." },
      practice: [{ label: "Order of operations worksheets", href: "#/worksheet/7/num-order-1" }],
    },
    {
      title: "Variables, expressions & the distributive property", icon: "🔤",
      desc: "A variable is a letter that stands for a number. An expression like 2n + 5 is a recipe for finding a number once you know n. Students learn to evaluate expressions (plug in a value), simplify them by combining like terms, and use the distributive property to multiply across parentheses.",
      rules: ["Like terms have the same variable part: 3x and 2x combine to 5x.", "Distributive property: a(b + c) = ab + ac."],
      example: { q: "Simplify 3(x + 4) + 2x − 5", steps: ["Distribute: 3x + 12 + 2x − 5", "Combine like terms: (3x + 2x) + (12 − 5)", "5x + 7"], a: "5x + 7" },
      mistake: { wrong: "3(x + 4) = 3x + 4", right: "3(x + 4) = 3x + 12. Multiply every term inside the parentheses." },
      practice: [{ label: "Grade 7: Expressions & Two-Step Equations", href: "#/learn/7/math/equations" }],
    },
    {
      title: "One-step & two-step equations", icon: "⚖️",
      desc: "An equation is a balance: both sides are equal. To find the unknown, do the same thing to both sides, using inverse (opposite) operations to get the variable alone. Undo adding by subtracting, undo multiplying by dividing. In a two-step equation, undo the adding or subtracting first, then the multiplying or dividing. Always check by plugging the answer back in.",
      rules: ["Use a T-chart: write the operation under both sides, then simplify.", "Check: put your answer into the original equation."],
      example: { q: "Solve 3x − 7 = 11", steps: ["Add 7 to both sides: 3x = 18", "Divide both sides by 3: x = 6", "Check: 3(6) − 7 = 18 − 7 = 11 ✓"], a: "x = 6" },
      mistake: { wrong: "In g + 18 = 30, adding 18 to both sides to get g = 48", right: "Subtract 18 (the inverse of +18): g = 12. Check: 12 + 18 = 30." },
      practice: [{ label: "Grade 7: One-Step Equations", href: "#/learn/7/math/one-step-add-sub" }, { label: "Equation worksheets & riddles", href: "#/worksheets/7" }],
    },
    {
      title: "Inequalities", icon: "↔️",
      desc: "An inequality compares two amounts with <, >, ≤, or ≥. It has many solutions instead of one, like “x is greater than 5.” You solve it almost exactly like an equation, with one important exception: when you multiply or divide both sides by a negative number, the inequality sign flips.",
      rules: ["Open circle for < or > on a number line; closed circle for ≤ or ≥.", "“At least” means ≥. “At most” means ≤."],
      example: { q: "Solve −2x + 3 > 11", steps: ["Subtract 3 from both sides: −2x > 8", "Divide both sides by −2 and flip the sign: x < −4"], a: "x < −4" },
      mistake: { wrong: "−2x > 8 gives x > −4", right: "Dividing by a negative flips the sign: x < −4." },
      practice: [{ label: "Grade 7: Inequalities", href: "#/learn/7/math/inequalities" }, { label: "Inequality worksheets", href: "#/worksheet/7/num-ineq-1" }],
    },
    {
      title: "Ratios, rates & proportions", icon: "📏",
      desc: "A ratio compares two quantities. A proportion says two ratios are equal. Proportions let you scale a recipe, convert units, read a map, or find a unit price. You can solve one by finding the scale factor or by cross-multiplying.",
      rules: ["Cross-multiply: if a/b = c/d, then ad = bc.", "A unit rate has 1 in the denominator, like $3 per pound."],
      example: { q: "A recipe uses 2 cups of rice for 6 servings. How many cups are needed for 15 servings?", steps: ["Set up a proportion: 2/6 = x/15", "Cross-multiply: 6x = 30", "Divide by 6: x = 5"], a: "5 cups" },
      mistake: { wrong: "Adding the same amount to both numbers (6 servings → 15 means add 9, so 2 + 9 = 11 cups)", right: "Ratios scale by multiplying: 15 is 2.5 times 6, so 2 × 2.5 = 5 cups." },
      practice: [{ label: "Grade 7: Ratios, Rates & Percents", href: "#/learn/7/math/proportions" }, { label: "Proportion worksheets", href: "#/worksheet/7/num-proportions" }],
    },
    {
      title: "Percent problems", icon: "％",
      desc: "A percent is a number out of 100. Students use percents for discounts, sales tax, tips, markups, and percent change. The key move is converting the percent to a decimal and multiplying.",
      rules: ["15% = 0.15.", "Discount: subtract the savings from the price. Tax or tip: add it to the price."],
      example: { q: "A $60 jacket is 25% off, and 6% tax is added to the sale price. What is the final price?", steps: ["Discount: 0.25 × 60 = $15, so the sale price is $45", "Tax: 0.06 × 45 = $2.70", "Final price: 45 + 2.70 = $47.70"], a: "$47.70" },
      mistake: { wrong: "Taking 25% off and then adding 6% of the original $60", right: "Tax is calculated on the sale price ($45), not the original price." },
      practice: [{ label: "Percent worksheets", href: "#/worksheet/7/num-percent" }],
    },
    {
      title: "Proportional relationships & slope", icon: "📈",
      desc: "When two quantities always keep the same ratio, they have a proportional relationship. On a graph it is a straight line through the origin, and the steepness of the line is its slope, the rate of change. This is the first look at the linear functions that dominate Algebra I.",
      rules: ["y = kx, where k is the constant of proportionality (also the slope).", "Slope = rise ÷ run = (y₂ − y₁) ÷ (x₂ − x₁)."],
      example: { q: "A table shows x: 1, 2, 3 and y: 4, 8, 12. Write the equation and find the slope.", steps: ["Divide each y by x: 4 ÷ 1 = 8 ÷ 2 = 12 ÷ 3 = 4", "The ratio is constant, so y = 4x", "The slope is 4, and the line passes through (0, 0)"], a: "y = 4x, slope 4" },
      mistake: { wrong: "Slope = run ÷ rise", right: "Slope = rise ÷ run: how much y changes for each 1 step in x." },
      practice: [{ label: "Grade 7: Proportional Relationships & Slope", href: "#/learn/7/math/slope" }],
    },
    {
      title: "Functions & graphing", icon: "🗺️",
      desc: "A function is a rule that gives exactly one output for each input. Pre-Algebra students use input-output tables, plot points on the coordinate plane, and see how an equation like y = 3x − 2 makes a pattern of points. This sets up the function work that fills Algebra I.",
      rules: ["An ordered pair (x, y) names a point: x tells how far right or left, y how far up or down.", "f(x) is read “f of x” and means the output when the input is x."],
      example: { q: "For f(x) = 3x − 2, find f(4) and complete the table for x = 0, 1, 2.", steps: ["f(4) = 3(4) − 2 = 12 − 2 = 10", "f(0) = −2, f(1) = 1, f(2) = 4", "Points: (0, −2), (1, 1), (2, 4)"], a: "f(4) = 10; points (0, −2), (1, 1), (2, 4)" },
      mistake: { wrong: "Plotting (3, 2) as 2 right and 3 up", right: "The order is (x, y): move 3 right, then 2 up." },
      practice: [{ label: "Grade 5 Gifted: The Coordinate Plane", href: "#/learn/5/advanced/coordinate-plane" }],
    },
    {
      title: "The Pythagorean theorem", icon: "📐",
      desc: "In any right triangle, the square of the longest side (the hypotenuse) equals the sum of the squares of the other two sides: a² + b² = c². It is usually taught in 8th grade and is one of the most useful facts in math, for finding distances, building squares, and checking angles.",
      rules: ["The hypotenuse is always opposite the right angle.", "Common triples: 3-4-5, 5-12-13, 8-15-17."],
      example: { q: "A right triangle has legs of 5 and 12. How long is the hypotenuse?", steps: ["a² + b² = c²", "5² + 12² = 25 + 144 = 169", "c = √169 = 13"], a: "13" },
      mistake: { wrong: "c = 5 + 12 = 17", right: "Square first, add, then take the square root: c = 13." },
      practice: [{ label: "See the Geometry & Measurement page", href: "#/math/geometry-measurement" }],
    },
    {
      title: "Data, statistics & probability", icon: "📊",
      desc: "Pre-Algebra students summarize data with the mean, median, mode, and range, read graphs, and find the probability of simple and compound events. Probability is a fraction: favorable outcomes over total outcomes.",
      rules: ["Mean = total ÷ number of values.", "Probability = favorable outcomes ÷ total outcomes."],
      example: { q: "Find the mean, median, and mode of 3, 5, 5, 9, 13. If a bag has 3 red and 7 blue marbles, what is P(red)?", steps: ["Mean: (3 + 5 + 5 + 9 + 13) ÷ 5 = 35 ÷ 5 = 7", "Median: the middle value is 5", "Mode: 5 appears most often", "P(red) = 3 out of 10 = 3/10"], a: "Mean 7, median 5, mode 5; P(red) = 3/10" },
      mistake: { wrong: "P(red) = 3/7 (red out of blue)", right: "Compare to the total: 3 red out of 10 marbles = 3/10." },
      practice: [{ label: "Grade 7: Probability", href: "#/learn/7/math/probability" }, { label: "Grade 7: Data Displays & Statistics", href: "#/learn/7/math/data" }],
    },
  ];
  pre.ready = ["Comfortable adding, subtracting, multiplying, and dividing negatives", "Knows the order of operations", "Can solve one- and two-step equations and check the answer", "Can find a unit rate and solve a simple proportion", "Understands fractions, decimals, and percents as the same idea"];
  pre.tips = ["Show negatives on a number line before using rules.", "Use the balance (scale) picture for equations.", "Have them check every answer by plugging it back in.", "Ask them to explain each step out loud. If they can teach it, they know it."];
  pre.onSite = [
    { label: "Grade 7: Operations with Integers", href: "#/learn/7/math/integers" },
    { label: "Grade 7: One-Step Equations (add & subtract)", href: "#/learn/7/math/one-step-add-sub" },
    { label: "Grade 7: One-Step Equations with Integers", href: "#/learn/7/math/one-step-integers" },
    { label: "Grade 7: Multiplication & Division Equations", href: "#/learn/7/math/one-step-mul-div" },
    { label: "Grade 7: Two-Step Equations", href: "#/learn/7/math/equations" },
    { label: "Grade 7: Inequalities", href: "#/learn/7/math/inequalities" },
    { label: "Grade 7: Ratios, Rates & Percents", href: "#/learn/7/math/proportions" },
    { label: "Grade 7: Proportional Relationships & Slope", href: "#/learn/7/math/slope" },
    { label: "Grade 7 worksheets, riddle sheets & tests", href: "#/worksheets/7" },
    { label: "Grade 7 Math Quizzes", href: "#/grade/7/math" },
  ];

  // ---------- Algebra I (new page) ----------
  MR.topics.push({
    id: "algebra-1", stage: "high", icon: "🧮", title: "Algebra I", grades: "8–9", featured: true, featNote: "⭐ Next stop after Pre-Algebra",
    tagline: "The heart of algebra: equations, lines, systems, and quadratics.",
    summary: "Algebra I is the course where algebra comes together. Students move from solving simple equations to working with whole families of relationships: straight lines, systems of equations, polynomials, factoring, and the curved graphs of quadratics. It's the gateway course. Colleges and employers look at it, and later math and science courses depend on it. Many students take it in 9th grade; students in an honors or accelerated pathway often take it in 8th grade for high school credit.",
    bigIdea: "Many real situations follow a pattern you can write as an equation or a function, and once you have the equation you can predict, compare, and optimize.",
    learn: ["Variables, expressions, and multi-step equations", "Inequalities and compound inequalities", "Linear equations: slope, intercepts, and graphing y = mx + b", "Writing the equation of a line from points or a story", "Systems of equations: graphing, substitution, and elimination", "Exponents and polynomials", "Factoring", "Quadratic equations and parabolas", "Functions and function notation", "Linear vs. exponential growth and data (scatterplots and lines of best fit)"],
    examples: [
      { q: "Solve 4(x − 3) = 2x + 10", a: "x = 11", how: "Distribute: 4x − 12 = 2x + 10. Subtract 2x: 2x − 12 = 10. Add 12: 2x = 22. Divide by 2: x = 11. Check: 4(8) = 32 and 2(11) + 10 = 32 ✓" },
      { q: "Find the equation of the line through (1, 2) and (3, 8).", a: "y = 3x − 1", how: "Slope = (8 − 2) ÷ (3 − 1) = 3. Use y = 3x + b with (1, 2): 2 = 3 + b, so b = −1." },
      { q: "Solve x² − 5x + 6 = 0", a: "x = 2 or x = 3", how: "Factor: (x − 2)(x − 3) = 0, so each factor can be zero." },
    ],
    useIn: ["Phone and streaming plans (cost = rate × usage + fee)", "Business: profit and break-even points", "Science formulas and lab data", "Programming and spreadsheets", "Predicting growth: savings, populations, and interest"],
    vocab: [
      ["slope-intercept form", "The equation y = mx + b, where m is the slope and b is the y-intercept.", "y = 2x − 3 has slope 2 and crosses the y-axis at −3."],
      ["system of equations", "Two or more equations with the same variables, solved together.", "x + y = 10 and x − y = 4 form a system."],
      ["polynomial", "An expression of terms with variables raised to whole-number powers.", "x² + 7x + 12 is a polynomial."],
      ["quadratic", "An equation or function where the highest power of x is 2; its graph is a parabola.", "x² − 5x + 6 = 0 is a quadratic equation."],
    ],
    ready: ["Solves one- and two-step equations and checks the answers", "Comfortable with negative numbers and fractions", "Understands proportional relationships and slope", "Can plot points and read simple graphs"],
    tips: ["Make a habit of checking answers by plugging them back in.", "Write every step: most mistakes are skipped steps or sign errors.", "If stuck, go back to the balance idea: do the same thing to both sides.", "Use graphing tools like Desmos to see what changes when a number changes."],
    extras: [{ title: "Algebra I at a glance", table: { head: ["Unit", "The key question"], rows: [
      ["Equations & inequalities", "What value(s) make this true?"],
      ["Linear functions", "How do two quantities change together at a steady rate?"],
      ["Systems", "Where do two situations match?"],
      ["Polynomials & factoring", "How can we rewrite an expression to make it easier to use?"],
      ["Quadratics", "How do we model things that curve, like the path of a ball?"],
      ["Exponentials & data", "How do things grow, and how well does a line fit the data?"],
    ] } }],
    deepDive: [
      { title: "Multi-step equations", icon: "⚖️",
        desc: "These add one or two new ideas to the equations from Pre-Algebra: variables on both sides and parentheses. The plan is always the same: simplify each side, collect the variable terms on one side, undo what's left, and check.",
        rules: ["Distribute first, then combine like terms.", "If the variables cancel and you get a true statement (like 5 = 5), there are infinitely many solutions. A false statement means no solution."],
        example: { q: "Solve 4(x − 3) = 2x + 10", steps: ["Distribute: 4x − 12 = 2x + 10", "Subtract 2x from both sides: 2x − 12 = 10", "Add 12: 2x = 22", "Divide by 2: x = 11", "Check: 4(11 − 3) = 32 and 2(11) + 10 = 32 ✓"], a: "x = 11" },
        mistake: { wrong: "4(x − 3) = 4x − 3", right: "4(x − 3) = 4x − 12. Multiply every term in the parentheses." },
        practice: [{ label: "Grade 7 Honors: Multistep Equations", href: "#/learn/7/advanced/multistep-equations" }] },
      { title: "Inequalities & compound inequalities", icon: "↔️",
        desc: "Solving inequalities works like solving equations, but the answer is a range of numbers. A compound inequality, like −3 < 2x + 1 ≤ 9, puts two inequalities together, and whatever you do, you do to all three parts.",
        rules: ["Flip the sign when multiplying or dividing by a negative.", "“And” compound inequalities describe a range between two numbers."],
        example: { q: "Solve −3 < 2x + 1 ≤ 9", steps: ["Subtract 1 from all three parts: −4 < 2x ≤ 8", "Divide all three parts by 2: −2 < x ≤ 4"], a: "−2 < x ≤ 4" },
        mistake: { wrong: "Forgetting to apply a step to every part of a compound inequality", right: "Do each step to the left, middle, and right parts." },
        practice: [{ label: "Grade 7: Inequalities", href: "#/learn/7/math/inequalities" }] },
      { title: "Linear equations & graphing", icon: "📈",
        desc: "A linear equation makes a straight line. In slope-intercept form, y = mx + b, m is the slope (rise over run) and b is where the line crosses the y-axis. Students graph lines, find slope from two points, and write an equation from a graph, a table, or a story.",
        rules: ["Start at b on the y-axis, then use the slope to find other points.", "Slope from two points: (y₂ − y₁) ÷ (x₂ − x₁).", "Parallel lines have equal slopes; perpendicular lines have slopes that are negative reciprocals."],
        example: { q: "Graph y = 2x − 3.", steps: ["The y-intercept is −3: plot (0, −3)", "The slope is 2 = 2/1: go up 2 and right 1 to plot (1, −1)", "Repeat to plot (2, 1), then draw the line"], a: "A line through (0, −3), (1, −1), and (2, 1)" },
        mistake: { wrong: "Reading the slope as run ÷ rise", right: "Slope is rise ÷ run, so go up/down first (the numerator), then right." },
        practice: [{ label: "Grade 7: Slope", href: "#/learn/7/math/slope" }, { label: "Grade 7 Honors: Linear Functions", href: "#/learn/7/advanced/linear-functions" }] },
      { title: "Systems of equations", icon: "✖️",
        desc: "A system asks for the point that makes two equations true at the same time, which is where two lines cross. Students solve them by graphing, by substitution (solve one equation for a variable and plug it into the other), and by elimination (add or subtract the equations to cancel a variable).",
        rules: ["One solution: the lines cross. No solution: parallel lines. Infinitely many: the same line."],
        example: { q: "Solve 2x + y = 11 and x − y = 1", steps: ["Add the equations to eliminate y: 3x = 12", "Divide by 3: x = 4", "Substitute into x − y = 1: 4 − y = 1, so y = 3", "Check: 2(4) + 3 = 11 ✓ and 4 − 3 = 1 ✓"], a: "(4, 3)" },
        mistake: { wrong: "Finding x and stopping", right: "Find both x and y, and check the pair in both equations." },
        practice: [{ label: "Grade 7 Honors: Systems of Equations", href: "#/learn/7/advanced/systems" }] },
      { title: "Exponents & polynomials", icon: "²",
        desc: "A polynomial is a sum of terms like 3x² − 5x + 2. Students add, subtract, and multiply them and learn the exponent rules: when you multiply same-base powers you add exponents, and when you raise a power to a power you multiply them.",
        rules: ["xᵃ · xᵇ = xᵃ⁺ᵇ.", "(xᵃ)ᵇ = xᵃᵇ.", "Multiply binomials with FOIL or the box method."],
        example: { q: "Multiply (x + 3)(x + 4)", steps: ["First: x · x = x²", "Outer: x · 4 = 4x", "Inner: 3 · x = 3x", "Last: 3 · 4 = 12", "Combine: x² + 7x + 12"], a: "x² + 7x + 12" },
        mistake: { wrong: "(x + 3)² = x² + 9", right: "(x + 3)² = (x + 3)(x + 3) = x² + 6x + 9. Don't forget the middle term." },
        practice: [{ label: "Grade 7 Honors: Exponent Laws & Polynomials", href: "#/learn/7/advanced/exponent-laws" }] },
      { title: "Factoring", icon: "🧱",
        desc: "Factoring is multiplying backward: writing an expression as a product. It is the main tool for solving quadratic equations. Students factor out a common factor, factor trinomials, and recognize a difference of squares.",
        rules: ["GCF: 6x + 9 = 3(2x + 3).", "Trinomial: x² + 7x + 12 = (x + 3)(x + 4), since 3 × 4 = 12 and 3 + 4 = 7.", "Difference of squares: x² − 9 = (x − 3)(x + 3)."],
        example: { q: "Factor x² + 7x + 12", steps: ["Find two numbers that multiply to 12 and add to 7: 3 and 4", "Write (x + 3)(x + 4)", "Check by multiplying: x² + 4x + 3x + 12 = x² + 7x + 12 ✓"], a: "(x + 3)(x + 4)" },
        mistake: { wrong: "x² − 9 = (x − 3)(x − 3)", right: "x² − 9 = (x − 3)(x + 3). One sign is plus and one is minus." },
        practice: [] },
      { title: "Quadratic equations", icon: "🏹",
        desc: "A quadratic has an x² term, and its graph is a U-shaped curve called a parabola. It models anything that rises and falls, like a thrown ball or the area of a changing rectangle. Students solve them by factoring, by completing the square, and with the quadratic formula.",
        rules: ["Get one side equal to zero, then factor and use the zero product property.", "Quadratic formula: x = (−b ± √(b² − 4ac)) ÷ (2a)."],
        example: { q: "Solve x² + 2x − 3 = 0 with the quadratic formula.", steps: ["a = 1, b = 2, c = −3", "x = (−2 ± √(4 + 12)) ÷ 2 = (−2 ± 4) ÷ 2", "x = 1 or x = −3", "Check: 1 + 2 − 3 = 0 ✓ and 9 − 6 − 3 = 0 ✓"], a: "x = 1 or x = −3" },
        mistake: { wrong: "Solving x² = 9 and giving only x = 3", right: "There are two solutions: x = 3 and x = −3." },
        practice: [] },
      { title: "Functions & function notation", icon: "🧠",
        desc: "A function assigns exactly one output to each input. Algebra I introduces the notation f(x), the idea of domain (allowed inputs) and range (outputs), and ways to represent functions with tables, graphs, and equations.",
        rules: ["The vertical line test: if a vertical line hits a graph more than once, it is not a function.", "f(2) means “replace x with 2.”"],
        example: { q: "If f(x) = 3x + 1, find f(2). Is {(1, 2), (1, 3)} a function?", steps: ["f(2) = 3(2) + 1 = 7", "The input 1 has two different outputs (2 and 3), so it is not a function"], a: "f(2) = 7; no, it is not a function" },
        mistake: { wrong: "Reading f(2) as f times 2", right: "f(2) means the output when the input is 2." },
        practice: [{ label: "Grade 7 Honors: Linear Functions", href: "#/learn/7/advanced/linear-functions" }] },
      { title: "Linear vs. exponential growth & data", icon: "📊",
        desc: "Linear growth adds the same amount each step (like saving $5 a week); exponential growth multiplies by the same factor each step (like doubling). Students also model data with scatterplots and a line of best fit.",
        rules: ["Linear: y = mx + b (add the same amount each time).", "Exponential: y = a·bˣ (multiply by the same factor each time)."],
        example: { q: "You have $20 and save $5 a week. A plant doubles each day starting from 1 leaf. Compare after 5 steps.", steps: ["Linear: y = 20 + 5x, so after 5 weeks you have $45", "Exponential: y = 2ˣ, so after 5 days there are 32 leaves", "Exponential growth starts slower here but eventually grows much faster"], a: "$45 (linear) vs. 32 leaves (exponential)" },
        mistake: { wrong: "Using a line to model something that doubles", right: "If the amount multiplies by the same factor each step, use an exponential model." },
        practice: [{ label: "Grade 7 Math: Data Displays & Statistics", href: "#/learn/7/math/data" }] },
    ],
    onSite: [
      { label: "Grade 7: Two-Step Equations (the bridge)", href: "#/learn/7/math/equations" },
      { label: "Grade 7: Inequalities", href: "#/learn/7/math/inequalities" },
      { label: "Grade 7: Slope", href: "#/learn/7/math/slope" },
      { label: "Grade 7 Honors: Multistep Equations (Algebra I preview)", href: "#/learn/7/advanced/multistep-equations" },
      { label: "Grade 7 Honors: Linear Functions", href: "#/learn/7/advanced/linear-functions" },
      { label: "Grade 7 Honors: Systems of Equations", href: "#/learn/7/advanced/systems" },
      { label: "Grade 7 Honors: Exponent Laws & Polynomials", href: "#/learn/7/advanced/exponent-laws" },
      { label: "Two-step equation worksheets & tests", href: "#/worksheets/7" },
    ],
  });

  // ---------- Algebra II: add a deep dive ----------
  const a2 = get("algebra-2");
  a2.summary = "Algebra II extends Algebra I to many more kinds of functions: polynomials, radicals, rational expressions, exponentials and logarithms, and even numbers beyond the real number line. Each kind of function describes a different pattern of change: steady, accelerating, leveling off, or repeating. It's usually taken in 10th or 11th grade and is a prerequisite for Precalculus and most college majors.";
  a2.deepDive = [
    { title: "Functions & transformations", icon: "🔄",
      desc: "Students study families of functions (linear, quadratic, absolute value, square root, and more) and learn how changing the equation shifts, stretches, or flips the graph. Knowing a few parent graphs lets you sketch a lot of functions quickly.",
      rules: ["f(x − h) + k shifts the graph right h and up k.", "A negative in front reflects the graph over the x-axis."],
      example: { q: "Describe the graph of g(x) = (x − 2)² + 3 compared with y = x².", steps: ["(x − 2) shifts the graph 2 units right", "+ 3 shifts it 3 units up", "The vertex moves from (0, 0) to (2, 3)"], a: "Same parabola shifted right 2 and up 3, with vertex (2, 3)" },
      mistake: { wrong: "(x − 2) shifts the graph left", right: "Inside the parentheses, the shift is opposite: x − 2 shifts right 2." } },
    { title: "Quadratics & complex numbers", icon: "i",
      desc: "Some quadratics, like x² + 1 = 0, have no real solutions. Algebra II introduces the imaginary unit i, defined by i² = −1, and complex numbers a + bi so that every quadratic has a solution. Complex numbers are used in electrical engineering and signal processing.",
      rules: ["i² = −1.", "Multiply complex numbers like binomials, then replace i² with −1."],
      example: { q: "Multiply (3 + 2i)(1 − i)", steps: ["Distribute: 3 − 3i + 2i − 2i²", "Replace i² with −1: 3 − 3i + 2i + 2", "Combine: 5 − i"], a: "5 − i" },
      mistake: { wrong: "i² = 1", right: "i² = −1, by definition." } },
    { title: "Polynomials & roots", icon: "📉",
      desc: "Higher-degree polynomials can have several x-intercepts (roots). Students factor them, divide them, and use the Factor Theorem: if p(r) = 0 then (x − r) is a factor. The graph's shape depends on its degree and its roots.",
      rules: ["A polynomial of degree n has at most n real roots.", "Roots of the factors (x − r) are the x-intercepts."],
      example: { q: "Solve x³ − 6x² + 11x − 6 = 0, given that x = 1 is a root.", steps: ["Since x = 1 is a root, (x − 1) is a factor", "Dividing gives x³ − 6x² + 11x − 6 = (x − 1)(x² − 5x + 6)", "Factor further: (x − 1)(x − 2)(x − 3)", "The roots are x = 1, 2, 3"], a: "x = 1, 2, or 3" },
      mistake: { wrong: "Stopping after finding one root", right: "Keep factoring until every factor is linear." } },
    { title: "Rational expressions", icon: "➗",
      desc: "A rational expression is a fraction with polynomials on top and bottom. Students simplify them by factoring and canceling common factors, add and subtract them with common denominators, and solve rational equations, always watching for values that make the denominator zero.",
      rules: ["Factor first, then cancel common factors, not common terms.", "The denominator can never be zero."],
      example: { q: "Simplify (x² − 9) ÷ (x + 3)", steps: ["Factor the top: (x − 3)(x + 3)", "Cancel the common factor (x + 3)", "Result: x − 3, with x ≠ −3"], a: "x − 3 (x ≠ −3)" },
      mistake: { wrong: "Canceling x² − 9 and x + 3 as if they were separate terms", right: "Only cancel factors that multiply the whole top and bottom." } },
    { title: "Radicals & rational exponents", icon: "√",
      desc: "Roots can be written as fractional exponents: the square root of x is x^(1/2), and the cube root is x^(1/3). Students simplify radicals, solve radical equations, and use exponent rules with fractions.",
      rules: ["x^(m/n) = the nth root of x, raised to the m.", "Check radical equations for extraneous solutions."],
      example: { q: "Evaluate 8^(2/3)", steps: ["The denominator 3 means cube root: ∛8 = 2", "The numerator 2 means square it: 2² = 4"], a: "4" },
      mistake: { wrong: "√(x² + 9) = x + 3", right: "You can't take the square root of each term separately." } },
    { title: "Exponentials & logarithms", icon: "💰",
      desc: "Exponential functions model growth and decay: money earning interest, populations, and radioactive material. A logarithm is the inverse of an exponential and answers the question “what power gives this number?” Logarithms are also behind the pH, decibel, and earthquake scales.",
      rules: ["log_b(x) = y means b^y = x.", "Compound interest: A = P(1 + r)ᵗ."],
      example: { q: "$1,000 grows at 5% per year, compounded yearly. What is it worth after 2 years? Also solve 2ˣ = 32.", steps: ["A = 1000(1.05)² = 1000 × 1.1025 = $1,102.50", "2ˣ = 32: 2⁵ = 32, so x = 5"], a: "$1,102.50; x = 5" },
      mistake: { wrong: "log(a + b) = log a + log b", right: "The log rule is for products: log(ab) = log a + log b." } },
    { title: "Sequences & series", icon: "🔢",
      desc: "A sequence is a list of numbers that follows a rule. In an arithmetic sequence you add the same amount each time; in a geometric sequence you multiply by the same amount. A series is the sum of a sequence.",
      rules: ["Arithmetic: aₙ = a₁ + (n − 1)d.", "Geometric: aₙ = a₁ · rⁿ⁻¹."],
      example: { q: "Find the 10th term of 3, 7, 11, 15, … and the 5th term of 2, 6, 18, …", steps: ["Arithmetic: d = 4, so a₁₀ = 3 + 9(4) = 39", "Geometric: r = 3, so a₅ = 2 · 3⁴ = 162"], a: "39 and 162" },
      mistake: { wrong: "Using n instead of n − 1 in the formula", right: "The first term has no steps taken, so use (n − 1) steps." } },
  ];
  a2.onSite = [{ label: "Grade 7 Honors: Exponent Laws & Polynomials (a preview)", href: "#/learn/7/advanced/exponent-laws" }];

  // ---------- links, order ----------
  Object.assign(MR.links, {
    "ratios-proportions": { from: ["fractions-decimals"], to: ["algebra", "pre-algebra"] },
    "algebra": { from: ["fractions-decimals", "ratios-proportions"], to: ["pre-algebra", "algebra-1", "algebra-2"] },
    "pre-algebra": { from: ["arithmetic", "fractions-decimals", "ratios-proportions"], to: ["algebra-1"] },
    "algebra-1": { from: ["pre-algebra"], to: ["geometry-hs", "algebra-2", "statistics-probability"] },
    "geometry-hs": { from: ["algebra-1", "geometry-measurement"], to: ["trigonometry", "precalculus"] },
    "algebra-2": { from: ["algebra-1"], to: ["trigonometry", "precalculus", "statistics-probability"] },
    "statistics-probability": { from: ["fractions-decimals", "algebra-1"], to: ["college-and-beyond"] },
  });
  const order = ["number-sense", "arithmetic", "fractions-decimals", "geometry-measurement", "ratios-proportions", "algebra", "pre-algebra", "algebra-1", "geometry-hs", "algebra-2", "trigonometry", "statistics-probability", "precalculus", "calculus", "college-and-beyond"];
  MR.topics.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
})();
