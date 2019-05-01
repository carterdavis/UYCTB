import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';
import Z from './../components/Z.jsx';

const BackHome = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#00015b, #fec148" />
{children}

<Pp bg="#fec148, #e75f8d, #ffdf00">
<p>How’d you get all the way over here Boom? Yah it’s me, Jim29, don’t worry. I’m going to look a little different from now on but that’s just how life goes. Did you have a nice Respectfulday? Don’t you get tired climbing around your cage with just your toes and your beak? You’re so curious. Aren’t you! I love the way you play. Are you dancing for me? What a beautiful dance!! When he bobs his head like that it means he’s happy.</p>
<p>Little Buzz always get about three <span class="t">*</span>seconds of seed for dinner. I just shake it like that, one-two-three. She always knows when it’s time to eat. I feel like she’s the one that really watches me. <span class="t">*</span>Day in and <span class="t">*</span>day out she lurks in the corner of her cage, glowering at me. Must be trying to figure out what I’m up to. What’re you thinking about Buzz? What do you think of me? Ha ha. When she runs her beak through her feathers she’s cleaning herself. She must think she’s pretty dirty. I love you Buzz! You know I do.</p>
<p>I wish I knew the shape of your thoughts. I wish I knew what they sound like. When you look in your mirror, why do you think that other Buzz acts just like you? What’s your explanation? I suppose it just IS, and there’s nuthin wrong with that. Aren’t we all, little buddy. We all are, ha ha.</p>
<p>You see that little mirror hanging in the back corner of her cage? With the little bell hanging off of it? I used my experience working on that Dimples ReflectionCam to rig up tiny cameras that analyze the birds’ eye movements. The camera sees through that tiny hole in the bell. An algorithm crunches their eye movements into motion vectors and dynamically analyzes whether or not they’ve recognized themselves in the mirror. If they do recognize themselves, it’s rigged up to automatically open the gate to the their cage, granting them freedom and independence. I slapped the bellcam system together a few <span class="t">*</span>weekends ago. I bet you’re thinking that’s the kind of thing a weirdo does, and you’re probably right. It’s certainly a philosophical preoccupation of mine, I think about it a lot. And regardless it’s not like I have friends who want to hang out.</p>
<p>Look, Boing just climbed up on my arm like that! So sweet. He’s already starting to trust me. If you look real close you can see his feathery chest rise and fall. What goes on in that little head? Some pretty big stuff, I imagine.</p>
</Pp>
<Z d={10} spe={70} u="q31" ch={num} o={0} z={state} f l> Oh gosh, is there an emergency?</Z>
<Z d={15} spe={60} u="j29" ch={num} o={1} z={state} f> nah</Z>
<Z d={15} spe={55} u="j29" ch={num} o={2} z={state} l>I’m sorry, I didn’t mean to guilt you or anything</Z>
<Z d={15} spe={72} u="q31" ch={num} o={3} z={state} f> No, don’t worry.</Z>
<Z d={10} spe={65} u="q31" ch={num} o={4} z={state} l>To be honest I just got kind of freaked out seeing all of the stuff on Drip.</Z>
<Z d={15} spe={80} u="j29" ch={num} o={5} z={state} f l> I understand if you want to keep your distance.</Z>
<Z d={10} spe={74} u="q31" ch={num} o={6} z={state} f l> No no, that was messed up of me. I’m sorry.</Z>
<Z d={15} spe={60} u="j29" ch={num} o={7} z={state} f> don’t worry bout it</Z>
<Z d={15} spe={55} u="j29" ch={num} o={8} z={state} l>I’ve just been having a hard time</Z>
<Z d={10} spe={70} u="q31" ch={num} o={9} z={state} f l> Would you like to come over around seven?</Z>
<Z d={15} spe={60} u="j29" ch={num} o={10} z={state} f l> sure, works for me</Z>
<Pp bg="#ffdf00, #ed0084, #e9c491, #0a0423">
<p>	Aah Jesus Boom!! Stop yelling! That was right in my ear! No! Bad! Bad boy!</p>
<p>When I carry him back to his cage for time out he always tweets the prettiest whistles he can think of, hoping they’ll change my mind. That is still bad behavior! He’s a manipulative little scoundrel. I can’t let myself be vulnerable to his persuasion. We’ll reconcile once he serves his penance.</p>
<p>My celly is ringing, but I don’t recognize this area code. Most of the voice calls I get nowadays are robots that just hang up immediately. “Hello?”</p>
<p>“Is this Jim29 03Goldman?”</p>
<p>“Yah. How did you get my number?”</p>
<p>“I can’t wait to wrap my hands around your little neck tonight. The last thing you’ll taste is my hot sour sweat.”</p>
<p>The line goes dead. I guess he hung up.</p>
</Pp>
{children}</div>
);

export default BackHome;
