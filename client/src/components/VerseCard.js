import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const VerseCard = (verse) => {
  const verse_url = `verses/${verse.verse.id}`
  return (
    <Link to={verse_url}>
      <div className="card">
        <div className="card card-panel deep-purple lighten-4">
          <div className="card-content white-text center-align">
            <h5><strong>{verse.verse.text}</strong></h5>
            <p>{verse.verse.book} - {verse.verse.chapter}</p>
           <p>Memorized? {verse.verse.memorized ? "Yes Indeed!" : "Not Yet!" } </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

const mapStateToProps = state => {
  return {
    text: state.text
  }
}

export default connect(mapStateToProps)(VerseCard)
