import React from 'react';

import { iOSversion } from './../state.js';
import ClickOutside from 'react-click-outside';

class Lyrics extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lyricsOpen: false,
      lyricsLeft: 0
    };
    this.setWrapperRef = element => {
      this.wrapper = element;
    };
  }

  handleClickOutside() {
    if (this.state.lyricsOpen) {
      this.toggleLyrics();
    }
  }

  componentDidMount() {
    this.setLeft()
  }

  setLeft() {
    if (this.wrapper) {
      const box = this.wrapper.getBoundingClientRect();
      this.setState({ lyricsLeft: box.left });
    }
  }

  toggleLyrics() {
    this.setState({ lyricsOpen: !this.state.lyricsOpen });
  }

  componentDidUpdate(prevProps) {
    if (this.props.screenWidth !== prevProps.screenWidth) {
      this.setLeft();
    }
  }

  render() {
    const open = this.state.lyricsOpen ? 'open' : '';
    const ver = iOSversion() || false;
    const variableLeft = ver && (ver[0] < 11) ? 'initial' : `${this.state.lyricsLeft}px`;
    const leftStyle = this.state.lyricsOpen ? '50%' : variableLeft;

    return (
      <div class="lyrics-wrapper" ref={this.setWrapperRef}>
        <div class={`lyrics ${open}`} onClick={() => { this.toggleLyrics() }} style={{ backgroundColor: this.props.bg, borderColor: this.props.bg, left: leftStyle }}>
          <button class="x" onClick={(e) => {this.props.toggle(); e.stopPropagation();}}>x</button>
          { this.props.lyrics }
        </div>
        <span class={`lyricsLabel ${open}`} onClick={() => { this.toggleLyrics() }} style={{ color: this.props.fg }}>Lyrics</span>
      </div>
    );
  }
}

export default ClickOutside(Lyrics);
