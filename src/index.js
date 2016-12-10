import * as reducers from './reducers/index';
import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import { Router, hashHistory, Route } from 'react-router';
import thunk from 'redux-thunk';
import App from './App';
import './css/index.css';
import { refreshOperationSymbol, refreshOperandLeft, refreshOperandRight } from './actions/index';
import AddContainer from './components/AddContainer';
import HomeContainer from './components/HomeContainer';

const reducer = combineReducers(reducers);
const middleware = routerMiddleware(hashHistory);
const createStoreWithMiddleware = applyMiddleware(thunk, middleware)(createStore);

const store = createStoreWithMiddleware(reducer, compose(
  window.devToolsExtension && process.env.NODE_ENV !== 'production'
    ? window.devToolsExtension()
    : f => f
));

const history = syncHistoryWithStore(hashHistory, store);

const dispatchAdditionOperation = () => {
  store.dispatch(refreshOperationSymbol('+'));
  store.dispatch(refreshOperandLeft());
  store.dispatch(refreshOperandRight())
};

const routes =
  <Route path="" component={App}>
    <Route path="/" component={HomeContainer}/>
    <Route path="/add" onEnter={dispatchAdditionOperation} component={AddContainer}/>
  </Route>;

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
