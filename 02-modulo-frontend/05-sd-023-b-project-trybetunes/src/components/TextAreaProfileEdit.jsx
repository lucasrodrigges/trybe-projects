import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextAreaProfileEdit extends Component {
  render() {
    const { description, onInputChange } = this.props;

    return (
      <div className="field">
        <label className="label" htmlFor="userDescription">
          Descrição
          <div className="control">
            <textarea
              className="textarea text-area-edit"
              id="userDescription"
              name="description"
              cols="10"
              rows="2"
              defaultValue={ description }
              data-testid="edit-input-description"
              onChange={ onInputChange }
            />
          </div>
        </label>
      </div>
    );
  }
}

TextAreaProfileEdit.propTypes = {
  description: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default TextAreaProfileEdit;
