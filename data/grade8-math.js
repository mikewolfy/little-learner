/* Grade 8 Math: real numbers, the Pythagorean theorem, transformations, volume and surface area, linear functions,
   equations and inequalities, and statistics and probability.
   Questions use a compact format: question | right answer | wrong | wrong | wrong | => explanation
   (the right answer comes first; the app shuffles the choices). */
(function () {
  const g8 = window.CURRICULUM[8];
  const Q = (text) => text.trim().split("\n").filter((l) => l.trim()).map((l) => {
    const parts = l.split("|").map((p) => p.trim());
    const ex = parts.pop().replace(/^=>\s*/, "");
    const q = parts.shift();
    return [q, parts, 0, ex];
  });
  const subject = {
    id: "math", name: "Math", icon: "➗", standards: "2023 Mathematics SOL (Grade 8)",
    about: "Math 8: real and irrational numbers, the Pythagorean theorem, transformations, volume and surface area, linear functions and slope, multistep equations and inequalities, and scatterplots and probability. (Algebra I is the honors option; see the Programs & Tracks page.)",
    units: [],
  };
  window.EXTRAS = window.EXTRAS || {};
  const add = (u, extra) => {
    u.questions = Q(u.questions);
    subject.units.push(u);
    window.EXTRAS["8/math/" + u.id] = extra;
  };

  add({
    id: "real-numbers", title: "Real Numbers, Roots & Scientific Notation", sol: "8.NS.1",
    summary: "Rational and irrational numbers, estimating square roots, and working with scientific notation.",
    points: [
      "Rational numbers can be written as a fraction of two integers (integers, terminating and repeating decimals like 0.5 and 0.333…). Irrational numbers cannot; their decimals never end or repeat (√2, π). Together they make the real numbers.",
      "A perfect square is the square of an integer (1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144). The square root of a non-perfect square is irrational: √20 ≈ 4.47.",
      "To estimate a square root, find the two perfect squares around the number: √50 is between √49 = 7 and √64 = 8, closer to 7, so about 7.1.",
      "A perfect cube is the cube of an integer (1, 8, 27, 64, 125). ∛27 = 3.",
      "To compare real numbers, convert to decimals or place them on a number line: √10 ≈ 3.16 is greater than 3.1.",
      "Scientific notation: a × 10ⁿ where 1 ≤ a < 10. To multiply, multiply the numbers and add exponents; to divide, divide numbers and subtract exponents.",
      "Exponent rules: aᵐ · aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰ = 1; a⁻ⁿ = 1/aⁿ.",
      "Order of operations: parentheses, exponents (and roots), multiplication/division, addition/subtraction (PEMDAS).",
    ],
    example: "Estimate √30: 5² = 25 and 6² = 36, so √30 is between 5 and 6, closer to 5 (about 5.5).\n\nMultiply: (3 × 10⁴)(2 × 10³) = 6 × 10⁷.\nDivide: (8 × 10⁶) ÷ (2 × 10²) = 4 × 10⁴.",
    vocab: [["irrational number", "A number that cannot be written as a fraction; its decimal never ends or repeats."], ["rational number", "A number that can be written as a fraction of two integers."], ["real numbers", "All rational and irrational numbers."], ["perfect square", "A number that is the square of an integer."], ["square root", "A number that, multiplied by itself, gives the original number."], ["scientific notation", "A way to write numbers as a × 10ⁿ with 1 ≤ a < 10."], ["cube root", "A number that, used as a factor three times, gives the original number."]],
    questions: `
Which number is irrational?|√2|0.25|1/3|−4|=>Its decimal never ends or repeats.
Which number is rational?|0.75|√3|π|√7|=>Equals 3/4.
Between which two integers is √40?|6 and 7|5 and 6|7 and 8|4 and 5|=>36 < 40 < 49.
Which is the best estimate of √50?|7.1|5.0|8.5|6.0|=>Between 7 and 8, closer to 7.
√144 = ?|12|14|72|16|=>12 × 12 = 144.
∛64 = ?|4|8|16|2|=>4 × 4 × 4 = 64.
Which is greater: √10 or 3.1?|√10|3.1|They are equal|Cannot tell|=>√10 ≈ 3.16.
Which is a perfect square?|81|90|60|50|=>9 × 9 = 81.
Write 56,000 in scientific notation.|5.6 × 10⁴|56 × 10³|0.56 × 10⁵|5.6 × 10³|=>Move the decimal 4 places.
Write 0.0072 in scientific notation.|7.2 × 10⁻³|72 × 10⁻⁴|0.72 × 10⁻²|7.2 × 10⁻²|=>Move the decimal 3 places right.
(2 × 10³)(4 × 10²) = ?|8 × 10⁵|6 × 10⁵|8 × 10⁶|6 × 10⁶|=>Multiply numbers, add exponents.
(9 × 10⁸) ÷ (3 × 10²) = ?|3 × 10⁶|3 × 10¹⁰|6 × 10⁶|27 × 10⁶|=>Divide numbers, subtract exponents.
What is 5⁰?|1|0|5|undefined|=>Any nonzero number to the zero power is 1.
What is 2⁻³?|1/8|−8|−6|1/6|=>2⁻³ = 1/2³.
`,
  }, {
    examples: ["Classify: 0.4 (rational), √16 = 4 (rational), √17 (irrational), π (irrational), −7 (rational).", "Compare √50 and 7.2: √50 ≈ 7.07 < 7.2, so 7.2 is greater."],
    vocab: { "irrational number": "The square root of 2 is an irrational number.", "rational number": "Every integer is a rational number.", "real numbers": "Real numbers fill the whole number line.", "perfect square": "36 is a perfect square.", "square root": "The square root of 49 is 7.", "scientific notation": "The sun's distance is written in scientific notation.", "cube root": "The cube root of 8 is 2." },
  });

  add({
    id: "pythagorean", title: "The Pythagorean Theorem", sol: "8.MG.1",
    summary: "Finding missing side lengths and distances in right triangles.",
    points: [
      "In a right triangle, the legs (a and b) meet at the right angle and the hypotenuse (c) is the longest side, opposite the right angle.",
      "The Pythagorean theorem: a² + b² = c².",
      "To find the hypotenuse: c = √(a² + b²). To find a leg: a = √(c² − b²).",
      "Common Pythagorean triples: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25), and multiples such as (6, 8, 10).",
      "The converse: if a² + b² = c² for the sides of a triangle, then it is a right triangle.",
      "Use the theorem to find the distance between two points on the coordinate plane: draw a right triangle with horizontal and vertical legs.",
      "Real-life uses: ladders against a wall, diagonals of rectangles, ramps, and screens (a TV's size is its diagonal).",
      "Always check that your answer is reasonable: the hypotenuse must be longer than each leg.",
    ],
    example: "Legs 6 and 8: c² = 36 + 64 = 100, c = 10.\nLeg: hypotenuse 13, other leg 5: a² = 169 − 25 = 144, a = 12.\nDistance from (1, 2) to (4, 6): legs 3 and 4 → 5.",
    vocab: [["hypotenuse", "The longest side of a right triangle, opposite the right angle."], ["leg", "One of the two sides that form the right angle."], ["Pythagorean theorem", "In a right triangle, a² + b² = c²."], ["Pythagorean triple", "Three whole numbers that satisfy a² + b² = c²."], ["converse", "The reverse statement: if a² + b² = c², the triangle is a right triangle."], ["right triangle", "A triangle with one 90° angle."], ["distance formula", "A formula based on the Pythagorean theorem for the distance between two points."]],
    questions: `
Which side is the hypotenuse?|the side opposite the right angle|the shortest side|a leg|the base only|=>It is the longest side.
Which equation is the Pythagorean theorem?|a² + b² = c²|a + b = c|a² − b² = c²|a² + b² = c|=>c is the hypotenuse.
A right triangle has legs 6 and 8. What is the hypotenuse?|10|14|12|100|=>√(36 + 64) = 10.
A right triangle has legs 5 and 12. What is the hypotenuse?|13|17|7|60|=>√(25 + 144) = 13.
The hypotenuse is 13 and one leg is 5. What is the other leg?|12|8|18|144|=>√(169 − 25) = 12.
The hypotenuse is 25 and one leg is 7. What is the other leg?|24|18|32|576|=>√(625 − 49) = 24.
Which set is a Pythagorean triple?|8, 15, 17|6, 7, 8|5, 6, 7|9, 12, 16|=>64 + 225 = 289.
Which triangle is a right triangle?|sides 9, 12, 15|sides 4, 5, 6|sides 6, 7, 8|sides 5, 6, 9|=>81 + 144 = 225.
A 10 ft ladder leans against a wall with its base 6 ft out. How high does it reach?|8 ft|4 ft|16 ft|11.7 ft|=>√(100 − 36) = 8.
What is the distance from (0, 0) to (3, 4)?|5|7|25|3.5|=>√(9 + 16) = 5.
What is the diagonal of a rectangle 9 cm by 12 cm?|15 cm|21 cm|108 cm|10 cm|=>√(81 + 144) = 15.
A right triangle has legs 1 and 1. The hypotenuse is…|√2|2|1|√3|=>√(1 + 1).
Can sides 3, 4, and 6 form a right triangle?|No, because 9 + 16 ≠ 36|Yes|Yes, because 3 + 4 > 6|Only if scaled|=>25 ≠ 36.
The hypotenuse must be…|longer than each leg|shorter than each leg|equal to a leg|equal to the sum of legs|=>It is the longest side.
`,
  }, {
    examples: ["Check by estimation: legs 7 and 9 → c² = 49 + 81 = 130, so c ≈ 11.4 (between 11² = 121 and 12² = 144).", "Screen size: a TV 40 in wide and 30 in tall has a diagonal √(1600 + 900) = √2500 = 50 in."],
    vocab: { "hypotenuse": "The hypotenuse is opposite the right angle.", "leg": "Each leg of the triangle was 6 cm.", "Pythagorean theorem": "Use the Pythagorean theorem to find the diagonal.", "Pythagorean triple": "3, 4, 5 is a Pythagorean triple.", "converse": "The converse tests for a right triangle.", "right triangle": "A right triangle has one 90° angle.", "distance formula": "The distance formula comes from the Pythagorean theorem." },
  });

  add({
    id: "transformations", title: "Transformations on the Coordinate Plane", sol: "8.MG.2",
    summary: "Translations, reflections, rotations, and dilations of figures.",
    points: [
      "A transformation moves or changes a figure. The original is the preimage; the result is the image. Prime notation marks images (A → A′).",
      "Translation: slide every point the same distance and direction: (x, y) → (x + a, y + b). Size and shape stay the same (congruent).",
      "Reflection: flip across a line. Over the x-axis: (x, y) → (x, −y). Over the y-axis: (x, y) → (−x, y). The figure is congruent but reversed.",
      "Rotation about the origin: 90° counterclockwise (x, y) → (−y, x); 90° clockwise (x, y) → (y, −x); 180° (x, y) → (−x, −y).",
      "Dilation: enlarge or shrink by a scale factor k from the center (usually the origin): (x, y) → (kx, ky). If k > 1 it is an enlargement; if 0 < k < 1 it is a reduction. The image is similar, not congruent.",
      "Translations, reflections, and rotations preserve size and shape (rigid motions). Dilations preserve shape but change size.",
      "Congruent figures have the same size and shape; similar figures have the same shape and proportional sides.",
      "A sequence of transformations can map one figure onto another.",
    ],
    example: "Point A(2, 5):\nTranslate by (−3, +1): (−1, 6)\nReflect over x-axis: (2, −5)\nRotate 90° clockwise about the origin: (5, −2)\nDilate by 3: (6, 15)",
    vocab: [["transformation", "A change in the position, size, or orientation of a figure."], ["translation", "A slide of a figure without turning or flipping."], ["reflection", "A flip of a figure across a line."], ["rotation", "A turn of a figure around a point."], ["dilation", "A transformation that changes size by a scale factor."], ["image", "The figure after a transformation."], ["congruent", "Having the same size and shape."]],
    questions: `
What is a translation?|a slide|a flip|a turn|an enlargement|=>Every point moves the same way.
What is a reflection?|a flip across a line|a slide|a turn|a shrink|=>A mirror image.
What is a rotation?|a turn around a point|a flip|a slide|a stretch|=>Described by angle and direction.
What is a dilation?|a change in size by a scale factor|a slide|a flip|a turn|=>Keeps shape.
Translate (3, 4) by (−2, 5). What is the image?|(1, 9)|(5, −1)|(1, −1)|(5, 9)|=>(3 − 2, 4 + 5).
Reflect (3, −2) across the x-axis.|(3, 2)|(−3, −2)|(−3, 2)|(−2, 3)|=>(x, −y).
Reflect (3, −2) across the y-axis.|(−3, −2)|(3, 2)|(−3, 2)|(−2, 3)|=>(−x, y).
Rotate (2, 3) 180° about the origin.|(−2, −3)|(3, 2)|(−3, 2)|(2, −3)|=>(−x, −y).
Rotate (2, 3) 90° counterclockwise about the origin.|(−3, 2)|(3, −2)|(−2, 3)|(−2, −3)|=>(−y, x).
Rotate (2, 3) 90° clockwise about the origin.|(3, −2)|(−3, 2)|(−2, −3)|(2, −3)|=>(y, −x).
Dilate (2, −4) by a scale factor of 3 from the origin.|(6, −12)|(5, −1)|(2/3, −4/3)|(−6, 12)|=>(kx, ky).
A dilation with a scale factor of 1/2 makes the figure…|smaller|larger|the same size|flipped|=>0 < k < 1 shrinks.
Which transformation does NOT preserve size?|dilation|translation|reflection|rotation|=>Scale factor changes size.
Figures related by a translation are…|congruent|similar but not congruent|different shapes|not related|=>Same size and shape.
`,
  }, {
    examples: ["Describe the transformation: A(1, 2) → A′(1, −2) is a reflection across the x-axis.", "Triangle with vertices (0, 0), (2, 0), (0, 3) dilated by 2 becomes (0, 0), (4, 0), (0, 6); its area is 4 times larger."],
    vocab: { "transformation": "A transformation can move a figure.", "translation": "A translation slides a shape.", "reflection": "A reflection creates a mirror image.", "rotation": "A rotation turns a shape.", "dilation": "A dilation by 2 doubles each side.", "image": "The image is A′.", "congruent": "Congruent triangles have the same size and shape." },
  });

  add({
    id: "solids", title: "Volume & Surface Area of 3-D Figures", sol: "8.MG.3",
    summary: "Volume and surface area of prisms, cylinders, cones, and spheres.",
    points: [
      "Volume is the space inside a solid (cubic units); surface area is the total area of all faces (square units).",
      "Prism or cylinder volume: V = Bh, where B is the area of the base. Cylinder: V = πr²h.",
      "Cone volume: V = ⅓πr²h. Pyramid volume: V = ⅓Bh. Sphere volume: V = ⁴⁄₃πr³.",
      "Surface area of a rectangular prism: 2(lw + lh + wh). Cylinder: SA = 2πr² + 2πrh. Sphere: SA = 4πr². Cone: SA = πr² + πrℓ (ℓ = slant height).",
      "Use 3.14 or leave answers in terms of π. Always include the right units (cm³ for volume, cm² for surface area).",
      "If you multiply each dimension of a solid by k, surface area multiplies by k² and volume by k³.",
      "Real-life uses: capacity of cans and tanks, wrapping paper for a box, and the amount of material for a ball.",
      "Draw nets (flat patterns of a solid) to find surface area by adding the areas of faces.",
    ],
    example: "Cylinder r = 3 cm, h = 10 cm:\nV = π(3²)(10) = 90π ≈ 282.6 cm³\nSA = 2π(3²) + 2π(3)(10) = 18π + 60π = 78π ≈ 244.9 cm²\n\nSphere r = 3: V = ⁴⁄₃π(27) = 36π ≈ 113.04.",
    vocab: [["volume", "The amount of space inside a 3-D figure."], ["surface area", "The total area of all the faces of a 3-D figure."], ["radius", "The distance from the center of a circle or sphere to its edge."], ["cylinder", "A solid with two parallel circular bases."], ["cone", "A solid with a circular base and one vertex."], ["sphere", "A round solid with all points the same distance from the center."], ["net", "A flat pattern that folds into a 3-D figure."]],
    questions: `
What is the formula for the volume of a cylinder?|πr²h|2πrh|⅓πr²h|4πr²|=>Base area times height.
What is the formula for the volume of a cone?|⅓πr²h|πr²h|⁴⁄₃πr³|2πr²h|=>One-third of the cylinder.
What is the formula for the volume of a sphere?|⁴⁄₃πr³|4πr²|πr²h|⅓πr²h|=>Cube of the radius.
What is the formula for the surface area of a sphere?|4πr²|⁴⁄₃πr³|2πr²|πr²|=>Four times the area of a circle.
A cylinder has r = 2 cm and h = 5 cm. What is its volume in terms of π?|20π cm³|10π cm³|25π cm³|40π cm³|=>π(4)(5).
A cone has r = 3 cm and h = 4 cm. What is its volume in terms of π?|12π cm³|36π cm³|24π cm³|9π cm³|=>⅓π(9)(4).
A sphere has r = 3 cm. What is its volume in terms of π?|36π cm³|12π cm³|27π cm³|108π cm³|=>⁴⁄₃π(27).
A sphere has r = 5 cm. What is its surface area in terms of π?|100π cm²|25π cm²|20π cm²|500π cm²|=>4π(25).
A rectangular prism is 4 cm × 3 cm × 2 cm. What is its volume?|24 cm³|9 cm³|52 cm³|12 cm³|=>l × w × h.
A rectangular prism is 4 cm × 3 cm × 2 cm. What is its surface area?|52 cm²|24 cm²|26 cm²|48 cm²|=>2(12 + 8 + 6).
What are the units of volume?|cubic units|square units|linear units|degrees|=>cm³.
What are the units of surface area?|square units|cubic units|linear units|degrees|=>cm².
A cylinder's radius doubles and height stays the same. Its volume becomes…|4 times as large|2 times as large|8 times as large|the same|=>r² quadruples.
What is a net?|a flat pattern that folds into a solid|a type of cylinder|a type of cone|a type of graph|=>Used to find surface area.
`,
  }, {
    examples: ["Compare: a cone and a cylinder with the same base and height — the cylinder holds 3 times as much.", "A can with r = 4 and h = 10 holds V = π(16)(10) = 160π ≈ 502.4 cubic units."],
    vocab: { "volume": "The volume of the tank is 500 liters.", "surface area": "Surface area tells how much paint you need.", "radius": "The radius is half the diameter.", "cylinder": "A soup can is a cylinder.", "cone": "An ice cream cone is a cone.", "sphere": "A basketball is a sphere.", "net": "A net of a cube has six squares." },
  });

  add({
    id: "linear", title: "Linear Relationships, Slope & Graphs", sol: "8.PFA.1",
    summary: "Slope, slope-intercept form, and graphing lines.",
    points: [
      "Slope is the rate of change: slope = rise ÷ run = (y₂ − y₁) ÷ (x₂ − x₁). Positive slope rises left to right; negative slope falls; zero slope is horizontal; undefined slope is vertical.",
      "Slope-intercept form: y = mx + b, where m is the slope and b is the y-intercept (where the line crosses the y-axis, at (0, b)).",
      "To graph a line: plot the y-intercept, then use the slope (rise over run) to find more points.",
      "A proportional relationship has the form y = mx (b = 0) and passes through the origin. The constant of proportionality is the slope.",
      "Parallel lines have the same slope; perpendicular lines have slopes that are negative reciprocals.",
      "The x-intercept is where y = 0. To find it, set y = 0 and solve.",
      "To write an equation from a graph or two points: find the slope, find b, then write y = mx + b.",
      "Interpret slope in context: 'The slope 5 means $5 per hour' and the y-intercept is the starting value.",
    ],
    example: "Points (1, 2) and (3, 8): slope = (8 − 2) ÷ (3 − 1) = 3.\nUse (1, 2): 2 = 3(1) + b → b = −1. Equation: y = 3x − 1.\n\nIn y = −2x + 5: slope −2 (falls), y-intercept 5.",
    vocab: [["slope", "The rate of change of a line: rise over run."], ["y-intercept", "The point where a line crosses the y-axis."], ["slope-intercept form", "The equation y = mx + b."], ["rate of change", "How one quantity changes compared with another."], ["linear relationship", "A relationship whose graph is a straight line."], ["constant of proportionality", "The constant ratio y/x in a proportional relationship."], ["x-intercept", "The point where a line crosses the x-axis."]],
    questions: `
What is the slope of the line through (1, 2) and (3, 8)?|3|6|1/3|2|=>(8 − 2) ÷ (3 − 1).
What is the slope of the line through (2, 5) and (6, 5)?|0|1|undefined|5|=>Horizontal line.
What is the slope of the line through (4, 1) and (4, 7)?|undefined|0|6|1/6|=>Vertical line.
In y = 3x − 4, the slope is…|3|−4|4|1/3|=>m in y = mx + b.
In y = 3x − 4, the y-intercept is…|−4|3|4|−3|=>b in y = mx + b.
Which equation has slope −2 and y-intercept 5?|y = −2x + 5|y = 5x − 2|y = 2x + 5|y = −2x − 5|=>y = mx + b.
A line with a positive slope…|rises from left to right|falls from left to right|is horizontal|is vertical|=>Increasing.
A line with slope 0 is…|horizontal|vertical|rising|falling|=>No change in y.
Which equation is a proportional relationship?|y = 4x|y = 4x + 1|y = x − 4|y = x²|=>It passes through the origin.
Which lines are parallel?|y = 2x + 1 and y = 2x − 3|y = 2x + 1 and y = −2x + 1|y = x and y = 2x|y = 3 and x = 3|=>Same slope.
A taxi charges $3 plus $2 per mile. Which equation gives the cost y for x miles?|y = 2x + 3|y = 3x + 2|y = 5x|y = 2x − 3|=>Rate 2, start 3.
What is the x-intercept of y = 2x − 6?|3|−6|6|−3|=>0 = 2x − 6.
What is the y-intercept of the line through (0, 4) and (2, 10)?|4|10|3|6|=>The point (0, 4).
In y = 5x, what does 5 represent?|the rate of change per 1 unit of x|the starting value|the y-intercept|the x-intercept|=>The slope.
`,
  }, {
    examples: ["Graph y = 2x − 1: plot (0, −1); from there go up 2 and right 1 to (1, 1), then (2, 3).", "Reading a graph: if a line passes through (0, 20) and (4, 60), slope = 40 ÷ 4 = 10 and y-intercept = 20 → y = 10x + 20."],
    vocab: { "slope": "The slope is 2.", "y-intercept": "The y-intercept is where x = 0.", "slope-intercept form": "y = mx + b is slope-intercept form.", "rate of change": "The rate of change is $5 per hour.", "linear relationship": "The graph shows a linear relationship.", "constant of proportionality": "The constant of proportionality was 4.", "x-intercept": "The x-intercept is where y = 0." },
  });

  add({
    id: "functions", title: "Functions & Relations", sol: "8.PFA.2",
    summary: "What makes a relation a function, and how to represent and evaluate functions.",
    points: [
      "A relation is a set of ordered pairs (x, y). A function is a relation in which each input (x) has exactly one output (y).",
      "Vertical line test: if any vertical line crosses a graph more than once, it is not a function.",
      "Domain is the set of all inputs (x-values); range is the set of all outputs (y-values).",
      "Functions can be shown as a table, graph, mapping diagram, equation, or verbal description. In function notation f(x) = 2x + 3, f(4) = 2(4) + 3 = 11.",
      "A linear function has a constant rate of change; its graph is a line. A nonlinear function changes at a varying rate (for example y = x²).",
      "To decide whether a table is linear, check whether equal changes in x give equal changes in y.",
      "Independent variable: input (x). Dependent variable: output (y), depends on x.",
      "Compare two functions by their rates of change and initial values (y-intercepts) shown in tables, graphs, or equations.",
    ],
    example: "Is {(1, 2), (2, 4), (3, 6), (3, 8)} a function? No: input 3 has two outputs.\n\nTable: x = 0, 1, 2, 3 and y = 5, 8, 11, 14. Change in y is +3 each time, so it is linear: y = 3x + 5.",
    vocab: [["function", "A relation in which each input has exactly one output."], ["relation", "A set of ordered pairs."], ["domain", "The set of all possible inputs."], ["range", "The set of all possible outputs."], ["independent variable", "The input variable, usually x."], ["dependent variable", "The output variable, usually y."], ["function notation", "A way of writing a function, such as f(x) = 2x + 3."]],
    questions: `
What is a function?|a relation where each input has exactly one output|a relation where an input has two outputs|a set of equations|a graph with no points|=>One output per input.
Which relation is a function?|{(1, 2), (2, 3), (3, 4)}|{(1, 2), (1, 3), (2, 4)}|{(2, 1), (2, 3)}|{(0, 1), (0, 5)}|=>Each x appears once.
Which relation is NOT a function?|{(1, 2), (1, 5), (3, 4)}|{(0, 1), (1, 2), (2, 3)}|{(1, 1), (2, 1), (3, 1)}|{(4, 5)}|=>x = 1 has two outputs.
What does the vertical line test show?|whether a graph is a function|whether a graph is linear|the slope|the intercept|=>A vertical line hits at most one point.
What is the domain of a function?|all possible inputs|all possible outputs|the slope|the y-intercept|=>x-values.
What is the range of a function?|all possible outputs|all possible inputs|the slope|the x-intercept|=>y-values.
If f(x) = 2x + 3, what is f(4)?|11|9|14|8|=>2(4) + 3.
If f(x) = x² − 1, what is f(3)?|8|5|10|2|=>9 − 1.
If f(x) = 5 − 2x, what is f(−2)?|9|1|−9|7|=>5 + 4.
Which table shows a linear function?|x: 0, 1, 2, 3; y: 2, 5, 8, 11|x: 0, 1, 2, 3; y: 1, 2, 4, 8|x: 0, 1, 2, 3; y: 1, 4, 9, 16|x: 0, 1, 2, 3; y: 3, 3, 4, 6|=>Constant change of 3.
Which equation represents a nonlinear function?|y = x²|y = 2x|y = x + 4|y = −3x|=>The rate of change varies.
In y = 3x + 1, x is the…|independent variable|dependent variable|constant|slope|=>The input.
A function has the rule 'multiply the input by 4.' What is the output for input 7?|28|11|3|47|=>7 × 4.
Which has the greater rate of change: y = 3x + 2 or a line through (0, 1) and (2, 9)?|the second line, with a slope of 4|y = 3x + 2|they are equal|cannot tell|=>(9 − 1) ÷ 2 = 4.
`,
  }, {
    examples: ["Mapping diagram: if two arrows leave the same input, the relation is not a function.", "Real-life function: the cost of buying x tickets at $12 each is C(x) = 12x."],
    vocab: { "function": "Total cost is a function of the number of items.", "relation": "Any set of ordered pairs is a relation.", "domain": "The domain was all whole numbers.", "range": "The range included the outputs 2, 4, 6.", "independent variable": "Time is the independent variable.", "dependent variable": "Distance is the dependent variable.", "function notation": "f(x) is function notation." },
  });

  add({
    id: "equations", title: "Multistep Equations & Inequalities", sol: "8.PFA.3",
    summary: "Solving equations with variables on both sides, and solving and graphing inequalities.",
    points: [
      "To solve an equation, use inverse operations and keep both sides balanced. Simplify each side first (distribute, combine like terms).",
      "Variables on both sides: collect variable terms on one side and constants on the other: 5x + 3 = 2x + 12 → 3x = 9 → x = 3.",
      "An equation can have one solution, no solution (x + 1 = x + 2), or infinitely many solutions (2x + 2 = 2(x + 1)).",
      "Check your answer by substituting it back into the original equation.",
      "An inequality compares expressions using <, >, ≤, ≥. Solve like an equation, but when you multiply or divide by a negative number, reverse the inequality sign.",
      "Graph inequalities on a number line: open circle for < or >, closed circle for ≤ or ≥, and shade the solution direction.",
      "Translate words: 'at least' is ≥, 'at most' is ≤, 'more than' is >, 'less than' is <.",
      "Use equations and inequalities to solve real-world problems: define the variable, write the expression, solve, and check reasonableness.",
    ],
    example: "Solve 3(x − 2) = x + 6:\n3x − 6 = x + 6 → 2x = 12 → x = 6. Check: 3(4) = 12 and 6 + 6 = 12 ✓\n\nSolve −2x + 3 > 11:\n−2x > 8 → x < −4 (flip the sign).",
    vocab: [["variable", "A letter that stands for an unknown number."], ["inverse operation", "An operation that undoes another operation."], ["distributive property", "a(b + c) = ab + ac."], ["like terms", "Terms with the same variable part."], ["inequality", "A statement comparing two expressions using <, >, ≤, or ≥."], ["solution set", "All the values that make an equation or inequality true."], ["coefficient", "The number multiplied by a variable."]],
    questions: `
Solve 5x + 3 = 2x + 12.|x = 3|x = 5|x = 9|x = −3|=>3x = 9.
Solve 4x − 7 = 21.|x = 7|x = 3.5|x = 14|x = −7|=>4x = 28.
Solve 3(x + 2) = 18.|x = 4|x = 6|x = 5|x = 2|=>3x + 6 = 18.
Solve 2x + 5 = 9 − 2x.|x = 1|x = 2|x = 7|x = −1|=>4x = 4.
Solve x/4 + 3 = 8.|x = 20|x = 5|x = 44|x = 12|=>x/4 = 5.
Solve 7 − 3x = −8.|x = 5|x = −5|x = 1|x = 15|=>−3x = −15.
How many solutions does x + 1 = x + 2 have?|none|one|two|infinitely many|=>It simplifies to 1 = 2.
How many solutions does 2(x + 1) = 2x + 2 have?|infinitely many|one|none|two|=>Both sides are equal.
Solve x + 5 < 12.|x < 7|x > 7|x < 17|x > 17|=>Subtract 5.
Solve −3x > 12.|x < −4|x > −4|x > 4|x < 4|=>Dividing by −3 flips the sign.
Solve 2x − 1 ≥ 9.|x ≥ 5|x ≤ 5|x ≥ 4|x > 5|=>2x ≥ 10.
On a number line, x ≥ 3 is shown with…|a closed circle at 3 shaded to the right|an open circle at 3 shaded to the right|a closed circle at 3 shaded to the left|an open circle at 3 shaded to the left|=>Includes 3.
'A number is at most 10' is written as…|x ≤ 10|x ≥ 10|x < 10|x > 10|=>At most means no more than.
When must you reverse an inequality sign?|when multiplying or dividing by a negative number|when adding|when subtracting|never|=>Negatives reverse order.
`,
  }, {
    examples: ["Check: x = 3 in 5x + 3 = 2x + 12 → 5(3) + 3 = 18 and 2(3) + 12 = 18 ✓", "Word problem: Gym A charges $20 to join plus $10 a month; Gym B charges $50 to join plus $5 a month. When are they equal? 20 + 10m = 50 + 5m → 5m = 30 → m = 6 months."],
    vocab: { "variable": "x is a variable.", "inverse operation": "Subtraction is the inverse operation of addition.", "distributive property": "Use the distributive property to expand 3(x + 2).", "like terms": "3x and 5x are like terms.", "inequality": "x > 5 is an inequality.", "solution set": "The solution set is all numbers less than 4.", "coefficient": "In 7x, the coefficient is 7." },
  });

  add({
    id: "stats-probability", title: "Scatterplots, Statistics & Probability", sol: "8.PS",
    summary: "Reading scatterplots and lines of best fit, box plots, and the probability of compound events.",
    points: [
      "A scatterplot shows the relationship between two numerical variables. A positive association means as x increases, y tends to increase; negative means y tends to decrease; no association means no pattern.",
      "A line of best fit (trend line) approximates the data. Use it to make predictions, but only within a reasonable range. An outlier is a point far from the pattern. Correlation does not mean causation.",
      "Box plots show the five-number summary: minimum, first quartile (Q1), median, third quartile (Q3), and maximum. The interquartile range IQR = Q3 − Q1; range = max − min.",
      "Mean, median, and mode describe the center; outliers affect the mean more than the median.",
      "Probability = favorable outcomes ÷ total outcomes, from 0 (impossible) to 1 (certain). A sample space lists all outcomes.",
      "Independent events: one does not affect the other (coin flips). P(A and B) = P(A) × P(B). Dependent events: the first affects the second (drawing without replacement).",
      "Compound events can be found with an organized list, a tree diagram, or the multiplication rule. Two coins have 4 outcomes (HH, HT, TH, TT).",
      "Two-way tables organize data by two categories and can show relative frequencies.",
    ],
    example: "Two dice: P(sum = 7) = 6/36 = 1/6.\nTwo coins: P(two heads) = ½ × ½ = ¼.\nWithout replacement: 3 red and 2 blue marbles; P(red then red) = 3/5 × 2/4 = 6/20 = 3/10.\n\nData 2, 4, 4, 6, 9: range = 7, median = 4, mean = 5.",
    vocab: [["scatterplot", "A graph that plots pairs of data to show a relationship."], ["line of best fit", "A line that approximates the trend in a scatterplot."], ["outlier", "A data value that is much larger or smaller than the others."], ["interquartile range", "The difference between the third and first quartiles."], ["independent events", "Events where one outcome does not affect the other."], ["sample space", "The set of all possible outcomes."], ["compound event", "An event made of two or more simple events."]],
    questions: `
A scatterplot shows y increasing as x increases. This is…|positive association|negative association|no association|an outlier|=>Both go up.
A scatterplot shows y decreasing as x increases. This is…|negative association|positive association|no association|a function|=>Opposite directions.
What is a line of best fit used for?|to describe the trend and make predictions|to find the exact data|to find outliers only|to graph a function|=>It approximates the data.
What is an outlier?|a value far from the others|the mean|the median|the mode|=>It may affect the mean.
What is the median of 2, 4, 4, 6, 9?|4|5|6|4.5|=>The middle value.
What is the mean of 2, 4, 4, 6, 9?|5|4|6|4.5|=>25 ÷ 5.
What is the range of 2, 4, 4, 6, 9?|7|9|5|4|=>9 − 2.
In a box plot, the box shows the…|middle 50% of the data|all the data|only the outliers|the mean|=>Q1 to Q3.
If Q1 = 12 and Q3 = 20, what is the IQR?|8|32|16|4|=>20 − 12.
Which measure is most affected by an outlier?|mean|median|mode|range only|=>Mean shifts toward it.
What is the probability of rolling a 3 on a fair number cube?|1/6|1/3|1/2|3/6|=>1 favorable out of 6.
What is the probability of flipping two heads in a row?|1/4|1/2|1/3|1/8|=>½ × ½.
Two coins are flipped. How many outcomes are in the sample space?|4|2|3|8|=>HH, HT, TH, TT.
A bag has 3 red and 2 blue marbles. Two are drawn with replacement. P(red, red) = ?|9/25|6/20|3/5|6/25|=>3/5 × 3/5.
`,
  }, {
    examples: ["Correlation vs. causation: ice cream sales and sunburns both rise in summer; one does not cause the other.", "Tree diagram: flip a coin, then roll a die → 2 × 6 = 12 outcomes."],
    vocab: { "scatterplot": "The scatterplot showed hours studied and scores.", "line of best fit": "She drew a line of best fit.", "outlier": "The 100 was an outlier.", "interquartile range": "The interquartile range was 8.", "independent events": "Coin flips are independent events.", "sample space": "The sample space of a coin is heads and tails.", "compound event": "Rolling two dice is a compound event." },
  });

  const idx = g8.subjects.findIndex((s) => s.id === "english");
  g8.subjects.splice(idx < 0 ? 0 : idx, 0, subject);
})();
