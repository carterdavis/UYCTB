import React from 'react';

const Pp = ({ bg = '#FFF', children, c }) => (
  <div class={`paragraph ${c}`} style={{background: bg}}>
    <div class="inner">
      <p>{children}</p>
    </div>
  </div>
);

export default Pp;
