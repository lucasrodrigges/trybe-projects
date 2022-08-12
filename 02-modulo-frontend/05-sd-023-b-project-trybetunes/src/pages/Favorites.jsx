import React, { Component } from 'react';
import Header from '../components/Header';
// import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import '../css/Favorites.css';

class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      favSongs: [],
      // display: false,
    };
  }

  componentDidMount = async () => {
    const favSongs = await getFavoriteSongs();
    this.setState({ favSongs });
  }

  onCheckboxChangeAtFav = (target) => {
    const { favSongs } = this.state;
    const { name } = target;

    this.setState({}, async () => {
      await removeSong(favSongs[name]);
      const getNewFavSongs = await getFavoriteSongs();
      this.setState({ favSongs: getNewFavSongs });
    });
  }

  render() {
    const { favSongs } = this.state;

    return (
      <div data-testid="page-favorites">
        <Header />
        <div className="favorites-container">
          <h1 className="title-favorites">Músicas Favoritas</h1>
          { favSongs
            .map(({ trackName, previewUrl, trackId, artworkUrl100 }, index) => (
              <div key={ trackName }>
                <MusicCard
                  index={ index }
                  trackId={ trackId }
                  trackName={ trackName }
                  previewUrl={ previewUrl }
                  artworkUrl100={ artworkUrl100 }
                  musics={ favSongs }
                  onCheckboxChangeAtFav={ this.onCheckboxChangeAtFav }
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Favorites;
