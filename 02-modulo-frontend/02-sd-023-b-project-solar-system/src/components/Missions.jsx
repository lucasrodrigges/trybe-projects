import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="missions-container">
        <div className="mission-title">
          <Title headline="Missões" />
        </div>
        <div className="lala">
          <div className="lolo">
            {missions.map(({ name, year, country, destination }) => (
              <div key={ name } className="mission">
                <MissionCard
                  headline="Missões"
                  name={ name }
                  year={ year }
                  country={ country }
                  destination={ destination }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Missions;
