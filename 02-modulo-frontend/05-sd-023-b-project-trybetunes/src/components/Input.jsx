import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { onInputFormChange } = this.props;

    return (
      <label htmlFor="userName" className="label">
        <h3 className="title-input-login">Digite seu nome para login</h3>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-success form-item input-login form-item"
            type="text"
            id="userName"
            name="userName"
            data-testid="login-name-input"
            onInput={ onInputFormChange }
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user" />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check" />
          </span>
        </div>
      </label>
    );
  }
}

Input.propTypes = {
  onInputFormChange: PropTypes.func.isRequired,
};

export default Input;
