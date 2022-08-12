import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonProfile extends Component {
  render() {
    return (
      <button className="button is-link btn-profile" type="button">
        <Link className="link-profile" to="/profile/edit">
          <p className="txt-btn">Editar perfil</p>
        </Link>
      </button>
    );
  }
}

export default ButtonProfile;
