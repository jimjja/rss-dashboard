import React from 'react';
import renderer from 'react-test-renderer';
import ErrorMessage from './errorMessage';

describe('Error Message component', () => {
  it('should match snapshot', () => {
    const props = {
      label: 'Error message',
      text: 'Failed to fetch',
    };
    const tree = renderer.create(<ErrorMessage {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should not render label', () => {
    const props = {
      text: 'Failed to fetch',
    };
    const tree = renderer.create(<ErrorMessage {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
