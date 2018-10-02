import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Verse = (verse) => {
  const verse_url = `verses/${verse.verse.id}`
  return (
    <Link to={verse_url}>
      <div className="card">
        <div className="card card-panel grey">
          <div className="card-content white-text center-align">
            <h4>{verse.verse.book} - {verse.verse.chapter}</h4>
            <h3><strong>{verse.verse.text}</strong></h3>
            <br />
           <h5>Memorized? {verse.verse.memorized ? "Yes Indeed!" : "Not Yet!" } </h5>
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

export default connect(mapStateToProps)(Verse)
