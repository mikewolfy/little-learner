/* Grade 7 Social Studies: United States History from 1865 to the Present.
   Questions use a compact format: question | right answer | wrong | wrong | wrong | => explanation
   (the right answer comes first; the app shuffles the choices). */
(function () {
  const g7 = window.CURRICULUM[7];
  const Q = (text) => text.trim().split("\n").filter((l) => l.trim()).map((l) => {
    const parts = l.split("|").map((p) => p.trim());
    const ex = parts.pop().replace(/^=>\s*/, "");
    const q = parts.shift();
    return [q, parts, 0, ex];
  });
  const subject = {
    id: "ushistory", name: "U.S. History: 1865 to Present", icon: "🇺🇸", standards: "2023 History & Social Science SOL (U.S. History 1865 to the Present)",
    about: "Grade 7 social studies in CCPS is United States History from 1865 to the present: Reconstruction, the growth of industry and cities, the Progressive Era, two world wars, the Great Depression, the Cold War, the civil rights movement, and the modern United States, with Virginia connections throughout. (Civics & Economics is the Grade 8 course on this site.)",
    units: [],
  };
  window.EXTRAS = window.EXTRAS || {};
  const add = (u, extra) => {
    u.sol = u.sol || "U.S. History";
    u.questions = Q(u.questions);
    subject.units.push(u);
    window.EXTRAS["7/ushistory/" + u.id] = extra;
  };

  add({
    id: "reconstruction", title: "Reconstruction (1865–1877)",
    summary: "Rebuilding the South after the Civil War and the fight over freedom and rights for formerly enslaved people.",
    points: [
      "Reconstruction (1865–1877) was the period of rebuilding the South, readmitting Confederate states to the Union, and deciding the rights of freed people.",
      "President Abraham Lincoln was assassinated in April 1865. Andrew Johnson became president and favored a lenient plan. Radical Republicans in Congress wanted stronger protections for freed people.",
      "Three Reconstruction Amendments: the 13th (1865) ended slavery, the 14th (1868) gave citizenship and equal protection, and the 15th (1870) said the right to vote cannot be denied because of race.",
      "The Freedmen's Bureau (1865) helped formerly enslaved people with food, schools, jobs, and legal help. Southern states passed Black Codes that limited freedom; Congress answered with the Civil Rights Act of 1866 and the Military Reconstruction Acts of 1867.",
      "For the first time, Black men voted and held office, such as Hiram Revels, the first African American U.S. senator (1870). Many new schools and churches were built.",
      "Many freed families became sharecroppers, farming land owned by others and paying with a share of the crop, which often kept them in debt. Groups like the Ku Klux Klan used violence to stop Black Americans from voting.",
      "Congress impeached President Johnson in 1868 but the Senate did not convict him. Reconstruction ended with the Compromise of 1877, when federal troops were withdrawn from the South.",
      "Afterward, Southern states passed Jim Crow laws (segregation), poll taxes, and literacy tests. Virginia was readmitted to the Union in January 1870.",
    ],
    example: "Matching the amendments:\n• 13th → freedom (ended slavery)\n• 14th → citizenship and equal protection\n• 15th → voting rights regardless of race\n\nSharecropping: a farmer works another person's land and gives a share of the crop as rent, so a bad harvest means debt.",
    vocab: [["Reconstruction", "The period after the Civil War when the South was rebuilt and the status of freed people was decided."], ["Freedmen's Bureau", "A federal agency that helped formerly enslaved people with food, schools, jobs, and legal help."], ["Black Codes", "Laws passed in Southern states after the war to limit the freedom of Black Americans."], ["sharecropping", "A system in which farmers worked land owned by others and paid with a share of the crop."], ["Jim Crow laws", "Laws that enforced racial segregation, mostly in the South."], ["impeach", "To formally accuse a government official of wrongdoing."], ["poll tax", "A fee charged to vote that kept many poor citizens from voting."]],
    questions: `
What was Reconstruction?|the period of rebuilding the South and readmitting states after the Civil War|the Civil War itself|the Revolution|a westward trail|=>1865–1877.
Which amendment ended slavery?|13th|14th|15th|19th|=>Ratified in 1865.
Which amendment gave citizenship and equal protection of the laws?|14th|13th|15th|26th|=>Ratified in 1868.
Which amendment said voting cannot be denied because of race?|15th|13th|14th|19th|=>Ratified in 1870.
What did the Freedmen's Bureau do?|helped formerly enslaved people with schools, food, jobs, and legal help|ran the Confederate army|collected tariffs|built railroads|=>Created in 1865.
What were Black Codes?|Southern laws that limited the freedom of Black Americans|laws that ended slavery|federal tax laws|school rules|=>Passed after the war.
Who became president after Lincoln was assassinated?|Andrew Johnson|Ulysses S. Grant|Jefferson Davis|Rutherford B. Hayes|=>Johnson was Lincoln's vice president.
Who was the first African American U.S. senator?|Hiram Revels|Frederick Douglass|Booker T. Washington|W. E. B. Du Bois|=>He represented Mississippi in 1870.
What is sharecropping?|farming land owned by someone else and paying with a share of the crop|owning large farms|working in factories|trading furs|=>It often kept families in debt.
What happened to President Andrew Johnson in 1868?|he was impeached but not removed|he was removed|he was re-elected|he resigned|=>The Senate vote was one short.
What ended Reconstruction in 1877?|the Compromise of 1877 and the withdrawal of federal troops|a new amendment|the Civil War|a Supreme Court case|=>Hayes became president.
What were Jim Crow laws?|laws that enforced racial segregation|laws that ended slavery|voting rights laws|labor laws|=>Common in the South after Reconstruction.
What was a poll tax?|a fee required to vote|a tax on houses|a tax on tea|a tax on ships|=>It kept many poor citizens from voting.
When was Virginia readmitted to the Union?|1870|1865|1776|1900|=>After adopting a new constitution.
`,
  }, {
    examples: ["Reconstruction timeline: 1865 (13th Amendment, Freedmen's Bureau) → 1866 (Civil Rights Act) → 1867 (Military Reconstruction Acts) → 1868 (14th Amendment) → 1870 (15th Amendment) → 1877 (Reconstruction ends).", "Why did rights shrink after 1877? Federal troops left, and Southern governments passed Jim Crow laws, poll taxes, and literacy tests."],
    vocab: { "Reconstruction": "Reconstruction tried to rebuild the South.", "Freedmen's Bureau": "The Freedmen's Bureau opened schools for freed children.", "Black Codes": "Black Codes limited where people could work.", "sharecropping": "Sharecropping left many families in debt.", "Jim Crow laws": "Jim Crow laws separated people by race.", "impeach": "The House voted to impeach the president.", "poll tax": "A poll tax stopped many people from voting." },
  });

  add({
    id: "west", title: "Westward Expansion & Native Americans (1865–1900)",
    summary: "Railroads, homesteads, and ranching opened the West while Native American nations lost land and ways of life.",
    points: [
      "The Homestead Act (1862) offered 160 acres of western land to settlers who farmed it for five years. Thousands of families, including freed African Americans and immigrants, moved west.",
      "The Transcontinental Railroad was completed in 1869 at Promontory Summit, Utah, when the Union Pacific and Central Pacific lines met. Many Irish and Chinese workers built it. Railroads carried people, crops, and cattle.",
      "Cattle drives took herds from Texas to railheads in places like Abilene and Dodge City, Kansas. Cowboys, many of them Black or Mexican American, worked on the long drives.",
      "As settlers, miners, and railroads moved onto the Great Plains, conflicts grew with Native American nations such as the Lakota, Cheyenne, and Apache. The buffalo, which Plains peoples depended on, were nearly wiped out.",
      "Key events: Battle of Little Bighorn (1876), where Lakota and Cheyenne warriors led by Sitting Bull and Crazy Horse defeated Custer; Chief Joseph and the Nez Perce surrendered in 1877; the massacre at Wounded Knee (1890).",
      "The government moved Native Americans onto reservations. The Dawes Act (1887) broke up tribal lands into individual plots to force assimilation, and many children were sent to boarding schools that banned their languages and culture.",
      "The 1890 census declared the frontier closed. Oklahoma land runs (1889) opened former Native lands to settlers. Yellowstone became the first national park in 1872.",
      "Western growth helped industry and farming, but it came at a great cost to Native American nations.",
    ],
    example: "Cause and effect:\nRailroad built → farmers can ship crops east → more settlers move west → more conflicts with Plains nations → reservations and the Dawes Act.\n\nHomestead Act: 160 acres + 5 years of farming = ownership.",
    vocab: [["Homestead Act", "A 1862 law that gave settlers 160 acres of western land if they farmed it for five years."], ["transcontinental railroad", "A railroad that crossed the whole continent, completed in 1869."], ["reservation", "Land set aside by the government for Native American nations."], ["assimilation", "Forcing a group to give up its culture and adopt the dominant culture."], ["Dawes Act", "A 1887 law that divided tribal lands into individual plots."], ["cattle drive", "A long journey moving herds of cattle to railroads."], ["frontier", "The edge of settled land."]],
    questions: `
What did the Homestead Act of 1862 offer?|160 acres of land to settlers who farmed it|free railroad tickets|gold coins|a house in Washington|=>Five years of farming.
Where did the Union Pacific and Central Pacific railroads meet in 1869?|Promontory Summit, Utah|Chicago|Denver|Sacramento|=>The golden spike ceremony.
Which groups helped build the transcontinental railroad?|Irish and Chinese workers|only soldiers|only cowboys|only farmers|=>Thousands of laborers.
Why did cattle drives go to Kansas railheads?|to ship cattle east by train|to find gold|to build forts|to trade for furs|=>Abilene and Dodge City.
What happened to the buffalo in the late 1800s?|they were nearly wiped out|their numbers grew|they were domesticated|they moved east|=>Plains peoples depended on them.
Which battle in 1876 was a victory for the Lakota and Cheyenne?|Little Bighorn|Gettysburg|Wounded Knee|Alamo|=>Custer was defeated.
Who led the Nez Perce in 1877 and said 'I will fight no more forever'?|Chief Joseph|Sitting Bull|Geronimo|Crazy Horse|=>He surrendered near Canada.
What was a reservation?|land set aside for Native American nations by the government|a large ranch|a railroad|a fort|=>Often poor land.
What did the Dawes Act of 1887 do?|divided tribal land into individual plots to force assimilation|gave tribes more land|banned railroads|created national parks|=>It weakened tribal ownership.
What is assimilation?|forcing a group to give up its culture and adopt another|trading goods|moving west|building railroads|=>Boarding schools did this.
What happened at Wounded Knee in 1890?|U.S. soldiers killed many Lakota people|a treaty was signed|gold was found|a railroad opened|=>A tragic massacre.
What did the 1890 census announce about the frontier?|it was closed|it was larger|it was moving east|it was empty|=>No clear frontier line.
What was the first national park?|Yellowstone|Yosemite|Shenandoah|Grand Canyon|=>1872.
Who defeated Custer at Little Bighorn?|Lakota and Cheyenne warriors|the Apache|the Nez Perce|Mexican troops|=>Led by Sitting Bull and Crazy Horse.
`,
  }, {
    examples: ["Land runs: on April 22, 1889 settlers raced to claim land in Oklahoma.", "A homesteader family: file a claim, build a sod house, farm for five years, then own 160 acres."],
    vocab: { "Homestead Act": "The Homestead Act gave families land.", "transcontinental railroad": "The transcontinental railroad linked East and West.", "reservation": "Many nations were forced onto reservations.", "assimilation": "Boarding schools forced assimilation.", "Dawes Act": "The Dawes Act divided tribal land.", "cattle drive": "A cattle drive could last months.", "frontier": "The frontier moved west." },
  });

  add({
    id: "industrial-age", title: "The Industrial Age & Labor (1870s–1900s)",
    summary: "Factories, inventions, and big business transformed the economy, and workers organized for better conditions.",
    points: [
      "The Industrial Revolution reached the United States in force after the Civil War. Railroads, steel, oil, and new machines created huge growth. Mark Twain called the period the 'Gilded Age' because it looked golden but hid problems.",
      "Inventors: Alexander Graham Bell (telephone, 1876), Thomas Edison (practical light bulb, 1879; phonograph), the Wright brothers (first powered flight, 1903), and Henry Ford (Model T 1908 and the assembly line 1913).",
      "Business leaders: Andrew Carnegie (steel), John D. Rockefeller (oil and Standard Oil), and J. P. Morgan (banking). A monopoly is when one company controls an industry. The Sherman Antitrust Act (1890) aimed to break up monopolies.",
      "Capitalism, competition, and laissez-faire ideas (government should stay out of business) shaped the economy. Cities grew around factories.",
      "Factory work was often dangerous, with long hours, low pay, and child labor. Workers formed labor unions to bargain for better wages and safer jobs. The American Federation of Labor (AFL), led by Samuel Gompers, organized skilled workers.",
      "Major strikes: Haymarket (1886), Homestead (1892), and Pullman (1894). Strikes were often met by force, and unions faced strong opposition.",
      "Skyscrapers, electric streetcars, and mass-produced goods changed daily life. Farmers struggled with falling prices and formed groups like the Grange and the Populist Party.",
      "Booker T. Washington founded Tuskegee Institute (1881) to teach practical skills; W. E. B. Du Bois helped found the NAACP (1909) and demanded full civil rights.",
    ],
    example: "Cause and effect:\nNew machines + railroads → mass production → factory jobs → cities grow → workers join unions to improve conditions.\n\nMonopoly example: Standard Oil controlled most U.S. oil refining before it was broken up in 1911.",
    vocab: [["industrialization", "The growth of factories and machine production."], ["monopoly", "When one company controls most or all of an industry."], ["labor union", "A group of workers who join together to seek better pay and conditions."], ["strike", "When workers refuse to work to demand changes."], ["assembly line", "A way of making products in which each worker does one task as the item moves along."], ["Sherman Antitrust Act", "A 1890 law meant to stop monopolies."], ["laissez-faire", "The idea that government should not interfere in business."]],
    questions: `
Who invented the telephone in 1876?|Alexander Graham Bell|Thomas Edison|Henry Ford|Orville Wright|=>He patented it in 1876.
Who developed a practical light bulb in 1879?|Thomas Edison|Alexander Graham Bell|Henry Ford|Andrew Carnegie|=>Also invented the phonograph.
Who made the first powered airplane flight in 1903?|the Wright brothers|Charles Lindbergh|Amelia Earhart|Thomas Edison|=>At Kitty Hawk, North Carolina.
Which man made the Model T and used the assembly line?|Henry Ford|Andrew Carnegie|John D. Rockefeller|J. P. Morgan|=>Cars became affordable.
Which business leader is linked with steel?|Andrew Carnegie|John D. Rockefeller|Thomas Edison|Henry Ford|=>Carnegie Steel.
Which business leader built Standard Oil?|John D. Rockefeller|Andrew Carnegie|J. P. Morgan|Henry Ford|=>An oil monopoly.
What is a monopoly?|one company controlling most of an industry|many small shops|a labor union|a type of tax|=>It reduces competition.
What did the Sherman Antitrust Act aim to do?|stop monopolies|ban unions|end child labor|build railroads|=>Passed in 1890.
What is a labor union?|a group of workers organized for better pay and conditions|a type of company|a political party|a bank|=>The AFL was one.
Who led the American Federation of Labor?|Samuel Gompers|Andrew Carnegie|Eugene Debs|Booker T. Washington|=>It organized skilled workers.
What is a strike?|workers refusing to work to demand change|a business merger|a type of tax|a railroad|=>Homestead and Pullman were famous strikes.
Why was the period called the Gilded Age?|it looked golden but hid problems like poverty|everything was made of gold|it had no problems|it was a war|=>Mark Twain's phrase.
What was one problem for factory workers?|long hours, low pay, and dangerous conditions|short workdays|high wages|few workers|=>Many children worked too.
Who founded Tuskegee Institute?|Booker T. Washington|W. E. B. Du Bois|Frederick Douglass|Thomas Edison|=>It taught practical skills.
`,
  }, {
    examples: ["Mass production: before the assembly line a Model T took about 12 hours to build; afterward it took about 90 minutes, so prices dropped and more people could buy cars.", "Strike vs. union: a union is the group; a strike is one action the union may call."],
    vocab: { "industrialization": "Industrialization brought factories to cities.", "monopoly": "A monopoly can raise prices.", "labor union": "A labor union helps workers bargain.", "strike": "The workers went on strike.", "assembly line": "Ford used an assembly line.", "Sherman Antitrust Act": "The Sherman Antitrust Act targeted monopolies.", "laissez-faire": "Laissez-faire means little government involvement." },
  });

  add({
    id: "immigration-cities", title: "Immigration & the Growth of Cities (1880–1920)",
    summary: "Millions of immigrants came to America and cities grew quickly, bringing opportunity and new challenges.",
    points: [
      "Between about 1880 and 1920, more than 20 million immigrants came to the United States, many from southern and eastern Europe (Italy, Poland, Russia) seeking jobs, freedom, and safety. Immigrants from Asia arrived on the West Coast.",
      "Ellis Island in New York Harbor (1892–1954) processed millions of arrivals; Angel Island in San Francisco Bay processed many Asian immigrants. The Statue of Liberty (1886) became a symbol of welcome.",
      "Immigrants often settled in neighborhoods with people from their home country and worked in factories, mines, and on railroads. They kept their languages, foods, and traditions, adding to American culture.",
      "Cities grew fast. Many families lived in crowded tenements with poor light, air, and sanitation. Reformer Jacob Riis photographed these conditions in 'How the Other Half Lives' (1890). Jane Addams opened Hull House (1889), a settlement house that offered classes, child care, and help.",
      "Political machines like Tammany Hall gave jobs and help in exchange for votes but were often corrupt (for example 'Boss' Tweed).",
      "Nativism is the fear or dislike of immigrants. The Chinese Exclusion Act (1882) banned Chinese laborers. Immigration Acts in the 1920s set quotas that sharply limited immigration, especially from southern and eastern Europe and Asia.",
      "African Americans also moved to cities, beginning the Great Migration from the rural South to the North and Midwest.",
      "New technology like electric streetcars, subways, and skyscrapers helped cities grow up and out.",
    ],
    example: "Push and pull factors:\nPush: poverty, war, or persecution in Europe.\nPull: factory jobs, farmland, and freedom in America.\n\nNativism example: the Chinese Exclusion Act (1882) was the first major law to ban immigration of a specific nationality.",
    vocab: [["immigrant", "A person who moves to a new country to live."], ["Ellis Island", "The immigration station in New York Harbor that processed millions of arrivals."], ["tenement", "A crowded city apartment building with poor conditions."], ["nativism", "Favoring native-born people over immigrants."], ["settlement house", "A community center that helped poor and immigrant families."], ["political machine", "A group that controlled city politics by trading favors for votes."], ["Chinese Exclusion Act", "An 1882 law that banned Chinese laborers from immigrating."]],
    questions: `
What was Ellis Island?|an immigration station in New York Harbor|a prison|a fort|a railroad stop|=>Open 1892–1954.
What was Angel Island?|an immigration station in San Francisco Bay|a prison for soldiers|a railroad stop|a park|=>Many Asian immigrants arrived there.
From which regions did many 'new immigrants' come after 1880?|southern and eastern Europe|northern Europe only|Canada only|Australia|=>Italy, Poland, and Russia.
What was a tenement?|a crowded apartment building with poor conditions|a large mansion|a factory|a school|=>Common in cities like New York.
Who wrote 'How the Other Half Lives'?|Jacob Riis|Jane Addams|Upton Sinclair|Mark Twain|=>1890 photos of tenements.
Who founded Hull House?|Jane Addams|Clara Barton|Susan B. Anthony|Ida B. Wells|=>A settlement house in Chicago.
What did settlement houses offer?|classes, child care, and help for poor families|banking|factory jobs|railroad tickets|=>Community services.
What was a political machine?|a group that controlled city politics by trading favors for votes|a type of factory machine|a police unit|a voting booth|=>Tammany Hall was one.
What is nativism?|favoring native-born people and opposing immigrants|welcoming all newcomers|a type of farming|a political party|=>It led to restrictions.
What did the Chinese Exclusion Act of 1882 do?|banned Chinese laborers from immigrating|welcomed Chinese immigrants|ended Chinese schools|built railroads|=>First major law targeting a nationality.
What did the Statue of Liberty come to symbolize?|welcome and freedom for immigrants|military power|trade|a lighthouse only|=>Dedicated in 1886.
What did immigration laws of the 1920s do?|set quotas that limited immigration|opened borders|ended all immigration|created Ellis Island|=>Especially limiting southern and eastern Europe.
Which was a 'pull' factor for immigrants?|jobs and opportunity|war|famine|persecution|=>Pull factors attract people.
Which was a 'push' factor for immigrants?|poverty or persecution|jobs in America|farmland|freedom|=>Push factors drive people away.
`,
  }, {
    examples: ["A family from Italy in 1905: push factors (poverty, few farm jobs) + pull factors (factory jobs in New York) → travel by ship → inspection at Ellis Island → live in a tenement near other Italian families.", "Nativism example: groups urged limits on immigrants and sometimes blamed them for crime and low wages."],
    vocab: { "immigrant": "My great-grandfather was an immigrant.", "Ellis Island": "Millions of people entered through Ellis Island.", "tenement": "The tenement had no bathroom.", "nativism": "Nativism led to new laws.", "settlement house": "The settlement house taught English.", "political machine": "The machine traded jobs for votes.", "Chinese Exclusion Act": "The Chinese Exclusion Act was passed in 1882." },
  });

  add({
    id: "progressive-era", title: "The Progressive Era (1890s–1920)",
    summary: "Reformers tackled problems caused by industry and cities, and new amendments expanded democracy.",
    points: [
      "Progressives were reformers who wanted government to fix problems like unsafe food, child labor, corrupt politics, and unfair business practices.",
      "Muckrakers were journalists who exposed problems: Upton Sinclair's 'The Jungle' (1906) showed unsafe meatpacking, Ida Tarbell targeted Standard Oil, and Jacob Riis exposed slum life.",
      "Laws: the Meat Inspection Act and Pure Food and Drug Act (1906) made food and medicine safer. Child labor laws and workplace safety rules followed the Triangle Shirtwaist Factory Fire (1911), which killed 146 workers.",
      "President Theodore Roosevelt (1901–1909) broke up trusts ('trust busting'), promoted his 'Square Deal,' and protected millions of acres as national forests and parks. Woodrow Wilson (1913–1921) created the Federal Reserve (1913) and the Federal Trade Commission (1914).",
      "Four amendments: the 16th (1913) allowed an income tax; the 17th (1913) provided direct election of senators; the 18th (1919) prohibited alcohol (Prohibition); and the 19th (1920) gave women the right to vote.",
      "The women's suffrage movement was led by Susan B. Anthony, Elizabeth Cady Stanton, Carrie Chapman Catt, and Alice Paul, with parades, protests, and lobbying.",
      "Reforms to politics: initiative, referendum, and recall let citizens vote directly on laws and remove officials.",
      "African American reformers: Ida B. Wells campaigned against lynching; W. E. B. Du Bois and others founded the NAACP (1909); Booker T. Washington advocated education and economic progress. Segregation under Jim Crow continued.",
    ],
    example: "Reform → result:\nThe Jungle (1906) → public outrage → Meat Inspection Act.\nTriangle fire (1911) → safety laws.\nSuffrage protests → 19th Amendment (1920).\n\nProhibition (18th Amendment) was later repealed by the 21st Amendment in 1933.",
    vocab: [["progressive", "A reformer who wanted government to solve problems caused by industrialization."], ["muckraker", "A journalist who exposed corruption and social problems."], ["trust busting", "Breaking up large monopolies."], ["suffrage", "The right to vote."], ["Prohibition", "The ban on making and selling alcohol (1920–1933)."], ["referendum", "A direct vote by citizens on a law."], ["income tax", "A tax on money people earn."]],
    questions: `
What did Progressives want?|government action to fix social and economic problems|no government|a return to farming|more monopolies|=>Reform was their goal.
What is a muckraker?|a journalist who exposed corruption and problems|a factory owner|a politician|a soldier|=>Upton Sinclair was one.
Which book showed unsafe conditions in meatpacking?|The Jungle|Uncle Tom's Cabin|The Great Gatsby|Common Sense|=>By Upton Sinclair, 1906.
Which 1906 laws made food and medicine safer?|Meat Inspection Act and Pure Food and Drug Act|Sherman Act and Dawes Act|Homestead Act|Social Security Act|=>Both passed in 1906.
Which president was known for trust busting and the Square Deal?|Theodore Roosevelt|Woodrow Wilson|William McKinley|Herbert Hoover|=>He also protected public lands.
Which amendment allowed a federal income tax?|16th|17th|18th|19th|=>Ratified in 1913.
Which amendment provided for direct election of senators?|17th|16th|18th|19th|=>1913.
Which amendment began Prohibition?|18th|19th|21st|16th|=>Ratified in 1919.
Which amendment gave women the right to vote?|19th|18th|17th|15th|=>Ratified in 1920.
Who led the suffrage movement with Elizabeth Cady Stanton?|Susan B. Anthony|Jane Addams|Ida B. Wells|Eleanor Roosevelt|=>Long-time suffrage leaders.
What event led to stronger factory safety laws?|the Triangle Shirtwaist Factory Fire|the Boston Tea Party|the Haymarket Riot|the Homestead Strike|=>In 1911, 146 workers died.
What is a referendum?|a direct vote by citizens on a law|a court ruling|a tax|a speech|=>A Progressive tool.
Who campaigned against lynching and for equal rights?|Ida B. Wells|Jane Addams|Carrie Chapman Catt|Alice Paul|=>A journalist and activist.
Which organization was founded in 1909 to fight racial discrimination?|NAACP|AFL|Tammany Hall|Federal Reserve|=>W. E. B. Du Bois helped found it.
`,
  }, {
    examples: ["Progressive Amendments (16–19): 16 = income tax; 17 = senators elected by voters; 18 = Prohibition; 19 = women vote.", "Reform chain: journalist exposes problem → public pressure → lawmakers act → new law."],
    vocab: { "progressive": "A progressive supported new laws to fix problems.", "muckraker": "The muckraker wrote about unsafe factories.", "trust busting": "Trust busting aimed to restore competition.", "suffrage": "Women fought for suffrage.", "Prohibition": "Prohibition banned alcohol.", "referendum": "Voters decided in a referendum.", "income tax": "The income tax funds government." },
  });

  add({
    id: "imperialism", title: "Imperialism & the Spanish-American War (1867–1914)",
    summary: "How the United States became a world power by gaining territory and influence overseas.",
    points: [
      "Imperialism is when a strong country takes over or controls weaker countries or territories. Reasons included new markets, raw materials, naval bases, national pride, and spreading American ideas.",
      "Alaska was purchased from Russia in 1867 (Secretary of State William Seward). American planters overthrew Hawaii's Queen Liliuokalani in 1893, and the U.S. annexed Hawaii in 1898.",
      "Cuba rebelled against Spanish rule. Newspapers like those of Hearst and Pulitzer used 'yellow journalism' (sensational stories) to stir up support. The USS Maine exploded in Havana Harbor in February 1898, and the U.S. declared war on Spain.",
      "The Spanish-American War (1898) was short. Theodore Roosevelt and the Rough Riders fought at San Juan Hill. The Treaty of Paris (1898) gave the U.S. the Philippines, Guam, and Puerto Rico, and Cuba became independent under U.S. influence.",
      "Filipinos resisted U.S. rule in the Philippine-American War (1899–1902). Some Americans, in the Anti-Imperialist League, opposed taking colonies.",
      "The Open Door Policy (1899) called for equal trade access to China for all nations.",
      "The Panama Canal (built 1904–1914) linked the Atlantic and Pacific Oceans. The U.S. supported Panama's independence from Colombia and controlled the Canal Zone.",
      "The Roosevelt Corollary (1904) said the U.S. could act as an 'international police power' in Latin America. Roosevelt's motto was 'Speak softly and carry a big stick.'",
    ],
    example: "Cause and effect:\nUSS Maine explodes + yellow journalism → public demands war → Spanish-American War (1898) → U.S. gains Puerto Rico, Guam, and the Philippines → U.S. becomes a world power.\n\nThe Panama Canal cut the sea trip from New York to San Francisco by about 8,000 miles.",
    vocab: [["imperialism", "When a strong country extends its control over weaker countries or territories."], ["annex", "To add a territory to a country."], ["yellow journalism", "Sensational, exaggerated news stories meant to attract readers."], ["Treaty of Paris (1898)", "The treaty that ended the Spanish-American War."], ["Roosevelt Corollary", "A 1904 policy that the U.S. would act as a police power in Latin America."], ["Panama Canal", "A waterway across Panama that connects the Atlantic and Pacific Oceans."], ["Open Door Policy", "A policy for equal trade access to China."]],
    questions: `
What is imperialism?|a strong country extending control over weaker places|a type of farming|a labor union|a trade tax|=>Colonies and influence.
Which territory did the U.S. buy from Russia in 1867?|Alaska|Hawaii|Florida|Texas|=>Seward's 'folly.'
Which Hawaiian queen was overthrown in 1893?|Queen Liliuokalani|Queen Victoria|Queen Isabella|Queen Elizabeth|=>Hawaii was annexed in 1898.
What event helped lead to the Spanish-American War?|the explosion of the USS Maine|the sinking of the Lusitania|Pearl Harbor|the Alamo|=>February 1898.
What was yellow journalism?|sensational news stories meant to attract readers|a type of newspaper ink|a trade policy|a labor union|=>Hearst and Pulitzer.
Which territories did the U.S. gain after the Spanish-American War?|Puerto Rico, Guam, and the Philippines|Alaska and Hawaii|Texas and California|Cuba and Mexico|=>Treaty of Paris, 1898.
Who led the Rough Riders?|Theodore Roosevelt|William McKinley|Woodrow Wilson|William Taft|=>They fought at San Juan Hill.
What was the Open Door Policy?|equal trade access to China for all nations|closing trade with China|a war with China|building the Great Wall|=>Proposed in 1899.
Why was the Panama Canal built?|to link the Atlantic and Pacific Oceans|to supply water|to stop floods|to connect two lakes|=>Shortened sea voyages.
When was the Panama Canal completed?|1914|1898|1776|1941|=>Work began in 1904.
What did the Roosevelt Corollary claim?|the U.S. could act as an international police power in Latin America|the U.S. would stay out of Latin America|Latin America owned the canal|Europe would govern Latin America|=>Issued in 1904.
Which phrase is linked to Theodore Roosevelt's foreign policy?|'Speak softly and carry a big stick'|'Give me liberty'|'Remember the Maine'|'Four score'|=>Big stick diplomacy.
What was one reason for American imperialism?|new markets and naval bases|a desire to stay isolated|lack of ships|no interest in trade|=>Economic and strategic goals.
Which group opposed taking colonies?|the Anti-Imperialist League|the Rough Riders|the Grange|the AFL|=>They said it violated American ideals.
`,
  }, {
    examples: ["Imperialism motives (the 3 Gs plus): economic markets, strategic naval bases, and national pride.", "After 1898 the U.S. flag flew over Puerto Rico, Guam, and the Philippines, far beyond North America."],
    vocab: { "imperialism": "Imperialism spread European and American power.", "annex": "The U.S. annexed Hawaii.", "yellow journalism": "Yellow journalism exaggerated the news.", "Treaty of Paris (1898)": "The Treaty of Paris (1898) gave the U.S. new territory.", "Roosevelt Corollary": "The Roosevelt Corollary expanded U.S. influence.", "Panama Canal": "Ships save time using the Panama Canal.", "Open Door Policy": "The Open Door Policy aimed at fair trade." },
  });

  add({
    id: "world-war-1", title: "World War I (1914–1919)",
    summary: "Why the war began, why the U.S. entered it, and how it changed America and the world.",
    points: [
      "World War I (1914–1918) began in Europe. Four long-term causes: militarism, alliances, imperialism, and nationalism (MAIN). The spark was the assassination of Archduke Franz Ferdinand of Austria-Hungary in Sarajevo on June 28, 1914.",
      "The Allied Powers (Britain, France, Russia, later Italy and the U.S.) fought the Central Powers (Germany, Austria-Hungary, the Ottoman Empire). Trench warfare, machine guns, poison gas, tanks, airplanes, and submarines made the war deadly.",
      "The U.S. stayed neutral at first. Events that pushed the U.S. toward war: German submarine attacks, including the sinking of the Lusitania (1915), and the Zimmermann Telegram (1917), in which Germany proposed an alliance with Mexico. President Woodrow Wilson asked Congress to declare war in April 1917.",
      "American soldiers, led by General John J. Pershing as the American Expeditionary Forces, helped turn the tide. The war ended with an armistice on November 11, 1918.",
      "On the home front, the government drafted soldiers (Selective Service), sold Liberty Bonds, ran propaganda campaigns, and conserved food. The Espionage Act (1917) limited criticism of the war. Women filled jobs, and many African Americans moved north in the Great Migration.",
      "Wilson's Fourteen Points proposed ways to keep peace, including a League of Nations. The Treaty of Versailles (1919) punished Germany with reparations and territory losses. The U.S. Senate refused to ratify it, so the U.S. never joined the League.",
      "About 116,000 Americans died, many from the deadly 1918 flu pandemic as well as combat. The war made the U.S. a leading world power.",
      "Virginia connection: Norfolk's naval base grew, and Camp Lee (near Petersburg) trained soldiers.",
    ],
    example: "MAIN causes:\nMilitarism (arms buildup), Alliances (entangling treaties), Imperialism (competition for colonies), Nationalism (extreme pride).\n\nTimeline: 1914 war begins → 1915 Lusitania → 1917 Zimmermann Telegram and U.S. enters → 1918 armistice → 1919 Treaty of Versailles.",
    vocab: [["militarism", "Building up armed forces and being ready to use them."], ["alliance", "An agreement between countries to defend each other."], ["Zimmermann Telegram", "A 1917 German message proposing a military alliance with Mexico against the U.S."], ["armistice", "An agreement to stop fighting."], ["Liberty Bonds", "Loans from citizens to the government to pay for the war."], ["League of Nations", "An international organization proposed after WWI to keep peace."], ["Treaty of Versailles", "The 1919 treaty that ended WWI and punished Germany."]],
    questions: `
What event sparked World War I?|the assassination of Archduke Franz Ferdinand|the sinking of the Maine|the Zimmermann Telegram|Pearl Harbor|=>June 28, 1914.
What does MAIN stand for in the causes of WWI?|militarism, alliances, imperialism, nationalism|money, armies, iron, navies|Mexico, Austria, Italy, Norway|military, army, industry, navy|=>Long-term causes.
Which countries were the Central Powers?|Germany, Austria-Hungary, and the Ottoman Empire|Britain, France, and Russia|the U.S. and Canada|Japan and China|=>Opposed the Allies.
What was the Zimmermann Telegram?|a German message proposing an alliance with Mexico|a peace plan|a trade deal|a war declaration|=>Intercepted by Britain.
Which ship sunk by a German submarine in 1915 killed many Americans?|Lusitania|Maine|Titanic|Monitor|=>It increased anger at Germany.
In what year did the U.S. enter World War I?|1917|1914|1919|1941|=>Wilson asked for a declaration of war.
Who commanded the American Expeditionary Forces?|General John J. Pershing|General Dwight Eisenhower|General Robert E. Lee|General Douglas MacArthur|=>American troops in France.
What was the Selective Service?|the draft system for soldiers|a Navy school|a bond|a farm program|=>Required men to register.
What were Liberty Bonds?|loans from citizens to the government to pay for the war|taxes|trading cards|Navy ships|=>Ordinary Americans bought them.
When did fighting end in World War I?|November 11, 1918|June 28, 1914|April 6, 1917|December 7, 1941|=>The armistice took effect.
What were Wilson's Fourteen Points?|a peace plan including a League of Nations|a list of war rules|a tax plan|a military plan|=>Aimed to prevent future wars.
Why did the U.S. never join the League of Nations?|the Senate refused to ratify the Treaty of Versailles|Wilson refused|Britain refused|it was too expensive|=>Isolationist feeling.
Which treaty ended World War I and punished Germany?|Treaty of Versailles|Treaty of Paris|Treaty of Ghent|Treaty of Tordesillas|=>Signed in 1919.
Which deadly illness spread worldwide in 1918?|influenza|polio|smallpox|measles|=>The 1918 flu.
`,
  }, {
    examples: ["Trench warfare: soldiers lived in long ditches for months; 'no man's land' lay between enemy trenches.", "Home front: 'Food will win the war' posters urged Meatless Mondays and victory gardens."],
    vocab: { "militarism": "Militarism increased tensions in Europe.", "alliance": "An alliance pulled many countries into war.", "Zimmermann Telegram": "The Zimmermann Telegram angered Americans.", "armistice": "The armistice ended the fighting.", "Liberty Bonds": "Families bought Liberty Bonds.", "League of Nations": "The League of Nations aimed to prevent war.", "Treaty of Versailles": "Germany resented the Treaty of Versailles." },
  });

  add({
    id: "roaring-twenties", title: "The Roaring Twenties (1920s)",
    summary: "Prosperity, new technology, and big social changes, and the problems hidden beneath them.",
    points: [
      "After World War I, President Warren G. Harding promised a 'return to normalcy.' Calvin Coolidge said 'the business of America is business.' The economy boomed.",
      "Mass production and the assembly line made products like cars, radios, and refrigerators affordable. Installment buying let people buy now and pay later, and advertising created demand.",
      "Culture: jazz music, dance crazes, movies (the first 'talkie' in 1927), radio, sports heroes like Babe Ruth, and aviator Charles Lindbergh's solo flight across the Atlantic (1927). 'Flappers' challenged old ideas about women's behavior. Women gained the vote in 1920.",
      "The Harlem Renaissance was a flowering of Black art, music, and literature in New York City with Langston Hughes, Zora Neale Hurston, Duke Ellington, and Louis Armstrong. It was part of the Great Migration of African Americans to northern cities.",
      "Prohibition (1920–1933) banned alcohol but led to speakeasies, bootleggers, and organized crime figures like Al Capone. It was repealed by the 21st Amendment.",
      "Tensions: the Red Scare (1919–1920) feared communists; immigration quotas (1921 and 1924) limited newcomers; the Ku Klux Klan grew again; the Scopes Trial (1925) debated teaching evolution in schools.",
      "Weak spots in the economy: farm prices stayed low, wealth was unevenly spread, many bought stocks on margin (with borrowed money), and companies overproduced goods.",
      "Scandals like Teapot Dome in Harding's administration showed corruption in government.",
    ],
    example: "Boom signals: car ownership soared, radio spread, stock prices climbed.\nWarning signs: farmers in debt, uneven wealth, risky stock buying on margin.\n\nExample of margin: pay $10 of your own money and borrow $90 to buy a $100 stock; if the price falls, you still owe the loan.",
    vocab: [["normalcy", "A return to ordinary life after the war."], ["installment buying", "Buying a product now and paying for it over time."], ["Harlem Renaissance", "A 1920s flowering of Black art, music, and literature centered in Harlem, New York."], ["Prohibition", "The ban on making and selling alcohol, 1920–1933."], ["Red Scare", "A fear of communists and radicals after World War I."], ["flapper", "A young woman of the 1920s who challenged traditional norms."], ["buying on margin", "Buying stocks with borrowed money."]],
    questions: `
Which president promised a 'return to normalcy' after WWI?|Warren G. Harding|Woodrow Wilson|Franklin Roosevelt|Herbert Hoover|=>Elected 1920.
What technology helped consumer goods become affordable in the 1920s?|mass production and the assembly line|handmade crafts|steam power only|sailing ships|=>Cars, radios, and appliances.
What is installment buying?|paying for a product over time|paying all at once|trading goods|barter|=>It increased consumer debt.
Which 1927 aviator flew solo across the Atlantic?|Charles Lindbergh|Amelia Earhart|Orville Wright|Eddie Rickenbacker|=>The Spirit of St. Louis.
What was the Harlem Renaissance?|a flowering of Black arts and literature in New York City|a trade fair|a political party|a type of jazz club only|=>Hughes, Hurston, and Ellington.
Who wrote poetry during the Harlem Renaissance?|Langston Hughes|Mark Twain|Walt Whitman|Robert Frost|=>Also Zora Neale Hurston.
What did the 18th Amendment do?|banned alcohol|gave women the vote|created an income tax|ended slavery|=>Prohibition began in 1920.
Which amendment repealed Prohibition?|21st|19th|16th|13th|=>1933.
What were speakeasies?|illegal bars during Prohibition|libraries|theaters|churches|=>Often run by criminals.
Who was a famous gangster during Prohibition?|Al Capone|Babe Ruth|Charles Lindbergh|Duke Ellington|=>Chicago.
What was the Scopes Trial about?|teaching evolution in a public school|Prohibition|immigration|voting rights|=>1925 in Tennessee.
What was the Red Scare?|a fear of communists and radicals|a battle|an illness|a tax|=>1919–1920.
Why was buying stocks on margin risky?|investors used borrowed money|stocks always rose|it was free|it was illegal|=>Prices fell and debt remained.
Which was a weakness of the 1920s economy?|uneven wealth and struggling farmers|too few jobs for everyone|no consumer goods|no banks|=>Not everyone prospered.
`,
  }, {
    examples: ["Credit and consumers: a family buys a $300 radio with $30 down and $10 a month; credit helps sales but increases debt.", "1920s inventions that changed life: radio, talking movies, refrigerators, vacuum cleaners, and affordable cars."],
    vocab: { "normalcy": "Harding promised normalcy.", "installment buying": "Installment buying helped families buy radios.", "Harlem Renaissance": "The Harlem Renaissance celebrated Black culture.", "Prohibition": "Prohibition lasted until 1933.", "Red Scare": "The Red Scare spread fear of radicals.", "flapper": "A flapper wore short hair and short dresses.", "buying on margin": "Buying on margin was risky." },
  });

  add({
    id: "depression", title: "The Great Depression & the New Deal (1929–1941)",
    summary: "The stock market crash, widespread hardship, and the government's New Deal response.",
    points: [
      "The Great Depression was the worst economic downturn in U.S. history. Causes included overproduction, uneven wealth, risky stock buying, bank failures, weak farm incomes, and the stock market crash of October 1929 ('Black Tuesday,' Oct. 29).",
      "By 1933 about one in four workers was unemployed. Banks failed and people lost savings. Families lived in shantytowns called 'Hoovervilles,' stood in breadlines, and many children left school to work.",
      "A severe drought and poor farming methods created the Dust Bowl on the Great Plains in the 1930s. Many farm families (called 'Okies') moved west to California. Photographer Dorothea Lange and writer John Steinbeck documented their hardships.",
      "President Herbert Hoover believed in limited government and relief from private groups. In 1932, voters elected Franklin D. Roosevelt (FDR), who promised a 'New Deal.'",
      "The New Deal's goals were relief, recovery, and reform. FDR declared a bank holiday and used radio 'fireside chats' to reassure the nation.",
      "Programs: Civilian Conservation Corps (CCC) put young men to work in forests and parks; Works Progress Administration (WPA) built roads and buildings and employed artists; Tennessee Valley Authority (TVA) brought electricity; FDIC insured bank deposits (1933); Securities and Exchange Commission (SEC) regulated the stock market; Social Security Act (1935) provided retirement and unemployment benefits.",
      "Critics said the New Deal did too much (or too little). The Supreme Court struck down some programs. Many scholars say the economy did not fully recover until World War II production began.",
      "Virginia connection: the CCC helped build Shenandoah National Park and the Blue Ridge Parkway in the 1930s. First Lady Eleanor Roosevelt was a strong voice for the poor and for civil rights.",
    ],
    example: "Three Rs of the New Deal:\nRelief – help for the jobless (CCC, WPA)\nRecovery – restart the economy (TVA, public works)\nReform – prevent future crashes (FDIC, SEC, Social Security)\n\nExample: your savings at a bank are protected up to a limit by the FDIC.",
    vocab: [["Great Depression", "The severe economic downturn that began in 1929 and lasted through the 1930s."], ["Dust Bowl", "A region of the Great Plains hit by drought and dust storms in the 1930s."], ["New Deal", "Franklin D. Roosevelt's programs for relief, recovery, and reform."], ["Social Security", "A program that provides retirement and unemployment benefits."], ["FDIC", "The Federal Deposit Insurance Corporation, which insures bank deposits."], ["Hooverville", "A shantytown built by people who lost their homes during the Depression."], ["fireside chat", "A radio address by President Roosevelt to the American people."]],
    questions: `
Which event in October 1929 helped trigger the Great Depression?|the stock market crash|the Louisiana Purchase|Pearl Harbor|the Dust Bowl|=>Black Tuesday was Oct. 29.
About what share of workers were unemployed by 1933?|about one in four|about one in twenty|about one in a hundred|nearly none|=>Roughly 25%.
What were Hoovervilles?|shantytowns for people who lost homes|government buildings|banks|farms|=>Named for President Hoover.
What caused the Dust Bowl?|drought and poor farming practices|a hurricane|an earthquake|a war|=>On the Great Plains.
Who was elected president in 1932 promising a New Deal?|Franklin D. Roosevelt|Herbert Hoover|Theodore Roosevelt|Harry Truman|=>FDR.
What were the three goals of the New Deal?|relief, recovery, and reform|war, peace, and trade|taxes, tariffs, and trusts|land, labor, and law|=>The 3 Rs.
What did the Civilian Conservation Corps do?|employed young men on conservation projects|ran banks|built ships|taught college|=>Forests and parks.
What did the FDIC do?|insured bank deposits|printed money|built roads|trained soldiers|=>Created in 1933.
What did the Social Security Act of 1935 provide?|retirement and unemployment benefits|free college|farm loans|military pay|=>A lasting program.
What was the purpose of the TVA?|to bring electricity and development to the Tennessee Valley|to build ships|to train soldiers|to run schools|=>A public works project.
What were FDR's radio addresses called?|fireside chats|town halls|press releases|debates|=>They reassured Americans.
What did the SEC regulate?|the stock market|schools|farms|railroads only|=>It protects investors.
Which Virginia landmarks were built partly by the CCC?|Shenandoah National Park and the Blue Ridge Parkway|The Pentagon|Colonial Williamsburg|Jamestown|=>1930s work projects.
Which event ended the Depression's effects most fully?|production for World War II|the Homestead Act|the Spanish-American War|the Gold Rush|=>War production created jobs.
`,
  }, {
    examples: ["Bank run: when people fear a bank will fail, they withdraw savings at once, which can cause the bank to fail. The FDIC (1933) calmed this fear by insuring deposits.", "WPA artists painted murals in post offices and schools while others built roads and bridges."],
    vocab: { "Great Depression": "The Great Depression left millions jobless.", "Dust Bowl": "Dust storms swept the Dust Bowl.", "New Deal": "The New Deal created jobs programs.", "Social Security": "Social Security still pays retirees.", "FDIC": "The FDIC protects bank deposits.", "Hooverville": "A Hooverville was made of scrap wood.", "fireside chat": "FDR spoke to the nation in a fireside chat." },
  });

  add({
    id: "world-war-2", title: "World War II (1939–1945)",
    summary: "The global war, the U.S. role in it, life on the home front, and the Holocaust.",
    points: [
      "In the 1930s, dictators rose to power: Adolf Hitler in Germany, Benito Mussolini in Italy, and military leaders in Japan. Germany invaded Poland on September 1, 1939, beginning World War II in Europe.",
      "The Allied Powers (Britain, the Soviet Union, the United States, China, France) fought the Axis Powers (Germany, Italy, Japan). The U.S. stayed neutral at first but aided Britain through the Lend-Lease Act (1941).",
      "On December 7, 1941, Japan attacked the U.S. naval base at Pearl Harbor, Hawaii. The U.S. declared war on Japan on December 8; Germany and Italy declared war on the U.S. days later.",
      "Home front: factories made planes, tanks, and ships; rationing limited goods like sugar and gas; people bought war bonds and planted victory gardens; women worked in factories ('Rosie the Riveter'). African Americans served in segregated units, such as the Tuskegee Airmen, and Navajo Code Talkers used their language as an unbreakable code.",
      "After Pearl Harbor, Executive Order 9066 (1942) forced about 120,000 people of Japanese ancestry, most of them U.S. citizens, into internment camps. This is now widely regarded as a grave injustice.",
      "Key battles: Midway (1942) turned the Pacific war; Stalingrad was a Soviet victory; D-Day (June 6, 1944), the Allied invasion of Normandy led by General Dwight D. Eisenhower; the Battle of the Bulge (1944–45). Germany surrendered on May 8, 1945 (V-E Day).",
      "The Holocaust was the Nazi government's systematic murder of about six million Jews, along with millions of others. Allied troops liberated the camps in 1945.",
      "The U.S. dropped atomic bombs on Hiroshima (August 6) and Nagasaki (August 9, 1945). Japan surrendered, and the war ended officially on September 2, 1945. The United Nations was created in 1945, and the GI Bill (1944) helped veterans.",
      "Virginia connection: the Pentagon (completed 1943) in Arlington, Norfolk Naval Station, Newport News Shipbuilding, and Fort Lee (now Fort Gregg-Adams) near Petersburg.",
    ],
    example: "Timeline: 1939 Germany invades Poland → 1941 Pearl Harbor → 1942 Midway → 1944 D-Day → 1945 V-E Day (May 8) → Hiroshima and Nagasaki (August) → V-J Day (Sept. 2).\n\nRationing: families got books of stamps limiting purchases of sugar, meat, and gasoline.",
    vocab: [["Axis Powers", "Germany, Italy, and Japan in World War II."], ["Allied Powers", "The coalition including the U.S., Britain, the Soviet Union, and China."], ["Pearl Harbor", "The U.S. naval base in Hawaii attacked by Japan on December 7, 1941."], ["D-Day", "June 6, 1944, the Allied invasion of Normandy, France."], ["Holocaust", "The Nazi regime's systematic murder of about six million Jews and millions of others."], ["rationing", "Limiting how much of a scarce good people can buy."], ["internment", "Forced confinement of people, such as Japanese Americans in WWII."]],
    questions: `
What event began World War II in Europe in 1939?|Germany's invasion of Poland|Pearl Harbor|The sinking of the Lusitania|The Treaty of Versailles|=>September 1, 1939.
Which countries were the main Axis Powers?|Germany, Italy, and Japan|Britain, France, and the U.S.|Russia and China|Spain and Portugal|=>Opposed the Allies.
What was Lend-Lease?|a program to supply weapons and goods to Britain|a loan to Japan|a draft law|a trade tariff|=>It aided Allies before the U.S. entered.
When did Japan attack Pearl Harbor?|December 7, 1941|June 6, 1944|April 6, 1917|August 6, 1945|=>The U.S. entered the war.
What was rationing?|limiting purchases of scarce goods|banning all sales|printing money|a draft|=>Sugar, gas, and meat were rationed.
Who was 'Rosie the Riveter'?|a symbol of women working in war factories|a general|a pilot|a nurse in France|=>A WWII poster image.
Who were the Navajo Code Talkers?|Marines who used the Navajo language as an unbreakable code|spies in Germany|pilots|doctors|=>They helped win in the Pacific.
Who were the Tuskegee Airmen?|African American fighter pilots|code breakers|ship builders|army nurses|=>They flew over Europe.
What did Executive Order 9066 do?|led to the internment of Japanese Americans|ended rationing|started the draft|created the GI Bill|=>About 120,000 people.
What was D-Day?|the Allied invasion of Normandy on June 6, 1944|the attack on Pearl Harbor|the end of the war|the fall of Berlin|=>Led by Eisenhower.
What was the Holocaust?|the Nazi murder of about six million Jews and millions of others|a famous battle|a peace treaty|a Soviet plan|=>A genocide.
Which Pacific battle in 1942 was a turning point?|Midway|Iwo Jima|Okinawa|Guadalcanal|=>It crippled Japan's carriers.
What ended the war with Japan in 1945?|the atomic bombs and Japan's surrender|the Treaty of Versailles|D-Day|the Berlin airlift|=>Hiroshima and Nagasaki.
What did the GI Bill (1944) provide?|help for veterans with college and homes|a draft law|a tax cut|a pension for farmers|=>It expanded education.
`,
  }, {
    examples: ["Two fronts: the war in Europe (Germany) and the war in the Pacific (Japan) were fought at the same time.", "Home-front slogans: 'Use it up, wear it out, make it do, or do without' encouraged saving."],
    vocab: { "Axis Powers": "The Axis Powers were led by Hitler.", "Allied Powers": "The Allied Powers defeated the Axis.", "Pearl Harbor": "Pearl Harbor brought the U.S. into the war.", "D-Day": "D-Day opened a second front in France.", "Holocaust": "We remember the victims of the Holocaust.", "rationing": "Rationing saved resources for the army.", "internment": "Internment was a grave injustice." },
  });

  add({
    id: "cold-war", title: "The Cold War (1945–1991)",
    summary: "The rivalry between the United States and the Soviet Union that shaped the world for almost half a century.",
    points: [
      "After WWII the United States and the Soviet Union became rival superpowers. The Cold War was a struggle for influence without direct fighting between them. It pitted democracy and capitalism against communism.",
      "Winston Churchill described an 'Iron Curtain' dividing Europe. The U.S. policy of containment aimed to stop communism from spreading. The Truman Doctrine (1947) gave aid to Greece and Turkey, and the Marshall Plan (1948) rebuilt Western Europe.",
      "Germany was divided into East and West. The Soviet Union blockaded West Berlin in 1948 and the U.S. and its allies flew in supplies in the Berlin Airlift. NATO (1949) united Western allies; the Soviets formed the Warsaw Pact (1955).",
      "The Korean War (1950–1953) began when communist North Korea invaded South Korea; the U.S. and UN forces fought back, and the war ended with an armistice near the 38th parallel.",
      "The arms race: both sides built nuclear weapons. At home, the Red Scare and Senator Joseph McCarthy's accusations created fear (McCarthyism).",
      "The space race began when the Soviets launched Sputnik (1957). The U.S. created NASA (1958) and landed astronauts on the moon in Apollo 11 (July 20, 1969), with Neil Armstrong the first person to walk on the moon.",
      "The Berlin Wall was built in 1961. In the Cuban Missile Crisis (October 1962), President John F. Kennedy and Soviet leader Nikita Khrushchev came close to nuclear war; the Soviets removed their missiles from Cuba.",
      "The Cold War ended when the Berlin Wall fell (November 9, 1989) and the Soviet Union dissolved in December 1991. Presidents Ronald Reagan and Mikhail Gorbachev reduced tensions in the 1980s.",
    ],
    example: "Containment in action:\n1947 Truman Doctrine → aid to Greece and Turkey\n1948 Marshall Plan → rebuild Europe so communism has less appeal\n1949 NATO → military alliance\n1950 Korea → U.S. fights to stop communist spread\n\nCold War = a war of ideas, spies, arms, and space, not direct U.S.–Soviet fighting.",
    vocab: [["superpower", "A country with great military and economic power, like the U.S. and Soviet Union."], ["communism", "A system in which the government controls the economy and there is one party rule."], ["containment", "The U.S. policy of stopping the spread of communism."], ["Iron Curtain", "The divide between democratic Western Europe and communist Eastern Europe."], ["arms race", "A contest between nations to build more and better weapons."], ["space race", "A contest between the U.S. and Soviet Union for achievements in space."], ["NATO", "The North Atlantic Treaty Organization, a Western military alliance formed in 1949."]],
    questions: `
Which two superpowers were rivals in the Cold War?|the United States and the Soviet Union|Britain and France|China and Japan|Germany and Italy|=>A struggle without direct war.
What was the U.S. policy of containment?|stopping the spread of communism|ending all trade|building walls|joining the Soviet Union|=>A key Cold War strategy.
What did the Marshall Plan do?|provided aid to rebuild Western Europe|sent troops to Korea|ended the Berlin blockade|created the UN|=>Announced in 1948.
What was the Truman Doctrine?|U.S. support for countries resisting communism, beginning with Greece and Turkey|a plan to land on the moon|a ban on trade|a draft law|=>1947.
What was the Berlin Airlift?|flying supplies into West Berlin during the Soviet blockade|bombing Berlin|a spy plane|a prisoner swap|=>1948–1949.
What is NATO?|a military alliance of Western countries formed in 1949|a Soviet alliance|a trade group|a spy agency|=>The Warsaw Pact answered it.
Where was the Korean War fought?|Korea|Japan|Vietnam|Cuba|=>Divided at the 38th parallel.
What was McCarthyism?|accusing people of being communists, often without proof|a space program|a trade law|a labor union|=>Part of the second Red Scare.
What did the Soviet launch of Sputnik in 1957 begin?|the space race|the Korean War|the Cuban Missile Crisis|World War III|=>It alarmed the U.S.
Who was the first person to walk on the moon?|Neil Armstrong|John Glenn|Buzz Aldrin|Yuri Gagarin|=>July 20, 1969.
What was the Cuban Missile Crisis?|a standoff over Soviet missiles in Cuba in 1962|a war in Vietnam|a Soviet invasion of Poland|a trade dispute|=>Kennedy and Khrushchev.
What was the Berlin Wall?|a wall dividing East and West Berlin built in 1961|a fort in Texas|a wall in China|a trade barrier|=>It fell in 1989.
When did the Berlin Wall fall?|1989|1961|1945|2001|=>November 9.
When did the Soviet Union dissolve?|1991|1945|1961|1999|=>It ended the Cold War.
`,
  }, {
    examples: ["East vs. West: Capitalist democracies (U.S., Western Europe) vs. communist states (USSR, East Germany).", "Space race milestones: Sputnik 1957 → Gagarin 1961 → Apollo 11 moon landing 1969."],
    vocab: { "superpower": "Both the U.S. and USSR were superpowers.", "communism": "Communism aims for state control of the economy.", "containment": "Containment guided U.S. policy.", "Iron Curtain": "The Iron Curtain divided Europe.", "arms race": "The arms race increased tension.", "space race": "The space race led to moon landings.", "NATO": "NATO members defend each other." },
  });

  add({
    id: "civil-rights-era", title: "The Civil Rights Movement (1950s–1960s)",
    summary: "The struggle to end segregation and win equal rights, and how Virginia took part.",
    points: [
      "After WWII, African Americans pressed harder against Jim Crow segregation. Jackie Robinson broke baseball's color line in 1947. In 1948 President Truman ordered the desegregation of the armed forces.",
      "Brown v. Board of Education (1954) ruled that segregated public schools are unconstitutional. In 1957 President Eisenhower sent federal troops to protect the Little Rock Nine as they integrated Central High School in Arkansas.",
      "Montgomery Bus Boycott (1955–56): after Rosa Parks was arrested for refusing to give up her seat, Black residents boycotted city buses for over a year. Dr. Martin Luther King Jr. emerged as a leader of nonviolent protest.",
      "Sit-ins at lunch counters began in Greensboro, North Carolina (1960). Freedom Riders challenged segregation on buses in 1961. The movement used marches, boycotts, sit-ins, and court cases.",
      "In 1963, King wrote the 'Letter from Birmingham Jail' and gave the 'I Have a Dream' speech at the March on Washington (August 28, 1963).",
      "The Civil Rights Act of 1964 banned discrimination in public places and employment. After 'Bloody Sunday' in Selma, Alabama (1965), the Voting Rights Act of 1965 protected voting rights. The Fair Housing Act (1968) followed King's assassination in Memphis on April 4, 1968.",
      "Virginia: Barbara Johns led a student walkout at Moton High School in Farmville in 1951; the case became part of Brown. Virginia leaders under Senator Harry F. Byrd pursued 'Massive Resistance,' and Prince Edward County closed its public schools from 1959 to 1964. Richmond lawyers Oliver Hill and Spottswood Robinson worked on school cases.",
      "Loving v. Virginia (1967) struck down state laws banning interracial marriage. Other voices included Malcolm X and the Black Power movement.",
    ],
    example: "Tools of the movement: nonviolent protest (marches, sit-ins), boycotts, lawsuits (Brown), and lobbying for laws (Civil Rights Act, Voting Rights Act).\n\nTimeline: 1954 Brown → 1955 Montgomery → 1957 Little Rock → 1960 sit-ins → 1963 March on Washington → 1964 Civil Rights Act → 1965 Voting Rights Act.",
    vocab: [["segregation", "The forced separation of people by race."], ["desegregation", "Ending segregation."], ["boycott", "Refusing to buy or use something as protest."], ["sit-in", "A protest in which people sit and refuse to leave until served."], ["nonviolent protest", "Seeking change through peaceful action."], ["Massive Resistance", "Virginia's effort to block school integration after Brown."], ["Freedom Riders", "Activists who rode buses through the South to challenge segregation."]],
    questions: `
Which 1954 Supreme Court case ruled school segregation unconstitutional?|Brown v. Board of Education|Plessy v. Ferguson|Gideon v. Wainwright|Marbury v. Madison|=>A landmark ruling.
Who was the first Black player in modern major league baseball (1947)?|Jackie Robinson|Hank Aaron|Willie Mays|Satchel Paige|=>Brooklyn Dodgers.
What happened at Little Rock Central High School in 1957?|nine Black students integrated it with federal troop protection|a baseball game|a fire|a graduation|=>Eisenhower sent troops.
What began the Montgomery Bus Boycott?|Rosa Parks' arrest|a Supreme Court decision|a fire|a strike|=>It lasted over a year.
Who led the Montgomery Bus Boycott?|Martin Luther King Jr.|Malcolm X|Thurgood Marshall|Frederick Douglass|=>He rose to national leadership.
Where did sit-ins begin in 1960?|Greensboro, North Carolina|Richmond, Virginia|Chicago|Atlanta|=>At a Woolworth's lunch counter.
What speech did King give at the March on Washington in 1963?|'I Have a Dream'|'Give me liberty'|'Ask not'|'Four score'|=>August 28, 1963.
What did the Civil Rights Act of 1964 ban?|discrimination in public places and employment|voting|taxes|marriage|=>A major law.
What did the Voting Rights Act of 1965 do?|protected the right to vote|created an income tax|ended the draft|opened schools|=>Passed after Selma.
What happened in Selma, Alabama, in 1965?|marchers were attacked on 'Bloody Sunday' while seeking voting rights|a baseball game|a parade|a trial|=>Led to the Voting Rights Act.
Which Virginia student led a 1951 school walkout in Farmville?|Barbara Johns|Rosa Parks|Ruby Bridges|Mary Walker|=>Moton High School.
What was Massive Resistance?|Virginia's effort to block school integration|a civil rights march|a labor strike|a federal law|=>It followed Brown.
What did Prince Edward County do from 1959 to 1964?|closed its public schools rather than integrate|opened new schools|ended segregation at once|built a university|=>A famous example.
What did Loving v. Virginia decide?|laws banning interracial marriage are unconstitutional|school segregation is legal|voting taxes are legal|women may vote|=>1967.
`,
  }, {
    examples: ["Nonviolent protest: marchers trained to stay calm even when attacked; images on TV won public sympathy.", "Virginia in the movement: student walkouts, lawsuits in Richmond, and Massive Resistance all shaped school integration."],
    vocab: { "segregation": "Segregation divided schools by race.", "desegregation": "Desegregation of the armed forces came in 1948.", "boycott": "The boycott lasted 381 days.", "sit-in": "The sit-in spread to other cities.", "nonviolent protest": "King taught nonviolent protest.", "Massive Resistance": "Massive Resistance delayed integration in Virginia.", "Freedom Riders": "Freedom Riders were attacked in Alabama." },
  });

  add({
    id: "vietnam-change", title: "Vietnam, Watergate & Social Change (1960s–1970s)",
    summary: "A divided nation: the Vietnam War, new reform movements, and the Watergate scandal.",
    points: [
      "President John F. Kennedy was assassinated on November 22, 1963. Lyndon B. Johnson became president and launched the Great Society, including Medicare, Medicaid, Head Start, and a 'War on Poverty.'",
      "Vietnam War: communist North Vietnam fought South Vietnam, which the U.S. supported. Leaders feared the 'domino theory,' that if one country fell to communism, others would follow. The Gulf of Tonkin Resolution (1964) gave the president broad war powers, and U.S. troop levels grew to more than half a million.",
      "The 1968 Tet Offensive showed the war would not end quickly. Many Americans protested; the draft and TV coverage fed the debate. At Kent State in 1970, National Guard troops killed four student protesters. The 26th Amendment (1971) lowered the voting age to 18.",
      "President Richard Nixon began 'Vietnamization,' withdrawing U.S. troops. The Paris Peace Accords (1973) ended U.S. involvement, and South Vietnam fell to the North in April 1975. About 58,000 Americans died.",
      "Women's rights movement: Betty Friedan wrote 'The Feminine Mystique' (1963), the National Organization for Women (NOW) formed in 1966, and Title IX (1972) banned sex discrimination in education. The Equal Rights Amendment did not become part of the Constitution.",
      "Other movements: Cesar Chavez and the United Farm Workers fought for farmworkers' rights; the American Indian Movement (1968) demanded Native American rights; the environmental movement grew after Rachel Carson's 'Silent Spring' (1962), Earth Day (1970), and the creation of the EPA (1970).",
      "Watergate: in June 1972 men linked to Nixon's re-election campaign broke into Democratic Party headquarters at the Watergate complex. Investigations and tape recordings revealed a cover-up. Nixon resigned on August 9, 1974, the only president ever to do so. Gerald Ford became president and later pardoned Nixon.",
      "Nixon opened relations with China (1972) and eased tensions with the Soviets (détente). In the 1970s the U.S. faced an energy crisis (1973 oil embargo) and, in 1979–81, the Iran hostage crisis.",
    ],
    example: "Cause and effect:\nGulf of Tonkin (1964) → more troops → rising casualties → protests → Vietnamization → withdrawal (1973).\n\nWatergate chain: break-in (1972) → cover-up → tapes → threat of impeachment → resignation (1974).",
    vocab: [["Great Society", "President Johnson's programs to reduce poverty and expand education and health care."], ["domino theory", "The belief that if one country fell to communism, neighbors would too."], ["draft", "Required military service."], ["Watergate", "A scandal involving a break-in and cover-up that led to Nixon's resignation."], ["détente", "A easing of tensions between the U.S. and Soviet Union."], ["environmentalism", "A movement to protect nature and reduce pollution."], ["Title IX", "A 1972 law banning sex discrimination in federally funded education."]],
    questions: `
Who became president after Kennedy was assassinated?|Lyndon B. Johnson|Richard Nixon|Dwight Eisenhower|Gerald Ford|=>November 1963.
What was the Great Society?|Johnson's programs to fight poverty and expand education and health care|a space program|a war plan|a tax cut|=>Medicare and Medicaid were part of it.
What is the domino theory?|the belief that if one country fell to communism, neighbors would follow|a trade rule|a space plan|a labor law|=>Used to justify the Vietnam War.
What did the Gulf of Tonkin Resolution do?|gave the president broad authority to use force in Vietnam|ended the war|created the draft|banned protest|=>Passed in 1964.
What was the 1968 Tet Offensive?|a major surprise attack that changed U.S. opinion about the war|a peace treaty|a naval battle|a space launch|=>It showed the war would not end soon.
What happened at Kent State in 1970?|National Guard troops killed four student protesters|a peace march ended calmly|a baseball game was played|a speech was given|=>A turning point in the antiwar movement.
What did the 26th Amendment do?|lowered the voting age to 18|gave women the vote|ended Prohibition|created income tax|=>1971.
What is 'Vietnamization'?|withdrawing U.S. troops and shifting the fighting to South Vietnam|escalating the war|a peace treaty|a draft plan|=>Nixon's policy.
When did South Vietnam fall to the North?|1975|1964|1968|1991|=>The war ended.
Which 1963 book helped start the modern women's movement?|The Feminine Mystique|Silent Spring|The Jungle|Uncle Tom's Cabin|=>By Betty Friedan.
Which book by Rachel Carson helped start the environmental movement?|Silent Spring|The Jungle|The Grapes of Wrath|Walden|=>1962.
Who led the United Farm Workers?|Cesar Chavez|Martin Luther King Jr.|Malcolm X|Thurgood Marshall|=>Fought for farmworkers' rights.
What was Watergate?|a scandal involving a break-in and cover-up by Nixon's campaign|a dam|a war|a trade deal|=>1972–1974.
Who is the only U.S. president to resign?|Richard Nixon|Gerald Ford|Lyndon Johnson|Jimmy Carter|=>August 9, 1974.
`,
  }, {
    examples: ["Antiwar movement: marches, campus protests, and draft resistance grew as casualties rose and TV showed the war.", "Environmental timeline: 1962 Silent Spring → 1970 first Earth Day and EPA → 1972 Clean Water Act."],
    vocab: { "Great Society": "The Great Society expanded health care.", "domino theory": "The domino theory shaped U.S. policy.", "draft": "Young men were called by the draft.", "Watergate": "Watergate changed trust in government.", "détente": "Détente improved U.S.–Soviet relations.", "environmentalism": "Environmentalism led to the Clean Air Act.", "Title IX": "Title IX opened sports to girls." },
  });

  add({
    id: "modern-america", title: "Modern America (1980 to Today)",
    summary: "The end of the Cold War, the technology revolution, 9/11, and challenges and changes in recent decades.",
    points: [
      "Ronald Reagan (president 1981–1989) cut taxes, increased defense spending, and met with Soviet leader Mikhail Gorbachev. The Berlin Wall fell in 1989 and the Soviet Union dissolved in 1991, ending the Cold War. The U.S. emerged as the world's leading superpower.",
      "In 1991 a U.S.-led coalition under President George H. W. Bush won the Persian Gulf War, driving Iraq out of Kuwait. The Americans with Disabilities Act (1990) protected people with disabilities.",
      "The 1990s brought the Internet, personal computers, and a long economic boom under President Bill Clinton. NAFTA (1994) reduced trade barriers with Canada and Mexico.",
      "On September 11, 2001, terrorists hijacked four airplanes and attacked the World Trade Center in New York City and the Pentagon in Arlington, Virginia; a fourth plane crashed in Pennsylvania after passengers resisted. Nearly 3,000 people died.",
      "In response, the U.S. created the Department of Homeland Security (2002), passed the USA PATRIOT Act, and fought wars in Afghanistan (2001) and Iraq (2003).",
      "The 2008 financial crisis led to the Great Recession. In 2008 Americans elected Barack Obama, the first African American president. The Affordable Care Act (2010) expanded health insurance.",
      "Technology and globalization changed life: smartphones, social media, online shopping, and global supply chains. In 2020 the COVID-19 pandemic disrupted schools, work, and health systems worldwide.",
      "Citizens continue to debate issues like immigration, health care, the economy, the environment, and the role of government. Active citizens vote, volunteer, and stay informed.",
    ],
    example: "Timeline: 1989 Berlin Wall falls → 1991 Cold War ends and Gulf War → 2001 9/11 → 2008 financial crisis and Obama elected → 2020 COVID-19 pandemic.\n\nTechnology timeline: 1990s Internet → 2000s social media → 2007 smartphone era.",
    vocab: [["superpower", "A nation with great economic and military strength; after 1991 the U.S. was the leading one."], ["terrorism", "The use of violence and fear against civilians to achieve political goals."], ["Homeland Security", "The U.S. department created in 2002 to protect the country from threats."], ["globalization", "The growing connection of economies and cultures around the world."], ["NAFTA", "A 1994 trade agreement among the U.S., Canada, and Mexico."], ["recession", "A period of economic decline."], ["pandemic", "A disease outbreak that spreads worldwide."]],
    questions: `
Which president met with Soviet leader Gorbachev in the 1980s?|Ronald Reagan|Jimmy Carter|Gerald Ford|Bill Clinton|=>They reduced Cold War tensions.
What ended the Cold War in 1991?|the dissolution of the Soviet Union|the Cuban Missile Crisis|the Korean War|the Vietnam War|=>The U.S. became the leading superpower.
Which 1991 conflict drove Iraq out of Kuwait?|the Persian Gulf War|the Korean War|the Vietnam War|the Iraq War of 2003|=>Led by President George H. W. Bush.
What did the Americans with Disabilities Act (1990) protect?|the rights of people with disabilities|voting rights|farmers|immigrants|=>Accessibility and equal opportunity.
What technology boomed in the 1990s?|the Internet|the telegraph|the radio|the phonograph|=>Personal computers and websites.
What did NAFTA do?|reduced trade barriers among the U.S., Canada, and Mexico|banned imports|created the UN|started a war|=>Took effect in 1994.
What happened on September 11, 2001?|terrorists attacked the World Trade Center and the Pentagon|the Cold War ended|Pearl Harbor|the stock market crashed in 1929|=>Nearly 3,000 people died.
Where is the Pentagon located?|Arlington, Virginia|Washington, D.C.|Richmond, Virginia|New York City|=>Across the Potomac River.
Which department was created in 2002 to protect the nation?|Department of Homeland Security|Department of Education|Department of Energy|Department of State|=>After 9/11.
Which conflict began in Afghanistan in 2001?|the war on terror|the Gulf War|the Korean War|World War II|=>The U.S. responded to 9/11.
What caused the Great Recession that began in 2008?|a financial crisis tied to housing and banks|a drought|a war|a space program|=>Millions lost jobs and homes.
Who was elected president in 2008 as the first African American president?|Barack Obama|Bill Clinton|George W. Bush|Joe Biden|=>Took office in 2009.
What did the Affordable Care Act (2010) aim to do?|expand health insurance coverage|raise tariffs|end Social Security|build highways|=>A health care law.
What disrupted schools and work worldwide in 2020?|the COVID-19 pandemic|a hurricane|the Gulf War|the Y2K bug|=>A global outbreak.
`,
  }, {
    examples: ["Thinking about continuity and change: Americans still debate the role of government (continuity), but technology like smartphones changed how we share news (change).", "Primary sources of the recent past include news video, social media posts, and government data."],
    vocab: { "superpower": "After 1991 the U.S. was the only superpower.", "terrorism": "Terrorism aims to spread fear.", "Homeland Security": "Homeland Security protects airports and borders.", "globalization": "Globalization links economies.", "NAFTA": "NAFTA changed trade in North America.", "recession": "A recession lowers jobs and spending.", "pandemic": "The pandemic closed many schools." },
  });

  add({
    id: "virginia-since-1865", title: "Virginia Since 1865",
    summary: "How Virginia changed after the Civil War and took part in the nation's major eras.",
    points: [
      "After the Civil War, Virginia was readmitted to the Union in January 1870 under a new constitution (the 'Underwood Constitution') that gave Black men the right to vote and created public schools.",
      "In the 1880s, the Readjuster Party briefly united Black and white voters and expanded schools, but the state later adopted the Constitution of 1902, which used poll taxes and literacy tests to keep most Black Virginians and many poor whites from voting.",
      "Jim Crow laws segregated schools, trains, and public places. African American Virginians built strong communities and institutions: Hampton Institute (founded 1868) and Virginia Union University, and Jackson Ward in Richmond, known as the 'Harlem of the South.'",
      "Maggie L. Walker of Richmond became the first woman in the United States to charter a bank (St. Luke Penny Savings Bank, 1903). Booker T. Washington studied at Hampton Institute.",
      "Industry and cities grew: coal mining in the southwest, tobacco manufacturing in Richmond and Petersburg, and shipbuilding at Newport News (Newport News Shipbuilding was founded in 1886). Richmond and Norfolk became major port and rail hubs.",
      "Virginia in the world wars: Norfolk's naval base and Newport News's shipyards expanded; the Pentagon was completed in 1943 in Arlington. The Cold War brought more military bases and government jobs to Northern Virginia and Hampton Roads.",
      "The state was central to the civil rights struggle: Barbara Johns' 1951 walkout, Massive Resistance, Prince Edward County's school closings (1959–1964), and Loving v. Virginia (1967). In 1989 Douglas Wilder became the first African American elected governor of any state.",
      "In recent decades, Virginia's economy expanded in technology, government, military, and trade (the Port of Virginia in Norfolk). Northern Virginia grew very quickly, and the state has become more diverse.",
    ],
    example: "Virginia timeline: 1870 readmitted → 1902 new constitution limits voting → 1903 Maggie Walker's bank → 1943 Pentagon completed → 1951 Barbara Johns walkout → 1959–1964 Prince Edward schools closed → 1989 Douglas Wilder elected.\n\nConnection: When the Pentagon was attacked on 9/11, Virginia became part of the national story again.",
    vocab: [["Readjuster Party", "A 1880s Virginia party that united Black and white voters and supported public schools."], ["Constitution of 1902", "Virginia's constitution that used poll taxes and literacy tests to limit voting."], ["Hampton Institute", "A school in Hampton, Virginia, founded in 1868 to educate freed people."], ["Jackson Ward", "A historic African American business and cultural district in Richmond."], ["shipbuilding", "The industry of building ships, important in Newport News."], ["Pentagon", "The U.S. Department of Defense headquarters in Arlington, Virginia."], ["Massive Resistance", "Virginia's effort to block school integration after Brown."]],
    questions: `
When was Virginia readmitted to the Union after the Civil War?|1870|1865|1776|1900|=>After a new constitution.
What did the Constitution of 1902 do?|used poll taxes and literacy tests to limit voting|expanded voting rights|ended segregation|created the General Assembly|=>It disenfranchised many voters.
Which party united Black and white voters in Virginia in the 1880s?|the Readjusters|the Federalists|the Whigs|the Progressives|=>They expanded public schools.
What was Hampton Institute?|a school founded in 1868 to educate freed people|a fort|a shipyard|a prison|=>Booker T. Washington studied there.
Which Richmond district was known as the 'Harlem of the South'?|Jackson Ward|Shockoe Bottom|Church Hill|Monroe Ward|=>A center of Black business and culture.
Who was the first woman in the U.S. to charter a bank?|Maggie L. Walker|Mary McLeod Bethune|Clara Barton|Susan B. Anthony|=>St. Luke Penny Savings Bank, 1903.
Which Virginia city is famous for shipbuilding?|Newport News|Winchester|Roanoke|Lexington|=>Newport News Shipbuilding.
Which Virginia building was completed in 1943?|the Pentagon|the Capitol|Monticello|Mount Vernon|=>Defense headquarters in Arlington.
Which Virginia student led a 1951 school walkout?|Barbara Johns|Maggie Walker|Rosa Parks|Mary Walker|=>In Farmville.
What did Prince Edward County do from 1959 to 1964?|closed its public schools|built new schools|ended segregation at once|joined Massive Resistance|=>To avoid integration.
Which 1967 Virginia case struck down laws against interracial marriage?|Loving v. Virginia|Brown v. Board|Plessy v. Ferguson|Gideon v. Wainwright|=>Equal protection.
Who became the first African American elected governor of any state in 1989?|L. Douglas Wilder|Harry F. Byrd|Barack Obama|Oliver Hill|=>Virginia's governor.
Which Virginia port is among the busiest on the East Coast?|Norfolk (Port of Virginia)|Roanoke|Richmond|Alexandria|=>Hampton Roads.
How did Virginia's economy change in recent decades?|more technology, government, military, and trade jobs|only farming|only mining|no change|=>Especially in Northern Virginia.
`,
  }, {
    examples: ["Jackson Ward in Richmond: Black-owned banks, theaters, and businesses thrived despite segregation.", "Virginia and the nation: Reconstruction (1870), WWI/WWII (naval bases), the civil rights movement (Farmville, Prince Edward County), and 9/11 (the Pentagon)."],
    vocab: { "Readjuster Party": "The Readjuster Party supported public schools.", "Constitution of 1902": "The Constitution of 1902 limited voting.", "Hampton Institute": "Hampton Institute trained teachers.", "Jackson Ward": "Jackson Ward was a center of Black business.", "shipbuilding": "Shipbuilding employs many in Newport News.", "Pentagon": "The Pentagon is in Arlington.", "Massive Resistance": "Massive Resistance closed some schools." },
  });

  const idx = g7.subjects.findIndex((s) => s.id === "science");
  g7.subjects.splice(idx + 1, 0, subject);
})();
