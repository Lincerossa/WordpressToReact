import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import Root from './components/Root.js'
import { COUNTER__INCREMENT } from './constants';
import {
  counterDecrement,
  counterIncrement,
} from './actions';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe( () => console.log(store.getState().counter));

store.dispatch(counterIncrement(store.getState().counter));
store.dispatch(counterIncrement(store.getState().counter));
store.dispatch(counterIncrement(store.getState().counter));
store.dispatch(counterIncrement(store.getState().counter));
store.dispatch(counterIncrement(store.getState().counter));
store.dispatch(counterDecrement(store.getState().counter));

const renderApp = (PROPS, GENERALS) => {
    ReactDOM.hydrate((
      <Provider store={store}>
        <Router>
          <Root data={PROPS} generals={GENERALS} />
        </Router>
      </Provider>
    ), document.getElementById('app'))
}

window.addEventListener('DOMContentLoaded', renderApp(PROPS, GENERALS), false)