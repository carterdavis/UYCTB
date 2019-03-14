import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';
import Z from './../components/Z.jsx';

const SmilingHour = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}

<Z d={25} spe={85} u="n31" ch={num} o={0} z={state} f l> Ok I understand. Come over whenever</Z>
<Pp>I sit on the circular couch watching teevee. My celly vibrates on the cushion. It’s been buzzing nonstop. Completely sucks to use. I’m currently watching a news program called “Smiling <span class="t">*</span>Hour" brought to you by Ha Ha Entertainment. This reporter always picks very tender stories. Generally they warm my heart. The film is filtered to look especially rosy. Two friends are walking, arms around each other’s shoulders.</Pp>
<Pp>“I’m his best friend.”</Pp>
<Pp>“And he’s mine!”</Pp>
<Pp>The camera flips between their faces at canted angles as they laugh.</Pp>
<Pp>“We do everything together.”</Pp>
<Pp>“We couldn’t live without each other!”</Pp>
<Pp>They're standing beside each other before an oceanfront cliff’s expanse. Their long hair blows in the wind. It’s a majestic shot even though they’ve shivering. The reporter steps into view. “But their friendship is even more than it may seem.”</Pp>
<Pp>Friend 1 sits on a bench in a gazebo. “Every <span class="t">*</span>day he gets covered in putty. I don’t know how it happens. I look away for one <span class="t">*</span>second and boom, now all of a sudden he’s caked in man mud. Head to toe.”</Pp>
<Pp>Reporter sits across from him, lit brightly from above. “And you always clean him up?”</Pp>
<Pp>“Of course. I wad up thousands of tissues and wipe him up.”</Pp>
<Pp>“Why do you do that for him?”</Pp>
<Pp>“He’s my friend. I stick up for my friends.”</Pp>
{children}</div>
);

export default SmilingHour;
