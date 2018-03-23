import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

import { Poster } from './Movie';
import { getMovie, resetMovie } from './actions';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w342';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

class MovieDetail extends PureComponent {
  componentDidMount() {
    const {match, getMovie} = this.props;
    getMovie(match.params.id);
  }

  componentWillUnmount() {
    const {resetMovie} = this.props;
    resetMovie();
  }

  render() {
    const {movie} = this.props;
    if (!movie.id) return null;
    return (
      <div>
        <MovieBackdrop backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`} />
        <MovieInfo>
          <Overdrive id={movie.id.toString()}>
            <MoviePoster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
          </Overdrive>
            <div>
              <h1>{movie.title}</h1>
              <h3>{movie.release_date}</h3>
              <p>{movie.overview}</p>
            </div>
        </MovieInfo>
      </div>
    );
  }
}

const mapStateToProps = ({movies}) => ({
  movie: movies.movie,
  loaded: movies.movieLoaded,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMovie,
  resetMovie,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

const MovieBackdrop = styled.div`
  height: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
  background-position: top;

  @media only screen and (max-width: 700px) {
    height: 250px;
  }

  @media only screen and (max-width: 350px) {
    height: 175px;
  }
`;

const MoviePoster = Poster.extend`
  @media only screen and (max-width: 700px) {
    width: 120px;
  }
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }

  @media only screen and (max-width: 700px) {
    flex-flow: column nowrap;
    padding: 0 2rem 10%;
    > div {
      margin-left: 0;
    }
    img {
      top: -1.5rem;
    }
  }
`;
