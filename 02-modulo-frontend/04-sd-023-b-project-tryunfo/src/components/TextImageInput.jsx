import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextImageInput extends Component {
  render() {
    const { onInputChange, cardImage } = this.props;

    return (
      <label htmlFor="imageInput">
        Imagem
        <input
          id="imageInput"
          type="text"
          name="cardImage"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

TextImageInput.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default TextImageInput;
