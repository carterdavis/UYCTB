import React from 'react';
import { setScreen } from './../state.js';
import Typing from 'react-typing-animation';

import Hue from './Hue.jsx';
import Snip from './Snip.jsx';
import CLI from './CLI.jsx';
import Command from './Command.jsx';
import ViewScreen from './ViewScreen.jsx';

const Screen = ({ screenValue, state }) => {
  const opacity = screenValue != 0 ? '1' : '0';
  const zIndex = screenValue != 0 ? '8' : '-1';
  const overflow = screenValue != 0 ? 'auto' : 'hidden';

  const dimples = (
    <span><span style={{color:'#ea9897'}}>D</span><span style={{color:'#9fc5e8'}}>i</span><span style={{color:'#ea9897'}}>m</span><span style={{color:'#9fc5e8'}}>p</span><span style={{color:'#ea9897'}}>l</span><span style={{color:'#9fc5e8'}}>e</span><span style={{color:'#ea9897'}}>s</span></span>
  );

  const shell = (
    <span><span style={{color:'#9fc5e8'}}>S</span><span style={{color:'#ea9897'}}>h</span><span style={{color:'#9fc5e8'}}>e</span><span style={{color:'#ea9897'}}>l</span><span style={{color:'#9fc5e8'}}>l</span></span>
  );

  return (
    <div class="screen" style={{ opacity: opacity, zIndex: zIndex, overflowY: overflow }}>
      <button class="x screen-x" onClick={(e) => {setScreen(0)}}>x</button>
      {
        screenValue == 1 &&
          <div>
            <CLI delay={10}><Hue c='#f9d161'>$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$</Hue></CLI>
            <CLI delay={11}>WELCOME to {dimples} {shell} <Hue c='#f1c232'>Z20 Extreme</Hue>. This state-of-the-art <Hue c='#6ea8dc'>health</Hue> and <Hue c='#b6d6a4'>well-being</Hue>  management console is perfectly developed to make home medical care as easy as a <Hue c='#c27ba0'>piece of a cake</Hue>. Do you feel so much tingling in your fingertips? That is quite simply the feeling of... <Hue c='#f4a960'>POWER</Hue> ! <Snip state={state} bg='#FFF'>This might look like just a bunch of hogwash to you, and it’s OK if it does. The console is like a conversation portal ON the computering device WITH the device, spoken in its special computational tongue. Server data is translated into words by our data steward, Deward, using a proprietary Dimples module called Ear2Ear. I don’t think Deward likes me, and that’s fine, because I detest Deward. It tries to personally tailor its text to suit how it thinks I think, but it has this strange abrasive personality, and it speaks in halting unpleasant phrases, and I have no clue why it colors words the way it does. Most of all I hate it when Deward tries to bust out some slang.</Snip></CLI>
            <CLI delay={12}><Hue c='#f9d161'>$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$</Hue></CLI>
            <br />
            <CLI delay={14}>&gt;&gt; <Typing speed={75} startDelay={700} class="type"><span style={{ color: '#f4b16a' }}>PLEASE</span> tell me [which] files in <span style={{ color: '#75a5af' }}>HERE</span></Typing></CLI>
            <CLI delay={60}><Hue c='#75a5af'>HERE</Hue> are many files. <Hue c='#f0c153'>TELLING YOU</Hue>... <Snip state={state} bg='#FFF'>Some stock commands require certain “courtesy keywords” — these were introduced by Dimples as a way to try to reduce hardware abuse rates at the company. Apparently it's common for some of the taller, beefier Dimplers to respond to a failing test or confusing error by crushing their computeriors’ screens between their biceps or furiously body-slamming them into the floor. *Years have passed and hardware abuse rates haven’t dipped at all, but now if we were to remove the keywords it’d break a million or so different scripts we have running in the server barn, so, here I am, still having to tell Deward PLEASE and THANKS.</Snip></CLI>
            <CLI delay={62}>/aaaaa /bin /custom /default /default(2) /donotopen /sample /scripts /temp /tmp frogcopter.play how_to_play_frogcopter.text</CLI>
            <CLI delay={64}>&gt;&gt; <Typing speed={75} startDelay={900} class="type"><span style={{ color: '#b3d6a8' }}>CLIMB INTO</span> /default, <span style={{ color: '#a3c2f3' }}>THANKS</span></Typing></CLI>
            <CLI delay={100}><Hue c='#75a5af'>HERE</Hue> are many files. <Hue c='#f0c153'>TELLING YOU</Hue>...</CLI>
            <CLI delay={102}>/app state.dump</CLI>
            <CLI delay={104}>&gt;&gt; <Typing speed={75} startDelay={800} class="type"><span style={{ color: '#ea9999' }}>EXAMINE</span> state.dump</Typing></CLI>
            <CLI delay={140}>[STATE: [ID: [NAME: [FIRST_NAME <Hue c='#fe0000'>INVALID</Hue>: UNDEF], [LAST_NAME <Hue c='#fe0000'>INVALID</Hue>: UNDEF] ], [REG_NUM <Hue c='#fe0000'>INVALID</Hue>: UNREGISTERED], [AGE: 60], [EYE_COLOR: NICKEL], [HAIR_COLOR: BRONZE], [SKIN_COLOR: PEACH], [POOR: YES], [THUMB_COUNT: BOTH], [HAIR_LENGTH: FAIRLY_LONG] ], [METRICS: [BLOOD: [ENOUGH: INDEED], [POISONED: [BADLY: YES], [VENOM: YES], [HARDLY: NO] ], [TYPE: O_NEGATIVE], [SICKLE_CELL: NOPE] ] [LEGS: [BUSTED: NO], [LONG: YES] ] [ARMS: [BUSTED: NO], [STRONG: NOT_QUITE] ] ], [PHARMA: [ABRASIUM: [DOSAGE: HIGH], [COST: 25%] ], [CLARIVEX: [DOSAGE: VERY_HIGH], [COST: 30%] ], [VENONUM: [DOSAGE: THRU_THE_ROOF], [COST: 45%] ], [CURVE_QUOTIENT: <Hue c='#8e7cc3'>0%0%0</Hue>] ] [ERROR_LOG: [E222: IMPOSSIBLE_DIGITS] <Snip state={state} bg='red, yellow'>This is where Dimples Z20 plops all of the incoming data from the equality network. This data composes an incomplete, temporary snapshot of the application’s present status. It’s a structure with depth, describing nested info delimited by ugly brackets. Looks like CURVE_QUOTIENT contains impossible digits, so its current value is inaccessible. Introducing those kinds of digits into the datascape could lead to hardware malfunction, so the system returns a nasty error instead. I don't know much about impossible digits. Some scientists blame their proliferation on the collision of higher-dimensional hyperstatic cuboids, whereas others argue that they’re just a curious side-effect of thermomagnetic bloating. Either way, I can overwrite it. The bad news is that this is certainly an instance of my bug, and I really don’t want to think about the full extent of what that means.</Snip></CLI>
            <CLI delay={142}>&gt;&gt;</CLI>
            <CLI delay={144}><ViewScreen num={0} /></CLI>
          </div>
      }
      {
        screenValue == 2 &&
          <div>
            <CLI delay={0}>&gt;&gt; <Typing speed={75} startDelay={1000} class="type"><span style={{ color: '#d3a5bd' }}>SET</span> [STATE.PHARMA.CURVE_QUOTIENT] ===== 1</Typing></CLI>
            <CLI delay={50}>I do not <Hue c='#76a4ab'>UNDERSTAND.</Hue></CLI>
            <CLI delay={52}>&gt;&gt; <Typing speed={75} startDelay={500} class="type"><span style={{ color: '#d3a5bd' }}>SET</span> [STATE.PHARMA.CURVE_QUOTIENT] ===== 1 <span style={{ color: '#f4b16a' }}>PLEASE</span></Typing></CLI>
            <CLI delay={100}>Are you <Hue c='#f6e198'>SURE</Hue> you wish to re_equalize <Hue c='#a2c2f4'>THIS</Hue> value to 1?</CLI>
            <CLI delay={102}>&gt;&gt; <Typing speed={75} startDelay={400} class="type"><span style={{ color: '#ea9999' }}>OK</span></Typing></CLI>
            <CLI delay={120}>Value successfully UPDATED! You have the <Hue c='#b4a7d6'>BRAGGING_RIGHTS</Hue>, dude.</CLI>
            <CLI delay={122}>&gt;&gt; <Typing speed={75} startDelay={500} class="type">restart {dimples}</Typing></CLI>
            <CLI delay={145}><Hue c='#a64c77'>GOOD_NIGHT</Hue><Typing speed={50} class="type">......</Typing></CLI>
            <CLI delay={155}><Typing speed={50} class="type">....</Typing></CLI>
            <CLI delay={162}><Typing speed={50} class="type">..</Typing></CLI>
            <CLI delay={166}><Typing speed={50} class="type">.....</Typing></CLI>
            <CLI delay={169}>.</CLI>
            <CLI delay={171}><Hue c='#edf700'>GOOD_MORNING</Hue>.</CLI>
            <CLI delay={173}>&gt;&gt; <Typing speed={75} startDelay={500} class="type"><span style={{ color: '#FF0000' }}>GOOD_BYE</span></Typing></CLI>
            <CLI delay={190}>&gt;&gt;</CLI>
            <CLI delay={192}><ViewScreen num={0} /></CLI>
          </div>
      }
      {
        screenValue == 3 &&
          <div>
            <Command><Hue c='#c17ba0'>DUMPHREY52</Hue> tell me how was your *day has been?</Command>
            <Command>You are my <Hue c='#b6d7a7'>BUDDY</Hue>!</Command>
            <Command>&gt;&gt; <Typing speed={75} startDelay={1400} class="type"><span style={{ color: '#f4b16a' }}>PLEASE</span> tell me [which] files in <span style={{ color: '#75a5af' }}>HERE</span></Typing></Command>
            <CLI delay={47}><Hue c='#75a5af'>HERE</Hue> are many files. <Hue c='#f0c153'>TELLING YOU</Hue>...</CLI>
            <CLI delay={49}>/gumpy /pumb /ridiculus db.zb</CLI>
            <CLI delay={54}>How has was your *day <Hue c='#d57d6b'>DUDE</Hue>!</CLI>
            <CLI delay={56}>&gt;&gt; <Typing speed={75} startDelay={800} class="type">It’s been <span style={{ color: '#4783e6' }}>FINE</span>.</Typing></CLI>
            <CLI delay={80}><Hue c='#c17ba0'>OK</Hue>...</CLI>
            <CLI delay={82}>&gt;&gt; <Typing speed={75} startDelay={500} class="type"><span style={{ color: '#f4b16a' }}>PLEASE</span> give me [MAPPING_DATA] from <span style={{ color: '#75a5af' }}>LIB</span></Typing></CLI>
            <CLI delay={120}>I am <Hue c='#e8f100'>GLAD</Hue> you've you've doing <Hue c='#e6b7a8'>WELL</Hue>.</CLI>
            <CLI delay={123}>What is yours <Hue c='#c4dae1'>FAVORITE_SONG</Hue> to <Hue c='#e99999'>SING</Hue>?</CLI>
            <CLI delay={125}>&gt;&gt; <Typing speed={75} startDelay={500} class="type">Um i don't know</Typing></CLI>
            <CLI delay={160}>You are not my <Hue c='#b6d7a7'>BUDDY</Hue>! You are the <Hue c='#ff0000'>IMPOSTER</Hue>!</CLI>
            <CLI delay={164}><Hue c='#b6d7a7'>BUDDY</Hue>'s <Hue c='#c4dae1'>FAVORITE_SONG</Hue>:</CLI>
            <CLI delay={167}>The Nephew Brothers - Barbecue Sauce Anthem</CLI>
            <CLI delay={169}>&gt;&gt; <Typing speed={75} startDelay={1100} class="type">oh I love The Nephew Brothers!</Typing></CLI>
            <CLI delay={210}><Hue c='#ff0000'>IMPOSTER</Hue>!</CLI>
            <CLI delay={212}>&gt;&gt; <Typing speed={75} startDelay={1000} class="type">Come on Deward</Typing></CLI>
            <CLI delay={250}>You are <Hue c='#ff0000'>IMPOSTER</Hue>!</CLI>
            <CLI delay={252}>&gt;&gt; <Typing speed={75} startDelay={500} class="type">I'm <span style={{ color: '#c17ba0' }}>DUMPHREY52</span>'s friend</Typing></CLI>
            <CLI delay={290}><Hue c='#dc9705'>FEH</Hue>! Begone with ye at this once!</CLI>
            <CLI delay={292}>&gt;&gt; <Typing speed={75} startDelay={600} class="type"><span style={{ color: '#f4b16a' }}>PLEASE</span> give me [MAPPING_DATA] from <span style={{ color: '#75a5af' }}>LIB</span></Typing></CLI>
            <CLI delay={350}><Hue c='#dba693'>VERY WELL</Hue>.</CLI>
            <CLI delay={352}><Hue c='#94ffc2'>DOWNLOADING</Hue>...</CLI>
            <CLI delay={354}><ViewScreen num={0} /></CLI>
          </div>
      }
    </div>
  );
};

export default Screen;
