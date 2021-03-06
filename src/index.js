import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import App from './containers/App.js';

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
     
      <App />
    </Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
