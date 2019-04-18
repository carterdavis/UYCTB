import React from 'react';
import { connect } from 'react-redux'; /* code change */

import ToC from './components/ToC.jsx';
import Screen from './components/Screen.jsx';
import Cover from './components/Cover.jsx';
import Navbar from './components/Navbar.jsx';
import { getChapters, getAllChapters, toggleVisibilityToC, setDimensions } from './state.js';
import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.resizeTimer = null;
  }

  componentDidMount() {
    window.addEventListener("resize", this.waitToResize);
  }

  waitToResize() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(setDimensions(), 500);
  }

  render() {
    return (
      <div id="main">
        <Navbar toc={this.props.state.visibleToC} />
        <Cover toc={this.props.state.visibleToC} />
        <img id="o" src="o.png" />
        <ToC toggle={toggleVisibilityToC} visible={this.props.state.visibleToC} />
        <div id="content" tabIndex="0">
          { getChapters(this.props.state) }
        </div>
        <Screen screenValue={this.props.state.viewScreen} state={this.props.state} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(App);
