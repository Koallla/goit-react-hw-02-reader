import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ currentPage, totalPages }) => (
  <p>
    {currentPage}/{totalPages}
  </p>
);

Progress.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Progress;
