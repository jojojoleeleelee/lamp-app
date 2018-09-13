import React from 'react';

export const Verse = (props) => {
  const ingredients = props.verse.map((verse, i) => {
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
