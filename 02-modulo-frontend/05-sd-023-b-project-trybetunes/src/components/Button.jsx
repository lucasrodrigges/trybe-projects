import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { disabledSaveBtn, userName } = this.props;

    return (
      <div className="control">
        <button
          className="button is-link form-item btn-login"
          type="button"
          data-testid="login-submit-button"
          disabled={ disabledSaveBtn }
          onClick={ () => {
            const { onSaveBtnClick } = this.props;
            onSaveBtnClick(userName);
          } }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  disabledSaveBtn: PropTypes.bool.isRequired,
  userName: PropTypes.bool.isRequired,
  onSaveBtnClick: PropTypes.func.isRequired,
};

export default Button;
