import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import createStore from './configureStore';

const store = createStore();

function StoreProvider({ element }) {
  return <Provider store={store}>{element}</Provider>;
}

StoreProvider.propTypes = {
  element: PropTypes.node.isRequired,
};
export default StoreProvider;
