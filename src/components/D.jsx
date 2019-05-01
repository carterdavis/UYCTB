import React from 'react';
import Fade from 'react-reveal/Fade';

import Pp from './Pp.jsx';
import DripButtons from './DripButtons.jsx';

export default class D extends React.PureComponent {
  render() {
    return (
      <Pp c="drip" n>
        <p>
          <Fade delay={this.props.d} collapse={false} top><div class="drip-body">{this.props.children}<DripButtons counter={this.props.c} quantity={this.props.q} thumb={this.props.t} flip={this.props.f}/></div></Fade>
        </p>
      </Pp>
    )
  }
}
