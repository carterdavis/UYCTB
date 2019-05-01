import React from 'react';

export default class Pp extends React.PureComponent {
  render() {
    const bg = this.props.bg || '#FFF, #FFF';
    const z = this.props.z || false;
    const n = this.props.n || false;

    const grad = z ? { background: bg } : { background: `linear-gradient(${bg})` };
    const cssGrad = n ? {} : grad;

    return (
      <div class={`paragraph ${this.props.c || ''}`} style={cssGrad}>
        <div class={`inner ${this.props.innerClass || ''}`}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
