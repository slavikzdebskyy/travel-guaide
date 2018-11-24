import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import AppComponent from './components/app.component';
import store from './redux/create.store.js';

import './index.scss';

ReactDOM.render( 
  <Provider store = {store}>  
    <AppComponent />
  </Provider>
   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
