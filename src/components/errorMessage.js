import React from 'react';
import PropTypes from 'prop-types';

const wrapperStyle = {
  color: 'red',
};

function errorMessage({ label, text }) {
  return (
    <p style={wrapperStyle}>
      {label && (
        <strong>
          {label}
          :&nbsp;
        </strong>
      )}
      {text}
    </p>
  );
}

errorMessage.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string.isRequired,
};

errorMessage.defaultProps = {
  label: null,
};

export default errorMessage;
