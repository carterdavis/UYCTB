import React from 'react';
import ClickOutside from 'react-click-outside'

class Snip extends React.Component {
  constructor(props) {
      super(props);
      this.state = { open: false };
  }

  handleClickOutside() {
    if (this.state.open) {
      this.toggle();
    }
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

   render() {
     const colors = this.props.bg.split(', ');

     return (
      <span class="snippet-wrapper">
        <a class="snippet-link" onClick={() => { this.toggle() }} style={{backgroundImage: `linear-gradient(120deg, ${this.props.bg})`}}>
          { this.props.label }
        </a>
        <span class="snippet" style={{ display: this.state.open ? 'block' : 'none', borderColor: colors[0] }}>
          <span class="snippet-header" style={{ borderColor: colors[1] }}>
            TID BIT
          </span>
          { this.props.children }
        </span>
      </span>
    )
  }
}

export default ClickOutside(Snip);
