import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberInput1 extends Component {
  render() {
    const { onInputChange, cardAttr1 } = this.props;

    return (
      <label htmlFor="numberInput1">
        Attr01
        <input
          type="number"
          name="cardAttr1"
          id="numberInput1"
          data-testid="attr1-input"
          onChange={ onInputChange }
          value={ cardAttr1 }
        />
      </label>
    );
  }
}

NumberInput1.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default NumberInput1;
