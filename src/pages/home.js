import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import {
  selectRssFeedTag,
  addNewRssFeedDetails,
  addErrorMessgae,
  dismissErrorMessage,
  deleteFeedTag,
  updateFeedTag,
  fetchFeed
} from "../state/actions";

//Components
import FeedList from "../components/feedList";
import TagList from "../components/tagList";

const HomePage = props => {
  const {
    selectedFeed,
    handleSelectRssFeedTag,
    handleNewRssFeed,
    handleGetRssFeed,
    rssFeed,
    isLoadingFeed
  } = props;

  const [feedUrl, setFeedUrl] = useState("");
  useEffect(() => {
    if (selectedFeed) {
      handleGetRssFeed(selectedFeed.url);
    }
  }, [selectedFeed]);

  function handleSelectFeed(tagId) {
    if (tagId === selectedFeed.id) {
      return;
    }
    handleSelectRssFeedTag(tagId);
  }

  function handleFeedUrlChange(evt) {
    const {
      target: { value }
    } = evt;
    setFeedUrl(value);
  }

  function handleAddRssFeed() {
    handleNewRssFeed(feedUrl);
  }

  return (
    <Layout>
      <div>
        <div>
          {props.feedTags && (
            <TagList
              selectedFeed={props.selectedFeed}
              handleDeleteFeed={props.handleDeleteFeedTag}
              handleUpdateFeed={props.handleUpdateFeedTag}
              handleSelectFeed={handleSelectFeed}
              feedTags={props.feedTags}
            />
          )}
        </div>
        <p>
          Error message:
          {props.errorMessage}
        </p>
        <input
          type="text"
          value={feedUrl}
          onChange={handleFeedUrlChange}
          placeholder="URL Link"
        />
        <button type="button" onClick={handleAddRssFeed}>
          Add Feed
        </button>
      </div>
      <div>
        {isLoadingFeed ? (
          <div>Loading...</div>
        ) : (
          rssFeed && <FeedList {...rssFeed} />
        )}
      </div>
    </Layout>
  );
};

const mapStateToProps = ({
  rssFeed,
  feedTags,
  errorMessage,
  selectedFeed,
  isLoadingFeed
}) => ({
  rssFeed,
  errorMessage,
  feedTags,
  selectedFeed,
  isLoadingFeed
});

const mapDispatchToProps = dispatch => ({
  handleNewRssFeed: urlLink => {
    dispatch(addNewRssFeedDetails(urlLink));
  },
  handleSelectRssFeedTag: tagId => {
    dispatch(selectRssFeedTag(tagId));
  },
  handleErrorMsg: errorMessage => {
    dispatch(addErrorMessgae(errorMessage));
  },
  handleRemoveErrorMsg: () => {
    dispatch(dismissErrorMessage());
  },
  handleDeleteFeedTag: tagId => {
    dispatch(deleteFeedTag(tagId));
  },
  handleUpdateFeedTag: (tagId, newName) => {
    dispatch(updateFeedTag(tagId, newName));
  },
  handleGetRssFeed: urlLink => {
    dispatch(fetchFeed(urlLink));
  }
});

HomePage.propTypes = {
  selectedFeed: PropTypes.node,
  handleSelectRssFeedTag: PropTypes.func,
  handleNewRssFeed: PropTypes.func,
  handleGetRssFeed: PropTypes.func,
  rssFeed: PropTypes.node,
  isLoadingFeed: PropTypes.bool
};

HomePage.defaultProps = {
  selectedFeed: null,
  handleSelectRssFeedTag: null,
  handleNewRssFeed: null,
  handleGetRssFeed: null,
  rssFeed: null,
  isLoadingFeed: null
};

const Connector = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export { Connector as default, HomePage };
