import React from 'react';

const Command = ({ children, c = "" }) => (
  <div class={`paragraph command ${c}`}>
    <div class="inner">
      <p>{children}</p>
    </div>
  </div>
);

export default Command;
