import React from 'react';

import Z from './../components/Z.jsx';
import Pp from './../components/Pp.jsx';

const HelpingWithSnag = ({ children, setZoip, state }) => (
<div>
{children}

<Pp>I look over Jumper56's shoulder. We're doing some dual programming. She's typing very swiftly. The whole time I've known her she's only used her left middle finger and her right index finger to press the keys. The rest are rigidly suspended in the air. Her eyes roll around in circles, overflowing with data. Onscreen, her humanoid avatar trundles around a code room. The floors and walls are made of data mound and backend code respectively, the furniture is made of frontend code, and the items are stylesheets and markup.</Pp>
<Pp>To explain: the company employs hundreds of thousands of developers that all work on the same code at the same time, and as a result of poor management and communication, our logic has little-to-no discernible structure. A lot of the code ends up in unsorted folders named like "/New Folder" or "/New Folder(1)", and the files are so deeply nested that it's borderline impossible to find anything manually.</Pp>
<Pp>As a way to solve this issue, our proprietary algorithm sorts every segment of the code in the codebase by its general purpose. Those purposes are then symbolically organized and visualized as the inside of a three-dimensional domicile. The programmer controls a lumpy, wobbly, low polygon humanoid entity to navigate the internals of Dimples. A small team of developers put together this navigation interface about five <span class="t">*</span>years ago. It hasn't gotten an update since. It is what it is.</Pp>
<Pp>"Do you think it'd be over here?" She speaks very slowly when she's concentrating. "This chair?" Her avatar examines a large stool, curling it in its burly arms.</Pp>
<Pp>"No, see, the stool is the test directory. The error said it was in the SCREEN class. Maybe see if the window has it?" I squint. She must have her brightness turned all the way up.</Pp>
<Z d={70} spe={70} u="n31" seq="a" o={0} f={setZoip} s={state.zoips} first> I'm sorry for not responding last night.</Z>
<Z d={40} spe={80} u="n31" seq="a" o={1} f={setZoip} s={state.zoips}>What's been rough lately? I'm free tonight, if you want to have dinner.</Z>
<Pp>Her avatar lopes over to the window. The skin around its legs wiggles with each step. "I don't think I see it over here."</Pp>
<Pp>"Open up when-spat-screen-upside-down.tangle, I think that's what the error was referring to. Are you familiar with the Spat Screen code?"</Pp>
<Pp>She turns back and looks at me. "I only know about Scratch Screen."</Pp>
<Pp>"So, spat-screen is a knot of tangles that determine how a device reacts when its screen has been spat on by the user."</Pp>
<Pp>"Right."</Pp>
<Pp>"And so if I remember correctly, one of the tangles specifically configures how to react when the screen has been spat upon and the device is currently upside down. It has special stuff to deal with like, gravity, and all that."</Pp>
<Pp>"So wait." She tap tap taps her chin. "Why would I get an error here? I was working in the device 'wheels' code." She picks up her celly and the keys start buzzing.</Pp>
<Pp>"I guess one of the global variables you were working with affects how both the screens and the wheels of the devices function. Why do you always use your celly to type?"</Pp>
<Pp>"My thoughtscription subscriptional ran out."</Pp>
<Pp>"Why wouldn't you resubscribe?</Pp>
<Pp>"Because I don't have the gold, OK?"</Pp>
<Pp>Code zooms around her monitor in bright primary colors. She sets down her celly and navigates the document with her trackballs. They spin really fast. She stops in front of a line of code lit up black and bold. "It just says BENDY is equal to THIN times SOFT."</Pp>
<Pp>"BENDY must be defined differently elsewhere. Somehow the two values of BENDY are ending up different. I guess it says here that the compiler was trying to set 2 equal to 7. So that's why it ended up with a Disequalized Int to Int error." Int to Int means Integer to Integer.</Pp>
<Pp>"How do I Undisequalize them?"</Pp>
<Pp>"I'm not sure. You should check where it's getting set in the wheels code too. Or you can just Multivaluate them if that seems more reasonable."</Pp>
<Pp>"How do I do that?"</Pp>
<Pp>I lift my hands from the back of her chair. "Ask someone on the discussion board. I really gotta go work on my own bug. Send me a zoip later if you're still having problems."</Pp>
{children}</div>
);

export default HelpingWithSnag;
