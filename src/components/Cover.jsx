import React from 'react';

import { toggleVisibilityToC } from './../state.js';

const Cover = ({ toc }) => (
  <div class="cover">
    <h1>UNTIL YOU CONTINUE TO BEHAVE</h1>
    <div class="spacer"></div>
    <div class="button-container">
      <button
        class={ toc ? "hidden" : "visible" }
        onClick={ () => { toggleVisibilityToC() } }>
        Table of Contents
      </button>
    </div>
  </div>
);

export default Cover;
