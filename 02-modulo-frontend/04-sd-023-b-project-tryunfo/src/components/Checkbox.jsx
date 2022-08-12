import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const { onInputChange, cardTrunfo, hasTrunfo } = this.props;

    return (
      <label htmlFor="checkbox">
        {
          !hasTrunfo ? <input
            type="checkbox"
            name="cardTrunfo"
            id="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
            : <p>Você já tem um Super Trunfo em seu baralho</p>
        }
      </label>
    );
  }
}

Checkbox.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Checkbox;
