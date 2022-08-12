import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;

    return (
      <button
        name="cards"
        type="submit"
        data-testid="save-button"
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
      >
        Salvar
      </button>
    );
  }
}

Button.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Button;
