import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import '../css/Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
    };
  }

  async componentDidMount() {
    const obj = await getUser();
    this.setState({ userName: obj.name });
  }

  render() {
    const { userName } = this.state;

    return (
      <header className="header-component" data-testid="header-component">
        <nav className="navbar">
          <div className="title-container">
            <h1 className="header-item">TrybeTunes</h1>
          </div>
          <div className="welcome-div">
            <h4 className="header-item" data-testid="header-user-name">
              { !userName ? <Loading />
                : `Olá, ${userName}! Seja bem vindo(a) de volta.` }
            </h4>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link
                className="navbar-item"
                to="/search"
                data-testid="link-to-search"
              >
                Pesquisar
              </Link>
              <Link
                className="navbar-item"
                to="/favorites"
                data-testid="link-to-favorites"
              >
                Favoritas
              </Link>
              <Link
                className="navbar-item"
                to="/profile"
                data-testid="link-to-profile"
              >
                Perfil
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
