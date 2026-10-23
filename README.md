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

## Reading comprehension (Grades 3 and 7)

Each of these grades has a **Reading Comprehension** subject (`data/reading-grade3.js`, `data/reading-grade7.js`) with skills guides and original passages. A unit that has a `passage` shows the passage on its study page and keeps it beside every quiz question (with a show/hide toggle and a read-aloud button). Passage formats: `prose`, `poem`, `script`, and `steps`; a line starting with `## ` becomes a heading. To add a passage, copy an existing passage unit and replace its `passage`, `vocab`, and `questions`.

## Bonus quizzes

Every study unit (except the passage units) has **🎁 Bonus quizzes**: extra questions that test new facts and new numbers, not repeats of the regular quiz. They appear on each unit's study page, in the subject lists, on the grade page (**🎁 Bonus quizzes** button), and on the home page. Each bonus quiz has 10 questions and its own stars on My Progress. A 🔤 **Vocabulary & Examples** quiz built from the unit's vocabulary is added at the end of each list.

- `js/bonus-core.js` is the engine. Questions are written in a compact line format, right answer first: `question | right | wrong | wrong | => short explanation` (`{nl}` makes a line break; true/false uses two choices). Math units can also use seeded templates (`BONUS.tpl(key, fn, n)`) that compute every answer, so the numbers are different in every quiz but always the same for a given quiz.
- The data lives in `data/bonus-g3-*.js`, `bonus-g5-*.js`, and `bonus-g7-*.js`. Keys look like `"7/math/slope"` (grade/subject/unit). Banks are de-duplicated, shuffled the same way every time, and cut into quizzes of 10 by the app; questions identical to a regular unit question are skipped.
- Grade 3 Unit 1 (the featured unit) has the largest banks: about 225 to 425 questions per skill (22 to 29 quizzes each).
- The Reading Comprehension passage units get new content instead: `data/reading-bonus-grade3.js` and `data/reading-bonus-grade7.js` add ten new passages for each grade.

## Math Roadmap

`data/math-roadmap.js` holds one page per branch of math (number sense, arithmetic, fractions/decimals/percents, geometry & measurement, ratios, pre-algebra, algebra, high school geometry, Algebra II, trigonometry, statistics & probability, precalculus, calculus, and college math), plus the typical Virginia course pathways. Pages are at `#/math-roadmap` and `#/math/<id>`; each has a summary, the big idea, what students learn, sample problems, key words, how the levels connect, readiness checks, parent tips, and links to practice on this site. The algebra family (`data/math-roadmap-algebra.js`) has four pages (Algebra: The Big Picture, Pre-Algebra, Algebra I, Algebra II), each with a topic-by-topic `deepDive`: a description, a worked step-by-step example, and a common mistake for every skill. Edit the data file to change any page; the pathway rows marked `verify` should be confirmed with the school.

## Math worksheets & tests (Grade 7)

`js/worksheets.js` builds printable worksheets in the style of class handouts: one-step equations (balancing with a T-chart), riddle worksheets that decode a letter from each answer, two-step equations, integer operations, order of operations, percents, proportions, inequalities, and 20-question tests. Every sheet is built from a seed (`#/worksheet/7/<id>?s=<seed>`), so a link, a printout, and its answer key always match; **New worksheet** makes a fresh set. Answers are checked on screen with a "plug it back in" hint, and scores show on My Progress. `js/equations.js` is the shared engine that makes each equation with its worked steps. Grade 7 Math also has study units for one-step equations (`data/math7-equations.js`) with auto-generated quizzes and a 20-question Equations Test.

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
