import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components'

import { getMovies } from './actions';
import Movie from './Movie';

class MovieList extends PureComponent {
  componentDidMount() {
    const {getMovies} = this.props;
    getMovies();
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
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;