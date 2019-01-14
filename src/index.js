import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; /* code change */

import store from './redux/store.js';
import App from './App.jsx';

require('preact/debug');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, /* code change */
  document.getElementById('app')
);

history.scrollRestoration = "manual";
