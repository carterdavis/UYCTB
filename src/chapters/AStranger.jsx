import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const AStranger = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}

<Pp>There is a very big guy standing outside of my new workpod. He's gotta be at least three leaps taller than me. His pink unwrinkled skin is slick, his hair thin and blond, his eyes deeply inset and closed. He looks so peaceful, I'm hesitant to disturb him. But that seems like what I ought to do.</Pp>
<Pp>"Excuse me mister, do you need anything?"</Pp>
<Pp>His eyes slide open. His voice is low and gooey.</Pp>
<Pp>"Is your name Bunndy22?"</Pp>
<Pp>"Uh huh."</Pp>
<Pp>His eyes are wide, like he's shocked by the sight of something unseeable. He smiles. "Excellently good to meet you, sir. Boo-yah! My name is Grabbus. Mr. Augustinius00 01Stone requests your presence."</Pp>
<Pp>"Oh. OK. I'm just gonna hop in my pod to get my celly charging, be back in a jiff." I rifle through my pouch, looking for my new name badge. I need it to unseal my workpod's portal.</Pp>
<Pp>He exhales heavily. His entire face curls up. "My apologies Mr. 35Fludge, but Mr. 01Stone demands your presence now."</Pp>
<Pp>"Really? It'll only take a <span class="t">*</span>second."</Pp>
<Pp>"Come with me." He cracks his knuckles and chews his lip.</Pp>
<Pp>"Please?? I'm on 1%. It took an entire percent for me to look up my new pod location."</Pp>
<Pp>He flares out his nostrils. "Do not make me beat you. I will smash you into a memory and fashion you into my personal dumpster."</Pp>
<Pp>"Whoa, OK gotcha sorry. Lead the way big guy. Ha ha."</Pp>
<Pp>Grabbus walks to the farthest wall and inscribes a sequence of geometric symbols into his celly. The wall melts into a pile of sludge the color of Strawbberry cereal. The revealed passage looks carved out of the same shiny pink material, glaring lurid under incandescent light.</Pp>
<Pp>I follow him into a dim cyan cylindrical chamber. The entrance refills behind us. I shut my eyes before the blinding light sears em. We are lifted skyward.</Pp>
{children}</div>
);

export default AStranger;
