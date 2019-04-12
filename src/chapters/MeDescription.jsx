import React from 'react';
import LazyLoad from 'react-lazyload';

import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const MeDescription = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#cd9db6, #9a70ad" />
{children}

<Pp bg="#9a70ad, #cc8bae, #cbc0bf">
<p>I just realized that you don’t know what I look like. Allow me to amend that! I promise this information was not intentionally withheld. The truth is, in terms of my appearance, I look like a normal, nice young man. I’m kind of short, but I’m actually not insecure about my height. My eyes are little emeralds, and in the daytime I wear a pair of lenses that make the pupils look wider so I fit in with the rest of the guys. My hair is blond and shaved into a thin ring that encirculates my skull. This is a popular Big Town hairstyle; around here they call it “the disc.” It’s a chic, flirty cut that exudes a uniquely evocative panache. I think my chin is round and cool. My arms are as thick as my legs, and my legs are almost as thick as Queam canisters. The way my eyebrows are naturally arched frequently makes people ask me “Is everything OK?” and I always tell them yes of course. Everything is great, thanks. Various warts and cysts riddle the space between my nape and my tush. I’ve got a funny round tummy and I like to make it talk.
</p>
</Pp>
<Pp c="chapterImage" bg="#cbc0bf, #cbc0bf" >
<p>
    <img src="assets/5.png" />
</p>
</Pp>
{children}</div>
);

export default MeDescription;
