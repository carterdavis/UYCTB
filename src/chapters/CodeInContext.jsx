import React from 'react';

import Z from './../components/Z.jsx';
import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const CodeInContext = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#A491D3, #d0d0d0" />
{children}

<Pp bg="#d0d0d0, #565656, #d0d0d0, #565656, #d0d0d0">
<p>Dimples supports thousands of premium devices. Every premium device must fulfill a unique set of expectations. For instance: ThermoMate needs to factor atmospheric pressure into its temperature calculations, OpticSurgeryCompanion needs to account for the rotation of the planet as it generates the movements of its sharp limbs, and BlackheadPopPal manages swelling data from a pair of bulbometers to ensure the perfect splat. They all run on the same software, but every case is different. There are a staggering number of variables to account for.</p>
<p>Our files don’t include any comments or documentation as part of a company-wide anti-context policy. Every device uses the same fundamental base of code, and including superfluous contextual data could significantly increase the uncompiled size of the program. It’s already plenty big as is. There’s no way to remove any significant chunk of old code because so many mammoth Tangle files make wanton references to one another. They wrap around each other and spill over each other. They number in the millions. Anything could be going wrong anywhere, which means I’ll just have to dig.</p>
<p>If you haven’t programmed before, it’s like explaining a list of things to do line by line in a sparse, logically exact language for a robot who doesn’t really get where you’re coming from. That to-do list can diverge and loop-de-loop over and over like a ziggly roller coaster. It can zoom into other lists of things to do and can create lists of its own. Errors occur when the lists conflict or the instructions don’t make sense. Hopefully that isn’t a bad explanation, I’m fairly lost in the code world.</p>
<p>Nothing is simple or static. Bugfixes yield bugs of their own. Ideas warp in the weirdest directions.</p>
</Pp>

{children}</div>
);

export default CodeInContext;
