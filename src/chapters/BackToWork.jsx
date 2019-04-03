import React from 'react';

import Z from './../components/Z.jsx';
import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const BackToWork = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}

<Pp>Every <span class="t">*</span>month I spend two hunks of gold on my subscriptional for the “Peaceful Calm, Beautiful, And Quite Tranquil" visual theme which livens up my computerior. It makes the text appear in muted pastel tones, floating above sprawling green vistas and lapping waves.</Pp>
<Z d={20} spe={55} u="j29" ch={num} o={0} z={state} f> dinner would be great, actually</Z>
<Z d={10} spe={65} u="j29" ch={num} o={1} z={state} l>I’ll let you know when I get off work</Z>
<Pp>My digging for the error brings me to the RX knot, which is located in the medicine cabinet, obviously. I pierce the gooey film clogging the neck of this old Plumm Queam canister with my tongue and squeeze some of its nectar down my throat.</Pp>
<Z d={30} spe={70} u="q31" ch={num} o={2} z={state} f> Very good,</Z>
<Z d={25} spe={80} u="q31" ch={num} o={3} z={state} l>that way I can put the tangy toast in the oven.</Z>
<Pp>Chadmuth18 barges into my office. He’s wearing a pastel pink microsilk shirt. He asks “Is this a good time?”</Pp>
<Pp>I shake my head. “Nop, I’m lost in the code world.”</Pp>
<Pp>“OK, understood. I respect that. I’ll come back in a few <span class="t">*</span>hours.”</Pp>
<Pp>“Thanks. I appreciate it.”</Pp>

{children}</div>
);

export default BackToWork;
