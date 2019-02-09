import React from 'react';
import Bounce from 'react-reveal/Bounce';
import VisibilitySensor from 'react-visibility-sensor';
import Typing from 'react-typing-animation';

import Pp from './Pp.jsx';
import {setZoip} from './../state.js';

const Z = (props) => {
  const user = props.u || 'j29';
  const order = props.o || 0;
  const zoips = props.z;
  const sequence = props.seq || "a";
  const chapter = props.ch || 0;
  const id = `ch${chapter}_${sequence}`;
  const delay = props.d || 0;
  const speed = props.spe || 50;
  const users = {
    j29: '#5e8d41',
    j56: '#99005d',
    d39: '#371989',
    n31: '#daab00',
    n20: '#ba6c1a'
  }

  const bg = user ? `repeating-linear-gradient(0deg, #ffffff, ${users[user]} 4px)` : 'none';

  return (
  <div class={`zoip ${user}`}>
    <Pp bg={bg} innerClass={props.first ? 'padTop' : ''} z>
    { order == 0 &&
      <VisibilitySensor onChange={
        (visible) => {
          console.log(visible);
          console.log(zoips);
          if ((visible && zoips) && !(id in zoips)) setZoip(chapter, sequence, order)
        }
      } />
    }
    { zoips && (zoips[id] >= order) &&
      <div class="msg" style={{color: users[user]}}>
        { props.first &&
          <span class="prefix" style={{backgroundColor: users[user]}}>{ user }</span>
        }
        <Typing delay={500 + delay} speed={speed} class="type" hideCursor={true} onFinishedTyping={() => { setZoip(chapter, sequence, order + 1) }}>{props.children}</Typing>
      </div>
    }
    </Pp>
  </div>
)};

// {children}

export default Z;
