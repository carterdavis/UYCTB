import React from 'react';

import LazyAudio from './../components/LazyAudio.jsx';

import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const Gala = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#c6ff6c, #fff3c9" />
{children}
<Pp bg="#fff3c9, #fed6e7">
<p>I step through a vortex door into the Secondary Ballroom. The space is lofty and expansive. It’s very crowded, like they’re having some kind of convention or gala. Men of all kinds walk around each other in opposing directions. There are no women in sight. <div class="chapterSong"><LazyAudio src="assets/Reception Music.mp3" loop={true} bg="rgb(255, 252, 169)" fg="#000" /></div> A cluster of sweaty men off in the corner are performing hyperjazz. Every single man is wearing a white robe that billows with movement. Their hair is gelled. Their cheerful faces capture a calm, dutiful focus. They say “whoops,” “sorry,” “excuse me” as they scoot past one another. No one’s even glanced in my direction.</p>
</Pp>
<Pp c="chapterImage" bg="#fed6e7, #fed6e7">
<p>
<picture>
  <source media="(max-width: 500px)" srcset="assets/15-small.png" />
  <source media="(min-width: 501px)" srcset="assets/15.png" />
  <img src="assets/15.png" alt=""/>
</picture>
</p>
</Pp>
<Pp bg="#fed6e7, #ffe500, #ed037c, #fff3c9">
<p>My brand new face still hurts really bad in every way, but it’s at least more sculpted, less smashed. From the front my face is perfectly circular, and from a sideways angle my head is honestly kind of thin compared to its perimeter. Also, the machine completely flattened my features. The only bumps are my eyes, mouth, and nose. So basically my head looks like a very large fleshy ancient coin. I’m no longer conventionally attractive, but I’m sure to attract less attention. At least my senses are intact. The process didn’t even hurt that bad. My facial bones and cartilage are pretty squishy and malleable at this point. Now that I’ve gone through two rearrangements they’re easy to mush around like creamed corn.</p>
<p>I’m not sure how to slip into the foot traffic. Men are walking between hulking round cream-colored structures with circular windows, sort of like the kind they use to show off the animals at Critter Dome. Robed men immediately start bumping into me as I step into the current: “darn,” “much apologies,” “scuse me coming through.” A long haired man on my left steps in front of me and I follow him. I use his swinging blond dual ponytails as beacons in the noise. I follow him to what appears to be labelled BATCH #272.</p>
<p>The exhibit is a bare white room filled with nude deformed humans. These unfortunate souls have arms where their legs should be. Four arms in total. They wriggle on their bellies and seem to execute many tasks at once; one arm answers the phone, another arm uses a suite of office management programs on a computerior, a lower arm assists with eating meat or chugging Queam, and the remaining arm grabs any putties that fall out of their naked rear. There is a lot of putty smeared all over the place. Some pre-recorded audio plays over the speaker system. The voice is brash and confident.</p>
<p>“BATCH #272 is an attempt to engineer a completely distributed, asynchronous clone worker. The 272s make for very peppy, efficient employees. These little freaks do everything at once, so they have no need for costly breaks! However, they do demand regular maintenance of urinary and fecal materials, as diaper rash is a top concern. Supervision is also a must, as there have been numerous cases of 272s malfunctioning and ripping their eyes out.”</p>
<p>A drooling four-armed worker with a buzzcut thrashes on the floor. The slobber dribbles down his chin and dries into his crusty goatee. His many elbows are smeared in putty. His eyes are moist and red. He must be so tired. Some of the robed men around me lightly applaud, others perform a graceful bow.</p>
<p>My stomach twists into knots. My blond ponytailed beacon is nowhere in sight. I push through the human swarm, headed toward the other end of the corridor. The chittering polite masculine cadences ring in the space behind my eyes.</p>
<p> I pass by BATCH #174 on my way out of the crowds. I can’t help but look inside. The people inside aren’t deformed, but they are nude. They all have the same short buzzed brown haircuts and skinny bony bodies. In fact they all look just like Doby22 95Blunker, that one guy who worked under my pod.</p>
<p>“BATCH #174 contains Manager 2, a brand new batch of one of our best-selling clones. Let’s be honest: this guy is scrawny and weak. This guy is not gonna live very long. This guy is very vulnerable to bacterial infection. But what makes the Manager 2 special is his complete lack of any ego or defining characteristics. The original Manager was prone to uncontrollable fits of rage, but Manager 2 us different. He is a blank slate. He exists to please. He is so, so hungry for a purpose. He is so ready to execute tasks of any kind. Let him make you proud!”</p>
<p>The Manager 2s trample around their enclosure on all fours. They’re like a feral herd of 100+ identical siblings. Their tongues droop out. They climb on each other’s heads and lick the window ravenously. Their brown eyes are wide and bulging. So much skin and muscle rubs against the window. I can’t hear them but I can tell how often they’re screaming. They scrape each other’s backs and chew each other’s ears and stomp each other’s faces into the moist human waste. This is the sickest perversion I have ever witnessed.</p>
</Pp>
{children}</div>
);

export default Gala;
