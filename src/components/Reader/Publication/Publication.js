import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ title, text }) => (
  <article>
    <h2>{title}</h2>
    <p>{text}</p>
  </article>
);

Progress.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Progress;
