import React from 'react';

import Z from './../components/Z.jsx';
import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';
import Code from './../components/Code.jsx';

const HelpingWithSnag = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#d0d0d0, #F5FFC6" />
{children}

<Pp bg="#F5FFC6, #d0d0d0, #C1FF9B">
<p>I look over Jumper56’s shoulder. We’re doing some dual programming. She’s typing very swiftly. The whole time I’ve known her she’s only used her left middle finger and her right index finger to press the keys. The rest are rigidly suspended in the air. Her eyes roll around in circles, overflowing with data. Onscreen, her humanoid avatar trundles around a code room. The floors and walls are made of backend code, the furniture is made of frontend code, and the items are stylesheets and markup.</p>
<p>To explain: the company employs hundreds of thousands of developers that all work on the same code at the same time, and as a result of poor management and communication, our logic has little-to-no discernible structure. A lot of the code ends up in unsorted folders named like <Code>/New Folder</Code> or <Code>/New Folder(1)</Code>, and the files are so deeply nested that it’s borderline impossible to find anything manually.</p>
</Pp>
<Pp bg="#C1FF9B, #d0d0d0, #B4E1FF">
<p>As a way to solve this issue, our proprietary algorithm sorts every segment of the code in the codebase by its general purpose. Those purposes are then symbolically organized and visualized as the inside of a three-dimensional domicile. The programmer then controls a lumpy, wobbly, low polygon humanoid entity to navigate the internals of Dimples. A small team of developers put together this navigation interface about five <span class="t">*</span>years ago. It hasn’t gotten an update since. It is what it is.</p>
<p>“Do you think it’d be over here?” She speaks very slowly when she’s concentrating. “This chair?” Her avatar examines a large stool, curling it in its burly arms.</p>
<p>“No, see, the stool is the test directory. The error said it was in the <Code>SCREEN</Code> class. Maybe see if the window has it?” I squint. She must have her brightness turned all the way up.</p>
</Pp>
<Z d={70} spe={70} u="q31" seq="a" ch={num} o={0} z={state} f> I’m sorry for not responding last night.</Z>
<Z d={40} spe={80} u="q31" seq="a" ch={num} o={1} z={state} l>What’s been rough lately? I’m free tonight, if you want to have dinner.</Z>
<Pp bg="#B4E1FF, #FFACE4">
<p>Her avatar lopes over to the window. The skin around its legs wiggles with each step. “I don’t think I see it over here.”</p>
<p>“Open up <Code>when-spat-screen-upside-down.tangle</Code>, I think that’s what the error was referring to. Are you familiar with the Spat Screen code?”</p>
<p>She turns back and looks at me. “I only know about Scratch Screen.”</p>
<p>“So, <Code>spat-screen</Code> is a knot of tangles that determine how a device reacts when its screen has been spat on by the user.”</p>
<p>“Right.”</p>
<p>“And so if I remember correctly, one of the tangles specifically configures how to react when the screen has been spat upon and the device is currently upside down. It has special stuff to deal with like, gravity, in case the spit dribbles or whatever.”</p>
<p>“So wait.” She tap tap taps her chin. “Why would I get an error here? I was working in the <Code>wheels</Code> code.” She picks up her celly and the keys start buzzing.</p>
<p>“I guess one of the global variables you were working with affects how both the screens and the wheels of the devices function. Why do you always use your celly to type?”</p>
<p>“My thoughtscription subscriptional ran out.”</p>
</Pp>
<Pp bg="#FFACE4, #d0d0d0, #F5FFC6">
<p>“Why wouldn’t you resubscribe?</p>
<p>“Because I don’t have the gold, OK?”</p>
<p>Code zooms around her monitor in bright pastel colors. She sets down her celly and navigates the document with her trackballs. They spin really fast. She stops in front of a line of code lit up black and bold. “It just says <Code>BENDY</Code> is equal to <Code>THIN</Code> times <Code>SOFT</Code>.”</p>
<p>“<Code>BENDY</Code> must be defined differently elsewhere. Somehow the two values of <Code>BENDY</Code> are ending up different. I guess it says here that the compiler was trying to set 2 equal to 7. So that’s why it ended up with a Disequalized Int to Int error.” Int to Int means Integer to Integer.</p>
<p>“How do I undisequalize them?”</p>
<p>“I’m not sure. You should check where it’s getting set in the wheels code too. Or you can just multivaluate them if that seems more reasonable.”</p>
<p>“How do I do that?”</p>
<p>I lift my hands from the back of her chair. “Ask someone on the discussion board. I really gotta go work on my own bug. Send me a zoip later if you’re still having problems.”</p>
</Pp>
{children}</div>
);

export default HelpingWithSnag;
