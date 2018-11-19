import React from 'react';

import Cloak from './components/Cloak.jsx';
import Z from './components/Z.jsx';
import store from './store/index.js';
import { chapters } from './chapters.js';
import { updateCurrent, updateScreen, initial } from './actions/index.js';

const range = (start, end) => [...Array(1+end-start).keys()].map(v => start+v);

export const setInitial = (first) => {
  store.dispatch(initial(first));
}

export const setScreen = (num) => {
  store.dispatch(updateScreen(num));
  if (num != 0) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
}

const scrollTop = (target) => {
  store.dispatch(initial(first));
}

export const update = (current) => {
  if (store.getState().current != current) {
    const url = `#${chapters[current][1]}_${current}`;
    if (history.pushState) {
      history.pushState(null, null, url);
    } else {
      location.hash = url;
    }
    store.dispatch(updateCurrent(current));
  }
}

export const getToC = (toggle) => (
  chapters.map((c, i) => (
    <li><a href={`#${chapters[i][1]}_${i}`} onClick={() => {toggle(); setInitial(i);}}>{chapters[i][2]}</a></li>
  ))
);

export const getChapters = (state) => (
  range(state.beginning, state.end+2).map(i => { if (chapters[i]) return (
    <Cloak appState={state} chapter={chapters[i]} num={i} />
  )})
);

export const getAllChapters = (state) => (
  range(0, 75).map(i => { if (chapters[i]) return (
    <div class="chapter" style={state} id={chapters[i][1] + '_' + i}>
      {React.createElement(chapters[i][0], null, null)}
    </div>
  )})
);
