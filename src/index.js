import React from 'react'
import { render } from 'react-dom'
import App from './App'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Root = () => (
  <Router>
    <div>
      <Route path="/" component={App} />
    </div>
  </Router>
)

render(<Root />, document.getElementById('root'))
