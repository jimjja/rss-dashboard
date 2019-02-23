import React from 'react';
import PropTypes from 'prop-types';
import FeedItem from './FeedItem';
import FeedTitle from './feedTitle';
import FeedItemType from '../types/feedItem';

const listStyle = {
  border: '1px solid #ebedf0',
  borderRadius: 2,
  width: '100%',
  position: 'relative',
  padding: '20px',
};

const noItemsMsgStyle = {};
const FeedList = ({ items, ...props }) => (
  <div style={listStyle}>
    <FeedTitle {...props} />
    {items.length === 0 ? (
      <div style={noItemsMsgStyle}>No Items found</div>
    ) : (
      items.map(item => <FeedItem key={item.title} {...item} />)
    )}
  </div>
);

FeedList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(FeedItemType)).isRequired,
};

export default FeedList;
