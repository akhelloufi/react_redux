import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'

import reducer from './Counter/CounterStore';
import {legacy_createStore as createStore} from 'redux'
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store=createStore(reducer,
  composeWithDevTools(applyMiddleware(thunk))
 )

  root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);



