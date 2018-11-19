import React from 'react';
import Fade from 'react-reveal/Fade';

import Pp from './Pp.jsx';

const D = ({ d, nc, children }) => (
  <Pp c="drip">
    <Fade delay={d} collapse={false} top><div class="drip-body">{children}</div></Fade>
  </Pp>
);

// {children}

export default D;
