# Little Learner 🦉

A study-and-quiz site for **3rd, 5th, and 7th grade**, organized around the **Virginia Standards of Learning (SOL)** used by Chesterfield County Public Schools.

## What's inside

| Grade | Math | English | Science | History & Social Science |
|---|---|---|---|---|
| 3 | 11 units | 10 units | 8 units | 7 units: Greece, Rome, Mali, explorers, geography, economics, civics |
| 5 | 12 units | 9 units | 10 units | 9 units: U.S. History to 1865 |
| 7 | 11 units | 8 units | 9 units (Life Science) | 10 units: Civics & Economics |

Every unit has:
- **Study guide**: key ideas, worked examples, and tap-to-flip vocabulary cards
- **Quiz**: multiple-choice questions with explanations, then a review of anything missed
- **Fresh math practice**: many math units also generate new random problems on every attempt
- **Read to me** 🔊 buttons (browser text-to-speech) for younger readers

There are also **mixed-review quizzes** for each subject and each whole grade, **learner profiles** (one per child), and a **My Progress** page with stars and best scores. Progress is saved in the browser's local storage.

## Running it

No build step and no dependencies. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000   # then visit http://localhost:8000
```

To host it free with **GitHub Pages**, go to *Settings → Pages* and choose *Deploy from a branch* with `main` and `/ (root)`.

## Adding or editing content

All curriculum lives in `data/grade3.js`, `data/grade5.js`, and `data/grade7.js`. Each unit looks like this:

```js
{
  id: "fractions", title: "Fractions", sol: "3.NS.3",
  summary: "One-line description.",
  points: ["Key idea 1", "Key idea 2"],
  example: "Optional worked example (line breaks allowed with \\n)",
  vocab: [["term", "definition"]],
  gen: ["fracCompare3"],            // optional: random problem generators from js/generators.js
  questions: [
    ["Question text?", ["Choice A", "Choice B", "Choice C"], 0, "Explanation"],
    //                                                       ^ index of the correct choice
  ],
}
```

Answer choices are shuffled automatically, so you can always list the correct answer first.

## Note

This is not an official CCPS resource. SOL codes are approximate. Unit order and emphasis vary by teacher, so check your child's pacing guide or Schoology/teacher materials for exactly what is being taught each quarter.
