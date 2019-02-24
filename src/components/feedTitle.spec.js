import React from 'react';
import renderer from 'react-test-renderer';
import FeedTitle from './feedTitle';

describe('Feed Title component', () => {
  it('should match snapshot', () => {
    const props = {
      title: 'Example title',
    };
    const tree = renderer.create(<FeedTitle {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
