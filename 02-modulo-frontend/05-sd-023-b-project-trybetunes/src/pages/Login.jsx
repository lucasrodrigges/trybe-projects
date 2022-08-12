import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Input from '../components/Input';
import Button from '../components/Button';
import '../css/Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      disabledSaveBtn: true,
      userName: '',
    };
  }

  onInputFormChange = ({ target }) => {
    const { value } = target;
    const maxCharacters = 3;

    if (value.length >= maxCharacters) {
      this.setState({
        disabledSaveBtn: false,
        userName: value,
      });
    } else this.setState({ disabledSaveBtn: true });
  }

  onSaveBtnClick = async (user) => {
    const { history } = this.props;
    history.push('/loading');
    await createUser({ name: user });
    history.push('/search');
  }

  render() {
    const { disabledSaveBtn, userName } = this.state;
    return (
      <div>
        <header className="header">
          <h1>TrybeTunes</h1>
        </header>
        <div className="form-container">
          <div className="form-div" data-testid="page-login">
            <div className="field">
              <Input onInputFormChange={ this.onInputFormChange } />
            </div>
            <div className="field is-grouped">
              <Button
                userName={ userName }
                disabledSaveBtn={ disabledSaveBtn }
                onSaveBtnClick={ this.onSaveBtnClick }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
