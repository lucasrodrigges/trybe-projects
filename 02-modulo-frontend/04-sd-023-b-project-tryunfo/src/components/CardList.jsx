import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardList extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardRemove,
    } = this.props;

    return (
      <div>
        <h1 data-testid="name-card">{ cardName }</h1>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">
          { cardDescription }
        </p>
        <p data-testid="attr1-card">
          { `Attr1: ${cardAttr1 !== undefined ? cardAttr1 : ''}` }
        </p>
        <p data-testid="attr2-card">
          { `Attr2: ${cardAttr2 !== undefined ? cardAttr2 : ''}` }
        </p>
        <p data-testid="attr3-card">
          { `Attr3: ${cardAttr3 !== undefined ? cardAttr3 : ''}` }
        </p>
        <p data-testid="rare-card">{ cardRare }</p>
        {!cardTrunfo ? '' : <p data-testid="trunfo-card">Super Trunfo</p>}
        <button
          type="submit"
          data-testid="delete-button"
          onClick={ cardRemove }
        >
          Excluir
        </button>

      </div>
    );
  }
}

CardList.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardRemove: PropTypes.func.isRequired,
};

export default CardList;
