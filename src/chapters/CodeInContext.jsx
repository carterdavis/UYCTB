import React from 'react';

import Z from './../components/Z.jsx';
import Pp from './../components/Pp.jsx';

const CodeInContext = (props) => (
<div>
{props.children}

<Pp>Dimples supports thousands of premium devices. Every premium device must fulfill a unique set of expectations. For instance: ThermoMate needs to factor atmospheric pressure into its temperature calculations, OpticSurgeryCompanion needs to account for the rotation of the planet as it generates the movements of its sharp limbs, and BlackheadPopPal manages swelling data from a pair of bulbometers to ensure the perfect splat. They run on the same software, but every case is different. There are a staggering number of variables to account for.</Pp>
<Pp>Our files don't include any notes or comments as part of a company-wide anti-context policy. Every device uses the same fundamental base of code, and including superfluous contextual data could significantly increase the uncompiled size of the program. It's already plenty big as it is. There's no way to remove any significant chunk of old code because the mammoth Tangle files make wanton references to one another. They wrap around each other and spill over each other. They number in the millions. Anything could be going wrong anywhere. I'll just have to dig.</Pp>
<Pp>If you haven't programmed before, it's like explaining a list of things to do line by line in a sparse, logically exact language for a robot who doesn't really get where you're coming from. That to-do list can diverge and loop-de-loop over and over like a ziggly roller coaster. It can zoom into other lists of things to do and can create lists of its own. Errors occur when the lists conflict or the instructions don't make sense. Hopefully that isn't a bad explanation, I'm sort of lost in the code world.</Pp>
<Pp>The past two bugfixes I made yielded bugs of their own. I had to individually Multivaluate each conflicting variable. It took two *hours. When I looked away at the white walls of my office they had the wobbly pattern of scrolling text.</Pp>

{props.children}</div>
);

export default CodeInContext;
