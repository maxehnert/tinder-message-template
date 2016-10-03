import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect, hashHistory } from 'react-router'

// import App from './components/App';
// import Home from './components/Home';
import { App, Home } from './components/index'

import 'bootstrap/dist/css/bootstrap.css'
import './css/index.css';

/**
 * Don't technically need the router yet so I'm leavinig it disabled because it's
 * making deployment to gh-pages more difficult.
*/
// render((
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Home} />
//     </Route>
//   </Router>
// ),document.getElementById('root'));

render((
  <Home />
), document.getElementById('root'))
