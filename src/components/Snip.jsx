import React from 'react';
import ClickOutside from 'react-click-outside'

class Snip extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setWrapperRef = element => {
      this.wrapper = element;
    };
    this.state = { open: false, left: 0 };
  }

  handleClickOutside() {
    if (this.state.open) {
      this.toggle();
    }
  }

  componentDidMount() {
    this.setLeft()
    setTimeout(() => this.setLeft(), 500);
  }

  componentDidUpdate(prevProps) {
    if (this.props.state.screenWidth !== prevProps.state.screenWidth) {
      this.setLeft();
    }
  }

  setLeft() {
    const box = this.wrapper.getBoundingClientRect();
    this.setState({ left: box.left });
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

   render() {
     const colors = this.props.bg.split(', ');
     const open = this.state.open ? 'open' : '';
     const leftStyle = this.state.open ? '50%' : `${this.state.left}px`;

     return (
      <div class="snippet-wrapper" ref={this.setWrapperRef}>
        <div class={`snippet ${open}`} onClick={() => { this.toggle() }} style={{ borderColor: colors[0], left: leftStyle }}>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default ClickOutside(Snip);
