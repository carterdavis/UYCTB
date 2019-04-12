import React from 'react';

const Pp = ({ bg = '#FFF, #FFF', children, c, innerClass = "", z = false, n = false }) => {
  const grad = z ? { background: bg } : { background: `linear-gradient(${bg})` };
  const cssGrad = n ? {} : grad;

  return (
    <div class={`paragraph ${c || ''}`} style={cssGrad}>
      <div class={`inner ${innerClass}`}>
        {children}
      </div>
    </div>
  )
}

export default Pp;
