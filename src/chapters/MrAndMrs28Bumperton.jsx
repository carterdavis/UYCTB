import React from 'react';


import Pp from './../components/Pp.jsx';
import TDaddy from './../components/TDaddy.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const MrAndMrs28Bumperton = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}

<TDaddy story>
  <div class="section">
    <div class="headline">Here’s what Mr. and Mrs. 28Bumperton Did Every Reverentday</div>
    <div class="byline">By Kurt32 92Stephephenson</div>
  </div>
  <div class="section">
    <p>According to an anonymous source who cannot be named, Mr. and Mrs. 28Bumperton, of Dimples Disaster fame, had a ritual every Reverentday afternoon. They were a different kind of couple. They had values.</p>
    <p>Toyler58 would stand up on stage and look down at her. He would read from a list he had compiled of every time he had thought about her throughout the past <span class="t">*</span>week. The park was so pretty at that time of night.</p>
    <p>“While reading online news, while cooking my corn meal, while walking down the street, while wizzing in a urinal, while looking at birds,” he stops to catch his breath.</p>
    <p>They’d paint flowers in the woods. They’d set up their canvas in front of their latest specimen. She’d draw the lines and he’d fill them with just the right color.</p>
    <p>They would sit out on the hill and watch the setting sun as it crept down the horizon. It’d be so warm. They’d take their shirts off and lay on the grass in each other’s arms.</p>
  </div>
</TDaddy>
{children}</div>
);

export default MrAndMrs28Bumperton;
