import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'
import App from './App'

import { store } from './store'
import * as serviceWorker from './serviceWorker'

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

serviceWorker.register()
