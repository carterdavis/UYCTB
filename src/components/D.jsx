import React from 'react';
import Fade from 'react-reveal/Fade';

import Pp from './Pp.jsx';
import DripButtons from './DripButtons.jsx';

const D = ({ d, q, c, t, f, nc, children }) => (
  <Pp c="drip">
    <Fade delay={d} collapse={false} top><div class="drip-body">{children}<DripButtons counter={c} quantity={q} thumb={t} flip={f}/></div></Fade>
  </Pp>
);

// {children}

export default D;
