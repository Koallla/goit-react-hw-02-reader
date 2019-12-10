import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Progress = ({ currentPage, totalPages }) => (
  <Fragment>
    <p>
      {currentPage}/{totalPages}
    </p>
  </Fragment>
);

Progress.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Progress;
