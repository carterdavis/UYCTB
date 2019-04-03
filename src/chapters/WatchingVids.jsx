import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const WatchingVids = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}

<Pp>
<p>I sit on the circular couch with my lap computerior. The couch is circular, shaped like a donut, and I’m the filling. I type in “cool-vidz.watch” and click the GO button. Thumbnails ripple down my screen. Any one of these could be what I want to watch.</p>
<p>First I click “7 Major Bloopers That Are Costing Industries A Pretty Penny” by Viducation. These are pretty nice infographics. I like the way they break it down and make it seem really obvious. I don’t really have the stamina to watch this whole thing, even though I agree with it.</p>
<p>Next I click “Taffy Choke Compilation 5: Zero Airflow Edition” by Best Chokes. The vid is the fifth installment in a series all about people choking on taffy. I’ve watched all four prior installments. His name is Morris34 and he has a big wad of Strawbberry taffy in his mouth on a wooden roller coaster. First bump and he’s wheezing. Whoa! His face is bright red. He whacks his arm against the railing.</p>
<p>I start to zone out and I stop absorbing the visual data. I watch “The Return Of LOGIC” by The Rational Prince. I watch “Gooey Pizza Melt Sandwich” by LunchNation. I watch “Push My Uncle Down The Stairs (Official Music Vid)” by Violent Aaron. I watch “So Sad Crying Tearz (Official Lyric Vid)” by Violent Aaron. I watch “Top 6 Weirdest Infant Fails” by ChildrenFailTeevee. I watch “DIY Blood Cookies (Human Blood) 1/2Hr Recipe” by WtfCooking. I watch “What everyone needs to understand. (RANT)” by King Intelligent. I watch “BOINK_1” by zddzssszdds, in the vid a guy smacks his head really hard and he screams, really loud clang of bone against concrete, it startles me. I shut down my computerior.</p>
</Pp>
{children}</div>
);

export default WatchingVids;
