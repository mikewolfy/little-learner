/* Grade 8 Physical Science: bonus question banks.
   Calculation questions come from seeded templates (every answer is computed); the rest are hand-written lines.
   Line format: question | right | wrong | wrong | wrong | => explanation   (right answer first) */
(function () {
  "use strict";
  const B = window.BONUS, T = B.T, K = (u) => "8/science/" + u;
  const ri = T.ri, pick = T.pick;
  const A = (u, t) => B.add(K(u), t.split("\n").filter((x) => x.trim()).join("\n"));
  const f1 = (x) => String(Math.round(x * 100) / 100);
  // numeric answer with nearby wrong answers
  const num = (r, right, unit, extra) => {
    const u = unit ? " " + unit : "";
    const ws = [right * 2, right / 2, right + ri(r, 1, 5), Math.abs(right - ri(r, 1, 4)), right * 10, right + 10].concat(extra || [])
      .filter((x) => x !== right && x > 0);
    return T.mc(r, f1(right) + u, ws.map((w) => f1(w) + u), (rr) => f1(right + ri(rr, 1, 9)) + u);
  };

  /* ---------- atoms ---------- */
  const EL = [["hydrogen", "H", 1], ["helium", "He", 2], ["lithium", "Li", 3], ["carbon", "C", 6], ["nitrogen", "N", 7], ["oxygen", "O", 8], ["fluorine", "F", 9], ["neon", "Ne", 10], ["sodium", "Na", 11], ["magnesium", "Mg", 12], ["aluminum", "Al", 13], ["silicon", "Si", 14], ["phosphorus", "P", 15], ["sulfur", "S", 16], ["chlorine", "Cl", 17], ["argon", "Ar", 18], ["potassium", "K", 19], ["calcium", "Ca", 20]];
  B.tpl(K("atoms"), (r) => { const [n, s, z] = pick(r, EL); return [`What is the chemical symbol for ${n}?`, T.mc(r, s, T.shuf(r, EL.filter((e) => e[1] !== s).map((e) => e[1])), null).slice(0, 4), 0, `${n} has the symbol ${s}.`]; }, 14);
  B.tpl(K("atoms"), (r) => { const [n, s, z] = pick(r, EL); return [`What is the atomic number of ${n} (${s})?`, T.mc(r, String(z), [z + 1, z - 1, z * 2, z + 2].filter((x) => x > 0).map(String), null).slice(0, 4), 0, `${n} has ${z} protons, so its atomic number is ${z}.`]; }, 14);
  B.tpl(K("atoms"), (r) => { const z = ri(r, 3, 20), n = ri(r, z, z + 8); const m = z + n; return [`An atom has ${z} protons and ${n} neutrons. What is its mass number?`, T.mc(r, String(m), [m - z, m + z, z, n].map(String).filter((x) => x !== String(m)), (rr) => String(m + ri(rr, 1, 5))), 0, `Mass number = protons + neutrons = ${z} + ${n} = ${m}.`]; }, 14);
  B.tpl(K("atoms"), (r) => { const z = ri(r, 3, 20), m = z + ri(r, 1, 10); const n = m - z; return [`An atom has atomic number ${z} and mass number ${m}. How many neutrons does it have?`, T.mc(r, String(n), [m, z, m + z, n + 1].map(String).filter((x) => x !== String(n)), (rr) => String(n + ri(rr, 2, 6))), 0, `Neutrons = mass number − atomic number = ${m} − ${z} = ${n}.`]; }, 14);
  B.tpl(K("atoms"), (r) => { const z = ri(r, 2, 30); return [`A neutral atom has ${z} protons. How many electrons does it have?`, T.mc(r, String(z), [z + 1, z - 1, 2 * z, 0].map(String).filter((x) => x !== String(z)), null).slice(0, 4), 0, "In a neutral atom, electrons equal protons."]; }, 8);
  A("atoms", `
What is an atom?|the smallest unit of an element that keeps its properties|a molecule|a compound|=>Building block of matter.
What is a proton?|a positively charged particle in the nucleus|a negatively charged particle|a particle with no charge|=>Charge +1.
What is a neutron?|a particle with no charge in the nucleus|a positive particle|a negative particle|=>About the same mass as a proton.
What is an electron?|a negatively charged particle outside the nucleus|a particle with no charge|a positive particle|=>Very light.
What is the nucleus?|the dense center of an atom containing protons and neutrons|the electron cloud|a molecule|=>Most of the atom's mass.
What is an atomic number?|the number of protons in an atom|the number of neutrons|the mass number|=>Identifies the element.
What is a mass number?|the number of protons plus neutrons|the number of protons|the number of electrons|=>Whole number.
What is an isotope?|an atom of an element with a different number of neutrons|an atom with different protons|a compound|=>Carbon-12 and carbon-14.
What is an ion?|an atom that has gained or lost electrons|an atom with extra neutrons|a molecule|=>Charged particle.
What is a valence electron?|an electron in the outermost energy level|an electron in the nucleus|a neutron|=>Determines reactivity.
What is an element?|a pure substance made of one kind of atom|a mixture|a compound|=>On the periodic table.
What is a compound?|two or more elements chemically combined|a mixture|a single atom|=>For example water.
What is a molecule?|two or more atoms bonded together|a single atom|a nucleus|=>O₂ or H₂O.
What is a mixture?|substances combined without chemical bonding|a compound|an element|=>Can be separated physically.
What is a period on the periodic table?|a horizontal row|a vertical column|a symbol|=>Seven periods.
What is a group (family) on the periodic table?|a vertical column|a horizontal row|a metal|=>Similar properties.
What are alkali metals?|very reactive metals in Group 1|unreactive gases|nonmetals in Group 17|=>Sodium, potassium.
What are halogens?|reactive nonmetals in Group 17|noble gases|alkali metals|=>Fluorine, chlorine.
What are noble gases?|unreactive gases in Group 18|reactive metals|halogens|=>Full outer shell.
What are metalloids?|elements with properties of both metals and nonmetals|only metals|only gases|=>Silicon is one.
Which particle determines the identity of an element?|the proton|the electron|the neutron|=>Atomic number.
Which particles are in the nucleus?|protons and neutrons|protons and electrons|electrons and neutrons|=>Electrons are outside.
Which particle has the least mass?|the electron|the proton|the neutron|=>Almost no mass.
Which group has the most reactive metals?|Group 1|Group 18|Group 14|=>Alkali metals.
Which group is unreactive?|Group 18|Group 1|Group 17|=>Noble gases.
Which is a metal?|iron|oxygen|helium|=>Shiny and conductive.
Which is a nonmetal?|sulfur|copper|iron|=>Dull and brittle.
Which is a metalloid?|silicon|sodium|chlorine|=>Semiconductor.
Which is the lightest element?|hydrogen|helium|lithium|=>Atomic number 1.
Which symbol stands for gold?|Au|Ag|Go|=>From Latin aurum.
Which symbol stands for silver?|Ag|Au|Si|=>From Latin argentum.
Which symbol stands for potassium?|K|P|Po|=>From Latin kalium.
Which symbol stands for lead?|Pb|Le|L|=>From Latin plumbum.
Which symbol stands for copper?|Cu|Co|C|=>From Latin cuprum.
Which symbol stands for helium?|He|H|Hl|=>Noble gas.
Which element is a gas at room temperature?|oxygen|iron|gold|=>Nonmetal.
Which element is a liquid metal at room temperature?|mercury|iron|copper|=>Hg.
How are elements arranged on the periodic table?|by increasing atomic number|alphabetically|by color|=>Mendeleev used mass.
Who created the first widely used periodic table?|Dmitri Mendeleev|Isaac Newton|Marie Curie|=>1869.
Why do elements in a group behave similarly?|they have the same number of valence electrons|they have the same mass|they have the same state|=>Outer electrons matter.
Why are noble gases unreactive?|their outer shell is full|they have no protons|they are metals|=>Stable.
Why are alkali metals very reactive?|they have one easily lost valence electron|they have no electrons|they are noble gases|=>Easily lose it.
True or false: Isotopes of an element have the same number of protons.|True|False|=>Same atomic number.
True or false: Electrons are in the nucleus.|False|True|=>Electron cloud.
True or false: The atomic number equals the number of protons.|True|False|=>Yes.
True or false: Most elements are metals.|True|False|=>Yes.
True or false: A neutral atom has equal protons and electrons.|True|False|=>Charges balance.
Which charge does a proton have?|positive|negative|neutral|=>+1.
Which charge does an electron have?|negative|positive|neutral|=>−1.
What does the periodic table's number on top of a square show?|the atomic number|the mass number only|the number of neutrons|=>Protons.
`);

  /* ---------- matter ---------- */
  B.tpl(K("matter"), (r) => { const v = ri(r, 2, 20), d = ri(r, 1, 9); const m = d * v; return [`A sample has a mass of ${m} g and a volume of ${v} cm³. What is its density?`, num(r, d, "g/cm³", [v, m, m + v]), 0, `D = m ÷ V = ${m} ÷ ${v} = ${d} g/cm³.`]; }, 14);
  B.tpl(K("matter"), (r) => { const v = ri(r, 2, 15), d = ri(r, 2, 9); const m = d * v; return [`A material has a density of ${d} g/cm³. What is the mass of ${v} cm³ of it?`, num(r, m, "g", [d + v, d, v]), 0, `m = D × V = ${d} × ${v} = ${m} g.`]; }, 14);
  B.tpl(K("matter"), (r) => { const d = ri(r, 2, 8), v = ri(r, 3, 15); const m = d * v; return [`An object has a mass of ${m} g and a density of ${d} g/cm³. What is its volume?`, num(r, v, "cm³", [m, d, m + d]), 0, `V = m ÷ D = ${m} ÷ ${d} = ${v} cm³.`]; }, 12);
  B.tpl(K("matter"), (r) => { const d = pick(r, [0.5, 0.7, 0.8, 0.9, 1.5, 2, 2.7, 7.9, 11]); return [`Water has a density of 1 g/cm³. An object has a density of ${d} g/cm³. What will it do in water?`, [d < 1 ? "float" : "sink", d < 1 ? "sink" : "float", "dissolve", "evaporate"], 0, d < 1 ? "Less dense than water floats." : "More dense than water sinks."]; }, 9);
  const PH = [["solid", "melting", "liquid"], ["liquid", "freezing", "solid"], ["liquid", "vaporization", "gas"], ["gas", "condensation", "liquid"], ["solid", "sublimation", "gas"], ["gas", "deposition", "solid"]];
  B.tpl(K("matter"), (r) => { const [a, name, b] = pick(r, PH); return [`What is it called when a ${a} changes into a ${b}?`, T.mc(r, name, PH.filter((p) => p[1] !== name).map((p) => p[1]), null).slice(0, 4), 0, `${a} → ${b} is ${name}.`]; }, 12);
  A("matter", `
What is matter?|anything that has mass and takes up space|energy|light|=>Everything physical.
What is mass?|the amount of matter in an object|the force of gravity|volume|=>Measured in kg or g.
What is volume?|the amount of space an object takes up|the mass|the weight|=>mL or cm³.
What is density?|the mass of a substance per unit of volume|the volume per unit of mass|the weight|=>D = m ÷ V.
What is a physical property?|a trait you can observe without changing the substance|how it reacts chemically|a type of change|=>Color, density.
What is a chemical property?|how a substance reacts or changes into new substances|a color|a density|=>Flammability.
What is a physical change?|a change in form that does not make a new substance|a change making a new substance|a reaction|=>Melting.
What is a chemical change?|a change that forms a new substance|a change in shape only|a phase change|=>Burning.
What is a solid?|matter with a definite shape and volume|matter with no definite shape|matter with no definite volume|=>Particles vibrate.
What is a liquid?|matter with a definite volume that takes the shape of its container|matter with a definite shape|matter with no volume|=>Particles slide.
What is a gas?|matter with no definite shape or volume|matter with a definite shape|matter with a definite volume|=>Particles spread out.
What is plasma?|an ionized gas, like the matter in the sun|a type of liquid|a type of solid|=>Fourth state.
What is melting?|a solid changing into a liquid|a liquid changing into a gas|a gas changing into a liquid|=>Adds energy.
What is freezing?|a liquid changing into a solid|a solid changing into a liquid|a gas changing into a solid|=>Releases energy.
What is vaporization?|a liquid changing into a gas|a gas changing into a liquid|a solid changing into a liquid|=>Boiling or evaporation.
What is evaporation?|vaporization that happens at the surface of a liquid|boiling|freezing|=>Below boiling point.
What is condensation?|a gas changing into a liquid|a liquid changing into a gas|a solid melting|=>Dew.
What is sublimation?|a solid changing directly into a gas|a gas changing into a liquid|a liquid freezing|=>Dry ice.
What is deposition?|a gas changing directly into a solid|a solid changing into a gas|a liquid freezing|=>Frost.
What is temperature?|a measure of the average kinetic energy of particles|total energy|heat|=>Measured in °C or K.
What is heat?|the transfer of thermal energy from warmer to cooler objects|temperature|cold|=>Flows hot to cold.
What is conduction?|heat transfer by direct contact|heat transfer by moving fluids|heat transfer by waves|=>Spoon in soup.
What is convection?|heat transfer by the movement of fluids|heat transfer by contact|heat transfer by waves|=>Rising warm air.
What is radiation?|heat transfer by electromagnetic waves|heat transfer by contact|heat transfer by fluids|=>Sunlight.
What is a solution?|a mixture with a solute dissolved in a solvent|a pure substance|a compound|=>Sugar water.
What is a solute?|the substance that dissolves|the substance that does the dissolving|a mixture|=>Sugar.
What is a solvent?|the substance that does the dissolving|the substance that dissolves|a solid|=>Water.
What is solubility?|how much of a substance dissolves in a given amount of solvent|how dense a substance is|how hot it is|=>Depends on temperature.
What is a mixture?|substances physically combined that keep their properties|a compound|an element|=>Trail mix.
What is a heterogeneous mixture?|a mixture whose parts can be seen|a mixture that looks uniform|a compound|=>Salad.
What is a homogeneous mixture?|a mixture that looks the same throughout|a mixture whose parts can be seen|a compound|=>Salt water.
Which is a physical change?|ice melting|wood burning|iron rusting|=>Same substance.
Which is a chemical change?|a cake baking|paper being cut|water freezing|=>New substances.
Which sign shows a chemical change?|gas bubbles forming|a change in size|a change in shape|=>Also color or heat.
Which state of matter has the fastest-moving particles?|gas|solid|liquid|=>Most kinetic energy.
Which state has particles that vibrate in place?|solid|liquid|gas|=>Fixed positions.
Which phase change absorbs energy?|melting|freezing|condensation|=>Needs heat.
Which phase change releases energy?|condensation|melting|sublimation|=>Gives off heat.
Which is an example of conduction?|a metal spoon heating in hot soup|a campfire warming you from far away|warm air rising|=>Direct contact.
Which is an example of convection?|boiling water circulating|the sun warming Earth|touching a hot pan|=>Fluid motion.
Which is an example of radiation?|the sun warming your face|a pan on a stove|a spoon in soup|=>Through space.
Which separates sand from salt water?|filtering, then evaporating the water|a magnet|freezing|=>Two steps.
Which separates iron filings from sand?|a magnet|a filter|evaporation|=>Magnetic.
Why do solids have a definite shape?|particles are tightly packed and vibrate in place|particles move freely|there are no particles|=>Strong attraction.
Why does a gas fill its container?|its particles move freely and spread out|its particles are fixed|it has no particles|=>Weak attraction.
Why does ice float on water?|solid water is less dense than liquid water|ice is heavier|ice has no mass|=>Water expands when freezing.
Why does a metal spoon feel colder than a plastic spoon at the same temperature?|metal conducts heat away from your hand faster|metal is colder|plastic is warmer|=>Better conductor.
True or false: Temperature and heat are the same thing.|False|True|=>Temperature measures average kinetic energy; heat is energy transfer.
True or false: Boiling is a chemical change.|False|True|=>It is a physical change.
True or false: Plasma is a state of matter.|True|False|=>Yes.
True or false: Mass is conserved when ice melts.|True|False|=>Yes.
`);

  /* ---------- reactions ---------- */
  B.tpl(K("reactions"), (r) => { const c = ri(r, 2, 6); const [f, a, e] = pick(r, [["H₂O", 2, "hydrogen"], ["NH₃", 3, "hydrogen"], ["CH₄", 4, "hydrogen"], ["C₂H₆", 6, "hydrogen"]]); const total = c * a; return [`How many ${e} atoms are in ${c}${f}?`, T.mc(r, String(total), [a, c, total + c, total - 1].map(String).filter((x) => x !== String(total)), (rr) => String(total + ri(rr, 1, 6))), 0, `${c} × ${a} = ${total} ${e} atoms.`]; }, 12);
  B.tpl(K("reactions"), (r) => { const c = ri(r, 2, 6); const [f, a, e] = pick(r, [["CO₂", 2, "oxygen"], ["H₂O", 1, "oxygen"], ["O₂", 2, "oxygen"], ["SO₃", 3, "oxygen"], ["Na₂O", 1, "oxygen"]]); const total = c * a; return [`How many ${e} atoms are in ${c}${f}?`, T.mc(r, String(total), [a, c, total + c, total + 1].map(String).filter((x) => x !== String(total)), (rr) => String(total + ri(rr, 2, 6))), 0, `${c} × ${a} = ${total} ${e} atoms.`]; }, 12);
  B.tpl(K("reactions"), (r) => { const a = ri(r, 5, 80), b = ri(r, 5, 80); return [`In a reaction, ${a} g of one reactant combines completely with ${b} g of another. What is the total mass of the products?`, num(r, a + b, "g", [a, b, Math.abs(a - b), (a + b) * 2]), 0, `Conservation of mass: ${a} + ${b} = ${a + b} g.`]; }, 12);
  B.tpl(K("reactions"), (r) => { const p = ri(r, 0, 14); const kind = p < 7 ? "acid" : p > 7 ? "base" : "neutral"; return [`A solution has a pH of ${p}. What is it?`, T.mc(r, kind, ["acid", "base", "neutral", "salt"].filter((x) => x !== kind), null).slice(0, 4), 0, p < 7 ? "pH below 7 is acidic." : p > 7 ? "pH above 7 is basic." : "pH 7 is neutral."]; }, 12);
  A("reactions", `
What is a chemical reaction?|a process that rearranges atoms to form new substances|a change in shape|a phase change|=>Reactants become products.
What is a reactant?|a starting substance in a reaction|a substance formed|a catalyst|=>Left of the arrow.
What is a product?|a substance formed in a reaction|a starting substance|a catalyst|=>Right of the arrow.
What is a precipitate?|a solid that forms from a reaction between solutions|a gas|a liquid|=>Cloudy solid.
What is a catalyst?|a substance that speeds up a reaction without being used up|a reactant|a product|=>Enzymes.
What is an inhibitor?|a substance that slows a reaction|a catalyst|a product|=>Slows.
What is an exothermic reaction?|a reaction that releases energy|a reaction that absorbs energy|a physical change|=>Combustion.
What is an endothermic reaction?|a reaction that absorbs energy|a reaction that releases energy|a physical change|=>Photosynthesis.
What is combustion?|a reaction of a fuel with oxygen that releases energy|a decomposition|a neutralization|=>Burning.
What is synthesis?|two or more substances combining to form one|one substance breaking down|an exchange of ions|=>A + B → AB.
What is decomposition?|one substance breaking down into two or more|two substances combining|burning|=>AB → A + B.
What is single replacement?|one element replacing another in a compound|two compounds swapping parts|combustion|=>A + BC → AC + B.
What is double replacement?|two compounds swapping parts|one element replacing another|a decomposition|=>AB + CD → AD + CB.
What is neutralization?|a reaction between an acid and a base that forms water and a salt|burning|rusting|=>pH moves toward 7.
What is an acid?|a substance with a pH below 7|a substance with a pH above 7|a neutral substance|=>Sour taste.
What is a base?|a substance with a pH above 7|a substance with a pH below 7|a neutral substance|=>Slippery.
What is the pH scale?|a scale from 0 to 14 measuring acidity|a temperature scale|a speed scale|=>7 is neutral.
What is an indicator?|a substance that changes color to show acidity or basicity|a catalyst|a solute|=>Litmus.
What is a coefficient in a chemical equation?|a number in front of a formula showing how many molecules|a small number in a formula|a symbol|=>2H₂O.
What is a subscript in a formula?|a small number showing how many atoms are in a molecule|a number in front of a formula|a coefficient|=>H₂O has 2 H.
What is the law of conservation of mass?|mass is neither created nor destroyed in a reaction|mass increases in reactions|mass decreases|=>Balance equations.
What is oxidation?|a reaction in which a substance combines with oxygen or loses electrons|melting|evaporation|=>Rusting.
What is rust?|iron oxide formed when iron reacts with oxygen and water|a physical change|a catalyst|=>A chemical change.
Which pH is the most acidic?|1|7|14|=>Lower is more acidic.
Which pH is the most basic?|14|7|1|=>Higher is more basic.
Which pH is neutral?|7|0|14|=>Pure water.
Which is an acid?|lemon juice|baking soda|soap|=>pH about 2.
Which is a base?|baking soda|vinegar|lemon juice|=>pH about 9.
Which is neutral?|pure water|vinegar|bleach|=>pH 7.
Which products form when an acid and base neutralize?|water and a salt|hydrogen and oxygen|carbon dioxide only|=>Neutralization.
Which gas makes bubbles when baking soda reacts with vinegar?|carbon dioxide|oxygen|hydrogen|=>A sign of a reaction.
Which is a sign of a chemical reaction?|a color change|a size change|a shape change|=>Also gas, heat, light.
Which is an exothermic process?|burning wood|melting ice|evaporating water|=>Releases heat.
Which is an endothermic process?|melting ice|burning wood|rusting|=>Absorbs heat.
Which would speed up a reaction?|increasing the temperature|lowering the concentration|using larger chunks|=>More collisions.
Which would slow a reaction?|lowering the temperature|crushing the solid|adding a catalyst|=>Fewer collisions.
Why does crushing a tablet make it dissolve faster?|more surface area is exposed|less mass|a different solvent|=>Faster reaction.
Why must chemical equations be balanced?|atoms are conserved|it looks neat|water is required|=>Same atoms on each side.
Balance: how many H₂ molecules are needed? __ H₂ + O₂ → 2H₂O|2|1|3|=>4 H atoms on right.
Balance: how many O₂ molecules are needed? 2H₂ + __ O₂ → 2H₂O|1|2|3|=>2 O atoms on right.
Balance: __ N₂ + 3H₂ → 2NH₃|1|2|3|=>2 N on right.
Which equation is balanced?|2Na + Cl₂ → 2NaCl|Na + Cl₂ → NaCl|Na + 2Cl₂ → NaCl|=>2 Na and 2 Cl on both sides.
Which equation is balanced?|C + O₂ → CO₂|C + 2O₂ → CO₂|2C + O₂ → CO₂|=>1 C and 2 O on both sides.
Which equation is balanced?|2H₂O → 2H₂ + O₂|H₂O → H₂ + O₂|2H₂O → H₂ + 2O₂|=>4 H and 2 O each side.
What kind of reaction is 2H₂O → 2H₂ + O₂?|decomposition|synthesis|combustion|=>One compound breaks down.
What kind of reaction is 2Na + Cl₂ → 2NaCl?|synthesis|decomposition|single replacement|=>Two elements combine.
What kind of reaction is CH₄ + 2O₂ → CO₂ + 2H₂O?|combustion|synthesis|decomposition|=>Fuel + oxygen.
True or false: Mass is lost when wood burns.|False|True|=>Mass is conserved; gases escape.
True or false: A catalyst is used up in a reaction.|False|True|=>It is not consumed.
True or false: Neutralization produces water.|True|False|=>And a salt.
`);

  /* ---------- motion ---------- */
  B.tpl(K("motion"), (r) => { const s = ri(r, 2, 30), t = ri(r, 2, 12); const d = s * t; return [`A car travels ${d} km in ${t} hours. What is its average speed?`, num(r, s, "km/h", [d, t, d + t]), 0, `Speed = distance ÷ time = ${d} ÷ ${t} = ${s} km/h.`]; }, 14);
  B.tpl(K("motion"), (r) => { const s = ri(r, 2, 25), t = ri(r, 2, 10); const d = s * t; return [`A cyclist rides at ${s} m/s for ${t} s. How far does she go?`, num(r, d, "m", [s + t, s, t]), 0, `d = s × t = ${s} × ${t} = ${d} m.`]; }, 14);
  B.tpl(K("motion"), (r) => { const s = ri(r, 2, 15), t = ri(r, 2, 12); const d = s * t; return [`A runner covers ${d} m at ${s} m/s. How long does it take?`, num(r, t, "s", [d, s, d - s]), 0, `t = d ÷ s = ${d} ÷ ${s} = ${t} s.`]; }, 12);
  B.tpl(K("motion"), (r) => { const a = ri(r, 2, 9), t = ri(r, 2, 8); const dv = a * t; return [`A car speeds up from rest to ${dv} m/s in ${t} s. What is its acceleration?`, num(r, a, "m/s²", [dv, t, dv + t]), 0, `a = Δv ÷ t = ${dv} ÷ ${t} = ${a} m/s².`]; }, 14);
  B.tpl(K("motion"), (r) => { const m = ri(r, 2, 20), a = ri(r, 2, 9); return [`A ${m} kg object accelerates at ${a} m/s². What net force acts on it?`, num(r, m * a, "N", [m + a, m, a]), 0, `F = m × a = ${m} × ${a} = ${m * a} N.`]; }, 14);
  B.tpl(K("motion"), (r) => { const m = ri(r, 2, 15), a = ri(r, 2, 8); const F = m * a; return [`A force of ${F} N acts on a ${m} kg cart. What is its acceleration?`, num(r, a, "m/s²", [F, m, F + m]), 0, `a = F ÷ m = ${F} ÷ ${m} = ${a} m/s².`]; }, 12);
  B.tpl(K("motion"), (r) => { const m = ri(r, 2, 12), v = ri(r, 2, 12); return [`A ${m} kg ball moves at ${v} m/s. What is its momentum?`, num(r, m * v, "kg·m/s", [m + v, m, v]), 0, `p = m × v = ${m} × ${v} = ${m * v} kg·m/s.`]; }, 12);
  B.tpl(K("motion"), (r) => { const m = ri(r, 2, 20); const w = Math.round(m * 9.8 * 10) / 10; return [`What is the weight of a ${m} kg object on Earth? (g = 9.8 m/s²)`, num(r, w, "N", [m, m * 10, m + 10]), 0, `W = m × g = ${m} × 9.8 = ${f1(w)} N.`]; }, 12);
  A("motion", `
What is speed?|distance traveled per unit of time|distance only|time only|=>s = d ÷ t.
What is velocity?|speed in a specific direction|speed only|distance|=>Includes direction.
What is acceleration?|the rate at which velocity changes|speed|force|=>m/s².
What is a force?|a push or a pull|energy|motion|=>Measured in newtons.
What is a newton?|the SI unit of force|the SI unit of mass|the SI unit of speed|=>kg·m/s².
What is a net force?|the overall force after combining all forces|a single force|zero force|=>Add and subtract.
What are balanced forces?|forces that cancel out to give zero net force|forces that cause acceleration|forces that add|=>No change in motion.
What are unbalanced forces?|forces that produce a nonzero net force|forces that cancel|forces of zero|=>Change motion.
What is inertia?|the tendency of an object to resist changes in motion|a force|a type of energy|=>Newton's first law.
What is friction?|a force that opposes motion between surfaces|a force that speeds up motion|a type of energy|=>Rubbing.
What is gravity?|the force of attraction between objects with mass|a type of friction|a type of energy|=>Pulls things down.
What is weight?|the force of gravity on an object|the amount of matter|speed|=>W = m g.
What is mass?|the amount of matter in an object|the force of gravity|speed|=>kg.
What is momentum?|mass × velocity|mass ÷ velocity|force × distance|=>p = m v.
What is free fall?|motion with gravity as the only force|motion at constant speed|motion at rest|=>9.8 m/s².
What is terminal velocity?|a constant speed reached when air resistance equals weight|the highest speed ever|zero speed|=>Net force zero.
What is air resistance?|friction between a moving object and air|a type of gravity|a push|=>Opposes falling.
What is a reference point?|a place or object used to describe motion|a speed|a force|=>Position is relative.
What is a vector?|a quantity with both size and direction|a quantity with only size|a unit|=>Velocity and force.
What is a scalar?|a quantity with only size|a quantity with size and direction|a force|=>Speed and mass.
Newton's first law is the law of…|inertia|acceleration|action-reaction|=>An object stays at rest or in motion.
Newton's second law is…|F = m × a|a = F × m|F = m ÷ a|=>Force equals mass times acceleration.
Newton's third law is the law of…|action and reaction|inertia|gravity|=>Equal and opposite pairs.
Which law explains why you lurch forward when a car stops suddenly?|Newton's first law|Newton's second law|Newton's third law|=>Inertia.
Which law explains how a rocket moves?|Newton's third law|Newton's first law|Newton's second law|=>Gas down, rocket up.
Which law explains why a heavier cart needs more force to speed up?|Newton's second law|Newton's first law|Newton's third law|=>F = m a.
Which has more inertia?|a bowling ball|a tennis ball|a marble|=>More mass.
If you double the mass and keep the force the same, the acceleration…|is cut in half|doubles|stays the same|=>a = F ÷ m.
If you double the force and keep the mass the same, the acceleration…|doubles|is cut in half|stays the same|=>a = F ÷ m.
On a distance-time graph, a steeper line means…|faster speed|slower speed|no motion|=>Greater slope.
On a distance-time graph, a horizontal line means…|the object is at rest|constant speed|acceleration|=>Distance not changing.
On a speed-time graph, a horizontal line means…|constant speed|acceleration|rest|=>Not changing.
On a speed-time graph, an upward sloping line means…|acceleration|constant speed|rest|=>Speed increasing.
What happens to an object with zero net force?|it keeps its current motion|it speeds up|it stops|=>Balanced forces.
Which force pulls you toward Earth?|gravity|friction|magnetism|=>Weight.
Which force slows a sliding box?|friction|gravity|inertia|=>Opposes motion.
Which surface produces more friction?|a rough surface|a smooth surface|ice|=>More contact.
How can you reduce friction?|use a lubricant like oil|use sandpaper|add weight|=>Smoother surfaces.
Why do heavy and light objects fall at the same rate without air resistance?|gravity accelerates all objects equally|heavy objects have no mass|light objects have more gravity|=>9.8 m/s².
Why does a feather fall slowly in air?|air resistance|less gravity|no mass|=>Large surface area.
Why do astronauts float in orbit?|they are in continuous free fall|there is no gravity|they have no mass|=>Gravity still acts.
Why is your weight less on the moon?|the moon's gravity is weaker|your mass is less|you float|=>Mass stays the same.
True or false: Mass and weight are the same thing.|False|True|=>Mass is matter; weight is force.
True or false: An object in motion stays in motion unless acted on by a net force.|True|False|=>First law.
True or false: A force can change an object's direction.|True|False|=>Yes.
True or false: Acceleration can be slowing down.|True|False|=>Change in velocity.
`);

  /* ---------- energy ---------- */
  B.tpl(K("energy"), (r) => { const F = ri(r, 2, 40), d = ri(r, 2, 15); return [`A force of ${F} N moves an object ${d} m in the direction of the force. How much work is done?`, num(r, F * d, "J", [F + d, F, d]), 0, `W = F × d = ${F} × ${d} = ${F * d} J.`]; }, 14);
  B.tpl(K("energy"), (r) => { const t = ri(r, 2, 12), P = ri(r, 2, 30); const W = P * t; return [`A machine does ${W} J of work in ${t} s. What is its power?`, num(r, P, "W", [W, t, W + t]), 0, `P = W ÷ t = ${W} ÷ ${t} = ${P} W.`]; }, 14);
  B.tpl(K("energy"), (r) => { const m = pick(r, [2, 4, 6, 8, 10, 12]), v = ri(r, 2, 10); const KE = 0.5 * m * v * v; return [`What is the kinetic energy of a ${m} kg object moving at ${v} m/s?`, num(r, KE, "J", [m * v, m * v * v, KE * 2]), 0, `KE = ½ m v² = ½ × ${m} × ${v}² = ${f1(KE)} J.`]; }, 14);
  B.tpl(K("energy"), (r) => { const m = ri(r, 2, 15), h = ri(r, 2, 20); const PE = m * 10 * h; return [`What is the gravitational potential energy of a ${m} kg object ${h} m above the ground? (use g = 10 m/s²)`, num(r, PE, "J", [m * h, m + h, PE * 2]), 0, `PE = m g h = ${m} × 10 × ${h} = ${PE} J.`]; }, 14);
  B.tpl(K("energy"), (r) => { const inp = pick(r, [100, 200, 250, 400, 500]), eff = pick(r, [20, 25, 40, 50, 60, 75, 80]); const out = inp * eff / 100; return [`A machine takes in ${inp} J of energy and does ${out} J of useful work. What is its efficiency?`, T.mc(r, eff + "%", [(100 - eff) + "%", Math.min(eff * 2, 99) + "%", Math.round(out) + "%", "100%"].filter((x) => x !== eff + "%"), null).slice(0, 4), 0, `Efficiency = ${out} ÷ ${inp} × 100% = ${eff}%.`]; }, 10);
  B.tpl(K("energy"), (r) => { const load = ri(r, 2, 9) * 20, MA = ri(r, 2, 6); const eff = load / MA; return [`A pulley lets you lift a ${load} N load with ${f1(eff)} N of effort. What is its mechanical advantage?`, num(r, MA, "", [load, MA + 1, MA * 2]), 0, `MA = output force ÷ input force = ${load} ÷ ${f1(eff)} = ${MA}.`]; }, 10);
  A("energy", `
What is energy?|the ability to do work or cause change|a force|a push|=>Measured in joules.
What is kinetic energy?|the energy of motion|stored energy|heat|=>KE = ½ m v².
What is potential energy?|stored energy due to position or condition|energy of motion|sound|=>PE = m g h.
What is gravitational potential energy?|energy stored because of an object's height|energy of motion|heat|=>Higher means more.
What is elastic potential energy?|energy stored in stretched or compressed objects|energy of motion|light|=>Rubber band.
What is chemical energy?|energy stored in bonds between atoms|energy of motion|sound|=>Food and fuel.
What is thermal energy?|the total kinetic energy of particles in matter|light|sound|=>Heat.
What is radiant energy?|energy carried by electromagnetic waves|energy of motion|stored energy|=>Light.
What is electrical energy?|energy from moving electric charges|energy in food|heat only|=>Circuits.
What is nuclear energy?|energy stored in the nucleus of an atom|energy in food|light|=>Fission and fusion.
What is mechanical energy?|the sum of kinetic and potential energy|chemical energy|nuclear energy|=>Moving and position.
What is work?|force applied over a distance|energy|power|=>W = F d.
What is power?|the rate of doing work|force over distance|energy stored|=>P = W ÷ t.
What is a joule?|the SI unit of energy and work|the unit of power|the unit of force|=>1 N·m.
What is a watt?|the SI unit of power|the unit of work|the unit of force|=>1 J/s.
What is a simple machine?|a device that makes work easier by changing a force|an engine|a computer|=>Six types.
What is a lever?|a bar that pivots on a fulcrum|a ramp|a wheel|=>Seesaw.
What is a fulcrum?|the pivot point of a lever|the load|the effort|=>Support point.
What is an inclined plane?|a slanted surface that reduces the force needed|a pulley|a wedge|=>Ramp.
What is a wedge?|two inclined planes that split material apart|a lever|a screw|=>Axe.
What is a screw?|an inclined plane wrapped around a cylinder|a wedge|a pulley|=>Spiral ramp.
What is a pulley?|a wheel with a rope that changes the direction of a force|a lever|a ramp|=>Flagpole.
What is a wheel and axle?|a wheel attached to a smaller rod that turns together|a ramp|a wedge|=>Doorknob.
What is mechanical advantage?|how many times a machine multiplies input force|the work done|power|=>MA = output ÷ input.
What is efficiency?|the percent of input energy that becomes useful output|power|force|=>Always less than 100%.
What is the law of conservation of energy?|energy cannot be created or destroyed, only transformed|energy is lost|energy increases|=>Total constant.
What is an energy transformation?|a change from one form of energy to another|losing energy|creating energy|=>Lamp: electrical to light.
What is renewable energy?|energy from sources that are replaced naturally|energy from coal|energy from oil|=>Solar, wind.
What is nonrenewable energy?|energy from sources that are limited|energy from the sun|energy from wind|=>Fossil fuels.
Which is a renewable resource?|wind|coal|natural gas|=>Always available.
Which is a nonrenewable resource?|oil|solar|hydroelectric|=>Fossil fuel.
Which has more kinetic energy: a fast car or a slow car of the same mass?|the fast car|the slow car|they are equal|=>Speed squared.
Which has more potential energy: a book on a high shelf or on the floor?|the high shelf|the floor|they are equal|=>Height.
What energy change happens in a flashlight?|chemical to electrical to light|light to sound|heat to motion|=>Battery.
What energy change happens in a solar panel?|light to electrical|electrical to light|heat to sound|=>Photovoltaic.
What energy change happens in a car engine?|chemical to mechanical and heat|light to chemical|sound to heat|=>Combustion.
What energy change happens in a speaker?|electrical to sound|sound to electrical|light to sound|=>Vibrations.
What energy change happens in a microphone?|sound to electrical|electrical to sound|light to heat|=>Reverse of speaker.
What energy change happens in photosynthesis?|light to chemical|chemical to light|heat to sound|=>Plants store energy.
Where is a swinging pendulum's kinetic energy greatest?|at the bottom of the swing|at the top|at rest|=>Fastest.
Where is a swinging pendulum's potential energy greatest?|at the top of the swing|at the bottom|in the middle|=>Highest point.
Why is no machine 100% efficient?|friction turns some energy into heat|machines create energy|machines have no friction|=>Energy lost to heat.
Why does a ramp make lifting easier?|it reduces the force needed over a longer distance|it reduces the work|it lowers the weight|=>Work stays the same.
True or false: Machines reduce the amount of work needed.|False|True|=>They change force or direction.
True or false: Pushing on a wall that does not move is work.|False|True|=>No distance moved.
True or false: Energy cannot be created or destroyed.|True|False|=>Conservation.
True or false: A lever is a simple machine.|True|False|=>Yes.
`);

  /* ---------- waves ---------- */
  B.tpl(K("waves"), (r) => { const f = ri(r, 2, 20), l = ri(r, 2, 15); return [`A wave has a frequency of ${f} Hz and a wavelength of ${l} m. What is its speed?`, num(r, f * l, "m/s", [f + l, f, l]), 0, `v = f × λ = ${f} × ${l} = ${f * l} m/s.`]; }, 14);
  B.tpl(K("waves"), (r) => { const l = ri(r, 2, 10), f = ri(r, 2, 15); const v = f * l; return [`A wave travels at ${v} m/s and has a wavelength of ${l} m. What is its frequency?`, num(r, f, "Hz", [v, l, v + l]), 0, `f = v ÷ λ = ${v} ÷ ${l} = ${f} Hz.`]; }, 14);
  B.tpl(K("waves"), (r) => { const f = ri(r, 2, 12), v = f * ri(r, 2, 9); const l = v / f; return [`A wave with a speed of ${v} m/s has a frequency of ${f} Hz. What is its wavelength?`, num(r, l, "m", [v, f, v + f]), 0, `λ = v ÷ f = ${v} ÷ ${f} = ${l} m.`]; }, 12);
  B.tpl(K("waves"), (r) => { const f = pick(r, [2, 4, 5, 8, 10, 20, 25, 50]); return [`A wave has a frequency of ${f} Hz. What is its period?`, T.mc(r, f1(1 / f) + " s", [f + " s", f1(f / 2) + " s", f1(2 / f) + " s"].filter((x) => x !== f1(1 / f) + " s"), null).slice(0, 4), 0, `T = 1 ÷ f = 1 ÷ ${f} = ${f1(1 / f)} s.`]; }, 8);
  B.tpl(K("waves"), (r) => { const t = ri(r, 2, 8); const d = 343 * t; return [`Sound travels about 343 m/s in air. How far does it travel in ${t} s?`, num(r, d, "m", [343 + t, 343, d / 2]), 0, `d = 343 × ${t} = ${d} m.`]; }, 8);
  A("waves", `
What is a wave?|a disturbance that transfers energy|a type of matter|a force|=>Energy moves, not matter.
What is a crest?|the highest point of a wave|the lowest point|the wavelength|=>Top of the wave.
What is a trough?|the lowest point of a wave|the highest point|the amplitude|=>Bottom of the wave.
What is amplitude?|the height of a wave from rest to crest|the distance between crests|the number of waves per second|=>Related to energy.
What is wavelength?|the distance between two matching points on consecutive waves|the height of a wave|the speed of a wave|=>Crest to crest.
What is frequency?|the number of waves passing a point per second|the distance between crests|the height|=>Measured in hertz.
What is a hertz?|one wave per second|one meter|one joule|=>Unit of frequency.
What is a period?|the time for one complete wave|the height of a wave|the speed|=>T = 1 ÷ f.
What is a transverse wave?|a wave in which the medium moves perpendicular to the wave direction|a wave in which the medium moves parallel|a sound wave|=>Light and water waves.
What is a longitudinal wave?|a wave in which the medium moves parallel to the wave direction|a wave with crests and troughs|a light wave|=>Sound waves.
What is a mechanical wave?|a wave that needs a medium to travel|a wave that can travel through a vacuum|a light wave|=>Sound and water waves.
What is an electromagnetic wave?|a wave that can travel through a vacuum|a wave that needs a medium|a sound wave|=>Light and radio waves.
What is a medium?|the material through which a wave travels|a type of wave|a force|=>Air, water, solid.
What is reflection?|a wave bouncing off a surface|a wave bending|a wave being absorbed|=>Mirror.
What is refraction?|the bending of a wave as it enters a new medium|a wave bouncing|a wave being absorbed|=>Lens.
What is diffraction?|the spreading of waves around an obstacle or through an opening|a wave bouncing|a wave bending in a lens|=>Sound around corners.
What is absorption?|a material taking in wave energy|a wave bouncing|a wave bending|=>Dark objects absorb light.
What is the Doppler effect?|a change in frequency as a source moves relative to an observer|a type of echo|a type of reflection|=>An ambulance siren.
What is pitch?|how high or low a sound is|how loud a sound is|how fast a sound travels|=>Depends on frequency.
What is loudness?|the intensity of a sound related to amplitude|pitch|frequency|=>Measured in decibels.
What is a decibel?|a unit that measures the loudness of sound|a unit of frequency|a unit of speed|=>dB.
What is an echo?|a reflected sound wave|a refracted sound wave|a sound in a vacuum|=>Bounce back.
What is a lens?|a curved piece of glass or plastic that refracts light|a mirror|a prism|=>Glasses.
What is a prism?|a transparent object that separates white light into colors|a mirror|a lens|=>Rainbow.
What is the electromagnetic spectrum?|the range of all electromagnetic waves|a type of sound|a type of lens|=>Radio to gamma.
Which wave has the lowest frequency?|radio waves|gamma rays|visible light|=>Longest wavelength.
Which wave has the highest frequency?|gamma rays|radio waves|infrared|=>Shortest wavelength.
Which is the order from lowest to highest frequency?|radio, microwave, infrared, visible, ultraviolet, X-ray, gamma|gamma, X-ray, ultraviolet, visible, infrared, microwave, radio|visible, radio, microwave, X-ray|=>RMIVUXG.
Which part of the spectrum can humans see?|visible light|infrared|ultraviolet|=>A narrow band.
Which color has the longest wavelength in visible light?|red|violet|green|=>Lowest frequency.
Which color has the shortest wavelength in visible light?|violet|red|yellow|=>Highest frequency.
Which wave is used in medical imaging of bones?|X-rays|radio waves|microwaves|=>High energy.
Which wave is used to cook food in a microwave oven?|microwaves|X-rays|gamma rays|=>Heat water.
Which wave causes sunburn?|ultraviolet|infrared|radio|=>UV.
Which wave carries heat from a campfire?|infrared|X-ray|radio|=>Heat radiation.
Which travels faster in a vacuum?|light|sound|neither|=>Sound cannot travel in a vacuum.
How fast does light travel in a vacuum?|about 3.0 × 10⁸ m/s|about 343 m/s|about 300 m/s|=>Fastest speed.
How fast does sound travel in air?|about 343 m/s|about 3.0 × 10⁸ m/s|about 3,000 m/s|=>About 767 mph.
Does sound travel faster in air, water, or steel?|steel|air|water|=>Particles are closer.
Why can sound not travel in space?|there is no medium to carry it|space is too bright|space is too cold|=>Needs matter.
Why does a higher frequency sound have a higher pitch?|more vibrations per second|fewer vibrations|a lower speed|=>Frequency = pitch.
Why does a louder sound have a larger amplitude?|more energy in the wave|less energy|a lower frequency|=>Amplitude = loudness.
Why do objects appear colored?|they reflect some wavelengths and absorb others|they emit light|they refract all light|=>Selective reflection.
Why does a black shirt feel hot in the sun?|it absorbs all visible wavelengths|it reflects all light|it emits heat|=>Absorbs energy.
Why does a straw look bent in water?|light refracts when moving between water and air|the straw bends|water is thick|=>Refraction.
What does a convex lens do?|focuses light rays together|spreads light rays apart|reflects light|=>Magnifier.
What does a concave lens do?|spreads light rays apart|focuses light rays|reflects light|=>Diverges.
What does a transparent material do?|lets light pass through clearly|blocks all light|scatters light|=>Glass.
What does an opaque material do?|blocks light|lets light through|focuses light|=>Wood.
What does a translucent material do?|lets some light through but scatters it|blocks all light|lets all light through|=>Frosted glass.
True or false: Sound is a transverse wave.|False|True|=>Longitudinal.
True or false: Light can travel through a vacuum.|True|False|=>Electromagnetic wave.
True or false: Frequency and wavelength are inversely related at constant speed.|True|False|=>v = f λ.
`);

  /* ---------- electricity ---------- */
  B.tpl(K("electricity"), (r) => { const R = ri(r, 2, 12), I = ri(r, 2, 8); const V = R * I; return [`A ${V} V battery is connected to a ${R} Ω resistor. What is the current?`, num(r, I, "A", [V, R, V + R]), 0, `I = V ÷ R = ${V} ÷ ${R} = ${I} A.`]; }, 14);
  B.tpl(K("electricity"), (r) => { const R = ri(r, 2, 15), I = ri(r, 2, 8); return [`A current of ${I} A flows through a ${R} Ω resistor. What is the voltage across it?`, num(r, R * I, "V", [R + I, R, I]), 0, `V = I × R = ${I} × ${R} = ${R * I} V.`]; }, 14);
  B.tpl(K("electricity"), (r) => { const I = ri(r, 2, 8), R = ri(r, 2, 12); const V = I * R; return [`A circuit has ${V} V and ${I} A of current. What is the resistance?`, num(r, R, "Ω", [V, I, V + I]), 0, `R = V ÷ I = ${V} ÷ ${I} = ${R} Ω.`]; }, 12);
  B.tpl(K("electricity"), (r) => { const I = ri(r, 2, 10), V = pick(r, [6, 9, 12, 24, 120]); return [`A device uses ${I} A at ${V} V. How much power does it use?`, num(r, I * V, "W", [I + V, I, V]), 0, `P = I × V = ${I} × ${V} = ${I * V} W.`]; }, 10);
  B.tpl(K("electricity"), (r) => { const a = ri(r, 2, 10), b = ri(r, 2, 10); return [`Two resistors of ${a} Ω and ${b} Ω are connected in series. What is the total resistance?`, num(r, a + b, "Ω", [a * b, Math.abs(a - b), a, b]), 0, `Series resistances add: ${a} + ${b} = ${a + b} Ω.`]; }, 8);
  A("electricity", `
What is electric charge?|a property of matter that causes electric forces|a type of energy|a type of wave|=>Positive or negative.
What is static electricity?|a buildup of electric charge on an object|a flowing current|a magnet|=>Rubbed balloon.
What is electric current?|the flow of electric charge|the push on charges|the opposition to flow|=>Amperes.
What is voltage?|the energy per charge that pushes current|the flow of charge|the opposition to flow|=>Volts.
What is resistance?|opposition to the flow of electric current|the flow of charge|the push on charges|=>Ohms.
What is a circuit?|a complete path for electric current|a battery|a bulb|=>Closed loop.
What is a closed circuit?|a complete path in which current flows|a broken path|a battery only|=>Switch on.
What is an open circuit?|a broken path in which no current flows|a complete path|a battery|=>Switch off.
What is a series circuit?|a circuit with one path for current|a circuit with multiple paths|a broken circuit|=>One loop.
What is a parallel circuit?|a circuit with more than one path for current|a circuit with one path|a broken circuit|=>Branches.
What is a conductor?|a material that lets charge flow easily|a material that blocks charge|a gas|=>Metals.
What is an insulator?|a material that blocks the flow of charge|a material that conducts|a magnet|=>Rubber.
What is a switch?|a device that opens or closes a circuit|a battery|a bulb|=>Controls current.
What is a fuse?|a safety device that melts to stop too much current|a battery|a bulb|=>Prevents fires.
What is a circuit breaker?|a switch that shuts off current when it is too high|a battery|a resistor|=>Resettable.
What is a short circuit?|a path with very low resistance that lets too much current flow|a long circuit|a broken circuit|=>Dangerous.
What is Ohm's law?|V = I × R|P = m × a|F = m × a|=>Voltage = current × resistance.
What is electric power?|the rate at which electrical energy is used|the flow of charge|the push on charges|=>P = I V.
What is a magnet?|an object that attracts iron and other magnetic materials|a battery|a wire|=>Has two poles.
What is a magnetic field?|the area around a magnet where magnetic forces act|a type of metal|a battery|=>Field lines.
What are magnetic poles?|the two ends of a magnet where force is strongest|the middle of a magnet|a type of field|=>North and south.
What is an electromagnet?|a coil of wire around an iron core carrying current|a permanent magnet|a battery|=>Switchable.
What is electromagnetic induction?|producing a current by changing a magnetic field near a wire|producing a magnet from a battery|a type of friction|=>Faraday.
What is a generator?|a device that converts mechanical energy into electrical energy|a device that converts electrical energy to motion|a battery|=>Power plants.
What is a motor?|a device that converts electrical energy into motion|a device that makes electricity|a battery|=>Fans.
What is a transformer?|a device that changes the voltage of alternating current|a battery|a motor|=>Utility poles.
What is alternating current (AC)?|current that changes direction regularly|current that flows in one direction|static charge|=>Wall outlets.
What is direct current (DC)?|current that flows in one direction|current that changes direction|static charge|=>Batteries.
Which charges attract each other?|opposite charges|like charges|neutral charges only|=>+ and −.
Which charges repel each other?|like charges|opposite charges|none|=>Both + or both −.
Which poles attract?|north and south|north and north|south and south|=>Opposites attract.
Which poles repel?|north and north|north and south|neither|=>Like poles repel.
Which is a good conductor?|copper|rubber|plastic|=>Metal.
Which is a good insulator?|rubber|copper|iron|=>Blocks current.
Which unit measures current?|ampere|volt|ohm|=>A.
Which unit measures voltage?|volt|ampere|ohm|=>V.
Which unit measures resistance?|ohm|volt|ampere|=>Ω.
Which unit measures electric power?|watt|ohm|volt|=>W.
Which materials are attracted to magnets?|iron, nickel, and cobalt|wood and plastic|glass|=>Magnetic materials.
Which makes an electromagnet stronger?|more coils of wire|less current|removing the iron core|=>More coils and current.
Which device uses an electromagnet?|an electric doorbell|a flashlight|a mirror|=>Coil and iron.
Which device converts electrical energy into motion?|a motor|a generator|a battery|=>Fans.
Which device converts motion into electricity?|a generator|a motor|a bulb|=>Power plants.
Why does a bulb in a series circuit go out when another bulb breaks?|the circuit path is broken|voltage increases|resistance decreases|=>One path only.
Why do homes use parallel circuits?|each device works independently|they use less energy|they never overload|=>Multiple paths.
Why are electrical wires covered with plastic?|to insulate and prevent shocks|to make them stronger|to make them conduct|=>Safety.
Why should you not use electrical devices near water?|water conducts electricity and can cause shock|water insulates|devices float|=>Safety.
What happens to current if voltage doubles and resistance stays the same?|it doubles|it halves|it stays the same|=>I = V ÷ R.
What happens to current if resistance doubles and voltage stays the same?|it is cut in half|it doubles|it stays the same|=>I = V ÷ R.
Earth's magnetic field is useful because…|compasses use it to show direction|it blocks gravity|it produces electricity in homes|=>Points to magnetic north.
True or false: Electric current can produce a magnetic field.|True|False|=>Electromagnet.
True or false: A moving magnet near a coil can induce a current.|True|False|=>Induction.
True or false: A series circuit has more than one path.|False|True|=>One path.
`);

  /* ---------- investigations ---------- */
  const CONV = [["km", "m", 1000], ["m", "cm", 100], ["cm", "mm", 10], ["kg", "g", 1000], ["g", "mg", 1000], ["L", "mL", 1000], ["m", "mm", 1000]];
  B.tpl(K("investigations"), (r) => { const [a, b, k] = pick(r, CONV); const n = pick(r, [2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 25, 40]); const v = n * k; return [`Convert ${n} ${a} to ${b}.`, T.mc(r, `${v} ${b}`, [`${n / k * 1} ${b}`, `${v * 10} ${b}`, `${v / 10} ${b}`, `${n + k} ${b}`].filter((x) => x !== `${v} ${b}`), null).slice(0, 4), 0, `1 ${a} = ${k} ${b}, so ${n} × ${k} = ${v} ${b}.`]; }, 14);
  B.tpl(K("investigations"), (r) => { const [a, b, k] = pick(r, CONV); const n = pick(r, [2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 25, 40]); const v = n * k; return [`Convert ${v} ${b} to ${a}.`, T.mc(r, `${n} ${a}`, [`${v * k} ${a}`, `${n * 10} ${a}`, `${n / 10} ${a}`, `${v + k} ${a}`].filter((x) => x !== `${n} ${a}`), null).slice(0, 4), 0, `${v} ÷ ${k} = ${n} ${a}.`]; }, 14);
  B.tpl(K("investigations"), (r) => { const m = ri(r, 2, 9), e = ri(r, 2, 8); const v = m * Math.pow(10, e); return [`Write ${v.toLocaleString("en-US")} in scientific notation.`, T.mc(r, `${m} × 10${["", "", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸"][e]}`, [`${m} × 10${["", "", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"][e + 1]}`, `${m * 10} × 10${["", "", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸"][e - 1] || ""}`, `0.${m} × 10${["", "", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"][e + 1]}`].filter(Boolean), null).slice(0, 4), 0, `Move the decimal ${e} places: ${m} × 10^${e}.`]; }, 8);
  A("investigations", `
What is a hypothesis?|a testable explanation or prediction|a conclusion|a measurement|=>If… then…
What is a theory in science?|a well-supported explanation based on a large body of evidence|a guess|a hunch|=>Supported by evidence.
What is a scientific law?|a description of a pattern in nature|an explanation|a hypothesis|=>Describes what happens.
What is an independent variable?|the factor you change|the factor you measure|a constant|=>The cause.
What is a dependent variable?|the factor you measure|the factor you change|a constant|=>The effect.
What is a controlled variable?|a factor kept the same|the factor you change|the result|=>Fair test.
What is a control group?|the group that does not get the treatment|the group that gets it|the data|=>Used for comparison.
What is an experimental group?|the group that gets the treatment|the group that does not|the data|=>Tested.
What is a trial?|one run of an experiment|a conclusion|a variable|=>Repeat for reliability.
What is data?|information collected in an investigation|a hypothesis|a conclusion|=>Measurements.
What is qualitative data?|descriptions using the senses|measurements with numbers|a graph|=>Color or smell.
What is quantitative data?|measurements with numbers|descriptions|opinions|=>Mass or time.
What is a conclusion?|a statement of what the data show about the hypothesis|a hypothesis|a procedure|=>Based on evidence.
What is peer review?|experts evaluating scientific work before it is published|a student vote|a lab rule|=>Quality control.
What is a model?|a representation used to explain or predict|an exact copy|a conclusion|=>Diagrams and equations.
What is accuracy?|how close a measurement is to the true value|how close repeated measurements are|a graph|=>Correctness.
What is precision?|how close repeated measurements are to each other|how close to the true value|a graph|=>Consistency.
What is SI?|the International System of Units|a type of graph|a lab rule|=>Metric.
What does 'kilo' mean?|1,000|1/1,000|100|=>kilogram.
What does 'centi' mean?|1/100|1,000|1/1,000|=>centimeter.
What does 'milli' mean?|1/1,000|1,000|1/100|=>milliliter.
What is the SI unit of mass?|kilogram|gram|pound|=>kg.
What is the SI unit of length?|meter|foot|mile|=>m.
What is the SI unit of time?|second|minute|hour|=>s.
What is the SI unit of force?|newton|kilogram|joule|=>N.
What is the SI unit of energy?|joule|watt|newton|=>J.
Which tool measures mass?|balance|graduated cylinder|thermometer|=>Grams.
Which tool measures liquid volume?|graduated cylinder|balance|ruler|=>mL.
Which tool measures temperature?|thermometer|stopwatch|spring scale|=>°C.
Which tool measures force?|spring scale|balance|ruler|=>Newtons.
Which tool measures length?|metric ruler|beaker|stopwatch|=>cm.
Which tool measures time?|stopwatch|ruler|balance|=>Seconds.
Which graph best shows change over time?|line graph|circle graph|pictograph|=>Trends.
Which graph compares categories?|bar graph|line graph|scatter plot|=>Bars.
Which graph shows parts of a whole?|circle graph|line graph|scatter plot|=>Percentages.
Which axis shows the independent variable?|x-axis|y-axis|neither|=>Horizontal.
Which axis shows the dependent variable?|y-axis|x-axis|neither|=>Vertical.
Why should you repeat trials?|to improve reliability|to waste time|to change results|=>Consistency.
Why should only one variable be changed at a time?|so the effect can be identified|to save materials|to be quick|=>Fair test.
Why wear safety goggles?|to protect your eyes|to see better|to look good|=>Safety.
Why should you never taste chemicals in the lab?|they may be harmful|they taste bad|it is allowed|=>Safety.
What should you do if you break glassware?|tell the teacher|pick it up with bare hands|ignore it|=>Safety.
Convert 2,500 mL to L.|2.5 L|25 L|250 L|=>÷ 1,000.
Convert 0.4 kg to g.|400 g|40 g|4,000 g|=>× 1,000.
Convert 35 cm to m.|0.35 m|3.5 m|350 m|=>÷ 100.
Convert 6 m to cm.|600 cm|60 cm|6,000 cm|=>× 100.
Convert 12,000 g to kg.|12 kg|120 kg|1.2 kg|=>÷ 1,000.
Write 5.2 × 10³ in standard form.|5,200|520|52,000|=>Move decimal 3 right.
Write 3 × 10⁻² in standard form.|0.03|0.3|300|=>Move decimal 2 left.
Which is correct scientific notation?|3.4 × 10⁶|34 × 10⁵|0.34 × 10⁷|=>One digit before the decimal.
True or false: A hypothesis must be testable.|True|False|=>Yes.
True or false: A rejected hypothesis means the experiment failed.|False|True|=>Still useful data.
True or false: A line graph is used to show change over time.|True|False|=>Yes.
`);
})();
