import React from 'react';

import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';

import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';
import Snip from './../components/Snip.jsx';

const WhyTangle = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}

<Pp>It's not like Tangle is widely considered a "good" programming language. We still use it because the Dimples philosophy has always been one of glacial incremental improvement. They only ever maintain a shallow focus on what they can accomplish this <span class="t">*</span>year; no path forward, no five <span class="t">*</span>year plan. They've been doing business for over sixty, and resources that might have otherwise been allocated for organizational and architectural improvements are traditionally at the behest of the strategists. The strategists are an unintegrated jumble of separately ignorant voices, reeling in different directions away from market trends foreseen via increasingly occult tactics. Under their command, functionality is often scrapped mid-development, leaving large chunks of unfinished code abandoned in the system. As the decades pass, the prospect of reworking and converting the hundred million or so lines of code to a better language grows increasingly more absurd. Structural changes are rapid, ambitious, and uncoordinated, building wobbly off of unplanned sagging supports. Our codebase will get worse no matter how hard we try.</Pp>
<Pp>Most of the features I have to write code for are pretty hard to contextualize, in terms of their impact on everyday patients. They usually deal with the specifics of parsing and transferring patient information between different servers. The biggest project I ever worked on was for the Dimples SmartMirror, which hangs in patients' rooms across from their beds. I was tasked with digesting the SmartMirror's ReflectionCam data stream into usable data before uploading it onto the data mound. Dimples generates a not insubstantial amount of revenue selling patient face data to face recognition companies and mask manufacturers. I wrote the script that compresses all the snapped reflections into one three-dimensional morph. Kind of cool.</Pp>
<Pp>Programming for this company is pretty nerve-wracking honestly. Nuthin ever runs the way it seems like it ought to. Other employees' cursors wander constantly around my code, occasionally changing variable names or writing scolding notes about the quality of my syntax like:</Pp>
<Pp>#DON'T TRIPLE INDENT AFTER CLOSING BRACKETS OF PSEUDOCLASS</Pp>
<Pp>#DEFINITIONS IF YOU KNOW WHAT'S GOOD FOR YOU</Pp>
<Pp>#</Pp>
<Pp>#CONSIDER REWRITING THIS METHOD USING DIPLOID NUMERALS,</Pp>
<Pp>#THANK YOU VERY MUCH?</Pp>
<Pp>#</Pp>
<Pp>#IF YOU FORGET TO SWITCH TEXT CODECS AND MODIFY THE LEGACY</Pp>
<Pp>#CODE ONE MORE TIME I SWEAR I WILL BITE OFF YOUR BALL SACK</Pp>
<Pp>I still haven't found a way to turn off the system error alert noise, either. It fires every time anything goes wrong with my code. I understand that Dimples can't let their employees make any mistakes, but the noise always burns my ears. It sounds like a scraping scream.</Pp>
{children}</div>
);

export default WhyTangle;
