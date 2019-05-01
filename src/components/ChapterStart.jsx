import React from 'react';

export default class ChapterStart extends React.PureComponent {
  render() {
    const background = { background: `linear-gradient(${this.props.bg || '#FFF, #FFF' })` };
    const odd = this.props.num % 2 == 1 ? 'odd' : '';

    return (
      <div class="chapterStart">
        <div class="border" style={ background }></div>
        <div class="inner">
          <p class={odd}>{this.props.num}</p>
        </div>
        <div class="border" style={ background }></div>
      </div>
    );
  }
}
