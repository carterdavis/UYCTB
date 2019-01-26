import React from 'react';

const Pp = ({ bg = '#FFF, #FFF', children, c, innerClass = "", z = false }) => {
  const grad = z ? { background: bg } : { background: `linear-gradient(${bg})` };

  return (
    <div class={`paragraph ${c}`} style={grad}>
      <div class={`inner ${innerClass}`}>
        <p>{children}</p>
      </div>
    </div>
  )
}

export default Pp;
