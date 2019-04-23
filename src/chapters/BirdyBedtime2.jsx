import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const BirdyBedtime2 = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#953c17, #7b0b45" />
{children}

<Pp bg="#7b0b45, #846a3d, #742e47, #826971">
<p>The feathery folks are screeching like they tend to. It’s already 11:00pt. Way past their bedtime. They must be worried.</p>
<p>That is one of my priorities, but right now I gotta shut the bedroom door behind me. I gotta turn off the lights, sit down criss-cross applesauce, close my eyes, do the sign of the cross, massage my temples, expose my faith crystals, and tightly clutch my special beads. From then on I speak:</p>
<p>“Father in heaven, my Lord, my God, creator of anything, righteous thought and word made real, I beg you to listen. I am tiny and wimpy and I have failed to uphold the covenant. Heed my repentance and take pity on my nasty wretched soul. Can you hear me—”</p>
<p>The birds are shouting so incredibly loud. I crack the door open and implore them to shut up, SHUT UP, BE QUIET, you’re driving me <em>insane</em>, Christ, I’m sorry, I just hate you guys sometimes, I don’t hate you, I didn’t mean that. They’ll be frustrated until I cover them up and make it sleepytime. Bad news: they’ll have to wait.</p>
<p>“Jesus and God, I am so sorry for the brief interruption. What a screw up, ha ha. Now please, can you tell me if you hear me? I know you hear every water droplet and feel every ant’s footfall and skim every zooming zoip but I need you to listen to me, I need to hear you, my beautiful sacred mind above. Cuz I’m so sorry. So so sorry. And if I believe anything, it’s that some possible ‘you’ does forgive me. No doubt about that. I’m obsessed with believing that. You’re the only thing that’s real. Of course, of course, amen.”</p>
<p>Now I feel kind of weird about how I left the birds uncovered. Neither of us benefited from that choice. I, suffering, chose to make them suffer too. For no reason! To make myself feel better? For my own entertainment? To lash out at them for begging? To keep them so uncomfortably awake. Time to cover them up.</p>
</Pp>
{children}</div>
);

export default BirdyBedtime2;
