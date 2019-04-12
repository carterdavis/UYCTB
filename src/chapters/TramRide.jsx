import React from 'react';

import Z from './../components/Z.jsx';
import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';
import Snip from './../components/Snip.jsx';

const TramRide = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}

<Z d={1} spe={10} u="SYS" ch={num} o={0} z={state} f> Congratulations, BUNNDY22!</Z>
<Z d={1} spe={10} u="SYS" ch={num} o={1} z={state}>Your new workpod is located on FLOOR_4, POD_5_EAST</Z>
<Z d={1} spe={10} u="SYS" ch={num} o={2} z={state}>162 gold hunks deducted from your salary sack for this *month,</Z>
<Z d={1} spe={10} u="SYS" ch={num} o={3} z={state} l>to cover cost of repairs to OVERHEAD_INTERCOM_SPEAKER</Z>
<Pp>
<p>I’m leaning against a pole. Chadmuth18 is reclining sideways across three chairs. He hasn’t said a word to me since we boarded the tram. No one else is in our carriage. The overhead fluorescent is flickering. The concrete tunnel walls outside the foggy glass windows are overgrown with fuzzy brown fungus. He’s scrolling through zoips on his celly but I don’t have anything to entertain myself with. With this in mind, I sigh expressively.</p>
<p>Chadmuth18: “How’s it poppin?”</p>
<p>“Hm?”</p>
<p>“You made a performative sigh, so I asked how it’s poppin.”</p>
<p>“It’s poppin fairly OK.”</p>
<p>“That’s what I like to hear.”</p>
<p>Chugging wheels roll us through the darkness.</p>
<p>I gotta ask. “Why did your wife file for a dissolution?”</p>
<p>“Ex-wife, you mean. And I still have two others.”</p>
<p>“Oh OK. And sorry I just realized that might be a rude question. You don’t have to answer.”</p>
<p>“It’s not rude, only a little out of the blue. The fact is, I’ve always had trouble keeping wives happy. It’s not something that comes naturally to me.”</p>
<p>“What’s difficult about it? I’ve never had a wife before.”</p>
<p>“Well you know how I’m good-natured, funky, and free spirited?” He wiggles his hands around in a couple of kooky ways.</p>
<p>“Yah.”</p>
<p>“I think the reality is that I’m <em>too</em> good-natured, funky, and free-spirited. People can barely keep up with me, especially my wives. It’s like I can’t be tamed…I’m a real dynamo.”</p>
<p>“Got it.”</p>
<p>“My Gingerbell__ was everything to me. Or at least a third of everything, since I had three wives in total. But she was my favorite. She really rocked.”</p>
<p>“Why aren’t you saying her registration numbers?”</p>
<p>“I don’t want you searching her name. You seem like you could be creepy.”</p>
<p>“Gotcha. But it’s OK to publish my complete name in a press release for trillions of people to read? Do you realize how many weirdos have threatened to kill me?”</p>
<p>He sits up and stares at me, eyebrows raised. He does that for a few <span class="t">*</span>seconds. Then he speaks:</p>
<p>“Gingerbell__ understood me for who I am. At least I’m pretty sure she did. I can be hard to ‘get,’ that’s a thing I know about myself, it’s like I’m a walking contradiction or an oxymoron or whatever. But there’s no magic to it. I’m mechanical like anyone else, only ever working my hardest to feel as little pain as possible. This world ran out of mysteries a long time ago. She understood me, I understood her, and she was the first one to get bored. I’ve always had trouble making myself available, always will. Everything’s set in stone, yah? There was no other way that reality could have arranged itself. I’m not even sad about it at all, especially since I have two other wives who both wear smokin hot outfits. They think I’m really cool and handsome.”</p>
<p>“Hm…yah. Gotcha.”</p>
<p>“We’re Nowhere Else, bud. We have the highest standard of living in the entire universe. It ain’t perfect but it’s close. I get up at dawn, work my bangin job until the evening, and then party all night long. Rinse n repeat. I’ve been dancing a lot lately, been trying to move my body as much as possible. These have been my brightest <span class="t">*</span>years. Life totally cranks.”</p>
<p>“That’s awesome. Really glad things are going so well for you.”</p>
<p>Chadmuth18 smiles wide. “You wanna know what I really like?”</p>
<p>“What?”</p>
<p>“Making out with women. I like smooching on the lips. I do it all the time, and I think it’s feels amazing. I like to use my lips like a hand to grab and squeeze their lips between my lips. Really clutch them between my smackers. Ladies love my lips, apparently they feel awesome and strong. That’s what multiple women have told me. Do you kiss much, bud?”</p>
<p>“Can we talk about something else?” <Snip state={state} bg='red, yellow'>(I kiss a lot, FYI)</Snip></p>
<p>“Yah no that’s fine. Whatever.”</p>
<p>“Sorry. I feel like I swallowed a big heavy stone.”</p>
<p>“Which is why I tried to introduce some levity into the convo.”</p>
<p>“Did you mean it when you said I was a waste of a person?”</p>
<p>He rubs his eyes with his veiny thumb and forefinger. “Jesus. I dunno. Maybe that was overly harsh. But why is the onus on <em>me</em> to make <em>you</em> feel better?”</p>
<p>“I should just stop talking. I have nothing good to say.”</p>
<p>“Look bud, with the way things are going, we might not have much time left. Quit moping around. I’m serious. This paradise is temporary. Would you sulk around the Garden of Eden? Hell no! You’d be chompin apples left and right.”</p>
</Pp>
{children}</div>
);

export default TramRide;
