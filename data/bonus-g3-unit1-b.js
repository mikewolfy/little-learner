/* Grade 3 Reading Unit 1: bonus questions (part B).
   Word-list driven banks for soft g/c, -le/-el/-al/-il, silent letters, compound words,
   synonyms/antonyms, shades of meaning and plurals. Every answer is computed from the lists below. */
(function () {
  "use strict";
  const B = window.BONUS;
  const W = (s) => s.trim().split(/\s+/);
  const line = (q, right, wrongs, e) => [q, right].concat(wrongs).join("|") + (e ? "|=>" + e : "");
  const add = (key, arr) => B.add(key, arr.join("\n"));
  // k distinct items of arr (not in ex), chosen deterministically from seed
  function pickK(arr, k, seed, ex) {
    const r = B.rngFrom(B.hash(seed)); const out = []; let g = 0;
    ex = ex || [];
    while (out.length < k && g++ < 500) { const v = arr[Math.floor(r() * arr.length)]; if (!out.includes(v) && !ex.includes(v)) out.push(v); }
    return out;
  }

  /* ---------------- soft g and soft c ---------------- */
  (function () {
    const softG = W("gem giant giraffe gentle germ gym ginger general gerbil magic energy danger change huge page cage stage age wage large orange bridge badge fudge edge judge hinge plunge village message package strange challenge");
    const hardG = W("go goat game gum garden gas gold grass green guess ghost flag dog bag pig wagon glad grow big");
    const softC = W("city center cent face race rice nice ice fence pencil dance mice price place space juice cereal celery cell voice trace police notice decide");
    const hardC = W("cat cow cup candy cake camp cold corn cost cute call car cap coat clock crab cloud cry");
    const out = [];
    const G_SOFT = "soft g (the j sound, like gem)", G_HARD = "hard g (like goat)";
    const C_SOFT = "soft c (the s sound, like city)", C_HARD = "hard c (the k sound, like cat)";
    softG.forEach((w) => out.push(line(`What sound does the g make in '${w}'?`, G_SOFT, [G_HARD], "g is soft in " + w + ".")));
    hardG.forEach((w) => out.push(line(`What sound does the g make in '${w}'?`, G_HARD, [G_SOFT], "g is hard in " + w + ".")));
    softC.forEach((w) => out.push(line(`What sound does the c make in '${w}'?`, C_SOFT, [C_HARD], "c is soft in " + w + ".")));
    hardC.forEach((w) => out.push(line(`What sound does the c make in '${w}'?`, C_HARD, [C_SOFT], "c is hard in " + w + ".")));
    softG.forEach((w, i) => out.push(line(`Which word has a SOFT g, like the g in '${pickK(softG, 1, "sg" + w, [w])[0]}'?`, w, pickK(hardG, 3, "sgw" + w), "In " + w + " the g says j.")));
    hardG.forEach((w, i) => out.push(line(`Which word has a HARD g, like the g in '${pickK(hardG, 1, "hg" + w, [w])[0]}'?`, w, pickK(softG, 3, "hgw" + w), "In " + w + " the g says its hard sound.")));
    softC.forEach((w, i) => out.push(line(`Which word has a SOFT c, like the c in '${pickK(softC, 1, "sc" + w, [w])[0]}'?`, w, pickK(hardC, 3, "scw" + w), "In " + w + " the c says s.")));
    hardC.forEach((w, i) => out.push(line(`Which word has a HARD c, like the c in '${pickK(hardC, 1, "hc" + w, [w])[0]}'?`, w, pickK(softC, 3, "hcw" + w), "In " + w + " the c says k.")));
    // spelling: j for g, s for c
    W("gem giant giraffe gentle germ gym ginger general gerbil").forEach((w) => out.push(line("Which word is spelled correctly?", w, ["j" + w.slice(1)], "The j sound is spelled with a soft g here: " + w + ".")));
    W("city center cereal celery").forEach((w) => out.push(line("Which word is spelled correctly?", w, ["s" + w.slice(1)], "The s sound is spelled with a soft c here: " + w + ".")));
    W("face race nice mice place space juice voice fence dance trace police notice").forEach((w) => out.push(line("Which word is spelled correctly?", w, [w.slice(0, -2) + "se"], "The s sound at the end is spelled ce in " + w + ".")));
    W("cage page stage age wage large orange village message package strange change huge").forEach((w) => out.push(line("Which word is spelled correctly?", w, [w.slice(0, -2) + (w.endsWith("ge") ? "dge" : "") + (w.endsWith("ge") ? "" : "j")].filter((x) => x !== w).concat([w.replace(/ge$/, "j")]).filter((x, i, a) => x !== w && a.indexOf(x) === i).slice(0, 2), "The soft g at the end is spelled ge in " + w + ".")));
    out.push(
      "Which letters usually make c and g say their SOFT sounds?|e, i, and y|a, o, and u|b, d, and f|=>c and g are soft before e, i, or y.",
      "When c is followed by 'a,' 'o,' or 'u,' it usually says…|k (hard)|s (soft)|j|=>cat, cot, cup.",
      "When g is followed by 'a,' 'o,' or 'u,' it usually says…|g (hard)|j (soft)|s|=>gate, goat, gum.",
      "Which letter does a soft c sound like?|s|k|j|=>city says 'sity.'",
      "Which letter does a soft g sound like?|j|g|s|=>gem says 'jem.'",
      "Why does the c in 'cell' say s?|It is followed by e|It is followed by a|It is at the end|=>c before e, i, or y is soft.",
      "Why does the c in 'cup' say k?|It is followed by u|It is followed by e|It is followed by i|=>c before a, o, or u is hard.",
      "Why does the g in 'giant' say j?|It is followed by i|It is followed by o|It is followed by a|=>g before e, i, or y is soft.",
      "Why does the g in 'goat' say its hard sound?|It is followed by o|It is followed by e|It is followed by y|=>g before a, o, or u is hard.",
      "In 'ice,' why does the c sound like s?|The e after it makes it soft|It is a capital letter|It is at the start|=>c before e is soft.",
      "In 'dance,' the c sounds like…|s|k|ch|=>Soft c before e.",
      "In 'gym,' the g sounds like…|j|g as in goat|s|=>g before y is soft.",
      "In 'cycle,' the FIRST c sounds like…|s|k|j|=>c before y is soft; the second c (before l) is hard.",
      "In 'circle,' the FIRST c sounds like…|s|k|ch|=>c before i is soft.",
      "In 'circus,' the SECOND c sounds like…|k|s|j|=>c before u is hard.",
      "Which word has BOTH a soft c and a hard c?|circus|city|cat|=>cir-cus: first c soft, second c hard.",
      "Which word has BOTH a soft g and a hard g?|garage? no"
    );
    // exceptions and word-in-a-sentence items
    out.push(
      "The g in 'girl' is a hard g even though i follows it. This is…|an exception to the rule|a soft g|a silent g|=>Most g's before i are soft, but girl, give, and gift are exceptions.",
      "Which word is an exception, with a HARD g before an i?|gift|giant|gym|=>gift has a hard g.",
      "Which word is an exception, with a HARD g before an e?|get|gem|gentle|=>get has a hard g.",
      "The ___ is a very tall animal with a long neck.|giraffe|jiraffe|girafe|=>Soft g says j.",
      "I like to eat ___ and milk for breakfast.|cereal|sereal|kereal|=>Soft c says s.",
      "We live in a big ___.|city|sity|kity|=>Soft c says s.",
      "Please drink your orange ___.|juice|juse|jouce|=>The s sound is spelled ce.",
      "The ___ in the stars was beautiful.|magic|majic|magick|=>Soft g in magic.",
      "A ___ is a very large person in fairy tales.|giant|jiant|gient|=>Soft g before i.",
      "Ice cream is a cold, sweet ___.|treat? no"
    );
    add("3/unit1/soft-g-c", out.filter((l) => !/\? no/.test(l) && !/garage/.test(l)));
  })();

  /* ---------------- -le, -el, -al, -il endings ---------------- */
  (function () {
    const lists = {
      le: W("table apple little candle puzzle bottle turtle giggle simple bubble middle purple people uncle gentle jungle wiggle tangle handle needle riddle cradle ankle eagle double trouble castle sample"),
      el: W("camel towel tunnel travel squirrel jewel level shovel label channel funnel panel barrel chapel kernel novel cancel bagel hotel rebel tinsel"),
      al: W("animal metal pedal final hospital signal normal journal medal local total musical capital royal crystal general mental vital legal rival dental"),
      il: W("pencil fossil nostril April civil council evil utensil lentil devil gerbil pupil tonsil stencil peril")
    };
    const ends = Object.keys(lists);
    const out = [];
    ends.forEach((e) => lists[e].forEach((w, i) => {
      const stem = w.slice(0, -2), others = ends.filter((x) => x !== e);
      out.push(line(`Which ending completes the word?{nl}${stem}___`, "-" + e, others.map((x) => "-" + x), `${w} ends in -${e}.`));
      out.push(line("Which word is spelled correctly?", w, pickK(others, 2, "sp" + w).map((x) => stem + x), `${w} ends in -${e}.`));
      const mate = pickK(lists[e], 1, "mate" + w, [w])[0];
      const wrongs = others.map((x, j) => pickK(lists[x], 1, "end" + w + x)[0]);
      out.push(line(`Which word has the same ending as '${w}'?`, mate, wrongs, `${mate} and ${w} both end in -${e}.`));
    }));
    const NOUN = { le: "-le", el: "-el", al: "-al", il: "-il" };
    out.push(
      "Which word ends with -le?|candle|camel|animal|=>candle ends in -le.",
      "Which word ends with -el?|towel|table|metal|=>towel ends in -el.",
      "Which word ends with -al?|metal|towel|apple|=>metal ends in -al.",
      "Which word ends with -il?|pencil|puzzle|camel|=>pencil ends in -il.",
      "The endings -le, -el, -al, and -il all make which sound?|a quiet 'ul' sound|a long e sound|a long a sound|=>They all sound like 'ul.'",
      "In the word 'little,' what are the last two letters?|le|el|al|=>lit-tle.",
      "In the word 'towel,' what are the last two letters?|el|le|il|=>tow-el.",
      "In the word 'animal,' what are the last two letters?|al|el|il|=>an-i-mal.",
      "In the word 'pencil,' what are the last two letters?|il|al|le|=>pen-cil.",
      "How many syllables are in 'table'?|2|1|3|=>ta-ble.",
      "How many syllables are in 'animal'?|3|2|4|=>an-i-mal.",
      "How many syllables are in 'camel'?|2|1|3|=>cam-el.",
      "How many syllables are in 'hospital'?|3|2|4|=>hos-pi-tal.",
      "How many syllables are in 'puzzle'?|2|1|3|=>puz-zle.",
      "How many syllables are in 'fossil'?|2|1|3|=>fos-sil.",
      "Which word names something you dry yourself with?|towel|tower|tunnel|=>You dry off with a towel.",
      "Which word names a tool for writing or drawing?|pencil|petal|puzzle|=>You write with a pencil.",
      "Which word names something you read before bed, like a story?|novel|nostril|navel|=>A novel is a long story.",
      "Which word names a tiny, rounded piece of ice or water?|bubble|barrel|bagel|=>A bubble is a ball of air in liquid.",
      "Which word names a bird that is a symbol of the United States?|eagle|candle|rebel|=>The bald eagle is the national bird.",
      "Which word names an underground passage?|tunnel|funnel|channel|=>A tunnel goes under or through something.",
      "Which word names a cone-shaped tool for pouring?|funnel|tunnel|barrel|=>A funnel helps pour liquid into a small opening.",
      "Which word names a large wooden container for liquids?|barrel|label|level|=>A barrel holds liquid.",
      "Which word names a sticky note on a jar?|label|level|lentil|=>A label tells what something is.",
      "Which word names a place where sick people get care?|hospital|castle|chapel|=>A hospital helps sick people.",
      "Which word names a place to stay when you travel?|hotel|hostel? no"
    );
    add("3/unit1/le-el-al-il", out.filter((l) => !/\? no/.test(l)));
  })();

  /* ---------------- silent letters ---------------- */
  (function () {
    const groups = {
      kn: ["k", "n", W("knee knife knot knock know knit knight knob knuckle kneel knack knew known knowledge")],
      wr: ["w", "r", W("write wrong wrap wrist wrote wreck wren wrinkle wrestle wreath wrench wriggle")],
      gn: ["g", "n", W("gnat gnaw gnome sign design gnash reign")],
      mb: ["b", "m", W("lamb comb thumb climb crumb limb numb bomb plumb tomb")]
    };
    const out = [];
    const all = [];
    Object.keys(groups).forEach((k) => groups[k][2].forEach((w) => all.push([k, w])));
    const nonSilent = W("kite king kitten rabbit write? sun rain tree bat cup dog fish ring hand jump pond stop wind");
    const clean = nonSilent.filter((w) => !w.includes("?"));
    Object.keys(groups).forEach((k) => {
      const [sil, par, words] = groups[k];
      words.forEach((w) => {
        const vowel = (w.replace(k, "").match(/[aeiou]/) || ["e"])[0];
        out.push(line(`Which letter is silent in '${w}'?`, "the " + sil, ["the " + par, "the " + vowel], `In ${w}, the ${sil} is silent.`));
        const removed = w.replace(sil, ""); // drop the silent letter
        const gone2 = w.replace(par, "");
        const wrongs = [removed, gone2].filter((x, i, a) => x !== w && a.indexOf(x) === i);
        if (wrongs.length) out.push(line("Which word is spelled correctly?", w, wrongs, `${w} has a silent ${sil}.`));
        const others = all.filter(([kk]) => kk !== k).map((x) => x[1]).concat(clean);
        const pickedOther = pickK(all.filter(([kk]) => kk !== k).map((x) => x[1]), 3, "sl" + w);
        out.push(line(`Which word has a silent ${sil}, like '${pickK(words, 1, "sk" + w, [w])[0]}'?`, w, pickedOther, `The ${sil} is silent in ${w}.`));
      });
    });
    // words with no silent letter
    clean.forEach((w) => out.push(line(`Does '${w}' have a silent letter?`, "No", ["Yes"], `Every letter in ${w} makes a sound.`)));
    all.forEach(([k, w]) => { if (w.length % 2 === 0) out.push(line(`Does '${w}' have a silent letter?`, "Yes", ["No"], `The ${groups[k][0]} is silent in ${w}.`)); });
    out.push(
      "In the pair kn, which letter do you hear?|n|k|both|=>The k is silent: knee says 'nee.'",
      "In the pair wr, which letter do you hear?|r|w|both|=>The w is silent: write says 'rite.'",
      "In the pair gn, which letter do you hear?|n|g|both|=>The g is silent: gnat says 'nat.'",
      "In the pair mb at the end of a word, which letter do you hear?|m|b|both|=>The b is silent: lamb says 'lam.'",
      "Which silent-letter pair is found at the START of a word?|kn|mb|=>mb is usually at the end of words, like lamb and thumb.".replace("|=>", "|st|=>"),
      "Which silent-letter pair is usually found at the END of a word?|mb|kn|wr|=>lamb, comb, thumb.",
      "Which word sounds like 'nee'?|knee|need|nest|=>knee has a silent k.",
      "Which word sounds like 'rite'?|write|wrote|writer? no".replace("|writer? no", "|wait"),
      "'Knight' and 'night' sound the same. What makes them different?|the silent k|the silent n|the silent t|=>knight starts with a silent k.",
      "'Write' and 'right' sound the same. Which one means to put words on paper?|write|right|=>write has the silent w.",
      "'Knew' and 'new' sound the same. Which one means 'did know'?|knew|new|=>knew has the silent k.",
      "'Know' and 'no' sound the same. Which one means 'to understand'?|know|no|=>know has the silent k.",
      "'Rap' and 'wrap' sound the same. Which one means 'to cover with paper'?|wrap|rap|=>wrap has the silent w.",
      "'Not' and 'knot' sound the same. Which one is a tied rope?|knot|not|=>knot has the silent k.",
      "'Nit' and 'knit' sound the same. Which one means 'to make clothing from yarn'?|knit|nit|=>knit has the silent k.",
      "'Rest' and 'wrest' sound the same. Which word means 'to relax'?|rest|wrest|=>rest has no silent letter.".replace("'Rest' and 'wrest' sound the same", "'Wring' and 'ring' sound the same? No. Which one has the silent w")
    );
    // fix the odd items above by filtering unclear ones
    const bad = /writer|Wring|=>mb is usually|wait$/;
    add("3/unit1/silent-letters", out.filter((l) => !bad.test(l) && !/\? no/.test(l)));
    add("3/unit1/silent-letters", [
      "Which sentence is written correctly?|I know how to tie a knot.|I no how to tie a not.|Eye know how too tie a knot.|=>know and knot both have a silent k.",
      "Which sentence is written correctly?|She will write a letter.|She will right a letter.|She will rite a letter.|=>write means to put words on paper.",
      "Which sentence is written correctly?|The lamb ate the grass.|The lam ate the grass.|The lambe ate the grass.|=>lamb has a silent b.",
      "Which sentence is written correctly?|I climb the tree every day.|I clime the tree every day.|I clim the tree every day.|=>climb has a silent b.",
      "Which sentence is written correctly?|He cut his thumb.|He cut his thum.|He cut his thumbe.|=>thumb has a silent b.",
      "Which sentence is written correctly?|The gnat buzzed by my ear.|The nat buzzed by my ear.|The gnatt buzzed by my ear.|=>gnat has a silent g.",
      "Which sentence is written correctly?|He tied his shoe with a knot.|He tied his shoe with a not.|He tied his shoe with a nott.|=>knot has a silent k.",
      "Which sentence is written correctly?|Please knock on the door.|Please nock on the door.|Please knoc on the door.|=>knock has a silent k.",
      "Which sentence is written correctly?|My wrist hurts.|My rist hurts.|My wist hurts.|=>wrist has a silent w.",
      "Which sentence is written correctly?|The knight wore armor.|The nite wore armor.|The knite wore armor.|=>knight has a silent k.",
      "Which sentence is written correctly?|Dad will wrap the gift.|Dad will rap the gift.|Dad will wrapp the gift.|=>wrap has a silent w.",
      "Which sentence is written correctly?|The sign says STOP.|The sine says STOP.|The signe says STOP.|=>sign has a silent g.",
      "Which sentence is written correctly?|Use a comb on your hair.|Use a coam on your hair.|Use a combe on your hair.|=>comb has a silent b.",
      "Which sentence is written correctly?|The wren sang in the tree.|The ren sang in the tree.|The wrenn sang in the tree.|=>wren has a silent w.",
      "Which sentence is written correctly?|The scientist saw a knot in the rope.|The scientist saw a nott in the rope.|The scientist saw a not in the rope.|=>knot has a silent k."
    ]);
  })();

  /* ---------------- compound words ---------------- */
  (function () {
    const pairs = [
      ["sun", "flower"], ["rain", "bow"], ["butter", "fly"], ["base", "ball"], ["foot", "ball"], ["basket", "ball"], ["cup", "cake"],
      ["pan", "cake"], ["snow", "man"], ["star", "fish"], ["gold", "fish"], ["jelly", "fish"], ["sail", "boat"], ["race", "car"],
      ["fire", "fly"], ["bed", "room"], ["class", "room"], ["bath", "room"], ["play", "ground"], ["back", "pack"], ["door", "bell"],
      ["bird", "house"], ["tooth", "brush"], ["hair", "cut"], ["water", "melon"], ["pop", "corn"], ["air", "port"], ["news", "paper"],
      ["sun", "light"], ["moon", "light"], ["day", "light"], ["hand", "shake"], ["sea", "shell"], ["rain", "coat"], ["home", "work"],
      ["book", "shelf"], ["sand", "box"], ["tree", "house"], ["lady", "bug"], ["dog", "house"], ["eye", "ball"], ["fire", "place"],
      ["cow", "boy"], ["horse", "shoe"], ["salt", "water"], ["mail", "box"], ["flash", "light"], ["snow", "flake"], ["note", "book"],
      ["under", "ground"], ["out", "side"], ["in", "side"], ["some", "thing"], ["every", "one"], ["any", "where"], ["after", "noon"]
    ];
    const out = [];
    const firsts = pairs.map((p) => p[0]), seconds = pairs.map((p) => p[1]);
    const realWords = new Set(pairs.map((p) => p[0] + p[1]));
    pairs.forEach(([a, b], i) => {
      const w = a + b;
      const a2 = pickK(firsts, 3, "cf" + w, [a]), b2 = pickK(seconds, 3, "cs" + w, [b]);
      const wrongsCombo = [];
      for (let j = 0; j < 3; j++) { const bad = a2[j] + "+" + b; if (!realWords.has(a2[j] + b)) wrongsCombo.push(bad); }
      b2.forEach((x) => { if (wrongsCombo.length < 3 && !realWords.has(a + x)) wrongsCombo.push(a + " + " + x); });
      out.push(line(`Which two small words make the compound word '${w}'?`, a + " + " + b, wrongsCombo.map((x) => x.replace("+", " + ").replace(/  +/g, " ")), `${a} + ${b} = ${w}.`));
      const wrongs = [b + a, a + " " + b, a + "-" + b].filter((x) => x !== w);
      out.push(line(`What compound word do you make with '${a}' and '${b}'?`, w, [b + a, a + "s" + b, a + b + "s"].filter((x) => x !== w), `${a} + ${b} = ${w}.`));
      out.push(line(`'${w}' is made from '${a}' and which other word?`, b, b2, `${a} + ${b} = ${w}.`));
      out.push(line(`'${w}' is made from '${b}' and which other word?`, a, a2, `${a} + ${b} = ${w}.`));
    });
    const notCompound = W("puppy carrot pencil banana kitten elephant happy yellow table window? purple turkey monkey pizza cookie paper music family").filter((x) => !x.includes("?"));
    pairs.slice(0, 40).forEach(([a, b]) => out.push(line(`True or false: '${a + b}' is a compound word.`, "True", ["False"], `${a} and ${b} are both words, so ${a + b} is a compound word.`)));
    notCompound.forEach((w) => out.push(line(`True or false: '${w}' is a compound word.`, "False", ["True"], `${w} can't be split into two smaller words that give its meaning.`)));
    out.push(
      "What is a compound word?|a word made from two smaller words|a word with two vowels|a word with a prefix|=>Example: sun + flower = sunflower.",
      "Does the meaning of a compound word often relate to its two smaller words?|Yes|No|=>A starfish lives in the sea and looks like a star.",
      "Which word is a compound word?|raincoat|rainy|rained|=>rain + coat.",
      "Which word is a compound word?|bedroom|bedtime? no".replace("|bedtime? no", "|bread|bed? no"),
      "Which word is a compound word?|football|ballad|footing|=>foot + ball.",
      "Which word is a compound word?|sidewalk|sideways? no".replace("|sideways? no", "|sandal|sided"),
      "Which word is NOT a compound word?|animal|airplane|bookcase|=>animal can't be split into two smaller words.",
      "Which word is NOT a compound word?|basket|baseball|bathtub|=>basket is not made of two smaller words that give its meaning.",
      "Which word is NOT a compound word?|monkey|doghouse|bluebird|=>monkey isn't two words.",
      "A 'doghouse' is a…|house for a dog|dog that lives in a house|dog who is a house|=>A doghouse is a house for a dog.",
      "A 'bookshelf' is a…|shelf for books|book about shelves|shelf made of paper|=>A bookshelf holds books.",
      "A 'toothbrush' is a…|brush for teeth|tooth made of brush|brush that is a tooth|=>A toothbrush cleans teeth.",
      "A 'rainbow' appears in the sky when…|sun shines through rain|snow falls|it is windy|=>A rainbow forms from sunlight and raindrops.",
      "A 'firefly' is a…|flying insect that glows|fly that lives in fire|burning insect|=>Fireflies make light at night.",
      "A 'sunflower' is a…|tall flower that follows the sun|flower made of sun|sun shaped like a flower|=>Sunflowers turn toward the sun.",
      "A 'pancake' is cooked in a…|pan|oven|pot of water|=>A pancake is a flat cake cooked in a pan.",
      "A 'snowman' is made from…|snow|sand|leaves|=>A snowman is a man made of snow.",
      "Which compound word means 'a boat with sails'?|sailboat|sailor|boatsail|=>sail + boat.",
      "Which compound word means 'a box for mail'?|mailbox|boxmail|mailer|=>mail + box.",
      "Which compound word means 'a room for a bed'?|bedroom|roombed|bedding|=>bed + room.",
      "Which compound word means 'a brush for hair'?|hairbrush|brushhair|hairy|=>hair + brush.",
      "Which compound word means 'a cut of hair'?|haircut|cuthair|hairy|=>hair + cut.",
      "Which compound word means 'light from the moon'?|moonlight|lightmoon|moony|=>moon + light.",
      "Which compound word means 'a ball made of snow'?|snowball|ballsnow|snowy|=>snow + ball.",
      "Which compound word means 'a coat worn in the rain'?|raincoat|coatrain|rainy|=>rain + coat."
    );
    add("3/unit1/compound-words", out.filter((l) => !/\? no/.test(l)));
  })();

  /* ---------------- synonyms and antonyms ---------------- */
  (function () {
    const syn = [
      ["big", "large"], ["small", "tiny"], ["happy", "glad"], ["fast", "quick"], ["begin", "start"], ["end", "finish"], ["smart", "clever"],
      ["tired", "sleepy"], ["pretty", "beautiful"], ["shout", "yell"], ["rock", "stone"], ["jump", "leap"], ["close", "shut"], ["buy", "purchase"],
      ["mad", "angry"], ["scared", "afraid"], ["easy", "simple"], ["silent", "quiet"], ["hurry", "rush"], ["huge", "enormous"], ["tidy", "neat"],
      ["loud", "noisy"], ["road", "street"], ["sick", "ill"], ["talk", "speak"], ["trash", "garbage"], ["kid", "child"], ["cry", "weep"],
      ["pal", "friend"], ["mend", "fix"], ["sofa", "couch"], ["bucket", "pail"], ["present", "gift"], ["wander", "roam"], ["gather", "collect"],
      ["brave", "courageous"], ["glance", "peek"], ["chilly", "cool"], ["sad", "unhappy"], ["picture", "photo"], ["shiny", "bright"], ["rapid", "swift"],
      ["wet", "damp"], ["near", "close"], ["strange", "odd"], ["smile", "grin"], ["stop", "halt"], ["choose", "pick"], ["toss", "throw"], ["begin", "commence"]
    ];
    const ant = [
      ["hot", "cold"], ["up", "down"], ["in", "out"], ["big", "small"], ["happy", "sad"], ["fast", "slow"], ["hard", "soft"], ["light", "dark"],
      ["open", "closed"], ["early", "late"], ["full", "empty"], ["wet", "dry"], ["tall", "short"], ["old", "new"], ["day", "night"], ["push", "pull"],
      ["near", "far"], ["begin", "end"], ["loud", "quiet"], ["clean", "dirty"], ["rough", "smooth"], ["strong", "weak"], ["thick", "thin"],
      ["heavy", "light"], ["lost", "found"], ["always", "never"], ["over", "under"], ["inside", "outside"], ["above", "below"], ["laugh", "cry"],
      ["awake", "asleep"], ["true", "false"], ["sink", "float"], ["buy", "sell"], ["win", "lose"], ["ask", "answer"], ["arrive", "leave"],
      ["remember", "forget"], ["accept", "refuse"], ["ancient", "modern"], ["generous", "selfish"], ["brave", "cowardly"], ["polite", "rude"],
      ["safe", "dangerous"], ["success", "failure"], ["freeze", "melt"], ["wide", "narrow"], ["rich", "poor"], ["love", "hate"], ["come", "go"]
    ];
    const related = {};
    const rel = (a, b) => { (related[a] = related[a] || new Set()).add(b); (related[b] = related[b] || new Set()).add(a); };
    syn.concat(ant).forEach(([a, b]) => rel(a, b));
    const pool = [...new Set(syn.concat(ant).flat())];
    const free = (w, correct) => pool.filter((x) => x !== w && x !== correct && !(related[w] && related[w].has(x)) && !(related[correct] && related[correct].has(x)) && !(related[x] && (related[x].has(w) || related[x].has(correct))));
    const out = [];
    syn.forEach(([a, b]) => {
      out.push(line(`Which word is a synonym for '${a}'?`, b, pickK(free(a, b), 3, "s1" + a + b), `${a} and ${b} mean almost the same thing.`));
      out.push(line(`Which word is a synonym for '${b}'?`, a, pickK(free(b, a), 3, "s2" + a + b), `${a} and ${b} mean almost the same thing.`));
      out.push(line(`Which word means about the same as '${a}'?`, b, pickK(free(a, b), 3, "s3" + a + b), `${a} and ${b} are synonyms.`));
    });
    ant.forEach(([a, b]) => {
      out.push(line(`Which word is an antonym for '${a}'?`, b, pickK(free(a, b), 3, "a1" + a + b), `${a} and ${b} are opposites.`));
      out.push(line(`Which word is an antonym for '${b}'?`, a, pickK(free(b, a), 3, "a2" + a + b), `${a} and ${b} are opposites.`));
      out.push(line(`Which word is the opposite of '${a}'?`, b, pickK(free(a, b), 3, "a3" + a + b), `${a} and ${b} are antonyms.`));
    });
    const SAME = "the same (synonyms)", OPP = "opposites (antonyms)";
    syn.forEach(([a, b]) => out.push(line(`'${a}' and '${b}' mean…`, SAME, [OPP], `${a} and ${b} are synonyms.`)));
    ant.forEach(([a, b]) => out.push(line(`'${a}' and '${b}' mean…`, OPP, [SAME], `${a} and ${b} are antonyms.`)));
    out.push(
      "What is a synonym?|a word with the same or almost the same meaning|a word with the opposite meaning|a word that sounds the same|=>big and large are synonyms.",
      "What is an antonym?|a word with the opposite meaning|a word with the same meaning|a word that rhymes|=>hot and cold are antonyms.",
      "Which pair are synonyms?|glad and happy|hot and cold|up and down|=>glad and happy mean almost the same.",
      "Which pair are antonyms?|early and late|big and large|quick and fast|=>early and late are opposites.",
      "Which pair are NOT synonyms?|fast and slow|big and huge|tiny and small|=>fast and slow are opposites.",
      "Which pair are NOT antonyms?|loud and noisy|hot and cold|day and night|=>loud and noisy are synonyms.",
      "Which word could replace 'big' in 'a big dog' without changing the meaning?|large|tiny|slow|=>large is a synonym of big.",
      "Which word could replace 'quick' in 'a quick answer' without changing the meaning?|fast|slow|late|=>fast is a synonym of quick.",
      "Which word could replace 'unhappy' in 'an unhappy child' without changing the meaning?|sad|glad|silly|=>sad is a synonym of unhappy.",
      "Which word could replace 'begin' in 'We begin at noon' without changing the meaning?|start|stop|finish|=>start is a synonym of begin.",
      "Which word best completes the sentence?{nl}The movie was so funny that I could not stop ___.|laughing|crying|sleeping|=>laugh and cry are antonyms; laughing fits.",
      "Replace the underlined word with an antonym: 'The soup is HOT.'|cold|warm? no".replace("|warm? no", "|spicy"),
      "Replace the word with an antonym: 'Please OPEN the door.'|close|unlock? no".replace("|unlock? no", "|paint"),
      "Replace the word with an antonym: 'The room was DARK.'|bright|empty|quiet|=>dark and bright are opposites.",
      "Replace the word with a synonym: 'The boy was SAD.'|unhappy|excited|hungry|=>sad and unhappy are synonyms.",
      "Replace the word with a synonym: 'The puppy is TINY.'|small|loud|hungry|=>tiny and small are synonyms.",
      "Replace the word with a synonym: 'Mom will MEND the shirt.'|fix|buy|hide|=>mend and fix are synonyms.",
      "Replace the word with an antonym: 'The rock is HEAVY.'|light|large|round|=>heavy and light are opposites.",
      "Replace the word with an antonym: 'The turtle is SLOW.'|fast|small|green|=>slow and fast are opposites.",
      "'Cheerful' and 'gloomy' are…|antonyms|synonyms|rhyming words|=>They have opposite meanings.",
      "'Enormous' and 'gigantic' are…|synonyms|antonyms|rhyming words|=>Both mean very, very big.",
      "'Ancient' and 'modern' are…|antonyms|synonyms|homophones|=>Ancient means very old; modern means new.",
      "'Brave' and 'courageous' are…|synonyms|antonyms|homophones|=>Both mean not afraid.",
      "'Generous' and 'selfish' are…|antonyms|synonyms|homophones|=>Generous means giving; selfish means keeping.",
      "Which word is an antonym of 'polite'?|rude|kind|nice|=>polite and rude are opposites."
    );
    add("3/unit1/synonyms-antonyms", out.filter((l) => !/\? no/.test(l)));
  })();

  /* ---------------- shades of meaning ---------------- */
  (function () {
    // each scale runs from weakest to strongest
    const scales = [
      ["warm", "hot", "scorching"], ["cool", "cold", "freezing"], ["big", "huge", "gigantic"], ["small", "tiny", "microscopic"],
      ["walk", "jog", "run", "sprint"], ["like", "love", "adore"], ["tired", "sleepy", "exhausted"], ["happy", "joyful", "thrilled"],
      ["sad", "unhappy", "miserable"], ["mad", "angry", "furious"], ["scared", "frightened", "terrified"], ["good", "great", "fantastic"],
      ["hungry", "starving"], ["pretty", "beautiful", "gorgeous"], ["wet", "damp", "soaked", "drenched"], ["cry", "sob", "wail"],
      ["laugh", "giggle", "roar"], ["said", "shouted", "screamed"], ["bad", "awful", "terrible"], ["funny", "hilarious"],
      ["smart", "brilliant"], ["dirty", "filthy"], ["noisy", "deafening"], ["surprised", "astonished", "shocked"], ["wind", "gust", "hurricane"],
      ["slow", "sluggish"], ["worried", "anxious", "panicked"], ["look", "stare", "glare"]
    ].filter((s) => s.length >= 2);
    const all = [...new Set(scales.flat())];
    const out = [];
    scales.forEach((s, si) => {
      const others = all.filter((w) => !s.includes(w));
      const comb = [];
      for (let i = 0; i < s.length; i++) for (let j = i + 1; j < s.length; j++) for (let k = j + 1; k < s.length; k++) comb.push([s[i], s[j], s[k]]);
      s.forEach((w, i) => {
        s.forEach((x, j) => {
          if (j > i) {
            out.push(line(`Which word is STRONGER (shows more)?`.replace("?", `: '${w}' or '${x}'?`), x, [w], `${x} is stronger than ${w}.`));
            out.push(line(`Which word is MILDER (shows less): '${x}' or '${w}'?`, w, [x], `${w} is milder than ${x}.`));
          }
        });
      });
      comb.forEach((c) => {
        const ordered = c.slice();
        out.push(line(`Which word is the STRONGEST of these: ${c.join(", ")}?`, ordered[2], [ordered[0], ordered[1]], `${ordered[2]} shows the most.`));
        out.push(line(`Which word is the MILDEST of these: ${c.join(", ")}?`, ordered[0], [ordered[1], ordered[2]], `${ordered[0]} shows the least.`));
      });
      if (s.length >= 3) out.push(line(`Which word shows a STRONGER feeling or action than '${s[0]}'?`, s[s.length - 1], pickK(others, 2, "sh" + si), `${s[s.length - 1]} is stronger than ${s[0]}.`));
    });
    out.push(
      "What are 'shades of meaning'?|small differences in the meaning of similar words|words that sound alike|words that are spelled the same|=>Words like warm, hot, and scorching are all about heat but differ in strength.",
      "Which word is the BEST fit?{nl}It was ___ outside, so Dad wore his thick winter coat.|freezing|cool|warm|=>Freezing is the coldest.",
      "Which word is the BEST fit?{nl}After running the marathon, she was ___.|exhausted|sleepy|bored|=>Exhausted is stronger than tired.",
      "Which word is the BEST fit?{nl}The monster was ___, taller than the trees.|gigantic|tall|fine|=>Gigantic means extremely big.",
      "Which word is the BEST fit?{nl}He felt a little ___ before the spelling test.|nervous|terrified|furious|=>A little nervous matches 'a little.'",
      "Which word is the BEST fit?{nl}The thunder was ___, and it shook the windows.|deafening|soft|quiet|=>Deafening means so loud it is hard to hear anything else.",
      "Which word is the BEST fit?{nl}The kitten gave a tiny ___ when it was happy.|purr|roar|shout|=>A purr is a soft sound.",
      "Which word is the BEST fit?{nl}The lion let out a mighty ___.|roar|squeak|whisper|=>A roar is a loud sound.",
      "Which word is the BEST fit?{nl}The thief ___ across the floor so no one would hear.|tiptoed|stomped|marched|=>Tiptoe means to walk quietly.",
      "Which word is the BEST fit?{nl}The soldiers ___ across the field in a line.|marched|tiptoed|crawled|=>Marched means walked in step.",
      "Which word is the BEST fit?{nl}The baby ___ in the sandbox.|crawled|sprinted|leaped|=>Babies crawl.",
      "Which word is the BEST fit?{nl}The cheetah ___ after its prey.|sprinted|strolled|wandered|=>Sprinted means ran very fast.",
      "Which word is the BEST fit?{nl}We ___ along the beach, enjoying the sunset.|strolled|raced|dashed|=>Strolled means walked slowly.",
      "Which word is the BEST fit?{nl}The hungry dog ___ its food in seconds.|gobbled|nibbled|sniffed|=>Gobbled means ate quickly.",
      "Which word is the BEST fit?{nl}The mouse ___ on a tiny piece of cheese.|nibbled|devoured|gulped|=>Nibbled means took small bites.",
      "Which word is the BEST fit?{nl}Her jacket was ___ after the downpour.|soaked|damp|dusty|=>Soaked means very wet.",
      "Which word is the BEST fit?{nl}The towel was a little ___ from the morning dew.|damp|drenched|frozen|=>Damp means slightly wet.",
      "Which word is the BEST fit?{nl}She ___ the room, looking for her lost shoe.|searched|glanced|ignored|=>Searched means looked carefully.",
      "Which word is the BEST fit?{nl}He ___ at the beautiful painting for a long time.|stared|glanced|blinked|=>Stared means looked for a long time.",
      "Which word is the BEST fit?{nl}She ___ at the clock for a second to see the time.|glanced|stared|glared|=>Glanced means a quick look.",
      "Which word is the BEST fit?{nl}The teacher gave an angry ___ at the noisy class.|glare|glance|wave|=>A glare is an angry look.",
      "Which word shows the MOST excitement?|thrilled|pleased|okay|=>Thrilled is stronger.",
      "Which word shows the LEAST excitement?|calm|excited|thrilled|=>Calm shows the least excitement.",
      "Which word means a very strong wind?|hurricane|breeze|puff|=>A hurricane has very strong winds.",
      "Which word means a very gentle wind?|breeze|gust|hurricane|=>A breeze is soft.",
      "'Chilly' is milder than…|freezing|cool|nippy|=>Freezing is colder than chilly.",
      "'Delicious' is stronger than…|good|spectacular|amazing|=>Good is a milder word.",
      "Which word is the strongest way to say 'smell'?|stench|scent|whiff|=>Stench means a very bad smell.",
      "Which word is the weakest way to say 'cry'?|sniffle|sob|wail|=>A sniffle is a small cry.",
      "Which word is the strongest way to say 'hit'?|slam|tap|pat|=>Slam is a powerful hit.",
      "Which word is the weakest way to say 'push'?|nudge|shove|slam|=>A nudge is a gentle push.",
      "Which word is the strongest way to say 'throw'?|hurl|toss|drop|=>Hurl means to throw with great force.",
      "Which word is the weakest way to say 'eat'?|nibble|gobble|devour|=>Nibble means to take small bites.",
      "Which word is the strongest way to say 'cold'?|frozen|cool|chilly|=>Frozen is the coldest.",
      "Which word is the weakest way to say 'angry'?|annoyed|furious|enraged|=>Annoyed is mildest."
    );
    add("3/unit1/shades-of-meaning", out);
  })();

  /* ---------------- plurals ---------------- */
  (function () {
    const cats = {
      s: W("cat dog book bird tree desk pencil flower shoe road hand bike cloud star wall door train lamp cup bed fork plate truck flag cow"),
      es: W("box bus dish watch brush glass fox church bench wish class dress lunch peach kiss match patch ax"),
      ies: W("baby puppy city story berry lady party family penny fly cherry bunny candy pony sky spy body country factory"),
      ys: W("toy boy day key monkey donkey turkey valley tray joy play holiday"),
      ves: W("leaf wolf shelf knife life wife loaf calf half thief elf"),
      os: W("piano photo zoo radio video"),
      oes: W("potato tomato hero echo"),
      irr: [["child", "children"], ["man", "men"], ["woman", "women"], ["foot", "feet"], ["tooth", "teeth"], ["mouse", "mice"], ["goose", "geese"], ["ox", "oxen"], ["person", "people"], ["sheep", "sheep"], ["deer", "deer"], ["moose", "moose"]]
    };
    const plural = {
      s: (w) => w + "s", es: (w) => w + "es", ies: (w) => w.slice(0, -1) + "ies", ys: (w) => w + "s",
      ves: (w) => (w.endsWith("fe") ? w.slice(0, -2) : w.slice(0, -1)) + "ves", os: (w) => w + "s", oes: (w) => w + "es"
    };
    const rules = {
      s: "add -s", es: "add -es", ies: "change y to i and add -es", ys: "just add -s (a vowel comes before the y)",
      ves: "change f or fe to v and add -es", os: "just add -s (a vowel comes before the o)", oes: "add -es", irr: "change the whole word or keep it the same"
    };
    const out = [];
    const wrongsFor = (k, w, right) => {
      const c = [w + "s", w + "es", w.replace(/y$/, "ies"), w.replace(/f$/, "ves"), w.replace(/fe$/, "ves"), w + "ies", w + "ves", w + "ys", w.replace(/y$/, "yes")];
      return [...new Set(c)].filter((x) => x !== right);
    };
    Object.keys(plural).forEach((k) => cats[k].forEach((w) => {
      const p = plural[k](w);
      const wr = wrongsFor(k, w, p);
      out.push(line(`What is the plural of '${w}'?`, p, pickK(wr, 3, "pl" + w), `${w} → ${p}.`));
      out.push(line(`How do you make '${w}' plural?`, rules[k], pickK(Object.keys(rules).filter((x) => rules[x] !== rules[k]).map((x) => rules[x]), 3, "rl" + w), `${w} → ${p}: ${rules[k]}.`));
    }));
    cats.irr.forEach(([w, p]) => {
      const wr = [w + "s", w + "es", w.replace(/oo/, "ee") + "s", w.replace(/an$/, "ens"), w + "en", w + "ren"].filter((x) => x !== p);
      out.push(line(`What is the plural of '${w}'?`, p, pickK([...new Set(wr)], 3, "pi" + w), `The plural of ${w} is ${p}.`));
      out.push(line(`Which word is the plural form of '${w}'?`, p, pickK([...new Set(wr)], 2, "pj" + w), `The plural of ${w} is ${p}.`));
    });
    // which of these is plural / singular
    const sing = cats.s.concat(cats.es);
    sing.forEach((w, i) => {
      const p = w.endsWith("s") || /(ch|sh|x|ss)$/.test(w) ? w + "es" : w + "s";
      out.push(line(`Which word is plural?`.replace("?", `: '${w}' or '${p}'?`), p, [w], `${p} means more than one.`));
    });
    out.push(
      "Which word is singular (means only one)?|mouse|mice|geese|=>Mice and geese mean more than one.",
      "Which word is plural (means more than one)?|children|child|man|=>Children means more than one child.",
      "Which word does NOT change when it becomes plural?|sheep|dog|box|=>one sheep, two sheep.",
      "Which word does NOT change when it becomes plural?|deer|duck|fox|=>one deer, two deer.",
      "The plural of 'goose' is…|geese|gooses|goosies|=>goose → geese.",
      "The plural of 'loaf' is…|loaves|loafs|loafes|=>Change f to v and add -es.",
      "The plural of 'half' is…|halves|halfs|halfes|=>Change f to v and add -es.",
      "The plural of 'knife' is…|knives|knifes|knifs|=>Change fe to v and add -es.",
      "The plural of 'baby' is…|babies|babys|babyes|=>Change y to i and add -es.",
      "The plural of 'monkey' is…|monkeys|monkies|monkeyes|=>A vowel comes before the y, so just add -s.",
      "The plural of 'boy' is…|boys|boies|boyes|=>A vowel comes before the y, so just add -s.",
      "The plural of 'bus' is…|buses|buss|busies|=>Words ending in s add -es.",
      "The plural of 'wish' is…|wishes|wishs|wishies|=>Words ending in sh add -es.",
      "The plural of 'tooth' is…|teeth|tooths|toothes|=>An irregular plural: tooth → teeth.",
      "The plural of 'tomato' is…|tomatoes|tomatos|tomatoies|=>Add -es.",
      "Complete the sentence: I have one cat, but my friend has two ___.|cats|cat|cates|=>Two means more than one, so add -s.",
      "Complete the sentence: One fox ran, then two ___ ran.|foxes|foxs|foxen|=>Words ending in x add -es.",
      "Complete the sentence: The farmer has one sheep and ten ___.|sheep|sheeps|sheepes|=>Sheep stays the same.",
      "Complete the sentence: One child has a toy. Both ___ have toys.|children|childs|childes|=>child → children.",
      "Complete the sentence: One leaf fell; then many ___ fell.|leaves|leafs|leafes|=>Change f to v and add -es.",
      "Complete the sentence: One city is big, but all the ___ are far apart.|cities|citys|cityes|=>Change y to i and add -es.",
      "Which word ending signals that a noun needs -es in the plural?|-ch, -sh, -x, -s|-a, -e, -i|-m, -n, -p|=>watch → watches; dish → dishes; box → boxes; bus → buses.",
      "What do you do to the y in 'puppy' to make it plural?|change it to i and add -es|just add s|take it away|=>puppy → puppies.",
      "What do you do to the f in 'wolf' to make it plural?|change it to v and add -es|just add s|keep it the same|=>wolf → wolves."
    );
    add("3/unit1/plurals", out);
  })();
})();
