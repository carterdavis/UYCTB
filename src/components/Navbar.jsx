import React from 'react';

import Headroom from 'react-headroom';
import { toggleVisibilityToC } from './../state.js';

const Navbar = ({ children, toc }) => (
  <Headroom disableInlineStyles>
    <div class="navbar-wrapper">
      <div class="navbar">
        <span class="header big">Until You Continue To Behave</span>
        <span class="header small">UYCTB</span>
        <button
          class={`${ toc ? "hidden" : "visible" } btn`}
          onClick={ () => { toggleVisibilityToC() } }>
          Table of Contents
        </button>
        <a href="https://uyctb.store/" target="_blank"
          class={`btn book`}
        >
          Buy The Book
        </a>
      </div>
    </div>
  </Headroom>
);

export default Navbar;
