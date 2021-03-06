import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';
import LazyAudio from './../components/LazyAudio.jsx';

const DarkDrive = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#706291, #332d42" />
{children}

<Pp bg="#332d42, #731838, #2d3953, #521f23, #953c17">
<p>The night’s just as dark, the roads just as empty. I can’t see anything outside the pink glow radius of Tulip’s eyelights. There’s nuthin to do besides make sure I don’t smash into anything, carefully follow the snaking lanes tucked tightly between cement walls. Flickering shadowy forms accelerate past the periphery, mostly pylons, cable wire, and segments of choo choo track, lit briefly in the liminal light. I’m not feeling too good about all this. Would it surprise you if I said I don’t really want to think with you right now? I switched off Tulip’s speech functionality too. I would really prefer to think alone. I’m sorry if that’s disappointing.</p>
<p><div className="chapterSong"><LazyAudio src="assets/Fink And Blowhard Show Theme.mp3" loop={false} bg="#FCB07E" fg="#40688C" /></div> The uptempo theme for the Fink and Blowhard Show bursts through my speakers.</p>
<p>“Fink, before we start this chittychat, I have to admit something.”</p>
<p>“Let it out, Blowhard my good friend; I am nuthin but ears.”</p>
<p>“So yesterday evening was like any normal night. I’m eatin my bag of Monkey Mike’s Premium Kettled Corn and drinkin my favorite dizzy drink which is, as you know, an ice cold Nutsmasher Lite. This is my third Nutsmasher of the evening mind you. I’ve been choking them down like a piglet. They make me feel so bewildered, like I can think of things for the first time again, and the answers don’t matter anymore, nuthin matters. Which USUALLY means I feel free and empty like a child, but NOW they’re makin me feel like a giant pile of stinky putty…completely useless…stationary…but I still can’t stop drinkin em! And I’m miserable, Fink! Honest to God!”</p>
<p>“Have you tried doing yoga?”</p>
<p>“What?”</p>
<p>“Even just fifteen <span class="t">*</span>minutes a <span class="t">*</span>day can increase your wellness levels by 40%!”</p>
<p>“Buddy I don’t think you understand. I have no friends or family. I’m trapped in my top floor penthouse, just me and my rubber bins full of toys, watching this disgraceful rotten world fester around me. Entire sectors get quarantined for the <span class="t">*</span>weekly outbreak, y'hear this time it’s ‘gut mumps’? It’s so stinkin cloudy out, been that way for <span class="t">*</span>years. Can I be honest with you for one <span class="t">*</span>second?”</p>
<p>“Of course! Do share!”</p>
<p>“My toys don’t make me happy anymore, buddy. Nuthin does. I’m terrified and utterly alone. Nuthin will bring that warm blanket feeling back into my heart. These creeps have done too much damage. It’s no use. We can’t go back. We’re a species in decline. We’ve destroyed our own ecosystem. We’re top predator and prey. What’s the point of it all, Fink? WHAT IS THE POINT! I HATE you. You are a perfect example of manhood’s degeneration: so <em>effete</em> and <em>uninvolved</em>, only a person in the most theoretical sense. You are DISGUSTING. You make me SICK. All of you make me so fnuckin SICK!!!!”</p>
<p>“Blowhard, you know my policy. I will not tolerate name-calling. Can you try saying that more politely?”</p>
<p>“Punch me, Fink.”</p>
<p>“With the utmost respect and admiration, I vehemently refuse.”</p>
<p>“I want you to make me bleed. Do it, you little rat.”</p>
<p>“I will never punch you sir.”</p>
<p>“LOOK ME IN THE EYES RIGHT NOW!! YOU ARE A COWARD! A LOSER! A SHMUCK! A FOOL! A DULLARD! A MORON! A SICKLY BASTARD AND AN UTTER NERD! I WANT TO SHRED YOU APART WITH MY FINGERS! AAAAH HA HA HHEEH!!”</p>
<p>It’s silent besides the hum of Tulip’s engine. Difficult to keep my eyes alert. I took a longer route home that’s a little quieter. Not many people live around here.</p>
<p>I guess I just don’t know what I did wrong. I’ve done things that were stinky, but never Evil. How much net suffering have I indirectly, unknowingly generated? It makes me really doubt whether my history of reality is definitive. And what things am I still right about? That’s what I’d like to know first.</p>
<p>Fink: “…OK, OK…OK I mean…OK…”  </p>
<p>Do you think I should be worried?</p>
<p>Blowhard: “I think we can start the chittychat now.”</p>
<p>Fink: “I’m not sure if we should. I’m. I’m…”</p>
<p>I think I might need to rethink my life to a fundamental extent.</p>
<p>Blowhard: “Are you seriously crying right now?”</p>
<p>OK. Awesome. The traffic is backed up very far. Who would have thought. Why are all these people driving right now? Why aren’t they at home in their beds?</p>
<p>Blowhard: “OK come on man. Lighten up, brother. I’m sorry. Please don’t do that.”</p>
</Pp>
{children}</div>
);

export default DarkDrive;
