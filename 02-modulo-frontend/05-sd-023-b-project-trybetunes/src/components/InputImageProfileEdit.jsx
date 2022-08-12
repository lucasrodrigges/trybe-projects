import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputImageProfileEdit extends Component {
  render() {
    const { image, onInputChange } = this.props;

    return (
      <div className="field">
        <label className="label" htmlFor="userImage">
          Imagem de Perfil
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-success"
              id="userImage"
              name="image"
              type="text"
              defaultValue={ image }
              data-testid="edit-input-image"
              onChange={ onInputChange }
            />
            <span className="icon is-small is-left">
              <i className="fa-solid fa-link" />
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

InputImageProfileEdit.propTypes = {
  image: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default InputImageProfileEdit;
