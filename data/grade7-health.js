/* Grade 7 Health & Physical Education: a new subject placed after U.S. History.
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
    id: "health", name: "Health & PE", icon: "💪", standards: "2020 Health Education SOL · 2022 Physical Education SOL",
    about: "Health and physical education for middle school: nutrition, fitness, healthy habits, mental health, avoiding harmful substances, safety and first aid, relationships, sports skills, and making healthy decisions. These sections are for review and practice. They are not medical advice, so talk to a doctor, school nurse, or trusted adult about personal health questions.",
    units: [],
  };
  window.EXTRAS = window.EXTRAS || {};
  const add = (u, extra) => {
    u.questions = Q(u.questions);
    subject.units.push(u);
    window.EXTRAS["7/health/" + u.id] = extra;
  };

  add({
    id: "nutrition", title: "Nutrition & Healthy Eating", sol: "Health",
    summary: "The nutrients your body needs, how to read a food label, and how to build a balanced plate.",
    points: [
      "Nutrients are substances in food that your body needs. The six types are carbohydrates, proteins, fats, vitamins, minerals, and water.",
      "Carbohydrates are the body's main source of energy. Proteins build and repair muscles and tissues. Fats store energy and help the body absorb some vitamins. Vitamins and minerals help the body work and stay healthy. Water helps with nearly every body function.",
      "MyPlate shows five food groups: fruits, vegetables, grains, protein foods, and dairy. Try to fill half your plate with fruits and vegetables and make at least half your grains whole grains.",
      "A Calorie is a unit of energy in food. Energy balance means the Calories you take in match the energy you use. Active kids need enough Calories to grow and play.",
      "A Nutrition Facts label lists serving size, Calories, nutrients, and % Daily Value. 5% DV or less is low; 20% DV or more is high. Limit added sugars, sodium (salt), and saturated fat.",
      "Drink water often, especially during exercise. Limit sugary drinks. Eat breakfast to help your brain and body start the day.",
      "Food safety: wash hands before handling food, keep raw meat separate from other foods, cook foods to safe temperatures, and refrigerate leftovers promptly.",
      "Some people have food allergies, which can be serious. Read labels and tell an adult about any allergy. If you're worried about your eating habits or body image, talk to a trusted adult or doctor.",
    ],
    example: "Reading a label:\nServing size: 1 cup. Sodium: 25% DV → high in sodium.\nIf you eat 2 cups, you eat twice the Calories and nutrients listed.\n\nBalanced plate: ½ fruits and vegetables, ¼ grains, ¼ protein, plus dairy.",
    vocab: [["nutrient", "A substance in food that your body needs to grow and work."], ["Calorie", "A unit that measures the energy in food."], ["carbohydrate", "A nutrient that is the body's main source of energy."], ["protein", "A nutrient that builds and repairs body tissues."], ["serving size", "The amount of food that the Nutrition Facts numbers are based on."], ["whole grain", "A grain that keeps all parts of the seed, with more fiber."], ["sodium", "A mineral found in salt that should be limited."]],
    questions: `
Which nutrient is the body's main source of energy?|carbohydrates|vitamins|minerals|water|=>Carbs fuel the body.
Which nutrient builds and repairs muscles?|protein|carbohydrates|fiber only|water|=>Meat, beans, and eggs have protein.
What are the five MyPlate food groups?|fruits, vegetables, grains, protein foods, dairy|candy, soda, chips, fries, cake|meat, bread, rice, water, salt|breakfast, lunch, dinner, snacks, dessert|=>MyPlate.
How much of your plate should be fruits and vegetables?|about half|about one-tenth|none|all of it|=>Half the plate.
What is a Calorie?|a unit that measures the energy in food|a type of vitamin|a type of fat|a food group|=>Energy.
What does 'serving size' tell you?|the amount the label's numbers are based on|how much you must eat|the price|the expiration date|=>Check it first.
On a Nutrition Facts label, 20% DV or more is…|high|low|zero|unsafe|=>5% or less is low.
Which should you limit?|added sugars and sodium|water and fiber|fruits and vegetables|whole grains|=>Too much raises health risks.
Which is a whole-grain food?|whole wheat bread|white sugar|soda|candy|=>It keeps fiber.
Which is the best drink for exercise?|water|energy drink|soda|sweet tea|=>Water hydrates.
Why is breakfast important?|it fuels your brain and body for the day|it replaces sleep|it has no benefit|it prevents all illness|=>Starting the day with fuel helps focus.
What helps prevent food-borne illness?|washing hands and cooking food to safe temperatures|leaving food out all day|sharing utensils|skipping refrigeration|=>Food safety.
Which food group includes milk and yogurt?|dairy|grains|protein|vegetables|=>Dairy group.
What should you do if you have a food allergy?|read labels and tell an adult|ignore it|eat a little to test|hide it|=>Allergies can be serious.
`,
  }, {
    examples: ["Build a plate: grilled chicken (protein), brown rice (whole grain), broccoli and carrots (vegetables), an apple (fruit), and milk (dairy).", "Label math: if one serving has 150 Calories and you eat 2 servings, you eat 300 Calories."],
    vocab: { "nutrient": "Protein is a nutrient your body needs.", "Calorie": "A banana has about 100 Calories.", "carbohydrate": "Bread and rice are rich in carbohydrates.", "protein": "Beans and fish are good protein foods.", "serving size": "The serving size is half a cup.", "whole grain": "Oatmeal is a whole grain.", "sodium": "Canned soup can be high in sodium." },
  });

  add({
    id: "fitness", title: "Physical Fitness & Exercise", sol: "PE",
    summary: "The parts of fitness, how to train safely using the FITT principle, and why being active matters.",
    points: [
      "Health-related fitness has five parts: cardiorespiratory endurance (heart and lungs), muscular strength, muscular endurance, flexibility, and body composition.",
      "Skill-related fitness helps in sports: agility, balance, coordination, power, reaction time, and speed.",
      "Kids and teens should get at least 60 minutes of physical activity most days, mostly moderate to vigorous. Also include muscle- and bone-strengthening activities at least 3 days a week.",
      "The FITT principle plans exercise: Frequency (how often), Intensity (how hard), Time (how long), Type (what kind).",
      "Warm up before exercise to prepare your body and cool down afterward. Stretch gently after muscles are warm.",
      "Aerobic exercise (running, swimming, biking) uses oxygen and builds endurance. Anaerobic exercise (sprinting, lifting) is short and intense.",
      "Your heart rate is the number of beats per minute. A rough estimate of maximum heart rate is 220 minus your age. A target heart rate zone is about 50% to 85% of that number.",
      "Benefits of exercise: stronger heart and lungs, stronger bones and muscles, better mood and sleep, and a healthier weight. Stay hydrated, wear proper gear, and stop if you feel sharp pain, dizziness, or unusual shortness of breath.",
    ],
    example: "Estimating a heart-rate zone for a 13-year-old:\nMax ≈ 220 − 13 = 207 beats per minute\n50% ≈ 104, 85% ≈ 176\nTarget zone ≈ 104 to 176 beats per minute.\n\nFITT: run (Type) 3 times a week (Frequency) for 20 minutes (Time) at a moderate pace (Intensity).",
    vocab: [["cardiorespiratory endurance", "The ability of the heart and lungs to supply the body with oxygen during activity."], ["muscular strength", "The most force a muscle can produce at one time."], ["flexibility", "The ability to move joints through a full range of motion."], ["aerobic exercise", "Activity that uses oxygen to keep going for a longer time, like jogging."], ["FITT principle", "A plan for exercise: Frequency, Intensity, Time, and Type."], ["resting heart rate", "The number of heartbeats per minute when the body is at rest."], ["warm-up", "Light activity before exercise to prepare the body."]],
    questions: `
How much daily physical activity is recommended for kids and teens?|at least 60 minutes|about 5 minutes|about 10 minutes|none|=>Most days of the week.
Which is a part of health-related fitness?|flexibility|reaction time|speed|coordination|=>The five health-related parts are endurance, strength, muscular endurance, flexibility, and body composition.
What does cardiorespiratory endurance measure?|how well the heart and lungs work during activity|how strong a muscle is|how flexible you are|how fast you sprint|=>Think running a mile.
Doing sit-and-reach tests measures…|flexibility|speed|endurance|power|=>Range of motion.
Which activity builds muscular strength?|lifting weights or push-ups|stretching only|walking slowly|resting|=>Strength uses resistance.
What does FITT stand for?|Frequency, Intensity, Time, Type|Fast, Intense, Tough, Training|Fitness, Interest, Tempo, Technique|Food, Iron, Tea, Treats|=>A planning tool for exercise.
What is the purpose of a warm-up?|to prepare the body for exercise|to end exercise|to build muscle|to lower heart rate|=>Warm muscles are safer.
What is a cool-down for?|to slowly return the body to rest|to start exercise|to lift weights|to test strength|=>Ends exercise gradually.
Which is aerobic exercise?|jogging|a 1-rep max lift|a short sprint only|stretching|=>Aerobic uses oxygen.
What is a rough way to estimate maximum heart rate?|220 minus age|age minus 220|age times 2|age plus 100|=>For age 13, about 207.
What is the estimated maximum heart rate for a 12-year-old using 220 − age?|208|232|98|122|=>220 − 12 = 208.
Which is a benefit of regular exercise?|stronger heart, bones, and muscles|weaker bones|worse sleep|lower energy always|=>Exercise helps the whole body.
Which is a skill-related fitness component?|agility|flexibility|body composition|muscular endurance|=>Agility, balance, coordination, power, reaction time, speed.
What should you do if you feel sharp pain during exercise?|stop and tell an adult|keep pushing|ignore it|exercise harder|=>Listen to your body.
`,
  }, {
    examples: ["FITT example: Type = swimming, Frequency = 3 days a week, Time = 30 minutes, Intensity = moderate (you can talk but not sing).", "Match the test: mile run → endurance; push-ups → muscular endurance; sit-and-reach → flexibility."],
    vocab: { "cardiorespiratory endurance": "Running a mile builds cardiorespiratory endurance.", "muscular strength": "Lifting a heavy box takes muscular strength.", "flexibility": "Gymnasts need great flexibility.", "aerobic exercise": "Swimming laps is aerobic exercise.", "FITT principle": "The FITT principle helps you plan a workout.", "resting heart rate": "Athletes often have a low resting heart rate.", "warm-up": "A warm-up can include light jogging." },
  });

  add({
    id: "healthy-habits", title: "Healthy Habits: Sleep, Hygiene & Preventing Disease", sol: "Health",
    summary: "How sleep, cleanliness, and vaccines help you avoid getting sick, and how diseases spread.",
    points: [
      "Most young teens need about 8 to 10 hours of sleep each night. Sleep helps your brain learn, your body grow, and your mood stay steady. Keep a regular bedtime and turn off screens before bed.",
      "Pathogens (germs) that cause disease include bacteria, viruses, fungi, and parasites. A communicable disease can spread from person to person (flu, strep throat). A non-communicable disease does not spread (asthma, diabetes).",
      "Germs spread through the air (coughs and sneezes), touch, contaminated food or water, and animals or insects. Wash hands with soap for at least 20 seconds, cover coughs, and don't share cups or utensils.",
      "Vaccines train the immune system to fight a disease before you get it. Antibiotics treat bacterial infections, not viruses.",
      "The immune system defends the body. Skin, tears, and mucus are first defenses; white blood cells help fight infections.",
      "Daily hygiene includes bathing, brushing teeth twice a day and flossing, washing hair, and wearing clean clothes. Protect your skin from the sun with sunscreen, hats, and shade.",
      "Risk factors raise your chance of a health problem (poor diet, inactivity, smoking). Protective factors lower it (exercise, sleep, vaccines, regular checkups).",
      "Chronic diseases last a long time. Many can be reduced by healthy choices. Regular checkups and screenings help find problems early.",
    ],
    example: "Stopping the spread:\n1. Cover your cough with your elbow.\n2. Wash hands for 20 seconds (sing 'Happy Birthday' twice).\n3. Stay home when you have a fever.\n4. Get recommended vaccines and enough sleep.",
    vocab: [["pathogen", "A germ that can cause disease."], ["communicable disease", "An illness that can spread from person to person."], ["vaccine", "A medicine that trains the immune system to fight a disease."], ["immune system", "The body's defense against germs."], ["hygiene", "Habits that keep your body clean and healthy."], ["chronic disease", "A health condition that lasts a long time."], ["risk factor", "Something that increases the chance of a health problem."]],
    questions: `
About how many hours of sleep do most young teens need?|8 to 10|3 to 4|5 to 6|12 to 14|=>Sleep supports learning and growth.
What is a pathogen?|a germ that can cause disease|a type of vitamin|a muscle|a medicine|=>Bacteria and viruses are pathogens.
Which is a communicable disease?|the flu|asthma|diabetes|a broken arm|=>It spreads between people.
Which is a non-communicable disease?|asthma|strep throat|the flu|a cold|=>It does not spread.
How long should you wash your hands with soap?|at least 20 seconds|2 seconds|about 5 seconds|only if dirty|=>Scrub all surfaces.
What do vaccines do?|train the immune system to fight a disease|cure every infection|replace sleep|make you stronger at sports|=>Prevention.
Antibiotics treat…|bacterial infections|viruses|allergies|sprains|=>They do not work on viruses.
Which is a first defense of the immune system?|skin|a bandage|a doctor|a vaccine|=>The skin blocks germs.
What is a risk factor?|something that raises the chance of a health problem|something that prevents illness|a type of vitamin|a medicine|=>Smoking is a risk factor.
Which is a protective factor?|regular exercise|skipping sleep|poor diet|smoking|=>Protective factors lower risk.
How should you cover a cough?|with your elbow or a tissue|with your bare hand|not at all|toward a friend|=>Prevents spreading.
What is a chronic disease?|a condition that lasts a long time|a short cold|a broken bone|a splinter|=>Diabetes is chronic.
Which habit helps prevent tooth decay?|brushing twice a day and flossing|drinking soda|never brushing|skipping the dentist|=>Dental hygiene.
Which protects skin from the sun?|sunscreen, hats, and shade|baby oil|tanning beds|nothing|=>Prevents sunburn and skin damage.
`,
  }, {
    examples: ["How a cold spreads: a sick person sneezes → droplets land on a doorknob → you touch it and then your nose. Washing hands breaks the chain.", "Sleep tips: same bedtime every night, screens off an hour before, cool dark room."],
    vocab: { "pathogen": "A virus is a pathogen.", "communicable disease": "The flu is a communicable disease.", "vaccine": "The vaccine protects against measles.", "immune system": "Sleep helps your immune system.", "hygiene": "Washing your hands is good hygiene.", "chronic disease": "Asthma can be a chronic disease.", "risk factor": "Not exercising is a risk factor for heart disease." },
  });

  add({
    id: "mental-health", title: "Mental & Emotional Health", sol: "Health",
    summary: "Understanding feelings, managing stress, and knowing when and how to ask for help.",
    points: [
      "Mental and emotional health is how we think, feel, and handle everyday life. It is as important as physical health.",
      "Everyone has emotions such as happy, sad, angry, nervous, and excited. All feelings are okay; what matters is how we respond to them.",
      "Stress is the body's reaction to a challenge or change. A stressor is what causes stress. Some stress can motivate you, but too much can hurt your health.",
      "Healthy ways to cope: exercise, deep breathing, talking to someone you trust, getting enough sleep, listening to music, journaling, taking breaks, and spending time on hobbies.",
      "Resilience is the ability to bounce back from setbacks. Positive self-talk and a growth mindset ('I can learn this') build resilience and self-esteem.",
      "Signs you may need help: feeling sad or hopeless for weeks, constant worry, big changes in sleep or appetite, withdrawing from friends, or thoughts of hurting yourself.",
      "Talk to a parent, school counselor, teacher, or doctor. If you or someone you know is in crisis, call or text 988 (the Suicide & Crisis Lifeline) or call 911 in an emergency.",
      "Empathy means understanding another person's feelings. Being kind, listening, and including others support everyone's mental health. Asking for help is a sign of strength.",
    ],
    example: "Coping plan for a big test:\n1. Notice the feeling: 'I'm nervous.'\n2. Breathe in for 4 counts, out for 6.\n3. Study a little each night and get sleep.\n4. Talk to a trusted adult if the worry stays strong.",
    vocab: [["emotion", "A feeling such as joy, anger, fear, or sadness."], ["stress", "The body's reaction to a challenge or change."], ["stressor", "Something that causes stress."], ["coping strategy", "A healthy way to handle stress or difficult feelings."], ["resilience", "The ability to recover from difficulties."], ["empathy", "Understanding and caring about how another person feels."], ["self-esteem", "How you feel about your own worth."]],
    questions: `
What is stress?|the body's reaction to a challenge or change|a type of illness only|a type of vitamin|a muscle|=>Stressors cause stress.
What is a stressor?|something that causes stress|a way to relax|a medicine|a game|=>For example a test or a move.
Which is a healthy way to cope with stress?|exercise or deep breathing|ignoring all feelings forever|yelling at others|skipping sleep|=>Coping strategies help.
What is resilience?|the ability to bounce back from setbacks|a feeling of anger|a type of stress|a medicine|=>Practice builds it.
What is empathy?|understanding another person's feelings|being the best at everything|ignoring others|a type of stress|=>Putting yourself in their shoes.
What is self-esteem?|how you feel about your own worth|how tall you are|your grade|your weight|=>Healthy self-esteem helps you.
Which is a sign that someone may need help?|feeling hopeless for weeks|feeling nervous once before a test|feeling tired after sports|feeling hungry at lunch|=>Persistent feelings matter.
Who can you talk to about your feelings?|a parent, counselor, teacher, or doctor|no one|only strangers online|no adult|=>Trusted adults help.
What number can you call or text for the Suicide & Crisis Lifeline?|988|411|311|611|=>Free, 24/7.
What should you do in a life-threatening emergency?|call 911|wait a week|post online|ignore it|=>Get help immediately.
Is it okay to ask for help with mental health?|yes, it is a sign of strength|no, it is a weakness|only adults can|never|=>Seeking help is healthy.
Which is an example of positive self-talk?|I can learn this if I keep trying.|I'm terrible at everything.|I'll never improve.|Nobody likes me.|=>Builds a growth mindset.
Which is a healthy way to handle anger?|take deep breaths and walk away to cool down|hit something|say hurtful things|keep it inside forever|=>Calm first, then talk.
Why does exercise help mental health?|it can improve mood and reduce stress|it causes stress|it has no effect|it replaces sleep|=>Movement releases tension.
`,
  }, {
    examples: ["Name it to tame it: say 'I feel anxious' instead of 'I'm bad at this.'", "Healthy break ideas: take a walk, draw, stretch, listen to music, or talk to a friend."],
    vocab: { "emotion": "Excitement is an emotion.", "stress": "Too much stress can make it hard to sleep.", "stressor": "A big test can be a stressor.", "coping strategy": "Deep breathing is a coping strategy.", "resilience": "Resilience helped her try again after losing.", "empathy": "He showed empathy by listening.", "self-esteem": "Encouragement builds self-esteem." },
  });

  add({
    id: "substance-safety", title: "Tobacco, Vaping, Alcohol & Medicine Safety", sol: "Health",
    summary: "Why drugs are risky for young people, how to read medicine labels, and how to say no.",
    points: [
      "A drug is a substance that changes how the body or mind works. Medicines are drugs used to treat illness. Taking medicine in the wrong way or amount can be dangerous.",
      "Medicine safety: take only what a doctor or parent gives you, read labels, follow the directions, and never share prescription medicine. Store medicine safely out of reach of young children.",
      "Tobacco and e-cigarettes (vapes) contain nicotine, an addictive drug that can harm a teen's developing brain. Vape aerosol can also contain harmful chemicals. Tobacco use causes cancer, heart disease, and lung disease.",
      "Alcohol is a depressant that slows the brain and body. Underage drinking is illegal and can harm judgment, growth, and the developing brain.",
      "Marijuana and other illegal drugs are unsafe and illegal for kids and teens. Misusing prescription pain medicines (opioids) can lead to addiction and overdose. Fake pills may contain fentanyl, which can be deadly.",
      "Addiction is a disease in which a person cannot stop using a substance even when it causes harm. Help and treatment are available.",
      "Risk factors for substance use include peer pressure, stress, or family history. Protective factors include caring adults, sports and clubs, good coping skills, and clear refusal skills.",
      "Refusal skills: say 'No' clearly and confidently, give a reason, suggest something else to do, and leave if needed. Tell a trusted adult about unsafe situations.",
    ],
    example: "Refusal practice:\nFriend: 'Try this vape.'\nYou: 'No thanks, I don't want to.' (clear)\n'I'm in training for basketball.' (reason)\n'Let's go shoot hoops.' (alternative)\nThen leave and tell a trusted adult if the pressure continues.",
    vocab: [["drug", "A substance that changes how the body or mind works."], ["nicotine", "An addictive drug found in tobacco products and many vapes."], ["addiction", "A disease in which a person cannot stop using a substance despite harm."], ["prescription medicine", "Medicine ordered by a doctor for a specific person."], ["over-the-counter medicine", "Medicine that can be bought without a prescription."], ["refusal skills", "Ways of saying no to risky behavior."], ["peer pressure", "Influence from people your age to act a certain way."]],
    questions: `
What is a drug?|a substance that changes how the body or mind works|only an illegal substance|a food|a vitamin only|=>Medicines are drugs too.
Which is safe medicine use?|taking only what a doctor or parent gives you|sharing prescription pills|taking extra for faster results|ignoring the label|=>Follow directions.
Which drug is found in tobacco products and many vapes?|nicotine|caffeine|calcium|iron|=>It is addictive.
Why is nicotine especially harmful for teens?|it can harm the developing brain|it builds muscle|it improves memory|it is not addictive|=>Teen brains are still developing.
Which health problems does tobacco use cause?|cancer, heart disease, and lung disease|better lungs|stronger heart|better sleep|=>Tobacco is harmful.
What does alcohol do to the brain?|slows it down|speeds it up|builds new cells|has no effect|=>It is a depressant.
Is underage drinking legal?|no|yes|only on weekends|only at home|=>It is illegal.
What is addiction?|a disease where a person cannot stop using a substance despite harm|a bad habit that is easy to quit|a type of medicine|a sport|=>Help is available.
Which is a refusal skill?|say no clearly and suggest something else|go along with it|say nothing|argue and insult|=>Be firm and kind.
What is peer pressure?|influence from people your age|a type of medicine|a school rule|a law|=>Can be positive or negative.
Which is a protective factor against drug use?|caring adults and good coping skills|stress with no support|boredom|easy access to drugs|=>Protective factors lower risk.
Which medicine is sold without a prescription?|over-the-counter medicine|prescription medicine|illegal drugs|vaccines only|=>Still read the label.
Why are fake pills dangerous?|they may contain deadly fentanyl|they are always safe|they are vitamins|they are expired|=>Only take pills from a doctor or parent.
What should you do if you are in an unsafe situation?|leave and tell a trusted adult|stay quiet|join in|post online|=>Get help.
`,
  }, {
    examples: ["Label check: Read the active ingredient, the dose for your age, and the warnings before taking any medicine, and ask a parent first.", "Peer-pressure plan: pause, say no, give a reason, offer an alternative, leave."],
    vocab: { "drug": "Medicine is a drug used to treat illness.", "nicotine": "Nicotine is addictive.", "addiction": "Addiction can be treated with help.", "prescription medicine": "Prescription medicine should only be taken by the person it was written for.", "over-the-counter medicine": "Cold medicine is over-the-counter medicine.", "refusal skills": "He used refusal skills at the party.", "peer pressure": "Peer pressure can be positive, like joining a club." },
  });

  add({
    id: "safety-first-aid", title: "Safety, First Aid & Staying Safe Online", sol: "Health",
    summary: "How to prevent injuries, handle basic emergencies, and stay safe in person and online.",
    points: [
      "Injury prevention: wear helmets and pads for biking, skating, and sports; buckle seat belts; follow rules at pools; check weather; and use equipment correctly.",
      "In an emergency, call 911. Stay calm and give your location, what happened, and your name. Don't hang up until the operator says so.",
      "First aid is the first help given before medical care arrives. For a minor cut, wash hands, apply direct pressure, clean, and cover. For a minor burn, run cool water for several minutes.",
      "For sprains use RICE: Rest, Ice, Compression, Elevation. For nosebleeds, lean forward and pinch the soft part of the nose.",
      "For choking, an adult or trained person gives abdominal thrusts (the Heimlich maneuver). CPR (cardiopulmonary resuscitation) uses chest compressions to keep blood moving; an AED (automated external defibrillator) can restart a heart rhythm. Take a class to learn.",
      "A concussion is a brain injury caused by a bump or blow to the head. Stop playing and tell an adult right away, and get checked by a doctor before returning.",
      "Fire safety: have a family escape plan, test smoke alarms, and if clothes catch fire, 'stop, drop, and roll.' Get out and stay out.",
      "Online safety: keep personal information and passwords private, use privacy settings, don't meet strangers from the internet, think before posting (your digital footprint lasts), and tell a trusted adult if something feels wrong.",
      "Bullying is repeated, unwanted, harmful behavior. Cyberbullying happens online. Upstanders speak up or get help; don't join in. Report bullying to an adult.",
    ],
    example: "Sprained ankle? RICE:\nR – Rest the ankle\nI – Ice for 15–20 minutes\nC – Compress with a wrap\nE – Elevate above the heart\n\nPhone call to 911: 'My friend is hurt at Smith Park on Main Street. I'm Alex.'",
    vocab: [["first aid", "Immediate help given to an injured or ill person before medical care arrives."], ["concussion", "A brain injury caused by a bump or blow to the head."], ["CPR", "Cardiopulmonary resuscitation: chest compressions to keep blood moving."], ["AED", "A device that can shock the heart back into a normal rhythm."], ["digital footprint", "The trail of information you leave online."], ["cyberbullying", "Bullying that happens online or through devices."], ["upstander", "A person who speaks up or gets help when someone is being bullied."]],
    questions: `
What number do you call in an emergency?|911|411|211|511|=>Stay calm and give details.
What does RICE stand for?|Rest, Ice, Compression, Elevation|Run, Ice, Cool, Exercise|Rest, Insulate, Cover, Eat|Rinse, Ice, Clean, Elevate|=>For sprains and strains.
What should you do first for a minor cut?|apply direct pressure with a clean cloth|ignore it|rub it with dirt|remove all clothing|=>Then clean and cover.
How should you treat a minor burn?|run it under cool water|put butter on it|pop any blisters|cover it with ice only|=>Cool water for several minutes.
What does CPR use?|chest compressions|cold packs|bandages|stretching|=>Keeps blood moving until help arrives.
What does AED stand for?|automated external defibrillator|automatic emergency device|adult exercise device|artificial electric drug|=>Found in public places.
What is a concussion?|a brain injury from a bump or blow to the head|a broken leg|a sprain|a cut|=>Stop playing and get checked.
What should you do if you may have a concussion?|stop playing and tell an adult|keep playing|ignore it|go to sleep alone|=>See a doctor.
If your clothes catch fire, you should…|stop, drop, and roll|run|jump into a car|hide|=>Smothers the flames.
Which protects you while biking?|a helmet|headphones|loose shoelaces|no hands|=>Reduces head injuries.
Which is safe online behavior?|keeping passwords private|sharing your address|meeting strangers alone|posting your schedule|=>Protect personal information.
What is a digital footprint?|the trail of information you leave online|a computer virus|a shoe size|a password|=>Posts can last.
What is bullying?|repeated, unwanted, harmful behavior|one friendly joke|a fair game|a disagreement once|=>It involves a power imbalance.
What does an upstander do?|speaks up or gets help when someone is bullied|joins the bully|ignores it|films it for fun|=>Be a helper.
What is cyberbullying?|bullying done online or by device|bullying in person only|a type of game|a type of virus|=>Tell a trusted adult.
`,
  }, {
    examples: ["Calling 911: state your emergency, location, and name; follow the operator's directions; stay on the line.", "Safe passwords are long, unique, and private. Never share them, even with friends."],
    vocab: { "first aid": "First aid can stop bleeding.", "concussion": "She sat out after a concussion.", "CPR": "Learning CPR can save a life.", "AED": "The gym keeps an AED on the wall.", "digital footprint": "Think about your digital footprint before you post.", "cyberbullying": "He reported cyberbullying to a teacher.", "upstander": "An upstander stands up for others." },
  });

  add({
    id: "relationships", title: "Healthy Relationships & Communication", sol: "Health",
    summary: "How to communicate clearly, respect boundaries, handle conflict, and be a good friend.",
    points: [
      "A healthy relationship involves respect, trust, honesty, fairness, and good communication. Unhealthy relationships involve control, disrespect, pressure, or fear.",
      "Active listening: face the speaker, make eye contact, don't interrupt, and repeat back what you heard. Use 'I-messages' ('I feel upset when… because…') instead of blaming 'You' messages.",
      "Communication styles: passive (not standing up for yourself), aggressive (disrespecting others), and assertive (clear, calm, and respectful). Assertive is the healthiest.",
      "Body language, tone of voice, and facial expressions are nonverbal communication. Online messages can be misunderstood without tone, so think before you send.",
      "Boundaries are limits that protect your comfort, privacy, and safety. Everyone has the right to say no to touch or requests that make them uncomfortable, and to respect others' boundaries.",
      "Peer pressure can be positive (join a team) or negative (break rules). Friends who respect you will accept 'no.'",
      "Conflict resolution steps: stay calm, listen to each side, state the problem, brainstorm solutions, and compromise. A mediator can help. Walk away from violence and tell an adult.",
      "Families, friends, teammates, and classmates all benefit from empathy, teamwork, and kindness. If someone makes you feel unsafe, tell a trusted adult.",
    ],
    example: "I-message: 'I feel left out when you talk over me because I want to share my idea too. Can you let me finish?'\n\nCompromise: two friends want different games, so they play one now and the other next.",
    vocab: [["assertive", "Speaking up clearly, calmly, and respectfully."], ["I-message", "A statement that tells how you feel without blaming the other person."], ["boundary", "A limit that protects your comfort, privacy, and safety."], ["compromise", "Each side gives up something to reach an agreement."], ["active listening", "Giving full attention and checking that you understand."], ["conflict", "A disagreement or struggle between people."], ["mediator", "A neutral person who helps people solve a conflict."]],
    questions: `
Which is a sign of a healthy relationship?|respect and trust|control and pressure|fear|jealousy|=>Honesty matters.
What is an I-message?|a statement of how you feel without blaming|a text message|an insult|a rule|=>'I feel… when… because…'
Which communication style is the healthiest?|assertive|passive|aggressive|silent|=>Clear and respectful.
Which is an example of active listening?|making eye contact and repeating what you heard|texting while someone talks|interrupting|looking away|=>Shows respect.
What is a boundary?|a limit that protects your comfort and safety|a fence only|a rule for adults only|a type of game|=>Everyone has the right to set them.
What should you do if someone ignores your 'no'?|tell a trusted adult|stay quiet|give in|keep it secret|=>Your boundaries matter.
Which is nonverbal communication?|facial expressions|a letter|a phone call|a speech|=>Body language.
What is compromise?|each side gives up something to agree|one side wins everything|walking away|arguing|=>Win-win.
Which is a step in resolving conflict?|listen to each side|insult the other person|ignore the issue|spread rumors|=>Stay calm.
What does a mediator do?|helps people solve a conflict fairly|chooses a winner|takes sides|punishes|=>Neutral helper.
Which is positive peer pressure?|a friend encourages you to try out for the team|a friend dares you to break rules|a friend asks you to cheat|a friend tells you to lie|=>Positive influence.
Which message is better?|I feel upset when you take my things without asking.|You're always so rude!|Whatever.|I hate you.|=>Uses an I-message.
Why can online messages be misunderstood?|there is no tone of voice or facial expression|they are always clear|they are always private|they are slower|=>Think before sending.
Which shows empathy?|noticing a classmate is sad and asking if they're okay|laughing at them|ignoring them|gossiping|=>Care for others.
`,
  }, {
    examples: ["Assertive phrase: 'I don't want to do that. Let's do something else.'", "Conflict steps: Cool down → listen → state the problem → brainstorm → agree on a solution."],
    vocab: { "assertive": "She was assertive but polite.", "I-message": "An I-message avoids blaming.", "boundary": "He respected her boundary.", "compromise": "They reached a compromise about the game.", "active listening": "Active listening shows you care.", "conflict": "The friends worked through the conflict.", "mediator": "The counselor was the mediator." },
  });

  add({
    id: "movement-sports", title: "Movement Skills, Sports & Sportsmanship", sol: "PE",
    summary: "Basic movement skills, rules of common sports, teamwork, and fair play.",
    points: [
      "Locomotor skills move the body from place to place: walking, running, hopping, jumping, skipping, galloping, leaping, and sliding.",
      "Non-locomotor skills happen in place: bending, stretching, twisting, turning, balancing. Manipulative skills use equipment: throwing, catching, dribbling, kicking, and striking.",
      "Basketball: two teams of five on court; players dribble and pass, and cannot travel (take extra steps) or double dribble. Shots are worth 1 (free throw), 2, or 3 points (beyond the arc).",
      "Volleyball: six players per side rotate; teams get up to three touches to send the ball over the net; the ball cannot be held or carried. Games are usually played to 25 points and a team must win by 2.",
      "Soccer: eleven players per side; only goalkeepers can use hands inside their penalty area; fouls, handballs, and offside can lead to free kicks. The team with more goals wins.",
      "Track and field: running events (sprints, relays, distance) and field events (long jump, high jump, shot put, discus). Practice proper form and warm up.",
      "Offense tries to score; defense tries to stop scoring. Good strategy uses space, passing, and teamwork.",
      "Sportsmanship means following rules, respecting teammates, opponents, and officials, and winning or losing with grace. Fair play and effort matter more than the score.",
    ],
    example: "Sport match:\n• Dribble, pass, free throw → basketball\n• Serve, set, spike, rotation → volleyball\n• Goalkeeper, offside, penalty kick → soccer\n\nGood sportsmanship: shaking hands after a game, encouraging teammates, and accepting the referee's call.",
    vocab: [["locomotor skill", "A movement that takes you from one place to another, like running."], ["manipulative skill", "A skill using equipment, such as throwing or dribbling."], ["offense", "The team or players trying to score."], ["defense", "The team or players trying to stop the other team from scoring."], ["sportsmanship", "Fair play and respect shown to teammates, opponents, and officials."], ["teamwork", "Working together to reach a common goal."], ["foul", "A rule violation, often involving illegal contact."]],
    questions: `
Which is a locomotor skill?|skipping|balancing in place|twisting|stretching|=>Locomotor skills move you.
Which is a manipulative skill?|dribbling a ball|balancing on one foot|stretching|bending|=>Uses equipment.
How many players per team are on the court in basketball?|5|6|7|11|=>Five.
What is 'traveling' in basketball?|taking extra steps without dribbling|shooting a free throw|passing|jumping high|=>A violation.
How many points is a free throw worth?|1|2|3|4|=>Awarded after certain fouls.
How many players per side in volleyball?|6|5|7|11|=>Rotate positions.
How many touches may a volleyball team use before sending the ball over?|3|1|5|7|=>Up to three.
In soccer, who may use hands inside the penalty area?|the goalkeeper|any player|no one|the captain|=>Special rule.
How many players are on a soccer team on the field?|11|5|7|9|=>Eleven per side.
Which is a field event in track and field?|long jump|100-meter dash|relay race|mile run|=>Field events are jumps and throws.
What is offense?|the team trying to score|the team trying to stop scoring|the referee|the audience|=>Opposite of defense.
What is sportsmanship?|fair play and respect for others|winning at all costs|arguing with referees|blaming teammates|=>Good sports respect everyone.
Which is an example of good sportsmanship?|shaking hands after the game|trash-talking|ignoring rules|refusing to play|=>Respect.
What does teamwork mean?|working together toward a goal|competing against teammates|avoiding passes|playing alone|=>Collaboration wins games.
Which is a non-locomotor skill?|twisting|running|galloping|hopping|=>Done in place.
`,
  }, {
    examples: ["Locomotor or non-locomotor? Skipping → locomotor; bending → non-locomotor.", "A basketball game: 3-pointer = 3 points, two field goals = 4 points, one free throw = 1 point; total 8 points."],
    vocab: { "locomotor skill": "Hopping is a locomotor skill.", "manipulative skill": "Catching is a manipulative skill.", "offense": "On offense, the team moves the ball down the court.", "defense": "Defense tries to block shots.", "sportsmanship": "Shaking hands shows sportsmanship.", "teamwork": "Teamwork helped them win.", "foul": "The referee called a foul." },
  });

  add({
    id: "wellness-decisions", title: "Wellness, Goals & Making Healthy Decisions", sol: "Health",
    summary: "How to set goals, make smart choices, find reliable health information, and balance your wellness.",
    points: [
      "Wellness has several dimensions: physical, mental and emotional, social, and others like intellectual and environmental. Balancing them helps you be healthy overall.",
      "A SMART goal is Specific, Measurable, Achievable, Relevant, and Time-bound. Example: 'I will walk 20 minutes after school, 4 days a week, for the next month.'",
      "Decision-making steps: identify the problem, list options, think about possible consequences, choose the best option, act on it, and evaluate the result. Think about short-term and long-term effects.",
      "Your values (what is important to you) and your goals guide your decisions. Influences include family, friends, culture, and media.",
      "Media and advertising use images and messages to sell products. Recognize when ads use tricks, such as celebrity endorsements, 'everyone is doing it,' or unrealistic images.",
      "Reliable health information comes from doctors, nurses, parents, school health teachers, and trusted sources such as government (.gov) or educational (.edu) websites. Be cautious of ads, rumors, and unverified social media.",
      "Health advocacy means speaking up or acting to improve health for yourself or others, such as encouraging friends to wear helmets.",
      "Balance screen time with sleep, activity, homework, and time with family and friends. Set limits, and tell an adult if something online worries you.",
    ],
    example: "Decision example: Your friends are staying up late to game.\n1. Problem: You need sleep for tomorrow's test.\n2. Options: stay up, play a short game, or log off.\n3. Consequences: tired and stressed vs. rested and ready.\n4. Choose: log off at 9:00 pm.\n5. Evaluate: How did you feel the next day?",
    vocab: [["wellness", "A state of good physical, mental, and social health."], ["SMART goal", "A goal that is Specific, Measurable, Achievable, Relevant, and Time-bound."], ["consequence", "A result of a choice or action."], ["value", "Something you believe is important."], ["advocacy", "Speaking up or acting to support a cause."], ["media influence", "The effect that ads, TV, and social media have on thoughts and choices."], ["health literacy", "The ability to find, understand, and use health information."]],
    questions: `
Which is a SMART goal?|I will walk 20 minutes after school 4 days a week for a month.|I want to be healthier.|I'll exercise someday.|Be fit.|=>It is specific and measurable.
What does the S in SMART stand for?|Specific|Silly|Simple|Strong|=>Specific, Measurable, Achievable, Relevant, Time-bound.
What does the M in SMART stand for?|Measurable|Magic|Many|Major|=>You can track progress.
What is a consequence?|a result of a choice|a type of goal|a type of ad|a friend|=>Think before you decide.
Which is a first step in making a decision?|identify the problem|choose a random option|ignore it|ask no one|=>Then list options.
Which is the last step in the decision-making process?|evaluate the result|identify the problem|list options|ignore the result|=>Learn from it.
What are values?|things you believe are important|school subjects|types of food|sports teams|=>Guide your decisions.
Which source of health information is most reliable?|a doctor or a .gov website|a rumor|an ad|a stranger online|=>Check credibility.
What is advocacy?|speaking up or acting for a cause|ignoring problems|buying products|a type of exercise|=>Health advocacy helps others.
What is a persuasion technique ads use?|celebrity endorsement|a fact-check|a warning label|a doctor's note|=>Think critically.
Which dimension of wellness includes friendships?|social|physical|environmental|financial|=>Healthy relationships.
What is health literacy?|being able to find and understand health information|being tall|being fast|memorizing food labels|=>Skill for decisions.
Which choice supports balance?|limiting screen time and getting enough sleep|gaming all night|skipping meals|never going outside|=>Balance matters.
Why think about long-term consequences?|a choice can affect your future health|it has no effect|only today matters|it is boring|=>Plan ahead.
`,
  }, {
    examples: ["Turn a vague goal into a SMART goal: 'Eat better' → 'I will eat one extra serving of vegetables at dinner on school nights for 3 weeks.'", "Spotting ad tricks: 'Everyone is drinking it!' (bandwagon), a famous athlete (endorsement), a photo that's edited (unrealistic image)."],
    vocab: { "wellness": "Good sleep supports wellness.", "SMART goal": "A SMART goal has a deadline.", "consequence": "A consequence of skipping sleep is feeling tired.", "value": "Honesty is an important value.", "advocacy": "He did advocacy for bike safety.", "media influence": "Media influence can change what people want to buy.", "health literacy": "Health literacy helps you pick reliable sources." },
  });

  const idx = g7.subjects.findIndex((s) => s.id === "ushistory");
  g7.subjects.splice(idx + 1, 0, subject);
})();
