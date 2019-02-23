import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import { DELETE_RSS_FEED, ADD_FEED_TAG, UPDATE_FEED_TAG } from './actionTypes';
import { saveRssFeed, deleteRssFeed, updateRssFeed } from '../services/rssFeedStorageSrv';

const persistToStorage = store => next => (action) => {
  switch (action.type) {
    case DELETE_RSS_FEED: {
      deleteRssFeed(action.tagId);
      break;
    }
    case UPDATE_FEED_TAG: {
      const { tagId, newName } = action;
      updateRssFeed({ tagId, newName });
      break;
    }
    case ADD_FEED_TAG: {
      const { name, url, id } = action;
      saveRssFeed({ id, name, url });
      break;
    }
    default:
      break;
  }
  return next(action);
};

export default (preloadedState) => {
  const middlewares = [thunkMiddleware, persistToStorage];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(reducer, preloadedState, composedEnhancers);

  return store;
};
