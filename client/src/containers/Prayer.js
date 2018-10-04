import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrayerForm from './PrayerForm';
import PrayerCard from '../components/PrayerCard';
import { loadPrayers } from '../actions/prayers';
import { Link } from 'react-router-dom';

class Prayer extends Component {

  componentDidMount() {
    this.props.loadPrayers()
  }

  render() {
    return (
      <div className='center-align'>
        <br />
        <br />

        <h5> C R E A T E *** P R A Y E R</h5>
        <br />
        <br />
        <Link to="/prayers/new" ><btn className="waves-effect waves-light btn">N E W</btn></Link>
        <br />
        <br />
        <h2>*** P R A Y E R S ***</h2>
        <br />
        <br />
        { this.props.prayers !== [] ? this.props.prayers.map( prayer =>
        <PrayerCard key={prayer.id} index={prayer.id} prayer={prayer} /> ) : null}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return ({
    prayers: state.prayers
  })
}

export default connect(mapStateToProps, {
  loadPrayers
})(Prayer);
