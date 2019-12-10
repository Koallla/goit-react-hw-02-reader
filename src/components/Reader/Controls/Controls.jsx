import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './controls.module.css';

const Controls = ({
  onDecrement,
  onIncrement,
  prevBtnDisabled,
  nextBtnDisabled,
}) => (
  <Fragment>
    <button
      type="button"
      className={
        prevBtnDisabled ? styles.onDecrementEnable : styles.onDecrementDisabled
      }
      onClick={onDecrement}
      disabled={!prevBtnDisabled}
    >
      Назад
    </button>
    <button
      type="button"
      className={
        nextBtnDisabled ? styles.onDecrementEnable : styles.onDecrementDisabled
      }
      onClick={onIncrement}
      disabled={!nextBtnDisabled}
    >
      Вперед
    </button>
  </Fragment>
);

Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  prevBtnDisabled: PropTypes.bool.isRequired,
  nextBtnDisabled: PropTypes.bool.isRequired,
};

export default Controls;
