//Chance and array manipulation methods
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

function rollDice(number) {
    result = (Math.floor(Math.random() * number))
    return result;
};

function searchArray(array) {
    let shuffled = shuffle(array)
    return shuffled[Math.floor(Math.random() * shuffled.length)];
};


// convert numbers to word form
function toWords(s) {
    var th = ['', 'thousand', 'million', 'billion', 'trillion'];
    var dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


    s = s.toString();
    s = s.replace(/[\, ]/g, '');
    if (s != parseFloat(s)) return 'not a number';
    var x = s.indexOf('.');
    if (x == -1)
        x = s.length;
    if (x > 15)
        return 'too big';
    var n = s.split('');
    var str = '';
    var sk = 0;
    for (var i = 0; i < x; i++) {
        if ((x - i) % 3 == 2) {
            if (n[i] == '1') {
                str += tn[Number(n[i + 1])] + ' ';
                i++;
                sk = 1;
            } else if (n[i] != 0) {
                str += tw[n[i] - 2] + ' ';
                sk = 1;
            }
        } else if (n[i] != 0) { // 0235
            str += dg[n[i]] + ' ';
            if ((x - i) % 3 == 0) str += 'hundred ';
            sk = 1;
        }
        if ((x - i) % 3 == 1) {
            if (sk)
                str += th[(x - i - 1) / 3] + ' ';
            sk = 0;
        }
    }

    if (x != s.length) {
        var y = s.length;
        str += 'point ';
        for (var i = x + 1; i < y; i++)
            str += dg[n[i]] + ' ';
    }
    return str.replace(/\s+/g, ' ');
};
//Reload Page
function reload() {
    location.reload()
}

//page scripts


//SHOPKEEPERS
function shopkeeps() {
    let shopPremise = [
        "Imp Imporium - This store is small and boxy, and entirely made of redwood. A tall devil stands behind the counter wearing a suit and tie, and imps are chained to the walls. He offers you the services of one of his imps for a small price- the rights to the imp's memories of what they did when you're done. He requires a much larger material collateral for if you don't return the imp or it dies/is irreparably maimed in your service.", "Coagulation Station - A seemingly normal (if ugly) old woman runs this roadside popup store. It is nothing more than a cart with a sign next to it reading 'Coagulation Station' painted roughly in red over a lime background. She offers healing supplies, potions, and rations in return for a small vial of your blood. (Feel free to come up with consequences for buying from her, such as her being a hag or using it for a strange ritual, etc.)", "Elemental Extras - An air, earth, fire and water elemental stand in the four corners of this (entirely brick) shop. Unfortunately, the 'shopkeepers' only speak primordial, so good luck if you don't. They each offer to put special elemental effects on whatever you own, such as a fire effect on your sword, an ice effect on your armor to freeze whatever hits you, or an earth effect on an arrow to have surrounding dirt swallow whoever it hits. Everything here is understandably very expensive.", "Vraug aks stor - A very tall, older orc hero enthusiastically tries to sell his weapons in this shop in order to retire. They're hung up on the walls, all showing varying signs of use. Some appear to be magical. Vraug also tries to tell his customers stories about each weapon before they buy (and especially before they ask.) The weapon most prominently displayed is a +4 Great Axe, with obsidian blades, a dragon-scale tip on the end and golden threads running down the handle. There are a few chinks in it, and the tip somehow has a dent in it, but the damage only seems to add to the charm. He charges an extraordinary price for this axe.", "Angel Bazaar - Apparently recently the churches haven't been generating enough coin to keep the local deity fiscally afloat, and some angels have taken it upon themselves to raise that extra money. Some are selling more regular items for cheaper prices, such as healing items, some are selling more extravagant magical items, and even others are offering 'miracles.' They're all set up in a series of stands in a small square that you swear wasn't here before.", "Betsie's Black Cauldron- everything is black, especially Betsie. From black oak ethanol to black licorice she has ingredients and potions unique to her gimmick.", "The Fleeting Flyer's Fast Findings - if the item floats, flies, or is otherwise airborne this shop might have it. Limited time only and has (randomized) a rare three uncommons and six commons but the more you travel the more likely you are to come across it because it's on a one man spell jammer with two carnival cars behind it.", "The Kyuss Kasino- a worm themed casino where the main attraction is the purple tunnel which is a purple worm in a metal harness designed to prevent it from moving and to keep its mouth open. The wager, and incidentally, the show is if you can make it out the other end alive you win]. There are scrying orbs that display a live feed of the current 'adventurer' in the worm for 5 silver lasting 30 min before the next five silver (no refunds). Quest hook?", "Djinni Gin Jamboree- a once a month festival celebrating a moon cycle of the dm's choosing. Marids sell their distilled saliva as well as various forms of never-before-seen-by-man fish dishes, and water elementals play live music which more or less sounds like the rhythmic gurgling of a muddy brook.", "The Crossroads Corridor - An invite only shop, given to adventures who have a number of their own magical items. When the invitation is slid under any closed doorway, said doorway will become the doorway to the shop. Operated by The Masked Man, it is a magical item shop that trades magical items for magical items of similar value. Leaving will exit out the door you originally put the invitation under.", "Bottom's Bottomless Meatpies - It's cheap, delicious (although a bit gamey and hard to chew) and the servings are enormous. The shop is run by an old goblin with an enormous smile, his name is Toothy Bottom, less so because of his bum, and more so because of a secret that he isn't telling any one, the secret that has made his Meatpie-shop the most well visited in the entire area, at least by those not able to afford fine dining in the upper districts.For you see, underneath this humble shopped, staffed every hour of every day with more goblins than you can count on one hand, or two hands if you have taken ABM (Advanced Barbarian Maths), lies a large, cavernous mining operation.You enter it through a set of large trap-doors found in the cold-store basement where you find the literal wheelbarrows of meat that allow every customer to order however much meat they want in (or on) their pies, as long as the Goblins can lift it up to the counter (the largest order so far was, according to the Goblins managing the front of the house, 'the weight of a small baby wrapped in a nasty hunting dog.' they have made no comment as to how they know that specific measurement).Once you are through the trap-doors, you'll find a rail-system rivaling that of the largest Dwarven mines, with rail-master goblins timing and directing all the in- and out- going traffic, and every cart that comes in is absolutely and utterly loaded with meat, which is then loaded on wheelbarrows and carted up through the trapdoor.If you were to follow the rails as deep as they go, through all of the winding tunnels, across chasms, past various cave-dwelling monsters that try to snack on the meat or goblins or, well, you, then you'll eventually find yourself at the namesake of mr. Toothy Bottom.A large, mass of rock-hard skin, covered in spines and horns and other sharp shapes, it has been split open, and the dark flesh underneath is mined ceaselessly by a small army of Goblins. They aren't violent, in fact, they are quite cowardly, but they are as professional as any Goblin can be, and they are also fighting a continuous fight against the flesh with their pickaxes.For you see, the open wound is constantly trying to close itself, regenerating at a blinding speed that the Goblins have learned to keep up with after opening the wound large enough to allow for their massive excavation progress.This may be the toothy bottom of the pits and chasms.But it is also a small area of the sleeping Tarrasque, regenerating fast enough that it does not notice the harm being done to it, and with a large enough Goblin Workforce to drive the economy of what is, essentially, a small Goblin Kingdom in these tunnels, complete with blacksmiths making new Meat-axes and monster-hide-leathercrafters making workboots and pants for the Goblins working down in that caustic blood.And let's not forget, that the entire lower class of the city has eaten Tarrasque meat at least once, some of them for years.But it's only two silver pieces for as much pie as you want (or can carry), so who cares to ask where it's all coming from?", "Sarah’s sewing shop, 'World class Seamstress.' - She means world class! She can repair even magical fabric to like new condition. Everything she makes alterations to gives them a +1 to charisma for 24hrs or until dirtied. Bonus returns after being thoroughly washed and dried (some items are dry clean only)She’s also a dry cleaners.byte", "The Philosopher’s Time Shop - Sundials, watches, windup clocks, candle clocks, hourglasses the size of mites up to the size of your average goliath, the Philosopher has a range to suit almost any buyer in need of a way to measure time. Be careful, the hours you spend there fly away like seconds!", "Oakshot Saddliery - Gwinnett Oakshot caters to a select clientele, those looking for clothes, armour, weapons and equipment specifically designed to suit those who spend at least part of their days in a different body shape. Minor magic at most, it’s mostly just very well designed to suit your Druid on the go or werebeing out for a night on the town.", "Jasper, Goldhand, Bloodstrangler and Smith - What does '‘til death us do part' mean if your wife is now a lich? Does a lifetime guarantee still stand if the object in question broke before the manufacturers were born? What exactly is an annuity? The firm of JGB&S is on hand to assist with non-devilish contracts of any kind.", "Morogh's 'Pet's' - This pet shelter is run by an older halfling named Morogh. He's kindhearted and only wants the best for his little animal companions he sells. From apes over hawks to wolfs, he just has every animal companion you could think of, but his store also has a back area. Not everyone is welcomed there as he also sells abandoned monster hatchlings, like griffons, owlbears, pseudodragons and even a red dragon wyrmling. Those monsters are all tamed so no danger there, Morogh just wants to know his customers better before trying to sell one of his more 'exotic' assets.The adventurers maybe can persuade him or do a favor for him (possible quest), like acquiring some exotic food for the more demanding beasts and monsters he houses. After this Morogh decides to sell them one of his monsters as a companion.", "Plane Ole' Butcher - A butcher shop that sells meat from an unknown plane of origin. One day a small portal opened up from the ground and strange-smelling exotic meats have been extruding from the portal. A shop was built around the portal which has been active and pumping for 50 years. People come to see the wonder firsthand but they stay for the dirt-cheap meats. The meats are char-grilled and heavily spiced to soften the meat's naturally pungent flavor.", "Looters Late Return (aka LooLaRe)- A seedy smelling store run by an androgynous goblin who wears overly fancy clothes. This goblin sells in bulk only, and at discounted prices. The catch is that if you make a purchase, you must sign a contract guaranteeing repeated weekly purchases. Your bulk discount increases the more product you are able to move, but if you are unable to maintain your weekly purchases, the goblin’s secret network of enforcers comes for it’s dues. Or your life.", "Sandman Fisheries - This tightly packed stall smells or marine air and salty nets. It has all the sea can offer to the gourmet with a striking emphasis on huge fish: tuna, spadefish, and the occasional gargantuan squid. The product is impeccably fresh. Always. Sandman (a desert dweller and camel race aficionado) doesn't seem to understand what you're asking about the supply chain and how come his shop ever exists at hundred of miles from the nearest sea!", "T'zargo's fine wares - This shop can be mysteriously seen in any plane, but always appears as an identical modern convenience store looking building. Inside is a tabaxi named T'zargo, always advertising his 'fine wares at reasonable prices.' He sells extremely rare and powerful items for millions of gold, along with random everyday items. Some of these rare items include an axe once wielded by Baphomet, and draws from a deck of many things. His mundane items he always pulls out of a box on his counter, and they include a full rowboat and 30 chairs.", "The Magic Commoner - A basic magic item shop owned by a young elf wizard named Tavon Ilidan. He sells all sorts of magical things from armor to weapons and rings an such.The thing about his shop even though on the outside it looked like a regular building despite being one solid color; purple, orange, green ect. But when you walk inside it's much larger than its outward appearance.The shop also travels via a magical door. Tavon has a set of different keys he keeps with him representing the different cities of the land/world. He first closes the front door, locks it, then unlocks it with a new city key and when he opens it, it opens to the new city.Tavon's appearance reflects on which city he is in and what color his shop is. If is shop is blue his robes are blue as well. Tavon also has a secret. Even though he looks like a young elf he is actually an ancient gold dragon that simply likes to travel and meet new people without the stigma of being a dragon. He likes to play tricks on people and test them to see if they are worthy of specific items in his shop, (IE a wand of fireballs he made himself.)", "Mallard Maladies - A veterinary clinic for ducks. The shop keeper is an old blind man who refuses to heal non duck creatures, but can be tricked into healing non ducks with a high enough deception ability. Despite the name, the clinic services male and female ducks.", "The Exploding Wand Shop- A shop that is characterized by an explosion that lifts the roof of the building off the walls and expelled black smoke every few hours - followed by the owner shouting from inside 'I'M FINE, EVERYTHING'S OKAY!'The owner is a young Eladrin Artificer named Seyf Melorathian who experiments on new wands and other magical wonders. His face is a black charcoal from the soot of the explosions but otherwise would be a light brown. He has a pair of glasses that protects his eyes from being covered in soot. He has blond hair and wears a Smith's apron. He sells common rarity wands, up to rare rarity wonderous items, and has been working on an experimental wand of fireballs. You can only purchase an experimental wand if you do a material gathering quest for him.If you buy one of his wand of fireballs (2000gp and a waiver signed to not sue) there's a 10% chance that when used the wand will cast a second fireball centered on you during the spell.He also offers enchanting services at various speeds depending on the rarity of the requested enchantment. He will also willingly take on apprentices or teach enchantment to anyone.", "Fishman’s Man Fry – A Triton, named Vamras Vogalath, with broken Common serves delectable seafood dishes. If asked about the name, he explains that it is food FOR men, not for fishes.Side note- this is shop is not anywhere near any large body of water. Nobody in town is sure exactly where the fish come from.", "Shwarma Tent - delicious herb infused fried flatbread with cured meats and shredded carrot and cucumber. The tent has small tripod tables and stools of worn wood. Patrons carve their names and other messages into the tabletops. Among the mundane names can be found the names of previous characters and NPCs that the party met, BBEGs they defeated, dated long ago, the current ruler of the land and the name of an old lover with a heart around it, Ash Ketchum, Drizzt, The Doctor, and the original Avengers. Searching carefully can also reveal a cryptic message to the party, seemingly carved years prior, but naming the PCs.", "Threads of Fate - three old sisters weave spidersilk and mundane silk into beautiful garments with embroidery that sometimes changes its image. For instance, a nightrobe has the moon and a starry sky embroidered, and the moon changes its phase with the real moon. On another, a dragon slowly chases its own tail, with its wingtips pointing to the time, as a clock. Yet another displays an hourglass which constantly drains, and runs out when the wearer dies. Other images might show great moving battles, gently waving flags that slowly fade and dilapidate as the empire becomes more corrupt, or ruins that become progressively overgrown with vines. The theme of the garments deal with the passage of time and the inevitable end of life.", "Salty's - the owner Saltamancia sells salt of differing coarseness and colors, and is an expert on which textures best compliment which purposes, from baking fine rolls to soaking one's feet after a days march. He has certain rare salts from distant lands with rare properties. For abjuring circles, he has a blessed salt that cannot be dispersed by gusts of wind. For healing, he has a fine blue salt that, when mixed with honey and packed into a wound, prevents infection and scarring. Another salt taken with hot peppermint tea can remove an additional level of exhaustion with a rest. True to his name, Saltamancia is old and curmudgeonly", "Bestboots - Bestboots sells custom footwear of exceeding quality, made from rare materials. The footwear can be light for nimble moves or heavy for kicking doors. With the right materials (possibly a quest) minor advantages can be built into the footwear. For example, a sole of felted yeti hair can give normal traction on ice, and a sole of gummed soapwood sap can allow the wearer to ignore a casting of grease underfoot.", "Hap's Microbrews - Hap claims to have perfected the means of beer portability, in that his brews are bottled and sealed under pressure in containers of lightweight spun cellulose which dont shatter when dropped. Opening his bottled beer releases a small localized burst of cold, chilling the beer just shy of freezing. The locals generally ignore his cart and 'ice cold beer' sign, as ales are meant to be drunk at room temperature so that they don't unsettle the stomach. A discouraged Hap sits by his cart of beer bemoaning his own foolishness at sinking his fortune into such a folly.", "Indelible - this quiet dusty alcove sells the magical inks, parchment, paper, vellum, papyrus, and delicate quills needed to prepare arcane and divine scrolls. Also sketch artistry, heraldry, and calligraphy supplies. Blank spellbooks, charcoal, pastels, and a few unique items are sold. Glowing chalk leaves marks that remain luminous for several hours. A special lightly waxed paper is waterproof and can be written on underwater with a special pencil. A waterproof scrollcase holds six tightly rolled papers in individual tubes, designed so you can immediately draw out the scroll you desire without searching through a sheaf of papers. The proprietor Abagnale is a gifted forger, and can make needed documents for the right fee, but only those skilled in thieve's cant would be able to recognize this based on a small glyph carved above the lintel.", "The Magical Arts - this is a totally mundane shop which sells shaved and marked decks of cards, scarves for pulling from your sleeves, salted nuts cans that shoot a confetti burst when opened, squirting lapel flowers, palm buzzers, chewing gum that turns your teeth black, whoopie cushions, and stink spray. The guy working there isn't the owner, but is happy to teach you how to use his goods. While distracting you with a card trick, he will also attempt to shortchange you or pickpocket something (minus 4 to notice his ledgerdemain). If caught, he will only say 'check your pocket' and there you will find the item you thought he pickpocketed. 'Its all part of the trick, man,' he will say, as he pulls a coin from your ear.", "The Bee's Knees - honey from different types of flowers with exceptional flavors. Meads of each type are also sold, as well as bee pollen and honey candies. A honey from frostclover will quickly dispell a hangover. Phasebee royal jelly can allow an additional use of misty step for a character with that feature, but the cost is exorbitant. The affogatto with honeycomb, coffee, and ice cream is delicious, and gives the benefits of a short rest when consumed in the shop over the course of an hour.", "Wacky Backy - Mr. C. Marin runs this fine tobacconist. House blends of pipe and cigarette tobacco can have classic Gandolf effects: controllable luminous smoke rings of various colors, and custom flavors and scents. The halfling weed is also sold. A self-lighting pipe is available, as well as a 'peace pipe,' which is a heavy iron pipe useable as a club (but you can also smoke out of it). Mr. Marin can craft custom peace pipes of nearly any light weapon.",
        "Wild Bill's Skins - Bill buys and sells tanned and untanned hides of all types. All. Types. Bill can craft armor and other leather goods from nearly any type of hide. Custom saddles can be made for any beast. A saddle on display is embossed 'ride me hard and put me away wet.' It isn't for sale, and it looks like it would fit Bill. He can craft a skin-tight custom leather armor that is concealable under clothing, but the customer must go into the back of the shop for a very long and invasive fitting. Rumor has it that some customers never emerge.", "Yellow Dancer - This is a musical instrument store run by a purple-haired elf named Lancer who was a freedom fighter in the past. His sister, Yellow Dancer herself, a famous concert performer who is a recognized star, is sometimes there in his place. Instruments of high quality and beginner pieces are sold. On commission, Lancer can craft an instrument which contains a secret sheath for a hidden weapon or wand. Also sold is 'the Axe,' a battleaxe/guitar combo, with a magical property of sound amplification that allows it to be heard in the largest venue, and allows for unique distortion effects. At DM Option, the Axe can also be used for ranged sonic attacks, mimicking the effects of Eldritch Blast.", "The Titty Twister: an adult entertainment venue, mostly for merchants and caravan guards. A goblin barker in a tophat and coattails out front gives a spirited pitch about the feminine wonders to be found within. Inside is a seedy establishment styled to look like an ancient temple. Billiards and darts games line the walls, and a poker game is playing out at a table near the center. Its a rough crowd, and fights that break out are settled with the loser being dragged away by the bouncers and the winner buying a round for the house. Beautiful dancers take turns on stage and mingle with clients between songs. Private shows are available. During the day the massive door is barred and the place is eerily silent, but from dusk til dawn raucous action is there for the taking. Locals stay well clear and pray for protection if they must pass near this den of sin.", "The Campus Martius: This strange storefront is a place for games of strategy, including draughts and card games, as well as sandtable war strategy matches involving miniature army figurines, played out with dice and measuring sticks. Arguments over rules are common, and are arbitrated by a robed and wigged judge on a low dias at one end, who often consults an enormous tome of rules which only he is allowed to read from. 1sp per game, per player, but by convention, the loser pays the fees of his opponents. A sweet green drink called mountain brew is popular here. It enhances focus, adding +1 to concentration saves for an hour, but leaves one tired, -1 to all saves for an hour thereafter.", "Millenium Sustainable Armory: run by an elvish druid, Millenium sells 'murder free' armor made from silk, giant leaves, sustainably harvested ironwood and similar materials. The armor otherwise has the properties of normal light and medium armors, but contains no leather, bone, or metal. Cost is about double. Heavy armor is not available. The leaves making up the armor do not wilt or turn brown.", "The Meat Market: run by a shadowy figure in torn robes, this odd shop gives permanent magical effects in exchange for body parts. The more important the organ or body part, the better the effect. The effect goes to whoever the part comes from, so don’t get greedy!", "Fernado's Fish Frenzy - in a village where magic and fishing collide, you might run into a man who can be at multiple places at a time, Fernado. He is a mystical fisherman who sets up booths in town squares, where the fish fight to the death in gladiator-style combat. The loser, is placed on his selling slab and the victor becomes larger in size. He has a 'leaderboard' that updates magically after every battle, accounting for all of the places Fernado is at in your world.", "A rickety old shop plastered with the title of some famous adventuring party / adventurer on it. The entire shop is run by a near delusional fan of the party/individual, and sells merchandise about them, as well as weirdly specific information that you aren't sure how they know. (If your party is famous enough, the store might be dedicated to them)", "Rats store - In an alley, there is a large pack of rats. Stories said that if you give them gold, they will bring you interesting items in exchange. They seem highly intelligent, and will also take shiny items, food and booze. It's hard to ask them for any specific item, without a druid or ranger that can communicate properly, but not impossible. Nobody knows where they get the things they sell.", "The treant - You enter the store, it's a mess: some shelves are broken, their content crashed on the ground, the floor is covered in leaves and branches. Behind the counter, an enormous tree. It's too tall for the room, so its upper part is bent in a really odd way against the ceiling, covering the entire room with its branches. You notice there is a face in the wood, a mouth opens, and with a deep voice that makes the whole building shake, it speaks 'Welcome, how can I.... uh... help you lil' saplings... ye?' This treant always liked humans, for some reason, and dreamed of experiencing their life. One day, he stopped some wolves attacking a merchant that was going through the forest, in exchange the merchant hired the treant in his shop. He's pretty terrible: goofy, slow and destructive, often breaking things when he moves his branches around, but he's trying and slowly improving.", "The alley - There is a back alley in the shadiest part of town, in it, you'll find an even smaller alley, barely large enough for one person, nestled between tall houses. It's dark and damp, hard to breath. Go there at midnight, place a bag full of god at the very end of the alley, with a note saying what you item you need. Then, take a knife, cut yourself and drop some blood on the street stones. At midday the next day, if the gold was enough, you will find what you wanted in the same place. If it wasn't, you'll find a severed pig head, with a similar but not-quite-the-same item in its mouth. ", "The cleric of the god of lies - Apparently a normal shop with a very friendly and generous owner, this place is built above a temple to the trickster god, and the shopkeeper its cleric. Every item sold here has a drawback: potions are mislabelled, many items are cursed, armours have holes or missing parts. Their rope is too short, their lanterns give out bright pink light, their thieves tools always break, their backpack is always wet and ruins what's in it. Their blankets make you itch etc. They do it just to fuck with people, for fun. If caught, they will say they have been cursed and send the players on a fool's errand to remove it, while they run away. ", "The barbarian - This store is owned by a violent barbarian that wants gold to buy food and booze. He has no concept of personal space and is very touchy, if a client asks for a 'lame' item he'll laugh and offer something else, if the client looks like a nerd (mage) he'll make fun of them. He likes bartering, but has no interest in items that seem weak or unworthy of a warrior, and will handle them very roughly. Don't sell anything made of glass to him, he'll just throw it at you laughing. ", "The pit - In the middle of town is a strange pit, throw something in it and a pale, long tentacle will emerge from the darkness, giving you something of equal value in exchange, sometimes. Some have tried going inside, they all came back but couldn't remember what was there. ", "The bog - There is an isolated bog, not too far from town. Make the correct signal at night and from the tar a whole shop will emerge. It's a black market store, with many rare and illegal items, that magically hides inside the bog for safety. The people working in it are all slender humanoid frogs with a lucid black skin.", "The paranoid - There is a store hidden by a 3 meters tall wall, it has no visible windows, only a steel door. Inside, you'll find yourself in a completely empty room with only a chair and another metal door with a hole in it. The owner is extremely paranoic and mysterious. Only one person can go in the store at once, has to sit on the chair and ask what they want. The shopkeeper will talk to them from behind the door, and procure the item they want. The gold must be put on a tray that goes under the door, and the item will be dropped from the slit in the door. The buyer never sees the owner, any attempt to enter or spy on them with magic will find it's extremely hard. The room with the chair can be flooded with toxic gas if clients aren't following the rules. The owner is always there, always the same person, but if you listen very well, you may notice he's often whispering to someone else behind the door, and there are multiple voices.", "The space-shifted - This store exists in a dozen locations at once. The same shopkeeper has the same inventory and works in all the stores at the same time. Clients will see strange, evanescent figures moving around: those are reflections of people in the other stores. They will see a haze around the owner, he will look blurry and stretched. That's because he's dealing with someone else somewhere else. The store can be used to move things to distant places rapidly (give a coin to the owner, he can give it instantly to any person in any of the other stores), but not living creatures. ", "Yourself - The players enter the store and behind the counter is... the players. They will be very friendly with themselves, but refuse to answer any question: all they can say is that time-travel is involved, they'll see in the future, it's fine, no need to worry. Saying anything could cause a paradox, so they can't, but they can still sell them things. And they already know what they will buy, because they already bought them in their past, the players present. bonus points if you can imitate your player's voices.", "The involuntary shopkeeper - This guy hates his own job more than anything, all he really wants is to sit behind the counter with his bottle of wine and smoke his pipe, not being bothered by anyone, especially not customers. He runs a shop with adventuring gear; winter clothes, magical trinkets, potions, rope and stuff like that. More focus on the magical stuff than anything else. The fact that the shop specializes in adventuring gear isn't by chance, our dear shopkeeper chose the business he guessed had the least amount of customers, so he wouldn't be bothered so much. He can abide what he considers 'real' adventurers as customers, but only just. Selling stuff means he has to restock, and that is such a pain. When the party first meet him, his shop is almost empty, and the few items that are still on the shelves are strewn about in a rather disorderly fashion. He's exhausted and annoyed, and almost chases them out again the moment they step in the door. The problem is that the nobles in the city has decided that adventuring, and especially adventuring gear(less danger than real adventuring), is all the rage at the moment. As the only shop that specializes in this kind of stuff, everyone who thinks they are something in town has been by and emptied him out. He might even consider giving the party some serious discounts in the future, if they could get adventuring firmly out of fashion again...", "The Prancing Kobold - When entering the shop, it quickly becomes apparent that half of this shop is a gigantic steel cage. In the middle of that cage is a relatively large pile of gold (knee high on a regular human). On top of that gold is a Red Scaled Kobold. Fiercely protective of his horde and possessions, he had the shop built around his horde so that no one could ever steal it. There's a person sized area where a series of complicated doors can allow the exchange of large items. To open the doors, the kobold must disable several traps using levers on his side of the of the room. He will never allow anyone into the cage and tries to never leave it. He will attempt to get the players to bring him a live chicken by paying them up to 10 gold. He will then ravenously consume the chicken.", "She's everyones grandmother - The big asshole barbarian? 'Sweety I really wish you would chew with your mouth closed, you know better' The angsty rogue? 'Oh deary, why do you wear so much black? I really wish you would wear more color, you have such a lovely smile' (Maybe she's knitted him a scarf next time they show up). The Wizard? 'Oh my, that was a lovely trick' or maybe he tries to show her some magic that will help around the house, and it's like teaching your grandmother how to use her computer. The drunk in the group? 'Its not my place to say, but I feel you're letting yourself down. I'll put the kettle on, you sit by the fire and try to rest' She wants to feed them, and won't take no for an answer. She will subtly suggest that areas of her property are in disrepair, and that they should assist her with chores, which invites more interaction. The idea here is to disarm your players, so no matter how much of a dick they are, they treat her like they would their grandmother. (No swearing, wipe their feet, make her proud, etc.)", "The Alchemist - Every alchemy shop in the world leads into a pocket dimension run by a gnome alchemist. If pressed for his name he just says 'Al' or 'The Alchemist.' The players are the only people who get sent to the pocket dimension when they enter an alchemy shop--for the rest of the world this place doesn't exist. Al is prescient and likes to tease the players, they're close friends who have been to his shop on many occasions, after all, even if it's the first visit for the players themselves. He doesn't really sell anything so much as he gives out free samples, of which he always has exactly one ready. Al's potions are a bit weird. They have a label and always do exactly what the label says. Unfortunately, as they're experimental samples, the labels are a bit vague. An example: The Red Potion, *if you drink it, something will die. * Basically it gives my players some fun wacky items to use that I don't even know what they'll do until they get consumed. I usually have them do specific things based on the context of the situation they're getting used in and try to favor word play as much as practical effects.", "Pit fiends plaza - When the players ask for directions to a store, they all get directed to a building that looks like it got bombed in the blitz, and only the door is standing. Opening the door reveals a circular room with racks and shelves packed full with oddities and magic items galore. At the counter is a cheery imp who serves the devil lord mammon and a lesser devil who works as his intern. When the players purchase anything from the store, the imp will tell them the fate of the last adventurer to wield the item and what they paid to get it. He will then offer to trade the item for a contract: he gets all your things when you die and your soul works for mammon in the afterlife. Very few people take this offer, but there are some immensely powerful artifacts in his possession that he will only part ways with if you make the deal", "The Shop that Sells Itself - A store of mundane gear with no shopkeeper to be found. A sign on the front door says 'Back In A Few Days, Come Right In!', and the place is apparently open 24/7. The owner is a wizard who takes long forays into adventuring (maybe he's just gone right now and will be back later, or maybe gone for good). Either way, the shop is magically enchanted to grant a sort of semi-sentience to the objects for sale so that they can sell themselves. Signs underneath each item list a price and instructions to leave the money in the object's place. Coils of rope will go on long spiels about how durable and plaint they are. Earthenware pots make strong appeals about the beauty in their own symmetry. Candles describe the exact amount of time they'll burn, and offer helpful snuffing advice. If an item is bought and paid for, the money placed in its stead is swallowed up by a mysterious void, and the item becomes inert/mundane. If an item is taken without paying, well let's just say that the objects in the store make very accurate witnesses for the local magistrate's prosecution case.",
        "The teleporting shack - This shack will seem to appear in the most random places. Sometimes it will be in the middle of a field, a dungeon or delicately balanced on the statue in the city centre. The shop keeper is constantly preoccupied; frantically running around the shop gathering all sorts of magical items from piles of unorganised goods, and taking them into the next room. He comes across a little loony and obsessed, this is perhaps because he is. He’s busy trying to perfect his homemade teleportation device, and it’s all he can think of... As he’s so busy, getting the shop keepers attention for more than a minute can prove challenging. It’s easier to just take what you came for, if you can find it that is. Unless you have to go digging through junk to find it he probably won’t notice, but if he does I hope you’ve always secretly dreamed of being a pig.", "A warlock multi-level marketing scheme - Some extraplanar being made a deal with a warlock, and told them to extend the pack for others. They use abilities given by their patron to provide some good or service that is harder to get otherwise. Maybe the fey MLM provides a supply of rare feywild fruits, or they offer to guide people through a forest faster than usual using fey shortcuts. Maybe the great old one warlocks are booksellers. Their primary goal is collecting knowledge from people, but they make their money by making and copying books. They deal in knowledge and secrets. These different groups of warlocks make deals with normal humans. The person sells their soul/energy to the warlocks above them. Those above keep gaining power. Their patron gains the most, of course.", "Okail and Halite's Enchantments - A magic items shop run by a female kobold (Halite) and a male gnome (Okail). Halite's the sort that acts gruff to cover her caring streak, and wants things done 'properly' (again, because she cares that it's done right.). Think 'the one halfway nice and helpful lady at the DMV' and you're on the right track. Okail's the quietly cranky guy that lights up like a little kid when you get him talking about his interests, and is constantly trying to find 'better' ways to do things without explaining to anyone else what he's doing or why until Halite yells at him for it. The two put up a clearly forced front of polite friendliness to potential customers while bickering and snarking at each other...when they aren't finishing each other's sentences, that is. They also agree on the fact that getting to work on interesting orders is fun and making money is even better. The shop has a huge selection of items in the back room, retrieving any of them involves much yelling back and forth about where things are located and why, sounds of large objects being moved around, and occasional personal injuries. (Halite subtly resents when they go through this process and have to put things back.) It is gradually hinted that the two are married ('My mother warned me about mammals, but no, I was in love...' etc) and that hatchlings are involved. Neither will acknowledge any questions on this matter, further pursuit of such inquiry might find one's enchanted items displaying unusual quirks.", "The catfolk archivist with insanely high stealth skill who tolerates exactly zero shenanigans in her spell shop. (*clears throat behind barbarian*)", "The grizzled bowyer singlehandedly attempting to negate every 'pretty boy elf' trope.", "The super-sketchy back alley shop with an illegible sign trading in 'exotic goods'. (party wanted to sell a monster they captured alive).", "Gaiman Nancy's Always Open book shop and supplies - I made a shop where there is one in many towns and all big cities. The shops are even in unlikely places like Skullport. They are small book shops with amazing amounts of lore. They also sell some spell casting supplies like incense, foci, and paper. Each shop is small and filled with piled books. The shops are open 24 hours a day, 10 days a week. On entry, the shopkeeper is never there, but if they ring a bell the shopkeeper comes. The shopkeeper never leaves the store and often asks for the PCs to run errands for them outside the bookstore. Each shopkeeper is different, and quirky, and they all claim to work for Gaima Nancy. In truth, there is only one shop and only one shopkeeper. Their name is Gaima Nancy and they are a very powerful wizard Changeling. They attempted to use Wish to allow them to have Mordekainen's Magnificent Mansion with doors opening in multiple locations. The spell worked, but had side effects. The Mansion doors can be opened in multiple locations via a ritual spell cast in that location. However Gaima Nancy can no longer leave and he can't close the doors. If the players can convince him, he can let them use the store to travel from place to place, but only if they get to a high level.", "The dragon shop keeper - A clever dragon realized that they could make more money running a shop then from terrorizing the kingdom. They sell magic items from their horde to adventurers for a considerable profit. They are highly charismatic and will persuade adventurers to spend as much as their gold as possible. Wise adventurers know not to steal from the dragon or they might end up as lunch and their gear sold to other adventurers.", "Ren's In all of my open ended games, I have a wealthy and powerful family with the surname of Ren who own a string of franchises shops across the world in major cities and some large villages. Think like a Home Depot or a UHaul or whatever. All the shop types have different suffixes. Renoo’s Potions, Renai’s Horse Rentals, Renah’s Tavern and Beds, etc. Horse rentals have been pretty convenient. Rent a horse for a one way trip and return it to any Renai’s but make sure to feed them first before you return them or face a hefty fine. I sometimes have fun with this. When the players reach a high enough level, then Ren family uses the players as marketing material, kind of like Coca Cola sponsoring a race car — 'these guys trust Ren’s to get it done!' You could also make quests around the family. Maybe it turns out they are not as benevolent as they seem up front. Make a whole series of quests around how they use their influence to influence kingdom policy to their benefit to the detriment of the lower class, or whatever else. Or maybe their best items are actually stolen or looted from graveyards. Or maybe they want you to discreetly take out the competition.", "Although Shiny can't speak, she understands the concept of barter very well. A player may present a magic item they wish to trade, and if Shiny likes it she will rummage through her nest and produce a magic item that she is willing to give in return. If the player finds the offer acceptable, they can give their item to Shiny and she will let them take the other item. If the player doesn't like Shiny's offer, she might produce another item, or perhaps even offer an additional item if she really likes the player's item. However, after a couple of failed barter attempts Shiny will give up and stop bartering. Don't be afraid to have Shiny offer the players a bad deal at first, she is a magpie after all - they are cunning birds. Did the paladin fall down a bottomless pit? Did the entire party die while carrying the McGuffin? It's quite likely that the lost magic items wound up with Shiny somehow! Even if the characters don't know it, the players might find it cool that Shiny has the exact same Holy Avenger that the party's late paladin had carried. And it's a way for the players to retrieve lost useful items, even if it's a little bit videogamey.", "The Many - At the edge of town lies a door in a doorframe, nothing else around. Inside is a room made of deep purple bricks and braziers with green flames. At the center of the room lies a jar full of blackness and glowing yellow eyes. When you open the jar, the creatures fly about, eventually settling, creating the illusion of a humanoid cloaked in turquoise. If you tell them what you want, they will respond with an ominous chorus of voices saying the required gold amount. They take them gold, put it in the jar, and produce said item from within the cloak. They be Many. (Inspired by Shovel Knight: Specter of Torment)", "Helcynth the Traveling Hag Merchant - Helcynth is a traveling night hag and magic item creator, who can strangely appear in different cities or locations the party ends up in, no matter whether the party left ahead of her from the last location or not. The players will often find her in marketplaces in her small tent, though the interior is about two to three times the size it should be. She of course sells a plethora of magical items that she has bought to resell or created herself. She deals in gold as with most merchants, but some items can only be paid for with souls (or one can offer to trade a soul for other items). The player can sell theirs for her to collect upon their death, but ideally they will agree to a deal she offers: when they have subdued someone and are willing to use their soul to pay Helcynth, they only need read a fiendish word written on a small ticket she will give the players, and she will appear to finish off and collect the soul from the subdued person. The offering will need to be wholly defeated but not dead (unconscious or captured at very low HP), and she will not fight with the party for a soul. This character bends the rules a bit and takes some liberties with night hag lore because it’s from a homebrew setting, but hey, she worked great for my game, even if my players ended up reneging on their deal with her and started a whole tangential arc where they had to invade her pocket dimension and kill her.", "The Imprisoned Shopkeeper - He/she was a powerful sorcerer/wizard who brought the ruling empire to its knees long ago. Fortunately, the empire was able to rise up and defeat the wizard. Now, the wizard is kept prisoner in his ancient tower, kept in check by arcane magic and the fortress built around the tower, not to keep people out, but to keep him in. As per terms to his imprisonment, he must sell all of his scrolls, magic items, and potions. His prices are extremely high, of course, as it is quite expensive to keep this powerful arcane user's magic in check. Oh, and he is quite insane from centuries of isolation. Sidebar: It is fun to role-play animosity between the now insane shopkeeper and the warden. Also interesting to watch how the players interact with one who once performed evil acts, but is now on the path to redemption... or is he?", "Izzet Shopenator 3000 (prototype) - An izzet inventor has tried to make an automated shop. At the counter there are several tubes, speak the desired item into one of these tubes and they will fly down the tube to the customer, sometimes breaking the tube, making the item fly out of the side, and sometimes delivering the wrong item that almost sounds alike. When the item has been delivered the amount of money written on the item must be put into the tube, where it will suck up the cash, sometimes getting the customers arm caught as well. If the item is removed from the tube without delivery of payment, the item will explode. When payment is recieved, the exploding agent is automatically removed.", "Gnal's Shop - There's this dusty, old looking shop downtonw. You can read Gnal's Shop on a sign. Lights are aways out, so no one ever knows when it's actually open, but you can aways try the door. Inside, it's a rather well kept shop, and everything looks normal at First glance - except there's a Gnoll behind the balcony. The Gnoll is old and snorts while talking. He gives players discounts for bringing in more people, and is quite gulliable. The nice thing about him is that he is aways hungry, and new food makes him REALLY happy. He also makes remarks now and them about How tasty players look, and tells them about his memories eating members from the player's race. Apparently he got tired of killing to satiate his god's hunger, and is trying to do It by raising money.", "The Quest Hook - The party comes across a kid running a store. He’s very eager and enthusiastic, happy to show the party all the quirky magical items he has for sale. He apologizes that there’s only so much he can sell because Daddy told him he can’t sell the more dangerous/powerful items. When probed for more information, the party learns that Daddy has been missing for over a month. The kid and his dad usually scout/adventure together and bring the loot back to the store, but this time Daddy heard of a high-risk, high-reward place, so he went ahead and told the kid to run the shop. Only, the kid is getting worried about Daddy... This works great as 1) a way to tell adventurers about where to find loot 2) a way to explain why the party can’t yet get powerful magic items 3) a motivation to get loot (from the place and from the shop) and 4) an emotional/protective motivation for characters not solely motivated by greed. I used it as a quest hook into The Hidden Shrine of Tamoachan, and it worked pretty well. Also worth noting, I made the characters a kid and his dad, but gender isn’t important here so feel free to switch that up if you like.", "Discount Magic Goods Store - The store is run by an extremely aloof, airheaded wizard. He talks as if he's in a dreamy haze and moves with grand flourishes. If you ask him for a magic item he has it in every size, shape, colour or material you could dream of. Want Boots of Jumping? He's got it. Don't like that one? How about this one? How about this one? Maybe this one? If you ask he assures you yes, they are all Boots of Jumping. And they're all at 75% off too! Artifacts? Oh boy he's got artifacts. He's even got all 30 Eyes of Vecna! The joke is the guy got his hands on a staff that allows him to enchant any item, however he wants, 5 times per day but there's a 95% chance the item's going to become cursed and it puts a drain on his sanity. There's various odds of how badly cursed the items end up being and it's all a gamble for what the players are going to get if they buy anything. The Boots of Jumping could be anywhere from making Mario jump sound effects to making it so you can only move by jumping to making it so you can't jump at all. Always fun to watch the players debate if it's really worth it.",
        "Artificial Artifice - sells miscellaneous good luck charms and baubles without any enchantments", "Harroc's Fresh Kill - a lizard folk that sells the meat he hunts/catches for a reasonable price", "The Dragon's Hammer - smithy manned by two jovial dragonborn brothers", "Charmed - very high end clothing store owned and operated by an old halfling and his apprentices", "Fleukh agh Mounavuks (Meat and Mounts) - A well off butchery and livery stable ran by a half-orc and several of their full orc half-siblings.", "Cat's Resting Blanket - a quilting and knitting shop ran by a few old tabaxi women who all lived long and varied lives. An thief is bound to be spotted and have a near death with a few expertly thrown knitting needle.", "McClanny's Forge - Forge that was ran by an amnesic dwarf who does not know how he got there. He forgot almost everything about his life but how to forge and about metallurgy. He set up shop in a town's meager forge which expanded over time by the dwarf and the former mayor.", "Dormin & Hormin & 01000101 (069 or E) - Two gnomes and a warforged who make contraptions and do more complex or simple repair jobs. Dormin wants the business to thrive. Hormin wants to invent something that will make him rich. 01000101 (069 or E) wants to win the 'war on prices' without causality and capture 'most of the repair and technical support contracts' without restrainment or extortion after Dormin and Hormin repair him to functioning order.", "The One Armed Bandit - A tavern with a slot machine in the corner ran by a halfling. The tavern is the run of the mill pub and bed place but the dwarven themed slot machine is what is marvelous. It blinks, it drinks, it wisecracks a win or lose, dare i say it thinks. Everyone seems to win but, always loses more than they won if they do not walk away. (the slot machine is ran by a gnome and kenku bard who can make his voice sound like a warforged).", "Xildi's Herbiary and Nature Education Grove - Xildi is a figborg who took a odd habit of socializing with humanoids after taking a group of lumberjacks to not cut down the new trees and go for the dying side of the forest where the sprites left. As she saw with teaching the humanoids to respect the forest, she made a greenhouse to reduce incidences of humanoids explore or exploiting the forest. She is commonly found with a group of children following her and a flock of songbirds on her robe and back.", "Pedro's Puzzles - Pedro is a wood carver who specializes is puzzle boxes and children's toys. He also makes furniture that can double as puzzle boxes.", "Eldrannen Elixirs - a vineyard that bottles its wine in flasks that resemble large potion bottles, run by a high elf who combines the local grape varieties with his homeland's winemaking process.", "The Crawling Vine - Naturopath, sells hallucinogens, healing kits, etc.", "He Who Smelt It - Blacksmith, sells armor, weapons, etc. will repair armor, weapons, etc.", "The Delirious Adventurer - Tavern/Inn, popular among locals, fairly unknown for outsiders, mid price range.", "The Golden Spider - Tavern/inn, popular among outsiders, locals stay away, scam-y, high price range.", "The Early Owl - Tavern, unpopular, run-down, front for the underground/black market.", "Donuts and Dragons - A pastry shop run by a group of kobolds and a kind elderly dragonborn lady.", "Siritharm's herbs - a half-elf is selling assorted herbs, salts, and other seasonings for food. The only thing that could be considered magic is an enchanted lamp with a flame that changes color to keep the area lit and to attract attention, but it's not for sale.", "Grolaina's Inn - A small cozy tavern and inn, owned by an incredibly friendly (and surprisingly attractive) half-orc.", "Deepforest Goods - A human druid and her awakened shrub friend are selling assorted teas, edible mushrooms and berries, and also finely-carved wooden figurines.",
        "A tall and husky Gold Dragonborn, clad in bright colored and decorative clothing, sits on an equally ornate rug. He’s fidgeting with something in his mouth. It’s has a small garnet, chipped by his teeth and covered in spit. He has a small pouch in his vest full of these gross little gems. He sells very beautiful jewelry, thankfully with no bite marks.", "Two very young Halfling brothers are making dumplings. The dumplings are way too big even for a normal sized person, but they taste pretty good.", "A tiefling who’s missing a tooth smiles quite charismatically. He’s selling potions and poisons, but they’re stored in old, reused liquor bottles. Kinda weird, but mostly harmless.", "This human-elf couple makes soap. They’re super happy because of their soap, which is always enchanted into putting anyone who uses it into a good mood.", "This scrawny kobold is making guns. He loves his firearms to death, despite being too small to wield a majority of them. He just loves his craft.", "A bald, female wizard doesn’t actually sell anything, but she enchants items for others. She also has a hairless cat, probably related to the same incident. She has looks that could kill, but she is super sensitive when someone brings up her lack of hair.", "A young, quiet librarian sits behind a desk reading a book. When the player gets closer, they notice that she’s actually a centaur. She’s quite dainty and gentle for her size.", "A disabled dwarf creates small trinkets from bed. His half human daughter takes care of him, but a network of clockwork beasts run his store front, taking care of sales and maintaining each other so they’ll sell for a pretty penny. Rumors about him creating a chair with wheels are spreading, so he’ll finally be mobile again.", "An unlikely pair of merchants run an apothecary, alternatingly with one working on baubles while the other deals with customers. The dwarf is a grumpy old man, nearly unapproachable, and usually berates his half-orc apprentice even when in front of the customers. When asked, he typically overprices and generally shuts down any attempts at haggling. The half-orc apprentice is suspicious and intimidating in appearance, and sound threatening when replying to his dwarf master, but is actually much more cordial to the customers and is more lenient when haggling. Both, however, like their beer.", "A gnome tinker who has all kinds of different scrounged and jury-rigged magic items. He appears on his cart every couple hours until the party buys something.", "An aarakocra resembling a vulture who sells things he finds. By ‘finds’, he means he takes stuff off of dead bodies and whatever else he sees lying around. He’ll sell random pieces of armor, weapons, books, and food he cooks himself with scavenged meats and the like. He’s a great cook and a cynical old coot. His coyote & pepper stew is quite popular.", "A thin man wearing a backpack seemingly too large to carry. Inside are various minor magic items which he sells as novelties to anyone with the cash to buy them. He is dressed in flamboyant clothing.", "A homeless man gives advice on the town and strange trinkets in exchange for coin.", "A cheerful dragonborn who runs a sandwich shop in a tavern. He is obsessed with incredibly spicy food, and tries to push spices on customers to ‘keep the fire burning in their stomachs’. Cooks all of his food with his breath weapon.", "A young half elf alchemist selling concoctions out of a small bag. Her accessories include a bandolier that holds different vials, leaf shaped earrings, and a purple headband. She promises that her creations work, however the shakiness of her voice don’t inspire confidence. She’ll get overly excited when she makes a sale.", "A scarred, brutish orc selling finely crafted jewelry. if engaged in conversation, he reveals that he only took up the barbaric ways of his people because of peer pressure. Eventually he went adventuring and then decided to pursue his lifelong hobby of crafting rings and necklaces and the like. His clan must believe he is long dead by now.", "A young human wizard, yet to lose his baby fat and with no sign of facial hair can provide advanced spell scrolls, but always refers to customers as ‘youngster’ or ‘whippersnapper’. When asked about it, he becomes very upset, muttering about curses and kids not respecting their elders anymore.", "A old human luthier with a grey mustache and coke bottle glasses. He’s always working on something and refuses to look away from what he’s working on for more than a second. His teenaged son does most of the dealing, however he spend most of his time playing with the merchandise. The son will keep playing when spoken to and will inform everyone that his band is playing at the tavern that night. Before making any deal he will walk over and ask his father if the deal is fair.", "A slender, well-mannered man sells curiosities in a travelling carriage. He has a pet mimic that has taken the form of a small lockbox, which is somehow very well trained and obedient.", "A female high elf with shoulder length auburn hair and named Mary Jane sells herbs, fruits and vegetables from a large wagon pulled by a pair of mechanical oxen. Many of the herbs are seasoning; some have medicinal uses and a few have ‘recreational uses’. Her partner, a shy male Halfling named Timmy who barely speaks to anyone, but, if you can befriend him, he can sell you a few herbs and roots that are useful in toxin manufacture.", "A sphinx who sells minor magical items in exchange for new riddles.", "A quick tongued elven female who has a reputation of being a snob. She often wears a colorful dress that’s skirt reaches down to her knees, several different pieces of jewelry, and a small leather bag that has the symbol of her merchant clan on it.", "A halfling peddler who roams town to town selling wears from his ‘many adventures’. If the party sells him something, say a blanket, they might find it for sale in the next town over. The blanket will have some story such as how hiding below it prevents ghosts and goblins from seeing you, or maybe it had kept him warm in the snow capped mountains and was the warmest blanket ever. He will be selling for three times what he paid for it at the least. If you want to add another layer of mystery. The things he says the objects can do actually happen. Aside from the obvious abilities the goods have, they are clearly the same goods the adventures and townsfolk sell him. Down to a wierd stain or carved initial. He is smart enough not to sell goods in the places he bought them.", "A smith, a ’90s waif who only weighs 90 pounds if she’s carrying hammer and tongs. She’s tiny, the size of a human ten-year-old. She makes big, heavy things such as plate armor, tower shields, pole arms. They’re of masterwork quality. She’s not deceptively strong, either: she can barely raise the hammer above her shoulder. There’s no enchantment or anything else involved; nobody has ever been able to figure out how she does it.", "A kobold sells ‘Enhanced’ potions at a discount from a dingy shop sandwiched between two larger, more reputable stores. The proprietor is somewhat vague on exactly how the potions have been enhanced. They do exactly what the label implies, though (‘Ideally,’ the proprietor insists,) they frequently come with an additional effect. This ‘Enhancement’ can range from enhancing the user’s physical and mental faculties, to making the user’s skin turn blue for hours, to making the user’s tongue taste like bathwater. A particularly intelligent user may be able to determine the side-effect before using it. The rest simply have to hold their breath, drink, and pray.", "A tall lanky shop owner who can’t seem to get warm. He wears several sets of clothes at once.", "A very grumpy half-orc who gives customers what they want, but does not take requests. His prices are excellent, but he will only sell one item of his own choosing to each PC.", "A toothless, vegetarian lizardfolk who sells poultices and other herbal remedies. He claims that he was cursed to have no teeth and took up a different diet out of necessity, and he grinds up his food into a puree so he can eat it properly. His scales are a sickly yellow and he’s almost always bent over his table, grinding up and boiling down various common and exotic plants, all of which he grows or buys himself.", "A bizarrely dressed human with a strange beard and haircut. He brews coffee and spends hours perfecting it so he could find the purest, most flavorful blend. In reality, it’s just normal coffee. When being told this, he responds by saying that they aren’t cultured enough to understand the depth of the flavor. He’s incredibly cranky and pretentious for his age, so almost nobody likes him.", "A dust genasi who sells a huge variety of cleaning supplies. Brooms, mops, soaps, various scented oils, you name it. He’s constantly leaving a trail of dust around and cleans it up as it gets made. When it’s pointed out that he’s doing a fruitless task, he becomes extremely sarcastic and thanks them for pointing out the obvious. Other than that, he’s pretty laid back.", "A Warforged merchant that sells scrap metal, logs, wagons and parts to assemble your own Warforged bodyguard. Oh, and he has some healing potions at discounted prices because ‘What would anyone use them for?’", "This unidentifiable person is clad in a bright blue robe and an opaline mask. Their hands and feet are bright blue as well. They sit on a pretty standard rug, cross legged and swaying side to side. His rug is NOT for sale, because he always mentions it before talking to a customer, along with a large tag that says ‘NOT FOR SALE’ on the side. He sells various items, all with some sort of minor magical effect. He doesn’t say much except for strange things like, ‘What’s your favorite color? Mine’s blue.’ and ‘I like your haircut.’ When the party leaves, he quietly hums to himself and disappears as soon as he’s out of earshot. Nobody knows who or what you’re talking about when you try to mention him.", "A strangely happy man in a cart pulled by horses. He smiles extremely wide and creepily. He’ll offer free items to the party, like food, if they come into his cart and grab it. You probably should’ve noticed this was a highly advanced mimic, due to his mouth not moving when he talks and the walls of his carriage looking kinda fleshy.", "A quiet woman lies lazily on the back of a smooth-shelled ankylosaurus. The anky’s name is Bailey, and she’s just a big puppy dog who likes being pet. The merchant (named Rachael) sells books, and buys books. She also gladly accepts food for her anky. Bailey likes corn a lot.", "A triton fisherman riding the back of a colossal catfish, with a small tent on its back. He has wide variety of fish stored in small barrels in preserving salts. He and his catfish have been friends since they were both born, and he takes great offense when someone insults his fish (both the ones he’s selling and the one he’s riding).", "A butcher who enjoys his job a little too much. He’s super creepy, but he hasn’t done anything wrong and he is well respected by those who’ve known him for a while.", "A huge man wearing sunglasses made of red quartz claims to be the best sculptor in the world. He can prove it too, all his statues are carved from the exact same type of granite and look scarily like the real thing. They always look scared for some reason too. As it turns out, he has a gorgon held hostage in his basement, and he uses her to freeze various animals and people he captures. From raccoons and chickens to cows and people, he’s kidnapping them and petrifying them. Somebody should stop him. He sells his statues for a whole lot of money.", "Subtle slave trader. The ‘products’ are actually transformed into animals or trinkets. Upon purchase, the trader will give the new owner a scroll or item to transform the trinket into the slave (maybe even back again). A clever way to smuggle slaves through check points and/or through lands that don’t support slavery.", "A cowpuncher with a heavy accent. She sells common livestock, along with a few exotic things like special built saddles and animal barding. She claims to be from a place called ‘Wyoming’, which everyone knows doesn’t exist. She’s completely sane however.", "A bearded chef who’s incredibly skinny despite the fact he’s always eating. He’s a very prestigious chef who’s famous for his dragon egg, orange, and tomato omelet. He has a pouch of granola clusters on him that he’s constantly munching on. He jokes about being cursed by a witch when he was younger, but he’s actually correct.", "You stumble upon a giant clam shell placed near a road by the beach. Knocking on it, a sleepy man opens the lid and rubs his eyes, asking who’s there. He’ll sell you things he finds in and around the ocean before closing the clam and going back to sleep.", "A painfully average man who sells painfully average things. Any magic items sold to him will lose their properties.", "A wandering hunter wielding a crossbow who will sell her wares to the party, or the nearest town. She’ll seem to travel in the same path as the party, showing signs of her travels (new scars, new pelts, maybe even a new friend).", "An older human male approximately 60 years old, hulking frame, thick biceps, bald as a bowling ball and wears a gold chain running from earring to nose-ring, nicknamed ‘Bull’ runs a shop with his wife, a delicate grey-haired human woman of medium height, but thin as a rail and speaking with a raspy voice which tells of her advanced age. In this shop, you can find the finest china service sets and tableware in the province. From platters to plates, from pitchers to spoons, from cups to cutlery, everything you need to put out the best spread is available at Bull’s China Shop.", "A figure, roughly 5’5”, covered in heavy winter clothing. His(?) voice can be understood, but is muffled by layers of scarves. In actuality, there is nothing underneath the clothing; he’s a modified enchanted armor. They sell a huge variety of armor.", "A half-elf wizard with a crow on his shoulder. The wizard turns his head rapidly and jerkily to look at anything that moves, but stays silent. If a customer approaches, the crow speaks to them, disgruntled by the change of bodies between him and his familiar. They sells wants and books, typical wizarding gear.", "A vampire couple. They don’t feed off humans, instead coming out at night to hunt elk, rabbits, and other game so they can feed. They say it tastes like stale water mixed with iron shavings and beef broth, but they also say the bad taste is more than worth it so they stay in good standings with the mortals they live near. They sell timber as well as high quality furniture they make themselves. They’ll sell other things like knives, small whittled figures, and furniture polish, if you ask. The community loves them for being so helpful and not causing any problems.",
        "A dwarf with insane eyes, charred hair, and a lack of eyebrows. He has an insane look in his eyes, and is attempting to sell gunpowder and explosives to all who walk by. He keeps sizing up the local buildings with his eyes, especially the wooden ones.", "A very articulate bald man with glasses. He has an obscene amount of knowledge on the most useless things, like music and technology. He’s a comedian with a small food business on the side. He has a short and sweet wife who makes the delicious food that he sells. They have two long hair cats, who they call their sons. They use strange words and phrases that nobody else understands, like ‘acquiesce’ and ‘get dusted’.", "Armiton, very calm minded human who sells the crops he grows on his farm. His workers are all homunculi.", "A stout burly man with a slightly singed brown beard and tanned, scarred complexion; he’s wearing a faded motley cloak and sells a variety of odds and ends. When discussing his goods, he shows off the mundane objects at his stall as if they were exotic wonders. The magical items however, are dismissed as ‘silly pish-posh’ and he hardly acknowledges them.", "A half-elf, half-dryad who’s mother was a willow. He has long, flowing hair with flowers scattered in it. His dryad nature shows through, as patches of his skin are textured like wood and his hair is a light green, among other things. He is always sitting down, whether it’s crisscross on the floor or on a nearby branch. Around his neck is a small heart made of amber with a tiny blue flower embedded inside. He’ll sell you various traveling provisions and other useful, mundane things, like shovels and lanterns.", "A short haired woman with a light voice. She plays the ukulele and sings as a street performer. She’ll play any song on request, for a price. She seems to know every song imaginable by heart even when she has no possible way of knowing it, and she never falters in her performance. She NEVER lets her prized ukulele out of sight. She’s a folk hero for making an ogre run away crying after playing a song that it’s mother sang to him as a baby, among other rumors and tales.", "Eddy and Johny’s cabinet of curios A gnome and half-orc couple who sell small nik-naks some of which give off slight magic. (They sell things off the millions of trinket tables you can find)", "A young Goblin merchant that is constantly trying to sell the random scraps and knickknacks he finds lying around from the massive burlap sack on his back. Many of his goods tend to be in poor condition or are junk, and a good amount of them were found through more liberal interpretations of the phrase “lying around”. Despite this, he is a hard worker that is just trying to make a living in any way he can manage, and genuinely appreciates anyone who acknowledges that. Those who do usually end up with better deals on more junk, as well as the opportunity to purchase first when he truly finds something of value. Every time someone browses his wares, he proudly proclaims that he’s got the best deals anywhere, despite his tendency to slightly overprice all his goods.", "A middle-aged Human blacksmith hawks his weapons and armor from the side of a small indoor arena that he owns. The portly man is eager to draw in customers, and is very proud of his works, inviting people in from off the streets to admire their impressive appearances. He is always eager to sell his normal merchandise, but those who wish to purchase his most ornate works must prove that they are capable of handling themselves in combat against a battered set of animated armor, and are challenged to push the construct out of the 15-foot radius arena without getting knocked prone by it. Only if you can do it will he allow a customer to purchase his masterpieces, all of which are beautifully yet practically designed, made from exotic materials that are perfect for enchanting.", "A tottering old Halfling woman often found heavily bundled up on the corners of busy streets. Despite being nearly blind, she sews repairs to cloaks and clothing in exchange for stories and tales. She is incredibly good-hearted and refers to everyone she meets as “Dearie”. She insists that she doesn’t need money and that the stories she hears make her the wealthiest woman alive, but her customers always tend to leave her some coin anyway. The repairs she makes seem patchwork and haphazard, but are surprisingly durable in addition to making the fabric much more homey and comfortable. All of the locals consider to be a staple of the community, and are very protective of her.", "An Earth Genasi and his cart of cabbages. Only sells cabbages and is mysteriously in every large town you visit.", "A small iron golem smith, who exclusively crafts razor sharp longswords (crit range 18-20, cost 200 gp, otherwise same as normal longswords). His hammer is actually an intelligent magic item that gives instructions to him in a way the players can’t perceive. The golem always talks about the hammer, not himself (‘he has this for sale, he would charge you that, etc.’) Upon receiving payment the golem throws the gold in a pot in the forge and later, if the party pays attention, mixes bronze into it after hours to produce gold bars, if it doesn’t know the party is watching.", "A blue-skinned tiefling who works as a glassblower. He has a lot of beautiful pots, jars, and bottles, all of which are made in stunning colors and dazzling designs. Aside from these, he also has glass weapons and armor. They’re really clunk, but they’re as powerful as they are beautiful. He keeps these a secret from his teenage female apprentice, named Sydney, to keep her focused on the basic craft. If asked about this, he says, ‘She needs to walk before she can run.’", "A gangling, calm, quiet man who speaks slowly. He drags a cart full of various snails and snail shells. His clothing is adorned with many shells, but otherwise he dresses modestly and is kind-hearted. His name is Escar-Joe.", "A halfling man who runs the printing business in town. His printing press is unlike any you’ve ever seen, about the size of a carriage and constantly clicking and whirring quietly as it prints like clockwork, and where he got it is a mystery. When asked, he’ll change the subject in an attempt to sell scribing tools, like pens, ink, and paper.", "An orc who lives in the overgrown skeleton of a giant, sleeping in the skull. He sells game he hunts and ‘clothes’ he makes out of the bones and hides.", "A human child, around 8-9, with long, brown pigtails. Her name is Bethany, and she claims to be a healer. She’ll cure curses, disease, and other aliments. She’ll fail sometimes, but she’s still learning. She lives in a local monastery with several other priests. They say they found her as a baby and have raised her since, and she shows great promise for her abilities.", "A short, bald, wizened old man who runs a pet shop. None of the animals are in cages and are all free-roaming. Despite appearing to be conversing with the humans who enter his shop, he is actually talking to his real customers – the animals. When he completes a deal, the pets scratch or bite their new owners and pay him in drops of blood.", "A shaggy, humanoid shambling mound imbued with sentience by an unknown master. They can’t speak, rather carrying around a chalkboard around to communicate. They’re wearing loose common garb, but you can barely tell. They sell various herbal teas and remedies, and they’ll give you a haircut too if you ask. They have the ashes of their master in a small vial around their neck.", "A lizardfolk blacksmith who’s obsessed with fire. Her skin is a deep blue, and her neck and frills behind her ears are orange. She’ll cuddle up to her roaring forge at night to make sure she stays toasty.", "A mute tailor who is a total hermit. The clothes he sells are enchanted to become as heavy as lead if someone tries to steal them. He never leaves his house above his shop, only coming down to silently stock up his wares when nobody is around to see him. Purchases are made by putting the coins into a slot build into his desk, then the enchantment will wear off, allowing you to take your clothes.", "A well dressed woman with a veil over her face pulls you into an alley before commanding you to buy something. A shelf of potions accompanies her, all unmarked. If you try to ask a question, she pushes you out. If you don’t buy something, she pushes you out. Turning around after she pushes you away reveals that there was never an alley there to begin with.", "A steampunk dwarf artificer with two crude tentacles crafted onto a small hydrator engine attached to his lower spine. Wears a brown trench coat, bald and grey beard and drinks copious amounts of coffee. Quite friendly and talented with a blunderbuss also runs and operates Loch & Load artificing shop.", "A short woman who makes tea. Her tea is mostly normal, but if you ask she’ll show you all sorts of exotic plants made into tea bags. Banana leaf tea, cactus sap tea, goodberry tea, spicy honey tea, venus fly trap tea… these are getting weird.", "A fire genasi who’s obsessed with smoke. He sells cigars, smoked meats, and tinderboxes. He smells like smoke, his eyes and skin are a dusty orange.", "You open the door to a large shop, and it’s empty. Save for a single table, with a quiche. A singular quiche. There’s a note that says, ‘Pay what you want’ with a smiley face in crude handwriting. You can smell a goblin in here somewhere. Did she make this?", "A man with a pet rust monster buys metal scraps and sells the chitin his pet drops. Maybe there’s a use for it. The rust monster is extremely well behaved, with little bows around its antenna. It’s kinda cute.", "A gruff, stereotypical strongman runs a bar. A normal bar.", "A dark skinned goliath woman who runs a daycare. She sells the arts and crafts that her children make that they don’t take home, and she’ll take care of your kids if you have any. Everyone calls her Mama.", "A young witch who smells of alcohol. For some reason, she cursed herself to be constantly intoxicated. She only uses fire magic and anything to get her more drunk.", "A fat man who yells a lot. He sells mead he homebrews himself. Is he deaf? Maybe he’s deaf.", "This kid claims to have an invisible cow, and he sells the milk. When you try and prove him wrong, a long moo comes from seemingly all around you. I guess he does have an invisible cow. Drinking the milk turns you invisible for a few minutes.", "This man sells wagons of all shapes and sizes. From wheelbarrows to horse drawn carriages, he makes them all by hand. He’s known for being very precise when he stains the wood, also by hand.", "A tabaxi with shaggy fur sells livestock, who are all acting strange and annoyed. She swears they aren’t stolen. Stop asking.", "A royal guard with a scrawny body and weak chin. He’ll give you the latest gossip on the town for a few coins. He’ll tell you regardless, then get annoyed when you don’t pay.", "An aarakocra chicken who sells healing potions. The potions are contained in eggshells and look like normal eggs, if a bit larger than the usual. The merchant will fluff up and squawk indignantly if a PC wonders whether the merchant laid the eggs. She will scratch in the dirt and wave a feathered arm angrily. ‘NOT my—bawk!—CHILDREN.’ The potions all heal an extra 2 HP, but the shells are fragile.", "Legitimate Larry. He’s so legitimate that his collection of obviously stole items obviously must have just fallen off the back of a cart.", "A Halfling Artificer and Tinker, with a broad smile and gregarious nature. He produces intricate, ingenious mechanical devices for adventurers. The shop he operates out of is built-to-halfling-scale, though. To broaden his customer base, he has fitted every shelf, display, and even the front wall of the building with a complex system of rails and slides, allowing him to do business with anyone, and display anything, all at the customer’s eye level.", "What appears to be an EXTREMELY tall halfling woman, but when she walks around the counter, she is simply wearing the tallest pair of platform shoes you’ve ever seen. All she sells is shoes. Some of the shoes are enchanted, but many are just ‘fashionable’.", "A tortle that, when it approaches, it appears the shell has been carved to look like tattoos. When he speaks, he has a deep slow tone to his voice (imagine Johnny Cash). He sells books and scrolls and writing equipment. He is never in a rush to make a sale as he enjoys the act of bartering but always ensures he makes a profit. His stock often holds rare or even forbidden books. When asked, he will just shrug and say something about not knowing or forgetting the book was there. He of course houses lots of spell scrolls at different levels and will even sell a few spellbooks from wizards that gave either passed or given up that life.", "Bobbik and Bimbeck’s Curiosities: Mr. Bobbik is a bespectacled Beholder with a friendly and inquisitive nature. A true oddity in his species and as such shunned entirely from polite underdark society. In his travels, he met Mr. Bimbeck, who was exploring caverns looking for interesting rocks and a lifelong friendship was formed. The two of them sell all manner of strange and unique things. They probably don’t have EXACTLY what you are looking for, but they certainly have something of interest. Example Inventory: A potted plant with a bell on it (So it can’t sneak up on you), a warhammer that you can fill with angry bees, Aardvark poison, Aardvark medicine, a clockwork thing you don’t know what it does that has a bell on it so it can’t sneak up on you.", "Sister Elma: She claims to be a Nun and sells holy symbols and dubious reliquaries to travelers. Example Inventory: Martyr’s Big Toe on a string, desicrated left testicle of a legendary bard, mostly accurate holy symbols at discount prices, bag of bones from a legendary warrior (or a chicken, depending on perception checks).", "Bob and Rob Oblah (And Hobble their Goblin assistant): An Ettin with 4 eyes for values! Not the brightest, but with a natural sense for what things are worth and if they are being cheated or short-changed. The two heads can be played off of each other in the process of haggling. Hobble the Goblin mostly just stares daggers at the customer and polishes the counter. Example Inventory: Magic Items, hand made Goblin crafts.", "A new gnomish invention that automatically dispenses a piece of gum that works as a healing potion if the proper amount of gold is inserted. Roll a d20 when using the machine. On a 20, two pieces of gum come out. On a 1 the machine jams and no gum comes out. Has tamper resistance enchantments that destroy the gum if the machine is broken into.", "A dwarven barber that uses magical shears. Cuts their client’s hair to be longer, not shorter.", "A Tabaxi merchant sells beautiful glassware and fine china, things that an adventurer would probably never use. Symbols on his shop in thieves’ cant suggest he may also be a fence, although they are confusing, crossed out and re-written. The Tabaxi, a dark-coated young merchant named Many Hidden Knives, is boisterous and eager to gossip.", "The shopkeeper is clearly two gnomes with one on the other’s shoulders, but they will never admit it. The two, Foggi Ysbeten and Grogel Grogelhome, take turns being the one on top, but never acknowledge the difference. They sell ‘human-sized’ equipment.", "The Broad’s Boards: An extremely tall, stunningly attractive blonde woman named Nyss sells shields of different makes and models. Has some magic shields, some bucklers, and some tower shields too big for the average man.", "A Goliath, considered large even among his own tall people, known only as ‘The Builder.’ He crafts intricate toys, gadgets, and trinkets. Working from inside a wagon pulled by two Clydesdale horses, he hunches over his desk with a lantern and a magnifying glass, working his massive fingers to build tiny, detailed devices. If he meets a child, he always gives them a toy for free. He never accepts gold as payment, only more materials for crafting, or if the need arises, a personal favor. He can be commissioned to build specific devices, but prefers not to unless he knows the person well. He sticks to rural towns and villages and defends himself with a myriad of clockwork like devices that are beyond most people’s understanding.", "Azaeli, A devilish tradesmen. A man of true evil. Holds some of the best gear around and sells them very low as well, but they come at a cost, Azaeli gives the buyer a quest of true evil intentions. Rather it be spreading a plague, or allowing crime syndicates to florish, a seemingly useless action that has large impact on the nearby areas. Azaeli has a pair of seemingly burning eyes, is often found to be wearing a top hat and very expensive silk clothing. In his backstory Azaeli, was once a normal True neutral, human warlock, until one day Azaeli attempted to banish a powerful demon. It succeeded but as soon as he cast it he was possessed causing a merge of souls. Azaeli became a devilish sellsman who roams the globe causing mayhem.", "Whilst walking through through the run down boroughs of a large city you spy a strange exchange down one of the numerous labyrinthine alleys. A rather large and motley crow sits upon a busted crate. At the base of the crate an alley cat, accompanied by a scraggly litter of kittens, approaches the crow and drops what looks to be a shiny piece rubbish. You look on as both the cat and the crow seem to converse, the low cawing of the crow meeting the desperate meows of the cat. Eventually some sort of accord seems to be struck, and the crow produces a large half eaten fish, dragging it from the crate and letting it plop down on the dirty ground bellow. Immediately the mother alley cat picks up the fish and darts off, her kittens tumbling along behind her. Those who wish to stay and observe the crow for longer will discover that all manner of strays, ferals and other wild denizens of the alleys approach the crow throughout the day, including one or two beggars and street kids. Each time something shiny is produced, and an item from the box given. Sometimes food, sometimes junk, and at one point even a dagger (given to a street kid) is pulled from the crate. At sundown several more crows gather at the spot in the alley and begin to fuss around the crate. Eventually they all take flight, labouring under a sack clearly laden with goods. They cary the sack high above the roof tops, eventually disappearing from sight, their mysterious trade having officially closed for the day.", "A series of animals who seem to run every magic shop the party goes’s to. They’re capable of communicating via telepathy, but mostly prefer to make animal noises. Probably the familiars of some old mage.", "A very short wizened old man with a wispy mustache. He runs a pet shop and seems to always be talking to himself. When someone enters his shop he will grab them by the elbow and begin walking them around to all the cages and kennels and tanks. No matter what they say, he’ll respond with things like ‘Yes, he is a bit tall, isn’t he?’ or ‘Now don’t be rude, he doesn’t smell that bad.’ or ‘Ah yes, I remember. You don’t want a single pet, you want to adopt a whole family.’ Finally he gets to one animal and says ‘Eh? This one looks good to you? Excellent!’ He then picks them up out of the cage, hands them to the person – again, regardless of whatever the person is saying – and then says ‘Now there is just the little matter of payment …’. Which is when the animal bites or claws the person and then gives the store owner a single drop of blood. Because he doesn’t sell pets to people, he sells people to pets.",

    ]
    document.getElementById("Premise").innerHTML = searchArray(shopPremise)
}


//WALROCK MERCHANTS
function traderInfo() {
    let traderPersonality = [
        "I greet absolutely everyone with a warm hug. ", "I have a much better head for numbers than people. ", "I'm often more willing to barter in favors than coin. ", "I don't trust adventurers, not even a little bit. ", "It's all business with me, no need to be personable. ", "Repeat customers are my best friends. ", "I'll haggle all day, until your ears fall off. ", "I'm convinced my natural showmanship is what earns me customers. ",
    ]
    let traderIdeal = [
        "Commerce. Free exchange is the world's greatest equalizer. (Lawful) ", "Monopoly. Undercutting my rivals and price gouging are the only ways to get ahead. (Evil) ", "Salesmanship. I'll sell absolutely anything. My horse, my mother, everything has a price. (Chaotic) ", "Charity. I try to give discounts or handouts to those that are truly in need. (Good) ", "Finality. No refunds. Ever. (Any) ", "Enjoyment. Buying and selling wares is all a big game to me, one that I love playing. (Any) ",
    ]
    let traderBond = [
        "I have a sick relative that my business supports. ", "I owe a lot of money to organized crime, and they're threatening to collect. Violently. ", "I'm counting down the days to a peaceful retirement with my spouse or loved ones. ", "I hope to earn enough money to be able to pursue my true love, who is well above my station. ", "I'm on the run from the law, and plan to leave town before they finally recognize me. ", "A large portion of my money is spent atoning for my shameful past. ",
    ]
    let traderFlaw = [
        "Most of my money is spent every night in the tavern. ", "I have no real faith in the quality of my merchandise, whether or not it is actually good. ", "If someone undercuts my prices, I'll cut their throat. ", "I counterfeit currency on the side, and slip it in with the change I give customers. ", "I never, ever, ever know when to quit, and I refuse to lose a sale. ", "It's hard for me to respect someone who doesn't know everything about what I'm selling. ",
    ]
    document.getElementById("Personality").innerHTML = "Personality: " + searchArray(traderPersonality)
    document.getElementById("Ideal").innerHTML = "Ideal: " + searchArray(traderIdeal)
    document.getElementById("Bond").innerHTML = "Bond: " + searchArray(traderBond)
    document.getElementById("Flaw").innerHTML = "Flaw: " + searchArray(traderFlaw)
}

let merchantType = [
    `Alcohol and refreshment`,
    `Animals(mounts and pets)`,
    `Books and maps(mundane)`,
    `Flowers and seeds`,
    `Food and animal parts`,
    `Furniture and interior decor`,
    `High fashion`,
    `Jewelry and gems`,
    `Knick-knacks`,
    `Leatherworking`,
    `Mechanical contraptions`,
    `Medium and heavy armor(and shields)`,
    `Potions, poisons, and herbs`,
    `Religious idols and blessings`,
    `Songs and instruments`,
    `Spell tomes and scrolls`,
    `Thieving supplies`,
    `Tools`,
    `Vehicles and transportation`,
    `Weapons`,
    `Legendary merchant(roll once on the Legendary Merchants table)`,
]

let legendaryMerchant = [
    `Astral traveler`,
    `Enchantments`,
    `Fey bargins`,
    `Magic items`,
    `Magical creatures`,
    `Necromancy`,
    `Needful things`,
    `Time-lost`,
]

function clear() {
    document.getElementById("Inventory").innerHTML = ""
    document.getElementById("Title").innerHTML = ""
    document.getElementById("Trades").innerHTML = ""
}

function drinks() {
    let alcoholAndRefreshment = [
        //poor/atr
        `Ale, inferior (2cp/mug) stock: ${(1+rollDice(4))*100} mugs | Flavor will not leave mouth until next short rest`,
        `Ale, non-alcoholic (2cp/mug) stock: ${(1+rollDice(4))*100} mugs`,
        `Water (1cp/cup) stock: ${(1+rollDice(4))*100} cups | Clean and pure`,
        `Ale (4sp/mug) stock: ${(1+rollDice(4))*100} mugs | PHB 158`,
        `Flask or tankard (2cp) stock: ${(1+rollDice(4))*15} | PHB 150 Made of either pewter or treated wood`,
        `Tea, green (5cp/cup) stock: ${(1+rollDice(4))*10} cups`,
        //med
        `Brewer's supplies (20gp) stock: ${(1+rollDice(4))} | PHB 154`,
        `Cider (8cp/mug) stock: ${(1+rollDice(4))*100} mugs | Either apple. pear, pineapple, peach, or berry`,
        `Juice, fruit (3cp/cup) stock: ${(1+rollDice(4))*5} cups | Of any variety`,
        `Milk (1sp/bottle) stock: ${(1+rollDice(4))*5} bottles | Goat, cow, or other`,
        `Moonshine (3sp/bottle) stock: ${(1+rollDice(4))*5} bottles | Disadv. on saves to avoid intoxication`,
        `Tea, black (6cp/cup) stock: ${(1+rollDice(4))*10} cups`,
        `Yeast (4cp/lb.) stock: ${(1+rollDice(4))*2} lbs.`,
        //good
        `Brandy (5gp/bottle) stock: ${(1+rollDice(4))*2} bottles`,
        `Coffee (1sp/cup) stock: ${(1+rollDice(4))*10} cups`,
        `Hot chocolate (1sp/cup) stock: ${(1+rollDice(4))*10} cups`,
        `Mead (1sp/mug) stock: ${(1+rollDice(4))*100} mugs`,
        `Rum  (8gp/bottle) stock: ${(1+rollDice(4))*2} bottles`,
        `Tequila (8gp/bottle) stock: ${(1+rollDice(4))*2} bottles`,
        `Vodka (8gp/bottle) stock: ${(1+rollDice(4))*3} bottles`,
        `Whiskey (5sp/bottle) stock: ${(1+rollDice(4))*4} bottles`,
        `Wine, common (5sp/bottle) stock: ${(1+rollDice(4))*5} bottles | PHB 158`,
        `Wine, fine (10gp/bottle) stock: ${(1+rollDice(4))*4} bottles |PHB 158`,
        //ex
        `Ale, dwarven (25gp/mug) stock: ${(1+rollDice(4))*10} mugs | Drink a mug: facial hair grows perceptibly`,
        `Coffee, dwarven (15gp/cup) stock: ${(1+rollDice(4))*2} cups | Drink a cup: immune to sleep for 8 hours`,
        `Decanter of endless water (500gp) stock: Only 1, ever | DMG 161`,
        `Tea, portentous (20gp/cup) stock: ${(1+rollDice(4))*2} cups`,
        `Wine, elven (25gp/cup) stock: ${(1+rollDice(4))*2} cups`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Alcohol and Refreshment"
    alcoholAndRefreshment.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function animals() {
    let animalMerchant = [
        `Parrot, dead (1cp) stock: Only 1, ever | Deceased`,
        `Bat (2cp) stock: ${rollDice(4)} | MM 378`,
        `Cat (2sp) stock: ${rollDice(4)} | MM 320`,
        `Chicken (2cp) stock: ${rollDice(4)*2} | PHB 157 May instead be a rooster`,
        `Feed, animal (5cp/day) stock: ${rollDice(4)*30} days | PHB 157`,
        `Frog (1cp) stock: ${rollDice(4)} | MM 322 May instead be a toad`,
        `Goat (2gp) stock: ${rollDice(4)*2} | MM 330 May instead be a sheep`,
        `Lizard (1cp) stock: ${rollDice(4)} | MM 332`,
        `Pig (3sp) stock: ${rollDice(4)*2} | PHB 157`,
        `Rat (1cp) stock: ${rollDice(4)} | MM 335`,
        `Misc. CR 0 beasts (2cp-1gp) stock: ${rollDice(4)} | May be untamed`,
        `Badger (5sp) stock: ${rollDice(4)} | MM 378 Untamed`,
        `Cow (10gp) stock: ${rollDice(4)*2} | PHB 157 May instead be a bull, steer, or a cow variant`,
        `Draft horse (50gp) stock: ${rollDice(4)} | MM 327`,
        `Mule (8gp) stock: ${rollDice(4)} | MM 333 May instead be a donkey`,
        `Ox (15gp) stock: ${rollDice(4)} | PHB 757`,
        `Pony (30gp) stock: ${rollDice(4)} | MM 335`,
        `Raven (10gp) stock: ${rollDice(4)} | MM 335`,
        `Weasel (5sp) stock: ${rollDice(4)} | MM 340`,
        `Misc. CR 1/5 beasts (1gp-10gp) stock: ${rollDice(4)} | May be untamed`,
        `Misc. CR 1/4 beasts (5gp-25gp) stock: ${rollDice(4)} | May be untamed`,
        `Camel (50gp) stock: ${rollDice(4)} | MM 320`,
        `Eagle (20gp) stock: ${rollDice(4)-1} | MM 322`,
        `Hawk (15gp) stock: ${rollDice(4)-1} | MM 330`,
        `Lion (200gp) stock: ${rollDice(4)-1} | MM 337 Untamed`,
        `Mastiff (25gp) stock: ${rollDice(4)} | MM 332 Full-grown or pups`,
        `Monkey (25gp) stock: ${rollDice(4)-1}`,
        `Owl (20gp) stock: ${rollDice(4)} | MM 333`,
        `Riding horse (75gp) stock: ${rollDice(4)} | MM 336`,
        `Parrot, live (20gp) stock: ${rollDice(4)}`,
        `Panther (150gp) stock: ${rollDice(4)-2} | MM 333 Untamed`,
        `Tiger (200gp) stock: ${rollDice(4)-1} | MM 339 Untamed`,
        `Warhorse (400gp) stock: ${rollDice(4)} | MM 340`,
        `Wolf (50gp) stock: ${rollDice(4)} | MM 341`,
        `Misc. CR 1/2 beasts (20gp-50gp) stock: ${rollDice(4)} | May be untamed`,
        `Brown bear (300gp) stock: ${rollDice(4)} | MM 379 Untamed; full-grown or cubs`,
        `Elephant (600gp) stock: ${rollDice(4)-1} | MM 322`,
        `Mammoth (1,200 gp) stock: ${rollDice(4)-1} | MM 332`,
        `Rhinoceros (500 gp) stock: ${rollDice(4)-1} | MM 336 Untamed`,
        `Ring of animal influence (5.000 gp) stock: Only 1, ever | DMG 189`,
        `Misc. CR 1 beasts (50gp-300gp) stock: ${rollDice(4)-1} | May be untamed`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Animals (Mounts and Pets)"
    animalMerchant.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function books() {
    let booksAndMapsMerchant = [
        `Treasure map, fake (1 sp) stock: Only 1, ever | A DC 10 Investigation check discovers it is fake`,
        `Ink (10gp/ounce) stock: ${rollDice(4)*10} ounces | PHB 150`,
        `Ink pen (2cp) stock: ${rollDice(4)*2} | PHB 150`,
        `Paper (2sp/sheet) stock: ${rollDice(4)*20} sheets | PHB 150`,
        `Parchment (1sp/sheet) stock: ${rollDice(4)*2}0 sheets | PHB 150`,
        `Book, blank (25gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Book, tawdry (25gp) stock: ${rollDice(4)*2} | PHB 150 Example title: "My Midnight Tiefling"`,
        `Case, map or scroll (1gp) stock: ${rollDice(4)*5} | PHB 150`,
        `Guidebook, area (50gp) stock: ${rollDice(4)} | Pertains to a nearby specific city or location`,
        `Map, accurate (25gp) stock: ${rollDice(4)} | Portrays an important  area within 7 days' travel`,
        `Newspaper (2sp) stock: ${rollDice(4)*3} | Printed with the weekly news from a nearby city`,
        `Atlas, known world (500gp) stock: ${rollDice(4)-2} | Very accurate, but not overly detailed`,
        `Book, classic (100gp) stock: ${rollDice(4)} | Example title: "Adventures of Sherlock Gnomes"`,
        `Book, novel (50gp) stock: ${rollDice(4)} | Example title: "The Drow in the High Castle"`,
        `Calligrapher's supplies (10gp) stock: ${rollDice(4)} | PHB 154`,
        `Cartographer's tools (15gp) stock: ${rollDice(4)} | PHB 154`,
        `Guidebook, monster (125gp) stock: ${rollDice(4)} | Pertains to a specific monster type found nearby`,
        `Book, forgotten (500gp) stock: Only 1, ever | Example title: "The Call of Y'chak"`,
        `Map, planar (1,000gp) stock: Only 1, ever | Accurately depicts a significant planar location`,
        `Treasure map, real (1,000gp) stock: Only 1, ever | Depicts an area within 7 days' travel`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Books and Maps"
    booksAndMapsMerchant.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function flowers() {
    let flowersMerchant = [
        `Mixed flowers, dead (1cp/dozen) stock: ${rollDice(4)*2} dozen | Wilted and slightly browned`,
        `Mistletoe (1gp/sprig) stock: ${rollDice(4)*5} sprigs | PHB 150 Counts as a druidic focus`,
        `Mixed flowers (1cp/dozen) stock: ${rollDice(4)*5} dozen | A low-quality bouquet of common flowers`,
        `Seeds, crop (1cp/handful) stock: ${rollDice(4)*20} handfuls | Grows 10 lbs. of a staple, like rice or wheat`,
        `Seeds, wildflower (4cp/handful) stock: ${rollDice(4)*10} handfuls | Grows up to 60 wildflowers`,
        `Wildflowers (2cp/dozen) stock: ${rollDice(4)*5} dozen | A fresh bouquet of naturally local flowers`,
        `Flowers, fine (4cp/dozen) stock: ${rollDice(4)*5} dozen | Roses, lavendar, tulips, or similar`,
        `Herbalism kit (5gp) stock: ${rollDice(4)} PHB 154`,
        `Seeds, fine flower (8cp/handful) stock: ${rollDice(4)*10} handfuls | Grows a group of up to 120 fine flowers`,
        `Seeds, tree (5cp/handful) stock: ${rollDice(4)*10} handfuls | Grows up to 25 trees; oak, birch, pine, or similar`,
        `Glowblossom (1sp/dozen) stock: ${rollDice(4)*3} dozen | Emits dim light in a 10 foot radius`,
        `Phoenixbloom (1gp/dozen) stock: ${rollDice(4)*3} dozen | Burns as a torch, can set objects on fire`,
        `Seeds, fruit tree (3sp/handful) stock: ${rollDice(4)*10} handfuls | Grows up to 25 fruit trees; apple, pear, or similar`,
        `Seeds, glowblossom (2sp/handful) stock: ${rollDice(4)*2} handfuls | Grows up to 60 glowblossom flowers`,
        `Seeds, phoenix-bloom (2gp/handful) stock: ${rollDice(4)*2} handfuls | Grows up to 60 phoenixbloom flowers`,
        `Seeds, whistleweed (2sp/handful) stock: ${rollDice(4)*5} handfuls | Grows up to 60 whistleweed stalks`,
        `Whistleweed (1sp/dozen) stock: ${rollDice(4)*4} dozen | Whistles loudly when brushed against`,
        `Dragon lilly (5gp/dozen) stock: ${rollDice(4)} dozen | Contact instantly purifies up to 10 gal. of water`,
        `Quaal's feather token, tree (5,000 gp) stock: Only 1, ever | DMG 188`,
        `Seeds, dragon lilly (10gp/handful) stock: ${rollDice(4)} handfuls | Grows up to 60 dragon lillies in a shallow pond`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Flowers and Seeds"
    flowersMerchant.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function food() {
    let foodMerchant = [
        `Dung (1cp/lb.) stock: ${rollDice(4)*25} lbs.`,
        `Lard (2cp/lb) stock: ${rollDice(4)*2}5 lbs.`,
        `Meal, squalid (3cp/day) stock: ${rollDice(4)*20} days | PHB 158 Ripe, rancid, and the wrong kind of chewy`,
        `Teeth (1cp/each) stock: ${rollDice(4)*30} | Either animal or (possibly) human`,
        `Bread (2cp/loaf) stock: ${rollDice(4)*10} loaves | PHB 158`,
        `Butter (3cp/stick) stock: ${rollDice(4)*10} sticks`,
        `Cheese (1sp/hunk) stock: ${rollDice(4)*2}0 hunks | PHB 158`,
        `Eggs (1sp/dozen) stock: ${rollDice(4)*5} dozen | Chicken, duck, or similar`,
        `Flour (2cp/lb.) stock: ${rollDice(4)*10} lbs. | PHB 157`,
        `Fruit (1cp/each) stock: ${rollDice(4)*20} | Apples, plums, or similar; can also be vegetables`,
        `Meal, poor (6cp/day) stock: ${rollDice(4)*20} days | PHB 158 Gruel and greasy bits, smells like regret`,
        `Milk (1sp/bottle) stock: ${rollDice(4)*5} bottles`,
        `Wheat (1cp/lb.) stock: ${rollDice(4)*25} lbs. | PHB 157`,
        `Bones (5gp/set) stock: ${rollDice(4)} sets | Good for soup and maybe even necromancy`,
        `Hunting trap (5gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Meal, modest (3sp/day) stock: ${rollDice(4)*20} days | PHB 158 A hearty broth with real vegetables`,
        `Meat (3sp/chunk) stock: ${rollDice(4)*5} chunks | PHB 158 Beef, pork, chicken, venison or similar`,
        `Mess kit (2sp) stock: ${rollDice(4)*2} | PHB 150`,
        `Pot, iron (2gp) stock: ${rollDice(4)} | PHB 150`,
        `Rations (5sp/day) stock: ${rollDice(4)*5} days | PHB 150`,
        `Salt (5cp/lb.) stock: ${rollDice(4)*10} lbs. | PHB 157`,
        `Soap (2cp) stock: ${rollDice(4)*5} | PHB 150`,
        `Cake (5gp) stock: ${rollDice(4)} | Sumptuous and moist; feeds 8`,
        `Cook's utensils (1gp) stock: ${rollDice(4)*2} | PHB 154`,
        `Fishing tackle (1gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Ginger (1gp/lb.) stock: ${rollDice(4)*10} lbs. | PHB 157`,
        `Hat, chef (3gp) stock: Only 1, ever`,
        `Meal, comfortable (5sp/day) stock: ${rollDice(4)*20} days | PHB 158 Lightly spiced meat served with a side dish`,
        `Meal, wealthy (8sp/day) stock: ${rollDice(4)*20} days | PHB 158 Well-prepared prime cut of meat, and dessert`,
        `Pie (1gp) stock: ${rollDice(4)*2} | Sweet or savory, feeds 1-2`,
        `Saffron (15gp/lb.) stock: ${rollDice(4)} lbs. | PHB 157`,
        `Spices (2gp/lb.) stock: ${rollDice(4)*5} lbs.|  PHB 157 Pepper, cinnamon, or similar`,
        `Bones, dragon (50gp/lb.) stock: ${rollDice(4)*5} lbs.`,
        `Horn, unicorn (1,000gp) stock: ${rollDice(4)-1}`,
        `Ioun stone, sustenance (5,000gp) stock: Only 1, ever | DMG 176`,
        `Meal, aristocratic (2gp/day) stock: ${rollDice(4)*20} days | PHB 158 A most succulet cut of magical beast`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Food and Animal Parts"
    foodMerchant.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function decor() {
    let artMerchant = [
        `Barrel (2gp) stock: ${rollDice(4)*5} | PHB 150`,
        `Basket (4sp) stock: ${rollDice(4)*5} | PHB 150`,
        `Bookcase (2gp) stock: ${rollDice(4)*3} | 5 feet x 1 foot, 4 feet tall, holds approx 60 books`,
        `Chest, medium (5gp) stock: ${rollDice(4)*2} | PHB 150 6 feet x 2 feet, 1 foot tall, holds approx 300 lbs.`,
        `Doghouse, large (3gp) stock: ${rollDice(4)-2} | Capable of holding a dog or other large creature`,
        `Furnace, coal (8gp) stock: ${rollDice(4)} | Can burn 1 lb. of coal per day`,
        `Table, wood (3gp) stock: ${rollDice(4)*2} | 4 feet x 8 feet, 2.5 feet tall`,
        `Chest, large (10gp) stock: ${rollDice(4)*2} | 6 feet x 3 feet, 2 feet tall, holds approx 900 lbs.`,
        `Jug or pitcher (2cp) stock: ${rollDice(4)*4} | PHB 150`,
        `Painting, medium (10gp) stock: Made to order | Example Depicts a gnome & her pet giant bee`,
        `Rug, large (12gp) stock: ${rollDice(4)} | 10 feet x 50 feet, really ties a room together`,
        `Wardrobe, wood (10gp) stock: ${rollDice(4)} | 4 feet x 1.5 feet, 6 feet tall, holds approx 900 lbs.`,
        `Altar (20gp) stock: Made to order | Contains holy symbols and space for rituals`,
        `Armchair (12gp) stock: ${rollDice(4)} | Leather, well-stuffed, highly comfortable`,
        `Banner or flag (30gp) stock: Made to order | 3 feet x 10 feet, comes with custom design`,
        `Bathtub, ornate (25gp) stock: ${rollDice(4)} | Example. Worked steel with dragon-headed taps`,
        `Bed, four-poster (75gp) stock: ${rollDice(4)} | 8 feet x 6 feet, filled with owlbear down`,
        `Desk, ornate (15gp) stock: ${rollDice(4)-2} | Example Intricate vines carved in smooth wood`,
        `Fountain (750gp) stock: Made to order | 6 feet x 6 feet, 4 feet tall, marble or similar`,
        `Lamp, magic (100gp) stock: ${rollDice(4)} | Turns off and on, triggered by a single clap`,
        `Mosaic, large (600gp) stock: Made to order | Example Water elementals crashing on a coast`,
        `Painting, huge (550gp) stock: Made to order | Example The artist's depiction of the Dawn War`,
        `Painting, large (50gp) stock: Made to order | Example A courtly dragonborn and her consort`,
        `Statue, metal (1,000gp) stock: Made to order | Example A brass statue of the goddess Avandra`,
        `Chandelier, huge (1,500gp) stock: Made to order | Example Astral crystal interlaced with mithral`,
        `Mirror of life trapping (50,000gp) stock: Only 1, ever | DMG 181`,
        `Statue, precious (2,000gp) stock: Made to order | Example An enormous adamantine dragon`,
        `Tapestry (1,500gp) stock: Made to order | Example Adventurers thwarting an ancient evil`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Furniture and Interior Decor"
    artMerchant.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function fashion() {
    let fashionMerchant = [
        `Sack, wearable (1cp) stock: ${rollDice(4)*5} | PHB 150 Almost waterproof`,
        `Cap, leather (5sp) stock: ${rollDice(4)*2} | A sturdy, if ugly, way to keep your head dry`,
        `Cap, bonnet (5sp) stock: ${rollDice(4)*2} | A working woman's hat`,
        `Cap, stocking (4sp) stock: ${rollDice(4)*2} | A long, conical cap for a cold winter's night`,
        `Clothes, common (5sp) stock: ${rollDice(4)*5} | PHB 150 Worn and patched, made of rough materials`,
        `Clothes, traveler's (2gp) stock: ${rollDice(4)*5} | PHB 150 Durable and well-made, but not exactly fancy`,
        `Robes (1gp) stock: ${rollDice(4)*2} | PHB 150 Simple, smooth, and clean, with many pockets`,
        `Clothes, costume (5gp) stock: ${rollDice(4)*2} | PHB 150 A finely made costume for a jester or actor`,
        `Cobbler's tools (5gp) stock: ${rollDice(4)} | PHB 154`,
        `Hat, bowler (2gp) stock: ${rollDice(4)*2} | A rounded hat with a short brim`,
        `Hood (5sp) stock: ${rollDice(4)*2}`,
        `Perfume vial (5gp) stock: ${rollDice(4)*2} vials | PHB 150 A faint floral aroma for the discerning nose`,
        `Weaver's tools (1gp) stock: ${rollDice(4)} | PHB 154`,
        `Wig (2gp) stock: ${rollDice(4)*2} | Beautiful or austere, good at hiding baldness`,
        `Bow or bowtie (12gp) stock: ${rollDice(4)*3} | Soft silken cloth, plain or with festive pattern`,
        `Clothes, aristocratic (50gp) stock: ${rollDice(4)*5} | The bleeding edge of modern fashion`,
        `Clothes, fine (15gp) stock: ${rollDice(4)*5} | PHB 150 Refined noble clothes, very fashionable`,
        `Cowl (2gp) stock: ${rollDice(4)*2} | A face-wrap favored by vigilantes and assassins`,
        `Goggles (10gp) stock: ${rollDice(4)} | Leather and glass, perfect for keeping eyes safe`,
        `Hat, adventurer's (15gp) stock: ${rollDice(4)} | A wide-brimmed leather hat favored by explorers`,
        `Hat, beret (3gp) stock: ${rollDice(4)*2} | A simple circular hat, a staple of artists`,
        `Hat. fez (5gp) stock: ${rollDice(4)*2} | Worn by distinguished individuals in arid lands`,
        `Hat, sea captain (20gp) stock: ${rollDice(4)} | A nautical cap that demands a crew's respect`,
        `Hat, ushanka (3gp) stock: ${rollDice(4)*2} | A soft, warm hat, ideal for freezing conditions`,
        `Hat, wizard (25gp) stock: ${rollDice(4)} | The conical, wide-brimmed hat of a true wizard`,
        `Mask (5gp) stock: ${rollDice(4)*2} | Secretive or festive, good for crimes and parties`,
        `Shaded glasses (350gp) stock: ${rollDice(4)} | Negates disadvantage from Sunlight Sensitivity`,
        `Boots of the winterlands (500gp) stock: Only 1, ever | DMG 156`,
        `Clothes, superior (150gp) stock: Only 1, ever | Enchanted, always the finest clothes in the room`,
        `Hat, superior (100 gp) stock: Only 1, ever | Enchanted, always the finest hat in the room`,
        `Robe of scintillating colors (50,000gp) stock: Only 1, ever`,
        `Slippers of spider climbing (500gp) stock: Only 1, ever | DMG 192`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "High Fashion"
    fashionMerchant.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function jeweler() {
    let jeweler = [
        `Geode, fake (2sp) stock: ${rollDice(4)*2} | No crystals within this rock. Only more rock.`,
        `Copper (5sp/lb.) stock: ${rollDice(4)*2} lbs. | PHB 157`,
        `Earring, simple (5gp) stock: ${rollDice(4)*5} | Small stud or ring of semi-precious metal`,
        `Gems, common (10gp/ea.) stock: ${rollDice(4)*4} | DMG 134 Examples: agate, lapis lazuli, malachite, tiger eye`,
        `Iron (1sp/lb.) stock: ${rollDice(4)*5} lbs. | PHB 157`,
        `Locket, brass (4sp) stock: ${rollDice(4)*3}`,
        `Pick, miners (4gp) stock: ${rollDice(4)} | PHB 150`,
        `Magnifying glass (100gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Ring, simple (5gp) stock: ${rollDice(4)*4} | A small circle of polished semi-precious metal`,
        `Medium Gems, uncommon (50gp/ea.) stock: ${rollDice(4)*5} | DMG 134 Examples: citrine, jasper, moonstone, quartz`,
        `Jeweler's tools (25gp) stock: ${rollDice(4)} | PHB 154`,
        `Necklace (150gp) stock: ${rollDice(4)*3} | Braided metal, including pendant with a gem`,
        `Signet ring (5gp) stock: ${rollDice(4)} | PHB 150`,
        `Silver (5gp/lb.) stock: ${rollDice(4)} lbs. | PHB 157`,
        `Brooch of shielding (500gp) stock: Only 1, ever | DMG 156`,
        `Crown (750gp) stock: ${rollDice(4)} | Precious metal circlet inset with gemstones`,
        `Earring, elegant (200gp) stock: ${rollDice(4)*2} | Ostentatiously gemmed stud or metal ring`,
        `Gems, exceptional (100gp/ea.) stock: ${rollDice(4)*4} | DMG 134 Examples: amber, amethyst, gamet, jade, pearl`,
        `Gem of brightness (500gp) stock: Only 1, ever | DMG 171`,
        `Gems, rare (500gp/ea.) stock: ${rollDice(4)*3} | DMG 134 Examples: alexandrite, peridot, topaz`,
        `Gems, very rare (1,000gp/ea.)stock: ${rollDice(4)*2} | DMG 134 Examples: emerald, opal, sapphire, ruby`,
        `Gold (50gp/lb.) stock: ${rollDice(4)} lbs. | PHB 157`,
        `Medallion of thoughts (500gp) stock: Only 1, ever | DMG 181`,
        `Ring, elegant (250gp) stock: ${rollDice(4)*2} | Tooled metal band inset with precious gems`,
        `Excellent Elemental gem (500gp) stock: Only 1, ever | DMG 167`,
        `Gems, legendary (5,000gp/ea.) stock: ${rollDice(4)} | DMG 134 Examples: black sapphire, diamond, jacinth`,
        `Platinum (500gp/lb.) stock: ${rollDice(4)} lbs. | PHB 157`,
        `Ring of protection (5,000 gp) stock: Only 1, ever | DMG 191`,
        `Ring of telekinesis (50,000 gp) stock: Only 1, ever | DMG 193`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Jewelry and Gems"
    jeweler.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function misc() {
    let KnickKnackMerchant = [
        `Pole, 10-foot (5cp) stock: ${rollDice(4)*4} | PHB 150`,
        `Blanket (5sp) stock: ${rollDice(4)*3} | PHB 150`,
        `Block and tackle (1gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Bucket (5cp) stock: ${rollDice(4)*4} | PHB 150`,
        `Candle (1cp) stock: ${rollDice(4)*10} | PHB 150`,
        `Chalk (1cp/piece) stock: ${rollDice(4)*5} pieces | PHB 150 Comes in a variety of colors`,
        `Dice set (1sp) stock: ${rollDice(4)*3} | PHB 154`,
        `Flask or tankard (2cp) stock: ${rollDice(4)*5} | PHB 150 Made of either pewter or treated wood`,
        `Playing card set (5sp) stock: ${rollDice(4)*3} | PHB 154`,
        `Signal whistle (5cp) stock: ${rollDice(4)*2} | PHB 150`,
        `Tinderbox (5sp) stock: ${rollDice(4)*3} | PHB 150`,
        `Amulet (5gp) stock: ${rollDice(4)} | PHB 150 Counts as a holy symbol`,
        `Ball bearings (1gp/1,000) stock: ${rollDice(4)*2,000} | PHB 150`,
        `Cart (15gp) stock: ${rollDice(4)} | PHB 157`,
        `Chain (5gp/10 feet) stock: ${rollDice(4)*20} feet | PHB 150`,
        `Climber's kit (25gp) stock: ${rollDice(4)} | PHB 150`,
        `Hourglass (25gp) stock: ${rollDice(4)} | PHB 150`,
        `Lamp (5sp) stock: ${rollDice(4)} | PHB 150`,
        `Lantern, bullseye (10gp) stock: ${rollDice(4)} | PHB 150`,
        `Lantern, hooded (5gp) stock: ${rollDice(4)} | PHB 150`,
        `Rope, hempen (1gp/50feet) stock: ${rollDice(4)*50} feet | PHB 150`,
        `Rowboat (50gp) stock: ${rollDice(4)-2} | PHB 157`,
        `Scale, merchant's (5gp) stock: ${rollDice(4)} | PHB 150`,
        `Tarokka deck (10gp) stock: ${rollDice(4)} | CoS 243`,
        `Alcherny jug (500gp) stock: Only 1, ever | DMG 150`,
        `Artisan's tools (varies) stock: ${rollDice(4)+2} sets | PHB 154 Prices are as listed in the PHB`,
        `Bell (1gp) stock: ${rollDice(4)+2} | PHB 150`,
        `Caltrops (1gp/20) stock: ${rollDice(4)*40} | PHB 150`,
        `Dragonchess set (1gp) stock: ${rollDice(4)} | PHB 154`,
        `Grappling hook (2gp) stock: ${rollDice(4)} | PHB 150`,
        `Lantern of revealing (500gp) stock: Only 1, ever | DMG 179`,
        `Three-Dragon Ante set (1gp) stock: ${rollDice(4)} | PHB 154`,
        `Spyglass (1,000gp) stock: ${rollDice(4)} | PHB 150`,
        `Sovereign glue (50,000gp) stock: Only 1, ever | DMG 200`,
        `Universal solvent (50,000gp) stock: Only 1, ever | DMG 209`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Knick Knacks"
    KnickKnackMerchant.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function leather() {
    let leatherWorker = [
        `Leather, cured (5gp/sq.yd) stock: ${rollDice(4)*4} sq.yds.`,
        `Bit and bridle (2gp) stock: ${rollDice(4)*2} | PHB 157`,
        `Cap, leather (5sp) stock: ${rollDice(4)*2} | A sturdy way to keep your head dry`,
        `Meat (3sp/chunk) stock: ${rollDice(4)*5} chunks | PHB 158`,
        `Padded armor (5gp) stock: ${rollDice(4)*2} | PHB 145`,
        `Pouch (5sp) stock: ${rollDice(4)*4} | PHB 150`,
        `Saddle, pack (5gp) stock: ${rollDice(4)} | PHB 157`,
        `Waterskin (2sp) stock: ${rollDice(4)*3} | PHB 150`,
        `Backpack (2gp) stock: ${rollDice(4)*3} | PHB 150`,
        `Clothes, traveler's (2gp) stock: ${rollDice(4)} | PHB 150 Durable and well-made, stands punishment`,
        `Hunting trap (5gp) stock: ${rollDice(4)} | PHB 150`,
        `Leather armor (10gp) stock: ${rollDice(4)*2} | PHB 145`,
        `Leatherworker's tools (25gp) stock: ${rollDice(4)} | PHB 154`,
        `Oil (1sp/flask) stock: ${rollDice(4)*2} flasks | PHB 150`,
        `Quiver (1gp) stock: ${rollDice(4)} | PHB 150`,
        `Saddle, riding (10gp) stock: ${rollDice(4)} | PHB 157`,
        `Bagpipes (30gp) stock: ${rollDice(4)} | PHB 154`,
        `Bag of holding (500gp) stock: Only ${rollDice(4)}, ever | DMG 153`,
        `Boots of elvenkind (500gp) stock: Only 1, ever | DMG 155`,
        `Boots of the winterlands (500gp) stock: Only 1, ever | DMG 156`,
        `Drum (6gp) stock: ${rollDice(4)} | PHB 154`,
        `Hat, adventurer's (15gp) stock: ${rollDice(4)} | A wide-brimmed leather hat favored by explorers`,
        `Hide armor (10gp) stock: ${rollDice(4)} | PHB 145`,
        `Saddlebags (4gp) stock: ${rollDice(4)*2} | PHB 157`,
        `Saddle, exotic (60gp) stock: ${rollDice(4)} | PHB 157`,
        `Saddle, military (20gp) stock: ${rollDice(4)} | PHB 157`,
        `Studded leather armor (45gp) stock: ${rollDice(4)} | PHB 145`,
        `Belt of dwarvenkind (5,000 gp) stock: Only 1, ever | DMG 155`,
        `Dragon scale mail, red (50,000 gp) stock: Only 1, ever | DMG 165`,
        `Glamoured studded leather (5,000 gp) stock: Only 1, ever | DMG 172`,
        `Saddle of the cavalier (500gp) stock: Only 1, ever | DMG 199`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Leather Worker"
    leatherWorker.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function mech() {
    let mechanicalMerchant = [
        `Hoop and stick (2cp) stock: ${rollDice(4)*3} | A pass-time from a simpler time`,
        `Abacus (2gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Ball bearings (1gp/1,000) stock: ${rollDice(4)*2000} | PHB 150`,
        `Block and tackle (1gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Cogs (1sp/handful) stock: ${rollDice(4)*5} handfuls`,
        `Oil (1sp/flask) stock: ${rollDice(4)*5} flasks | PHB 150`,
        `Barrel organ (30gp) stock: ${rollDice(4)} | Musical instrument; turn the crank to play`,
        `Bomb (150gp) stock: ${rollDice(4)*4} | DMG 267 May not exist in settings w/o gunpowder`,
        `Clockwork dog (5gp) stock: ${rollDice(4)} | When wound up, walks forward, barks, and flips`,
        `Clockwork dragonchess set (20gp) stock: ${rollDice(4)} | Automatically plays dragonchess against you`,
        `Gunpowder, horn (35gp) stock: ${rollDice(4)*4} | DMG 267 May not exist in settings w/o gunpowder`,
        `Hunting trap (5gp) stock: ${rollDice(4)*3} | PHB 150`,
        `Lock (10gp) stock: ${rollDice(4)*5} | PHB 150`,
        `Clockwork dragon (25gp) stock: ${rollDice(4)} | May breathe fire that can set objects alight`,
        `Clockwork mount (250gp) stock: ${rollDice(4)} | MM 336 Has the same statistics as a riding horse`,
        `Clockwork songbird (12gp) stock: ${rollDice(4)} | Sings 1 of 3 songs on command; flightless`,
        `Dynamite (200gp/stick) stock: ${rollDice(4)*4} sticks | DMG 267 May not exist in settings w/o gunpowder`,
        `Goggles of night (500gp) stock: Only 1, ever | DMG 172`,
        `Gunpowder, keg (250gp) stock: ${rollDice(4)} | DMG 267 May not exist in settings w/o gunpowder`,
        `Pocketwatch (10gp) stock: ${rollDice(4)*2} | When wound, reliably tells the time of day`,
        `Tinker's tools (50gp) stock: ${rollDice(4)+2} | PHB 154`,
        `Clockwork rocket sled (2,500gp) stock: ${rollDice(4)+1} | Moves 60 feet / round in one direction for 1 min`,
        `Iron bands of Bilarro (5,000gp) stock: Only 1, ever | DMG 177`,
        `Manual of golems, iron (25,000gp) stock: Only 1, ever | DMG 180`,
        `Wand of lightning bolts (5,000gp) stock: Only 1, ever | DMG 211`,
        `Winged boots (500gp) stock: Only 1, ever | DMG 274`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Mechanical Contraptions"
    mechanicalMerchant.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function armor() {
    let heavyarmor = [
        `Barrel, wearable (2gp) stock: ${rollDice(4)*2} | PHB 150 Includes straps; does not include bottom`,
        `Bucket (5cp) stock: ${rollDice(4)*2} | PHB 150 Anything is armor if you're foolhardy enough`,
        `Chain mail (75gp) stock: ${rollDice(4)*3} | PHB 145`,
        `Chain shirt (50gp) stock: ${rollDice(4)*4} | PHB 145`,
        `Copper (5sp/lb) stock: ${rollDice(4)*2} lbs. | PHB 157`,
        `Iron (1sp/lb) stock: ${rollDice(4)*5} lbs. | PHB 157`,
        `Ring mail (30gp) stock: ${rollDice(4)*4} | PHB 145`,
        `Scale mail (50gp) stock: ${rollDice(4)*3} | PHB 145`,
        `Shield (10gp) stock: ${rollDice(4)*3} | PHB 145`,
        `Anvil (75gp) stock: ${rollDice(4)}`,
        `Barding (*varies) stock: ${rollDice(4)*3} | PHB 157 Prices are as listed in the PHB`,
        `Breastplate (400gp) stock: ${rollDice(4)} | PHB 145`,
        `Helm, horned (25gp) stock: ${rollDice(4)} | While imposing, it is hard to get through doors`,
        `Smith's tools (20gp) stock: ${rollDice(4)} | PHB 154`,
        `Splint (200gp) stock: ${rollDice(4)+4} | PHB 145`,
        `Adamantine armor, any (500gp) stock: Only ${rollDice(4)}, ever | DMG 150 Must also pay the cost of the base armor`,
        `Armor, +1 (5,000gp)  stock: Only ${rollDice(4)}, ever | DMG 152 Must also pay the cost of the base armor`,
        `Half plate (750gp) stock: ${rollDice(4)+3} | PHB 145`,
        `Helm, winged (50gp) stock: ${rollDice(4)} | Gallant and flamboyant`,
        `Mithral armor, any (500gp) stock: Only ${rollDice(4)}, ever | DMG 182 Must also pay the cost of the base armor`,
        `Plate +1 (500gp) stock: ${rollDice(5)-2} | PHB 145`
        `Shield, +1 (500gp) stock: Only 1, ever | DMG 200`,
        `Silver (5gp/lb) stock: ${rollDice(4)*2} lbs. | PHB 157`,
        `Arrow-catching shield (5,000gp) stock: Only 1, ever | DMG 152`,
        `Armor, +2 (50,000gp) stock: Only 1, ever | DMG 152 Must also pay the cost of the base armor`,
        `Dwarven plate (50,000gp) stock: Only 1, ever | DMG 167`,
        `Elven chain (5,000gp) stock: Only 1, ever | DMG 168`,
        `Helm of teleportation (5,000 gp) stock: Only 1, ever | DMG 774`,
        `Shield, +2 (5,000gp) stock: Only ${rollDice(5)-2}, ever | DMG 200`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Medium and Heavy Armor"
    heavyarmor.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function alch() {
    let alchemyAndPotions = [
        `Water (1cp/cup) stock: ${rollDice(4)*100} cups | An effective base for most potions`,
        `Herbalism kit (5gp) stock: ${rollDice(4)} | PHB 154`,
        `Herbs, common (5sp/lb) stock: ${rollDice(4)*10} lbs. | Ex: Mint, sage;often used in common potions`,
        `Herbs, uncommon (5gp/lb) stock: ${rollDice(4)*5} lbs. | Ex: Horsetail, comfrey; for uncommon potions`,
        `Poison, basic (100gp/vial) stock: ${rollDice(4)*2} vials | PHB 150 Injury;can inflict 1d4 poison damage`,
        `Potion of climbing (50gp) stock: ${rollDice(4)*2} | DMG 187 Grants a climbing speed for 1 hour`,
        `Potion of healing (50gp) stock: ${rollDice(4)*3} | PHB 150 Regains 2d4+2 hit points`,
        `Alchemist's supplies (50gp) stock: ${rollDice(4)} PHB 154`,
        `Assassin's blood (150gp/dose )stock: ${rollDice(4)+2} doses | DMG 257 Injested; can inflict 1d12 poison damage`,
        `Oil of slipperiness (250gp) stock: ${rollDice(4)-2} | DMG 184 Grants either freedom of movement or grease`,
        `Philter of love (250gp)stock: ${rollDice(4)+2} | DMG 184 Charms the drinker for up to an hour`,
        `Poisoner's kit (50gp) stock: ${rollDice(4)} | PHB 154`,
        `Potion of fire breath (250gp) stock: ${rollDice(4)+2} | DMG 187 Allows you to exhale fire.dealing 4 d6 damage`,
        `Potion of greater healing (250gp) stock: ${rollDice(4)*2} | DMG 187 Regains 4 d4 I .4 hit points`,
        `Potion of water breathing (250gp) stock: ${rollDice(4)*2} | DMG 188 Allows you to breathe water for up to an hour`,
        `Truth serum (150gp/dose) stock: ${rollDice(4)+2} doses | DMG 258 Injested;target cannot knowingly speak a lie`,
        `Drow poison (200gp/dose) stock: ${rollDice(4)} doses | DMG 258 Injury;can render target unconscious`,
        `Elixir of health (2,500 gp) stock: ${rollDice(4)+2} | DMG 168 Curse disease, blind, deaf, paralyze, and poison`,
        `Herbs, rare (50gp/lb)stock: ${rollDice(4)*4} lbs. | Ex: Devilroot, embertear; for rare potions Herbs, very rare 500 gp / lb .${rollDice(4)*2} lbs.Ex: Starspine, voidweave: for very rare potions`,
        `Potion of clairvoyance (2,500gp) stock: ${rollDice(4)+2} | DMG 187 Grants the effect of the clairvoyance spell`,
        `Potion of diminution (2,500gp) stock: ${rollDice(4)+2} | DMG 187 Drink to be shrunk as if by enlarge / reduce`,
        `Potion of heroism (2,500gp) stock: ${rollDice(4)} | DMG 188 Grants bless and 10 temporary hit points`,
        `Potion of mind reading (2,500gp) stock: ${rollDice(4)} | DMG 188 Grants the effects of the detect thoughts spell`,
        `Potion of superior healing (2,500gp) stock: ${rollDice(4)+2} | DMG 188 Regains 8d4+8 hit points`,
        `Serpent venom (200gp/dose) stock: ${rollDice(4)} doses | DMG 258 Injury;can inflict 3 d6 poison damage`,
        `Burnt othur fumes (500gp/dose) stock: ${rollDice(4)} doses | DMG 258 Inhailed;can inflict persistent poison damage`,
        `Malice (250gp/dose) stock: ${rollDice(4)} doses | DMG 258 Inhaled, can blind affected creatures`,
        `Oil of sharpness (25,000gp) stock: ${rollDice(4)} | DMG 184 Grants an item + 3 to attack and damage`,
        `Potion of invisibility (25,000gp)stock: ${rollDice(4)} | DMG 188 Grants invisibility for up to an hour`,
        `Potion of invulnerability (2,500gp) stock: ${rollDice(4)} | DMG 188 Grants resistance to all damage`,
        `Potion of longevity (25,000gp) stock: ${rollDice(4)-1} | DMG 188 Reduces your age by 1 d6 + 6 years, usually`,
        `Potion of supreme healing (25,000gp) stock: ${rollDice(4)} | DMG 187 Regains 10d4+20 hit points`,
        `Potion of vitality (25,000gp) stock: ${rollDice(4)} | DMG 188 Cures exhaustion, disease, and poison`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Potions, Poisons, Herbs"
    alchemyAndPotions.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function religious() {
    let religiousMerchant = [
        `Candle (1cp) stock: ${rollDice(4)*10} | PHB 150 Comes in a variety of colors`,
        `Book, holy (5gp) stock: ${rollDice(4)*10} | PHB 150 From one of a variety of faiths`,
        `Chalk (1cp/piece) stock: ${rollDice(4)*10} pieces | PHB 150 Comes in a variety of colors`,
        `Dagger, ritual (2gp) stock: ${rollDice(4)*2} | PHB 148 Has an oddly curved design`,
        `Holy symbol (*varies) stock: ${rollDice(4)*20} | PHB 150 Prices are as listed in the PHB`,
        `Incense (1sp/block) stock: ${rollDice(4)*20} blocks | Thick, musky, and pungent`,
        `Spell: Cure wounds (10gp) stock: 3 spells/day | PHB 230 Cast at 1st level; heals 1d8 + 3 hit points`,
        `Spell: Identify (20gp) stock: 3 spells/day stock: ${rollDice(4)*10} | PHB 252 PHB 150 Tells you the properties of a magic item`,
        `Druidic focus (varies) stock: ${rollDice(4)} | Prices are as listed in the PHB`,
        `Healer's kit (5gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Holy water (25gp/flask) stock: ${rollDice(4)*5} flasks | PHB 150`,
        `Quarterstaff (2sp) stock: ${rollDice(4)*2} | PHB 148`,
        `Robes (1gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Spell: Lesser restoration (40gp) stock: 3 spells/day | PHB 255 Cures blind, deaf, paralyze, or poison`,
        `Spell: Prayer of healing (40gp) stock: 3 spells/day | PHB 267 Cast at 2nd level; heals 2d8 + 3 hit points`,
        `Thurible (55gp) stock: ${rollDice(4)+2} | A gilded censer for burning incense`,
        `Keoghtom's ointment (250gp) stock: ${rollDice(4)+2} | PHB 179`,
        `Spell: Divination (210gp) stock: 3 spells/day | PHB 234 Grants guidance on a course of action`,
        `Spell: Remove curse (90gp) stock: 3 spells/day | PHB 271 Lifts curse or attunement to cursed item`,
        `Spell: Speak with dead (90gp) stock: 3 spells/day | PHB 277 Allows you to speak to one non-undead corpse`,
        `Staff of the Python (500gp) stock: Only 1, ever | DMG 204`,
        `Candle of invocation (50,000gp) stock: Only 1, ever | DMG 157`,
        `Spell: Greater restoration (450gp) stock: 3 spells/day | PHB 246 Reduces exhaustion, removes charm, petrify, curse, or ability/hp reduction`,
        `Spell: Raise dead (1,250gp) stock: 3 spells/day | PHB 270 Returns a dead corpse to life`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Religious Idols and Blessings"
    religiousMerchant.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function instruments() {
    let bardInstruments = [
        `Written song, terrible (1cp) stock: ${rollDice(4)} copies | Example: "Freeform Jazz Odyssey No. 12"`,
        `Bell (1gp) stock: ${rollDice(4)*3} | PHB 150`,
        `Drum (6gp) stock: ${rollDice(4)*4} | PHB 154`,
        `Horn (3gp) stock: ${rollDice(4)*3} | PHB 154`,
        `Shawm (2gp) stock: ${rollDice(4)*4} | PHB 154`,
        `Written song, derivative (5cp) stock: ${rollDice(4)} copies | Example: "The Dwarf Lass's Beard"`,
        `Bagpipes (30gp) stock: ${rollDice(4)*2} | PHB 154`,
        `Chalumeau (15gp) stock: ${rollDice(4)*3} | Straight, wooden musical instrument, with reed`,
        `Cymbals (20gp/set) stock: ${rollDice(4)*3} sets`,
        `Flute (2gp) stock: ${rollDice(4)*4} | PHB 154`,
        `Lyre (30gp) stock: ${rollDice(4)*4} | PHB 154`,
        `Pan flute (12gp) stock: ${rollDice(4)*4} | PHB 154`,
        `Strings (2sp/5 strings) stock: ${rollDice(4)*5} strings | Good for restringing an instrument`,
        `Timbrel (13gp) stock: ${rollDice(4)*2} | A circular wood instrument with brass discs`,
        `Written song, catchy (5sp) stock: ${rollDice(4)} | Example: "A Tieing Went Down to Cormyr"`,
        `Adufe (10gp)stock: ${rollDice(4)*2} | A square, drum-like instrument that rattles`,
        `Dulcimer (25gp)stock: ${rollDice(4)*3} | PHB 154`,
        `Glockenspiel (35gp) stock: ${rollDice(4)*2} | Instrument of metal bars, struck with mallets`,
        `Instrument of the bards, Doss lute (500gp)stock: Only 1, ever | DMG 176`,
        `Lute (35gp) stock: ${rollDice(4)*3} | PHB 154`,
        `Pipes of haunting (500gp) stock: Only 1, ever | DMG 185`,
        `Pipes of the sewers (500gp) stock: Only 1, ever | DMG 185`,
        `Rebab (32gp) stock: ${rollDice(4)*2} | Long-knecked wooden string instrument`,
        `Viol (30gp) stock: ${rollDice(4)*3} | PHB 154`,
        `Written song, classic (5gp) stock: ${rollDice(4)} copies | Example: "Ghost Azers in the Sky"`,
        `Written song, inspired (50gp)stock: ${rollDice(4)} copies | Example: "4'33"`,
        `Chime of opening (2,500gp) stock: Only 1, ever | DMG 158`,
        `Gnomish saxophone (250gp) stock: ${rollDice(4)} | A brass musical instrument, covered in keys`,
        `Instrument of the bards, Canaith mandolin (5,000gp) stock: Only 1, ever`,
        `instrument of the bards, CI i lyre (5,000gp) stock: Only 1, ever | DMG 176`,
        `Written song, epic (500gp) stock: Only 1 copy, ever | Example: "FaerOnian Rhapsody"`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Songs and Instruments"
    bardInstruments.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function scrolls() {
    let spellsAndScrolls = [
        `Spell scroll, fake (25sp) stock: ${rollDice(4)} | A DC 10 Investigation check reveals it is fake`,
        `Calligrapher's supplies (10gp) stock: ${rollDice(4)*2} | PHB 154`,
        `Case, scroll (1gp) stock: ${rollDice(4)*5} | PHB 150`,
        `Ink (10gp/ounce) stock: ${rollDice(4)*10} ounces | PHB 150`,
        `Ink pen (2cp) stock: ${rollDice(4)*5} | PHB 150`,
        `Parchment (1sp/sheet) stock: ${rollDice(4)*20} sheets | PHB 150`,
        `Spellbook, blank (50gp) stock: ${rollDice(4)*5} | PHB 150`,
        `Ritual book, 1st level (100gp) stock: ${rollDice(4)} | Contains a 1st - level ritual spell; can be copied`,
        `Ritual book 2nd level (100gp)stock: ${rollDice(4)} | Contains a 2nd - level ritual spell; can be copied`,
        `Ritual book, 3rd level (500gp) stock: ${rollDice(4)} | Contains a 3rd - level ritual spell; can be copied`,
        `Scroll, cantrip (50gp) stock: ${rollDice(4)*5} | DMG 200`,
        `Scroll, 1st level (50gp) stock: ${rollDice(4)*4} | DMG 200`,
        `Scroll, 2nd level (250gp) stock: ${rollDice(4)*4} | DMG 200`,
        `Scroll, 3rd level (250gp) stock: ${rollDice(4)*3} | DMG 200`,
        `Spell: Identify (20gp) stock: 3 spells/day | PHB 252 Tells you the properties of a magic item`,
        `Ritual book 4th level (5,000gp) stock: ${rollDice(4)} | Contains a 4th - level ritual spell;can be copied`,
        `Ritual book, 5th level (5,000gp) stock: ${rollDice(4)} | Contains a 5th - level ritual spell;can be copied`,
        `Ritual book, 6th level (50,000gp) stock: ${rollDice(4)-2} | Contains a 6th - level ritual spell;can be copied`,
        `Scroll, 4th level (2,500gp) stock: ${rollDice(4)*3} | DMG 200`,
        `Scroll, 5th level (2,500 gp) stock: ${rollDice(4)*2} | DMG 200`,
        `Scroll, 6th level (25,000 gp) stock: ${rollDice(4)*2} | DMG 200`,
        `Scroll of protection (2,500 gp) stock: ${rollDice(4)*3} | DMG 199 This scroll can be used by anyone, and protects any against a specific creature type`,
        `Spellbook, backup (5,000 gp) stock: ${rollDice(4)} | Touched to a spellbook: instantly copies it once`,
        `Manual of golems, clay (25,000 gp) stock: Only 1, ever | DMG 180`,
        `Scroll, 7th level (25,000gp) stock: ${rollDice(4)} | DMG 200`,
        `Scroll, 8th level (25,000gp) stock: ${rollDice(4)-2} | DMG 200`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Spell Tomes and Scrolls"
    spellsAndScrolls.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function fence() {
    let thievingMerchant = [
        `Book, "How to Steal" (25gp) stock: Only 1, ever | PHB 150 The outside is locked, and the inside is blank`,
        `Climber's kit (25gp) stock: ${rollDice(4)+2} | PHB 150`,
        `Grappling hook (2gp) stock: ${rollDice(4)+2} | PHB 150`,
        `Ladder, 10-foot (1sp) stock: ${rollDice(4)} | PHB 150`,
        `Rope, hempen (1gp/50ft.) stock: ${rollDice(4)*50} feet | PHB 150`,
        `Sack (1cp) stock: ${rollDice(4)*5} | PHB 150`,
        `Torch (1cp) stock: ${rollDice(4)*5} | PHB 150`,
        `Ammunition (*varies) stock: ${rollDice(4)*50} pieces | PHB 150 Prices are as listed in the PHB`,
        `Crowbar (2gp) stock: ${rollDice(4)*3} | PHB 150`,
        `Caltrops (1gp/20) stock: ${rollDice(4)*40} | PHB 150`,
        `Dagger (2gp) stock: ${rollDice(4)*4} | PHB 149`,
        `Disguise kit (25gp) stock: ${rollDice(4)*2} | PHB 754`,
        `Poison, basic (100gp/vial) stock: ${rollDice(4)*2} vials | PHB 150 Injury; can inflict 1d4 poison damage`,
        `Poisoner's kit (50gp) stock: ${rollDice(4)} | PHB 154`,
        `Shortbow (25gp) stock: ${rollDice(4)*2} | PHB 149`,
        `Signal whistle (5cp) stock: ${rollDice(4)*2} | PHB 150`,
        `Thieves' tools (25gp) stock: ${rollDice(4)*2} | PHB 154`,
        `Crossbow, hand (75gp) stock: ${rollDice(4)*3} | PHB 149`,
        `Dice set (1sp) stock: ${rollDice(4)*2} | PHB 154 Also available weighted, for triple price`,
        `Drow poison (200gp/dose) stock: ${rollDice(4)+1} doses | DMG 258 Injury; can render target unconscious`,
        `Eversmoking bottle (500gp) stock: Only 1, ever | DMG 168`,
        `Forgery kit (15gp) stock: ${rollDice(4)} | PHB 154`,
        `Hat of disguise (500gp) stock: Only 1, ever | DMG 173`,
        `Playing card set (5sp) stock: ${rollDice(4)*3} | PHB 154 Also available marked, for double price`,
        `Rapier (25gp) stock: ${rollDice(4)} | PHB 150`,
        `Shortsword (10gp) stock: ${rollDice(4)} | PHB 150`,
        `Serpent venom (200gp/dose) stock: ${rollDice(4)} doses | DMG 258 Injury; can inflict 3d6 poison damage`,
        `Spyglass (1,000gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Cloak of elvenkind (500gp) stock: Only 1, ever | DMG 158`,
        `Dagger of venom (5,000gp) stock: Only 1, ever | DMG 167`,
        `Gloves of thievery (500gp) stock: Only 1, ever | DMG 172`,
        `Wyvern poison (1,200gp/dose) stock: ${rollDice(4)-1} doses | DMG 258 Injury; can inflict 7d6 poison damage`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Thieving Supplies"
    thievingMerchant.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function tools() {
    let toolsMerchant = [
        `Bucket (5cp) stock: ${rollDice(4)*2} | PHB 150`,
        `Shovel (2gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Block and tackle (1gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Dagger (2gp) stock: ${rollDice(4)} | PHB 149`,
        `Hammer (1gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Ladder, 10-foot (1sp) stock: ${rollDice(4)*2} | PHB 150`,
        `Lamp (1cp) stock: ${rollDice(4)*2} | PHB 150`,
        `Pick, miner's (2gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Pole, 10-foot (5cp) stock: ${rollDice(4)*2} | PHB 150`,
        `Spikes, iron (1gp/10) stock: ${rollDice(4)*40} | PHB 150`,
        `Torch (5sp) stock: ${rollDice(4)*4} | PHB 150`,
        `Wood (1cp/plank) stock: ${rollDice(4)*5} planks | Planks measure 2 in. x 4 in. x 5 ft. each`,
        `Abacus (2gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Carpenter's tools (8gp) stock: ${rollDice(4)*2} | PHB 154`,
        `Cook's utensils (1gp) stock: ${rollDice(4)*2} | PHB 154`,
        `Fishing tackle (1gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Hammer, sledge (2gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Handaxe (5gp) stock: ${rollDice(4)*2} | PHB 149`,
        `Lantern, bullseye (10gp) stock: ${rollDice(4)} | PHB 150`,
        `Lantern, hooded (5gp) stock: ${rollDice(4)} | PHB 150`,
        `Mason's tools (10gp) stock: ${rollDice(4)*2} | PHB 154`,
        `Mirror, steel (5gp) stock: ${rollDice(4)} | PHB 150`,
        `Potter's tools (10gp) stock: ${rollDice(4)*2} | PHB 154`,
        `Tinderbox (5sp) stock: ${rollDice(4)*2} | PHB 150`,
        `Weaver's tools (1gp) stock: ${rollDice(4)*2} | PHB 154`,
        `Woodcarver's tools (1gp) stock: ${rollDice(4)*2} | PHB 154`,
        `Alchemist's supplies (50gp) stock: ${rollDice(4)} | PHB 154`,
        `Cobbler's tools (5gp) stock: ${rollDice(4)*2} | PHB 154`,
        `Crowbar (2gp) stock: ${rollDice(4)} | PHB 150`,
        `Glassblower's tools (30gp) stock: ${rollDice(4)} | PHB 154`,
        `Herbalism kit (5gp) stock: ${rollDice(4)*2} | PHB 154`,
        `Magnifying glass (100gp) stock: ${rollDice(4)+1} | PHB 150`,
        `Navigator's tools (25gp) stock: ${rollDice(4)} | PHB 154`,
        `Painter's supplies (10gp) stock: ${rollDice(4)*2} | PHB 154`,
        `Smith's tools (20gp) stock: ${rollDice(4)*2} | PHB 154`,
        `Tinker's tools (50gp) stock: ${rollDice(4)} | PHB 154`,
        `Gnomish army knife (100gp) stock: ${rollDice(4)} | Unfolds into up to 5 artisan's tools (you pick)`,
        `Gnomish tinderbox (50gp) stock: ${rollDice(4)} | Can instantly set alight small flammable objects`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Tools"
    toolsMerchant.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function vehicles() {
    let vehicleMerchant = [
        `Nag horse (5cp) stock: ${rollDice(4)} | Has 8 Strength and a movement speed of 20 ft.`,
        `Bit and bridle (2gp) stock: ${rollDice(4)*2} | PHB 157`,
        `Cart (15gp) stock: ${rollDice(4)} | PHB 157`,
        `Coach cab, ride (*varies) | PHB 159 Within a city: 1 cp; between towns: 3 cp / mile`,
        `Feed, animal (5cp/day) stock: ${rollDice(4)*30} days | PHB 157`,
        `Messenger service (2cp/mile) | PHB 159`,
        `Mule (8gp) stock: ${rollDice(4)*2} | MM 333 May instead be a donkey Ox 15 gp ${rollDice(4)*2} PHB 157`,
        `Pony (30gp) stock: ${rollDice(4)*2} | MM 335`,
        `Saddle, pack (5gp) stock: ${rollDice(4)} | PHB 157`,
        `Sled (20gp) stock: ${rollDice(4)} | PHB 157`,
        `Backpack (2gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Bedroll (1gp) ${rollDice(4)*2} | PHB 150`,
        `Carpenter's tools (8gp) stock: ${rollDice(4)} | PHB 154`,
        `Cartographer's tools (15gp) stock: ${rollDice(4)} | PHB 154`,
        `Draft horse (50gp) stock: ${rollDice(4)} | MM 321`,
        `Rowboat (50gp) stock: ${rollDice(4)} | PHB 157 Only sold if adjacent to a body of water`,
        `Saddle, riding (10gp) stock: ${rollDice(4)} | PHB 157`,
        `Saddlebags (4gp) stock: ${rollDice(4)} | PHB 157`,
        `Ship's passage, ride (1sp/mile) | PHB 159 Only sold if adjacent to a body of water`,
        `Wagon (35gp) stock: ${rollDice(4)} | PHB 157`,
        `Woodcarver's tools (1gp) stock: ${rollDice(4)} | PHB 154`,
        `Camel (50gp) stock: ${rollDice(4)} | MM 320`,
        `Folding boat (5,000gp) stock: Only 1, ever | DMG 170`,
        `Keelboat (3,000gp) stock: ${rollDice(4)} | PHB 157 Only sold if adjacent to a body of water`,
        `Navigator's tools (25gp) stock: ${rollDice(4)} | PHB 154 Only sold if adjacent to a body of water`,
        `Riding horse (75gp) stock: ${rollDice(4)} | MM 336`,
        `Saddle, military (20gp) stock: ${rollDice(4)} | PHB 157`,
        `Carpet of flying (50,000gp) stock: Only 1, ever | DMG 157 Size of the carpet is determined by the DM`,
        `Carriage (100gp) stock: ${rollDice(4)} | PHB 157`,
        `Chariot (250gp) stock: ${rollDice(4)} | PHB 157`,
        `Longship (10,000gp) stock: ${rollDice(4)-1} | PHB 157 Only sold if adjacent to a body of water`,
        `Sailing ship (10,000gp) stock: ${rollDice(4)-2} | PHB 157 Only sold if adjacent to a body of water`,
        `Warhorse (400gp) stock: ${rollDice(4)} | MM 340`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Vehicles and Transportation"
    vehicleMerchant.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function weapons() {
    let weaponTrader = [
        `Hammer (1gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Pole, 10 foot (5cp) ${rollDice(4)*2} | PHB 150`,
        `Ammunition (varies) stock: ${rollDice(4)*40} | PHB 150 Prices are as listed in the PHB`,
        `Simple melee weapons (varies) stock: ${rollDice(4)*15} | PHB 149 Prices are as listed in the PHB`,
        `Simple ranged weapons (varies) stock: ${rollDice(4)*15} | PHB 149 Prices are as listed in the PHB`,
        `Whetstone (1cp) stock: ${rollDice(4)*10} | PHB 150`,
        `Martial melee weapons (varies) stock: ${rollDice(4)*10} | PHB 149 Prices are as listed in the PHB`,
        `Quiver (1gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Smith's tools (20gp) stock: ${rollDice(4)} | PHB 154`,
        `Ammunition, +1 (500gp/20) stock: ${rollDice(4)*20} | DMG 150 Must also pay the cost of the base ammunition`,
        `Javelin of lightning (500gp) stock: Only 1, ever | DMG 178`,
        `Martial ranged weapons (varies) stock: ${rollDice(4)*10} | PHB 149 Prices are as listed in the PHB`,
        `Quiver of Ehlonna (500gp) stock: Only 1, ever | DMG 189`,
        `Ram, portable (4gp)stock: ${rollDice(4)} | PHB 150`,
        `Sheath (8gp) stock: ${rollDice(4)*2} | Ornate leather holster for a dagger or sword`,
        `Shield (10gp) stock: ${rollDice(4)*2} | PHB 145`,
        `Weapon, +1 (500gp) stock: Only ${rollDice(4)}, ever | DMG 273 Must also pay the cost of the base weapon`,
        `Weapon of warning, any (500gp) stock: Only 1, ever | DMG 213 Must also pay the cost of the base weapon`,
        `Ammunition, +2 (5,000gp/20) stock: ${rollDice(4)*10} | DMG 150 Must also pay the cost of the base ammunition`,
        `Flame tongue, any (5,000gp) stock: Only 1, ever | DMG 170 Must also pay the cost of the base weapon`,
        `Frost brand, any (50,000gp) stock: Only 1, ever | DMG 177 Must also pay the cost of the base weapon`,
        `Oathbow (50,000gp) stock: Only 1, ever | DMG 183`,
        `Sword of sharpness, any (50,000gp) stock: Only 1, ever | DMG 206 Must also pay the cost of the base weapon`,
        `Vicious weapon, any (5,000gp) stock: Only 1, ever | DMG 209 Must also pay the cost of the base weapon`,
        `Weapon, +2 (5,000gp) stock: Only ${rollDice(4)}, ever | DMG 213 Must also pay the cost of the base weapon`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Weapons"
    weaponTrader.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}


//LEGENDARY MERCHANTS
function astral() {
    let astralTrader = [
        `Astral diamond (10,000gp/ea.) stock: Unlimited | May be used as a valid form of currency`,
        `Bag of holding (500gp) stock: Only ${rollDice(4)}, ever | DMG 153`,
        `Elemental compass (500gp) stock: Only 1, ever | Points to nearest portal to an elemental plane`,
        `Everbountiful soup kettle (500gp) stock: ${rollDice(4)} | Once per day: turns 2 gal. of water into enough soup to feed 6 people`,
        `Hourglass (25gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Jar of preserving (500gp) stock: ${rollDice(4)} | Anything in jar does not age or require food / air`,
        `Mirror, steel (5gp) stock: ${rollDice(4)} | PHB 150`,
        `Obsidian mortar and pestle (250gp) stock: ${rollDice(4)} | Can grind any non-magical item to powder in 1d4 rounds`,
        `Oil of etherealness (2,500gp) stock: ${rollDice(4)} | DMG 183 Confers the effects of the etherealness spell`,
        `Potion of gaseous form (2,500gp) stock: ${rollDice(4)} | DMG 187 Confers the effects of the gaseous form spell`,
        `Potion of water breathing (250gp) stock: ${rollDice(4)} | DMG 188 Allows you to breathe water for up to an hour`,
        `Spell: Teleport (490gp) stock: 3 spells/day | PHB 281 Teleports to a location on the same plane`,
        `Spell: Teleportation circle (350gp) stock: 3 spells/day | PHB 287 Paying 20 times the cost allows you to create a permanent teleportation circle at your location`,
        `Amulet of the planes (50,000gp) stock: Only 1, ever | DMG 150`,
        `Cube of force (5,000gp) stock: Only 1, ever | DMG 159`,
        `Disintegration chamber (5,000gp) stock: Only 1, ever | Anything fully within this 1 ft.x 1 ft.x 1 ft.box is affected by a casting of the spell disintegrate`,
        `Gem of seeing (5,000gp) stock: Only 1, ever | DMG 172`,
        `Portable hole (5,000gp) stock: Only ${rollDice(4)}, ever | DMG 185`,
        `Spell: Control weather (640gp) stock: 3 spells/day | PHB 228 Changes the weather to conditions you dictate`,
        `Spell - Planar ally (360gp) stock: 3 spells/day | PHB 265 Summoned creature is free to act as it pleases`,
        `Spell: Plane shift (515gp) stock: 3 spells/day | PHB 266 Teleports to a location on a different plane`,
        `Cubic gate (500,000gp) stock: Only 1, ever | DMG 160`,
        `Iron flask (500,000gp) stock: Only 1, ever | DMG 178 Your DM decides what is within the iron flask`,
        `Spell: Astral projection (3,000gp) stock: 3 spells/day | PHB 215 Add 2, 200 gp to the cost for each creature this spell affects after the first, besides the caster`,
        `Spell: Gate (1,300gp) stock: 3 spells/day | PHB 244 Opens a stable portal to another plane`,
        `Well of many worlds (500,000gp) stock: Only 1, ever | DMG 213`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Astral Trader"
    astralTrader.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function enchants() {
    let enchantmentTrader = [
        [ //0
            `Quality Items Price Quantity`,
            `Random minor enchantment (100gp) stock: 3 enchants / day`,
            `Random major enchantment (500gp) stock: 3 enchants / day`,
            `Chosen minor enchantment (300gp) stock: 3 enchants / day`,
            `Chosen major enchantment (1,500gp) stock: 3 enchants / day`,
            `Random legendary enchantment (5,000gp) stock: 3 enchants / day`,
            `Excellent Chosen legendary enchantment (15,000gp) stock: 3 enchants / day`,
        ],
        [ //1
            `----|| Minor Enchantments ||----`,
            `Beacon - Bonus action: Item sheds bright light in 10 - foot radius, dim light for additional 10 feet. May extinguish with another bonus action.`,
            `Compass - Action: Learn which way is north.`,
            `Gleaming - This item never gets dirty.`,
            `Guardian - Grants a +2 bonus to initiative.`,
            `Language - This item grants know - ledge of a specific language chosen by the DM.`,
            `Sentinel - Item glows when within 120 feet of a specific type of creature chosen by the DM.`,
            `Unbreakable - This item can only be broken by special means.`,
            `Waterborne - Item can float in liquid, grants Advantage on checks to swim.`,
            `----|| Major Enchantments ||----`,
            `Transforming - Action: Item changes into another item of the same type. A sword may turn into a different sword, or a pair of boots may turn into shoes.`,
            `Spider - Touched. Grants a climb speed equal to your movement speed.`,
            `Unseen - Item is permanently invisible.`,
            `Fleet - Grants a + 10 foot bonus to movement speed.`,
            `Flight - Action: Gain a flight speed equal to your movement speed until the end of your turn.`,
            `Glibness - Action: Gain advantage on all Charisma checks made within the next minute. Refreshes with long rest.`,
            `Night Eye - Grants darkvision out to 60 feet, or increases it by 60 feet.`,
            `Warding - Reaction: Gain advantage on a saving throw. Short rest refresh.`,
            `----|| Legendary Enchantments ||----`,
            `Fearful - Bonus action: Adjacent creature must make a DC 15 Wisdom saving throw or be frightened of you until the end of your next turn. Short rest refresh.`,
            `Teleport - Bonus action: Teleport up to 15 feet in any direction.`,
            `Silent - Grants a + 10 bonus to Stealth.Lucky.Can add 1 d10 to any check, save, or attack. Short rest refresh.`,
            `Wall Walker - Bonus action: Can pass through solid objects until end of turn, which ejects you.Short rest refresh.`,
            `Vitality - Grants immunity to disease, poisons, and poison damage.`,
            `True Seeing - Grants truesight out to 60 feet, or increases it by 60 feet.`,
            `Fortitude - Increases your hit point max - imum by 15.`,
        ],
    ]
    clear()
    document.getElementById("Title").innerHTML = "Enchanter"
    enchantmentTrader[0].forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
    enchantmentTrader[1].forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Trades").appendChild(li);
    });
}

function fey() {
    let feyMerchant = [
        [
            `Bag of tricks, rust (1 geas) stock: Only 1, ever | DMG 154`,
            `Boots of elvenkind (1 geas) stock: Only 1, ever | DMG 155`,
            `Bracers of archery (1 geas) stock: Only 1, ever | DMG 156`,
            `Cloak of elvenkind (1 geas) stock: Only 1, ever | DMG 158`,
            `Gloves of thievery (1 geas) stock: Only 1, ever | DMG 172`,
            `Quiver of Ehlonna (1 geas) stock: Only 1, ever | DMG 189`,
            `Sentinel shield (1 geas) stock: Only 1, ever | DMG 199`,
            `Cloak of displacement (2 geases) stock: Only 1, ever | DMG 158`,
            `Glamored studded leather (2 geases) stock: Only 1, ever | DMG 172`,
            `Ring of animal influence (2 geases) stock: Only 1, ever | DMG 189`,
            `Rod of the pact keeper + 2 (2 geases) stock: Only 1, ever | DMG 197`,
            `Warlock pact (3 geases) stock: Unlimited | PHB 105`,
            `Instrument of the bards, Anstruth harp (2 geases) stock: Only 1, ever | DMG 176`,
            `Oathbow (2 geases) stock: Only 1, ever | DMG 183`,
            `Ring of invisibility (3 geases) stock: Only 1, ever | DMG 191`,
            `Scimitar of speed (2 geases) stock: Only 1, ever | DMG 199`,
            `Vorpal sword, any (3 geases) stock: Only 1, ever | DMG 209`,
        ],
        [
            `d20 Geas`,
            `Give your first - born child to the merchant.`,
            `Trade the merchant a simple lock of your hair.`,
            `Slay a particular fey, bring the merchant their head.`,
            `Bring the merchant a specific child, not your own.`,
            `Play a harmless trick on a specific powerful ruler.`,
            `Tell the merchant your single darkest secret.`,
            `Fake your own death, and assume a new identity.`,
            `Betray your friends in a specific way.`,
            `Give the merchant ${rollDice(4)} of your happiest memories.`,
            `Drink a mysterious potion the merchant offers you.`,
            `Steal a specific powerful item for the merchant.`,
            `You can speak only in rhyme for the next seven days.`,
            `Give the merchant a syllable of your name.`,
            `Lose proficiency in one instrument or artisan 's tools.`,
            `Never touch iron, or take 10 d10 radiant damage.`,
            `Trade an aspect of your beauty to the merchant.`,
            `Live as a fey hunting - dog for seven days.`,
            `Lose a specific, unmentioned, item on your person.`,
            `Become permanently charmed by the merchant.`,
            `If you use a specific word, a nearby object breaks.`,
        ],
    ]
    clear()
    document.getElementById("Title").innerHTML = "Fey Bargain"
    feyMerchant[0].forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
    feyMerchant[1].forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Trades").appendChild(li);
    });
}

function artifacts() {
    let magicItemsMerchant = [
        `Bag of tricks, grey (500gp) stock: Only 1, ever | DMG 154`,
        `Dust of dryness (250gp) stock: Only ${rollDice(4)}, ever | DMG 166`,
        `Figurine of wondrous power, silver raven (500gp) stock: Only 1, ever | DMG 170`,
        `Immovable rod (500gp) stock: Only 1, ever | DMG 175`,
        `Ring of mind shielding (500gp) stock: Only 1, ever | DMG 191`,
        `Robe of useful items (500gp) stock: Only 1, ever | DMG 195`,
        `Rope of climbing (500gp) stock: Only 1, ever | DMG 197`,
        `Sending stones (500gp) stock: Only 1 set, ever | DMG 199`,
        `Wind fan (500gp) stock: Only 1, ever | DMG 213`,
        `Additional items (varies) | DMG 146 Up to 5 items found on Magic Item Table F`,
        `Bag of beans (5,000gp) stock: Only 1, ever | DMG 152`,
        `Broom offlying (500gp) stock: Only 1, ever | DMG 156`,
        `Crystal ball (50,000gp) stock: Only 1, ever | DMG 159`,
        `Deck of illusions (500gp) stock: Only 1 set, ever | DMG 167`,
        `Figurine of wondrous power, ivory goats (5,000gp) stock: Only 1 set, ever | DMG 169`,
        `Figurine of wondrous power, onyx dog (5,000gp) stock: Only 1, ever | DMG 170`,
        `Portable hole (5,000gp) stock: Only ${rollDice(4)} ever | DMG 185`,
        `Ring of feather falling (500gp) stock: Only 1, ever | DMG 193`,
        `Ring of free action (5,000gp) stock: Only 1, ever | DMG 191`,
        `Ring of the ram (5,000gp) stock: Only 1, ever | DMG 197`,
        `Staff of charming (5,000gp) stock: Only 1, ever | DMG 201`,
        `Wand of magic missiles (5,000gp) stock: Only 1, ever | DMG 211`,
        `Wand of wonder (5,000gp) stock: Only 1, ever | DMG 212`,
        `Additional items (varies) | DMG 147 Up to 5 items found on Magic Item Table G`,
        `Animated shield (50,000gp) stock: Only 1, ever | DMG 151`,
        `Cloak of arachnida (50,000gp) stock: Only 1, ever | DMG 158`,
        `Dancing sword, any (50,000gp) stock: Only 1, ever | DMG 161`,
        `Nolzur's marvelous pigments (50,000gp) stock: Only 1, ever | DMG 183`,
        `Staff of fire (50,000gp) stock: Only 1, ever | DMG 201`,
        `Wand of the war mage +3 (50,000gp) stock: Only 1, ever | DMG 212`,
        `Additional items (varies) | DMG 148 Up to 5 items found on Magic Item Table H`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Artifact Dealer"
    magicItemsMerchant.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function mystical() {
    let magicCreaturesMerchant = [
        `Bit and bridle (2gp) stock: ${rollDice(4)*2} | PHB 157`,
        `Dire wolf (450gp) stock: ${rollDice(4)} | MM 321`,
        `Elk (60gp) stock: ${rollDice(4)} | MM 322`,
        `Feed, animal (5cp/day) stock: ${rollDice(4)*30} days | PHB 157`,
        `Flying snake (2gp) stock: ${rollDice(4)} | MM 322`,
        `Giant fire beetle (2gp) stock: ${rollDice(4)*2} | MM 325`,
        `Giant goat (300gp) stock: ${rollDice(4)} | MM 326`,
        `Giant lizard (350gp) stock: ${rollDice(4)} | MM 326`,
        `Giant wolf spider (400gp) stock: ${rollDice(4)} | MM 330`,
        `Saddle, exotic (60gp) stock: ${rollDice(4)+2} | PHB 157`,
        `Awakened shrub (25gp) stock: ${rollDice(4)} | MM 317`,
        `Blink dog (250gp) stock: ${rollDice(4)} | MM 318`,
        `Cockatrice (650gp) stock: ${rollDice(4)} | MM 42 Untamed`,
        `Dragon egg (750gp) stock: ${rollDice(4)-2} | Hatches with proper care after 90 days`,
        `Gelatinous cube (300gp) stock: ${rollDice(4)} | MM 242 Untamed`,
        `Giant bat (250gp) stock: ${rollDice(4)} | MM 323`,
        `Giant eagle (500gp) stock: ${rollDice(4)} | MM 324`,
        `Giant sea horse (500gp) stock: ${rollDice(4)} | MM 328 Only sold if adjacent to a body of water`,
        `Griffon (750gp) stock: ${rollDice(4)} | MM 174`,
        `Owlbear (750gp) stock: ${rollDice(4)} | MM 249 Untamed`,
        `Pegasus (750gp) stock: ${rollDice(4)} | MM 250`,
        `Pseudodragon (175gp) stock: ${rollDice(4)} | MM 254`,
        `Worg (300gp) stock: ${rollDice(4)} | MM 341`,
        `Basilisk (1,000gp) stock: ${rollDice(4)} | MM 24 Untamed`,
        `Bulette (1,500gp) stock: ${rollDice(4)} | MM 34 Untamed`,
        `Carrion crawler (800gp) stock: ${rollDice(4)} | MM 37 Untamed`,
        `Death dog (800gp) stock: ${rollDice(4)} | MM 321 Untamed`,
        `Displacer beast (1,250gp) stock: ${rollDice(4)} | MM 81 Untamed`,
        `Dragon wyrmling (2,500gp) stock: ${rollDice(4)-2} | MM 88-118 Untamed; may be of any color`,
        `Gorgon (1,500gp) stock: ${rollDice(4)-1} | MM 171 Untamed`,
        `Manticore (1,000gp) stock: ${rollDice(4)-1} | MM 213 Untamed`,
        `Mimic (800gp) stock: ${rollDice(4)} | MM 220 Untamed`,
        `Otyugh (1,250gp) stock: ${rollDice(4)} | MM 248 Untamed`,
        `Rust monster (800gp) stock: ${rollDice(4)} | MM 262 Untamed`,
        `Unicorn (1,750gp) stock: ${rollDice(4)-1} | MM 294 Untamed, except to those pure of heart`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Mystical Creature Dealer"
    magicCreaturesMerchant.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function necro() {
    let necromanticMerchant = [
        `Acid (25gp/vial) stock: ${rollDice(4)*5} vials | PHB 150`,
        `Arcane focus (varies) stock: ${rollDice(4)} | PHB 150 Prices are as listed in the PHB`,
        `Dust of dryness (250gp) stock: Only ${rollDice(4)}, ever | DMG 166`,
        `Candle (1cp) stock: ${rollDice(4)*10} | PHB 150 Comes in black, grey, white, or red`,
        `Chain (5gp/10ft) stock: ${rollDice(4)*20} feet PHB 150`,
        `Chalk (1cp/piece) stock: ${rollDice(4)*10} pieces | PHB 150 Comes in black, grey, white, or red`,
        `Component pouch (25gp) stock: ${rollDice(4)} | PHB 150`,
        `Corpse, dead (4gp) stock: ${rollDice(4)*4} | An intact corpse perfect for necromancy`,
        `Dagger, ritual (2gp) stock: ${rollDice(4)*2} | PHB 148 Has an oddly curved design`,
        `Flesh (1sp/lb.) stock: ${rollDice(4)*20} lbs. | Best not to ask...`,
        `Holy symbol (varies) stock: ${rollDice(4)} | PHB 150 Prices are as listed in the PHB`,
        `Hourglass (25gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Incense (1sp/block) stock: ${rollDice(4)*20} blocks | Thick, musky, and pungent`,
        `Lock (10gp) stock: ${rollDice(4)} | PHB 150`,
        `Manacles (2gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Poison, basic (100gp/vial) stock: ${rollDice(4)} vials | PHB 150 Injury; can inflict 1d4 poison damage`,
        `Shovel (2gp) stock: ${rollDice(4)*2} | PHB 150`,
        `Spell: Animate dead (90gp) stock: 3 spells/day | PHB 212 3rd level; dead follow your commands for a day`,
        `Spell: Gentle repose (40gp) stock: 3 spells/day | PHB 245 Stops decay in a corpse, prevents undeath`,
        `Spell: Raise dead (1,250gp) stock: 3 spells/day | PHB 270 Returns a dead corpse to life`,
        `Spell: Speak with dead (90gp) stock: 3 spells/day | PHB 277 Allows you to speak to one non-undead corpse`,
        `Spellbook, blank (50gp) stock: ${rollDice(4)} | PHB 150`,
        `Weaver's tools (1gp) stock: ${rollDice(4)} | PHB 154`,
        `Amulet of health (5,000gp) stock: Only 1, ever | DMG 150`,
        `Cloak of the bat (5,000gp) stock: Only 1, ever | DMG 159`,
        `Bottomless bag of bones (500gp) stock: Only 1, ever | Contains an unlimited number of corpses only for use as raised minions in necromancy spells`,
        `Mask, plague doctor (50gp) stock: ${rollDice(4)} | Durable leather, with a long beak`,
        `Mask, skull (45gp) stock: ${rollDice(4)} | Made of actual bone`,
        `Pipes of haunting (500gp) stock: Only 1, ever | DMG 185`,
        `Spell: Create undead (1,260gp) stock: 3 spells/day | PHB 229 6th level; dead follow your commands for a day`,
        `Spell: Resurrection (2,490gp) stock: 3 spells/day | PHB 272 More potent way of restoring the dead to life`,
        `Wand of fear (5,000gp) stock: Only 1, ever | DMG 210`,
        `Manual of golems, (50,000gp) flesh stock: Only 1, ever | DMG 180`,
        `Potion of longevity (25,000gp) stock: Only ${rollDice(4)}, ever | DMG 188 Reduces your age by 1d6 + 6 years, usually`,
        `Spell: Clone (2,840gp) stock: 3 spells/day | PHB 222 Safeguards against death after 120 days`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Necromantic Supplier"
    necromanticMerchant.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
}

function hellish() {
    let devilishMerchant = [
        [
            `Bag of holding (500gp) stock: Only ${rollDice(4)}, ever | DMG 153`,
            `Bag of tricks, tan (500gp) stock: Only 1, ever | DMG 154`,
            `Daern's instant fortress (5,000gp) stock: Only 1, ever | DMG 160`,
            `Iron bands of Bilarro (5,000gp) stock: Only 1, ever | DMG 177`,
            `Mace of terror (5,000gp) stock: Only 1, ever | DMG 180`,
            `Rod of rulership (5,000gp) stock: Only 1, ever | DMG 197`,
            `Sword of life stealing (5,000gp) stock: Only 1, ever | DMG 206`,
            `Wand of fireballs (5,000gp) stock: Only 1, ever | DMG 210`,
            `Any desired item (varies) stock: ${rollDice(4)} add. items | Item quality no greater than rare`,
            `Belt of giant strength, fire (50,000gp) stock: Only 1, ever | DMG 155`,
            `Demon armor (50,000gp) stock: Only 1, ever | DMG 167`,
            `Figurine of wondrous power, obsidian steed (50,000gp) stock: Only 1, ever | DMG 170`,
            `Ioun stone, intellect (50,000gp) stock: Only 1, ever | DMG 176`,
            `Any desired item (varies) stock: ${rollDice(4)} add. items | Item quality no greater than very rare`,
            `Warlock pact (50,000gp) stock: Unlimited | PHB 105 Grants 1st level of warlock class, Fiend patron`,
            `Instrument of the bards, ollamh harp (500,000gp) stock: Only 1, ever | DMG 176`,
            `Iron flask (500,000gp) stock: Only 1, ever | DMG 178 Your DM decides what is within the iron flask`,
            `Talisman of ultimate evil (500,000gp) stock: Only 1, ever | DMG 207`,
            `Any desired item (varies) stock: ${rollDice(4)} add. items | Whatever the purchaser desires, of any quality`,
        ],
        [
            `---||Doing a favor earns half off of one item, does not stack!||---`,
            `Dump a suspicious vial in a nearby well.`,
            `Eat whole a buzzing, wriggling, live horsefly.`,
            `Smear a pentagram of blood at a specific holy site.`,
            `Say a specific fiend's name into the mirror, thrice.`,
            `Loosen the wheels on a nearby wagon.`,
            `Kill a noble's pet, leave it where it will be found.`,
            `Convince a child a prize awaits in the wilderness.`,
            `Publicly set alight a specific holy book.`,
            `Remove the head and hands of a specific statue.`,
            `Steal a local relic, leave it in a feed trough.`,
            `Toss a bag of mice into the local mill.`,
            `Instigate a bloody fight between complete strangers.`,
            `Coat the inn's woodpile in lamp oil.`,
            `Set a specific bridge on fire.`,
            `Leave a slaughtered black goat in the town square.`,
            `Dig up a specific corpse, hide its parts around town.`,
            `Publicly accuse a priest of practicing dark magic.`,
            `Steal food from a specific poor family, throw it away.`,
            `Spread rumors of a married couple's infidelity.`,
        ],
    ]
    clear()
    document.getElementById("Title").innerHTML = "Needful Things Dealer"
    devilishMerchant[0].forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
    devilishMerchant[1].forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Trades").appendChild(li);
    });
}

function time() {
    let timelostMerchant = [
        `Calculator (60gp) stock: ${rollDice(4)} | Tech (2); performs mathematical functions`,
        `Electric torch (50gp) stock: ${rollDice(4)} | Tech (1)`,
        `Entertainment pad (150gp) stock: ${rollDice(4)} | Tech (3)`,
        `Energy cell (15gp/each) stock: ${rollDice(4)*4}| DMG 268`,
        `Sending stones (500gp) stock: Only 1 set, ever | DMG 199 Made of a strange, smooth, colored substance`,
        `Wristwatch (55gp) stock: Only 1, ever | Reliably tells the time of day, runs on motion`,
        `Bead of force (5,000gp/6)stock: Only 6, ever | DMG 154`,
        `Boots of levitation (5,000gp) stock: Only 1 set, ever | DMG 155`,
        `Cube of force (5,000 gp)stock: Only 1, ever | DMG 151`,
        `Goggles of night (5,000gp) stock: Only 1, ever | DMG 172`,
        `Grenade, fragmentation (300gp/each) stock: ${rollDice(4)*2} | DMG 268 Tech (2)`,
        `Grenade, smoke (250gp/each) stock: ${rollDice(4)*2} | DMG 268 Tech (2)`,
        `Jetpack (3,500gp) stock: Only 1, ever | Tech (4)`,
        `Laser pistol (3,000gp) stock: Only 1, ever | DMG 268 Tech (4)`,
        `Laser rifle (4,500gp) stock: Only 1, ever | DMG 268 Tech (4)`,
        `Antimatter rifle (6,500gp) stock: Only 1, ever | DMG 268 Tech (4)`,
        `Apparatus of Kwalish (500,000gp) stock: Only 1, ever | DMG 159`,
        `Cloak of invisibility (500,000gp) stock: Only 1, ever | DMG 158`,
        `Grenade launcher (5,500gp) stock: Only 1, ever | DMG 268 Tech (4)`,
        `Screwdriver, acoustic (1,250gp) stock: Only 1, ever | Tech (3); Grants adv. on thieves' tools checks`,
        `Tome of clear thought (50,000gp) stock: Only 1, ever | DMG 208 Title: "Introduction to Quantum Physics"`,
        `Tome of understanding (50,000gp)stock: Only 1, ever | DMG 209 Title: "Farmer's Almanac"`,
    ]
    clear()
    document.getElementById("Title").innerHTML = "Time-Lost Merchant"
    timelostMerchant.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("Inventory").appendChild(li);
    });
    document.getElementById("Trades").innerHTML = `Use the "Figuring Out Alien Tech" (DMG 268), and use the training downtime rules (PHB 187) for players to gain proficiency with the tools marked *TECH*!`
}
