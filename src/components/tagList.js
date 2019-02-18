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
        isSelected={selectedFeed.id === ft.id}
        onFeedDelete={handleDeleteFeed}
        onFeedClick={handleSelectFeed}
        onFeedUpdate={handleUpdateFeed}
      />
    ))}
  </div>
);

export default TagList;
