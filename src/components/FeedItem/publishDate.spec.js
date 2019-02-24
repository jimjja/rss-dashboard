import React from 'react';
import renderer from 'react-test-renderer';
import PubDate from './publishDate';

describe('Publish date component', () => {
  it('should match snapshot', () => {
    const now = new Date();
    const props = {
      pubDate: now.toString(),
    };
    const tree = renderer.create(<PubDate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
