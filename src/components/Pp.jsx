import React from 'react';

const Pp = ({ bg = '#FFF, #FFF', children, c }) => (
  <div class={`paragraph ${c}`} style={{background: `linear-gradient(${bg})`}}>
    <div class="inner">
      <p>{children}</p>
    </div>
  </div>
);

export default Pp;
