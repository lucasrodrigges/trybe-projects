import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberInput3 extends Component {
  render() {
    const { onInputChange, cardAttr3 } = this.props;

    return (
      <label htmlFor="numberInput3">
        Attr03
        <input
          type="number"
          name="cardAttr3"
          id="numberInput3"
          data-testid="attr3-input"
          onChange={ onInputChange }
          value={ cardAttr3 }
        />
      </label>
    );
  }
}

NumberInput3.propTypes = {
  cardAttr3: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default NumberInput3;
