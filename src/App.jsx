import React from 'react';
import { connect } from 'react-redux'; /* code change */

import ToC from './components/ToC.jsx';
import Screen from './components/Screen.jsx';
import { getChapters } from './state.js';
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>UNTIL YOU CONTINUE TO BEHAVE</h1>
        <div id="o">O</div>
        <ToC />
        { getChapters(this.props.state) }
        <Screen screenValue={this.props.state.viewScreen} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(App);
