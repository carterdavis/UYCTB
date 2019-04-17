import React from 'react';

import Pulse from 'react-reveal/Pulse';

import Pp from './../components/Pp.jsx';
import TDaddy from './../components/TDaddy.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const Drained = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#2f2f2f, #9CE37D" />
{children}

<Pp bg="#9CE37D, #2f2f2f, #4C2C72">
<p>I’m dead tired so I stopped thoughtscribing for a bit but now I’m back at it again. Quimby31 are on the Zoomi rail headed back to Big Town. The Ascent Station elevator was operational, and we didn’t have to walk that much more.</p>
<p>The TroughDaddy feed is pretty tasty right now, we’ve got:</p>
</Pp>
<TDaddy>
  <ul>
    <li>The Top 5 Toys For Neo-Aristocrats</li>
    <li>SPONSORED: Auction Off Your Collagen Become Rich This Instant</li>
    <li>Killer Quake Travis Flattens Orphanage For Infant Amputees</li>
    <li>Don’t Forget! Business Time Starts One <span class="t">*</span>Hour Early Next <span class="t">*</span>Week</li>
    <li>PREMIERE: Controversial Violent Aaron Releases New Album “GrandpaLuv”</li>
    <li>Watch Cartoon Earthquake Travis Do The “Doink Doink” Dance So Funny Click Me Now Now</li>
    <li>[OPINION] Men Used To Act Like Funky Maniacs. Now They Act Like Sad Little Boys</li>
    <li>Spcl. Duke 00Bellifont Exudes Swagger In Naughty Scream Tirade: “When We Bomb Enemy Hospitals, Christ Grins So Big I Swear We’re Nearly Blinded By The Gleam Off His Fat Shiny Teeth”</li>
    <li>Denim Swim Trunks Are Back In Style…And This Time, They Make Your Snouch Look Minuscule</li>
  </ul>
</TDaddy>
<Pp bg="#4C2C72, #87B37A, #2f2f2f, #4B296B, #9CE37D, #2f2f2f, #4C2C72, #77867F">
<p>Quimby31 hasn’t been talking so I haven’t been talking either. I’m not sure if it’s A Thing. I think they might be feeling grumpy or down. They sat a few seats away from me, and their arms are crossed, and their head is slumped over. I elect to socialize.</p>
<p>“What’s up?”</p>
<p>“Mmh?”</p>
<p>“What’re you thinkin about?”</p>
<p>They shrug. Still no eye contact.</p>
<p>“Sorry everything got so weird. I think we still had a pretty good night, all things considered.”</p>
<p>“Well yeah, of course <em>you</em> had a good night. I spent like half the time comforting you.”</p>
<p>“Dam, really? I’m sorry. I wish you would’ve said something.”</p>
<p>“Don’t worry about it. I just feel drained.”</p>
<p>I like to peek out the window and drink in the metropolitan scenery. All those buildings are mushed together and so many people are crammed inside em. I think I moved to Big Town partly based on an unconscious assumption that a higher population density meant I’d have better statistical odds of finding people I can understand, who can hopefully understand me. I’m not sure how well that’s panned out.</p>
<p>I wiggle around in my seat to face Quimby31 again. “Can I tell you something?”</p>
<p>“Sure, go for it.”</p>
<p>“I lied about fixing that bug earlier. I’m ashamed of myself. I feel stupid and incapable.”</p>
<p>“Mm. Yes.”</p>
<p>“What do you mean?”</p>
<p>“What the fnuck do you want me to say, Jim29? That sucks! You keep acting like a suck ass twerp. I wanted to have an OK night and you completely ruined it. This was such a waste.”</p>
</Pp>
{children}</div>
);

export default Drained;
