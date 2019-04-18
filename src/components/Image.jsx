import React from 'react';

import Pp from './Pp.jsx';


export default class Image extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: false,
      url: ''
    };
    this.img = null;
  }

  componentDidMount() {
    this.img = new Image();
    if (this.props.screenWidth > 720) {
      this.img.src = `assets/${this.props.src}.png`;
    } else {
      this.img.src = `assets/${this.props.src}-small.png`;
    }
    this.img.onload = () => {
      this.setState({
        loaded: true
      });
    };

    this.img.onerror = () => {
      this.setState({
        error: true
      });
    };

    this.setState({
      url: this.img.src
    });
  }

  render() {
    let image;

    if (this.state.error) {
      image = {}
    } else if (!this.state.loaded) {
      image = {}
    } else {
      image = <img
        src={this.state.url}
        alt />
    }

    return <Pp c="chapterImage" bg={this.props.bg}>{image}</Pp>
  }
}
