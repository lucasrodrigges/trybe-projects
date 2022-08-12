import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { onInputChange, cardDescription } = this.props;

    return (
      <label htmlFor="textArea">
        Descrição
        <textarea
          name="cardDescription"
          id="textArea"
          cols="30"
          rows="10"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default TextArea;
