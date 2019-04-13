import React from 'react';


import Pp from './../components/Pp.jsx';
import Ad from './../components/Ad.jsx';
import TDaddy from './../components/TDaddy.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const DeservedDeath = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#d0d0d0, #d0d0d0" />
{children}

<TDaddy story>
  <div class="section">
    <div class="headline">OPINION: Victims Of The “Dimples Disaster” Likely Deserved Death</div>
    <div class="byline">By Barpholomew09 01Stone</div>
  </div>
  <div class="section">
  	<p>It seems as though people love nothing more than to whinge and grouse. To be perfectly frank, I find it tiresome. Gone are the days in which men and women minded their own business and tended to their own affairs. Nowadays they reach for the pitchforks at the slightest provocation, eager to pillory our most beloved corporations with libelous claims and unsavory slurs. Tsk, tsk. Where has civility gone?</p>
    <Ad src="assets/ads/geniuses" c="left" />
  	<p>When news broke on Busyday that two Dimples customers, Toyler58 28Bumperton and Mort62 79Shmanderson, had unexpectedly passed away as a result of a zoftware malfunction, I raised a skeptical eyebrow. I thought to myself, <em>Oh how convenient. Another insipid little sob story for the crybabies to weep about.</em> I kicked my feet up on my plush ottoman and tuned into my favorite program on the teevee. And that’s what you should do, too.</p>
  	<p>Why must we all get so lathered up about that which we cannot change? Why don’t we just sit down, “chillax,” and have a nice evening? For all we know, the two nobodies who died in this “disaster” could’ve very well been perverts or future-murderers. Are those the kinds of people you seek to defend? Give me a break. Life is short. Go outside and play catch with your son.</p>
  </div>
</TDaddy>
{children}</div>
);

// <Pp>Remembering the Victims of the Dimples Disaster</Pp>
// <Pp>by Greg98 92Stephephenson</Pp>
// <Pp>[[ The […] parts are going to be obscured by in-world ads ]]</Pp>
// <Pp>Mort62 79Shmanderson awoke from rest this past foggy Thursday morning unaware that it would be his very last. His dear wife, Charlene59, gingerly placed a plate of artificial eggs atop his whirring iron lung machine and slowly fed him heaping spoonfuls. I will never forget the way she looked at me as she spoke about him. Egg would occasionally get stuck in his throat and she’d have to carefully pat him on the head in order to dislodge the chewed chunks.</Pp>
// <Pp>[…]</Pp>
// <Pp>“I’d never expected to lose him so soon,” she confided in me tearfully in a celly conversation this Respectfulday. “I was even sewing him a new pair of lungs. They’re in the fridge, if you want to take a look at them. They’re still sticky.”</Pp>
// <Pp>[…]</Pp>
// <Pp> “Every time I look at his face I expect his eyes to move.”</Pp>
// <Pp>[…]</Pp>
// <Pp>Toyler58 28Bumperton’s passing was graceful and dignified. He fell into cardiac arrest mere <span class="t">*</span>minutes into a friendly pickup game of kronky hoop with his five athletic sons and his five kind daughters. He died doing what he loved, surrounded by the ones he loved. His own eyes rolled backwards into his own head and ropes of his fresh drool splattered against the kronky ball.</Pp>
// <Pp>[…]</Pp>
// <Pp>His eldest son wiped his red eyes. “I shouldn’t have hugged him so hard. I bet that’s what gave him the arrhythmia in the first place.”</Pp>
// <Pp>[…]</Pp>
// <Pp>“Is daddy in Hell now?”</Pp>
// <Pp>[…]</Pp>
// <Pp>The families ask that you not harass them on social media programs. Mr. 79Shmanderson has been lovingly taxidermied and made into a piece of high-end furniture. Mr. 28Bumperton has been cautiously burned and used to grill a savory meal. The 79Shmanderson family is currently running a LetsPayThem campaign, raising gold to open a factory that crafts miniature pewter statues of their patriarch. It ends in two <span class="t">*</span>months.</Pp>

export default DeservedDeath;
