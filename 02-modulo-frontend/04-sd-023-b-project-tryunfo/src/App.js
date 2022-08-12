import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';
import './css/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      disabled: false,
      cards: [],
      cardsFiltered: [],
    };
  }

  checkButton = () => {
    const sum = 210;
    const limit = 90;
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const isAnytEmpty = [cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3].some((el) => !el.length);
    const isAnyUnableNumber = [+cardAttr1,
      +cardAttr2,
      +cardAttr3].some((value) => value < 0 || value > limit);
    const validSum = (+cardAttr1 + +cardAttr2 + +cardAttr3) > sum;

    if (!isAnytEmpty && !isAnyUnableNumber && !validSum) {
      this.setState({ isSaveButtonDisabled: false });
    } else this.setState({ isSaveButtonDisabled: true });
  }

  cardsFilter = (target) => {
    const { cards } = this.state;
    if (target.type === 'text') {
      this.setState({
        cardsFiltered: cards.filter(({ cardName }) => cardName.includes(target.value)),
      });
    }
    if (target.value === 'todas') this.setState({ cardsFiltered: cards });
    if (target.value === 'normal'
      || target.value === 'raro'
      || target.value === 'muito raro') {
      this.setState({
        cardsFiltered: cards.filter(({ cardRare }) => cardRare === target.value),
      });
    }
  }

  trunfoFilter = (target) => {
    const { cards } = this.state;
    if (target.checked) {
      this.setState({
        cardsFiltered: cards.filter(({ cardTrunfo }) => cardTrunfo),
        disabled: true,
      });
    } else {
      this.setState({
        cardsFiltered: cards,
        disabled: false,
      });
    }
  }

  onInputChange = ({ target }) => {
    if (target.name === 'nameFilter' || target.name === 'selectRare') {
      return this.cardsFilter(target);
    } if (target.name === 'checkboxTrunfo') {
      return this.trunfoFilter(target);
    }

    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    }, () => this.checkButton());
  }

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const card = this.state;
    const { cards } = this.state;
    cards.push(card);
    const hasCardTrunfo = cards.some(({ cardTrunfo }) => cardTrunfo);
    this.setState({
      hasTrunfo: hasCardTrunfo,
    });

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardsFiltered: cards,
      cards,
    });
  }

  cardRemove = (e) => {
    e.preventDefault();
    const getCard = e.target.parentNode;
    const nameOfCard = getCard.firstChild.innerText;
    const { cards } = this.state;
    const newCardsArr = cards.filter(({ cardName }) => cardName !== nameOfCard);
    const hasAnyTrunfo = newCardsArr.some(({ hasTrunfo }) => hasTrunfo);

    this.setState({
      cards: newCardsArr,
      cardsFiltered: newCardsArr,
      hasTrunfo: hasAnyTrunfo,
    }, () => getCard.remove());
  }

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
      cardsFiltered,
      disabled,
    } = this.state;
    return (
      <div className="general-container">
        <section className="section1-container">
          <h1>Trybe Trunfo</h1>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            disabled={ disabled }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
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
        </section>
        {cardsFiltered.map((card) => (
          <section key={ card.cardName }>
            <CardList
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
              cardRemove={ this.cardRemove }
            />
          </section>
        ))}
      </div>
    );
  }
}

export default App;
