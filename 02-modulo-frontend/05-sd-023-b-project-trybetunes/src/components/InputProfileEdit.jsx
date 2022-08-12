import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputProfileEdit extends Component {
  render() {
    const { name, onInputChange } = this.props;

    return (
      <div className="field">
        <label className="label" htmlFor="userName">
          Nome
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-success"
              id="userName"
              name="name"
              type="text"
              defaultValue={ name }
              data-testid="edit-input-name"
              onChange={ onInputChange }
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
          </div>
        </label>
      </div>
    );
  }
}

InputProfileEdit.propTypes = {
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default InputProfileEdit;
