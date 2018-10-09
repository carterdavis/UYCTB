import React from 'react';


import Pp from './../components/Pp.jsx';

const Sleepytime = (props) => (
<div>
{props.children}

  <Pp>I finish setting my alarm for tomorrow and spit out my mouthwash. My face looks pretty good. My eyes are a little baggy. Itchy bright red nodules run up the back of my neck, but don't worry, that's a normal side effect of Jubimum, one of my daily supplements. No scratching!! Ha ha. I turn off the lights.</Pp>
  <Pp>It's warm under my heavy rubber bedcloth. I love how it makes me feel safe and held. My skull gradually sinks into my polymer headsponge. The traffic lights through the blinds stretch and wrap around the walls. I bring my eyelids together but my eyes aren't done looking. The darkness of the room is painted red, blue, yellow, green alternately in the space behind my eyelids. I think about my own breathing and start inhaling irregularly. I think what have I done, what have I done, what have I done, what's next? I'm shivering, fidgeting, jittery, twitchety.</Pp>
{props.children}</div>
);

export default Sleepytime;
