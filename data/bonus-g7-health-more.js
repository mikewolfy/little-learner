/* Grade 7 Health & PE: more bonus questions (scenarios and true/false). */
(function () {
  const A = (u, t) => BONUS.add("7/health/" + u, t.split("\n").filter((x) => x.trim()).join("\n"));

  A("nutrition", `
True or false: Water is a nutrient.|True|False|=>One of the six.
True or false: Fiber helps digestion.|True|False|=>Whole grains and beans.
True or false: Fruit juice with added sugar is the best way to get fruit.|False|True|=>Whole fruit has more fiber.
True or false: Breakfast helps you focus at school.|True|False|=>Fuel for the brain.
True or false: You should eat only one food group.|False|True|=>Variety is needed.
True or false: A label's numbers are based on the serving size.|True|False|=>Check servings.
A label says 1 serving has 12 g of sugar. You eat 3 servings. How many grams of sugar?|36|12|15|=>12 × 3.
A label says 1 serving has 90 Calories. You eat 4 servings. How many Calories?|360|94|90|=>90 × 4.
A snack has 400 mg sodium per serving. You eat 2 servings. How much sodium?|800 mg|402 mg|200 mg|=>400 × 2.
Which is a good source of protein?|beans|candy|soda|=>Beans, fish, eggs.
Which is a good source of calcium?|milk|soda|apple juice|=>Dairy.
Which is a good source of fiber?|oatmeal and fruit|candy|soda|=>Whole grains.
Which is a good source of vitamin C?|oranges|butter|crackers|=>Citrus.
Which is a good source of healthy fats?|nuts and avocado|candy|soda|=>Unsaturated fats.
Which is a healthy breakfast?|whole-grain toast with egg and fruit|candy and soda|nothing|=>Balanced.
Which is a healthy snack?|carrot sticks with hummus|chips and soda|a candy bar|=>Veggies and protein.
Which is a healthy beverage choice?|water or low-fat milk|soda|energy drink|=>Hydration.
Which food has more added sugar?|cookies|plain yogurt|apples|=>Dessert foods.
Which label claim is most helpful to compare foods?|the Nutrition Facts panel|the ad on the front|the brand|=>Facts.
Which food safety step prevents cross-contamination?|using separate cutting boards for raw meat|using the same board|not washing|=>Safe handling.
Why do athletes need more Calories?|they use more energy|they sleep more|they eat less|=>Energy balance.
Why is variety important in food?|different foods provide different nutrients|all foods are the same|it is boring|=>Balanced diet.
Why should you limit sodium?|too much can raise blood pressure|it builds muscle|it is a vitamin|=>Heart health.
Why should you limit added sugar?|it can lead to tooth decay and weight gain|it builds bones|it is a mineral|=>Health.
Why is whole grain better than refined grain?|it keeps fiber and more nutrients|it has no fiber|it is sweeter|=>Healthier.
Why should you wash fruits and vegetables?|to remove dirt and germs|to add flavor|to cool them|=>Safe eating.
What is dehydration?|not having enough water in the body|drinking too much|a type of fruit|=>Drink water.
What is malnutrition?|not getting the right nutrients|eating too much only|a type of exercise|=>Poor nutrition.
What is an allergy?|a harmful immune reaction to a substance|a type of vitamin|a food group|=>Read labels.
What is a vegetarian?|a person who does not eat meat|a person who eats only meat|a person who eats no food|=>Plant-based diet.
What is a snack?|a small amount of food eaten between meals|a main meal|a drink|=>Choose wisely.
What is a portion?|the amount of food you choose to eat at one time|a label number|a vitamin|=>Differs from serving.
What is 'empty Calories'?|Calories with few nutrients|Calories with many nutrients|a vitamin|=>Candy, soda.
`);

  A("fitness", `
True or false: Teens should get at least 60 minutes of activity most days.|True|False|=>CDC guidance.
True or false: Stretching is best before muscles are warm.|False|True|=>Warm up first.
True or false: Aerobic exercise strengthens the heart.|True|False|=>Cardio.
True or false: Resting heart rate is measured when you are active.|False|True|=>At rest.
True or false: Drinking water is important during exercise.|True|False|=>Hydration.
True or false: Fitness comes from only one activity.|False|True|=>Variety helps.
A student jogs a mile in 12 minutes. This tests…|cardiorespiratory endurance|flexibility|muscular strength|=>Mile run.
A student does 25 push-ups. This tests…|muscular endurance|flexibility|speed|=>Repetitions.
A student reaches past her toes in a sit-and-reach test. This tests…|flexibility|speed|power|=>Range of motion.
A student lifts a heavy weight once. This tests…|muscular strength|flexibility|endurance|=>Max force.
Which activity improves balance?|standing on one foot|sitting|lying down|=>Skill-related.
Which activity improves agility?|ladder drills|sitting|reading|=>Change direction.
Which activity improves power?|jumping and throwing|walking slowly|stretching|=>Strength plus speed.
Which activity improves coordination?|dribbling a ball|sleeping|napping|=>Smooth movement.
Which activity builds bone strength?|jumping and weight-bearing exercise|sitting|swimming only|=>Impact.
Which is a moderate activity?|brisk walking|sprinting|resting|=>You can talk, not sing.
Which is a vigorous activity?|running|walking slowly|standing|=>Hard to talk.
Which part of FITT tells how often?|Frequency|Intensity|Type|=>Days per week.
Which part of FITT tells how hard?|Intensity|Time|Type|=>Effort level.
Which part of FITT tells how long?|Time|Frequency|Type|=>Minutes.
Which part of FITT tells what kind?|Type|Time|Intensity|=>Activity.
Why do you warm up?|to prepare muscles and prevent injury|to tire out|to waste time|=>Warm muscles.
Why do you cool down?|to slowly lower heart rate|to start exercise|to lift more|=>Gradual.
Why is stretching helpful?|it improves flexibility|it builds strength|it burns fat|=>Range of motion.
Why is sleep important for athletes?|the body repairs muscles during sleep|it hurts performance|it has no effect|=>Recovery.
Why track your heart rate?|to see how hard you are working|to find the weather|to measure height|=>Intensity.
Why does a healthy heart have a lower resting rate?|it pumps more blood with each beat|it is smaller|it is weaker|=>Efficient.
What is overtraining?|exercising too much without enough rest|exercising too little|a type of stretch|=>Injury risk.
What is a rest day?|a day to let the body recover|a day of intense exercise|a test|=>Rest is part of fitness.
What is progressive overload?|gradually increasing the workload over time|doing the same thing|stopping|=>Builds fitness.
What is a stitch (side cramp)?|a sharp pain in the side during exercise|a broken bone|a rash|=>Slow down and breathe.
`);

  A("healthy-habits", `
True or false: Germs can spread through touching shared surfaces.|True|False|=>Wash hands.
True or false: Antibiotics help with colds.|False|True|=>Colds are viruses.
True or false: Getting enough sleep helps the immune system.|True|False|=>Rest.
True or false: Sunscreen helps protect skin from sun damage.|True|False|=>UV rays.
True or false: Brushing teeth twice a day helps prevent cavities.|True|False|=>Dental care.
True or false: A fever is always a sign you should go to school.|False|True|=>Stay home.
A friend sneezes into their hand. What should they do after?|wash their hands|ignore it|shake hands|=>Prevent spread.
You wake up with a fever and sore throat. What should you do?|tell a parent and stay home|go to school|share drinks|=>Protect others.
You touch a doorknob in a public restroom. What should you do before eating?|wash your hands|nothing|lick your fingers|=>Handwashing.
Which is the best way to wash hands?|soap, water, and scrubbing for 20 seconds|a quick rinse|wiping on pants|=>Effective.
Which activity helps prevent the flu?|getting a flu shot|sharing cups|skipping sleep|=>Vaccines.
Which disease is caused by a virus?|the common cold|strep throat|athlete's foot|=>Viruses cause colds.
Which disease is caused by bacteria?|strep throat|the common cold|the flu|=>Needs antibiotics.
Which is a fungal infection?|athlete's foot|the flu|strep throat|=>Fungi.
Which is a way germs spread?|through the air by coughs and sneezes|only through water|only by animals|=>Several ways.
Which is a good bedtime habit?|a regular bedtime|screens in bed|caffeine at night|=>Routine.
Which helps keep skin healthy?|bathing and sun protection|never washing|tanning|=>Hygiene.
Which is a protective factor against illness?|vaccines|poor sleep|skipping handwashing|=>Prevention.
Why is it important to cover coughs and sneezes?|it stops droplets from spreading germs|it keeps you warm|it saves time|=>Elbow or tissue.
Why do people get vaccines?|to build immunity before getting sick|to cure illness|to avoid sleep|=>Prevention.
Why should you not share a toothbrush?|germs can spread|it is expensive|it is unhygienic only|=>Germs.
Why is regular exercise good for the immune system?|it helps the body fight illness|it hurts immunity|it has no effect|=>Healthy lifestyle.
Why do teens need more sleep than adults?|their bodies are growing and developing|they are lazy|they are older|=>Growth.
What is immunity?|the body's ability to resist a disease|a type of germ|a vaccine|=>Protection.
What is an epidemic?|a rapid spread of disease in a community|a single case|a vaccine|=>Outbreak.
What is a carrier?|a person who can spread germs without feeling sick|a vaccine|a doctor|=>Careful.
What is an allergy?|an overreaction of the immune system to a harmless substance|a germ|a vaccine|=>Pollen.
What is asthma?|a chronic condition that affects the airways|a cold|a cut|=>Non-communicable.
What is diabetes?|a chronic condition involving blood sugar|a cold|a broken arm|=>Managed with care.
What is a screening test?|a test to catch a disease early|a vaccine|a medicine|=>Checkups.
What is a booster shot?|an extra vaccine dose to maintain immunity|a type of medicine|a cold|=>Keeps protection.
What is the best way to prevent most infections?|wash hands, get vaccinated, and sleep|ignore symptoms|share drinks|=>Healthy habits.
`);

  A("mental-health", `
True or false: Everyone feels stress sometimes.|True|False|=>Normal.
True or false: Asking for help is a sign of strength.|True|False|=>Healthy.
True or false: Mental health matters as much as physical health.|True|False|=>Both matter.
True or false: Exercise can improve mood.|True|False|=>Endorphins.
True or false: You should ignore feelings of hopelessness that last for weeks.|False|True|=>Tell a trusted adult.
True or false: 988 is a free number for mental health crises.|True|False|=>24/7.
A student feels nervous before a test. Which is a healthy coping strategy?|deep breathing and studying|skipping school|yelling|=>Calm and prepare.
A student feels angry after an argument. Which is a healthy response?|take a walk and cool down|hit a wall|insult a friend|=>Cool off.
A friend says they feel hopeless. What should you do?|listen and tell a trusted adult|ignore it|laugh|=>Get help.
A classmate is sitting alone and looks sad. What could you do?|invite them to join you|ignore them|tease them|=>Kindness.
You feel overwhelmed by homework. What is a good first step?|make a plan and take breaks|give up|panic|=>Manage time.
Which is a sign of stress in the body?|headache or stomachache|better sleep|more energy|=>Physical signs.
Which is a sign of stress in behavior?|snapping at others|calm talking|laughing|=>Mood changes.
Which helps build resilience?|learning from mistakes|giving up|blaming others|=>Growth.
Which is an example of a growth mindset?|I can get better with practice.|I'm just bad at this.|It's too hard.|=>Keep trying.
Which is an example of a fixed mindset?|I'm not good at math and never will be.|I can learn this.|Mistakes help me learn.|=>Limits growth.
Which activity can help you relax?|listening to music|arguing|skipping meals|=>Calming.
Which helps you handle stress?|getting enough sleep|skipping sleep|ignoring feelings|=>Rest.
Why can sleep affect mood?|lack of sleep can make you irritable|it has no effect|it improves anger|=>Rest.
Why is it good to name your feelings?|it helps you understand and manage them|it makes them worse|it is silly|=>Awareness.
Why do people use journaling?|to express thoughts and feelings|to cheat|to waste time|=>Processing.
Why is talking to someone helpful?|sharing can lessen stress|it adds stress|it is useless|=>Support.
What is a panic attack?|a sudden rush of intense fear|a type of exercise|a game|=>Tell an adult.
What is grief?|sadness after losing someone or something important|a type of exercise|a game|=>Normal.
What is bullying's effect on mental health?|it can cause stress and sadness|it improves mood|it has no effect|=>Tell an adult.
What is cyberbullying's effect?|it can harm self-esteem and mood|it improves mood|it has no effect|=>Report it.
What is body image?|how you see and feel about your own body|your height|your weight|=>Healthy views.
What is perfectionism?|expecting yourself to do everything flawlessly|doing your best|being relaxed|=>Can add stress.
What is mindfulness?|paying attention to the present moment|forgetting everything|sleeping|=>Calming.
What is a school counselor's job?|to help students with feelings and problems|to teach math|to coach|=>Safe support.
What is a mental health professional?|a trained person such as a counselor or psychologist|a stranger|a classmate|=>Help.
`);

  A("substance-safety", `
True or false: Vaping is harmless for teens.|False|True|=>Nicotine harms the brain.
True or false: Underage drinking is illegal.|True|False|=>Yes.
True or false: You should never share prescription medicine.|True|False|=>Only for the patient.
True or false: Nicotine is addictive.|True|False|=>Yes.
True or false: Fentanyl can be deadly in very small amounts.|True|False|=>Be careful with pills.
True or false: Refusal skills can help you say no.|True|False|=>Practice them.
A friend offers you a pill you don't recognize. What should you do?|say no and tell a trusted adult|take it|ask a stranger|=>Stay safe.
A classmate pressures you to vape. What is a good response?|No thanks, I'm not interested.|Okay, just once.|Maybe later.|=>Be firm.
You find a bottle of prescription pills at a friend's house. What should you do?|leave them alone and tell an adult|try one|take one for later|=>Never touch.
You have a headache. Who should give you medicine?|a parent or guardian|a friend|a stranger|=>Safe use.
Which is a healthy way to handle stress instead of drugs?|exercise or talking to someone|using substances|skipping school|=>Coping skills.
Which is a short-term effect of alcohol?|slowed reaction time|better judgment|faster learning|=>Impairs.
Which is a long-term effect of tobacco use?|lung disease and cancer|stronger heart|better sleep|=>Serious.
Which is a harmful effect of vaping?|lung damage and nicotine addiction|better breathing|stronger memory|=>Dangerous.
Which is a risk of secondhand smoke?|breathing problems for others|better health|cleaner air|=>Harms bystanders.
Which medicine labels list warnings?|prescription and over-the-counter labels|only prescription|none|=>Read them.
Which is an example of an over-the-counter medicine?|a pain reliever bought at a store|a doctor-prescribed antibiotic|an illegal drug|=>Still read the label.
Which is an example of a prescription medicine?|an antibiotic from a doctor|a vitamin|a candy|=>Only for that person.
Why are teens at higher risk of addiction?|their brains are still developing|they are older|they are stronger|=>Early use raises risk.
Why should you follow dosage directions?|too much can be harmful|it is a rule only|it has no effect|=>Safety.
Why do labels have expiration dates?|old medicine may not work or may be unsafe|to sell more|to decorate|=>Check dates.
Why is asking for help important if you or a friend is using drugs?|treatment and support can help|it is a secret|it is pointless|=>Help is available.
What is a trusted adult?|an adult you can go to for help|a stranger|a classmate|=>Parent, teacher, counselor.
What is an overdose?|taking too much of a drug|a vitamin|exercise|=>Call 911.
What is naloxone (Narcan)?|a medicine that can reverse an opioid overdose|a vitamin|an illegal drug|=>Emergency use.
What is binge drinking?|drinking a large amount in a short time|drinking water|a type of exercise|=>Very dangerous.
What are 'refusal skills'?|ways to say no clearly|ways to join in|a medicine|=>Practice.
What is an example of a refusal skill?|giving a reason and suggesting another activity|saying yes|staying silent|=>Be clear.
What is a drug?|a substance that changes how the body or mind works|only an illegal substance|a snack|=>Includes medicine.
What is a protective factor?|something that lowers the chance of drug use|something that raises it|a drug|=>Caring adults.
What is a risk factor?|something that raises the chance of drug use|something that lowers it|a medicine|=>Peer pressure.
`);

  A("safety-first-aid", `
True or false: You should call 911 for a life-threatening emergency.|True|False|=>Yes.
True or false: Helmets reduce the risk of head injury.|True|False|=>Wear one.
True or false: You should share your password with friends.|False|True|=>Keep it private.
True or false: A concussion is a brain injury.|True|False|=>Stop playing.
True or false: Cool water is the first treatment for a minor burn.|True|False|=>Several minutes.
True or false: You should hide bullying from adults.|False|True|=>Tell someone.
A friend falls and may have broken an arm. What should you do?|get an adult and call for help|move the arm|ignore it|=>Don't move it.
You see smoke in your house. What should you do first?|get out and call 911|hide|open windows|=>Leave immediately.
Someone is choking and cannot speak. What should you do?|get adult help and call 911|give water|ignore it|=>Trained helpers.
You get a nosebleed. What should you do?|lean forward and pinch your nose|tilt your head back|stuff paper in your nose|=>Pinch for several minutes.
You twist your ankle during soccer. What should you do?|use RICE|run harder|ignore it|=>Rest, ice, compress, elevate.
Which is a safe way to cross a street?|use a crosswalk and look both ways|run across|text while crossing|=>Be alert.
Which is a safe bike habit?|wear a helmet and obey traffic signs|ride without a helmet|ride at night with no lights|=>Safety gear.
Which is a safe water habit?|swim with a buddy near a lifeguard|swim alone|dive in shallow water|=>Safety.
Which is a safe online habit?|use privacy settings|share your address|accept every friend request|=>Protect info.
Which is a sign of an unsafe online request?|someone asks for your personal information|a friend says hello|a teacher posts homework|=>Say no.
Which is cyberbullying?|sending mean messages repeatedly|a friendly text|a group chat about homework|=>Report it.
Which is an upstander action?|reporting bullying to an adult|joining in|laughing|=>Help.
Which should you do if you receive a mean message?|save it and tell a trusted adult|reply with insults|delete it and say nothing|=>Report.
Which is a first aid step for a cut?|apply pressure with a clean cloth|rub dirt in it|ignore it|=>Stop bleeding.
Which is a fire safety rule?|have an escape plan and test smoke alarms|hide in a closet|use water on grease fires|=>Prepare.
Which weather rule is safe in a thunderstorm?|go indoors|stand under a tree|swim|=>Lightning risk.
Why should you wear a seat belt?|it reduces injuries in a crash|it is a law only|it is comfortable|=>Life-saving.
Why are AEDs placed in public places?|to help restart a heart quickly in an emergency|to charge phones|to cool rooms|=>Seconds matter.
Why should you stop playing after a possible concussion?|more injury can happen|you will miss practice|it is a rule|=>See a doctor.
Why should passwords be long and unique?|they are harder to guess|they are easier to remember|they are shorter|=>Security.
Why should you tell a trusted adult about unsafe online contact?|they can help keep you safe|it is tattling|it makes it worse|=>Safety.
What is first aid training for?|learning how to help in emergencies|learning to cook|learning to dance|=>Skills.
What is a bystander?|a person who sees something happening|a victim|a doctor|=>Can help.
What is hypothermia?|dangerously low body temperature|high body temperature|a cut|=>Stay warm.
What is heat exhaustion?|illness from overheating|an injury|a burn|=>Drink water and rest.
What is sunburn?|skin damage from too much sun|a rash|a cut|=>Use sunscreen.
`);

  A("relationships", `
True or false: Everyone has the right to set boundaries.|True|False|=>Respect.
True or false: A friend should respect your 'no'.|True|False|=>Yes.
True or false: Gossip can hurt people.|True|False|=>Be kind.
True or false: Aggressive communication shows respect.|False|True|=>It does not.
True or false: Compromise means both sides give a little.|True|False|=>Fair.
True or false: Peer pressure is always negative.|False|True|=>Can be positive.
Two friends want to play different games. A good solution is to…|take turns or compromise|argue|quit|=>Fair.
A classmate is left out at lunch. A kind action is to…|invite them to sit with you|ignore them|tease them|=>Include.
A friend spreads a rumor about you. What should you do?|talk calmly or tell a trusted adult|spread a rumor back|fight|=>Handle maturely.
A friend asks you to cheat on a test. What should you do?|say no and walk away|go along|help them|=>Refuse.
Which is a healthy way to disagree?|stay calm and explain your view|yell|name-call|=>Respect.
Which is an example of respect?|listening without interrupting|talking over others|rolling your eyes|=>Listen.
Which is an example of trust?|keeping a friend's secret|telling everyone|lying|=>Reliable.
Which is an example of honesty?|admitting a mistake|lying|blaming others|=>Truthful.
Which is an example of teamwork?|sharing tasks fairly|doing nothing|taking over|=>Cooperate.
Which is a sign of a controlling relationship?|a person tells you who you can talk to|a person trusts you|a person respects you|=>Warning sign.
Which is a good way to apologize?|say sorry and explain how you will make it right|blame others|say nothing|=>Responsibility.
Which is a good way to end a conflict?|find a solution both people can accept|keep arguing|ignore it|=>Win-win.
Which body language shows you are listening?|facing the speaker and nodding|looking away|crossing arms and yawning|=>Engaged.
Why is active listening important?|it shows respect and helps understanding|it wastes time|it annoys people|=>Communication.
Why do I-messages work better than 'you' messages?|they express feelings without blaming|they blame others|they are longer|=>Less defensive.
Why should you think before posting?|online words can hurt and last|it is boring|it is required|=>Digital footprint.
Why is respect important in a team?|it helps everyone work together|it makes people argue|it is optional|=>Success.
Why do boundaries matter?|they protect comfort and safety|they cause arguments|they end friendships|=>Healthy.
What is a mediator's role?|help people solve a conflict fairly|choose a winner|take sides|=>Neutral.
What is cooperation?|working together toward a shared goal|competing|ignoring others|=>Teamwork.
What is empathy?|understanding another person's feelings|being the boss|ignoring others|=>Care.
What is a clique?|a small group that may exclude others|a team|a family|=>Be inclusive.
What is a role model?|a person whose behavior others look up to|a rule|a punishment|=>Positive example.
What is a bystander effect?|people being less likely to help when others are around|a type of exercise|a game|=>Be an upstander.
What is peer mediation?|students helping other students solve conflicts|a punishment|a sport|=>Neutral helpers.
`);

  A("movement-sports", `
True or false: Basketball teams have five players on the court.|True|False|=>Five.
True or false: Soccer goalkeepers can use their hands in the penalty area.|True|False|=>Special rule.
True or false: Volleyball allows up to three touches per side.|True|False|=>Three.
True or false: Sportsmanship means following the rules and respecting others.|True|False|=>Fair play.
True or false: Warm-ups help prevent injury.|True|False|=>Warm muscles.
True or false: Winning matters more than effort.|False|True|=>Effort and fair play.
A player takes extra steps without dribbling in basketball. This is…|traveling|a free throw|a layup|=>Violation.
A player uses hands in soccer (not the goalkeeper) in play. This is…|a handball foul|a goal|a throw-in|=>Foul.
A team scores two 3-pointers and one free throw. How many points?|7|6|5|=>3 + 3 + 1.
A team scores three 2-pointers and two free throws. How many points?|8|7|6|=>6 + 2.
A volleyball team touches the ball four times before sending it over. What happens?|a rule violation|a point|a timeout|=>Max three touches.
Which skill is dribbling?|manipulative|locomotor|non-locomotor|=>Uses a ball.
Which skill is galloping?|locomotor|manipulative|non-locomotor|=>Travels.
Which skill is balancing on one foot?|non-locomotor|locomotor|manipulative|=>In place.
Which skill is throwing?|manipulative|locomotor|non-locomotor|=>Uses a ball.
Which equipment protects the head in many sports?|a helmet|a cap|sunglasses|=>Safety.
Which sport uses a goalkeeper?|soccer|volleyball|basketball|=>Defends the goal.
Which sport uses a hoop and backboard?|basketball|volleyball|soccer|=>Hoops.
Which track event is a field event?|shot put|100-meter dash|relay|=>Throwing.
Which is good sportsmanship?|congratulating the other team|arguing with the referee|trash-talking|=>Respect.
Which is a way to show teamwork?|passing the ball to open teammates|hogging the ball|ignoring teammates|=>Share.
Why do teams need rules?|to keep the game fair and safe|to confuse players|to make games longer|=>Order.
Why do referees matter?|they enforce the rules|they pick winners|they coach teams|=>Fairness.
Why practice skills?|to improve performance|to waste time|to avoid games|=>Mastery.
Why is hydration important in sports?|it replaces fluids lost through sweat|it builds muscle|it adds Calories|=>Performance.
What is a tactic?|a plan to outplay the other team|a ball|a rule|=>Strategy.
What is a positional play?|playing a specific role on the field or court|a type of foul|a race|=>Guard, forward.
What is a timeout?|a short break in play|a goal|a foul|=>Rest and plan.
What is a coach's role?|teach skills and strategy|play every position|referee|=>Guide.
What is a fair play?|following rules and respecting others|cheating|arguing|=>Spirit of sport.
What is a good attitude after losing?|congratulate winners and learn|blame others|quit|=>Respect.
`);

  A("wellness-decisions", `
True or false: Wellness includes physical, mental, and social health.|True|False|=>Many parts.
True or false: A SMART goal has a deadline.|True|False|=>Time-bound.
True or false: Ads always tell the whole truth.|False|True|=>Think critically.
True or false: Reliable health information can come from doctors.|True|False|=>Experts.
True or false: Your choices can have short-term and long-term consequences.|True|False|=>Think ahead.
True or false: You should make decisions without thinking about options.|False|True|=>List options.
You want to eat healthier. Which is a SMART goal?|I will eat a fruit with lunch every school day for 4 weeks.|I will eat better.|I will try to eat healthy someday.|=>Specific and measurable.
You want to be more active. Which is a SMART goal?|I will walk 30 minutes after school 3 days a week this month.|I will exercise more.|I will be fit.|=>Specific.
You want to sleep better. Which is a SMART goal?|I will go to bed at 9:30 pm on school nights for two weeks.|I will sleep more.|I will rest.|=>Measurable.
A friend dares you to do something unsafe. What decision step comes after listing options?|think about consequences|do it right away|ignore the dare|=>Weigh pros and cons.
An ad says 'Everyone is drinking this!' This technique is…|bandwagon|expert advice|data|=>Peer pressure.
An ad uses a famous athlete to sell a snack. This is…|celebrity endorsement|a scientific study|a recipe|=>Persuasion.
A website offers a miracle cure with no evidence. You should…|be skeptical and ask a doctor|buy it|share it|=>Check sources.
A social media post claims a food cures all illness. You should…|verify with a reliable source|share it|believe it|=>Fact-check.
Which source is most reliable for health information?|a doctor or a .gov website|an ad|a rumor|=>Credible.
Which is a short-term consequence of skipping breakfast?|feeling tired and unfocused|nothing|feeling energetic|=>Immediate.
Which is a long-term consequence of never exercising?|a higher risk of health problems|stronger bones|more energy|=>Later.
Which is a healthy way to manage screen time?|set limits and take breaks|use screens all night|never go outside|=>Balance.
Which is a healthy decision about sleep?|log off devices at a set time|stay up all night|drink caffeine at night|=>Rest.
Which supports social wellness?|time with friends and family|isolating|arguing|=>Connection.
Which supports mental wellness?|talking about feelings|bottling them up|skipping sleep|=>Coping.
Which supports physical wellness?|regular exercise and good nutrition|inactivity|skipping meals|=>Healthy body.
Why set goals?|they give direction and motivation|they are required|they are boring|=>Plan.
Why break a big goal into steps?|it makes progress easier|it takes longer|it is harder|=>Milestones.
Why check for credible sources?|to avoid false or harmful information|to read more|to save time|=>Reliable.
Why do values matter in decisions?|they reflect what is important to you|they are irrelevant|they slow decisions|=>Guide choices.
Why is it important to evaluate a decision after acting?|you can learn from the result|it is unnecessary|you cannot change it|=>Reflect.
What is a health advocate?|a person who speaks up to improve health|a doctor only|a salesperson|=>Anyone can advocate.
What is an example of health advocacy?|encouraging friends to wear helmets|selling candy|ignoring safety|=>Help others.
What is a role model for health?|a person who shows healthy choices|a celebrity only|an ad|=>Positive example.
What is a pros-and-cons list?|a list of good and bad points about a choice|a type of exercise|a vitamin|=>Decision tool.
What is self-control?|managing your impulses and actions|a type of medicine|a food|=>Helps decisions.
What is a healthy habit?|a regular action that supports health|a rare event|a sickness|=>Build them.
`);
})();
