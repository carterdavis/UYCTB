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

  return (
    <div class="screen" style={{ opacity: opacity, zIndex: zIndex, overflowY: overflow }}>
      {
        screenValue == 1 &&
          <div>
            <CLI delay={10}><Hue c='#f9d161'>$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$</Hue></CLI>
            <CLI delay={11}>WELCOME to <Hue c='#e89797'>Dimples</Hue> <Hue c='#9fc5e8'>Shell</Hue> <Hue c='#f1c232'>Z20 Extreme</Hue>. This state-of-the-art <Hue c='#6ea8dc'>health</Hue> and <Hue c='#b6d6a4'>well-being</Hue>  management console is perfectly developed to make home medical care as easy as a <Hue c='#c27ba0'>piece of a cake</Hue>. Do you feel so much tingling in your fingertips? That is quite simply the feeling of… <Hue c='#f4a960'>POWER</Hue> !</CLI>
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
          </div>
      }
    </div>
  );
};

export default Screen;
