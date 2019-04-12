import React from 'react';
import LazyLoad from 'react-lazyload';

import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';
import Z from './../components/Z.jsx';

const MeetMyBirdies = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#332063, #fec148" />
{children}

<Pp bg="#fec148, #e75f8d">
<p>Buzz is happiest to see me. She’s my blackbird. Doesn’t she have such a silly voice? Always makes me laugh. Her wings are so beautiful. I love the way her beak curves. Isn’t she so beautiful? She’s got such a kind face. As she steps side to side you can see her shift her balance delicately from foot to foot. I can tell that she’s always watching me, always trying to understand what I’m doing. I apologize for the mess, I keep forgetting to clean up. I swear I’m going to get around to it one of these <span class="t">*</span>days. There’s a path running through here, see? Very easy.</p>
<p>Boom is my lovely dove. Such a handsome guy, right? Isn’t he such a charmer? One <span class="t">*</span>second, I’m going to close the door. He has such a manly face. Doesn’t he? Very tough. I’ve had him since he was a little fuzzball. He’s grown up to be so humongous! His chirps just burst in the brightest notes. Boom is the neediest. Aren’t you? If I’m out of the room three <span class="t">*</span>minutes too long he‘ll fluff up and screams like he’s being tortured. Right now he’s just super excited for his pineapple chunk!</p>
</Pp>
<Pp bg="#e75f8d, #ffdf00">
<p>You’ll want to step over that pile of gold ingots but I have Boing in the office. Actually be careful, I broke a glass canister on accident near there and I’m worried there might still be some little crumblies. Really sorry about that. Believe it or not, he gets that whole big cage to himself! The feathery despot rules over his domain, ha ha. He’s a rainbow macaw, really young. I adopted him super recently. Such a fuzzy tired fella. His feathers are puffed out, so he might be a little grouchy. Were you napping, sweetie?</p>
<p>Routines are important for birdies. I feed him every <span class="t">*</span>day when Pleasure Time ends and Business Time starts, so roughly 6:00bt…any later and he starts to shriek, ha ha. I should actually go set a timer real quick. Look at you, buddy! Gosh look at you!! You’re growing up so fast.</p>
</Pp>
<Z d={10} spe={58} u="j56" ch={num} o={0} z={state} f l> don’t you hate having to wipe your rear?</Z>
<Z d={15} spe={70} u="j29" ch={num} o={1} z={state} f> hmm. i guess so.</Z>
<Z d={10} spe={66} u="j29" ch={num} o={2} z={state} l>never really thought much about that before</Z>
<Z d={15} spe={65} u="j56" ch={num} o={3} z={state} f> thought at this point we would have some sort of</Z>
<Z d={10} spe={70} u="j56" ch={num} o={4} z={state}>gadget or whatever</Z>
<Z d={5} spe={68} u="j56" ch={num} o={5} z={state} l>to do it for us</Z>
<Pp bg="#ffdf00, #ed0084">
<p>Funny thing about my buddy Boom is that I don’t think he really gets where I begin or end, in an anatomical sense. He probably thinks my hands and my head are three distinct creatures. I don’t blame him! They act asynchronously to perform separate tasks. The world is very confusing. There are so many things he has to learn and no one to do the explaining. Wish I could.</p>
</Pp>
<Pp c="chapterImage" bg="#ed0084, #ed0084">
<p>
    <img src="assets/6.png" />
</p>
</Pp>
<Pp bg="#ed0084, #e9c491">
<p>It’s so hard to discipline without a common language. I’m still not even sure how to tell him “no, I don’t like that” or whatever. It’s the same sitch with all the birdies. I would never want to hurt him or scare him, but he’s been flarping big blops in his water dish every morning. Squeezing out huge rubbery putties right into the water. What a mess to wake up to! And does that stop him from drinking out of that very same water?? No sir! Not at all! Nop, nop. How on earth do I get you to stop doing that, buddy?</p>
</Pp>
<Z d={15} spe={80} u="j29" ch={num} seq="b" o={0} z={state} f> That is a good point</Z>
<Z d={20} spe={85} u="j29" ch={num} seq="b" o={1} z={state}>on the other hand, its a complex task</Z>
<Z d={5} spe={60} u="j29" ch={num} seq="b" o={2} z={state}>a lot could go wrong</Z>
<Z d={10} spe={70} u="j29" ch={num} seq="b" o={3} z={state} l>many different strategies to consider</Z>
<Z d={5} spe={55} u="j56" ch={num} seq="b" o={4} z={state} f l> true, i would not want it to go wrong!!!</Z>
<Pp bg="#e9c491, #0a0423">
<p>I made a mistake today, Boing. Two people died because of it. On top of that, everyone knows about it. Or at least half of everyone. I can’t go to prison. That would suck so bad!! I don’t even understand what I did. Cold, infinite death. Who knows who’ll be the next. Maybe death isn’t too bad. Maybe it feels great. I guess you’d probably know better than me. It’s just the opposite of whatever you just learned is right now. C’mon, I’m not a bad one, right? I’ve gotta be one of the good ones. I do so much for you.</p>
</Pp>
<Pp bg="#0a0423, #e75f8d">
<p>Doesn’t his beak make it look like he’s smiling?</p>
<p>I hope your <span class="t">*</span>day was really good, Boing. I want your whole life to be so so so non-stop unrelentingly perfect. Stop biting my fingernail. Yowch! I don’t like that. That hurts. That’s the kind of thing bad ones do. I love you, sorry, I just don’t like that. Man, your eyes are seriously so pretty. They’re just like jewels. I have to set you back down, buddy. Sounds like Boom wants his fruit chunk.</p>
</Pp>
{children}</div>
);

export default MeetMyBirdies;
