/* Grade 3 English and Reading Skills: bonus question banks. */
(function () {
  "use strict";
  const B = window.BONUS, K = (u) => "3/english/" + u, R = (u) => "3/reading/" + u;
  const W = (s) => s.trim().split(/\s+/);
  const line = (q, right, wrongs, e) => [q, right].concat(wrongs).join("|") + (e ? "|=>" + e : "");
  const add = (key, arr) => B.add(key, arr.join("\n"));
  function pickK(arr, k, seed, ex) {
    const r = B.rngFrom(B.hash(seed)); const out = []; let g = 0; ex = ex || [];
    while (out.length < k && g++ < 500) { const v = arr[Math.floor(r() * arr.length)]; if (!out.includes(v) && !ex.includes(v)) out.push(v); }
    return out;
  }

  /* ---------------- word study: prefixes, suffixes, syllables ---------------- */
  (function () {
    // [word, base, affix, meaning]
    const d = [
      ["unhappy", "happy", "un-", "not happy"], ["unlock", "lock", "un-", "to open a lock"], ["unfair", "fair", "un-", "not fair"], ["unsafe", "safe", "un-", "not safe"],
      ["untie", "tie", "un-", "to loosen a knot"], ["unkind", "kind", "un-", "not kind"], ["unlucky", "lucky", "un-", "not lucky"], ["unclear", "clear", "un-", "not clear"],
      ["unpack", "pack", "un-", "to take things out of a bag"], ["unwrap", "wrap", "un-", "to take off the wrapping"],
      ["redo", "do", "re-", "to do again"], ["reread", "read", "re-", "to read again"], ["rewrite", "write", "re-", "to write again"], ["replay", "play", "re-", "to play again"],
      ["rebuild", "build", "re-", "to build again"], ["reheat", "heat", "re-", "to heat again"], ["refill", "fill", "re-", "to fill again"], ["reuse", "use", "re-", "to use again"],
      ["retell", "tell", "re-", "to tell again"], ["rewind", "wind", "re-", "to wind again"],
      ["preview", "view", "pre-", "to view before"], ["preheat", "heat", "pre-", "to heat before"], ["prepay", "pay", "pre-", "to pay before"], ["preschool", "school", "pre-", "school before kindergarten"],
      ["prewash", "wash", "pre-", "to wash before"], ["pretest", "test", "pre-", "a test given before"],
      ["dislike", "like", "dis-", "not like"], ["disagree", "agree", "dis-", "not agree"], ["disappear", "appear", "dis-", "to go out of sight"], ["dishonest", "honest", "dis-", "not honest"],
      ["disconnect", "connect", "dis-", "to separate"], ["distrust", "trust", "dis-", "not trust"],
      ["misspell", "spell", "mis-", "to spell wrongly"], ["misplace", "place", "mis-", "to put in the wrong place"], ["misread", "read", "mis-", "to read wrongly"], ["misuse", "use", "mis-", "to use wrongly"],
      ["mislead", "lead", "mis-", "to lead in the wrong direction"], ["misbehave", "behave", "mis-", "to behave badly"],
      ["helpful", "help", "-ful", "full of help"], ["careful", "care", "-ful", "full of care"], ["joyful", "joy", "-ful", "full of joy"], ["colorful", "color", "-ful", "full of color"],
      ["thankful", "thank", "-ful", "full of thanks"], ["hopeful", "hope", "-ful", "full of hope"], ["painful", "pain", "-ful", "full of pain"], ["peaceful", "peace", "-ful", "full of peace"],
      ["careless", "care", "-less", "without care"], ["hopeless", "hope", "-less", "without hope"], ["helpless", "help", "-less", "without help"], ["homeless", "home", "-less", "without a home"],
      ["fearless", "fear", "-less", "without fear"], ["endless", "end", "-less", "without an end"], ["painless", "pain", "-less", "without pain"], ["useless", "use", "-less", "without use"],
      ["slowly", "slow", "-ly", "in a slow way"], ["quickly", "quick", "-ly", "in a quick way"], ["softly", "soft", "-ly", "in a soft way"], ["loudly", "loud", "-ly", "in a loud way"],
      ["kindly", "kind", "-ly", "in a kind way"], ["gently", "gentle", "-ly", "in a gentle way"], ["sadly", "sad", "-ly", "in a sad way"], ["bravely", "brave", "-ly", "in a brave way"],
      ["teacher", "teach", "-er", "one who teaches"], ["farmer", "farm", "-er", "one who farms"], ["singer", "sing", "-er", "one who sings"], ["painter", "paint", "-er", "one who paints"],
      ["baker", "bake", "-er", "one who bakes"], ["reader", "read", "-er", "one who reads"], ["writer", "write", "-er", "one who writes"], ["player", "play", "-er", "one who plays"],
      ["washable", "wash", "-able", "able to be washed"], ["breakable", "break", "-able", "able to be broken"], ["readable", "read", "-able", "able to be read"], ["enjoyable", "enjoy", "-able", "able to be enjoyed"]
    ];
    const meanings = d.map((x) => x[3]);
    const out = [];
    const prefixes = d.filter((x) => x[2].endsWith("-") && x[2].length > 1 && x[2][x[2].length - 1] === "-");
    d.forEach(([w, base, aff, mean], i) => {
      const bw = pickK(d.map((x) => x[1]).filter((b) => b !== base), 2, "bw" + w);
      out.push(line(`What is the base word in '${w}'?`, base, bw.concat(aff.replace("-", "")).slice(0, 3), `${w} = ${aff.startsWith("-") ? base + aff : aff + base}.`));
      out.push(line(`What does '${w}' mean?`, mean, pickK(meanings, 3, "mn" + w, [mean]), `${aff} changes the meaning of ${base}.`));
      out.push(line(`Which word means '${mean}'?`, w, pickK(d.map((x) => x[0]), 3, "wm" + w, [w]), `${w} means ${mean}.`));
      out.push(line(`What is the ${aff.startsWith("-") ? "suffix" : "prefix"} in '${w}'?`, aff, pickK(["un-", "re-", "pre-", "dis-", "mis-", "-ful", "-less", "-ly", "-er", "-able"], 3, "af" + w, [aff]), `${w} has the ${aff.startsWith("-") ? "suffix" : "prefix"} ${aff}.`));
    });
    const syl = {
      1: W("cat dog frog chair street school bread train jump dream cheese smile bright clock plant farm lunch"),
      2: W("rabbit window happy table pencil garden monkey puppy spider sunset basket picnic butter dinner lemon robot music open paper baby tiger kitten pillow candy turtle"),
      3: W("banana butterfly computer umbrella family potato tomato elephant important vacation animal dinosaur adventure calendar bicycle remember"),
      4: W("watermelon dictionary caterpillar vegetable lemonade community alligator generation exploration"),
      5: W("refrigerator unbelievable imagination information ")
    };
    Object.keys(syl).forEach((n) => syl[n].forEach((w) => {
      out.push(line(`How many syllables are in '${w}'?`, n, [1, 2, 3, 4, 5].filter((x) => x !== +n && Math.abs(x - n) <= 2).slice(0, 3), `Clap the beats of ${w}: ${n}.`));
    }));
    const all = [].concat(...Object.values(syl)).filter(Boolean);
    [2, 3, 4].forEach((n) => syl[n].forEach((w) => out.push(line(`Which word has ${n} syllables?`, w, pickK([].concat(...Object.keys(syl).filter((k) => +k !== n).map((k) => syl[k])), 3, "sy" + w), `${w} has ${n} syllables.`))));
    const splits = [["rabbit", "rab-bit"], ["window", "win-dow"], ["happy", "hap-py"], ["table", "ta-ble"], ["pencil", "pen-cil"], ["garden", "gar-den"], ["monkey", "mon-key"], ["sunset", "sun-set"], ["basket", "bas-ket"], ["picnic", "pic-nic"], ["butter", "but-ter"], ["dinner", "din-ner"], ["lemon", "lem-on"], ["robot", "ro-bot"], ["music", "mu-sic"], ["open", "o-pen"], ["paper", "pa-per"], ["baby", "ba-by"], ["tiger", "ti-ger"], ["spider", "spi-der"], ["banana", "ba-na-na"], ["computer", "com-pu-ter"], ["butterfly", "but-ter-fly"], ["umbrella", "um-brel-la"], ["family", "fam-i-ly"], ["potato", "po-ta-to"], ["watermelon", "wa-ter-mel-on"], ["dictionary", "dic-tion-ar-y"]];
    splits.forEach(([w, s]) => {
      const p = s.split("-"); const alt = [];
      alt.push(w.slice(0, 1) + "-" + w.slice(1)); alt.push(w.slice(0, w.length - 1) + "-" + w.slice(-1)); alt.push(w.slice(0, 2) + "-" + w.slice(2));
      out.push(line(`Which shows the correct way to divide '${w}' into syllables?`, s, [...new Set(alt)].filter((x) => x !== s && x.indexOf("-") !== -1).slice(0, 3), `${w} = ${s}.`));
    });
    out.push(
      "A syllable always has at least one…|vowel sound|consonant|capital letter|=>Every syllable has a vowel sound.",
      "What is a prefix?|a word part added to the beginning of a word|a word part added to the end of a word|a word that sounds the same|=>Prefixes come before the base word.",
      "What is a suffix?|a word part added to the end of a word|a word part added to the beginning|a root word|=>Suffixes come after the base word.",
      "What is a base word?|a word that can stand on its own, before anything is added|a long word|a word with a suffix|=>Prefixes and suffixes are added to the base word.",
      "The prefix un- means…|not|again|before|=>unhappy = not happy.",
      "The prefix re- means…|again|not|wrongly|=>redo = do again.",
      "The prefix pre- means…|before|after|not|=>preview = view before.",
      "The prefix dis- means…|not or opposite|again|before|=>dislike = not like.",
      "The prefix mis- means…|wrongly|again|before|=>misspell = spell wrongly.",
      "The suffix -ful means…|full of|without|one who|=>helpful = full of help.",
      "The suffix -less means…|without|full of|again|=>hopeless = without hope.",
      "The suffix -er can mean…|one who|without|not|=>teacher = one who teaches.",
      "The suffix -ly often changes an adjective into a…|adverb|noun|verb|=>quick → quickly.",
      "The suffix -able means…|able to be|without|before|=>washable = able to be washed.",
      "Which word does NOT have a prefix?|pencil|undo|rewrite|=>pencil has no prefix.",
      "Which word does NOT have a suffix?|table|painful|slowly|=>table has no suffix.",
      "Which prefix would you add to 'happy' to mean 'not happy'?|un-|re-|pre-|=>unhappy.",
      "Which prefix would you add to 'play' to mean 'play again'?|re-|un-|dis-|=>replay.",
      "Which suffix would you add to 'care' to mean 'without care'?|-less|-ful|-er|=>careless.",
      "Which suffix would you add to 'hope' to mean 'full of hope'?|-ful|-less|-ly|=>hopeful.",
      "When a word ends in a consonant followed by y, the suffix -ly changes the y to…|i|e|a|=>happy → happily.",
      "A compound word is…|two words joined together|a word with a prefix|a word with a suffix|=>Example: sunflower.",
      "Which word has a closed syllable (a short vowel followed by a consonant)?|cat|me|no|=>cat ends with a consonant and has a short vowel.",
      "How many syllables are in your first name if it is 'Jennifer'?|3|2|4|=>Jen-ni-fer."
    );
    add(K("word-study"), out);
  })();

  /* ---------------- vocabulary & context clues ---------------- */
  add(K("vocabulary"), `
What is a context clue?|a hint in the words around an unknown word|a picture in a book|the title of a book|=>Context clues help you figure out meanings.
What are synonyms?|words with similar meanings|words with opposite meanings|words that sound the same|=>big and large.
What are antonyms?|words with opposite meanings|words with similar meanings|words that sound the same|=>hot and cold.
What are homophones?|words that sound the same but have different meanings and spellings|words that mean the same|words that are spelled the same|=>to, too, two.
What are homographs?|words spelled the same but with different meanings|words that rhyme|words that mean the same|=>bat (animal) and bat (to hit a ball).
What does 'The weather was frigid, so we wore thick coats' tell you 'frigid' means?|very cold|very hot|rainy|=>Thick coats are a clue for cold.
What does 'The crowd was enormous; thousands of people filled the stadium' tell you 'enormous' means?|very large|very small|very quiet|=>Thousands of people is a clue.
What does 'She was elated when she won, jumping and cheering' tell you 'elated' means?|very happy|angry|tired|=>Jumping and cheering are clues.
What does 'The room was silent; you could hear a pin drop' tell you 'silent' means?|very quiet|very loud|very dark|=>A pin drop is the only sound.
What does 'He was famished after skipping lunch, so he ate three sandwiches' tell you 'famished' means?|very hungry|full|sleepy|=>Eating a lot is the clue.
What does 'The puppy was timid, hiding behind the couch' tell you 'timid' means?|shy and easily scared|brave|loud|=>Hiding is the clue.
What does 'Dad was exhausted after working all day and fell asleep on the couch' tell you 'exhausted' means?|very tired|very hungry|very happy|=>Falling asleep is the clue.
What does 'The desert is arid; it rarely rains there' tell you 'arid' means?|very dry|very wet|very cold|=>It rarely rains.
What does 'The thief tiptoed quietly, trying to be stealthy' tell you 'stealthy' means?|sneaky and quiet|loud|fast|=>Tiptoed quietly is the clue.
What does 'She was reluctant to jump in the cold pool, so she dipped in one toe at a time' tell you 'reluctant' means?|unwilling|eager|excited|=>One toe at a time shows hesitation.
What does 'The soup was scalding, so I waited for it to cool' tell you 'scalding' means?|very hot|cold|sweet|=>You waited for it to cool.
What does 'The tiny, minuscule ant crawled across the page' tell you 'minuscule' means?|extremely small|large|colorful|=>Tiny is a clue.
What does 'His voice was hoarse after cheering all game' tell you 'hoarse' means?|rough and scratchy|loud|soft|=>Cheering too much makes your voice rough.
What does 'The jewel was authentic, not a fake' tell you 'authentic' means?|real|fake|broken|=>Not a fake means real.
What does 'She was bewildered by the maze and could not figure out the way out' tell you 'bewildered' means?|confused|angry|bored|=>Not able to figure out is a clue.
What does 'The ancient castle was crumbling because it was thousands of years old' tell you 'ancient' means?|very old|new|small|=>Thousands of years old is the clue.
What does 'The twins were identical; no one could tell them apart' tell you 'identical' means?|exactly alike|different|tall|=>No one could tell them apart.
What does 'The tidy room was neat and clean, with everything in its place' tell you 'tidy' means?|neat and organized|messy|dark|=>Neat and clean are clues.
What does 'He gobbled his dinner' tell you 'gobbled' means?|ate quickly|ate slowly|did not eat|=>Gobbled is a fast-eating word.
Which word is a synonym of 'tiny'?|small|huge|slow|=>tiny ≈ small.
Which word is a synonym of 'brave'?|courageous|afraid|silly|=>brave ≈ courageous.
Which word is a synonym of 'rapid'?|fast|slow|late|=>rapid = fast.
Which word is a synonym of 'sleepy'?|drowsy|energetic|noisy|=>sleepy ≈ drowsy.
Which word is a synonym of 'shout'?|yell|whisper|hum|=>shout ≈ yell.
Which word is an antonym of 'ancient'?|modern|old|dusty|=>ancient is very old; modern is new.
Which word is an antonym of 'generous'?|selfish|kind|giving|=>generous gives; selfish keeps.
Which word is an antonym of 'huge'?|tiny|giant|large|=>huge is very big; tiny is very small.
Which word is an antonym of 'arrive'?|leave|come|reach|=>arrive and leave are opposites.
Which word is an antonym of 'difficult'?|easy|hard|tough|=>difficult and easy are opposites.
Which word is a homophone of 'ate'?|eight|eat|at|=>ate and eight sound alike.
Which word is a homophone of 'sea'?|see|set|say|=>sea and see sound alike.
Which word is a homophone of 'flower'?|flour|flow|floor|=>flower and flour sound alike.
Which word is a homophone of 'meet'?|meat|met|mat|=>meet and meat sound alike.
Which word is a homophone of 'tail'?|tale|tall|tile|=>tail and tale sound alike.
Which word is a homophone of 'sun'?|son|sin|sand|=>sun and son sound alike.
Which word is a homophone of 'hour'?|our|hot|house|=>hour and our sound alike.
Which word is a homophone of 'pair'?|pear|peer|pay|=>pair and pear sound alike.
Which word is a homophone of 'no'?|know|now|not|=>no and know sound alike.
Which word is a homophone of 'wood'?|would|word|wool|=>wood and would sound alike.
Which meaning of 'bat' is used?{nl}The bat flew out of the cave.|a flying animal|a wooden stick|to hit|=>A cave is a clue for the animal.
Which meaning of 'bat' is used?{nl}Ana swung the bat and hit the ball.|a wooden stick|a flying animal|a toy|=>Hitting a ball is the clue.
Which meaning of 'bark' is used?{nl}The dog's bark was loud.|a sound a dog makes|the outside of a tree|a ship|=>A dog is a clue.
Which meaning of 'bark' is used?{nl}The bark on the old oak was rough.|the outside of a tree|a sound a dog makes|to yell|=>Oak is a clue.
Which meaning of 'watch' is used?{nl}I wear a watch on my wrist.|a small clock|to look at|to guard|=>Wrist is a clue.
Which meaning of 'watch' is used?{nl}Please watch the movie with me.|to look at|a small clock|to wait|=>Movie is a clue.
Which meaning of 'light' is used?{nl}This bag is light, so I can carry it.|not heavy|not dark|a lamp|=>Carrying is a clue.
Which meaning of 'light' is used?{nl}Turn on the light so we can read.|a lamp or brightness|not heavy|to start a fire|=>Reading is a clue.
Which meaning of 'fall' is used?{nl}Leaves change color in the fall.|autumn|to drop|a waterfall|=>Leaves is a clue.
Which meaning of 'fall' is used?{nl}Be careful not to fall on the ice.|to drop to the ground|autumn|a trick|=>Ice is a clue.
Which meaning of 'ring' is used?{nl}She wore a gold ring.|a piece of jewelry|a sound a bell makes|a circle of people|=>Gold is a clue.
Which meaning of 'ring' is used?{nl}Did you hear the phone ring?|to make a sound|a piece of jewelry|to circle|=>Phone is a clue.
Which meaning of 'match' is used?{nl}Dad struck a match to light the candle.|a small stick that makes fire|a game|to be the same|=>Light a candle is the clue.
Which meaning of 'match' is used?{nl}Do your socks match?|to be the same|a game|a stick for fire|=>Socks is the clue.
Which meaning of 'duck' is used?{nl}Duck under the low branch!|to bend down|a bird|a swimmer|=>Under a low branch is the clue.
Which meaning of 'kind' is used?{nl}What kind of dog is that?|type|nice|gentle|=>What kind means what type.
Which meaning of 'kind' is used?{nl}Mia is a kind friend.|nice|type|large|=>Describes a friend.
A prefix or suffix can help you…|figure out the meaning of a word|find the author|spell every word|=>Word parts carry meaning.
What are 'multiple-meaning words'?|words with more than one meaning|words with no meaning|long words|=>Like bat, bark, and light.
What should you do first when you meet an unknown word?|use context clues|skip the page|guess the first letter|=>Look at the words around it.
A dictionary entry shows…|the meaning of a word|the author|the plot|=>Dictionaries give definitions.
Guide words at the top of a dictionary page tell you…|the first and last word on the page|the page number|the author|=>They help you find words.
In 'The cheetah is swift. It can run 70 miles per hour,' swift means…|fast|slow|tall|=>70 miles per hour is a clue.
In 'He was parched, so he gulped a big glass of water,' parched means…|very thirsty|very hungry|very sleepy|=>Gulping water is a clue.
In 'She giggled and grinned; she was delighted,' delighted means…|very pleased|angry|worried|=>Giggled and grinned are clues.
In 'The path was narrow, only wide enough for one person,' narrow means…|not wide|long|steep|=>Only wide enough for one person.
In 'The meal was scrumptious; I wanted seconds,' scrumptious means…|delicious|awful|cold|=>Wanting seconds means it tasted great.
`.split("\n").filter((x) => x.trim()));

  /* ---------------- fiction / story elements ---------------- */
  add(K("fiction"), `
Who are the characters in a story?|the people or animals in it|the place where it happens|the problem|=>Characters are who the story is about.
What is the setting of a story?|when and where it happens|who is in it|the lesson|=>Setting = time and place.
What is the plot?|the events in a story|the author's name|the title|=>The plot is what happens.
What is the problem (conflict) in a story?|the trouble the character must solve|the happy ending|the setting|=>Stories usually revolve around a problem.
What is the solution (resolution)?|how the problem is solved|the first event|the title|=>The solution fixes the problem.
What is the theme of a story?|the lesson or big idea|the first sentence|the setting|=>Theme = message.
What is the narrator?|the voice that tells the story|the author|the main character always|=>The narrator tells the story.
What does 'point of view' mean?|who is telling the story|where the story is set|the title|=>First or third person.
Which words show a story is told in first person?|I, me, my, we|he, she, they|you, your|=>First person uses I and me.
Which words show a story is told in third person?|he, she, they|I, me, my|we, us|=>Third person uses he, she, they.
Which is the beginning of a story?|introduces characters and setting|solves the problem|has the climax|=>The beginning sets the scene.
Which is the middle of a story?|the problem grows|the characters are introduced|the author is named|=>The middle builds the problem.
Which is the end of a story?|the problem is solved|the characters are introduced|the title is shown|=>The ending wraps up the story.
What is the climax of a story?|the most exciting part|the title|the setting|=>The turning point or highest tension.
What is dialogue?|characters talking|a description of the setting|the title|=>Dialogue is the characters' words.
Which punctuation marks show someone is speaking?|quotation marks|periods only|parentheses|=>"Hello," said Mia.
Which is an example of dialogue?|"Let's go!" said Ben.|Ben ran home.|The sun set.|=>Quotation marks show speech.
How can you tell how a character feels?|by their words and actions|by the title|by the page number|=>Authors show feelings through behavior.
How do the character's actions help you understand them?|they show what the character is like|they show the setting|they show the title|=>Actions reveal traits.
Which is a character trait?|brave|tall hat|happy day|=>Traits describe how a character acts.
A character who tells the truth even when it is hard is…|honest|lazy|greedy|=>Honest describes truthfulness.
A character who shares with others is…|generous|selfish|rude|=>Generous means giving.
A character who works hard and never gives up is…|determined|careless|bored|=>Determined means not giving up.
A character who is afraid to try new things is…|timid|bold|curious|=>Timid means shy and fearful.
What is a fable?|a short story that teaches a lesson, often with animals|a true story|a poem|=>Fables end with a moral.
What is a moral?|the lesson of a story|the setting|the villain|=>The moral is the message.
What is a folktale?|a story passed down by word of mouth|a news article|a science book|=>Folktales are traditional stories.
What is a fairy tale?|a make-believe story, often with magic|a true story|a biography|=>Magic and happy endings are common.
What is realistic fiction?|a made-up story that could really happen|a true story|a poem|=>Characters feel real.
What is fantasy?|a story with things that couldn't happen in real life|a true story|a recipe|=>Fantasy includes magic or talking animals.
What is a biography?|a true story about a person's life|a made-up story|a poem|=>Written by someone else.
What is an autobiography?|a true story a person writes about their own life|a made-up story|a play|=>Auto means self.
What is a myth?|an old story that explains nature or beliefs|a recipe|a news report|=>Myths explain why things happen.
What is a legend?|a story from the past about a hero, often partly true|a recipe|a weather report|=>Like Paul Bunyan or Robin Hood.
Which story is MOST likely a fantasy?|a dragon who bakes bread|a boy who rides the bus|a girl who plays soccer|=>Dragons baking bread couldn't happen.
Which story is MOST likely realistic fiction?|a girl who loses her lunch money|a cat who flies to the moon|a talking tree|=>Could happen in real life.
Which is a cause and effect in a story?|Because it rained, the game was canceled.|It was a sunny day.|The dog barked.|=>Cause → effect.
What is a prediction?|a guess about what will happen next|a summary|the theme|=>Use clues to predict.
What does it mean to 'make an inference'?|use clues and what you know to figure something out|copy the text|retell the story|=>Inference = clue + knowledge.
If a character is crying and holding a broken toy, you can infer they feel…|sad|excited|proud|=>Crying and broken signal sadness.
If a character is smiling and jumping up and down, you can infer they feel…|excited|bored|angry|=>Jumping and smiling mean excitement.
If a character slams a door and stomps away, you can infer they feel…|angry|calm|sleepy|=>Slamming shows anger.
If a character is sweating and biting their nails before a test, you can infer they feel…|nervous|proud|sleepy|=>Biting nails shows nervousness.
What is a summary?|a short retelling of the most important parts|every detail|a prediction|=>Summaries are brief.
What are 'story elements'?|characters, setting, problem, events, and solution|title and author only|dialogue only|=>The main parts of a story.
Which is NOT a story element?|table of contents|character|setting|=>Table of contents is a text feature of nonfiction.
How does the setting affect a story?|it can change what characters do and feel|it has no effect|it is only the title|=>Place and time shape events.
Which clue words show the setting is a long time ago?|castle, knights, horse and cart|laptop, phone|robot, spaceship|=>Those details point to the past.
What is flashback?|a part showing something that happened earlier|a prediction|an ending|=>Flashbacks go back in time.
What does 'The wind howled' use?|personification|a fact|a title|=>Wind can't really howl; it is given a human-like action.
In a story, what is a villain?|a character who causes problems|the narrator|the setting|=>Villains are antagonists.
The main character is also called the…|protagonist|villain|narrator|=>Protagonist = main character.
What is the purpose of a title?|to give a hint about the story|to show the end|to name the setting only|=>Titles give a clue to what's inside.
A story that begins 'Once upon a time' is most likely a…|fairy tale|news report|biography|=>Classic fairy tale opening.
What lesson does 'The Tortoise and the Hare' teach?|slow and steady wins the race|always run fast|never race|=>The tortoise wins by steady effort.
What lesson does 'The Boy Who Cried Wolf' teach?|liars are not believed even when telling the truth|wolves are friendly|never watch sheep|=>Lying loses trust.
What lesson does 'The Ant and the Grasshopper' teach?|work hard and prepare for the future|play all summer|never share|=>The ant prepared for winter.
What lesson does 'The Lion and the Mouse' teach?|even small friends can help|big animals are bad|never be kind|=>The mouse freed the lion.
Which is a good way to retell a story?|beginning, middle, and end in order|only the ending|only the characters' names|=>Retelling keeps events in order.
Which tells the problem in 'Mia lost her favorite stuffed rabbit and searched the whole house'?|Mia lost her rabbit|Mia found the rabbit|Mia has a house|=>The problem is that she lost it.
Which tells the solution in 'Mia found her rabbit under the couch'?|Mia found it under the couch|Mia lost it|Mia was sad|=>She solved the problem.
What is 'mood' in a story?|the feeling the story gives|the setting|the plot|=>Mood is the feeling readers get.
What does 'sequence' mean?|the order of events|the characters|the title|=>Sequence is order.
Which signal words show sequence?|first, next, then, finally|because, so|but, however|=>Time-order words.
Which signal words show cause and effect?|because, so, as a result|first, next|but, also|=>Cause-effect words.
Which signal words show comparing?|both, like, same, similar|first, then|because, so|=>Compare words.
Which signal words show contrasting?|but, however, unlike, different|both, same|first, next|=>Contrast words.
A story told in the first person might begin with…|'I woke up early on Saturday.'|'She woke up early.'|'They woke up early.'|=>I = first person.
`.split("\n").filter((x) => x.trim()));

  /* ---------------- poetry ---------------- */
  add(K("poetry"), `
What is a stanza?|a group of lines in a poem|a rhyme|a title|=>Stanzas are like paragraphs in a poem.
What is a line in a poem?|one row of words|a stanza|the title|=>Each row of text is a line.
What are rhyming words?|words that end with the same sound|words that start with the same sound|words that mean the same|=>cat and hat.
Which pair rhymes?|moon and spoon|moon and mine|sun and sand|=>moon/spoon end the same.
Which pair rhymes?|bear and chair|bear and ball|bee and bug|=>bear/chair.
Which pair rhymes?|light and night|light and left|lamp and lap|=>light/night.
Which pair rhymes?|snow and grow|snow and snap|rain and rock|=>snow/grow.
Which pair rhymes?|play and day|play and plate|ring and rang|=>play/day.
Which pair does NOT rhyme?|tree and tray|tree and bee|sky and fly|=>tree and tray don't end the same.
What is a rhyme scheme?|the pattern of rhyming at the ends of lines|the title|the number of stanzas|=>AABB and ABAB are rhyme schemes.
In a poem where lines 1 and 2 rhyme and lines 3 and 4 rhyme, the pattern is…|AABB|ABAB|ABCD|=>Pairs of rhymes.
In a poem where lines 1 and 3 rhyme and lines 2 and 4 rhyme, the pattern is…|ABAB|AABB|AAAA|=>Alternating rhymes.
What is rhythm?|the beat of a poem|the rhyme|the title|=>Rhythm is the pattern of beats.
What is alliteration?|words near each other that start with the same sound|words that rhyme|words that mean the same|=>Silly snakes slither.
Which sentence has alliteration?|Peter picked a peck of pickled peppers.|The dog ran home.|It is sunny today.|=>Repeated p sound.
Which sentence has alliteration?|Silly Sally sells seashells.|The cat sat on the mat.|I like pizza.|=>Repeated s sound.
What is a simile?|a comparison using 'like' or 'as'|a comparison without like or as|a rhyme|=>As busy as a bee.
Which is a simile?|The moon is like a silver coin.|The moon is a silver coin.|The moon is bright.|=>Uses like.
Which is a simile?|She was as quiet as a mouse.|She was a mouse.|She was quiet.|=>Uses as...as.
What is a metaphor?|a comparison that says one thing IS another|a comparison using like|a rhyme|=>The classroom was a zoo.
Which is a metaphor?|The snow is a white blanket.|The snow is like a blanket.|The snow is cold.|=>Says it IS a blanket.
Which is a metaphor?|Time is a thief.|Time is like a river.|Time is passing.|=>Time IS a thief.
What is personification?|giving human traits to something not human|a comparison with like|a rhyme|=>The sun smiled down.
Which is personification?|The wind whispered secrets.|The wind blew hard.|The wind is cold.|=>Wind can't whisper secrets.
Which is personification?|The flowers danced in the breeze.|The flowers are red.|The flowers grew.|=>Flowers can't dance.
What is onomatopoeia?|a word that sounds like what it means|a word with a prefix|a rhyme|=>buzz, boom, splash.
Which word is onomatopoeia?|sizzle|table|happy|=>Sizzle sounds like frying.
Which word is onomatopoeia?|thud|bread|quiet|=>Thud sounds like a heavy drop.
Which word is onomatopoeia?|meow|chair|tall|=>Meow sounds like a cat.
Which word is onomatopoeia?|crunch|window|mountain|=>Crunch sounds like biting.
What is imagery?|words that create pictures in your mind|a rhyme|a title|=>Imagery appeals to the senses.
Which line uses imagery?|The golden sun melted into the orange sea.|It was a day.|I am here.|=>Vivid sights.
Which sense does 'the sweet smell of cinnamon' appeal to?|smell|sight|hearing|=>Cinnamon smells.
Which sense does 'the crackle of a campfire' appeal to?|hearing|taste|touch|=>Crackle is a sound.
Which sense does 'the rough bark of the tree' appeal to?|touch|taste|smell|=>Rough is a texture.
What is repetition in a poem?|using a word or phrase more than once|a rhyme|a title|=>Repetition adds emphasis.
What is a haiku?|a three-line poem with 5, 7, and 5 syllables|a rhyming poem|a long poem|=>Haiku is Japanese in origin.
How many syllables are in the first line of a haiku?|5|7|3|=>5-7-5.
How many lines are in a haiku?|3|4|5|=>Three lines.
What is a limerick?|a funny five-line poem|a sad poem|a sentence|=>Limericks are silly.
What is free verse?|a poem that does not have to rhyme|a poem with a strict rhyme|a story|=>Free verse has no pattern.
What is a narrative poem?|a poem that tells a story|a poem about nature|a short poem|=>Narrative poems have characters and events.
What is a poet?|a person who writes poems|a person who reads|a person who draws|=>Poets write poetry.
What is the speaker in a poem?|the voice that talks in the poem|the poet|the title|=>The speaker may not be the poet.
What is the theme of a poem?|the big idea or message|the rhyme|the title|=>Theme = message.
Which is an example of a title?|Rain Song|Line 1|Stanza 2|=>Titles name the poem.
Poems often use short lines to…|create rhythm and focus|make the poem longer|hide the meaning|=>Line breaks shape how we read.
Why do poets use similes?|to help readers picture things|to confuse readers|to shorten poems|=>Comparisons paint pictures.
A poem about the seasons is most likely about…|nature|math|computers|=>Seasons are nature.
How can you tell a poem from a story?|poems use lines and stanzas|poems have chapters|poems have paragraphs|=>Poems are written in lines.
Which of these is a sensory word?|soft|the|and|=>Soft appeals to touch.
What does 'The stars winked at me' mean?|the stars twinkled|the stars said hello|the stars were blinking eyes|=>Personification: stars twinkle.
'The snow was a soft blanket over the town' is an example of…|metaphor|simile|alliteration|=>Says the snow IS a blanket.
'The stars sparkled like diamonds' is an example of…|simile|metaphor|onomatopoeia|=>Uses like.
'Bees buzzed busily' is an example of…|alliteration|simile|personification|=>Repeated b.
'Boom! Crash! Splash!' is an example of…|onomatopoeia|simile|metaphor|=>Sound words.
Which sounds like the voice of a funny poem?|There once was a cat in a hat...|The nation was founded in 1776.|Add two and two.|=>Playful rhyme.
What is a refrain?|a line repeated in a poem or song|the title|the last line only|=>A refrain repeats.
What do we call the last word in lines that rhyme?|end rhyme|first rhyme|title rhyme|=>Rhyme at the line end.
`.split("\n").filter((x) => x.trim()));

  /* ---------------- nonfiction & text features ---------------- */
  add(K("nonfiction"), `
What is a text feature?|a part of a book that helps readers find or understand information|a character|a theme|=>Examples: headings, captions.
What does a table of contents show?|chapter titles and page numbers|the author|a glossary|=>It's at the front.
What does an index show?|an alphabetical list of topics and page numbers|the chapters|the author|=>It's at the back.
What does a glossary show?|important words and their meanings|page numbers|the author|=>Found at the back.
What is a heading?|a title for a section|a picture|a caption|=>Headings label sections.
What is a subheading?|a smaller heading under a main heading|a title page|a glossary|=>Subheadings break sections down.
What is a caption?|words under a picture that explain it|a title|a chapter|=>Captions explain photos.
What is a diagram?|a labeled drawing that shows parts or steps|a story|a poem|=>Diagrams show how things work.
What is a label?|a word or phrase that names a part of a picture|a heading|a caption|=>Labels point to parts.
What is a map?|a picture that shows places|a poem|a list|=>Maps show locations.
What is a map key (legend)?|explains the symbols on a map|a title|a compass|=>The key explains symbols.
What is a compass rose?|shows directions on a map|shows scale|a symbol of the author|=>N, S, E, W.
What is a timeline?|shows events in the order they happened|a map|a poem|=>Timelines show history in order.
What is a chart or table?|information organized in rows and columns|a story|a poem|=>Charts organize facts.
What is a graph?|a picture that compares numbers|a story|a glossary|=>Graphs show data.
What does bold print show?|an important word|the author|a heading only|=>Bold words are often defined in a glossary.
What does italic print often show?|a book title or a word to stress|a heading|a list|=>Italics add emphasis.
What is a sidebar?|a box with extra facts|the title|the table of contents|=>Sidebars add details.
What is a title page?|shows the book's title and author|shows the chapters|shows the index|=>The first page.
What is the purpose of a nonfiction book?|to give facts|to tell an invented story|to rhyme|=>Nonfiction informs.
Which is a nonfiction book?|a book about sharks|a book about a talking rabbit|a fairy tale|=>Facts about real sharks.
Which is a fiction book?|a story about a talking dog|a book about volcanoes|an encyclopedia|=>Made-up story.
What is a fact?|something that can be proven true|what someone thinks|a feeling|=>Facts can be checked.
What is an opinion?|what someone thinks or feels|something proven|a number|=>Opinions vary.
Which is a fact?|A fox is a mammal.|Foxes are the cutest animals.|Foxes should be pets.|=>Can be proven.
Which is an opinion?|Dogs are the best pets.|Dogs are mammals.|Dogs have four legs.|=>'Best' is a feeling.
Which is a fact?|Water freezes at 32°F.|Winter is the best season.|Ice cream is yummy.|=>Measurable.
Which is an opinion?|Math is the most fun subject.|There are 7 days in a week.|Spiders have eight legs.|=>'Most fun' is a feeling.
Which word signals an opinion?|best|three|measured|=>Words like best, worst, and favorite signal opinion.
Which word signals an opinion?|should|has|weighs|=>'Should' tells what someone thinks.
What is the main idea of a paragraph?|what it is mostly about|a detail|the title|=>The big idea.
What are supporting details?|facts that explain the main idea|the main idea|the title|=>Details back up the main idea.
Where do you usually find the main idea?|in the first or last sentence|in the glossary|in the index|=>Often the topic sentence.
Which text feature would help you find the meaning of 'habitat'?|glossary|index|map|=>Glossary defines words.
Which text feature would help you find which page talks about 'whales'?|index|glossary|diagram|=>Index lists topics by page.
Which text feature would help you see how a plant grows?|diagram|caption|title page|=>Diagrams show steps.
Which text feature would help you find where a country is?|map|glossary|index|=>Maps show locations.
Which text feature would help you see when events happened?|timeline|diagram|index|=>Timelines show dates.
Which text feature would help you know what a photo shows?|caption|table of contents|glossary|=>Captions explain photos.
Which text feature would help you find chapter 3?|table of contents|glossary|index|=>The table of contents lists chapters.
Which text feature tells you what a section is about before you read?|heading|index|caption|=>Headings preview sections.
What does the author's purpose mean?|why the author wrote the text|the setting|the plot|=>To inform, entertain, or persuade.
If an author writes to teach you about volcanoes, the purpose is to…|inform|entertain|persuade|=>Teaching = inform.
If an author writes to make you laugh, the purpose is to…|entertain|inform|persuade|=>Funny stories entertain.
If an author writes to convince you to recycle, the purpose is to…|persuade|entertain|inform|=>Persuade changes minds.
What is a topic?|what the text is about|an opinion|a character|=>Subject of the text.
What is a how-to text?|steps that teach you to do something|a poem|a story|=>Directions.
Which words signal steps in a how-to?|first, next, then, last|but, however|because, so|=>Sequence words.
What is a biography?|a true story about a person's life|a made-up story|a poem|=>Real person.
What is a primary source?|first-hand information, like a diary or photo from the time|a textbook|an encyclopedia|=>Created by someone who was there.
What is an encyclopedia?|a reference book with facts on many topics|a story|a poem|=>Reference source.
What is an almanac?|a book with yearly facts and data|a story|a poem|=>Facts like weather and records.
Which is a good reason to use an index?|to find a specific topic quickly|to read the whole book|to learn the author|=>Look up page numbers.
Skimming means…|reading quickly for the main ideas|reading slowly|not reading|=>Look at headings and key words.
Scanning means…|looking for a specific word or fact|reading every word|drawing|=>Scan for key words.
What does it mean to 'paraphrase'?|to restate in your own words|to copy|to skip|=>Say it differently.
What does 'cause' mean?|why something happens|what happens|a graph|=>Cause = why.
What does 'effect' mean?|what happens as a result|why it happens|a diagram|=>Effect = result.
In 'Because the sun heated the water, it evaporated,' what is the cause?|the sun heated the water|it evaporated|the water|=>The heat caused evaporation.
In 'It rained all day, so the field was muddy,' what is the effect?|the field was muddy|it rained all day|the day|=>Mud is the result.
Compare means to tell how things are…|alike|different|the same size|=>Compare = alike (and sometimes different).
Contrast means to tell how things are…|different|alike|the same|=>Contrast = different.
A Venn diagram is used to…|compare and contrast|show the weather|tell a story|=>Overlapping circles.
`.split("\n").filter((x) => x.trim()));

  /* ---------------- main idea & summarizing ---------------- */
  (function () {
    const paras = [
      ["Honeybees live in hives. A hive may hold up to 50,000 bees. Each bee has a job. Some collect nectar. Some guard the hive. The queen lays the eggs.", "Bees in a hive each have a job.", ["Bees are insects.", "Bees make honey in the winter.", "The queen is the largest bee."], "All the details are about the jobs bees do in a hive."],
      ["Penguins cannot fly, but they are great swimmers. Their wings work like flippers. They glide through the water to catch fish. Their smooth feathers keep them dry and warm.", "Penguins are built for swimming.", ["Penguins can fly.", "Penguins live in forests.", "Penguins eat berries."], "The details are about how penguins swim."],
      ["Recycling helps our planet. It saves trees. It keeps trash out of landfills. It also saves energy. We can all recycle paper, glass, and cans.", "Recycling is good for the planet.", ["Trees are tall.", "Landfills are big.", "Only kids can recycle."], "Each detail tells a way recycling helps."],
      ["Frogs begin life as eggs. The eggs hatch into tadpoles that live in water. Tadpoles grow legs and lose their tails. Finally, they become adult frogs that can live on land.", "A frog changes as it grows.", ["Frogs live on land only.", "Tadpoles are fish.", "Frogs lay one egg."], "Each detail describes a stage in a frog's life."],
      ["Mount Everest is the tallest mountain in the world. It is about 29,000 feet high. Climbers need special gear and oxygen to reach the top. The weather there is freezing and windy.", "Mount Everest is very tall and hard to climb.", ["Climbing is easy.", "The weather is warm.", "Mountains are made of ice."], "Height, gear, and weather are the details."],
      ["A good night's sleep helps kids learn. Sleep gives the brain time to rest. It also helps kids remember what they studied. Kids who sleep well feel happier at school.", "Sleep helps kids learn and feel good.", ["Kids should stay up late.", "School starts early.", "Brains are heavy."], "Details show how sleep helps learning."],
      ["The Sahara is the largest hot desert in the world. It gets very little rain. Days are scorching hot, but nights can be chilly. Few plants and animals can live there.", "The Sahara is a hot, dry desert.", ["Deserts are cold.", "The Sahara has many lakes.", "Many animals live in the Sahara."], "The details describe its heat and dryness."],
      ["Dolphins are smart animals. They can learn tricks. They use clicks and whistles to talk to each other. Some dolphins even use tools, like sponges, to protect their noses.", "Dolphins are smart animals.", ["Dolphins are fish.", "Dolphins live on land.", "Dolphins are small."], "Tricks, talking, and tools show intelligence."],
      ["Washing your hands stops germs from spreading. Wash with soap for at least 20 seconds. Rinse well and dry with a clean towel. Do this before eating and after using the restroom.", "Washing hands properly stops germs.", ["Soap is blue.", "Towels are soft.", "Germs are big."], "The details tell how and when to wash."],
      ["Ants work together. They carry food to the nest in lines. They build tunnels as a team. If the nest is in danger, they all help protect it.", "Ants work as a team.", ["Ants are red.", "Ants live in water.", "Ants work alone."], "Each detail shows ants working together."],
      ["The moon changes shape in the sky. Sometimes it looks like a thin curve. A few days later it looks like a half circle. At the full moon, it looks like a bright round ball.", "The moon appears to change shape.", ["The moon is made of cheese.", "The moon is very hot.", "The moon makes its own light."], "The details describe different shapes."],
      ["Maria wanted to play the piano. She practiced every day after school. At first, she made many mistakes. After a few months, she played a song for her family.", "Practice helps Maria get better at piano.", ["Maria hates music.", "Maria is a teacher.", "Maria plays soccer."], "Her daily practice led to success."]
    ];
    const out = [];
    paras.push(
      ["Owls hunt at night. Their large eyes help them see in the dark. Soft feathers let them fly without a sound. Sharp claws catch mice and other small animals.", "Owls are well suited to hunting at night.", ["Owls sleep all night.", "Owls eat only plants.", "Owls cannot see."], "Each detail names a feature that helps owls hunt."],
      ["Roots do important jobs for a plant. They hold the plant in the soil. They take in water and minerals. Some roots even store food for the plant.", "Roots have important jobs for plants.", ["Roots are the tallest part.", "Plants grow without roots.", "Roots are green leaves."], "The details describe what roots do."],
      ["Our school has a recycling program. Each classroom has a blue bin for paper. The cafeteria has bins for cans and bottles. Students take turns carrying the bins to the big containers outside.", "Our school recycles paper, cans, and bottles.", ["Our school has no bins.", "Blue is a pretty color.", "Students never help."], "The details show how the school recycles."],
      ["Camels are made for the desert. Their humps store fat for energy. Long eyelashes keep out sand. Wide feet keep them from sinking into the dunes.", "Camels have body parts that help them live in the desert.", ["Camels live at the North Pole.", "Camels cannot walk on sand.", "Camels need lots of water every day."], "The details are about desert adaptations."],
      ["Lightning is a giant spark of electricity. It happens when electric charges build up in storm clouds. The heat from lightning makes the air expand quickly, which causes thunder.", "Lightning is a spark of electricity that comes with thunder.", ["Thunder happens without lightning.", "Lightning is cold.", "Clouds are made of rocks."], "The details explain what lightning is and how thunder happens."],
      ["Rosa Parks was a brave woman. In 1955 she refused to give up her bus seat. Her action helped start a movement for fair treatment. She is remembered as a hero of the civil rights movement.", "Rosa Parks bravely helped start a movement for fair treatment.", ["Rosa Parks was a bus driver.", "Rosa Parks lived long ago in Rome.", "Rosa Parks never spoke up."], "The details show her courage and its effect."],
      ["Earthworms are helpful to gardens. They dig tunnels that let air and water reach plant roots. Their waste adds nutrients to the soil.", "Earthworms help soil and plants.", ["Earthworms are insects.", "Earthworms hurt gardens.", "Earthworms live in trees."], "Tunnels and waste both help the soil."],
      ["Many animals sleep through the winter. Bears find a den and rest for months. Frogs bury themselves in mud. Some bats hang in caves until spring.", "Many animals sleep through the winter.", ["Bears are the biggest animals.", "Frogs live in trees.", "Bats are birds."], "Each detail is an animal that hibernates."],
      ["Libraries offer more than books. You can borrow movies and music. Many libraries have computers for kids. Some host story time and clubs.", "Libraries offer many things besides books.", ["Libraries only have books.", "Libraries are very noisy.", "Libraries are always closed."], "The details list other things libraries have."],
      ["Wind can be useful. It spins turbines that make electricity. It fills sails so boats can move. It helps seeds travel to new places.", "Wind has many useful jobs.", ["Wind is always dangerous.", "Wind is a type of rock.", "Wind only blows in summer."], "Each detail is a use for wind."],
      ["Learning to ride a bike takes time. At first you may wobble and fall. With practice, your balance gets better. Soon you will be riding without help.", "Learning to ride a bike takes practice.", ["Bikes are very fast.", "Falling never happens.", "Bikes have no wheels."], "The details show the steps of getting better."],
      ["The Amazon rainforest is full of life. It is home to millions of kinds of insects. Colorful birds and monkeys live in its tall trees. It also has many kinds of plants found nowhere else.", "The Amazon rainforest is home to many kinds of living things.", ["The Amazon is a desert.", "The Amazon has no animals.", "The Amazon is a city."], "Insects, birds, monkeys, and plants all support the main idea."]
    );
    const firstS = (p) => p.split(". ")[0] + ".";
    paras.forEach(([p, main, wrongs, why], pi) => {
      const sents = p.split(". ").map((x, i, a) => (i < a.length - 1 && !x.endsWith(".") ? x + "." : x));
      out.push(line(`Read the paragraph.{nl}${p}{nl}What is the main idea?`, main, wrongs, why));
      const detail = sents[1];
      const otherFirsts = paras.filter((_, j) => j !== pi).map((x) => firstS(x[0]));
      if (detail) out.push(line(`Read the paragraph.{nl}${p}{nl}Which sentence from the paragraph is a detail that supports the main idea?`, detail, pickK(otherFirsts, 3, "dt" + pi), "This sentence is in the paragraph and gives more information."));
    });
    out.push(
      "What is a main idea?|what the text is mostly about|a small detail|the title|=>The big idea.",
      "What are key details?|the important facts that support the main idea|the title|the author|=>Details back up the main idea.",
      "What is a summary?|a short retelling in your own words|a copy of the text|a list of every detail|=>Summaries are short.",
      "A good summary includes…|the most important ideas|every small detail|your opinion|=>Only key ideas.",
      "A good summary does NOT include…|small unimportant details|the main idea|key events|=>Leave out small details.",
      "How is a main idea different from a detail?|The main idea is the big point; details support it.|They are the same.|Details are always longer.|=>Main idea = big; details = support.",
      "Where might you find a main idea in a paragraph?|first sentence|only in the middle|never|=>Often at the beginning or end.",
      "What is a topic sentence?|a sentence that tells the main idea of a paragraph|the last sentence|a question|=>It introduces the paragraph.",
      "What is a concluding sentence?|the last sentence that wraps up a paragraph|the first sentence|a detail|=>It ends the paragraph.",
      "Which helps you find the main idea?|ask 'What is this mostly about?'|count the words|look at the page number|=>Think about the whole paragraph.",
      "To summarize a story, you should tell…|who, what, where, and the main events|only the ending|only the beginning|=>Include the key parts.",
      "To summarize nonfiction, you should…|state the main idea and a few key facts|copy the heading|add your own opinion|=>Short and factual.",
      "How many sentences should a short summary usually have?|1 to 3|10 or more|0|=>Short and to the point.",
      "Which word signals a conclusion?|in conclusion|first|for example|=>It wraps up.",
      "Which phrase signals an example?|for example|in conclusion|however|=>It introduces a detail.",
      "Which is a main idea?|Whales are the largest animals on Earth.|Whales have flippers.|A blue whale is 100 feet long.|=>The first covers the whole topic.",
      "Which is a main idea?|Fall is a busy season on the farm.|Farmers pick pumpkins.|Corn is harvested.|=>The first covers the other sentences.",
      "Which is a detail?|Frogs lay eggs in water.|Frogs have a life cycle.|Frogs are amphibians.|=>It's one specific fact.",
      "Which title best fits a paragraph about how plants make food?|How Plants Make Food|My Favorite Color|Animals at the Zoo|=>The title matches the topic.",
      "A paragraph describes the lunar phases. Which title fits best?|Phases of the Moon|Desert Plants|How Bridges Are Built|=>Matches the topic."
    );
    add(K("main-idea"), out);
  })();

  /* ---------------- writing ---------------- */
  add(K("writing"), `
What are the steps of the writing process?|prewrite, draft, revise, edit, publish|draft, publish, edit|publish, draft, prewrite|=>The standard order.
What do you do when you prewrite?|plan and brainstorm ideas|fix spelling|share your writing|=>Prewriting happens first.
What do you do when you draft?|write your ideas down|correct spelling|publish|=>Get ideas on paper.
What do you do when you revise?|improve ideas, words, and organization|only fix spelling|publish|=>Revising makes the writing better.
What do you do when you edit?|fix spelling, grammar, and punctuation|brainstorm|draft|=>Edit for conventions.
What do you do when you publish?|share your final writing|brainstorm|draft|=>Final step.
Which graphic organizer helps you plan with a main idea and details?|web|Venn diagram|timeline|=>A web shows ideas branching out.
Which graphic organizer helps compare two things?|Venn diagram|web|chart of steps|=>Overlap shows how they're alike.
What is a topic sentence?|a sentence that tells what the paragraph is about|the last sentence|a question|=>First sentence of a paragraph.
What are supporting sentences?|sentences that give details about the topic|the title|the end|=>They explain.
What is a concluding sentence?|a sentence that finishes the paragraph|the first sentence|a detail|=>It wraps up.
How many sentences does a good paragraph usually have?|at least 3|1|0|=>Topic, details, conclusion.
How do you show the start of a new paragraph?|indent the first line|use all capitals|skip a word|=>Indent or start a new line.
Which sentence is a good topic sentence about dogs?|Dogs make wonderful pets.|My dog is brown.|Dogs.|=>Introduces the main idea.
Which sentence is a good topic sentence about school?|School is a place to learn new things.|Math is hard.|I walk to school.|=>Broad enough for details.
What is a transition word?|a word that connects ideas|a verb|a noun|=>first, next, also.
Which is a transition word?|however|apple|yellow|=>It connects ideas.
Which is a transition word?|finally|chair|slowly|=>It shows order.
Which transition word shows order?|next|but|because|=>Next is time-order.
Which transition word adds information?|also|first|finally|=>Also adds more.
Which transition word shows a contrast?|but|and|so|=>But shows difference.
Which transition word shows a cause?|because|then|first|=>Because explains why.
What is narrative writing?|a story|an opinion|a set of facts|=>Narratives tell events.
What is informative writing?|writing that teaches facts|a story|a poem|=>Informative = information.
What is opinion writing?|writing that tells what you think and why|a story|a list of facts|=>Opinions need reasons.
What should an opinion paragraph include?|your opinion and reasons|only facts about someone else|only a title|=>State and support.
Which opinion statement is stronger?|Our school should have a garden because it teaches us about plants.|Gardens are okay.|I like it.|=>A reason is given.
What are the parts of a friendly letter?|date, greeting, body, closing, signature|title, author|chapters|=>Letter parts.
Which is a correct greeting?|Dear Grandma,|dear grandma|Dear Grandma.|=>Capital D and a comma.
Which is a correct closing?|Your friend,|your Friend,|Your friend.|=>Capital first word, comma.
What is a sentence?|a complete thought with a subject and verb|a word|a paragraph|=>Complete thought.
Which is a complete sentence?|The dog barked loudly.|The dog.|Barked loudly.|=>Subject and verb.
Which is a sentence fragment?|Under the bed.|The cat slept under the bed.|I ran fast.|=>No subject or verb.
What is a run-on sentence?|two sentences joined without correct punctuation|a short sentence|a fragment|=>Needs punctuation or a conjunction.
Which is a run-on?|I like pizza it is yummy.|I like pizza.|Pizza is yummy.|=>Needs a comma and 'and' or a period.
What are the four kinds of sentences?|statement, question, command, exclamation|noun, verb, adjective, adverb|title, heading|=>Declarative, interrogative, imperative, exclamatory.
Which sentence is a question?|What time is it?|It is late.|Look at the time!|=>Ends with a question mark.
Which sentence is a command?|Please close the door.|I closed the door.|Did you close the door?|=>Gives an order.
Which sentence is an exclamation?|What a great day!|It is a great day.|Is it a great day?|=>Shows strong feeling.
How should a sentence begin?|with a capital letter|with a lowercase letter|with a comma|=>Capital first.
How should a statement end?|with a period|with a question mark|with a comma|=>Telling sentences end with periods.
How should a question end?|with a question mark|with a period|with a comma|=>Asking sentences end with ?.
What does 'revise' mean?|to make writing better by changing ideas or words|to fix commas|to throw away|=>Re-vision means to see again.
Which is revising?|Adding details to make a sentence stronger|Fixing 'teh' to 'the'|Printing the paper|=>Revising improves ideas.
Which is editing?|Fixing a missing capital letter|Adding a new paragraph|Thinking of a topic|=>Editing fixes conventions.
Which word is a stronger choice than 'good'?|wonderful|nice|ok|=>Strong words add interest.
Which sentence uses more vivid details?|The huge orange sun sank slowly behind the hills.|The sun went down.|It was dark.|=>Vivid words paint a picture.
What are 'details'?|facts and descriptions that tell more|the title|the end|=>Details enrich writing.
A good title…|tells what the writing is about|is always long|is a whole sentence|=>Short and fitting.
Which is the BEST beginning for a story?|One stormy night, a strange sound came from the attic.|The end.|I like cats.|=>Sets a scene with a hook.
A good ending for a story…|solves the problem|introduces a new problem|has no ending|=>Resolve the story.
What is a 'hook'?|an interesting beginning that grabs the reader|the ending|the title|=>It draws readers in.
Which is a good hook?|Have you ever seen a dog that could talk?|The end.|I wrote this today.|=>A question grabs attention.
Which sentence has a spelling error?|I went to the libary.|I went to the library.|I walked to the library.|=>library is spelled l-i-b-r-a-r-y.
Which sentence has correct capitalization?|Mia lives in Richmond, Virginia.|mia lives in richmond, virginia.|Mia lives in richmond virginia.|=>Names of people and places are capitalized.
Which sentence has correct punctuation?|We bought apples, pears, and grapes.|We bought apples pears and grapes.|We bought, apples pears and grapes.|=>Commas separate items in a list.
When you write a report, you should use…|your own words|exactly the book's words|a copy of a friend's|=>Don't copy; paraphrase.
What does 'cite your sources' mean?|tell where you got your information|copy the author|add a picture|=>Credit your sources.
`.split("\n").filter((x) => x.trim()));

  /* ---------------- grammar & conventions ---------------- */
  (function () {
    const nouns = W("dog city teacher book lake mountain pizza library doctor river window garden ocean pencil farmer school bridge forest");
    const verbs = W("jump swim sing laugh write climb think whisper build paint dance shout giggle sleep wander");
    const adjs = W("tall shiny soft bright tiny spicy enormous cold sweet round brave silent fluffy rough ancient");
    const advs = W("quickly slowly loudly softly carefully happily gently bravely eagerly quietly kindly cheerfully");
    const out = [];
    const lists = { noun: nouns, verb: verbs, adjective: adjs, adverb: advs };
    Object.keys(lists).forEach((k) => lists[k].forEach((w) => {
      const others = Object.keys(lists).filter((x) => x !== k);
      out.push(line(`What part of speech is '${w}'?`, k, others, `${w} is a ${k}.`));
      out.push(line(`Which word is ${/^[aeiou]/.test(k) ? "an" : "a"} ${k}?`, w, others.map((o) => pickK(lists[o], 1, "g" + w + o)[0]), `${w} is a ${k}.`));
    }));
    const irr = [["go", "went"], ["eat", "ate"], ["run", "ran"], ["see", "saw"], ["come", "came"], ["give", "gave"], ["take", "took"], ["write", "wrote"], ["swim", "swam"], ["sing", "sang"], ["drink", "drank"], ["ride", "rode"], ["fly", "flew"], ["draw", "drew"], ["grow", "grew"], ["know", "knew"], ["throw", "threw"], ["break", "broke"], ["speak", "spoke"], ["begin", "began"], ["buy", "bought"], ["bring", "brought"], ["catch", "caught"], ["teach", "taught"], ["think", "thought"], ["sit", "sat"], ["make", "made"], ["find", "found"], ["tell", "told"], ["feel", "felt"], ["hear", "heard"], ["have", "had"], ["say", "said"], ["sleep", "slept"], ["keep", "kept"], ["leave", "left"], ["build", "built"], ["win", "won"]];
    irr.forEach(([b, p]) => {
      const bad = [b.replace(/e$/, "") + "ed", b + "ed", b + "s"].filter((x) => x !== p);
      out.push(line(`What is the past tense of '${b}'?`, p, [...new Set(bad)].concat(pickK(irr.map((x) => x[1]), 2, "ir" + b, [p])).slice(0, 3), `The past tense of ${b} is ${p}.`));
      out.push(line(`Which sentence is correct?`, `Yesterday, I ${p} it.`, [`Yesterday, I ${b} it.`, `Yesterday, I ${b}ed it.`].filter((x, i, a) => a.indexOf(x) === i && x !== `Yesterday, I ${p} it.`), `Use the past form for something that already happened.`));
    });
    const reg = W("walk jump play help want clean kick open paint look call jump cook").map((w) => [w, w + "ed"]);
    reg.forEach(([b, p]) => out.push(line(`What is the past tense of '${b}'?`, p, [b + "s", b + "ing", b], `Add -ed to ${b}.`)));
    const con = [["do not", "don't"], ["can not", "can't"], ["is not", "isn't"], ["I am", "I'm"], ["you are", "you're"], ["they are", "they're"], ["we are", "we're"], ["it is", "it's"], ["he is", "he's"], ["she is", "she's"], ["I will", "I'll"], ["will not", "won't"], ["did not", "didn't"], ["was not", "wasn't"], ["would not", "wouldn't"], ["could not", "couldn't"], ["let us", "let's"], ["that is", "that's"], ["there is", "there's"], ["I have", "I've"], ["we have", "we've"], ["are not", "aren't"], ["does not", "doesn't"], ["has not", "hasn't"], ["have not", "haven't"], ["we will", "we'll"], ["you will", "you'll"]];
    con.forEach(([a, c]) => {
      const bad = [c.replace("'", ""), c.replace(/'(.)/, "$1'"), c.replace(/'.*/, "") + "'"].filter((x) => x !== c);
      out.push(line(`What is the contraction for '${a}'?`, c, [...new Set(bad)].slice(0, 3), `${a} = ${c}.`));
      out.push(line(`What two words make '${c}'?`, a, pickK(con.map((x) => x[0]), 3, "cn" + c, [a]), `${c} = ${a}.`));
    });
    const poss = [["dog", "bone"], ["cat", "toy"], ["girl", "hat"], ["boy", "bike"], ["teacher", "desk"], ["bird", "nest"], ["baby", "bottle"], ["farmer", "barn"], ["student", "backpack"], ["mom", "car"]];
    poss.forEach(([n, o]) => {
      out.push(line(`Which phrase shows that the ${o} belongs to the ${n}?`, `the ${n}'s ${o}`, [`the ${n}s ${o}`, `the ${n}s' ${o}`, `the ${n}'s' ${o}`], `One owner: add 's.`));
      out.push(line(`Which phrase shows that the ${o}s belong to two ${n}s?`, `the ${n}s' ${o}s`, [`the ${n}'s ${o}s`, `the ${n}s ${o}s`, `the ${n}'s' ${o}s`], `Plural owners ending in s: add just an apostrophe.`));
    });
    const hom = [
      ["I can ___ the birds singing.", "hear", "here"], ["Come over ___ and sit down.", "here", "hear"], ["The dog wagged ___ tail.", "its", "it's"], ["___ raining outside.", "It's", "Its"],
      ["___ going to be a great day.", "It's", "Its"], ["Is this ___ coat?", "your", "you're"], ["___ my best friend.", "You're", "Your"], ["___ going to the park with us.", "They're", "There"],
      ["Put the books over ___.", "there", "their"], ["The kids packed ___ lunches.", "their", "there"], ["I have ___ brothers.", "two", "too"], ["Can I come ___?", "too", "to"],
      ["I am going ___ the store.", "to", "too"], ["Please ___ a note.", "write", "right"], ["Turn ___ at the corner.", "right", "write"], ["I ___ the answer.", "knew", "new"], ["I got a ___ bike.", "new", "knew"],
      ["I ___ a boat on the ___.", "see", "sea"], ["We swam in the ___.", "sea", "see"], ["I will ___ you after school.", "meet", "meat"], ["We ate ___ for dinner.", "meat", "meet"],
      ["The ___ is shining.", "sun", "son"], ["Her ___ plays soccer.", "son", "sun"], ["I have ___ idea.", "no", "know"], ["Do you ___ the answer?", "know", "no"],
      ["A ___ is 60 minutes.", "hour", "our"], ["We love ___ school.", "our", "hour"], ["The ___ ran fast.", "deer", "dear"], ["___ Grandma, thank you!", "Dear", "Deer"],
      ["I ___ lunch at noon.", "ate", "eight"], ["I have ___ crayons.", "eight", "ate"], ["She ___ the race.", "won", "one"], ["I have ___ sister.", "one", "won"],
      ["I ___ that book last week.", "read", "red"], ["The apple is ___.", "red", "read"], ["Please ___ the bell.", "ring", "wring"], ["The ___ wagged.", "tail", "tale"], ["Read me a ___.", "tale", "tail"],
      ["We flew on a ___.", "plane", "plain"], ["The ___ bear lives in the woods.", "brown", "browne"], ["The ___ is blue.", "sky", "skye"]
    ].filter((x) => !/browne|skye|wring|plane/.test(x.join("")));
    hom.forEach(([s, r, w]) => out.push(line(`Choose the correct word.{nl}${s}`, r, [w], `${r} is the word that fits.`)));
    out.push(
      "What is a noun?|a person, place, thing, or idea|an action|a describing word|=>Nouns name.",
      "What is a verb?|an action word|a person|a describing word|=>Verbs show action or being.",
      "What is an adjective?|a word that describes a noun|an action word|a person|=>Tall tree.",
      "What is an adverb?|a word that describes a verb|a person|a place|=>Ran quickly.",
      "What is a proper noun?|the name of a specific person, place, or thing|any noun|a verb|=>Capitalized.",
      "Which is a proper noun?|Virginia|state|city|=>Specific name.",
      "Which is a common noun?|city|Richmond|Monday|=>Not a specific name.",
      "Which word should be capitalized?|Monday|today|week|=>Days of the week are capitalized.",
      "Which word should be capitalized?|April|spring|month|=>Months are capitalized.",
      "Which word should be capitalized?|Thanksgiving|holiday|season|=>Holidays are capitalized.",
      "Which sentence uses the correct verb?|She runs fast.|She run fast.|She running fast.|=>Singular subjects need runs.",
      "Which sentence uses the correct verb?|They play outside.|They plays outside.|They playing outside.|=>Plural subjects use play.",
      "Which sentence is correct?|The dogs are barking.|The dogs is barking.|The dogs be barking.|=>Plural → are.",
      "Which sentence is correct?|The cat is sleeping.|The cat are sleeping.|The cat am sleeping.|=>Singular → is.",
      "Which sentence is correct?|I am happy.|I is happy.|I are happy.|=>I am.",
      "Which sentence is correct?|We were at the park.|We was at the park.|We is at the park.|=>We were.",
      "Which sentence is correct?|He was late.|He were late.|He are late.|=>He was.",
      "Which pronoun replaces 'Mia and I'?|we|they|you|=>We includes the speaker.",
      "Which pronoun replaces 'the boys'?|they|he|it|=>Plural → they.",
      "Which pronoun replaces 'Sam'?|he|she|it|=>A boy → he.",
      "Which pronoun replaces 'the book'?|it|they|she|=>A thing → it.",
      "Which pronoun fits? '___ is my friend.'|She|Her|Them|=>Subject pronoun.",
      "Which sentence is correct?|Me and Ava went to the park.|Ava and I went to the park.|I and Ava went to the park.|=>Name the other person first and use I.",
      "Which sentence uses a comma correctly?|Yes, I can help.|Yes I, can help.|Yes I can, help.|=>Comma after the introductory word.",
      "Where does the comma go in 'We ate apples pears and grapes'?|after apples and pears|after We|after ate|=>Commas separate list items.",
      "Which has the correct punctuation?|\"Come here,\" said Dad.|Come here said Dad.|\"Come here\" said Dad.|=>The comma goes before the closing quote.",
      "What is the plural of 'box'?|boxes|boxs|boxies|=>Add -es to words ending in x.",
      "Which word is spelled correctly?|because|becuase|becaus|=>b-e-c-a-u-s-e.",
      "Which word is spelled correctly?|friend|freind|frend|=>i before e in friend.",
      "Which word is spelled correctly?|different|diffrent|diferent|=>d-i-f-f-e-r-e-n-t.",
      "Which word is spelled correctly?|favorite|favrite|faverite|=>f-a-v-o-r-i-t-e.",
      "Which word is spelled correctly?|beautiful|beutiful|beautifull|=>b-e-a-u-t-i-f-u-l.",
      "Which word is spelled correctly?|people|peple|peeple|=>p-e-o-p-l-e.",
      "Which word is spelled correctly?|together|togather|togethr|=>t-o-g-e-t-h-e-r.",
      "Which word is spelled correctly?|February|Febuary|Febrary|=>Don't forget the first r.",
      "Which word is spelled correctly?|library|libary|librery|=>l-i-b-r-a-r-y.",
      "Which word is spelled correctly?|answer|anser|anwser|=>The w is silent.",
      "What does an apostrophe do in 'dog's'?|shows ownership|shows a question|ends a sentence|=>Possessive.",
      "What is the apostrophe in 'can't' for?|shows missing letters|shows ownership|ends the sentence|=>Contraction.",
      "Which sentence is correctly capitalized?|My friend lives on Oak Street.|my friend lives on oak street.|My Friend lives on Oak street.|=>Capitalize names and the first word.",
      "Which sentence has the correct ending mark?|Where are you going?|Where are you going.|Where are you going!|=>Questions end with a question mark.",
      "Which sentence needs an exclamation mark?|Watch out!|I like tea.|The sky is blue.|=>Strong feeling.",
      "What is the subject of the sentence 'The tall boy ran home'?|boy|ran|home|=>The subject is who the sentence is about.",
      "What is the predicate of the sentence 'The tall boy ran home'?|ran home|The tall boy|tall|=>The predicate tells what the subject does.",
      "What is the verb in 'The baby laughed'?|laughed|baby|The|=>Action word.",
      "What is the adjective in 'The shiny coin fell'?|shiny|coin|fell|=>It describes the coin."
    );
    add(K("grammar"), out);
  })();

  /* ---------------- research skills ---------------- */
  (function () {
    const out = [];
    const words = W("apple banana cat dog elephant frog grape horse igloo jelly kite lion mouse nest orange pear queen rabbit snake tiger umbrella violin whale xylophone yarn zebra");
    for (let i = 0; i < 40; i++) {
      const r = B.rngFrom(B.hash("abc" + i)); const pick = [];
      while (pick.length < 4) { const w = words[Math.floor(r() * words.length)]; if (!pick.includes(w)) pick.push(w); }
      const sorted = pick.slice().sort();
      out.push(line(`Which word comes FIRST in alphabetical order: ${pick.join(", ")}?`, sorted[0], sorted.slice(1), `${sorted[0]} starts with the earliest letter.`));
      out.push(line(`Which word comes LAST in alphabetical order: ${pick.join(", ")}?`, sorted[3], sorted.slice(0, 3), `${sorted[3]} starts with the latest letter.`));
    }
    const guide = [["bat", "dog", ["cat", "bird", "dig"], ["fish", "apple", "zoo"]], ["lamp", "mop", ["leaf", "man", "light"], ["tree", "bed", "ant"]], ["pie", "sun", ["rain", "snow", "pig"], ["ball", "zebra", "van"]], ["car", "fox", ["cow", "dog", "elf"], ["ant", "hat", "zip"]], ["hat", "lion", ["jump", "kite", "ice"], ["apple", "queen", "wolf"]], ["moon", "pig", ["nest", "owl", "pan"], ["cat", "sun", "arm"]]];
    guide.forEach(([a, b, ins, outs]) => {
      ins.forEach((w) => out.push(line(`Would the word '${w}' be found on a dictionary page with the guide words '${a} – ${b}'?`, "Yes", ["No"], `${w} comes between ${a} and ${b} in ABC order.`)));
      outs.forEach((w) => out.push(line(`Would the word '${w}' be found on a dictionary page with the guide words '${a} – ${b}'?`, "No", ["Yes"], `${w} does not fall between ${a} and ${b}.`)));
    });
    out.push(
      "What is research?|finding information about a topic|writing a story|drawing|=>Research means looking up facts.",
      "What is a source?|where you find information|a title|a character|=>Books and websites are sources.",
      "Which is a print source?|an encyclopedia|a video|a podcast|=>Printed on paper.",
      "Which is a digital source?|a website|a printed book|a newspaper on paper|=>Found online.",
      "Which source would be best for facts about the planets?|a science book|a fairy tale|a comic strip|=>Choose a factual source.",
      "Which source is best for finding a word's meaning?|dictionary|atlas|almanac|=>Dictionaries define words.",
      "Which source is best for finding a map?|atlas|dictionary|thesaurus|=>An atlas is a book of maps.",
      "Which source is best for finding synonyms?|thesaurus|atlas|encyclopedia|=>A thesaurus lists synonyms.",
      "Which source is best for learning about a topic in general?|encyclopedia|thesaurus|atlas|=>Encyclopedias give overviews.",
      "Which person at school can help you find books on a topic?|librarian|principal only|bus driver|=>Librarians are experts.",
      "What is a keyword?|an important word you search for|a long word|a title|=>Use keywords in a search.",
      "Which is the best keyword search for 'how bees make honey'?|bees honey|the|how|=>Use important nouns.",
      "What do you call the order of letters A to Z?|alphabetical order|number order|time order|=>ABC order.",
      "What are guide words?|the first and last word on a dictionary page|the title|the author|=>They help you find words.",
      "How do you take notes?|write key words and facts in your own words|copy the whole page|draw only|=>Brief notes.",
      "What does it mean to 'paraphrase'?|say it in your own words|copy it exactly|skip it|=>Don't copy.",
      "What is plagiarism?|copying someone else's words and saying they are yours|reading a book|summarizing|=>Always use your own words and credit sources.",
      "Why should you list your sources?|to give credit and let readers check facts|to make the report longer|to be silly|=>Credit authors.",
      "What is a fact?|something that can be proven|an opinion|a guess|=>Facts are checkable.",
      "Which would be a reliable source?|a library book by an expert|an anonymous post|a rumor|=>Experts are trusted.",
      "Which website ending usually belongs to a school or college?|.edu|.com|.xyz|=>edu = education.",
      "Which website ending usually belongs to a government?|.gov|.com|.edu|=>gov = government.",
      "What is the first step of research?|choose a topic|write the conclusion|publish|=>Start with a topic.",
      "What is the last step of research?|share what you learned|choose a topic|ask a question|=>Present the findings.",
      "What does the Dewey Decimal system do?|organizes nonfiction books by number|organizes fiction by color|sorts books by size|=>Libraries use it.",
      "Where are fiction books usually arranged?|alphabetically by the author's last name|by the Dewey number|by color|=>Authors A to Z.",
      "What is a call number?|a number or code on a book's spine to help find it|a phone number|a page number|=>It tells the shelf spot.",
      "What is a bibliography?|a list of sources|a story|a poem|=>Credits for sources.",
      "What is the purpose of an index in a research book?|to find where a topic is|to define words|to show maps|=>Look up page numbers.",
      "If you want to know about frogs, a good question is…|How do frogs grow?|Frogs.|Frog green.|=>Good questions guide research.",
      "A good research question starts with…|who, what, where, when, why, or how|the|and|=>Question words.",
      "What is an interview?|asking someone questions to learn information|reading a book|writing|=>Primary source.",
      "Which is an example of an expert for a report on bridges?|an engineer|a pet|a toy|=>Engineers design bridges."
    );
    add(K("research"), out);
  })();

  /* ---------------- speaking & listening ---------------- */
  add(K("communication"), `
What is a good way to show you are listening?|look at the speaker|look away|talk to a friend|=>Eye contact shows attention.
When someone is speaking, you should…|wait for your turn to talk|talk over them|leave|=>Don't interrupt.
What should you do before you speak in a group?|raise your hand or wait for a turn|shout|walk around|=>Take turns.
What is eye contact?|looking at the person you are talking to|closing your eyes|looking at the floor|=>Shows respect.
Which volume is best for a class presentation?|loud enough for everyone to hear|a whisper|a shout|=>Be heard by all.
Which speaking pace is best?|not too fast, not too slow|as fast as possible|very slow|=>Clear pace.
What does it mean to speak clearly?|say words so others can understand|mumble|speak in another language|=>Pronounce carefully.
What should you do if you don't understand?|ask a question|stay silent|guess|=>Ask for help.
What is a good question to clarify?|Could you explain that again?|Why are you talking?|Whatever.|=>Polite clarifying.
What is a discussion?|talking together about a topic|a one-person speech|a test|=>Everyone shares ideas.
Which is a good discussion rule?|take turns|interrupt|ignore|=>Be respectful.
Which is a good discussion rule?|build on others' ideas|only talk about yourself|laugh at others|=>Add to the conversation.
Which is a good discussion rule?|disagree politely|call names|yell|=>Be kind when you disagree.
When you disagree with a classmate, you could say…|I see it differently because...|You're wrong.|That's dumb.|=>Be polite and give a reason.
When you agree with a classmate, you could say…|I agree with you because...|Whatever.|Boring.|=>Add a reason.
What is a presentation?|sharing information with an audience|a quiet reading|a test|=>Presenting is speaking to a group.
What should you do before a presentation?|practice|skip it|run away|=>Practice helps.
How can visuals help a presentation?|they help the audience understand|they make it confusing|they replace speaking|=>Pictures and charts help.
Which posture is best when presenting?|stand up straight|slouch|hide behind the desk|=>Good posture shows confidence.
What is a good way to start a presentation?|state your topic|start with 'um'|turn around|=>Introduce your topic.
What is a good way to end a presentation?|summarize and say thank you|just stop|walk away|=>Wrap up politely.
What should you do when a presenter finishes?|clap or ask questions|talk to a friend|leave|=>Respond politely.
What is a good follow-up question?|Can you tell me more about that?|Who cares?|That's boring.|=>Shows interest.
Which is a polite way to get attention?|Excuse me, may I ask a question?|HEY!|Move.|=>Use polite words.
What are directions?|steps to follow|a story|a poem|=>Directions tell what to do.
Which is the best way to follow multi-step directions?|listen carefully and do each step in order|do the last step first|ignore them|=>Order matters.
If a teacher says 'First, get your book. Next, open it to page 10. Then read silently,' what do you do second?|open to page 10|get your book|read silently|=>Second step.
If a teacher says 'First, take out a pencil. Next, write your name. Then turn the paper over,' what do you do last?|turn the paper over|take out a pencil|write your name|=>Third step.
What does it mean to 'summarize what you heard'?|tell the main points in your own words|repeat every word|ignore it|=>Short and clear.
What is the main message of a speaker?|the most important point|a small detail|the speaker's name|=>Main idea.
Which tone sounds friendly?|a warm, calm voice|a growl|a shout|=>Tone matters.
Which is body language that shows you are bored?|yawning|nodding|smiling|=>Yawning signals boredom.
Which is body language that shows you are interested?|leaning in and nodding|looking away|yawning|=>Shows attention.
What is a role-play?|acting out a situation|a test|a quiet reading|=>Practice speaking.
What is a retelling?|saying a story again in your own words|reading silently|writing a poem|=>Retell with beginning, middle, end.
Which is a good way to retell a story?|tell events in order|tell the end first|only tell one detail|=>Sequence.
What is a speech?|a talk given to an audience|a type of poem|a spelling test|=>Speaking publicly.
What is a conversation?|talking back and forth|a speech|a book|=>A two-way talk.
Which is a good way to join a conversation?|wait for a pause|interrupt|stand behind someone|=>Be polite.
Which is a good way to start a polite conversation?|Hello! How are you?|Move!|Give me that.|=>A friendly greeting.
What do you do when you accidentally interrupt someone?|say 'Sorry, please go on.'|keep talking|leave|=>Apologize.
When should you use 'please' and 'thank you'?|whenever you ask for or receive something|never|only at home|=>Polite words show respect.
Why is listening important?|to understand and learn|to be silly|to be loud|=>Listening builds knowledge.
`.split("\n").filter((x) => x.trim()));

  /* ---------------- reading skills (grade 3) ---------------- */
  add(R("strategies"), `
What is a reading strategy?|a plan that helps you understand what you read|a type of book|a character|=>Strategies help comprehension.
What can you do BEFORE reading?|preview the title and pictures|write a summary|check the ending|=>Previewing prepares you.
What does it mean to preview a text?|look at the title, pictures, and headings first|read the last page|skip the book|=>Get an idea of what's coming.
What does it mean to make a prediction?|guess what will happen next|retell the end|ask the author|=>Use clues.
What do good readers do when something doesn't make sense?|reread|stop reading|skip it|=>Rereading helps.
What do good readers do when they find a new word?|use context clues|ignore it forever|close the book|=>Look at the words around it.
What does it mean to visualize?|make a picture in your mind|draw on the page|read quickly|=>Imagine what you read.
What is a connection?|linking the text to your life, another book, or the world|a title|a character|=>Text-to-self, text-to-text, text-to-world.
What is a text-to-self connection?|the text reminds you of your own life|the text reminds you of another book|the text reminds you of the news|=>Self = you.
What is a text-to-text connection?|the text reminds you of another book|the text reminds you of your life|the text is long|=>Text = another text.
What is a text-to-world connection?|the text reminds you of something in the real world|the text reminds you of a friend|the text has pictures|=>World = real events.
What does it mean to ask questions while reading?|wonder about the text and look for answers|only ask at the end|never ask|=>Good readers wonder.
What does it mean to monitor your understanding?|check that you know what you are reading|read faster|skip pages|=>Stop and think.
What does 'fix-up strategy' mean?|something you do when you get confused|a type of book|a spelling rule|=>Reread, slow down, ask.
What can you do AFTER reading?|summarize and retell|preview the cover|choose a book|=>Summarize.
What is a summary?|a short retelling of the main points|a long retelling|a prediction|=>Short.
What does it mean to infer?|use clues plus what you know to figure out something|copy the text|guess without clues|=>Inference.
What is a purpose for reading?|a reason you are reading|a title|a character|=>To learn, enjoy, or find answers.
Why might you read a how-to book?|to learn how to do something|to laugh|to hear a rhyme|=>To follow steps.
Why might you read a fable?|to enjoy a story and learn a lesson|to find recipes|to learn math|=>Fables teach.
What is the fastest way to find a specific fact in a nonfiction book?|scan for key words|read every page|skip around|=>Scanning.
What is fluency?|reading smoothly with expression|reading very slowly|reading silently only|=>Fluent readers sound natural.
What helps you read with expression?|paying attention to punctuation|reading as fast as possible|reading silently|=>Punctuation guides your voice.
How should you read a sentence that ends with an exclamation mark?|with excitement|in a whisper|monotone|=>Exclamation marks show strong feeling.
How should you read a question?|with your voice going up at the end|with your voice going down|silently|=>Questions rise.
What does it mean to reread a text?|read it again|skip it|hide it|=>Rereading deepens understanding.
Which is a good way to remember what you read?|retell it to someone|forget it|only skim|=>Retelling helps memory.
What should you do if a paragraph is confusing?|reread it slowly|skip the rest|stop reading|=>Slow down.
What is an 'author's message'?|the lesson or idea the author wants readers to learn|the title|the cover|=>Theme.
What are 'text clues'?|words or pictures that help you understand|the page number|the title|=>Clues help.
What does 'skimming' mean?|reading quickly to get the main idea|reading every word|ignoring the text|=>Skim for the gist.
Which of these helps you before reading a nonfiction book?|looking at the table of contents|writing the summary|checking spelling|=>It shows the topics.
Which question helps you predict?|What do I think will happen next?|What is the title?|Who wrote this?|=>Predictions look ahead.
Which question helps you monitor understanding?|Does this make sense?|What is the page number?|Who published it?|=>Check for meaning.
Which question helps you visualize?|What does this scene look like?|How many pages?|What is the price?|=>Picture it.
Which is a good question to ask about a character?|Why did the character do that?|How many pages?|What font is this?|=>Understanding motives.
`.split("\n").filter((x) => x.trim()));

  add(R("inference-evidence"), `
What is an inference?|a conclusion based on clues and what you already know|a fact stated in the text|a guess with no clues|=>Clues + knowledge.
What is text evidence?|words from the text that support your answer|your opinion|the title|=>Proof from the text.
Why do we use text evidence?|to prove our answers|to make the answer longer|to confuse the reader|=>Evidence supports answers.
Which phrase can start an answer with text evidence?|The text says...|I think maybe...|Probably not...|=>Reference the text.
Which phrase can start an answer with text evidence?|According to the story...|Everyone knows...|I guess...|=>Point back to the text.
Tom's face turned red and he looked at the floor. How does Tom probably feel?|embarrassed|proud|sleepy|=>Red face and looking down show embarrassment.
Ava hugged her puppy tightly and smiled all day. How does Ava feel?|happy|angry|bored|=>Hugging and smiling show happiness.
The boy dragged his feet and sighed after school. How does he probably feel?|tired or sad|excited|proud|=>Dragging and sighing show low energy.
The girl's hands shook as she walked to the stage. How does she probably feel?|nervous|calm|angry|=>Shaking shows nerves.
Dark clouds covered the sky and the wind grew strong. What will probably happen?|a storm|a sunny day|a snowman|=>Dark clouds and wind signal a storm.
Sam put on a coat, a scarf, and gloves. What is the weather probably like?|cold|hot|rainy only|=>Warm clothing means cold.
Mia packed sunscreen, a towel, and a beach ball. Where is she probably going?|the beach|the library|a snowy mountain|=>Beach items.
The kitchen smelled of cinnamon and warm bread. What is probably happening?|someone is baking|someone is painting|someone is swimming|=>Baking smells.
The floor was covered in glitter and paper scraps. What was probably happening?|an art project|a nap|a race|=>Craft supplies.
Dad checked the clock again and again. How does he probably feel?|impatient|calm|sleepy|=>Checking the time repeatedly shows impatience.
The dog wagged its tail and ran to the door when it heard the car. What is the dog probably feeling?|excited|angry|bored|=>Wagging and running show excitement.
All the students cheered when the teacher said 'Free time!' What does this tell you about the students?|they were happy about free time|they were sad|they were sleepy|=>Cheering shows happiness.
Ben forgot his lunch and his stomach growled. What will he probably do?|ask for food or look for something to eat|go to sleep|run away|=>Hunger leads to food.
Zoe studied every night before the test. What will probably happen?|she will do well|she will fail|she will forget|=>Studying helps.
Max didn't water his plant for weeks. What probably happened?|the plant wilted|the plant grew|the plant sang|=>Plants need water.
What is the difference between a fact in the text and an inference?|A fact is stated; an inference uses clues.|They are the same.|An inference is always wrong.|=>Inferences read between the lines.
Which is a clue word for a feeling?|trembled|table|window|=>Trembled shows fear.
Which is a clue word for a feeling?|beamed|walked|opened|=>Beamed shows joy.
Which is a clue word for a feeling?|scowled|read|placed|=>Scowled shows anger.
Which is a clue word for a feeling?|sobbed|sat|talked|=>Sobbed shows sadness.
What does 'read between the lines' mean?|figure out what is not directly stated|read every line twice|skip lines|=>Infer.
If a story says 'Leo's backpack was heavy and his shoulders slumped,' what can you infer?|Leo feels tired or burdened|Leo is excited|Leo is cold|=>Slumped shoulders signal weariness.
If a story says 'Nina ran to the bus with her hair flying,' what can you infer?|Nina was in a hurry|Nina was sleeping|Nina was cold|=>Running means hurry.
If a character says 'I can't wait for tomorrow!' what can you infer?|they are excited|they are sad|they are angry|=>Can't wait = excitement.
If a story says 'Grandma sat by the window, looking at old photos,' what can you infer?|she is remembering the past|she is angry|she is hungry|=>Old photos = memories.
Which sentence BEST supports the idea that the fox is clever?|The fox thought of a trick to get the grapes.|The fox was orange.|The fox ran.|=>A trick shows cleverness.
Which sentence BEST supports the idea that Mia is kind?|Mia shared her lunch with a new student.|Mia has a lunchbox.|Mia is in third grade.|=>Sharing shows kindness.
Which sentence BEST supports the idea that the room is messy?|Clothes covered the floor and the bed was unmade.|The room had a window.|The room was big.|=>Messy details.
Which sentence BEST supports the idea that it is winter?|Snow covered the ground and icicles hung from the roof.|Birds sang in the trees.|Flowers bloomed.|=>Winter details.
Which sentence BEST supports the idea that the story takes place long ago?|The knight rode his horse to the castle.|The girl texted her friend.|The robot flew.|=>Knights and castles are old-time details.
Which detail from the text would you use to prove a character is brave?|She walked into the dark cave to save her friend.|She had brown hair.|She liked pizza.|=>Brave action.
A good answer to a text-based question…|uses details from the text|only gives an opinion|ignores the text|=>Cite evidence.
What does it mean to 'cite' evidence?|to point out where the answer is found|to guess|to forget|=>Name the source.
Which is NOT an inference?|The story is 20 pages long.|The boy is scared.|It will rain.|=>That is a stated fact.
Which clue best shows that the girl has been crying?|Her eyes were red and puffy.|She wore a blue dress.|She was eight.|=>Red, puffy eyes.
When you make an inference, you should…|check that the clues in the text support it|ignore the text|only use your opinion|=>Use evidence.
If clues in the text disagree with your inference, you should…|change your inference|ignore the clues|keep it anyway|=>Revise based on evidence.
`.split("\n").filter((x) => x.trim()));

  add(R("text-structure"), `
What is cause and effect?|a text structure showing why things happen and what happens|a story type|a poem|=>Cause → effect.
What is a cause?|why something happens|what happens|a graph|=>The reason.
What is an effect?|what happens as a result|why it happens|a title|=>The result.
Which words signal cause and effect?|because, so, as a result|first, next|but, however|=>Cause-effect signal words.
In 'The ice melted because the sun was hot,' what is the cause?|the sun was hot|the ice melted|the ice|=>Heat caused melting.
In 'The ice melted because the sun was hot,' what is the effect?|the ice melted|the sun was hot|the heat|=>Melting is the result.
In 'He studied hard, so he got an A,' what is the effect?|he got an A|he studied hard|studied|=>The A is the result.
In 'It rained all night, and the creek flooded,' what is the cause?|it rained all night|the creek flooded|the creek|=>Rain causes flooding.
In 'The power went out, so we lit candles,' what is the cause?|the power went out|we lit candles|candles|=>The outage caused the candles.
Which is an effect of not wearing a coat in winter?|you feel cold|you feel hot|you feel sleepy|=>Cold is the effect.
Which is an effect of watering plants?|they grow|they melt|they fly|=>Water helps growth.
Which is a cause of a flat tire?|a nail in the tire|a new bike|a sunny day|=>Nails cause flats.
What does compare mean?|tell how things are alike|tell how they are different|tell the order|=>Compare = alike.
What does contrast mean?|tell how things are different|tell how they are alike|tell the order|=>Contrast = different.
Which words signal compare?|both, same, alike, similar|but, however|first, next|=>Compare words.
Which words signal contrast?|but, however, unlike, different|both, same|first, next|=>Contrast words.
Which tool shows how two things are alike and different?|Venn diagram|timeline|map|=>Overlapping circles.
In a Venn diagram, what goes in the overlap?|what is alike|what is different about one|the title|=>The middle is shared.
Cats and dogs both have fur. This tells how they are…|alike|different|the same animal|=>Both have fur.
Cats climb trees, but dogs usually do not. This tells how they are…|different|alike|related|=>Contrast.
What is sequence?|the order of events|a cause|a comparison|=>First, next, last.
Which words signal sequence?|first, next, then, finally|because, so|both, same|=>Order words.
Put in order: bake the cookies, mix the dough, eat the cookies. Which is first?|mix the dough|bake the cookies|eat the cookies|=>Mix, bake, eat.
Put in order: plant a seed, water it, see a sprout. Which is last?|see a sprout|plant a seed|water it|=>Plant, water, sprout.
Put in order: get dressed, wake up, eat breakfast. Which is first?|wake up|get dressed|eat breakfast|=>Wake up first.
Put in order: butterfly, egg, caterpillar, pupa. Which is third?|pupa|egg|butterfly|=>Egg, caterpillar, pupa, butterfly.
Which text structure explains steps in order?|sequence|compare and contrast|cause and effect|=>Sequence.
Which text structure explains a problem and how it was solved?|problem and solution|description|sequence|=>Problem/solution.
Which text structure gives details about a topic like how it looks, sounds, feels?|description|sequence|problem and solution|=>Description.
Which structure fits 'How a Seed Grows'?|sequence|compare and contrast|persuasive|=>Steps in order.
Which structure fits 'Frogs and Toads: How They Are Alike and Different'?|compare and contrast|sequence|cause and effect|=>Alike and different.
Which structure fits 'Why Volcanoes Erupt'?|cause and effect|sequence|description|=>Why things happen.
Which structure fits 'Litter in the Park and How We Fixed It'?|problem and solution|description|sequence|=>Problem fixed.
Which word signals a problem and solution?|solve|alike|first|=>Solve points to solutions.
What is a problem?|something that needs to be fixed|a happy ending|a setting|=>A difficulty.
What is a solution?|a way to fix a problem|a cause|a comparison|=>The fix.
What is a signal word?|a word that hints at how a text is organized|a title|a hint on the cover|=>First, because, unlike.
Which is a signal word for sequence?|finally|unlike|because|=>Finally signals order.
Which is a signal word for cause/effect?|therefore|both|first|=>Therefore shows result.
Which is a signal word for contrast?|however|similarly|then|=>However shows difference.
Which is a signal word for compare?|similarly|however|first|=>Similarly shows likeness.
Why do authors use text structures?|to organize information so it is clear|to make it longer|to confuse readers|=>Organization helps readers.
What can a timeline show?|events in order|how things are alike|a cause|=>Time order.
What can a flow chart show?|steps or a process in order|a comparison|a map|=>Steps.
`.split("\n").filter((x) => x.trim()));
})();
