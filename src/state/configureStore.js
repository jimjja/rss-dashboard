import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

export default (preloadedState) => {
  const middlewares = [thunkMiddleware];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(reducer, preloadedState, composedEnhancers);

  return store;
};
