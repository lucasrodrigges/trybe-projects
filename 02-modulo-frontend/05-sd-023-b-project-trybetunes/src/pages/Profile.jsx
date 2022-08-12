import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';
import '../css/Profile.css';
import ButtonProfile from '../components/ButtonProfile';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      display: false,
      image: '',
      name: '',
      email: '',
      description: '',
    };
  }

  componentDidMount = async () => {
    const userData = await getUser();
    const { image, name, email, description } = userData;
    // console.log(userData);
    this.setState({ display: true, image, name, email, description });
  }

  profileEditRedirect = () => {

  }

  render() {
    const { display, image, name, email, description } = this.state;

    return (
      <div data-testid="page-profile">
        <Header />
        { !display ? <Loading />
          : (
            <div className="profile-container">
              <img
                className="img-profile"
                data-testid="profile-image"
                src={ image }
                alt={ name }
              />
              <div className="profile-info">
                <h2 className="title--item-profile">Nome</h2>
                <p>{name}</p>
                <h2 className="title--item-profile">Email</h2>
                <p>{email}</p>
                <h2 className="title--item-profile">Descrição</h2>
                <p>{description}</p>
                <div className="control">
                  <ButtonProfile />
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default Profile;
