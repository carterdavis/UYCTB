import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Typing from 'react-typing-animation';

import Pp from './Pp.jsx';
import {setZoip} from './../state.js';

const NextZ = (props) => {
  const user = props.u || 'j29';
  const order = props.o || 0;
  const zoips = props.z ? props.z.zoips : {};
  const sequence = props.seq || "a";
  const chapter = props.ch || 0;
  const id = `ch${chapter}_${sequence}`;
  const delay = props.d || 0;
  const speed = props.spe || 50;
  const users = {
    j29: '#5e8d41',
    j56: '#99005d',
    k51: '#2968a1',
    d39: '#5c1989',
    q31: '#0800b6',
    n20: '#ba6c1a',
    SYS: '#737373'
  }

  const bg = user ? `repeating-linear-gradient(0deg, #ffffff, ${users[user]} 6px)` : 'none';
  const displaying = zoips && (zoips[id] >= order);

  const noCheckBg = props.no ? '#FFF, #FFF' : bg;
  const noCheckText = props.no ? 'NO' : user;

  return (
    <div class={`zoip ${user}`} style={ displaying ? {} : { height: 0 }}>
      <Pp bg={ displaying ? noCheckBg : '#FFF'} innerClass={`${props.f ? 'padTop' : ''} ${props.l ? 'padBtm' : ''}`} z>
      <p>
      { displaying &&
        <div class="msg" style={{color: users[user]}}>
          { props.f &&
            <span class="prefix" style={{backgroundColor: users[user]}}>{ noCheckText }</span>
          }
          { zoips[id] == order &&
            <Typing startDelay={500 + delay} speed={speed} class="type" hideCursor={true} onFinishedTyping={() => { setZoip(chapter, sequence, order + 1) }}>{props.children}</Typing>
          }
          { zoips[id] != order &&
            <span class="type">{props.children}</span>
          }
        </div>
      }
      </p>
      </Pp>
    </div>
  );
}

// {children}

export default NextZ;
