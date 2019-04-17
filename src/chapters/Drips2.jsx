import React from 'react';

import Drips from './../components/Drips.jsx';

import ChapterStart from './../components/ChapterStart.jsx';

const Drips2 = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#bf7690, #bf7690" />
{children}

<Drips current={state.current} num={num} chapter="two" />
{children}</div>
);

export default Drips2;
