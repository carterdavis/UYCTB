import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const MindTime = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#BF763F, #E0A094" />
{children}

<Pp bg="#E0A094, #F797C1, #F7C097, #DA91ED, #F0D090">
<p>What do you love, Jim29? In the tricky times it’s good to keep in mind what you love. You love God, yes you do, your father who art in heaven. You love the air, you love the floor, you love the ceiling, you love the fields and oceans and streets (and all their names too), you love falling asleep, you love smiling, you love crying, you love feeling like you’re getting smarter, you love feeling a cool breeze, you love playing with your toys, you love to go on a walk for a while, that’s for sure. Not good enough. You love getting comfortable, you love getting in a huffy fit, you love to stay up all night on Modestday reading the news, you love to take a putty in the afternoon, you love to wake up early on Activeday morning and sit with your birds and bake bread for them and hear all the new things they’ve learned how to say, you love to walk inside from the cold. Not good enough. You love feeling held, you love being alone, you love God, yes you do, you totally love me too. NOT…</p>
<p>NOT…</p>
<p>OK.</p>
<p>Yes OK.</p>
<p>You are going to be alright,</p>
<p>yes,</p>
<p>vverry OOKK.</p>
</Pp>
{children}</div>
);

export default MindTime;
