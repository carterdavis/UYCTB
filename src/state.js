import React from 'react';

import Cloak from './components/Cloak.jsx';
import Z from './components/Z.jsx';
import store from './redux/store.js';
import { chapters } from './chapters.js';
import { toggleToC, updateCurrent, updateDimensions, updateScreen, updateScrolling, initial, zoip } from './redux/actions.js';

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

export const setZoip = (chapter, seq, value) => {
  store.dispatch(zoip({ id: `ch${chapter}_${seq}`, place: value }));
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

const setScrolling = () => {
  store.dispatch(updateScrolling());
}

export const toggleVisibilityToC = (tocLink = false) => {
  store.dispatch(toggleToC());
  if (tocLink) {
    setTimeout(function(){ document.getElementById('content').focus() }, 0);
  }
}

export const getToC = (toggle) => (
  chapters.map((c, i) => (
    <li><a href={`#${chapters[i][1]}_${i}`} onClick={ () => { toggle(true); setInitial(i) }}>{chapters[i][2]}</a></li>
  ))
);

export const getChapters = (state) => (
  range(state.beginning, state.end+7).map(i => { if (chapters[i]) return (
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

export const getDimensions = () => {
  var w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;
  return { width, height };
}

export const setDimensions = () => {
  store.dispatch(updateDimensions(getDimensions()));
}
