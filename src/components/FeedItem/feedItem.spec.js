import React from 'react';
import renderer from 'react-test-renderer';
import FeedItem from './feedItem';

describe('Feed Item component', () => {
  it('should match snapshot', () => {
    const now = new Date();
    const props = {
      pubDate: now.toString(),
      link: 'http://google.co.uk',
      content: '<h1>I am HTML in string </h1>',
      author: 'Example author',
      title: 'Example title',
    };
    const tree = renderer.create(<FeedItem {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should not render author when no value', () => {
    const now = new Date();
    const props = {
      pubDate: now.toString(),
      link: 'http://google.co.uk',
      content: '<h1>I am HTML in string </h1>',
      title: 'Example title',
    };
    const tree = renderer.create(<FeedItem {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should not render publish date when no value', () => {
    const props = {
      link: 'http://google.co.uk',
      content: '<h1>I am HTML in string </h1>',
      title: 'Example title',
    };
    const tree = renderer.create(<FeedItem {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
