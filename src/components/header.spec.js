import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header';

describe('Header component', () => {
  it('should match snapshot', () => {
    const props = {
      siteTitle: 'RSS Dashboard',
    };
    const tree = renderer.create(<Header {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
