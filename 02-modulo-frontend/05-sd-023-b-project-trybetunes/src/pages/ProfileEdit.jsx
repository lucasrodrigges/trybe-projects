import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser, updateUser } from '../services/userAPI';
import InputProfileEdit from '../components/InputProfileEdit';
import InputEmailProfileEdit from '../components/InputEmailProfileEdit';
import TextAreaProfileEdit from '../components/TextAreaProfileEdit';
import InputImageProfileEdit from '../components/InputImageProfileEdit';
import '../css/ProfileEdit.css';

class ProfileEdit extends Component {
  constructor() {
    super();

    this.state = {
      display: false,
      image: '',
      name: '',
      email: '',
      description: '',
      disabled: true,
    };
  }

  componentDidMount = async () => {
    const userData = await getUser();
    const { image, name, email, description } = userData;

    this.setState({ display: true, image, name, email, description });
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    // const regexEmail = /\S+@\S+\.\S+/;
    this.setState({
      [name]: value,
    }, this.toggleBtn);
  }

  checkEmail = (email, regex) => !!(regex.test(email));

  // checkDescription = (value) => value;

  toggleBtn = () => {
    const { image, name, email, description } = this.state;
    const regexEmail = /\S+@\S+\.\S+/;
    const hasValidEmail = this.checkEmail(email, regexEmail);

    if (image && name && description && hasValidEmail) this.setState({ disabled: false });
    else this.setState({ disabled: true });
  }

  handlerBtn = async () => {
    const { image, name, email, description } = this.state;
    await updateUser({ name, email, image, description });
    const { history } = this.props;
    history.push('/profile');
  }

  render() {
    const { display, image, name, email, description, disabled } = this.state;

    return (
      <div data-testid="page-profile-edit">
        <Header />
        <div className="general-container-profile-edit">
          {
            !display ? <Loading />
              : (
                <div className="profile-edit-container">
                  <form className="form-profile-edit" action="">
                    <InputProfileEdit
                      name={ name }
                      onInputChange={ this.onInputChange }
                    />
                    <InputEmailProfileEdit
                      email={ email }
                      onInputChange={ this.onInputChange }
                    />
                    <TextAreaProfileEdit
                      description={ description }
                      onInputChange={ this.onInputChange }
                    />
                    <InputImageProfileEdit
                      image={ image }
                      onInputChange={ this.onInputChange }
                    />
                    <div className="control">
                      <button
                        className="btn-profile-edit button is-link"
                        type="button"
                        disabled={ disabled }
                        data-testid="edit-button-save"
                        onClick={ this.handlerBtn }
                      >
                        Editar perfil
                      </button>
                    </div>
                  </form>
                </div>
              )
          }
        </div>
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProfileEdit;
