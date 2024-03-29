import React, { Component } from 'react';
import T from 'prop-types';
import Controls from './Controls/Controls';
import Progress from './Progress/Progress';
import Publication from './Publication/Publication';
import styles from './reader.module.css';

export default class Reader extends Component {
  static defaultProps = {
    items: [],
  };

  static propTypes = {
    items: T.arrayOf(
      T.shape({
        id: T.string.isRequired,
        title: T.string.isRequired,
        text: T.string.isRequired,
      }).isRequired,
    ),
  };

  state = {
    publicationIndex: 0,
  };

  handleIncrement = e => {
    // eslint-disable-next-line no-unused-expressions
    e.target.name === 'next'
      ? this.setState(prevState => ({
          publicationIndex: prevState.publicationIndex + 1,
        }))
      : this.setState(prevState => ({
          publicationIndex: prevState.publicationIndex - 1,
        }));
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    const publication = items[publicationIndex];
    const disableBtnNext = publicationIndex !== items.length - 1;
    const disableBtnPrev = publicationIndex;

    return (
      <div className={styles.reader}>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleIncrement}
          nextBtnDisabled={disableBtnNext}
          prevBtnDisabled={disableBtnPrev}
        />

        <Progress
          currentPage={publicationIndex + 1}
          totalPages={items.length}
        />

        <Publication title={publication.title} text={publication.text} />
      </div>
    );
  }
}
