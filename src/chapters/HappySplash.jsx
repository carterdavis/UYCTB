import React from 'react';
import LazyLoad from 'react-lazyload';

import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const HappySplash = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}

<Pp>I knock the knocker and buzz the buzzer. Dr. Rocko19 85Grinski, my Happy Splash Specialist, answers the door to his 6th floor private cavern. He wears a flowy floral tunic and a crown of polymer posies that complement his striking green eyes and velvety brown hair. “Jim29?” He asks in thinly-veiled surprise. His bright smile reaches all the way around his skull. “Back so soon?”</Pp>
<Pp>“Yah doc, so here’s the scoop: I think my code might have killed two innocent people.”</Pp>
<Pp>He swings the door open. His chambers are lit with the glow of charcoal burning in wall-mounted sconces. The floor beneath my boots is obscured by a collection of vibrant, culturally ambiguous rugs. His bountiful lips curl skyward. “You’re here for your Tragedy Bonus Splash, I assume?”</Pp>
<Pp>“Yah, I was wondering if I might qualify for that extra Bonus Splash. Chadmuth18 was telling me about that.”</Pp>
<Pp>He rests his dry thumb against my forehead for about ten <span class="t">*</span>seconds.</Pp>
<Pp>“Your temperature is elevated and you’re perspiring. Your mind is teeming with pathetic screams of worry. Morally, I feel obligated to splash you.”</Pp>
<Pp>I bend my torso downward as a display of deference. “Thank you Dr. Grinski.”</Pp>
<Pp>He thrusts my head and neck down into the tub of gooey pink Happy fluid. I didn’t get enough of a breath and I flounder in the bubbling depths, feeling my pores swell up as the positive chemicals seep in. I instinctively thrash my arms and legs, choking on my lack of air, feeling his hands dunk me deeper. He slams my face against against the metallic basin of the tub and I feel my nose cartilage crunch. The rosy solution slides down my throat and into my lungs.</Pp>
<Pp c="chapterImage">
  <LazyLoad offset={100} height={661} once>
    <img src="assets/chapter4.jpg" />
  </LazyLoad>
</Pp>
<Pp>He yanks me up by my dripping disc of hair. “You feel better, dumbass?”</Pp>
<Pp>“I feel so outrageously good. I love you.”</Pp>
{children}</div>
);

export default HappySplash;
