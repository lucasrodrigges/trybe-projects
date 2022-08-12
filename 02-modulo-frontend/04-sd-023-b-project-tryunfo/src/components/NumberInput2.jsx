import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberInput2 extends Component {
  render() {
    // const { ...props } = this.props; outra alternativa
    const { onInputChange, cardAttr2 } = this.props;

    return (
      <label htmlFor="numberInput2">
        Attr02
        <input
          type="number"
          name="cardAttr2"
          id="numberInput2"
          data-testid="attr2-input"
          onChange={ onInputChange }
          value={ cardAttr2 }
          // { ...props }
        />
      </label>
    );
  }
}

NumberInput2.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  cardAttr2: PropTypes.string.isRequired,
};

export default NumberInput2;
