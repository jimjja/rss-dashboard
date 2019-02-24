import initState from './initialState';
import reducer from './reducer';
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

describe('Reducers', () => {
  describe('ADD_ERROR_MESSAGE', () => {
    it('add errorMessage', () => {
      // Prep
      const action = {
        type: ADD_ERROR_MESSAGE,
        errorMessage: 'Text error message',
      };
      // Act
      const res = reducer(initState, action);
      // Assert
      expect(res.errorMessage).toEqual(action.errorMessage);
    });

    it('should reset rssFeed when error message', () => {
      const currState = {
        ...initState,
        rssFeed: 'Something something',
      };
      // Prep
      const action = {
        type: ADD_ERROR_MESSAGE,
        errorMessage: 'Text error message',
      };
      // Act
      const res = reducer(currState, action);
      // Assert
      expect(res.rssFeed === null).toBe(true);
    });
  });

  describe('TOGGLE_IS_LOADING_FEED', () => {
    it('should toggle loading when undefined', () => {
      const action = {
        type: TOGGLE_IS_LOADING_FEED,
      };

      // Act
      const res = reducer(initState, action);

      // Assert
      expect(res.isLoadingFeed).toEqual(true);
    });

    it('should set loading value when value is specified', () => {
      const action = {
        type: TOGGLE_IS_LOADING_FEED,
        isLoading: true,
      };

      // Act
      const res = reducer(initState, action);

      // Assert
      expect(res.isLoadingFeed).toEqual(true);
    });

    it('should set loading value to when specified value is false', () => {
      const currState = {
        ...initState,
        isLoadingFeed: true,
      };
      const action = {
        type: TOGGLE_IS_LOADING_FEED,
        isLoading: false,
      };

      // Act
      const res = reducer(currState, action);

      // Assert
      expect(res.isLoadingFeed === false).toBe(true);
    });
  });

  describe('SELECT_RSS_FEED', () => {
    it('should set rssFeed', () => {
      const action = {
        type: SELECT_RSS_FEED,
        rssFeed: 'Example feed value',
      };

      // Act
      const res = reducer(initState, action);

      // Assert
      expect(res.rssFeed).toEqual(action.rssFeed);
    });

    it('should set reset errorMessage', () => {
      const currState = {
        ...initState,
        errorMessage: 'Some error message',
      };
      const action = {
        type: SELECT_RSS_FEED,
        rssFeed: 'Example feed value',
      };

      // Act
      const res = reducer(currState, action);

      // Assert
      expect(res.errorMessage).toEqual('');
    });
  });

  describe('ADD_FEED_TAG', () => {
    it('should add new feed tag', () => {
      // Prepare
      const feedTag = {
        id: 1,
        name: 'Feed tag name',
        url: 'http://google.co.uk',
      };
      const action = {
        type: ADD_FEED_TAG,
        ...feedTag,
      };

      // Act
      const res = reducer(initState, action);

      // Assert
      const tag = res.feedTags[0];
      expect(res.feedTags.length).toEqual(1);
      expect(tag).toEqual(feedTag);
    });

    it('should select the new tag', () => {
      // Prepare
      const feedTag = {
        id: 1,
        name: 'Feed tag name',
        url: 'http://google.co.uk',
      };
      const action = {
        type: ADD_FEED_TAG,
        ...feedTag,
      };

      // Act
      const res = reducer(initState, action);

      // Assert
      expect(res.selectedFeed).toEqual(feedTag);
    });
  });

  describe('SELECT_RSS_FEED_TAG', () => {
    it('should select selected tag', () => {
      const feedTags = [1, 2].map(n => ({
        id: n,
        name: `Tag ${n}`,
        url: `url link ${n}`,
      }));
      const currState = {
        ...initState,
        feedTags,
      };

      const action = {
        type: SELECT_RSS_FEED_TAG,
        tagId: 1,
      };

      // Act
      const res = reducer(currState, action);

      // Assert
      expect(res.selectedFeed).toEqual(feedTags[0]);
    });
  });

  describe('DELETE_RSS_FEED', () => {
    it('should delete selected tag', () => {
      const feedTags = [1, 2].map(n => ({
        id: n,
        name: `Tag ${n}`,
        url: `url link ${n}`,
      }));
      const currState = {
        ...initState,
        selectedFeed: feedTags[0],
        feedTags,
      };

      const action = {
        type: DELETE_RSS_FEED,
        tagId: 1,
      };

      // Act
      const res = reducer(currState, action);

      // Assert
      expect(res.feedTags.length).toEqual(1);
      expect(res.feedTags.filter(t => t.id === action.tagId).length).toEqual(0);
    });

    it('should remove rss feed where there are no more tags', () => {
      const feedTags = [1].map(n => ({
        id: n,
        name: `Tag ${n}`,
        url: `url link ${n}`,
      }));
      const currState = {
        ...initState,
        selectedFeed: feedTags[0],
        feedTags,
      };

      const action = {
        type: DELETE_RSS_FEED,
        tagId: 1,
      };

      // Act
      const res = reducer(currState, action);

      // Assert
      expect(res.feedTags.length).toEqual(0);
    });

    it('should select first tag when the tag for deletion is the currently selected one', () => {
      const feedTags = [1, 2].map(n => ({
        id: n,
        name: `Tag ${n}`,
        url: `url link ${n}`,
      }));
      const currState = {
        ...initState,
        selectedFeed: feedTags[0],
        feedTags,
      };

      const action = {
        type: DELETE_RSS_FEED,
        tagId: 1,
      };

      // Act
      const res = reducer(currState, action);

      // Assert
      expect(res.feedTags[0].id).toEqual(2);
    });
  });

  describe('UPDATE_FEED_TAG', () => {
    it('should change the name of the updated tag', () => {
      const feedTags = [1, 2].map(n => ({
        id: n,
        name: `Tag ${n}`,
        url: `url link ${n}`,
      }));
      const currState = {
        ...initState,
        feedTags,
      };

      const action = {
        type: UPDATE_FEED_TAG,
        tagId: 1,
        newName: 'My new tag name',
      };

      // Act
      const res = reducer(currState, action);

      // Assert
      expect(res.feedTags[0].name).toEqual(action.newName);
    });

    it("should  not change the name of a feed tag if it doesn't exist", () => {
      const feedTags = [1, 2].map(n => ({
        id: n,
        name: `Tag ${n}`,
        url: `url link ${n}`,
      }));
      const currState = {
        ...initState,
        feedTags,
      };

      const action = {
        type: UPDATE_FEED_TAG,
        tagId: 3,
        newName: 'My new tag name',
      };

      // Act
      const res = reducer(currState, action);

      // Assert
      expect(res.feedTags.filter(t => t.name === action.newName).length).toEqual(0);
    });
  });
});
