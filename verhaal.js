const input = require('readline-sync');

let playername = input.question("What is your name? ");
let startLoop = false;
let start = input.question("Do you want to start");
if(start == "yes"){
  startLoop = true;
 }

while (startLoop == true)
{
    
console.log("In a world cloaked in shadows and shrouded in mystery, there lived a girl whose existence was an enigma, much like the land she called home. Inhabitants of this eerie realm were drawn to the macabre beauty of its Gothic architecture, where ancient spires pierced the sky, and hauntingly ornate facades whispered secrets of centuries past. This girl, with her raven-dark hair cascading like midnight, navigated the labyrinthine cobblestone streets with an air of quiet defiance. She was denizen of the gothic world, where moonlight danced with twisted spires and whispers of the past mingled with the present, creating a tapestry of enchantment and shadows. It was in this realm of darkness that she discovered in her own luminosity, a flicker of light that dared to shine amidst the haunting beauty of her world.");


startLoop = false;
}

let story =
[
  {
    partOne:"Outside, a deluge of rain poured from the sky. The city streets, slick and glistening, mirrored the somber mood that had settled upon the world.Amid the heavy rainfall, a solitary figure moved through the shadowy streets, cloaked in a dark, tattered robe that billowed like the wings of a raven. A young woman with pale skin and raven-dark hair wandered the cobbled pathways with an air of melancholy. The young woman walked around looking for shelter she bumped into a young man who then looked at her in disgust, a sneer pulling at his lips. \“Watch where you’re going peasant!\”"
  },
  {
    partTwo:"\“A little less attitude could do!\” The young woman says, her eyes narrowing as she glared at the cloaked figure. \“How dare the likes of you talk back to me!\” He says while jabbing a sharp accusatory finger into her shoulder, his body language taking on a more aggressive stance. “H-hey!” She paused, her eyes dilating. With her brows furrowing in distaste then, she continued \“Keep your hands to yourself!\”. The young man let out an angry huff as he stepped away, ultimately deciding to just retreat rather than continue to argue. The young girl rolled her eyes and continued to look for shelter as it was still raining, she sees something in the distance"
  },
  {
    partThree:"The young girl rolled her eyes, dusting herself off, before continuing in her search for shelter, the downpour remaining ever-present. Eventually she saw bright lights shining from what seemed to be a small wooden tavern, the atmosphere surrounding the place most inviting. The sound of loud babble sounded, the place most likely being in full bustle. The girl then dragged her feet over the wet stone, approaching the modest-looking pub."
  },
  {
    partFour:"She opened the doors only to be greeted by a resounding jingle, the bartender's attention immediately snapping towards her. He waited for her to come closer as if to ascertain she wanted something before finally speaking in that jolly voice of his, a smile on his otherwise intimidating visage.“Welcome young lady! What can I do for ya?”"
  },
  {
    partFive:"“Oh-” She scrambled for words, her eyes widening slightly. Sputtering incomprehensibly for a moment, she eventually just decided to get the first thing that came to mind: an item all taverns had. “Could I get one glass of beer please?” a nervous smile donned her face as she tilted her head. The bartender gave her a nod before turning around to get her a glass of said beverage. She let out a deep breath then, attempting to recollect herself."
  },
  { 
    partSix:"Eventually the bartender returned with the requested foamy beer, to which she returned a quick 'thanks!'. The girl walked off, looking for a place to get seated, although this proved to be a task somewhat difficult. 'This place is swarmed with rowdy old men...' she noted while walking towards a seat next to the window. Besides that fact however, the pub remained a place warm and lively. "
  },
  {
    partSeven:"As she was idly sipping at her beer and staring distantly out the foggy window, lost in her thoughts, there was an abrupt change in the atmosphere... "
  },
  {
    partEight:"She heard the small jingle from the bell signaling when someone enters the pub and looked back to see an old lady walking in. The clients watched the woman skeptically, laughing amongst themselves, but didn't comment on it, ultimately returning to their own devices. The grandma shuffled inside, talking to the bartender for a second before looking around and making her way over to... to besides the girl?!"
  },
  {
    partNine:"“I can sense a deep-seated sense of darkness inside of you my dear… Would you like for me to take a glimpse in your destiny?” says the grandma with a seemingly genuine smile on her face, although there was a slight hint of something else enlaced within it." 
  },
  {
    partTen:"“S-Sure” The girl says with a hint of confusion in her -now- shaky voice."
  },
  {
    partEleven:"The witch then reached into her pocket and took out a stack of intricate tarot cards, each with their own unique design. She began to lay out the cards carefully, one by one, each representing different facets of the young girl’s destiny. As the witch turned them over, she shared insights about the young girl’s future, pointing at the described cards in the process."
  },
  {
    partTwelve:"“In the realm of tarot, the cards reveal your future.” The witch started “The Three of Pentacles means working with others for success.” the young girl silently listened to the witch. “The Wheel of Fortune shows life's ups and downs.” “The High Priestess says trust your inner wisdom.” “The Ten of Cups promises happiness with loved ones. Your choices will shape your destiny.” That was all she offered— a cryptic piece of advise; because before the girl had time to process it, said grandma had already stood up and exited the tavern, like a nocturnal creature off into the night."
  },
  {
    partThirteen:"The young girl sat there in silence, wholly befuddled as she thought about what the witch just told her. She eventually decided to go home. Thanking the bartender on her way out, she too walked into the dark streets of the town, the only source of light being the dimly lit lanterns on the side. Her journey led her through a small street, she couldn’t wait to be home. The young woman stood infront of her house, taking out her house keys from her small pouch, with a sigh of relief she entered her home. The warm embrace of her quant living room enveloping her, she decided to get ready for bed and get ready for the big day tomorrow…"
  },
  {
    partFourteen:"Today was a significant day for the young lady, as she set out to search for answers about her future. She wanted to know what lay ahead, to see if she could uncover any hints or not."
  },
  {
    partFifteen:"She got ready to head outside, filling her pouch with the necessary items for the day. With the door creaking open, she made her way into the small foggy town."
  },
  {
    partSixteen:"The young woman strolled through town, and her path led her to a majestic cathedral that loomed ahead. "
  },
  {
    partSeventeen:"Filled with a desire to seek answers about her future"
  },
  {
    partEighteen:"She approached the cathedral, its ornate stained glass windows streaming with light. This sight brought a hopeful smile to her face, quickening her step as she reached the cathedral's heavy door. She knocked gently, and the aged wood groaned open, revealing the quiet expanse inside. The girl spoke up “Hello...is there someone who can help me find answers about my future?”"
  },  
  {
    partNineteen:"In the midst of the silence, a mysterious voice spoke gently but resolutely to the girl. “Child, ” it said, “you won’t find the answers you seek here. The cathedral is a place of faith and solace, not a source of wordly knowledge.”"
  },
  {
    partTwenty:"The girl, a mix of disappointment and curiosity, asked, “Where can I find guidance to uncover the mysteries of my future, then?”"
  },
  {
    partTwentyOne:"The voice, tinged with wisdom, replied, “Seek within yourself. The truth you're looking for lies in your heart and your experiences. Your path is one of self-discovery, shaped by the choices you make. The cathedral offers solace, but life's answers come from your own introspection and the lessons of time.”"
  },
  {
    partTwentyTwo:"With that, the voice faded into the cathedral's serene silence, leaving the girl to contemplate her quest, now turned inward to the depths of her own being."
  },
  {
    partTwentyThree:"The girl didn't give up easily. She spent a whole week returning to the cathedral, intent on coaxing answers from the mysterious voice inside. But as her patience waned and the cathedral remained silent, she grew frustrated. She finally decided it was time to seek answers from the townsfolk."
  },
  {
    partTwentyFour:"With determination in her heart, the girl turned to the townsfolk for answers about the cathedral's mysterious silence. She spoke to street vendors, artisans, and wise elders gathered in the town square. Their responses varied from superstition to ancient curses, each laced with intrigue and skepticism. Some believed in foreboding presences, while others whispered of enchantments cast by a powerful witch."
  },
  {
    partTwentyFive:"In her quest for clarity, the girl learned that the town's theories spanned the mystical and the ordinary, leaving her with a puzzle of legends and stories. The cathedral's silence had become a subject of fascination and trepidation among the townspeople. However, the girl remained unwavering in her resolve. She was determined to break through the veil of mystery, eager to unearth the truth concealed within the cathedral's ancient walls."
  },
  {
    partTwentySix:"The witch welcomed the young lady into her ethereal cottage, her eyes gleaming with a knowing twinkle. She spoke with an air of calm certainty, “Child, there is nothing amiss in your journey. It is a tapestry of experiences and trials, all woven into the intricate design of your life's destiny.”"
  },
  {
    partTwentySeven:"The young girl left the cottage and walked around in town, suddenly her arm began to burn. She looked at her wrist and saw something carved in it, it was a tattoo of a blackthorn!"
  },
  {
    partTwentyEight:"She ran to the nearest store and bought some water and wipes to try and wash it off but nothing happend, it was a burned into her skin…."
  },
  {
    partTwentyNine:"The young woman, though perplexed, accepted the witch’s words as a balm to her troubled soul. But destiny held yet more cryptic threads to unravel."
  },
  {
    partThirty:"As she roamed the gaslit streets, the shadowy figure in the cloak, a man of elusive presence, returned to haunt her. In a clandestine meeting, he stepped into her path and revealed the startling truth. “You bear the witch's mark, a curse from your encounter with the witch. It binds you to a fate of doom, and I, as her emissary, must end your life.” said the cloaked guy."
  },
  {
    partThirtyOne:"Fear gripped the girl's heart as she realized the gravity of her situation. She was caught between a destiny spun by the witch's hand and a stalker, her life hanging in the balance. The choices she made, and the secrets she unveiled, would ultimately determine the path of her future, in a world where the line between mysticism and reality blurred."
  },
];






console.log(story[0].partOne);
        let choice = input.question("A: Say sorry and keep looking for shelter " + " B:Say something back");
        if(choice == "a"){
        console.log(story[1].partTwo);
        } else if(choice == "b") {
        console.log(story[2].partThree);
        } 

console.log(story[1].partTwo);
let choice2 = input.question("A: Go to the cathedral " + " B: Go to the small tavern");
if(choice2 == "b") {
  console.log(story[2].partThree);
  console.log ("           x\n.-. _______|\n|=|/     /  \\\n| |_____|_\"\"_|\n  |_|_[X]_|____|")


  console.log(story[3].partFour);
  let choice4 = input.question("A: Go to the witch " + " B: Ask around town ");
  if(choice4 == "a") {
    console.log(story[25].partTwentySix);
  } 
  else if(choice4 == "b") {
    console.log(story[25].partTwentySix);
  } 

  console.log(story[4].partFive);
  let choice5 = input.question("A: Go to the store to buy wipes and water " + " B: Look at the burn mark ");
  if(choice5 == "a") {
    console.log(story[26].partTwentySeven);
  } 
  else if(choice5 == "b") {
    console.log(story[26].partTwentySeven);
  } 
} 
        

        

console.log (" _   |~  _\n[_]--'--[_]\n|'|\"\"`\"\"|'|\n| | /^\\ | |\n|_|_|I|_|_|");

let choice3 = input.question("A: Knock on the door " + " B: Go away and look somewhere else");
  if(choice3 == "a") {
    console.log(story[17].partEighteen);
  }
  else if(choice3 == "b") {
    console.log(story[17].partEighteen); 
  }