import React from 'react';
import Bounce from 'react-reveal/Bounce';

import Pp from './Pp.jsx';

const Z = ({ d, nc, u, children }) => (
  <div class={`zoip ${u}`}>
    <Pp>
      { u == "j29" ?
        <Bounce duration={2000} delay={d*100} collapse={!nc} right>{children}</Bounce>
      :
        <Bounce duration={2000} delay={d*100} collapse={!nc} left>{children}</Bounce>
      }
    </Pp>
  </div>
);

export default Z;
