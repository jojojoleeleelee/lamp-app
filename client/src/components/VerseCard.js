import React from 'react';
import { connect } from 'react-redux'

const VerseCard = (props) => {
  return (
    <div>
    <h3>{console.log(props)}</h3>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    text: state.text
  }
}

export default connect(mapStateToProps)(VerseCard)
