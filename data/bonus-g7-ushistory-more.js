/* Grade 7 U.S. History 1865 to the Present: more bonus questions.
   Each section gets "In what year…?" and "Which happened first?" questions built from a list of [event, year],
   plus hand-written cause/effect, who-did-what, and true/false questions. */
(function () {
  const B = window.BONUS;
  const K = (u) => "7/ushistory/" + u;

  function events(unit, list, hand) {
    const out = [];
    list.forEach(([name, yr]) => {
      const ds = [yr + 1, yr - 1, yr + 2, yr - 2, yr + 3, yr - 3, yr + 5].filter((y) => y !== yr).slice(0, 3);
      out.push(`In what year did this happen?{nl}${name}|${yr}|${ds.join("|")}|=>${name}: ${yr}.`);
    });
    let n = 0;
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const [a, ya] = list[i], [b, yb] = list[j];
        if (Math.abs(ya - yb) < 2 || (i * 7 + j * 3) % 4 !== 0 || n >= 16) continue;
        n++;
        const first = ya < yb ? a : b, second = ya < yb ? b : a;
        out.push(`Which happened first?{nl}${first} or ${second}|${first}|${second}|=>${first} (${Math.min(ya, yb)}) came before ${second} (${Math.max(ya, yb)}).`);
      }
    }
    B.add(K(unit), out.join("\n") + "\n" + hand.trim());
  }

  events("reconstruction", [["Lincoln was assassinated", 1865], ["The 13th Amendment was ratified", 1865], ["The Freedmen's Bureau was created", 1865], ["The Civil Rights Act of 1866 passed", 1866], ["The Military Reconstruction Acts passed", 1867], ["President Andrew Johnson was impeached", 1868], ["The 14th Amendment was ratified", 1868], ["The 15th Amendment was ratified", 1870], ["Virginia was readmitted to the Union", 1870], ["The Compromise of 1877 ended Reconstruction", 1877]], `
Which president tried a lenient plan for readmitting Southern states?|Andrew Johnson|Ulysses S. Grant|Abraham Lincoln|=>Radical Republicans disagreed.
Which group in Congress wanted strong protection for freed people?|Radical Republicans|Democrats of the South|the Confederacy|=>Led by Thaddeus Stevens.
Which Southern groups used violence to stop Black voting?|the Ku Klux Klan|the Freedmen's Bureau|the Union Army|=>Terror groups.
What happened to many Black families after the war who had no land?|they became sharecroppers or tenant farmers|they all owned large farms|they left the country|=>Economic hardship.
What did the Freedmen's Bureau build for freed people?|schools|railroads|forts|=>It supported education.
Which amendment is the source of 'equal protection of the laws'?|14th|13th|15th|=>1868.
Why did Reconstruction end in 1877?|federal troops were withdrawn from the South|the Civil War restarted|slavery returned legally|=>Compromise of 1877.
Why did Black Codes anger Northern Republicans?|they restricted the freedom of formerly enslaved people|they ended slavery|they lowered taxes|=>Led to the 14th Amendment.
What effect did poll taxes and literacy tests have?|they kept many Black citizens from voting|they helped everyone vote|they ended elections|=>Jim Crow era.
True or false: Reconstruction gave Black men the right to vote.|True|False|=>15th Amendment.
True or false: Andrew Johnson was removed from office by the Senate.|False|True|=>The vote was one short.
True or false: Reconstruction lasted until 1900.|False|True|=>It ended in 1877.
`);

  events("west", [["The Homestead Act was passed", 1862], ["The Sand Creek Massacre occurred", 1864], ["The transcontinental railroad was completed", 1869], ["Yellowstone became the first national park", 1872], ["The Battle of Little Bighorn was fought", 1876], ["Chief Joseph and the Nez Perce surrendered", 1877], ["The Dawes Act was passed", 1887], ["The Oklahoma land run began", 1889], ["The Wounded Knee massacre occurred", 1890]], `
Which settlers were attracted by free land under the Homestead Act?|farmers and families|only soldiers|only miners|=>160 acres.
What did the railroad make possible for ranchers?|shipping cattle to eastern cities|ending cattle drives forever|stopping beef sales|=>Railheads.
What was the main food and resource Plains peoples lost?|the buffalo|corn|salmon|=>Hunting nearly wiped it out.
What did reservations do to Native American nations?|confined them to limited land|gave them more land|ended government control|=>Land was taken.
What did Native American boarding schools try to do?|force students to give up their languages and cultures|teach farming only|provide health care|=>Assimilation.
What did the Dawes Act force Native Americans to do?|accept individual plots instead of tribal land|move to cities|join the army|=>Weakened tribal ownership.
Who fought alongside Sitting Bull at Little Bighorn?|Crazy Horse|Geronimo|Chief Joseph|=>Lakota and Cheyenne.
Where did cattle drives end?|Kansas railheads|Chicago stockyards directly|New York|=>Abilene, Dodge City.
Which type of house did many Plains settlers build from prairie earth?|sod houses|log cabins|brick houses|=>No trees.
What happened to the frontier by 1890?|the census said it had closed|it grew|it moved east|=>Settlement everywhere.
True or false: Chinese workers helped build the transcontinental railroad.|True|False|=>Central Pacific.
True or false: The Dawes Act strengthened tribal land ownership.|False|True|=>It broke up tribal land.
True or false: The buffalo herds were nearly destroyed.|True|False|=>Late 1800s.
`);

  events("industrial-age", [["Alexander Graham Bell patented the telephone", 1876], ["Thomas Edison developed a practical light bulb", 1879], ["Tuskegee Institute was founded", 1881], ["The Haymarket Riot occurred", 1886], ["The American Federation of Labor was formed", 1886], ["The Sherman Antitrust Act passed", 1890], ["The Homestead Strike occurred", 1892], ["The Pullman Strike occurred", 1894], ["The Wright brothers flew at Kitty Hawk", 1903], ["The Model T was introduced", 1908], ["The NAACP was founded", 1909]], `
Which inventor is known for the phonograph and light bulb?|Thomas Edison|Alexander Graham Bell|Henry Ford|=>Edison.
Which industry did Andrew Carnegie dominate?|steel|oil|cars|=>Carnegie Steel.
Which industry did John D. Rockefeller dominate?|oil|steel|railroads only|=>Standard Oil.
What did the AFL focus on organizing?|skilled workers|farmers|bankers|=>Samuel Gompers.
What was a common problem in factory work?|long hours and unsafe conditions|short hours|high pay always|=>Reform came later.
What was a goal of the Sherman Antitrust Act?|to break up monopolies|to help trusts|to end unions|=>1890.
Why did the assembly line lower prices?|it made products faster and cheaper|it made products slower|it raised wages|=>Ford.
Why did cities grow in the Gilded Age?|factories created jobs|farms grew|jobs left cities|=>Urbanization.
True or false: Henry Ford introduced the assembly line to car manufacturing.|True|False|=>1913.
True or false: Monopolies encourage competition.|False|True|=>They reduce it.
True or false: Labor unions try to improve wages and conditions.|True|False|=>Yes.
`);

  events("immigration-cities", [["The Chinese Exclusion Act passed", 1882], ["The Statue of Liberty was dedicated", 1886], ["Hull House opened in Chicago", 1889], ["How the Other Half Lives was published", 1890], ["Ellis Island opened", 1892], ["The Gentlemen's Agreement with Japan began", 1907], ["The Immigration Act of 1924 set quotas", 1924], ["Ellis Island closed", 1954]], `
Which immigrants were the first to be banned by name from entering?|Chinese laborers|Irish laborers|Italian laborers|=>1882.
What did settlement houses provide?|English classes and child care|military training|jobs in factories only|=>Hull House.
What was one danger of tenement life?|fire and disease from crowding|too much space|too few people|=>Poor conditions.
Which place near San Francisco processed Asian immigrants?|Angel Island|Ellis Island|Alcatraz|=>1910–1940.
What did political machines trade for votes?|jobs and favors|gold|land|=>Patronage.
What did nativists believe?|immigrants should be limited|immigrants should vote|immigrants were welcome|=>Anti-immigrant.
Why did many immigrants settle near others from their homeland?|support and familiar language and food|laws required it|no reason|=>Community.
Which region sent many immigrants after 1880?|southern and eastern Europe|northern Europe only|Australia|=>Italy, Poland, Russia.
True or false: Ellis Island was in New York Harbor.|True|False|=>Yes.
True or false: Nativism supported more immigration.|False|True|=>It opposed it.
True or false: The Statue of Liberty symbolizes welcome.|True|False|=>Yes.
`);

  events("progressive-era", [["The Jungle was published", 1906], ["The Pure Food and Drug Act passed", 1906], ["The NAACP was founded", 1909], ["The Triangle Shirtwaist Fire occurred", 1911], ["The 16th Amendment was ratified", 1913], ["The Federal Reserve was created", 1913], ["The 18th Amendment was ratified", 1919], ["The 19th Amendment was ratified", 1920]], `
What did muckrakers do?|exposed problems like unsafe food and corruption|ran for office|wrote constitutions|=>Journalists.
What did trust busting aim to do?|break up monopolies|build monopolies|end unions|=>Roosevelt.
Which progressive reforms let citizens vote directly on laws?|initiative and referendum|veto and filibuster|caucus and primary|=>Direct democracy.
Which president created the Federal Reserve?|Woodrow Wilson|Theodore Roosevelt|Herbert Hoover|=>1913.
Which amendment created the federal income tax?|16th|17th|18th|=>1913.
Which amendment let voters elect senators directly?|17th|16th|19th|=>1913.
Why did suffragists march and picket?|to win the right to vote for women|to end Prohibition|to lower taxes|=>19th Amendment.
Why did reformers push for child labor laws?|children worked in dangerous factories|there were no factories|children did not work|=>Protect children.
True or false: Theodore Roosevelt protected national forests.|True|False|=>Conservation.
True or false: The 19th Amendment gave women the right to vote.|True|False|=>1920.
True or false: Progressives wanted to end all government action.|False|True|=>They wanted reform.
`);

  events("imperialism", [["The U.S. bought Alaska from Russia", 1867], ["Queen Liliuokalani was overthrown", 1893], ["The USS Maine exploded in Havana Harbor", 1898], ["The Spanish-American War was fought", 1898], ["The U.S. annexed Hawaii", 1898], ["The Open Door Policy was announced", 1899], ["Construction of the Panama Canal began", 1904], ["The Roosevelt Corollary was announced", 1904], ["The Panama Canal opened", 1914]], `
What did the U.S. gain from Spain in 1898?|Puerto Rico, Guam, and the Philippines|Alaska|Hawaii|=>Treaty of Paris.
Why did Americans want a canal across Panama?|to shorten the sea route between oceans|to find gold|to stop floods|=>Trade and navy.
Which president called for 'big stick' diplomacy?|Theodore Roosevelt|William McKinley|Woodrow Wilson|=>Roosevelt Corollary.
What was yellow journalism?|sensational stories that increased support for war|a type of paper|a treaty|=>Hearst and Pulitzer.
What did the U.S. want from Hawaii?|naval bases and sugar trade|ice|gold only|=>Pearl Harbor.
What did the Open Door Policy promise?|equal trade access to China|war with China|colonies in China|=>1899.
Who fought at San Juan Hill with the Rough Riders?|Theodore Roosevelt|William McKinley|Woodrow Wilson|=>1898.
Why did some oppose imperialism?|they felt it betrayed American ideals|they wanted more colonies|they feared peace|=>Anti-Imperialist League.
True or false: Alaska was purchased from Russia.|True|False|=>1867.
True or false: Hawaii was annexed in 1898.|True|False|=>Yes.
True or false: Cuba became a U.S. state after the war.|False|True|=>It became independent under U.S. influence.
`);

  events("world-war-1", [["Archduke Franz Ferdinand was assassinated", 1914], ["The Lusitania was sunk", 1915], ["The Zimmermann Telegram was revealed", 1917], ["The U.S. declared war on Germany", 1917], ["The Selective Service Act was passed", 1917], ["Wilson announced the Fourteen Points", 1918], ["The armistice ended the fighting", 1918], ["The Treaty of Versailles was signed", 1919]], `
Which side included Britain, France, and Russia?|the Allies|the Central Powers|the Axis|=>The U.S. joined them.
Which side included Germany and Austria-Hungary?|the Central Powers|the Allies|the Union|=>Plus the Ottoman Empire.
Why did Americans fear German submarines?|they sank ships with Americans aboard|they were friendly|they were slow|=>Lusitania.
What did the Treaty of Versailles require of Germany?|pay reparations and accept blame|join the League|receive land|=>Harsh terms.
Why did the Senate reject the treaty?|many feared entanglement in foreign wars|they supported the League|the treaty was too short|=>Isolationism.
What helped pay for the war at home?|Liberty Bonds|tariffs only|cash gifts only|=>Citizens lent money.
What job opportunities opened for many women in WWI?|factories and offices|none|only farming|=>War work.
Why did many African Americans move north during WWI?|for factory jobs|to join the army only|to farm|=>Great Migration.
True or false: The U.S. joined the League of Nations.|False|True|=>The Senate refused.
True or false: The war ended with an armistice in 1918.|True|False|=>Nov. 11.
True or false: Trenches were used in WWI.|True|False|=>Yes.
`);

  events("roaring-twenties", [["Prohibition began", 1920], ["The 19th Amendment gave women the vote", 1920], ["The Immigration Act of 1924 set quotas", 1924], ["The Scopes Trial was held", 1925], ["Lindbergh flew solo across the Atlantic", 1927], ["The Jazz Singer, the first talkie, premiered", 1927], ["The stock market crashed", 1929], ["Prohibition was repealed", 1933]], `
Which new technology brought entertainment into homes in the 1920s?|radio|television|computers|=>Popular.
What is installment buying?|paying for goods over time|paying all at once|barter|=>Consumer credit.
Which movement celebrated Black art and literature in New York?|the Harlem Renaissance|the Progressive movement|the Populist movement|=>1920s.
Why was the stock market risky in the late 1920s?|many bought stocks on margin|stocks only fell|no one invested|=>Borrowed money.
Who flew the 'Spirit of St. Louis'?|Charles Lindbergh|Amelia Earhart|Orville Wright|=>1927.
Which writer was part of the Harlem Renaissance?|Langston Hughes|Mark Twain|Robert Frost|=>Poet.
What did flappers represent?|new freedoms for young women|old traditions|military service|=>1920s style.
Why did the Red Scare happen?|fear of communist revolution|fear of fire|fear of flood|=>1919–1920.
True or false: Prohibition made alcohol legal.|False|True|=>It banned it.
True or false: Many Americans bought stocks on margin.|True|False|=>Risky.
True or false: The 1920s economy helped all farmers.|False|True|=>Farm prices stayed low.
`);

  events("depression", [["The stock market crashed", 1929], ["Franklin D. Roosevelt was elected president", 1932], ["Roosevelt declared a bank holiday", 1933], ["The FDIC was created", 1933], ["The CCC was created", 1933], ["The TVA was created", 1933], ["The Social Security Act passed", 1935], ["The WPA was created", 1935]], `
Which program employed young men in forests and parks?|Civilian Conservation Corps|Works Progress Administration|FDIC|=>CCC.
Which agency insures bank deposits?|FDIC|SEC|TVA|=>1933.
Which agency regulates the stock market?|SEC|FDIC|WPA|=>Securities and Exchange Commission.
Which program brought electricity to the Tennessee Valley?|TVA|CCC|WPA|=>Public power.
Which president said 'the only thing we have to fear is fear itself'?|Franklin D. Roosevelt|Herbert Hoover|Theodore Roosevelt|=>1933 inaugural.
Why did people live in Hoovervilles?|they lost their homes|they were wealthy|they were soldiers|=>Shantytowns.
What did the Dust Bowl cause?|farm families to move west|farm prosperity|no change|=>Okies.
What ended the Depression?|war production for WWII|a tax cut only|the Louisiana Purchase|=>Jobs.
True or false: Unemployment reached about 25% in 1933.|True|False|=>Yes.
True or false: The Social Security Act was passed in 1935.|True|False|=>Yes.
True or false: Hoover created the New Deal.|False|True|=>FDR did.
`);

  events("world-war-2", [["Germany invaded Poland", 1939], ["Lend-Lease was passed", 1941], ["Japan attacked Pearl Harbor", 1941], ["Executive Order 9066 was signed", 1942], ["The Battle of Midway was fought", 1942], ["The Pentagon was completed", 1943], ["D-Day took place", 1944], ["The GI Bill was passed", 1944], ["Germany surrendered on V-E Day", 1945], ["The atomic bomb was dropped on Hiroshima", 1945]], `
Which countries made up the Axis Powers?|Germany, Italy, and Japan|Britain, France, and the U.S.|Russia and China|=>Opposed the Allies.
Which group worked in factories during the war?|women like Rosie the Riveter|only soldiers|only children|=>Home front.
Which Marines used their language as an unbreakable code?|Navajo Code Talkers|Tuskegee Airmen|Rough Riders|=>Pacific.
What did rationing do?|limit purchases of scarce goods|ban food|raise wages|=>Sugar, gas, meat.
What was the Holocaust?|the Nazi murder of about six million Jews|a battle|a treaty|=>Genocide.
Why were Japanese Americans interned?|fear and prejudice after Pearl Harbor|they broke laws|they asked to be|=>An injustice.
What did the GI Bill help veterans do?|attend college and buy homes|join the army|move abroad|=>1944.
Who commanded D-Day forces?|Dwight D. Eisenhower|Douglas MacArthur|George Patton|=>Supreme Allied Commander.
True or false: D-Day was in 1944.|True|False|=>June 6.
True or false: The U.S. joined the war after Pearl Harbor.|True|False|=>December 1941.
True or false: Rationing helped save supplies for the military.|True|False|=>Yes.
`);

  events("cold-war", [["The Truman Doctrine was announced", 1947], ["The Marshall Plan began", 1948], ["The Berlin Airlift began", 1948], ["NATO was formed", 1949], ["The Korean War began", 1950], ["The Warsaw Pact was formed", 1955], ["Sputnik was launched", 1957], ["NASA was created", 1958], ["The Berlin Wall was built", 1961], ["The Cuban Missile Crisis occurred", 1962], ["Apollo 11 landed on the moon", 1969], ["The Berlin Wall fell", 1989], ["The Soviet Union dissolved", 1991]], `
Which two nations were the superpowers?|the U.S. and the Soviet Union|Britain and France|Germany and Japan|=>Rivals.
What did containment aim to do?|stop the spread of communism|spread democracy by force|end trade|=>Kennan.
What was the Iron Curtain?|the divide between East and West Europe|a theater curtain|a wall in Texas|=>Churchill's phrase.
What did the Marshall Plan provide?|aid to rebuild Western Europe|troops to Korea|nuclear weapons|=>1948.
What was the Berlin Airlift?|flying supplies into West Berlin|bombing Berlin|spy planes|=>1948–49.
Who was the first person on the moon?|Neil Armstrong|John Glenn|Yuri Gagarin|=>1969.
Why was the Cuban Missile Crisis dangerous?|nuclear war seemed possible|it was a trade dispute|it was unimportant|=>1962.
What event started the space race?|Sputnik|Apollo 11|Gemini|=>1957.
True or false: The Cold War was a direct war between the U.S. and USSR.|False|True|=>It was indirect.
True or false: NATO was a Western alliance.|True|False|=>1949.
True or false: The Berlin Wall fell in 1989.|True|False|=>Nov. 9.
`);

  events("civil-rights-era", [["Jackie Robinson joined the Brooklyn Dodgers", 1947], ["Truman ordered desegregation of the armed forces", 1948], ["Barbara Johns led a student walkout in Farmville", 1951], ["Brown v. Board of Education was decided", 1954], ["The Montgomery Bus Boycott began", 1955], ["The Little Rock Nine integrated Central High School", 1957], ["Prince Edward County closed its schools", 1959], ["The Greensboro sit-ins began", 1960], ["The March on Washington took place", 1963], ["The Civil Rights Act was signed", 1964], ["The Voting Rights Act was signed", 1965], ["Loving v. Virginia was decided", 1967], ["Martin Luther King Jr. was assassinated", 1968]], `
Which tool did the Montgomery Bus Boycott use?|a boycott of city buses|a strike at a factory|a lawsuit only|=>Economic pressure.
Which strategy did Dr. King champion?|nonviolent protest|armed revolt|ignoring laws|=>Peaceful.
Where did sit-ins begin in 1960?|Greensboro, North Carolina|Selma, Alabama|Little Rock|=>Woolworth's.
What was Bloody Sunday?|marchers attacked in Selma in 1965|a battle|a holiday|=>Voting rights march.
What did the Voting Rights Act of 1965 protect?|the right to vote|school lunches|taxes|=>Ended barriers.
Who argued Brown for the NAACP?|Thurgood Marshall|Martin Luther King Jr.|Rosa Parks|=>Later a justice.
Why did Virginia resist Brown?|Massive Resistance|support for integration|no opinion|=>Closed schools.
What did Loving v. Virginia protect?|interracial marriage|school integration|voting|=>Equal protection.
True or false: The March on Washington was in 1963.|True|False|=>Aug. 28.
True or false: Brown v. Board ended legal segregation in public schools.|True|False|=>It ruled it unconstitutional.
True or false: The Civil Rights Act of 1964 banned discrimination in public places.|True|False|=>Yes.
`);

  events("vietnam-change", [["Rachel Carson published Silent Spring", 1962], ["President Kennedy was assassinated", 1963], ["The Gulf of Tonkin Resolution passed", 1964], ["Medicare and Medicaid were created", 1965], ["The Tet Offensive began", 1968], ["Kent State shootings occurred", 1970], ["The first Earth Day was held", 1970], ["The 26th Amendment was ratified", 1971], ["Title IX was passed", 1972], ["The Watergate break-in occurred", 1972], ["The Paris Peace Accords were signed", 1973], ["Nixon resigned", 1974], ["Saigon fell", 1975]], `
What was the domino theory?|if one country fell to communism, neighbors would follow|a trade rule|a game|=>Vietnam rationale.
What was the Great Society?|Johnson's programs against poverty|a war plan|a tax|=>Medicare, Head Start.
What did Americans debate in the Vietnam era?|the war and the draft|trade only|the Pledge|=>Protests.
What was Watergate?|a scandal involving a break-in and cover-up|a dam|a war|=>Nixon.
Why did Nixon resign?|the Watergate cover-up|he lost an election|illness|=>1974.
Which law banned sex discrimination in education?|Title IX|ERA|Civil Rights Act of 1964|=>1972.
Which book began the environmental movement?|Silent Spring|The Jungle|Walden|=>1962.
Who led the United Farm Workers?|Cesar Chavez|Martin Luther King Jr.|Malcolm X|=>Farmworkers.
True or false: Nixon is the only president to resign.|True|False|=>Yes.
True or false: The 26th Amendment lowered the voting age to 18.|True|False|=>1971.
True or false: The Tet Offensive was in 1968.|True|False|=>Yes.
`);

  events("modern-america", [["Ronald Reagan was elected president", 1980], ["The Berlin Wall fell", 1989], ["The Americans with Disabilities Act passed", 1990], ["The Persian Gulf War was fought", 1991], ["The Soviet Union dissolved", 1991], ["NAFTA took effect", 1994], ["The September 11 attacks occurred", 2001], ["The Department of Homeland Security was created", 2002], ["The Iraq War began", 2003], ["Barack Obama was elected president", 2008], ["The Affordable Care Act was signed", 2010], ["The COVID-19 pandemic began disrupting schools", 2020]], `
What technology boomed in the 1990s?|the Internet|the telegraph|radio|=>Web.
What did 9/11 lead the U.S. to create?|the Department of Homeland Security|the UN|NATO|=>2002.
Which war began in Afghanistan in 2001?|the war on terror|the Gulf War|Korean War|=>After 9/11.
What caused the Great Recession?|a housing and financial crisis|a war|a drought|=>2008.
What did NAFTA do?|reduced trade barriers in North America|banned trade|started a war|=>1994.
What did the ADA protect?|people with disabilities|voters|immigrants|=>1990.
Which pandemic closed schools worldwide?|COVID-19|influenza of 1918|polio|=>2020.
Who was the first African American president?|Barack Obama|Bill Clinton|George W. Bush|=>2008.
True or false: The Pentagon was attacked on 9/11.|True|False|=>Arlington, Virginia.
True or false: The Cold War ended before 2001.|True|False|=>1991.
True or false: Smartphones changed communication.|True|False|=>Digital age.
`);

  events("virginia-since-1865", [["Hampton Institute was founded", 1868], ["Virginia was readmitted to the Union", 1870], ["Newport News Shipbuilding was founded", 1886], ["Virginia adopted the Constitution of 1902", 1902], ["Maggie Walker chartered St. Luke Penny Savings Bank", 1903], ["The Pentagon was completed", 1943], ["Barbara Johns led a school walkout", 1951], ["Prince Edward County closed its public schools", 1959], ["Loving v. Virginia was decided", 1967], ["Douglas Wilder was elected governor", 1989]], `
Which Richmond district was a center of Black business?|Jackson Ward|Shockoe Slip|Church Hill|=>Harlem of the South.
Which port region includes Norfolk and Hampton?|Hampton Roads|Tidewater only|Piedmont|=>Naval hub.
What did the Readjuster Party support?|public schools and shared power for Black and white voters|segregation|a king|=>1880s.
What did the Constitution of 1902 do?|limited voting with poll taxes and literacy tests|expanded voting|ended slavery|=>Jim Crow.
Which Virginia building is the Defense Department headquarters?|the Pentagon|the Capitol|Monticello|=>Arlington.
Which industry grew in Newport News?|shipbuilding|steel|textiles|=>Founded 1886.
What was Massive Resistance?|Virginia's effort to block school integration|a march|a law|=>1950s.
Who became the first elected Black governor of a state?|L. Douglas Wilder|Harry F. Byrd|Barack Obama|=>1989.
True or false: Virginia's economy has grown in technology and government jobs.|True|False|=>Northern Virginia.
True or false: The Pentagon is in Richmond.|False|True|=>Arlington.
True or false: Maggie Walker founded a bank in Richmond.|True|False|=>1903.
`);
})();
