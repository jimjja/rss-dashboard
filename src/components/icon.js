import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const {
    name, size, spin, className,
  } = props;
  return (
    <i
      {...props}
      className={`fa fa-${name} fa-${size} ${
        spin ? 'fa-spin' : ''
      } ${className}`}
    />
  );
};

Icon.defaultName = 'Icon';
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  spin: PropTypes.bool,
  className: PropTypes.string,
};

Icon.defaultProps = {
  spin: false,
  size: '1x',
  className: '',
};

export default Icon;
