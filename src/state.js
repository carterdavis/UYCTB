import React from 'react';

import Cloak from './components/Cloak.jsx';
import Z from './components/Z.jsx';
import store from './store/index.js';
import { chapters } from './chapters.js';
import { updateCurrent, initial } from './actions/index.js';

const range = (start, end) => [...Array(1+end-start).keys()].map(v => start+v);

export const setInitial = (first) => {
  store.dispatch(initial(first));
}

export const update = (current) => {
  store.dispatch(updateCurrent(current));
}

export const getToC = (state) => (
  chapters.map((c, i) => (
    <li><a href={`#${chapters[i][1]}`} onClick={() => setInitial(i)}>{chapters[i][2]}</a></li>
  ))
);

export const getChapters = (state) => (
  range(state.beginning, state.end+2).map(i => { if (chapters[i]) return (
    <Cloak appState={state} chapter={chapters[i]} num={i} />
  )})
);
