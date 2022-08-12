import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    const { onInputChange, cardName } = this.props;

    return (
      <label htmlFor="textInput">
        Nome da carta
        <input
          type="text"
          name="cardName"
          id="textInput"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default TextInput;
