import React from 'react';
import Fade from 'react-reveal/Fade';

import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const Dream1 = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#0d4300, #000" />
{children}

<Pp bg="#000, #000">
  <Fade duration={3000} cascade>
    <div>
      <p>Walking up a hill that keeps getting steeper.</p>
      <p>Flower I can’t remember name of.</p>
      <p>Dr. Kindbrain tells me I’m a rotten fool.</p>
      <p>Spinning room, I’m trying to keep things from rolling.</p>
      <p>Companion from childhood’s sinister glare.</p>
      <p>Vision of dancing elephants, ha ha!</p>
      <p>Falling, gaining velocity.</p>
      <p>I wake up. Walk into the bathroom, push out some wizz. Return to the warm sheets and roll onto my belly. Jellybed feels especially soggy tonight. My body aches in whichever contortion.</p>
      <p>Sitting in my speedster again.</p>
      <p>Trying to cut my hand with safety scissors, doesn’t work.</p>
      <p>Sitting in the garden atrium eating a casserole, somewhat frozen in the middle.</p>
    </div>
  </Fade>
</Pp>
{children}</div>
);

// <Pp>So Jumper56 and I are sitting in the garden atrium. The sun is beautiful in this wonderful blue sky. She is looking at her celly. I’m sitting on the bench, but also walking around in the tall grass. I yank a flower up out of the ground and I cross my legs on the bench. She turns both ways and looks straight at me. “Jim29, I am so mad mad maaad at you.” Her eyes are disgusted.</Pp>
// <Pp>And I’m caught off-guard. “Oh gosh.” I stop walking and sit. “Why are you mad at me? What’s wrong?”</Pp>
// <Pp>“YOU have done something so rude.” She points her finger right at my face.</Pp>
// <Pp>“I’m confused. What was it?”</Pp>
// <Pp>“I already told you a <span class="t">*</span>second ago.” Her eyes are resentful.</Pp>
// <Pp>“I am not ready for this conversation. I forget.”</Pp>
// <Pp>“Remember one thing. Everything.” Her finger in the air is one and like she’s pointing up, not not down.</Pp>
// <Pp>I start sinking into the ground.</Pp>
// <Pp>I start sliding down a long slide.</Pp>
// <Pp>I start standing in my bedroom.</Pp>
// <Pp>I’m going to be late. I don’t even possibly have time to wash up. Everyone’s staring at me like I don’t even work here. I can tell that their bodies are filled with viruses and gushing sores everywhere all over on the inside. None of them are worth their air, mouths sucking in the air whoosh whoosh. I guarantee I can hate them more than they could ever hate me. Perhaps I am filled with sores too but perhaps perhaps yes hmm it seems I am just the one who gets it gets it gets it!?</Pp>
// <Pp>Doby22 and I sit together in the soft tan room. His eyes are white and no pupils. He’s eating such a messy treat crunching sloppily. He looks me straight in the eyes and asks, “Why don’t you look at me like a person?”</Pp>
// <Pp>“Because I’m tired,” is what I’m saying slowly to grandma. “Ha ha ha.”</Pp>
// <Pp>“Ho ho ho.” She looks up from her crossword. “I’ve been working on my memorizing.”</Pp>
// <Pp>“I’m very very stoked to hear that.”</Pp>
// <Pp>“First thing I memorized was your name. Across, five letter word for the best grandson. He he he.” She scribblies in the boxes. “J-I-M-2-9.”</Pp>

export default Dream1;
