import React from 'react';
import renderer from 'react-test-renderer';
import FeedList from './feedList';

describe('Feed List component', () => {
  it('should match snapshot', () => {
    const now = new Date();
    const props = {
      title: 'My feed title',
      items: [
        {
          pubDate: now.toString(),
          link: 'http://google.co.uk',
          content: '<h1>I am HTML in string </h1>',
          title: 'Example title',
        },
        {
          pubDate: now.toString(),
          link: 'http://youtube.com',
          content: 'I am text content',
          title: 'RSS Item title',
        },
      ],
    };
    const tree = renderer.create(<FeedList {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render items not found message when no items are passed ', () => {
    const props = {
      title: 'My feed title',
      items: [],
    };
    const tree = renderer.create(<FeedList {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
