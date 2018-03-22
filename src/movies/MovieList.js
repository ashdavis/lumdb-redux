import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components'

import { getMovies } from './actions';
import Movie from './Movie';

class MovieList extends PureComponent {
  componentDidMount() {
    const {getMovies, loaded, loadedAt} = this.props;
    const dateStored = new Date(loadedAt);
    let oneHourAgo = new Date();
    oneHourAgo.setHours(oneHourAgo.getHours() - 1);    
    if (!loaded || dateStored < oneHourAgo) getMovies();
  }

  render() {
    const {movies} = this.props;
    return (
      <MovieGrid>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

const mapStateToProps = ({movies}) => ({
  movies: movies.movies,
  loaded: movies.moviesLoaded,
  loadedAt: movies.moviesLoadedAt,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

const MovieGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  padding: 0 1rem 1rem 1rem;
  grid-template-columns: repeat(auto-fill, 154px);
  justify-content: space-around;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
`;