import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const HotNews = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}

<Pp>
<p>HOT NEWS: Dimples Releases Statement on zoftware Malfunction</p>
<p>by Tammy46 21Grumbo</p>
<p>It’s one of the hottest stories of the <span class="t">*</span>week. I need mitts to pick it up! Innovative health zoftware technology giant Dimples is currently dealing with a stinky rotten bug that has led to the deaths of two (2) normal people. And according to a press release from the company today, the glitch was determined to be caused by a wimpy scumbag mudsucker named Jim29 03Goldman. A statement from company rep Chadmuth18 23Shnozo is below.</p></Pp>
<Pp></Pp>
<Pp><p><em>We at Dimples are devastated to hear of the deaths of Murt62 79Shmanderson and Toyler58 28Bumperton. We hold human life in esteem, and the mission of our company is to protect and cherish it. Our team of engineers is working around the clock to fix this issue. We hope Mr. 79Shmanderson and Mr. 28Bumperton  find joy in the afterlife. Our wayward employee Jim29 03Goldman (age 24) created the bug and we are furious with him.</em></p></Pp>
{children}</div>
);

export default HotNews;
