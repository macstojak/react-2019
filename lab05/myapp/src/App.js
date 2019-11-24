import React from 'react';
import PostMovie from './components/PostMovie';

import movies from './movies.json';

console.log(movies);

const topMovies = movies.filter(movie => movie.rating > 6);
const worstMovies = movies.filter(movie => movie.rating <= 6);

function MoviesList(props) {
  return props.movies.map(movie => (
    <PostMovie
      key={movie.id}
      title={movie.title}
      poster={movie.poster}
      rating={movie.rating}
      description={movie.description}
    />
  ));
}

const moviesByGener = {};

movies.forEach(movie => {
  if (Array.isArray(moviesByGener[movie.genre])) {
    moviesByGener[movie.genre].push(movie);
  } else {
    moviesByGener[movie.genre] = [movie];
  }
});

console.log(moviesByGener);
console.log(Object.keys(moviesByGener));

function App() {
  return (
    <div>
      <h2>Top Movies</h2>
      <MoviesList movies={topMovies} />
      <h2>Worst Movies</h2>
      <MoviesList movies={worstMovies} />
    </div>
  );
}

export default App;
