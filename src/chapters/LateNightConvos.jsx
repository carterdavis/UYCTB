import React from 'react';


import Z from './../components/Z.jsx';
import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const LateNightConvos = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}

<Pp>I receive a zoip from my good friend Daisy39 42Scrumpet.</Pp>
<Z d={20} spe={75} u="d39" ch={num} o={0} z={state} f l> has it been snowy where you are?</Z>
<Z d={15} spe={65} u="j29" ch={num} o={1} z={state} f> no snow at all, actually</Z>
<Z d={5} spe={70} u="j29" ch={num} o={2} z={state} l>too cold. just lots of ice. potholes too</Z>
<Z d={25} spe={60} u="d39" ch={num} o={3} z={state} f l> it’s snowed so much down here!! josie81 and I really miss you.</Z>
<Z d={10} spe={72} u="j29" ch={num} o={4} z={state} f l> how has she been ?</Z>
<Z d={15} spe={61} u="d39" ch={num} o={5} z={state} f> she’s applying to be a Praygal at Prayer Dome</Z>
<Z d={7} spe={69} u="d39" ch={num} o={6} z={state}>working on the application upstairs in bed!</Z>
<Z d={17} spe={72} u="d39" ch={num} o={7} z={state} l>how has work been?</Z>
<Z d={20} spe={65} u="j29" ch={num} o={8} z={state} f> I’m glad to hear she’s doing well!</Z>
<Z d={40} spe={80} u="j29" ch={num} o={9} z={state} l>work has been really hard. I do feel like I’m learning a lot though</Z>
<Z d={45} spe={83} u="d39" ch={num} o={10} z={state} f l> you’re really smart. I’m sure it’ll get easier!</Z>
<Z d={20} spe={70} u="j29" ch={num} o={11} z={state} f l> thanks. what are you up to tonight?</Z>
<Pp>I send a zoip to my good friend Quimby31 11Nush.</Pp>
<Z d={50} spe={68} u="j29" ch={num} o={12} z={state} f l> what’s on the menu tonight?</Z>
<Z d={30} spe={82} u="q31" ch={num} o={13} z={state} f> I actually just got done with dinner,</Z>
<Z d={10} spe={85} u="q31" ch={num} o={14} z={state} l>having some warm corn cider.</Z>
<Z d={15} spe={66} u="j29" ch={num} o={15} z={state} f> that sounds pretty nice</Z>
<Z d={8} spe={71} u="j29" ch={num} o={16} z={state} l>hope you had a really good *week</Z>
<Z d={20} spe={81} u="q31" ch={num} o={17} z={state} f> Yah mine was really validating, actually. Went on a number of dates.</Z>
<Z d={15} spe={79} u="q31" ch={num} o={18} z={state}>Saw a few movies, went to a couple bookstores.</Z>
<Z d={10} spe={85} u="q31" ch={num} o={19} z={state}>Really engaged with my community.</Z>
<Z d={13} spe={80} u="q31" ch={num} o={20} z={state} l>Things have been really good.</Z>
<Z d={20} spe={72} u="j29" ch={num} o={21} z={state} f> yah. that’s awesome, dam</Z>
<Z d={40} spe={83} u="j29" ch={num} o={22} z={state}>my *week has honestly been kind of rough these past two *days.</Z>
<Z d={50} spe={85} u="j29" ch={num} o={23} z={state}>do you have any plans tonight?</Z>
<Z d={60} spe={90} u="j29" ch={num} o={24} z={state} l>zoip me if you want to do something</Z>
{children}</div>
);

export default LateNightConvos;
