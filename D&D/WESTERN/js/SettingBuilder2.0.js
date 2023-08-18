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
function variableEvent(Arg) {
    let chance = rollDice(100)
    if (chance < 90) {
        return ""
    } else {
        return Arg
    }
};
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
function reload() {
    location.reload()
};
function printArray(array) {
    for (i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
/*==================================================================================*/
/*-----------------------------Page Scripts Below-----------------------------------*/
/*==================================================================================*/


        //an interesting place -- place namer
    //things happening -- 
        // espionage, drought plague civil war -- randomizationw ithin the events
    //things happened-- choos formt he same table but int he past tense
    //things to do -- cultural interest, fun tourism examples 
//with interesting people
    //with multiple dimensions -- demographic information
                                // internal factions or conflict
                                // known for 
    // culture and beliefs,
        //religious aspect
        //cultural aspect
//in an interesting time
    //past
    //present
    //future
        //magic
        //technology
        //goelogy
        //enemies


 
        //Deck of inspiration:
        let modifyingimagery = [
            'sword in stone','wooden spike fence','pierced by spear','pawn','magical rings around a person','drinking horn','arrow through the head','power fist','broken arrow','blood recycle','poison bottle','horshoe','mushroom','genie lamp','skull and crossbones','dead trees','bone dagger','bloody sword','broken hatchet','torch','crowning a ruler','butterfly','gem','person frozen in ice','molten metal bucket','stone block','bell ringing','person running with bag of loot','cave entrance','morningstar','wand or staff with gem on top','winged boots','eyeball','four fingered claw','webs','box switch','crystals','arrow in the achilles','sword + lightning','portal gfate','book with skull','carnival tent','telepathy waves','sneaky person','protective shield','candle tray','cloak','hynosis','drama masks','swords and shield','razor blade','farmer','horseman','plate helm','wizard hat','dragon','goblin','no hearing','stairs','wizard','undead king','frankenstein','electric orb','couatl','snake and seedling','acrobat','meditation','blood goblet','magic tree','foor bite','brain','coins','castle forfeit flag','hourglass','flag','werewolf','spirder','nose','dagger','smiling burning man','devil pitchfork','shield with icon','potion','cogs','battering ram','angry mob','royalty on the throne','telepathy','behind bars','circular saw','gravestone','dungeon window','keyring','wall','hammer and anvil','knife into scroll','ancient sword in stone','flaming arrow','evil book','crescent moon over mountains','spiked spiral','temple entrance','torchlit archway','fireplace','big fish eating little fish','lightning above large house',
            'lighthouse','whisper','nature arrow','stabbed in th eback','heavy boots','caster in a graveyard','castle on a hill','collesium','temple with stained glass','altar on a hill','mine entrance','tropical island','portal','guards blocking the way','fence','foot bit by fish','seiged castle','fortified castle','water powered building','bull eating grass','arrow through the heart','castel surrender','prison cage','campfire','binoculars','ace of spades','magical rock','snake','trojan horse','broken pillars','solid door','gravestones','mine and minecart','wheat','multi-front war map','tavern','map','skull','throwing knives','spiderwebs','flame circle','maze','exit path','sticky floor','trap hole','eldritch tentacles','wine glass','boulder trap','mimic','trap','tripwire','net', 'ghost','shark','vault','moon over mountains','wolf moon','waterfall','plague doctor','viking ship','viking','pirate skul','crown','hooded figure','ogre','grim reaper','tent','compass','shhh','herb branch','hydra','person with crown','tank conquered city','crescent moon over mountains','hooded face','crows nesto n ship','zombie','vampire ankle biter','ghost','fire elemental','ghostface','soldier on horseback','direction signs','candle on finger tray','crystal','butterfly knife','pawprint','treasure chest','bounty poster','summoning pentagram'
            ]
        let modifyingIdeas =[
            'shocking','shining','lucky','charged','banished','unfinished','fake','stolen','mysterious','feral','nightmare','dirty','worthelss','silent','arcane','ornate','damaged','glowing','holy','iron','ancient','cosmic','dwarven','demonic','wild','golden','steel','rotting','evil','tribal','blinding','savage','runic','concealed','flaming','vampiric','bloodthirsty','psychic','chaotic','slimy','heretical','fey','acid','bloody','desolate','awakened','black','incredible','gilded','artisinal','healing','copper','blazing','cunning','blessed','slithering','celestial','scaled','heavy','pristine','jeweled','singing','shadow','light','dark','indestructable','elvish','hidden','rusty','great','frozen','chilling','buried','redeeming','fake','mutated','silver','bleeding','diabolic','inspiring','natural','terrifying','ghostly','erratic','restrained','organized','tough','fey','flight','grappler','hellish','drone','eerie','elemental','empowered','infamous','nervous','meek','zealous','aggressive','ambusher','amorphous','avoidance','berzerk','brave','bound','brute','corrosive','cunning','darkvision','displacer','deceptive','devious','envious','martyr','deranged','sadist','fixated','anger','amphibious','ambush','brave','corrupted','brash','cautious','ethereal','evasion','fanatical','feral','remorseless','intolerant','oppressive','fierce','vines','water','weapons','well', 'runes','lever','secret door','spiderwebs','flood','forge','fog','gas',
            'acid','barrels','armory','cell','chasm','corpse','chest','fire','ice','lava','lock','mold','altar','barricade','aura','blood','book','collapse','cage','chamber','light','gate','stairwell','shrine','passage','pit','plant','rubble', 'supplies','trap','tracks','treasure','demonic','filthy','mysterious','destroyed','revolting','immaterial','rusted','defenseless','elaborate','whimsical','frigid','vibrant','empty','natural','blessed','historical','evil','mystical','hidden','wicked','unused','ominous','shimmering','looming','cleansed','fortified','fragile','shadowy','luminous','menacing','prestigious','menacing','quaint','remote','withered','rough','defended','serene','outlandish','pure','messy','bountiful','occult','dense','ancient','infested','abandoned','overgrown','burnt','crubling','vast','foul','holy','protected','strange','desolate','isolated','planar','inaccessible','unsightly','exposed','arcane','frozen','royal','lush','pungent','insignificant','bustling','thorny','haunted','sacred','bright','lost','mesmerizing','harmonious','nightmarish','peaceful','fertile','perilous','dark','settled','savage','lunar','abundant','watched','flooded','unholy','blighted','hallowed','enchanted','pristine','dreary','wild','seedy','calm','neat','spacious','tortured','wealthy','despicable','grounded','likeable','devout','polite','curious','elegant','sickly','daring','shameless','naive','optimistic','cautious','weak','reserved','frank','gentle','athletic','quiet','mischevious','stubborn','nervous','determined','intimidating','loyal','sneaky','tough','creative','ambitious','charming','serious','independent','quick','kind','pensive','reckless','idealistic','clever','maniac','jaded','violent','practical','honorable','sociable','generous','private','funny','brave','lazy','summon','trap','uncover','unleash','redeem','smuggle','resurrect','steal','keep','persuade','learn','plan','plant','possess','poison','protect','destroy','resolve','map','wish','explore','resurrect','avoid','abandon','demand','remove','surrender','breach','search','secure','release','construct','haunt','impersonate','heal','infiltrate','escape','frame','find','grow','corrupt','empower','create','enchant','banish','betray','blackmail','convert','scheme','weaken','gather','restore','guide','recover','forge','conquer','distratc','transform','raid','evade','ascend','avenge','assassinate','balance'
            ]
        let themeImagery = ['Ancient','blasphemous','bleak','bruning','corrupted','crystaline','cursed','elemental','flooded','fortified','hallowed','haunted','infested','overgrown','putrid','ruined','sacred','shadowy','tranquil','wild','survival','history','destiny','innocence','fear','time','peace','balance','protection','curse','greed','resource','community','calamity','magic','religion','nature','apocalypse','revenge','secrets']


        //Events
        let cityEvent  = ['Riot', 'Siege', 'Cult Gains Influence','Factions are Figthing', 'Wizard tower explodes', 'Royal Precession','Seasonal Celebration','Alarms are ringing','Alchemist paying for reagent retrieval','Exotic goods shipment arrives','Major heist is underway','Wizard college holding annual trials','Execution at dawn','Bounties posted everywhere','Serial killer stalking the streets','City watch is aggressively searching','Revolutionary sentiment spreading','Tournament is being announced','Travelling carnival','People are dissapearing'] 
        let dungeonEvents = ['NPC driven mad','Blocked passage','Terrifying soudns ahead','hostages begging for help','Enemy surprise','unexpected Ally','Suspicious NPC asking for help','Magical lures','bloody steps gettign fresher','slime runs down the wall','vulnerable enemy','time and space anomalies','disgusting smells','door slamming','doors slowly closing ahead','lights ahead','chanting in the distance','shadows begin to stir','enemy taunts form shadows','lumberign steps approach']
        let wildEvents = ['abandoned camp','swarm of animals ahead','bandits offer a deal','wounded desperate beast','earthquake','hazardous water crossing','being stalked','armed guards demand tithe','druidic ritual taking place','notorous bounty subject in the area','massive storm blowing in','travelling emrchant offers soemthing','mysterious fog confuses navigation','wildfire closing in','flash flood','mysterious fungi spreadin rapidly','mystical pool luring into the waters','darkness sooner than expected','wildlife is abnormal, mutated','nomadic NPC asks for help']
        let humanEvents = ['wanted posters','market day','festival','holy day','coronation','attack','siege','disease','rumors','execution']
        let settlementProblems = ['war','crime','isolation','discovery','sickness','dissent','food','water','natural disaster','leader','cult','monsters','mystery','economic','corruption','tradition','resource','occupation','curse','invasion']
        let discovery = ['blight','portal','hideout','sign','presence','lair','map','signs of battle','tracks','ruins','grave','supplies','bones','witness','message','trap','hidden path','source','writings','warnings']
        function findDisaster() {
            let type = [
            "an invasion, whether in the form of bandits, a foreign foe or even something as pedestrian as locusts or weevils", "plague, deadly enough that healing magic has no means to arrest it", "a natural disaster, such as an earthquake, tsunami or volcanic eruption", "climate related disaster, such as an unusually long and intense rainy season, or a parching drought", "a weather related event, such as a tornado, hurricane or wild fire", "an explicitly magical event, such as a sourceless tune which forces listeners to dance or the dead beginning to rise from their graves", "blight and pestilence it leads to the the death of any crops and livestock which are afflicted", "a bizarre and fortean event, such as a rain of frogs or the waters within a river or lake turning to blood",
            ]
        
            let cause = [
            "of a random accident, no one in particular is responsible", "the gods themselves have been offended a sacrifice was not made, a sacred animal or a priest was murdered, or someone has committed some other terrible transgression further recompense may be necessary", "a dark ritual or curse is targeting the community the calamity may the goal or merely a side-effect this may only be a prelude", "a prophecy has come to pass - it was written in the ancient scrolls - and you were fools to have ignored them",
            ]
        
            let damage =[
            "only a few families about the size of a city block", "the equivalent of a small town or village", "a city, or several villages or towns", "an entire region or province",  "the entirety of a country, empire or kingdom",
            ]
        
            let impact =[
            "nonchalance, this event is a regular occurrence, to the point where most folk pay it no mind", "that a doomsayer has appeared, promising to solve what vexes the community if they merely commit a few unspeakable acts people are listening", "mild panic, there are runs on stores, hoarding and small bouts of interpersonal violence, but no breakdown in law and order", "severe panic -  looting, burning, combat in the streets", "open revolution - the followers are blaming the leaders, and are planning on holding them responsible through violent means", "a mass exodus - everyone is fleing the area as fear seizes them", "resignation and apathy, the disaster seems inevitable so they no longer see the point in struggling",
            ]
            let output = `This community is dealing with a disaster, ${searchArray(type)}, because ${searchArray(cause)}. This has impacted ${searchArray(damage)}, the local reaction is ${searchArray(impact)}.`
            document.getElementById("details").innerHTML = output
        };

        // Inhabitants
        let inhabitants = ['humans','beasts','humaniods','dragon','monster','undead','demons','giant beast','swarm','cult','bandits','necromancer','assasins','giants','devils','golems','celestials','deity','abandoned']
        function findHoliday(){
            let type = [
            "religious, explicitly performing rituals and celebrations in regards to a faith lasting", "civic, sponsored by or in celebration of the prevailing government or society", "cultural, a sort of blend of civic and religious holidays, cultural celebrations tend towards jovial atmospheres and often draw upon local folklore or legend, celebrations go on for ", "commemoration, set aside for mourning or celebrating some grand event", "celestial, celebrating or noting something like an eclipse, lunar cycle, comet or similarly sidereal event", "seasonal, focusing on the passage of one set of weather patterns for another, festivities last", "environmental, coinciding with the return of some plant or animal to the area, celebrations last"
            ]
            let observance =[
            "are part of a particular faith, sect or culture", "are part of a particular faith, sect or culture", "are part of a particular faith, sect or culture", "are part of a small region such as a few villages or towns, perhaps even a city", "are part of a large region such as a kingdom or an empire", "are members of a certain profession or guild", "are members of a certain race or ethnicity", "are members of a certain race or ethnicity",
            ]
            let time =[
            "only a few hours, such as during the daylight hours or through the night", "an entire day", "an entire day", "an entire day", "an entire day", "several days", "an entire week", "a month",
            ]    
            let practice = [
            "public feasting, drinking and parties", "public feasting, drinking and parties", "people gathering for stories, speeches, songs and other forms of public performance", "people gathering for stories, speeches, songs and other forms of public performance", "a procession, from a civilized area to a ritual site", "somber rituals, observances and sacrifices (whether they be living creatures or otherwise)", "a ritualized competition or combat that could range from bloodless sport to free-for-alls which result in the deaths of one or more participants", "certain norms and taboos are meant to be challenged during this festival; perhaps folk dress opposite to their normal or debts may be forced to be forgiven",
            ]
            let output = `There is a local holiday, ${searchArray(type)} for ${searchArray(time)}. Celebrants consist of those who ${searchArray(observance)}. The celeration typically involves ${searchArray(practice)}.`
            document.getElementById("details").innerHTML = output
        };
        

        //Quest
        let objective = ['capture','collect','purge','raid','ritual','destroy','guard','revive','discover','hide','worship','grow','deliver','ransom','repair','forge','purify','corrupt','sacrifice','summon','kill','rescue','escape','stop','clear','find','return','defend','investigate','chase','infiltrate','survive','escort','map','recover','negotiate']
        let method = ['stealth','violence','politics','magic','deceit','minions','chaos','bribery','misdirection','blackmail','fanatacism','manipulation']
        let asset = ['army','church','clan','cult','deity','government','weapon','wealth','popularity','spies','magic item','hidden identity']
        let skillNecessary = ['acrobatics (dex)','animal handling (wis)','arcana (int)','athletics (str)','deception (cha)','history (int)','insight (wis)','intimidation (cha)','investigation (int)','medicine (wis)','nature (int)','perception (wis)','performance (cha)','persuasion (cha)','religion (int)','slight of hand (dex)','stealth (dex)','survival (wis)','alchemy','brewing','calligraphy','cartography','cobbling','cooking','glassblowing','jeweling','leatherworking','masonry','painting','pottery','smithing','tinkering','weaving','woodcarving','navigating','thievery',`Gaming ${searchArray(['dice','dragonchess','playing card set','three card ante'])}`, `Music ${searchArray(musicalInstruments)}`, 'vehicles']
        let obstacle = ['war','crime','isolation','discovery','sickness','dissent','wistance','water','natural disaster','leader','cult','monsters','mystery','economic','corruption','tradition','resource','ocupation','curse','invasion']
        let characterFocus = ['villain','royalty','merchant','patron','monster','criminal','dragon','gang','cult','demon','assasin','shadowy figure','general','priest','wizard','leader','deity','party member','ally','unknown']
        let complications = ['ambush','interference','betrayal','attention','resources','captured','bribes','curse','diversion','framed','hostage','morality','lost','omen','opportunity','reversal','information','time','trap','law']
        let drives = ['find virtue','show mercy','reveal truth','defeat enemy','sacrifice self','make peace','grant freedom','end suffering','reclaim nature','remove threat','protect weak','gain power','give hope','cleanse evil','defy tyrant','help ally','solve mystery','find artifact','clear name','execute plan']
        let hexcrawl = ['road','ambush','river','bandits','woods','chase','storm','monster','mountain','supplies','discovery','wildlife','settlement','inn','cave','fortress','NPC','job opportunity','patrol','dungeon']
        let hooks = ['prevent cataclysm','uncover plot','find relic','stop monster','solve crime','investigate clue','clear evil','save captured','exorcise haunting','protect weak','explore land','fix mistake','infiltrate group','research place','collect resource','deliver item','learn secret','prove worth','ascend to pwoer','become a martyr']
        let mysteries= ['missing','death','haunting','phenomena','stolen','origin','change','history','lost','serial']
        let clue = ['clothing','item','note','sound','pissing page','blood','eyewitness','being followed','smell','tracks']
        let objectFocus =['artifact','ship','bomb','book','coin','crown','armor','name','forgery','evidence','invention','stone','key','disguise','map','portal','spell','cure','poison','weapon']
        let plotTwists = ['diversion','betrayal','trap','secret connection','true identity','real enemy','important death','disappearance','time runs out','failure','new threat','enemy joins team','dilemma','sacrifice','escalation','blackmail','mystery','tables turned','discovery','opporunity']
        let rewards = ['money','key','knowledge','peace','nobility','armed force','map','freedom','ally','fame','weapon','spell','healing','trust','land','armor','ring','magic item','power','book']
        let scenes = ['combat','social','travel','exploration','puzzle','downtime']
        let events = ['interruption','discovery','sign of troube','skill test','hostility','choice']
        let quest = ['thwart','deliver','collect','discover','assasinate','save','trap','steal','defend','negotiate','aid','conceal','escort','convince','find','reveal','track','invetsigate','cleanse','destroy']


        //traps
        let trapTrigger = ['switch','wire','magic barrier','pressure','light','sound','opening','touch','movement','time','swallow','proximity','breaking','lever','release','weight','closing','breath','temperature','lock']
        let trapEffect = ['charm','curse','alarm','spikes','Acid','Ice','fire','pit','beast','skeletons','net','crumbling','cage','flood','gas','spell','trap door','darts','pendulum','chute']


        //human locations
        let setting = ['castle','cave','dungeon','grotto','hive','lair','mansion','maze','mine','monastery','necropolis','prison','ruins','sanctum','sewer','temple','tomb','tower','vault','woods']
        let rooms = ['pit','chambers','great hall','maze','stairs','armory','dining','shrine','mine shaft','prison','courtyard','crypt','forge','cavern','fountain','laboratory','vault','workshop','stables','throne room']
        let buildings = ['alchemist','bank','barracks','black market','brewety','tower','cistern','dump','artist','granary','graveyard','herbalist','house','prison','library','luxury goods','magic shop','mansion','general store','shrine','park','mill','smith','stable','tavern','watchtower','academy','college','garrison','guildhall','hospital','market','church','museum','temple','theater','town hall','arena','castle','docks']
        let shops = ['books','food','butcher','stables','curio','general store','calligrapher','blacksmith','tanner','cartographer','baker','spice trader','locksmith','mason','fish market','physician','banker','barber','arcane supplies','alchemist']
        let worldLocations = ['graveyard','tomb','cave','lair','sewers','cliffs','mine','peak','canyon','citadel','castle','keep','sanctuary','temple','spire','tower','lake','shore','bridge','wall','garrison','hut','watchtower','forest','garden','catacomb','labyrinth','vault','court','inn','docks','college','monastery','market','camp','prison','road','theater','shrine','church']
        let urbanLocations = ['tavern','inn','blackmsith','general store','alchemist','college','temple','library','bank','barracks','carpenter','stables','shipyard','theater','baker','butcher','court','town square','cartographer','doctor']
        let region =['plains','swamp','mountains','desert','islands','forest','valley','riverlands','tundra','coastal','grasslands','jungle','marshlands','subterranian','hills','tropical','canyon','prairie','underwater','city']
        let settlements = ['city','village','port','monastery','criminal hive','castle','abandoned','capital','ruined','college','fort','trade hub','commune','hideout','town','hold','hamlet','metropolis','crossroads','outpost']
        let questLocations = ['arena','bank','barracks','basement','battlefield','camp','canyon','castle','cave','church','city','cove','docks','farm','forest','graveyard','grove','hideout','inn','island','keep','lab','library','market','mountain','pit','prison','river','road','ruins','sanctuary','sewers','shrine','slums','swamp','theater','tomb','tower','underwater','village']

        let locationPrime = ['grey','deep','high','frost','last','broken','castaway','first','bear','great','wolf','elder','stone','timber','black','lost','low','bleak','wood','thorn']
        let locationChron = ['watch','wood','ridge','stead','barrow','brook','rock','fall','haven','reach','helm','bay','moor','spire','harbor','valley','point','peak','glen','keep']
        function findTown() {
            function townName() {
                let adjective = [
                    'Red','White','Blue','Green','Black','Gold','High','Low','Deep','Fair','Well','Ever','Copper','Gold','Silver','Electrum','Adamantine','Platinum','Broken','Hidden','Blood','Crystal','Shadow', 'Dead', 'Fort','Rocky','Tired','First','Sunny','Bad','Proud','Secret','Diamond','Amethyst','Bitter','Onyx','Dragon','Dire','Marble','Ancestral','Ancient','Arcane','Burning','Cursed','Dark','Divine','Eternal','Forbidden','Forgotten','Free','Fey','Holy','Iron','Ivory','Peace','Trade','Walled','Smoky','Swamp','Twilight', 'Warrior','Sage','Wizard','Rogue','Dawn','Dusk','Morning','Evening'
                       ]
                let direction = [
                    'North','South','East','West'
                ]
                let noun = [
                    'Wood','Sun','Willow','Oak','Rock','Point','Pine','Birch','Lock','Elder','Rose','Hills','Moon','Song','Wind','Mist','Leaf','Dust','Stone','Fire','Boulder','Breach','Crest','Crown','Hollow','River','Falls','Path','Mouth','Summit','Tower','Watch','Wall','Vault','Will','Water','Tree','Hill','Wedge','Ring','Fall','Sand','Stop','Fate','March','Fist','Arch','Call','Crossing','Embrace','Descent','Hunt','Peak','Road','Fort','Heart'
                ]
                let post = [
                    'Village','Town','Cove','Glen','Rest','Square','Bluff','Bay','Haven','Ridge','Field','Gate','Lagoon','Bay','Grove','Foothills','Pass','Hamlet','Crossroads','Station','Hearth'
                ]
                let pre = [
                    'Old ','New '
                ]
        
            let templates = [
                `${searchArray(adjective)} ${searchArray(noun)}`,
                `${searchArray(noun)} ${searchArray(noun)}`,
                `${searchArray(direction)} ${searchArray(noun)}`,
                `${searchArray(direction)} ${searchArray(noun)}${searchArray(noun).toLowerCase()}`,
                `${searchArray(noun)}${searchArray(noun).toLowerCase()}`,
                `${searchArray(direction)} ${searchArray(noun)}${searchArray(noun).toLowerCase()} ${searchArray(post)}`,
                `${searchArray(direction)} ${searchArray(noun)} ${searchArray(post)}`,
                `${searchArray(adjective)} ${searchArray(noun)} ${searchArray(post)}`,
                `${searchArray(noun)} ${searchArray(post)}`,
                `${searchArray(pre)} ${searchArray(adjective)} ${searchArray(noun)}`,
                `${searchArray(pre)} ${searchArray(noun)} ${searchArray(noun)}`,
                `${searchArray(pre)} ${searchArray(direction)} ${searchArray(noun)}`,
                `${searchArray(pre)} ${searchArray(direction)} ${searchArray(noun)}${searchArray(noun).toLowerCase()}`,
                `${searchArray(pre)} ${searchArray(noun)}${searchArray(noun).toLowerCase()}`,
                `${searchArray(pre)} ${searchArray(direction)} ${searchArray(noun)}${searchArray(noun).toLowerCase()} ${searchArray(post)}`,
                `${searchArray(pre)} ${searchArray(direction)} ${searchArray(noun)} ${searchArray(post)}`,
                `${searchArray(pre)} ${searchArray(adjective)} ${searchArray(noun)} ${searchArray(post)}`,
                `${searchArray(pre)} ${searchArray(noun)} ${searchArray(post)}`
            ]
            return searchArray(templates)
            }
        
            let statue = [
                `of the town's founder`, 'of a hero','of a diety','of an unknown person','of a dragon','of a horseman'
            ]
            
            function tavernName() {
        
                function tavernNamer() {
                    let posts = ["Inn", "Tavern", "Bed and Breakfast", "Lodge", "Roadhouse", "Saloon", "Lounge", "Watering Hole", "Pub", "Taphouse", "Tavern & Inn", "Groghouse", "Ale Garden", "Canteen", "Rest House", ]
                    let adjective = ['Airborne', 'Smelly', 'Slouching', 'Giddy', 'Brazen', 'Bawdy', 'Hobbled', 'Wrinkled', 'Grim', 'Silent', 'Broken', 'Happy', 'Sunken', 'Quiet ', 'Trodden', 'Headless', 'Burning', 'Squawking', 'Toothy', 'Hungry', 'Mighty', 'Frisky', 'Staggering', 'Gutted', 'Peckish', 'Thirsty', 'Artful', 'Rare', 'Steamy', 'Drunk', 'Glorious', 'Crooked', 'Blushing', 'Insolent', 'Enthusiastic', 'Joyful', 'Surprising', 'Scorned', 'Shameful', 'Romantic', 'Wise', 'Sweet', 'Surly', 'Soothing', 'Reverent', 'Coarse', 'Artificial', 'Clumsy', 'Clever', 'Deaf', 'Blind', 'Paralyzed', 'Prone', 'Restrained', 'Unconscious', 'Invisible', 'Petrified', 'Poisoned', 'Charmed', 'Frightened', 'Grappled', 'Acrobatic', 'Dextrous', 'Intelligent', 'Strong', 'Athletic', 'Deceitful', 'Charismatic', 'Insightful', 'Intimidating', 'Observant', 'Natural', 'Perceptive', 'Performing', 'Persuasive', 'Stealthy', 'Soft', 'Dirty', 'Dangerous', 'Deadly', 'Hidden', 'Useful', 'Dashing', 'Alert', 'Brave', 'Large', 'Tiny', 'Wicked', 'Tricky', 'Mysterious', 'Kind', 'Handsome', 'Fresh', 'Frantic', 'Foolish', 'Adorable', 'Clueless', 'Cruel', 'Elegant', 'Friendly', 'Laughing', 'Lost', 'Sleepless', 'Salty', 'Gnashing', 'Winking', 'Smiling', 'Waving', 'Ugly', 'Old', 'New', `Same ol'`, 'Wealthy', 'Bad', 'Sleeping', 'Bright', 'Shiny', 'Hairy', 'Magic', 'Burning', 'Drunken', 'Tipsy', 'Quiet', 'Devout', 'Chivalrous', 'Ancient', 'Lucky', 'Busy', 'Fragile', 'Cloudy', 'Smooth', 'Creepy', 'Curious', 'Grotesque', 'Prickly', 'Poor', 'Putrid', 'Puzzled', 'Obnoxious', 'Fierce', 'Fancy', 'Faithful', 'Magnificent', 'Enchanting', 'Eager', 'Easy', 'Innocent', 'Determined', 'Horrible', 'Wide-Eyed', 'Victorious', 'Uptight', 'Unusual', 'Troubled', 'Thankful', 'Terrible', 'Tame', 'Talented', 'Strange', 'Spotless', 'Shy', 'Repulsive', 'Quaint', 'Cursed', 'Blessed', "Copper", "Gold", "Electrum", "Platinum", "Silver", "Ruby", "Sapphire", "Emerald", "Jade", "Opal", "Garnet", "Diamond", "Coral", "Moonstone", "Pearl", "Amber", "Ivory", "Obsidian", ]
                    let verb = ["Attack", "Run", "Rest", "Dive", "Strike", "Break", "Fall", "Point", "Recall", "Stand", "Walk", "Watch", "Wait", "Reply", "Request", "Delight", "Challenge", "Dream", "Guide", "Hunt", "Embrace", "Knot", "Jump", "Place", "Order", "Race", "Tap", "Yawn", "Wink", "Wash", "Signal", "Turn", "Bow", "Leap", "March", "Design", "Slight", "Display", "Fight", "Draft", "Code", "Exchange", "Drink", "Curse", "Battle", "Command", "Lie", "Boast", "Itch", "Kiss", "Guess", "Flight", "Doubt", "Demand", "Attempt", "Arrangement", "Climb", "Call", "Laugh", "Stack"]
                    let noun = [
                        ['Guy', 'Gal', 'Abbot', 'Refugee', 'Acolyte', 'Archmage', 'Assassin', 'Bandit', 'Berserker', 'Commoner', 'Cultist', 'Fanatic', 'Gladiator', 'Mage', 'Preist', 'Scout', 'Spy', 'Thug', 'Veteran', 'Dutchess', 'Paladin', 'Farmer', 'Seaman', 'Knight', 'Scholar', 'Seadog', 'Jester', 'Noble', 'King', 'Count', 'Duke', 'Emperor', 'Thief', 'Sailor', 'Farmer', 'Soldier', 'Mercenary', 'Priest', 'Mage', 'Scholar', 'Beggar', 'Bard', 'Guard', 'Drunk', 'Wench', 'Knight', 'Merchant', 'Smuggler', 'Fool', 'Druid', 'Witch', 'Traveler', 'Fisherman', 'Lady', 'Harlot', 'Bounty Hunter', 'Gardener', 'Gambler', 'Prince', 'Princess', 'Brother', 'Father', 'Sister', 'Mother', 'Pirate', 'Journeyman', 'Chieftain', 'Lord', 'Miller', 'Archer', 'Crossbowman', 'Lumberjack', 'Miner', 'Hunter', 'Villager', 'Settler', 'Butcher', 'Oracle', 'Pilgrim', 'Courier', 'Hero', 'Necromancer', 'Sorcerer', 'Wizard', 'Barbarian', 'Ranger', 'Fighter', 'Monk', 'Warlock', 'Summoner', 'Arcanist', 'Blood Hunter', 'Cleric', 'Rogue', 'Artificer', 'Outlander', 'Exile', ],
                        ['Swamp', 'Mire', 'End', 'Bridge', 'Gate', 'Road', 'Solace', 'Haven', 'Rest', 'Paradise', 'Fort', 'House', 'Home', 'Venture', 'Joint', 'Hut', 'Repose', 'Keep', 'Garden', 'Room', 'Sanctum', 'Retreat', 'Asylum', 'Hideaway', 'Refuge', 'Shelter', 'Haunt', 'Shack', 'Den', 'Clearing', 'Dungeon', 'Castle', 'Cottage', 'Dungeon', 'Field', 'Camp', 'Lean-To', 'Mountain', 'Cave', 'Town', 'City', 'Lake', 'Pond', 'Lair', 'Chamber', 'Hovel', 'Stall', ],
                        ['Whistle', 'Anchor', 'Bench', 'Bramble', 'Nail', 'Scale', 'Bugle', 'Keystone', 'Blight', 'Hook', 'Tree', 'Flower', 'Drum', 'Buckle', 'Chair', 'Table', 'Spoon', 'Fork', 'Axe', 'Sword', 'Shield', 'Armor', 'Bag', 'Door', 'Stash', 'Bed', 'Bunk', 'Bedroll', 'Barrel', 'Keg', 'Crate', 'Box', 'Pot', 'Vial', 'Arrow', 'Broom', 'Shovel', 'Pillow', 'Hearth', 'Candle', 'Lantern', 'Mug', 'Cup', 'Tankard', 'Bottle', 'Plate', 'Plow', 'Pot', 'Pan', 'Lamp', 'Wagon', 'Spoke', 'Rug', 'Hammer', 'Anvil', 'Forge', 'Goblet', 'Chest', 'Wardrobe', 'Cellar', 'Beer', 'Ale', 'Mead', 'Wine', 'Vodka', 'Feather', 'Oar', 'Brandy', 'Cask', 'Harp', 'Lute', 'Necklace', 'Bracelet', 'Comb', 'Mantle', 'Crown', 'Ring', 'Oil', 'Potion', 'Gem', 'Scroll', 'Wand', 'Bead', 'Horseshoe', 'Pike', 'Bow', 'Slippers', 'Trident', 'Brooch', 'Amulet', 'Pipe', 'Figurine', 'Deck', 'Circlet', 'Fan', 'Boots', 'Quiver', 'Helm', 'Gloves', 'Belt', 'Cape', 'Dagger', 'Shackles', 'Horn', 'Staff', 'Book', 'Wings', 'Bands', 'Crystal Ball', 'Carpet', 'Cask', 'Manual', 'Tome', 'Flask', 'Treasure', 'Map', 'Artifact', 'Trap', 'Dart', 'Javelin', 'Spear', 'Halberd', 'Hoard', 'Key', 'Stone', 'Talisman', 'Scimitar', 'Apparatus', 'Bracers', 'Bowl', 'Chime', 'Decanter', 'Card', 'Mail', 'Elixer', 'Boat', 'Ship', 'Hat', 'Clothes', 'Headband', 'Haversack', 'Mirror', 'Mace', 'Philter', 'Periapt', 'Robe', 'Rope', 'Saddle', 'Glue', 'Well', 'Trinket', 'Statue', 'Hankercheif', 'Locket', 'Bone', 'Skull', 'Sickle'],
                        ['Aarakocra', 'Aboleth', 'Angel', 'Animated Object', 'Animated Weapon', 'Ankheg', 'Azer', 'Banshee', 'Basilisk', 'Behir', 'Beholder', 'Blight', 'Bugbear', 'Bulette', 'Bullywug', 'Cambion', 'Carrion Crawler', 'Centaur', 'Chimera', 'Chuul', 'Cloaker', 'Cockatrice', 'Couatl', 'Crawling Claw', 'Cyclops', 'Darkmantle', 'Death Knight', 'Demilich', 'Demon', 'Devil', 'Dinosaur', 'Displacer Beast', 'Doppleganger', 'Dracolich', 'Shadow Dragon', 'Dragon', 'Dragon Turtle', 'Drider', 'Dryad', 'Duergar', 'Elemental', 'Empyrean', 'Ettercap', 'Ettin', 'Faerie Dragon', 'Flameskull', 'Flumph', 'Fomorian', 'Fungi', 'Galeb Duhr', 'Gargoyle', 'Genie', 'Ghost', 'Giant', 'Gibbering Mouther', 'Gith', 'Gnoll', 'Goblin', 'Golem', 'Gorgon', 'Grell', 'Grick', 'Griffon', 'Grimlock', 'Hag', 'Half Dragon', 'Harpy', 'Hell Hound', 'Helmed Horror', 'Hippogriph', 'Hobgoblin', 'Homunculus', 'Hook Horror', 'Hydra', 'Intellect Devourer', 'Invisible Stalker', 'Jakalwere', 'Kenku', 'Kobold', 'Kraken', 'Kuo-Toa', 'Lamia', 'Lich', 'Lizardfolk', 'Lycanthrope', 'Magmin', 'Manticore', 'Medusa', 'Mephits', 'Merfolk', 'Merrow', 'Mimic', 'Mind Flayer', 'Minotaur', 'Modron', 'Mummie', 'Myconid', 'Naga', 'Nightmare', 'Nothic', 'Ogre', 'Oni', 'Ooze', 'Orc', 'Otyugh', 'Owlbear', 'Pegasus', 'Peryton', 'Piercer', 'Pixie', 'Psuedodragon', 'Purple Worm', 'Quaggoth', 'Rakshasa', 'Remorhazes', 'Revenant', 'Roc', 'Roper', 'Rust Monster', 
                        'Sahuagin', 'Salamander', 'Satyr', 'Scarecrow', 'Shadow', 'Shambling Mound', 'Shield Guardian', 'Skeleton', 'Slaadi', 'Specter', 'Sphinx', 'Sprite', 'Stirge', 'Succubus', 'Incubus', 'Terrasque', 'Thri-kreen', 'Treant', 'Troglodyte', 'Troll', 'Umber Hulk', 'Unicorn', 'Vampire', 'Water Weird', 'Wight', `Will-o'-Wisp`, 'Wraith', 'Wyvern', 'Xorn', 'Yeti', 'Yuan-ti', 'Yugoloth', 'Zombie', 'Ape', 'Awakened Tree', 'Awakened Shrub', 'Axe Beak', 'Baboon', 'Badger', 'Bat', 'Black Bear', 'Blink Dog', 'Blood Hawk', 'Boar', 'Brown Bear', 'Camel', 'Cat', 'Constrictor Snake', 'Crab', 'Crocodile', 'Death Dog', 'Deer', 'Dire Wolf', 'Draft Horse', 'Eagle', 'Elephant', 'Elk', 'Flying Snake', 'Frog', 'Giant Ape', 'Giant Badger', 'Giant Bat', 'Giant Boar', 'Giant Centipede', 'Giant Constrictor Snake', 'Giant Crab', 'Giant Crocodile', 'Giant Eagle', 'Giant Elk', 'Giant Fire Beetle', 'Giant Frog', 'Giant Goat', 'Giant Hyena', 'Giant Lizard', 'Giant Octopus', 'Giant Owl', 'Giant Poisonous Snake', 'Giant Rat', 'Giant Scorpion', 'Giant Sea Horse', 'Giant Shark', 'Giant Spider', 'Giant Toad', 'Giant Vulture', 'Giant Wasp', 'Giant Weasel', 'Giant Wolf Spider', 'Goat', 'Hawk', 'Hunter Shark', 'Hyena', 'Jackal', 'Killer Whale', 'Lion', 'Lizard', 'Mammoth', 'Mastiff', 'Mule', 'Octopus', 'Owl', 'Panther', 'Phase Spider', 'Poisonous Snake', 'Polar Bear', 'Pony', 'Quipper', 'Rat', 'Raven', 'Reef Shark', 'Rhinoceros', 'Riding Horse', 'Saber-Toothed Tiger', 'Scorpion', 'Sea Horse', 'Spider', 'Bat Swarm', 'Insect Swarm', 'Poisonous Snake Swarm', 'Quipper Swarm', 'Rat Swarm', 'Raven Swarm', 'Tiger', 'Vulture', 'Warhorse', 'Weasel', 'Winter Wolf', 'Wolf', 'Worg', ],
                    ]
                    let template = [
                        `The ${searchArray(noun[0])}'s ${searchArray(noun[2])}`,
                        `The ${searchArray(noun[0])}'s ${searchArray(noun[1])}`,
                        `The ${searchArray(noun[0])}'s ${searchArray(noun[3])}`,
                        `The ${searchArray(noun[3])}'s ${searchArray(noun[2])}`,
                        `The ${searchArray(noun[3])}'s ${searchArray(noun[1])}`,
                        `The ${searchArray(noun[1])}'s ${searchArray(noun[2])}`,
                        `The ${searchArray(noun[0])}'s ${searchArray(noun[2])}`,
                        `The ${searchArray(adjective)} ${searchArray(noun[2])}`,
                        `The ${searchArray(adjective)} ${searchArray(noun[1])}`,
                        `The ${searchArray(adjective)} ${searchArray(noun[3])}`,
                        `The ${searchArray(adjective)} ${searchArray(noun[0])}`,
                        `The ${searchArray(noun[2])} ${searchArray(noun[1])}`,
                        `The ${searchArray(noun[0])} and the ${searchArray(noun[2])}`,
                        `The ${searchArray(noun[2])} and the ${searchArray(noun[3])}`,
                        `The ${searchArray(noun[3])} in the ${searchArray(noun[1])}`,
                        `The ${searchArray(noun[0])} and the ${searchArray(noun[3])}`,
                        `The ${searchArray(noun[3])} and the ${searchArray(noun[3])}`,
                        `The ${searchArray(noun[0])} at the ${searchArray(noun[1])}`,
                        `The ${searchArray(noun[1])} at the ${searchArray(noun[1])}`,
                        `The ${searchArray(noun[0])} and the ${searchArray(noun[0])}`,
                        `The ${searchArray(noun[0])}'s ${searchArray(adjective)} ${searchArray(noun[2])}`,
                        `The ${searchArray(noun[0])}'s ${searchArray(adjective)} ${searchArray(noun[3])}`,
                        `The ${searchArray(noun[3])}'s ${searchArray(adjective)} ${searchArray(noun[2])}`,
                        `The ${searchArray(noun[0])}'s ${searchArray(verb)}`,
                        `The ${searchArray(noun[3])}'s ${searchArray(verb)}`,
                        `The ${searchArray(noun[2])}'s ${searchArray(verb)}`,
                        `The ${searchArray(noun[1])}'s ${searchArray(verb)}`,
                        `The ${searchArray(verb)}`,
                        `The ${searchArray(adjective)} ${searchArray(verb)}`,
                        `The ${toWordsUc(rollDice(100))}${searchArray(noun[3])}s`,
                        `The ${toWordsUc(rollDice(100))}${searchArray(noun[2])}s`,
                        `The ${toWordsUc(rollDice(100))}${searchArray(noun[1])}s`,
                        `The ${toWordsUc(rollDice(100))}${searchArray(noun[0])}s`,
                        `The ${searchArray(noun[3])}'s ${searchArray(adjective)} ${searchArray(verb)}`,
                        `The ${searchArray(noun[2])}'s ${searchArray(adjective)} ${searchArray(verb)}`,
                        `The ${searchArray(noun[1])}'s ${searchArray(adjective)} ${searchArray(verb)}`,
                        `The ${searchArray(noun[0])}'s ${searchArray(adjective)} ${searchArray(verb)}`,
                    ]
                    let chance = rollDice(100)
                    if (chance < 33) {
                        return searchArray(template) + " " + searchArray(posts)
                    } else {
                        return searchArray(template)
                    }
                }
                let output = tavernNamer()
                return output
            };
        
            let mainFeature = [
                'the town square', 'a water well', 'a bonfire', 'an open market', `a statue ${searchArray(statue)}`,'a shrine','a simple fountain', `a grand fountain with a statue ${searchArray(statue)} on top`,'a fighting pit','a collesium',`a ${searchArray(['tournament','festival'])} ground`,'a large tree', 'a large store','a tavern','a courtyard','an executioners platform and gallows',' a stage for performing','a floating crystal','a wizards tower','a mozaic','a beam of light','an impossibly large sword','a sword in a stone','A guild hall','an arcane construct','a divine guardian','a tomb of a legendary king','a temple','a garden','a hedge maze'
            ]
            function roomAndBoard()  {
                let lodging = [
                    'at a relatively safe clearing near town', 
                    `at the house of a ${searchArray(['generous','rich','pushy','insistent','creepy','highborn','lonely','widowed','ex-adventurer'])} citizen with a vacancy`, 
                    `in a spare ${searchArray(['barn', 'empty home','stables','burnt out building'])}`,`in the home of a recently ${searchArray(['deceased','murdered','evacuated'])} citizen`,'at a recent crime scene',`in the${searchArray([' seedy',' luxurious',''])} communal lodge`, 'at the brothel'
                ]  
                function findHost() {
                    let hostArray = [
                        'A large family of gnomes. They are quite welcoming to guests, and serve dishes upon dishes of rich, steaming food at their meals, often accompanied by the father and the older sons singing.', 'A young tiefling loner who’s willing to share his small, spartan flat. A starving-artist type (well, not quite starving, he does pretty well) who specializes in portraits. He doesn’t bother the guests if they don’t bother him. Keeps his work depicting who he remembers as his mother (an Erinyes) in a safe in his room.', 'A soft-spoken Half-orc librarian and his wife, an Elvish herbalist. She isn’t as welcoming as him, but is alright with guests as long as they stay out of the workshop. They both do some of the cooking, so the meals are…unique.', "A Kobold matriarch. While her children have all moved out, their children are dropped off at Grandma’s house quite frequently, and she teaches them all she knows. She also runs a small shrine to Bahamut in the cellar.", "A hot-headed, wealthy heiress and her more rational lady-in-waiting.", "The prince of a corroding noble line, of late taken to dressing in black, composing gloomy poems, and brooding on the battlements of his manor.", "A dwarvish professor with a magnificent walrus mustache, as well as his warm, old-fashioned wife (a dressmaker) and their daughter, who’s visiting for a month or so from her apprenticeship.", "The quiet Mother of a hostel run by the temple of the god of the poor. The tragedy and despair of many of her visitors has rubbed off on her a little. The food is outstanding.", "A not-quite-right young man with ambitions to become a psychologist. Asks far too many personal questions, then goes off on rants about what he thinks shaped his guests to the people they are today. Total quack psychologist, doesn’t know what he’s saying at all.", "An Eladrin who’s spending a few centuries ‘indulging in kindness’. There’s a too-good-to-be-true air to the stay. Breakfast in bed, indoor training arena, a small dungeon built underneath the manor and stocked with inexpensive monsters, a wizard’s study, everything they could possibly want. And the host is always smiling.",
                        "A jovial Goliath with an Australian accent who spends most of his time wrestling with various dangerous forms of wildlife. Owns a large merchant company, spends most of his time doing push-ups or lifting weights or wrestling yetis.", "A shriveled, wrinkled, hobbling old Bullywug whose sentences are out of order, and seems to speak in riddles. He wears a slightly threadbare robe and carries a walking stick.", "A stern Halfing dance instructor. She’s quite sprightly, humming waltz tunes as she works. She corrects people’s postures out of force of habit.", "An old Dragonborn mercenary who frequently lapses into a thousand-yard-stare. While not tormented by nightmares, he’s a good-humored guy with quite a few tips on adventuring.", "A water genasi weaver whose skill isn’t quite unmatched, but it’s up there. Naturally, the curtains and carpets of his house are expertly made and quite flamboyant.", "A cackling, bitter old woman. Actually a Green Hag, and her curse is the reason the couple next door (whom she finds insufferable) have been trying for a child for years without success. Serves stew or porridge for every meal from a huge, battered-looking black cauldron.", "A hard-as-nails half-elf rancher. Owns stables upon stables of pure-bred racing horses. Despises city-slickers.", "An old Minotaur noble. He wears huge suits, custom-made for him, and has a staff of Animated Objects who sing, dance, and make dinner.", "A slightly suspicious young woman. Knows far too much about weapons, disappears for long periods of time, and locks the basement door very heavily. She’s an assassin for a local gang of racketeers, and will skip town if she’s found out.", "An Animated Armor that speaks like the Discworld golems (That Is, She Talks Like This) and moves very jerkily. She (well, it’s built for a female humanoid) used to work for an evil artificer before a band of adventurers gave her full free will. Knows a thing or sixty-four about dungeoneering, and considers herself indebted to all adventurers.", "A goblin horse-jockey who loves nothing more than the thrill of a race. Talks a mile a minute, usually boasting about his races, and his house is full of trophies that he polishes devoutly.", "A human card-sharp who won his entire house in a game of Triple Ogres. He’s married to the shrewd but not very welcoming owner of a local tavern. She brings home the latest gossip each night.", 
                        "A kobold artificer who’s trying to turn his species’ natural affinity for mechanisms to the good. Owns all sorts of fascinating contraptions, like an automatic pencil-sharpener or a tiny construct that writes down any good ideas he has mid-conversation.", "A merry old smuggler, although he’s put his pirating days behind him aside from the odd chorus of Dead Man’s Chest. His house is adorned with model ships and sketches of exotic shores. Drinks strong home-brewed grog.", "The town doctor. There’s something odd about her of late. She stays up past midnight, tends to skip meals, and always seems to be tearing up some piece of paper and tossing it in the trash. (She’s smitten with the blacksmith’s apprentice, but can’t bring herself to tell him.)", "A rough-and-ready frontier-dwelling female Dwarf, who lives in a quaint cottage. She’s older than most of the village, and knows all the skills of the hinterlands: medicine, hunting, cooking, the lot.", "An old man who can’t seem to look you in the eye. He has one craft, and one craft only: he’s a knife maker. Assassins from every syndicate, court or gang come to him for their daggers. Even the odd Drow comes in the dead of the night to buy an honest-to-Lolth Master Work dagger.", "A scheming duke who tries to see if the party thinks his power-plays would work without hinting too obviously at his massive ambitions.", "A satyr couple who are, well, typical satyrs. They love wine, music, food, the usual revel stuff. Enjoy having guests, of course, but can’t stand ‘sticks in the mud’, ‘killjoys’ or ‘introverts’.", "A female Drow who left the Underdark because she’s claustrophobic. Polite, in a regal sort of way. Her house doesn’t have hallways so much as long, broad halls, with bookcases or coffee tables or armchairs.", "A newer vampire who is having a little bit of an identity crisis. He gets the ‘nocturnal’ part, yes, he gets that, but isn’t the whole ‘domination’ thing a little unethical? and similar conversation. Keeps forgetting that garlic tastes disgusting to him now.", "The best Dwarvish pastry-chef that has ever walked the earth. And she knows it. Quite boastful.",
                        "The keeper of a local shrine to the fire god. He’ll just sit by the fireplace, staring into it for hours on end. Has a very large and overly friendly golden retriever.", "The local ‘crazy cat lady’. An Air Genasi whose hair is always blowing in a gentle breeze. This confuses her cats to no end. She has forty-three of them, and one Mimic who enjoys it’s current lifestyle and has decided to stay shaped like a cat.", "A Tabaxi game-warden. His wolfhound isn’t part wolf, it’s part Displacer Beast, which means people often think he has two dogs. Pleasant but fairly quiet.", "A grizzled old human war veteran. Wears an eyepatch. Has a suit of plate-armor stained with horrific, otherworldly humors in his front hall. Retired after ridding his ancestral estate of some kind of great beast he refuses to describe.", "A gnomish scientist who studies modrons. He’s utterly fascinated by them, and can go on for hours with horrifically dull facts and factoids about them. His house is littered with mounted modrons, dissected modrons, everything modron-related you could imagine.", "A time-wizard who messes with his personal time for kicks. Making himself twelve years old, being in four places at once. He thinks it’s a riot. His house is full of books of temporal magic, or at least it was, twelve minutes before you try to open one of them. Opening one book makes them all vanish to the past. It’s his security system.", "A noble Knight Lord who lives in a small castle and commands an order of chivalrous Knights. A former adventurer.", "A wise Grand Wizard who lives in a magic tower and commands a guild of powerful Wizards. A former adventurer.", "A clever Spymaster who lives in a heavily-secured manor and commands a guild of Spies. A former adventurer.", 
                        "A pious High Priest of Light who lives in a modest house attached to a glorious Temple. A former adventurer.", "A homely man with balding white hair, a small beard and eyeglasses. Meets with friends often, talking for hours in the cellar. Are they…acting? Playing some sort of dice-game? It’s not quite clear. Says he hails from the realm of Greyhawk.", "An elvish professor of languages who, despite having fought in several wars, is a honorable, straight-laced, old-fashioned gentleman. He’s writing a rather long book. Apparently it’s about halflings and some kind of Ring?", "A razor-witted Dwarvish comedian who does standup at local taverns, dishing out the side-clutchers and knee-slappers galore. Willing to share a few jokes with the party, too. His ‘why did the cockatrice cross the road?’ always gets ’em.", "A Bugbear leg-breaker for the local mob is trying way too hard to be polite and gracious. His apartment’s nice, of course, but he seems to think that the entire party are some sort of sting operation.", "A former Underdark delver, this calm but dispassionate female Tiefling is married to a far more bubbly and cheery Wood Elf. They bicker regularly about what ‘acceptable decorations’ are, stuffed Troglodyte heads or singing roses.", "A brawny whiskey-maker who meets over a nice, old keg with rogues and grave-robbers every night, it seems. His house is above his tavern.", "An Eladrin woodcarver who has recently taken up trying to enchant things. She’s terribly confident it’ll work out eventually, but for now you’ll have to put up with wooden busts that hurl abuse or curse words and cutlery that work together to spell out rather rude slang.", "A Halfling balloonist with a terrible case of wanderlust. Half of his things haven’t been unpacked yet, half of them are already ready to go.",
                        "A master wizard who crafts Golems. Has some shady deals with dungeon overlords, but is still a good man. Might cut the Evil Overlords off from his business if approached; he’s a man of principles, just needs a push of sorts to get him to stand his ground for them.", "An Aasimar teamster who’s moving into the song business. He’s got quite the voice, and a few songs already written: All Shook Up, 500 Miles, and he’s working on a few more.", "A slightly edgy Tiefling who wants to be both friendly and intimidating. Budding metalhead. His apartment is nearly plastered with band posters and song lyrics.", "A genteel, aristocratic Red Dragon who lives in an enormous castle.", "A curious young man enamored by the sea. Despite his youth, his hair is receding. He never seems to blink, either. His house is full of weird idols and jewelry of ancient civilizations.", "A charlatan ‘wizard’ who’s really just a chemist. Tries to keep her lab hidden. Nearly has a breakdown if she’s confronted about her fraud.", "A Goliath strongman of the local circus. His quarters are rather large, because he’s rather large. They’re right next to the acrobats’ and the lion tamer’s.", "A vain elvish wizard who spends most of her time in front of her magic mirror, and the rest of it complaining about upload schedules and dislike mobs and ad revenue.", "A dwarvish butcher. His wife is an author. Both of his daughters are in preschool. He himself is vegetarian, but does eat fish. Spends his evenings playing pool in the cellar with his friends, or going on walks with his daughters.", "A professional court-jester of the local duke or lord. Not as cheery off the job; gripes to anyone who’ll listen about his poor wages and difficult job. His house is a small cottage within the bailey of the castle.", 
                        "A tight-lipped priest who seems to have a shrine to every god in his tiny house. The hallways are crammed with altars and icons, and the whole place smells like incense 24/7.", "An unintentionally insufferable Aasimar ballerina. Lets the guests have the run of the kitchen; she’s too busy practicing for her next performance in the studio downstairs.", "A young bachelor Mountain Dwarf, who’s bitter about getting turned down by the local army or militia. He’s drinking a little more than is good for him.", "A gnomish jeweler, his wife and three children. They have a pretty large townhouse. The husband is a little busy with an important order: a new crown for an anonymous nobleman.", "A halfling priest of various gods of knowledge and nature. He’s a part-time biologist, running a few experiments in the lab in his basement. He’d love to meet a Druid or Ranger with more hands-on experience than himself.", "A Fey who lives in a checkers-themed tower. May kick the guests out if they mention chess or use chess analogies. Most of the food is circular (pie, pancakes, etc.), the tablecloths and bedsheets all have checkered patterns. Writes long letters to a bitter rival.", "A Fey who lives in a chess-themed tower. Gets rather testy if people mention checkers. The staff are construct automatons that only move like particular chess pieces. Complains about a completely irrational rival who sends him storms of nonsense letters every day.", "A professional human trick-shot-archer. She goes on tour with the circus now and then. Her favorite one is nailing a playing card out of someone’s hand from one hundred paces.", "A stout Dwarf who’s a master cook. He puts his heart and soul into every slab of beef, taking hours just to prepare them for barbecuing. Doesn’t spend much time with the guests.",
                        "A human former doctor (she’s still got the beak-mask hung up on the wall in an airtight case, and she warns the party that it’s quite contaminated) who retired after fighting some sort of otherworldly entity beneath her ancestral estate. Recently took up horse-riding.", "A human comedian whose jokes tend to be at his own expense. Unmarried but pretty well-off, for a comedian. He tends to leave in the evening and come back close to midnight after his show.", "An eladrin priest of Tymora. Closer to his fey ancestry than most Eladrin. He’s scheming with a local gang to spring some of their hooligans from prison- after all, the whims of chance are unpredictable, or so he’ll say if the party threatens to inform the authorities. Then he will try and bribe them.", "A calm Oriental-looking man who works as a janitor during the day. His apartment isn’t exactly barren, but it’s certainly unextravagant. He’s teaching a local child the various martial arts he mastered in his time as a Monk.", "A simple Halfling herb-farmer. She has a small plot of land behind her house, where she grows things like spices and vegetables. Patient, because as she says, you can’t hurry peppers. Spends most of her time reading novels.", "A dragonborn tale-weaver. No, not an author, she’s quite firm. A tale-weaver, the kind that don’t get written down so much as passed along. Though she doesn’t exactly have it in writing, she’s very familiar with the wording and themes that make a riveting tale.", "A solemn, gods-fearing Dwarvish carpenter. They call him the Pious Benchmaker, which baffles him. His wife is of somewhat better cheer, but tolerates no nonsense in her house. The furniture is first-rate. You could hit it with a battle-hammer and it wouldn’t dent.", "An Aasimar mattress-maker. Laments his own misfortune: his mattresses are so good, he either sleeps on them and can’t get himself out of bed, or he sleeps on a couch or armchair and doesn’t sleep well. It’s a DC X Strength save to get off his guest-beds (the best ones, for he’s quite hospitable), where X is 10 plus the number of days since the sleeper has been in a normal bed instead of a bedroll or cot.",
                        "A slightly unhinged half-orc scholar. He’s studying all sorts of bizarre phenomena at once, and keeps a wall covered in notes, sketches, and pieces of twine connecting them. The statistical anomalies of coin flips, the way the planet is tilted, all those sorts of things. Frequently becomes so engrossed in his studies he forgets to eat.", "A ratcatcher who is quite ferocious in his task. He’s got mousetraps all over the place, and hundreds of rat skulls nailed to his wall. Grim, adamant, and talks at length about what utter vermin rodents are.", "A friendly, jocular doppelganger illusionist and it’s tame mimic pets. The house appears to have a large staff of servants and much finely-made furniture…", "A gnomish Expert Clown. He doesn’t just study mere tossing and tumbling, mind you. He studies the psychology of clowning. What makes a pie to the face so funny? Or what is the thrill-inducing factor of juggling eggs? He can tell you. He can tell you for several hours.", "A human stone-carver and his teenage son. The son’s a little worried about his father, as the latter seems to be losing interest in the craft. Their house is full of half-finished works.", "A high elf mask-maker. It’s a delicate craft, she’ll tell you. Fey come to call every so often, picking up their masks but also staying to chat with her a bit. So do some actors. And one or two assassins.", "A scruffy human gravedigger. He isn’t exactly a philosopher, but tends to make incisive remarks about mortality and time. Doesn’t like elves, because they don’t give him business.", "An old man with a bald head and gleaming eyes. If asked, he only gives his profession as ‘chemist’, and spends a lot of time in his lab. He’s less harmless than he seems; he’s the master poison-brewer for a local assassin’s guild. If he’s found out, he calls in his allies on whoever discovered his true identity.", 
                        "A young couple of a Tiefling and an Aasimar. Their ancestors didn’t like the marriage much, and it couldn’t exactly get officiated by a priest (but the local marriage law did allow for a Fey to do the job). They’re getting along fine.", "A pious couple who are gravely concerned about their young daughter. She claims to see ‘shadowy people’ in the cellar, and apparently brought the family dog back to life. They’re both nearly nervous wrecks, and priests of every Good god have been coming and going all week to try and exorcise the child.", "A white-haired old man and his shrill wife, both the village healers, although the Mr. recently got fired by the prince whose father he used to work for.", "A playwright who is outraged at his rivals trying to spread the rumor that his work was ghostwritten for him. Insists on reading off sonnets and scenes to the guests to prove that he’s genuine.", "A grizzled, scarred town guard. He’s only in during the day, usually asleep, and spends the nights walking the streets and smoking very particular cheap cigars. Moody but not hostile.", "A ‘professional quest-giver’ who pampers the heroes with everything he can. He’s in kahoots with a local dungeon-lord, and gets a share of the armor, weapons and loot of the heroes killed in the dungeon he directs them towards. He’ll take to the hills if he’s found out.", "A young priestess of a god of the wilds. Her house is on the very outskirts of town, and has a terrible case of rats, which she doesn’t mind as long as they don’t bother the guests. Rats that do bother the guests get speared. She doesn’t take nonsense, but has some sense of humor.", "A Kenku minstrel who rents a room above the tavern he performs in. It’s covered in posters from his ‘glory-days’- although a keen eye (DC 15 Investigation) will note that they’re actually other bards’ posters, with the minstrel’s name altered into them.", 
                        "An apprentice baker and his wife, a schoolteacher. Their house was a cheap deal, and is a little run-down but still serviceable. Gets a little drafty, though.", "A Kobold who claims to be an architect and interior designer. Actually, she’s a dungeon planner who designs catacombs, lairs and castles galore. Highly sought-after by evil overlords, and frantically tries to direct them away while the guests are there. If she’s found out, she’ll flee to the safety of one of her closer creations.", "A Swordsmith who has been at it for years. He keeps a display case of splintered, shattered or blunted swords recovered from various dungeons and battlefields, each with the tale of a fallen hero attached to it.", "A halfling gourmand with an affinity for candies. He’s a longstanding foe of witches who use his creations, or mockeries thereof, to lure children into their cook-pots.", "A Dwarvish family of four- father, mother, son, daughter -who are rather new in town. Hospitable, but the house is still full of moving crates. The father is a lumberjack, the mother is a stay-at-home parent.", "The High Priest of a local shrine of the god of travelers and messengers. He’s an unmatched source of information, references and road maps, and will greet anybody with a smile so long as they return the favor.", "An old Elvish couple. The husband spends most of his time golfing or whittling, the wife is busy giving advice to her newly-married daughter. They live in a nice old house, although there’s a ghost in the attic. Don’t worry, it’s very polite during the day, and it can’t leave the attic.",
                    ]
                    return searchArray(hostArray)
                }
                
                function findPlot() {
                    let hostPlotArray = [
                        [ //ZERO THE PERSON'S ROLE
                            'A barkeep.', 'A warrior', 'A merchant', 'An agent', 'A criminal', 'A performer', 'A nobel.', 'A bureaucrat', 'A member of the clergy', 'An artist', 'A craftsman', 'A magic user',
                        ],
                        [ //ONE THEIR LOCATION
                            'Unknown - they are hard to pin down', 'They are in [village]', 'They are in [city]', 'They can be found at [building]', ' They come through here rarely, might want to ask around', "They frequent the area, keep and eye out and you're bound to bump into them", 'They live right nearby', 'They are just a few villages away', 'Well, it is a bit remote from here,get it marked on a map', "Just let their people know, they'll find you",
                        ],
                        [ //TWO THEIR FEELINGS TOWARDS YOU
                            "I hate [PC],and I wont give [[PC]/the party] the time of day, unless they pay up front (5gp/minute)", "Why would I help [PC], unless of course [PC] is offering something in return?", "I am willing to help [PC], but they'd need to persuade me", "Will do anything [PC] asks, no explanations or renumerations needed", "I hate [PC's] guts", "I never really liked [PC]", "We did try to kill each other that one time…", "I do not remember [PC] in the slightest", "I tolerate [PC], they'll get no special treatment", "I could lend a hand maybe I guess, but what's their name again?", "We are amicable but not necessarily amenable", "Sure, for the right (high) price in gold", "Yes, but first they'd need to help me do a thing that’s… a little dark", "Yes, but they'd need to help me get this thing first", "Yes, but they'd need to help me resolve a personal issue first", "Yes, but they'd need to cover some expenses", "Yes, but they'd have to join my guild", "Wish I could help, but it’s impossible now because magical restrictions", "Wish I could help, but it’s impossible now because social issues", "Yes, but they'd need to help me resolve a personal issue after", "I would do anything for [PC], but I won’t do that", "Any time, but they'd owe me one", "I would do anything for [PC]",
                        ],
                        [ //THREE RELATIONSHIP
                            'Your rival', 'An acquantance', 'An old friend', 'Your teacher', 'A fellow student', 'A family friend', 'A childhood friend', 'A family member', 'An admirer of your work', 'Your secret admirer (stalker?)', 'A work associate of yours', 'Unrelated'
                        ],
                        [ //FOUR ASSISTANCE
                            "Experience, having done something similar long ago", "Experience, Having done it once under duress", "Ability, Getting the right things to help with it", "Experience, Having prepped for a scenario such as this this, can totally help", "Intelligence, They puzzle stuff like this out all the time", "Charisma, Knowing the right people to ask about it", "Wisdom, Knowing where to find out about it", "Intelligence, Having some ancient lore about it", "Ability, Having some related magic for it", "Charisma, Having authority to get help for it"
                        ],
                        [ //FIVE POSSIBLE TWIST
                            'NPC really doesn’t like someone else in the party', 'NPC really likes someone in party too much', 'NPC Might tell your enemies', 'NPC Is actually not helpful', 'An adversary learns about you and your location and acts upon it', 'A local mob threatens the NPC to not help [PC]/ Party', "Another NPC you know needs your help, urgently", "You are mistaken for someone else, who's in big trouble", "The NPC severly insults and taunts one of your party members.", "The NPC gets a crush on [PC] or on one of the party",
                        ],
                    ]
            
                    let output = `If you discuss your current challenge, you learn of someone Offering: ${searchArray(hostPlotArray[4])}. This person is currently ${searchArray(hostPlotArray[0]).toLowerCase()}. Location: ${searchArray(hostPlotArray[1])}  Attitude:  "${searchArray(hostPlotArray[2])}". Relationship: ${searchArray(hostPlotArray[3])}. ${variableEvent(hostPlotArray[5])}`
                    
                    return output
                }
        
                function findlodging(){   
                    if (rollDice(100) < 75) {
                        return `You can find lodging at the local tavern, "${tavernName()}".`;
                    } else {
                        return `You will find lodging ${searchArray(lodging)}.`
                    }
                };
                function food() {
                    let food = [
                        `someone cooking their recent ${searchArray(['wild game','fish haul'])}`, 'the neighbor who shares generously if pursued', 'the public vegetable garden', 'the communal potluck', 'the open pit barbecue', 'the smokehouse', 'the marketplace'
                    ]
                    let chance = rollDice(100)
                    if (chance<70) {
                        return `You smell food coming from the local tavern.`;
                    } else  if (chance <90){
                        return `You smell food coming from ${searchArray(food)}.`;
                    } else {
                        return `There is a friendly townsperson willing to host you for dinner, and possibly room and board: ${findHost()} . ${findPlot()}`
                    }
                }
                return `${findlodging() +'. '+ food()+ '. '}`
        
            } 
        
            let specialtyShop = [
                'n alchemist',' herbalist',' healer', 'n enchanter',' hex den',' jeweler',' woodcarver',' silks shop',' toy shop',' game shop', ' glassblower', ' horse trader', ' carpet shop', ' perfume shop',' curio shop',' massage parlor',' salon', ' pet shop',' familiar shop', ' cartographer', ' ice cream shop',' soap shop',' popcorn shop',' gardening and flower nursery',' home improvement shop',' memory shop',' vehicle shop',' music shop',' tools shop'
            ]
            let economicTouchstone = [
                'the fact that it is a crossroads between a few larger settlements', 'their crops', 'their livestock', 'their docks', 'the ferry','the major bridge', 'their fishery', 'their holy site', 'a source of magical power', 'their mill', 'the mine', 'that it became a trade hub', 'their defense capabilities', 'their production industry','agriculture','trading','crafting','arms','livestock','education','faith','magic','archaeology','technology','medicine','nobility','prophecy','equality','shipping','fishing','crime','smuggling','expeditions','hunting'
            ]
            function landmark(){
            let landmark = [
                `${searchArray(['active','abandoned'])} wizard's tower`, `${searchArray('arcane', 'bardic', 'scholarly','religious')} college`, 'combat training school', `${searchArray(['church','shrine','temple'])}`, 'fighting pit', 'tended gardens', `${searchArray(['craft', 'trade', 'class','thieves'])} guild hall `, 'library', 'lighthouse','watchtower', 'racetrack', `${searchArray(['castle', 'temple', 'shipyard','town'])} ruin`, 'sealed cave entrance',  'spiritual lodge', 'theater','amphitheater']
            let feature =[
                'that a river runs through the town', `that the town is built into a ${searchArray(['hill-side','mountain-side','canyon','ravine'])}`,`that the town is surrounded by ${searchArray(['forest','wilderness','desert','tundra','mountains','plains','hills'])}`,`what looks like the aftermath of a skirmish with ${searchArray(['a neighboring town','an invading horde','a rampaging beast'])}`
            ]
                if (rollDice(100)<50){
                    return `you also see a nearby ${searchArray(landmark)}`
                } else {
                    return `as well as ${searchArray(feature)}`
                }
        
            };
            let output = `Welcome to "${townName()}"! In the center of the town you notice ${searchArray(mainFeature)}, ${landmark()}. ${roomAndBoard()} There are the expected shops in town, as well as a${searchArray(specialtyShop)}. The town's economy ${searchArray(['is','was'])} based off of ${searchArray(economicTouchstone)}.`
        
            document.getElementById("Town").innerHTML = output
        };
        function findShop() {
            let type = [
                "bank, or another sort of financial institution", "smithy or manufactory", "drover/caravansary", "kiln/glassworks", "university or other institution of learning", "hospital or some sort of healer", "a crafter such as a tailor or haberdashery", `an artist, such as a painter, sculptor or poet${searchArray([", there is a patron.", "."])}`,
            ]
            let prosperity = [
                "collapsing. Whether through the incompetence of the owner(s) or outside factors, the business is falling apart and is likely up to it's eyes in debt.", "dwindling. The flow of customers or clients has almost dried up completely, though this may be the fault of the owner, rather than the community dying.", "steady. The business is profitable, but not so much that the proprietor is well to do.", "steady. The business is profitable, but not so much that the proprietor is well to do.", "steady. The business is profitable, but not so much that the proprietor is well to do.", "busy. The day is constantly packed with things to do, people to help.", "growing. Customers or clients find that they have to schedule in advance to get service. The business is looking for more help.", "bustling. There's more work than there are hands, and any new clients will have trouble getting what they want in a timely manner.",
            ]
            let owner = [
                "this is a family business, perhaps the founder is still alive, but just as likely it has been going for several generations.", "there are a number of proprietors, perhaps only a pair, but maybe as large as a board.", "there is a sole owner, who may or may not have any employees.", "there is a distant and far away owner, such as a merchant prince or a noble. they likely have local representatives to look after their interests.", "the business is ran by the local government, or is an extension of a government monopoly.", "a cooperative or group of merchants, teachers or workers run the business.", "the ownership is contested. This certainly does not bode well for the future.", "the ownership of the business is unclear or actively obfuscated.",
            ]
            let rumor = [
                "the owner is getting the majority of their stock or funding from an illegitimate source, such as from smugglers or by acting as a front.", "the product or training that the business provides is widely considered to be somehow corrupt or scandalous in some way locally. Patronizing it marks you as someone willing to overlook that reputation.", "the business has paid protection money to local criminals. Any harassment or theft on the premises is going to be met with serious reprisals.", "the business or institution is famous; they could have made some legendary item or trained or saved some notable personage.", "due to reasons inscrutable to those on the outside, the business is only open during certain times, such as during the night or certain seasons.", "doing business here is bound by some custom that may not only be immediately obvious, they may only accept patronage from a certain ethnicity, social class or faith.", "coin is not accepted here, only barter or service.", "the business has no set locale or storefront, they may even serve several nearby communities as well.",
            ]
            let output = `Your party comes upon a ${searchArray(type)}, and it looks as if business is ${searchArray(prosperity)} Upon further investigation the party can find out that ${searchArray(owner)} There is a rumor that ${searchArray(rumor)}`
            document.getElementById("details").innerHTML = output
        };
        function findPrison() {
            let type = [
                "bars, stones, cells and blocks. a typical penitentiary.", "bars, stones, cells and blocks. a typical penitentiary.", "bars, stones, cells and blocks. a typical penitentiary.", "somewhere desolate and isolated, perhaps the side of a mountain or the endless expanse of the steppe. no bars are necessary because there's nowhere to go.", "a slum or segregated area of either an existing city or structure, or perhaps one now given over entirely to the purpose. The area is walled off and the perimeter guarded.", "exile. Prisoners are dropped off on some (supposedly) uninhabited island. They're likely still under a watchful eye, but it is much smaller than it otherwise would be.", "this place is more akin to a religious community than a true prison. Prisoners are enrolled as initiates and are required to go through certain rituals to be released.", "the prison is a labor camp, perhaps prisoners are forced to work at various crafts, farm or they're simply on a chain gang.",
            ]
            let prisoners = [
                "this is a place for hardened criminals - thieves, murderers, rapists and robbers. The folk here are likely violent and skilled in the ways of criminality", "this is a place for hardened criminals - thieves, murderers, rapists and robbers. The folk here are likely violent and skilled in the ways of criminality", "this place is for debtors, those who owe the powers that be enough that they've been thrown in gaol to work off their debts.", "this place is for political prisoners. Folk who have fallen afoul of whatever temporal authority controls the penitentiary.", "the inmates here are prisoners of war, taken in battle or surrender.", "these souls are the victims of a religious purge or inquisition. They could be heretics, or they could be worshipers of an entirely other faith.", "this place was built to house a special kind of inmate, magic-users. It has additional layers of security, of course.", "the prisoners are ghosts. This place was meant to shackle the souls of condemned beyond the grave as a form of additional punishment.",
            ]
            let guards = [
                "are vicious and unrelenting, they are a well-paid monolith of authoritative violence.", "are lazy and indolent, they will not notice all but the most egregious violations such as murders or escape attempts.", `have been utterly co-opted by a criminal group; the true masters of this place are ${searchArray(["those in charge of the local corruption", "an unknown but powerful and feared force","is a archmage that is using the prisoners for inhumane experiments"])}.`, "are prisoners themselves, generally those who earned trust through following the rules. The upper hierarchy may be normal guards, or perhaps there may be periodic checks to ensure that the population hasn't changed.", "are members of a religious order dedicated to punishment or otherwise oppression of criminals and the condemned.", "wild animals and the elements. There may be border guards or occasional patrols, but they are few and far between", "few, but they are preternatural in some way, ranging from cerberoi and minotaur to spirits or elementals.", "nonexistent. Some sort of eldritch force keeps people here, a curse or a spell.",
            ]
            let help = [
                "a 'snitch', with wary eyes and open ears. they're a fantastic source of information, but they may also be informing others about you.", "a 'smuggler', with connections to the outside and a means to get things in. Smugglers will do most anything before revealing their sources.", "a 'tough', frightening and capable of coercing near anyone into compliance.", "a 'killer', skilled and predatory. willing to murder nearly anyone for the right price.", "a 'fixer', with the ears of the administration or the guards. They can arrange for the rules to be bent - for a favor.", "a 'crafter', able to take disparate materials and turn them into damn near anything, from weapons to drugs or drink.", "a 'kingpin', able to organize other prisoners (at least some of them) and to bend them towards their own ends.", "a 'seer', priest or other form of magic-user who is able to communicate with the outside, or if given the materials and seclusion, cast spells.",
            ]
            let namedPrisoners =[
                "Shea Longshanks – A human drug lord who has taken control of a wing of the prison and requires rent from others in his wing. He has a group of henchmen and acts as if he is a guard/warden.", "Malcer Holden – A well-dressed half-elf necromancer who will not state why he is here. In return for information, he requires spoons, which he provides to his army of undead in hopes of digging his way out.", "Zenbis Axor – A yellow dragonborn who will not speak to anyone she encounters. She possesses immense magical power but chooses to spend her days solitarily in her cell. Nobody knows the story behind her.", "Durgar Steely – This dwarf holds an infinitely refilling beer glass and nobody in the prison has ever seen him sober. He is very friendly and can just about speak and walk normally.", "Naroxius – The source of annoyance for much of the prison, Naroxius always manages to find a way to vandalize the prison. He has made clear that he will stop at nothing to escape, however all that he has managed to do is anger other inmates and staff. His current cell now consists of a wooden slab in the corner, after he fireballed his previous one", "Argus Shatterhorn – A goliath and zealous follower of a crazed war god. He’s seemingly possesses an infinite trove of energy and vitality, laughing and preaching loudly despite being literally skewered to a wall in his cell. Nothing can shut him up short of magical silence, which he doesn’t seem to notice.", "The Witch of Cretchreaver – A very polite sounding woman behind a foot of concrete and a metal door. She requests that you open the tiny hole so that she can get a look at you. She’s a medusa with her eyes pressed against the other side.",
                 "Slobfoot the Eloquent – An educated, well spoke goblin who tried to incite a political revolution. He gives a very deep, loquacious philosophical speech to the party.", "Thaddeus Null – A blue dragonborn and self-proclaimed God. He doesn’t seem arrogant beside that, just comfortable and quiet. His followers are magically capable, morally bankrupt people who are trying to break him out as they speak.", "The Rat – A wood elf who ratted out his bandit gangmates. Can’t be trusted, would sell their own brother for half a smoke. Nonetheless, they keep their eyes and ears open and know a lot about what’s happening in the prison.", "Randy Shackleford- human, assailed a government agent with sand and authorities now cannot find his name on any records.", "The Smuggler – A male gnome. He is the prison supplier who can find almost anything and smuggle it in the prison in exchange for the prison’s currency (smokes, food, etc.)", "Daloriz – A blind vampire who overcame his sunlight sensitivity. He has blindsense, and his power is to the point where he can overwhelm most enemies. When spoken to, he is polite and mentions he has seen the future and knows he must wait here for the right time. Why is this vampire in prison? What is he waiting for? Who is coming? Up to the DM to decide.", "Takaar ‘Two shields’ Alzurini – small time dwarf mob boss locked up for extortion and racketeering. He has boys on the outside planning to break him out.", "Voracious Veronica – A cannibalistic human who is soft spoken. She claims she was a knight who resorted to ‘the worst sin of all’ when her position was under siege for months. Her skin is pale, her eyes are dull, and her gaze sends shivers up your spine. You’re almost certain she’s lying.", "Gregor Brutalous – An imposing half-giant with jet black braided hair, dressed in clean formal clothing. He was a psychotic and incredibly powerful warlord, but years after his arrest insists he is trying to atone for his actions. He can easily escape (or so he claims) but refuses to leave as penance.", "Marros Tarmikos – A merchant who was caught up in a bar fight with some religious fanatics. He knows a few secrets about the prison and seems to be a law-abiding citizen for the most part.",
                 "Gorgeous Gnurl – An orc pit fighter that lost his champion title to *insert NPC* and in a violent rage murders him and his entire team right there in front of the entire crowd.", "Mordekai – Leader of a gang of wererats, he used his rats or ‘little friends’ to spy on people, and to blackmail them, or to sell their secrets to the highest buyer.", "Torun Sacanti – This ex-palace guard was thrown in prison after he gave his friend a tour of the duke’s apartments. When asked why he is in prison, he will do whatever he can to distract the party from the question.", "Tharon Ash – A Tiefling man who was kidnapped for a part in an infernal ritual but was arrested along with the cult when city guards caught them all. He will do anything short of murder to prove his innocence or escape.", "Resh – This culinary master in orcish cuisine can barely speak a few sentences in common. Employed in the kitchen, he is known to sometimes get rowdy and confiscate the fingers of anyone who looks at him the wrong way.", "Myrca Faro – Quiet and keeps to herself. She seems capable in many skills, decent in a fight, but is distant, mumbling to herself often, though what she’s saying can’t be heard. She was caught with her crew, but one of them testified against her. She doesn’t seem keen on reuniting since she doesn’t know who.", "The Painted Claw – A charismatic rakshasa who enjoys gaining followers and leading them into a suicide pact. He is sending souls back to his master in the nine hells and he has been captured for now…", "Habstrek the Painter – A former cart driver turned serial killer, she’s not getting out any time soon; she was captured during a time referred to in the local lore as ‘the summer of art’, in which she killed and drained the bodies of over twenty prison guards’ family members, apparently out of revenge for their extrajudicial killing of her apparently innocent husband, Algnir Half-Tusk. She’s fed via a wand charged with Create Food and Drink, as her cell door is welded shut. Guards hate her above almost all other prisoners, knowing she’d gladly turn her targets into further ‘paintings’.",
                  "Elgin Powell – charged with a dozen counts of kidnapping, he was a local mob boss’ favorite enforcer – with no bodies ever discovered, the families of his victims were denied even the peace of knowing that they were able to be contacted via necromancy. Reportedly, he kept his charges in a deep mine and they are, one and all, still alive, just shielded from scrying and blood legacy magic. Knows more about kidnappings than anyone local is likely to have ever considered.", "Jimmy ‘Lumberjack’ Jackson – Woodcutter turned assassin. He was brutal, honest, and captured by the palace guards when they asked him to start signing his work; reportedly, he’s still working from inside of the prison, except his rates are infinitely more affordable. His signature weapon remains undiscovered – which is a neat trick, considering that it’s a massive war axe.", "Anna – Kept in a dark room and bound with magic sigils, Anna is a deeply motivated, highly disturbed wandering killer, captured after a five-year hunt by professional adventurers; her modus operandi was to disguise herself as an orphan human child, infiltrate colonial outposts, and then systematically destroy food, water, and medical supplies, forcing the pioneers into madness, murder, and cannibalism. Rumors say that she’s responsible for the failure of two nation-states’ failure to expand their territories. She’s boasted she’d gladly take one another job, if freed.", "Rankle the Bookkeeper – A master of puppeteering and palace intrigue, he went from entertainer to information broker in under a year; his spies consist of handmade puppets, each one capable of recording sights and sounds, he extorted vast amounts of funding from select projects and missions, lining his own pocket freely until he was captured under what many consider unusual circumstances. Some say that he did so to protect himself from the palace paladins and clergy, all of whom are above harming prisoners.", 
                  "Coins and Pouch – Master forgers and loan sharks, these two brothers are a regular feature in the prison yard, dealing out loans with reasonable interest rates and obtaining rarities for other prisoners; it’s said that on the day they were brought into the prison, they presented a set of keys to a well-appointed cottage to the chief guard as a token of their appreciation. Ever since, they’re under protection and weekly payments continue to provide them with many creature comforts. Every year, on the anniversary of their incarceration, the guard that treats them the best receives a key to another cottage.", "Aldac – Former adventurer, expedition guide, reformed arsonist, and now a leader of a prison yard ‘exercise group’, this monk is a dangerous person; some say that she’s building an army, others that it’s a cult, and nobody wants to test her in a straight fight since she crippled her last opponent in under ten seconds. Anything that requires focus and determination, she’s happy to offer her thoughts on, free of charge – provided that she’s shown proper respect first. Her sentence is for a triple life duration – tough luck for her, as her species is a long-lived one.", "Thack – A monstrous human, he was a warlord by age fifteen, a respected bandit king at twenty, and captured during his attempt to seize the capital itself, turned over by his own command structure in exchange for lenient sentencing for war crimes. Passionate, charismatic, and mysteriously possessing a keen ear for music, he’s an example of what can happen to a Bard if they decide to turn war itself into a performance art. He’s making money through the writing of strategic, tactical and logistic guidebooks, periodically singing for the lost days of his misspent youth. He turns twenty-three in a month.", "Rejoice-Cried-The-Kraken – Still living her best life, RJCTK is a priestess first, bandit second, and a model prisoner third, choosing to ignore her history of piracy and looting in exchange for running a small group of like-minded believers in the church she’s built in her cell; she served as a first officer on the flagship of a vast pirate fleet, choosing who lived and who was sacrificed to her deity, often by slow drowning or something that officials referred to as ‘hook dancing’. She makes a few extra coins giving nautical theme tattoos for fellow prisoners, each one a work of art worthy of a church’s stained-glass windows.", 
                  "Prisoner #644 – Captured at the frontier, whatever it is, it’s only eaten six times in ten years, each time it was an unwary guard who strayed too close to the sealed cage covered in a thick burlap sheet. It hums at night, an eerie, unsettling event taking place only just before the onset of riots, uprisings, and acts of revenge on a wide scale inside of the prison. Recently, guards have reported that it has started to sing softly. Each of the Dead prisoners killed in the previous ten years are named, one by one, and it chuckled wetly when younger guards approach it.", "Kishi the Kid – A 16-year-old changeling who attempted to steal the Crown Jewels. He’s stuck in solitary after using the persona of a guard to start a riot, and is well known for the many he’s started in the few months he’s been here", "Cold Turquoise – The former cult leader of a Dragonborn pirate fleet. Will only talk in Draconian, and will give advice on how to operate a ship at a cost…", "Henri Schum – Halfling Mafia-don. Used his resources and cutthroat approach to fund a smuggling operation on rare animals for collectors. Has 2 fingers missing on his left hand and has his ‘buddies’ rough up any new people who mention them.", "Zarakos – Super beefy winged Tiefling. Brought in for attempting to rob a local bank and fly off with the loot, not accounting for the wizards that can cast Fly. Wings are always tied for obvious reasons. Not very smart, but very loyal. If you free his wings, he will follow you and your group until the end. Will carry and fly anyone that needs it", "Kimnuan Shadestalker – Black kitsune assassin. She and her bard troupe would spread rumors about people so others would order hits on them. Specifically in for burning down a village after getting caught by the local authorities. If she can get access to her hands, she can summon a lute and cast spells to become invisible/incorporeal.", "Binks Falkhorn- A scribe for 2 generations of very powerful wizards. Has not shown any criminal intent but is ordered to be imprisoned in solitary indefinitely after the wizard went mad and went on a killing spree, showing horrible power. His scribe is the last shred of evidence of the wizard’s work. It would be too dangerous to let the scribe roam free, but it would be foolish to kill him in case his knowledge became useful", 
                "Sparkler- A nine-year-old bronze half dragon who just wants to go home to her older brother. She was framed for a crime that she in no way could have committed. She is kept in a dark cell and is the favorite to be abused by the head guard. No knows her actual name because she rarely talks to anyone even when she is allowed.", "Xnyxyh Halfheart – Channeling Chronurgy wizard without his spell book. He looks human and is locked up for various crimes. He will help anyone who can get him his spell book. However, if he gets it, he will finish becoming a lich. He does not care for anyone but himself.", "Thornbull – an experimental warforged, who committed too many war crimes.", "Thragg Jadewolf – half-orc spy. He looks like an ugly human. He is in prison for high treason. He infiltrated border settlements and opened the gates at night, sabotaged the defenses, etc., so the neighboring orc kingdom could conquer the settlements easily.", "The masked man – this human wears a cursed mask, which he cannot take off. His crime: He is the elder brother of the current king.", "The Wyrd Sisters – Three halfling sisters each identical except for different colored eyes, the Wyrd Sisters are prohibited from accessing the kitchen and mess halls, kept in solitary confinement from each other, and fed separately. This is due to their innate toxicity, their blood, saliva, and sweat producing an extremely toxic poison which when ingested, causes a terrifying and agonizing death in even small doses. They were arrested after their entire village was found rotting the next morning after drinking from the tainted well which they had poisoned. Rumors persist that their natural lethality came from a tradeoff with a powerful Demon.", 
                "Semaj Ironscreamer – An elderly Half-Orc Druid who has spent half his life in this cell. He was jailed after being involved in multiple eco-terrorist attacks on mining towns that had been dumping their industrial waste into the nearby rivers. Seen as a kindly grandfather figure by the other inmates and even some of the guards, Semaj is often the peacekeeper between those he can hear from his cell and dispenses wisdom to those who ask. Given the nature of his magic, Semaj is kept in an underground cell with no window and any visitors he receives will be checked for wooden objects and plant matter.", "Azar – A former acolyte of the church who used his talents as a thief to steal back religious artifacts from wealthy aristocrats. Until one day he was set up by the Queen dowager to make it look like he was trying to assassinate her with the same knife she had killed her husband with. Is actually completely innocent of this particular crime, but with the weight of the crown bearing down on him his trial was anything but fair.", 
                "Vulmon Longroot – A 900-year-old High Elven Bard who was the very first prisoner ever put into this place. His crime? 800 years ago, he had been caught having an affair with all 11 princesses of the area and is actually the reason every member of the royal family has any access to magic.", "Tybo the Mad Monk – An incredibly dangerous and violent martial artist who was known to wear the ears of his enemies that he killed in battle like a necklace. After a failed assassination attempt by one of his party members caused Tybo to go mad and kill his party, the Human Monk returned to his roots raiding ships along the coast before he was eventually captured and placed in prison.", "Irving – he was just an ordinary peasant… until adventurers showed up in his life and destroyed it. After that he has dedicated his life to destroying them.", "Dean Fisher – human. Scum landlord to good upstanding goblins. forgot to bribe a local official.", "Greta Howitzer- A human horizon walker ranger who was once a famed demon hunter. But while hunting members of the cult of Baphomet, she lost her mind in Baphomet’s lair. She has the madness ‘The world is my hunting ground. Others are my prey.’ She now views all humanoids as demons and will go to any length to hunt them down. She was imprisoned after spending her money building a massive maze, kidnapping people, and hunting them down in the maze.", "Dominic Halfcastle – Halfling, originally in jail for tax evasion, now known for being transferred due to the murder and consumption of multiple sentients, claims the ability to kill sentients with his mind, has displayed no actual psionic or magical power", "Vestlev the Mad – War criminal of the highest order, he has been moved to a normal prison as a temporary holding place until a proper area is found. He looks old and disheveled but is a mastermind when it comes to the magical arts of evocation. From his cell can be heard incoherent babbling, but do not be fooled, he has escaped before.", "Minkus the Feebleminded – Everyone knows it’s a mistake that he’s in the prison. He’s a real sweetheart if a bit soft in the head. Sometimes his cell glows at night though. Oh, and don’t let him tell you about his nightmares if he says you were in one…", 
                "Sir Jim Haggins – A true gentleman at heart, he wears his ragged suit proudly. He’s perfectly polite in every way. He doesn’t look kindly on the poor however, oh no. He detests the poor. So much so that his hunting lodge was full to the brim with human trophies when the authorities finally tracked down ‘the Slum-spree Killer’", "Thiggund – This hairy brute is referred to by the only word he heads ever been known to utter. When the villagers of a small farming community found him by the road, surrounded by the brutalized remains of a merchant and his horses, Thiggund was arrested on the spot.", "Unburned Barty – A slight man with an unassuming smile. He survived being burned at the stake without a single scar. He was moved into isolation after his cellmates kept killing themselves", "Billy Pumpernickel – A gnome who is well known and loved in the prison, but actually committed a horrible crime. Everyone just goes with it, and other than the one horrible unforgivable thing, he’s just a pretty nice dude. Like ‘Hey, there’s Billy. Yeah, he mutilated a few kids, but only once. Nice guy.’ (Edit: This would just be hilarious when the players try to come to terms on how to treat him)", "The Time Master – Real name, age, sex, & race unknown. (S)he exists 5 minutes in the future. The cell was locked, and an empty plate appeared with a note. The note had an explanation and instructions. ‘Please place a full plate inside the cell each time an empty plate is discovered. Failure to do so will create a paradox and subsequently release the prisoner.’", "Elwe – An elf who walks through the corridors of the prison as if he was someone free, talks to the guards and other prisoners as they were friends. Says he is in prison due to stealing, is actually hiding from the king, who wants to kill him since he killed his father", "Ozob – An old looking human with hair only on sides and a fire potion (Molotov) where his nose would be. Always angry. Whenever someone looks wrong at him, he says: you are so annoying I might sneeze.", "Walks-Winding-Paths – A tabaxi shadow monk, she is kept in a fully lighted cell at all times, wearing glowing enchanted clothing. She is only fed by guards under a faerie fire spell, as otherwise they would cast a shadow which she could teleport into to escape. She will attempt to convince a party member to give her a cloak, bowl, or other object to block the light with.", 
                "Garth the Radiant – A paladin of the fallen angel Zariel. His guards are ordered to hit him every time they see him meditating or praying, as that would let him regain the spells, she grants him and summon his enchanted mace, Purity, to destroy his cell. If the party can bring him his weapon, or even give him ten minutes of peace, he will consider himself honor-bound to grant them a favor upon request. If their aims align with his, he might even fight alongside them.", "Nibbles – Literally just a warlock cat.", "Iydis Tyger-Eye – Former Guld Leader, she is high level Fighter and also a Were-Tiger. Killed the heads of other Were families, in an attempt to seize power and take control of the protection of the city, and its criminal underworld.", "Rollins – Air School Elemental Wizard. Believes in Anarchy and Equality of all races. In jail for starting a revolution and killing the Queen.", "Herman – Normal human who built Mythic Bracers of Shatter that are only attuned to him. Had used the Bracers to gain access and rob several small vaults. Then he was caught by an adventurer after going for heist to rob a merchant banker when he refused to harm others to escape with the goods. He refuses to teach/sell the knowledge of how to make the Bracers as he doesn’t want others to use it to harm someone.", "Roscoe Tealeaf – A well-dressed halfling who smells of saffron. He brokers deals between prison factions. It’s no secret that he is trying to escape. He claims he was framed by a noble, or maybe arrested breaking into the noble’s vault. He’ll tell anyone who asks that the noble has a dangerous artifact. Roscoe is a lore bard that specializes in counter spell silence and general magic user shutdowns.", "John ‘Musical Manipulator’ Green – Half-elf, in jail for making a whole court dance for hours on end to prove a philosophical point that the upper class will just do as they say to hold up appearances and are so comfortable in their wealth, they can watch it be taken away and redistributed.",
                 "Colin Green – human. John’s half-brother who supported him and helped with a second set up hands to pull off music. Tuomas Yurke – elf. the voice and magic behind all of this. Started to talk to John about these thoughts and with a few others began to flesh them out into a more concrete thought and into a sound. Loved by the low class, anticipated and loved by the upper class even though it is all a misunderstanding. The three of them are located at different corners and different levels of the prison so the music can’t come together and convince guards to open up cages. Mail comes from them from all over. 2 members of their group are still at large.", "Vaelh’noo – Githyanki sorceress who once commanded a powerful fleet in the astral sea before she was captured in a botched raid. Her secret is that she allowed herself to be captured to escape the wrath of the lich queen, whom she plots to overthrow from the safety of her cell.", "Quikiliar – A doppleganger (Rogue). Thrown into prison for impersonating a person of high authority, they’re known for frequently making their way into guard chambers by pretending to be one. They can get access to a lot of things if you ask for it, but almost always ask for some odd favor or trinket, usually personal, like a lock of hair or an image of someone loved.", "Locke – Once a guard themselves, this warforged fighter was sent to jail after attacking someone due to a misinterpretation of their actions. Unfortunately, this was also another guard with good standing with the warden, who had them put in. They serve their time willingly but can be interrogated or otherwise convinced to disclose explicit info about the prison and its guard shifts and similar.", 
                 "Breeze – An air genasi artificer, she was thrown into jail after selling several infused items for high prices and then the infusing a different item. Since then, she’s gotten in good favor with guards and other inmates by enchanting some magic items and plans to use these favors and connections to escape at some point.", "Zaurok – A Goliath Barbarian, although he acts calm and meditates. Known for the rare outbursts, during which he flies into a rage after being provoked or possibly from being disturbed while meditating. The several escape attempts that’ve happened are from him simply breaking the jail bars. Since then, he’s been relocated to a cell made out of adamantine.", "Slicer – Kenku cleric. Devoted to a god of trickery, they gained their name after a particular… Prank, on part of their god. Around the jail will often prank the various inmates but is also known to make distracting sounds at the guards at night. Likely to be able to convince with shiny objects to prank someone or create a distraction.", "Color-of-Blood – An insane Tabaxi woman incarcerated for eviscerating several people. Can often be found singing quietly to herself songs usually about ‘meal preparation’. Is usually docile and doesn’t react to being talked to unless threatened which she may attack while loudly singing ’50 ways to skin a human.’", "Reginald Mark – A mild mannered human male incarcerated for a chain of serial killings. He claims he’s possessed by a banshee, but no one believes him. His speech has a feminine undertone and his skin is cold to the touch. Those who threaten him are usually found in the morning choked to death with a horrifying look on their face.", "Tee’vah – Tiefling rogue who doesn’t seem too upset to be there. If approached he will happily show off a copy of his wanted poster, listing crimes from arson to murder. Secretly a doppelgänger who is honestly just trying to provide for his family and have some fun. Can break out any time he wants.", 
                 "The Dread Pirate Azuzula, Roger, and Primten – A Tiefling, an earth genasi, and an air genasi. Azuzula seems useless but the other two are competent sorcerers. Despite this they follow her words to the letter. In for piracy. Azuzula can’t spell and keeps ranting about her ship the Doom Squid. Will challenge people to fights.", "Taryon Sandstone – A half-elf paladin who used to be a slave fighting in gladiator pits. After gaining his freedom, he vowed to fight for the freedom of other and became a powerful hero. After the tragic loss of a close friend, he went on an overzealous crusade against slavers, killing them and their family as well as anyone who had in any way helped them (ship captains, harbor employees, food/clothes/rope vendors, blacksmith, etc.)", "Tilby Valenois – A gnome mage of sorts who has committed zero crimes besides somehow breaking into a maximum-security prison and… staying there? The security guards have tried to get him to leave numerous times but usually get charmed or subdued out of it magically. Nobody knows why the gnome wishes to be there, but he hasn’t been messing with the order of things much.", "Adelai – A rather amicable young woman. Nobody knows for sure what she’s in for, but general consensus is that it involved a basilisk head and the water supply to a small town", "Vass – A large orc man that was used as a phylactery for a lich. Vass has been hearing whispers of the lich in his mind and is slowly being possessed. He has started doing horrible things under the influence of the lich. Performing Magic’s that he has no right to know.", "Endeer – A being that inflicts his victims with horrible nightmares in each of these nightmares a horrifying creature appears to the dreamer and offers them the opportunity to “Loose yourself from the chains of your labored slumber” if the dreamer accepts, they never sleep again as their mind descends in to horrible madness", 
                 "Cultists of the Basilisk – These cultists are attempting to create the creature they worship a terrible all-knowing basilisk they know that they will be successful and that the basilisk will destroy anyone who knew about him and didn’t help create him so they only share their beliefs with those they deem helpful or worthy of death", "Arnold Long – A half orc/elf, he looks like a giant of a human and seems pleasant to be around in a group of people. While it appears, he is a big stupid sweet teddy bear of a person, his record is full of brutal killings that may or may not have happened. The last killings were not too long ago after a prison gang isolated Arnold in the showers and bribed a guard to not interfere. Long story short, the gang WAS major player in the prison, now all of its muscle IS dead, and the guard went missing. Arnold is to be handled with care and kindness.", "The ‘Statue of The Maiden’ – It looks like a statue of a naked elven woman that was bought by a merchant (deceased) from an artist (deceased) who sold it to a noble (deceased) for a gift to his wife (deceased) and children (deceased). All that is known is the statue moves when not observed and will eat and clean itself. It leaves flirtatious messages for the guards it likes and death threats to the guards it hates. The artist swore on their deathbed it was a mistake for them to create it but, this is the only place it has been stored where it does not kill thought it has maimed a few people who fail to respect it. Attempts to remove, destroy, or study it has been ‘unfruitful and unwise’.", "Inspector Brundt – A beardless dwarf imprisoned for the crimes of tax evasion, swindling, theft, and gross debt. He knows how to get things and bribes the guards to get luxuries and messages through the prison walls.", "Tur the Kobold – He seems stupid and harmless. Everyone assumes he’s just a patsy who took the fall for a bigger criminal. Occasionally, though, he lets something slip that only someone high-level in a criminal organization would know.", 
                 "Axe Hands – A warforged barbarian who found great success as a military shock trooper, but also was involved in an incident where he dismembered a commanding officer. Sees prison as an ‘extended furlough” and is convinced he’ll be let out when the next war starts.", "Clara – A human paladin. Recruited into the military, she was driven mad by the trauma of war and turned oathbreaker. Jailed for the same incident as Axe Hands, having used her healing abilities to keep their victim from bleeding out after being dismembered. Lives to see people suffer but remembers enough of her pre-oathbreaker life to maintain a kind, innocent facade when it suits her.", "Harald Silverfinger – An elf wizard who sees humans the same way a scientist sees a bucket full of white rats; testing fodder. They’re close enough to elves to be useful for experimentation, but short-lived enough that killing them really isn’t a big deal. It’s rumored that the local guild is secretly helping him continue his work, using his fellow prisoners as test fodder.", "Verdos – A dwarven female cleric. Believes she was morally just in murdering the children of a local village. Full of righteous anger. Judges everybody according to her own warped and insane moral code. Can often barely be understood. In maximum security for obvious reasons. Can offer a range of cleric services at prison prices.", "Tabitha Binks – A Tabaxi Rogue. An orphan growing up on the coast, she quickly fell in with the Revelry pirates. Tabitha learned to use her claws as lockpicks and may teach other Tabaxi how to as well. She was caught at sea after ambushing a wealthy fur trader.", "James the Changeling – A male changeling known for impersonating the guides and has so far escaped every prison he’s been in. He’s a new inmate already planning his escape.", "??? – the cell appears empty, save for a stool. Could be they’re just using it for storage. But, then why does that stool make the hairs on the back of your neck stand up?", "Ood – A very old, frail and nearly paralyzed Illithid who sits still in solitary confinement, his blind eyes wide open, and only blinks or changes his position once or twice per year. Said to have messed something up when attempting to become an Alhoon. Nobody knows why he’s there, but he occasionally sends nearly unintelligible telepathic riddles to the other prisoners. Rumor has it he has invaded the minds of everyone in the prison and lives vicariously through their dreams at night.",
            ]
            let output = `There is a prison nearby... ${searchArray(type)} Most know that ${searchArray(prisoners)} The guards ${searchArray(guards)} If you dare venture you may be able to find someone who can be considered ${searchArray(help)} ${variableEvent([`Also, rumor is that a highly notable criminal is serving a sentence here right now: `+ searchArray(namedPrisoners)])}`
            document.getElementById("details").innerHTML = output
        };
        function findCorruption() {
            let front = [
                "drug den", "bar", "marketplace", "racetrack", "gambling den", "regional 'philanthropic' organization", "brothel", "arena",
            ]
        
            let customers = [
                "high-society types, the elite", "criminals, ne'er do wells and blackguards", "working class folk", "travelers, tourists, pilgrims", "ethnically, culturally or racially exclusive", "people of a certain faith", "the local bourgeoisie", "all walks of life",
            ]
        
            let owner = [
                "run by criminals", "run by some sort of powerful and sinister being", "run by some sort of powerful and benevolent being", "run by a member of the elite", "run by a guild or trade organization", "run by outsiders, from another polity", "run by a church or cult", "individually owned",
            ]
        
            let uniqueFeature = [
                "built in or atop the corpse or bones of some great beast", "the owners have connections to smugglers and can arrange the purchase of illegal goods", "the location is protected from magical intrusion, including scrying", "no matter the time, the place is never closed, they will always accept customers", "the place is protected by the powers that be, there is little to no chance of being hassled", "a secluded room in the establishment is home to a portal or gate to another dimension", "the location of the establishment rotates or shifts over time or by a set schedule", "it requires a password, certain style of dress or invitation to enter",
            ]
            let output = "There is corruption in the " + searchArray(front) + ". It is typically frequented by " + searchArray(customers) + ", but it is " + searchArray(owner) + ". I heard that " + searchArray(uniqueFeature) + ", but I think you should check it out yourself."
            document.getElementById("details").innerHTML = output
        };
        function findLegalStructure() {
            let setting = [
                "barracks/guardhouse", "customs house", "guildhall", "prefect/sheriff's office", "local military order", "noble's court", "temple", "elder's abode",
            ]
        
            let helpfulness = [
                "of the extralegal kind. conversely it is difficult to get the help the place is ostensibly supposed to provide.", "as one would expect of the place, but the means to gaining it is excessively bureaucratic and roundabout.", "normally, provided that you can bribe your way in.", "that is of high quality and without strings, but only the favored may avail themselves of it. Who is among the favored is determined by the leader.", "that is low, and without much zeal. They cannot turn anyone away, regardless of social strata.", "that is high, but only citizens in good standing with the community are able to use the services.", "that is average, only those of a certain class can use it, such as those of a certain ethnicity or faith.", `that is average, however it is hopelessly overworked and the waiting list is at least ${1+rollDice(6)} weeks long.`,
            ]
        
            let leader = [
                "short tempered and overworked, but competent and dependable.", "distracted and half-hearted, a product of nepotism.", "kind, but ineffectual and relatively powerless in their own organization.", "domineering and power hungry, will try to utilize players to help themselves.", "eccentric and slightly bizarre with a focus on a hobby entirely unrelated to their own organization.", "responsible and busy, a true delegator who may have other obligations.", "prone to risky behaviors and indulging in vice, often needs to be talked out of poor courses of actions by their underlings.", "gregarious, with an eye towards expansion. May try to recruit or pressure the players into helping them.",
            ]
        
            let quirk = [
                "there are no doors, banners, tapestries or decorations - the better to spot potential assassins or thieves.", "a familiar spirit has been bound to the place. Though it cannot affect the corporeal, it can protect against other incorporeal threats as well as observe intruders and warn the residents.", "the place was made to be as self-sufficient as possible, there are areas set aside for the cultivation of food, a well and more.", "the building which houses the organization is one of the largest and most reinforced in town, it finds use as a citadel when the community is threatened.", "the structure is multi-purpose and extremely important. many members of the community often visit every day, even if they have no need for services.", "this particular organization is important to the wider world, perhaps they are a regional headquarters, perhaps they are the site of a pilgrimage. Regardless, the organization is notably wealthier than the community around them.", "the organization is in possession of a holy relic, such as the bones of a saint. Extraplanar entities cannot enter the building without grievous harm coming to them.", "the stones of the place have been enchanted somehow to prevent the use of teleportation magics. No one may safely use spells such as blink, dimension door or teleport within a mile of the building.",
            ]
        
            let output = "The legal structure of this place is centered around the " + searchArray(setting) + ". They offer help " + searchArray(helpfulness) + " The leader is " + searchArray(leader) + " Curiously, I've heard that " + searchArray(quirk)
            document.getElementById("details").innerHTML = output
        };
        //population
        //shape
        //age
        //wealth
        //assets
        //eccentricities
        //corruptions


        //location benefit
        let agriculture = ['fruit','mushrooms','vegetables','seeds','eggs','honey','fish','grain','herbs','nuts','livestock','dairy','wool','flowers','mead','beans','lumber','water','dung','magical']
        let cultures = ['agricultural','hunter gatherer','magical','industrial','feudal','trade','commune','devout','primitive','advanced','nomadic','tribal','hedonistic','ancient','multicultural','ancient','explorers','militaristic','mysterious','isolationist','monarchy']
        let economy = ['agriculture','trading','crafting','arms','livestock','education','faith','magic','archaeology','technology','medicine','nobility','prophecy','equality','shipping','fishing','crime','smuggling','expeditions','hunting']
        let districts = ['arcane','artisans','commerce','divine','entertainement','fovernment','boarding','religious','crafting','housing']
        let settlementAsset = ['natural resource','natural defenses','land','strong leader','large population','strong army',' nearby allies','ancient protector','powerful item','wealth','loyal citizens','favor of a diety','trade routes','technology','defensive buildings','long history','magical','navy','diplomacy','secret knowledge']
        function findResources() {
            let food = [
                "pelts/game (rich ecosystem)",
                "fish (natural fisheries)",
                "farmed animals (using range land)",
                "clean water and farming (aquifer)",
            ]
            let luxury = [
                "non-precious stone or metal (large sedimentary rock formations)",
                "sap/rubber (sugar maple/ rubber tree)",
                "timber (lush forests)",
                "precious stones or metal (large underground caverns)",
            ]
            let prosperity = [
                "nearly exhausted. The community is likely dying if this is the only major resource in the area. The resource itself has nearly petered out.",
                "on it's last legs. While there are some reserves left, it has grown increasingly clear to everyone that the good times are gone.",
                "hitting hard times. If any one was on the precipice of leaving, they'll probably do so now.",
                "hitting a rough patch. The easy work has started to dry up; outsiders trying to make their fortune will not be welcome.",
                "business as usual. Residents have long ago developed a routine, the extraction is steady and the methods are all well known and effective.",
                "experiencing rising tides. People are rich, there's always a hunger for new laborers and the community is building for the future.",
                "flourishing. New claims are being made all of the time, the amount seems almost endless.",
                "in 'boom town' mode. The amount of material they have on hand is enough to support their own needs, as well as several smaller outlying communities.",
            ]
            let hazard = [
                "hellish. Procuring the resource is almost more trouble than it is worth. perhaps there are hostile beings or spirits guarding it, or it is in an area of active environmental peril.",
                "miserable. There could be aggressive or predatory creatures which lurk in the area, or it could be in a place which is unpleasant to work in, such as an area with constant inclement weather.",
                "normal. It is as dangerous to gather this material as it would be in real life.",
                "normal. It is as dangerous to gather this material as it would be in real life.",
                "normal. It is as dangerous to gather this material as it would be in real life.",
                "normal. It is as dangerous to gather this material as it would be in real life.",
                "safe. The resource is well-managed and maintained, perhaps there is competent management, or the area itself has somehow been changed to ease the work.",
                "arcadian. It is so easy to find or secure more of the material that is is nearly worthless locally.",
            ]
        
            let interesting = [
                "the resources are contested, whether by another nearby community, or some sort of population or force which guards it.",
                "while the quality of the material is objectively as high as any other location, it is widely thought of as being cursed or bringing ill-luck.",
                "the material isn't naturally occurring, it is being drawn from the ruins or rubble of some previous civilization.",
                "an annual ritual or sacrifice is required to keep the spirits or beings which inhabit the area satisfied. The consequences will be dire if the oblations aren't performed.",
                "the resource requires a special treatment or process to be rendered safe to humanoids. This process is a closely guarded secret.",
                "a guild or another similar organization controls access. Competitors can expect serious reprisals.",
                "the quality of the resource from this area is renowned far and wide. It fetches an unusually high price.",
                "gathering the resource can only be done on a certain schedule. Perhaps it is underwater some of the year, or the path to access it is cut off for weeks or months on end.",
            ]
        
            let secondaryAction = [
                'they do not know of/ understand their capability for using/exporting ',
                'they are also well aware of and capitalize on ',
                'they cannot access (due to natural barriers) ',
                'something has taken away their previous access to ',
            ]
        
            function pickFoodOrLuxury() {
                let chance = rollDice(100)
                if (chance < 50) {
                    return "has a focus on exporting their " + searchArray(food) + ' while ' + searchArray(secondaryAction) + searchArray(luxury) + "."
                } else {
                    return "focuses mainly on harvesting and exporting " + searchArray(luxury) + ' while ' + searchArray(secondaryAction) + searchArray(food) + "."
                }
            }
            let output = "This community " + pickFoodOrLuxury() + " Regarding the main resource, it is " + searchArray(prosperity) + " Getting the material is " + searchArray(hazard) + " Also, " + searchArray(interesting)
            document.getElementById("Resources").innerHTML = output
        };
        

        //treasures and items
        let treasures = ['weapon','armor','coins','book','magic item','scroll','ring','cursed item','potion','artifact','spell tome','clue','gemstone','cloak','shield','mask','journal','map','key','nothing']
        let adventureGear = ['compass','waterskin','spyglass','flint & stee','rope & hook','caltrops','oil','lantern','vial','backpack','candle','torch','rations','hourglass','disguise kit','writing kit',`thieve's tools`,'repair kit',`alchemist's kit`,'map']
        let armor =['clothing','padded','leather','studded leather','hide','chain','scale','half-plate','ring mail','chain mail','split','plate','shield','cloak','boots','gloves','helm','ring','amulet','robe']
        let weapons = ['dagger','mace','staff','light hammer','spear','crossbow','shortbow','lightbow','battleaxe','flail','shortsword','greatwsword','greataxe','halberd','morningstar','rapier','warhammer','scimitar','whip','lance']
        let items = ['amulet','arrows','axe','belt','boots','bow','book','bracelet','breastplate','brooch','candle','cloak','coin','compass','crown','cup','egg','feather','flute','glove','gem','hammer','har','helm','horn','lute','machiantions','mask','mirror','necklace','net','pack','potion','ring','rope','scepter','shield','skull','sword','wand']
        let magicitemtype = ['ring','potion','grimoire','candle','orb','claw','cup','deck','cloak','armor','glove','boots','shield','sword','dagger','hammer','key','symbol','instrument','spear']
        let potionType = ['resistance','appearance','polymorph','speed','cure','detect magic','clairvoyance','luck','size','stamina','sense heading','flying','language','undeath','elemental','curse','invisibility','barkskin','heightened sense','telepathy']
        let magicItemElement = ['acid','blood','bone','poison','clay','fire','fungus','stone','glass','ice','wood','water','dust','plague','shadow','light','sound','psychic','lightning','wind']
        let musicalInstruments = ['bagpipes','drum','dulcimer','flute','lute','lyre','horn','pan flute','shawm','viol']
        function findTreasure() {
            let why =[
            "it was an accident, a shipment lost to random chance or calamity for some reason it was never reclaimed", "a noble family, displaced by a revolt or disaster, hid their secret somewhere only they could find it", "a group of raiders or pirates, storing a score until it was safe to retrieve it", "members of a religious minority, fleeing persecution hid their posession from their pursuers", "an extremely powerful figure, such as a culture hero or particularly skilled spellcaster had a personal stash", "the treasure was part of a tontine or related to the retirement of the members everyone died before anyone could retrieve it", "the society surrounding the hidden treasure collapsed, and its location was forgotten", "the treasure was important in some way -- perhaps it was the site of votive offerings, or the location of a guild's vault -- and it was guarded, while most of it's sentinels have died or vanished, some may still be guarding it",
            ]
            let form = [
            `the classic treasure map made of vellum, inked, and showing off a simple guide to the terrain leading to and around the score, ${searchArray(['this map is currently whole',`this map is in ${toWordsLc(1+ rollDice(15))} pieces`])}`, "relatively well-known regionally and it takes the form of a local legend such as a story, poem or song", "a strange and bizarre device, such as a potion which makes one recall the memories of one of the people who hid it", "a cipher, puzzle or some other form of riddle", "hidden within the patterns of a natural feature, such as a set of holes within a hillside, or the shadows of a grove of trees", "one of the people (or a descendant of one) responsible for hiding the treasure. This person is spilling the location to many others, the party are certainly not the only ones who have caught wind of it", `split between ${toWordsLc(1+ rollDice(6))}people, all of whom have a piece of it`, "nonexistant - there are only the remaining notes (and possibly spirits) of those who hid it... they must be searched or interrogated for the location",
            ]
            let where= [
            "on an isolated and deserted island", "deep inside a cave or another subterranean region", "at a religious site, such as a temple or a shrine", "in the middle of nowhere, a barren place, far from any civilization", "inside an urban area, currently inhabited or reduced to deserted ruins", "at the bottom of the ocean or a lake", "in a castle in the sky", "on a celestial body, such as a planet or other plane of existence",
            ]
            let what = [
            `riches! Glittering gold and prizes... the intrepid explorers will find ${500+rollDice(500)+rollDice(500)} gp`,"pandora's lament - an extremely powerful monster has been bound to this site, and opening where it is held releases it", `a cache of ${searchArray(["powerfully magical", `exotic and finely crafted ${searchArray(["ivory", "gold", "silver", "platinum", "jade"," ruby","diamond", "obsidian", "mythril", "amethyst"])}`])} weapons and armor`,"cultural artifacts and personal effects worthless to most, priceless to the right buyers", "magical paraphernalia such as scrolls and potions, maybe even a spellbook",
            ]
        
            let output = `There is a rumor of a local treasure... the rumor goes "${searchArray(why)}." Finding the treasure will be hard enough, the map is ${searchArray(form)}. The treasure is hidden ${searchArray(where)}. The prize is ${searchArray(what)}.`
            document.getElementById("details").innerHTML = output
        };
        //LEGENDARY ITEM
            //Reputation
            //Attainability
            //complexity
            //potency
            //appearance
        //Treasure
            //Rarity
            //USabiliy
            //Tradeability
            //mobility
            //notoriety

        
        //cult
        let cultFocus = ['ritual','bodies','drugs','prophecy','demon','old god','location','relic','book','chaos']
        let cultGoal = ['sacrifice','spread','acquire','destroy','summon','curse','consume','corrupt','manipulate','eradicate']

        //Lair
        let lair = ['cave','tower','throne room','temple','sewers','ship','castle','mountain','mine','catacombs','crypt','church','mansion','spire','shrine','chasm','necropolis','vault','ruins','sanctum']

        //people
        let personality = ['hermit','fanatical','arrogant','jealous','obsessive','mischievous','warm','ambitions','intelligent','stoic','fiery','paranoid','observant','empathetic','unforgiving','egotistic','careless','narcissistic','volatile','pious']
        let Backgrounds = ['acolyte','anthropologist','archaeologist','athlete','charlatan','city watch','clan crafter','cloistered scholar','coutier','criminal','dissenter','entertainer','faction agent','far traveler','fisher','folk hero','gambler','gladiator','guild artisan','guild merchant','haunted one','hermit','initiate','inheritor','investigator','knight','mercenary veteran','noble','outlander','pirate','sage','sailor','secret identity','shipwright','smuggler','soldier','spy','student of magic','urban bounty hunter','urchin']
        let desire = ['Make people smile.', 'Be left alone.', 'Be a master in their field.', 'Satisfy their curiosity.', 'Have justice done.', 'Make sure justice prevails.', 'Do nothing.', 'Be a better person.', 'Find a thrilling life.', 'End suffering of all.', 'Solve an ancient mystery.', 'See others suffer.', 'Fight for their homeland.', 'Find a new creative outlet.', 'Destroy corruption.', 'Spread joy.', 'Break a habit.', 'Solve a mystery.', 'Remain hidden.', 'Have fun.', 'Apologize.', 'Win a competition.', 'Overthrow the government.', 'Uncover a secret plot.', 'Be forgiven.', 'Reconcile with a person.', 'Reunite with a lost friend.', 'Be strong.', 'Have their work recognized.', 'Find out a secret.', "Clear a friend's name.", 'Find a cure.', 'Regain their honor.', 'Protect a friend.', 'Be able to eat.', 'Stop a criminal.', 'End the suffering of a friend.', 'Find a new creative outlet.', 'Experience something new.', 'Be amused.', 'Change the past.', 'End the suffering of a family member.', 'Break a habit.', 'Find a job.', 'End a war.', 'Become rich', 'Escape a bad situation.', 'Win a game.', 'Protect the innocent.', 'Become anonymous.','wealth','safety','renown','power','hope','revenge','love','knowledge','freedom','blessings','justice','redemption','knowledge','chaos','adventure','glory','peace','revolution','truth','time']
        let fears = ['being identified by law enforcement, as the they are currently a fugitive', 'not being liked by everyone', "not living up to everyone's expectations",
        'being killed by a random skirmish', 'being discovered for cheating at gambling', 'being discovered for robbing drunk citizens at night', 'being discovered for killing travelers', 'being replaced by someone more competent', 'being swindled out of money', "being discovered as the murderer of the local [Shop Kind] owner whose body is rotting nearby", 'being beaten by a rival', 'losing their good reputation', 'being killed by a rogue that was cheated', 'being arrested for illegal activity', 'losing their livelihood', 'being robbed', 'the wrath of [Random Deity]', 'followers of [Random Deity]', 'magic', 'the voices in their head', "being convicted of a crime they didn't commit", 'rats and rodents', 'the end of the world', 'someone targeting them with spells', "women's undergarments", 'anyone missing an eye', 'being poisoned', 'clowns and court jesters', 'the eternal slumber that is death that will consume them eventually', 'insects', 'enchantment magic', 'illusion magic', 'debuff spells', "one day discovering that they're crazy", 'damage to their property', 'aberrations', 'undead', 'fey', 'elementals', 'Drow', 'Duergar', 'Orcs', 'Goblins', 'Kobolds', 
        'Gnomes', 'Elves', 'Halflings. Small hands, smell like cabbage...', 'ghosts', 'thunder and lightning', 'drowning', 'fire', 'darkness', 'outsiders', 'sorcerers', 'divine magic', 'snakes', 'spiders', 'enclosed spaces', 'Tieflings', 'that someone will take / steal the strange crystal that fell from the sky near their house', 'that someone will read their diary', 'losing a precious family heirloom', "that their loved one won't come back from the war", 'catching bad luck from a foreigner', 'catching disease from a lizard folk, teifling, dwarf, or halfling', 'being bewitched by a Drow', 'witches(female spellcasters)', 'having their luck stolen by a halfling', 'being trampled by a horse', 'being shot by a crossbow', 'being killed in a brawl', 'law enforcement', 'the town mortician/undertaker', 'those with an obvious physical deformity', 'the sight and smell of blood', 'large flocks or swarms of creatures', 'sharp teeth and apex predators', 'that 1 out of 3 children is definitely a goblin in disguise, there is no way of knowing', 'for sure, so we best just keep kids at bay', 'facing south', `While drinking a liquid, lest their heart will stop like mother's did`, 'the moonlight', 'not being remembered', 'public embarrassment', 'being shown up by the opposite sex', 'a terrifying specter, known only as "The Boogeyman"', 'having a dog sicced on them', 'being made to drink unsavory substances', 'swimming', 'heartbreak.Never again...', 'illness of any kind,', 'being swindled or tricked', 'being laughed at', 'whoever was here just before you - they were bone - chillingly terrifying', 'any other race', 'losing social standing with the royal family', 'getting discovered for having recently murdered someone', 'being wrong or incorrect about anything', 'growing old and fragile', 'tests. Of any kind','water','animals','silence','sunlight','shadows','blood','monsters','self','prison','fire','ghosts','filth','violence','curses','gods','sickness','crowds','storms','loneliness','time']
        let flaw = ['envy','fear','careless','paranoid','obession','arrogance','delusional','anger','greed','anxiety','health','guilt','family','nightmares','curse','despair','debt','reputation','physical','money']
        let armedCharacters = ['guard','chief','captain','marshal','lieutenant','mahor','sellsword','bounty hunter','bodyguard','archer','rogue','hunter','jailer','squire','mercenary','officer','gladiator','ranger','soldier','vigilante']
        let citizenCharacters= ['commoner','actor','cook','mason','bard','painter','courier','scholar','tailor','partron','student','historian','elder','artist','trainer','guide','miner','sailor','servant','apprentice']
        let holyCharacters = ['acolyte','bishop','cardinal','cleric','crusader','deacon','diviner','guru','heretic','inquisitor','minister','missionary','monk','nun','priest','prophet','saint','paladin','healer','deity']
        let magicCharacters = ['enchanter','druid','apprentice wizard','oracle','sorcerer','mystic','witch','necromancer','witch doctor','warlock','mage','wizard','transmuter','illusionist','evoker','diviner','conjurer','abjurer','summoner','lich']
        let merchantCharacters = ['alchemist','baker','barber','barkeep','blacksmith','butcher','cartographer','doctor','fisherman','herbalist','innkeeper','investigator','jeweler','locksmith','merchant','scribe','tailor','tanner','trader','weaponsmith']
        let nobleCharacters = ['knight','duke','baron','count','king','queen','prince','princess','judge','officer','mayor','lord','diplomat','noble','treasurer','council member','landlord','politician','chancellor','highborn']
        let seedyCharacters = ['bandit','spy','assasin','smuggler','fence','thief','rat-catcher','peddler','pit fighter','cutpurse','beggar','gambler','fugitive','grave keeper','outlaw','cultist','exile','rebel','executioner','drunk']
        let wildernessCharacter = ['forager','hermit','explorer','hunter','druid','scout','farmer','bandit','scavenger','pilgrim','raider','trader','trapper','messenger','minsterl','poacher','lumberjack','fisherman','deserter','collector']
        function findThePeople() {
            function buildRace() {
                let common = [
                    'Humans'
                ]
                let uncommon= [
                    'Dwarves',
                    'High-Elfs',
                    'Wood-Elfs',
                    'Gnomes',
                    'Half-Elfs',
                    'Halflings'
                ]
                let rare = [
                    'Dragonborn',
                    'Tieflings',
                    'Genasi',
                    'Aasimar',
                    'Half-Orcs',
                    'Tabaxi',
                    'Drow'
                ]
                let vRare = [
                    'Kalashtar', 'Shifters', 'Warforged', 'Simic Hybrids', 'Changelings', 'Goliaths', 'Giths', 'Yuan-Ti', 'Tortles', 'Aarakocras', 'Orcs'
                ]
                let eRare = [
                    'Bugbears', 'Firbolgs', 'Goblins', 'Hobgoblins', 'Kenkus', 'Kobolds', 'Tritons', 'Lizardfolk', 'Vedalken', 'Verdan', 'Locathah', 'Grungs', 'Centaurs', 'Loxodons', 'Minotaurs'
                ]
                function findRace() {
                    let chance = rollDice(100)
                    if (chance > 98) {
                        return searchArray(eRare);
                    } else if (chance > 95) {
                        return searchArray(vRare);
                    } else if (chance > 80) {
                        return searchArray(rare);
                    } else if (chance > 50) {
                        return searchArray(uncommon);
                    } else {
                        return searchArray(common);
                    }
                    //document.getElementById("Race").innerHTML = characterRace
                };
                let charRace = findRace();
        
                return charRace
            };
        
            let character = [
                "martial", "urbane", "faithful", "agrarian", "reserved", "mercantile", "peaceful", "decadent", "erudite"
            ]
            let govSubArray = [
                [ //0
                    "fiend", "celestial", "aberration", "dragon", "undead/spirits",
                ],
                [ //1
                    "spellcasters", "militants", "merchants", "priests",
                ],
                [ //2
                    'is popular with', 'is despised by','is tolerated by'
                ],
                [ //3
                    "nearby polity", "far-away empire", "tyrant", "puppet governor",
                ],
                [ //4
                    "an Autocracy (One hereditary ruler wields absolute power)", "a Bureaucracy (various departments compose the government, ansewring to a council)", "a Confederacy (Each individual town governs itself, but all contribute to a league that benefits each member state)", "a Democracy (citizens elect representatives to determine laws)", "a Dictatorship (one supreme ruler holds absolute power)", "a Feudalisic state (Lords and vassals, vassalsprovide soldiers or payment, lords provide protection)", "a Gerontocracy (elders preside over this society, especially elders from long-lived races)", "a Hierarchy (Everyone is under soemone else, except one)", "a Magocracy (Composed of spellcasters who rule as oligarchs, feudal lords, or a Democracy/ Bureaucracy", "a Matriarchy (ruled by the eldest or most important woman)", "a Militocracy", "a Monarchy (A single, hereditary sovereign wears the crown. different than an Autocrat - a monarch's power is limited by the law)", "an Oligarchy (A small number of rulers share power, possibly diving the land into districts under their control, or ruling together)", "a Patriarchy (ruled by the eldest or most important man)", "a Meritocracy (the most intelligent and educated people oversee the society, combined with a bureaucracy for the day-to-day work.)", "Plutocracy (Society is governed by the wealthy)", "a Republic (Government is entrusted to an established electorate who rule on behalf)", "a Satrapy (Conquerers and representatives from another government weild power)", "a Kleptocracy (Composed of groups or individuals primarily seekign wealth for themselves)", "a Theocracy (rulership falls to a direct representative or collection of agents of a diety)"
                ]
            ]
            let governance = [
                `by a ${searchArray(govSubArray[0])}`,
                "by a noble or member of royalty",
                "by a council, perhaps of elders or potentates",
                "by nobody. This place is in anarchy, law & order has broken down, or perhaps never existed in the first place",
                "by criminals. They've overwhelmed the proper authorities, or perhaps it was their town to begin with",
                `by a cabal of ${searchArray([`${searchArray(govSubArray[1])}`,`${searchArray(govSubArray[0])}`])} that ${searchArray(govSubArray[2])} the populace`,
                `by an oppressive ${searchArray(govSubArray[3])}`,
                `by ${searchArray(govSubArray[4]).toLowerCase()}`,
            ]
            let knownForSubArray = [
                "swimming", "hunting", "agility", "strength"
            ]
            let knownFor = [
                `their fine crafts`, `being near the site of a great battle`, `maintaining the grave of a great king or hero`, `their luxurious hospitality`, `their livestock`, `their physical prowess in ${searchArray(knownForSubArray)}`, `their skilled warriors or soldiers`, `their knowledge or learning`,
            ]
            let customsSubArray = [
                ["fiend", "celestial", "military order", "faith", "monster", ],
                ["by the local criminal organization", "through trial by combat", "through augury (reading omens)", "through agreed upon written law"],
                ["in trees", "underground", "on or under water", "an animal or some other huge beast"],
                ["spellcasters", "a certain faith", "members of a certain race or ethnicity", "outsiders"],
            ]
            let customs = [
                `they are bound to service or stewardship of a ${searchArray(customsSubArray[0])}`,
                'these people are nomadic, whether by inclination or necessity, the community is where they are',
                'currency does not exist here, instead "gifts" & barter are the rule',
                `justice here is decided ${searchArray(customsSubArray[1])}`,
                'the people here dress themselves in strange clothes or odd adornments',
                `they dwell in an odd (to you) living space, namely ${searchArray(customsSubArray[2])}`,
                'interactions here follow a sort of script or tradition and it is taboo to break with them',
                `there is a fear or hatred held towards ${searchArray(customsSubArray[3])}`,
            ]
        
            let output = `This community${searchArray([', of diverse composition,',`, primarily composed of ${buildRace().toLowerCase()},`,`, solely composed of ${buildRace().toLowerCase()},`])} is known for it's ` + searchArray(character) + " citizenry, as well as for " + searchArray(knownFor) + ". They are governed " + searchArray(governance) + ". I've also heard that " + searchArray(customs) + '.'
            document.getElementById("People").innerHTML = output
        };
        function findRumor() {
            let uniqueFeatures = [
                `there is a unusually large concentration of sky iron (meteoric iron) in the nearby hills`, `that in ancient times, these lands were flooded with lava from the nearby volcano. Today, the volcano lies silent, long since extinct, fertile soil is plentiful, and signs point to the possibility of veins of adamant (the main component of adamantine) underground`, `that the water from the lake is not only extraordinarily pure, it contains minerals that help to promote good health`, `that the nearby caves contain crystals made of concentrated magic`, `that there is a dangerous portal to yggdrassil (built to keep the baddies from comin out)somehwere nearby`, `that there is an alchemy ingredient only farmed here... like miniature bullette farms for their unfertilized eggs to make an omelette of digging giving you a burrow speed of 5' or 10' with a pick or shovel`, `that self aware water weirds gather fish for the nearby gnomes who then buy water from other sources with the fish money to feed the water weirds. They were influenced by the gnomish goodness long enough to change their attitude`, `that the hills around and in the village are actually giants’ skeletons, long since grown over in a graveyard forgotten`, `that there is a giant slab of rock. If the slab comes down the whole city comes down with it one building at a time`, `that there is an abandoned cursed royal palace which has the corpses of the royal family and the previous king inside. People call the city the “dead capital” because of this`, `the town has a giant sleeping monster under it, with parts of its claws, feet, mouth and tail in different underground places of the town (abandoned houses basements, sewers, etc...)`, `there is a shrine to an unknown god, that gets regular blessings and sacraments`, `there was an animal that saved a child from a lake, and the village was the original settlers who protected the animal out of respect`, `there are some unique flowers here that make a honey that had unique properties`, `the city is in a bio-dome/micro climate`, `this is a highly magical city that binds underneath a sleeping tarrasque - stolen from somewhere else`, `the village is protected by an invisibility bubble in the middle of a forest`, 
                `the village is only accessible by a lifting bucket, as it is in the middle of a tight mountainous land - think the greek meteora monastery`, `that the town is a thieves guild operation center and has all kinds of subterranean tunnels leading outwards, and connecting major buildings`, `the town has a giant spire enables ordinary people to cast sending across the continent`, `the town is at the site of an ancient battle between giants and dragons have filled the area with giant skeletons and weapons. People have used these as a foundation for their houses`, `the entire town is built around a school that teaches magic. As a result everyone can cast some magic`, `that for some reason, the chickens grow real big here. Like turkey-size, not t-rex size. Eggs are bigger, too. Nobody knows why`, `that eons ago, a gargantuan semi-magical whale died here. Its blubber has seeped through cracks in the rock under the earth, and can occasionally be found dripping from cliffs on the side of the hill that formed above the carcass. The blubber can be used for lamps, greasing axles, and many other uses. There is a thriving mining industry exporting the blubber to the nearby towns and cities, but it's becoming harder and harder to find usable veins of blubber`, `that a pleasant song constantly plays on the very edge of hearing. The town is tranquil and peaceful; arguments are resolved amicably, and fights never break out amongst the residents. If outsiders come into town and attempt to fight, they will find that any lethal attacks or spells suffer a flat -5 damage reduction. Nonlethal attacks are unaffected`,
                 `that the trees in the forest surrounding the town are slightly sentient. Unusually fast-growing, they built up a surplus of dried and seasoned branches still attached to the tree. Anybody walking through the forest holding at least one twig of dry firewood will find branches dropping in neat circles around trees near them. There's no need to wear a helmet: the trees are careful not to hit anybody. In return, the villagers divert a portion of their manure and compost to fertilizing around the trees, and allow their goats to graze in the forest, eating plants that compete with the trees. When the town is about to be in danger, the trees will start dropping healthy branches with leaves, alerting villagers in time to build defenses`, `the town has a large geyser or hot spring`, `that the center of town is always raining. no one knows why. It's suspected that it is magic from an ancient wizard, and no one is able to stop it`, `there is a feral cat that lives in town. All the people worship the cat, despite the fact that it seems like a normal cat`, `the town is made up of cliff dwellers who mine guano from an extensive network of deeper, bat infested caves, and who exports fireworks`, `the town is a cosmopolitan atoll inhabited by folks who are comfortable living both above and below sea level`, `that the town is atop a mesa that breeds and trains griffons and other winged mounts`, 
                 `that a giant metal rod has been left in a field over the ages people tried to investigate it but had no luck in finding out why it was there. Eventually people built a town around this pole and now there can always be sure of a thunderstorm in the town. The townspeople used this to their advantage and are now leading in the use of electrical appliances`, `there is an obelisk at the center of town fairly hums with magical power. All the townsfolk can tell you about it is that it brings good health and prosperity to the town. you learn that they’ve never had a blight to their crops in the town’s history, and neither flood nor drought afflicts then either. A child skips happily around the town square, proclaiming it is her birthday. Indulgently, you ask how old she is today, and you’re shocked when she proclaims herself to be 50 years old today. the other children chime in with their ages, and you’re surprised that the older teenager minding them proclaims herself to be 96 years old! the people of this town know no illness. They know no hunger. The river of time flows slowly around them, and the elders remember fondly the founding of the town hundreds of years ago. They all attribute the town’s happiness and good fortune to the obelisk, but none seem to find this odd`, `that the town is built on a literal mountain of bodies and populated by friendly undead residents`, `that the dangerous creatures in the thick forest nearby refuse to pass the tree line where the town was built. There are ancient glowing stones dug deep into the ground in a circular pattern around the city and nobody knows the origin of them as it has been lost with time`,
                  `that this town was built on an island in the middle of a river. The river splits in two, creating a sizable chunk of land before merging below the city again. A rock escarpment in the upstream portion of the island provides a base for a considerable citadel with which to observe (and tax) the river traffic`, `the town is built next to a giant mining pit. the mining company has long since moved on because the lode of copper went dry. the pit is wide and deep. The town has a bad habit of casting things to get rid of into the pit. offal. chamber pots. criminals. you know... garbage. Once a year, however, on hextor's eve, things cast in the pit tend to come back`, `the town was built around the harvest of giant bee honey. The fields are well pollinated and the honey the bees produce is known far and wide to be a delicacy but harvesting it is not for the faint of heart.`, `the town's treasure is wolfpine. A big pine that smells like wet dog. Keeps wild animals from wondering into town`,
                `the town is built on top of an unusual “island” that occasionally moves, looks suspiciously like a turtle shell and freshly boiled fish are often found along the beaches of this “island”. The townsfolk all worship some strange turtle-like deity`, `the town is built along the edge of, and in the sides of, the place where the god fell (an impact crater, visually) - the god's residue still lingers, harvested by magic-users in secret, and guarded by priests`, `that a cabal of evil wizards created a permanent gate to the nether realms. they were defeated and the gate locked by a group of adventurers, but they weren't able to fully close it. The energies that leak out around the lock attract evil beings, who in turn attract heroes to fight them, and who in turn attracted shopkeepers who knew the real way to become rich wasn't to go adventuring but to sell swords to the adventurers`, `the town exists at the exact center of a large anti-magic zone, making it ideal for people on the run from some magic-user or merchants who don't want to see a fourth business go up in fireballs`, `that long ago, the avatar of a agriculture deity was sacrificed here. the fallout from her death fertilized the land and has ensured good crops ever since`, `that the town is built up around an oasis which provides a vital resource not found anywhere else nearby. This could be water in a desert, air in an undersea kingdom, or just dependable rules of reality in a chaotic far realm`, `that this town has a connection to a gigantic corpse of some elder god that floats in the void. A mining colony sprung up to harvest body parts for all manner of alchemical and magical reagents. adventurers come to bid on the lucrative contracts to protect the miners from still active antibodies and parasites`,
                 `that this fishing village is built mainly upon the side of a gigantic karst just offshore, accessible by wooden stairways and rope ladders. Those with particularly strong ties to nature (or geology) recognize that this karst is not made of stone, but is actually the petrified remains of a titanic tree that once rose out of the ocean`, `that at the center of a large crater there is a large spring of fresh water, the only source of drinkable water within a hundred miles (a desert, tundra, swamp, or arid savanna). The crater itself is lush and green - nearly tropical, even - and the people enjoy a comfortable existence. However, the inhospitable landscape around the crater leaves the townsfolk unable to travel, and news barely ever reaches them`, `that a geyser at the center of the village deep within the taiga erupts, with clockwork regularity, at noon every day. In the winter, the townsfolk gather around the geyser to enjoy the warm steam from its eruptions, and during the spring children frolic underneath the spout of water and play`, `the mining village has sprung up around the massive hole left in the ground by a passing elder purple worm. the worm disrupted hundreds of thousands of gold worth of ores and precious gems - though only the most experienced miners and spelunkers can safely traverse the deep tunnel`, `that giant metal pumps from ages long ago keep the endless subterranean caverns filled with locked vaults and adamantine doors beneath the city dry enough for explorers to delve. for 300 years, adventurers and archaeologists have flocked here, extracting untold wealth every time a vault is successfully opened`, `that lava from the mountains flows under the town, giving rise to several hot springs`, `that the town is at the edge of a rain-forest, a forest made of literal rain. This is their primary means of water collection, and by extension, agriculture. They must traverse the treacherous rain-forest and its amphibious residents, including the frog-men ninja clans`, 
                 `the town is plagued by sky-stompers (you could replace sky-stompers with dragons if you prefer), giant, glistening, photosynthetic monsters that hover in orbit, only occasionally dropping to the planet for a quick breath, water, other nutrients, or mating. the entire town exists on moving structures, and astrologers and geomancers are trained to predict the drops and move the town to a nearby but safe distance from the dropped sky-stompers. for as much as a hassle as this can be, for the brief period of time the sky-stompers land, they often bring with them items or resources of scientific or religious interest, or of practical value, from far above. a religion has also formed around the sky-stompers, with many believing they are messengers who come and go from the celestial realm itself. Scientists believe that energy can be siphoned from the sky-stompers, which could lead to full-scale industrialization. A fantasy and/or solarpunk setting`, `there is a bottomless pit with an intricate cave system with fertile soil and bioluminescent bacteria meaning free real estate for farming`, `that a spring gushes forth from the center of town, providing a nearly unlimited supply of sweet fresh water. The town has a legend that many centuries past, a nature spirit disguised herself as a homeless traveler and was given warm reception by the town. In return for their kindness she caused the spring to burst forth. Since that time, no wanderer is ever turned away by the townsfolk, some saying that to do so would cause the spring to dry up`, `that a massive telescope like device fell to pieces on the edge of a large desert. The angel, and still in tact glass dome created a massive terrarium full of strange exotic woods and creatures. The village has built up around the metallic walls, and use the various game and lumber as their livelihood. Upkeep on the glass dome it top priority`,
                  `the town is ringed by a large wall made out of living trees: in fact a specific tree known as a "walking tree." As it grows, it sends out branches that will eventually root into the ground and grow another trunk. The villagers, over centuries, have carefully pruned and guided the growth of the tree until it has encircled the town. now the roots are deep in the earth, while the trunks are twisted giants blocking all entry. two large gates have been carefully maintained as arching openings in the wall (though canny carpenters have fitted swinging doors to the arches). Some of the branches have been sewn into walkways that mimic battlements and provide protection and security to the defenders. due to its great age, at this point the bark is nearly as hard as stone, heavy with moss that denies fire a purchase, and eerily beautiful`, `the city is built on a extremely wide solid rock plateau. carved into the ground are massive teleportation circles that surround the city. When activated (through some strenuous magical means) it teleports the whole city into a sealed underground cavern with no entrances or exits. Essentially making it an escape bunker until whatever danger was threatening the city passes`, `the ruins of a temple lay in the city center. What's abnormal about this temple is the alter to an unidentified god that constantly sprays fresh clean water from a pot he holds into a fountain beneath him giving the city an unending supply of clean water`, `that the town was built on the back and in the arms of an enormous golem like giant creature who one day started walking out of the side of the mountain where the city originally was built centuries ago. It walks at a pace slow enough to not be felt much by the residents. Perhaps it's destination is important`, `there is a huge intricate sun dial that as well as telling the time for the locals has a tally that is ceremoniously completed every summer solstice. However this coming summer an ancient carving of a skeleton lies in the next available tally spot. There are many rumours of what this foretells but most agree it is the end of times`,
                   `the whole village lies on a rotating stone bed one mile in diameter. Local dwarven miners dug exploration tunnels to determine the cause of this turning. one by one curses, misfortune and death befell anyone who was involved in the mining exploration and thus all efforts have ceased`, `that this village is built in a monstrous towering evergreen tree with an incredibly ornate spiral staircase that traverses around the outside of the bark and a working pulley lift system to transport resources up and down the centre of the trunk. Each of the 50 or so branches can support two or three huts and there is a clear hierarchy of wealth. The lower branches are occupied by the poor labourers whilst the very canopy is the residence of the wealthy`, `that this village situated in the middle of a gas marsh. The small town is built on an artificial hill and the gates are secured at sunrise when the marsh fills with noxious gas`, `that the town is built around a wizard's tower. Every wizard that has taken up residence there has supported and cared for the townsfolk. The town itself is littered with small magical artifacts made by wizards of the tower in days gone by. Examples are a magically turning water wheel that brings water up from the bottom of the well and local hospital that the current wizard makes weekly visits to`, `that a unique breed of sea creature frequents the area of this fishing town. When properly prepared, parts of this creature can be used to create potent healing tonics, while if prepared another way, it can be used to create potent poison. The assassin's guild and healer's guild in this town are continually at odds, trying to control the supply of the creatures for their own uses`, `that this is a thriving town built around the corpse of a terrasque felled generations ago. No one has determined a means to permanently kill it so the city corp of miners harvest and despose of matter as fast as it regenerates. Rumor has it that if it were permanently killed it would manifest elsewhere to wreak havoc, that is why more powerful magics are highly regulated in the region`,
                   `that a huge meteor crater that has a lake in it, with an “island” at the centre`, `this village is hellgate - a quaint village built inside of a cavern, inhabited by tieflings, demons, and warlocks. In an adjacent antechamber there is a massive adamantine gate carved with images of debauchery and torments, a pilgrimage site for all who worship the infernal. The town is filled with shops that sell pentacle charms, goat-headed statues, brimstone candles, and other religious paraphernalia. Once a year, the villagers hold a doomsday parade. They march through the streets carrying battering rams, which they take to the antechamber and knock on the hellgate itself. Afterwards, there is much drunknenness and merriment`, `that this town was built around an strange wreck in a crater. The inhabitants of starfell are of an unknown race. They are hospitable but aloof and will not answer questions regarding their nature or that of the wreck. Outsiders are welcome to visit the markets and taverns in the crater, but exploring the ruined structure is forbidden. Any character that is attuned to living things will notice that there are a number of faint life signs emanating from inside the wreck..`, `this town was fractured across multiple realities in a long-forgotten cataclysm. Most of the main streets and markets are in our universe, but beware of entering strange doors or alleyways--they can leave you stranded in a parallel reality if you don't know how to find your way back. The city is filled with the ephemera of other universes: there is coinage bearing the faces of leaders and nations that never existed; there are books filled with spells and alchemical formulae that don't work here; there are pieces of magic and technology that are utterly unknown, and will cease to work if taken far from splinterpoint`, `this town was built on the back of a massive land snail. The crawl has a single main road that winds in a spiral up to the peak of the shell. Most of the time, the crawl stays in the wild areas far from civilization and trade routes--most believe it is nothing more than a legend. The few explorers who manage to find it can trade for healing snail-slime unguents, pearls, and knives and jewelry crafted from nacre`, `that long ago a band of heroes battled a necromancer and were able to defeat him by turning him to stone; the now stone necromancer stands on the hill overlooking the town, covered in graffiti. His finger still points to the town's center`,
                    `that a chain, with links as big as the city itself, is anchored to the earth around the city's borders and protrudes into the sky; nobody knows what it is attached to on the other end`, `this town has a high wall, made entirely of what appears to be skeletons (either made of or possibly coated in metal) with outstretched hands, as though they are reaching for something, that stretches as far as the eye can see; the wall itself exudes a powerful fear aura which deters locals from approaching, peering over, or going around it`, `this town has a very large tree, which, when rested directly under for at least a long rest, permanently bestows the plant sub-type on the resting pc/npc. this change in sub-type can only be reversed with a wish spell; the spell will automatically fail however, if both the afflicted and the caster are not directly under the tree`, `there is a nearby field is full of hundreds of tenser's floating discs which wander the field aimlessly, allowing wildlife to appear to defy gravity. Nobody knows where they came from or how long they have been there, but they range in appearance from completely transparent/translucent to covered in dirt and other sparse natural phenomena. Anyone that is in physical contact with one of the discs may mentally control it at will, but it will not leave the borders of that field`, `that a neighboring village has balls of floating light appearing intermittently that cause anyone that sees them to stop what they are doing, stand in place, stare blindly into the distance, and babble (and sometimes drool) gibberish to themselves for hours. This is a daily occurrence the villagers have turned into a sport they lovingly refer to as "babble-ball" where the last man standing that has not laid eyes on the orbs that day wins. Chikoh is the reigning champion who has not "been babbled" for the past 22 days, since he was last caught with his pants down babbling with the butcher's wife`, 
                    `this village has an idiot. This idiot is not just any village idiot, mind you; he is bound to the land, magically speaking of course. When he is happy, the weather is agreeable, crops are plentiful, etc. and when he is feeling bad the weather is extreme for whatever season it currently is, wildlife becomes sparse and hostile, etc. The villagers fear that should he die, the land would die with him, so he is kept indoors and tended to hand and foot like a god in order to keep him safe and happy. He likes to get out and cause mischief though, whenever he can`, `this city has a large pedestal in the middle of downtown there a glass orb sits with an object inside. This object is constantly shifting form to resemble the various currencies of the world. Rumors circulate that if the orb is ever broken whatever currency it is currently in the form of will disappear world-wide, others say that if it is broken whatever currency it is in the form of will erupt forth from it. As a result of these and other rumors, the city guard and local mages college have formed a unified front to defend the orb from any attempt at breaking it open, though all attempts have proven ineffective since a visiting mage from a neighboring city experimented by dropping an elephant on it and it was undamaged`, `that on the outskirts of town there is a giant metal dome. Inside this dome is a series of smaller metal domes (like a nesting doll). At the core, rests the still-beating heart of a hill giant that once tended the land with utmost care. The heartbeat, however faint, echoes through the layered domes and grants a calming effect on those that hear it`, 
                    `this desert oasis has its own permanent portal to the elemental plane of ice located just left of the pond in the palm grove. Very popular tourist attraction`, `that this is a simple farming village with really fertile soils. Because after battling at the same exact place for thousands of years, the grounds are fertile due to the excess punts of blood and bone that the ground soaks`, `the only known vein of living silver, a crucial component in the making of great weapons, lies beneath the mines that this village supports`, `a millenia ago, the ancients knew better ways to survive, explore, and travel the great vastness of the sky-void; than capturing and enslaving air elementals to provide lift and thrust to the great ships of etheria. Now, an entire civilization and the lives of every being depends on finding elemental alcheras, holes in reality where the elemental planes poke thru, entering them, and capturing short-lived elementals, then getting out before the alcheras close. This is one of the only known stable alcheras ever found, deep inside a floating island known as "the respite", built up over the years from the floating hulks of several hundred airships of war moored around a small chunk of floating stone a quarter mile across. ships everywhere flock here for water, fresh elementals, and repair, and the weaponry bristling aboard the respite keeps it firmly in the hands of the ruling elite`, `there are remains of an intelligent, prehistoric life form in the centre of the town. When people have touched the remains they gain some sort of change to their self be it they gain magical powers or they lose a limb. The town is based off of the ‘blessing’ of the forgotten one. Some people are lucky, others are not`,
            ]
            document.getElementById("details").innerHTML = "Rumors of this town say " + searchArray(uniqueFeatures) + '.'
        };

        //History
            //Something terrible
            //something politcal
            //something periodic
            //something tender
            //something petty
        

        //villains
        let villains = ['dark lord','charlatain','dictator','summoner','illusionist','elementalist','priest','necromancer','traitor','thief','ghost','wizard','hidden figure','beast','conquerer','noble','asasin','bandit','crime lord',dragon(),'heir','elemental','giant','knight','doppleganger','politician','advisor','prophet','scholar','demon','royal','alchemist','conman','witch','heretic','cultist','guild leader','undead','giant','deity']
        let villainTraits = ['resistance','weakness','immunity','health leech','reanimation','flying','multi-attack','grows stronger','poison','mind control','armor','exploding','healing','spellcasting','ranged attack','telekinesis','stealth','teleporitng','undead']
        let villainWeakness = ['tunnel vision','fear','dependant','lack of trust','magic','arrogance','addiction','past deeds','element','love','faith','curse','greed','health','bargain','resources','boastful','trust','morality','stubborn'] 
            //BIG BAD
                //Cunning
                //Strength
                //Influence
                //Plan
                //corruption
            //Superfortress and superweapon -
                //vulnerabilities
        
        //Factions
        let factionAsset = ['alchemy','blackmail','bullying','bureaucracy','coin','deceit','espionage','favors','item','information','legal','manipulation','negotiation','rumors','sabotage','time','theft','threats','violence']
        let factionIssue = ['lost powerful item','mutiny','criminal attention','dependance on outsiders','shortage of members','trouble wiht law','debt','weak defenses','no leadership','trouble with religion','dangerous secret','powerful item','armed force','diety','wealth','political influence','stronghold','popularity','alliance','territory']
        let factionRelations = ['business','debt','alliance','war','equals','shared power','rivals','clients','controls','respect','family','secret ties','follows','hate','blackmail','shared resource','servants','betrayal','loyal','unknown']
        let factionType = ['monarchy','noble houses','cult','temple','crime lord','guilds','wizards','trade empire','invaders','dark lord','thieves','rebels','politicians','army','deity','coven','bank','navy','old ones','knights']
        function findNobility() {
            let tier = [
                "ancient and well-respected by all houses, great and small", "ancient and greatly diminished in standing from what it once was", "old with the respect of many houses, great and small", "old and struggling to maintain respect of other houses", "old but often overshadowed by other houses", "newly raised up to the nobility",
            ]
            let color = [
                "black", "scarlet", "gold", "forest green", "royal blue", "violet", "silver", "bronze", "tan", "brown", "dark grey", "white", "maroon", "sky blue", "navy blue", "dark brown", "teal", "yellow", "orange", "olive green",
            ]
            let symbol = [
                `${searchArray(["arrow", "axe", "dagger", "hammer", "mace", "spear", "staff", "sword"])}`, `${searchArray(["breastplate", "gauntlet", "helm", "shield"])}`, `${searchArray(["sun", "moon", "star", "comet"])}`, `${searchArray(["apple", "barley", "briar", "fig", "grapes", "lily", "maple", "oak", "olive", "pine", "rose", "wheat"])}`, `${searchArray(["crab", "crocodile", "frog", "fish", "octopus", "whale"])}`, `${searchArray(["badger", "bat", "beaver", "dog", "ferret", "fox", "hedgehog", "lizard", "rat", "scorpion", "snake", "spider"])}`, `${searchArray(["bear", "boar", "bull", "dragon", "lion", "ox", "stag", "wolf"])}`, `${searchArray(["cardinal", "dove", "eagle", "hawk", "mockingbird", "owl", "pelican", "raven", "rooster", "sparrow", "swan", "vulture"])}`,
            ]
            let ideals = [
                "compassion", "courage", "courtesy", "determination", "discipline", "duty", "excellence", "faith", "generosity", "honor", "hope", "integrity", "justice", "loyalty", "mercy", "patience", "righteousness", "strength", "trust", "wisdom",
            ]
            let famousMember =[
                "A gallant knight", "A beautiful woman", "A ruthless negotiator", "An adept diplomat", "A famous traveler or explorer", "A brilliant military strategist", "A notorious rebel or outlaw", "A dashing swashbuckler", "A fearsome warrior", "A brilliant scholar", "A gifted orator", "A dangerous and mad ruler", "d10 The current head of the house is", "A kindly old man or woman", "A ruthless old man or woman", "A wily old man or woman", "A charming man or woman", "A grim veteran of wars", "An astute politician", "A devout adherent of a religion", "A heartbroken widower or widow", "A reckless or hot-headed young man or woman", "A prodigious child",
            ]
            let houseGoal = [
                "the domination of the city or region's politics", "the domination of the city or region's trade", "revenge against a rival house in the same city or region", "revenge against a rival house in another city or region", "the sabotage of a group run by commoners—a guild, academy, religious faith, or secret society", "fomenting rebellion against the city or region's ruling house", "a marriage with a powerful allied house", "a marriage with a powerful rival house", `one or more house members dealing with a kept secret: Specifically regarding ${searchArray(["a long-time scandalous romance", "the existence of a bastard child", "a murder in one of the house's keeps, castles, or palaces", "religious zealotry", "the birth of a malformed freak", "treason against the region's sovereign", "the senility or madness of family members", "criminal sabotage of a rival house"])}`, 
            ]
            let chosenIdeals  = shuffleSlice(ideals,2)
            let seat= [
                "a port city", "a range of high mountains", "a wide, fertile plain", "a fertile river valley", "an ancient forest", "a jagged coastline", "a sodden swamp", "a pristine lake", "a desert plateau", "an idyllic hill country",
            ]
            let output = `There is a noble house in this community, ${searchArray(tier)}, identified by their heraldry of the ${searchArray(color) + " "+ searchArray(symbol)}, and known for promoting ${chosenIdeals[0] +" and " +chosenIdeals[1]}. Their hidden goal here is ${searchArray(houseGoal)}. This is a small part of the family, with the trunk being in ${searchArray(seat)}. ${searchArray(famousMember)} known across the region came from this family!`
            document.getElementById("details").innerHTML = output
        };
        function findMilitia() {
            let type = [
                "light infantry, trained to do battle loose-order and to fight as raiders, scouts and skirmishers they are equipped with a mix of ranged and melee weapons", "heavy infantry, troops meant to fight in pitched battle and in line, these folk are equipped with the heaviest weapons and armor that they can afford", "light cavalry possessed of fleets mounts and raged weapons these troops are talented marauders and scouts and will eagerly run down any retreating enemies", "heavy cavalry, meant to shatter the enemy with brutal charges these mounted warriors are heavily armed and armored, with mounts large and powerful enough to carry them", "a siege train, which includes transports, specialists and ammunition these could take the form of cannon, rams, sappers or even stranger things", "ranged troops, whether they are equipped with bows, crossbows or firearms, these soldiers will do their best to stay far away from the enemy and pepper them with missiles", "privateers, using whatever kind of vessel is appropriate for the setting most commonly this means a sea-going ship, but this could also mean a river vessel or even something more exotic like an airship", 
            ]
        
            let amount = [
                "a small handful, perhaps just a dozen", "several squads, comprising a couple of units and several dozen troops", "a company, including several officers, which number a little over a hundred in total", "a cohort, hundreds of battle-ready soldiers and their attendant camp followers", "a cohort, hundreds of battle-ready soldiers and their attendant camp followers", "a brigade or legion, several thousand soldiers, along with their support staff, commanders and wagon train", "a brigade or legion, several thousand soldiers, along with their support staff, commanders and wagon train", "a veritable army, comprising ~20-30,000 soldiers, along with command staff and various support troops",
            ]
        
            let leader= [
                "a noble, fallen from glory and perhaps even exiled from the land of their birth their leader is likely skilled at both battle and diplomacy, but they are consumed by bitterness from their state and will likely do nearly anything to rectify it", "council composed of the ringleaders that mutinied the previous command, they will vote on important decisions discipline and uniformity is likely lax", "a soldier's soldier, someone who has fought their way through countless campaigns and has risen to a position of command. They are likely skilled in the arts of war and death, but lack tact", "a member of the nobility in good standing. Their troops are likely drawn from lands the noble's family controls. The noble isn't likely a mere adventurer, they are looking to advantage their family or themselves", "an unknown, these are mercenaries in name only - they are barely better than bandits in behavior and their leader is no exception, likely a vicious killer themselves, the commander of this band keeps control through violence and bribery", "a commander that is more akin to a merchant than a warrior. Founded as a money making endeavor, the leader is more skilled at negotiating contracts and sniffing out profitable battles", "a devout worshipper of a deity, the troops have been enticed or forced into the worship of their commander's god whether or not their devotion is true, their leader's is, and they will use the miracles granted by their deity to help them in battle", "a spellcaster, known for their strange and often baffling ways, leads this group by dint of their abilities they will aid their folk with spells and mystical knowledge",
            ]
        
            let details = [
               "rabble, hardly a cut above levies they are cowards, who will run if the battle goes against them (-2 to all morale checks), they are however extremely cheap (-40% to costs)", "decently trained and equipped, but they lack motivation (-1 to all morale checks) and they have little care towards their own reputations they will betray their employer if given a better offer", "average pay for average skill they have been trained to acceptable standards, but are nothing special beyond having a reputation for loyalty", "average pay for average skill they have been trained to acceptable standards, but are nothing special beyond having a reputation for loyalty", "average pay for average skill they have been trained to acceptable standards, but are nothing special beyond having a reputation for loyalty", "well drilled and disciplined (+1 to all morale checks) troops with an iron-shod reputation", "the elite, the cream of the crop (+2 to all morale checks, +1 all attack rolls) they are brave and unshakably loyal, but they are hideously expensive (+40% to costs)", "elite (+2 to all morale checks, +1 all attack rolls) soldiers who know all too well their own worth they cost more (+20% to costs) but that coin does not win their loyalty they fight for whoever pays them most, even switching sides in the midst of battle",    
            ]
            let output = `There is a local militia led by ${searchArray(leader)}. The force is ${searchArray(amount)} of ${searchArray(type)}. They are ${searchArray(details)}.`
            document.getElementById("details").innerHTML = output
        };
        function findCult() {
            let type = [
                "based around a single charismatic individual.", "based on a mainline faith, pushed to extremes.", "of a new faith or mystery, perhaps from a far away land or inspired locally.", "that is hereditary in nature, passed along family lines or just a single gender.", "that keeps to the old one(s).", "that is also a secret society, or another form of cryptic organization.", "that is decadent and listless, the members of this cult are in it for the thrill.", "that is a doomsday cult, these folk believe that the world is ending soon, if not any day.",
            ]
            let goal = [
                    "a genuine exploration of their beliefs and inspirations, which could still have negative connotations.", `to summon ${searchArray(["an aberration", "a fiend", "people from the past","people from the future", "people from another dimension","a celestial", "a demon", "a god"])}.`, "to cause upheaval of the status quo or current government.", `engaging in the socially unacceptable act of ${searchArray(["cannibalism","proscribed sexual acts", "excessive drug or alcohol use", "a fight club"])}.`, "to cause the death of some important figure, or more broadly, a faction.", "to cause the destruction of a rival faith, or any other faith.", "support and enrichment of it's members, whether that be through legal or illegal means.", `exploitation of it's members; it tells its members the purpose is ${searchArray(["a genuine exploration of their beliefs and inspirations, which could still have negative connotations.", `to summon ${searchArray(["an aberration", "a fiend", "people from the past","people from the future", "people from another dimension","a celestial", "a demon", "a god"])}.`, "to cause upheaval of the status quo or current government.", `engaging in the socially unacceptable act of ${searchArray(["cannibalism","proscribed sexual acts", "excessive drug or alcohol use", "fight club"])}.`, "to cause the death of some important figure, or more broadly, a faction.", "to cause the destruction of a rival faith, or any other faith.", "support and enrichment of it's members, whether that be through legal or illegal means."])}`,
            ]
            let membership = [
                "ne'er do wells; criminals, beggars & transients", "the elite of society", "working class folk, the salt of the earth", "all walks of life", "racially, culturally or ethnically exclusive", "a certain profession, such as fisher folk, merchants or farmers", "an isolated or otherwise insular folk", "those who have been brainwashed, chosen or ensorcelled in some way",
            ]
            let behavior = [ 
                "out in the open. They are passive, and unwilling to commit violence - unless their faith requires it.", "openly, with hostility and great abandon.", "clandestinely, with a vicious streak towards any who stumble upon them.", "covertly, those who discover them are met with bribes, cajoling and religious arguments.", "in the shadows, the cult attempts to masquerade as a more pedestrian organization.", "open locally, but their true home is somewhere far away and hidden.", "through a cellular structure, each cell is kept ignorant of what the other is doing, but there is a secret architect lurking somewhere.", "coordinated through dreams, they move seemingly without communication.",
            ]
        
            let output = `There are signs of a cult here ${searchArray(type)} Digging deep enough one could find that the cult's goal is ${searchArray(goal)} The membership of this cult is ${searchArray(membership)} and they operate ${searchArray(behavior)}`
            document.getElementById("details").innerHTML = output
        };
        function findSecretSociety(){
            let leadership = [
                "a council who gain their seats by virtue of heredity", "a council who gain their seats by virtue of experience", "a council who gain their seats by elections", "a dangerous megalomaniac", "a femme fatale", "an altruistic knight", "a dashing rogue", "a religious zealot", "a wise old priest or mage", "a celebrated war hero", "a wealthy merchant or noble", "a fugitive from justice",
            ]
            let goal = [
                "foil the plans of another secret society.", "bring about the destruction of the city, region, or world.", "foment rebellion against the ruling class.", "hunt down and eliminate members of a specific race or class.", "protect the common people from tyranny.", "protect the city, region, or world from outside malign influences.",
            ]
            let sign = [
                "a secret handshake.", "a secret gesture.", "a secret password.", "a set of coded phrases and responses.", "a subtle pin or piece of jewelry.", "a subtle fashion or style of dress.", "a changing verbal or physical cue specified by another member of the society.", "the way society members style their facial hair.","sign: 'gods, i'm thirsty. know a place to get a good drink?' countersign: 'i know a good alehouse not too far from here.'", "while shaking hands, squeeze the other's hand. they will squeeze twice in response.", "during the annual harvest festival, every house decorates its door with flowers. members of the local cult use a particular arrangement of lavender.", "the followers of a powerful dragon wear jewellery embedded with a piece of one of the dragon's scales. they learn a magic technique to sense the pieces' presence.", "certain markings upon your hat convey messages to contacts. for example, an x near the crown means 'i'm being watched, it's not safe to talk to me.' the markings can be removed with a simple cantrip.", "when entering an inn: 'my back hurts. i hope your beds are soft.' if the innkeeper is an ally, they will respond: 'soft as any.'", "a certain design is embroidered on their shirt's shoulders. when was the last time you were talking to someone and looked at their shoulders?", "a certain perfume is worn - difficult to identify unless you have a good nose or have been taught the scent.", "when entering a temple: 'this is a fine temple. truly a place fit for [deity's name].' a fellow inquisitor will respond: 'we endeavour to honour [deity's name] with all we do here.'", "a simple handsign to be flashed quickly. for example: touch your little finger with your thumb, then close your hand into a fist.", "a specific kind of mud smeared onto the shoe.", "tapping the foot twice, then quickly drawing a circle with it.", "singing a children's song with nonsensical lyrics.",
                 "paying with a large coin, only to pull it back and give the appropriate amount in the smallest possible change. (evil cult)", "the knowledge of a minor magic trick.", "an elaborate fistbump ritual.", "in a certain music club’s open mic nights, dedicate your song “to an old friend, who i hope to see again”. an agent will approach you soon after.", "scratch your ear, then your other ear.", "a bandage hanging out of your bag.", "apparently idle tapping of the fingers, is actually going through a specific tap sequence.", "wearing a small article of clothing of particular color. like a scarf or a sash around the waist.", "asking about a specific dish or drink at a tavern that is not on the menu.", "tattoos on the back of the hand that can only be seen with a magical light source.", "wearing a pin with a mundane looking symbol somewhere specific on the body. like a pin of a crow on the left shoulder.", "tattoos that will burn when others with the same mark are very close by.", "if you look closely you see they have a nicely disguised fake mustache over their real mustache.", "they always take a drink with there wrong hand, to switch it to there drinking hand", "sign: 'do you know the place with the worst drinks?' countersign 'their toilet is the second-worst'.", "they blink with both eyes, however one blinks slightly slower", "they will look slightly down when talking about the past, but slightly above you when talking about the future.", "members of the order will have a dagger tattooed on the underside of their tongue, representing their words are their most dangerous weapon. the spines along the dagger's hilt show their rank within the order.", "when whistling the common song 'lady's grace,' another member will ask what the song is. if the whistler answers, 'it's my mother, the maiden,' the other member's response is, 'i've never heard it. would you teach me?'", "they stare at you meaningfully and give you an exaggerated wink. (honestly, players can be dense).", "the first and last name they give you each contains one consonant sound that corresponds to the name of the organization. e.g. an agent of the radiant brotherhood introduces himself as ricky bernstein.", 
                 "their fighting stance betrays training secret to the organization they belong to.", "every member has a compulsion that appears to be a nervous tic. the mention of particular word makes them scratch their nose or tug their ear lobe involuntarily. it's a patron thing.", "they always travel in pairs, one wearing an article of clothing of a particular shade of red, the other a particular shade of blue.", "keeping rhythm with a song in their head and tapping their foot along. a fellow member will give the counter rhythm and ask if it is a 'foreign song they are thinking of'.", "a member will ask for a mr or mrs. 'ayam (are you a member)'. other member counters with no, but i can direct you mr 'amia (a member i am)'.", "a challenge coin (specialty art coin) is presented and a member who wants to be identified will show their coin to prove membership.", "a flower display is left giving a floriographical message for the knowing member.", "in parting, 'may your hearth be warm and smoke be blue in the sky.' counter: ' may your path lead back here and may we speak again.'", "members are unable to get drunk as their natural boon does not allow the alcohol to get them drunk.", "a member in need will whistle a tune to a hymn incorrectly and a fellow member will have to correct the tune with the correct note and give shelter or aid to the member.",
                  "in a region where scarves are common, members wear scarves with very frayed edges. if pointed out, they will respond 'oh, yes, i've been meaning to get this fixed up.' (this could also work with another suitable article of clothing.)", "sign: 'it seems every day the weather is chosen at random.' countersign: 'well, it could be worse.'", "a travelling entertainer uses illusory script on their pamphlets so that only members can read the encoded message and be informed of their arrival.", "when two ships pass by on the open seas, one plays a specific jib on an instrument for the other to hear. if the other ship is an ally, the counter is to shoot a flaming arrow harmlessly in the waters between the two ships.", "at night, hanging a specific style of a lantern outside their doors indicates a safehouse.", "going into a weapons shop and asking 'how much would a dagger that can kill a [creature] cost?' counter: 'it'd cost you enough to buy a [creature].' (the range of creatures named give different indications of intent or information. the weaker the creature, the stronger the intent or importance.)", "sharing a story of a very odd and specific dream but it contains a message in thieves' cant. the counter is to share an equally odd dream but with a reply in thieves' cant interwoven in.",
            ]
            let colors = [
                "black", "scarlet", "gold", "forest green", "royal blue", "violet", "silver", "bronze", "tan", "brown", "dark grey", "white", "maroon", "sky blue", "navy blue", "dark brown", "teal", "yellow", "orange", "olive green",
            ]
            let symbol = [
                `${searchArray(["arrow", "axe", "dagger", "hammer", "mace", "spear", "staff", "sword"])}`, `${searchArray(["breastplate", "gauntlet", "helm", "shield"])}`, `${searchArray(["sun", "moon", "star", "comet"])}`, `${searchArray(["apple", "barley", "briar", "fig", "bunch of grapes", "lily", "maple", "oak", "olive", "pine", "rose", "straw of wheat"])}`, `${searchArray(["crab", "crocodile", "frog", "fish", "octopus", "whale"])}`, `${searchArray(["badger", "bat", "beaver", "dog", "ferret", "fox", "hedgehog", "lizard", "rat", "scorpion", "snake", "spider"])}`, `${searchArray(["bear", "boar", "bull", "dragon", "lion", "ox", "stag", "wolf"])}`, `${searchArray(["cardinal", "dove", "eagle", "hawk", "mockingbird", "owl", "pelican", "raven", "rooster", "sparrow", "swan", "vulture"])}`, `${searchArray(["cloud", "flame", "ice", "lightning bolt", "snow", "stone", "wave of water", "whirlwind"])}`, `${searchArray(["a pair of crossed bones", "a ghost", "a skull", "a spectral hand"])}`,
            ]
            let ideals = [
                "compassion", "courage", "discipline", "domination", "duty", "excellence", "faith", "honor", "hope", "integrity", "knowledge", "justice", "loyalty", "mercy", "patience", "power", "righteousness", "strength", "victory", "wisdom",
            ]
            let behavior = [
                "alone and in secret.", "in pairs, working in secret.", "in small groups, working in secret.", "alone, but openly.", "in pairs, but openly.", "in small groups, but openly.",
            ]
            let membership = [
                "the poor and downtrodden (slaves, beggars, urchins, laborers, servants, etc.)", "the wealthy elite (merchants, nobles, etc.)", "members of a particular religion (a temple, a cult, a sect, etc.)", "members of a particular trade (blacksmiths, carpenters, fishermen, weavers, etc.)", "members of a particular class (bards, fighters, mages, priests, rangers, thieves, etc.)", "members of a particular race (dwarves, elves, gnomes, halflings, etc.)", "members of specific ancient lineages (noble houses, descendants of heroes, etc.)", "an eclectic mix of society",
            ]
            let knowledge = [
                "only those right eblow and above in rank", "very few other members of the society", "several other members of the society", "the society's organization", "anything except the society's leadership", "the names of the society's leaders, though they’ve never met any of them", "one of the society's leading members and no other members",
            ]
            let gatheringPlace = [
                "a secret chamber in a well-known temple.", "the cellar of a popular tavern.", "a secret chamber in a well-known guild-hall.", "the cellar of a wealthy merchant's house.", "the city sewers.", "the ancient catacombs beneath the city.", "the residence of the leader or a senior member.", "a wealthy merchant's office.", "a private dining room in a dingy tavern.", "a brothel.", "a warehouse or shipyard.", "the city's sewers.",
            ]
            let colorChoice = shuffleSlice(colors,2) 
            let idealChoice = shuffleSlice(ideals,2)
            let output = `There is a shadow organization here led by ${searchArray(leadership)}, who champions ${idealChoice[0]+" and "+idealChoice[1]} with the goal to ${searchArray(goal)} Their symbol is a ${colorChoice[0] + " and " + colorChoice[1] + " " + searchArray(symbol)}. The members of this organization, consisting of ${searchArray(membership)}, pursue their tasks ${searchArray(behavior)} If two members were to meet they would identify each other in the following way: ${searchArray(sign)} The most common meeting place is ${searchArray(gatheringPlace)} If one member were to be captured they would be able to provide information about ${searchArray(knowledge)}.`
            document.getElementById("details").innerHTML = output
        };
        function findOutlaws(){
            function poachers(){
                let animal =[
                    "bears", `birds of prey, specifically ${searchArray(["eagles", "falcons", "hawks", "owls"])}`, "boars", `${searchArray(["deer", "elk", "harts", "moose", "stags"])}`, `exotic beasts, specifically ${searchArray(["behemoths", "elephants", "griffons", "hippogriffs", "lions", "owl bears", "tigers", "wyverns"])}`, `game birds, specifically ${searchArray(["doves", "grouses", "partridges", "pheasants", "quails", "turkeys"])}`, `waterfowl, specifically ${searchArray(["ducks", "geese", "herons", "puffins", "snipes", "swans"])}`, `small furry beasts, specifically ${searchArray(["beavers", "ermines", "otters", "raccoons", "sables", "skunks"])}`, `small predators, specifically ${searchArray(["badgers", "coyotes", "foxes", "wolverines"])}`, "wolves",
                ]
                let purpose = [
                    "for sport", "to feed their families", "to feed the impoverished peasants", "to exact revenge on the landowner", "to sell the beasts’ meat", "to sell the beasts’ pelts",
                ]
                return " They poach"+ searchArray(animal) + " "+ searchArray(purpose)
            }
            function robber(){
                let tactics = [
                    "swarm tactics", "hit-and-run tactics", "ambush tactics", "choreographed maneuvers", "unpredictable maneuvers", "fancy footwork",
                ]
                let notorious =[
                    "never leaving survivors", "branding captives", "scalping captives", "burning wagons and ships", "using explosives", "romantic escapades", "singing bawdy songs", "drinking too much ale",
                ]
                return "The robbers are known for their " + searchArray(tactics) +" and for "+ searchArray(notorious)
            }
            function smuggler(){
                let strategy = [
                    "underground tunnels", "secret compartments", "stealth watercraft", "humanoid mules", "bribery of officials", "a network of safehouses",
                ]
                let support = [
                    "a prominent merchant", "an important minister or magistrate", "a major crime boss", "a pirate captain", "an admiral", "a group of subversives", "the captain of the guard or a local sheriff", "the sovereign’s main rival",
                ]
                return "The smugglers use "+searchArray(strategy)+" for their work, and if one digs enough they'll find that the group is supported by "+ searchArray(support)
            }
            let business = [
            `poaching from the sovereign's preserve or a prominent noble’s lands ${poachers()}`, 
            "harboring fugitives", 
            `harassing government officials and nobles who pass along the road. ${robber()}`, 
            `robbing caravans carrying gems, precious metals, and exotic goods. ${robber()}`, 
            `holding up incoming or outgoing ships or wagons ${robber()}`,
            `smuggling ${searchArray(["smokeleaf", "hallucinogenic mushrooms", "sleepysalt (a downer)", "sharpsugar (an upper)"])}. ${smuggler()}`, 
            `smuggling rare antiquities. ${smuggler()}`, 
            `smuggling stolen goods ${smuggler()}`, 
            `smuggling ${searchArray(["exotic beasts", "foreign harlots", "fugitives", "slaves"])}. ${smuggler()}`, 
            `serving as muscle for ${searchArray(["shady merchants","brothel-keepers"])}. ${smuggler()}`,
            ]
            let colors= [
            "black", "gold", "forest green", "bronze", "tan", "brown", "dark grey", "maroon", "dark brown", "olive green",
            ]
            let symbol = [
            "skull", "arrow", "dagger", "goblet", "moon", "star", "snake", "badger", "spider", "rat", "wolf", "bear",
            ]
            let leader = [
            "a dangerous megalomaniac", "a charismatic demagogue", "a mysterious foreigner", "a talented thief", "a member of a prominent family", "a ruthless killer", "a femme fatale", "a charming rogue", "a dashing swashbuckler", "a brutish thug", "a devoted priest", "a well-known fugitive",
            ]
            let membership =[
            "out-of-work artisans", "displaced peasants", "desperate peasants", "escaped slaves", "combat veterans", "foreign refugees",
            ]
            let goal = [
            "domination of the region’s trade", "sabotage of the region’s trade", "revenge against a rival band of outlaws", "revenge against the region’s elite", "rebellion against the region’s elite", "equality and freedom for all", "a wealthy and peaceful retirement", "violence to slake their bloodlust",
            ]
            let weapons = [
            "wooden clubs", "over-sized daggers", "shortbows and arrows", "longbows and arrows", "daggers and crossbows", "axes and knives", "sticks and stones", "shortswords", "brass knuckles", "daggers and sling shots",
            ]
            let meetingplace = [
            "the residence of a prominent noble", "the village’s market square", "a wayside inn", "a tavern", "a brothel", "an old lighthouse", "an abandoned cabin", "a waterfall", "a cave", "a forest clearing",
            ]
            let respectedBy =[
            "ambassadors and tax collectors", "merchants and peddlers", "politicians and magistrates", "guards and sheriffs", "soldiers and warriors", "nobles and wealthy travelers", "knights and loyalists", "peasants and farmers", "priests and sages", "women and children",
            ]
            let leaderQuirk= [
            "a flashy earring ring", "shiny leather boots", "a hole in the toe of one boot", "a dagger in each boot", "a mask on the face", "a wide-brimmed hat", "a dragon tattoo on the forearm", "a flame tattoo around the arm", "a maniacal laugh", "a bent, broken nose", "an open shirt and a very hairy chest", "their extravagant mustache",
            ]
            let output = `There is a group of outlaws nearby whose modus operandi is ${searchArray(business)}. Their leader is ${searchArray(leader)}, identified by ${searchArray(leaderQuirk)}, whose goal is ${searchArray(goal)}. The group consists mostly of ${searchArray(membership)} weilding ${searchArray(weapons)}, these outlaws are well respected by ${searchArray(respectedBy)}. They meet at ${searchArray(meetingplace)} and they identify eachother using their symbol, the ${searchArray(colors) + " " +searchArray(symbol)}.`
            document.getElementById("details").innerHTML = output
        };
        function findGang() {
            let main = [
                `distributing ${searchArray(["smokeleaf", "hallucinogenic mushrooms", "sleepysalt (a downer)", "sharpsugar (an upper)"])}`, "running heists of and/or fencing stolen gems and precious metals", "petty theft, burglary, and pickpocketing", "assassinations that look like accidents or that frame someone else", `running ${searchArray(["exotic", "low-class", "high-class"])} brothels`, "shaking down legitimate local businesses and/or city officials", "serving as muscle for shady merchants and/or brothel-keepers", "holding up outgoing ships or wagons",
            ]
            let colors =[
                "black", "scarlet", "gold", "forest green", "royal blue", "violet", "silver", "bronze", "tan", "brown", "dark grey", "white", "maroon", "sky blue", "navy blue", "dark brown", "teal", "steel", "orange", "olive green",
            ]
            let symbol = [
                "skull", "ghost", "open hand", "clenched fist", "arrow", "dagger", "sword", "hammer", "crown", "goblet", "moon", "star", "fish", "snake", "badger", "spider", "rat", "wolf", "bear", "eagle",
            ]
            let clothing = [
                "shirts", "jackets", "scarves", "vests", "bandannas", "boots", "tattoos", "hats", "scars", "mustaches",
            ]
            let leader= [
                "a dangerous megalomaniac", "a charismatic demagogue", "a mysterious foreigner", "a talented thief", "a well-known public figure", "a ruthless killer", "a femme fatale", "a charming rogue", "a dashing swashbuckler", "a brutish thug",
            ]
            let recruiting = [
                "artisans", "relocated peasants", "sailors", "drunks", "beggars", "thieves", "servants and slaves", "combat veterans", "laborers", "foreigners", "young children", "circus performers",
            ]
            let goals =[
                "domination of the city's politics", "domination of the city's trade", "revenge against a rival gang in the same city", "revenge against a rival gang in another city", "revenge against the city's elite", "rebellion against the city's elite",
            ]
            let weapon = [
                "wooden clubs", "throwing knives", "over-sized daggers", "serrated daggers", "daggers and crossbows", "hammers and daggers", "sticks and stones", "shortswords", "brass knuckles", "bare fists",
            ]
            let tactics = [
                "swarm tactics", "hit-and-run tactics", "ambush tactics", "choreographed maneuvers", "unpredictable maneuvers", "lots of smiles and jokes", "lots of fancy footwork", "lots of screaming and shouting", "lots of kicking and stomping", "lots of head-butting",
            ]
            let headquarters=[
                "the residence of the leader or a senior gangmember", "an artisan's shop or guildhall", "a merchant's office", "a tavern", "a brothel", "a warehouse or shipyard", "a temple complex", "the city's sewers", "the town hall", "an abandoned guildhall or warehouse", "a shantytown", "the residence of a wealthy individual",
            ]
            let respectedBy = [
                "fishermen and sailors", "beggars and thieves", "merchants and moneychangers", "jewelers and gemcutters", "politicians and magistrates", "guards and sheriffs", "soldiers and warriors", "gladiators and pugilists", "peasants and farmers", "servants and slaves", "priests and sages", "women and children",
            ]
            let leaderTrait = [
                "a nose ring", "shiny leather boots", "a hole in the toe of one boot", "a dagger in each boot", "a heavy gold chain around the neck", "a wide-brimmed hat", "a dagger tattoo on the forearm", "a snake tattoo around the arm", "a maniacal laugh", "a long, hooked nose", "an open shirt and a very hairy chest", "extravagant mustaches",
            ]
            let output = `There is a street gang led by a ${searchArray(leader)} whose goal is ${searchArray(goals)}, they are well respected by ${searchArray(respectedBy)}. Their hideout is ${searchArray(headquarters)} and to get there find the man with ${searchArray(leaderTrait)}. Their recruitment efforts focus on ${searchArray(recruiting)}, and all members share a common style of ${searchArray(clothing)} with a ${searchArray(colors) + " colored " + searchArray(symbol)} symbol on it. Members are equipped with a ${searchArray(weapon)} and are known for ${searchArray(tactics)} in fights.`
            document.getElementById("details").innerHTML = output
        };
        function findPresence() {
            let group = [
                "some veterans", "some rebels", "some bored gentry", "some foreign invaders", "some cultists/fanatics", "the indigenous population", "a criminal gang", "some government oppressors",
            ]
            let tactic = [
                "savage, resorting to all out attacks. The bandits will fight without regard to their safety or future.", "ambushers, supported by ranged weapons. These folk will run as soon as they are discovered or the tide turns against them.", "assassins. Skilled in stealth and infiltration, they will never commit to any sort of direct attack, nor will they be caught together as a group.", "cavalry, whether that be on the backs of horses, or something stranger like wolves or vehicles. They favor hit and run style tactics.", "disciplined in tactics/planning. These are not mere bandits, but soldiers. they will use any and all means at their disposal to launch more effective attacks.", "unruly and ill-disciplined mobs. Members fight and flee as individuals, trusting in their own judgments.", "performers. This is all an act to try and extract what they want. They act tough, but in reality they are cowards, who will flee at the slightest hint of trouble.", "swindlers. They do not attack in any direct way, but rather seek to get what they desire through guile and deception. they may pretend to be someone else, or try to worm their ways into the community.",
            ]
            let purpose = [
                "plunder and gain wealth.", "purge.", "conquer.", "achieve a specific goal regarding a person, piece of territory or item.", "settle a generational rivalry.", "satisfy a religiously goal.", "participate in a political/civil conflict.", "complete a contract.",
            ]
            let specialty = [
                "someone important from a nearby community is an informant for the group in regards to the comings and goings there. they're far more aware of potential heists, targets or attempts at reprisals against them.", "these bandits employ animals or monsters, whether magical or otherwise, to help them with their work.", "the group is led by or is employing a spellcaster of some sort. They may have an enchanted item, or they may have the occasional back-up of the spell user.", `the brigands are led by a${searchArray([" dragon", " fiend", " celestial", "n aberration"])}.`, `the bandits themselves are ${searchArray(["undead", "dimensional travelers", "magically summoned", "underground dwellers"])}`, `the marauder's hideout is a ${searchArray(["pocket plane, which only the leader can open the portal to","mountain fortress", "fort built upon a river sandbar", "a ship which simply sails away"])}, which is near impossible for a small group to assault.`, "the agents are drawn from the population of the town itself! A conspiracy of silence supports the members.", "they are not here of their own volition, they have been forced into their current position by disaster or ill-luck.",
            ]
            let output = `The people here report that they are being harassed by ${searchArray(group)}. They are ${searchArray(tactic)} If you can get one to talk, you will find they are here to ${searchArray(purpose)} Looking into this may be to your benifit because ${searchArray(specialty)}`
            document.getElementById("details").innerHTML = output
        };

        //FIVE FACTIONS
            //Faction type
            //treasure




        //monsters
        let monsters = ['skeletons','zombie horde','hydra','golem','ettin','wyvern','gargoyle','gelatinous cube','basilisk','giant spider','bear','wolf','elemental','invisible stalker','blink dog','hell hound','behir','chimera','cockatrice','phase spider','owlbear','worg','mimic','shambling mound','shrieker','ooze','swarm','zombie']
        let beastialMotivation = ['desperation','fear','rivalry','reproduction','space']

        //intelligent monsters
        let intelligentMotivation = ['betrayal','conspiracy','desperation','destiny','discovery','faith','fear','genocide','greater good','greed','grief','knowledge','love','power','pride','rebellion','redemption','renown','revenge','rivalry','reproduction','space']
        let intelligentMonsters = ['werewolf','lich','homunculus','deva','ettin','hag','troll','vampire','manticore','ghost','imp','wight','aboleth','pegasus',dragon(),'djinni','mephit','nightmare','devil','succubus','giant','ogre','drow','incubus','merfolk','centaur','doppleganger','harpy','medusa','minotaur','treant','vampire','wraith',]

        //dragon
        function dragon() {
            let dragonAge = ['wyrmling','young','juvenile','adult','old','ancient','wyrm','great wyrm']
            let exoticDragon = ['Shadow','gem','faerie','light','force','prismatic','homebrew']
            let dragoncolor = ['black','blue','green','red','white','brass','bronze','copper','silver','gold',`exotic: ${searchArray(exoticDragon)}`] 
            return `Dragon (age: ${searchArray(dragonAge)}, color: ${searchArray(dragoncolor)})`
        }

        //dieties
        let deityDomains = ['mercy','humanity','nightmares','moon','fire','death','water','redemption','pride','wrath','stars','seasons','luck','silence','rebirth','nature','light','pestilence','winter','time']


        //threats
        let threat = ['invaders','elementals','plague','deity','war','monster','prophecy','dark lord','undead','leader','cult','famine','wizard','resource','discovery','curse','demon','dragon','nature','ancient being']


        //weather
        let weather = ['clear','warm','sunny','cold','frigid','scorching','rainy','windy','overcast','flood','drought','major storm','sandstorm','snow','blizzard','wildfire','fog','hail','mist','tornado']


        //conditions
        let conditons = ['blinded','charmed','confused','deafened','dying','exhausted','frightened','grappled','incapacitated','invisible','paralyzed','petrified','prone','restrained','silenced','sickened','slowed','stunned','surprised','unconscious',]


        //Effects
        let criticalHit = ['knock prone','terrify','amputate','disarm','bnus attack','flurry','armor break','rend','stun','triple damage','bonus move','inspire allies','hit multiple','advantage','drops item','broken bone','winded','blind','unconscious','decapitation']
        let criticalMiss = ['tripped','drop weapon','hit ally','hit self','blinded','winded','frightened','confused','stunned','stuck','unwanted focus','expose weakness','break weapon','drop item','disadvantage','anger allies','slowed','broken bone','unconscious']
        let wildMagic = ['doubled effect','knockback','area effect','reverse','explosion','teleporting','flashes','ground cracks','time freezes','portals appear','invisibility','no gravity','silence','fire spreads','crystalization','healing rain','demonic gate','mass sleep','deity appears']
        let magicalMishaps = ['dark vision','sapped energy','memory loss','too much power','lingering trauma','magic fizzles','possessed','physical mark','see dark power','deep sleep','summon fey',' reversed effect','damaged space','terrify witness','destroy item','sickness','summon demon','ominous whisper','double effect',]
        let magicItemEffect = ['animating','binding','conjuring','petrifying','enveloping','reflecting','healing','illuminating','shapeshifting','protecting','transmuting','teleporting','charming','hastening','sleeping','silencing','crying','warding','enraging','concealing'] 
        let powers = ['elemental','immunity','levitation','true sight','sense direction','conjure food','random cantrip','light','fear','language','water breathing','fog','blessing','speed','summon','luck','familiar','unlock','polymorph','gold touch','leeching','disguise','shapeshift','flying','anti-magic','portal','stealth','charm','clairvoyance','animal-tongue','confusion','cure','detect evil','strength','telekinesis','force blast','detect magic','shield','compel truth','time']


        //curse
        let curse = ['hostility','death clock','blinded','deaf','necrotic','madness','clumsy','bloodlust','fear','memory loss','feeble','life-drain',`deity's wrath`,'slowed','vertigo','aging',`can't lie`,'bleeding','mute','drunk','pursued','vampirism','lycanthropy','insomnia','hallucinations','disease','luck','exhaustion','disdained','memory','filth','suspicion','dread','possessed','envy','addiciton','hunger','noisy','false sense','ghostly']


        //tactics
        let combatTactics = ['team up','reckless','take cover','flee','use terain','use item','ranged attack','cast spell','ambush','call for help','attack weakest','defend','sacrifice','intimidate','cower','bargain','grab','hinder','hide','help']

        //Fantastic Locations
            //Beauty
            //Culture
            //Amenities
            //Wisdom
            //Secrets

        

let coreAssumptions = {
    "Divinity": [
        ["Distant", "involved", "Present", ],
        ["Loose Pantheon", "Tight Pantheon", "Mystery", "Monotheism", "Dualism", "Animism", "Idealogical", ]
    ],
    "Civilization": [],
    "Age": [],
    "History": [],
    "Magic": [],
    "Races": [],
    "Planes": ["Typical (Elemental, Fey, Shadowfell)", "None - these divisions are mental only, everything exists on this world"]

}
let government = {
    "Autocracy": "",
    "Bureaucracy": "",
    "Confederacy": "",
    "Democracy": "",
    "Dictatorship": "",
    "Feudalism": "",
    "Gerontocracy": "",
    "Hierarchy": "",
    "Magocracy": "",
    "Matriarchy": "",
    "Militocracy": "",
    "Monarchy": "",
    "Oligarchy": "",
    "Patriarchy": "",
    "Meritocracy": "",
    "Plutocracy": "",
    "Republic": "",
    "Satrapy": "",
    "Kleptocracy": "",
    "Theocracy": "",
}
let commerce = {
    "Currency": []
}
let factions2 = {
    "Roles": [],
    "Goals": [],
    "Magic": [],
}
let laws = {
    "Magic": [],
    "Weapons": [],
}
let startingArea = {
    "Base": [],
    "Region": [],
    "Adventure": [],
}
let wilderness = {
    "Monuments": [],
    "Ruins": [],
    "Settlements": [],
    "Strongholds": [],
    "Oddities": [],
}
let settlements1 = {
    "Race Relations": [],
    "Ruler Status": [],
    "Notable Traits": [],
    "Renown": [],
    "Calamity": [],
    "Buildings": {
        "Residence": [],
        "Tavern": [],
        "Religious": [],
        "Warehouse": [],
        "Shop": [],
        "Urban Encounter": [],
    }
}














function rollTown() {
    findTown();
    findResources();
    findThePeople();
};

//Interesting place, time, and setting
//Place
    //Urban

    //Rural

    //Wilderness

//Time
    //Recent historical events

    //Magical and Religious events

    //





//Interesting people
    //

//Interesting Things to do


//With interesting things happening around them


//In an interesting region


//In an interesting world


//Planet
    //Continential Configurations
    //Environments
    //Wonders of the world
        //Temperate forest
        //Jungle
        //Mountain
        //Desert
        //Swamps and marshlands
        //Arctics
        //Grasslands
        //Hills

//Realm
    //Country COnfiguration
    //Country status
        //War
    //Conflicts


//Community
    //Population size
        //city shape
        //unique defenses
        //Ancestries
        //languages
        //Achetecture type
            //construction amterial
            //roofing material
            //residential construction style
            //decoration style
            //Regional affixations
                //Temperate forest
                //Jungle
                //Coastal
                //Desert
                //Acrtic
        //Inns and Taverns
        //Businesses
        //Guilds and unions
            //hooks
        //points of interest.
        //underbelly
            //criminal organizations
            //religious cults
            //secret socities
            //outsiders and outcasts
            //political groups
            //clubs and vices
        //Organizations
        //City secrets
        //city conflicts
            //major
            //minor
            
