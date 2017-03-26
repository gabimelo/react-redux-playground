import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const API_KEY = 'AIzaSyCAm_vQV6y6ANh4f9MdeCR4EwX-yE6l_tI';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  // </Provider>
  , document.querySelector('.container'));
