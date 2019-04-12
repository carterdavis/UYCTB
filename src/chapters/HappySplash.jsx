import React from 'react';
import LazyLoad from 'react-lazyload';

import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const HappySplash = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#fbebdc, #f9dfec" />
{children}

<Pp bg="#f9dfec, #f9ad7f">
<p>I knock the knocker and buzz the buzzer. Dr. Rocko19 85Grinski, my Happy Splash Specialist, answers the door to his 6th floor private cavern. He’s wearing a flowy floral tunic and a pink bandana that complements his striking eyes and dark velvety hair. “Jim29?” He asks in thinly-veiled surprise. His bright smile reaches all the way around his skull. “Back so soon?”</p>
<p>“Yah doc, so here’s the scoop: I think my code might have killed two innocent people.”</p>
<p>He swings the door open. His chambers are lit with the glow of charcoal burning in wall-mounted sconces. The floor beneath my boots is obscured by a collection of vibrant, culturally ambiguous rugs. His bountiful lips curl skyward. “You’re here for your Tragedy Bonus Splash, I assume?”</p>
<p>“Yah, I was wondering if I might qualify for that extra Bonus Splash. Chadmuth18 was telling me about that.”</p>
<p>He rests his dry thumb against my forehead for about ten <span class="t">*</span>seconds.</p>
<p>“Your temperature is elevated and you’re perspiring. Your mind is teeming with pathetic screams of worry. Morally, I feel obligated to splash you.”</p>
</Pp>
<Pp bg="#f9ad7f, #a8636c">
<p>I strip down to my boxers. “Thanks Dr. Grinski.”</p>
<p>He thrusts my head and neck down into the tub of murky Happy Fluid. I didn’t get enough of a breath and I flounder in the bubbling depths, feeling my pores swell up as the positive chemicals seep in. I instinctively thrash my arms and legs, choking on my lack of air, feeling his hands dunk me deeper. He slams my face against against the metallic basin of the tub and I feel my cartilage crunch. The solution slides down my throat and into my lungs.</p>
</Pp>
<Pp c="chapterImage" bg="#a8636c, #f2e798">
<p>
    <img src="assets/3.png" />
</p>
</Pp>
<Pp bg="#f2e798, #f2e798">
<p>He yanks me up by my dripping disc of hair. “You feel better, dumbass?”</p>
<p>“I feel so outrageously good. I love you.”</p>
</Pp>
{children}</div>
);

export default HappySplash;
