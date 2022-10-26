import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <form>
        <label htmlFor="nameId">
          <input
            type="text"
            data-testid="name-input"
            id="nameId"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="descriptionId">
          <textarea
            data-testid="description-input"
            id="descriptionId"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1Id">
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1Id"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2Id">
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2Id"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3Id">
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3Id"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="imageId">
          <input
            type="text"
            data-testid="image-input"
            id="imageId"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rareId">
          <select
            data-testid="rare-input"
            id="rareId"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">
              normal
            </option>

            <option value="raro">
              raro
            </option>

            <option value="muito raro">
              muito raro
            </option>
          </select>
        </label>

        <label htmlFor="trunfoId">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfoId"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

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
};

export default Form;
