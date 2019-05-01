import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const IcyExpanse = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#251450, #170a3a" />
{children}

<Pp bg="#170a3a, #170a3a">
<p>I’ve been walking for <span class="t">*</span>hours. My body wasn’t built for doing such things. My feet are killing me. It’s dark and slippery and windy. I’m using my celly’s screen as a makeshift lantern, lighting the way forward. It might die soon. Feels like I’ve been using it for a dam while. I don’t get celly service out here so the NiceTime stopped updating. It’s impossible to know how long it’s been.</p>
<p>It’s impossible to know anything at all! Am I even going anywhere? How can I be sure I even left? Can I be sure it’ll stop being dark? Is there anything more I could have done? Why do I keep making myself more alone? What am I to myself without others for comparison? Modern life is bathing alone in the lather of everyone else’s accomplishments. What have I ever done in isolation? I’m starving for contact or engagement. Have I ever once, in my entire life, been anything but an extremely boring fraud with an above-average vocabulary? As I crumple up and die five hundred <span class="t">*</span>years from now, will I be disappointed in myself?</p>
<p>How do I know I exist? How do I know you exist? How are you reading this? Are you hearing this instead? I know this is one-way archived communication, but what do you think of me? I’m sure I’ll never know. I bet you’re weighing the nuances of my perspective and evaluating my thoughts in totally good faith. I’m a nice guy, aren’t I? Ha ha. For all you know, I could be making all this up!! I’m not though, I promise. I’ve been doing my best to be very honest and vulnerable. I can only say what I believe. It’s comforting to lean on a consistent logical architecture for support against the crashing waves of indecision and doubt. I think I’m closed-minded. My mind doesn’t have space for anything right now, it’s full of worries and ephemeral trash entertainment. Feels like hubris to say I know how anything really truly is or isn’t or whatever. Sorry. This is dumb.</p>
<p>What I do know is that I’m walking on the ice. I’ve got expensive boots so it’s not very slippery. The planet’s breath buffets my face. I have to stare down at the ground to anticipate my optimal foot placement points. My celly’s brightness is down so I have just barely enough light to make out the cracks and dips in the floe. Some puddles have accumulated on the surface but I’m pretty sure it’s normal for frozen ice to have puddles. Puddles aren’t anything to worry about.</p>
<p>Deep within the innermost nut of my mind I can hear shimmering voices, see blurry faces, feel the warm color from before. I was sort of lying when I said that it’s not very slippery. It’s definitely really slippery, and I’m trying hard not to fall over. I channel positive and nice thoughts in order to smile. There’s love left in me. My legs are wobbly and my feet ache. I stop walking.</p>
</Pp>
<Pp bg="#170a3a, #FFF, #170a3a, #FFF, #170a3a, #FFF, #170a3a">
<p>This part of the night sky isn’t cloudy. Instead you can see bright little dots between the dark. Look at that! They’re glowing twinkly white. I know they’re stars, I’ve heard about them before. The literary synopses I had to skim at Knowledge Dome mentioned them a lot. They look exactly how I expected they would. I can’t say I’m all that impressed.</p>
</Pp>
{children}</div>
);

export default IcyExpanse;
