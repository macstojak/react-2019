import React from 'react';
import MoviesService from '../../services/movies.service';
import { Link } from 'react-router-dom';

const movies = MoviesService.getMovies();
console.log(movies);

const MoviesListPage = () => {
  return (
    <div>
      <h2>MoviesListPage</h2>
      {movies.map(movie => (
        <p key={movie.id}>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </p>
      ))}
    </div>
  );
};

export default MoviesListPage;
