import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputEmailProfileEdit extends Component {
  render() {
    const { email, onInputChange } = this.props;

    return (
      <div className="field">
        <label className="label" htmlFor="userEmail">
          Email
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-sucess"
              id="userEmail"
              name="email"
              type="email"
              defaultValue={ email }
              data-testid="edit-input-email"
              onChange={ onInputChange }
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle" />
            </span>
          </div>
        </label>
      </div>
    );
  }
}

InputEmailProfileEdit.propTypes = {
  email: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default InputEmailProfileEdit;
