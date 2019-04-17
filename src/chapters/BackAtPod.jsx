import React from 'react';


import Drips from './../components/Drips.jsx';

import Pp from './../components/Pp.jsx';
import LazyAudio from './../components/LazyAudio.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const BackAtPod = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#79b2ff, #93d0f2" />
{children}

<Pp bg="#93d0f2, #a7a43c">
<p>The slide drops me off on the fifth floor. My brain feels tremendous, like a comet across the cloudy sky. That splash did me a world of good. Everything will be OK, it seems like. I’m safe, and that’s all that matters, yes? Right on!!</p>
<p>I walk into the bathroom and heave into the toilet a few times. Throat lurches but nuthin comes up. My horrible wheezing coughs reverberate through my abnormally hot skull. The pressure makes my eyes moist. My whole neck spasms and my nose drips snot onto a mountain of crumpled wet cruddy RearWipe Gelpads at the bottom of the bowl. I wonder how all my old friends everywhere elsewhere are feeling in their own distinct separate lives and I really miss them. Are they feeling the same as me? Do our feelings even have the same texture and tone? What percentage of them will I ever talk to again? They’ll see me in the news now, they’ll unforget me. Wish it were under different circumstances. If I’m lucky, maybe they’ll reach out and ask me how I’m doing. I’d love to hear from them again.</p>
</Pp>
<Pp bg="#a7a43c, #f6e2ee">
<p>I sit up on the toilet seat and shiver, holding my breath from the smell. I have a lot to be grateful for. I am buzzing with pure fluid gratitude. Palms pressed together, the words flow.</p>
<p>“Heavenly father, you have blessed me with such bountiful abundance. I know not how I could ever truly repay you, but I know—”</p>
<p>(There is grunting and splashing in the stall to my left. The subsequent smell stinks almost impossibly.)</p>
<p>“—in my heart, which you designed just for me, that the only payment you accept is love. Please forgive me of my sins as I strive to more closely follow the path—”</p>
<p>(There is laughter from the left stall. A gravelly voice barks “Fart so hard my buttcheeks almost rip.”)</p>
<p>“—of righteousness, and shield me from evil within the warmth of your wings. Amen.”</p>
</Pp>
<Pp bg="#f6e2ee, #eaf1c5">
<p>Outside, my workpod is situated between a wall and a load bearing column, directly below a toasty heat vent. A circular window in my pod lets some light in but it’s slightly too high up for me to comfortably peer. Mostly it creates a bunch of glare for my computerior’s screen. My pod desk is a mess and I’m pretty ashamed of it if I’m being totally honest. It’s piled up with treat wrappers, snotty balled-up tissues, empty Queam canisters, plastic bags, crumbs, soiled bandages, hunks of gold, branded pens, colorful squishy toys, print-outs of a few online articles, and a glass terrarium one of my friends sent me with a plastic succulent inside that I named Genius. I’m not a messy person, I just have a very hard and stressful job, and almost all experts agree that it’s normal to accumulate a bit of clutter.</p>
<p>My personal computering device is very sleek and flimsy, and its keys are illuminated with multisegmented efficiency glyphs. When I sit at my desk I leave it hooked up to my monitor, which has a state-of-the-art razor-thin curved Ultradef screen that wraps partly around my head. My typing stool squawks as I roll it into sitting position. One of the custodians must have forgotten to grease its axles. That’s the third time this <span class="t">*</span>week. I’ll have to submit a report. Either way, the cushion feels great when I plop my big booty on it.</p>
<p>I hook in my umbilical data plug and load up TunesJam, my music subscriptional of choice. <div class="chapterSong"><LazyAudio src="assets/Requiem For The Aether Maidens.mp3" loop={true} bg="#f6e2ee" fg="#c45c31" screenWidth={state.screenWidth} lyrics={(
  <div>
  <p><b>Bladetooth - Requiem For The Aether Maidens</b></p>
  <p>The pegasus will seize the orb</p>
  <p>As the warlock whispers his curse</p>
  <p>My golden sabre will lick their throats</p>
  <p>In the final goblin brawl</p>
  </div>
)} /></div> My Recommended Jam of the <span class="t">*</span>Day is “Requiem For The Aether Maidens” by Bladetooth. I eagerly press play. They’re my favorite legendary metal group. They mostly sing about the kind of stuff our great ancestors were up to a gazillion <span class="t">*</span>years ago. The guitars chug and wail as I imagine legions of goblins approaching on horseback.</p>
</Pp>
<Pp bg="#eaf1c5, #c45c31">
<p>My workpod must've been installed before the office was carpeted; there's a little patch where I can see through the transparent floor. Sometimes when I’m bored I’ll take a little break to gaze down at the guy who works below me. He never seems to notice me looking. Unless the aerial angle is deceptive, he’s a rather tall man. His brown hair is buzzed very short and he wears the same grey unisuit every <span class="t">*</span>day. He looks very skinny and bony and his desk is covered in treat wrappers.  I looked him up in the public employee directory a while ago. It had so much information! His name is Doby22 95Blunker. He works as the Assistant Chairman for the Managerial Executive Sub-Council on Inter- and Intradepartmental Affairs. He’s 57 <span class="t">*</span>years old. He is single and childless. He’s been working at Dimples for more than twenty <span class="t">*</span>years. He’s never been promoted. His greatest fear is megabacteria. His blood type is Z negative. He spends his whole <span class="t">*</span>day pacing in circles around the perimeter of his workpod. The walls of his pod are all covered in the same weird tan fabric. Every now and then he’ll suffer a tantrum, during which he turns bright red and shoves whatever furniture is closest to him, causing much crashing and clatter as he sucks down huge breaths, beating the side of his head with his fist, shouting “NO! STUPID! NO! NO! NO!”</p>
<p>But today seems to be a good <span class="t">*</span>day for Doby22. I don’t have much to report. He is seated in his shiny chair, speaking into his great big microphone, smiling wide. Not very interesting. Staring time is over.</p>
<p>I look back up at my pulsating screen. I unfocus my eyes, limpen my muscles, and prop my heavy brows aloft. I reimagine the scope of the world, my place in it, and how high up the sky is from the ground. I exist in a world without discrete data. Everything is meaninglessly relative if you get right down to it. My brain feels snuggled beneath a cranial quilt. I snap open a canister of Banannna Queam and it whistles out some fizz. God will understand that it’s not my fault.</p>
<p>I thinkscribe a drip and drop it.</p>
</Pp>
<Drips current={state.current} num={num} chapter="backAtPod" />
<Pp bg="#c45c31, #f5e104">
<p>Not my best drip ever, but still decent. Hopefully it’ll get a few thumbs or maybe even a flip. Ten trillion people will see it, but only twelve or so will actually read it. There’s no way to keep up with it all, so people are selective with what they read. To be brutally honest, I’m not very popular on the net. I don’t have that talent, that dazzle, that x-factor, that star power, that reach, that brand recognition. Strangers only read my writing on accident.</p>
<p>Jumper56 81Diaz is walking in my general direction, but not really looking at me. She furiously two-finger tap taps her celly screen’s virtual keys. She says “Hey mister fella!” and we tap wrists. She’s wearing her hard hat; she’s always wearing her hard hat. She is my office friend. Her workpod is across from mine, and it’s much more organized. She came here after getting fired from a developer role at Pinkslip, a company that designs custom simbots optimized to be very good and very friendly at firing people. I really enjoy talking with her. She’s able to figure out what makes every single stinking thing sparkle.</p>
</Pp>
<Pp c="chapterImage" bg="#f5e104, #f4e204">
  <p>
    <picture>
      <source media="(max-width: 720px)" srcset="assets/4-small.png" />
      <source media="(min-width: 721px)" srcset="assets/4.png" />
      <img src="assets/4.png" alt=""/>
    </picture>
  </p>
</Pp>
<Pp bg="#f5e104, #f6e2ee">
<p>She occasionally glances up, briefly making eye contact, still typing. “Would you mind if I tried to make you laugh?”</p>
<p>“Go for it.”</p>
<p>“I was imagining earlier today how it would be if I were an astronaut, and like, I landed on a great big asteroid just fine, and I’m in my asteroid space home on my very first night sleeping there, and, like, so then I realize while I’m like getting ready for bed that I left all my own dam pajamas back on this planet.”</p>
<p>“Ha ha. I’m starting to think that might be funny.”</p>
<p>Her curly dark hair is tied up in a bun beneath her hat. She has freckles. We chat a lot over zoip. I’m impressed by her amiable attitude. “You do think that’s kinda funny??”</p>
<p>“Yah. That would stink! I think that’s pretty good.”</p>
</Pp>
<Pp bg="#f6e2ee, #93d0f2">
<p>“Ha ha ha. By the way! Do you think the meeting in forty <span class="t">*</span>minutes is officially mandatory?” Sometimes she says the last few words of a sentence a little slowly for added emphasis.</p>
<p>I pick up my computerior. “Last I heard it was postponed until tomorrow.”</p>
<p>“Oh is that so?” She stretches the sleeves of her foam sweater past her knuckles. She hums thoughtfully.</p>
<p>I scratch the back of my neck. I’m not sure how much she’s heard. I don’t know what she’ll think. I select my words with nervous care. “I deployed some new code yesterday and apparently a bug popped up.”</p>
</Pp>
<Pp bg="#93d0f2, #a7a43c">
<p>She winces. I’m not sure if it’s because of what I said or maybe she read something on her celly that was bad. She’s still tapping away. Must be typing a really long message. She glances back up. “Ah, what in tarnation. Does it seem like it’ll be tricky to fix?”</p>
<p>“I’m not sure. I don’t want to talk about it anymore actually. Sorry. Have you been having a good <span class="t">*</span>day?” I exhale slowly.</p>
<p>“I would say that mine has been really good, thanks for asking.”</p>
<p>“Yah, no sweat. You know what I’ve been thinking about? How come we never got wings.”</p>
<p>“What do ya mean?”</p>
<p>“I’m just saying the world would be much safer if we had wings. We could traverse treacherous terrain as if it weren’t a big thang.”</p>
<p>“Yah, I do suppose that is true.”</p>
<p>“We’re the apex predator! We can kill anything we want. We evolved to generate critical thoughts. We have the words to describe the size of existence. We’re the only organism that launches rockets to blow stuff up. Why can’t we fly?”</p>
</Pp>
<Pp bg="#a7a43c, #c45c31, #cd9db6">
<p>She frowns politely. “We’ll just never be winged.”</p>
<p>“You think maybe God wanted to keep us on the ground?”</p>
<p>“Hm.”</p>
<p>“Down in the muck and the mire or whatever?”</p>
<p>“Yah. Seems like it.”</p>
<p>“By the way, I was thinking I’d swing by the GrubZone. Do you want me to grab you a bowl of flakes, or even something else? Doesn’t have to be flakes.”</p>
<p>“I think I’m fine without, but it’s so nice of you to offer!”</p>
<p>“Of course! I’ll see ya later.”</p>
<p>“You will do a marvelous job at fixing that bug.”</p>
<p>“Thanks, I value your faith in me.”</p>
</Pp>
{children}</div>
);

export default BackAtPod;
