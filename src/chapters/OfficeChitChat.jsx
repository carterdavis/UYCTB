import React from 'react';

import LazyLoad from 'react-lazyload';

import Drips from './../components/Drips.jsx';

import Pp from './../components/Pp.jsx';
import TDaddy from './../components/TDaddy.jsx';
import ChapterStart from './../components/ChapterStart.jsx';
import Snip from './../components/Snip.jsx';
import Code from './../components/Code.jsx';

const OfficeChitChat = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}

<Pp>“Are VORPs enabled by a knob?” I thumb through a table of knob locales.</Pp>
<Pp>Nug20 has fast fingers that blur when they’re in motion. He scuffs his mouse around on a rubbery custom-printed mousepad of his smiling family. “Yes it’s a private knob.”</Pp>
<Pp>We use the Variable On Request Protocol to securely transmit polite queries to our internal data steward, which prefers to be called “Deward.” VORPs are fairly troublesome to work with. To protect sensitive data, the protocol handles runtime errors by powering off its operating device, which seems a bit overboard to me quite frankly. I brush some snack dust out from underneath my spacebar. Sometimes it piles up under there and makes the key crunchy. The stillness is unbearable. I begin to chat. “Hey um, have you been watching much teevee lately?”</Pp>
<Pp>Nug20 lets out a long sigh. “Oh, a couple <span class="t">*</span>hours every night before rest.”</Pp>
<Pp>“What sorta stuff do you watch?”</Pp>
<Pp>“Mainly live cams of active wars transpiring across the land.”</Pp>
<Pp>“Ah, I see. How’ve those been going?”</Pp>
<Pp>“Some better than others. You ought to check Drip.”</Pp>
<Pp>“You really think the crashes got on Drip?” I turn the page, which is as long as my torso.</Pp>
<Pp>“No reason they wouldn’t.”</Pp>
<Pp>“Hm. Yes. OK. Well, I think the tangle file I’m looking for is in the precompiled local templates folder, or <Code>/bin/app/lib/custom/secure/v1/local/</Code>. I should totally be able to get to the bottom of this. Should be a quick fix!! I’m gonna go grab my computerior.” I get up from my beany bag. “I think I might stop by the GrubZone actually. Want me to grab you a snack? A gooey cornbread muffin maybe?”</Pp>
<Pp>He looks up at me. His expression is tranquil. “I have no use for a muffin.”</Pp>
<Pp>The whole east wing is in a buzz. Employees are furiously flipping through documents and highlighting certain lines and slapping em shut. Chadmuth18 23Shnozo is making an effort to get my attention. He’s the head media guy. He hollers “Jim29!” and waves with his whole body.</Pp>
<Pp>I lean against his desk. It is covered in high-gloss printouts of online articles. “How’s it going, my freaky nutjob?”</Pp>
<Pp>He reclines in his hammock with a steaming ramekin of sticky water. Chadmuth18 likes his sticky water to be particularly cohesive. It jiggles to and fro. “Why’d you call me a freaky nutjob?”</Pp>
<Pp>“Sorry. Thought it would be a fun thing to call you. My bad.”</Pp>
<Pp>“Don’t sweat it. I mean literally! Your pits stink really bad.”</Pp>
<Pp>“Oh. Ha ha. I didn’t realize everyone else can smell em too.”</Pp>
<Pp>“Have you checked Drip yet bud?”</Pp>
<Pp>“Not yet, I’m walking to go get my computering device though actually. Gotta get to work!”</Pp>
<Pp>I like Chadmuth18. He has a great energy to be around. He’s the kind of guy who gives lots of hard back pats, the kind that really thwap. His whole being is rigidly animated; his limbs don’t move, they snap. The whites of his eyes are abundant and his bleached blond hair is gelled back. He was appointed as Chief Consumer Perception Director just a few <span class="t">*</span>weeks ago after a long stint as an administrator at a corp called Brandometry. He says good morning to me in the halls and he always remembers my name. I don’t know him very well but he speaks to me with the candor of a sympathetic friend. “It’s not good dude. It’s not good at all.”</Pp>
<Pp>“Oh shoot. How bad?” I walk around behind his monitor to take a peek.</Pp>
<Pp>“It’s been dripped almost forty frickin times.” Posts from all across the nation map quickly scroll down his Ultradef screen, forming a never-ending stream. The Ultradef technology enhances the letters, making them bulbously pop out in three-dimensional space, glowing in every magnificent hue of the spectrum. “In the biz we’d say it’s making a real splash, if you’re snatchin up what I’m slammin down.”</Pp>
<Pp>One of the drips trickling down is a gallery of two livestreams. The left stream shows a man with his eyes closed, laying down, motionless, almost peaceful. The right shows a family wailing and grieving in the hospital with no sound. The post reads:</Pp>
<Drips current={state.current} num={num} chapter="officeChitChat" />
<Pp>It descends off the screen in a wink.</Pp>
<Pp>“Dang alright. This is really really bad, right? How many people do you think have seen it?”</Pp>
<Pp>“The most recent Drip update made it so everyone sees all the drips.” His voice is gravelly. “That was a big part of Drip 9.4 Focus,” which he says like it’s something I should know, duh.</Pp>
<Pp>“So you think every single living person saw it?”</Pp>
<Pp c="chapterImage">
  <LazyLoad offset={100} height={661} once>
    <img src="assets/chapter2.jpg" />
  </LazyLoad>
</Pp>
<Pp>It’s one thing to know you’ve done something insanely terrible, and a completely different thing to know that everyone else knows also. I get freaked out if I think too much about what people think of me. I want to be considered strictly fondly!</Pp>
<Pp>“Well, some people probably weren’t looking at their screens. But I’d estimate at least…half of everyone.” Chadmuth18 has thin eyebrows set high above his eyes. He raises them even higher. “It’s a pretty sexy, savory scoop.”</Pp>
<Pp>The room is distractingly cold, but that’s just how the media folks like it. I cross my arms and gaze through the glass floor. The folks a floor below us argue around shiny tables.</Pp>
<Pp>“What happens next? Are you drafting up a statement?” I swallow too much scrumptious red Queam and dribble a little down my chin. “I wanna help any way I can.”</Pp>
<Pp>“Calm down bigshot. Take a deep breath. We’re figuring it out.” He smiles and stares into my eyes. His are bloodshot. Sometimes it looks like his pupils flicker back and forth. His nose is miniature and angular. His breathing is a quiet wheeze.</Pp>
<Pp>My concentration evaporates into the ambient din of chatter, footsteps, and clacking keys. There’s a churning in my belly. “Two people who can never wake up. Two lives integrally linked with the lives of countless others. Two nodes ripped out of a sprawling networks of souls. Two coffins, y’know? Maybe they go somewhere else, or maybe it’s only cold, black, endless death. I just find it hard to imagine.”</Pp>
<Pp>“Everyone gets snuffed out at some point.” He tucks his shirt in and sits up straighter. He’s wearing a silky tight baby blue work blouse buttoned down two and a half buttons. The veins on his knuckles are sizable.</Pp>
<Pp>I re-cross my arms an alternate way. “I’m pretty sure some people just die.”</Pp>
<Pp>“Baloney. It’s always something. The flu. A cold. Heart problems, cancer, a stroke, a speedster crash, an aneurysm. Never ‘old age.’” He does the finger quotes. “The devil doesn’t drag you away for no reason.”</Pp>
<Pp>I gnaw my lower lip. “I don’t think I’m a huge fan of that idea.”</Pp>
<Pp>“Two billion people die every <span class="t">*</span>day, my pal. Isn’t it terrific that you’re one of the ones still kicking? Maybe instead of thinking about ideas you should be working on the bug that killed those suckas.” He takes a sip of his tea. “Don’t worry, I’m being playfully facetious. It’s not your fault. Or if it was, so what? At least you’re still here! Keep your chin up high. Don’t crucify yourself, nahmean? But also you do really need to fix this.”</Pp>
<Pp>“Yes, definitely. You’re really, really correct.”</Pp>
<Pp>He raises his eyebrows even higher and grins. “Good news though: this sort of thing should qualify you for another Happy Splash!”</Pp>
<Pp>“Really? I already got splashed this morning.”</Pp>
<Pp>“Word on the street is that they’ll give you a Tragedy Bonus Splash.”</Pp>
<Pp>“That’s really cool. Super amazingly awesome. Wow!”</Pp>
<Pp>I march my way from the east wing of the office to the central hub. Along the way I load up TroughDaddy, my scoop app of choice. I simply tap my favorite feeds, and it loads them straight into my celly.</Pp>
<Pp>I’m a media maniac, so I get hungry for new scoops every few <span class="t">*</span>hours or so. They’re so much fun. Each scoop is a tiny little tidbit to keep me aware, a mini snapshot of our world in motion. I also have to admit, they’ve made me much more caring and empathetic.</Pp>
<Pp>At this instant, my top scoops are:</Pp>
<TDaddy>
  <ul>
    <li>Eleven Completely Mind-Blasting Facts About Angels</li>
    <li>Perfect Nightmare Bomb Dropped On Measly Rebels. BLAM! [VID]</li>
    <li>You’ll Never Guess Which Classic Snack Is Making A Comeback…..Here’s A Hint, It Starts With The Letter “F”</li>
    <li>Here’s Why I Shouldn’t Have To Pull Over To The Side Of The Highway Just So Some Stupid Ambulance Can Pass Through</li>
    <li>Teen Pop Idol “Violent Aaron” Caught On Vid Torturing His Grandpa With Laser</li>
    <li>This Leggy Model Has Something Incredible To Say About Cloning</li>
    <li>Guns In The Sky Act Passes With Multi-Partisan Support</li>
    <li>[COMEDIC PRANK] Lockup Inmates Tricked, Told They Are Going To Be Let Out, Wait Till You See Their Epically Amazing Reaction</li>
    <li>OMG: Calf Carcass Obliterated With Tactical Explosives</li>
  </ul>
</TDaddy>
<Pp>When the BizOps team makes a major sale, the whole building is notified. The overhead intercom speakers make a loud crunchy cash register noise, like “ch-ching!” Anyways, it’s been ch-chinging a lot today. Frustratingly frequent. I shall log them henceforth.</Pp>
<Pp>My desk is all the way up the on fifth floor. I climb into the mouth of an escalator slide and lie down with my arms at my sides. The inside of the slide is dark and red and warm and it makes me feel safe. The structure pulses and gurgles. Eyes closed, I feel my back rub across the plastic and the heartbeat in my head.</Pp>
{children}</div>
);

export default OfficeChitChat;
