import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import server from './services/server'

server();

ReactDOM.render(
  <Router>
    <Provider store= {store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
