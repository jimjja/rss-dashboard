import RSSParser from 'rss-parser';
import {
  SELECT_RSS_FEED_TAG,
  ADD_ERROR_MESSAGE,
  DISMISS_ERROR_MESSAGE,
  SELECT_RSS_FEED,
  UPDATE_RSS_FEEDS,
  TOGGLE_IS_LOADING_FEED,
} from './actionTypes';

import {
  saveRssFeed,
  deleteRssFeed,
  updateRssFeed,
} from '../services/rssFeedStorageSrv';

const rssParser = new RSSParser();

const parseFeed = (feedUrl) => {
  let url = feedUrl;
  // Add proxy when working in development to resolve CORS issues
  if (process.env.NODE_ENV !== 'development') {
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    url = `${CORS_PROXY}${feedUrl}`;
  }

  return new Promise((resolve, reject) => rssParser.parseURL(url, (error, feed) => {
    if (error) {
      const message = error.message || 'Unexpected error occurred';
      return reject(message);
    }
    return resolve(feed);
  }));
};

const generateTagFeed = (title, urlLink) => ({
  id: new Date().getTime(),
  url: urlLink,
  name: title || urlLink,
});

const selectFeedTag = tagId => ({ type: SELECT_RSS_FEED_TAG, tagId });

const toggleIsLoadingFeed = isLoading => ({
  type: TOGGLE_IS_LOADING_FEED,
  isLoading,
});

const updateRssFeeds = feedTags => ({ type: UPDATE_RSS_FEEDS, feedTags });

export const selectRssFeed = rssFeed => ({ type: SELECT_RSS_FEED, rssFeed });

export const selectRssFeedTag = tagId => selectFeedTag(tagId);

export const addErrorMessgae = errorMessage => ({
  type: ADD_ERROR_MESSAGE,
  errorMessage,
});

export const dismissErrorMessage = () => ({ type: DISMISS_ERROR_MESSAGE });

export const deleteFeedTag = (tagId) => {
  const remainingTags = deleteRssFeed(tagId);
  return updateRssFeeds(remainingTags);
};

export const updateFeedTag = (tagId, newName) => {
  const remainingTags = updateRssFeed({ tagId, newName });
  return updateRssFeeds(remainingTags);
};

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
      const feedTag = generateTagFeed(feed.title, urlLink);
      const feedTags = saveRssFeed(feedTag);
      dispatch(updateRssFeeds(feedTags));
      return dispatch(selectFeedTag(feedTag.id));
    })
    .catch((error) => {
      dispatch(toggleIsLoadingFeed(false));
      dispatch(addErrorMessgae(error));
    });
};
