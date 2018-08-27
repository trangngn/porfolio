import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'

import App from './App'
import { store, history } from "./store"

ReactDOM.render(
	<div>
	  <Provider store={store}>
	    <Router history={history}>
	      <App />
	    </Router>
	  </Provider>
	</div>,
	document.getElementById('root')
)