import React from 'react';


import Z from './../components/Z.jsx';
import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const BelatedReplies = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}
<Pp>I'm sending Jumper56 some belated zoip replies.</Pp>
<Z d={25} spe={70} u="j29" ch={num} o={0} z={state} first> I'm sorry for not responding</Z>
<Z d={60} spe={62} u="j29" ch={num} o={1} z={state}>I just had a pretty jacked up *day to be honest</Z>
<Z d={30} spe={50} u="j29" ch={num} o={2} z={state}>and my celly was dead for most of it</Z>
<Z d={40} spe={58} u="j29" ch={num} o={3} z={state}>then I slept for *years and *years</Z>
<Z d={30} spe={75} u="j29" ch={num} o={4} z={state}>did everything end up OK ?</Z>
<Z d={40} spe={80} u="j29" ch={num} o={5} z={state}>I'm sorry for being a bad friend</Z>
<Z d={60} spe={40} u="j29" ch={num} o={6} z={state}>god I'm such an IDIOT !!</Z>
<Z d={25} spe={70} u="j29" ch={num} o={7} z={state}>I feel like I've been so gigantically terrible</Z>
<Z d={30} spe={43} u="j29" ch={num} o={8} z={state}>I promise I'm trying my best, I promise!!</Z>
<Z d={50} spe={150} u="j29" ch={num} o={9} z={state}>so</Z>
<Z d={60} spe={155} u="j29" ch={num} o={10} z={state}>that</Z>
<Z d={70} spe={150} u="j29" ch={num} o={11} z={state}>is</Z>
<Z d={80} spe={155} u="j29" ch={num} o={12} z={state}>all</Z>
<Z d={50} spe={58} u="j29" ch={num} o={13} z={state}>p.s. is your tweensies party still happening ?</Z>
<Z d={40} spe={63} u="j29" ch={num} o={14} z={state}>I'm assuming so..?</Z>
<Z d={15} spe={50} u="j29" ch={num} o={15} z={state}>OK see yah then</Z>
{children}</div>
);

export default BelatedReplies;
