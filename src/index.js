import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router'

// import App from './components/App';
// import Home from './components/Home';
import { App, Home } from './components/index'

import 'bootstrap/dist/css/bootstrap.css'
import './css/index.css';


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
),document.getElementById('root'));
