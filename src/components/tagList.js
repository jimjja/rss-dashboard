import React from "react";
import PropTypes from "prop-types";

//Components
import FeedTag from "./feedTag";

const TagList = ({
  feedTags,
  handleDeleteFeed,
  handleSelectFeed,
  handleUpdateFeed,
  selectedFeed
}) => (
  <div>
    {feedTags.map(ft => (
      <FeedTag
        {...ft}
        isSelected={selectedFeed && selectedFeed.id === ft.id}
        onFeedDelete={handleDeleteFeed}
        onFeedClick={handleSelectFeed}
        onFeedUpdate={handleUpdateFeed}
      />
    ))}
  </div>
);

TagList.propTypes = {
  feedTags: PropTypes.arrayOf(PropTypes.node).isRequired,
  handleDeleteFeed: PropTypes.func,
  handleSelectFeed: PropTypes.func,
  handleUpdateFeed: PropTypes.func,
  selectedFeed: PropTypes.shape({
    id: PropTypes.number
  })
};

TagList.defaultProps = {
  handleDeleteFeed: null,
  handleSelectFeed: null,
  handleUpdateFeed: null,
  selectedFeed: null
};
export default TagList;
