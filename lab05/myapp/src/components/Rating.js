import React from 'react';

import star from '../star.svg';
// import { ReactComponent as Star } from '../star.svg';

function Rating(props) {
  // const stars = [];
  // for (let i = 0; i < props.value; i++) {
  //   stars.push(<img key={i} src={star} />);
  // }

  const stars = Array.from(Array(props.value)).map((val, i) => (
    <img
      key={i}
      src={star}
      onClick={() => {
        if (props.onClick) {
          props.onClick(i + 1);
        }
      }}
    />
  ));

  return <span>{stars}</span>;
}

// Rating.defaultProps = {
//   onClick: () => {}
// }

export default Rating;
