import React from 'react';
import ReacDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducer';
import App from './app';
import {ListContainer} from './components/list';

const store = createStore(reducer);

store.dispatch({
  type: 'SET_STATE'
});

const routes = (
  <Route component={App}>
    <Route path='/' component={ListContainer} />
  </Route>
);

ReacDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
