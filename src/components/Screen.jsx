import React from 'react';
import { setScreen } from './../state.js';
import Typing from 'react-typing-animation';

import Hue from './Hue.jsx';
import CLI from './CLI.jsx';
import Pp from './Pp.jsx';
import ViewScreen from './ViewScreen.jsx';

const Screen = ({ screenValue }) => {
  const opacity = screenValue != 0 ? '1' : '0';
  const zIndex = screenValue != 0 ? '2' : '-1';
  const overflow = screenValue != 0 ? 'auto' : 'hidden';

  const dimples = (
    <span><span style={{color:'#ea9897'}}>D</span><span style={{color:'#9fc5e8'}}>i</span><span style={{color:'#ea9897'}}>m</span><span style={{color:'#9fc5e8'}}>p</span><span style={{color:'#ea9897'}}>l</span><span style={{color:'#9fc5e8'}}>e</span><span style={{color:'#ea9897'}}>s</span></span>
  );

  const shell = (
    <span><span style={{color:'#9fc5e8'}}>S</span><span style={{color:'#ea9897'}}>h</span><span style={{color:'#9fc5e8'}}>e</span><span style={{color:'#ea9897'}}>l</span><span style={{color:'#9fc5e8'}}>l</span></span>
  );

  return (
    <div class="screen" style={{ opacity: opacity, zIndex: zIndex, overflowY: overflow }}>
      {
        screenValue == 1 &&
          <div>
            <CLI delay={10}><Hue c='#f9d161'>$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$</Hue></CLI>
            <CLI delay={11}>WELCOME to {dimples} {shell} <Hue c='#f1c232'>Z20 Extreme</Hue>. This state-of-the-art <Hue c='#6ea8dc'>health</Hue> and <Hue c='#b6d6a4'>well-being</Hue>  management console is perfectly developed to make home medical care as easy as a <Hue c='#c27ba0'>piece of a cake</Hue>. Do you feel so much tingling in your fingertips? That is quite simply the feeling of... <Hue c='#f4a960'>POWER</Hue> !</CLI>
            <CLI delay={12}><Hue c='#f9d161'>$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$</Hue></CLI>
            <br />
            <CLI delay={14}>&gt;&gt; <Typing speed={75} startDelay={700} class="type"><span style={{ color: '#f4b16a' }}>PLEASE</span> tell me [which] files in <span style={{ color: '#75a5af' }}>HERE</span></Typing></CLI>
            <CLI delay={60}><Hue c='#75a5af'>HERE</Hue> are many files. <Hue c='#f0c153'>TELLING YOU</Hue>...</CLI>
            <CLI delay={62}>/aaaaa /bin /custom /default /default(2) /donotopen /sample /scripts /temp /tmp frogcopter.play how_to_play_frogcopter.text</CLI>
            <CLI delay={64}>&gt;&gt; <Typing speed={75} startDelay={900} class="type"><span style={{ color: '#b3d6a8' }}>CLIMB INTO</span> /default, <span style={{ color: '#a3c2f3' }}>THANKS</span></Typing></CLI>
            <CLI delay={100}><Hue c='#75a5af'>HERE</Hue> are many files. <Hue c='#f0c153'>TELLING YOU</Hue>...</CLI>
            <CLI delay={102}>/app state.dump</CLI>
            <CLI delay={104}>&gt;&gt; <Typing speed={75} startDelay={800} class="type"><span style={{ color: '#ea9999' }}>EXAMINE</span> state.dump</Typing></CLI>
            <CLI delay={140}>[STATE: [ID: [NAME: [FIRST_NAME INVALID: UNDEF], [LAST_NAME <Hue c='#fe0000'>INVALID</Hue>: UNDEF] ], [REG_NUM <Hue c='#fe0000'>INVALID</Hue>: UNREGISTERED], [AGE: 60], [EYE_COLOR: NICKEL], [HAIR_COLOR: BRONZE], [SKIN_COLOR: PEACH], [POOR: YES], [THUMB_COUNT: BOTH], [HAIR_LENGTH: FAIRLY_LONG] ], [METRICS: [BLOOD: [ENOUGH: INDEED], [POISONED: [BADLY: YES], [VENOM: YES], [HARDLY: NO] ], [TYPE: O_NEGATIVE], [SICKLE_CELL: NOPE] ] [LEGS: [BUSTED: NO], [LONG: YES] ] [ARMS: [BUSTED: NO], [STRONG: NOT_QUITE] ] ], [PHARMA: [ABRASIUM: [DOSAGE: HIGH], [COST: 25%] ], [CLARIVEX: [DOSAGE: VERY_HIGH], [COST: 30%] ], [VENONUM: [DOSAGE: THRU_THE_ROOF], [COST: 45%] ], [CURVE_QUOTIENT: <Hue c='#8e7cc3'>0%0%0</Hue>] ] [ERROR_LOG: [E222: IMPOSSIBLE_DIGITS]</CLI>
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
            <Pp c="command"><Hue c='#c17ba0'>WYSHWALD52</Hue> tell me how was your *day has been?</Pp>
            <Pp c="command">You are my <Hue c='#b6d7a7'>BUDDY</Hue>!</Pp>
            <Pp c="command">&gt;&gt; <Typing speed={75} startDelay={1400} class="type"><span style={{ color: '#f4b16a' }}>PLEASE</span> tell me [which] files in <span style={{ color: '#75a5af' }}>HERE</span></Typing></Pp>
            <CLI delay={47}><Hue c='#75a5af'>HERE</Hue> are many files. <Hue c='#f0c153'>TELLING YOU</Hue>...</CLI>
            <CLI delay={49}>/gumpy /pumb /ridiculus db.zb</CLI>
            <CLI delay={54}>How has was your *day <Hue c='#d57d6b'>DUDE</Hue>!</CLI>
            <CLI delay={56}>&gt;&gt; <Typing speed={75} startDelay={800} class="type">It's been <span style={{ color: '#4783e6' }}>FINE</span>.</Typing></CLI>
            <CLI delay={80}><Hue c='#c17ba0'>OK</Hue>...</CLI>
            <CLI delay={82}>&gt;&gt; <Typing speed={75} startDelay={500} class="type"><span style={{ color: '#f4b16a' }}>PLEASE</span> give me [MAPPING_DATA] from <span style={{ color: '#75a5af' }}>LIB</span></Typing></CLI>
            <CLI delay={120}>I am <Hue c='#e8f100'>GLAD</Hue> you've you've doing <Hue c='#e6b7a8'>WELL</Hue>.</CLI>
            <CLI delay={123}>What is yours is <Hue c='#c4dae1'>FAVORITE_SONG</Hue> to <Hue c='#e99999'>SING</Hue>?</CLI>
            <CLI delay={125}>&gt;&gt; <Typing speed={75} startDelay={500} class="type">Um i don't know</Typing></CLI>
            <CLI delay={160}>You are not my <Hue c='#b6d7a7'>BUDDY</Hue>! You are an the <Hue c='#ff0000'>IMPOSTER</Hue>!</CLI>
            <CLI delay={164}><Hue c='#b6d7a7'>BUDDY</Hue>'s <Hue c='#c4dae1'>FAVORITE_SONG</Hue>:</CLI>
            <CLI delay={167}>The Nephew Brothers - Barbecue Sauce Anthem</CLI>
            <CLI delay={169}>&gt;&gt; <Typing speed={75} startDelay={1100} class="type">oh I love The Nephew Brothers!</Typing></CLI>
            <CLI delay={210}><Hue c='#ff0000'>IMPOSTER</Hue>!</CLI>
            <CLI delay={212}>&gt;&gt; <Typing speed={75} startDelay={1000} class="type">Come on Deward</Typing></CLI>
            <CLI delay={250}>You are <Hue c='#ff0000'>IMPOSTER</Hue>!</CLI>
            <CLI delay={252}>&gt;&gt; <Typing speed={75} startDelay={500} class="type">I'm <span style={{ color: '#c17ba0' }}>WYSHWALD52</span>'s friend</Typing></CLI>
            <CLI delay={290}><Hue c='#dc9705'>FEH</Hue>! Begone with ye at this once!</CLI>
            <CLI delay={292}>&gt;&gt; <Typing speed={75} startDelay={600} class="type"><span style={{ color: '#f4b16a' }}>PLEASE</span> give me [MAPPING_DATA] from <span style={{ color: '#75a5af' }}>LIB</span></Typing></CLI>
            <CLI delay={350}><Hue c='#dba693'>VERY WELL</Hue>.</CLI>
            <CLI delay={352}>&gt;&gt; [[ TO DO: put graphical map here ]]</CLI>
            <CLI delay={354}><ViewScreen num={0} /></CLI>
          </div>
      }
    </div>
  );
};

export default Screen;
