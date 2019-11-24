import React from 'react';
import Rating from './Rating';

function PostMovie(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <img width="100" src={props.poster} />
      <p>
        <span>Ocena: </span>
        <Rating value={props.rating} />
      </p>
      <p>{props.description}</p>
    </div>
  );
}

export default PostMovie;
