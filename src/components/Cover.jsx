import React from 'react';

import LazyAudio from './../components/LazyAudio.jsx';
import { toggleVisibilityToC, getStartUrl } from './../state.js';

const Cover = ({ toc }) => (
  <div class="cover">
    <div class="cover-img-wrapper">
      <picture>
        <source media="(max-width: 500px)" srcset="assets/cover-small.png" />
        <source media="(min-width: 501px)" srcset="assets/cover.png" />
        <img class="cover-img" src="assets/cover.png" alt="Until You Continue To Behave" />
      </picture>
    </div>
    <div class="coverButton">
      <LazyAudio src="assets/Overture.mp3" loop={false} bg="#FFF" fg="#000" cover />
    </div>
    <div class="buttons">
      <div class="button-container left">
        <a href={getStartUrl()} class="btn start">Start</a>
        <button
          class={`${ toc ? "hidden" : "visible" } btn`}
          onClick={ () => { toggleVisibilityToC() } }>
          Table Of Contents
        </button>
      </div>
      <div class="button-container right">
        <a href={getStartUrl()} class="btn">About</a>
        <a href="https://uyctb.store/" target="_blank"
          class={`btn book`}
        >
          Buy The Book
        </a>
      </div>
    </div>
  </div>
);

// <h1>Until You Continue To Behave</h1>
// <div class="spacer"></div>

// <source media="(max-width: 720px)" srcset="assets/1-small.png" />
// <source media="(min-width: 721px)" srcset="assets/1.png" />

export default Cover;
