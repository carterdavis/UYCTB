import React from 'react';

export default class LazyImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: false
    };
  }

  componentDidMount() {
    const img = new Image();
    img.onload = () => {
      this.setState({
        loaded: true
      });
    };
    img.onerror = () => {
      this.setState({
        error: true
      });
    };
    img.src = this.props.src;
  }

  render() {
    let image;

    if (this.state.error) {
      image = <img
        src=""
        alt={this.props.alt} />
    } else if (!this.state.loaded) {
      image = <img
        src=""
        alt={this.props.alt} />
    } else {
      image = <img
        src={this.props.src}
        alt={this.props.alt} />
    }

    return <Pp c="chapterImage">{image}</Pp>
  }
}
