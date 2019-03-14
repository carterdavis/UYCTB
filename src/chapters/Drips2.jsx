import React from 'react';

import Drips from './../components/Drips.jsx';

import ChapterStart from './../components/ChapterStart.jsx';

const Drips2 = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}

<Drips current={state.current} num={num} chapter="two" />
{children}</div>
);

export default Drips2;
