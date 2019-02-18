import {
  SELECT_RSS_FEED,
  ADD_ERROR_MESSAGE,
  DISMISS_ERROR_MESSAGE,
  ADD_NEW_RSS_FEED_DETAILS,
  UPDATE_RSS_FEEDS,
  SELECT_RSS_FEED_TAG,
  TOGGLE_IS_LOADING_FEED
} from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_RSS_FEED_TAG:
      return selectRssFeedTag(state, action);
    case SELECT_RSS_FEED:
      return selectRssFeed(state, action);
    case ADD_ERROR_MESSAGE:
      return addErrorMessage(state, action);
    case DISMISS_ERROR_MESSAGE:
      return dismissErrorMessage(state);
    case UPDATE_RSS_FEEDS:
      return updateFeedTags(state, action);
    case TOGGLE_IS_LOADING_FEED:
      return toggleIsLoading(state, action);
    default:
      return state;
  }
};

const addErrorMessage = (state, action) => {
  const { errorMessage } = action;
  const { rssFeed } = state;
  return Object.assign({}, state, {
    errorMessage: errorMessage,
    rssFeed: errorMessage && errorMessage.length === 0 ? null : rssFeed
  });
};

const dismissErrorMessage = state => {
  return Object.assign({}, state, {
    errorMessage: ""
  });
};

const toggleIsLoading = (state, action) => {
  const { isLoading } = action;
  const { isLoadingFeed } = state;
  return Object.assign({}, state, {
    isLoadingFeed: isLoading === undefined ? !isLoadingFeed : isLoading
  });
};

const selectRssFeed = (state, action) => {
  const { rssFeed } = action;
  return Object.assign({}, state, {
    rssFeed,
    errorMessage: ""
  });
};

const selectRssFeedTag = (state, action) => {
  const { tagId } = action;
  const { feedTags } = state;
  const selectedIndex = feedTags.findIndex(ft => ft.id === tagId);
  return Object.assign({}, state, {
    selectedFeed: feedTags[selectedIndex]
  });
};

const updateFeedTags = (state, action) => {
  return Object.assign({}, state, {
    feedTags: action.feedTags
  });
};

export default reducer;
