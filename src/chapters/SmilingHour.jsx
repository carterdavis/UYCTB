import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';
import Z from './../components/Z.jsx';

const SmilingHour = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#0a0423, #ef97b5" />
{children}

<Pp bg="#ef97b5, #ffe95b, #f35bb3">
<p>I sit on the circular couch watching teevee. Trying to chill out. My celly vibrates on the cushion. It’s been buzzing nonstop. Completely sucks to use. I’m currently watching a news program called “Smiling <span class="t">*</span>Hour” brought to you by Ha Ha Entertainment. This reporter always picks very tender stories. They generally warm my heart. The film is filtered to look rosy. Two friends are walking, arms around each other’s shoulders.</p>
<p>“I’m his best friend.”</p>
<p>“And he’s mine!”</p>
<p>The camera flips between their faces at canted angles as they laugh.</p>
<p>“We do everything together.”</p>
<p>“We couldn’t live without each other!”</p>
<p>They’re standing beside each other before an oceanfront cliff’s expanse. Their long hair blows in the wind. It’s a majestic shot even though they’re shivering. The reporter steps into view. “But their friendship is even more than it may seem.”</p>
<p>Friend 1 sits on a bench in a gazebo. “Every <span class="t">*</span>day he gets covered in putty. I don’t know how it happens. I look away for one <span class="t">*</span>second and boom, now all of a sudden he’s caked in man mud. Head to toe.”</p>
<p>Reporter sits across from him, lit brightly from above. “And you always clean him up?”</p>
<p>“Of course. I wad up thousands of tissues and wipe him up.”</p>
<p>“Why do you do that for him?”</p>
<p>“He’s my friend. I stick up for my friends.”</p>
</Pp>
{children}</div>
);

export default SmilingHour;
