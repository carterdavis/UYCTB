import React from 'react';

import Drips from './../components/Drips.jsx';

import ChapterStart from './../components/ChapterStart.jsx';

const Drips1 = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#A599B5, #A599B5" />
{children}

<Drips current={state.current} num={num} chapter="one" />
{children}</div>
);

export default Drips1;
