import React from 'react';
import Fade from 'react-reveal/Fade';

import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const Dream2 = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}
<Pp bg="#000, #000">
  <Fade duration={2000}>
    <div>
<p>The leaves are wet beneath my bare feet. The sky is smoking, the moon is finally full. And I’m on all fours running my hands through the brush. The vegetation is rubbery and cold. I can’t find it. Mud cakes between my fingers. I start pulling up worms. They stick to the skin of my arms. They chew at me with their wet mouths. I shove my hands down deeper. “No no NO no no No no NO!!”</p>
    </div>
  </Fade>
</Pp>
{children}</div>
);

export default Dream2;
