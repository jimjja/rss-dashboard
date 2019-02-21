import React from "react";
import PropTypes from "prop-types";

const titleStyle = {
  border: "1px solid #ebedf0",
  borderTop: 0,
  borderRight: 0,
  borderLeft: 0
};

const FeedTitle = ({ title }) => (
  <div style={titleStyle}>
    <h2>{title}</h2>
  </div>
);

FeedTitle.propTypes = {
  title: PropTypes.string.isRequired
};
export default FeedTitle;
