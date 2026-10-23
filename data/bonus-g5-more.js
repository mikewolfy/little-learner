/* Grade 5: extra bonus questions that top up the units with the smallest banks. */
(function () {
  "use strict";
  const B = window.BONUS;
  const A = (key, t) => B.add(key, t.split("\n").filter((x) => x.trim()).join("\n"));

  // Dated-event questions: "In what year…?" and "Which happened first…?" built from a list of [event, year].
  function events(key, list) {
    const out = [];
    list.forEach(([name, yr]) => {
      const ys = [yr + 1, yr - 1, yr + 2, yr - 2, yr + 5, yr - 3, yr + 10].filter((y) => y !== yr).slice(0, 3);
      out.push(`In what year did this happen?{nl}${name}|${yr}|${ys.join("|")}|=>${name} happened in ${yr}.`);
    });
    let n = 0;
    for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
      const [a, ya] = list[i], [b, yb] = list[j];
      if (Math.abs(ya - yb) < 2 || (i + j) % 3 !== 0 || n >= 26) continue;
      n++;
      out.push(`Which happened first?{nl}${yb > ya ? a : b} or ${yb > ya ? b : a}|${yb > ya ? a : b}|${yb > ya ? b : a}|=>${yb > ya ? a : b} (${Math.min(ya, yb)}) came before ${yb > ya ? b : a} (${Math.max(ya, yb)}).`);
    }
    A(key, out.join("\n"));
  }

  /* ---------------- history ---------------- */
  events("5/history/revolution-causes", [["The Proclamation of 1763 banned settlement west of the Appalachians", 1763], ["The Sugar Act taxed sugar and molasses", 1764], ["The Stamp Act taxed printed materials", 1765], ["The Townshend Acts taxed imported goods", 1767], ["The Boston Massacre", 1770], ["The Boston Tea Party", 1773], ["The Intolerable Acts punished Massachusetts", 1774], ["The First Continental Congress met", 1774], ["The battles of Lexington and Concord", 1775], ["Thomas Paine published Common Sense", 1776], ["The Declaration of Independence was adopted", 1776]]);
  A("5/history/revolution-causes", `
Who was King of Great Britain during the American Revolution?|George III|Henry VIII|Charles II|=>George III.
What was Great Britain's Parliament?|the lawmaking body of Great Britain|a colonial army|a court|=>London.
Why did Britain tax the colonies after the French and Indian War?|to pay war debts|to punish Virginia|to build roads in Spain|=>Debt.
What did colonists mean by 'taxation without representation'?|they could not vote for members of Parliament|taxes were too high only|they did not want a king|=>Slogan.
What was a boycott?|refusing to buy certain goods in protest|a type of tax|a battle|=>Peaceful protest.
What did the Sons of Liberty do?|protested British policies|collected taxes|fought for Britain|=>Patriots.
What did the Daughters of Liberty do?|spun cloth and boycotted British goods|fought in battles|ran Parliament|=>Homespun.
What was a Patriot?|a colonist who supported independence|a colonist loyal to Britain|a British soldier|=>Rebel.
What was a Loyalist?|a colonist who stayed loyal to Britain|a colonist who wanted independence|a French soldier|=>Tory.
What was a Redcoat?|a British soldier|a colonial farmer|a French soldier|=>Red uniform.
What was a Minuteman?|a colonial militiaman ready to fight quickly|a British officer|a tax collector|=>Fast response.
What was the Boston Massacre?|an event in which British soldiers killed five colonists|a battle|a trade fair|=>1770.
Who was Crispus Attucks?|a man killed in the Boston Massacre|a British general|a Loyalist|=>First to die.
What did colonists dump into Boston Harbor?|tea|sugar|flour|=>Tea Party.
Why did colonists dump the tea?|to protest the Tea Act and British control|to make tea|to clean the harbor|=>Protest.
What were the Intolerable Acts?|laws punishing Massachusetts after the Tea Party|laws about tea|laws about farming|=>Closed the harbor.
What was the First Continental Congress?|a meeting of colonial delegates in 1774|a British court|a battle|=>Philadelphia.
Who attended the Continental Congress from Virginia?|George Washington, Patrick Henry, and Thomas Jefferson|only John Smith|only Pocahontas|=>Virginia leaders.
What did Patrick Henry say in 1775?|Give me liberty, or give me death!|No taxes!|God save the King!|=>Richmond speech.
What did Paul Revere do?|rode to warn that the British were coming|wrote the Declaration|led the army|=>Midnight ride.
Where were the first battles of the Revolution?|Lexington and Concord|Yorktown|Saratoga|=>Massachusetts.
What happened at Lexington and Concord?|colonial militia and British soldiers fought|a peace treaty was signed|a tax was passed|=>April 1775.
What is the 'shot heard round the world'?|the first shot of the Revolution|a cannon shot at sea|a hunting shot|=>Symbolic.
What was the Second Continental Congress?|the government that ran the war and wrote the Declaration|a British court|a battle|=>1775.
Who wrote Common Sense?|Thomas Paine|Thomas Jefferson|John Adams|=>Pamphlet.
What did Common Sense argue?|the colonies should become independent|the colonies should stay British|taxes were fair|=>Persuasive.
Who wrote most of the Declaration of Independence?|Thomas Jefferson|George Washington|Benjamin Franklin|=>From Virginia.
What was the main idea of the Declaration of Independence?|people have rights and the colonies should be free|the king was kind|taxes were low|=>Natural rights.
What are 'unalienable rights'?|rights that cannot be taken away|rights the king gives|rights you can sell|=>Life, liberty, happiness.
What does 'consent of the governed' mean?|government gets its power from the people|the king has all power|the army rules|=>Popular sovereignty.
On what date was the Declaration adopted?|July 4, 1776|April 19, 1775|September 17, 1787|=>Independence Day.
What are the three rights named in the Declaration?|life, liberty, and the pursuit of happiness|speech, press, and assembly|food, water, shelter|=>Famous line.
What did the colonists list in the Declaration?|complaints against King George III|a list of friends|a menu|=>Grievances.
Where was the Declaration of Independence signed?|Philadelphia|Boston|Richmond|=>Pennsylvania State House.
What is propaganda?|information spread to promote a cause|a law|a map|=>Revere's engraving.
What is a committee of correspondence?|a group that shared news among the colonies|a court|a tax office|=>Communication.
What were the Quartering Acts?|laws requiring colonists to house British soldiers|laws taxing tea|laws about farming|=>Unpopular.
What was a writ of assistance?|a general search warrant|a type of tax|a letter|=>British searches.
Why was the Stamp Act hard to ignore?|it taxed everyday paper items|it taxed only rich people|it was tiny|=>Affects everyone.
Why did Parliament repeal the Stamp Act?|colonial protests and boycotts hurt British trade|the king liked colonists|it was too small|=>Pressure worked.
What did the Declaratory Act say?|Parliament could make laws for the colonies|the colonies were free|taxes were over|=>1766.
Who was Samuel Adams?|a Patriot leader from Massachusetts|a British general|a Loyalist|=>Sons of Liberty.
Who was John Adams?|a Massachusetts Patriot who later became president|a British general|a Loyalist|=>Second president.
Who was Benjamin Franklin?|a Philadelphia inventor and diplomat|a British king|a Loyalist|=>Helped draft the Declaration.
Who was George Washington?|a Virginian chosen to lead the Continental Army|a British officer|a Loyalist|=>Commander.
Which Virginian led the House of Burgesses protest of the Stamp Act?|Patrick Henry|George Mason|John Marshall|=>Virginia Resolves.
`);

  events("5/history/exploration", [["Columbus sailed across the Atlantic for Spain", 1492], ["John Cabot explored North America for England", 1497], ["Vasco da Gama reached India", 1498], ["Ponce de León explored Florida", 1513], ["Cortés began conquering the Aztec Empire", 1519], ["Magellan's expedition set sail to circle the globe", 1519], ["Pizarro began conquering the Inca Empire", 1532], ["St. Augustine, Florida, was founded", 1565], ["The Lost Colony of Roanoke was settled", 1587], ["Jamestown was founded", 1607], ["Champlain founded Quebec", 1608], ["Henry Hudson explored the Hudson River", 1609]]);
  A("5/history/exploration", `
What does 'explore' mean?|travel to learn about unfamiliar places|stay home|trade|=>Discovery.
What does 'sponsor' mean?|pay for or support a voyage|sail a ship|build a fort|=>Funding.
What was a compass used for?|finding direction|measuring time|measuring depth|=>Navigation.
What was an astrolabe used for?|finding latitude using the stars or sun|telling time|catching fish|=>Navigation tool.
What was a caravel?|a small, fast ship used by explorers|a type of map|a type of cannon|=>Portuguese design.
Who was Prince Henry the Navigator?|a Portuguese prince who supported exploration|a Spanish king|a French explorer|=>School of navigation.
Why was a water route to Asia attractive?|it could make trade faster and cheaper|Asia was close|it was easy|=>Spices and silk.
What did Columbus think he had found?|Asia (the Indies)|a new continent|Africa|=>He was mistaken.
What is the Columbian Exchange?|the movement of plants, animals, people, and diseases between hemispheres|a type of ship|a trade of gold only|=>After 1492.
Which crops traveled from the Americas to Europe?|potatoes, tomatoes, and corn|wheat and rice|oranges only|=>New World foods.
Which animals did Europeans bring to the Americas?|horses and cattle|llamas|turkeys|=>Old World animals.
What deadly effect did European diseases have?|many Native Americans died|they helped Native Americans|nothing|=>No immunity.
Who was Hernán Cortés?|a Spanish conquistador who defeated the Aztecs|an English explorer|a Native chief|=>Tenochtitlan.
Who was Francisco Pizarro?|a Spanish conquistador who defeated the Inca|an English explorer|a Native chief|=>Peru.
What is a conquistador?|a Spanish conqueror|an English settler|a French trader|=>Gold and glory.
What was the Aztec capital?|Tenochtitlan|Cusco|Cahokia|=>Mexico City.
What was the Inca capital?|Cusco|Tenochtitlan|Cahokia|=>Peru.
What is the oldest European-founded city in the U.S.?|St. Augustine, Florida|Jamestown|Plymouth|=>1565.
Who explored the St. Lawrence River for France?|Jacques Cartier|Henry Hudson|John Cabot|=>Canada.
Who founded Quebec?|Samuel de Champlain|Henry Hudson|John Smith|=>1608.
Who explored the Hudson River for the Dutch?|Henry Hudson|John Cabot|Jacques Cartier|=>1609.
Who sailed for England to explore North America in 1497?|John Cabot|Christopher Columbus|Ferdinand Magellan|=>Newfoundland coast.
What was the Northwest Passage?|a hoped-for water route through North America to Asia|a road|a river|=>Never found.
What was the main French interest in North America?|the fur trade|gold only|farming|=>Beaver pelts.
What was the main Spanish interest?|gold and spreading Christianity|furs|fishing|=>Gold and God.
What was the main English interest?|settlement and farming, trade, and religion|only gold|only fur|=>Colonies.
What is a joint-stock company?|a business in which investors share costs and profits|a type of ship|a type of tax|=>Virginia Company.
What was the Virginia Company?|the joint-stock company that founded Jamestown|a Spanish company|a French company|=>1606.
Why did Jamestown struggle at first?|disease, hunger, and poor location|too much food|no problems|=>Hardship.
What was the 'Starving Time'?|the winter of 1609–1610 when many Jamestown colonists died|a celebration|a Native festival|=>Famine.
Who was Captain John Smith?|a leader who helped Jamestown survive|a Spanish explorer|a French trader|=>Work rule.
Who was John Rolfe?|a colonist who grew tobacco at Jamestown|a Spanish explorer|a French trader|=>Cash crop.
Why was tobacco important?|it made money and saved the colony|it was food|it was a tool|=>Cash crop.
Who was Pocahontas?|a Powhatan woman linked to Jamestown|an English queen|a Spanish explorer|=>Peacemaker.
Who was Chief Powhatan?|leader of many Native peoples in Virginia|an English king|a Spanish explorer|=>Wahunsenacawh.
What did Native peoples teach colonists?|how to grow corn and find food|how to read|how to build ships|=>Survival help.
Why did conflict happen between settlers and Native peoples?|settlers took land and resources|they shared everything|they spoke the same language|=>Competition.
What is a colony?|a settlement ruled by another country|a country|a city|=>England's rule.
What does 'claim' mean?|declare ownership of land|lose land|sell land|=>Claiming ignored Native peoples.
What does 'settle' mean?|make a permanent home in a new place|visit briefly|leave|=>Colonists.
What did explorers hope to find?|gold, spices, and trade routes|only friends|nothing|=>Wealth.
How did exploration change Europe?|it brought wealth, new foods, and new ideas|it brought nothing|it stopped trade|=>Exchange.
How did exploration change the Americas?|it brought new people, animals, and diseases|it changed nothing|it stopped trade|=>Great change.
`);

  events("5/history/expansion", [["The Louisiana Purchase", 1803], ["The Erie Canal opened", 1825], ["The Indian Removal Act was signed", 1830], ["Nat Turner's rebellion in Virginia", 1831], ["The Battle of the Alamo", 1836], ["The Trail of Tears began", 1838], ["The Mexican-American War began", 1846], ["The Seneca Falls Convention", 1848], ["The California Gold Rush began", 1849], ["The Compromise of 1850", 1850], ["The Kansas-Nebraska Act", 1854], ["Dred Scott v. Sandford was decided", 1857], ["John Brown raided Harpers Ferry", 1859]]);
  A("5/history/expansion", `
What is westward expansion?|the growth of the United States toward the Pacific|the growth of Europe|the growth of cities|=>Western settlement.
Who explored the Louisiana Purchase?|Lewis and Clark|Columbus and Cortés|Cabot and Cartier|=>Corps of Discovery.
Who helped guide Lewis and Clark?|Sacagawea|Pocahontas|Harriet Tubman|=>Shoshone.
What was the Oregon Trail?|a route settlers took west by wagon|a river|a railroad|=>Missouri to Oregon.
What was a wagon train?|a group of covered wagons traveling together|a type of railroad|a type of ship|=>Pioneers.
What was a pioneer?|a person who settled a new region|a king|a soldier|=>First settlers.
What was the Gold Rush?|a rush of people to California after gold was found|a war|a treaty|=>1849.
What are forty-niners?|people who rushed to California for gold in 1849|soldiers|explorers|=>Gold seekers.
What was the Erie Canal?|a canal linking the Great Lakes to the Hudson River|a river|a railroad|=>1825.
What did the Erie Canal do?|it lowered shipping costs and helped New York grow|it blocked trade|it was too small|=>Trade boost.
How did railroads change the nation?|they sped up travel and trade|they slowed trade|they stopped growth|=>Transportation.
What was the steamboat?|a boat powered by steam|a sailboat|a canoe|=>Fulton.
Who invented the cotton gin?|Eli Whitney|Robert Fulton|Samuel Morse|=>1793.
What did the cotton gin do?|quickly separated cotton fibers from seeds|spun cotton into thread|picked cotton|=>Cotton boom.
How did the cotton gin affect slavery?|it increased demand for enslaved labor|it ended slavery|it had no effect|=>More cotton.
What was the Industrial Revolution?|the shift from hand-made goods to machine-made goods in factories|a war|a political revolt|=>North.
What did the telegraph do?|sent messages quickly over wires|carried people|carried goods|=>Morse code.
What was Manifest Destiny?|the belief that the U.S. was meant to spread across North America|a law|a treaty|=>1840s.
What was the Indian Removal Act?|a law allowing the removal of Native peoples from eastern lands|a law protecting Native lands|a treaty|=>1830.
Who signed the Indian Removal Act?|Andrew Jackson|Thomas Jefferson|George Washington|=>President.
What was the Trail of Tears?|the forced march of Cherokee and other peoples to the West|a trade route|a battle|=>1838.
Which Native nation is most associated with the Trail of Tears?|Cherokee|Powhatan|Iroquois|=>Georgia.
What was the Alamo?|a battle in the Texas Revolution|a Civil War battle|a treaty|=>1836.
What was the Mexican-American War?|a war between the U.S. and Mexico|a war with Britain|a civil war|=>1846–1848.
What did the U.S. gain after the Mexican-American War?|California and the Southwest|Canada|Florida|=>Mexican Cession.
What does 'abolition' mean?|ending slavery|starting slavery|a tax|=>Abolitionists.
Who was Frederick Douglass?|a formerly enslaved man who became a leading abolitionist|a president|a general|=>Writer and speaker.
Who was Harriet Tubman?|an escaped slave who guided others on the Underground Railroad|a president|a general|=>Conductor.
What was the Underground Railroad?|a secret network that helped enslaved people escape|a train|a subway|=>Safe houses.
Who was Harriet Beecher Stowe?|author of Uncle Tom's Cabin|a president|a general|=>Novel.
What was William Lloyd Garrison's newspaper?|The Liberator|The Times|The Telegraph|=>Anti-slavery.
Who was Nat Turner?|a Virginian who led a slave rebellion in 1831|a president|a general|=>Southampton County.
What was the women's rights movement?|a push for equal rights for women|a war|a tax|=>Seneca Falls.
What was the Seneca Falls Convention?|a 1848 meeting that launched the women's rights movement|a battle|a treaty|=>Declaration of Sentiments.
Who was Susan B. Anthony?|a leader for women's right to vote|a president|a general|=>Suffrage.
Who was Elizabeth Cady Stanton?|a leader of the women's rights movement|a president|a general|=>Seneca Falls.
Who was Horace Mann?|an education reformer|a president|a general|=>Public schools.
What was the Missouri Compromise?|a 1820 agreement balancing free and slave states|a war|a tax|=>Maine and Missouri.
What was the Fugitive Slave Act?|a law requiring return of escaped enslaved people|a law that freed people|a tax|=>1850.
What was 'Bleeding Kansas'?|violence over slavery in Kansas|a flood|a battle in 1776|=>1850s.
What did the Dred Scott decision say?|enslaved people were not citizens|slavery was illegal|everyone was equal|=>1857.
Who was John Brown?|an abolitionist who raided Harpers Ferry|a president|a general|=>Virginia.
What is sectionalism?|loyalty to one's region over the nation|loyalty to the nation|a tax|=>North vs South.
What did the North's economy rely on?|factories and trade|plantations|mining|=>Industry.
What did the South's economy rely on?|cotton and plantation farming|factories|trade|=>Agriculture.
What are states' rights?|the idea that states hold powers the national government doesn't|national power|a tax|=>Southern argument.
`);

  events("5/history/civil-war", [["Abraham Lincoln was elected president", 1860], ["Fort Sumter was attacked", 1861], ["The First Battle of Bull Run (Manassas)", 1861], ["The ironclads Monitor and Virginia fought", 1862], ["The Emancipation Proclamation took effect", 1863], ["The Battle of Gettysburg", 1863], ["Union forces won at Vicksburg", 1863], ["Sherman's March to the Sea", 1864], ["Lee surrendered at Appomattox", 1865], ["Lincoln was assassinated", 1865], ["The 13th Amendment ended slavery", 1865]]);
  A("5/history/civil-war", `
What was the Civil War?|a war between the Union and the Confederacy|a war with Britain|a war with Mexico|=>1861–1865.
Which states made up the Confederacy?|Southern states that seceded|Northern states|Western territories|=>Eleven states.
Which side was called the Union?|the Northern states|the Southern states|Britain|=>Stayed in the U.S.
What was the capital of the Confederacy?|Richmond, Virginia|Atlanta|Charleston|=>Moved from Montgomery.
Who was president of the Confederacy?|Jefferson Davis|Robert E. Lee|Abraham Lincoln|=>Richmond.
Who led the Confederate Army of Northern Virginia?|Robert E. Lee|Ulysses S. Grant|William T. Sherman|=>Virginian.
Who led the Union Army to victory?|Ulysses S. Grant|Robert E. Lee|Jefferson Davis|=>General.
Who was nicknamed 'Stonewall'?|Thomas J. Jackson|Robert E. Lee|Ulysses S. Grant|=>Bull Run.
What does 'secede' mean?|to withdraw from a nation|to join a nation|to surrender|=>Leave.
What does 'sectionalism' mean?|loyalty to one's region more than the nation|loyalty to the nation|a type of tax|=>Divided country.
What was the main cause of the Civil War?|disagreement over slavery|a trade dispute only|a border dispute|=>Central issue.
Where was the first major land battle?|Manassas (Bull Run), Virginia|Gettysburg|Vicksburg|=>July 1861.
Where did the first shots of the war happen?|Fort Sumter|Gettysburg|Manassas|=>South Carolina.
What was the Emancipation Proclamation?|Lincoln's order freeing enslaved people in Confederate-held areas|a law ending slavery everywhere|a treaty|=>1863.
Which amendment ended slavery?|13th|14th|15th|=>1865.
What was the Gettysburg Address?|Lincoln's speech honoring the dead and renewing the nation's purpose|a battle plan|a treaty|=>1863.
What phrase ends the Gettysburg Address?|government of the people, by the people, for the people|give me liberty|I have a dream|=>Democracy.
What was the Battle of Gettysburg?|a major Union victory in Pennsylvania|a Confederate victory in Virginia|a naval battle|=>Turning point.
What was the Siege of Vicksburg?|a Union victory that gave the North control of the Mississippi River|a Confederate victory|a naval battle|=>Anaconda Plan.
What was the Anaconda Plan?|a Union plan to blockade the South and control the Mississippi|a Confederate plan|a treaty|=>Squeeze.
What was a blockade?|using ships to stop trade at ports|a land battle|a treaty|=>Hurt the South.
What was the Monitor and the Virginia?|the first battle between ironclad warships|a land battle|a treaty|=>Hampton Roads.
What was Sherman's March to the Sea?|a destructive Union march across Georgia|a Confederate retreat|a treaty|=>1864.
What happened at Appomattox Court House?|Lee surrendered to Grant|Grant surrendered to Lee|Lincoln was shot|=>April 1865.
Where is Appomattox?|Virginia|Georgia|Pennsylvania|=>Central Virginia.
Who assassinated Lincoln?|John Wilkes Booth|Robert E. Lee|John Brown|=>Ford's Theatre.
What was Reconstruction?|the period of rebuilding the South and readmitting states|the war|the Gold Rush|=>1865–1877.
What did the 14th Amendment do?|granted citizenship and equal protection|ended slavery|gave women the vote|=>1868.
What did the 15th Amendment do?|gave Black men the right to vote|ended slavery|gave women the vote|=>1870.
Who were the Freedmen?|formerly enslaved people|soldiers|abolitionists|=>After emancipation.
What was the Freedmen's Bureau?|an agency that helped formerly enslaved people|a battle|a tax|=>Education and jobs.
How many Black soldiers served in the Union Army?|about 180,000|about 1,800|none|=>U.S. Colored Troops.
Who was Clara Barton?|a nurse who later founded the American Red Cross|a general|a president|=>Battlefield nurse.
Who was Robert Smalls?|an enslaved man who seized a Confederate ship and became a congressman|a general|a president|=>Charleston.
Who was Mary Walker?|a surgeon who received the Medal of Honor|a general|a president|=>Civil War doctor.
What killed most Civil War soldiers?|disease|battle wounds|accidents|=>Camp illness.
About how many soldiers died in the Civil War?|about 620,000|about 6,000|about 60|=>Deadliest war.
What happened to Richmond at the end of the war?|it fell to Union troops in April 1865|it was spared|it became the U.S. capital|=>Burned.
Why was Virginia important in the war?|many battles occurred there and Richmond was the Confederate capital|no battles happened there|it was neutral|=>Battlefield.
What is West Virginia?|a state formed from Virginia's western counties during the war|a Confederate state|a territory|=>1863.
What was life like for soldiers?|hard, with disease, hunger, and danger|easy|comfortable|=>Camp life.
What is a primary source from the Civil War?|a soldier's letter|a modern textbook|a movie|=>Firsthand.
What is a monument?|a structure built to honor a person or event|a type of battle|a tax|=>Memorial.
`);

  events("5/history/revolution", [["The battles of Lexington and Concord", 1775], ["The Battle of Bunker Hill", 1775], ["The Declaration of Independence was adopted", 1776], ["Washington crossed the Delaware and won at Trenton", 1776], ["The Battle of Saratoga", 1777], ["The winter at Valley Forge began", 1777], ["France joined the war as an American ally", 1778], ["Cornwallis surrendered at Yorktown", 1781], ["The Treaty of Paris ended the war", 1783]]);
  A("5/history/revolution", `
Who was Baron von Steuben?|a Prussian officer who trained the Continental Army at Valley Forge|a British general|a Loyalist|=>Discipline.
What problem did the Continental Army face at Valley Forge?|cold, hunger, and sickness|too much food|no soldiers|=>Hard winter.
Who was the Marquis de Lafayette?|a French officer who helped Washington|a British general|a Loyalist|=>Friend of America.
Why was France's help important?|it provided soldiers, ships, and money|France fought Britain alone|France stayed neutral|=>Alliance.
Who were the Hessians?|German soldiers hired by Britain|French soldiers|Native allies|=>Mercenaries.
Why was Trenton important?|a surprise victory that boosted American morale|a British victory|a peace treaty|=>December 1776.
What was the turning point of the war?|the Battle of Saratoga|the Boston Tea Party|the Stamp Act|=>Brought France in.
Where did Cornwallis surrender?|Yorktown, Virginia|Boston|Philadelphia|=>1781.
What force helped trap Cornwallis at Yorktown?|the French navy and American and French armies|only the American army|the British navy|=>Joint operation.
Which treaty ended the war?|the Treaty of Paris (1783)|the Treaty of Versailles|the Treaty of Ghent|=>Recognized independence.
What did the Treaty of Paris recognize?|American independence|British rule|French rule|=>New nation.
What role did women play?|they ran farms, supplied soldiers, and nursed the wounded|they did nothing|they ran armies|=>Many roles.
Who was Abigail Adams?|a writer who urged her husband to 'remember the ladies'|a general|a king|=>Letters.
Who was Molly Pitcher?|a woman said to have carried water and helped fire a cannon|a general|a Loyalist|=>Folk hero.
Who was Deborah Sampson?|a woman who disguised herself to fight as a soldier|a spy|a Loyalist|=>Soldier.
What role did African Americans play?|they served as soldiers and sailors and many sought freedom|they stayed out of the war|they led Britain|=>Both sides.
Who was James Armistead Lafayette?|an enslaved Virginian who spied for the Americans|a British general|a French king|=>Yorktown spy.
What choice did Native nations face?|which side to support, if any|none|all supported Britain|=>Complex.
Which advantages did the British have?|a strong army and navy|local support|an easy supply line|=>Power.
Which advantages did the Americans have?|fighting on familiar land for a cause|more ships|a bigger army|=>Home ground.
What is a militia?|citizen soldiers|professional soldiers|ships|=>Minutemen.
What is guerrilla warfare?|small surprise attacks|a large open battle|a naval blockade|=>Hit and run.
Who was the 'Swamp Fox'?|Francis Marion, a Patriot guerrilla leader|a British general|a French admiral|=>South Carolina.
Who was Benedict Arnold?|a general who betrayed the Americans|a French officer|a king|=>Traitor.
What is a traitor?|a person who betrays their country|a hero|a soldier|=>Arnold.
What is a siege?|surrounding a place to force surrender|a quick attack|a retreat|=>Yorktown.
What is a surrender?|giving up in a battle or war|winning|a treaty|=>Cornwallis.
What is a casualty?|a person killed or injured in war|a winner|a general|=>War cost.
What is a revolution?|a major change, often overthrowing a government|a small change|a peace treaty|=>American Revolution.
Which Virginian wrote the Declaration of Independence?|Thomas Jefferson|Patrick Henry|George Mason|=>Monticello.
Which Virginian led the Continental Army?|George Washington|James Madison|John Marshall|=>Mount Vernon.
Why did Virginia's capital move to Richmond?|it was safer and more central|it was closer to the ocean|it was larger|=>1780.
What was the Continental Congress?|the government of the colonies during the war|a British court|a battle|=>Philadelphia.
What did Washington do after the war?|returned to Mount Vernon|became king|left the country|=>Set an example.
How did the Revolution inspire others?|it showed that people could fight for liberty|it ended all wars|it ended slavery immediately|=>Global effect.
`);

  events("5/history/new-nation", [["The Articles of Confederation were ratified", 1781], ["Shays' Rebellion began", 1786], ["The Constitutional Convention met", 1787], ["The Constitution was ratified by enough states", 1788], ["George Washington became president", 1789], ["The Bill of Rights was ratified", 1791], ["The Louisiana Purchase", 1803], ["Lewis and Clark began their expedition", 1804], ["The War of 1812 began", 1812], ["Francis Scott Key wrote 'The Star-Spangled Banner'", 1814]]);
  A("5/history/new-nation", `
Why was Washington, D.C. chosen as the capital?|a compromise between northern and southern states|it was the largest city|it was on the coast|=>Potomac.
What is Mount Vernon?|George Washington's home in Virginia|a mountain|a fort|=>Fairfax County.
What is Monticello?|Thomas Jefferson's home in Virginia|a fort|a school|=>Charlottesville.
What is Montpelier?|James Madison's home in Virginia|a fort|a school|=>Orange County.
What did Washington's Farewell Address warn about?|political parties and foreign entanglements|taxes|a war|=>1796.
Who was the second president?|John Adams|Thomas Jefferson|James Madison|=>1797–1801.
Who was the third president?|Thomas Jefferson|John Adams|James Madison|=>1801–1809.
Who was the fourth president?|James Madison|James Monroe|Thomas Jefferson|=>1809–1817.
Which Virginians were among the first five presidents?|Washington, Jefferson, Madison, and Monroe|Adams and Hamilton|Franklin and Paine|=>Virginia leaders.
What was the first political division in the new nation?|Federalists and Democratic-Republicans|Whigs and Democrats|Northerners and Southerners|=>Hamilton vs Jefferson.
Who led the Federalists?|Alexander Hamilton|Thomas Jefferson|George Mason|=>Strong central government.
Who led the Democratic-Republicans?|Thomas Jefferson|Alexander Hamilton|John Adams|=>States' rights.
Who was Alexander Hamilton?|the first Secretary of the Treasury|the first Chief Justice|the second president|=>Financial plan.
What did Hamilton's plan do?|helped establish the nation's credit and a national bank|ended taxes|created a king|=>Finances.
What is the Supreme Court?|the highest court in the nation|a state court|a local court|=>Judicial branch.
Who was the first Chief Justice?|John Jay|John Marshall|Thomas Jefferson|=>1789.
Who was John Marshall?|a Virginian and Chief Justice who established judicial review|a president|a general|=>Marbury v. Madison.
What is judicial review?|courts deciding whether laws are constitutional|the president's veto|Congress making laws|=>Marbury v. Madison.
What was the Louisiana Purchase?|the 1803 purchase of French land west of the Mississippi River|a war|a treaty with Britain|=>Doubled the nation.
Who negotiated the Louisiana Purchase for Jefferson?|Robert Livingston and James Monroe|Hamilton and Adams|Madison and Jay|=>Paris.
Who explored the Louisiana Purchase?|Lewis and Clark|Hernando de Soto|John Smith|=>Corps of Discovery.
What was the War of 1812?|a war between the U.S. and Britain|a civil war|a war with France|=>Second war of independence.
What happened to Washington, D.C. in 1814?|British troops burned government buildings|it was moved|it was sold|=>War of 1812.
What did Francis Scott Key write?|The Star-Spangled Banner|the Declaration|the Constitution|=>Fort McHenry.
What is a bicameral legislature?|a legislature with two houses|a legislature with one house|a legislature with three houses|=>Senate and House.
What is a veto?|the president's rejection of a bill|a type of tax|a type of vote|=>Check on Congress.
What is a cabinet?|the president's advisors who head departments|the Senate|the Supreme Court|=>Washington began it.
What is an amendment?|a change or addition to the Constitution|a law about taxes|a book|=>27 so far.
How many amendments are in the Bill of Rights?|10|7|27|=>First ten.
What does the First Amendment protect?|freedom of religion, speech, press, assembly, and petition|the right to bear arms|a speedy trial|=>Five freedoms.
What does the Fourth Amendment protect?|against unreasonable searches and seizures|freedom of speech|the right to vote|=>Warrants.
What does the Sixth Amendment protect?|the right to a speedy trial and a lawyer|freedom of speech|the right to vote|=>Fair trial.
What does the Tenth Amendment say?|powers not given to the national government belong to the states or the people|the president is limited|states have no power|=>Reserved powers.
What is federalism?|power shared between national and state governments|power held only by states|power held only by the president|=>Shared.
What are checks and balances?|each branch can limit the power of the others|branches work alone|one branch rules|=>Prevent abuse.
What is popular sovereignty?|the idea that the people are the source of government power|the king's rule|military rule|=>We the People.
What is ratification?|official approval|a type of tax|a type of war|=>Nine states needed.
`);

  events("5/history/colonies", [["Jamestown was founded", 1607], ["The first Africans arrived in Virginia", 1619], ["The House of Burgesses first met", 1619], ["The Pilgrims landed at Plymouth", 1620], ["The Massachusetts Bay Colony was founded", 1630], ["Maryland was founded", 1634], ["Roger Williams founded Rhode Island", 1636], ["William Penn founded Pennsylvania", 1681], ["Georgia was founded", 1732], ["The French and Indian War began", 1754]]);
  A("5/history/colonies", `
What was the 'Great Migration' of the Puritans?|thousands of Puritans came to Massachusetts in the 1630s|Africans coming to Virginia|settlers leaving Jamestown|=>Religious reasons.
What was a town meeting?|a gathering where citizens voted on local issues|a church service|a market|=>New England.
What was a meetinghouse?|a building used for church and town meetings|a school|a store|=>Center of town.
What was a dame school?|a small school run by a woman in her home|a college|a church|=>Early education.
What was the New England Primer?|a textbook used to teach children to read|a map|a Bible|=>Colonial schoolbook.
What was a hornbook?|a paddle-shaped board with the alphabet used for learning|a type of horn|a musical instrument|=>Early reading tool.
What kinds of jobs did colonists have?|farmers, blacksmiths, coopers, and printers|astronauts|airline pilots|=>Skilled trades.
What did a blacksmith make?|metal tools|barrels|candles|=>Metalwork.
What did a cooper make?|barrels|shoes|candles|=>Casks.
What did a cobbler make?|shoes|barrels|candles|=>Footwear.
What did a chandler make?|candles|barrels|shoes|=>Lighting.
What did an apothecary sell?|medicines|bread|cloth|=>Early pharmacy.
What did a printer do?|printed books and newspapers|made tools|baked bread|=>Spread ideas.
What was an apprentice?|a young person who learned a trade from a master|a master|a customer|=>Training.
What was a plantation?|a large farm growing cash crops|a small garden|a town|=>Southern colonies.
What crops grew on Southern plantations?|tobacco, rice, and indigo|wheat only|apples|=>Cash crops.
What is slavery?|a system in which people are owned and forced to work|a job|a contract|=>Brutal system.
What was the Middle Passage?|the forced voyage of enslaved Africans across the Atlantic|a mountain pass|a river|=>Terrible journey.
What was triangular trade?|trade among the colonies, Africa, and the Caribbean or Europe|trade among three cities|a game|=>Included slave trade.
What is mercantilism?|the idea that a country grows rich by exporting more than it imports|free trade|barter|=>Colonies supplied raw goods.
What were the Navigation Acts?|laws that required colonial trade to go through England|laws about roads|laws about schools|=>Control.
What is a charter?|a written grant of rights from a king|a ship|a tax|=>Colony charters.
What is a proprietary colony?|a colony owned by a person or family|a colony ruled by the king|a self-governing colony|=>Pennsylvania.
What is a royal colony?|a colony ruled directly by the king|a colony owned by a family|a self-governing colony|=>Virginia after 1624.
What was the House of Burgesses?|the first elected assembly in the English colonies|a king's court|a church|=>1619.
Who were the Pilgrims?|English settlers who came to Plymouth in 1620|Spanish explorers|French traders|=>Mayflower.
What was the Mayflower Compact?|an agreement to form a government and follow its laws|a treaty|a war|=>1620.
Who helped the Pilgrims survive?|Squanto and the Wampanoag|the Spanish|the French|=>Taught farming.
Who were the Puritans?|English settlers who wanted to purify the Church of England|Spanish explorers|French traders|=>Massachusetts Bay.
Who founded Pennsylvania?|William Penn|Roger Williams|Lord Baltimore|=>Quakers.
Who founded Rhode Island?|Roger Williams|William Penn|John Smith|=>Religious tolerance.
Which colony was founded as a refuge for Catholics?|Maryland|Georgia|Massachusetts|=>Lord Baltimore.
Which colony was founded for debtors and as a buffer against Spain?|Georgia|Virginia|Massachusetts|=>Oglethorpe.
What was the capital of colonial Virginia?|Williamsburg|Richmond|Jamestown|=>After 1699.
What is Colonial Williamsburg?|a restored colonial capital that teaches about 18th-century life|a modern city|a farm|=>Living history.
What was the Great Awakening?|a religious revival in the colonies|a war|a trade route|=>1730s–40s.
What was the French and Indian War?|a war between Britain and France and their Native allies|a war between Britain and the colonies|a war with Spain|=>1754–1763.
Who won the French and Indian War?|Britain|France|Spain|=>Gained land.
Which Virginian fought in the French and Indian War?|George Washington|Thomas Jefferson|Patrick Henry|=>Young officer.
How did women contribute to colonial life?|they managed homes, made goods, and sometimes ran businesses|they ran legislatures|they led armies|=>Many duties.
Which colonial region had the best farmland for wheat?|the Middle Colonies|New England|the Southern Colonies|=>Breadbasket.
`);

  A("5/history/first-americans", `
What does 'culture' mean?|a group's way of life|a single tool|a type of weather|=>Customs.
What is an artifact?|an object made by people long ago|a plant|a rock|=>Tools.
What does an archaeologist study?|the past by digging up artifacts|rocks|weather|=>History.
What is a primary source?|a firsthand record or object|a modern textbook|a movie|=>Artifacts.
What is a tribe?|a group of people with a shared culture and leaders|a family|a village|=>Nations.
What is a nation in Native American history?|a tribe with its own government|a state|a village|=>Sovereign.
What is a reservation?|land set aside by the government for Native Americans|a hotel|a park|=>Later policy.
What is a treaty?|a formal agreement between nations|a tool|a house|=>Often broken.
What was a wigwam?|a dome-shaped home of bent saplings and bark|a teepee|an adobe building|=>Woodland homes.
What was a longhouse?|a long bark home for several Iroquois families|a tent|a teepee|=>Haudenosaunee.
What was a teepee?|a cone-shaped portable home of animal skins|a longhouse|an adobe building|=>Plains.
What was a pueblo?|a village of multistory adobe buildings|a teepee|a longhouse|=>Southwest.
What was adobe?|sun-dried clay brick|a type of wood|a type of metal|=>Building material.
What is a totem pole?|a carved pole that tells stories|a house|a boat|=>Northwest.
What are moccasins?|soft leather shoes|a type of boat|a type of house|=>Footwear.
What is a canoe?|a light boat paddled by hand|a house|a tool|=>Transportation.
What is wampum?|beads made from shells used for records and trade|a type of food|a type of house|=>Belts.
What was the Three Sisters?|corn, beans, and squash grown together|deer, fish, and berries|wheat, oats, and rye|=>Companion planting.
Why did the Three Sisters help each other?|beans fed the soil, corn gave support, squash shaded the ground|they were pretty|they were the same size|=>Smart farming.
What did the Plains peoples hunt?|bison|whales|elk only|=>Buffalo.
What did Plains peoples use every part of the bison for?|food, clothing, tools, and shelter|only food|only clothing|=>Nothing wasted.
What did Pacific Northwest peoples depend on?|salmon and cedar|bison|corn|=>Fishing.
What did Southwest peoples grow?|corn, beans, and squash|rice|wheat|=>Dry farming.
What is irrigation?|supplying water to crops|a type of crop|a tool|=>Ditches.
What was Cahokia?|a large Mississippian city with huge earth mounds|a Spanish fort|a French city|=>Illinois.
Who built mounds in the eastern U.S.?|Mississippian peoples|Romans|Vikings|=>Earth mounds.
What were the Ancestral Puebloans known for?|cliff dwellings|bison hunting|longhouses|=>Mesa Verde.
What was the Iroquois Confederacy?|an alliance of five (later six) nations|a type of house|a battle|=>Great Law of Peace.
Which five nations formed the Iroquois Confederacy?|Mohawk, Oneida, Onondaga, Cayuga, Seneca|Cherokee, Creek, Choctaw|Hopi, Zuni, Navajo|=>Haudenosaunee.
Who was Chief Powhatan?|leader of the Powhatan peoples in Virginia|an English king|a Spanish explorer|=>Wahunsenacawh.
What did the Powhatan grow?|corn, beans, and squash|rice|wheat|=>Farming.
What did the Powhatan call their homes?|yehakins (longhouses)|teepees|igloos|=>Virginia homes.
How did environment shape culture?|people adapted homes, food, and clothing to their surroundings|it had no effect|everyone lived the same|=>Geography.
What is oral tradition?|passing stories by speaking|writing books|painting|=>Storytelling.
What is a trade route?|a path used to exchange goods|a type of house|a battle|=>Rivers and trails.
`);

  A("5/history/colonies", `
What was a hornbook used for?|learning the alphabet|cooking|farming|=>Colonial school tool.
`);

  /* ---------------- science ---------------- */
  A("5/science/light", `
What is light?|a form of energy that travels in waves and lets us see|a type of sound|a type of matter|=>Radiant energy.
What does 'luminous' mean?|makes its own light|reflects light|absorbs light|=>Sun, lamp.
What does 'illuminated' mean?|lit by a light source|makes its own light|dark|=>Moon.
Which is luminous?|the sun|the moon|a mirror|=>Makes light.
Which is illuminated, not luminous?|the moon|the sun|a candle|=>Reflects sunlight.
How does light travel?|in straight lines|in curves|in circles|=>Rays.
What is a ray?|a straight line showing the path of light|a type of sound|a type of heat|=>Diagram tool.
What is reflection?|light bouncing off a surface|light bending|light being absorbed|=>Mirrors.
What is refraction?|the bending of light as it passes into a different material|light bouncing|light absorbed|=>Lenses.
What is absorption?|light taken in by a material|light bouncing|light bending|=>Dark objects.
What is a mirror?|a smooth surface that reflects light well|a lens|a prism|=>Image.
What is a lens?|a curved piece of glass or plastic that refracts light|a mirror|a prism|=>Glasses.
What is a prism?|a transparent object that separates white light into colors|a mirror|a lens|=>Rainbow.
What colors make up white light?|red, orange, yellow, green, blue, indigo, violet|only black and white|only red and blue|=>ROY G BIV.
What causes a rainbow?|sunlight refracting and reflecting in raindrops|clouds|a prism in the sky|=>Water droplets.
What does 'transparent' mean?|light passes through and you can see clearly|some light passes through|no light passes through|=>Clear glass.
What does 'translucent' mean?|some light passes through but you can't see clearly|no light passes|all light passes|=>Frosted glass.
What does 'opaque' mean?|no light passes through|some light passes|all light passes|=>Wood.
What is a shadow?|a dark area made when an opaque object blocks light|a type of light|a reflection|=>No light reaches.
When is a shadow longest?|when the light source is low in the sky|when the light source is overhead|never|=>Morning and evening.
Why does a red apple look red?|it reflects red light and absorbs other colors|it makes red light|it absorbs red light|=>Selective reflection.
Why does a black shirt feel warmer in sunlight?|it absorbs more light energy|it reflects more|it is thicker|=>Absorbs all colors.
What is the law of reflection?|the angle of incidence equals the angle of reflection|light bends|light disappears|=>Equal angles.
Why does a straw look bent in water?|light refracts when moving from water to air|the straw bends|the water is wet|=>Refraction.
What does a convex lens do?|focuses light rays together|spreads them apart|absorbs light|=>Magnifier.
What does a concave lens do?|spreads light rays apart|focuses them together|absorbs light|=>Nearsighted glasses.
How does a magnifying glass work?|a convex lens bends light to enlarge an image|a mirror reflects it|a prism splits it|=>Refraction.
Which part of the eye lets light in?|the pupil|the lens|the retina|=>Opening.
Which part of the eye focuses light?|the lens|the pupil|the iris|=>Adjusts.
Which part of the eye detects light and sends signals to the brain?|the retina|the pupil|the iris|=>Back of the eye.
What does the iris do?|controls the size of the pupil|focuses light|detects light|=>Colored part.
How do telescopes help us see?|they gather and focus light from far-away objects|they make light|they absorb light|=>Magnify.
How do microscopes help us see?|they use lenses to magnify tiny objects|they use mirrors only|they make light|=>Magnify.
What is a periscope?|a tool that uses mirrors to see around obstacles|a type of lens|a type of prism|=>Submarines.
How long does sunlight take to reach Earth?|about 8 minutes|about 8 seconds|about 8 hours|=>Very fast.
Which travels faster, light or sound?|light|sound|They are equal|=>Light.
Which kind of light can cause sunburn?|ultraviolet|infrared|visible|=>UV.
How can you protect your eyes from the sun?|wear sunglasses and never look directly at the sun|stare at the sun|nothing|=>Safety.
What is the electromagnetic spectrum?|the range of all types of light and radiation|a type of prism|a type of rainbow|=>Radio to gamma.
Which type of light can we see?|visible light|infrared|ultraviolet|=>Narrow band.
What is bioluminescence?|light made by living things|reflected sunlight|a type of lens|=>Fireflies.
`);

  A("5/science/sound", `
What is sound?|energy caused by vibrations that travels in waves|a type of light|a type of matter|=>Vibrations.
What does sound need to travel?|a medium like air, water, or a solid|a vacuum|light|=>Matter.
Why can't sound travel in space?|there is no matter to carry it|space is too bright|space is too cold|=>Vacuum.
What is pitch?|how high or low a sound is|how loud it is|how long it lasts|=>Frequency.
What is frequency?|the number of vibrations per second|loudness|length|=>Hertz.
What is amplitude?|the size of a sound wave (loudness)|pitch|speed|=>Energy.
What unit measures loudness?|decibels|hertz|meters|=>dB.
What unit measures frequency?|hertz|decibels|meters|=>Hz.
What is an echo?|a sound that bounces back|a sound that disappears|a type of light|=>Reflection.
What is sound absorption?|sound being soaked up by a material|sound bouncing|sound speeding up|=>Soft materials.
Which material absorbs sound best?|foam|metal|glass|=>Soft.
Which material reflects sound best?|a hard wall|a thick carpet|a pillow|=>Hard.
Why do empty rooms echo?|hard surfaces reflect sound|furniture makes sound|they are big|=>Little absorption.
Does sound travel faster in air or water?|water|air|The same|=>Denser.
Does sound travel faster in solids or gases?|solids|gases|The same|=>Particles are closer.
What happens to pitch when a string is shorter?|it gets higher|it gets lower|nothing|=>Faster vibrations.
What happens to pitch when a string is thicker?|it gets lower|it gets higher|nothing|=>Slower vibrations.
What happens to pitch when a string is tighter?|it gets higher|it gets lower|nothing|=>More tension.
Which instrument has a lower pitch: a tuba or a flute?|a tuba|a flute|The same|=>Longer tube.
What makes a drum sound louder?|hitting it harder|hitting it softer|loosening it|=>Larger amplitude.
What is a sound wave?|a disturbance that carries sound energy through matter|a type of light|a type of heat|=>Compression wave.
What are compressions?|regions where particles are squeezed together|regions where particles are spread apart|empty regions|=>High pressure.
What are rarefactions?|regions where particles are spread apart|regions where particles are squeezed together|empty regions|=>Low pressure.
How do we hear?|sound waves vibrate the eardrum and signals go to the brain|light enters the ear|air enters the brain|=>Ear process.
What is the eardrum?|a thin membrane that vibrates when sound hits it|a bone|a nerve|=>Hearing start.
What part of the ear collects sound?|the outer ear|the eardrum|the cochlea|=>Ear flap.
What is the cochlea?|a fluid-filled part of the inner ear that turns vibrations into signals|the eardrum|an ear flap|=>Hearing.
Why do we see lightning before we hear thunder?|light travels much faster than sound|sound is faster|thunder happens first|=>Speed difference.
What is the speed of sound in air?|about 343 meters per second|about 3,000 meters per second|about 300,000 km per second|=>Slow compared to light.
What can too much loud noise cause?|hearing damage|better hearing|nothing|=>Protect ears.
How can you protect your hearing?|wear ear protection around loud sounds|turn the volume up|stay near speakers|=>Safety.
What is ultrasound?|sound too high for humans to hear|sound too low|a type of light|=>Used in medicine.
What is infrasound?|sound too low for humans to hear|sound too high|a type of light|=>Elephants.
What is sonar?|using sound to find objects underwater|a type of light|a type of heat|=>Echo location.
How do bats find food in the dark?|echolocation|sight|smell|=>Sound echoes.
What is noise?|unwanted or disruptive sound|music|a type of light|=>Loud.
Which instrument family makes sound by vibrating strings?|string instruments|percussion|brass|=>Guitar.
Which instrument family makes sound when struck?|percussion|string|woodwind|=>Drum.
Which instrument family makes sound by blowing air?|wind instruments|percussion|string|=>Flute.
What would you see if you touched a vibrating tuning fork to water?|splashing from the vibrations|nothing|freezing|=>Visible vibrations.
How does a vibrating object make sound travel?|it pushes particles, which push other particles|it makes light|it makes heat|=>Chain reaction.
`);

  A("5/science/practices", `
What is the engineering design process?|steps engineers use to solve problems|a type of experiment|a type of graph|=>Define, design, build, test.
What is a prototype?|a first model of a design|a final product|a plan|=>Test and improve.
What is a design constraint?|a limit such as cost, time, or materials|a prize|a result|=>Requirement.
What is a criterion?|a standard the design must meet|a result|a prize|=>Success measure.
Why do engineers test and improve designs?|to find problems and make the design better|to waste materials|to avoid building|=>Iteration.
What is a trade-off?|giving up one benefit to gain another|a trade between people|a mistake|=>Decision.
What is a model in science?|a representation that helps explain something|an exact copy|a conclusion|=>Diagrams.
What is a variable?|a factor that can change in an experiment|a constant|a conclusion|=>Independent or dependent.
Which tool measures mass?|balance|graduated cylinder|thermometer|=>g.
Which tool measures liquid volume?|graduated cylinder|ruler|balance|=>mL.
Which tool measures temperature?|thermometer|balance|ruler|=>°C.
Which tool measures time?|stopwatch|ruler|thermometer|=>s.
Which tool measures length?|metric ruler|beaker|stopwatch|=>cm.
Which tool magnifies cells?|microscope|telescope|thermometer|=>Lenses.
What does it mean to be accurate?|close to the true value|consistent only|large|=>Correct.
What does it mean to be precise?|repeated measurements are close together|close to the true value|large|=>Consistent.
What is the difference between observation and inference?|an observation is what you sense; an inference is an explanation|they are the same|an inference is a number|=>Different ideas.
Which is an inference?|The soil is damp, so it must have rained.|The soil is damp.|The soil is brown.|=>Explains.
What is a conclusion?|a statement answering the question using data|a guess before the test|a tool|=>Evidence-based.
Why should an experiment be repeated?|to confirm results|to waste time|to confuse people|=>Reliability.
What is a control?|the part of an experiment kept unchanged for comparison|the variable you change|the result|=>Baseline.
What is bias?|something that unfairly influences results|a random error|a tool|=>Avoid it.
Which graph shows change over time?|line graph|circle graph|pictograph|=>Trends.
Which graph compares categories?|bar graph|line graph|circle graph|=>Bars.
Which graph shows parts of a whole?|circle graph|line graph|scatterplot|=>Percentages.
Convert 4.2 m to cm.|420 cm|42 cm|4,200 cm|=>× 100.
Convert 3,000 g to kg.|3 kg|30 kg|300 kg|=>÷ 1,000.
Convert 2.5 L to mL.|2,500 mL|250 mL|25 mL|=>× 1,000.
What is the mean of 4, 6, and 8?|6|4|8|=>18 ÷ 3.
What is the range of 4, 6, and 10?|6|4|10|=>10 − 4.
What is the median of 3, 7, 9?|7|3|9|=>Middle.
What safety rule is important in a lab?|wear goggles and follow directions|taste chemicals|run|=>Safety.
What should you do if glass breaks?|tell the teacher|pick it up|ignore it|=>Adult help.
How do scientists share results?|in reports, graphs, and presentations|they keep them secret|by guessing|=>Communication.
What is peer review?|experts evaluating scientific work before it is published|a student vote|a lab rule|=>Quality check.
What is a testable question?|one you can answer by investigation|one about opinions|one with no evidence|=>Measurable.
Which is a testable question?|How does temperature affect how fast sugar dissolves?|Which flavor is best?|Is blue pretty?|=>Measurable.
`);

  A("5/science/electricity", `
What does a battery do in a circuit?|provides electrical energy|uses electrical energy|stops the flow|=>Source.
What does a bulb do in a circuit?|changes electrical energy into light and heat|stores energy|opens the circuit|=>Load.
What is a closed circuit?|a complete path for current|a broken path|a battery|=>Works.
What is an open circuit?|a broken path|a complete path|a battery|=>Off.
What is a short circuit?|a path with very little resistance that lets too much current flow|a long circuit|a broken circuit|=>Dangerous.
Why does a fuse have a thin wire?|it melts if too much current flows|it makes light|it stores energy|=>Safety.
What is electrical resistance?|how much a material opposes the flow of current|a type of battery|a type of switch|=>Thin wires.
Which has more resistance: a thin wire or a thick wire?|a thin wire|a thick wire|They are equal|=>Less space.
What does a switch do?|opens or closes a circuit|makes electricity|stores energy|=>On/off.
What is current measured in?|amperes (amps)|volts|ohms|=>A.
What is voltage measured in?|volts|amps|ohms|=>V.
What is resistance measured in?|ohms|volts|amps|=>Ω.
What is a series circuit?|a circuit with one path|a circuit with many paths|a broken circuit|=>One loop.
What is a parallel circuit?|a circuit with more than one path|a circuit with one path|a broken circuit|=>Branches.
In a series circuit, what happens if one bulb burns out?|all bulbs go out|the others stay on|they get brighter|=>Path broken.
In a parallel circuit, what happens if one bulb burns out?|the others stay on|all go out|they get dimmer|=>Other paths remain.
Which bulbs are brighter: two in series or two in parallel (same battery)?|two in parallel|two in series|They are equal|=>Each gets full voltage.
What is static electricity?|a buildup of electric charge on an object|a flowing current|a magnet|=>Rubbed balloon.
How can you build static charge?|rub two materials together|heat a wire|freeze water|=>Friction.
What happens when like charges meet?|they repel|they attract|nothing|=>Same sign.
What happens when opposite charges meet?|they attract|they repel|nothing|=>Different sign.
What is lightning?|a huge discharge of static electricity|a type of magnet|a type of sound|=>Big spark.
What are the two poles of a magnet?|north and south|positive and negative|hot and cold|=>Ends.
What happens when two north poles meet?|they repel|they attract|nothing|=>Like poles repel.
What happens when a north and south pole meet?|they attract|they repel|nothing|=>Opposites attract.
What is a magnetic field?|the area around a magnet where its force acts|a type of metal|a battery|=>Force region.
What are magnetic materials?|iron, nickel, and cobalt|wood and plastic|glass|=>Attract.
What is an electromagnet?|a magnet made with electric current in a coil|a permanent magnet|a battery|=>Temporary magnet.
How can you strengthen an electromagnet?|add more wire turns or more batteries|use less wire|remove the nail|=>Stronger field.
What is a generator?|a device that converts motion into electrical energy|a battery|a switch|=>Power plants.
What is a motor?|a device that converts electrical energy into motion|a battery|a switch|=>Fan.
What is a conductor?|a material that lets electricity flow easily|a material that blocks it|a gas|=>Copper.
What is an insulator?|a material that blocks electricity|a material that conducts|a magnet|=>Rubber.
Why are plugs made of metal and rubber?|metal conducts and rubber insulates|rubber conducts|metal insulates|=>Safety.
Why should you not touch electrical outlets?|you could get a shock|they are hot|they are sticky|=>Danger.
What is a circuit breaker?|a switch that shuts off current when it is too high|a battery|a bulb|=>Safety device.
`);

  A("5/science/living-systems", `
What are the characteristics of living things?|they grow, reproduce, respond, and use energy|they are all green|they all move|=>Life traits.
What is a cell?|the basic unit of life|a type of organ|a type of tissue|=>Smallest living unit.
Who first described cells?|Robert Hooke|Gregor Mendel|Isaac Newton|=>Cork.
What is the nucleus?|the control center of the cell|the powerhouse|the cell wall|=>DNA.
What is cytoplasm?|a jelly-like fluid inside the cell|a nucleus|a wall|=>Fills the cell.
What is the cell membrane?|a thin boundary that controls what enters and leaves|a wall|the nucleus|=>Gatekeeper.
What are mitochondria?|structures that release energy from food|structures that make food|structures that store DNA|=>Powerhouse.
What are chloroplasts?|structures where photosynthesis happens|structures that release energy|structures that store water|=>Plant cells.
What is a cell wall?|a rigid layer outside the cell membrane in plants|a thin layer in animals|the nucleus|=>Support.
What is a vacuole?|a storage sac in a cell|the nucleus|the wall|=>Water storage.
Which cells have chloroplasts?|plant cells|animal cells|bacteria only|=>Photosynthesis.
Which cells have cell walls?|plant cells|animal cells|human cells|=>Rigid.
What is a unicellular organism?|an organism made of one cell|an organism made of many cells|a virus|=>Bacteria.
What is a multicellular organism?|an organism made of many cells|an organism made of one cell|a virus|=>Humans.
What are tissues?|groups of similar cells that work together|single cells|organs|=>Muscle.
What are organs?|structures made of tissues that do a job|single cells|molecules|=>Heart.
What is an organ system?|a group of organs that work together|a single organ|a single tissue|=>Digestive.
What is classification?|grouping organisms by shared traits|naming pets|measuring size|=>Taxonomy.
What are the six kingdoms?|archaea, bacteria, protists, fungi, plants, animals|rocks, water, air|hot, cold, wet|=>Kingdoms.
What do plants do to get food?|make it by photosynthesis|eat animals|absorb it from soil|=>Producers.
What do animals do to get food?|consume other organisms|make it by photosynthesis|absorb it from soil|=>Consumers.
What do fungi do to get food?|absorb nutrients from dead or living matter|make it by photosynthesis|hunt|=>Decomposers.
Which is a vertebrate?|a frog|a spider|a worm|=>Has a backbone.
Which is an invertebrate?|a jellyfish|a fish|a bird|=>No backbone.
What are the five vertebrate groups?|fish, amphibians, reptiles, birds, mammals|insects and spiders|plants|=>Backbones.
Which vertebrates have fur or hair?|mammals|reptiles|birds|=>Warm-blooded.
Which vertebrates have feathers?|birds|reptiles|mammals|=>Fly.
How many legs do insects have?|6|8|10|=>Three body parts.
How many legs do spiders have?|8|6|10|=>Arachnids.
What is a dichotomous key?|a tool with paired choices used to identify organisms|a microscope|a graph|=>Two options.
What is photosynthesis?|the process plants use to make food from sunlight, water, and carbon dioxide|breathing|digestion|=>Sugar.
What do plants release in photosynthesis?|oxygen|carbon dioxide|nitrogen|=>Byproduct.
What is the job of roots?|take in water and anchor the plant|make food|make seeds|=>Support.
What is the job of leaves?|make food|take in water|make seeds|=>Photosynthesis.
What is the job of flowers?|make seeds for reproduction|take in water|make food|=>Reproduction.
What is a life cycle?|the stages of an organism's life|a food chain|a habitat|=>Growth.
`);

  A("5/science/energy", `
What is energy?|the ability to do work or cause change|a type of matter|a force|=>Makes things happen.
What is the law of conservation of energy?|energy is neither created nor destroyed, only changed|energy can be created|energy disappears|=>Total stays the same.
What is kinetic energy?|energy of motion|stored energy|heat|=>Moving.
What is potential energy?|stored energy|energy of motion|sound|=>Position.
Which has more kinetic energy: a fast car or a slow car of the same mass?|the fast car|the slow car|They are equal|=>Speed matters.
Which has more potential energy: a book on a high shelf or a book on the floor?|the book on the high shelf|the book on the floor|They are equal|=>Height matters.
What is elastic potential energy?|energy stored in stretched or squeezed objects|energy of motion|heat|=>Rubber band.
What is gravitational potential energy?|energy stored because of an object's height|energy of motion|heat|=>Higher is more.
What is chemical energy?|energy stored in food, fuel, and batteries|energy of motion|heat|=>Bonds.
What is thermal energy?|energy from the motion of particles (heat)|energy of light|energy of sound|=>Temperature.
What is radiant energy?|energy that travels as waves, like light|energy of motion|energy in food|=>Sunlight.
What is electrical energy?|energy from moving electric charges|energy of motion|heat|=>Circuits.
What is sound energy?|energy from vibrations|energy from light|heat|=>Waves.
What is mechanical energy?|the sum of kinetic and potential energy|chemical energy|heat|=>Motion + position.
What energy change happens when you eat food?|chemical to motion and heat|light to sound|heat to light|=>Body use.
What energy change happens in a lamp?|electrical to light and heat|light to electrical|sound to heat|=>Bulb.
What energy change happens in a microwave oven?|electrical to radiant to thermal|thermal to electrical|light to sound|=>Heating food.
What energy change happens in a radio?|electrical to sound|sound to electrical|light to heat|=>Speakers.
What energy change happens in a solar-powered calculator?|light to electrical|electrical to light|heat to sound|=>Solar cell.
What energy change happens in a roller coaster at the top of a hill?|potential energy changes to kinetic energy as it descends|kinetic to potential|light to sound|=>Falling.
What is a fossil fuel?|a fuel formed from ancient plants and animals|a fuel made from wind|a fuel made from the sun|=>Coal.
Why are fossil fuels nonrenewable?|they take millions of years to form|they regrow quickly|they come from the sun|=>Limited.
Which is a renewable source?|wind|coal|oil|=>Always blowing.
What is solar energy?|energy from the sun|energy from wind|energy from coal|=>Light and heat.
What is wind energy?|energy from moving air|energy from the sun|energy from water|=>Turbines.
What is hydroelectric energy?|energy from moving water|energy from wind|energy from coal|=>Dams.
What is geothermal energy?|heat from inside Earth|energy from the sun|energy from wind|=>Hot springs.
What is biomass?|energy from plants and animal waste|energy from wind|energy from the sun|=>Wood.
How does heat move from a hot object to a cold object?|by conduction, convection, or radiation|by magnets|by sound|=>Three ways.
What is conduction?|heat transfer through direct contact|heat transfer by moving fluids|heat transfer by waves|=>Touching.
What is convection?|heat transfer by moving fluids|heat transfer by contact|heat transfer by waves|=>Rising warm air.
What is radiation?|heat transfer by waves|heat transfer by contact|heat transfer by fluids|=>Sunlight.
Which is a good conductor of heat?|metal|wood|foam|=>Quick transfer.
Which is a good insulator of heat?|foam|metal|copper|=>Slows heat.
What happens to particles when something is heated?|they move faster|they move slower|they disappear|=>More energy.
What happens to particles when something is cooled?|they move slower|they move faster|they disappear|=>Less energy.
What is friction?|a force that resists motion between surfaces|a type of energy|a type of heat|=>Makes heat.
What does it mean to conserve energy?|use less energy|use more energy|waste energy|=>Save.
`);

  A("5/science/earth-surface", `
What are the main layers of Earth?|crust, mantle, outer core, inner core|sky, land, sea|top, middle, bottom|=>Structure.
What is the thinnest layer?|the crust|the mantle|the core|=>Surface.
What is the thickest layer?|the mantle|the crust|the outer core|=>Hot rock.
Which layer is liquid metal?|the outer core|the inner core|the crust|=>Magnetic field.
What are tectonic plates?|large slabs of Earth's crust that move slowly|clouds|ocean currents|=>Float on the mantle.
What is a convergent boundary?|where plates move toward each other|where plates move apart|where plates slide past|=>Collision.
What is a divergent boundary?|where plates move apart|where plates move together|where plates slide past|=>New crust.
What is a transform boundary?|where plates slide past each other|where plates move apart|where plates collide|=>San Andreas.
What can happen at a convergent boundary?|mountains and volcanoes form|the ocean widens|nothing|=>Himalayas.
What can happen at a divergent boundary?|rifts and mid-ocean ridges form|mountains form|nothing|=>New crust.
What causes earthquakes?|sudden movement of rock along faults|wind|tides|=>Energy release.
What is a fault?|a crack in Earth's crust where movement occurs|a mountain|a valley|=>Earthquake zones.
What is the focus of an earthquake?|the point underground where it starts|the point on the surface|a type of wave|=>Origin.
What is the epicenter?|the point on the surface directly above the focus|the point underground|a fault|=>Surface point.
What tool measures earthquakes?|seismograph|thermometer|barometer|=>Detects waves.
What causes volcanoes?|magma rising to the surface|wind|tides|=>Pressure.
What is magma?|melted rock underground|melted rock on the surface|a type of sediment|=>Underground.
What is lava?|melted rock that reaches the surface|melted rock underground|a type of sediment|=>Surface.
What is the Ring of Fire?|an area around the Pacific with many volcanoes and earthquakes|a type of rock|a type of tide|=>Plate boundaries.
What are the three rock types?|igneous, sedimentary, metamorphic|hard, soft, wet|red, gray, brown|=>Classes.
How does igneous rock form?|from cooled magma or lava|from sediment|from heat and pressure|=>Cooling.
How does sedimentary rock form?|from layers of sediment pressed together|from cooling lava|from heat and pressure|=>Layers.
How does metamorphic rock form?|from rock changed by heat and pressure|from cooled lava|from layers of sand|=>Changed.
Which is metamorphic?|marble|sandstone|granite|=>From limestone.
What is the rock cycle?|the continuous change of rocks from one type to another|the water cycle|the life cycle|=>Recycling rocks.
What is weathering?|the breaking down of rock into smaller pieces|moving sediment|building mountains|=>Wind and water.
What is erosion?|the movement of weathered material|the breaking down of rock|the formation of rock|=>Carried away.
What is deposition?|the laying down of eroded material|the breaking down of rock|melting|=>Delta.
What is a delta?|land formed where a river deposits sediment at its mouth|a mountain|a lake|=>Mississippi.
What is a glacier?|a huge, slow-moving mass of ice|a river|a lake|=>Carves valleys.
What is a canyon?|a deep valley with steep sides|a hill|a plain|=>Grand Canyon.
What is a fossil?|the preserved remains or traces of ancient life|a living organism|a mineral|=>Found in sedimentary rock.
What is the law of superposition?|in undisturbed layers, the oldest are at the bottom|the oldest are on top|layers are random|=>Stacking.
What is soil?|loose weathered rock mixed with humus|solid rock|water|=>Plant home.
What is a mineral?|a nonliving solid with a definite structure|a living thing|a liquid|=>Quartz.
How are mountains formed?|plate collisions fold and lift the crust|wind builds them|rain builds them|=>Tectonics.
What is a landslide?|the rapid downhill movement of rock and soil|slow water flow|wind|=>Gravity.
`);

  A("5/advanced/argument", `
What is the purpose of an argument?|to convince readers of a claim using reasons and evidence|to tell a story|to list facts|=>Persuade.
What is a thesis statement?|a sentence that states the main claim|a quote|a title|=>Controlling idea.
What is a counterargument?|a point made by the opposing side|your main claim|your evidence|=>Other view.
Why should an argument include a counterargument?|it shows you considered other views|it weakens your claim|it fills space|=>Credibility.
What is a rebuttal?|your response to a counterargument|your claim|your hook|=>Answer.
What are 'sources'?|where your evidence comes from|your opinions|your title|=>Books, websites.
Which source is most reliable for health facts?|a doctor's association website|a rumor|an anonymous post|=>Experts.
Which is a strong claim?|Our school should start later because teens need more sleep.|Mornings are early.|I like sleep.|=>Claim plus reason.
Which is a weak claim?|Sleep is nice.|Our school should start later because teens need more sleep.|Later start times improve grades.|=>No stance.
Which is strong evidence?|A study found students with more sleep scored higher.|I know someone who sleeps a lot.|Everyone says so.|=>Study.
What is an anecdote?|a short personal story|a statistic|a study|=>Illustration.
What is a statistic?|a number used as evidence|an opinion|a quote|=>Data.
What is an expert opinion?|a statement from someone with knowledge on the topic|a rumor|a guess|=>Authority.
What is the 'call to action'?|a closing sentence urging the reader to do something|a title|a statistic|=>Final push.
Which sentence is a call to action?|Please vote for a longer recess.|Recess is outside.|Students play.|=>Urges.
What is emotional appeal?|persuasion that stirs feelings|persuasion with facts|persuasion with experts|=>Pathos.
What is logical appeal?|persuasion with facts and reasoning|persuasion with feelings|persuasion with fame|=>Logos.
What is credibility appeal?|persuasion by showing trustworthiness|persuasion with data|persuasion with fear|=>Ethos.
What is a loaded word?|a word that carries strong emotion|a neutral word|a long word|=>Slants.
Which phrase is more loaded?|a terrible disaster|an unfortunate event|a situation|=>Strong emotion.
What is a fact?|a statement that can be verified|an opinion|a guess|=>Provable.
What is an opinion?|a belief or feeling|a verified statement|a number|=>Personal.
Which is an opinion?|Dogs make better pets than cats.|Dogs are mammals.|Cats have whiskers.|=>Judgment.
What is a hasty generalization?|a conclusion from too little evidence|a careful conclusion|a fact|=>Small sample.
What is an ad hominem attack?|attacking the person instead of the argument|attacking the claim|citing evidence|=>Unfair.
What is a bandwagon appeal?|saying something is right because everyone does it|giving evidence|citing experts|=>Crowd.
What is a false dilemma?|offering only two choices when there are more|offering many choices|a fact|=>Either-or.
What is a straw man?|misrepresenting an opponent's argument to attack it|citing evidence|using data|=>Fake version.
What does 'persuasive' mean?|able to convince|boring|silly|=>Convincing.
What is a debate?|a structured discussion between opposing sides|a casual chat|a story|=>Rules.
What is a moderator?|a person who leads a debate and keeps order|a debater|a judge only|=>Neutral.
What makes a debater credible?|using accurate evidence and respectful language|loud talking|name-calling|=>Trust.
How should you respond to an opposing view?|politely and with evidence|with insults|by ignoring it|=>Respect.
What is the best order for an argument?|introduction with claim, reasons with evidence, counterargument, conclusion|conclusion first|only evidence|=>Structure.
What is a transition for adding a reason?|furthermore|however|although|=>Adds.
What is a transition for contrast?|on the other hand|furthermore|also|=>Contrast.
What does 'audience' mean in an argument?|the people you want to convince|the writer|the title|=>Target.
How does knowing your audience help?|you choose evidence and words that fit them|it doesn't|you hide your claim|=>Tailor.
What is a formal tone?|serious and polished|casual and slangy|silly|=>Argument essays.
What is persuasive writing?|writing meant to convince the reader|writing to tell a story|writing to describe|=>Argument.
What is a sample size?|the number of people or items in a study|a type of graph|a type of claim|=>Larger is better.
Why is a bigger sample better?|it gives more reliable evidence|it is cheaper|it is faster|=>Reliability.
What is a biased survey question?|one worded to push people toward an answer|one that is neutral|one that is short|=>Loaded.
`);

  A("5/advanced/literary-analysis", `
What is theme?|the central message of a text|the setting|the plot|=>A complete idea.
What is a symbol?|an object that stands for a bigger idea|a rhyme|a character|=>Dove = peace.
What might a bridge symbolize?|connection or a transition|danger only|a food|=>Crossing.
What might a mirror symbolize?|self-reflection|a storm|a gift|=>Looking inward.
What might a river symbolize?|the passing of time or a journey|a wall|a cage|=>Flow.
What might a closed door symbolize?|a barrier or a secret|a gift|a party|=>Obstacle.
What is a motif?|a repeated image or idea in a text|a rhyme|a character|=>Pattern.
What is characterization?|how an author reveals a character|the setting|the plot|=>Actions, words, thoughts.
What is direct characterization?|the narrator states what the character is like|the reader infers|the title|=>She was kind.
What is indirect characterization?|the reader infers traits from actions and words|the narrator states traits|the title|=>Show.
What is a character's motivation?|the reason a character acts|the setting|the title|=>Why.
What is an internal conflict?|a struggle inside a character|a fight between characters|a storm|=>Self.
What is an external conflict?|a struggle with an outside force|a struggle inside|a poem|=>Others.
What is the climax?|the turning point or most intense moment|the introduction|the ending|=>Peak.
What is the resolution?|how the conflict ends|the introduction|the theme|=>Ending.
What is foreshadowing?|hints about what will happen later|a flashback|a rhyme|=>Clues.
What is irony?|a contrast between expectation and reality|a rhyme|a type of symbol|=>Surprise.
What is imagery?|language that appeals to the senses|a rhyme|a symbol|=>Sights and sounds.
What is mood?|the feeling the text creates in the reader|the author's attitude|the setting|=>Atmosphere.
What is tone?|the author's attitude toward the subject|the reader's feelings|the setting|=>Voice.
What is point of view?|who tells the story|the plot|the setting|=>Narrator.
What is first person?|the narrator is a character using I|the narrator uses he or she|the narrator uses you|=>I.
What is third-person limited?|the narrator knows one character's thoughts|the narrator knows all thoughts|the narrator is I|=>One mind.
What is third-person omniscient?|the narrator knows all characters' thoughts|the narrator knows one|the narrator is I|=>All-knowing.
What is dialogue?|characters' spoken words|the setting|the plot|=>Reveals character.
What is a flashback?|a scene that goes back in time|a hint about the future|a rhyme|=>Past.
What is an allegory?|a story where characters and events stand for deeper ideas|a poem|a biography|=>Animal Farm.
What is a theme of 'The Boy Who Cried Wolf'?|liars are not believed even when telling the truth|wolves are friendly|never watch sheep|=>Honesty.
What is a theme of 'The Tortoise and the Hare'?|slow and steady wins the race|fast always wins|never race|=>Perseverance.
What is a theme of 'The Ant and the Grasshopper'?|prepare for the future|play all summer|never share|=>Planning.
What does 'cite evidence' mean?|point to text details that support your idea|give your opinion|summarize|=>Proof.
What makes strong evidence?|a specific detail that directly supports your claim|any sentence|a title|=>Relevant.
How do you compare two characters?|tell how they are alike and different using details|summarize|find the setting|=>Compare/contrast.
How do you compare two stories?|look at theme, characters, setting, and plot|count pages|look at covers|=>Analysis.
What does 'analyze' mean?|break something into parts to understand how they work|memorize|skim|=>Close reading.
What is a narrator's reliability?|whether the reader can trust the narrator|the narrator's age|the narrator's name|=>Unreliable narrators mislead.
What is suspense?|tension about what will happen next|the setting|the theme|=>Page-turning.
What is a plot twist?|an unexpected turn|the setting|the rhyme|=>Surprise.
What is a flat character?|a simple character with few traits|a complex character|the narrator|=>One-dimensional.
What is a round character?|a complex character with many traits|a simple character|a minor character|=>Realistic.
`);

  A("5/english/communication", `
What does 'collaborate' mean?|work together toward a goal|work alone|argue|=>Teamwork.
What is a group norm?|an agreed-upon rule for how the group works|a joke|a topic|=>Expectations.
What is consensus?|general agreement|a vote|an argument|=>Agree.
What is a facilitator?|the person who keeps a discussion on track|the loudest speaker|a judge|=>Leader.
What is a note-taker?|the group member who records ideas|a speaker|a timer|=>Role.
What is a timekeeper?|the group member who watches the clock|a speaker|a judge|=>Role.
Which is a respectful way to disagree?|I see it differently because...|You're wrong.|That's dumb.|=>Polite.
Which is a respectful way to agree?|I agree with you because...|Whatever.|Boring.|=>Add a reason.
How can you build on someone's idea?|add 'and' with a related idea|repeat it|ignore it|=>Extend.
What is paraphrasing in a discussion?|restating what someone said in your own words|copying them|ignoring them|=>Show you listened.
What is a clarifying question?|a question that helps you understand better|a question that changes the topic|a joke|=>Could you explain?
Which is a clarifying question?|Can you tell me more about that?|Who cares?|That's boring.|=>Polite.
What does active listening include?|eye contact, nodding, and thinking about what is said|looking away|talking over|=>Engage.
What should you do while a presenter speaks?|listen and save questions for later|talk to friends|leave|=>Respect.
What is a presentation?|sharing information with an audience|a quiet reading|a test|=>Speaking.
How should you prepare for a presentation?|plan, practice, and check your visuals|skip it|improvise only|=>Rehearse.
What makes a visual aid effective?|clear, simple, and relevant|crowded and tiny|unrelated|=>Support.
How many words should be on a slide?|only a few key words|every word you will say|none|=>Brief.
What is multimedia?|using text, images, sound, and video together|only text|only pictures|=>Mixed.
How should you speak in a presentation?|clearly, at a good pace, and loud enough|fast and quiet|monotone|=>Delivery.
What is eye contact?|looking at your audience|looking at your notes only|looking at the floor|=>Connection.
What body language shows confidence?|standing tall and relaxed|slouching|hiding|=>Posture.
What should you do if you forget what to say?|pause, check your notes, and continue|run away|apologize endlessly|=>Recover.
What is a good way to open a presentation?|state your topic and grab attention|apologize|mumble|=>Hook.
What is a good way to close a presentation?|summarize and thank the audience|just stop|walk away|=>Finish.
What is Q&A?|a time for the audience to ask questions|a type of test|a type of slide|=>Questions and answers.
How should you answer a question you don't know?|say you are not sure and offer to find out|make something up|ignore it|=>Honesty.
What is constructive feedback?|specific comments that help someone improve|only praise|only criticism|=>Helpful.
Which is constructive feedback?|Your voice was clear, and adding a picture could help.|This was bad.|I did not like it.|=>Specific.
What is a speech?|a formal talk to an audience|a poem|a spelling test|=>Public speaking.
What is a debate?|a structured discussion where sides argue|a casual chat|a story|=>Rules.
What is an interview?|asking questions to gather information|writing a story|drawing|=>Primary source.
Which interview question is better?|How did you become a scientist?|Do you like science?|Yes or no?|=>Open-ended.
What is tone of voice?|the attitude your voice shows|the volume only|the topic|=>Sounds.
What does 'enunciate' mean?|pronounce words clearly|talk fast|whisper|=>Clear speech.
What does 'rehearse' mean?|practice|forget|skip|=>Prepare.
`);

  A("5/english/informational", `
What is the author's purpose?|why the author wrote the text|the setting|the plot|=>Inform, persuade, entertain.
What is a central idea?|the most important point of a text|a small detail|the title|=>Big idea.
How do you find the central idea?|look for ideas repeated throughout the text|read only the first word|count commas|=>Pattern.
What are key details?|the facts that support the central idea|the title|the cover|=>Support.
What is a summary?|a brief statement of the main ideas in your own words|a copy|an opinion|=>Short.
What is a sidebar?|a box with extra information|the title|the conclusion|=>Bonus facts.
What is an infographic?|a visual that presents information with pictures and text|a story|a poem|=>Data art.
What is a graph for?|showing data visually|telling a story|rhyming|=>Numbers.
What is a table for?|organizing facts in rows and columns|telling a story|rhyming|=>Comparisons.
What is a diagram for?|showing parts or steps with labels|telling a story|rhyming|=>How things work.
What is a timeline for?|showing events in order|showing maps|rhyming|=>Chronology.
What is a map for?|showing places|telling a story|rhyming|=>Locations.
What does a glossary do?|defines key words|lists chapters|shows maps|=>Back of book.
What does an index do?|lists topics alphabetically with page numbers|defines words|summarizes|=>Find topics.
What is a primary source?|a firsthand account|a summary by someone else|a textbook|=>Diary.
What is a secondary source?|a source that interprets primary sources|a diary|a letter|=>Textbook.
What is point of view in nonfiction?|the author's perspective or attitude|the setting|the plot|=>Stance.
Why can two accounts of the same event differ?|different perspectives and details|the event changed|they are always the same|=>Perspective.
What is bias?|a one-sided slant|neutrality|a fact|=>Unfair preference.
How can you tell if an author is biased?|loaded words and missing viewpoints|many sources|balanced evidence|=>Look at balance.
What is an inference?|a conclusion using clues and what you know|a direct quote|a guess|=>Reasoned.
What is a text structure?|how a text is organized|the title|the cover|=>Pattern.
Which structure explains 'how a volcano erupts' in steps?|sequence|compare and contrast|description|=>Steps.
Which structure explains 'why the ice cap melts'?|cause and effect|sequence|description|=>Reasons.
Which structure explains 'how frogs and toads differ'?|compare and contrast|sequence|cause and effect|=>Alike/different.
Which structure explains 'how to reduce litter in a park'?|problem and solution|description|sequence|=>Fixes.
What is a transition word that shows cause?|because|however|first|=>Reason.
What is a transition word that shows contrast?|however|because|first|=>Different.
What does 'paraphrase' mean?|restate in your own words|copy|summarize|=>Rewrite.
What does 'skim' mean?|read quickly for the main idea|read every word|skip|=>Overview.
What does 'scan' mean?|look for specific information|read every word|skip|=>Find a fact.
What is a hyperlink?|a clickable link to another page|a type of image|a type of font|=>Digital text feature.
What is a headline?|a title of a news article|a conclusion|a caption|=>Hook.
What is an editorial?|an opinion piece in a newspaper|a news report|a recipe|=>Persuades.
What is a news report?|a factual account of an event|an opinion|a story|=>Objective.
`);

  A("5/english/writing", `
What is a hook?|an interesting opening that grabs attention|the conclusion|the title|=>Opener.
What is a topic sentence?|a sentence that states a paragraph's main idea|the last sentence|a question|=>Opens.
What are supporting details?|facts and examples that explain the main idea|the title|the conclusion|=>Support.
What is a concluding sentence?|a sentence that wraps up a paragraph|the first sentence|a detail|=>Closes.
What is a transition?|a word or phrase that connects ideas|a thesis|a quote|=>However, next.
Which transition shows sequence?|first|but|because|=>Order.
Which transition shows addition?|also|first|however|=>More.
Which transition shows contrast?|however|also|first|=>Different.
Which transition shows cause?|because|then|meanwhile|=>Reason.
What is a claim?|a statement of your position|a fact|a title|=>Argument.
What is evidence?|facts, examples, or quotes that support your reasons|an opinion|a title|=>Proof.
What is a counterclaim?|an opposing viewpoint|your main claim|your evidence|=>Other side.
What is narrative writing?|writing that tells a story|writing that explains|writing that argues|=>Events.
What is informative writing?|writing that teaches facts|writing that tells a story|writing that argues|=>Explains.
What is opinion writing?|writing that states a position and supports it|writing that tells a story|writing that lists|=>Persuades.
What are the parts of a narrative?|beginning, middle, and end|title and author|chapters only|=>Structure.
What is dialogue?|characters' spoken words in quotation marks|the setting|the plot|=>Speech.
How do you punctuate dialogue?|use quotation marks around the spoken words|use parentheses|use colons|=>"Hello," said Mia.
What is sensory detail?|description that appeals to the senses|a fact|a quote|=>Vivid.
What is 'show, don't tell'?|use actions and details to reveal feelings|only state feelings|avoid details|=>Descriptive.
What is a strong verb?|a precise verb like dashed instead of went|a weak verb|a noun|=>Vivid.
What is a simile?|a comparison using like or as|a comparison without like|an exaggeration|=>Figurative.
What is parallel structure?|using the same form for items in a list|using different forms|long sentences|=>Run, jump, swim.
What is a run-on sentence?|two sentences joined without correct punctuation|a short sentence|a fragment|=>Fix it.
What is a sentence fragment?|an incomplete sentence|a long sentence|a question|=>Missing a part.
What is a complete sentence?|a group of words with a subject and a predicate|a phrase|a word|=>Complete thought.
What is revising?|improving ideas, organization, and word choice|fixing only spelling|publishing|=>Big changes.
What is editing?|fixing spelling, grammar, and punctuation|brainstorming|drafting|=>Conventions.
What is proofreading?|checking the final copy for mistakes|brainstorming|planning|=>Last check.
What is a graphic organizer?|a visual tool for planning writing|a final copy|a thesis|=>Webs and charts.
What is a rubric?|a scoring guide|a title|a draft|=>Expectations.
What is peer review?|classmates give feedback on your writing|you grade yourself|the teacher publishes|=>Feedback.
What is audience?|the readers you write for|the writer|the title|=>Tailor.
What is purpose?|the reason for writing|the audience|the title|=>Inform, persuade, entertain.
What is a formal tone?|a serious, polished style|a casual style|slang|=>Essays.
What is a friendly letter's greeting?|Dear Grandma,|Sincerely,|The End|=>Opening.
What is a business letter's closing?|Sincerely,|Dear Sir,|Once upon a time|=>Formal ending.
What is a quotation?|the exact words from a source in quotation marks|a paraphrase|a summary|=>Cite it.
What is plagiarism?|using someone else's words as your own|quoting with credit|summarizing with credit|=>Dishonest.
`);

  A("5/science/matter", `
What is an element?|a pure substance made of one kind of atom|a mixture|a compound|=>Oxygen.
What is a compound?|a substance made of two or more elements chemically combined|a mixture|an element|=>Water.
What is a molecule?|two or more atoms bonded together|a single atom|a mixture|=>H₂O.
What are the three particles in an atom?|protons, neutrons, and electrons|cells, tissues, organs|molecules, compounds, mixtures|=>Subatomic.
Where is the nucleus of an atom?|in the center|outside|nowhere|=>Core.
What charge does a proton have?|positive|negative|neutral|=>+.
What charge does an electron have?|negative|positive|neutral|=>−.
What charge does a neutron have?|neutral|positive|negative|=>0.
What does the periodic table show?|the elements organized by properties|the days of the year|a map|=>Chart.
What is the symbol for oxygen?|O|Ox|Og|=>O.
What is the symbol for hydrogen?|H|Hy|Hg|=>H.
What is the symbol for carbon?|C|Ca|Co|=>C.
What is the symbol for gold?|Au|Go|Gd|=>From Latin aurum.
What is the symbol for iron?|Fe|Ir|I|=>From Latin ferrum.
What is the formula for water?|H₂O|CO₂|O₂|=>2 H, 1 O.
What is the formula for carbon dioxide?|CO₂|H₂O|O₂|=>1 C, 2 O.
What is a mixture?|substances combined that are not chemically bonded|a compound|an element|=>Can be separated.
Which is a mixture?|trail mix|pure water|oxygen|=>Parts keep properties.
What is a solution?|a mixture in which one substance dissolves evenly in another|a heterogeneous mixture|an element|=>Sugar water.
What is a solute?|the substance that dissolves|the substance that does the dissolving|a mixture|=>Sugar.
What is a solvent?|the substance that does the dissolving|the substance that dissolves|a solid|=>Water.
Which is a physical change?|ice melting|wood burning|iron rusting|=>Same substance.
Which is a chemical change?|a cake baking|paper being cut|water freezing|=>New substance.
What are signs of a chemical change?|color change, gas bubbles, light or heat, a new odor|change in shape|change in size|=>Evidence.
What is the law of conservation of mass?|mass is not created or destroyed in a chemical reaction|mass disappears|mass doubles|=>Total stays.
What is density?|how much mass is in a given volume|how big something is|how it looks|=>Mass ÷ volume.
Which will sink in water?|an object denser than water|an object less dense than water|a leaf|=>Dense.
Which will float in water?|an object less dense than water|an object denser than water|a rock|=>Light.
How can you separate sand from salt water?|filter out the sand, then evaporate the water|use a magnet|freeze it|=>Two steps.
How can you separate iron filings from sand?|use a magnet|use a filter|use water|=>Magnetic.
What is melting?|a solid changing to a liquid|a liquid changing to a gas|a gas changing to a liquid|=>Heat added.
What is condensation?|a gas changing to a liquid|a liquid changing to a gas|a solid changing to a liquid|=>Heat removed.
What is sublimation?|a solid changing directly into a gas|a liquid changing into a gas|a gas changing into a liquid|=>Dry ice.
What is malleability?|the ability to be hammered into thin sheets|the ability to dissolve|the ability to burn|=>Gold.
What is conductivity?|how well a material conducts heat or electricity|its color|its shape|=>Metals conduct.
What is solubility?|how well a substance dissolves|how hard it is|how dense it is|=>In a solvent.
`);

  A("5/science/human-impact", `
What is pollution?|harmful materials added to the environment|clean air|fresh water|=>Contaminants.
What causes air pollution?|burning fossil fuels, factories, and vehicles|wind|rain|=>Human activity.
What causes water pollution?|trash, chemicals, and runoff|rain|clouds|=>Contaminants.
What is runoff?|water that flows over land into streams and rivers|water in the ground|water vapor|=>Carries pollutants.
What is a watershed?|land that drains into a river, lake, or bay|a type of building|a type of rain|=>Drainage area.
What is the Chesapeake Bay watershed?|the land that drains into the Chesapeake Bay|the bay itself|the Atlantic Ocean|=>Includes Virginia.
What is eutrophication?|an overgrowth of algae caused by extra nutrients|a type of erosion|a type of rain|=>Fertilizer runoff.
What is a dead zone?|an area of water with too little oxygen for life|a desert|a glacier|=>Algae die and decay.
How do oysters help the Bay?|they filter water|they pollute|they eat fish|=>Natural filters.
What is a riparian buffer?|a strip of plants along a stream that filters runoff|a type of fish|a type of dam|=>Natural filter.
What is deforestation?|the clearing of forests|planting trees|a type of biome|=>Habitat loss.
What is a habitat?|the place where an organism lives|a type of food|weather|=>Home.
What is habitat loss?|the destruction of places where organisms live|habitat growth|a type of food|=>Threat.
What is an endangered species?|a species at risk of extinction|an extinct species|a common species|=>Protected.
What is an invasive species?|a non-native species that harms an ecosystem|a native species|a rare species|=>Kudzu.
What is conservation?|protecting and wisely using natural resources|using more|wasting|=>Save.
What are the three Rs?|reduce, reuse, recycle|read, write, run|rinse, repeat, rest|=>Waste reduction.
What does 'renewable' mean?|can be replaced naturally|runs out|is a mineral|=>Sun and wind.
What does 'nonrenewable' mean?|cannot be replaced quickly|regrows|is wind|=>Coal and oil.
What is the greenhouse effect?|heat trapped by gases in the atmosphere|cooling of Earth|a type of weather|=>Natural process.
What gases are greenhouse gases?|carbon dioxide and methane|oxygen and nitrogen|helium|=>Trap heat.
What is global warming?|a long-term rise in Earth's average temperature|a heat wave|a season|=>Climate change.
What is acid rain?|rain made acidic by air pollution|rain with minerals|snow|=>Harms trees.
What is smog?|a mix of smoke and fog that pollutes air|a type of cloud|rain|=>City air.
What is a landfill?|a place where trash is buried|a type of lake|a forest|=>Waste site.
What is compost?|decayed organic matter used to enrich soil|a plastic|a metal|=>From scraps.
What is erosion?|the movement of soil by wind or water|building soil|growing plants|=>Soil loss.
How can farmers reduce erosion?|plant cover crops and use terraces|remove plants|plow downhill|=>Soil protection.
What is a wetland?|an area covered by water part of the year|a desert|a mountain|=>Filters water.
Why are wetlands important?|they filter water and protect against floods|they are always dry|they have no animals|=>Services.
What is sustainability?|meeting present needs without harming future generations|using everything now|ignoring the future|=>Long-term.
What can you do to conserve water?|turn off the tap and fix leaks|leave taps on|water sidewalks|=>Save water.
What can you do to conserve electricity?|turn off lights when leaving a room|leave lights on|open the fridge often|=>Save energy.
`);

  A("5/english/poetry", `
What is a stanza?|a group of lines in a poem|a rhyme|a title|=>Like a paragraph.
What is rhyme?|words with the same ending sound|words that start the same|words with the same meaning|=>Cat/hat.
What is a rhyme scheme?|the pattern of rhymes at the ends of lines|the title|the speaker|=>ABAB.
What is free verse?|poetry without a set rhyme or rhythm|poetry with strict rhyme|prose|=>Free.
What is a haiku?|a three-line poem with 5, 7, 5 syllables|a rhyming couplet|a story|=>Nature.
What is a limerick?|a funny five-line poem|a sad poem|a story|=>AABBA.
What is a couplet?|two rhyming lines|four lines|a title|=>AA.
What is a quatrain?|a four-line stanza|a two-line stanza|a title|=>Four.
What is a narrative poem?|a poem that tells a story|a poem about nature|a short poem|=>Events.
What is a lyric poem?|a poem that expresses feelings|a long story|a play|=>Musical.
What is an ode?|a poem that praises something|a poem that mocks|a story|=>Praise.
What is a cinquain?|a five-line poem|a three-line poem|a four-line poem|=>Five.
What is imagery?|words that appeal to the senses|a rhyme|a title|=>Pictures.
What is a simile?|a comparison using like or as|a direct comparison|an exaggeration|=>As busy as a bee.
What is a metaphor?|a direct comparison without like or as|a comparison using like|an exaggeration|=>Time is money.
What is personification?|giving human traits to nonhuman things|a rhyme|a comparison|=>The sun smiled.
What is alliteration?|repeating beginning sounds|repeating vowel sounds|rhyme|=>Big brown bear.
What is onomatopoeia?|words that imitate sounds|a comparison|a rhyme|=>Buzz.
What is repetition?|using a word or phrase more than once|a rhyme|a comparison|=>Emphasis.
What is a refrain?|a line repeated in a poem or song|a stanza|a title|=>Chorus.
What is the speaker of a poem?|the voice that talks in the poem|the poet always|the reader|=>Persona.
What is the theme of a poem?|its message or big idea|its rhyme|its title|=>Meaning.
What is a script?|the written text of a play|a poem|a novel|=>Dialogue and directions.
What are stage directions?|instructions in a script about actions and setting|the dialogue|the title|=>Parentheses.
What is a monologue?|a long speech by one character|a conversation|a stage direction|=>One speaker.
What is a scene?|a part of a play set in one place and time|the whole play|a poem|=>Divisions.
What is an act?|a major section of a play|a line|a prop|=>Contains scenes.
What are props?|objects used on stage|actors|stage directions|=>Properties.
What is a cast?|the characters or actors in a play|the audience|the script|=>People.
What does '(whispering)' tell an actor?|how to say the line|where to stand|when to leave|=>Delivery.
What is a comedy?|a funny play with a happy ending|a sad play|a poem|=>Humor.
What is a tragedy?|a serious play with a sad ending|a funny play|a poem|=>Sorrow.
How is a play different from a story?|a play is mostly dialogue and written to be performed|a play has no characters|a play has no conflict|=>Performance.
`);

  A("5/science/ocean", `
What is the continental shelf?|the shallow, gently sloping edge of a continent under the ocean|the deepest part of the ocean|a mountain|=>Near shore.
What is the abyssal plain?|the flat deep ocean floor|the shelf|a mountain|=>Deep.
What is an ocean trench?|a deep, narrow valley in the ocean floor|a shallow area|a beach|=>Deepest places.
What is a mid-ocean ridge?|an underwater mountain chain|a trench|a beach|=>Plates spread.
What is a seamount?|an underwater mountain|a trench|a beach|=>Volcanic.
What is salinity?|the amount of salt in water|temperature|depth|=>Salty.
What is a current?|a stream of water moving through the ocean|a wave|a tide|=>Flow.
What causes tides?|the gravity of the moon and sun|wind|currents|=>Pull.
What causes most waves?|wind|the moon|currents|=>Blowing over water.
What is a tsunami?|a giant wave caused by an underwater earthquake|a normal wave|a tide|=>Dangerous.
What is the intertidal zone?|the area between high and low tide|the deep sea|a desert|=>Wet and dry.
What is plankton?|tiny organisms that drift in water|large fish|plants|=>Base of the food web.
What is a producer in the ocean?|phytoplankton or algae|sharks|whales|=>Make food.
What is a coral reef?|an underwater ecosystem built by coral animals|a desert|a forest|=>Biodiversity.
What is a kelp forest?|a dense underwater forest of large algae|a coral reef|a desert|=>Habitat.
What is bioluminescence?|light made by living things|reflected sunlight|a type of wave|=>Deep-sea glow.
Which zone of the ocean receives sunlight?|the sunlight zone|the midnight zone|the abyss|=>Top layer.
What happens to pressure as you go deeper?|it increases|it decreases|it stays the same|=>Weight of water.
What happens to temperature as you go deeper?|it gets colder|it gets warmer|it stays the same|=>No sunlight.
What is aquaculture?|farming fish and other water organisms|fishing in the ocean|a type of tide|=>Fish farms.
What is overfishing?|catching fish faster than populations can recover|catching too few fish|fish farming|=>Depletes stocks.
What is an oil spill?|oil leaking into the water|a type of tide|a type of current|=>Harms wildlife.
What is ocean acidification?|the ocean becoming more acidic as it absorbs carbon dioxide|the ocean becoming saltier|a type of tide|=>Harms shells.
How can people protect the ocean?|reduce plastic use and avoid littering|dump trash|spill oil|=>Conservation.
What instrument maps the ocean floor?|sonar|telescope|thermometer|=>Sound.
What is a submersible?|a small underwater vehicle for exploring|a ship|a plane|=>Alvin.
What is an estuary?|a place where fresh and salt water mix|a desert|a glacier|=>Chesapeake Bay.
What is a salt marsh?|a coastal wetland flooded by tides|a desert|a forest|=>Nursery.
What is a food chain in the ocean?|phytoplankton → zooplankton → small fish → large fish|shark → fish → plankton|fish → shark → whale|=>Energy flow.
Which ocean is the largest?|Pacific|Atlantic|Indian|=>Biggest.
`);
})();
