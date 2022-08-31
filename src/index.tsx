import React from 'react';
import ReactDOM from 'react-dom';

import {createServer} from 'miragejs'

import { App }from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 'Transaction 1',
          title: 400,
          type: 'deposit',
          category:'Foot',
          createdAT: new Date()
        }
      ]
    })
  }
})

  ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),

)


