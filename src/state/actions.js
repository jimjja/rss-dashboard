import {
  SELECT_RSS_FEED_TAG,
  ADD_ERROR_MESSAGE,
  DISMISS_ERROR_MESSAGE,
  SELECT_RSS_FEED,
  TOGGLE_IS_LOADING_FEED,
  DELETE_RSS_FEED,
  UPDATE_FEED_TAG,
  ADD_FEED_TAG,
} from './actionTypes';
import { generateFeedTag, parseFeed } from './reducerHelpers';

const selectFeedTag = tagId => ({ type: SELECT_RSS_FEED_TAG, tagId });

const addFeedTag = ({ id, name, url }) => ({
  type: ADD_FEED_TAG,
  id,
  name,
  url,
});

const toggleIsLoadingFeed = isLoading => ({
  type: TOGGLE_IS_LOADING_FEED,
  isLoading,
});

export const selectRssFeed = rssFeed => ({ type: SELECT_RSS_FEED, rssFeed });

export const selectRssFeedTag = tagId => selectFeedTag(tagId);

export const addErrorMessgae = errorMessage => ({
  type: ADD_ERROR_MESSAGE,
  errorMessage,
});

export const dismissErrorMessage = () => ({ type: DISMISS_ERROR_MESSAGE });

export const deleteFeedTag = tagId => ({
  type: DELETE_RSS_FEED,
  tagId,
});

export const updateFeedTag = (tagId, newName) => ({
  type: UPDATE_FEED_TAG,
  tagId,
  newName,
});

export const fetchFeed = feedUrl => (dispatch) => {
  dispatch(toggleIsLoadingFeed(true));
  parseFeed(feedUrl)
    .then((feed) => {
      dispatch(toggleIsLoadingFeed(false));
      dispatch(selectRssFeed(feed));
    })
    .catch((error) => {
      dispatch(toggleIsLoadingFeed(false));
      return dispatch(addErrorMessgae(error));
    });
};

export const addNewRssFeedDetails = urlLink => (dispatch) => {
  dispatch(toggleIsLoadingFeed(true));
  parseFeed(urlLink)
    .then((feed) => {
      dispatch(toggleIsLoadingFeed(false));
      dispatch(selectRssFeed(feed));
      const feedTag = generateFeedTag(feed.title, urlLink);
      return dispatch(addFeedTag(feedTag));
    })
    .catch((error) => {
      dispatch(toggleIsLoadingFeed(false));
      dispatch(addErrorMessgae(error));
    });
};
