import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,

  };

  onInputChange = (event) => {
    const { target } = event;
    this.setState({
      cardName: target.value,
      cardDescription: target.value,
      cardAttr1: target.value,
      cardAttr2: target.value,
      cardAttr3: target.value,
      cardImage: target.value,
      cardRare: target.value,
      cardTrunfo: target.value,
    }, () => {
      const teste1 = 0;
      const teste2 = 90;
      const teste = 210;
      const { cardName, cardDescription, cardAttr1, cardAttr2,
        cardAttr3, cardImage, cardRare } = this.state;
      const newButtonState = cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || cardRare === ''
      || cardAttr1 < teste1
      || cardAttr1 > teste2
      || cardAttr2 < teste1
      || cardAttr2 > teste2
      || cardAttr3 < teste1
      || cardAttr3 > teste2
      || cardAttr1 + cardAttr2 + cardAttr3 > teste;

      this.setState({
        isSaveButtonDisabled: newButtonState,
      });
    });
  };

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
