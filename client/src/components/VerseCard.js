import React from 'react';
import { connect } from 'react-redux'

const VerseCard = (verse) => {
  debugger;
  return (
    <div>
      <ul>
      <li>{verse.verse.text}</li>
      <li>{verse.verse.book}</li>
      <li>{verse.verse.chapter}</li>
      </ul>
    </div>
  )
}



const mapStateToProps = state => {
  return {
    text: state.text
  }
}

export default connect(mapStateToProps)(VerseCard)
