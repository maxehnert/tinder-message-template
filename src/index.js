import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, browserHistory, IndexRoute, IndexRedirect, hashHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import { App } from './components/index'

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

const store = createStore(reducer)

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))
