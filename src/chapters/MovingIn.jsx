import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';
import Snip from './../components/Snip.jsx';

const MovingIn = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#60afa4, #f0d88e" />
{children}

<Pp bg="#f0d88e, #e1a4bd">
<p>Dimples offered me 120 ingots of gold for a starting salary. I argued them up to 150 ingots on account of the cost of living in a metropolitan area. I probably could’ve asked for 5 or 10 ingots on top of that but I was nervous I’d seem like a greedy goblin prince. Their benefits package included body insurance covering punctures and smacks, <Snip state={state} bg='#3a3a3a'>A smack is defined as a “doink” or a “bonk.”</Snip> armed and unarmed robbery insurance, kidnapping insurance, poisoning insurance, <Snip state={state} bg='#e1a4bd'>There is a distinction between “poison” and “venom.”</Snip> and complimentary access to an underground swimming pool, which would be nice if I knew how to swim.</p>
<p>I splurged for a one bedroom cubby on the 212th floor of a skyrise called ThrivePlex, billed as a “Top Notch Home-Esque Experience For The Discerningly Affluent Lad Or Lass” and located a convenient 10 twentyleaps from the Dimples Big Town headquarters. The room came with some unusual amenities, such as lights that make the tap water glow violet, a bathroom fog machine, and numerous very wide and slightly smudged mirrors. Try as I might, I have yet to dispel the building’s peculiar unignorable stench, which reminds me of hydrogen peroxide but a tad sweeter.</p>
</Pp>
<Pp bg="#e1a4bd, #3a3a3a">
<p>The view from the living room is mostly just the cloudy sky, other reflectively bone white skyscrapers, and a cluster of choo choo rails that operate on alternating schedules. ThrivePlex is smack dab in the middle of the southern Big Town transit district, and a total of five separate paths of private railway run past my window at different angles. Every fifteen <span class="t">*</span>minutes they rumble the walls as they zip by. The red rail is owned by Kwikkie Ride, the blue rail is owned by Zoomi, the yellow rail is owned by CheapFast Chugga, and the green rail is owned by Cabooster. You’d be shocked how fast those shiny choo choos can move, ha. I can’t see the passengers through the tinted windows but I’m sure they can see me, standing in my big t-shirt and smiley face boxers. They leave behind acrid clouds of smoke.</p>
<p>The <span class="t">*</span>day I moved in I found a pink and blue packet on the counter. I leaned my jellybed against the wall and unsealed the packet with my forefinger.</p>
<p>Inside was a letter that read:</p>
</Pp>
<Pp bg="#3a3a3a, #fbebdc">
<p><em>Dear Mr. 03Goldman,</em></p>
<p><em>We here at Dimples could not be any more excited for you to join us. Boo-yah! The mere idea of it makes our mouths water. We have looked over your qualifications and determined that you will be an amazing fit among our very generous staff. We are the most profitable medical technology company in this solar system. Doesn’t that just blow your mind to shreds? Our zoftware is in MRI machines, hearing aids, and even those handheld lights doctors use to look in your ears. We’re everywhere!!</em></p>
<p><em>Long story short, if it can be used to heal you or take you apart and put you back together, you can bet it’s powered by our cutting-edge zoftware. Are you excited to work every <span class="t">*</span>day on our team of real life superheroes? Our innovations make absolutely everyone healthier. As we say, at the end of every smile, there’s Dimples.</em></p>
<p><em>We ask that you arrive by 8:00bt on Honestday so we can fill out papperwork and set up your workpod. Our facilities are conveniently accessible by speedster. Please avoid wearing any jewelry or rings, as we utilize powerful magnets in our research.</em></p>
<p><em>You’re going to do so, so, so, so well!</em></p>
<p><em>Augustinius00 01Stone</em></p>
<p><em>Co-founder and CEO of Dimples</em></p>
</Pp>
{children}</div>
);

export default MovingIn;
