import React from 'react';
import 'isomorphic-fetch';

const ESV_API_KEY = '10f7a096a5e8fca1ddab7cc693473e6968b7aa4f'
const URL = 'https://api.esv.org/v3/passage/text/all.json?' +`api-key={ESV_API_KEY}`

export const Verse = (props) => {
  const verses = props.verse.map((verse, i) => {
    return <li key={i}>{verse.text} {verse.book}</li>
  })

  return (
    <div className="row">
      <div className="col s12">
        <h2 className="center-align">{props.verse.emotion}</h2><br/>
        <div className="col s6">
          <br />
          <p><strong>Scripture: </strong>{props.verse.text} </p><br />
          <br />
          <strong>Book:</strong>
          <p>{props.verse.book}</p>
          <strong>Date:</strong>
          <p>{props.verse.date}</p>
        </div>
      </div>
    </div>
  )
}
