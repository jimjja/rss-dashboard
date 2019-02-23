import {
  SELECT_RSS_FEED,
  ADD_ERROR_MESSAGE,
  DISMISS_ERROR_MESSAGE,
  SELECT_RSS_FEED_TAG,
  TOGGLE_IS_LOADING_FEED,
  DELETE_RSS_FEED,
  UPDATE_FEED_TAG,
  ADD_FEED_TAG,
} from './actionTypes';
import initialState from './initialState';

const addErrorMessage = (state, action) => {
  const { errorMessage } = action;
  const { rssFeed } = state;
  return Object.assign({}, state, {
    errorMessage,
    rssFeed: errorMessage && errorMessage.length === 0 ? null : rssFeed,
  });
};

const dismissErrorMessage = state => Object.assign({}, state, {
  errorMessage: '',
});

const toggleIsLoading = (state, action) => {
  const { isLoading } = action;
  const { isLoadingFeed } = state;
  return Object.assign({}, state, {
    isLoadingFeed: isLoading === undefined ? !isLoadingFeed : isLoading,
  });
};

const selectRssFeed = (state, action) => {
  const { rssFeed } = action;
  return Object.assign({}, state, {
    rssFeed,
    errorMessage: '',
  });
};

const selectRssFeedTag = (state, action) => {
  const { tagId } = action;
  const { feedTags } = state;
  const selectedIndex = feedTags.findIndex(ft => ft.id === tagId);
  return Object.assign({}, state, {
    selectedFeed: feedTags[selectedIndex],
  });
};

const deleteRssFeed = (state, action) => {
  const { tagId } = action;
  const { selectedFeed, feedTags } = state;
  const remainingTags = feedTags.filter(tag => tag.id !== tagId);
  return {
    ...state,
    feedTags: remainingTags,
    rssFeed: remainingTags.length === 0 ? null : state.rssFeed,
    selectedFeed: (selectedFeed.id === tagId && remainingTags[0]) || selectedFeed,
  };
};

const updateFeedTag = (state, action) => {
  const { tagId, newName } = action;
  const { feedTags } = state;
  const feedIndex = feedTags.findIndex(f => f.id === tagId);
  const feeds = [...feedTags];
  if (feedIndex > -1) {
    const newFeedDetails = {
      ...feeds[feedIndex],
      name: newName,
    };
    feeds.splice(feedIndex, 1, newFeedDetails);
  }
  return {
    ...state,
    feedTags: feeds,
  };
};

const addFeedTag = (state, action) => {
  const { id, name, url } = action;
  const { feedTags } = state;
  const updatedTags = [...feedTags];
  const newTag = {
    id,
    name,
    url,
  };
  updatedTags.push(newTag);
  return {
    ...state,
    feedTags: updatedTags,
    selectedFeed: newTag,
  };
};

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
    case TOGGLE_IS_LOADING_FEED:
      return toggleIsLoading(state, action);
    case DELETE_RSS_FEED:
      return deleteRssFeed(state, action);
    case UPDATE_FEED_TAG:
      return updateFeedTag(state, action);
    case ADD_FEED_TAG:
      return addFeedTag(state, action);
    default:
      return state;
  }
};

export default reducer;
