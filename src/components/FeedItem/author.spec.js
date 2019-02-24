import React from 'react';
import renderer from 'react-test-renderer';
import Author from './author';

describe('Author component', () => {
  it('should match snapshot', () => {
    const props = {
      author: 'Example author',
    };
    const tree = renderer.create(<Author {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
