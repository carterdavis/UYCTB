import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const PoliticsTime = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#40688C, #7d0005" />
{children}

<Pp bg="#7d0005, #424B54">
<p>I talk a lot about the government. Politics tend to get me whipped up like a jackass. I know a lot of people don’t keep up with politics so I’m happy to give you a bit of an explainer. If you already know how it all works, feel free to skip this part. Don’t skip any other parts!!!!</p>
<p>So here’s the scoop. Every five <span class="t">*</span>years, Nowhere Else’s National Contract calls for the grand appointment of three Special Dukes. They are always proud, famous, high-class men. That’s by design; the three chosen men are those of highest class in the republic, ranked by total wealth in gold, and they are granted both veto and ultra-veto privileges. The current sitting Dukes are Phineas00 00Crunton, Lysander00 00Bellifont, and Edward00 00Normus. They’re all over the place; it’s pretty impossible to go a <span class="t">*</span>day without thinking about them in some fashion, whether they’re squirming on brightly lit screens, haunting our daily communication, shouting through speaker systems, whatever. They each represent one of the nation’s five core parties: the Prosperity Party, the Glory Party, the Courtesy Party, the Faith Party, or the Stability Party.</p>
<p>Special Duke Phineas00 00Crunton represents the Prosperity Party. He’s the boring duke. I never think about him much. He’s got a really circular, shrinky head and a stupid little smile. He’s approx 60 <span class="t">*</span>years old and the owner of the largest clot in the Trade Megasphere, TOTAL Corp. All of his decrees are about stuff like theoretical inflation and outsider trading and neo-capital or whatever. He looks like a nasty piglet. I hate his long greasy hair and his creepy little grin and I’d love to watch him fall face-first down an endless spiral staircase.</p>
<p>Special Duke Lysander00 00Bellifont represents the Glory Party. He’s the sexy Duke. Everyone agrees that he’s a hot little freak. He’s got a ridiculously hard, lean body and he loves war. We all love to look deep into his bright blue eyes. His late father, Gabriel__ __Bellifont, was a bigshot military commander who raked in the dam gold following his widely-publicized campaigns to fissure bomb, ecodrill, and terrace both the desert ring to the east and the wet jungle in the north. Lysander00 is only 27 <span class="t">*</span>years of age and has been starting pretty much all of the recent wars. Seems like every other <span class="t">*</span>day he’s screaming about some new war he’s got a crush on. Sometimes you can notice how toned his abs are through his tight robe. I hate his spitty nasally voice and his big pointy eyebrows. Like, I don’t think he should be poisoned, but he is definitely the kind of person that poison was invented for.</p>
<p>Special Duke Edward00 00Normus represents the Stability Party. He’s the perverted Duke. He doesn’t do anything and he doesn’t want anything to change. He’s about 150 <span class="t">*</span>years old and all he does is sit nudely alone in his private chambers. His skin constantly looks like it’s dripping; it’s stretched so thin that you can see the bones and tendons underneath. He doesn’t advocate for anything and mostly just moans and moans about how nasty the world has become. When he runs out of nasty things to moan about, he leans his knobby brittle skull out the bedroom window to squeal his kinkiest ideations at passersby. I tend to vote Stability, but if I were ever out hiking and happened to spot him dying of thirst trapped in a crevice between two rocky bluffs, I would not come to his rescue.</p>
</Pp>
{children}</div>
);

export default PoliticsTime;
