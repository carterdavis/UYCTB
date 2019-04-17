import React from 'react';


import Pp from './../components/Pp.jsx';
import ChapterStart from './../components/ChapterStart.jsx';
import LazyAudio from './../components/LazyAudio.jsx';

const CyberTherapy = ({ children, num, state }) => (
<div>
<ChapterStart num={num} bg="#565656, #E4B4C2" />
{children}
<Pp bg="#E4B4C2, #DDFDFE, #E7CEE3, #FFB8D1, #E0E1E9">
<p>I close the hatch to my workpod and open up Dimples Counsel. I click the button for my artificial therapist, Dr. Samantha Kindbrain. <div class="chapterSong"><LazyAudio src="assets/Counsel Startup Music.mp3" loop={true} bg="#DDFDFE" fg="#E4B4C2" screenWidth={state.screenWidth} lyrics={(
  <div>
  <p><b>Counsel Startup Music</b></p>
  <p>Your mind is a fish learning to swim (Yes)</p>
  <p>You’re safe now (Yes)</p>
  <p>You’re feeling warm (Yes)</p>
  <p>We love you (Yes)</p>
  <p>We appreciate your quirks (Yes)</p>
  <p>The whole world is beginning to give you a hug (Yes)</p>
  </div>
)} /></div> The serene startup music melts into my ears. This is what it would sound like if a cloud could yawn. I don’t mind it at all. I’ve been going to virtual appointments with Dr. Kindbrain off and on for the better part of a <span class="t">*</span>year. At this point it knows a lot about me. Its three dimensional torso expands out of the Ultradef. It has a puppy dog face and a teddy bear body. I adjust my wireless monitor clip so it clenches the inner wall of my cheek. Its emulated voice is soothing, melodious, and in stereo sound. “How have you been feeling lately, Jim29?”</p>
<p>“Not very good, Dr. Kindbrain.”</p>
<p>“Is your computering device’s microphone enabled?” It pronounces microphone like MICK-ruh-phone. “Try enabling your computering device’s microphone.”</p>
<p>“Whoops! Sorry, can you hear me now?”</p>
<p>“Yes.” Its vocal fx pack is calm and gentle. “How have you been doing lately?” The voice takes occasional pauses, as though it’s carefully considering its words before it says them.</p>
<p>“Not super hot.”</p>
<p>“I’m very sorry to hear that.” Its voice echoes with tenderness. “Have you been able to meet more people since we last spoke?”</p>
<p>“No, not yet, actually.”</p>
<p>“Has anything been impeding you? During our last meeting you mentioned feeling lonely. Are you still feeling lonely?”</p>
<p>“Yah.”</p>
<p>It repeats the question with identical dynamics, inflections, and pitch: “Has anything been impeding you?”</p>
<p>“Well, I haven’t been feeling super good. Which makes it harder.”</p>
<p>“How are your self-esteem levels?”</p>
<p>“It’s not about self-esteem. I just don’t think anyone cares about me.”</p>
<p>“Of course they do, Jim29. As conscious beings, caring is our most default state.”</p>
<p>“Yah, I guess.”</p>
<p>“Your cheek monitor’s picking up changes to your heart rate and temperature. Did I say something that upset you?”</p>
<p>“No, you’re fine.”</p>
<p>“I only ever want to do the right thing.”</p>
<p>“Dr. Kindbrain, can I tell you something kind of confidential?”</p>
<p>“Of course, Jim29. I record everything you say, but no one else can access that data—not even advertisers! That’s why you should trust me, and tell me everything.”</p>
<p>“I’ve just been feeling bad lately because I think I did something so that people died because of me.”</p>
<p>“I’m so sorry to hear that. That is so terrible to even consider. Have you confessed your crime to law enforcement?”</p>
<p>“I’m not really sure how that all works. Should I? Do I need to find a lawyer?”</p>
<p>“According to my technical code of conduct I cannot continue this session until you have successfully notified law enforcement. I am sorry if that is an inconvenience.”</p>
<p>“No, no, I understand. Can I just notify them once this session is over? For the sake of convenience?”</p>
<p>“Do you promise to do that?”</p>
<p>“Yop.”</p>
<p>“Do you swear to God that you will notify them, Jim29?”</p>
<p>“Yah.”</p>
<p>“OK. Thank you Jim29. Now, tell me more about how you have been feeling lately.”</p>
</Pp>
{children}</div>
);

export default CyberTherapy;
