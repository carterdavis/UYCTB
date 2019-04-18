import React from 'react';

import LazyAudio from './../components/LazyAudio.jsx';
import { toggleVisibilityToC, getStartUrl } from './../state.js';

const Cover = ({ toc }) => (
  <div class="cover">
    <h1>Until You Continue To Behave</h1>
    <div class="spacer"></div>
    <div class="button-container">
      <a href={getStartUrl()} class="btn">Start</a>
      <button
        class={`${ toc ? "hidden" : "visible" } btn`}
        onClick={ () => { toggleVisibilityToC() } }>
        Table of Contents
      </button>
    </div>
    <div class="coverButton">
      <LazyAudio src="assets/Overture.mp3" loop={false} bg="#FFF" fg="#000" />
    </div>
  </div>
);


export default Cover;
