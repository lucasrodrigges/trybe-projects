import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';
import '../css/Album.css';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      musics: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const data = await getMusics(id);
    const onlyMusics = await data.filter(({ trackName }) => trackName);

    this.setState({
      artistName: data[0].artistName,
      albumName: data[0].collectionName,
      musics: onlyMusics,
    });
  }

  render() {
    const { artistName, albumName, musics } = this.state;
    console.log(musics);

    return (
      <div data-testid="page-album">
        <Header />
        {/* <div className="form-search-div">
          <form action="" className="form">
            <input
              className="input is-rounded form-search-item input-search"
              id="inputSearch"
              type="text"
              placeholder="Nome do Artista"
              data-testid="search-artist-input"
              // onChange={ this.onInputChange }
            />
            <button
              className="button is-rounded form-search-item btn-search "
              type="button"
              id="btnSearch"
              data-testid="search-artist-button"
              // disabled={ disableSearchBtn }
              // onClick={ this.onClickSearchBtn }
            >
              Pesquisar
            </button>
          </form>
        </div> */}
        <div className="titles-container">
          <h2
            className="artist-name"
            data-testid="artist-name"
          >
            {`Artista: ${artistName}`}
          </h2>
          <h2 className="album-name" data-testid="album-name">{`Album: ${albumName}`}</h2>
        </div>
        <div className="music-card-container">
          {musics.length
            ? musics
              .map(({ trackName, previewUrl, trackId, artworkUrl100 }, index) => (
                <div key={ trackName }>
                  <MusicCard
                    index={ index }
                    trackId={ trackId }
                    trackName={ trackName }
                    previewUrl={ previewUrl }
                    artworkUrl100={ artworkUrl100 }
                    musics={ musics }
                  />
                </div>
              ))
            : <Loading />}
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
