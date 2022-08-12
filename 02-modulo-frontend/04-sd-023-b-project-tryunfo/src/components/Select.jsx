import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { onInputChange, cardRare } = this.props;

    return (
      <label htmlFor="select">
        Raridade
        <select
          name="cardRare"
          id="select"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal"> Normal </option>
          <option value="raro"> Raro </option>
          <option value="muito raro"> Muito raro </option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Select;
