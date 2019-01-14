import React from 'react';
import Bounce from 'react-reveal/Bounce';
import VisibilitySensor from 'react-visibility-sensor';
import Typing from 'react-typing-animation';

import Pp from './Pp.jsx';

const Z = (props) => {
  const user = props.u || 'j29';
  const order = props.o || 0;
  const state = props.s || {};
  const sequence = props.seq || "a";
  const setZoip = props.f || (() => {});
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
    <Pp bg={bg}>
    { order == 0 &&
      <VisibilitySensor onChange={
        (visible) => {
          if (visible && !(sequence in state)) setZoip(sequence, order)
        }
      } />
    }
    { state[sequence] >= order &&
      <span style={{color: users[user]}}>
        { props.first &&
          <span class="prefix" style={{backgroundColor: users[user]}}>{ user }</span>
        }
        <Typing delay={500 + delay} speed={speed} class="type" hideCursor={true} onFinishedTyping={() => { setZoip(sequence, order+1) }}>{props.children}</Typing>
      </span>
    }
    </Pp>
  </div>
)};

// {children}

export default Z;
