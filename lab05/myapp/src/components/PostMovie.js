import React, { useContext } from 'react';
import Rating from './Rating';

import LanguageContext from '../LanguageContext';

function PostMovie(props) {
  const lang = useContext(LanguageContext);
  const onVote = i => alert(`Dziękujemy za oddanie głosu. Twoja ocena: ${i}`);

  return (
    <div>
      <h3>{props.title[lang]}</h3>
      <img width="100" src={props.poster} />
      <p>
        <span>Ocena: </span>
        <Rating value={props.rating} />
      </p>
      <p>
        <span>Twoja Ocena: </span>
        <Rating value={10} onClick={onVote} />
      </p>
      <p>{props.description[lang]}</p>
    </div>
  );
}

export default PostMovie;
