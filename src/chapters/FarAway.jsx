import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';
import LazyAudio from './../components/LazyAudio.jsx';

const FarAway = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#949494, #332063" />
{children}

<Pp bg="#332063, #D6CB40, #332063, #332063, #D6CB40, #332063, #332063, #D6CB40, #f1cdff, #000">
<p>Jumper56’s speedster is named Louisa. Louisa has long eyelashes and a little button nose. It greets Jumper56. “Whee! Good afternoon! I hope your <span class="t">*</span>day was like a plastic bag full of sunshine.”</p>
<p>What a sweet and courteous speedster. I wonder if they have a good relationship. My thoughts drift to Tulip. I feel pangs of guilt. He betrayed me, but I still miss him. He didn’t deserve to suffer the way he did. I hope he’s found peace.</p>
<p>Jumper56 clicks in and twists her thumb in the ignition socket. Louisa’s engine roars to life. A soft overhead light warms into a glow. We pull out of the parking notch. She looks over at me with faraway eyes. “It doesn’t seem like you have like, the essentials. For going on a trip I mean. Are you sure you don’t want me to take you home first?”</p>
<p>“No. I don’t have time for that.”</p>
<p>“You don’t wanna see your birds one last time??”</p>
<p>“It wouldn’t be safe.”</p>
<p>“OK be honest, did you do something illegal? Is it illegal for me to be helpin you right now?”</p>
<p>“No, you’re fine. It’s chill.”</p>
<p>“If I get arrested they’ll kick me down a tier. You realize that, right?”</p>
<p>“Yah. There’s nothing to worry about. Just take me north. Then you get <em>all</em> my gold.”</p>
<p>We turn onto Smile Avenue, the northeastern Dimples exit path. She rolls to a stop before the red light. “It’s sort of icky how you keep saying that, ‘<em>all</em> my gold.’ I don’t like whatever power dynamic is developing.”</p>
<p>“What? I was just acknowledging the incentive. I want everything to work out.”</p>
<p>“Don’t act like you’re giving away your gold as some benevolent gesture out of pity. You’re doing that because you have like, no other choice. Because I’m the only person left in Nowhere Else who would ever even CONSIDER helping you in an emergency. That’s weird.”</p>
<p>“Sorry. I didn’t mean to come across that way.”</p>
<p>“It’s fine. You mind if I play some tunes? The drive’ll take about an <span class="t">*</span>hour or so.”</p>
<p>“Sure, as long as they’re not scary.”</p>
<p>“What do you mean ‘scary’?”</p>
<p>“You were playing some pretty ghoulish stuff at your party.”</p>
<p>“Ha ha that scared you? That was just some fun dance music.”</p>
<p>“I thought it was simply horrendous. Such a worrisome array of nightmarish noises.”</p>
<p>“Jesus, OK, I’ll play something more mellow.”</p>
<p>The sounds are like neon dots warping in distant vision. Rainbow clouds floof between. The rhythms throb vertically. <div class="chapterSong"><LazyAudio src="assets/Ambient.mp3" loop={true} bg="#f1cdff" fg="#332063" /></div> My face is so strange now. The curves are unnatural to touch. I sink into the seat. I imagine myself on the edge of the sky. I open the Bblackberry Guaava Queam, pork knobs, and frosted corn nuggets I’d stuffed in my jacket. I close my eyes and I’m on the edge of the sky again eating pork knobs, watching the networks of dots in motion, digging the pork veins out from between my teeth. The eyes of my eyes gently descend into vapor.</p>
</Pp>
{children}</div>
);

export default FarAway;
