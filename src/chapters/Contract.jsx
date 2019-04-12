import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const Contract = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#5d6167, #2b4153"/>
{children}

<Pp bg="#2b4153, #702358, #702358, #305760">
<p>I pace around my cubby. I feel quite ill at ease. Could I lose my job? I’m worried about my contract.</p>
<p>On my first <span class="t">*</span>day I met with Veronica25 97Snoat in the fifth floor Hiring Chamber. She explained to me that every new Dimples hire signs the same gilded contract. The chamber was freezing cold, apparently so the ink would dry better. I hadn’t seen it yet, but I had been given a pretty comfortable quill to sign it with.</p>
<p>“Do you have any questions?” She was wearing an excited grin. “This should be really quick, no biggie.”</p>
<p>“No questions yet.” I mimed my signature in the air with the quill. “Can I look it over?”</p>
<p>Her long fingers were perched atop the gilded papper. “Do you agree to it?”</p>
<p>“What do you mean?” I set the quill down.</p>
<p>“Pick up your quill.”</p>
<p>“Can’t I read it?”</p>
<p>“Don’t treat the quill like that. Hold it carefully in your little rodent hands. Why would we ever show you the contract if you weren’t going to agree to it?”</p>
<p>“That was not a kind thing to say about my hands, and I really don’t think I’m being out of line here. I just want to know what stuff I’m agreeing to.” I shivered and watched my breath mist dissipate.</p>
<p>“The text of this contract is private Dimples intellectual property.  If you cannot agree to sign the contract, we will retract our offer.” Her eyes showed flickers of disdain.</p>
<p>“But if I agree to sign, you’ll let me read the contract?”</p>
<p>“You either sign it or you don’t. The terms aren’t up to you. Everyone signs the same contract. That’s just the way it works here. Besides,” she points at the people standing on the transparent ceiling, “do you think all those people up there would’ve signed a bad contract?”</p>
<p>I imagined having to move back home, jobless, sitting in a rat-infested studio, listening to the clicking sound of the circular fan in the sweltering nasty summer heat, with no insurance, wondering how much longer my savings would last, feeling myself grow endlessly downwards like the roots of a weed. I picked up the quill, gently this time.</p>
<p>“OK. I agree to sign.”</p>
</Pp>
{children}</div>
);

export default Contract;
