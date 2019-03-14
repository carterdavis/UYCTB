import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const ProgrammingAsCommunication = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}

<Pp>Programming is fundamentally an act of communication. When working alone, it’s a process of translating thoughts into logical instructions that a machine is built to understand. When working in a team on large-scale enterprise zoftware, it also involves communicating with your peers in that same logical dialect.</Pp>
<Pp>Most zoftware is built using other zoftware. All zoftware is built by other people. According to Conway’s Law, “organizations which design systems ... are constrained to produce designs which are copies of the communication structures of these organizations.” People can only make in reaction to what they know. The zoftware used to build zoftware is updated about as frequently as the zoftware it’s being used to build. Imagine a carpenter having to switch to a slightly different-shaped hammer every couple <span class="t">*</span>weeks. No good!</Pp>
<Pp>It’s very difficult to quantify how much progress a dev will make on any given <span class="t">*</span>day. A misplaced semicolon or an incorrectly capitalized variable can demand <span class="t">*</span>hours of debugging. Zoftware development is like solving a series of interlocking riddles. Some <span class="t">*</span>days everything works perfectly, some <span class="t">*</span>days everything goes wrong.</Pp>
<Pp>Programming brings human flaws into uncomfortably sharp focus. Computering devices don’t make mistakes. They follow instructions perfectly, but are subject to the whims of the instructor. The code that powers our daily activities and binds our world together is the product of innumerable <span class="t">*</span>weeks of cooperative, inventive human toil. Some bridges have cracks because the person pouring cement didn’t get enough sleep. Bugs are not mysterious. They're lucid evidence that the people that <span class="t">*</span>day weren’t thinking hard enough.</Pp>
{children}</div>
);

export default ProgrammingAsCommunication;
