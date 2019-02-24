import React from 'react';

class DripButtons extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { thumbClicked: false, flipClicked: false  };
  }

  click(target) {
    this.setState({ [`${target}Clicked`]: !this.state[`${target}Clicked`] });
  }

  render() {
    const tIncrement = this.state.thumbClicked ? 1 : 0;
    const fIncrement = this.state.flipClicked ? 1 : 0;
    const thumbs = (this.props.thumb + (this.props.quantity * this.props.counter) + tIncrement).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const flips = Math.floor(this.props.flip + ((this.props.quantity * this.props.counter) / 3) + fIncrement).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
      <div>
        <button class={`dripButton ${this.state.thumbClicked ? 'clicked' : ''}`} onClick={() => this.click("thumb")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M24 24H0V0h24v24z"/><path class="icon thumb" d="M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"/></svg>
           <span class="dripButtonText">{ thumbs }</span>
        </button>
        <button class={`dripButton ${this.state.flipClicked ? 'clicked' : ''}`} onClick={() => this.click("flip")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="icon flip" d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
           <span class="dripButtonText">{ flips }</span>
        </button>
      </div>
    )
  }
}

export default DripButtons;
