import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
// import Loading from './Loading';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      display: true,
      getTrackId: '',
    };
  }

  componentDidMount = () => {
    const { trackId } = this.props;
    this.setState({ getTrackId: trackId }, async () => {
      const favSongs = await getFavoriteSongs();
      const { getTrackId } = this.state;
      const hasFav = favSongs.some((el) => el.trackId === getTrackId);

      if (hasFav) {
        this.setState({ checked: true });
      }
    });
  }

  onCheckboxChange = async ({ target }) => {
    const { musics, onCheckboxChangeAtFav } = this.props;
    onCheckboxChangeAtFav(target);
    const { checked, name } = target;

    this.changeDisplay();
    if (checked) {
      this.changeChecked(checked);
      await addSong(musics[name]);
      this.changeDisplay();
    } else {
      this.changeChecked(checked);
      await removeSong(musics[name]);
      this.changeDisplay();
    }
  }

  changeChecked = (checked) => {
    if (checked) this.setState({ checked: true });
    else this.setState({ checked: false });
  }

  changeDisplay = () => {
    this.setState(({ display }) => ({
      display: !display,
    }));
  }

  render() {
    const { checked } = this.state;
    const {
      trackName,
      previewUrl,
      index,
      trackId,
      artworkUrl100 } = this.props;

    return (
      <div className="music-card">
        <img className="img-album-list" src={ artworkUrl100 } alt={ trackName } />
        <div className="name-control">
          <h2 className="track-name">{trackName}</h2>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
          </audio>
        </div>
        <label
          className={ `label-album-list ${checked ? 'checked' : 'not-checked'} heart` }
          htmlFor={ trackName }
          data-testid={ `checkbox-music-${trackId}` }
        >
          ❤
          <input
            className="checkbox-music-card"
            type="checkbox"
            name={ index }
            id={ trackName }
            checked={ checked }
            onChange={ this.onCheckboxChange }
          />
        </label>
      </div>

    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onCheckboxChangeAtFav: PropTypes.func,
  musics: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  artworkUrl100: PropTypes.string.isRequired,

};

MusicCard.defaultProps = {
  // musics: [],
  onCheckboxChangeAtFav: () => {},
};

export default MusicCard;
