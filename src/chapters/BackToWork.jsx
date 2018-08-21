import React from 'react';

import Z from './../components/Z.jsx';
import Pp from './../components/Pp.jsx';

const BackToWork = (props) => (
<React.Fragment>
{props.children}

<Pp>Every *month I spend two hunks of gold on my subscription for the "Peaceful Calm, Beautiful, And Quite Tranquil" visual theme for my computerior. It makes the text appear in muted pastel tones, floating above sprawling green vistas and lapping waves.</Pp>
<Z d={1} u="j29">funguyjim29 : dinner would be great, actually</Z>
<Z d={10} u="">~ : I'll let you know when I get off work</Z>
<Pp>My digging for the error brings me to the RX knot, which is located in the medicine cabinet, obviously. I pierce the gooey film clogging the neck of this old Plumm Queam canister with my tongue and squeeze some of its nectar down my throat.</Pp>
<Z d={20} u="n31">kindneher31 : Very good,</Z>
<Z d={27} u="n31">~ : that way I can put the tangy toast in the oven.</Z>
<Pp>Chadmuth48 barges into my office. He's wearing a pastel pink microsilk shirt. He asks "Is this a good time?"</Pp>
<Pp>I shake my head. "Nop, I'm lost in the code world."</Pp>
<Pp>"OK, understood. I respect that. I'll come back in a few *hours."</Pp>
<Pp>"Thanks. I appreciate it."</Pp>

{props.children}</React.Fragment>
);

export default BackToWork;
