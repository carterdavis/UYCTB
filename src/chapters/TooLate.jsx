import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const TooLate = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}

<Pp>I have formulated a brand new theory. This theory is simple, yet surprisingly truthful. It is thus: every conflict is a result of misplacement. All suffering is just poor organization. Everything has its natural place, and we did a terrible job rearranging. We exist in contention with nature, with each other, with God, with ourselves. Gold should be in the hands of the needy, food should be in the hands of the hungry, carcinogens shouldn’t be in the corn or the water, no one should have guns, coal should’ve stayed in the ground.</Pp>
<Pp>I know my Birth Rate/Death Rate facts, and I’ve seen samples of the data we collected at Dimples. More than a billion people die of cancer every <span class="t">*</span>year. Another half billion die of dementia. The infant mortality rate is 7%. <span class="t">*</span>Yearly homicides doubled over the last <span class="t">*</span>decade, and the incidents are particularly concentrated in regions ravaged by natural disasters. Speaking of disasters, I’m not even counting the people displaced or extinguished by a treacherous climate or endless war. The average citizen in Nowhere Else experiences bottomless hardship in eyesight of extravagant splendor. I feel nauseous when I consider that seriously.</Pp>
<Pp>What I suppose I mean is if everything has its natural place, then things could theoretically work fine. I could find my natural place where things work fine, and I could need to exist. Somewhere I’m needed desperately. I could feel permanently satisfied there. It would all be organized and nothing would ever have to feel confusing.</Pp>
<Pp>I know I'll never meet Jesus. He and God are very bored of me. That must be the deal at this point. They're blowing me off because they think I’m a weirdo. I get it. There are better ways they can use their time, which is why I’m constraining my wonders to the terrestrial. But even that feels pointless. What’ll happen when we run out of places to put things? What’ll happen when we run out of things to put? I’m sure the answer is just bigger, faster violence. One of these <span class="t">*</span>years we'll all get wiped out. That’s basically a given. This won’t exist for too much longer. Something’s going to come to a head, or something’s going to swoop in. The lights are going to turn off.</Pp>
<Pp>I hope Buzz, Boom, and Boing are sleeping well. Feathers fluffed up, little eyes closed, one foot curled up while the other balances on the branch, soft tiny chest rising and falling. I really miss them dearly. Hopefully Jumper56 takes care of them like she said she would. I’m sure she will. She’s a nice person.</Pp>
<Pp>My cellular device dies. In an instant the darkness is fearsome and limitless. The puddles are up to my ankles.</Pp>
{children}</div>
);

export default TooLate;
