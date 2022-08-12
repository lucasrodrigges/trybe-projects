import React, { Component } from 'react';
import Albuns from '../components/Albuns';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import '../css/Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      disableSearchBtn: true,
      displayOnLoading: false,
      artistName: '',
      albuns: [],
      message: '',
    };
  }

  onInputChange = ({ target }) => {
    const { value } = target;
    const maxCharaceters = 2;
    if (value.length >= maxCharaceters) {
      this.setState({
        disableSearchBtn: false,
      });
    } else {
      this.setState({
        disableSearchBtn: true,
      });
    }
  }

  toggleDisplayElements = () => {
    const inputSearch = document.querySelector('#inputSearch');
    const btnSearch = document.querySelector('#btnSearch');
    inputSearch.value = '';
    inputSearch.style.display = '';
    btnSearch.style.display = '';
  }

  onClickSearchBtn = () => {
    const inputSearch = document.querySelector('#inputSearch');
    const btnSearch = document.querySelector('#btnSearch');
    inputSearch.style.display = 'none';
    btnSearch.style.display = 'none';
    this.setState({ displayOnLoading: true }, async () => {
      const albuns = await searchAlbumsAPI(inputSearch.value);
      if (!albuns.length) {
        this.setState({
          message: 'Nenhum álbum foi encontrado',
          displayOnLoading: false,
        }, () => this.toggleDisplayElements());
      } else {
        this.setState({
          displayOnLoading: false,
          artistName: inputSearch.value,
          albuns,
        }, () => {
          inputSearch.value = '';
          inputSearch.style.display = '';
          btnSearch.style.display = '';
        });
      }
    });
  }

  render() {
    const {
      disableSearchBtn,
      displayOnLoading,
      artistName,
      albuns,
      message } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        <div className="general-container">
          <div className="form-search-div">
            <form action="" className="form">
              <input
                className="input is-rounded form-search-item input-search"
                id="inputSearch"
                type="text"
                placeholder="Nome do Artista"
                data-testid="search-artist-input"
                onChange={ this.onInputChange }
              />
              <button
                className="button is-rounded form-search-item btn-search"
                type="button"
                id="btnSearch"
                data-testid="search-artist-button"
                disabled={ disableSearchBtn }
                onClick={ this.onClickSearchBtn }
              >
                Pesquisar
              </button>
            </form>
          </div>
          {displayOnLoading && <Loading />}
          <div className="search-result-title">
            {artistName && (
              <h2
                className="title-result"
              >
                {`Resultado para álbuns de ${artistName}`}

              </h2>)}
          </div>
          <Albuns albuns={ albuns } message={ message } />
        </div>
      </div>
    );
  }
}

export default Search;
