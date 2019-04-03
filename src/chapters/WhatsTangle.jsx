import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const WhatsTangle = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}

<Pp>Most of the code I write for Dimples is in Tangle. Tangle is a programming language that was first developed and used around the same time as ancient languages like Parsnip, ZippityZap, BIZ_NIT, and Scuzz. Its syntax is imperative, procedural, strictly typed, and written in all caps. Though the language was initially used to redesign and liven up the displays in early space shuttles and rockets, it remains a common choice for programming consumer electronics. Tangle files or “tangles” are grouped together in swollen packed folders referred to as “knots.”</Pp>
<Pp>The oddest feature that Tangle offers is the possibility for one variable to embody multiple states at once. A variable called HEIGHT could register as 3 when accessed by one function and 5 when accessed by another. Philosophically, this functionality is based on the concept of Anekāntavāda, which translates roughly as “many-sidedness.” In the Jainist belief system this idea is explained through the parable of the blind men and the elephant. According to the story, six blind men were asked to describe an elephant. They all touched different parts of the beast and compared notes. The one who touched the trunk thought the elephant was a tree, the one who touched its tusk though it was some sort of pipe, etc. Point is all of them were sort of right but none of them were completely right. In human communication we can write the same words, but we each have our own particular dictionaries. All data is subjective, and so are the variables in Tangle. Only issue is they all share global scope.</Pp>
{children}</div>
);

export default WhatsTangle;
