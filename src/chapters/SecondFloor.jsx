import React from 'react';


import Pp from './../components/Pp.jsx';

const SecondFloor = (props) => (
<div>
{props.children}

<Pp>The slides that lead to the second floor drops off in the company library. The shelves are filled with dog-eared technical manuals and copies of <em>The 01Stone Method: How To Wring Your Enemies' Necks and Seize Everything You Desire</em>. Employees mostly use it as a place to quietly focus on their work. The acoustics in there are crazy. I swear you can hear every creak and pop and groan people's bodies made as they concentrate.</Pp>
<Pp>The library leads into The Belly, or the employee cafeteria. Everyday around 12:00bt it's teeming with bodies. Low wage cooks are stowed away behind a wide Ultradef screen that zooms in and out on images of the steamy entrees. Their sweaty gnarled hands reach through holes in the screen, holding plates for hungry eaters. Every now and then a developer will snap a cook's arm up against the bright screen, laughing, trying to crunch bone as the scaly, scabbed appendage wriggles. The floor is spongy underfoot, covered in a dense layer of soggy discarded wrappers, napkins, and food bits. Every footfall makes a shyuk shyuk noise. The employee chow stations are half a leap wide and square. They fit two seated people very snugly. The ambience is thick with the din of slappin smackin lips. I'd estimate I'm in there four or five times a <span class="t">*</span>day. I'm a real snack freak, believe it or not!</Pp>
<Pp>The oven takes up a quarter of the space on the floor, apparently. Average employees are not given access to see it. Rumor says it's so hot that its flames burn white.</Pp>
{props.children}</div>
);

export default SecondFloor;
