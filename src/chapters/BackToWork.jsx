import React from 'react';

import Z from './../components/Z.jsx';
import Pp from './../components/Pp.jsx';

const BackToWork = ({ children, num, state }) => (
<div>
{children}

<Pp>Every <span class="t">*</span>month I spend two hunks of gold on my subscriptional for the "Peaceful Calm, Beautiful, And Quite Tranquil" visual theme which livens up my computerior. It makes the text appear in muted pastel tones, floating above sprawling green vistas and lapping waves.</Pp>
<Z d={20} spe={55} u="j29" ch={num} o={0} z={state.zoips} first> dinner would be great, actually</Z>
<Z d={30} spe={65} u="j29" ch={num} o={1} z={state.zoips}>I'll let you know when I get off work</Z>
<Pp>My digging for the error brings me to the RX knot, which is located in the medicine cabinet, obviously. I pierce the gooey film clogging the neck of this old Plumm Queam canister with my tongue and squeeze some of its nectar down my throat.</Pp>
<Z d={70} spe={70} u="n31" ch={num} o={2} z={state.zoips} first> Very good,</Z>
<Z d={35} spe={80} u="n31" ch={num} o={3} z={state.zoips}>that way I can put the tangy toast in the oven.</Z>
<Pp>Chadmuth48 barges into my office. He's wearing a pastel pink microsilk shirt. He asks "Is this a good time?"</Pp>
<Pp>I shake my head. "Nop, I'm lost in the code world."</Pp>
<Pp>"OK, understood. I respect that. I'll come back in a few <span class="t">*</span>hours."</Pp>
<Pp>"Thanks. I appreciate it."</Pp>

{children}</div>
);

export default BackToWork;
