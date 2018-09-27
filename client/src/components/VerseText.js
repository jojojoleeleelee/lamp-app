import React from 'react';
import { Link } from 'react-router-dom';

export const VerseText = (props) => {
  const verse_url = `verses/${props.verse.id}`
  return(
    <Link to={verse_url}>
      <div className="col s12 l6 xl4 ">
        <div className="card blue-grey darken-2">
          <div className="card-content white-text center-align">
            <p><strong>{props.verse.text}</strong></p>
            <p>({props.verse.book})</p>
            <p>({props.verse.chapter})</p>
            <p>({props.verse.memorized})</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
