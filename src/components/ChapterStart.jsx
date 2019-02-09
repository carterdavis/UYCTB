import React from 'react';

const ChapterStart = ({ num, bg = '#FFF, #FFF' }) => {
  const background = { background: `linear-gradient(${bg})` };
  const odd = num % 2 == 1 ? 'odd' : '';

  return (
    <div class="chapterStart">
      <div class="border" style={ background }></div>
      <div class="inner">
        <p class={odd}>{num}</p>
      </div>
      <div class="border" style={ background }></div>
    </div>
  );
}

export default ChapterStart;
