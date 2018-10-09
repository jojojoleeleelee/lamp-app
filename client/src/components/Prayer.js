import React from 'react';
import { connect } from 'react-redux'

import DeleteButton from './DeleteButton'
const Prayer = (prayer) => {
  return (
    <div className="card">
      <div className="card card-panel orange lighten-4">
        <div className="card-content white-text center-align">
          <h5>S U M M A R Y : </h5>
          <br />
          <h2> {prayer.prayer.summary} </h2>
          <br />
          <h5>P R A Y E D * {prayer.prayer.duration} M I N
          <hr /> F O C U S * {prayer.prayer.focus} (out of 5)</h5>
          <br />
          <DeleteButton />
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

export default connect(mapStateToProps)(Prayer)
// add delete button
