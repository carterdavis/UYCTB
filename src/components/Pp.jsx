import React from 'react';

const Pp = ({ bg, children, c }) => (
  <div class={`paragraph ${c}`} style={{backgroundImage: `linear-gradient(to bottom, ${bg})`}}>
    <div class="inner">
      <p>{children}</p>
    </div>
  </div>
);

export default Pp;
