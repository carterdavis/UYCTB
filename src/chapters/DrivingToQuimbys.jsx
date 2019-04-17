import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';
import Z from './../components/Z.jsx';
import Snip from './../components/Snip.jsx';

const DrivingToQuimbys = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#f35bb3, #00013e" />
{children}

<Pp bg="#00013e, #00fff3, #00013e, #00013e, #fff700, #00013e, #00013e, #FF0066, #00013e, #00013e, #00ff37, #00013e">
<p>The city is a neon hell this time of night. Multiple levels of highways are backed up around skyscrapers lit in glaring hues with rail tracks zigzagging vertically between. Each speedster has its own muffling plume of black exhaust. They speed up and slow to a stop, bumper to bumper, jittering forward like segments of a mechanical caterpillar running out of battery. The flow of traffic can cease for <span class="t">*</span>minutes at a time. I don’t roast coal every time this purple one in front of me does, because I know they’re about to slam on the brakes. It’d be a waste of carbon energy. I tend to wait until there’s a significant enough gap in front of me before rolling forward, but I’m sure that behavior ticks off the people behind me. If everyone simultaneously chose to stay in place until the traffic cleared, no one would ever move. Our humanoid reflexes are dangerously clunky, and our driving system doesn’t accommodate for mistakes. Any moderate error incurs vehicular damage, monetary loss, and/or bodily harm. I lurch forward and grind to a halt, over and over.</p>
<p>I hate driving. I hate being wedged in front of and behind and next to people whose one sleepy mistake could grind my body into burger meat. I hate the way my bum feels after sitting for an <span class="t">*</span>hour and a half. I hate seeing their faces as they merge into my lane with their open mouths and sweaty foreheads and unfocused eyes. They look like tired rubbery frogs. They look just as nervous as me. Not encouraging.</p>
<p>I roll up to the highway intersection. Five lanes on both sides. I almost doink into the rear of the guy in front of me. His bumper sticker says HONK = SCREAM and every half <span class="t">*</span>minute or so he honks. Speedsters race through the intersection while we wait at a red. I’m trying to not think about anything but I keep thinking about not thinking. I feel like I’m swallowing too much air when I breathe. My phone is still vibrating on the passenger’s seat. The clock says it’s 6:30pt. Looking in the rearview, the swelling really has gone down a lot. I still look purple but not nearly as puffy.</p>
<p>The sign fades to black and a red dollar sign appears next to some red zeros. I yell at the top of my lungs. A full-throated shout from deep in my gut. I’ve gotten three super reds this <span class="t">*</span>month, and we’re only two <span class="t">*</span>weeks in!</p>
<p>The zeros eventually climb up to about thirty hunks and seventy gold nibs. Two more <span class="t">*</span>minutes pass. I boot up the NeatStreet program on my celly and contribute twenty. <Snip screenWidth={state.screenWidth} bg='#00fff3'>Here’s the thing, like, I understand that maintaining the roads is an expensive task. But we already have high income tax and sales tax, and we’re on Tier 2. Some people around here don’t make much. Why would they hold us hostage for funds when the Apex Tier creeps directly above us have castles made of gold? It’s senseless. That’s why I donate a decent amount, to support those who can’t. I don’t go overboard or anything, but I contribute more than average.</Snip></p>
<p>I stuff my hands between my knees and shiver. Three more <span class="t">*</span>minutes pass. I put Tulip in park and turn off the coal. The sky is empty darkness.</p>
<p>OK this is ridiculous. There are so many people stopped at this light. Can none of them afford a few hunks to make the light turn green? Oh my goodness! We’re all just sitting here, wasting away.</p>
<p>The sides of buildings light up to display commercials from high end brands. I sink down into my seat. The pressure in my distorted face hurts terribly. The plastic layer over my skin is so tight.</p>
<p>The goal of seventy-five hunks is finally reached. The sign lights up green and GO.</p>
</Pp>
{children}</div>
);

export default DrivingToQuimbys;
