import React from 'react';

export default class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      url: `${props.src}-static.jpg`
    };
    this.img = null;
  }

  componentDidMount() {
    this.img = new Image();
    this.img.src = `${this.props.src}.gif`;
  }

  componentWillUnmount() {
    this.img = null;
  }

  toggle() {
    if (this.state.playing) {
      this.setState({ playing: false, url: `${this.props.src}-static.jpg`})
    } else {
      this.setState({ playing: true, url: `${this.props.src}.gif`})
    }
  }

  render() {
    return (
      <div class={`ad-wrapper ${this.props.c || ''}`}>
        <div class="ad-top">AD AD AD AD AD AD AD AD</div>
        <img class="ad" onclick={() => this.toggle()} src={this.state.url} />
        <div class="ad-bottom">CLICK ME CLICK ME CLICK ME</div>
      </div>
    )
  }
}
