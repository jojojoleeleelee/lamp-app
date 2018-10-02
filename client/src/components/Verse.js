import React from 'react';
import { connect } from 'react-redux'

import { memorizeVerse } from '../actions/verses'
import MemorizeButton from './MemorizeButton'

const Verse = (verse) => {
  return (
    <div className="card">
      <div className="card card-panel grey">
        <div className="card-content white-text center-align">
          <h4>{verse.verse.book} - {verse.verse.chapter}</h4>
          <h3><strong>{verse.verse.text}</strong></h3>
          <br />
         <h5>{ verse.verse ? <MemorizeButton verse={verse.verse} /> : null } </h5>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    text: state.text
  }
}

export default connect(mapStateToProps, {
  memorizeVerse
})(Verse)
