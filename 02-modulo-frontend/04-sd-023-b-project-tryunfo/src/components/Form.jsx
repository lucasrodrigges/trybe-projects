import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import TextArea from './TextArea';
import NumberInput1 from './NumberInput1';
import NumberInput2 from './NumberInput2';
import NumberInput3 from './NumberInput3';
import TextImageInput from './TextImageInput';
import Select from './Select';
import Checkbox from './Checkbox';
import Button from './Button';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      disabled,
    } = this.props;

    return (
      <form className="form">
        <TextInput cardName={ cardName } onInputChange={ onInputChange } />
        <TextArea cardDescription={ cardDescription } onInputChange={ onInputChange } />
        <NumberInput1 cardAttr1={ cardAttr1 } onInputChange={ onInputChange } />
        <NumberInput2 cardAttr2={ cardAttr2 } onInputChange={ onInputChange } />
        <NumberInput3 cardAttr3={ cardAttr3 } onInputChange={ onInputChange } />
        <TextImageInput cardImage={ cardImage } onInputChange={ onInputChange } />
        <Select cardRare={ cardRare } onInputChange={ onInputChange } />
        <Checkbox
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ cardTrunfo }
          onInputChange={ onInputChange }
        />
        <Button
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <h2>Encontre sua carta</h2>
        <input
          disabled={ disabled }
          type="text"
          name="nameFilter"
          id=""
          data-testid="name-filter"
          onChange={ onInputChange }
        />
        <select
          name="selectRare"
          id=""
          disabled={ disabled }
          data-testid="rare-filter"
          onChange={ onInputChange }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <label
          htmlFor="checkboxTrunfo"
          onChange={ onInputChange }
          data-testid="trunfo-filter"
        >
          <input
            type="checkbox"
            name="checkboxTrunfo"
            id="checkboxTrunfo"
          />
          Super Trunfo
        </label>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Form.defaultProps = {
  disabled: false,
};

export default Form;
