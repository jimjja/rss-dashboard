import React from 'react';
import PropTypes from 'prop-types';

const authorStyle = {
  margin: '0 .5em 0 0',
  display: 'inline-block',
  fontWeight: 'normal',
};

const Author = ({ author }) => <h4 style={authorStyle}>{author}</h4>;

Author.propTypes = {
  author: PropTypes.string.isRequired,
};
export default Author;
