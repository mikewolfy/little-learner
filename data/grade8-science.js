/* Grade 8 Physical Science: atoms, matter, reactions, motion and forces, energy, waves, electricity and magnetism.
   Questions use a compact format: question | right answer | wrong | wrong | wrong | => explanation
   (the right answer comes first; the app shuffles the choices). */
(function () {
  const g8 = window.CURRICULUM[8];
  const Q = (text) => text.trim().split("\n").filter((l) => l.trim()).map((l) => {
    const parts = l.split("|").map((p) => p.trim());
    const ex = parts.pop().replace(/^=>\s*/, "");
    const q = parts.shift();
    return [q, parts, 0, ex];
  });
  const subject = {
    id: "science", name: "Physical Science", icon: "⚛️", standards: "Science SOL (Physical Science)",
    about: "Physical Science for grade 8: atoms and the periodic table, states of matter, chemical reactions, motion and forces, work and energy, waves, sound and light, and electricity and magnetism.",
    units: [],
  };
  window.EXTRAS = window.EXTRAS || {};
  const add = (u, extra) => {
    u.questions = Q(u.questions);
    subject.units.push(u);
    window.EXTRAS["8/science/" + u.id] = extra;
  };

  add({
    id: "atoms", title: "Atoms & the Periodic Table", sol: "PS.2",
    summary: "The parts of an atom, how the periodic table is organized, and how elements are named.",
    points: [
      "An atom is the smallest unit of an element that keeps the element's properties. It has a nucleus with protons (positive charge) and neutrons (no charge), surrounded by electrons (negative charge) in an electron cloud.",
      "The atomic number is the number of protons and identifies the element. In a neutral atom, protons equal electrons. The mass number is protons plus neutrons.",
      "Isotopes are atoms of the same element with different numbers of neutrons (carbon-12 and carbon-14).",
      "An element is a pure substance made of one kind of atom. Each has a symbol: H (hydrogen), He (helium), C (carbon), N (nitrogen), O (oxygen), Na (sodium), Cl (chlorine), Fe (iron), Cu (copper), Ag (silver), Au (gold).",
      "The periodic table arranges elements by increasing atomic number. Rows are periods; columns are groups (families) whose members have similar properties and the same number of valence (outer) electrons.",
      "Most elements are metals (shiny, conduct heat and electricity, malleable). Nonmetals are dull and poor conductors. Metalloids have properties of both.",
      "Group 1 are alkali metals (very reactive). Group 17 are halogens (reactive nonmetals). Group 18 are noble gases (unreactive, full outer shell).",
      "A compound is two or more elements chemically combined (H₂O). A molecule is two or more atoms bonded together. A mixture is substances combined but not chemically bonded.",
    ],
    example: "Carbon has atomic number 6 and mass number 12.\nProtons = 6, electrons = 6 (neutral), neutrons = 12 − 6 = 6.\n\nSodium (Na) is in Group 1: it has 1 valence electron and is very reactive.",
    vocab: [["atom", "The smallest unit of an element that keeps the element's properties."], ["proton", "A positively charged particle in the nucleus."], ["neutron", "A particle with no charge in the nucleus."], ["electron", "A negatively charged particle that moves around the nucleus."], ["atomic number", "The number of protons in an atom."], ["isotope", "Atoms of the same element with different numbers of neutrons."], ["valence electron", "An electron in the outermost energy level of an atom."]],
    questions: `
Which particle has a positive charge?|proton|neutron|electron|photon|=>Protons are in the nucleus.
Which particle has no charge?|neutron|proton|electron|ion|=>Neutrons are neutral.
Where are electrons found?|in the electron cloud around the nucleus|in the nucleus|inside protons|only in metals|=>Negative charge.
What does the atomic number tell you?|the number of protons|the number of neutrons|the mass|the number of electron shells|=>It identifies the element.
An atom has 8 protons and 8 neutrons. What is its mass number?|16|8|24|0|=>Protons + neutrons.
A neutral atom has 11 protons. How many electrons does it have?|11|0|22|12|=>Protons equal electrons.
What are isotopes?|atoms of the same element with different numbers of neutrons|atoms with different numbers of protons|ions|compounds|=>Same atomic number.
In the periodic table, what do the columns (groups) share?|similar properties and valence electrons|the same atomic mass|the same number of neutrons|the same state|=>Families.
Which group contains the noble gases?|Group 18|Group 1|Group 17|Group 2|=>Unreactive gases.
Which group contains the very reactive alkali metals?|Group 1|Group 18|Group 17|Group 14|=>Sodium and potassium.
Which is a property of most metals?|conduct electricity and heat|dull and brittle|insulate heat|very low density only|=>Also malleable.
What is the symbol for sodium?|Na|S|So|N|=>From Latin natrium.
What is the symbol for iron?|Fe|Ir|I|F|=>From Latin ferrum.
What is a compound?|two or more elements chemically combined|a mixture of elements|a single atom|an ion|=>For example H₂O.
`,
  }, {
    examples: ["Reading a periodic table square: the number on top is the atomic number (protons), the letter(s) is the symbol, and the decimal is the average atomic mass.", "Neutrons = mass number − atomic number. For chlorine-35 (atomic number 17): 35 − 17 = 18 neutrons."],
    vocab: { "atom": "Everything around you is made of atoms.", "proton": "Each proton has a charge of +1.", "neutron": "A neutron has about the same mass as a proton.", "electron": "An electron is much lighter than a proton.", "atomic number": "Oxygen's atomic number is 8.", "isotope": "Carbon-14 is an isotope of carbon.", "valence electron": "Sodium has one valence electron." },
  });

  add({
    id: "matter", title: "Properties & States of Matter", sol: "PS.3",
    summary: "How matter is classified, how it changes state, and how heat moves.",
    points: [
      "Matter is anything that has mass and takes up space. Physical properties can be observed without changing the substance (color, density, melting point). Chemical properties describe how a substance reacts (flammability, rusting).",
      "Density = mass ÷ volume. Objects that are denser than water sink; less dense objects float. Units are g/cm³ or g/mL.",
      "States of matter: solid (definite shape and volume), liquid (definite volume, takes the shape of its container), gas (no definite shape or volume), and plasma (ionized gas, like the sun).",
      "Kinetic theory: particles are always moving. Solids vibrate in place, liquids slide past each other, and gas particles move freely. More thermal energy means faster particles.",
      "Phase changes: melting (solid to liquid), freezing (liquid to solid), vaporization (liquid to gas: evaporation or boiling), condensation (gas to liquid), sublimation (solid to gas), deposition (gas to solid). Melting and boiling absorb energy; freezing and condensation release it.",
      "Temperature measures the average kinetic energy of particles. Heat is the transfer of thermal energy from a warmer object to a cooler one.",
      "Heat transfer: conduction (direct contact), convection (movement of fluids), radiation (electromagnetic waves, even through space).",
      "A physical change does not make a new substance (ice melting). A chemical change forms a new substance (wood burning). A mixture can be separated by physical means; a solution is a mixture with a solute dissolved in a solvent.",
    ],
    example: "Density: a rock has a mass of 60 g and a volume of 20 cm³.\nDensity = 60 ÷ 20 = 3 g/cm³, so it sinks in water (1 g/cm³).\n\nHeat transfer: a metal spoon in hot soup heats up by conduction.",
    vocab: [["density", "The mass of a substance per unit of volume."], ["physical change", "A change in form or state that does not create a new substance."], ["chemical change", "A change that forms one or more new substances."], ["sublimation", "A solid changing directly into a gas."], ["conduction", "Heat transfer by direct contact."], ["convection", "Heat transfer by the movement of a fluid."], ["solute", "The substance that is dissolved in a solution."]],
    questions: `
What is density?|mass per unit of volume|volume per unit of mass|weight only|temperature|=>D = m ÷ V.
A block has a mass of 40 g and a volume of 10 cm³. What is its density?|4 g/cm³|0.25 g/cm³|400 g/cm³|50 g/cm³|=>40 ÷ 10.
Water's density is 1 g/mL. An object with density 0.8 g/mL will…|float|sink|dissolve|boil|=>Less dense floats.
Which state of matter has a definite shape and volume?|solid|liquid|gas|plasma|=>Particles vibrate in place.
Which state has a definite volume but takes the shape of its container?|liquid|solid|gas|plasma|=>Particles slide past each other.
What is sublimation?|a solid changing directly into a gas|a gas changing into a liquid|a liquid changing into a solid|a liquid changing into a gas|=>Dry ice.
What is condensation?|a gas changing into a liquid|a liquid changing into a gas|a solid melting|a solid changing into a gas|=>Heat is released.
Which phase change absorbs energy?|melting|freezing|condensation|deposition|=>Melting needs energy.
Temperature measures…|the average kinetic energy of particles|total energy|the number of particles|volume|=>Particle motion.
Heat moves by direct contact in…|conduction|convection|radiation|evaporation|=>Spoon in hot soup.
Heat moves through space by…|radiation|conduction|convection|condensation|=>Sunlight.
Which is a chemical property?|flammability|density|color|melting point|=>Ability to burn.
Which is a physical change?|ice melting|wood burning|iron rusting|baking a cake|=>Same substance.
In salt water, the salt is the…|solute|solvent|mixture|compound|=>Water is the solvent.
`,
  }, {
    examples: ["Phase-change check: dew on grass = condensation; a puddle drying = evaporation; frost forming = deposition.", "Floating test: oil (0.9 g/mL) floats on water (1.0 g/mL) because it is less dense."],
    vocab: { "density": "Lead has a high density.", "physical change": "Crushing a can is a physical change.", "chemical change": "Burning wood is a chemical change.", "sublimation": "Dry ice shows sublimation.", "conduction": "A pan handle heats by conduction.", "convection": "Warm air rising is convection.", "solute": "Sugar is the solute in sweet tea." },
  });

  add({
    id: "reactions", title: "Chemical Reactions", sol: "PS.4",
    summary: "How substances change into new substances, how to balance equations, and acids and bases.",
    points: [
      "In a chemical reaction, reactants are rearranged into products. Signs of a reaction include a color change, gas bubbles, a precipitate (new solid), light or heat, and a new odor.",
      "Law of conservation of mass: matter is not created or destroyed in a reaction, so total mass of reactants equals total mass of products. Chemical equations must be balanced: 2H₂ + O₂ → 2H₂O has 4 H and 2 O on both sides.",
      "Coefficients (numbers in front) tell how many molecules; subscripts (small numbers) tell how many atoms in a molecule and cannot be changed when balancing.",
      "Types of reactions: synthesis (A + B → AB), decomposition (AB → A + B), single replacement (A + BC → AC + B), double replacement (AB + CD → AD + CB), and combustion (a fuel reacts with oxygen to release energy).",
      "Exothermic reactions release energy (heat or light); endothermic reactions absorb energy.",
      "Reaction rate increases with higher temperature, greater concentration, more surface area (smaller pieces), and a catalyst (speeds a reaction without being used up).",
      "Acids taste sour, turn blue litmus red, and have a pH below 7. Bases feel slippery and have a pH above 7. Pure water is neutral at pH 7. The pH scale runs from 0 to 14.",
      "Neutralization: an acid and a base react to form water and a salt. Indicators like litmus and universal indicator show pH.",
    ],
    example: "Balance: H₂ + O₂ → H₂O\nCount O: 2 on left, 1 on right → put 2 in front of H₂O → H₂ + O₂ → 2H₂O\nNow H: 2 on left, 4 on right → put 2 in front of H₂ → 2H₂ + O₂ → 2H₂O ✓\n\nConservation of mass: 10 g of reactants makes 10 g of products.",
    vocab: [["reactant", "A substance that is present at the start of a chemical reaction."], ["product", "A substance formed by a chemical reaction."], ["conservation of mass", "Mass is neither created nor destroyed in a chemical reaction."], ["catalyst", "A substance that speeds up a reaction without being used up."], ["exothermic", "A reaction that releases energy."], ["acid", "A substance with a pH below 7 that donates hydrogen ions."], ["pH", "A scale from 0 to 14 that measures how acidic or basic a solution is."]],
    questions: `
What are reactants?|the starting substances in a reaction|the substances formed|catalysts|solvents|=>On the left of the arrow.
What are products?|the substances formed in a reaction|the starting substances|catalysts|solutions|=>On the right of the arrow.
Which is a sign of a chemical reaction?|gas bubbles forming|a change in size|a change in shape|a change in state only|=>New substance forms.
10 g of reactants fully react. How many grams of products form?|10 g|5 g|20 g|0 g|=>Conservation of mass.
In 2H₂O, what does the coefficient 2 mean?|there are two water molecules|there are two oxygen atoms only|each molecule has two atoms|there are 2 elements|=>Coefficients count molecules.
Which equation is balanced?|2H₂ + O₂ → 2H₂O|H₂ + O₂ → H₂O|H₂ + 2O₂ → 2H₂O|2H₂ + 2O₂ → H₂O|=>4 H and 2 O on each side.
Which reaction type is A + B → AB?|synthesis|decomposition|single replacement|combustion|=>Two combine into one.
Which reaction type is AB → A + B?|decomposition|synthesis|double replacement|combustion|=>One breaks into two.
Which is a combustion reaction?|burning methane in oxygen|ice melting|salt dissolving|iron rusting slowly|=>Fuel + oxygen releases energy.
An exothermic reaction…|releases energy|absorbs energy|has no energy change|needs a catalyst|=>Heat or light given off.
What does a catalyst do?|speeds up a reaction without being used up|slows a reaction|is a product|is a reactant|=>Lowers the energy needed.
Which would make a reaction faster?|crushing a solid into powder|cooling the mixture|using larger chunks|diluting the solution|=>More surface area.
A solution has a pH of 3. It is…|acidic|basic|neutral|a base|=>pH below 7.
What happens when an acid and a base react?|water and a salt form|only a gas forms|nothing happens|the pH drops to 0|=>Neutralization.
`,
  }, {
    examples: ["Atom count check for 2H₂ + O₂ → 2H₂O: left has 4 H and 2 O; right has 4 H and 2 O. Balanced!", "pH examples: lemon juice ≈ 2 (acid), pure water = 7 (neutral), baking soda ≈ 9 (base), bleach ≈ 13 (strong base)."],
    vocab: { "reactant": "Hydrogen and oxygen are reactants.", "product": "Water is the product.", "conservation of mass": "Conservation of mass means atoms are rearranged, not lost.", "catalyst": "An enzyme is a biological catalyst.", "exothermic": "Burning is an exothermic reaction.", "acid": "Vinegar is an acid.", "pH": "The pH of water is 7." },
  });

  add({
    id: "motion", title: "Motion, Forces & Newton's Laws", sol: "PS.9",
    summary: "Speed, velocity, acceleration, and how forces change motion.",
    points: [
      "Speed = distance ÷ time. Velocity is speed in a given direction. Acceleration = (final velocity − initial velocity) ÷ time, measured in m/s². Slowing down and changing direction are also acceleration.",
      "Distance-time graphs: a steeper line means a faster speed; a flat line means at rest. Speed-time graphs: slope shows acceleration.",
      "A force is a push or pull measured in newtons (N). Balanced forces do not change motion; unbalanced forces cause acceleration. The net force is the overall force after combining forces.",
      "Newton's first law (inertia): an object at rest stays at rest and an object in motion stays in motion at constant velocity unless acted on by a net force.",
      "Newton's second law: F = m × a. Force (N) = mass (kg) × acceleration (m/s²). More force means more acceleration; more mass means less acceleration for the same force.",
      "Newton's third law: for every action there is an equal and opposite reaction (a rocket pushes gas down, gas pushes the rocket up).",
      "Mass is the amount of matter (kg). Weight is the force of gravity on mass: W = m × g, where g = 9.8 m/s² on Earth (about 10 N per kg). Friction is a force that opposes motion between surfaces. Air resistance is friction with air.",
      "Momentum = mass × velocity. Free fall means gravity is the only force acting; all objects accelerate at 9.8 m/s² (ignoring air resistance).",
    ],
    example: "Speed: a car goes 150 km in 3 h → 150 ÷ 3 = 50 km/h.\nAcceleration: from 0 to 20 m/s in 5 s → 20 ÷ 5 = 4 m/s².\nForce: a 10 kg cart accelerates at 3 m/s² → F = 10 × 3 = 30 N.\nWeight of 5 kg on Earth: 5 × 9.8 ≈ 49 N.",
    vocab: [["velocity", "Speed in a particular direction."], ["acceleration", "The rate at which velocity changes."], ["net force", "The overall force on an object after all forces are combined."], ["inertia", "The tendency of an object to resist changes in its motion."], ["friction", "A force that opposes motion between surfaces."], ["momentum", "Mass times velocity."], ["weight", "The force of gravity acting on an object's mass."]],
    questions: `
A car travels 120 km in 2 hours. What is its speed?|60 km/h|240 km/h|122 km/h|30 km/h|=>120 ÷ 2.
A runner goes from 0 to 10 m/s in 5 s. What is the acceleration?|2 m/s²|50 m/s²|15 m/s²|0.5 m/s²|=>10 ÷ 5.
What is velocity?|speed in a given direction|speed only|distance|acceleration|=>Includes direction.
On a distance-time graph, a horizontal line means the object is…|at rest|speeding up|slowing down|in free fall|=>Distance not changing.
Balanced forces on an object…|do not change its motion|cause acceleration|always stop it|double its speed|=>Net force is zero.
Newton's first law is also called the law of…|inertia|acceleration|action-reaction|gravity|=>Objects resist changes in motion.
Which formula is Newton's second law?|F = m × a|a = F × m|F = m ÷ a|m = F × a|=>Force = mass × acceleration.
What force is needed to accelerate a 5 kg object at 4 m/s²?|20 N|9 N|1.25 N|0.8 N|=>5 × 4.
Newton's third law says…|every action has an equal and opposite reaction|force equals mass times acceleration|objects in motion stay in motion|heavier objects fall faster|=>Action-reaction pairs.
What is the weight of a 10 kg object on Earth (g = 9.8 m/s²)?|98 N|10 N|0.98 N|980 N|=>W = m × g.
What is friction?|a force that opposes motion between surfaces|a force that speeds things up|a type of inertia|a type of acceleration|=>Rough surfaces create more.
What is momentum?|mass × velocity|mass ÷ velocity|force × time only|speed ÷ time|=>p = m v.
A 2 kg ball moves at 3 m/s. What is its momentum?|6 kg·m/s|1.5 kg·m/s|5 kg·m/s|9 kg·m/s|=>2 × 3.
Without air resistance, which falls faster?|they fall at the same rate|the heavier object|the lighter object|the larger object|=>Free fall acceleration is 9.8 m/s².
`,
  }, {
    examples: ["Seat belts and inertia: when a car stops suddenly, your body keeps moving forward unless the belt exerts a force.", "Equation triangle: F = ma → a = F ÷ m and m = F ÷ a."],
    vocab: { "velocity": "The velocity was 20 m/s east.", "acceleration": "The car's acceleration was 3 m/s².", "net force": "The net force was zero.", "inertia": "Inertia keeps a moving object moving.", "friction": "Friction slows a sliding box.", "momentum": "A truck has more momentum than a bike at the same speed.", "weight": "Your weight changes on the moon." },
  });

  add({
    id: "energy", title: "Work, Energy, Power & Simple Machines", sol: "PS.8",
    summary: "How energy changes form, how work and power are measured, and how machines make work easier.",
    points: [
      "Energy is the ability to do work or cause change, measured in joules (J). Kinetic energy is energy of motion: KE = ½ m v². Potential energy is stored energy; gravitational PE = m g h.",
      "Forms of energy: mechanical, thermal, chemical, electrical, radiant (light), sound, and nuclear.",
      "Law of conservation of energy: energy cannot be created or destroyed, only transformed. A roller coaster at the top has maximum PE; at the bottom, maximum KE.",
      "Work is done when a force moves an object in the direction of the force: W = F × d (joules = newtons × meters). If the object does not move, no work is done.",
      "Power is the rate of doing work: P = W ÷ t, measured in watts (W). 1 W = 1 J/s.",
      "Simple machines make work easier by changing the size or direction of a force: lever, pulley, wheel and axle, inclined plane, wedge, and screw. They do not reduce the work needed.",
      "Mechanical advantage (MA) = output force ÷ input force. Efficiency = (useful work output ÷ work input) × 100%. No machine is 100% efficient because some energy is lost as heat to friction.",
      "Renewable energy sources (solar, wind, hydro, geothermal) can be replaced; nonrenewable sources (coal, oil, natural gas, uranium) are limited.",
    ],
    example: "Work: pushing a box with 50 N through 4 m → W = 50 × 4 = 200 J.\nPower: 200 J in 10 s → P = 200 ÷ 10 = 20 W.\nKE of a 2 kg ball at 3 m/s: ½ × 2 × 3² = 9 J.\nPE of a 2 kg book 3 m high: 2 × 9.8 × 3 ≈ 58.8 J.",
    vocab: [["kinetic energy", "The energy of motion."], ["potential energy", "Stored energy due to position or condition."], ["work", "Force applied over a distance in the direction of the force."], ["power", "The rate at which work is done."], ["joule", "The SI unit of energy and work."], ["mechanical advantage", "The number of times a machine multiplies the input force."], ["efficiency", "The percent of input work that becomes useful output work."]],
    questions: `
What is kinetic energy?|energy of motion|stored energy|heat only|light|=>Moving objects have it.
What is potential energy?|stored energy because of position or condition|energy of motion|sound energy|nuclear only|=>A book on a high shelf.
What is the formula for work?|W = F × d|W = F ÷ d|W = m × a|W = P × t|=>Force times distance.
How much work is done pushing a box with 20 N over 5 m?|100 J|4 J|25 J|15 J|=>20 × 5.
What is power?|the rate at which work is done|force times distance|stored energy|mass times velocity|=>P = W ÷ t.
A 100 J job is done in 5 s. What is the power?|20 W|500 W|95 W|105 W|=>100 ÷ 5.
What unit measures power?|watt|joule|newton|volt|=>1 W = 1 J/s.
The law of conservation of energy says energy…|cannot be created or destroyed, only changed|can be created|is always lost|only exists as heat|=>Total stays constant.
At the top of a roller coaster hill, the cart has the most…|potential energy|kinetic energy|friction|power|=>Highest point.
Which simple machine is a ramp?|inclined plane|lever|pulley|wedge|=>Reduces the force needed.
A seesaw is an example of a…|lever|pulley|screw|inclined plane|=>Pivot (fulcrum).
Why can no machine be 100% efficient?|some energy is lost as heat from friction|machines create energy|machines use no energy|gravity cancels|=>Energy converts to thermal energy.
A machine does 80 J of useful work from 100 J of input. What is its efficiency?|80%|20%|125%|180%|=>80 ÷ 100.
Which is a renewable energy source?|solar|coal|oil|natural gas|=>Replaced naturally.
`,
  }, {
    examples: ["Energy transformation in a lamp: electrical → light + heat.", "Mechanical advantage: lifting a 100 N load with a 25 N effort gives MA = 100 ÷ 25 = 4."],
    vocab: { "kinetic energy": "A rolling ball has kinetic energy.", "potential energy": "A stretched rubber band has potential energy.", "work": "Lifting a box is work.", "power": "A strong motor has high power.", "joule": "Lifting an apple 1 m takes about 1 joule.", "mechanical advantage": "A longer ramp has greater mechanical advantage.", "efficiency": "An efficient engine wastes less energy." },
  });

  add({
    id: "waves", title: "Waves, Sound & Light", sol: "PS.6",
    summary: "How waves carry energy, how sound and light behave, and the electromagnetic spectrum.",
    points: [
      "A wave transfers energy without transferring matter. Parts of a wave: crest (high point), trough (low point), amplitude (height from rest to crest), wavelength (distance between crests), and frequency (waves per second, in hertz).",
      "Wave speed = frequency × wavelength (v = f × λ). Period = 1 ÷ frequency.",
      "Transverse waves move the medium up and down, perpendicular to the wave direction (light, water waves). Longitudinal waves move the medium back and forth, parallel to the wave direction (sound).",
      "Mechanical waves need a medium; electromagnetic waves can travel through a vacuum. Sound cannot travel in space.",
      "Sound: pitch depends on frequency (high frequency = high pitch); loudness depends on amplitude, measured in decibels (dB). Sound travels about 343 m/s in air, faster in liquids and solids.",
      "Light travels at about 3.0 × 10⁸ m/s in a vacuum. Reflection is a wave bouncing off a surface (angle of incidence = angle of reflection). Refraction is bending as a wave changes speed entering a new medium. Lenses use refraction.",
      "The electromagnetic spectrum, from lowest to highest frequency: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays. Visible light colors from low to high frequency: red, orange, yellow, green, blue, indigo, violet.",
      "Objects appear colored because they reflect some wavelengths and absorb others. Materials can be transparent, translucent, or opaque. The Doppler effect changes the pitch of a moving sound source.",
    ],
    example: "Wave speed: f = 5 Hz and λ = 2 m → v = 5 × 2 = 10 m/s.\nPeriod: f = 5 Hz → T = 1 ÷ 5 = 0.2 s.\n\nThunder arrives after lightning because light is much faster than sound.",
    vocab: [["wavelength", "The distance between two matching points on consecutive waves."], ["frequency", "The number of waves that pass a point each second, in hertz."], ["amplitude", "The height of a wave from its rest position to its crest."], ["refraction", "The bending of a wave as it enters a new medium."], ["electromagnetic wave", "A wave that can travel through empty space, such as light."], ["longitudinal wave", "A wave in which the medium moves parallel to the wave's direction."], ["decibel", "A unit used to measure loudness of sound."]],
    questions: `
A wave transfers…|energy without transferring matter|matter only|both matter and energy|nothing|=>Waves carry energy.
What is the high point of a wave called?|crest|trough|amplitude|wavelength|=>The low point is the trough.
What is wave speed?|frequency × wavelength|frequency ÷ wavelength|amplitude × frequency|wavelength ÷ period|=>v = f λ.
A wave has a frequency of 4 Hz and a wavelength of 3 m. What is its speed?|12 m/s|7 m/s|0.75 m/s|1.3 m/s|=>4 × 3.
Sound is what type of wave?|longitudinal|transverse|electromagnetic|a vacuum wave|=>Compressions and rarefactions.
Which wave can travel through a vacuum?|light|sound|water waves|waves on a string|=>Electromagnetic waves.
Pitch depends on a sound wave's…|frequency|amplitude|speed in a vacuum|color|=>Higher frequency = higher pitch.
Loudness depends on a sound wave's…|amplitude|frequency|wavelength only|temperature|=>Measured in decibels.
Sound travels fastest through…|a solid|a gas|a vacuum|space|=>Particles are closer together.
What is refraction?|the bending of a wave when it enters a new medium|a wave bouncing off a surface|a wave spreading around an obstacle|a wave being absorbed|=>A straw looks bent in water.
Which is the correct order from lowest to highest frequency?|radio, infrared, visible, X-ray|X-ray, visible, infrared, radio|visible, radio, X-ray, infrared|gamma, radio, visible, X-ray|=>Radio waves have the lowest frequency.
Which color of visible light has the longest wavelength?|red|violet|green|blue|=>Red is lowest frequency.
Why does a red apple look red?|it reflects red light and absorbs other colors|it absorbs red light|it emits red light|it refracts red light|=>Selective reflection.
Why do we see lightning before we hear thunder?|light travels much faster than sound|sound travels faster than light|thunder happens first|light is louder|=>3.0 × 10⁸ m/s vs 343 m/s.
`,
  }, {
    examples: ["Match the wave: sound = longitudinal; light = transverse electromagnetic; a ripple on water = transverse mechanical.", "Echo: sound reflecting off a wall; a mirror: light reflecting at the same angle it arrives."],
    vocab: { "wavelength": "Red light has a longer wavelength than blue.", "frequency": "A high frequency means a high pitch.", "amplitude": "A larger amplitude sound is louder.", "refraction": "Refraction makes a pencil look bent.", "electromagnetic wave": "Radio waves are electromagnetic waves.", "longitudinal wave": "Sound is a longitudinal wave.", "decibel": "A whisper is about 30 decibels." },
  });

  add({
    id: "electricity", title: "Electricity & Magnetism", sol: "PS.10",
    summary: "Charge, circuits, Ohm's law, magnets, and how electricity and magnetism are connected.",
    points: [
      "Electric charge can be positive or negative. Like charges repel; opposite charges attract. Static electricity builds up when electrons transfer between objects (rubbing a balloon).",
      "Conductors (metals) let charge flow easily; insulators (rubber, plastic, glass) do not.",
      "Electric current (I) is the flow of charge, measured in amperes (A). Voltage (V) is the push that moves charge, measured in volts. Resistance (R) opposes current, measured in ohms (Ω).",
      "Ohm's law: V = I × R. Electric power: P = I × V (watts).",
      "A circuit is a complete path for current. It needs a source, conductors, and a load; switches open or close it. In a series circuit there is one path, so if one part breaks, all stop; in a parallel circuit there are multiple paths, so other branches keep working.",
      "Magnets have north and south poles. Like poles repel; opposite poles attract. A magnetic field surrounds a magnet. Earth has a magnetic field; a compass points toward the magnetic north pole.",
      "An electric current makes a magnetic field. An electromagnet is a coil of wire around an iron core; more coils or current makes it stronger.",
      "Electromagnetic induction: moving a magnet near a coil (or a coil in a magnetic field) induces current. Generators convert motion to electrical energy; motors convert electrical energy to motion; transformers change voltage.",
    ],
    example: "Ohm's law: a 12 V battery across a 4 Ω resistor → I = V ÷ R = 12 ÷ 4 = 3 A.\nPower: P = I × V = 3 × 12 = 36 W.\n\nSeries vs. parallel: in a string of old holiday lights (series), one bad bulb makes all go dark.",
    vocab: [["current", "The flow of electric charge, measured in amperes."], ["voltage", "The energy per charge that pushes current through a circuit, measured in volts."], ["resistance", "Opposition to the flow of current, measured in ohms."], ["circuit", "A complete path for electric current."], ["conductor", "A material that lets electric charge flow easily."], ["electromagnet", "A magnet made by passing current through a coil of wire."], ["generator", "A device that converts mechanical energy into electrical energy."]],
    questions: `
What happens when two like charges are near each other?|they repel|they attract|nothing|they cancel|=>Opposites attract.
Which of these is a good conductor?|copper|rubber|plastic|glass|=>Metals conduct.
What is current measured in?|amperes|volts|ohms|watts|=>The flow of charge.
What is voltage measured in?|volts|amperes|ohms|joules|=>The push on charges.
What is resistance measured in?|ohms|volts|amperes|watts|=>It opposes current.
What is Ohm's law?|V = I × R|P = m × a|F = m × a|V = I ÷ R|=>Voltage = current × resistance.
A 9 V battery is connected to a 3 Ω resistor. What is the current?|3 A|27 A|12 A|0.33 A|=>9 ÷ 3.
A circuit has 2 A of current at 10 V. What is the power?|20 W|5 W|12 W|8 W|=>P = I V.
In a series circuit, if one bulb burns out…|all the bulbs go out|the others stay on|the others get brighter|current increases|=>Only one path.
In a parallel circuit, if one bulb burns out…|the other branches keep working|all the bulbs go out|the voltage becomes zero|the battery dies|=>Multiple paths.
What happens when two north poles are near each other?|they repel|they attract|they merge|they lose magnetism|=>Like poles repel.
What is an electromagnet?|a coil of wire around an iron core carrying current|a permanent magnet|a type of battery|a type of insulator|=>It can be turned on and off.
How can you make an electromagnet stronger?|add more coils or more current|use less current|remove the core|use a plastic core|=>Increases the field.
What does a generator do?|converts mechanical energy into electrical energy|converts electrical energy into motion|stores charge|changes voltage|=>Uses electromagnetic induction.
`,
  }, {
    examples: ["Build a circuit: battery (source) + wires (conductors) + bulb (load) + switch. Closed switch = complete path.", "Motor vs. generator: motor = electrical → motion; generator = motion → electrical."],
    vocab: { "current": "The current in the wire was 2 amps.", "voltage": "Wall outlets provide about 120 volts.", "resistance": "A thin wire has more resistance.", "circuit": "A circuit must be closed for current to flow.", "conductor": "Copper is a conductor.", "electromagnet": "A crane uses an electromagnet.", "generator": "A power plant uses a generator." },
  });

  add({
    id: "investigations", title: "Scientific Investigations & Measurement", sol: "PS.1",
    summary: "Planning experiments, measuring with SI units, and analyzing data.",
    points: [
      "A scientific investigation starts with a testable question, then a hypothesis, a procedure, data collection, analysis, and a conclusion. Results should be repeatable.",
      "Variables: the independent variable is what you change; the dependent variable is what you measure; controlled variables stay the same. A control group is used for comparison.",
      "SI units: meter (length), kilogram (mass), second (time), liter (volume), kelvin or °C (temperature). Prefixes: kilo (1,000), centi (1/100), milli (1/1,000). Examples: 2.5 km = 2,500 m; 300 mL = 0.3 L.",
      "Tools: balance (mass), graduated cylinder (liquid volume), metric ruler (length), thermometer (temperature), stopwatch (time), spring scale (force).",
      "Accuracy is how close a measurement is to the true value; precision is how close repeated measurements are to each other.",
      "Graphs: the independent variable goes on the x-axis and the dependent variable on the y-axis. Line graphs show change over time; bar graphs compare categories. A line of best fit shows a trend.",
      "Scientific notation writes very large or small numbers: 3,000,000 = 3 × 10⁶; 0.00045 = 4.5 × 10⁻⁴.",
      "Lab safety: wear goggles, follow directions, know where safety equipment is, never taste chemicals, and report spills and injuries. Scientists use models, peer review, and ethical practices.",
    ],
    example: "Convert: 4.2 km → m: 4.2 × 1,000 = 4,200 m.\nConvert: 250 g → kg: 250 ÷ 1,000 = 0.25 kg.\n\nExperiment: How does temperature affect how fast sugar dissolves? Independent: water temperature. Dependent: time to dissolve. Controlled: amount of sugar, amount of water, stirring.",
    vocab: [["hypothesis", "A testable explanation or prediction."], ["independent variable", "The factor that you change in an experiment."], ["dependent variable", "The factor that you measure in an experiment."], ["control group", "The group not given the treatment, used for comparison."], ["accuracy", "How close a measurement is to the true value."], ["precision", "How close repeated measurements are to each other."], ["SI", "The International System of Units, used in science."]],
    questions: `
What is a hypothesis?|a testable explanation or prediction|a conclusion|a graph|a measurement|=>It can be tested.
In an experiment, the independent variable is the one that…|you change|you measure|stays the same|is the result|=>The cause.
The dependent variable is the one that…|you measure|you change|stays the same|is the control|=>The effect.
What is a controlled variable?|a factor kept the same|the variable you change|the result|the hypothesis|=>Makes the test fair.
How many meters are in 3.5 km?|3,500|350|35|35,000|=>× 1,000.
Convert 450 g to kilograms.|0.45 kg|45 kg|4.5 kg|4,500 kg|=>÷ 1,000.
Which tool measures the volume of a liquid?|graduated cylinder|balance|ruler|thermometer|=>mL.
Which tool measures mass?|balance|stopwatch|ruler|spring scale only|=>Grams.
Accuracy means…|how close a measurement is to the true value|how close repeated measurements are|how big a number is|how fast something is measured|=>Correctness.
Precision means…|how close repeated measurements are to each other|how close to the true value|how large the data are|how many trials|=>Consistency.
Which graph best shows change over time?|line graph|bar graph|circle graph|pictograph|=>Trends.
On a graph, the independent variable goes on the…|x-axis|y-axis|title|legend|=>Horizontal.
Write 4,500,000 in scientific notation.|4.5 × 10⁶|45 × 10⁵|0.45 × 10⁷|4.5 × 10⁷|=>Move the decimal 6 places.
What should you do if a chemical spills in the lab?|tell the teacher right away|wipe it up alone|ignore it|taste it|=>Safety first.
`,
  }, {
    examples: ["Fair test: change only one variable at a time. If you test fertilizer, use the same plant, light, and water for every group.", "Metric ladder: kilo → hecto → deka → base → deci → centi → milli. Move the decimal one place per step."],
    vocab: { "hypothesis": "Her hypothesis was that warm water dissolves sugar faster.", "independent variable": "Temperature was the independent variable.", "dependent variable": "Dissolving time was the dependent variable.", "control group": "The control group got plain water.", "accuracy": "The scale's accuracy was checked with a standard mass.", "precision": "The measurements had high precision.", "SI": "SI units make results easy to compare." },
  });

  const idx = g8.subjects.findIndex((s) => s.id === "history");
  g8.subjects.splice(idx < 0 ? 0 : idx, 0, subject);
})();
