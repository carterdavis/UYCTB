import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const LastWords = ({ children, num, state }) => (
<div>
<ChapterStart num={num} />
{children}

<Pp>“Hey dude. Wake up.”</Pp>
<Pp>“Wha…hmmnnn…”</Pp>
<Pp>“I pulled over to a rest station. This is as far as I go.”</Pp>
<Pp>“…OK…I’m going to go back to sleep…”</Pp>
<Pp>“Jim29, I’m on my last rest token. I bought three when I got here. I’ve been waiting for you to wake up for a long time.”</Pp>
<Pp>“Where am I?”</Pp>
<Pp>“The northern coast? Exactly where you told me to drive?”</Pp>
<Pp>“Oh. Right. Yah. Can I just sit here for a <span class="t">*</span>sec?”</Pp>
<Pp>“Sorry my knucklehead. Traffic was already horrible on the way here. I’d like to get home before midnight.”</Pp>
<Pp>“I’m your knucklehead?”</Pp>
<Pp>“Yop. At least as much as anyone else is.”</Pp>
<Pp>“Do you have a lantern I could borrow? It looks pretty inky out there.”</Pp>
<Pp>“No, I don’t have a lantern you can drag across the ocean.”</Pp>
<Pp>“Alright. Makes sense. I appreciate your assistance.”</Pp>
<Pp>“No problem. Also what’s your door code again? And is there anything special you need me to do for your birds?”</Pp>
<Pp>“111CompleteDaytime. Tell them I miss them so much.”</Pp>
<Pp>“OK. Just ran out of tokens. Gotta go.”</Pp>
<Pp>“Goodbye Jumper56.”</Pp>
<Pp>“Goodbye Jim29.”</Pp>
<Pp>“Maybe I’ll see you again someday.”</Pp>
<Pp>“Oh my God though! I really hope not.”</Pp>
<Pp>“Hm. I regret leaving you with a bad impression.”</Pp>
<Pp>“Yah dude, ha ha. You’re definitely going straight to Hell.”</Pp>
{children}</div>
);

export default LastWords;
