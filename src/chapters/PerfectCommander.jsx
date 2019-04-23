import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const PerfectCommander = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#bb3f3f, #947706" />
{children}

<Pp bg="#947706, #c1fd95, #ac86a8">
<p>I’m sitting on the circular couch watching teevee with a sizzling tray of Razzberry-cheddar nachos. The flavors are doing an impassioned jig atop my taste buds. My feet are crossed in one of the top ten comfiest ways. I’m watching a show called The Perfect Commander, produced by Ha Ha Entertainment.</p>
<p>It’s a really good show to watch, and it has won a lot of awards for its thought-provoking representation of what <span class="t">*</span>daily life is like for a military commander who does not make mistakes. I don’t always completely agree with its politics 100% of the time, but I think it delivers a fascinating message that begs to be heard.</p>
<p>Quick rundown: Commander Crant__ __McCarckus is a philosopher and a family man. He’s brave, powerful, god-fearing, and definitely the kind of guy you can’t help but admire. He provides a spit sample in order to activate his speedster. His plucky son, Carny__, is in the passenger seat. The camera frames Crant__’s chiseled, leathery face.</p>
<p>“Keep sippin your Morningberry Queam, kiddo,” he paternally chides, turning onto the expressway.</p>
<p>“It’s too chalky. I refuse.”</p>
<p>“Quit being a brat. It has a chalky mouthfeel because it’s packed with 92 approximated vitamins and minerals to make little boys like you grow up strong and tough. Next time you can’t think of something smart to say, I implore you to zip it.”</p>
<p>His son buries his face in his hands. “I am so very very sorry.”</p>
<p>“Now I’m going to drop you off at Child Dome, but the truth is I might never pick you up again.”</p>
<p>“What do you mean, poppo?”</p>
<p>“The heinous revolutionary invaders have seized integrally crucial intel and odds are good that they’ll strike very ‘explosively,’ thank you very much. We’re talking the same wicked bloodthirsty hounds I started four separate wars to wipe out, but dammit, parliament failed to pass our exceedingly reasonable budget revisions, and THUS, we lacked the resources to win the righteous fight. It’s almost like they don’t realize that I’m Perfect Commander.”</p>
<p>Carny__ shakes his small boyish head. “Why do the invaders want to destroy our way of life?”</p>
<p>“Because their brains are filled with poisonous evil. They have never once thought a single kind or honest idea. They are motivated by a hatred of God and our universe completely devoid of nuance or rationale.”</p>
<p>“Please dismember the wicked ones. For me, your gentle boy.”</p>
<p>“Of course I will, squirt. That’s what I do. I’m the good man who makes blood gush.”</p>
</Pp>
{children}</div>
);

export default PerfectCommander;
