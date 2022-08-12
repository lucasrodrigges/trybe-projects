import React, { Component } from 'react';
import PropyTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Albuns extends Component {
  render() {
    const { albuns, message } = this.props;
    console.log(albuns);
    return (
      <div className="ul-albuns-container">
        <ul className="albuns-ul">
          {message ? <p>{message}</p>
            : albuns.map(({ collectionId, collectionName, artworkUrl100 }) => (
              <li className="album-li" key={ collectionId }>
                <img
                  className="img-album-search"
                  src={ artworkUrl100 }
                  alt={ collectionName }
                />
                <Link
                  to={ `/album/${collectionId}` }
                  id={ collectionId }
                  className="link-album-search"
                  data-testid={ `link-to-album-${collectionId}` }
                >
                  <p className="album-title">Album:</p>
                  <p className="album-title">{collectionName}</p>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

Albuns.propTypes = {
  albuns: PropyTypes.arrayOf(PropyTypes.object.isRequired).isRequired,
  message: PropyTypes.string.isRequired,
};

export default Albuns;
