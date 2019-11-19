import React from 'react';
import Title from './Title';

function SectionBig() {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <Title text="Section Title" />
        <p className="text-muted">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </p>
        <p>
          <button className="btn btn-primary my-2">Show more</button>
        </p>
      </div>
    </section>
  );
}

export default SectionBig;
