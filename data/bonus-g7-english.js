/* Grade 7 English and Reading Skills: bonus question banks. */
(function () {
  "use strict";
  const B = window.BONUS, K = (u) => "7/english/" + u, R = (u) => "7/reading/" + u;
  const A = (key, t) => B.add(key, (Array.isArray(t) ? t.join("\n") : t).split("\n").filter((x) => x.trim()).join("\n"));
  const line = (q, right, wrongs, e) => [q, right].concat(wrongs).join("|") + (e ? "|=>" + e : "");
  function pickK(arr, k, seed, ex) {
    const r = B.rngFrom(B.hash(seed)); const out = []; let g = 0; ex = ex || [];
    while (out.length < k && g++ < 500) { const v = arr[Math.floor(r() * arr.length)]; if (!out.includes(v) && !ex.includes(v)) out.push(v); }
    return out;
  }

  /* ---------------- vocabulary: roots, connotation, analogies ---------------- */
  (function () {
    const roots = [
      ["chron", "time", ["chronological", "chronic", "synchronize"]], ["bene", "good or well", ["benefit", "benevolent", "benefactor"]], ["mal", "bad or evil", ["malfunction", "malicious", "malnutrition"]],
      ["graph", "write or draw", ["autograph", "biography", "graphic"]], ["port", "carry", ["transport", "portable", "export"]], ["rupt", "break", ["interrupt", "bankrupt", "erupt"]],
      ["dict", "say or speak", ["dictate", "contradict", "verdict"]], ["vert/vers", "turn", ["convert", "reverse", "invert"]], ["ject", "throw", ["reject", "project", "eject"]],
      ["mit/miss", "send", ["transmit", "mission", "dismiss"]], ["cred", "believe", ["incredible", "credible", "credit"]], ["duc/duct", "lead", ["conduct", "introduce", "educate"]],
      ["fer", "carry or bring", ["transfer", "refer", "ferry"]], ["gen", "birth, kind, or origin", ["genetics", "generation", "genre"]], ["jud/jur", "law or judge", ["judge", "jury", "justice"]],
      ["mort", "death", ["mortal", "mortality", "immortal"]], ["nov", "new", ["novel", "innovation", "renovate"]], ["pop", "people", ["popular", "population", "populate"]],
      ["sect", "cut", ["section", "dissect", "intersect"]], ["tract", "pull or drag", ["attract", "tractor", "subtract"]], ["vac", "empty", ["vacant", "vacuum", "evacuate"]],
      ["voc/vok", "voice or call", ["vocal", "advocate", "invoke"]], ["anthrop", "human", ["anthropology", "philanthropy", "misanthrope"]], ["bio", "life", ["biology", "biosphere", "antibiotic"]],
      ["cosm", "universe or order", ["cosmos", "cosmic", "cosmopolitan"]], ["crat/cracy", "rule or power", ["democracy", "autocrat", "bureaucracy"]], ["demo", "people", ["democracy", "demographic", "epidemic"]],
      ["derm", "skin", ["dermatology", "epidermis", "hypodermic"]], ["dyna", "power", ["dynamic", "dynamite", "dynasty"]], ["hydr", "water", ["hydrate", "dehydrate", "hydraulic"]],
      ["lith", "stone", ["monolith", "lithograph", "Neolithic"]], ["morph", "shape or form", ["metamorphosis", "morphology", "amorphous"]], ["naut", "sailor", ["astronaut", "nautical", "cosmonaut"]],
      ["path", "feeling or disease", ["empathy", "sympathy", "pathology"]], ["phil", "love", ["philosophy", "philanthropy", "bibliophile"]], ["phob", "fear", ["phobia", "claustrophobia", "arachnophobia"]],
      ["poly", "many", ["polygon", "polytheism", "polygamy"]], ["psych", "mind or soul", ["psychology", "psychic", "psychiatrist"]], ["soph", "wisdom", ["philosophy", "sophomore", "sophisticated"]],
      ["techn", "skill or art", ["technology", "technician", "technique"]], ["zoo", "animal", ["zoology", "zoo", "zoophyte"]], ["geo", "earth", ["geography", "geology", "geothermal"]],
      ["ped", "foot", ["pedestrian", "pedal", "centipede"]], ["spec", "look", ["spectator", "inspect", "perspective"]], ["tele", "far", ["telescope", "telegraph", "telepathy"]],
      ["uni", "one", ["unify", "uniform", "universe"]], ["circum", "around", ["circumference", "circumnavigate", "circumstance"]], ["trans", "across", ["transport", "translate", "transatlantic"]],
      ["inter", "between", ["international", "intersect", "interact"]], ["sub", "under", ["submarine", "subterranean", "subordinate"]], ["pre", "before", ["preview", "predict", "precede"]],
      ["post", "after", ["postpone", "postscript", "postwar"]], ["anti", "against", ["antibody", "antidote", "antisocial"]], ["auto", "self", ["automatic", "autobiography", "autonomy"]]
    ];
    const out = [];
    const meanings = roots.map((x) => x[1]);
    roots.forEach(([root, mean, words]) => {
      const bad = roots.filter((x) => x[1] === mean).flatMap((x) => x[2]);
      const toks = root.split("/");
      const okw = roots.filter((x) => x[1] !== mean).flatMap((x) => x[2]).filter((x) => !bad.includes(x) && !toks.some((t) => x.includes(t)));
      out.push(line(`What does the root '${root}' mean?`, mean, pickK(meanings.filter((m) => m !== mean), 3, "m7" + root), `${root} means ${mean}.`));
      words.forEach((w) => {
        out.push(line(`The word '${w}' has the root '${root}'. Which meaning does this root add?`, mean, pickK(meanings.filter((m) => m !== mean), 3, "w7" + w + root), `${root} = ${mean}.`));
        out.push(line(`Which word has a root meaning '${mean}'?`, w, pickK(okw, 3, "ww7" + w + root, words), `${w} contains ${root} (${mean}).`));
      });
    });
    const conn = [
      ["thrifty", "frugal", "cheap"], ["curious", "interested", "nosy"], ["confident", "sure", "arrogant"], ["determined", "persistent", "stubborn"], ["slender", "thin", "skinny"],
      ["childlike", "young", "childish"], ["aroma", "smell", "stench"], ["assertive", "direct", "pushy"], ["unique", "different", "strange"], ["relaxed", "calm", "lazy"],
      ["bold", "daring", "reckless"], ["selective", "choosy", "picky"], ["laid-back", "casual", "careless"], ["economical", "budget", "stingy"], ["spirited", "lively", "hyper"],
      ["cozy", "small", "cramped"], ["flexible", "adjustable", "wishy-washy"], ["glimpse", "look", "stare"], ["smirk", "smile", "sneer"], ["stroll", "walk", "stomp"]
    ];
    conn.forEach(([pos, neu, neg]) => {
      out.push(line(`Which word has a more NEGATIVE connotation: '${pos}' or '${neg}'?`, neg, [pos], `${neg} carries a negative feeling even though the denotation is similar.`));
      out.push(line(`Which word has a more POSITIVE connotation: '${neg}' or '${pos}'?`, pos, [neg], `${pos} suggests approval.`));
      out.push(line(`'${pos}' and '${neg}' have similar denotations but different…`, "connotations", ["roots", "rhymes", "prefixes"], `Connotation is the feeling a word carries.`));
      out.push(line(`Which word is the most NEUTRAL: '${neg}', '${neu}', or '${pos}'?`, neu, [pos, neg], `${neu} carries the least emotion.`));
    });
    const pairs = {
      syn: { say: "mean about the same", p: [["big", "enormous"], ["happy", "joyful"], ["fast", "swift"], ["smart", "intelligent"], ["tired", "exhausted"], ["brave", "courageous"], ["angry", "furious"], ["sad", "sorrowful"], ["old", "ancient"], ["begin", "commence"]] },
      ant: { say: "are opposites", p: [["generous", "stingy"], ["ancient", "modern"], ["expand", "contract"], ["victory", "defeat"], ["scarce", "abundant"], ["temporary", "permanent"], ["optimist", "pessimist"], ["accept", "reject"], ["rapid", "gradual"], ["sincere", "deceitful"]] },
      deg: { say: "show increasing intensity", p: [["warm", "boiling"], ["pleased", "ecstatic"], ["tired", "exhausted"], ["dislike", "despise"], ["wet", "soaked"], ["hungry", "starving"], ["unhappy", "miserable"], ["clean", "spotless"], ["big", "colossal"], ["cool", "freezing"]] },
      part: { say: "is a part of", p: [["chapter", "novel"], ["verse", "poem"], ["scene", "play"], ["petal", "flower"], ["key", "keyboard"], ["room", "house"], ["page", "book"], ["bone", "skeleton"], ["note", "melody"], ["state", "country"]] },
      tool: { say: "is used by or for", p: [["scalpel", "surgeon"], ["gavel", "judge"], ["baton", "conductor"], ["telescope", "astronomer"], ["compass", "navigator"], ["stethoscope", "doctor"], ["hammer", "carpenter"], ["microscope", "biologist"], ["brush", "painter"], ["whistle", "referee"]] },
      cause: { say: "leads to", p: [["practice", "improvement"], ["exercise", "strength"], ["spark", "fire"], ["rain", "flood"], ["study", "knowledge"], ["drought", "famine"], ["infection", "fever"], ["exposure", "sunburn"], ["effort", "success"], ["neglect", "decay"]] }
    };
    const rk = Object.keys(pairs);
    const allSecond = [].concat(...rk.map((k) => pairs[k].p.map((x) => x[1])));
    rk.forEach((k) => {
      const ps = pairs[k].p;
      ps.forEach(([a, b], i) => {
        const [c, d] = ps[(i + 1 + (i % 4)) % ps.length]; if (c === a) return;
        out.push(line(`${a} : ${b} :: ${c} : ___`, d, pickK(allSecond, 3, "a7" + a + c, [d, b]), `${a} and ${b} ${pairs[k].say}; ${c} and ${d} do too.`));
      });
    });
    A(K("vocabulary"), out);
    A(K("vocabulary"), `
What is the denotation of a word?|its literal dictionary meaning|its emotional feeling|its sound|=>Denotation is the dictionary definition.
What is the connotation of a word?|the feelings or ideas a word suggests|its dictionary definition|its spelling|=>Connotation is the emotional association.
Which word has a positive connotation?|youthful|childish|immature|=>Youthful suggests energy.
Which word has a negative connotation?|nosy|curious|interested|=>Nosy suggests an unwelcome interest.
Which word has a neutral connotation?|house|mansion|shack|=>House is neutral, while mansion and shack carry feelings.
What does 'context clue' mean?|information near a word that helps you figure out its meaning|the dictionary entry|a prefix|=>Use the sentence around the word.
What is a synonym?|a word with a similar meaning|an opposite word|a word that sounds the same|=>Big and large.
What is an antonym?|a word with an opposite meaning|a word with a similar meaning|a rhyming word|=>Hot and cold.
What is a homophone?|a word that sounds like another but has a different meaning|a word spelled the same as another|a word with an opposite meaning|=>Their/there/they're.
What is a homograph?|a word spelled the same as another but with a different meaning|a word that sounds like another|a word with the same meaning|=>Bass (fish) and bass (music).
What is an idiom?|a phrase whose meaning isn't literal|a rhyme|a type of root|=>'Break a leg.'
What does 'break the ice' mean?|start a conversation in an awkward situation|smash frozen water|end a friendship|=>An idiom.
What does 'spill the beans' mean?|reveal a secret|drop food|cook dinner|=>An idiom.
What does 'under the weather' mean?|feeling ill|standing outside|in a storm|=>An idiom.
What does 'a piece of cake' mean?|very easy|a dessert|hard work|=>An idiom.
What does 'hit the books' mean?|study hard|punch a book|throw books|=>An idiom.
What does 'cost an arm and a leg' mean?|be very expensive|hurt badly|be free|=>An idiom.
What does 'let the cat out of the bag' mean?|accidentally reveal a secret|free a pet|open a bag|=>An idiom.
What does 'the ball is in your court' mean?|it is your turn to act|play tennis|bounce the ball|=>An idiom.
What is a simile?|a comparison using like or as|a comparison without like or as|an exaggeration|=>As brave as a lion.
What is a metaphor?|a direct comparison saying one thing is another|a comparison using like|an exaggeration|=>Life is a journey.
What is hyperbole?|extreme exaggeration|understatement|a rhyme|=>I'm so hungry I could eat a horse.
What is personification?|giving human traits to a non-human thing|a comparison using like|a rhyme|=>The wind whispered.
What is an allusion?|an indirect reference to a well-known person, event, or work|a type of rhyme|a type of root|=>He's a Scrooge.
What is irony?|a contrast between what is expected and what happens|a type of rhyme|a type of root|=>A fire station burns down.
What is a connotation of 'home' compared with 'house'?|warmth and belonging|a building only|a structure for sale|=>Home carries emotional feeling.
Which sentence uses a negative connotation?|He is a stubborn man.|He is a determined man.|He is a persistent man.|=>Stubborn is critical.
Which sentence uses a positive connotation?|She is frugal with her money.|She is cheap with her money.|She is stingy with her money.|=>Frugal is admiring.
Choose the word with the strongest meaning.|furious|annoyed|upset|=>Furious is the most intense.
Choose the word with the mildest meaning.|annoyed|furious|enraged|=>Annoyed is the least intense.
What does the suffix '-ology' mean?|the study of|full of|without|=>Biology = study of life.
What does the suffix '-phobia' mean?|fear of|love of|study of|=>Claustrophobia.
What does the suffix '-able' mean?|able to be|without|full of|=>Readable.
What does the prefix 'mis-' mean?|wrongly|again|before|=>Misread.
What does the prefix 'ex-' mean?|out or former|in|under|=>Exit; ex-president.
What does the prefix 'sub-' mean?|under|over|between|=>Submarine.
What does the prefix 'inter-' mean?|between|against|before|=>International.
What does the prefix 'anti-' mean?|against|with|after|=>Antifreeze.
What does the prefix 'bi-' mean?|two|one|three|=>Bicycle.
What does the prefix 'semi-' mean?|half|double|against|=>Semicircle.
What does the prefix 'mono-' mean?|one|two|many|=>Monologue.
What does the prefix 'poly-' mean?|many|one|half|=>Polygon.
Which word has a Latin root meaning 'carry'?|transport|biology|telephone|=>port = carry.
Which word has a Greek root meaning 'life'?|biology|geology|astronomy|=>bio = life.
Which word has a Greek root meaning 'earth'?|geology|biology|psychology|=>geo = earth.
Which word has a Latin root meaning 'break'?|interrupt|dictate|transfer|=>rupt = break.
Which word has a Latin root meaning 'say'?|dictate|erupt|portable|=>dict = say.
Which word means 'to see ahead' based on its parts?|foresee|rewind|submarine|=>fore = before; see.
What is an analogy?|a comparison that shows a relationship between two pairs of words|a type of poem|a root|=>Hot : cold :: up : down.
Which relationship is shown by 'puppy : dog'?|young to adult|part to whole|opposites|=>A puppy is a young dog.
Which relationship is shown by 'petal : flower'?|part to whole|opposites|synonyms|=>A petal is part of a flower.
Which relationship is shown by 'happy : joyful'?|degree/synonym|opposites|part to whole|=>Joyful is a stronger kind of happy.
Which relationship is shown by 'scalpel : surgeon'?|tool to user|synonyms|opposites|=>A surgeon uses a scalpel.
Which relationship is shown by 'drought : famine'?|cause and effect|part to whole|synonyms|=>Drought can cause famine.
`);
  })();

  /* ---------------- literary analysis ---------------- */
  A(K("literary-analysis"), `
What is a theme?|the central message or insight about life in a text|the setting|the plot|=>A theme is a statement, not a single word.
Which is the best statement of a theme?|Honesty can be difficult but brings trust.|Honesty|A boy tells the truth.|=>A theme is a full idea about life.
What is the difference between a topic and a theme?|A topic is a subject; a theme is a message about it.|They are the same.|A theme is shorter.|=>Friendship is a topic; true friends support you is a theme.
What is characterization?|how an author develops a character|the setting|the rhyme|=>Through actions, words, thoughts, and appearance.
What is direct characterization?|the narrator tells you directly what a character is like|the reader infers traits|a character's dialogue|=>She was generous.
What is indirect characterization?|the reader figures out traits from actions, words, and thoughts|the narrator states the traits|the title|=>Show, don't tell.
What is a protagonist?|the main character|the villain|the narrator|=>Usually the one we follow.
What is an antagonist?|the character or force that opposes the protagonist|the narrator|the hero|=>Creates conflict.
What is a dynamic character?|one who changes during the story|one who stays the same|a minor character|=>Grows or changes.
What is a static character?|one who stays the same|one who changes a lot|the narrator|=>Remains unchanged.
What is a round character?|a complex character with many traits|a simple character|a minor character|=>Like a real person.
What is a flat character?|a simple character with few traits|a complex character|the narrator|=>Often a stereotype.
What is internal conflict?|a struggle within a character's mind|a struggle between two people|a struggle with nature|=>Character vs. self.
What is external conflict?|a struggle between a character and an outside force|a struggle within a character|a poem|=>Character vs. character, nature, or society.
Which is an example of character vs. nature?|a hiker lost in a blizzard|two brothers arguing|a girl deciding whether to tell the truth|=>The conflict is with nature.
Which is an example of character vs. self?|a boy deciding whether to confess|two friends fighting|a storm destroying a house|=>The struggle is internal.
Which is an example of character vs. society?|a girl challenging an unfair rule|a boy fighting a wolf|a boy doubting himself|=>The conflict is with the community.
What is the exposition?|the beginning, which introduces characters and setting|the climax|the resolution|=>Background information.
What is the rising action?|events that build the conflict|the ending|the setting|=>Complications.
What is the climax?|the turning point or most intense moment|the beginning|the title|=>The peak of tension.
What is the falling action?|events after the climax that lead to the resolution|the exposition|the theme|=>Winding down.
What is the resolution?|how the conflict is resolved|the first scene|the setting|=>The ending.
What is point of view?|the perspective from which a story is told|the plot|the setting|=>Who tells the story.
What is first-person point of view?|the narrator is a character using I and me|the narrator uses he and she|the narrator addresses you|=>I saw...
What is third-person limited?|the narrator knows one character's thoughts|the narrator knows everyone's thoughts|the narrator is I|=>He wondered...
What is third-person omniscient?|the narrator knows all characters' thoughts|the narrator knows one character|the narrator is I|=>All-knowing.
What is the setting?|the time and place of a story|the plot|the theme|=>When and where.
How can setting affect a story?|it can influence mood, conflict, and characters' choices|it has no effect|it replaces the plot|=>A storm sets a tense mood.
What is mood?|the feeling the text creates for the reader|the narrator's attitude|the theme|=>Gloomy, cheerful.
What is tone?|the author's attitude toward the subject|the reader's feelings|the setting|=>Sarcastic, serious.
What is foreshadowing?|hints about what will happen later|a flashback|a rhyme|=>A dark cloud foreshadows trouble.
What is a flashback?|a scene that goes back in time|a hint about the future|a rhyme|=>Shows the past.
What is symbolism?|using an object or image to represent a deeper idea|a comparison using like|a rhyme|=>A dove symbolizes peace.
What does a dove often symbolize?|peace|war|anger|=>A traditional symbol.
What does a storm often symbolize in literature?|conflict or trouble|calm|joy|=>Storms signal turmoil.
What does a road often symbolize?|a journey or life path|a building|a rule|=>Choices and travel.
What is irony?|a contrast between expectation and reality|a rhyme|a comparison|=>The opposite of what you expect.
What is verbal irony?|saying the opposite of what you mean|a surprise ending|an audience knowing more than a character|=>Sarcasm.
What is situational irony?|the outcome is the opposite of what is expected|saying the opposite|an audience knowing more|=>A fire station burns down.
What is dramatic irony?|the audience knows something a character does not|a character is sarcastic|the ending is a surprise|=>We know the killer is behind the door.
What is suspense?|the tension a reader feels about what will happen|the setting|the theme|=>Keeps you reading.
What is a motif?|a recurring element or idea in a text|a rhyme|a character|=>Repeated images or ideas.
What is a narrator's reliability?|whether the reader can trust the narrator|the narrator's age|the narrator's name|=>An unreliable narrator may mislead.
What is dialogue?|characters' spoken words|the setting|the narrator's thoughts|=>Shown with quotation marks.
What is a monologue?|a long speech by one character|a conversation|a poem|=>One speaker.
What is a soliloquy?|a speech in which a character speaks thoughts aloud, alone|a conversation|a song|=>Often in plays.
What is imagery?|language that appeals to the five senses|a rhyme|the setting|=>Sights, sounds, smells.
Which sentence uses imagery?|The fresh bread's golden crust crackled and filled the kitchen with warmth.|The bread was good.|I like bread.|=>Multiple senses.
What is a conflict?|a struggle between opposing forces|a rhyme|the setting|=>The engine of a plot.
What is the author's purpose?|the reason the author writes|the theme|the setting|=>Inform, persuade, entertain, or explain.
What is a flashforward?|a scene that jumps ahead in time|a flashback|a rhyme|=>Shows the future.
What does 'cite textual evidence' mean?|support your answer with details from the text|give your opinion|summarize|=>Quote or paraphrase the text.
Which is a strong piece of textual evidence for 'The character is brave'?|She stepped into the burning building to save her dog.|She had red hair.|She was eleven.|=>A brave action.
Which is a strong piece of textual evidence for 'The character is lonely'?|He ate lunch alone and stared at the empty chair beside him.|He liked soup.|He wore a coat.|=>Shows isolation.
Which words best describe a character who changes from selfish to generous?|dynamic and developing|flat and static|minor and silent|=>Character growth.
How does an author build suspense?|slow reveals, ticking clocks, and unanswered questions|long descriptions of lunch|a list of facts|=>Withholding information.
What is a plot twist?|an unexpected turn in events|the setting|the rhyme|=>A surprise.
What is an allegory?|a story where characters and events represent abstract ideas|a type of rhyme|a biography|=>Animal Farm.
What is a fable?|a short story teaching a moral, often with animals|a long novel|a poem|=>Aesop's fables.
What is a myth?|a traditional story that explains natural events or beliefs|a modern novel|a biography|=>Greek myths.
What is a legend?|a traditional story about a hero, partly based on history|a modern novel|a poem|=>King Arthur.
What is historical fiction?|a made-up story set in a real time period|a true story|a poem|=>Fiction with real settings.
What is science fiction?|a story based on imagined science or technology|a true story|a poem|=>Often set in the future.
What is a memoir?|a true account of the author's own experiences|a made-up story|a poem|=>First-person nonfiction.
What is an autobiography?|a person's life story written by that person|a story written by another|a novel|=>Written by the subject.
What is a biography?|a person's life story written by someone else|a story about yourself|a novel|=>Written about another.
`);

  /* ---------------- poetry & drama ---------------- */
  A(K("poetry-drama"), `
What is a stanza?|a group of lines in a poem|a rhyme|a theme|=>Like a paragraph.
What is a couplet?|two rhyming lines|four lines|a title|=>Two lines in a row.
What is a quatrain?|a four-line stanza|a two-line stanza|a six-line stanza|=>Quatre means four.
What is a sonnet?|a 14-line poem|a 3-line poem|a 5-line poem|=>Shakespeare wrote many.
What is a haiku?|a three-line poem with 5-7-5 syllables|a 14-line poem|a rhyming couplet|=>Traditional Japanese form.
What is free verse?|poetry without a regular rhyme or meter|poetry with a strict rhyme|prose|=>No set pattern.
What is a limerick?|a humorous five-line poem with an AABBA rhyme|a sad poem|a long poem|=>Silly.
What is a ballad?|a poem that tells a story, often sung|a very short poem|a riddle|=>Narrative poetry.
What is an epic?|a long narrative poem about heroic deeds|a short poem|a riddle|=>The Odyssey.
What is an ode?|a poem that praises something|a poem that mocks|a poem about nothing|=>Praise poem.
What is rhyme scheme?|the pattern of end rhymes|the rhythm|the theme|=>ABAB, AABB.
What rhyme scheme has lines 1 and 3 rhyming and lines 2 and 4 rhyming?|ABAB|AABB|ABBA|=>Alternating.
What is meter?|the pattern of stressed and unstressed syllables|the rhyme|the theme|=>Poetic rhythm.
What is iambic pentameter?|five pairs of unstressed-stressed syllables per line|a haiku form|a rhyme scheme|=>Common in Shakespeare.
What is alliteration?|repetition of beginning consonant sounds|repetition of vowel sounds|a rhyme|=>Peter Piper picked...
What is assonance?|repetition of vowel sounds in nearby words|repetition of consonant sounds|a rhyme|=>'The rain in Spain.'
What is consonance?|repetition of consonant sounds within or at the ends of words|repetition of vowel sounds|a rhyme|=>'Pitter-patter.'
What is onomatopoeia?|a word that imitates a sound|a rhyme|a comparison|=>Buzz, hiss.
What is enjambment?|a sentence or phrase that continues past a line break|a rhyme|a stanza|=>Runs on to the next line.
What is a caesura?|a pause within a line of poetry|a rhyme|a stanza|=>Often marked by punctuation.
What is a refrain?|a line or phrase repeated in a poem or song|a stanza|a title|=>Chorus-like.
What is imagery?|descriptive language that appeals to the senses|a rhyme|a pattern|=>Pictures in the mind.
What is a metaphor?|a direct comparison without like or as|a comparison using like|an exaggeration|=>Life is a journey.
What is a simile?|a comparison using like or as|a direct comparison|an exaggeration|=>Brave as a lion.
What is personification?|giving human qualities to non-human things|a comparison using like|an exaggeration|=>The sun smiled.
What is hyperbole?|extreme exaggeration|understatement|a rhyme|=>I've told you a million times.
What is an apostrophe in poetry?|addressing someone or something not present|a punctuation mark|a rhyme|=>O Death, be not proud.
What is symbolism?|an object or image that stands for an idea|a rhyme|a pattern|=>A rose symbolizes love.
What is tone in poetry?|the speaker's attitude toward the subject|the rhyme|the setting|=>Joyful, bitter.
What is mood in poetry?|the feeling the poem creates in the reader|the speaker's attitude|the rhyme|=>Calm, eerie.
Who is the speaker of a poem?|the voice that talks in the poem|the poet always|the reader|=>May be a persona.
What is a persona?|an invented speaker of a poem|a rhyme|a stanza|=>Not necessarily the poet.
How do line breaks affect a poem?|they control pacing, emphasis, and meaning|they have no effect|they make it prose|=>Where a line ends matters.
What does a poem's title often do?|hint at the subject or theme|state the rhyme scheme|list the stanzas|=>Titles give clues.
What is figurative language?|language that uses figures of speech beyond literal meaning|literal language|a rhyme|=>Similes, metaphors.
Which phrase is figurative?|My heart is a drum.|My heart pumps blood.|My heart is in my chest.|=>A metaphor.
Which phrase is literal?|The cat sat on the mat.|The cat is a tiger.|The cat flew.|=>It states facts.
What is a drama?|a story written to be performed|a poem|a novel|=>A play.
What is a script?|the written text of a play, including dialogue and directions|a poem|a novel|=>Lines and stage directions.
What are stage directions?|notes in a script telling actors and crew what to do|the dialogue|the title|=>Often in italics or parentheses.
What is dialogue in a play?|the words spoken by characters|the stage directions|the title|=>Speech.
What is an act?|a major section of a play|a line|a poem|=>Plays have acts.
What is a scene?|a smaller part of an act set in one place and time|a whole play|a poem|=>Acts are divided into scenes.
What is an aside?|a remark a character makes to the audience, unheard by others|a long speech|a stage direction|=>Quick comment.
What is a soliloquy?|a speech by a character alone on stage revealing thoughts|a conversation|a stage direction|=>Hamlet's 'To be or not to be.'
What is a monologue?|a long speech by one character|a short line|a stage direction|=>Speaks to others on stage.
What is a protagonist in drama?|the main character|the villain|the director|=>The lead.
What are 'props'?|objects used on stage|actors|stage directions|=>Short for properties.
What is a tragedy?|a serious drama that ends badly for the main character|a funny play|a poem|=>Macbeth, Romeo and Juliet.
What is a comedy?|a drama with a humorous tone and a happy ending|a sad play|a poem|=>A Midsummer Night's Dream.
Who wrote Romeo and Juliet?|William Shakespeare|Charles Dickens|Mark Twain|=>Shakespeare.
In a script, what does 'Exit' mean?|a character leaves the stage|a character enters|the play ends|=>Stage direction.
In a script, what does '(angrily)' tell you?|how a character speaks or acts|the setting|the title|=>Delivery direction.
Why do playwrights use stage directions?|to guide actors, directors, and readers|to rhyme|to hide the plot|=>They add detail.
How is a play different from a story?|It is written mostly as dialogue to be performed.|It has no characters.|It has no conflict.|=>Plays rely on speech and action.
How is poetry different from prose?|Poetry uses lines and stanzas; prose uses sentences and paragraphs.|Poetry has no meaning.|Prose rhymes.|=>Different forms.
What does 'denotation' mean?|literal meaning|emotional meaning|rhyme|=>Dictionary definition.
What does 'connotation' mean?|the feelings a word suggests|dictionary meaning|rhyme|=>Emotional associations.
Which word has a connotation of warmth?|cozy|cramped|cold|=>Cozy suggests comfort.
`);

  /* ---------------- informational & argument ---------------- */
  A(K("informational"), `
What is an informational text?|a text that explains facts about a topic|a story|a poem|=>Nonfiction.
What is the central idea of a text?|the main point the author wants to make|a detail|the title|=>The big idea.
What are supporting details?|facts, examples, and evidence that back up the central idea|the central idea|the title|=>Support.
What is a summary?|a brief restatement of the main ideas in your own words|a copy of the text|your opinion|=>Short and objective.
What is a claim?|a statement an author argues is true|a fact|the title|=>The author's position.
What is evidence?|facts, examples, or data that support a claim|an opinion|a title|=>Proof.
What is reasoning?|the explanation of how evidence supports a claim|the evidence|the claim|=>Connects the dots.
What is a counterclaim?|an opposing viewpoint|the main claim|the evidence|=>The other side.
What is a rebuttal?|a response to a counterclaim|a claim|a conclusion|=>Answering the other side.
Which is a fact?|Water boils at 100°C at sea level.|Winter is the best season.|Dogs are better than cats.|=>Can be verified.
Which is an opinion?|Pizza is the most delicious food.|The Earth orbits the Sun.|Water is wet.|=>A personal judgment.
What is a biased source?|one that shows a one-sided or unfair viewpoint|one that is neutral|one that is old|=>Skewed.
What is a credible source?|one that is trustworthy and accurate|one that is popular|one that is funny|=>Reliable.
Which source is the most credible for a report on the heart?|a medical journal|an anonymous blog|a social media post|=>Experts.
What is a primary source?|a firsthand account or original document|a textbook summary|a documentary|=>Letters, diaries.
What is a secondary source?|a source that analyzes or interprets primary sources|a diary|an original photo|=>Textbooks, biographies.
Which is a primary source?|a letter written by a soldier|a textbook about the war|an encyclopedia article|=>Firsthand.
Which is a secondary source?|a biography of Lincoln|Lincoln's own letters|a photograph from 1860|=>Written later by others.
What is a text feature?|a part of a text that helps readers locate or understand information|a rhyme|the theme|=>Headings, captions.
What does a heading do?|labels the content of a section|summarizes the book|rhymes|=>Organizes.
What does a caption do?|explains a picture or graph|names the author|ends the text|=>Text under images.
What does a glossary do?|defines key terms|lists page numbers|tells the plot|=>At the back.
What does an index do?|lists topics alphabetically with page numbers|defines terms|summarizes the text|=>At the back.
What does a sidebar do?|gives extra related information|ends the text|rhymes|=>Boxed text.
What is chronological order?|events in the order they happened|order by importance|alphabetical order|=>Time order.
What is cause and effect structure?|explains why something happens and what results|compares two things|lists steps|=>Because... therefore...
What is compare and contrast structure?|shows similarities and differences|lists steps|tells a story|=>Alike and different.
What is problem and solution structure?|presents a problem and ways to fix it|lists facts|tells a story|=>Issue and answer.
What is description structure?|gives details about a topic|compares two things|lists steps|=>Characteristics.
What signal words suggest cause and effect?|because, since, as a result, therefore|first, next, then|similarly, likewise|=>Show reason and result.
What signal words suggest comparison?|similarly, likewise, both|however, but|first, next|=>Alike.
What signal words suggest contrast?|however, on the other hand, unlike|similarly, both|first, then|=>Different.
What signal words suggest sequence?|first, next, finally|because, so|however, but|=>Order.
What is the author's purpose when explaining how something works?|to inform|to persuade|to entertain|=>Explain.
What is the author's purpose when urging readers to act?|to persuade|to inform|to entertain|=>Argue.
What is the purpose of an advertisement?|to persuade people to buy|to entertain only|to inform neutrally|=>Sell.
What is a loaded word?|a word with strong positive or negative feelings meant to sway readers|a neutral word|a long word|=>Emotional language.
What is bandwagon appeal?|suggesting you should do something because everyone else does|giving facts|naming a source|=>'Everybody's doing it.'
What is an appeal to authority?|using an expert's name to support a claim|using a story|using a rhyme|=>Experts say.
What is an emotional appeal (pathos)?|an appeal to feelings|an appeal to logic|an appeal to character|=>Heartstrings.
What is a logical appeal (logos)?|an appeal to reason using facts|an appeal to feelings|an appeal to character|=>Logic.
What is an ethical appeal (ethos)?|an appeal to the speaker's credibility|an appeal to logic|an appeal to feelings|=>Trust.
What is a stereotype?|an oversimplified idea about a group|a fact|a statistic|=>Unfair generalization.
What is a generalization?|a broad statement from limited examples|a precise fact|an opinion only|=>All dogs bark.
What is a hasty generalization?|a conclusion based on too little evidence|a careful conclusion|a fact|=>I met two rude people, so everyone there is rude.
What is a false cause fallacy?|assuming that because one event follows another, it was caused by it|a true cause|a fact|=>The rooster crows so the sun rises.
What is a circular argument?|using the claim as its own proof|using good evidence|using a statistic|=>It's true because it's true.
What is an either-or fallacy?|presenting only two options when more exist|presenting many options|a fact|=>You're with us or against us.
What is an ad hominem attack?|attacking the person instead of the argument|attacking the argument|citing evidence|=>Name-calling.
What does 'objective' mean?|based on facts, not personal feelings|based on feelings|funny|=>Neutral.
What does 'subjective' mean?|based on personal feelings or opinions|based on facts|measured|=>Opinion-based.
Which sentence is objective?|The museum opens at 9 a.m.|The museum is boring.|The museum is amazing.|=>A fact.
Which sentence is subjective?|The museum is the most interesting place in town.|The museum opens at 9.|The museum has two floors.|=>An opinion.
How do you determine the central idea?|look for repeated ideas and what all the details support|count the paragraphs|look at the first word|=>Big picture.
What is paraphrasing?|restating ideas in your own words|copying exactly|summarizing everything|=>Different words, same meaning.
What is a direct quotation?|the exact words of a source in quotation marks|a paraphrase|a summary|=>Use quotation marks.
Why cite sources?|to give credit and let readers verify information|to make the text longer|to confuse readers|=>Honesty and credibility.
`);

  /* ---------------- writing ---------------- */
  A(K("writing"), `
What are the parts of an argumentative essay?|introduction with a claim, body paragraphs with evidence, and a conclusion|a poem, a story, and a title|only a list|=>Claim, evidence, conclusion.
What is a thesis statement?|a sentence that states the main claim or controlling idea|the title|the last sentence|=>Usually in the introduction.
Which is a strong thesis?|School uniforms should be required because they reduce distractions and promote equality.|Uniforms are okay.|I like uniforms.|=>Clear claim with reasons.
Which is a weak thesis?|Uniforms exist.|Schools should require uniforms because they reduce distractions.|Required uniforms reduce bullying and distraction.|=>It makes no claim.
What does a topic sentence do?|states the main idea of a paragraph|ends the essay|gives the title|=>Starts the paragraph.
What is a concluding sentence?|a sentence that wraps up a paragraph|a topic sentence|a quote|=>Closes the idea.
What is a transition?|a word or phrase connecting ideas|a thesis|a quote|=>However, in addition.
Which is a transition that adds information?|furthermore|however|although|=>Furthermore adds.
Which is a transition that shows contrast?|however|furthermore|likewise|=>However contrasts.
Which is a transition that shows cause?|because|then|meanwhile|=>Because explains why.
Which is a transition that shows time?|meanwhile|therefore|however|=>Time order.
What is an introduction's job?|hook the reader and present the thesis|restate the title|list the sources|=>Opening.
What is a hook?|an opening that grabs the reader's attention|the thesis|the end|=>A question or surprising fact.
Which is a good hook for an essay about recycling?|Every minute, one million plastic bottles are bought around the world.|Recycling is a thing.|I will write about recycling.|=>A striking fact.
What is a conclusion's job?|restate the claim and leave a final thought|add new evidence|list the sources|=>Wraps up.
What is a counterargument?|an opposing position|your thesis|a quotation|=>Other side.
Why include a counterargument?|to show you understand other views and strengthen your argument|to weaken your essay|to lengthen the essay|=>Rebuttal strengthens.
What is expository writing?|writing that explains or informs|writing that tells a story|writing that persuades|=>Informs.
What is narrative writing?|writing that tells a story|writing that explains|writing that persuades|=>Real or imagined.
What is persuasive writing?|writing that convinces the reader|writing that tells a story|writing that lists|=>Argues a position.
What is descriptive writing?|writing that paints a picture with details|writing that argues|writing that lists steps|=>Sensory details.
What is the first step in the writing process?|prewriting|drafting|publishing|=>Plan first.
What is revising?|improving ideas, organization, and word choice|fixing spelling only|publishing|=>Big-picture changes.
What is editing?|fixing grammar, spelling, and punctuation|brainstorming|adding new ideas|=>Conventions.
What is proofreading?|checking for mistakes in the final copy|brainstorming|planning|=>Last check.
What is a graphic organizer?|a visual tool for planning ideas|a final copy|a thesis|=>Webs and charts.
What is a first-person narrator?|a narrator who tells the story using I|a narrator who uses he or she|a narrator who uses you|=>I walked...
What is dialogue?|characters' spoken words|the setting|the plot|=>Use quotation marks.
How do you punctuate dialogue?|use quotation marks and a comma or end mark before the closing mark|use parentheses|use a colon|=>"Come here," she said.
Which is correctly punctuated?|"I'm leaving," said Dan.|"I'm leaving" said Dan.|"I'm leaving", said Dan.|=>Comma inside the quotation marks.
What is sensory detail?|description that appeals to sight, sound, smell, taste, or touch|a fact|a quote|=>Vivid.
What is 'show, don't tell'?|use details and actions rather than stating feelings|only tell|only describe|=>He clenched his fists vs. He was angry.
Which sentence shows rather than tells?|Her hands trembled as she opened the envelope.|She was nervous.|She felt nervous.|=>Shows through action.
What is pacing?|the speed at which a story unfolds|the setting|the theme|=>Slow or fast.
What is a strong verb?|a precise verb that gives a clear image|a weak verb|a noun|=>Sprinted vs. went.
Which is the stronger verb?|sprinted|went|moved|=>Specific.
What is concise writing?|using the fewest words to be clear|using many words|using long words|=>Cut extras.
Which sentence is more concise?|We left at noon.|We went out and left at around about twelve noon.|At approximately noon, we departed.|=>Fewer words.
What is parallel structure?|using the same grammatical form for items in a list|using different forms|using long sentences|=>Run, jump, and swim.
Which sentence has parallel structure?|She likes hiking, biking, and swimming.|She likes hiking, to bike, and swims.|She likes hiking, biking, and to swim.|=>All -ing forms.
What is a run-on sentence?|two or more independent clauses joined incorrectly|a short sentence|a fragment|=>Needs punctuation or a conjunction.
What is a sentence fragment?|an incomplete sentence|a long sentence|a question|=>Missing subject or verb.
What is a comma splice?|joining two independent clauses with only a comma|a list|a quote|=>Fix with a period, semicolon, or conjunction.
How can you fix a comma splice?|use a period, semicolon, or a conjunction|add another comma|remove the subject|=>Several fixes.
What is voice in writing?|the writer's unique style and personality|the narrator|the title|=>How it sounds.
What is organization?|how ideas are arranged logically|the length|the grammar|=>Order.
What is audience?|the readers you write for|the writer|the title|=>Tailor your language.
What is purpose?|the reason for writing|the audience|the title|=>Inform, persuade, entertain.
How does audience affect word choice?|you choose language that suits the readers|it doesn't|you always use slang|=>Formal vs. informal.
What is formal tone?|serious and professional language|casual slang|text speak|=>For essays and letters.
What is a paragraph?|a group of sentences about one main idea|a single sentence|a title|=>Topic plus details.
What should each body paragraph include?|a topic sentence, evidence, and explanation|only a quote|only opinions|=>The standard structure.
How do you integrate a quotation?|introduce it, quote it, and explain it|drop it in without explanation|put it first without context|=>Introduce–quote–explain.
Which signal phrase introduces evidence well?|According to the article,|It is a fact that,|Whatever,|=>Attribution.
What is plagiarism?|presenting someone else's words or ideas as your own|quoting with credit|paraphrasing with credit|=>Always cite.
What is a works cited list?|a list of sources you used|a list of your ideas|a table of contents|=>Credits.
`);

  /* ---------------- grammar, usage & mechanics ---------------- */
  (function () {
    const out = [];
    const conf = [
      ["The weather will ___ our plans.", "affect", "effect", "affect is a verb meaning to influence."], ["The ___ of the storm was heavy rain.", "effect", "affect", "effect is a noun meaning result."],
      ["Please ___ my apology.", "accept", "except", "accept means to receive."], ["Everyone ___ Tom came.", "except", "accept", "except means excluding."],
      ["Our ___ is Ms. Lee.", "principal", "principle", "principal can mean head of a school."], ["It is a matter of ___.", "principle", "principal", "principle means a rule or belief."],
      ["That ___ looks great on you.", "compliment", "complement", "compliment means praise."], ["Blue is a ___ of orange.", "complement", "compliment", "complement means something that completes."],
      ["I need your ___ about the project.", "advice", "advise", "advice is a noun."], ["I ___ you to study.", "advise", "advice", "advise is a verb."],
      ["We walked ___ than before.", "farther", "further", "farther is used for physical distance."], ["Let's discuss this ___.", "further", "farther", "further means additional."],
      ["There are ___ cookies than yesterday.", "fewer", "less", "Use fewer with countable nouns."], ["There is ___ milk in the glass.", "less", "fewer", "Use less with uncountable nouns."],
      ["The prize was split ___ the two of us.", "between", "among", "between is for two."], ["The prize was split ___ the five of us.", "among", "between", "among is for three or more."],
      ["___ coat is this?", "Whose", "Who's", "whose shows possession."], ["___ going to the game?", "Who's", "Whose", "who's = who is."],
      ["Don't ___ your keys.", "lose", "loose", "lose is a verb meaning to misplace."], ["The screw is ___.", "loose", "lose", "loose means not tight."],
      ["She is taller ___ her brother.", "than", "then", "than compares."], ["First we ate, and ___ we left.", "then", "than", "then relates to time."],
      ["The ___ of Virginia is Richmond.", "capital", "capitol", "capital = city."], ["The senators met in the ___ building.", "Capitol", "capital", "Capitol = building."],
      ["The dog wagged ___ tail.", "its", "it's", "its shows possession."], ["___ been a long day.", "It's", "Its", "it's = it is / it has."],
      ["___ going to be fun.", "They're", "Their", "they're = they are."], ["The students left ___ books.", "their", "there", "their shows possession."],
      ["Put the box over ___.", "there", "their", "there points to a place."], ["___ going to love it.", "You're", "Your", "you're = you are."],
      ["Is this ___ jacket?", "your", "you're", "your shows possession."], ["Please ___ the book on the table.", "lay", "lie", "lay means to put something down."],
      ["I need to ___ down for a nap.", "lie", "lay", "lie means to recline."], ["He ___ the book on the desk yesterday.", "laid", "lay", "laid is the past of lay."],
      ["The teacher will ___ us the answer.", "tell", "say", "tell takes an object."], ["She ___ goodbye.", "said", "told", "said takes a quote."],
      ["May I ___ your pencil?", "borrow", "lend", "borrow = receive."], ["Please ___ me your pencil.", "lend", "borrow", "lend = give."],
      ["He was ___ to the party.", "invited", "invite", "Use the past participle."], ["We ___ the answer.", "knew", "new", "knew is past tense of know."],
      ["Wear a coat; it is ___ outside.", "cold", "cool", "Use the best fit."]
    ].filter((x) => !/Use the best fit/.test(x[3]));
    conf.forEach(([q, r, w, e]) => out.push(line(`Choose the correct word.{nl}${q}`, r, [w], e)));
    const verbs = [["swim", "swam", "swum"], ["write", "wrote", "written"], ["break", "broke", "broken"], ["choose", "chose", "chosen"], ["drive", "drove", "driven"], ["eat", "ate", "eaten"], ["fall", "fell", "fallen"], ["give", "gave", "given"], ["go", "went", "gone"], ["know", "knew", "known"], ["ride", "rode", "ridden"], ["see", "saw", "seen"], ["sing", "sang", "sung"], ["take", "took", "taken"], ["throw", "threw", "thrown"], ["wear", "wore", "worn"], ["begin", "began", "begun"], ["drink", "drank", "drunk"], ["fly", "flew", "flown"], ["grow", "grew", "grown"], ["speak", "spoke", "spoken"], ["steal", "stole", "stolen"]];
    verbs.forEach(([b, p, pp]) => {
      out.push(line(`What is the past participle of '${b}'? (She has ___.)`, pp, [p === pp ? b + "ed" : p, b + "ed", b], `have/has + ${pp}.`));
      out.push(line(`What is the simple past tense of '${b}'?`, p, [pp === p ? b + "ed" : pp, b + "ed", b], `Yesterday, I ${p}.`));
    });
    const parts = [
      ["Because it rained, we stayed inside.", "complex", ["simple", "compound", "compound-complex"], "It has a dependent clause starting with Because."],
      ["The dog barked.", "simple", ["compound", "complex", "compound-complex"], "One independent clause."],
      ["I like tea, and she likes coffee.", "compound", ["simple", "complex", "compound-complex"], "Two independent clauses joined by and."],
      ["Although it was late, we kept playing, and nobody complained.", "compound-complex", ["simple", "compound", "complex"], "Two independent clauses and one dependent clause."],
      ["We ate dinner, then we washed the dishes.", "compound", ["simple", "complex", "compound-complex"], "Two independent clauses."],
      ["When the bell rang, the students left.", "complex", ["simple", "compound", "compound-complex"], "One dependent clause and one independent clause."],
      ["She sang and danced.", "simple", ["compound", "complex", "compound-complex"], "A compound predicate, but one clause."],
      ["Mia ran, but Leo walked.", "compound", ["simple", "complex", "compound-complex"], "Joined with but."]
    ];
    parts.forEach(([s, r, w, e]) => out.push(line(`What type of sentence is this?{nl}${s}`, r, w, e)));
    out.push(
      "What is a noun?|a person, place, thing, or idea|an action|a describing word|=>Names.",
      "What is a verb?|a word that shows action or state of being|a person|a describing word|=>Run, is.",
      "What is an adjective?|a word that describes a noun|a word that describes a verb|a connecting word|=>Tall tree.",
      "What is an adverb?|a word that describes a verb, adjective, or another adverb|a person|a place|=>Ran quickly.",
      "What is a preposition?|a word that shows a relationship, like in, on, or under|an action|a person|=>Under the bridge.",
      "What is a conjunction?|a word that connects words or clauses|an action|a person|=>and, but, or.",
      "What are the coordinating conjunctions?|for, and, nor, but, or, yet, so|because, although, since|however, therefore|=>FANBOYS.",
      "What is an interjection?|a word expressing strong feeling|a connecting word|a describing word|=>Wow! Oh!",
      "What is a pronoun?|a word that takes the place of a noun|a describing word|an action|=>He, she, it.",
      "What is an independent clause?|a group of words with a subject and verb that can stand alone|a fragment|a phrase|=>A complete thought.",
      "What is a dependent clause?|a group of words with a subject and verb that cannot stand alone|a sentence|an interjection|=>Because I was tired.",
      "What is a phrase?|a group of words without both a subject and a verb|a clause|a sentence|=>In the morning.",
      "When do you use a comma with a coordinating conjunction?|between two independent clauses|between a subject and verb|before every 'and'|=>I ran, and she walked.",
      "Which sentence uses commas correctly in a list?|We bought apples, oranges, and grapes.|We bought, apples oranges and grapes.|We bought apples oranges, and, grapes.|=>Commas separate items.",
      "Which sentence uses a semicolon correctly?|I love soccer; my brother prefers baseball.|I love; soccer my brother prefers baseball.|I love soccer; and my brother prefers baseball.|=>A semicolon joins two related independent clauses.",
      "Which sentence uses a colon correctly?|You will need three things: a pencil, paper, and a ruler.|You will need: a pencil, paper, and a ruler.|You: will need a pencil.|=>Use after a complete sentence.",
      "Which uses an apostrophe correctly?|The students' books are on the desk.|The students book's are on the desk.|The student's' books are on the desk.|=>Plural possessive.",
      "Which uses an apostrophe correctly?|It's raining.|Its raining.|Its' raining.|=>It's = it is.",
      "Which uses a dash correctly?|The answer—surprisingly—was simple.|The answer-surprisingly-was simple.|The answer—surprisingly was simple.|=>Em dashes set off an interruption.",
      "Which is the correct pronoun? 'Between you and ___, the test was hard.'|me|I|myself|=>Object of a preposition.",
      "Which is the correct pronoun? 'Sam and ___ went to the store.'|I|me|myself|=>Subject.",
      "Which is correct?|Who is calling?|Whom is calling?|Whose is calling?|=>Who is the subject.",
      "Which is correct?|To whom did you give the book?|To who did you give the book?|To whose did you give the book?|=>Whom is the object of the preposition.",
      "Which pair agrees in number?|The team is winning.|The team are winning.|The team were winning.|=>Collective noun (singular).",
      "Which pair agrees in number?|Each of the students has a pencil.|Each of the students have a pencil.|Each of the students are having a pencil.|=>Each is singular.",
      "Which pair agrees in number?|Neither the boys nor the girl is ready.|Neither the boys nor the girl are ready.|Neither the boys nor the girl were ready.|=>The verb agrees with the nearer subject.",
      "Which pair agrees in number?|The books on the shelf are old.|The books on the shelf is old.|The books on the shelf was old.|=>Books is plural.",
      "Which pair agrees in number?|My friend and I are going.|My friend and I is going.|My friend and I am going.|=>Compound subject is plural.",
      "What is a dangling modifier?|a modifier that doesn't clearly modify anything in the sentence|a correct modifier|a noun|=>Walking to school, the rain started.",
      "Which sentence has a dangling modifier?|Walking to school, the rain started.|Walking to school, I got wet in the rain.|I got wet walking to school.|=>The rain wasn't walking.",
      "Which sentence fixes the dangling modifier? 'Running late, the bus left.'|Running late, I missed the bus.|Running late, the bus was gone.|The bus left running late.|=>Adds the person who was running.",
      "What is a misplaced modifier?|a modifier placed too far from the word it modifies|a correct modifier|a pronoun|=>I almost ate the whole pie.",
      "Which sentence has parallel structure?|She likes to run, swim, and bike.|She likes running, to swim, and biking.|She likes to run, swimming, and bike.|=>Same form.",
      "What is active voice?|the subject performs the action|the subject receives the action|the subject is missing|=>The dog chased the cat.",
      "What is passive voice?|the subject receives the action|the subject performs the action|there is no verb|=>The cat was chased by the dog.",
      "Which sentence is in passive voice?|The window was broken by the ball.|The ball broke the window.|The ball is round.|=>Subject receives the action.",
      "Which sentence is in active voice?|The chef cooked the meal.|The meal was cooked by the chef.|The meal was cooked.|=>Subject acts.",
      "Which sentence is in the past perfect tense?|She had finished before noon.|She finishes before noon.|She will finish before noon.|=>had + past participle.",
      "Which sentence is in the future tense?|They will arrive tomorrow.|They arrived yesterday.|They are arriving now.|=>will + verb.",
      "Which sentence is in the present perfect tense?|He has finished his homework.|He finished his homework.|He will finish his homework.|=>has + past participle.",
      "Which sentence has correct capitalization?|The Mississippi River flows south.|The mississippi river flows south.|The Mississippi river flows South.|=>Proper nouns.",
      "Which sentence has correct capitalization?|My aunt is a doctor.|My Aunt is a Doctor.|my aunt is a doctor.|=>Titles used generally aren't capitalized.",
      "Which is correctly capitalized?|Aunt Maria called.|aunt maria called.|Aunt maria called.|=>Title with a name is capitalized.",
      "What is a gerund?|a verb form ending in -ing used as a noun|a verb|an adjective|=>Swimming is fun.",
      "What is an infinitive?|'to' plus a verb|a noun|a verb ending in -ed|=>To swim.",
      "What is a participle?|a verb form used as an adjective|a noun|an adverb|=>A broken window.",
      "What is an appositive?|a noun phrase that renames another noun|a verb|an adverb|=>My dog, Max, is friendly.",
      "Which sentence uses an appositive correctly?|My cousin, a pilot, flies planes.|My cousin a pilot flies planes.|My cousin, flies a pilot, planes.|=>Set off with commas."
    );
    A(K("grammar"), out);
  })();

  /* ---------------- research & citation ---------------- */
  A(K("research"), `
What is the first step of research?|choose a topic and ask a question|write the bibliography|publish|=>Start with a question.
What is a research question?|a focused question your research will answer|a topic|an opinion|=>Guides the research.
Which is a good research question?|How did the invention of the printing press change education in Europe?|Books.|Printing is nice.|=>Focused and answerable.
What is a primary source?|an original, firsthand account|a summary by someone else|a textbook|=>Diaries and photos.
What is a secondary source?|a source that interprets or analyzes primary sources|an original document|a letter|=>Textbooks.
Which is a primary source?|a speech given by Martin Luther King Jr.|an encyclopedia article about him|a textbook chapter|=>Original.
Which is a secondary source?|a documentary about the Civil War|a soldier's diary|an original photograph|=>Created later.
What does 'credible' mean?|trustworthy and believable|popular|funny|=>Reliable.
Which clue shows a website is credible?|an author with expertise and cited sources|bright colors|lots of ads|=>Expertise and evidence.
Which website ending is typically a government site?|.gov|.com|.biz|=>Government.
Which website ending is typically an educational institution?|.edu|.gov|.net|=>Education.
What does CRAAP stand for in evaluating sources?|Currency, Relevance, Authority, Accuracy, Purpose|Creative, Real, Awesome, Accurate, Popular|Clear, Right, Actual, Authentic, Public|=>A source evaluation checklist.
What does 'currency' mean when evaluating a source?|how recent the information is|how popular it is|how long it is|=>Timeliness.
What does 'authority' mean when evaluating a source?|the author's credentials and expertise|the length|the color|=>Who wrote it.
What does 'bias' mean?|a preference or slant that affects objectivity|an exact fact|a type of source|=>One-sided.
How can you detect bias?|look for loaded language and missing viewpoints|count the words|look at fonts|=>Check tone.
What is paraphrasing?|restating ideas in your own words and citing the source|copying exactly|ignoring the source|=>Still needs a citation.
What is plagiarism?|using someone else's words or ideas without credit|using quotes with credit|summarizing with credit|=>Academic dishonesty.
Which is plagiarism?|copying a paragraph without credit|quoting with quotation marks and a citation|paraphrasing with a citation|=>No credit given.
How can you avoid plagiarism?|use your own words, quote exactly, and cite sources|copy and paste|skip citations|=>Credit your sources.
What is a direct quotation?|the exact words from a source, in quotation marks|a paraphrase|a summary|=>Cite it.
What is a citation?|credit that tells where information came from|a quote|a summary|=>Source reference.
What is a bibliography (works cited)?|a list of all sources used|a table of contents|an index|=>Alphabetical list.
How are works cited entries usually arranged?|alphabetically by author's last name|by date only|by length|=>A to Z.
What should a citation include?|author, title, publisher or website, and date|only the title|only a link|=>Enough to locate it.
What is a keyword?|an important word used to search for information|a long word|a citation|=>Search term.
Which keyword search will give the most focused results about Virginia's state bird?|cardinal Virginia state bird|bird|Virginia|=>Specific terms.
What are Boolean operators?|words like AND, OR, NOT used to refine searches|spelling rules|citations|=>Narrow or broaden.
What does AND do in a search?|narrows results by requiring both terms|broadens results|excludes a term|=>Both terms.
What does OR do in a search?|broadens results to include either term|narrows results|excludes a term|=>Either term.
What does NOT do in a search?|excludes a term|requires both terms|broadens results|=>Excludes.
What is a database?|an organized collection of information that can be searched|a citation|a quote|=>Library resources.
What is an index in a book?|an alphabetical list of topics and page numbers|a list of sources|a summary|=>Locate topics.
What is a table of contents?|a list of chapters and page numbers|an alphabetical list|a summary|=>At the front.
What is a glossary?|a list of terms and definitions|a list of sources|an index|=>At the back.
What are notes?|brief records of important information from sources|full copies of sources|your final paper|=>Short summaries.
What is an outline?|a plan showing the main points and supporting details|the final copy|a bibliography|=>Structure.
What does a thesis statement do in a research paper?|states the main claim the paper supports|lists the sources|defines terms|=>Controlling idea.
What is a fact-check?|verifying information with reliable sources|writing a summary|citing a source|=>Confirm accuracy.
What is a reliable way to confirm a surprising fact?|check at least two credible sources|trust a single post|assume it's true|=>Corroboration.
What does 'corroborate' mean?|to confirm with additional evidence|to copy|to ignore|=>Support.
What does 'cite' mean?|to give credit to a source|to ignore a source|to copy|=>Name it.
What is an annotated bibliography?|a bibliography with brief notes about each source|a list of titles only|a summary|=>Adds commentary.
Which type of source gives an overview of a topic?|encyclopedia|diary|letter|=>Reference.
Which source is best for the latest scientific research?|a peer-reviewed journal|an old textbook|a rumor|=>Experts review it.
What does 'peer-reviewed' mean?|checked by other experts before publication|written by classmates|a type of poem|=>Quality control.
What is an interview?|asking an expert questions to gather information|reading a book|writing a summary|=>Primary source.
What should you do before interviewing someone?|prepare questions|skip planning|record without asking|=>Be ready.
What should you do first when using a quote from a website?|record the URL and date accessed|ignore it|copy it without credit|=>Cite it.
`);

  /* ---------------- communication & media literacy ---------------- */
  A(K("media"), `
What is media?|means of communicating information to many people|a single letter|a private note|=>TV, news, internet.
What is media literacy?|the ability to analyze and evaluate media messages|reading only books|watching only TV|=>Think critically.
What is a media message?|information created to inform, persuade, or entertain|a private conversation|a recipe|=>Every message has a purpose.
Who creates media messages?|people with a purpose and point of view|only machines|nobody|=>Creators make choices.
What is the purpose of an advertisement?|to persuade people to buy something|to teach history|to rhyme|=>Selling.
What is a target audience?|the group of people a message is meant to reach|every person|nobody|=>Intended viewers.
What is propaganda?|biased information used to promote a cause|neutral news|a textbook|=>Persuasion that may mislead.
What is a persuasive technique?|a method used to convince an audience|a rhyme|a fact|=>Like bandwagon or testimonial.
What is bandwagon?|saying everyone is doing something so you should too|giving facts|citing experts|=>Join the crowd.
What is a testimonial?|a statement from a person endorsing a product|a scientific study|a rhyme|=>Celebrity ads.
What is a celebrity endorsement?|a famous person promoting a product|a fact|a study|=>Star power.
What is emotional appeal?|persuading by stirring feelings|persuading with facts|persuading with experts|=>Pathos.
What is a loaded word?|a word with strong emotional meaning meant to sway|a neutral word|a long word|=>Slanted language.
What is a slogan?|a short, catchy phrase used in advertising|a paragraph|a fact|=>Just do it.
What is a claim in an ad?|a statement about what the product can do|a rhyme|a quote|=>Best, fastest.
What is a weasel word?|a vague word that avoids a firm claim, like 'helps' or 'may'|a precise word|a fact|=>Helps relieve.
What is a fact?|a statement that can be proven|an opinion|a slogan|=>Verifiable.
What is an opinion?|a personal belief|a statement that can be proven|a statistic|=>Judgment.
What does 'fake news' often try to do?|mislead or get clicks|inform accurately|teach|=>Misinformation.
What is misinformation?|false information spread, sometimes by mistake|true information|a fact|=>Incorrect.
What is disinformation?|false information spread on purpose|an accident|a fact|=>Intentional.
How can you check whether a news story is true?|compare it with other reliable sources|trust the first post|check the number of likes|=>Verify.
What is a reliable news source?|one that cites sources and corrects errors|one with the most ads|one with the most likes|=>Accountable.
What is the difference between news and opinion?|news reports facts; opinion shares a viewpoint|they are the same|opinion is always facts|=>Know the difference.
What is a headline?|the title of a news story|the conclusion|an ad|=>Grabs attention.
What is clickbait?|a headline designed to get you to click, often exaggerated|an accurate headline|a fact|=>Sensational.
What is a byline?|the line that tells who wrote an article|the title|the date|=>Author credit.
What is a caption?|text that explains a photo|a headline|a slogan|=>Beneath images.
Why can photos be misleading?|they can be cropped, edited, or lack context|they never lie|they are always true|=>Check the context.
What is context?|the surrounding information that helps explain something|the title|the author|=>Background.
What is a digital footprint?|the trail of data you leave online|a physical print|a type of shoe|=>Your online record.
Why should you think before posting online?|posts can last and be seen by many|posts disappear instantly|nobody sees them|=>Posts are permanent.
What is cyberbullying?|using technology to harass or hurt someone|texting a friend|playing a game|=>Never okay.
What should you do if you see cyberbullying?|report it and support the target|join in|ignore it|=>Be an upstander.
What is a strong password?|long, unique, and hard to guess|your name|1234|=>Keeps accounts safe.
What is privacy?|keeping personal information protected|sharing everything|posting your address|=>Safety.
What personal information should you NOT share online?|home address, passwords, and phone number|favorite color|favorite food|=>Keep it private.
What is plagiarism?|using someone's work without credit|citing a source|writing your own|=>Always credit creators.
What is copyright?|legal protection for creators' original works|a type of font|a rule for spelling|=>Ownership.
What is a speech's purpose?|to inform, persuade, or entertain|to rhyme|to hide ideas|=>Know your goal.
What makes a good presentation?|clear organization, eye contact, and visuals that help|reading every word from slides|mumbling|=>Engage the audience.
What is eye contact?|looking at your audience|looking at the floor|looking at the ceiling|=>Connects with listeners.
What is a visual aid?|a chart, picture, or slide that supports your talk|a script|a quote|=>Helps understanding.
What should a slide contain?|key points, not whole paragraphs|every word you will say|nothing|=>Keep it brief.
What is tone of voice?|the attitude your voice conveys|the volume only|the topic|=>Sounds serious or cheerful.
What is active listening?|focusing, understanding, and responding thoughtfully|talking while others speak|ignoring the speaker|=>Engage.
What is a good follow-up question?|Can you explain why you think that?|Whatever.|You're wrong.|=>Shows interest.
What is a collaborative discussion?|a conversation where everyone shares and builds on ideas|a debate won by volume|a lecture|=>Respectful teamwork.
What is a debate?|a formal discussion where sides argue opposing positions|a casual chat|a story|=>Structured argument.
What is a rebuttal?|a response that challenges the other side's argument|a claim|a conclusion|=>Counterargument.
What is body language?|nonverbal communication through posture and gestures|spoken words|written words|=>Say it without talking.
Which body language shows confidence?|standing tall and making eye contact|crossing arms and looking away|hiding|=>Positive posture.
What does 'tone' mean in a media message?|the attitude the creator shows toward the subject|the topic|the length|=>Serious, humorous.
What is satire?|using humor or exaggeration to criticize something|a news report|a recipe|=>The Onion.
What is a podcast?|a digital audio program|a printed magazine|a billboard|=>Audio media.
What is a documentary?|a nonfiction film that informs|a fictional movie|a cartoon|=>Real events.
What is a blog?|an online journal or website of posts|a printed book|a newspaper|=>Often personal.
What is a social media algorithm?|a system that decides what content to show you|a person|a rule of grammar|=>Shapes your feed.
What is an echo chamber?|an environment where you only hear views like your own|a quiet room|a debate|=>Limits perspectives.
`);

  /* ---------------- reading skills (grade 7) ---------------- */
  A(R("central-idea"), `
What is the central idea of a text?|the most important point the author makes|a small detail|the title only|=>The big idea.
How is a central idea different from a topic?|A topic is the subject; the central idea is what the author says about it.|They are the same.|A topic is longer.|=>Topic = subject; central idea = message about it.
What are supporting details?|facts, examples, or reasons that explain the central idea|the central idea|the title|=>Support.
Which statement is most likely a central idea?|Regular exercise improves both physical and mental health.|Exercise can include running.|Some people jog in the morning.|=>It covers all details.
Which statement is most likely a detail?|A 30-minute walk can lift your mood.|Exercise is good.|Everyone should be healthy.|=>It is specific.
How do you write an objective summary?|restate the main ideas in your own words without opinions|add your opinion|copy the text|=>Stay neutral.
Which belongs in an objective summary?|the central idea and key supporting points|your opinion of the author|a long quotation|=>Key points only.
Which does NOT belong in an objective summary?|personal opinions|the central idea|key details|=>Keep it objective.
What is chronological structure?|events in time order|events by importance|alphabetical order|=>Time order.
What is cause-and-effect structure?|explains why events happen and their results|lists steps|compares things|=>Reasons and results.
What is compare-and-contrast structure?|shows similarities and differences|lists steps|tells a story|=>Alike and different.
What is problem-and-solution structure?|identifies a problem and proposes fixes|lists facts|tells a story|=>Issue and answer.
What is spatial or descriptive structure?|details arranged by location or characteristic|time order|importance|=>Top to bottom or left to right.
What is order of importance?|details arranged from most to least (or least to most) important|time order|alphabetical|=>Emphasis.
What signal words show cause and effect?|because, therefore, as a result|first, next, then|similarly, likewise|=>Reasons.
What signal words show sequence?|first, then, finally|because, so|however, but|=>Time order.
What signal words show contrast?|however, unlike, on the other hand|similarly, also|first, next|=>Differences.
What signal words show comparison?|similarly, likewise, both|however, but|first, then|=>Likenesses.
How does a heading help a reader?|it previews the section and organizes ideas|it hides ideas|it ends the text|=>Navigation.
How does a text structure affect meaning?|it shapes how ideas relate and how readers understand them|it has no effect|it changes facts|=>Organization matters.
How does a paragraph relate to the central idea?|each paragraph develops part of it|paragraphs are unrelated|paragraphs repeat it|=>Building blocks.
What is the purpose of an introduction?|to present the topic and central idea|to end the text|to list sources|=>Opening.
What is the purpose of a conclusion?|to wrap up the ideas and reinforce the central idea|to add new topics|to list sources|=>Closing.
If a text spends most paragraphs describing the effects of pollution, what is the likely structure?|cause and effect|chronological|problem and solution only|=>Focuses on effects.
Which sentence is a good summary starter?|The text explains how...|I think...|This was boring...|=>Neutral.
What does 'infer' mean?|use clues and prior knowledge to reach a conclusion|copy a detail|guess without evidence|=>Reading between the lines.
What does it mean to analyze a text?|break it into parts to understand how they work together|memorize it|skim it|=>Close reading.
What does 'evidence' mean in a reading response?|specific details from the text that support your idea|your opinion|the title|=>Proof.
What is a direct quote?|the exact words from the text in quotation marks|a paraphrase|a summary|=>Exact words.
What is paraphrasing?|restating a passage in your own words|copying|ignoring|=>Same meaning, new words.
What is the difference between summary and paraphrase?|A summary shortens the whole text; a paraphrase restates a specific passage.|They are the same.|A summary is longer.|=>Different scope.
How can you identify the author's purpose?|ask why the author wrote it: to inform, persuade, or entertain|count the words|look at the cover|=>Purpose guides content.
What is an author's point of view?|the author's perspective or attitude toward the topic|the setting|the plot|=>Stance.
How do word choices show an author's point of view?|loaded or emotional words reveal attitude|they don't|they hide it|=>Connotation.
How do you find a central idea in a long text?|look for ideas repeated across paragraphs|read the first word only|count the commas|=>Patterns.
Which is a topic?|renewable energy|Renewable energy is becoming cheaper every year.|Solar panels can be installed on roofs.|=>A topic is a subject, not a sentence.
Which is a central idea?|Renewable energy is becoming cheaper every year.|renewable energy|solar|=>A full idea.
How many central ideas can a long text have?|one overall, with each section supporting it|ten unrelated|none|=>One overarching main idea.
What is an implicit central idea?|one that is implied and not directly stated|one stated directly|a title|=>Must be inferred.
What is an explicit central idea?|one stated directly in the text|one that is hidden|a title|=>Clear.
`);

  A(R("inference-tone"), `
What is an inference?|a conclusion based on text evidence and background knowledge|a direct quote|a guess without evidence|=>Evidence plus reasoning.
What does 'tone' mean?|the author's attitude toward the subject|the reader's feelings|the setting|=>Word choice shows tone.
What does 'mood' mean?|the feeling the text creates for the reader|the author's attitude|the setting|=>How you feel while reading.
How are tone and mood different?|tone is the author's attitude; mood is the reader's feeling|they are the same|mood is the author's attitude|=>Different perspectives.
Which word describes a humorous tone?|playful|bitter|solemn|=>Playful suggests humor.
Which word describes a serious tone?|solemn|playful|silly|=>Solemn is serious.
Which word describes a critical tone?|disapproving|admiring|cheerful|=>Disapproving criticizes.
Which word describes an admiring tone?|reverent|sarcastic|bitter|=>Respectful admiration.
Which word describes a sarcastic tone?|mocking|sincere|hopeful|=>Sarcasm mocks.
Which word describes a hopeful tone?|optimistic|pessimistic|angry|=>Looking forward positively.
What tone does this show? 'The dismal, gray morning dragged on forever.'|gloomy|cheerful|excited|=>Dismal and gray signal gloom.
What tone does this show? 'What a splendid surprise! The party was perfect!'|enthusiastic|bitter|bored|=>Exclamations and positive words.
What tone does this show? 'Oh sure, because waiting an hour is exactly what I wanted.'|sarcastic|joyful|sincere|=>The opposite of the literal meaning.
What does word choice reveal?|the author's tone and attitude|the setting only|the page count|=>Diction matters.
What does 'connotation' mean?|the feelings a word suggests|its dictionary definition|its spelling|=>Associations.
Which word has a more negative connotation: 'slender' or 'scrawny'?|scrawny|slender|They are the same|=>Scrawny suggests unhealthy.
Which word has a more positive connotation: 'frugal' or 'stingy'?|frugal|stingy|They are the same|=>Frugal suggests smart saving.
What is a character's motivation?|the reason a character acts a certain way|the setting|the theme|=>Why.
How can you infer a character's feelings?|from actions, dialogue, and thoughts|from the title only|from the page number|=>Indirect clues.
If a character clenches fists and stomps away, you can infer…|anger|joy|boredom|=>Body language reveals feeling.
If a character glances at the clock repeatedly, you can infer…|impatience or anxiety|calm|sleepiness|=>Time checks show restlessness.
If a character avoids eye contact and mumbles, you can infer…|shyness or discomfort|confidence|anger|=>Nonverbal cues.
What does 'author's perspective' mean?|the author's viewpoint shaped by experience|the narrator's name|the genre|=>Position.
How can you tell an author's perspective?|from the evidence and language they choose|from the title only|from the page count|=>Analyze word choice.
What is bias in writing?|a one-sided view that favors one position|an unbiased fact|a type of evidence|=>Slant.
How can you identify bias?|look for loaded words and missing viewpoints|count the paragraphs|look at the font|=>Look at balance.
What is an unreliable narrator?|a narrator whose account may not be trustworthy|a narrator who tells the truth|a character who is silent|=>The reader must question.
What is foreshadowing?|hints about what will happen later|a flashback|a rhyme|=>Clues.
What is irony?|a contrast between expectation and reality|a rhyme|a type of evidence|=>Surprise.
What is dramatic irony?|the audience knows something the characters don't|a character is sarcastic|the ending surprises everyone|=>Knowledge gap.
What is situational irony?|the opposite of what is expected happens|the narrator lies|the audience knows more|=>Unexpected outcome.
What is verbal irony?|saying the opposite of what you mean|a surprise ending|an audience knowing more|=>Sarcasm.
What does it mean to 'read between the lines'?|infer what isn't directly stated|read every line twice|skip lines|=>Infer.
Which question helps you make an inference?|What clues does the author give?|How long is the text?|Who published it?|=>Look for clues.
Which is the strongest inference from 'Maya stared at the empty seat beside her and sighed'?|Maya misses someone.|Maya is hungry.|Maya is angry at the chair.|=>The empty seat and sigh suggest missing someone.
Which is the strongest inference from 'The crowd roared as the runner crossed the line, arms raised'?|The runner won.|The runner was lost.|The runner was cold.|=>Cheering and raised arms suggest victory.
Which is the strongest inference from 'The boy set down his heavy bag and wiped his forehead'?|He is tired and hot.|He is cold.|He is angry.|=>Heavy bag and sweat.
Which is the strongest inference from 'Leaves swirled across the empty playground as the sky darkened'?|A storm may be coming.|It is the middle of summer.|It is a holiday.|=>Dark sky and wind.
How can you support an inference?|with specific text evidence|with your opinion|with a guess|=>Cite it.
What is the difference between an inference and a fact?|a fact is stated; an inference is reasoned from clues|they are the same|an inference is always wrong|=>Stated vs. implied.
What is figurative language?|language that uses figures of speech to mean more than the literal words|literal language|a rhyme|=>Simile, metaphor.
What does the phrase 'her words were daggers' mean?|her words were hurtful|she held daggers|she was quiet|=>A metaphor.
What does 'the classroom was a zoo' suggest?|the classroom was noisy and chaotic|animals were there|it was quiet|=>A metaphor for chaos.
What is hyperbole?|exaggeration for effect|understatement|a rhyme|=>I've told you a million times.
What is understatement?|downplaying something's importance|exaggeration|a rhyme|=>It's just a scratch (after a major injury).
What effect does a short, punchy sentence have?|it creates emphasis or tension|it creates calm|it creates nothing|=>Rhythm shapes tone.
What effect does a long, flowing sentence have?|it can create a calm or reflective mood|it creates panic|it ends the text|=>Rhythm.
`);

  A(R("arguments"), `
What is an argument in writing?|a claim supported by reasons and evidence|a fight|a story|=>Persuasion with support.
What is a claim?|a statement the writer wants you to accept|a fact|the title|=>The position.
What is evidence?|facts, statistics, examples, or expert opinions that support a claim|a feeling|a title|=>Support.
What is reasoning?|the logic explaining how evidence supports a claim|the evidence|the claim|=>Connects them.
What is a counterclaim?|an opposing claim|the main claim|evidence|=>The other side.
What is a rebuttal?|a response that addresses a counterclaim|the claim|the conclusion|=>Answers the other side.
Which is a claim?|School should start later.|The school day starts at 8 a.m.|Teenagers need sleep.|=>It's something to argue.
Which is evidence?|A study found students who sleep 9 hours score higher.|School should start later.|Sleep is great.|=>A fact from a study.
What makes evidence relevant?|it directly supports the claim|it is interesting|it is long|=>Connects to the claim.
What makes evidence sufficient?|there is enough of it to support the claim|there is one example|there is none|=>Enough proof.
What is a statistic?|a number used as evidence|an opinion|a quotation|=>Data.
Which is the strongest evidence?|a statistic from a credible study|a rumor|an opinion|=>Reliable data.
What is an expert opinion?|a statement from someone with knowledge on the topic|a rumor|a guess|=>Authority.
What is an anecdote?|a short personal story used as an example|a statistic|a study|=>A small story.
What is an emotional appeal?|persuading by stirring feelings|persuading with facts|persuading with experts|=>Pathos.
What is a logical appeal?|persuading with reason and evidence|persuading with feelings|persuading with fame|=>Logos.
What is an ethical appeal?|persuading by showing credibility or character|persuading with data|persuading with fear|=>Ethos.
What is a fallacy?|a flaw in reasoning|a strong argument|a fact|=>Faulty logic.
What is a hasty generalization?|a conclusion drawn from too little evidence|a careful conclusion|a fact|=>One example isn't enough.
What is a false dilemma?|presenting only two choices when more exist|presenting many choices|a fact|=>Either-or thinking.
What is an ad hominem attack?|attacking the person rather than the argument|attacking the claim|citing evidence|=>Personal attack.
What is a slippery slope?|claiming one step will inevitably lead to extreme results|a hill|a fact|=>Exaggerated chain.
What is a bandwagon appeal?|arguing something is right because many people do it|giving evidence|citing experts|=>Popularity.
What is circular reasoning?|using the claim as its own proof|using strong evidence|using a statistic|=>Goes in circles.
What is a straw man fallacy?|misrepresenting an opponent's argument to make it easier to attack|citing evidence|using a statistic|=>Fake target.
What is an appeal to authority?|using an expert's name to support a claim|using a statistic|using a story|=>Valid only if the expert is relevant.
What is a loaded word?|a word with strong emotion meant to sway readers|a neutral word|a long word|=>Slanted.
Which is a loaded word?|disaster|event|situation|=>Disaster is emotionally charged.
Which is a neutral word?|event|catastrophe|nightmare|=>Neutral.
What is the purpose of a conclusion in an argument?|to restate the claim and leave a final impression|to add new evidence|to list sources|=>Wrap up.
What is the purpose of the introduction in an argument?|to introduce the topic and claim|to end the essay|to list sources|=>Opening.
What makes a source credible?|expertise, accuracy, and citations|popularity|bright colors|=>Trustworthy.
How do you evaluate an argument?|check the claim, evidence, and reasoning|count the words|look at the title|=>Assess strength.
Is the evidence 'an opinion poll of 5 people' strong?|No, the sample is too small|Yes|Always|=>Too little data.
Is the evidence 'a national survey of 2,000 randomly chosen students' strong?|Yes, it is large and random|No|It has no value|=>Representative.
Which sentence is a rebuttal?|Some argue later start times hurt sports, but schools can adjust practice schedules.|School should start later.|Sleep matters.|=>It answers an objection.
Which sentence is a counterclaim?|Some people say later start times would make buses more costly.|School should start later.|Students need sleep.|=>An opposing view.
What does 'persuade' mean?|to convince someone to think or act a certain way|to describe|to entertain|=>Convince.
What is the difference between persuasion and argument?|argument relies on logic and evidence; persuasion can also use emotion|they are the same|persuasion has no purpose|=>Argument emphasizes reasoning.
What is audience in an argument?|the people the writer wants to convince|the writer|the title|=>Target readers.
Why does the audience matter?|it shapes word choice and evidence|it doesn't|it hides the claim|=>Tailor the message.
What does 'bias' mean?|a one-sided slant|neutrality|a fact|=>Unfair preference.
How can you tell if an argument is biased?|loaded words and ignoring other views|many sources|balanced evidence|=>One-sidedness.
What is a 'call to action'?|a statement urging readers to do something|a title|a fact|=>Ending push.
`);

  A(R("word-meaning"), `
What is a context clue?|information near a word that helps you figure out its meaning|a dictionary entry|a prefix|=>Look around the word.
What is a definition clue?|the text defines the word directly|the text gives an example|the text gives an opposite|=>Means, is, refers to.
What is an example clue?|examples near the word suggest its meaning|a direct definition|an opposite|=>For example, such as.
What is a contrast (antonym) clue?|an opposite idea suggests the meaning|a definition|an example|=>But, however, unlike.
What is an inference clue?|the general sense of the passage suggests the meaning|a definition|an opposite|=>Read the whole sentence.
What does 'benevolent' most likely mean in 'The benevolent donor gave generously to the shelter'?|kind and generous|cruel|forgetful|=>Gave generously.
What does 'meticulous' most likely mean in 'She was meticulous, checking every detail twice'?|very careful|careless|lazy|=>Checking every detail.
What does 'reluctant' most likely mean in 'He was reluctant to jump, so he hesitated at the edge'?|unwilling|eager|excited|=>Hesitated.
What does 'candid' most likely mean in 'Her candid answer surprised everyone because she told the truth plainly'?|honest and direct|rude|silly|=>Told the truth.
What does 'scarce' most likely mean in 'Water was scarce, so people rationed every drop'?|in short supply|plentiful|dirty|=>Rationed.
What does 'ambiguous' most likely mean in 'The directions were ambiguous; they could be read two ways'?|unclear|specific|short|=>Two meanings.
What does 'jubilant' most likely mean in 'The jubilant crowd cheered and danced after the win'?|joyful|angry|sleepy|=>Cheered and danced.
What does 'obsolete' most likely mean in 'Typewriters are obsolete since computers replaced them'?|no longer used|brand new|popular|=>Replaced.
What does 'diligent' most likely mean in 'The diligent student studied every night'?|hardworking|lazy|forgetful|=>Studied nightly.
What does 'cautious' most likely mean in 'He was cautious, checking both ways before crossing'?|careful|reckless|angry|=>Checking.
What is figurative language?|language that uses figures of speech with meanings beyond the literal|literal language|a rhyme|=>Not literal.
What is a simile?|a comparison using like or as|a direct comparison|an exaggeration|=>Brave as a lion.
What is a metaphor?|a direct comparison without like or as|a comparison using like|an exaggeration|=>Time is a thief.
What is personification?|giving human traits to non-human things|a comparison using like|an exaggeration|=>The wind whispered.
What is hyperbole?|exaggeration for emphasis|understatement|a rhyme|=>A million times.
What is an idiom?|a phrase whose meaning is not literal|a rhyme|a type of prefix|=>Break a leg.
What does the idiom 'on thin ice' mean?|in a risky situation|skating|cold|=>Risky.
What does the idiom 'bite the bullet' mean?|face something difficult bravely|eat metal|argue|=>Endure.
What does the idiom 'the last straw' mean?|the final thing that makes a situation unbearable|a drink|a farm tool|=>Tipping point.
What does the idiom 'in hot water' mean?|in trouble|cooking|bathing|=>Trouble.
What does the idiom 'burn the midnight oil' mean?|work late into the night|start a fire|waste oil|=>Work late.
What does 'a blessing in disguise' mean?|something that seems bad but turns out good|a hidden gift|a costume|=>Hidden benefit.
What is an allusion?|an indirect reference to a well-known person, place, or work|a rhyme|a comparison|=>A Herculean task.
What does 'a Herculean task' allude to?|the mythic hero Hercules|a modern athlete|a type of tool|=>A very difficult task.
What is an analogy?|a comparison that explains one thing by relating it to another|a rhyme|a type of root|=>Heart is to body as engine is to car.
What is denotation?|the literal dictionary meaning|the emotional meaning|the sound|=>Definition.
What is connotation?|the feelings a word suggests|the dictionary meaning|the rhyme|=>Associations.
Which word has a more positive connotation: 'confident' or 'arrogant'?|confident|arrogant|They are the same|=>Arrogant is negative.
Which word has a more negative connotation: 'determined' or 'stubborn'?|stubborn|determined|They are the same|=>Stubborn criticizes.
Which word is neutral?|walk|stroll|stomp|=>Walk has no extra feeling.
Which word suggests moving slowly and happily?|stroll|march|stomp|=>Stroll is leisurely.
Which word suggests moving angrily?|stomp|stroll|tiptoe|=>Stomp shows anger.
What does the root 'bene' mean?|good|bad|big|=>Benefit.
What does the root 'mal' mean?|bad|good|small|=>Malfunction.
What does the root 'chron' mean?|time|space|water|=>Chronology.
What does the root 'graph' mean?|write or draw|hear|see|=>Autograph.
What does the root 'spect' mean?|look|hear|speak|=>Inspect.
What does the root 'dict' mean?|say|write|carry|=>Dictate.
What does the root 'port' mean?|carry|break|build|=>Transport.
What does the prefix 'un-' mean?|not|again|before|=>Unhappy.
What does the prefix 're-' mean?|again|not|under|=>Redo.
What does the suffix '-less' mean?|without|full of|one who|=>Hopeless.
What does the suffix '-ful' mean?|full of|without|one who|=>Careful.
What does the suffix '-ology' mean?|the study of|full of|without|=>Biology.
What is a multiple-meaning word?|a word with more than one meaning|a long word|a prefix|=>Bank, bat.
Which meaning of 'bank' fits? 'We sat on the river bank.'|the land beside a river|a place for money|to tilt|=>River context.
Which meaning of 'bat' fits? 'A bat flew out of the cave.'|a flying mammal|a baseball tool|to hit|=>Cave context.
Which meaning of 'figure' fits? 'She tried to figure out the puzzle.'|to solve or understand|a number|a shape|=>Verb sense.
Which meaning of 'express' fits? 'He could not express his thanks.'|to communicate|fast|a train|=>Verb sense.
`);
})();
