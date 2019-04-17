import React from 'react';

import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';
import Snip from './../components/Snip.jsx';
import Code from './../components/Code.jsx';
// import LazyImage from './../components/LazyImage.jsx';



const Crash = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#000, #DE4290" />
{children}

  <Pp bg="#DE4290, #DE4290, #E4A323"><p><em>“It’s completely broken and it seems like it’s all your fault.”</em></p>
  <p>It’s feeling hard to think.</p>
  <p>My name is Jim29, and I’m just a nice typical guy. I suppose every now and then I act kind of funky or say things I shouldn’t, but I tend to give 100% when it really counts. I write programs for Dimples, the largest medical zoftware provider in Nowhere Else. I provide a sought-after skill, so I am admittedly affluent, but I don’t let that go to my head!</p>
  <p>I speak both confidently and quietly, selecting my words with care: “Is there any way we can just kinda roll back the code? To the earlier version?”</p>
  <p>Nug20 rubs his tired eyes with his hairy fists. “Too late. Too many dependencies.”</p>
  <p>“Gotcha. Yah! Understood. What should I be doing right now?”</p>
  <p>Nug20 is my supervisor. He gives me my assignments and I report back to him on my progress. I sit in his workpod when mine feels lonely. I like knowing that he can help me if I run into a problem I can’t solve, like this one. He shifts around in his understuffed beanie bag chair and the fabric squeaks like a mouse. He’s a senior developer, been working here for like fifteen NiceTime Perfect Years, and he knows almost everything there is to know about our code. He talks pretty quiet and seems to make an effort to say as few words as possible. He’s always had a bad case of wrist edema, which means he probably lives somewhere near the eastern Big Town aquifer. I know little else about him. Snot pools in a shiny ball underneath his nose, eager to drip.</p>
  <p>“Find it in the map.”</p>
  <p>I step on a stool so I can reach above the dusty cabinets and hoist down the package directory; the cabinets are too high for average person arms to reach above without the assistance of the special stool. This giant honker of a book is bound in yellow pleather and its pages are about as wide as my chest. It’s filled with alphabetically listed locations for every single knot in our codebase, each printed in a cramped bold font. The tome’s heft makes my stringy triceps shake and burn.</p></Pp>
  <Pp c="chapterImage" bg="#E4A323, #E4A323">
<p>
<picture>
  <source media="(max-width: 720px)" srcset="assets/1-small.png" />
  <source media="(min-width: 721px)" srcset="assets/1.png" />
  <img src="assets/1.png" alt=""/>
</picture>
</p>
  </Pp>
  <Pp bg="#E4A323, #F6D05C"><p>The scoop is that some jacked up code in one of these knots snuck through the testing phase into this morning’s release and caused two crashes by lunchtime. It might be an issue with <Code>intensity-and-dosage.tangle</Code>, the top leaf on the traceback tree, or it might be an issue with a branch it relies on. But what’s especially pertinent is that I made a change a couple NiceTime Perfect Days ago in the section where the error occurred, so I’m in the hot seat here.</p>
  <p>I appreciate Nug20’s laconic persona. Most of us talk as much as possible to feel less alone but he seems to have alone pretty under control. (As a side note, I think I’m just going to relay NiceTime Perfect Units in this log as truncated <span class="t">*</span>seconds, <span class="t">*</span>minutes, <span class="t">*</span>days, etc. I’ll explain why in this little spheroid if you want to give it a click, up to you: <Snip screenWidth={state.screenWidth} bg='#DE4290'>Oh goody, you clicked it! I think I’ll use these to fill you in on stuff you might not know and embark on fanciful detours. Anyways, I know this violates NiceTime’s branding or whatever. But out of everyone, shouldn’t they particularly understand that our time together is limited? Is that OK with you? I hope that doesn’t make you uncomfortable. I can also convert it to a different chronobrand if you’d like. This whole sector uses NiceTime which, if you ask me, has really taken a toll on Big Town. Business Time feels so long and Pleasure Time feels so short. No time for relaxing. Sometimes I can tell when they’re dilating the <span class="t">*</span>minutes. Like this one, for instance. Very lengthy.</Snip>)</p>
  <p>I blink hard to wake my eyes up and sip my bubbly Strawbberry Queam. Have you ever tried Queam? I suck down a few canisters of this junk every <span class="t">*</span>day. It’s sticky and gummy and viscous, and every sip is a zippity zappity BURST of fruity flavor that rocks my world. Red ropes of corn syrup congeal against my teeth and I chisel em off with my tongue. “How have the users been?” I crack a hesitant grin. “Are they whining? Throwing tantrums?”</p>
  <p>Nug20’s loose brown striped button-down is moist with afternoon sweat. His posture is stiff and his eyebrows knit. He cleans his spectacles gingerly with his sleeve. “We’ve got conflicting reports, maybe one dead and one in a coma, maybe two flat-out dead.”</p></Pp>
  <Pp bg="#F6D05C, #E5D2C7"><p>My face feels a specific way, almost like it’s ready to slip off the side of my head. My thoughts go silent. I can’t process. I’m falling deep inside myself. My mouth fills with warm thin nauseous spit.</p>
  <p>I’m a nice guy, cross my heart and hope to die. I believe in the Lord and I go to church pretty often. I’m handsome and I’m smart and I’m nice. I like to think I’m exactly the sort of guy that anyone would be lucky to know. God though, in an instant I feel smaller than I ever have before. Skyscraper to an anthill.</p>
  <p>“Jesus Christ in heaven! Oh no oh no,” I yell. My cheeks are flushed. I look down because I don’t want to look up because then he might be looking at me. “Are you trying to make me laugh right now?” I lose my grip on the directory and it drops with a whump.</p>
  <p>“This is not an attempt at humor.”</p>
  <p>“What do you mean?? How could that happen?” I don’t know what to do with my body. I’m staying perfectly still.</p>
  <p>“One was a pacemaker crash. The other was an iron lung crash.”</p>
  <p>I slam down my canister and start stress-skimming the pages. He pounds down on his keyboard like it’s offended him personally, but that’s his normal behavior, he’s a pounder. The walls rattle a little bit. My fingers moisten the papper. <Snip screenWidth={state.screenWidth} bg='#0698C2'>PaPPER = Pulpy and Papery Polymer Extract Reconstituted</Snip> I clear my throat, mush some runny phlegm to the side.</p>
  <p>“Why didn’t a tester catch this?”</p>
  <p>“The testers have a difficult job. Don’t try to shift the blame. Your code, your fault.”</p>
  </Pp>
  <Pp bg="#E5D2C7, #0698C2">
  <p>“Sorry. That was unbecoming of me. I’m trying my best, I promise. I don’t really know how to process this.”</p>
  <p>“Focus on fixing the problem, muchacho.”</p>
  <p>“When I was a kid and someone told me super bad news like this I’d just sit in my room and scream for <span class="t">*</span>hours.”</p>
  <p>“Please don’t act like that.”</p>
  <p>I feel heavy and my mouth’s switched to feeling dry. My pits are swampy with sweat. Ever since I started working here I get these sweats that smell worse than sin. “So did I commit manslaughter or something?”</p>
  <p>“Things will be OK.”</p>
  <p>He’s getting tired of me, I can tell. My words keep leaking. “Did they have kids? That’d be so dam horrible if I killed somebody’s parents. That would make me cry, so I’m crossing my toes that that’s not the case. Ha ha.” I scan the lines with my shaking index finger. “Were they kids? Holy moly…please tell me they weren’t kids. Please please <em>please</em> tell me they weren’t kids.”</p>
  <p>“Jim29, I do not know.”</p>
  <p>“Jesus! OH MY GOD!! I’m sorry, this has gotta be some of the worst news I’ve ever gotten. I’m very sorry.”</p>
  <p>He’s just staring at his flashing screen. His eyes look spacey. He wipes his nose.</p>
  <p>I shut my eyes to block out the fluorescent light. My mind is racing. “One of them was in an iron lung? We still support those?”</p>
  <p>“That’s pretty messed up of you man. They were a customer.” He pushes his glasses up. “They were a human being.”  </p>
  <p>I flip to page 1416B and skim for the heading on VORP Requests. “Yah no, I shouldn’t have said that. You’re totally right.”</p></Pp>
{children}</div>
);

export default Crash;
