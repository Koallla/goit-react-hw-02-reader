import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Controls = ({
  onDecrement,
  onIncrement,
  prevBtnDisabled,
  nextBtnDisabled,
}) => (
  <Fragment>
    <button
      type="button"
      className="onDecrement"
      onClick={prevBtnDisabled ? onDecrement : null}
    >
      Назад
    </button>
    <button
      type="button"
      className="onIncrement"
      onClick={nextBtnDisabled ? onIncrement : null}
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
