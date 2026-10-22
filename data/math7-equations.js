/* Grade 7 Math: one-step equation units (balancing with a T-chart), added before "Expressions & Two-Step Equations".
   Question format: [question, [choices...], indexOfCorrectChoice, explanation]. Correct answer is listed first. */
(function () {
  const math = window.CURRICULUM[7].subjects.find((s) => s.id === "math");
  const at = math.units.findIndex((u) => u.id === "equations");
  const units = [
    {
      id: "one-step-add-sub", title: "One-Step Equations: Addition & Subtraction", sol: "7.PFA.2",
      summary: "Solve equations like x + 9 = 12 and p − 51 = 12 by balancing both sides with inverse operations.",
      points: [
        "An equation is like a balanced scale: both sides are equal. Whatever you do to one side, you must do to the other.",
        "To get the variable alone, use the inverse (opposite) operation: undo addition by subtracting, and undo subtraction by adding.",
        "Use a T-chart: draw a line down from the equals sign, write the operation under BOTH sides, then simplify.",
        "The variable can be on either side. 150 = p + 78 is solved the same way as p + 78 = 150.",
        "Always check: put your answer back into the original equation. If both sides match, it is correct.",
        "Common mistake: using the SAME operation instead of the inverse. In g + 18 = 30, adding 18 to both sides gives 48, which is wrong. Ask: what undoes +18?",
      ],
      examples: [
        "Balance with a T-chart:\n e − 8 = 25\n +8   | +8\n ----------\n e = 33\nCheck: 33 − 8 = 25 ✓",
        "Variable on the right side:\n 150 = p + 78\n −78      −78\n 72 = p\nCheck: 72 + 78 = 150 ✓",
        "Common mistake:\n g + 18 = 30\n Wrong: +18 +18 → g = 48 ✗ (48 + 18 = 66)\n Right: −18 −18 → g = 12 ✓ (12 + 18 = 30)",
      ],
      vocab: [
        ["equation", "A math sentence that says two expressions are equal.", "x + 9 = 12 is an equation."],
        ["variable", "A letter or symbol that stands for an unknown number.", "In e − 8 = 25, the variable is e."],
        ["inverse operation", "An operation that undoes another one.", "Subtraction is the inverse of addition."],
        ["solution", "The value of the variable that makes the equation true.", "The solution of x + 9 = 12 is x = 3."],
        ["balance", "To keep both sides of an equation equal by doing the same thing to each side.", "Subtract 9 from both sides to keep the equation balanced."],
      ],
      gen: ["eqAddSub7"],
      questions: [
        ["Solve: x + 9 = 12", ["x = 3", "x = 21", "x = 9", "x = 108"], 0, "Subtract 9 from both sides: 12 − 9 = 3."],
        ["Solve: s − 1 = 10", ["s = 11", "s = 9", "s = 10", "s = 1"], 0, "Add 1 to both sides: 10 + 1 = 11."],
        ["Solve: 3 = z − 11", ["z = 14", "z = 8", "z = −8", "z = 33"], 0, "Add 11 to both sides: 3 + 11 = 14."],
        ["Solve: 8 = 2 + q", ["q = 6", "q = 10", "q = 16", "q = 4"], 0, "Subtract 2 from both sides: 8 − 2 = 6."],
        ["Solve: 150 = p + 78", ["p = 72", "p = 228", "p = 82", "p = 78"], 0, "Subtract 78 from both sides: 150 − 78 = 72."],
        ["Which operation undoes + 18?", ["subtracting 18", "adding 18", "multiplying by 18", "dividing by 18"], 0, "Subtraction is the inverse of addition."],
        ["In 30 = g + 18, a student added 18 to both sides and got g = 48. What went wrong?", ["They should have subtracted 18, because subtraction undoes addition.", "They should have multiplied by 18.", "Nothing, 48 is correct.", "They should have added 18 to only one side."], 0, "Check: 48 + 18 = 66, not 30. The right answer is g = 12."],
        ["Which check proves that x = 14 is the solution of x − 6 = 8?", ["14 − 6 = 8", "14 + 6 = 8", "6 − 14 = 8", "14 = 8"], 0, "Plug the answer in: 14 − 6 = 8 is true."],
        ["Why do we do the same thing to both sides of an equation?", ["to keep the equation balanced", "to make the numbers bigger", "to get rid of the equals sign", "because the variable is on the left"], 0, "Equal sides stay equal only if you treat them the same."],
        ["Solve: e − 8 = 25", ["e = 33", "e = 17", "e = 25", "e = 200"], 0, "Add 8 to both sides: 25 + 8 = 33."],
      ],
    },
    {
      id: "one-step-integers", title: "One-Step Equations with Integers", sol: "7.PFA.2",
      summary: "Solve one-step equations where the numbers or the answer can be negative.",
      points: [
        "Solutions can be negative. In x + 7 = 3, subtract 7 from both sides to get x = −4.",
        "Adding a negative is the same as subtracting: x + (−5) = 9 means x − 5 = 9, so x = 14.",
        "Subtracting a negative is the same as adding: x − (−4) = 3 means x + 4 = 3, so x = −1.",
        "Use a number line to see it: start at the right side and move opposite to the operation.",
        "Check by substituting. Put negative answers in parentheses: (−4) + 7 = 3 ✓.",
      ],
      examples: [
        "Negative answer:\n m + 12 = 5\n −12   −12\n m = −7\nCheck: (−7) + 12 = 5 ✓",
        "Subtracting a negative:\n x − (−4) = 3\n x + 4 = 3\n −4   −4\n x = −1\nCheck: (−1) − (−4) = 3 ✓",
        "Negative number on the left:\n −3 + x = −10\n +3       +3\n x = −7\nCheck: −3 + (−7) = −10 ✓",
      ],
      vocab: [
        ["integer", "A whole number, its opposite, or zero.", "−12, 0, and 9 are integers."],
        ["opposite", "A number the same distance from zero on the other side.", "The opposite of −4 is 4."],
        ["substitute", "To replace a variable with a number.", "Substitute x = 3 into x + 9 to get 3 + 9."],
        ["negative solution", "An answer that is less than zero.", "x = −7 is a negative solution."],
      ],
      gen: ["eqInt7"],
      questions: [
        ["Solve: x + 7 = 3", ["x = −4", "x = 4", "x = 10", "x = −10"], 0, "Subtract 7 from both sides: 3 − 7 = −4."],
        ["Solve: x − 5 = −9", ["x = −4", "x = −14", "x = 4", "x = 14"], 0, "Add 5 to both sides: −9 + 5 = −4."],
        ["Solve: −3 + x = −10", ["x = −7", "x = −13", "x = 7", "x = 13"], 0, "Add 3 to both sides: −10 + 3 = −7."],
        ["Solve: x + (−4) = −9", ["x = −5", "x = −13", "x = 5", "x = 13"], 0, "Adding −4 is subtracting 4. Add 4 to both sides: −9 + 4 = −5."],
        ["Solve: x − (−4) = 3", ["x = −1", "x = 7", "x = 1", "x = −7"], 0, "Subtracting −4 is adding 4. Subtract 4 from both sides: 3 − 4 = −1."],
        ["Solve: m + 12 = 5", ["m = −7", "m = 7", "m = 17", "m = −17"], 0, "Subtract 12 from both sides: 5 − 12 = −7."],
        ["Is x = −2 a solution of x − 6 = −8?", ["Yes, because −2 − 6 = −8", "No, because −2 − 6 = −4", "No, because −2 + 6 = 4", "Yes, because 6 − 2 = −8"], 0, "Substitute: −2 − 6 = −8 ✓."],
        ["Which equation has the solution x = −5?", ["x + 9 = 4", "x + 9 = 14", "x − 9 = 4", "x − 9 = −4"], 0, "−5 + 9 = 4 ✓."],
      ],
    },
    {
      id: "one-step-mul-div", title: "One-Step Equations: Multiplication & Division", sol: "7.PFA.2",
      summary: "Solve equations like 4x = 28 and x ÷ 5 = 6 using inverse operations.",
      points: [
        "A number written next to a variable means multiply: 4x means 4 × x. The number is the coefficient.",
        "Undo multiplying by dividing both sides by the coefficient. Undo dividing by multiplying both sides.",
        "Use the T-chart: write ÷4 under both sides of 4x = 28, so x = 7.",
        "If the coefficient is negative, divide by the negative number: −3x = 18 gives x = −6.",
        "Check by substituting: 4 × 7 = 28 ✓.",
      ],
      examples: [
        "Multiplication:\n 4x = 28\n ÷4   ÷4\n x = 7\nCheck: 4 × 7 = 28 ✓",
        "Division:\n x ÷ 5 = 6\n ×5     ×5\n x = 30\nCheck: 30 ÷ 5 = 6 ✓",
        "Negative coefficient:\n −3x = 18\n ÷(−3)  ÷(−3)\n x = −6\nCheck: −3 × (−6) = 18 ✓",
      ],
      vocab: [
        ["coefficient", "The number multiplied by a variable.", "In 7y = 42, the coefficient is 7."],
        ["inverse operation", "An operation that undoes another.", "Division undoes multiplication."],
        ["isolate", "To get the variable alone on one side of the equation.", "Divide by 4 to isolate x in 4x = 28."],
        ["quotient", "The answer to a division problem.", "In 28 ÷ 4 = 7, the quotient is 7."],
      ],
      gen: ["eqMulDiv7"],
      questions: [
        ["Solve: 4x = 28", ["x = 7", "x = 24", "x = 32", "x = 112"], 0, "Divide both sides by 4."],
        ["Solve: x ÷ 5 = 6", ["x = 30", "x = 11", "x = 1.2", "x = 1"], 0, "Multiply both sides by 5."],
        ["Solve: −3x = 18", ["x = −6", "x = 6", "x = −15", "x = 15"], 0, "Divide both sides by −3."],
        ["Solve: 45 = 9y", ["y = 5", "y = 36", "y = 54", "y = 405"], 0, "Divide both sides by 9."],
        ["Solve: n ÷ (−4) = 3", ["n = −12", "n = 12", "n = −7", "n = −1"], 0, "Multiply both sides by −4."],
        ["Which operation undoes multiplying by 6?", ["dividing by 6", "subtracting 6", "adding 6", "multiplying by 6"], 0, "Division is the inverse of multiplication."],
        ["In 7m = 56, what is the coefficient?", ["7", "m", "56", "49"], 0, "The coefficient is the number multiplied by the variable."],
        ["A student solved 3x = 24 and got x = 21. What did they do?", ["Subtracted 3 instead of dividing by 3", "Divided by 3 correctly", "Multiplied by 3", "Added 3"], 0, "24 − 3 = 21, but the correct step is 24 ÷ 3 = 8."],
      ],
    },
    {
      id: "check-mistakes", title: "Checking Solutions & Finding Mistakes", sol: "7.PFA.2",
      summary: "Substitute to check an answer, and spot where a solution went wrong.",
      points: [
        "To check a solution, replace the variable with your answer in the ORIGINAL equation and see if both sides are equal.",
        "If the sides are not equal, your answer is wrong. Look back at the step where you used the inverse operation.",
        "Most mistakes: using the same operation instead of the inverse; changing only one side; sign errors with negatives.",
        "Checking only takes a few seconds and catches most errors before you turn in a test.",
      ],
      examples: [
        "Is x = 12 a solution of x + 7 = 20?\n 12 + 7 = 19, not 20 → NO. The solution is x = 13.",
        "Find the mistake:\n p − 51 = 12\n −51   −51   ← wrong! (should add 51)\n p = −39\nFix: +51 +51 → p = 63. Check: 63 − 51 = 12 ✓",
      ],
      vocab: [
        ["substitute", "To replace a variable with a number.", "Substitute 63 for p to check p − 51 = 12."],
        ["inverse operation", "The operation that undoes another.", "The inverse of subtracting 51 is adding 51."],
        ["error analysis", "Looking at someone's work to find where a mistake happened.", "In error analysis you explain the step that went wrong."],
      ],
      gen: ["eqMistake7"],
      questions: [
        ["Is x = 12 a solution of x + 7 = 20?", ["No, because 12 + 7 = 19", "Yes, because 12 + 7 = 20", "Yes, because 20 − 7 = 12", "No, because 12 − 7 = 5"], 0, "Substitute: 12 + 7 = 19, which is not 20."],
        ["Which value of n is the solution of n − 15 = 22?", ["n = 37", "n = 7", "n = 22", "n = 15"], 0, "37 − 15 = 22 ✓."],
        ["A student solved p − 51 = 12 by subtracting 51 from both sides and got p = −39. What should they have done?", ["Add 51 to both sides", "Subtract 12 from both sides", "Multiply by 51", "Do nothing"], 0, "Adding 51 undoes subtracting 51: p = 63."],
        ["Which is the BEST way to check an answer?", ["Substitute it into the original equation", "Ask a friend", "Do the same steps again", "See if it looks big enough"], 0, "Substituting proves whether both sides are equal."],
        ["A student solves x + 8 = 20 and writes x = 28. Which check shows the mistake?", ["28 + 8 = 36, not 20", "28 − 8 = 20", "8 + 20 = 28", "20 − 8 = 12"], 0, "The answer doesn't make the equation true."],
        ["Which step is correct for solving 9 = y − 4?", ["Add 4 to both sides", "Subtract 4 from both sides", "Add 9 to both sides", "Divide by 4"], 0, "Add 4 to undo subtracting 4: y = 13."],
      ],
    },
    {
      id: "equation-words", title: "Writing Equations from Word Problems", sol: "7.PFA.2",
      summary: "Turn a story into an equation, then solve it.",
      points: [
        "Pick a letter for the unknown. Read the story and decide what is happening to it.",
        "Words that mean add: more, found, gained, total. Subtract: gave away, spent, lost, left. Multiply: each, groups, packs, times. Divide: shared equally, split, per.",
        "Write the equation first, then solve using the inverse operation, then check it with the story.",
        "Answer the question in a sentence with the right label (stickers, dollars, packs).",
      ],
      examples: [
        "Story: Maya had some stickers. After finding 8 more, she had 25.\nEquation: s + 8 = 25\nSolve: s = 17 stickers",
        "Story: Leo shared some marbles equally among 4 friends. Each friend got 6.\nEquation: m ÷ 4 = 6\nSolve: m = 24 marbles",
      ],
      vocab: [
        ["unknown", "The number you are trying to find.", "The number of stickers Maya started with is the unknown."],
        ["translate", "To change words into a math equation.", "Translate “8 more than a number is 25” into n + 8 = 25."],
        ["label", "The unit that tells what a number counts.", "The answer 17 stickers has the label stickers."],
      ],
      gen: ["eqWords7"],
      questions: [
        ["Sam had some cards. After finding 9 more, he had 31. Which equation fits? (Let n be the unknown number.)", ["n + 9 = 31", "n − 9 = 31", "9n = 31", "n ÷ 9 = 31"], 0, "Finding more means adding."],
        ["Ava had some coins. After spending 6, she had 14 left. Which equation fits?", ["n − 6 = 14", "n + 6 = 14", "6n = 14", "n ÷ 6 = 14"], 0, "Spending means subtracting."],
        ["Each pack has 8 pencils. There are 56 pencils in all. Which equation finds the number of packs, p?", ["8p = 56", "p + 8 = 56", "p − 8 = 56", "p ÷ 8 = 56"], 0, "Each pack has 8, so 8 times the packs equals 56."],
        ["Leo shared some marbles equally among 4 friends. Each friend got 6. How many marbles did Leo start with?", ["24", "10", "2", "1.5"], 0, "m ÷ 4 = 6, so m = 24."],
        ["“A number decreased by 7 is 15.” Which equation matches?", ["n − 7 = 15", "7 − n = 15", "n + 7 = 15", "7n = 15"], 0, "Decreased by means subtract from the number."],
        ["Which word usually tells you to divide?", ["shared equally", "found more", "total", "each pack has"], 0, "Sharing equally means dividing."],
      ],
    },
  ];
  math.units.splice(at, 0, ...units);
  math.mixes = (math.mixes || []).concat([
    { id: "equations", label: "📝 One-Step Equations Test (20)", size: 20, units: ["one-step-add-sub", "one-step-integers", "one-step-mul-div", "check-mistakes", "equation-words"],
      about: "Add and subtract, integers, multiply and divide, finding mistakes, and word problems." },
  ]);
})();
