import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import Lyrics from './Lyrics.jsx';

export default class LazyAudio extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loaded: "unloaded",
      error: false,
      paused: "paused",
      corner: "",
    };
    this.audio = null;
  }

  componentDidMount() {
    this.audio = new Audio();
    this.audio.oncanplaythrough = () => {
      this.setState({
        loaded: "loaded"
      });
    };
    this.audio.onerror = () => {
      this.setState({
        error: true
      });
    };
    this.audio.onended = () => {
      this.setState({
        paused: "paused",
        corner: ""
      });
    }
    this.audio.src = this.props.src;
    this.audio.loop = this.props.loop;
  }

  mainClick() {
    if (this.state.paused == 'paused') {
      this.audio.play();
      this.setState({
        paused: "playing"
      });
    } else {
      this.audio.pause();
      this.setState({
        paused: "paused",
        corner: ""
      });
    }
  }

  componentWillUnmount() {
    if (this.state.paused == 'playing') {
      this.audio.pause();
    }
    this.audio = null;
  }

  inView(visible) {
    if (this.state.paused == "playing" && !visible) {
      this.setState({
        corner: "corner"
      });
    }
  }

  render() {
    const styleButton = this.state.paused == 'paused' ? { background: this.props.bg }
      : { boxShadow: `0 0 1rem ${this.props.bg}`, background: this.props.bg }
    const styleSymbol = this.state.paused == 'paused' ? { borderLeftColor: this.props.fg }
      : { borderLeftColor: this.props.fg, borderRightColor: this.props.fg };

    const open = this.state.lyricsOpen ? 'open' : '';
    const leftStyle = this.state.lyricsOpen ? '50%' : `${this.state.lyricsLeft}px`;

    return (
    <VisibilitySensor onChange={(visible) => { this.inView(visible) } } intervalDelay={500} partialVisibility>
      <div>
      <button class={`playButton ${this.state.loaded} ${this.state.corner}`} onClick={() => { this.mainClick() }} style={styleButton}>
        <div class={`symbol ${this.state.paused}`} style={styleSymbol}></div>
      </button>
      { this.props.lyrics &&
        <Lyrics lyrics={this.props.lyrics} fg={this.props.fg} bg={this.props.bg} screenWidth={this.props.screenWidth} />
      }
      </div>
    </VisibilitySensor>
    )
  }
}
