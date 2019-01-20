import React from 'react';


import Z from './../components/Z.jsx';
import Pp from './../components/Pp.jsx';

const BelatedReplies = ({ children, setZoip, state }) => (
<div>
{children}
<Pp>I'm sending Jumper56 some belated zoip replies.</Pp>
<Z d={25} spe={70} u="j29" o={0} f={setZoip} s={state.zoips} first> I'm sorry for not responding</Z>
<Z d={60} spe={62} u="j29" o={1} f={setZoip} s={state.zoips}>I just had a pretty jacked up *day to be honest</Z>
<Z d={30} spe={50} u="j29" o={2} f={setZoip} s={state.zoips}>and my celly was dead for most of it</Z>
<Z d={40} spe={58} u="j29" o={3} f={setZoip} s={state.zoips}>then I slept for *years and *years</Z>
<Z d={30} spe={75} u="j29" o={4} f={setZoip} s={state.zoips}>did everything end up OK ?</Z>
<Z d={40} spe={80} u="j29" o={5} f={setZoip} s={state.zoips}>I'm sorry for being a bad friend</Z>
<Z d={60} spe={40} u="j29" o={6} f={setZoip} s={state.zoips}>god I'm such an IDIOT !!</Z>
<Z d={25} spe={70} u="j29" o={7} f={setZoip} s={state.zoips}>I feel like I've been so gigantically terrible</Z>
<Z d={30} spe={43} u="j29" o={8} f={setZoip} s={state.zoips}>I promise I'm trying my best, I promise!!</Z>
<Z d={50} spe={150} u="j29" o={9} f={setZoip} s={state.zoips}>so</Z>
<Z d={60} spe={155} u="j29" o={10} f={setZoip} s={state.zoips}>that</Z>
<Z d={70} spe={150} u="j29" o={11} f={setZoip} s={state.zoips}>is</Z>
<Z d={80} spe={155} u="j29" o={12} f={setZoip} s={state.zoips}>all</Z>
<Z d={50} spe={58} u="j29" o={13} f={setZoip} s={state.zoips}>p.s. is your tweensies party still happening ?</Z>
<Z d={40} spe={63} u="j29" o={14} f={setZoip} s={state.zoips}>I'm assuming so..?</Z>
<Z d={15} spe={50} u="j29" o={15} f={setZoip} s={state.zoips}>OK see yah then</Z>
{children}</div>
);

export default BelatedReplies;
