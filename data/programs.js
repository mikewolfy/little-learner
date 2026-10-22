/* Official resource links and CCPS program/track information.
   Facts come from CCPS public pages and Program of Studies documents found in Oct. 2026.
   Items marked `verify: true` could not be confirmed from an official page and should be checked with the school. */
window.PROGRAMS = {
  links: {
    ccpsCurriculum: { label: "CCPS Curriculum Information", url: "https://www.oneccps.org/curriculum-information/", note: "CCPS's curriculum hub, with Programs of Studies and math course options." },
    ccpsGifted: { label: "CCPS Gifted Education", url: "https://www.oneccps.org/page/gifted-education", note: "Referral forms, deadlines, and Center-Based Gifted (CBG) academy information." },
    ccpsHandbook: { label: "CCPS Parent Handbook", url: "https://www.oneccps.org/parent-handbook/", note: "Testing, grading, and school-wide policies." },
    ccpsSummer: { label: "CCPS Summer Programs", url: "https://www.oneccps.org/summer-programs/", note: "Includes the math and science bridge courses for moving to an honors track." },
    programOfStudies: { label: "CCPS 2026–27 Program of Studies (PDF)", url: "https://go.boarddocs.com/vsba/chesterfield/Board.nsf/files/DTULKB54D841/$file/Attachment%20A%20-%202026-27%20Program%20of%20Studies.pdf", note: "Every middle and high school course, including honors and high school credit courses." },
    giftedPlan: { label: "CCPS Local Plan for the Education of the Gifted, 2021–2026 (PDF)", url: "https://www.boarddocs.com/vsba/chesterfield/Board.nsf/files/C5CPX466AEFA/$file/ATTACHMENT%20A%20-%20Local%20Plan%20for%20the%20Education%20of%20the%20Gifted%202021-2026.pdf", note: "The district's official plan for identifying and serving gifted students." },
    vdoeMath: { label: "Virginia 2023 Mathematics SOL", url: "https://www.doe.virginia.gov/teaching-learning-assessment/instruction/mathematics/standards-of-learning-for-mathematics", note: "The state math standards for every grade." },
    vdoeEnglish: { label: "Virginia 2024 English SOL", url: "https://www.doe.virginia.gov/teaching-learning-assessment/k-12-standards-instruction/english-reading-literacy/standards-of-learning", note: "The state reading, writing, and language standards." },
    vdoeScience: { label: "Virginia Science SOL Resources", url: "https://www.doe.virginia.gov/teaching-learning-assessment/k-12-standards-instruction/science/instructional-resources", note: "The state science standards and resources." },
    vdoeHistory: { label: "Virginia 2023 History & Social Science SOL", url: "https://www.doe.virginia.gov/teaching-learning-assessment/k-12-standards-instruction/history-and-social-science/standards-of-learning", note: "The state history, geography, civics, and economics standards." },
  },
  // Which links appear on each subject page.
  subjectLinks: {
    unit1: ["vdoeEnglish", "ccpsCurriculum"],
    math: ["vdoeMath", "ccpsCurriculum"],
    english: ["vdoeEnglish", "ccpsCurriculum"],
    science: ["vdoeScience", "ccpsCurriculum"],
    history: ["vdoeHistory", "ccpsCurriculum"],
    advanced: ["ccpsGifted", "giftedPlan"],
  },
  gradeLinks: {
    3: ["ccpsCurriculum", "ccpsGifted", "ccpsHandbook"],
    5: ["ccpsCurriculum", "ccpsGifted", "ccpsHandbook"],
    7: ["ccpsCurriculum", "programOfStudies", "ccpsGifted", "ccpsSummer"],
  },

  gifted: {
    summary: "CCPS identifies gifted students in grades K–12 in English, math, social studies, and science. Gifted services happen in two main ways: inside your child's home school, or full-time at a Center-Based Gifted (CBG) academy.",
    services: [
      { name: "Home-school services", icon: "🏫", text: "Identified gifted students stay in their home school and are cluster-grouped with other gifted learners. Teachers differentiate instruction with more depth and challenge inside the regular classroom." },
      { name: "Center-Based Gifted (CBG) Academy", icon: "🚀", text: "A full-time gifted program for eligible students in grades 3–8, with more depth, complexity, and pace in every subject. Students are assigned to an academy by home address and can only start at the beginning of a school year, but families may exit at any time. For middle school CBG, parents take students to a designated bus stop within 3 miles of home." },
      { name: "Accelerated mathematics (grades 4–5)", icon: "➗", text: "CCPS offers accelerated math starting in 4th grade. 5th-grade accelerated math focuses on rational numbers and algebra ideas, which prepares students for advanced middle school math." },
    ],
    byGrade: {
      3: "Grade 3: differentiated instruction for identified students, plus the option to attend a CBG academy.",
      5: "Grade 5: CBG academy option and accelerated mathematics (rational numbers and early algebra).",
      7: "Grade 7: CBG academy option, honors courses, and accelerated math that can lead to Algebra I (high school credit) in 8th grade.",
    },
    referral: "Referrals use CCPS's online form (verbal or email requests don't count). For 2026–27, the deadline was Oct. 2, 2026 for students in grades 2–12 and is Feb. 26, 2027 for K–1 students.",
  },

  middle: {
    honorsNote: "In CCPS, honors and advanced courses follow the same curriculum as standard courses but add rigor: more depth, harder texts and problems, and a faster pace.",
    socialStudiesNote: "Heads up: Virginia's 2023 standards recommend Civics & Economics in 7th grade, but CCPS's summer course list shows Civics & Economics in 8th grade. Ask your child's teacher which social studies course they are taking this year.",
    mathLanes: [
      { name: "On grade level", steps: ["Math 6", "Math 7", "Math 8", "Algebra I in 9th"], text: "The standard path." },
      { name: "Honors", steps: ["Math 6", "Honors Math 7", "Algebra I in 8th", "Geometry in 9th"], text: "Reaches Algebra I, a high school credit course, in 8th grade." },
      { name: "Switching to honors", steps: ["Math 7", "Summer Math 8 bridge", "Algebra I in 8th"], text: "Students moving from Math 7 to Algebra I must take and pass a summer bridge course first." },
      { name: "Accelerated / gifted", steps: ["Middle School Math I/II or Math 8 Honors", "Algebra I in 8th or earlier", "Geometry"], text: "CCPS lists these accelerated courses, but placement depends on the student. Confirm the exact sequence with your school counselor.", verify: true },
    ],
    grades: [
      {
        grade: 6,
        courses: [
          { subject: "English", standard: "English 6", honors: "Honors English 6", gifted: "CBG English 6" },
          { subject: "Math", standard: "Math 6", honors: "Advanced math placement", gifted: "CBG / accelerated math", verify: true },
          { subject: "Science", standard: "Science 6", honors: "Honors science pathway begins in 7th", gifted: "CBG science" },
          { subject: "Social Studies", standard: "Grade 6 Social Studies (U.S. History 1865–present in the state sequence)", honors: "Honors option varies by school", gifted: "CBG social studies", verify: true },
        ],
        topics: {
          "Math 6": ["Ratios, rates, and percents", "Integers and absolute value", "Multiplying and dividing fractions", "Decimal operations", "Exponents and order of operations", "Area of triangles, parallelograms, and trapezoids", "Circles: circumference and area", "The coordinate plane", "One-step equations and inequalities", "Statistics: dot plots, circle graphs, and mean"],
          "English 6": ["Figurative language and word roots", "Theme, characterization, and point of view", "Informational text structure and central idea", "Narrative and argument writing", "Grammar: pronouns, punctuation, and sentence variety", "Research and citing sources"],
          "Science 6": ["Energy and how it moves", "The solar system and space", "Atoms, elements, and the periodic table", "Properties of water", "Air, the atmosphere, and weather", "Watersheds and natural resources"],
          "Social Studies 6": ["Reconstruction", "Westward expansion and industrialization", "Immigration and growth of cities", "World War I and the 1920s", "The Great Depression and World War II", "The Cold War and the Civil Rights Movement", "The United States today"],
        },
      },
      {
        grade: 7,
        courses: [
          { subject: "English", standard: "English 7", honors: "Honors English 7", gifted: "CBG English 7" },
          { subject: "Math", standard: "Math 7", honors: "Honors Math 7", gifted: "Middle School Math II / Math 8 Honors", verify: true },
          { subject: "Science", standard: "Life Science 7", honors: "Honors Life Science (summer bridge required if coming from Science 6)", gifted: "CBG science" },
          { subject: "Social Studies", standard: "Grade 7 Social Studies", honors: "Honors option varies by school", gifted: "CBG social studies", verify: true },
        ],
        topics: {
          "Grade 7 (study it on this site)": ["This site covers Math 7, English 7, Life Science, and Civics & Economics, plus an Honors & Gifted section with Algebra I preview units."],
        },
      },
      {
        grade: 8,
        courses: [
          { subject: "English", standard: "English 8", honors: "Honors English 8", gifted: "CBG English 8", verify: true },
          { subject: "Math", standard: "Math 8", honors: "Algebra I (high school credit)", gifted: "Algebra I or Geometry (high school credit)", verify: true },
          { subject: "Science", standard: "Physical Science 8", honors: "Honors Physical Science", gifted: "CBG science", verify: true },
          { subject: "Social Studies", standard: "Civics & Economics", honors: "Honors Civics & Economics", gifted: "CBG Civics & Economics", verify: true },
        ],
        topics: {
          "Math 8": ["Real and irrational numbers, square roots", "The Pythagorean theorem", "Transformations", "Volume and surface area of 3-D figures", "Linear relationships, slope, and functions", "Multistep equations and inequalities", "Scatterplots, box plots, and compound probability"],
          "Algebra I (honors / high school credit)": ["Expressions, exponents, and polynomials", "Multistep linear equations and inequalities", "Functions, slope, and graphing lines", "Systems of equations", "Factoring and quadratic equations", "Lines and curves of best fit"],
          "Physical Science 8": ["Atoms and the periodic table", "Chemical reactions", "Force, motion, and Newton's laws", "Work, energy, and machines", "Waves, sound, and light", "Electricity and magnetism"],
          "Civics & Economics": ["Founding documents and the Constitution", "Rights and responsibilities of citizens", "National, state, and local government", "Courts and the legal system", "Economic systems and personal finance"],
        },
      },
    ],
  },
};
