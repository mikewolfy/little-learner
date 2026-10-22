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

## Current focus: Grade 3 Reading Unit 1

`data/grade3-unit1.js` adds a **Reading Unit 1** section to the top of Grade 3 and features it on the home page. It covers every skill on the Unit 1 assessment: long vowel spellings, soft g/c, words ending in -le/-el/-al/-il, silent letters (ph, mb, kn, wr, wh), compound words, synonyms and antonyms, shades of meaning, and plurals. It includes a 30-question **Unit 1 Practice Test**.

Practice for this unit lives in `data/grade3-unit1-more.js` (about 390 extra questions with new words on the same sounds) plus random generators in `js/generators.js` (`ending3`, `silent3`, `plural3`, `compound3`, `synAnt3`, `shades3`) that build fresh spelling and word-study questions every time. Each skill has a 10-question quiz and a 20-question **long practice**, and the subject page has three themed practice rounds (Focus, Spelling, Word Study).

To feature the next unit, copy that file, change the content, add a `<script>` tag for it in `index.html`, and set `focus` on the grade to point at the new section.

## Gifted, honors & programs

- Each grade has a separate **🚀 Gifted & Advanced** section (`data/advanced.js`), styled differently from the standard curriculum. Grade 3 has challenge units, Grade 5 previews CCPS accelerated math (rational numbers and algebra) and gifted ELA, and Grade 7 has an Algebra I preview plus honors English and science.
- The **Programs & Tracks** page (`data/programs.js`) explains CCPS gifted services (home-school cluster grouping, Center-Based Gifted academies, accelerated math) and the standard, honors, and gifted course options for grades 6–8, with math pathways. Items that couldn't be confirmed on an official page are marked "check with school."
- Grade, subject, and Programs pages link to official CCPS and Virginia Department of Education resources.

## Vocabulary

Every vocabulary word has a definition and an example. Units show words as a list (with a flashcard mode), each grade has a searchable **Vocabulary** page, every subject has a vocabulary quiz, and unit quizzes include 2 vocabulary questions. Extra worked examples and vocabulary examples live in `data/extras-gradeN.js`.

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
