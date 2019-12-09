import React, { Component } from 'react';
import T from 'prop-types';
import Controls from './Controls';
import Progress from './Progress/Progress';
import Publication from './Publication/Publication';
// import publications from './publications.json';

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

  handleIncrement = () => {
    this.setState(state => ({
      publicationIndex: state.publicationIndex + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(state => ({
      publicationIndex: state.publicationIndex - 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;

    const publication = items[publicationIndex];

    const disableBtnNext = publicationIndex !== items.length - 1;
    const disableBtnPrev = publicationIndex !== 0;

    console.log(this.props);
    console.log(items.length);

    return (
      <div>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
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
