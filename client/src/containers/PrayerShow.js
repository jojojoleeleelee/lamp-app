import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const PrayerForm = (prayer) => {
  const prayer_url = `prayers/${prayer.prayer.id}`
  return (
    <Link to={prayer_url}>
      <div className="card">
        <div className="card card-panel light-green">
          <div className="card-content white-text center-align">
            <h5><strong>{prayer.prayer.summary}</strong></h5>
            <p>{prayer.prayer.duration} minutes - Focus: {prayer.prayer.focus}</p>
           <p>Verse? {prayer.prayer.verse_id ? "Has a Verse attached" : "Not Yet!" } </p>
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

export default connect(mapStateToProps)(PrayerForm)
