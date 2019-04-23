import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const AStranger = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#AB8476, #D6A2AD" />
{children}

<Pp bg="#D6A2AD, #8f84af, #e783e2, #3dfbff">
<p>There is a very big guy standing outside of my new workpod. He’s gotta be at least three leaps taller than me. His pink unwrinkled skin is slick, his hair thin and blond, his eyes deeply inset and closed. He looks so peaceful, I’m hesitant to disturb him. But that seems like what I ought to do.</p>
<p>“Excuse me mister, do you need anything?”</p>
<p>His eyes slide open. His voice is low and gooey.</p>
<p>“Is your name Bunndy22?”</p>
<p>“Uh huh.”</p>
<p>His eyes are wide, like he’s shocked by the sight of something unseeable. He smiles. “Excellently good to meet you, sir. Boo-yah! My name is Grabbus. Mr. Augustinius00 01Stone requests your presence.”</p>
<p>“Oh. OK. I’m just gonna hop in my pod to get my celly charging, be back in a jiff.” I rifle through my pouch, looking for my new name badge. I need it to unseal my workpod’s portal.</p>
<p>He exhales heavily. His entire face curls up. “My apologies Mr. 35Fludge, but Mr. 01Stone demands your presence now.”</p>
<p>“Really? It’ll only take a <span class="t">*</span>second.”</p>
<p>“Come with me.” He cracks his knuckles and chews his lip.</p>
<p>“Please?? I’m on 1%. It took an entire percent for me to look up my new pod location.”</p>
<p>He flares out his nostrils. “Do not make me beat you. I will smash you into a memory and fashion you into my personal dumpster.”</p>
<p>“Whoa, OK gotcha sorry. Lead the way big guy. Ha ha.”</p>
<p>Grabbus walks to the farthest wall and inscribes a sequence of geometric symbols into his celly. The wall melts into a pile of sludge the color of Strawbberry cereal. The revealed passage looks carved out of the same shiny pink material, glaring lurid under incandescent light.</p>
<p>I follow him into a dim cyan cylindrical chamber. The entrance refills behind us. I shut my eyes before the blinding light sears em. We are lifted skyward.</p>
</Pp>
{children}</div>
);

export default AStranger;
