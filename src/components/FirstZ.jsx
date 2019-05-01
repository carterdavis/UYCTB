import React from 'react';
import Bounce from 'react-reveal/Bounce';
import VisibilitySensor from 'react-visibility-sensor';
import Typing from 'react-typing-animation';

import Pp from './Pp.jsx';
import {setZoip} from './../state.js';

export class FirstZ extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  shouldComponentUpdate (nextProps, nextState) {
    const zoips = this.props.z ? this.props.z.zoips : {};
    const alreadyDisplayed = zoips[`ch${this.props.ch}_${this.props.seq || 'a'}`] > this.props.o;
    const currentDisplaying = this.state.visible && (this.props.p ? zoips[this.props.p[0]] == this.props.p[1] : true);
    const nextDisplaying = nextState.visible && (nextProps.p ? zoips[nextProps.p[0]] == nextProps.p[1] : true);
    return !alreadyDisplayed && (currentDisplaying || nextDisplaying);
  }

  render() {
    const user = this.props.u || 'j29';
    const order = this.props.o || 0;
    const zoips = this.props.z ? this.props.z.zoips : {};
    const sequence = this.props.seq || "a";
    const chapter = this.props.ch || 0;
    const id = `ch${chapter}_${sequence}`;
    const delay = this.props.d || 0;
    const speed = this.props.spe || 50;
    const prereq = this.props.p ? zoips[this.props.p[0]] == this.props.p[1] : true;
    const users = {
      j29: '#5e8d41',
      j56: '#99005d',
      k51: '#2968a1',
      d39: '#5c1989',
      q31: '#0800b6',
      n20: '#ba6c1a',
      SYS: '#737373'
    }

    const bg = `repeating-linear-gradient(0deg, #ffffff, ${users[user]} 6px)`;
    const displaying = this.state.visible && prereq;

    const noCheckBg = this.props.no ? '#FFF, #FFF' : bg;
    const noCheckText = this.props.no ? 'NO' : user;

    return (
      <div class={`zoip ${user}`} style={ displaying ? {} : { height: 0 }}>
        <Pp bg={ displaying ? noCheckBg : '#FFF'} innerClass={`${this.props.f ? 'padTop' : ''} ${this.props.l ? 'padBtm' : ''}`} z>
        <p>
          <VisibilitySensor onChange={
            (visible) => {
              if (zoips[`ch${this.props.ch}_${this.props.seq}`] == null) {
                this.setState({ visible: visible });
              } else if (zoips[`ch${this.props.ch}_${this.props.seq}`] <= this.props.o) {
                this.setState({ visible: visible });
              }
            }
          } />
        { displaying &&
          <div class="msg" style={{color: users[user]}}>
            { this.props.f &&
              <span class="prefix" style={{backgroundColor: users[user]}}>{ noCheckText }</span>
            }
            { zoips[id] == null &&
              <Typing startDelay={500 + delay} speed={speed} class="type" hideCursor={true} onFinishedTyping={() => { setZoip(chapter, sequence, order + 1) }}>{this.props.children}</Typing>
            }
            { zoips[id] != null &&
              <span class="type">{this.props.children}</span>
            }
          </div>
        }
        </p>
        </Pp>
      </div>
    );
  }
}

// {children}

export default FirstZ;
