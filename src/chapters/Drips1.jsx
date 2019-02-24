import React from 'react';

import Drips from './../components/Drips.jsx';

import ChapterStart from './../components/ChapterStart.jsx';

const Drips1 = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}

<Drips chapter="one" />
{children}</div>
);

export default Drips1;
