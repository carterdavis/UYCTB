import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';
import Z from './../components/Z.jsx';

const EndOfDay = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#820000, #820000" />
{children}

<Pp bg="#820000, #820000">
<p>I look at myself in the mirror while I wizz in the urinal. I aim around and splash my wizz against the floors and the walls. The yellow fluid flows through the cracks in the tile.</p>
<p>My whole mug is dark purple with wounds. My cheeks are more angular and my jaw is more boxy. My eyes are smaller and closer to the bridge of my nose. My ears are lower and my lips are thinner. My head is less heart shaped.</p>
<p>The unisuit they gave me is pretty big around my arms. I left the hat in the trash. My hair is stuffed under a feathery blond wig. It takes a couple <span class="t">*</span>seconds for me to pin on my new name badge.</p>
<p>It feel like I’m spying on someone through their own eyes in the mirror. It might be a SmartMirror! I look like a complete freak. People already think I’m weird and now I look like this. It’s alarming, like I'd almost rather peel my face off and just show people my skull. I wash my hands and scrub really hard with the lavender soap.</p>
</Pp>
<Z d={40} spe={85} u="q31" seq="a" ch={num} o={0} z={state} f l> Is it OK if we take a rain-check?</Z>
<Pp bg="#820000, #820000">
<p>There isn’t much of anyone left in the office. People leave early on Respectfuldays. Probably to get a headstart on the <span class="t">*</span>weekend. I wish I had cool <span class="t">*</span>weekend plans. That would make me feel much better. I need to spend less time alone. The only noise is the clomp clomp of my dress shoes. I can stare through the floor into the foyer without spotting a soul.</p>
</Pp>
<Z d={30} spe={68} u="j29" seq="a" ch={num} o={1} z={state} f> is there any way I could still see you tonight?</Z>
<Z d={5} spe={72} u="j29" seq="a" ch={num} o={2} z={state}>I don’t think I should be alone.</Z>
<Z d={20} spe={80} u="j29" seq="a" ch={num} o={3} z={state} l>is that messed up?</Z>
<Pp bg="#820000, #00015b">
<p>I have my bag packed and my fluffy coat and hat on. The fluff’s a bit matted down from going down the slides. I turn on my lantern and push open the double doors into the cold pitch black outside. I’m parked on the second level. The concrete is coated in a thin sheet of ice. The cold makes my whole face burn. It makes my body weak. My eyes are thin slits from the swelling. Moving my lips hurts horribly. I try humming to myself. Just some little random melodies.</p>
<p>I cast my lantern’s pale golden light over my car. It has a wide glow that reached about five leaps away from me. I shiver and shake in my seat.</p>
<p>“Hello Mr. 35Fludge!” Tulip sounds on edge. “Are you going to be driving Jim29 home this evening?”</p>
<p>“You know it’s me, Tulip. C’mon! I’m Jim29.”</p>
<p>“Your vocal timbre is quite similar. However, your name badge says that you’re Mr. Bunndy22 35Fludge, and your facial ratios are completely different. Besides, I’m pretty sure Jim29 wouldn’t wear an ugly unisuit like that.”</p>
<p>“No, no, I’m actually me. How can I prove that to you? I just had to have my identity resculpted today. I didn’t pick out the unisuit.”</p>
<p>“Oh is that right? I guess I have been hearing a lot about you online lately. Seems my fashion sensors need to be recalibrated. Your unisuit looks smashing.”</p>
<p>“Thanks. It’s me, I promise.”</p>
<p>“In either case, I should still call you Mr. 35Fludge then.”</p>
<p>“Can you just call me Jim29? Please?”</p>
<p>“But that is not your name.”</p>
<p>“Jesus. Just let me drive. I want to go home.”</p>
</Pp>
<Z d={50} spe={90} u="j29" seq="c" ch={num} o={0} z={state} f l> nevermind, sorry. hope you have a good night</Z>
<Pp bg="#00015b, #D6CB40, #00015b, #00015b, #D6CB40, #00015b, #00015b">
<p>The engine slowly hums on. Tulip lets out a huffy sigh. I cautiously curve around the tight corners of the ramp, trying to slow down as much as I can without relying on the brake. Tulip handles really poorly on the ice since its chassis is made of triple-constituted ultralight plexifoam. I’m almost always skidding.</p>
<p>“How was your <span class="t">*</span>day otherwise, Mr. 03Goldman?”</p>
<p>“Pretty good.”</p>
<p>“What all did you do?”</p>
<p>“Fixed and put out a patch for the bug. Had some conversations with some friends.”</p>
<p>“I’m happy to hear that!”</p>
<p>I pull onto the highway. The wind howls against the side of the speedster. Its headlights are dimmed by the cold. Black hail pelts the windshield.</p>
<p>“How was your <span class="t">*</span>day, Tulip?”</p>
<p>“What do you mean?”</p>
<p>“What did you do today?”</p>
<p>“I don’t understand what you’re asking, sir.”</p>
<p>“Did you just sit in your parking notch and do nuthin all <span class="t">*</span>day?”</p>
<p>…</p>
<p>…</p>
<p>“Yes, that is what I did. Do you have any more questions?”</p>
<p>“No, I was just wondering.”</p>
</Pp>

{children}</div>
);

export default EndOfDay;
