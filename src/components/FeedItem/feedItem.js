import React from 'react';

// Components
import Author from './author';
import PublishDate from './publishDate';

// Types
import FeedItemType from '../../types/feedItem';

const titleStyle = {
  fontSize: 18,
  fontWeight: 'bold',
  textDecoration: 'none',
  color: '#000000a6',
};

const wrapperStyle = {
  border: '1px solid #ebedf0',
  borderRight: 0,
  borderLeft: 0,
  borderTop: 0,
  padding: '15px',
  color: '#000000a6',
};
const htmlContentStyle = { margin: '1em 0', fontSize: 12 };

const authorStyle = {
  margin: 0,
};

const FeedItem = (props) => {
  const {
    link, title, pubDate, author, content,
  } = props;
  return (
    <div style={wrapperStyle}>
      <a style={titleStyle} href={link}>
        {title}
      </a>
      <div style={authorStyle}>
        {author && <Author author={author} />}
        {pubDate && <PublishDate pubDate={pubDate} />}
      </div>
      <div style={htmlContentStyle} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

FeedItem.propTypes = FeedItemType;

FeedItem.defaultProps = {
  link: '',
  content: '',
  author: null,
  pubDate: null,
};

export default FeedItem;
