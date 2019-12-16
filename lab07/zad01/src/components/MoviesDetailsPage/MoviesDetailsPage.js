import React from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';

import MoviesService from '../../services/movies.service';

const MoviesDetailsPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const movie = MoviesService.getMovieById(id);

  if (!movie) {
    // history.replace('/movies');
    // return null;
    return <Redirect to="/movies" />;
  }

  console.log(id, movie);
  return (
    <div>
      <button onClick={history.goBack}>Go Back</button>
      <h2>MoviesDetailsPage</h2>
      <h3>{movie.title}</h3>
      <p>Ocena: {movie.rating}</p>
      <img src={movie.poster} />
      <p>{movie.description}</p>
    </div>
  );
};

export default MoviesDetailsPage;
