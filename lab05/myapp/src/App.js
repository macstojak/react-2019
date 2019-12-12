import React, { useState } from 'react';
import PostMovie from './components/PostMovie';

import LanguageContext from './LanguageContext';

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

// const moviesByGener = {};

// movies.forEach(movie => {
//   if (Array.isArray(moviesByGener[movie.genre])) {
//     moviesByGener[movie.genre].push(movie);
//   } else {
//     moviesByGener[movie.genre] = [movie];
//   }
// });

const moviesByGenre = movies.reduce((prev, current) => {
  if (prev[current.genre]) {
    prev[current.genre].push(current);
  } else {
    prev[current.genre] = [current];
  }
  return prev;
}, {});

console.log(moviesByGenre);
// console.log(Object.keys(moviesByGener));

const genres = Object.keys(moviesByGenre);

function App() {
  const [userLang, setUserLang] = useState('pl');
  return (
    <LanguageContext.Provider value={userLang}>
      <button onClick={() => setUserLang('pl')}>PL</button>
      <button onClick={() => setUserLang('en')}>EN</button>
      <div>
        {genres.map(genre => (
          <div>
            <h1>{genre}</h1>
            <MoviesList movies={moviesByGenre[genre]} />
          </div>
        ))}
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
