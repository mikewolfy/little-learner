/* Grade 5 English: bonus question banks. */
(function () {
  "use strict";
  const B = window.BONUS, K = (u) => "5/english/" + u;
  const A = (key, t) => B.add(key, (Array.isArray(t) ? t.join("\n") : t).split("\n").filter((x) => x.trim()).join("\n"));
  const line = (q, right, wrongs, e) => [q, right].concat(wrongs).join("|") + (e ? "|=>" + e : "");
  function pickK(arr, k, seed, ex) {
    const r = B.rngFrom(B.hash(seed)); const out = []; let g = 0; ex = ex || [];
    while (out.length < k && g++ < 500) { const v = arr[Math.floor(r() * arr.length)]; if (!out.includes(v) && !ex.includes(v)) out.push(v); }
    return out;
  }

  /* ---------------- roots & affixes ---------------- */
  (function () {
    const roots = [
      ["tele", "far", ["telephone", "telescope", "television"]], ["photo", "light", ["photograph", "photosynthesis", "photocopy"]], ["graph", "write or draw", ["autograph", "paragraph", "graphic"]],
      ["port", "carry", ["transport", "portable", "export"]], ["rupt", "break", ["interrupt", "erupt", "bankrupt"]], ["dict", "say or speak", ["dictate", "predict", "verdict"]],
      ["struct", "build", ["construct", "structure", "instruct"]], ["aud", "hear", ["audio", "audience", "auditorium"]], ["vis", "see", ["visible", "vision", "visual"]],
      ["bio", "life", ["biology", "biography", "biosphere"]], ["geo", "earth", ["geography", "geology", "geometry"]], ["therm", "heat", ["thermometer", "thermal", "thermostat"]],
      ["meter", "measure", ["kilometer", "speedometer", "perimeter"]], ["phon", "sound", ["microphone", "telephone", "symphony"]], ["aqua", "water", ["aquarium", "aquatic", "aqueduct"]],
      ["ped", "foot", ["pedal", "pedestrian", "centipede"]], ["auto", "self", ["automatic", "autograph", "automobile"]], ["micro", "small", ["microscope", "microphone", "microwave"]],
      ["mega", "large", ["megaphone", "megabyte", "megastar"]], ["tri", "three", ["triangle", "tricycle", "triplet"]], ["bi", "two", ["bicycle", "binoculars", "biplane"]],
      ["uni", "one", ["unicycle", "uniform", "unicorn"]], ["cent", "hundred", ["century", "centimeter", "percent"]], ["dec", "ten", ["decade", "decimal", "decagon"]],
      ["scrib/script", "write", ["describe", "script", "manuscript"]], ["spect", "look", ["inspect", "spectator", "perspective"]], ["terr", "land or earth", ["territory", "terrain", "terrace"]],
      ["hydr", "water", ["hydrant", "dehydrate", "hydroelectric"]], ["chron", "time", ["chronological", "chronic", "synchronize"]], ["mal", "bad", ["malfunction", "malice", "malnutrition"]],
      ["bene", "good", ["benefit", "benefactor", "beneficial"]], ["form", "shape", ["uniform", "transform", "reform"]], ["tract", "pull", ["tractor", "attract", "subtract"]],
      ["ject", "throw", ["reject", "project", "eject"]], ["vert", "turn", ["convert", "reverse", "invert"]]
    ].filter((x) => x[0] !== "spect" && x[0] !== "scrib/script");
    const affixes = [
      ["un-", "not", ["unhappy", "unfair", "unsafe"]], ["re-", "again", ["redo", "rewrite", "rebuild"]], ["pre-", "before", ["preview", "preheat", "prepay"]],
      ["dis-", "not or opposite", ["disagree", "dislike", "disappear"]], ["mis-", "wrongly", ["misspell", "misplace", "misread"]], ["sub-", "under", ["submarine", "subway", "subtitle"]],
      ["inter-", "between", ["international", "interact", "intersect"]], ["trans-", "across", ["transport", "translate", "transfer"]], ["anti-", "against", ["antifreeze", "antibody", "antisocial"]],
      ["semi-", "half", ["semicircle", "semifinal", "semiannual"]], ["non-", "not", ["nonfiction", "nonsense", "nonstop"]], ["over-", "too much", ["overcook", "overdo", "overpaid"]],
      ["-ful", "full of", ["helpful", "careful", "joyful"]], ["-less", "without", ["hopeless", "careless", "fearless"]], ["-able", "able to be", ["washable", "breakable", "readable"]],
      ["-ment", "the act or result of", ["movement", "agreement", "excitement"]], ["-ness", "state of being", ["kindness", "darkness", "happiness"]], ["-tion", "act or state of", ["action", "creation", "invention"]],
      ["-ly", "in a way", ["slowly", "quickly", "gently"]], ["-er", "one who", ["teacher", "painter", "baker"]], ["-ology", "the study of", ["biology", "geology", "zoology"]]
    ];
    const out = [];
    const rm = roots.map((x) => x[1]);
    roots.forEach(([root, mean, words]) => {
      const toks = root.split("/");
      const bad = roots.filter((x) => x[1] === mean).flatMap((x) => x[2]);
      const okw = roots.filter((x) => x[1] !== mean).flatMap((x) => x[2]).filter((x) => !bad.includes(x) && !toks.some((t) => x.includes(t)));
      out.push(line(`What does the root '${root}' mean?`, mean, pickK(rm.filter((m) => m !== mean), 3, "g5r" + root), `${root} means ${mean}.`));
      words.forEach((w) => {
        out.push(line(`The word '${w}' contains the root '${root}'. What does that root mean?`, mean, pickK(rm.filter((m) => m !== mean), 3, "g5w" + w + root), `${root} = ${mean}.`));
        out.push(line(`Which word has a root meaning '${mean}'?`, w, pickK(okw, 3, "g5x" + w + root, words), `${w} contains ${root} (${mean}).`));
      });
    });
    const am = affixes.map((x) => x[1]);
    affixes.forEach(([af, mean, words]) => {
      const kind = af.startsWith("-") ? "suffix" : "prefix";
      const bad = affixes.filter((x) => x[1] === mean).flatMap((x) => x[2]);
      const okw = affixes.filter((x) => x[1] !== mean).flatMap((x) => x[2]).filter((x) => !bad.includes(x));
      out.push(line(`What does the ${kind} '${af}' mean?`, mean, pickK(am.filter((m) => m !== mean), 3, "g5a" + af), `${af} means ${mean}.`));
      words.forEach((w) => {
        out.push(line(`Which word has the ${kind} '${af}'?`, w, pickK(okw, 3, "g5aw" + w + af, words), `${w} has the ${kind} ${af} (${mean}).`));
        out.push(line(`What is the ${kind} in '${w}'?`, af, pickK(affixes.map((x) => x[0]).filter((x) => x !== af && (x.startsWith("-") === af.startsWith("-"))), 3, "g5ak" + w + af), `${w} uses ${af}.`));
      });
    });
    A(K("roots"), out);
    A(K("roots"), `
What is a root word?|the base part of a word that carries its main meaning|a word with a prefix|the last letter of a word|=>Affixes attach to roots.
What is an affix?|a prefix or suffix added to a word|a root|a vowel|=>Prefix = front; suffix = end.
What is a prefix?|a word part added to the beginning of a word|a word part added to the end|a root|=>un-, re-, pre-.
What is a suffix?|a word part added to the end of a word|a word part added to the beginning|a root|=>-ful, -less, -ly.
What is a base word?|a word that can stand on its own|a root that cannot stand alone|a suffix|=>Happy in unhappy.
What is etymology?|the study of word origins|the study of animals|the study of rocks|=>Where words come from.
Many English roots come from which languages?|Greek and Latin|Spanish and French|Chinese and Japanese|=>Classical roots.
How can roots help you read?|you can figure out the meanings of unfamiliar words|you can skip words|you can read faster only|=>Word parts carry meaning.
If you know that 'tele' means far and 'scope' means to look, what does 'telescope' mean?|a tool to look far|a tool to hear far|a tool to write|=>Combine the meanings.
If you know that 'bio' means life and '-ology' means study of, what does 'biology' mean?|the study of life|the study of earth|the study of stars|=>Combine.
If you know that 'geo' means earth and 'graph' means write, what does 'geography' mean?|writing about the earth|studying life|measuring heat|=>Combine.
If 'thermo' means heat and 'meter' means measure, what is a thermometer?|a tool that measures heat|a tool that measures sound|a tool that measures light|=>Combine.
If 'micro' means small and 'scope' means look, what is a microscope?|a tool for looking at tiny things|a tool for looking at stars|a tool for hearing|=>Combine.
If 'aqua' means water, what is an aquarium?|a place for water animals|a place for plants|a place for rocks|=>Aqua = water.
If 'auto' means self and 'graph' means write, what is an autograph?|a signature written by oneself|a book|a drawing of a car|=>Self-written.
What happens to the meaning when you add 'un-' to 'happy'?|it becomes the opposite|it stays the same|it gets stronger|=>Unhappy = not happy.
What happens to the meaning when you add 're-' to 'play'?|it means to play again|it means to stop playing|it means not play|=>Replay.
What does the word 'rewrite' mean?|write again|write before|not write|=>re- = again.
What does the word 'preview' mean?|see before|see again|not see|=>pre- = before.
What does the word 'dislike' mean?|not like|like again|like before|=>dis- = not.
What does the word 'misspell' mean?|spell wrongly|spell again|spell before|=>mis- = wrongly.
What does the word 'hopeless' mean?|without hope|full of hope|hope again|=>-less = without.
What does the word 'careful' mean?|full of care|without care|care again|=>-ful = full of.
What does the word 'readable' mean?|able to be read|not read|read again|=>-able.
What does the word 'kindness' mean?|the state of being kind|not kind|kind again|=>-ness.
What does the word 'movement' mean?|the act of moving|not moving|moving again|=>-ment.
What does the word 'transport' mean?|carry across|carry before|carry again|=>trans- + port.
What does the word 'subway' mean?|a way under the ground|a way over the ground|a way again|=>sub- = under.
What does the word 'international' mean?|between nations|within a nation|not a nation|=>inter- = between.
What does the word 'antifreeze' mean?|something that works against freezing|something that freezes|something that melts|=>anti- = against.
What does the word 'semicircle' mean?|half a circle|a whole circle|two circles|=>semi- = half.
What does the word 'nonfiction' mean?|not made up; true|made up|a story|=>non- = not.
What does the word 'overcook' mean?|cook too much|cook again|cook before|=>over-.
What is the spelling rule for adding '-ing' to 'make'?|drop the e|double the m|add -ed|=>making.
What is the spelling rule for adding '-ed' to 'stop'?|double the final consonant|drop the p|add e|=>stopped.
What is the spelling rule for adding '-es' to 'baby'?|change y to i|double the b|add s only|=>babies.
What is the plural of 'wish'?|wishes|wishs|wishies|=>Add -es after sh.
What is a compound word?|a word made of two smaller words|a word with a prefix|a word with a suffix|=>Sunflower.
What is a contraction?|a shortened form of two words with an apostrophe|a long word|a root|=>Don't = do not.
What is a homophone?|a word that sounds like another with a different meaning and spelling|a word spelled the same|a word with the same meaning|=>Their/there.
What is a synonym?|a word with a similar meaning|an opposite word|a rhyme|=>Big/large.
What is an antonym?|a word with an opposite meaning|a word with a similar meaning|a rhyme|=>Hot/cold.
`);
  })();

  /* ---------------- figurative language ---------------- */
  (function () {
    const ex = [
      ["The snow was a soft white blanket over the town.", "metaphor"], ["The runner was as fast as lightning.", "simile"], ["The wind whispered through the trees.", "personification"],
      ["I'm so hungry I could eat a horse.", "hyperbole"], ["It's raining cats and dogs.", "idiom"], ["The stars danced in the night sky.", "personification"],
      ["Her smile was sunshine.", "metaphor"], ["He was as busy as a bee.", "simile"], ["The classroom was a zoo.", "metaphor"], ["My backpack weighs a ton.", "hyperbole"],
      ["The leaves crunched underfoot.", "onomatopoeia"], ["Buzz! went the bee.", "onomatopoeia"], ["The thunder grumbled in the distance.", "personification"],
      ["She was as quiet as a mouse.", "simile"], ["Time is a thief.", "metaphor"], ["I've told you a million times.", "hyperbole"], ["He kicked the bucket.", "idiom"],
      ["Peter Piper picked a peck of pickled peppers.", "alliteration"], ["Silly snakes slither slowly.", "alliteration"], ["The sun smiled down on us.", "personification"],
      ["Her words were like daggers.", "simile"], ["The moon is a silver coin in the sky.", "metaphor"], ["It was so cold, my teeth were chattering like castanets.", "simile"],
      ["Break a leg at the show!", "idiom"], ["The cookies sizzled and popped in the pan.", "onomatopoeia"], ["The wind howled angrily.", "personification"],
      ["The test was a piece of cake.", "idiom"], ["Bees buzz busily.", "alliteration"], ["That joke was so old it had dust on it.", "hyperbole"], ["The wolf's eyes were burning embers.", "metaphor"],
      ["The old house groaned in the storm.", "personification"], ["The room was as hot as an oven.", "simile"], ["Boom! The fireworks lit the sky.", "onomatopoeia"]
    ];
    const types = ["simile", "metaphor", "personification", "hyperbole", "idiom", "onomatopoeia", "alliteration"];
    const out = [];
    ex.forEach(([s, t]) => {
      const wrongs = pickK(types.filter((x) => x !== t), 3, "fl5" + s);
      out.push(line(`Which type of figurative language is this?{nl}“${s}”`, t, wrongs, `This sentence uses ${t}.`));
    });
    const meanings = [
      ["under the weather", "feeling sick", ["standing in the rain", "very happy", "outdoors"]], ["break the ice", "start a conversation in an awkward situation", ["crack frozen water", "stop talking", "cook dinner"]],
      ["spill the beans", "reveal a secret", ["drop food", "cook beans", "make a mess"]], ["a piece of cake", "very easy", ["a dessert", "very hard", "small"]],
      ["hit the books", "study hard", ["hit someone", "throw books", "leave school"]], ["cost an arm and a leg", "be very expensive", ["hurt a lot", "be free", "be broken"]],
      ["let the cat out of the bag", "reveal a secret by accident", ["free a pet", "open a bag", "cause trouble"]], ["once in a blue moon", "very rarely", ["every night", "on a holiday", "when it's cold"]],
      ["bite off more than you can chew", "take on too much", ["eat too fast", "be hungry", "chew gum"]], ["the ball is in your court", "it is your turn to act", ["play tennis", "lose a game", "leave early"]],
      ["on cloud nine", "very happy", ["in the sky", "in a plane", "confused"]], ["pull someone's leg", "joke with someone", ["hurt them", "help them", "chase them"]],
      ["barking up the wrong tree", "looking in the wrong place", ["walking a dog", "climbing", "yelling"]], ["in hot water", "in trouble", ["taking a bath", "cooking", "swimming"]],
      ["butterflies in your stomach", "feeling nervous", ["being hungry", "being sick", "eating bugs"]], ["scared stiff", "very frightened", ["very cold", "very tired", "very angry"]]
    ];
    meanings.forEach(([p, m, w]) => out.push(line(`What does the idiom '${p}' mean?`, m, w, `It's an idiom, not meant literally.`)));
    const comp = [
      ["The traffic crawled along the highway.", "personification or a metaphor: the traffic moved slowly", ["The traffic had legs.", "The traffic stopped.", "The traffic was fast."]],
      ["Her eyes were stars.", "Her eyes were bright and shining", ["Her eyes were in the sky", "Her eyes were hot", "Her eyes were small"]],
      ["The sun is a golden coin.", "The sun looks round and shiny", ["The sun is made of metal", "The sun can buy things", "The sun is small"]]
    ];
    comp.forEach(([s, a, w]) => out.push(line(`What does this sentence mean?{nl}“${s}”`, a, w, `It is figurative language.`)));
    A(K("figurative"), out);
    A(K("figurative"), `
What is figurative language?|language that uses words in a non-literal way|language that means exactly what it says|a type of poem|=>Creates images and feelings.
What is literal language?|language that means exactly what it says|language that uses comparisons|a type of poem|=>No hidden meaning.
What is a simile?|a comparison using like or as|a comparison without like or as|an exaggeration|=>As brave as a lion.
What is a metaphor?|a direct comparison saying one thing is another|a comparison using like|an exaggeration|=>Life is a journey.
What is personification?|giving human traits to a non-human thing|a comparison using like|a rhyme|=>The wind whispered.
What is hyperbole?|an extreme exaggeration|an understatement|a rhyme|=>A million times.
What is an idiom?|a phrase whose meaning is not literal|a rhyme|a type of poem|=>Under the weather.
What is onomatopoeia?|a word that imitates a sound|a comparison|a rhyme|=>Buzz, splash.
What is alliteration?|repetition of beginning consonant sounds|repetition of vowel sounds|a rhyme|=>Silly snakes slither.
What is imagery?|language that appeals to the senses|a rhyme|a comparison|=>Sights, sounds, smells.
What is a proverb?|a short saying that gives advice|a long story|a rhyme|=>A stitch in time saves nine.
What does 'A stitch in time saves nine' mean?|fix problems early so they don't get worse|sewing is important|always carry a needle|=>A proverb.
What does 'Don't count your chickens before they hatch' mean?|don't assume something before it happens|chickens are valuable|count eggs|=>A proverb.
What does 'The early bird catches the worm' mean?|people who act early have an advantage|birds are hungry|worms are bad|=>A proverb.
What does 'All that glitters is not gold' mean?|things that look valuable may not be|gold is shiny|everything is gold|=>A proverb.
What does 'Actions speak louder than words' mean?|what you do matters more than what you say|talk loudly|don't talk|=>A proverb.
What does 'Two heads are better than one' mean?|working together is better|having two heads|being smart|=>A proverb.
What does 'Look before you leap' mean?|think before you act|jump high|look up|=>A proverb.
What does 'Practice makes perfect' mean?|repeating something helps you improve|perfection is easy|never practice|=>A proverb.
What does 'a heart of stone' mean?|a person who is unkind|a stone in the chest|a strong person|=>A metaphor.
What does 'a heart of gold' mean?|a very kind person|made of gold|rich|=>A metaphor.
What does 'He has a green thumb' mean?|he is good at gardening|he has a green finger|he is sick|=>An idiom.
What does 'It's a jungle out there' mean?|the place is wild and competitive|there are trees|it is hot|=>A metaphor.
Which sentence is a simile?|She sings like an angel.|She is an angel.|She sings.|=>Uses like.
Which sentence is a metaphor?|The road was a ribbon of moonlight.|The road was long.|The road looked like a ribbon.|=>Direct comparison.
Which sentence uses personification?|The flowers nodded their heads in the breeze.|The flowers are red.|The flowers bloomed.|=>Flowers can't nod.
Which sentence uses hyperbole?|I have a million things to do.|I have a lot to do.|I have homework.|=>Exaggeration.
Which sentence uses onomatopoeia?|The pot clanged on the floor.|The pot was heavy.|The pot was big.|=>Clanged imitates the sound.
Which sentence uses alliteration?|Gentle giants gather.|The cat sat on the mat.|It was a dark night.|=>Repeated g.
Which words rhyme with 'light'?|night and bright|late and eight|like and bike|=>Same ending sound.
What effect does a simile have?|it helps readers picture something by comparing it|it makes a sentence longer|it confuses readers|=>Vivid pictures.
What effect does personification have?|it makes nonhuman things seem alive|it states facts|it adds numbers|=>Brings objects to life.
What effect does hyperbole have?|it adds emphasis or humor|it states facts exactly|it reduces meaning|=>Exaggeration for effect.
Why do authors use figurative language?|to make writing more vivid and interesting|to confuse readers|to make writing shorter|=>Creates mood.
What does the metaphor 'My brother is a bear in the morning' suggest?|he is grumpy|he is hairy|he is big|=>A grouchy attitude.
What does the simile 'as stubborn as a mule' suggest?|very stubborn|very strong|very slow|=>Stubborn.
What does the hyperbole 'This bag weighs a ton' suggest?|it is very heavy|it weighs exactly 2,000 pounds|it is light|=>Exaggeration.
`);
  })();

  /* ---------------- reading fiction ---------------- */
  A(K("fiction"), `
What are the main story elements?|characters, setting, plot, conflict, and resolution|title, author, and publisher|chapters and pages|=>The parts of a story.
What is the exposition of a story?|the beginning that introduces characters and setting|the climax|the ending|=>Background information.
What is the rising action?|events that build the conflict|the ending|the setting|=>Problems grow.
What is the climax?|the most exciting turning point|the introduction|the setting|=>Peak of tension.
What is the falling action?|events after the climax|the beginning|the title|=>Winds down.
What is the resolution?|how the conflict is solved|the setting|the theme|=>The ending.
What is conflict?|a struggle between opposing forces|a rhyme|the setting|=>Drives the plot.
What is internal conflict?|a struggle inside a character's mind|a fight between characters|a storm|=>Character vs. self.
What is external conflict?|a struggle between a character and an outside force|a struggle in the mind|a poem|=>Character vs. character, nature.
What is the setting?|when and where a story takes place|who tells the story|the lesson|=>Time and place.
What is the theme?|the lesson or message of a story|the setting|the plot|=>Big idea.
What is the difference between theme and topic?|a topic is a subject; a theme is a message about it|they are the same|a theme is a title|=>Friendship vs. true friends help each other.
What is the point of view?|who is telling the story|the setting|the theme|=>Perspective.
What is first-person point of view?|the narrator is a character who says 'I'|the narrator says 'he' or 'she'|the narrator says 'you'|=>I, me, my.
What is third-person point of view?|the narrator is outside the story and uses 'he,' 'she,' 'they'|the narrator says 'I'|the narrator says 'you'|=>Outsider.
What is third-person omniscient?|the narrator knows all characters' thoughts|the narrator knows one character's thoughts|the narrator says 'I'|=>All-knowing.
What is third-person limited?|the narrator knows one character's thoughts|the narrator knows everyone's thoughts|the narrator says 'I'|=>Limited view.
What is a character trait?|a quality that describes a character|a place|a plot event|=>Brave, kind.
How do authors show character traits?|through actions, words, and thoughts|only through the title|only through the setting|=>Show, don't tell.
What is a dynamic character?|a character who changes during the story|a character who stays the same|a minor character|=>Grows.
What is a static character?|a character who stays the same|a character who changes|the narrator|=>Remains.
What is a protagonist?|the main character|the villain|the narrator|=>The hero.
What is an antagonist?|a character or force that opposes the main character|the main character|the narrator|=>The opponent.
What is dialogue?|characters' spoken words|the setting|the plot|=>Quotation marks.
What does a character's motivation mean?|the reason the character acts|the setting|the title|=>Why they do it.
What is foreshadowing?|clues about what will happen later|a flashback|a rhyme|=>Hints.
What is a flashback?|a scene that goes back in time|a hint about the future|a rhyme|=>Shows the past.
What is suspense?|a feeling of tension about what will happen|the setting|the theme|=>Keeps you reading.
What is mood?|the feeling a story creates for the reader|the narrator's attitude|the setting|=>Atmosphere.
What is tone?|the author's attitude toward a subject|the reader's feeling|the setting|=>Author's voice.
What is an inference?|a conclusion based on clues and what you know|a direct quote|a guess without clues|=>Read between the lines.
What is textual evidence?|details from the text that support an idea|your opinion|the title|=>Proof.
Which sentence best provides textual evidence that a character is nervous?|Her hands trembled as she opened the door.|She wore a blue coat.|The door was wooden.|=>Trembling shows nerves.
Which sentence best shows a character is generous?|He gave half his lunch to the new student.|He was tall.|He liked lunch.|=>Sharing shows generosity.
A character slams a door and stomps away. What can you infer?|The character is angry.|The character is sleepy.|The character is happy.|=>Actions show feelings.
A character grins and jumps up and down. What can you infer?|The character is excited.|The character is sad.|The character is bored.|=>Body language.
What is a summary?|a brief retelling of the main events|a long retelling|an opinion|=>Short and accurate.
What is a fable?|a short story that teaches a lesson, often with animals|a long novel|a poem|=>Aesop.
What is a moral?|the lesson of a fable|the setting|the villain|=>Message.
What is a folktale?|a traditional story passed down by word of mouth|a modern novel|a biography|=>Oral tradition.
What is a legend?|a traditional story about a hero, partly based on history|a modern novel|a poem|=>King Arthur.
What is a myth?|a traditional story that explains nature or beliefs|a modern novel|a biography|=>Greek myths.
What is historical fiction?|a made-up story set in a real time period|a true story|a poem|=>Fiction with history.
What is realistic fiction?|a made-up story that could happen in real life|a story with magic|a true story|=>Believable.
What is fantasy?|a story with magic or impossible events|a true story|a biography|=>Dragons and wizards.
What is science fiction?|a story based on imagined science or technology|a true story|a poem|=>Future worlds.
What is a mystery?|a story about solving a puzzle or crime|a funny story|a poem|=>Clues.
What is a theme of 'The Tortoise and the Hare'?|slow and steady wins the race|fast always wins|never race|=>The tortoise wins by steady effort.
What is a theme of 'The Boy Who Cried Wolf'?|liars are not believed even when they tell the truth|wolves are friendly|never watch sheep|=>Lying loses trust.
What does a title often tell you?|a clue about the story|the ending|the author's age|=>Hints at the topic.
How do illustrations help a story?|they add details and set the mood|they replace the words|they have no purpose|=>Visual clues.
How does the setting affect the plot?|it can create problems or shape choices|it never matters|it replaces characters|=>A blizzard changes plans.
What does the phrase 'turning point' mean in a story?|the moment when events change direction|the title|the last page|=>The climax.
What does it mean to compare two characters?|tell how they are alike and different|summarize the story|find the setting|=>Compare/contrast.
How can you tell a character has changed?|compare how they act at the beginning and end|read only the title|look at the cover|=>Character development.
What is a narrator?|the voice that tells the story|the author|the main character always|=>May be a character.
What is the author's purpose in a fable?|to teach a lesson|to sell a product|to give directions|=>Moral.
Which word best describes a character who never gives up?|determined|careless|bored|=>Persistent.
Which word best describes a character who is afraid to try new things?|timid|bold|curious|=>Shy.
Which word best describes a character who tells the truth even when it is hard?|honest|sneaky|lazy|=>Truthful.
`);

  /* ---------------- poetry & drama ---------------- */
  A(K("poetry"), `
What is a stanza?|a group of lines in a poem|a rhyme|a title|=>Like a paragraph.
What is a line in a poem?|a single row of words|a stanza|the title|=>Rows.
What is a couplet?|two lines that rhyme|four lines|a title|=>AA.
What is a quatrain?|a four-line stanza|a two-line stanza|a title|=>Four lines.
What is rhyme?|words that have the same ending sound|words that start the same|words that mean the same|=>Cat/hat.
What is a rhyme scheme?|the pattern of rhymes at the ends of lines|the title|the speaker|=>ABAB.
What is the rhyme scheme if lines 1 and 2 rhyme and lines 3 and 4 rhyme?|AABB|ABAB|ABBA|=>Couplets.
What is the rhyme scheme if lines 1 and 3 rhyme and lines 2 and 4 rhyme?|ABAB|AABB|ABBA|=>Alternating.
What is rhythm?|the beat of a poem|the rhyme|the title|=>Pattern of sounds.
What is meter?|a regular rhythm pattern|a rhyme|a stanza|=>Beat count.
What is free verse?|poetry without a set rhyme or rhythm|poetry with strict rhyme|prose|=>Free.
What is a haiku?|a three-line poem with 5, 7, 5 syllables|a rhyming couplet|a story|=>Nature subjects.
How many syllables are in the first line of a haiku?|5|7|3|=>5-7-5.
What is a limerick?|a funny five-line poem|a sad poem|a story|=>AABBA.
What is a narrative poem?|a poem that tells a story|a poem about nature|a short poem|=>Characters and events.
What is a lyric poem?|a poem that expresses feelings|a long story|a play|=>Often musical.
What is an ode?|a poem that praises something|a poem that mocks|a story|=>Praise.
What is a cinquain?|a five-line poem|a three-line poem|a four-line poem|=>Five lines.
What is a shape poem (concrete poem)?|a poem arranged in the shape of its subject|a poem with no words|a poem about shapes|=>Visual.
What is the speaker of a poem?|the voice that talks in the poem|the poet always|the reader|=>May be a persona.
What is the theme of a poem?|the message or big idea|the rhyme|the title|=>Meaning.
What is imagery?|words that appeal to the senses|a rhyme|the title|=>Pictures.
What is sensory language?|words that describe what you see, hear, smell, taste, or feel|a rhyme|the title|=>Five senses.
What is a simile?|a comparison using like or as|a direct comparison|an exaggeration|=>As busy as a bee.
What is a metaphor?|a direct comparison without like or as|a comparison using like|an exaggeration|=>Time is money.
What is personification?|giving human traits to nonhuman things|a rhyme|a comparison|=>The sun smiled.
What is alliteration?|repeating beginning sounds|repeating vowel sounds|rhyme|=>Big brown bear.
What is onomatopoeia?|words that imitate sounds|a comparison|a rhyme|=>Buzz.
What is repetition?|using a word or phrase more than once|a rhyme|a comparison|=>Emphasis.
What is a refrain?|a line or phrase repeated in a poem or song|a stanza|a title|=>Chorus.
Why do poets use line breaks?|to control rhythm and emphasis|to make poems longer|to confuse readers|=>Pacing.
What does the title of a poem often tell you?|its subject or theme|the rhyme scheme|the poet's age|=>Clues.
What is a drama?|a story written to be performed|a poem|a novel|=>A play.
What is a script?|the written text of a play|a poem|a novel|=>Dialogue and directions.
What are stage directions?|instructions in a script about actions and setting|the dialogue|the title|=>Often in parentheses or italics.
What is dialogue in a play?|the words characters speak|the stage directions|the title|=>Speech.
What is a cast of characters?|the list of characters in a play|a group of actors|a set|=>At the beginning.
What is a scene?|a part of a play set in one place and time|the whole play|a poem|=>Divisions.
What is an act?|a major section of a play|a line|a prop|=>Contains scenes.
What is a monologue?|a long speech by one character|a conversation|a stage direction|=>One speaker.
What are props?|objects used on stage|actors|stage directions|=>Short for properties.
What is a setting in a play?|where and when the play takes place|a character|a line|=>Described in the script.
What does 'enter' mean in a script?|a character comes on stage|a character leaves|the play ends|=>Stage direction.
What does 'exit' mean in a script?|a character leaves the stage|a character comes on|the play begins|=>Stage direction.
What does '(whispering)' tell an actor?|how to say the line|where to stand|when to leave|=>Delivery.
How is a play different from a story?|a play is mostly dialogue and written to be performed|a play has no characters|a play has no conflict|=>Dialogue-driven.
How is a poem different from a story?|a poem uses lines and stanzas; a story uses paragraphs|a poem has no meaning|a story has rhyme|=>Form.
Which poem form has 5-7-5 syllables?|haiku|limerick|cinquain|=>Haiku.
Which poem form is funny and has five lines?|limerick|haiku|ode|=>AABBA.
Which word rhymes with 'moon'?|spoon|man|mine|=>Same ending.
Which word rhymes with 'night'?|light|late|nut|=>Same ending.
Which words in this line are an example of alliteration: 'Sally sells seashells'?|Sally, sells, seashells|Sally, shells|none|=>Repeated s.
`);

  /* ---------------- informational text ---------------- */
  A(K("informational"), `
What is an informational text?|a text that gives facts about a topic|a story|a poem|=>Nonfiction.
What is a main idea?|what the text is mostly about|a small detail|the title|=>Big idea.
What are supporting details?|facts that explain the main idea|the main idea|the title|=>Support.
What is a summary?|a brief restatement of the main ideas in your own words|a copy of the text|your opinion|=>Short and objective.
What is a text structure?|how a text is organized|the title|the author|=>Pattern.
What is chronological order?|events in the order they happened|order by importance|alphabetical|=>Time.
What is cause and effect?|a structure that explains why something happens and what results|a list|a story|=>Because...so.
What is compare and contrast?|a structure that shows how things are alike and different|a story|a list|=>Similarities and differences.
What is problem and solution?|a structure that presents a problem and a fix|a story|a list|=>Issue and answer.
What is description?|a structure that tells about a topic with details|a story|a poem|=>Characteristics.
What are signal words?|words that show how a text is organized|the title|a caption|=>First, because, however.
Which signal words show sequence?|first, next, then, finally|because, so|similarly, both|=>Order.
Which signal words show cause and effect?|because, as a result, therefore|first, next|both, same|=>Reasons.
Which signal words show comparison?|similarly, both, also|however, but|first, next|=>Alike.
Which signal words show contrast?|however, but, unlike|similarly, both|first, then|=>Different.
What is a text feature?|a part of a text that helps readers find information|a rhyme|the theme|=>Headings, captions.
What does a heading do?|labels a section|ends a text|rhymes|=>Organization.
What does a caption do?|explains a picture|names the author|ends a text|=>Under images.
What does a glossary do?|defines important words|lists page numbers|tells a story|=>Back of the book.
What does an index do?|lists topics alphabetically with page numbers|defines words|summarizes|=>Find topics.
What does a table of contents do?|lists chapters and page numbers|defines words|gives an index|=>Front of the book.
What does a diagram do?|shows parts or a process with labels|tells a story|rhymes|=>Visual.
What does a timeline do?|shows events in order with dates|shows a map|rhymes|=>Chronological.
What does a map do?|shows locations|tells a story|rhymes|=>Geography.
What does a graph do?|shows data visually|tells a story|rhymes|=>Numbers.
What does a sidebar do?|gives extra information in a box|ends a text|rhymes|=>Extra facts.
What does bold print show?|an important word|the author|a rhyme|=>Key vocabulary.
What is a fact?|a statement that can be proven|an opinion|a guess|=>Verifiable.
What is an opinion?|a belief or feeling|a fact|a measurement|=>Personal.
Which is a fact?|Mount Everest is the tallest mountain above sea level.|Mountains are boring.|Everest is the prettiest mountain.|=>Verifiable.
Which is an opinion?|Dogs make the best pets.|Dogs are mammals.|Dogs have four legs.|=>Judgment.
What is the author's purpose?|why the author wrote the text|the setting|the plot|=>Inform, persuade, entertain.
If an author gives facts about volcanoes, the purpose is to…|inform|persuade|entertain|=>Teach.
If an author urges readers to recycle, the purpose is to…|persuade|inform only|entertain|=>Convince.
What is a primary source?|a firsthand account|a summary by someone else|a textbook|=>Diary, photo.
What is a secondary source?|a source that interprets primary sources|a diary|a photo|=>Textbook.
What is a biography?|a true story of someone's life written by another person|a story about yourself|a novel|=>Real person.
What is an autobiography?|a person's life story written by that person|a story written by another|a novel|=>Self-written.
What is point of view in an informational text?|the author's perspective or attitude|the setting|the plot|=>Stance.
How do two accounts of the same event differ?|they may focus on different details or perspectives|they are the same|they have no details|=>Perspective.
How can you compare two texts on the same topic?|look at facts, perspective, and structure|only the length|only the title|=>Analysis.
What is bias?|a one-sided view|a fair view|a fact|=>Slant.
What is a credible source?|one that is accurate and trustworthy|one that is popular|one that is funny|=>Reliable.
What is skimming?|reading quickly for the main ideas|reading carefully|reading backward|=>Overview.
What is scanning?|looking for specific information|reading carefully|skipping|=>Find a fact.
What is paraphrasing?|restating in your own words|copying|ignoring|=>Rewrite.
What does 'infer' mean?|use clues plus what you know to figure something out|copy the text|guess|=>Evidence-based.
What is the central idea of a text mostly about?|the big point the author makes|a small detail|the title|=>Main point.
How do headings help you find the main idea?|they preview what each section is about|they hide ideas|they end the text|=>Preview.
Which text feature helps you find where a word is defined?|glossary|map|timeline|=>Definitions.
Which text feature helps you find a topic quickly?|index|diagram|caption|=>Alphabetical.
Which text feature shows how something works?|diagram|timeline|index|=>Steps.
Which text feature shows when events happened?|timeline|diagram|glossary|=>Dates.
Which text feature helps you understand a photo?|caption|index|glossary|=>Explains it.
Which text feature helps you see data?|graph|map|caption|=>Numbers.
`);

  /* ---------------- writing ---------------- */
  A(K("writing"), `
What are the steps of the writing process?|prewrite, draft, revise, edit, publish|draft, publish, edit|publish, draft, prewrite|=>The standard order.
What do you do when you prewrite?|plan and brainstorm|fix spelling|publish|=>Plan first.
What do you do when you draft?|write your ideas down|fix spelling|publish|=>First version.
What do you do when you revise?|improve ideas, organization, and word choice|only fix spelling|publish|=>Big-picture changes.
What do you do when you edit?|fix spelling, grammar, and punctuation|brainstorm|draft|=>Conventions.
What do you do when you publish?|share your final writing|brainstorm|draft|=>Final step.
What is a graphic organizer?|a visual tool for planning ideas|a final copy|a thesis|=>Webs and charts.
What is a topic sentence?|a sentence that tells the main idea of a paragraph|the last sentence|a question|=>Introduces.
What are supporting details?|facts and examples that explain the main idea|the title|the conclusion|=>Support.
What is a concluding sentence?|a sentence that wraps up a paragraph|the first sentence|a detail|=>Closing.
What is a thesis statement?|a sentence that states the main claim of an essay|the title|the last sentence|=>Controlling idea.
What is an introduction's job?|hook the reader and introduce the topic|summarize|list sources|=>Opening.
What is a hook?|an opening that grabs attention|the ending|the title|=>Question or fact.
What is a conclusion's job?|wrap up and restate the main idea|add new topics|list sources|=>Closure.
What is a transition?|a word or phrase connecting ideas|a thesis|a quote|=>However, next.
Which transition adds information?|also|however|because|=>Also.
Which transition shows contrast?|however|also|first|=>However.
Which transition shows cause?|because|then|meanwhile|=>Because.
Which transition shows time?|meanwhile|therefore|however|=>Time.
What is narrative writing?|writing that tells a story|writing that explains|writing that persuades|=>Real or imagined.
What is informative writing?|writing that teaches facts|writing that tells a story|writing that persuades|=>Explain.
What is opinion (argument) writing?|writing that states a position and supports it with reasons|writing that tells a story|writing that lists|=>Persuade.
What is a claim?|a statement of your position|a fact|the title|=>Thesis.
What is a reason?|a statement that supports a claim|the claim|the title|=>Why.
What is evidence?|facts, examples, or quotes that support reasons|an opinion|the title|=>Proof.
What is a counterclaim?|an opposing viewpoint|the main claim|evidence|=>Other side.
What is a rebuttal?|a response that answers an opposing viewpoint|the claim|the title|=>Answer.
What are the parts of a friendly letter?|date, greeting, body, closing, signature|title, author|chapters|=>Letter parts.
What are the parts of a business letter?|heading, inside address, greeting, body, closing, signature|title and chapters|headings only|=>Formal.
What is a sensory detail?|a detail that appeals to the senses|a fact|a quote|=>Vivid.
What is 'show, don't tell'?|use details and actions instead of just stating feelings|only tell|only show|=>Descriptive writing.
Which sentence shows rather than tells?|Her hands shook as she opened the letter.|She was nervous.|She felt nervous.|=>Shows through action.
What is dialogue in a narrative?|characters' spoken words in quotation marks|the setting|the plot|=>Speech.
What is a strong verb?|a precise verb that gives a clear image|a weak verb|a noun|=>Sprinted vs. went.
Which is a stronger verb?|dashed|went|moved|=>Specific.
What is concise writing?|using the fewest words to be clear|using many words|using big words|=>Cut extras.
What is parallel structure?|using the same grammatical form for items in a list|using different forms|using long sentences|=>Run, jump, swim.
What is a run-on sentence?|two or more sentences joined incorrectly|a short sentence|a fragment|=>Fix with punctuation.
What is a sentence fragment?|an incomplete sentence|a long sentence|a question|=>Missing subject or verb.
What is a complete sentence?|a group of words with a subject and a predicate that expresses a complete thought|a phrase|a fragment|=>Subject + verb.
What is voice in writing?|a writer's unique style|the narrator|the title|=>Personality.
What is audience?|the readers you write for|the writer|the title|=>Tailor your language.
What is purpose?|the reason for writing|the audience|the title|=>Inform, persuade, entertain.
What is a formal tone?|a serious and polished style|a casual style|slang|=>Essays.
What is an informal tone?|a casual, friendly style|a serious style|a legal style|=>Notes to friends.
How do you start a new paragraph?|indent the first line|use all caps|skip a word|=>Indent.
How many sentences does a good paragraph usually have?|at least three to five|one|ten|=>Topic, details, conclusion.
What is a rubric?|a scoring guide|a title|a draft|=>Shows expectations.
What is peer review?|classmates give feedback on your writing|you grade yourself|the teacher publishes|=>Feedback.
What is a quotation?|the exact words from a source in quotation marks|a paraphrase|a summary|=>Cite it.
What is plagiarism?|using someone else's words as your own|quoting with credit|summarizing with credit|=>Always give credit.
`);

  /* ---------------- grammar ---------------- */
  (function () {
    const out = [];
    const words = {
      noun: W("dog city teacher lake mountain pizza library doctor river window garden ocean pencil farmer school bridge forest freedom courage"),
      verb: W("jump swim sing laugh write climb think whisper build paint dance shout giggle sleep wander explore"),
      adjective: W("tall shiny soft bright tiny spicy enormous cold sweet round brave silent fluffy rough ancient curious"),
      adverb: W("quickly slowly loudly softly carefully happily gently bravely eagerly quietly kindly cheerfully")
    };
    function W(s) { return s.trim().split(/\s+/); }
    Object.keys(words).forEach((k) => words[k].forEach((w) => {
      const others = Object.keys(words).filter((x) => x !== k);
      out.push(line(`What part of speech is '${w}'?`, k, others, `${w} is a ${k}.`));
    }));
    const irr = [["go", "went", "gone"], ["eat", "ate", "eaten"], ["see", "saw", "seen"], ["give", "gave", "given"], ["take", "took", "taken"], ["write", "wrote", "written"], ["swim", "swam", "swum"], ["sing", "sang", "sung"], ["drink", "drank", "drunk"], ["ride", "rode", "ridden"], ["fly", "flew", "flown"], ["draw", "drew", "drawn"], ["grow", "grew", "grown"], ["know", "knew", "known"], ["throw", "threw", "thrown"], ["break", "broke", "broken"], ["speak", "spoke", "spoken"], ["begin", "began", "begun"], ["choose", "chose", "chosen"], ["wear", "wore", "worn"], ["drive", "drove", "driven"], ["fall", "fell", "fallen"], ["freeze", "froze", "frozen"]];
    irr.forEach(([b, p, pp]) => {
      out.push(line(`What is the past tense of '${b}'?`, p, [pp === p ? b + "ed" : pp, b + "ed", b + "s"], `Yesterday, I ${p}.`));
      out.push(line(`Complete the sentence: She has ___ the book. (${b})`, pp, [p === pp ? b + "ed" : p, b + "ed", b], `has + ${pp}.`));
    });
    const sva = [["The dogs ___ loudly.", "bark", "barks"], ["The dog ___ loudly.", "barks", "bark"], ["My friends ___ to the park.", "walk", "walks"], ["My friend ___ to the park.", "walks", "walk"], ["The children ___ playing.", "are", "is"], ["The child ___ playing.", "is", "are"], ["Both of my sisters ___ tall.", "are", "is"], ["Each of the students ___ a book.", "has", "have"], ["Everyone ___ here.", "is", "are"], ["The team ___ practicing.", "is", "are"], ["Mia and Leo ___ friends.", "are", "is"], ["Neither of the boys ___ ready.", "is", "are"], ["The books on the shelf ___ old.", "are", "is"], ["There ___ three cats on the porch.", "are", "is"], ["There ___ a cat on the porch.", "is", "are"], ["I ___ happy.", "am", "is"], ["You ___ welcome.", "are", "is"], ["She ___ a good singer.", "is", "are"], ["They ___ at school.", "are", "is"], ["We ___ finished.", "are", "is"]];
    sva.forEach(([s, r, w]) => out.push(line(`Choose the verb that agrees with the subject.{nl}${s}`, r, [w], `The verb must match the subject.`)));
    const confused = [["Please ___ your name here.", "write", "right"], ["Turn ___ at the corner.", "right", "write"], ["I ___ a bird in the tree.", "saw", "seen"], ["I have ___ that movie.", "seen", "saw"], ["He ___ to the store.", "went", "gone"], ["He has ___ to the store.", "gone", "went"], ["I ___ my homework yesterday.", "did", "done"], ["I have ___ my homework.", "done", "did"], ["Can I ___ a pencil?", "borrow", "lend"], ["Can you ___ me a pencil?", "lend", "borrow"], ["The dog wagged ___ tail.", "its", "it's"], ["___ raining today.", "It's", "Its"], ["___ going to be fun.", "They're", "Their"], ["The kids packed ___ lunches.", "their", "there"], ["Put the box over ___.", "there", "their"], ["___ my favorite book.", "That's", "Thats"], ["Is this ___ coat?", "your", "you're"], ["___ welcome!", "You're", "Your"], ["I have ___ many cookies.", "too", "to"], ["I want to go ___ the park.", "to", "too"], ["We have ___ dogs.", "two", "to"], ["I can ___ the birds.", "hear", "here"], ["Come ___, please.", "here", "hear"], ["The ___ is shining.", "sun", "son"], ["Her ___ is nine.", "son", "sun"], ["I ate ___ cookies.", "eight", "ate"], ["I ___ breakfast.", "ate", "eight"], ["She ___ the race.", "won", "one"], ["I have ___ pencil.", "one", "won"]];
    confused.forEach(([s, r, w]) => out.push(line(`Choose the correct word.{nl}${s}`, r, [w], `${r} fits the sentence.`)));
    out.push(
      "What is a noun?|a person, place, thing, or idea|an action|a describing word|=>Names.",
      "What is a verb?|a word that shows action or being|a person|a describing word|=>Run, is.",
      "What is an adjective?|a word that describes a noun|a word that describes a verb|a connecting word|=>Tall tree.",
      "What is an adverb?|a word that describes a verb, adjective, or adverb|a person|a place|=>Ran quickly.",
      "What is a pronoun?|a word that takes the place of a noun|a describing word|an action|=>He, she, it.",
      "What is a preposition?|a word that shows a relationship in space or time, like in, on, or under|an action|a person|=>Under the bridge.",
      "What is a conjunction?|a word that joins words or sentences|a describing word|an action|=>and, but, or.",
      "What are the coordinating conjunctions?|for, and, nor, but, or, yet, so|because, although, since|however, therefore|=>FANBOYS.",
      "What is an interjection?|a word that expresses strong feeling|a connecting word|a describing word|=>Wow!",
      "What is a sentence?|a group of words that expresses a complete thought|a phrase|a word|=>Subject and predicate.",
      "What is the subject of a sentence?|who or what the sentence is about|what the subject does|a describing word|=>Subject.",
      "What is the predicate of a sentence?|the part that tells what the subject does or is|who the sentence is about|a describing word|=>Verb part.",
      "What is a simple sentence?|a sentence with one independent clause|a sentence with two independent clauses|a fragment|=>One idea.",
      "What is a compound sentence?|two independent clauses joined by a conjunction|a sentence with one clause|a fragment|=>I ran, and she walked.",
      "What is a complex sentence?|a sentence with an independent clause and a dependent clause|a sentence with one clause|a fragment|=>Because it rained, we stayed in.",
      "Which is a fragment?|Running down the street.|The dog ran down the street.|I ran fast.|=>Missing a subject.",
      "Which is a run-on?|I like pizza it is good.|I like pizza.|Pizza is good.|=>Needs punctuation.",
      "Which is a complete sentence?|The cat slept on the couch.|On the couch.|Slept quietly.|=>Subject and verb.",
      "Which sentence is a question?|Where are you going?|I am going home.|Go home!|=>Ends with ?.",
      "Which sentence is a command?|Please sit down.|I sat down.|Did you sit down?|=>Gives an order.",
      "Which sentence is an exclamation?|What a beautiful day!|It is a beautiful day.|Is it a beautiful day?|=>Strong feeling.",
      "Which sentence uses commas correctly in a list?|We bought apples, oranges, and grapes.|We bought apples oranges and grapes.|We bought, apples, oranges and grapes.|=>Separate items.",
      "Which sentence uses a comma correctly?|After lunch, we played outside.|After lunch we, played outside.|After, lunch we played outside.|=>Comma after an introductory phrase.",
      "Which sentence uses quotation marks correctly?|\"I'm hungry,\" said Mia.|I'm hungry, said \"Mia.\"|\"I'm hungry said Mia.\"|=>Quotes around the speaker's words.",
      "Which uses an apostrophe correctly for possession?|the dog's bone|the dogs bone|the dogs' bone (one dog)|=>One owner: 's.",
      "Which uses an apostrophe correctly for a contraction?|don't|do'nt|dont'|=>Replaces the o.",
      "Which is the correct plural possessive?|the girls' coats|the girl's coats (many girls)|the girls coats|=>Plural owners: s'.",
      "Which sentence is capitalized correctly?|We visited Richmond, Virginia, in July.|We visited richmond, virginia, in july.|We visited Richmond, virginia, in July.|=>Proper nouns.",
      "Which word should be capitalized?|Thanksgiving|holiday|season|=>Holiday names.",
      "Which word should be capitalized?|Monday|today|week|=>Days of the week.",
      "Which sentence uses the correct pronoun?|Mia and I went to the store.|Mia and me went to the store.|Me and Mia went to the store.|=>Subject pronoun I.",
      "Which sentence uses the correct pronoun?|The gift is for her and me.|The gift is for she and I.|The gift is for her and I.|=>Object pronouns.",
      "Which is a correct sentence?|She doesn't have any pencils.|She doesn't have no pencils.|She don't have any pencils.|=>Avoid double negatives.",
      "Which word is an adverb?|quickly|quick|quickness|=>Describes how.",
      "Which word is an adjective?|beautiful|beautifully|beauty|=>Describes a noun.",
      "What is the comparative form of 'big'?|bigger|biggest|more big|=>Comparing two.",
      "What is the superlative form of 'big'?|biggest|bigger|most big|=>Comparing three or more.",
      "What is the comparative form of 'good'?|better|gooder|more good|=>Irregular.",
      "What is the superlative form of 'good'?|best|goodest|most good|=>Irregular.",
      "What is the comparative of 'interesting'?|more interesting|interestinger|most interesting|=>Long adjectives use more.",
      "What is the past tense of 'walk'?|walked|walk|walks|=>Add -ed.",
      "What is the future tense of 'walk'?|will walk|walked|walks|=>will + verb.",
      "What is the present perfect of 'walk'?|has walked|walked|will walk|=>has/have + past participle."
    );
    B.add(K("grammar"), out.join("\n"));
  })();

  /* ---------------- research & media ---------------- */
  A(K("research"), `
What is research?|finding information about a topic|writing a story|drawing|=>Looking up facts.
What is a research question?|a question your research will answer|a topic|an opinion|=>Guides the search.
What is a source?|where you get information|a title|a character|=>Books, websites.
What is a primary source?|a firsthand account|a summary by someone else|a textbook|=>Diary.
What is a secondary source?|a source that explains primary sources|a diary|a photograph|=>Textbook.
What is a credible source?|one that is accurate and trustworthy|one that is popular|one that is funny|=>Reliable.
Which website ending usually means a government site?|.gov|.com|.biz|=>Government.
Which website ending usually means a school?|.edu|.gov|.net|=>Education.
Which source is best for facts about the planets?|a science book or NASA site|a fairy tale|a comic strip|=>Expert source.
What is bias?|a one-sided view|a fair view|a fact|=>Slant.
How can you check whether a source is reliable?|see who wrote it and whether it cites evidence|count the pictures|see the color|=>Check the author.
What is a keyword?|an important word used to search|a long word|a citation|=>Search term.
Which keyword search is the best for 'how bees make honey'?|bees honey|the|how|=>Use specific nouns.
What is a database?|an organized collection of information you can search|a type of book|a type of graph|=>Library resources.
What is an encyclopedia?|a reference book with articles on many topics|a story|a poem|=>Overview source.
What is an almanac?|a book of yearly facts and statistics|a story|a poem|=>Reference.
What is an atlas?|a book of maps|a dictionary|a thesaurus|=>Maps.
What is a thesaurus?|a book of synonyms|a book of maps|a dictionary|=>Similar words.
What is a dictionary?|a book of word meanings|a book of maps|a thesaurus|=>Definitions.
What is a note card?|a small card to record facts and the source|a final paper|a bibliography|=>Organize notes.
What is paraphrasing?|restating in your own words|copying|ignoring|=>Rewrite.
What is plagiarism?|using someone else's words as your own|quoting with credit|summarizing with credit|=>Always cite.
How can you avoid plagiarism?|use your own words and cite sources|copy and paste|skip citations|=>Credit.
What is a citation?|credit that tells where information came from|a quote|a summary|=>Source.
What is a bibliography?|a list of sources used|a table of contents|an index|=>Credits.
How are bibliography entries arranged?|alphabetically by author's last name|by length|by date only|=>A to Z.
What is a direct quote?|the exact words from a source in quotation marks|a paraphrase|a summary|=>Cite it.
What is an outline?|a plan showing main ideas and details|the final copy|a bibliography|=>Structure.
What is the media?|ways of communicating information to many people|a single letter|a diary|=>TV, news, internet.
What is media literacy?|the ability to analyze and evaluate media messages|reading only books|watching only TV|=>Think critically.
What is an advertisement?|a message meant to persuade people to buy something|a news story|a textbook|=>Sell.
What is a persuasive technique?|a method used to convince an audience|a rhyme|a fact|=>Bandwagon, testimonial.
What is bandwagon?|saying everyone is doing something so you should too|giving facts|citing experts|=>Join the crowd.
What is a testimonial?|a statement from a person endorsing a product|a study|a rhyme|=>Celebrity ads.
What is an emotional appeal?|persuading by stirring feelings|persuading with facts|persuading with experts|=>Heartstrings.
What is a slogan?|a short catchy phrase used in advertising|a paragraph|a fact|=>Easy to remember.
What is a target audience?|the group a message is meant to reach|everyone|nobody|=>Intended viewers.
What is a headline?|the title of a news story|the ending|an ad|=>Grabs attention.
What is clickbait?|a headline designed to get clicks, often exaggerated|an accurate headline|a fact|=>Sensational.
What is a byline?|the line that tells who wrote an article|the title|the date|=>Author credit.
What is a fact?|a statement that can be proven|an opinion|a slogan|=>Verifiable.
What is an opinion?|a personal belief|a statement that can be proven|a statistic|=>Judgment.
What is a digital footprint?|the trail of information you leave online|a physical print|a type of shoe|=>Online record.
Why is it important to think before posting online?|posts can last and be seen by many|posts disappear instantly|nobody sees them|=>Permanent.
What personal information should you NOT share online?|your address, passwords, and phone number|your favorite color|your favorite food|=>Keep private.
What is cyberbullying?|using technology to harass or hurt someone|texting a friend|playing a game|=>Never okay.
What should you do if you see cyberbullying?|report it and support the person|join in|ignore it|=>Be an upstander.
What is a strong password?|long, unique, and hard to guess|your name|1234|=>Safety.
What is copyright?|legal protection for creators' work|a type of font|a spelling rule|=>Credit creators.
`);

  /* ---------------- communication ---------------- */
  A(K("communication"), `
What is collaboration?|working together toward a goal|working alone|competing|=>Teamwork.
What does it mean to collaborate?|to work with others|to work alone|to argue|=>Cooperate.
What is a clarifying question?|a question that helps you understand better|a question that changes the topic|a joke|=>Could you explain that again?
What is a good way to show you are listening?|look at the speaker and nod|look away|talk to a friend|=>Eye contact.
What is active listening?|focusing, understanding, and responding thoughtfully|talking over others|ignoring|=>Engage.
Which is a good rule for a group discussion?|take turns speaking|interrupt|ignore others|=>Respect.
Which is a good rule for a group discussion?|build on others' ideas|only talk about yourself|laugh at others|=>Add to the conversation.
When you disagree with someone, you should…|explain your reasons politely|call them names|walk away|=>Respectful disagreement.
What is a good way to disagree?|I see it differently because...|You're wrong.|That's dumb.|=>Polite.
What is a good way to agree?|I agree with you because...|Whatever.|Boring.|=>Add a reason.
What is a presentation?|sharing information with an audience|a quiet reading|a test|=>Speaking.
What helps you prepare for a presentation?|practice|skipping it|running away|=>Rehearse.
What should you do while presenting?|speak clearly, make eye contact, and use a good pace|mumble and look down|read every word|=>Delivery.
How loud should you speak in a presentation?|loud enough for everyone to hear|in a whisper|shouting|=>Volume.
What is a good pace for speaking?|not too fast, not too slow|as fast as possible|very slow|=>Clear.
What is eye contact?|looking at your audience|looking at the floor|looking at the ceiling|=>Connects.
What is a visual aid?|a chart, picture, or slide that supports a talk|a script|a quote|=>Helps understanding.
What should a slide contain?|key points and images, not whole paragraphs|every word you will say|nothing|=>Short.
What is multimedia?|using text, images, sound, and video together|only text|only pictures|=>Mixed media.
What is a good way to start a presentation?|state your topic and grab attention|mumble|apologize|=>Hook.
What is a good way to end a presentation?|summarize and thank the audience|just stop|walk away|=>Closing.
What should you do when a presenter finishes?|clap or ask questions|talk to a friend|leave|=>Polite response.
What is a follow-up question?|a question that builds on what someone said|a question changing the subject|a joke|=>Tell me more.
What is body language?|communicating with posture and gestures|spoken words|written words|=>Nonverbal.
What body language shows confidence?|standing tall and smiling|slouching|hiding|=>Positive.
What is tone of voice?|the attitude your voice conveys|the volume only|the topic|=>Sounds happy or serious.
What is a speech?|a formal talk to an audience|a poem|a spelling test|=>Public speaking.
What is a debate?|a formal discussion where sides argue opposing positions|a casual chat|a story|=>Structured.
What is a role-play?|acting out a situation|a test|a quiet reading|=>Practice.
What is an interview?|asking someone questions to learn information|writing a story|drawing|=>Primary source.
What should you do before an interview?|prepare questions|skip planning|record without asking|=>Be ready.
What is a good interview question?|one that cannot be answered with just yes or no|one that is yes or no|one that is rude|=>Open-ended.
What does 'summarize what you heard' mean?|tell the main points in your own words|repeat every word|ignore it|=>Brief.
What does 'consensus' mean?|general agreement|a vote|an argument|=>Agree together.
What is a norm in a group?|an agreed-upon rule for behavior|a joke|a topic|=>Group rules.
What is constructive feedback?|helpful comments that tell how to improve|only praise|only criticism|=>Kind and specific.
Which is constructive feedback?|Your introduction could be stronger if you add a hook.|This is bad.|I don't like it.|=>Specific.
What does it mean to be respectful when others speak?|listen without interrupting|talk over them|leave|=>Courtesy.
What is a script for a presentation?|the words you plan to say|the slides|the audience|=>Notes.
What is a transition in a talk?|a phrase connecting one idea to the next|the end|the start|=>Next, finally.
What does 'enunciate' mean?|to pronounce words clearly|to talk fast|to whisper|=>Clear speech.
What does 'rehearse' mean?|to practice|to forget|to skip|=>Prepare.
`);
})();
