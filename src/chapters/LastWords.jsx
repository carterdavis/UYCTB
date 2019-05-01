import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';

const LastWords = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#000, #251450" />
{children}

<Pp bg="#251450, #251450">
<p>“Hey dude. Wake up.”</p>
<p>“Wha…hmmnnn…”</p>
<p>“I pulled over to a rest station. This is as far as I go.”</p>
<p>“…OK…I’m going to go back to sleep…”</p>
<p>“Jim29, I’m on my last rest token. I bought three when I got here. I’ve been waiting for you to wake up for a long time.”</p>
<p>“Where am I?”</p>
<p>“The northern coast? Exactly where you told me to drive?”</p>
<p>“Oh. Right. Yah. Can I just sit here for a <span class="t">*</span>sec?”</p>
<p>“Sorry my knucklehead. Traffic was already horrible on the way here. I’d like to get home before midnight.”</p>
<p>“I’m your knucklehead?”</p>
<p>“Yop. At least as much as anyone else is.”</p>
<p>“Do you have a lantern I could borrow? It looks pretty inky out there.”</p>
<p>“No, I don’t have a lantern you can drag across the ocean.”</p>
<p>“Alright. Makes sense. I appreciate your assistance.”</p>
<p>“No problem. Also what’s your door code again? And is there anything special you need me to do for your birds?”</p>
<p>“111CompleteDaytime. Tell them I miss them so much.”</p>
<p>“OK. Just ran out of tokens. Gotta go.”</p>
<p>“Goodbye Jumper56.”</p>
<p>“Goodbye Jim29.”</p>
<p>“Maybe I’ll see you again someday.”</p>
<p>“Oh my God though! I really hope not.”</p>
<p>“Hm. I regret leaving you with a bad impression.”</p>
<p>“Yah dude, ha ha. You’re definitely going straight to Hell.”</p>
</Pp>
{children}</div>
);

export default LastWords;
