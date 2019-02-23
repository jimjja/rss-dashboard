import React from 'react';
import PropTypes from 'prop-types';

const datePublishedStyle = {
  margin: 0,
  display: 'inline-block',
  fontSize: 12,
};

const PublishDate = ({ pubDate }) => (
  <p style={datePublishedStyle}>
    {`${new Date(pubDate).toLocaleDateString()}`}
  </p>
);

PublishDate.propTypes = {
  pubDate: PropTypes.string.isRequired,
};
export default PublishDate;
