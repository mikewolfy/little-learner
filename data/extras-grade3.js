/* Grade 3: extra worked examples and an example sentence for every vocabulary word.
   Keys are "grade/subject/unit". `vocab` maps a term to its example; `examples` adds worked examples. */
window.EXTRAS = window.EXTRAS || {};
Object.assign(window.EXTRAS, {
  // ----- Reading Unit 1 -----
  "3/unit1/long-vowels": {
    examples: ["Same sound, different spellings (long a):\nrain (ai) · play (ay) · cake (a_e)\nTip: at the end of a word, use ay. In the middle, try ai or a_e."],
    vocab: { "long vowel": "The a in 'cake' and the o in 'boat' are long vowels.", "silent e": "In 'kite,' you don't hear the e, but it makes the i say its name.", "vowel team": "In 'boat,' the o and a team up to make one long o sound.", "syllable": "'Re-mote' has two syllables." },
  },
  "3/unit1/soft-g-c": {
    examples: ["Hard or soft?\ngoat (g + o → hard)   giraffe (g + i → soft)\ncake (c + a → hard)   cereal (c + e → soft)"],
    vocab: { "soft g": "The g in 'giant' and 'page' sounds like j.", "soft c": "The c in 'city' and 'face' sounds like s.", "hard g": "The g in 'game' and 'dog.'", "hard c": "The c in 'cat' and 'cup.'" },
  },
  "3/unit1/le-el-al-il": {
    examples: ["Sort the words:\n-le: bubble, middle, turtle\n-el: travel, model, squirrel\n-al: metal, signal, total\n-il: fossil, pupil, until"],
    vocab: { "schwa": "The 'uh' sound in the second part of 'med-al' and 'shov-el.'", "ending": "The ending of 'table' is -le.", "syllable": "'Pen-cil' has two syllables." },
  },
  "3/unit1/silent-letters": {
    examples: ["Find the silent letter:\nknee → k   lamb → b   write → w   whistle → t (and the h is quiet too)"],
    vocab: { "silent letter": "The k in 'knot' is silent.", "digraph": "'ph' in 'phone' is a digraph that says /f/.", "spelling voice": "Say 'w-rist' in your spelling voice to remember the w." },
  },
  "3/unit1/compound-words": {
    examples: ["Compound or not?\nbedspread → bed + spread ✔\ninsect → in + sect ✘ (the parts don't explain 'bug')"],
    vocab: { "compound word": "'Cupcake' is cup + cake.", "base word": "'Sun' and 'flower' are the base words in 'sunflower.'" },
  },
  "3/unit1/synonyms-antonyms": {
    examples: ["Synonym pairs: quick/fast, shout/yell, under/below\nAntonym pairs: smooth/rough, early/late, empty/full"],
    vocab: { "synonym": "'Glad' is a synonym for 'happy.'", "antonym": "'Rough' is an antonym for 'smooth.'" },
  },
  "3/unit1/shades-of-meaning": {
    examples: ["Weakest → strongest:\nsmile → grin → laugh\nlike → love → adore\nwalk → jog → sprint"],
    vocab: { "shades of meaning": "'Warm,' 'hot,' and 'boiling' are shades of meaning for temperature.", "intensity": "'Furious' has more intensity than 'annoyed.'", "clue words": "In 'only a little scared,' the clue words are 'only a little.'" },
  },
  "3/unit1/plurals": {
    examples: ["Which rule?\nfox → foxes (ends in x)\nbaby → babies (consonant + y)\nmonkey → monkeys (vowel + y)\nshelf → shelves (f → ves)"],
    vocab: { "plural": "'Dogs' is the plural of 'dog.'", "singular": "'Wolf' is singular; 'wolves' is plural.", "irregular plural": "'Mice' is the irregular plural of 'mouse.'", "consonant": "In 'lady,' the d before the y is a consonant, so it becomes 'ladies.'" },
  },

  // ----- Math -----
  "3/math/place-value": {
    examples: ["Place value chart for 52,807:\nten thousands | thousands | hundreds | tens | ones\n      5       |     2     |    8     |  0   |  7", "Compare 6,481 and 6,418: thousands same (6), hundreds same (4), tens: 8 > 1 → 6,481 > 6,418"],
    vocab: { "place value": "In 4,382, the 3 is in the hundreds place, so it's worth 300.", "expanded form": "2,519 = 2,000 + 500 + 10 + 9.", "round": "68 rounded to the nearest ten is 70.", "estimate": "198 + 403 is about 200 + 400 = 600.", "digit": "The number 507 has three digits: 5, 0, and 7." },
  },
  "3/math/add-subtract": {
    examples: ["Subtract with regrouping:\n  503\n− 247\n-----\n  256\nYou can't take 7 from 3, so regroup across the 0.\nCheck: 256 + 247 = 503 ✔", "Word problem: 'How many more?' → subtract.\nSam has 85 cards. Lee has 132. How many more does Lee have? 132 − 85 = 47."],
    vocab: { "sum": "In 40 + 25 = 65, the sum is 65.", "difference": "In 90 − 30 = 60, the difference is 60.", "regroup": "Trade 10 ones for 1 ten: 18 ones = 1 ten and 8 ones.", "inverse operations": "If 15 + 7 = 22, then 22 − 7 = 15." },
  },
  "3/math/multiplication": {
    examples: ["Skip count: 4 × 6 → 6, 12, 18, 24", "Use a fact you know:\n7 × 8 = (5 × 8) + (2 × 8) = 40 + 16 = 56", "Number line: 3 × 4 → three jumps of 4: 0 → 4 → 8 → 12"],
    vocab: { "factor": "In 6 × 3 = 18, the factors are 6 and 3.", "product": "In 6 × 3 = 18, the product is 18.", "array": "3 rows of 5 stickers is an array that shows 3 × 5.", "equal groups": "4 plates with 2 cookies each are 4 equal groups of 2." },
  },
  "3/math/division": {
    examples: ["Share equally: 15 apples in 3 baskets\n🍎🍎🍎🍎🍎 | 🍎🍎🍎🍎🍎 | 🍎🍎🍎🍎🍎\n15 ÷ 3 = 5 in each basket", "Fact family for 4, 6, 24:\n4 × 6 = 24   6 × 4 = 24\n24 ÷ 4 = 6   24 ÷ 6 = 4", "Think multiplication: 56 ÷ 7 = ?  → 7 × ? = 56 → 8"],
    vocab: { "dividend": "In 20 ÷ 4 = 5, the dividend is 20.", "divisor": "In 20 ÷ 4 = 5, the divisor is 4.", "quotient": "In 20 ÷ 4 = 5, the quotient is 5.", "fact family": "3, 5, and 15 make the fact family 3 × 5, 5 × 3, 15 ÷ 3, 15 ÷ 5." },
  },
  "3/math/fractions": {
    examples: ["Fraction of a set: 6 balloons, 2 are red → 2/6 are red", "Compare 1/4 and 1/8: fourths are bigger pieces than eighths, so 1/4 > 1/8."],
    vocab: { "numerator": "In 3/5, the numerator is 3.", "denominator": "In 3/5, the denominator is 5, so the whole has 5 equal parts.", "mixed number": "1 1/2 cups of milk is a mixed number.", "equivalent fractions": "1/2 of a pizza is the same as 2/4 of a pizza." },
  },
  "3/math/money": {
    examples: ["Count on: 1 dollar, 3 quarters, 1 nickel\n$1.00 → $1.25 → $1.50 → $1.75 → $1.80", "Make change by counting up:\nCost $3.60, paid $5.00\n$3.60 + $0.40 = $4.00, + $1.00 = $5.00 → change is $1.40"],
    vocab: { "cent (¢)": "A penny is worth 1 cent (1¢).", "change": "If a snack costs 75¢ and you pay $1.00, your change is 25¢.", "decimal point": "In $4.35, the decimal point separates 4 dollars from 35 cents." },
  },
  "3/math/time": {
    examples: ["Elapsed time on a number line:\n2:15 ──(+1 hr)──> 3:15 ──(+20 min)──> 3:35\nElapsed time: 1 hour 20 minutes", "Reading a clock: hour hand just past 7, minute hand on 4 → 7:20"],
    vocab: { "elapsed time": "From 9:00 to 9:45 is 45 minutes of elapsed time.", "a.m.": "You eat breakfast at 7:00 a.m.", "p.m.": "You go to bed at 8:30 p.m.", "Fahrenheit": "A hot summer day might be 90°F." },
  },
  "3/math/measurement": {
    examples: ["Perimeter of a triangle with sides 4 in, 5 in, and 6 in: 4 + 5 + 6 = 15 in", "Area by counting: a 3 × 4 grid of squares has 12 square units.", "Same perimeter, different area:\n2 × 6 rectangle → P = 16, A = 12\n4 × 4 square → P = 16, A = 16"],
    vocab: { "perimeter": "A fence around a garden measures its perimeter.", "area": "The carpet covering a floor measures its area.", "square unit": "A square that is 1 inch on each side is 1 square inch.", "metric system": "Meters, grams, and liters are metric units." },
  },
  "3/math/geometry": {
    examples: ["Line segment A────B (two endpoints)\nRay A────→ (one endpoint)\nLine ←────→ (no endpoints)", "Count sides: pentagon (5) → home plate in baseball; hexagon (6) → honeycomb cell"],
    vocab: { "polygon": "Triangles, squares, and hexagons are polygons.", "vertex": "A square has 4 vertices, one at each corner.", "congruent": "Two pieces of paper cut to the exact same size and shape are congruent.", "ray": "A flashlight beam is like a ray: it starts at one point and goes on.", "parallel": "The two long sides of a ruler are parallel." },
  },
  "3/math/data": {
    examples: ["Line plot of pencil lengths (inches):\n          X\n    X     X     X\n    X     X     X     X\n────┼─────┼─────┼─────┼──\n    4     5     6     7\nMost pencils are 5 inches long.", "Bar graph question: if the scale goes by 2s and a bar stops halfway between 6 and 8, it shows 7."],
    vocab: { "data": "The number of pets each classmate has is data.", "survey": "Asking 'What's your favorite color?' to the class is a survey.", "key": "A key might say ⭐ = 2 votes.", "line plot": "An X above the number 3 shows one student has 3 siblings.", "likely": "Rain is likely when the sky is full of dark clouds." },
  },
  "3/math/patterns": {
    examples: ["Input/output table (rule: add 6):\nIn  | 2 | 5 | 9\nOut | 8 | 11| 15", "Balance the equation: 6 + 4 = ☐ + 7 → both sides must be 10 → ☐ = 3"],
    vocab: { "pattern": "2, 4, 6, 8 is a pattern that adds 2.", "rule": "In 50, 45, 40, 35, the rule is 'subtract 5.'", "equation": "8 + 2 = 10 is an equation.", "unknown": "In ☐ − 4 = 6, the unknown is 10." },
  },

  // ----- English -----
  "3/english/word-study": {
    examples: ["Build words: re + play = replay · care + ful = careful · un + lock = unlock", "Homophones in sentences:\nThey're going to their house over there.\nI ate two cookies, and my sister did too."],
    vocab: { "prefix": "'Pre-' in 'preview' means before.", "suffix": "'-ful' in 'helpful' means full of.", "syllable": "'Ba-na-na' has three syllables.", "homophone": "'Bear' and 'bare' are homophones.", "compound word": "'Football' is foot + ball." },
  },
  "3/english/vocabulary": {
    examples: ["Context clue (example): 'Reptiles, such as snakes and lizards, are cold-blooded.' The examples tell you what reptiles are.", "Context clue (antonym): 'Unlike his noisy brother, Tim was silent.' Silent means the opposite of noisy."],
    vocab: { "context clues": "In 'The fragile glass broke easily,' the clue 'broke easily' tells you fragile means delicate.", "synonym": "'Large' is a synonym for 'big.'", "antonym": "'Cold' is an antonym for 'hot.'", "glossary": "Look up 'photosynthesis' in the glossary at the back of your science book.", "simile": "'The baby slept like a log' is a simile." },
  },
  "3/english/fiction": {
    examples: ["Story map for 'Goldilocks':\nCharacters: Goldilocks, three bears\nSetting: a cottage in the woods\nProblem: Goldilocks goes into the bears' home without asking\nSolution: The bears come home and she runs away\nTheme: Respect other people's things", "Inference: 'Jake slammed the door and stomped up the stairs.' → Jake is angry."],
    vocab: { "character trait": "'Brave' is a character trait of a hero who saves a friend.", "setting": "A haunted castle at midnight is a setting.", "plot": "The plot of 'The Three Little Pigs' is the wolf trying to blow down their houses.", "theme": "'Hard work pays off' is the theme of 'The Three Little Pigs.'", "inference": "If a character is yawning, you can infer she is tired.", "fable": "'The Tortoise and the Hare' is a fable." },
  },
  "3/english/poetry": {
    examples: ["Stanza with rhyme:\nThe cat sat on the mat, (A)\nShe wore a tiny hat. (A)\nShe chased a little mouse, (B)\nAll around the house. (B)", "Sensory words: 'crunchy leaves,' 'smoky air,' 'sweet cocoa,' 'icy wind'"],
    vocab: { "stanza": "A poem with three groups of four lines has three stanzas.", "rhyme": "'Moon' and 'June' rhyme.", "rhythm": "'Twinkle, twinkle, little star' has a steady rhythm you can clap.", "alliteration": "'Peter Piper picked a peck of pickled peppers.'", "onomatopoeia": "'Sizzle,' 'boom,' and 'meow' are onomatopoeia." },
  },
  "3/english/nonfiction": {
    examples: ["Text feature hunt:\nTable of contents → find the chapter\nHeading → find the section\nBold word → check the glossary\nDiagram → see the parts", "Fact vs. opinion:\nFact: Butterflies have six legs.\nOpinion: Butterflies are the prettiest insects."],
    vocab: { "heading": "'How Bees Make Honey' is a heading in a book about bees.", "caption": "Under a photo of a whale: 'A humpback whale jumps out of the water.'", "index": "The index says 'frogs, 12–15,' so frogs are on pages 12 to 15.", "fact": "'The sun is a star' is a fact.", "opinion": "'Science is the most fun subject' is an opinion.", "author's purpose": "A joke book's purpose is to entertain." },
  },
  "3/english/main-idea": {
    examples: ["Somebody-Wanted-But-So-Then summary:\nSomebody: Cinderella\nWanted: to go to the ball\nBut: she had nothing to wear\nSo: her fairy godmother helped\nThen: she met the prince"],
    vocab: { "main idea": "A paragraph about how penguins stay warm has the main idea 'Penguins have ways to stay warm.'", "supporting details": "'Penguins huddle together' is a supporting detail.", "summarize": "Summarize a movie by telling the most important events in a few sentences." },
  },
  "3/english/writing": {
    examples: ["Paragraph:\nTopic sentence: Dogs make great pets.\nDetail: They are loyal friends.\nDetail: They help you exercise.\nClosing: That's why everyone should have a dog!", "Revise for detail:\nBefore: I went to the park.\nAfter: On Saturday, I raced my bike to the sunny park by the lake."],
    vocab: { "prewriting": "Making a list of ideas before writing a story about your summer.", "draft": "Your first try at writing the story, even with mistakes.", "revise": "Adding the word 'enormous' to describe the dog.", "edit": "Fixing 'i went to texas' to 'I went to Texas.'", "topic sentence": "'Fall is my favorite season' starts a paragraph about fall.", "transition words": "'First,' 'next,' 'then,' and 'finally' are transition words." },
  },
  "3/english/grammar": {
    examples: ["Label the parts of speech:\nThe (article) happy (adjective) puppy (noun) ran (verb) quickly (adverb).", "Possessive vs. plural:\nThe dog's bone (one dog owns it)\nThe dogs ran (more than one dog)"],
    vocab: { "noun": "Teacher, Richmond, and kindness are nouns.", "verb": "Swim, think, and is are verbs.", "adjective": "In 'the shiny red bike,' shiny and red are adjectives.", "adverb": "In 'She sang loudly,' loudly is an adverb.", "contraction": "'Can't' is the contraction for 'cannot.'", "possessive": "'Maria's backpack' shows the backpack belongs to Maria." },
  },
  "3/english/research": {
    examples: ["Research steps:\n1. Question: What do sea turtles eat?\n2. Find 2 sources (library book, kids' encyclopedia)\n3. Take notes in your own words\n4. Write what you learned and list your sources"],
    vocab: { "source": "A library book about volcanoes is a source.", "plagiarism": "Copying a paragraph from a website and saying you wrote it is plagiarism.", "key words": "To learn about sharks' teeth, search the key words 'shark teeth.'" },
  },
  "3/english/communication": {
    examples: ["Good discussion sentence starters:\n'I agree with ___ because…'\n'I'd like to add…'\n'Can you explain what you mean by…?'"],
    vocab: { "active listening": "Nodding and asking a question about what your friend said.", "audience": "Your classmates are the audience when you give a book report.", "eye contact": "Looking at your listeners instead of only at your paper." },
  },

  // ----- Science -----
  "3/science/practices": {
    examples: ["Fair test: Does a ball bounce higher on carpet or wood?\nChange: the floor (the variable)\nKeep the same: same ball, same drop height\nMeasure: how high it bounces", "Observation vs. prediction:\nObservation: 'The ice cube is melting.'\nPrediction: 'I think it will melt in 10 minutes.'"],
    vocab: { "observation": "'The leaf is green and smooth' is an observation.", "prediction": "'I predict the plant in the dark will not grow well.'", "variable": "In testing which paper towel absorbs the most, the brand of towel is the variable.", "conclusion": "'Brand A absorbed the most water' is a conclusion.", "balance": "Put a rock on a balance to measure its mass in grams." },
  },
  "3/science/matter": {
    examples: ["States of water:\nSolid → ice cube (keeps its shape)\nLiquid → water in a cup (takes the cup's shape)\nGas → steam (spreads out)", "Heating and cooling:\nIce —(heat)→ water —(heat)→ steam\nSteam —(cool)→ water —(cool)→ ice"],
    vocab: { "matter": "Your desk, juice, and the air around you are all matter.", "mass": "A bowling ball has more mass than a tennis ball.", "volume": "A bathtub holds a bigger volume of water than a cup.", "evaporation": "A wet sidewalk drying in the sun is evaporation.", "condensation": "Fog on a bathroom mirror after a shower is condensation.", "property": "Hard, shiny, and heavy are properties of a metal spoon." },
  },
  "3/science/adaptations": {
    examples: ["Physical vs. behavioral:\nPhysical: a cactus's thick, waxy skin stores water\nBehavioral: geese flying south in winter", "Instinct vs. learned:\nInstinct: a baby sea turtle crawls to the ocean\nLearned: a dog learns to sit when told"],
    vocab: { "adaptation": "A duck's webbed feet are an adaptation for swimming.", "camouflage": "A green frog blends in with green leaves.", "migration": "Monarch butterflies migrate to Mexico for the winter.", "hibernation": "Groundhogs hibernate underground in winter.", "mimicry": "The viceroy butterfly mimics the bad-tasting monarch.", "instinct": "A bird building a nest without being taught." },
  },
  "3/science/ecosystems": {
    examples: ["Forest food web:\nacorns → squirrel → hawk\nacorns → mouse → snake → hawk\nThe hawk is in two food chains!", "Producer, consumer, or decomposer?\nOak tree → producer · deer → consumer · worm → decomposer"],
    vocab: { "producer": "Grass uses sunlight to make its own food.", "consumer": "A rabbit is a consumer because it eats plants.", "decomposer": "Mushrooms break down a fallen log.", "herbivore": "A deer eats only plants.", "predator": "An owl hunting a mouse is a predator.", "food web": "A pond food web shows algae, tadpoles, fish, and herons connected." },
  },
  "3/science/soil": {
    examples: ["Soil test: pour the same amount of water through sand, clay, and loam.\nSand: water rushes through\nClay: water barely moves\nLoam: in between, just right for plants", "Layers from top to bottom: topsoil → subsoil → bedrock"],
    vocab: { "humus": "Rotting leaves on the forest floor turn into humus.", "weathering": "Rain and ice slowly breaking a big rock into pebbles.", "topsoil": "Gardeners plant seeds in dark, rich topsoil.", "loam": "Farmers love loam because crops grow well in it.", "bedrock": "Deep below a field is solid bedrock." },
  },
  "3/science/water-cycle": {
    examples: ["A puddle's journey:\nSun heats puddle → water vapor rises (evaporation)\n→ cools into a cloud (condensation)\n→ falls as rain (precipitation)\n→ flows into a river (collection)"],
    vocab: { "evaporation": "Wet clothes drying on a clothesline.", "condensation": "Water drops on the outside of a cold lemonade glass.", "precipitation": "Snow falling in winter is precipitation.", "water vapor": "You can't see water vapor, but it's in the air around you.", "runoff": "Rainwater flowing down a street into a storm drain." },
  },
  "3/science/cycles": {
    examples: ["Moon phases in order:\nnew moon → crescent → first quarter → gibbous → full moon → (and back again)", "Plant life cycle:\nseed → sprout → seedling → adult plant → flower → fruit with seeds"],
    vocab: { "rotation": "Earth's rotation makes the sun appear to rise and set.", "revolution": "One revolution of Earth around the sun takes about 365 days.", "moon phase": "A full moon is the phase when we see the whole lit side.", "metamorphosis": "A tadpole turning into a frog is metamorphosis.", "tide": "At high tide, the ocean covers more of the beach." },
  },
  "3/science/resources": {
    examples: ["Renewable or nonrenewable?\nWind ✔ renewable · trees ✔ renewable (if replanted) · oil ✘ nonrenewable · coal ✘ nonrenewable", "The 3 Rs:\nReduce: use a reusable lunch box\nReuse: turn a jar into a pencil cup\nRecycle: put cans in the recycling bin"],
    vocab: { "natural resource": "Wood from trees is a natural resource.", "renewable": "Sunlight is renewable because it keeps shining.", "nonrenewable": "Coal is nonrenewable because it takes millions of years to form.", "fossil fuel": "Gasoline is made from oil, a fossil fuel.", "conserve": "Turning off the water while brushing your teeth helps conserve water." },
  },

  // ----- History & Social Science -----
  "3/history/greece": {
    examples: ["How geography shaped Greece:\nMountains → separate city-states\nLong coastline → sailing, fishing, trade\nRocky soil → olives and grapes instead of big farms", "Then and now: The Olympics, democracy, and buildings with columns all started in Greece."],
    vocab: { "peninsula": "Florida is a peninsula, just like Greece.", "city-state": "Athens and Sparta were city-states with their own rules.", "democracy": "In Athens, citizens voted on laws themselves.", "Parthenon": "The Parthenon was built to honor the goddess Athena.", "Mediterranean Sea": "Greek ships sailed the Mediterranean Sea to trade olive oil." },
  },
  "3/history/rome": {
    examples: ["Roman ideas we still use:\nRepublic → the U.S. government\nArches and domes → the U.S. Capitol building\nLatin → words like 'aqua' (water) in 'aquarium'"],
    vocab: { "republic": "In the United States, we elect people to represent us, so it's a republic.", "aqueduct": "An aqueduct carried mountain water many miles into Rome.", "Colosseum": "Thousands of Romans watched events in the Colosseum.", "empire": "Rome ruled lands from Britain to Egypt as an empire.", "Latin": "'Video' means 'I see' in Latin." },
  },
  "3/history/mali": {
    examples: ["Trade across the Sahara:\nMali had gold → traders from the north had salt\nCamel caravans carried goods across the desert\nTimbuktu grew rich from the trade"],
    vocab: { "Niger River": "Farmers grew rice along the Niger River.", "Sahara Desert": "Caravans crossed the hot Sahara Desert for weeks.", "caravan": "A caravan of camels carried salt to Mali.", "griot": "A griot told stories about Mali's kings at a village gathering.", "Timbuktu": "Scholars studied books in Timbuktu's libraries." },
  },
  "3/history/explorers": {
    examples: ["Explorer chart:\nColumbus → Spain → Caribbean (1492)\nPonce de León → Spain → Florida\nCartier → France → Canada (St. Lawrence River)\nNewport → England → Jamestown, Virginia (1607)"],
    vocab: { "explorer": "Jacques Cartier was an explorer who sailed to Canada.", "motivation": "Finding gold was a motivation for many explorers.", "Jamestown": "Jamestown, settled in 1607, is in Virginia.", "route": "Columbus looked for a new route to Asia by sailing west." },
  },
  "3/history/geography": {
    examples: ["Using a compass rose: If Richmond is in the middle of the map and the beach is to the right, the beach is east of Richmond.", "Hemispheres: The United States is in the Northern and Western Hemispheres."],
    vocab: { "continent": "Africa is a continent.", "equator": "Countries near the equator, like Brazil, are usually hot.", "prime meridian": "The prime meridian runs through Greenwich, England.", "hemisphere": "Australia is in the Southern Hemisphere.", "compass rose": "The compass rose shows N, S, E, and W.", "map key": "On a map key, a blue line might mean a river." },
  },
  "3/history/economics": {
    examples: ["Making a pizza:\nNatural resources: wheat, tomatoes\nHuman resources: the cook\nCapital resources: the oven\nThe pizza is a good; delivery is a service", "Opportunity cost: You have $5. You buy a book instead of a toy. The toy is your opportunity cost."],
    vocab: { "goods": "Shoes, apples, and bikes are goods.", "services": "A haircut and a dentist cleaning your teeth are services.", "scarcity": "There are only 10 cookies for 20 kids, so cookies are scarce.", "opportunity cost": "Choosing soccer means giving up art class, so art class is the opportunity cost.", "barter": "Trading your apple for a friend's granola bar.", "capital resources": "A farmer's tractor is a capital resource." },
  },
  "3/history/civics": {
    examples: ["Levels of government:\nLocal: Chesterfield County (schools, parks)\nState: Virginia, capital Richmond (state laws)\nNational: United States, capital Washington, D.C. (national laws)", "Right vs. responsibility:\nRight: freedom of speech\nResponsibility: speak respectfully and tell the truth"],
    vocab: { "government": "Virginia's government makes state laws in Richmond.", "citizen": "People born in the United States are U.S. citizens.", "right": "Freedom of religion is a right.", "responsibility": "Recycling and following rules are responsibilities.", "law": "Wearing a seat belt in a car is a law.", "vote": "Adults vote to choose the president." },
  },
});
