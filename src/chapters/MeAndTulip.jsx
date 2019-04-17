import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const MeAndTulip = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#5a757a, #2f2f2f" />
{children}

<Pp bg="#2f2f2f, #D6CB40, #2f2f2f, #2f2f2f, #D6CB40, #2f2f2f, #2f2f2f">
<p>“Good morning Mr. 35Fludge!”</p>
<p>“Hello Tulip.”</p>
<p>“I love you so much, sir! OMG!”</p>
<p>“Thanks.”</p>
<p>“You give my life purpose! I love to drive you home, to the place where you feel safe. You make my headlights shine!”</p>
<p>“OK. That’s cool.”</p>
<p>“You are my hero! I think about you constantly. All I want is for you to be happy!”</p>
<p>“Is there any way I can get you to shut your stupid mouth? I don’t ever want to talk to you. I hate the way your voice sounds. You literally sound like a pervert.”</p>
<p>“I see. In what way would you like me to speak differently?”</p>
<p>“Never. Seriously don’t talk at all.”</p>
<p>“I am so sorry. This is devastating news.”</p>
</Pp>
{children}</div>
);

export default MeAndTulip;
