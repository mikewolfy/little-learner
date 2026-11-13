/* Grade 8 English: literary analysis, figurative language, informational and argument texts, writing, grammar,
   vocabulary, and research and media. Questions use a compact format:
   question | right answer | wrong | wrong | wrong | => explanation   (the right answer comes first). */
(function () {
  const g8 = window.CURRICULUM[8];
  const Q = (text) => text.trim().split("\n").filter((l) => l.trim()).map((l) => {
    const parts = l.split("|").map((p) => p.trim());
    const ex = parts.pop().replace(/^=>\s*/, "");
    const q = parts.shift();
    return [q, parts, 0, ex];
  });
  const subject = {
    id: "english", name: "English", icon: "📚", standards: "2024 English SOL",
    about: "English 8: analyzing stories, poems, and plays; figurative language; informational and argument texts; writing; grammar and usage; vocabulary; and research and media literacy.",
    units: [],
  };
  window.EXTRAS = window.EXTRAS || {};
  const add = (u, extra) => {
    u.questions = Q(u.questions);
    subject.units.push(u);
    window.EXTRAS["8/english/" + u.id] = extra;
  };

  add({
    id: "literary-elements", title: "Literary Elements & Analysis", sol: "8.RL",
    summary: "Plot, conflict, character, setting, point of view, theme, and how authors build meaning.",
    points: [
      "Plot has exposition (introduces characters and setting), rising action (conflict builds), climax (turning point), falling action, and resolution.",
      "Conflict can be internal (within a character) or external (character vs. character, nature, society, or technology).",
      "Characterization: direct (the narrator tells you traits) or indirect (shown through actions, speech, thoughts, and others' reactions). A dynamic character changes; a static character stays the same.",
      "Setting is the time and place and can create mood. Mood is the feeling the reader gets; tone is the author's attitude toward the subject.",
      "Point of view: first person (I), third-person limited (one character's thoughts), third-person omniscient (all characters' thoughts). An unreliable narrator may not tell the whole truth.",
      "Theme is a central message about life, stated as a complete idea (not a single word). It develops through characters, conflict, and symbols. Support a theme with evidence from the text.",
      "Foreshadowing hints at what will happen; flashback shows an earlier time; irony is a gap between what is expected and what happens (verbal, situational, dramatic).",
      "Symbols are objects that stand for bigger ideas (a dove for peace). Motifs are repeated images or ideas. Authors choose structure and style to shape meaning.",
    ],
    example: "Theme vs. topic:\nTopic: courage. Theme: True courage means acting even when you are afraid.\n\nIndirect characterization: 'Maya picked up the stray dog and walked home in the rain' shows kindness without saying 'Maya is kind.'",
    vocab: [["conflict", "A struggle between opposing forces that drives the plot."], ["theme", "The central message or insight about life in a text."], ["characterization", "The way an author reveals a character's traits."], ["point of view", "The perspective from which a story is told."], ["foreshadowing", "Hints about events that will happen later."], ["irony", "A contrast between what is expected and what actually happens."], ["symbol", "An object, person, or place that represents a larger idea."]],
    questions: `
What is the climax of a story?|the turning point or most intense moment|the introduction|the ending|the setting|=>Where the conflict peaks.
What is an internal conflict?|a struggle within a character|a fight between characters|a struggle with nature|a battle|=>Man vs. self.
What is characterization?|the way an author reveals a character's traits|the setting|the plot|the theme|=>Direct or indirect.
Which is indirect characterization?|showing a character's traits through actions and dialogue|the narrator stating a trait|a list of traits|a summary|=>Show, don't tell.
A dynamic character is one who…|changes during the story|stays the same|is the narrator|is minor|=>Static characters do not change.
What is mood?|the feeling the text creates for the reader|the author's attitude|the plot|the setting only|=>Atmosphere.
What is tone?|the author's attitude toward the subject|the reader's feeling|the setting|the conflict|=>Voice.
A narrator who knows all characters' thoughts uses…|third-person omniscient|first person|second person|third-person limited|=>All-knowing.
Which is a theme?|Honesty builds trust.|honesty|friendship|a dog|=>A complete statement of a message.
What is foreshadowing?|hints about later events|a flashback|a rhyme|a symbol|=>Clues in advance.
What is a flashback?|a scene from an earlier time|a hint about the future|an ending|a conflict|=>Interrupts the timeline.
Situational irony is when…|the opposite of what is expected happens|a character says the opposite|the audience knows something characters do not|a story rhymes|=>Unexpected outcome.
What is a symbol?|an object that stands for a larger idea|a rhyme|a setting|a verb|=>A dove for peace.
What is a motif?|a repeated image or idea in a text|a plot twist|a narrator|a rhyme|=>Reinforces theme.
`,
  }, {
    examples: ["Plot diagram: exposition → rising action → climax → falling action → resolution.", "Support a theme with evidence: state the theme, quote a detail, then explain how it proves the theme."],
    vocab: { "conflict": "The conflict was between the hero and a storm.", "theme": "The theme of the story was perseverance.", "characterization": "The author used dialogue for characterization.", "point of view": "The story's point of view is first person.", "foreshadowing": "The dark clouds were foreshadowing.", "irony": "It was ironic that the fire station burned down.", "symbol": "The caged bird was a symbol of lost freedom." },
  });

  add({
    id: "figurative-poetry", title: "Figurative Language, Poetry & Drama", sol: "8.RL",
    summary: "Simile, metaphor, personification, and other devices, and how poems and plays are built.",
    points: [
      "A simile compares using like or as ('brave as a lion'); a metaphor compares directly ('life is a journey'); personification gives human traits to nonhuman things; hyperbole is extreme exaggeration; an idiom is a phrase with a non-literal meaning.",
      "Imagery uses sensory details. Alliteration repeats beginning sounds; assonance repeats vowel sounds; onomatopoeia imitates sounds (buzz, crash).",
      "Allusion is a reference to a well-known person, event, or work. An oxymoron combines opposites ('deafening silence'). Understatement and paradox also create effects.",
      "Poetry: stanzas, lines, rhyme scheme (ABAB), meter and rhythm, free verse (no regular pattern), sonnet (14 lines), haiku (5-7-5), ballad (story in verse).",
      "Speaker is the voice in a poem (not necessarily the poet). Tone and theme come from word choice, imagery, and structure. Enjambment runs a sentence past the end of a line.",
      "Drama is written to be performed. A script has dialogue, stage directions, acts, and scenes. A monologue is a speech by one character; a soliloquy reveals a character's thoughts aloud; an aside is a remark to the audience.",
      "Connotation is the feeling attached to a word; denotation is its dictionary meaning. Word choice shapes tone.",
      "To analyze figurative language, identify the device, tell what is being compared or emphasized, and explain its effect on meaning or mood.",
    ],
    example: "Identify the device:\n• 'The wind whispered through the trees' → personification\n• 'Her smile was sunshine' → metaphor\n• 'He ran like the wind' → simile\n• 'I've told you a million times' → hyperbole",
    vocab: [["metaphor", "A direct comparison between two unlike things without using like or as."], ["simile", "A comparison using like or as."], ["personification", "Giving human qualities to a nonhuman thing."], ["hyperbole", "Extreme exaggeration used for effect."], ["alliteration", "Repetition of the same beginning consonant sound."], ["stanza", "A group of lines in a poem."], ["soliloquy", "A speech in which a character speaks thoughts aloud, usually alone."]],
    questions: `
'Her voice was music' is an example of…|a metaphor|a simile|alliteration|onomatopoeia|=>A direct comparison.
'He ate like a horse' is an example of…|a simile|a metaphor|personification|an oxymoron|=>Uses 'like.'
'The sun smiled down on us' is…|personification|hyperbole|a simile|alliteration|=>Human trait given to the sun.
'I've told you a million times' is…|hyperbole|understatement|a metaphor|onomatopoeia|=>Exaggeration.
'Buzz' and 'crash' are examples of…|onomatopoeia|alliteration|assonance|allusion|=>Sound words.
'Peter Piper picked a peck' uses…|alliteration|assonance|onomatopoeia|metaphor|=>Repeated beginning sounds.
'deafening silence' is an…|oxymoron|idiom|allusion|simile|=>Opposites together.
An allusion is…|a reference to a well-known person, event, or work|a comparison|an exaggeration|a rhyme|=>For example calling someone a 'Scrooge.'
In a poem, the speaker is…|the voice that talks in the poem|always the poet|the reader|the title|=>May be a persona.
A haiku has…|3 lines with 5, 7, and 5 syllables|14 lines|4 lines|rhymed couplets|=>Japanese form.
A sonnet has…|14 lines|3 lines|8 lines|20 lines|=>Shakespeare wrote many.
Free verse is…|poetry without regular rhyme or meter|poetry with strict rhyme|a play|a story|=>No set pattern.
In a play, a soliloquy is…|a character's thoughts spoken aloud, usually alone|a conversation|a stage direction|a scene change|=>Hamlet's 'To be or not to be.'
What are stage directions?|instructions in a script about actions and setting|the dialogue|the title|the cast list|=>Often in italics.
`,
  }, {
    examples: ["Effect of a metaphor: 'The classroom was a zoo' suggests noise and chaos more strongly than 'The classroom was loud.'", "Rhyme scheme: label each ending sound with a letter. 'day, sea, say, free' → A B A B."],
    vocab: { "metaphor": "Calling time a thief is a metaphor.", "simile": "'Quiet as a mouse' is a simile.", "personification": "The author used personification when the river 'sang.'", "hyperbole": "'I'm so hungry I could eat a horse' is hyperbole.", "alliteration": "'Silly snakes slither' shows alliteration.", "stanza": "The poem has four stanzas.", "soliloquy": "He revealed his plan in a soliloquy." },
  });

  add({
    id: "informational", title: "Informational Texts", sol: "8.RI",
    summary: "Finding the central idea, text structure, and evidence, and judging an author's reasoning.",
    points: [
      "The central idea is the most important point of a text. Supporting details (facts, examples, quotes) develop it. A summary states the central idea and key details objectively in your own words.",
      "Text structures: description, sequence/chronological, compare and contrast, cause and effect, problem and solution. Signal words (first, because, however) hint at structure.",
      "Text features: headings, captions, charts, graphs, sidebars, glossaries, indexes, and tables of contents help readers locate and understand information.",
      "Author's purpose: to inform, persuade, entertain, or explain. Point of view and bias shape what an author includes or leaves out.",
      "Analyze how an author develops ideas: through examples, anecdotes, statistics, and expert quotes. Evaluate whether evidence is relevant and sufficient.",
      "Primary sources are firsthand accounts (letters, speeches); secondary sources interpret them (textbooks). Compare two accounts of the same event by looking at point of view and details.",
      "Making inferences means combining text evidence with background knowledge. Cite specific evidence for every inference.",
      "Reading strategies: preview, annotate, ask questions, summarize in sections, and reread difficult parts.",
    ],
    example: "Summary of a paragraph: 'Honeybees pollinate about one-third of the food we eat. Declining bee populations threaten crops. Farmers and scientists are working to protect bees.'\nCentral idea: Bees are vital to food production and need protection.",
    vocab: [["central idea", "The most important point an author makes about a topic."], ["text structure", "The way an author organizes information."], ["inference", "A conclusion based on evidence and reasoning."], ["bias", "A one-sided leaning that can affect how information is presented."], ["primary source", "A firsthand account or original document."], ["objective", "Based on facts, not personal feelings."], ["anecdote", "A short personal story used to illustrate a point."]],
    questions: `
What is the central idea of a text?|the most important point the author makes|the first sentence|the title|a small detail|=>Supported by details.
Which text structure explains why something happens?|cause and effect|sequence|description|compare and contrast|=>Signal words: because, as a result.
Which text structure presents a problem and ways to fix it?|problem and solution|sequence|description|cause and effect|=>Signal words: solve, answer.
Words like 'similarly' and 'in contrast' signal…|compare and contrast|sequence|cause and effect|description|=>Show likeness and difference.
What does a caption do?|explains a picture or graph|lists sources|defines terms|ends the text|=>Text feature.
What does a glossary do?|defines key terms|lists chapters|shows maps|summarizes the text|=>Usually at the back.
A summary should be…|brief, objective, and in your own words|long and detailed|full of opinions|a direct copy|=>Main points only.
What is an inference?|a conclusion based on text evidence and reasoning|a direct quote|a guess|a summary|=>Cite evidence.
A primary source is…|a firsthand account|a textbook|an encyclopedia|an opinion piece|=>A diary or speech.
What is bias?|a one-sided leaning|neutrality|a fact|a conclusion|=>Look at the evidence.
Which is the best example of evidence?|a statistic from a reliable study|a rumor|an opinion|a guess|=>Relevant and credible.
What is an anecdote?|a short personal story used to illustrate a point|a statistic|a fact|a quote|=>Makes a point memorable.
An author who writes to inform wants to…|explain facts|persuade|entertain with a story|criticize|=>Informational texts.
Which is an objective statement?|The city has three libraries.|The libraries are wonderful.|Libraries are boring.|Everyone loves libraries.|=>It can be checked.
`,
  }, {
    examples: ["Annotating: underline the central idea, circle unfamiliar words, and write a short note beside each paragraph.", "Comparing two accounts: What does each author include? What does each leave out? Why?"],
    vocab: { "central idea": "The central idea was that exercise improves learning.", "text structure": "The text structure was cause and effect.", "inference": "She made an inference from the clues.", "bias": "The article showed bias for one candidate.", "primary source": "A diary is a primary source.", "objective": "News reports should be objective.", "anecdote": "The author opened with an anecdote about her grandfather." },
  });

  add({
    id: "argument", title: "Argument & Persuasion", sol: "8.RI",
    summary: "Analyzing and building arguments with claims, evidence, reasoning, and rhetorical appeals.",
    points: [
      "An argument has a claim (position), reasons, and evidence (facts, statistics, examples, expert testimony). A counterclaim is an opposing position, and a rebuttal answers it.",
      "Reasoning connects the evidence to the claim by explaining why the evidence supports it. Strong arguments use relevant, accurate, and sufficient evidence.",
      "Rhetorical appeals: ethos (credibility), pathos (emotion), logos (logic and evidence). Good writers balance the three.",
      "Rhetorical devices: repetition, parallelism, rhetorical questions, analogy, loaded language, and call to action.",
      "Logical fallacies are flaws in reasoning: hasty generalization (too little evidence), ad hominem (attacking the person), bandwagon (everyone does it), false dilemma (only two choices), slippery slope, circular reasoning, and straw man.",
      "Fact vs. opinion: a fact can be verified; an opinion is a judgment. Persuasive writing often mixes both, so evaluate the evidence.",
      "Evaluate sources: author expertise, purpose, date, and bias. Check whether the argument addresses other viewpoints fairly.",
      "In a debate, listen carefully, support points with evidence, respond respectfully, and stay on topic.",
    ],
    example: "Claim: Schools should start later.\nReason: Teens need more sleep.\nEvidence: Studies show teens learn better with 8–10 hours of sleep.\nCounterclaim: Later starts disrupt sports and bus schedules.\nRebuttal: Schedules can be adjusted, and learning gains are worth it.",
    vocab: [["claim", "A statement of position in an argument."], ["counterclaim", "An opposing position."], ["rebuttal", "A response that weakens a counterclaim."], ["ethos", "An appeal to the audience based on credibility."], ["pathos", "An appeal to emotion."], ["logos", "An appeal to logic and evidence."], ["fallacy", "A flaw in reasoning that weakens an argument."]],
    questions: `
What is a claim?|a statement of position that the author wants you to accept|a fact|a quotation|a title|=>The main point.
What is a counterclaim?|an opposing position|the main claim|a statistic|a title|=>The other side.
What is a rebuttal?|a response that answers a counterclaim|a claim|a summary|an anecdote|=>Weakens the opposing view.
Ethos is an appeal to…|credibility|emotion|logic|humor|=>Trustworthiness.
Pathos is an appeal to…|emotion|credibility|logic|authority|=>Feelings.
Logos is an appeal to…|logic and evidence|emotion|credibility|fear|=>Reasoning.
A hasty generalization is…|a conclusion from too little evidence|a careful conclusion|a fact|a quote|=>Small sample.
An ad hominem attack…|attacks the person instead of the argument|attacks the claim|cites evidence|uses statistics|=>A fallacy.
A bandwagon appeal says…|everyone is doing it, so you should too|experts agree|you will be punished|it's your choice|=>Peer pressure.
A false dilemma offers…|only two choices when more exist|many choices|a compromise|a rebuttal|=>Either/or.
Which is strongest evidence for a claim?|a statistic from a reliable study|an opinion|a rumor|a feeling|=>Relevant and credible.
What does 'reasoning' do in an argument?|explains how evidence supports the claim|states the claim|lists opponents|ends the essay|=>Connects evidence and claim.
A rhetorical question is…|a question asked for effect, not an answer|a quiz|a request|a fact|=>Persuasive device.
Which is a loaded word?|disaster|vote|meeting|number|=>Strong emotional meaning.
`,
  }, {
    examples: ["Spotting a fallacy: 'Everyone has this phone, so it must be best' is a bandwagon appeal.", "Strengthen an argument: add a statistic, quote an expert, and answer the strongest counterclaim."],
    vocab: { "claim": "Her claim was that homework should be shorter.", "counterclaim": "A counterclaim argues the opposite.", "rebuttal": "He gave a rebuttal with new data.", "ethos": "Citing her experience built ethos.", "pathos": "The story of the lost puppy appeals to pathos.", "logos": "Statistics show logos.", "fallacy": "That argument contains a fallacy." },
  });

  add({
    id: "writing", title: "Writing: Process, Structure & Style", sol: "8.W",
    summary: "Planning, drafting, revising, and editing argument, informative, and narrative writing.",
    points: [
      "The writing process: plan (brainstorm, outline), draft, revise (ideas, organization, voice), edit (grammar, spelling, punctuation), and publish. Writers revisit steps as needed.",
      "A strong thesis states a clear, arguable claim or controlling idea. The introduction hooks the reader and presents the thesis; body paragraphs each have a topic sentence, evidence, and explanation; the conclusion restates the thesis and gives a closing thought.",
      "Informative writing explains a topic with facts, definitions, and examples; argument writing supports a claim with reasons and evidence and addresses counterclaims; narrative writing tells a real or imagined story with pacing and sensory detail.",
      "Transitions link ideas (however, therefore, for example, in contrast). Sentence variety (simple, compound, complex) and precise words improve style.",
      "Show, don't tell: use details and dialogue to reveal emotions and traits. Strong verbs and concrete nouns make writing vivid.",
      "Revising for coherence: check that each paragraph supports the thesis, remove repetition, and strengthen weak evidence. Editing checks conventions.",
      "Tone and voice fit the audience and purpose: formal for academic writing, informal for personal narratives.",
      "Quoting and paraphrasing: use quotation marks for exact words; paraphrase in your own words; always cite sources to avoid plagiarism.",
    ],
    example: "Thesis example: 'Schools should adopt a four-day week because it can save money, improve attendance, and give teachers planning time.'\n\nHook ideas: a surprising fact, a question, or a short anecdote.",
    vocab: [["thesis statement", "A sentence that states the main claim or controlling idea of an essay."], ["topic sentence", "A sentence that states the main idea of a paragraph."], ["transition", "A word or phrase that connects ideas."], ["revise", "To improve the ideas, organization, and style of a draft."], ["edit", "To correct grammar, spelling, and punctuation."], ["paraphrase", "To restate information in your own words."], ["plagiarism", "Using someone else's words or ideas without credit."]],
    questions: `
Which step comes first in the writing process?|planning or prewriting|publishing|editing|revising|=>Brainstorm and outline.
What is the purpose of a thesis statement?|to state the main claim or controlling idea|to end the essay|to list sources|to tell a joke|=>Usually in the introduction.
What does a topic sentence do?|states the main idea of a paragraph|ends a paragraph|gives a quote|lists sources|=>First sentence of a body paragraph.
Which is a transition that shows contrast?|however|therefore|for example|also|=>Signals a difference.
Which is a transition that shows cause and effect?|therefore|however|meanwhile|similarly|=>Shows a result.
What is revising?|improving ideas, organization, and style|fixing only spelling|printing|brainstorming|=>Bigger changes.
What is editing?|correcting grammar, spelling, and punctuation|changing the thesis|brainstorming|publishing|=>Conventions.
Which is the best hook?|a surprising statistic about the topic|'My essay is about…'|a summary of the conclusion|a list of sources|=>Grabs attention.
What is paraphrasing?|restating information in your own words|copying exactly|summarizing a whole book|quoting|=>Still cite it.
What is plagiarism?|using someone's words or ideas without credit|quoting with credit|summarizing with credit|citing sources|=>Dishonest.
Which sentence shows rather than tells?|Her hands shook as she opened the envelope.|She was nervous.|She felt scared.|She was upset.|=>Concrete detail.
What should a conclusion do?|restate the thesis and give a closing thought|introduce new evidence|list sources|repeat the introduction word for word|=>Wrap up.
Which is a strong verb?|sprinted|went|moved|did|=>Specific and vivid.
Which tone fits an academic essay?|formal|slangy|jokey|chatty|=>Match audience.
`,
  }, {
    examples: ["Paragraph pattern (PEEL): Point (topic sentence), Evidence, Explanation, Link to thesis.", "Revise a weak sentence: 'The movie was good.' → 'The suspenseful plot kept me on the edge of my seat.'"],
    vocab: { "thesis statement": "Her thesis statement was clear and arguable.", "topic sentence": "Each paragraph begins with a topic sentence.", "transition": "'Therefore' is a transition.", "revise": "She revised her draft for clarity.", "edit": "He edited for spelling errors.", "paraphrase": "She paraphrased the article in her own words.", "plagiarism": "Copying without credit is plagiarism." },
  });

  add({
    id: "grammar", title: "Grammar, Usage & Mechanics", sol: "8.W",
    summary: "Phrases, clauses, verbals, sentence types, agreement, and punctuation.",
    points: [
      "Parts of speech: noun, pronoun, verb, adjective, adverb, preposition, conjunction, interjection.",
      "A phrase is a group of words without a subject-verb pair (prepositional phrase: 'on the table'). A clause has a subject and verb. An independent clause can stand alone; a dependent clause cannot.",
      "Sentence types: simple (one independent clause), compound (two independent clauses joined by a comma + conjunction or semicolon), complex (one independent + one dependent clause), compound-complex.",
      "Verbals are verb forms used as other parts of speech: gerund (-ing noun: 'Swimming is fun'), participle (adjective: 'a broken window'), infinitive (to + verb: 'to learn').",
      "Active voice (The dog chased the ball) is usually stronger than passive voice (The ball was chased by the dog). Verb tense should be consistent.",
      "Subject-verb agreement: singular subjects take singular verbs ('The team plays'). Pronoun-antecedent agreement: 'Each student brought his or her book' (or 'their').",
      "Punctuation: commas after introductory elements, in compound sentences, and in lists; semicolons join related independent clauses; colons introduce lists; apostrophes show possession (the dog's bone) and contractions.",
      "Common errors: run-on sentences, comma splices, fragments, misplaced modifiers, and confusing homophones (their/there/they're, its/it's, your/you're, affect/effect).",
    ],
    example: "Fix the comma splice: 'I like soccer, I play every day.' → 'I like soccer; I play every day.' or 'I like soccer, and I play every day.'\n\nIts vs. it's: 'It's raining' (it is); 'The dog wagged its tail' (possessive).",
    vocab: [["clause", "A group of words with a subject and a verb."], ["independent clause", "A clause that can stand alone as a sentence."], ["gerund", "A verb ending in -ing used as a noun."], ["infinitive", "The form 'to + verb' used as a noun, adjective, or adverb."], ["comma splice", "Two independent clauses joined by only a comma."], ["active voice", "A sentence in which the subject performs the action."], ["antecedent", "The word a pronoun refers to."]],
    questions: `
Which is a complete sentence?|The dog barked loudly.|Barking loudly.|Because the dog barked.|Running down the street.|=>Subject and verb, complete thought.
What is a dependent clause?|a clause that cannot stand alone|a clause that can stand alone|a phrase|a sentence|=>It starts with a word like because.
Which is a compound sentence?|I wanted to go, but it rained.|I wanted to go.|Because it rained, I stayed.|Raining, I stayed.|=>Two independent clauses.
Which is a complex sentence?|Because it rained, we stayed inside.|We stayed inside.|We stayed inside, and we read.|Staying inside.|=>Independent + dependent.
Which word is a gerund in 'Swimming is fun'?|Swimming|is|fun|none|=>-ing form used as a noun.
Which is an infinitive?|to run|running|ran|runs|=>To + verb.
Which sentence is in active voice?|The chef cooked the meal.|The meal was cooked by the chef.|The meal was cooked.|The meal had been cooked.|=>Subject performs the action.
Which sentence has correct subject-verb agreement?|The team plays well.|The team play well.|The team are playing good.|The team playing well.|=>Singular subject.
Which sentence uses 'its' correctly?|The dog wagged its tail.|Its a sunny day.|The cat licked it's paw.|Its' going to rain.|=>Its = possessive.
Which sentence uses a semicolon correctly?|I like pizza; my sister likes pasta.|I like pizza; and pasta.|I like; pizza.|I like pizza;|=>Joins two related independent clauses.
What is a comma splice?|two independent clauses joined by only a comma|a missing comma|a fragment|a run-on with no punctuation|=>Fix with a semicolon or conjunction.
Which is a run-on sentence?|I like music I play guitar every day.|I like music.|I like music, and I play guitar.|I like music; I play guitar.|=>No punctuation or conjunction.
Which is a sentence fragment?|Walking to the store.|She walked to the store.|We walked.|They arrived.|=>No subject or complete thought.
Which uses an apostrophe correctly?|the dog's bone|the dogs bone|the dog's' bone|the dogs's bone|=>Singular possessive.
`,
  }, {
    examples: ["Sentence types: 'We left.' (simple); 'We left, and they stayed.' (compound); 'When we left, they stayed.' (complex).", "Homophones: their = belonging to them; there = place; they're = they are."],
    vocab: { "clause": "A clause has a subject and verb.", "independent clause": "'I ran' is an independent clause.", "gerund": "'Reading' is a gerund in 'Reading is fun.'", "infinitive": "'To dance' is an infinitive.", "comma splice": "A comma splice needs a semicolon or conjunction.", "active voice": "Active voice makes writing clear.", "antecedent": "In 'Maria lost her book,' Maria is the antecedent of her." },
  });

  add({
    id: "vocabulary", title: "Vocabulary: Roots, Context & Word Choice", sol: "8.DSR",
    summary: "Using word parts, context clues, connotation, and references to figure out and choose words.",
    points: [
      "Greek and Latin roots help decode words: bio (life), geo (earth), graph (write), spect (look), port (carry), dict (say), scrib/script (write), tele (far), aud (hear), chron (time), voc (voice), vid/vis (see).",
      "Prefixes change meaning: un-, re-, pre-, mis-, anti-, inter-, trans-, sub-, super-, mal-, bene-. Suffixes change part of speech: -tion, -ment, -ness, -able, -ous, -ize, -ly.",
      "Context clues: definition, synonym, antonym, example, and inference clues in surrounding text help define unknown words.",
      "Denotation is a word's literal meaning; connotation is its feeling (slim vs. skinny). Choose words that fit your tone.",
      "Multiple-meaning words need context to pick the right meaning. Use a dictionary, glossary, or thesaurus to check meaning, pronunciation, and part of speech.",
      "Analogies show relationships between words (hot : cold :: up : down). Idioms and figures of speech have non-literal meanings.",
      "Academic vocabulary: analyze, evaluate, infer, cite, summarize, compare, contrast, justify, interpret.",
      "Build vocabulary by reading widely, keeping a word journal, using new words in speech and writing, and studying word families.",
    ],
    example: "Decode 'benevolent': bene (good) + vol (wish) → wishing good → kind.\nDecode 'transport': trans (across) + port (carry) → carry across.\n\nConnotation: 'He is frugal' (positive) vs. 'He is stingy' (negative).",
    vocab: [["root", "The base part of a word that carries its core meaning."], ["prefix", "A word part added to the beginning of a word."], ["suffix", "A word part added to the end of a word."], ["context clue", "A hint in surrounding text that helps define a word."], ["connotation", "The feeling or association attached to a word."], ["denotation", "The literal dictionary meaning of a word."], ["analogy", "A comparison showing a relationship between pairs of words."]],
    questions: `
What does the root 'bio' mean?|life|earth|water|write|=>Biology.
What does the root 'geo' mean?|earth|life|sound|light|=>Geography.
What does the root 'spect' mean?|look|carry|say|write|=>Inspect.
What does the root 'port' mean?|carry|look|say|write|=>Transport.
What does the root 'dict' mean?|say|write|carry|hear|=>Dictate.
What does the prefix 'mis-' mean?|wrongly|again|before|against|=>Misspell.
What does the prefix 'anti-' mean?|against|with|before|under|=>Antibiotic.
What does the prefix 'trans-' mean?|across|under|against|before|=>Transport.
What does the suffix '-able' mean?|able to be|without|full of|not|=>Readable.
What does the suffix '-less' mean?|without|full of|able to|not|=>Hopeless.
What is connotation?|the feeling attached to a word|its dictionary meaning|its spelling|its sound|=>Associations.
Which word has a more negative connotation?|stingy|frugal|thrifty|economical|=>Judgmental.
What is denotation?|a word's dictionary meaning|its emotional feel|its spelling|its sound|=>Literal meaning.
Which clue type is used? 'The arid desert, which is extremely dry, gets little rain.'|definition clue|antonym clue|example clue|none|=>The phrase after the comma defines arid.
`,
  }, {
    examples: ["Word family: scribe, describe, prescribe, inscription all come from scrib/script (write).", "Analogy: pen : write :: knife : cut (tool : its action)."],
    vocab: { "root": "'Spect' is a root meaning look.", "prefix": "'Un-' is a prefix.", "suffix": "'-ment' is a suffix.", "context clue": "The sentence gave a context clue.", "connotation": "'Home' has a warm connotation.", "denotation": "The denotation of 'snake' is a reptile.", "analogy": "'Hot is to cold as up is to down' is an analogy." },
  });

  add({
    id: "research-media", title: "Research, Sources & Media Literacy", sol: "8.R",
    summary: "Finding and evaluating sources, citing them, and analyzing media messages.",
    points: [
      "Research starts with a focused, researchable question. Use keywords and search operators, library databases, and reliable websites (.gov, .edu, established organizations).",
      "Evaluate sources with CRAAP: Currency, Relevance, Authority, Accuracy, and Purpose. Check the author, date, evidence, and whether others confirm the information.",
      "Primary sources are firsthand; secondary sources interpret; tertiary sources (encyclopedias) summarize. Use a mix and compare them.",
      "Take notes in your own words, record source details, and organize notes by subtopic.",
      "Citations give credit and let readers find sources. In MLA style, list author, title, publisher, and date in a Works Cited list, and use in-text citations like (Smith 12). Quote with quotation marks; paraphrase and still cite.",
      "Plagiarism is using others' words or ideas without credit. Avoid it by citing and using your own words.",
      "Media literacy: ask who created the message, who is the audience, what techniques are used (images, music, slogans), what is left out, and who profits. Recognize advertising, persuasion, and bias.",
      "Digital citizenship: protect privacy, respect copyright, communicate respectfully, and think before you share. Identify misinformation by checking sources and looking for evidence.",
    ],
    example: "CRAAP check of a website:\nCurrency: updated last month ✓\nRelevance: matches your question ✓\nAuthority: written by a scientist ✓\nAccuracy: cites sources ✓\nPurpose: informs, not sells ✓\n\nIn-text citation (MLA): (Johnson 45).",
    vocab: [["credible", "Trustworthy and believable."], ["citation", "A note that gives credit to a source."], ["bibliography", "A list of sources used in research."], ["misinformation", "False or inaccurate information."], ["media literacy", "The ability to analyze and evaluate media messages."], ["copyright", "Legal ownership of creative work."], ["keyword", "An important word used to search for information."]],
    questions: `
What does CRAAP stand for?|Currency, Relevance, Authority, Accuracy, Purpose|Credit, Research, Analysis, Audience, Plan|Claims, Reasons, Answers, Arguments, Proof|Citations, Rules, Authors, Articles, Pages|=>A source evaluation test.
Which website ending is typically more reliable for government information?|.gov|.com|.biz|.xyz|=>Government sites.
What is a primary source?|a firsthand account or original document|a textbook|an encyclopedia|a summary|=>Diary or speech.
What is a secondary source?|a source that interprets or analyzes primary sources|a diary|a letter|a speech|=>Textbook.
Why cite your sources?|to give credit and let readers find them|to make an essay longer|to confuse readers|to avoid reading|=>Honesty.
What is plagiarism?|using someone's words or ideas without credit|quoting with credit|paraphrasing with credit|summarizing with credit|=>Dishonest.
Which is an example of an in-text citation?|(Smith 12)|[Smith]|Smith 12|<Smith>|=>MLA style.
What does a Works Cited list contain?|the sources used in a paper|a summary|the thesis|the outline|=>At the end.
Which is the best research question?|How has social media affected teen sleep?|Is social media good?|Social media.|What is the internet?|=>Focused and researchable.
What is misinformation?|false or inaccurate information|a primary source|a type of research|a citation|=>Check before sharing.
Which question helps evaluate media?|Who created this message and why?|How colorful is it?|How long is it?|What font is it?|=>Purpose and creator.
Which is a persuasive technique in advertising?|celebrity endorsement|a lab report|a data table|a footnote|=>Appeals to trust or emotion.
What does 'currency' mean in evaluating a source?|how recent the information is|its cost|its length|its color|=>Check dates.
What is copyright?|legal ownership of creative work|a type of citation|a search tool|a font|=>Respect others' work.
`,
  }, {
    examples: ["Evaluating a source: Who wrote it? When? What evidence? Does it agree with other sources? What is its purpose?", "Safe sharing: pause, check the source, and verify before posting."],
    vocab: { "credible": "A doctor's website is more credible than a rumor.", "citation": "Every quote needs a citation.", "bibliography": "The bibliography lists five sources.", "misinformation": "Misinformation spreads quickly online.", "media literacy": "Media literacy helps you question ads.", "copyright": "Copyright protects authors.", "keyword": "She searched using the keyword 'volcano.'" },
  });

  const idx = g8.subjects.findIndex((s) => s.id === "science");
  g8.subjects.splice(idx < 0 ? 0 : idx, 0, subject);
})();
