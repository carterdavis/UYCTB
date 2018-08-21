import React from 'react';
import { connect } from 'react-redux'; /* code change */

import { getChapters, getTOC } from './state.js';
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>UNTIL YOU CONTINUE TO BEHAVE</h1>
        <div id="o">O</div>
        { getTOC() }
        { getChapters(this.props.state) }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(App);
