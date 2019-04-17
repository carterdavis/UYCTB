import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const BirdyBedtime = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#2f2f2f, #7b0b45" />
{children}

<Pp bg="#7b0b45, #846a3d, #742e47, #826971">
<p>The silly birdies are squawking because I left them uncovered. Flashing nighttime lights are scary for winged friends, so I drape goodnight quilts over their cages to shut em out. As a nifty bonus, the quilts also provide some much-needed insulation against the chilly nasty winter air. Isn’t that right buddies? These windows are single paned, that’s why it’s always so brisk in here. I really hope you guys didn’t get too cold. It would be so awful to shiver all night in the cold.</p>
<p>Normally they don’t squawk this much. I know, I know, I’m getting the quilts, see? Please stop. Stop it! Be quiet! We have neighbors! Shut up!! I seriously need you guys to put a sock in it.</p>
<p>Goodnight Buzz. Goodnight Boom. Goodnight Boing. Sweetest dreams. I love you so much.</p>
</Pp>
{children}</div>
);

export default BirdyBedtime;
