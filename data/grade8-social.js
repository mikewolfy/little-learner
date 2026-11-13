/* Grade 8 Civics & Economics: extra history and social science sections.
   Questions use a compact format: question | right answer | wrong | wrong | wrong | => explanation
   (the right answer comes first; the app shuffles the choices). */
(function () {
  const subject = window.CURRICULUM[8].subjects.find((s) => s.id === "history");
  const Q = (text) => text.trim().split("\n").filter((l) => l.trim()).map((l) => {
    const parts = l.split("|").map((p) => p.trim());
    const ex = parts.pop().replace(/^=>\s*/, "");
    const q = parts.shift();
    return [q, parts, 0, ex];
  });
  const add = (u, extra) => {
    u.questions = Q(u.questions);
    subject.units.push(u);
    window.EXTRAS = window.EXTRAS || {};
    window.EXTRAS["8/history/" + u.id] = extra;
  };

  add({
    id: "parties-media", title: "Political Parties, Interest Groups & the Media", sol: "CE.4",
    summary: "How parties, interest groups, and the news shape elections and public opinion.",
    points: [
      "A political party is an organized group that tries to win elections and shape government policy. The two major U.S. parties are the Democratic and Republican parties. Smaller groups are called third parties.",
      "A party platform lists the party's positions and goals. Candidates are chosen in primary elections or caucuses; the general election decides who holds the office.",
      "An interest group is a group of people with a shared goal who try to influence government (for example, environmental, business, or teachers' groups). Lobbying means trying to persuade lawmakers.",
      "A political action committee (PAC) raises and spends money to support candidates. Campaign finance laws limit and require reporting of some of this spending.",
      "The media (newspapers, TV, radio, websites, social media) inform citizens, act as a 'watchdog' over government, and help shape public opinion.",
      "The First Amendment protects freedom of the press. Reporters can criticize government without fear of punishment.",
      "Media literacy: check who wrote it, who paid for it, what evidence is given, and whether other reliable sources agree. Separate facts from opinion and watch for bias and propaganda.",
      "Public opinion polls ask a sample of people what they think. Good polls use a random, representative sample and neutral questions.",
    ],
    example: "Reading a news story:\n• Fact: 'The city council voted 5–2 to build a new park.' (can be checked)\n• Opinion: 'The council made a terrible choice.' (a judgment)\n\nA poll of only 20 people at a ball game is a poor sample of the whole town.",
    vocab: [["political party", "An organized group that works to win elections and influence government policy."], ["platform", "A party's list of positions and goals."], ["interest group", "People with a shared goal who try to influence government decisions."], ["lobbying", "Trying to persuade lawmakers to support or oppose a law."], ["bias", "An unfair leaning toward one side."], ["propaganda", "Information used to push a cause, often one-sided or misleading."], ["primary election", "An election in which voters choose a party's candidate."]],
    questions: `
What is a political party?|an organized group that tries to win elections and shape policy|a group of judges|a government agency|a type of tax|=>Parties compete in elections.
Which two parties are the major U.S. political parties?|Democratic and Republican|Federalist and Whig|Libertarian and Green|Liberal and Conservative|=>The two-party system.
A party's list of positions and goals is its…|platform|ballot|charter|census|=>Voters compare platforms.
Which election chooses a party's candidate?|primary election|general election|special election|runoff census|=>Primaries come first.
What do interest groups do?|try to influence government decisions|run elections|write the Constitution|collect taxes|=>They share a goal.
Trying to persuade lawmakers to vote a certain way is called…|lobbying|filibustering|vetoing|impeaching|=>Lobbyists meet with lawmakers.
What does a PAC do?|raises and spends money to support candidates|judges court cases|counts votes|makes treaties|=>Political action committee.
Which amendment protects freedom of the press?|First Amendment|Second Amendment|Fourth Amendment|Tenth Amendment|=>The First protects press and speech.
Why is the press called a 'watchdog'?|it watches government and reports problems|it makes laws|it guards the capitol|it hires judges|=>Reporters check power.
Which statement is an opinion?|The new law is unfair to students.|The law passed on Tuesday.|The vote was 60–40.|The law has 12 pages.|=>'Unfair' is a judgment.
Which is a fact?|The Senate has 100 members.|The Senate is the best branch.|Senators work too little.|Senate debates are boring.|=>Facts can be checked.
What is media bias?|an unfair leaning toward one side|a type of poll|a law about news|a kind of election|=>Look for balanced sources.
Which poll sample is most reliable?|a random group that represents the whole population|friends of the pollster|people at one event|volunteers who write in|=>Representative samples give better results.
What should you check to judge a news source?|who wrote it, the evidence, and whether others agree|how colorful the page looks|how many ads it has|how long the title is|=>Evaluate credibility.
`,
  }, {
    examples: ["Fact or opinion?\n'Virginia has 11 seats in the U.S. House.' → fact\n'Virginia has the best candidates.' → opinion", "Ways to check a story: find the original source, look for the same news from other reliable outlets, and check the date."],
    vocab: { "political party": "Many voters join a political party that matches their views.", "platform": "The candidate read the party's platform aloud.", "interest group": "A teachers' group is an interest group.", "lobbying": "Lobbying lets groups share their views with lawmakers.", "bias": "The article showed bias because it told only one side.", "propaganda": "Posters during wartime were often propaganda.", "primary election": "Voters pick a party's nominee in the primary election." },
  });

  add({
    id: "foreign-policy", title: "The U.S. in the World: Foreign Policy", sol: "CE.5",
    summary: "How the United States deals with other countries and works with international groups.",
    points: [
      "Foreign policy is a country's plan for dealing with other countries. The president is the chief diplomat and commander in chief; Congress declares war, controls military spending, and the Senate approves treaties (two-thirds vote) and ambassadors.",
      "The Department of State, led by the Secretary of State, carries out diplomacy. Ambassadors represent the U.S. in other countries. The Department of Defense runs the military.",
      "A treaty is a formal agreement between countries. An alliance is a partnership for mutual defense, like NATO (North Atlantic Treaty Organization, 1949).",
      "The United Nations (UN), founded in 1945, works to keep peace and help countries cooperate. It has a General Assembly (all members) and a Security Council (five permanent members: the U.S., Russia, China, the United Kingdom, and France).",
      "Tools of foreign policy: diplomacy (talks), trade agreements, foreign aid (money or supplies), sanctions (penalties like banning trade), and military force as a last resort.",
      "An embargo bans trade with a country. A tariff is a tax on imports.",
      "Isolationism means staying out of other countries' affairs. Internationalism (or interventionism) means taking an active role in world affairs.",
      "Citizens influence foreign policy by voting, contacting leaders, joining groups, and staying informed.",
    ],
    example: "Who does what?\n• President: negotiates a treaty\n• Senate: votes on the treaty (needs 2/3)\n• Secretary of State: leads diplomacy\n• Congress: declares war and funds the military",
    vocab: [["foreign policy", "A country's plan for dealing with other countries."], ["diplomacy", "Peaceful talks and negotiation between countries."], ["treaty", "A formal agreement between countries."], ["alliance", "A partnership between countries for mutual protection or goals."], ["sanction", "A penalty used to pressure another country, such as limiting trade."], ["embargo", "A ban on trade with a country."], ["ambassador", "A top diplomat who represents one country in another."]],
    questions: `
What is foreign policy?|a country's plan for dealing with other countries|a state's tax plan|a school rule|a court ruling|=>It guides how nations interact.
Who is the chief diplomat of the United States?|the president|the Speaker of the House|the Chief Justice|a governor|=>The president leads foreign affairs.
Which body must approve a treaty?|the Senate|the House of Representatives|the Supreme Court|a governor|=>A two-thirds vote is required.
How many Senate votes are needed to approve a treaty?|two-thirds|a simple majority|one-fourth|all 100|=>Two-thirds of senators present.
Who has the power to declare war?|Congress|the president alone|the Supreme Court|the UN|=>Article I gives this power to Congress.
Who is commander in chief of the armed forces?|the president|the Secretary of State|the Speaker|the Chief Justice|=>Article II.
What does the Secretary of State lead?|the Department of State and diplomacy|the military|the courts|the census|=>Chief foreign-policy adviser.
What is an ambassador?|a diplomat who represents a country abroad|a soldier|a judge|a senator|=>Ambassadors live in other countries.
What is NATO?|an alliance of countries for mutual defense|a trade tax|a court|a UN agency only|=>North Atlantic Treaty Organization.
When was the United Nations founded?|1945|1776|1865|1991|=>After World War II.
Which UN body has five permanent members?|the Security Council|the General Assembly|the Supreme Court|the Senate|=>U.S., Russia, China, UK, France.
What is a sanction?|a penalty meant to pressure another country|a trade agreement|a peace treaty|a vote|=>Sanctions can limit trade or travel.
What is an embargo?|a ban on trade with a country|a tax on imports|a type of treaty|a type of vote|=>Trade is stopped.
Isolationism is the idea that a country should…|stay out of other countries' affairs|join every alliance|fight every war|ignore its own people|=>It avoids foreign involvement.
`,
  }, {
    examples: ["Foreign policy tools from mild to strong: talks (diplomacy) → trade deals → sanctions → military force (last resort).", "Powers are shared: the president negotiates, the Senate approves, and Congress funds and declares war."],
    vocab: { "foreign policy": "A country's foreign policy covers trade, defense, and diplomacy.", "diplomacy": "The two leaders used diplomacy to solve the dispute.", "treaty": "The Senate voted on the treaty.", "alliance": "NATO is an alliance of countries.", "sanction": "The country faced sanctions after breaking the agreement.", "embargo": "An embargo stopped ships from carrying goods there.", "ambassador": "The ambassador met with the foreign minister." },
  });

  add({
    id: "landmark-cases", title: "Landmark Supreme Court Cases", sol: "CE.7",
    summary: "Famous Supreme Court decisions and how they shaped rights and government power.",
    points: [
      "Marbury v. Madison (1803): established judicial review, the Court's power to decide whether laws are unconstitutional. Chief Justice John Marshall, a Virginian, wrote the opinion.",
      "McCulloch v. Maryland (1819): the Court said Congress has implied powers (the 'necessary and proper' clause) and that states cannot tax the national bank. Federal law is supreme over state law.",
      "Dred Scott v. Sandford (1857): the Court ruled that enslaved people were not citizens and had no right to sue. It was later overturned by the 13th and 14th Amendments.",
      "Plessy v. Ferguson (1896): allowed 'separate but equal' public facilities. Brown v. Board of Education (1954) overturned this for public schools: separate schools are unequal.",
      "Gideon v. Wainwright (1963): states must provide a lawyer to defendants who cannot afford one (Sixth Amendment).",
      "Miranda v. Arizona (1966): police must tell suspects of their rights, including the right to remain silent and to have a lawyer.",
      "In re Gault (1967): juveniles have due process rights, including a lawyer and notice of charges. Tinker v. Des Moines (1969): students do not 'shed their constitutional rights' at school (symbolic speech). New Jersey v. T.L.O. (1985): school officials may search students with reasonable suspicion.",
      "Loving v. Virginia (1967): struck down state laws banning marriage between people of different races (Fourteenth Amendment).",
    ],
    example: "Matching cases to ideas:\n• Marbury v. Madison → judicial review\n• Brown v. Board → ended school segregation\n• Gideon → right to a lawyer\n• Tinker → student speech\n• Loving → marriage and equal protection (a Virginia case)",
    vocab: [["precedent", "An earlier court decision that guides later cases."], ["judicial review", "The power of courts to decide whether a law is constitutional."], ["majority opinion", "The court's official explanation of its decision."], ["dissent", "A written disagreement with the majority decision."], ["due process", "Fair treatment under the law."], ["overturn", "To cancel an earlier court decision."], ["implied powers", "Powers not listed in the Constitution but needed to carry out listed powers."]],
    questions: `
Which case established judicial review?|Marbury v. Madison|Brown v. Board of Education|Gideon v. Wainwright|Miranda v. Arizona|=>1803.
What is judicial review?|deciding whether a law is constitutional|vetoing a bill|writing a law|choosing a president|=>Courts check laws.
Which Virginian was Chief Justice in Marbury v. Madison?|John Marshall|Thomas Jefferson|George Mason|Patrick Henry|=>He shaped the Court's power.
What did McCulloch v. Maryland say about the national bank?|states cannot tax it|it is illegal|only states may run it|it must close|=>Federal law is supreme.
Which case said that enslaved people were not citizens?|Dred Scott v. Sandford|Plessy v. Ferguson|Brown v. Board|Gideon v. Wainwright|=>1857.
What did Plessy v. Ferguson allow?|'separate but equal' facilities|equal schools|integration|free speech in schools|=>1896.
Which case ended legal segregation in public schools?|Brown v. Board of Education|Plessy v. Ferguson|Tinker v. Des Moines|Miranda v. Arizona|=>1954.
Gideon v. Wainwright guaranteed…|a lawyer for those who cannot afford one|a free press|the right to vote at 18|school prayer|=>Sixth Amendment.
Miranda v. Arizona requires police to…|tell suspects their rights|pay for bail|search without cause|close courts|=>'You have the right to remain silent.'
Tinker v. Des Moines protected…|student symbolic speech|school uniforms|school lunches|school buses|=>Black armbands in 1969.
New Jersey v. T.L.O. allowed school officials to search students when…|there is reasonable suspicion|they feel like it|never|parents are absent|=>School searches need reasonable suspicion.
Loving v. Virginia struck down…|laws banning interracial marriage|laws taxing tea|school segregation only|voting taxes|=>Fourteenth Amendment equal protection.
What is a precedent?|an earlier decision that guides later cases|a new law|a veto|a ballot|=>Courts follow precedent.
A justice's written disagreement with the majority is a…|dissent|precedent|verdict|plea|=>The minority opinion.
`,
  }, {
    examples: ["Match the right: Sixth Amendment (lawyer) → Gideon; Fourteenth Amendment (equal protection) → Brown and Loving; First Amendment (speech) → Tinker.", "Case names read 'plaintiff v. defendant,' like Marbury v. Madison."],
    vocab: { "precedent": "The judge looked at precedent before deciding.", "judicial review": "Judicial review lets courts strike down unconstitutional laws.", "majority opinion": "The majority opinion explained the Court's reasoning.", "dissent": "The justice wrote a dissent to disagree.", "due process": "Due process means everyone gets a fair process.", "overturn": "Brown v. Board helped overturn 'separate but equal.'", "implied powers": "Congress used implied powers to create a national bank." },
  });

  add({
    id: "civil-rights", title: "Expanding Rights & the Civil Rights Movement", sol: "CE.3",
    summary: "How rights grew through amendments, laws, court cases, and the efforts of ordinary people.",
    points: [
      "Reconstruction Amendments: 13th (1865) ended slavery; 14th (1868) gave citizenship and equal protection; 15th (1870) said voting cannot be denied because of race.",
      "Women's suffrage: the Seneca Falls Convention (1848) began the movement; the 19th Amendment (1920) gave women the right to vote. Leaders included Elizabeth Cady Stanton and Susan B. Anthony.",
      "Jim Crow laws in the South created legal segregation after Reconstruction. Plessy v. Ferguson (1896) allowed 'separate but equal.'",
      "Brown v. Board of Education (1954) ruled school segregation unconstitutional. In Virginia, student Barbara Johns led a 1951 walkout at Moton High School in Farmville, which became part of the case. Some Virginia officials resisted integration ('Massive Resistance').",
      "Civil rights leaders: Rosa Parks and the Montgomery Bus Boycott (1955–56), Martin Luther King Jr. (nonviolent protest, 'I Have a Dream,' 1963), Thurgood Marshall (lawyer, first Black Supreme Court justice).",
      "Civil Rights Act of 1964 banned discrimination in public places and jobs. Voting Rights Act of 1965 protected voting rights and ended barriers like literacy tests.",
      "Later expansions: Title IX (1972) banned sex discrimination in federally funded education; Americans with Disabilities Act (1990) protects people with disabilities; the 26th Amendment (1971) lowered the voting age to 18.",
      "Methods of change: voting, petitions, peaceful protest, boycotts, lawsuits, and passing new laws. Civil disobedience means peacefully refusing to obey an unjust law.",
    ],
    example: "Timeline of expanding voting rights:\n1870: 15th Amendment (race)\n1920: 19th Amendment (women)\n1965: Voting Rights Act\n1971: 26th Amendment (age 18)",
    vocab: [["segregation", "Forced separation of people, especially by race."], ["discrimination", "Unfair treatment of people because of who they are."], ["suffrage", "The right to vote."], ["boycott", "Refusing to buy or use something as a protest."], ["civil disobedience", "Peacefully refusing to obey a law believed to be unjust."], ["integration", "Bringing groups together, such as in schools."], ["amendment", "A change or addition to the Constitution."]],
    questions: `
Which amendment ended slavery?|13th|14th|15th|19th|=>Ratified in 1865.
Which amendment gave women the right to vote?|19th|15th|13th|26th|=>Ratified in 1920.
Which amendment lowered the voting age to 18?|26th|19th|15th|24th|=>Ratified in 1971.
What did the 14th Amendment guarantee?|citizenship and equal protection|the right to a lawyer|freedom of speech|a free press|=>1868.
What was the Seneca Falls Convention?|a 1848 meeting that began the women's rights movement|a Civil War battle|a Supreme Court case|a treaty|=>New York.
What were Jim Crow laws?|laws that enforced racial segregation|laws that ended slavery|laws that taxed tea|laws about voting at 18|=>Legal segregation in the South.
Which case ruled school segregation unconstitutional?|Brown v. Board of Education|Plessy v. Ferguson|Dred Scott v. Sandford|Gideon v. Wainwright|=>1954.
Who led the 1951 student walkout at Moton High School in Farmville, Virginia?|Barbara Johns|Rosa Parks|Susan B. Anthony|Harriet Tubman|=>Her protest became part of Brown.
What event did Rosa Parks' arrest help start?|the Montgomery Bus Boycott|the Boston Tea Party|the Seneca Falls Convention|the March on Washington|=>1955–56.
Which leader promoted nonviolent protest and gave the 'I Have a Dream' speech?|Martin Luther King Jr.|Frederick Douglass|Booker T. Washington|Thurgood Marshall|=>1963.
Who was the first Black justice on the Supreme Court?|Thurgood Marshall|Clarence Darrow|John Marshall|Earl Warren|=>Appointed in 1967.
What did the Civil Rights Act of 1964 do?|banned discrimination in public places and jobs|lowered the voting age|ended slavery|created the Supreme Court|=>A landmark law.
What did the Voting Rights Act of 1965 do?|protected voting rights and ended barriers like literacy tests|set tax rates|created Congress|ended the draft|=>Federal protection of voting.
What does Title IX prohibit?|sex discrimination in federally funded education|segregation in buses|poll taxes|price fixing|=>1972.
What is a boycott?|refusing to buy or use something as protest|a type of tax|a court order|a law|=>Used in Montgomery.
`,
  }, {
    examples: ["Rights expand through three paths: amendments (13th, 14th, 15th, 19th, 26th), laws (Civil Rights Act, ADA), and court cases (Brown v. Board).", "Peaceful tools of change: vote, petition, march, boycott, sue, and pass new laws."],
    vocab: { "segregation": "Segregation kept students in separate schools.", "discrimination": "Laws now ban discrimination in hiring.", "suffrage": "Women fought for suffrage for decades.", "boycott": "People joined the bus boycott.", "civil disobedience": "King used civil disobedience to protest unjust laws.", "integration": "Integration of public schools began after Brown.", "amendment": "An amendment can change the Constitution." },
  });

  add({
    id: "geography-people", title: "Geography, Regions & Population", sol: "CE.6",
    summary: "Using maps and geography to understand where people live, move, and vote.",
    points: [
      "Five themes of geography: location (where), place (what it is like), region (areas with shared features), movement (people, goods, ideas), and human-environment interaction.",
      "Absolute location uses coordinates (latitude and longitude). Relative location describes a place compared to others (for example, 'south of Richmond').",
      "Latitude lines run east–west and measure distance north or south of the Equator. Longitude lines run north–south and measure distance east or west of the Prime Meridian.",
      "Maps have a title, compass rose, scale, and legend (key). Types include political, physical, road, and thematic maps.",
      "Virginia has five regions: Coastal Plain (Tidewater), Piedmont, Blue Ridge, Ridge and Valley, and Appalachian Plateau. Chesterfield County is in the Piedmont and Coastal Plain area near Richmond.",
      "Population density is the number of people per square mile. Areas can be urban (city), suburban, or rural (countryside).",
      "Migration is people moving from one place to another. Push factors drive people away (war, lack of jobs); pull factors attract them (opportunity, safety).",
      "The census counts the U.S. population every 10 years. Results decide how many seats each state gets in the House (435 total) in a process called apportionment, and where funds are directed.",
    ],
    example: "Reading a map:\n• Title tells the topic\n• Compass rose shows N, S, E, W\n• Scale: 1 inch = 50 miles\n• Legend explains the symbols\n\nPopulation density = people ÷ square miles. 5,000 people ÷ 10 sq mi = 500 people per square mile.",
    vocab: [["latitude", "East–west lines that measure distance north or south of the Equator."], ["longitude", "North–south lines that measure distance east or west of the Prime Meridian."], ["population density", "The number of people living in a certain area, such as per square mile."], ["migration", "The movement of people from one place to another."], ["census", "A count of the population done every 10 years in the U.S."], ["apportionment", "Dividing House seats among the states by population."], ["region", "An area with shared features."]],
    questions: `
Which lines measure distance north or south of the Equator?|latitude|longitude|meridians only|the Tropic of Cancer only|=>Latitude lines run east–west.
Which lines measure distance east or west of the Prime Meridian?|longitude|latitude|the Equator|the Arctic Circle|=>Longitude lines run north–south.
What does a map legend (key) show?|what the symbols mean|the map's age|the mapmaker's name|the population|=>Use it to read symbols.
What does a map scale tell you?|real distance compared with map distance|the direction north|the title|the date|=>For example 1 inch = 50 miles.
What does a compass rose show?|directions|distance|population|elevation only|=>N, S, E, W.
What is relative location?|a place described compared with other places|exact coordinates|the population|the elevation|=>For example 'north of Richmond.'
What is absolute location?|exact location using latitude and longitude|a place described by landmarks|a place's climate|a place's government|=>Coordinates.
Which is NOT one of Virginia's five regions?|Great Plains|Coastal Plain|Piedmont|Blue Ridge|=>The Great Plains are not in Virginia.
What is population density?|the number of people per unit of area|the total population|the age of the people|the number of births|=>People per square mile.
A town has 3,000 people in 6 square miles. What is its density?|500 per square mile|18,000 per square mile|50 per square mile|5,000 per square mile|=>3,000 ÷ 6 = 500.
What is migration?|people moving from one place to another|a type of climate|a map type|a tax|=>Can be within or between countries.
Which is a pull factor?|job opportunities|war|famine|natural disaster|=>Pull factors attract people.
Which is a push factor?|war or famine|good schools|safe neighborhoods|new jobs|=>Push factors drive people away.
How often does the U.S. census count the population?|every 10 years|every year|every 2 years|every 50 years|=>The Constitution requires a count every 10 years.
What does the census help decide?|how many House seats each state gets|who is president|court rulings|tax rates only|=>Apportionment.
`,
  }, {
    examples: ["Latitude and longitude: Richmond, VA is about 37.5° N, 77.4° W (north of the Equator, west of the Prime Meridian).", "Push and pull: A family leaves a farm because of drought (push) and moves to a city with jobs (pull)."],
    vocab: { "latitude": "Latitude tells how far north or south a place is.", "longitude": "Longitude tells how far east or west a place is.", "population density": "A city has a higher population density than a farm town.", "migration": "Migration changed the town's population.", "census": "The census counts every person in the country.", "apportionment": "Apportionment gives larger states more House seats.", "region": "Piedmont is a region of Virginia." },
  });

  add({
    id: "history-skills", title: "Social Studies Skills: Sources, Bias & Evidence", sol: "CE.1",
    summary: "How historians and citizens analyze sources, timelines, graphs, and political cartoons.",
    points: [
      "A primary source is a firsthand record from the time (diary, letter, photograph, speech, law). A secondary source is created later by someone who studied the past (textbook, documentary).",
      "Point of view is the perspective of the person who made the source. Bias is an unfair leaning toward one side. Ask: Who made this? Why? For whom? What is left out?",
      "Cause and effect: a cause makes something happen; an effect is the result. Events often have many causes and effects.",
      "Timelines place events in order. Chronological order means earliest to latest. A decade is 10 years, a century is 100 years.",
      "Continuity and change: some things stay the same over time (continuity) while others change.",
      "Graphs and charts: bar graphs compare amounts, line graphs show change over time, circle (pie) graphs show parts of a whole, and tables organize facts.",
      "Political cartoons use symbols, exaggeration, labels, and humor to share an opinion about an issue. Ask what each symbol stands for and what the artist wants you to think.",
      "To make a claim, use evidence from reliable sources and give credit by citing them.",
    ],
    example: "Primary or secondary?\n• A soldier's letter home → primary\n• A modern book about the soldier → secondary\n\nIn a cartoon, a giant elephant labeled 'Budget' crushing a tiny house shows the artist's view that the budget is overwhelming.",
    vocab: [["primary source", "A firsthand record from the time being studied."], ["secondary source", "A later account made by someone who studied the past."], ["point of view", "The perspective of the person who created a source."], ["bias", "An unfair leaning toward one side."], ["chronological order", "Events listed from earliest to latest."], ["political cartoon", "A drawing that uses symbols and humor to share an opinion."], ["evidence", "Facts and details that support a claim."]],
    questions: `
Which is a primary source?|a soldier's diary from the war|a textbook chapter|a modern documentary|an encyclopedia article|=>Primary sources come from the time.
Which is a secondary source?|a history textbook|a photograph from 1863|a speech given in 1963|a signed treaty|=>Written later by someone who studied the past.
What is point of view?|the perspective of the creator of a source|the date a source was made|the size of a source|the cost of a source|=>It shapes what a source says.
What is bias?|an unfair leaning toward one side|a type of graph|a kind of timeline|a primary source|=>Look for one-sided words.
What does chronological order mean?|earliest to latest|largest to smallest|alphabetical|random|=>Timelines use chronological order.
How many years are in a decade?|10|100|1,000|50|=>A century is 100.
How many years are in a century?|100|10|1,000|50|=>A century = 100 years.
Which graph best shows change over time?|line graph|circle graph|table|map key|=>Lines show trends.
Which graph best shows parts of a whole?|circle (pie) graph|line graph|timeline|bar graph only|=>Slices add to 100%.
Which graph best compares amounts across categories?|bar graph|circle graph|timeline|map|=>Bars compare.
What is a political cartoon?|a drawing that uses symbols to share an opinion|a news report|a map|a graph of data|=>Look for symbols and labels.
What is evidence?|facts or details that support a claim|a guess|an opinion with no proof|a title|=>Strong claims need evidence.
What is a cause?|the reason something happens|the result|a type of graph|a type of source|=>The effect is the result.
What does continuity mean in history?|something that stays the same over time|something that changes|a time period|a type of map|=>Continuity and change.
A newspaper from the day of the event is a…|primary source|secondary source|opinion|map|=>It was created at the time.
`,
  }, {
    examples: ["Source check: Who made it? When? Why? What is the point of view? Is it supported by other sources?", "Cause and effect chain: High taxes (cause) → protests (effect) → new laws (effect of the protests)."],
    vocab: { "primary source": "A diary is a primary source.", "secondary source": "A textbook is a secondary source.", "point of view": "A diary shows the writer's point of view.", "bias": "The poster showed bias for one candidate.", "chronological order": "Events on a timeline are in chronological order.", "political cartoon": "The political cartoon showed a bird for peace.", "evidence": "She used evidence from three sources." },
  });

  add({
    id: "global-economy", title: "Trade & the Global Economy", sol: "CE.9",
    summary: "How countries trade, why prices change, and how economies depend on each other.",
    points: [
      "Specialization means focusing on making a few goods or services. Countries trade because they have different resources, skills, and costs.",
      "Imports are goods bought from other countries; exports are goods sold to other countries. Virginia ports like Norfolk handle many imports and exports.",
      "A trade surplus means exports are greater than imports; a trade deficit means imports are greater than exports.",
      "A tariff is a tax on imports; a quota limits the amount of a good that can be imported. These are trade barriers. Free trade has few barriers.",
      "Trade agreements (like USMCA with Canada and Mexico) lower barriers between countries. The World Trade Organization (WTO) helps set trade rules.",
      "Exchange rates show the value of one country's money compared with another's. Countries use different currencies.",
      "Globalization is the growing connection of economies, cultures, and people around the world. Interdependence means countries rely on each other for goods and resources.",
      "Trade can lower prices and increase choices, but it can also cause job losses in some industries. Entrepreneurs and businesses may sell goods around the world online.",
    ],
    example: "Trade example:\n• The U.S. exports soybeans and airplanes.\n• The U.S. imports coffee, cars, and electronics.\n• If a 10% tariff is placed on a $100 imported jacket, the tariff adds $10.",
    vocab: [["import", "A good or service bought from another country."], ["export", "A good or service sold to another country."], ["tariff", "A tax on imported goods."], ["trade deficit", "When a country imports more than it exports."], ["globalization", "The growing connection of economies and cultures around the world."], ["interdependence", "Countries relying on each other for goods and resources."], ["specialization", "Focusing on producing a few goods or services."]],
    questions: `
What is an import?|a good bought from another country|a good sold to another country|a type of tax|a type of money|=>Coffee is often imported.
What is an export?|a good sold to another country|a good bought from another country|a tax|a loan|=>Soybeans are U.S. exports.
What is a tariff?|a tax on imported goods|a ban on trade|a trade agreement|a type of loan|=>Tariffs raise import prices.
A 10% tariff on a $50 imported item adds…|$5|$10|$0.50|$15|=>10% of 50 = 5.
What is a trade deficit?|imports are greater than exports|exports are greater than imports|trade is equal|there is no trade|=>Importing more than exporting.
What is a trade surplus?|exports are greater than imports|imports are greater than exports|trade is banned|trade is equal|=>Exporting more than importing.
What is a quota?|a limit on the amount of a good that can be imported|a tax on exports|a type of money|a type of loan|=>A trade barrier.
Which is an example of a trade barrier?|a tariff|a trade agreement|free trade|a port|=>Barriers limit trade.
What is globalization?|the growing connection of economies and cultures worldwide|local trade only|a tax|a law|=>The world is more connected.
What does interdependence mean?|countries rely on each other|countries are independent of each other|countries do not trade|countries share a government|=>Mutual reliance.
What is specialization?|focusing on a few goods or services|making everything|spending all income|saving money|=>It increases efficiency.
Why do countries trade?|they have different resources and skills|they have the same resources|to avoid money|because of tariffs|=>Trade increases choices.
What is an exchange rate?|the value of one currency compared with another|a tax rate|a trade barrier|a price index|=>For example dollars to euros.
Which organization helps set rules for world trade?|the World Trade Organization|NATO|the Senate|the Supreme Court|=>WTO.
Which Virginia port handles many exports and imports?|Norfolk|Roanoke|Charlottesville|Winchester|=>One of the busiest on the East Coast.
`,
  }, {
    examples: ["Import or export? A U.S. company sells apples to Japan → export. A U.S. store buys bananas from Ecuador → import.", "Tariff math: 5% tariff on a $200 item = 0.05 × 200 = $10 added."],
    vocab: { "import": "The store will import coffee beans.", "export": "Virginia farmers export soybeans.", "tariff": "A tariff made the imported shoes cost more.", "trade deficit": "The country had a trade deficit last year.", "globalization": "Globalization lets people buy goods from around the world.", "interdependence": "Trade creates interdependence between nations.", "specialization": "Specialization helps workers get better at one job." },
  });

  add({
    id: "virginia-founding", title: "Virginia in the Founding Era", sol: "CE.1",
    summary: "Virginia's firsts and the Virginians who helped found the nation and its government.",
    points: [
      "Jamestown (1607) was the first permanent English settlement in America. The House of Burgesses (1619) was the first representative legislative assembly in English America.",
      "Today's Virginia General Assembly (Senate and House of Delegates) is the oldest continuous legislative body in the Western Hemisphere.",
      "George Mason wrote the Virginia Declaration of Rights (1776), which influenced the Bill of Rights. Thomas Jefferson wrote the Declaration of Independence and the Virginia Statute for Religious Freedom.",
      "Patrick Henry urged resistance to Britain ('Give me liberty, or give me death!' 1775). George Washington led the Continental Army and presided over the Constitutional Convention.",
      "James Madison, the 'Father of the Constitution,' wrote the Virginia Plan (representation by population) and much of the Bill of Rights; he was the fourth president.",
      "Virginia ratified the Constitution in June 1788 after a debate. Some leaders, like Patrick Henry and George Mason, wanted a bill of rights first.",
      "Virginians served as four of the first five U.S. presidents: Washington, Jefferson, Madison, and Monroe. John Marshall, a Virginian, became Chief Justice and strengthened the Court's power.",
      "Virginia's capital moved from Williamsburg to Richmond in 1780. The 1781 Battle of Yorktown in Virginia effectively ended the Revolutionary War.",
    ],
    example: "Who did what?\n• Mason → Virginia Declaration of Rights\n• Jefferson → Declaration of Independence\n• Madison → Virginia Plan and the Bill of Rights\n• Henry → 'Give me liberty…' speech\n• Marshall → judicial review",
    vocab: [["House of Burgesses", "The first elected lawmaking assembly in English America (1619)."], ["General Assembly", "Virginia's legislature, made up of the Senate and the House of Delegates."], ["ratify", "To officially approve, as states did with the Constitution."], ["Virginia Plan", "Madison's plan for representation based on state population."], ["statute", "A written law passed by a legislature."], ["delegate", "A person chosen to represent others."], ["Bill of Rights", "The first ten amendments, which protect individual rights."]],
    questions: `
What was the first permanent English settlement in America?|Jamestown|Plymouth|Roanoke|St. Augustine|=>Founded in 1607.
What was the House of Burgesses?|the first representative assembly in English America|a British court|a church|a militia|=>Met in 1619.
Who wrote the Virginia Declaration of Rights?|George Mason|Thomas Jefferson|James Madison|Patrick Henry|=>1776.
Who wrote the Virginia Statute for Religious Freedom?|Thomas Jefferson|George Mason|John Marshall|George Washington|=>Adopted in 1786.
Who is called the 'Father of the Constitution'?|James Madison|Thomas Jefferson|George Washington|Patrick Henry|=>He wrote the Virginia Plan.
What did the Virginia Plan propose?|representation based on state population|equal votes for each state|a king|no national government|=>Large-state plan.
Who said 'Give me liberty, or give me death!'?|Patrick Henry|George Washington|John Adams|Benjamin Franklin|=>1775 speech in Richmond.
Who led the Continental Army?|George Washington|Patrick Henry|John Marshall|James Monroe|=>A Virginian.
Which battle in Virginia effectively ended the Revolutionary War?|Yorktown|Lexington|Gettysburg|Saratoga|=>1781.
Why did some Virginians oppose ratifying the Constitution at first?|they wanted a bill of rights|they wanted a king|they wanted no states|they disliked trade|=>The Bill of Rights followed in 1791.
In what year did Virginia ratify the Constitution?|1788|1776|1607|1865|=>Virginia was the tenth state.
Who was the Virginian Chief Justice who strengthened judicial review?|John Marshall|Thomas Jefferson|James Madison|Patrick Henry|=>Marbury v. Madison.
How many of the first five presidents were from Virginia?|four|one|two|five|=>Washington, Jefferson, Madison, Monroe.
Virginia's legislature is called the…|General Assembly|Congress|Parliament|House of Lords|=>Senate and House of Delegates.
In what year did Virginia's capital move to Richmond?|1780|1607|1865|1900|=>Moved from Williamsburg.
`,
  }, {
    examples: ["Virginia 'firsts': first permanent English settlement (Jamestown 1607), first representative assembly (House of Burgesses 1619).", "Four Virginians in the first five presidents: Washington, Jefferson, Madison, Monroe."],
    vocab: { "House of Burgesses": "The House of Burgesses met in Jamestown.", "General Assembly": "Virginia's General Assembly meets in Richmond.", "ratify": "Nine states had to ratify the Constitution.", "Virginia Plan": "The Virginia Plan favored large states.", "statute": "The statute protected religious freedom.", "delegate": "Each state sent delegates to the convention.", "Bill of Rights": "The Bill of Rights has ten amendments." },
  });
})();
