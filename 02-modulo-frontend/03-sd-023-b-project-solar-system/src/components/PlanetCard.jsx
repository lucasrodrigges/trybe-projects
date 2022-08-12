import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetImage, planetName } = this.props;

    return (
      <div data-testid="planet-card" className="planet-card">
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={ `planet-img ${planetName}` }
        />
        <p data-testid="planet-name" className="planet-name">{ planetName }</p>
      </div>);
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
