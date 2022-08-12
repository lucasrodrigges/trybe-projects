import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system-container">
        <div className="lala2">
          <Title headline="Planetas" />
        </div>
        <div className="card-container">
          {planets.map(({ name, image }) => (<PlanetCard
            planetName={ name }
            planetImage={ image }
            key={ name }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
