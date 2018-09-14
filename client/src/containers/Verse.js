import React from 'react';

const Verse = ({verse}) =>
  <div className="single-list" key={verse.id}>
      <h4>{verse.text}</h4>
      <h4>{verse.book}</h4>
      <p>{verse.chapter}</p>
  </div>
export default Verse;
