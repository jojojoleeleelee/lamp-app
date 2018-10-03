import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrayerForm from './PrayerForm';
import PrayerCard from '../components/PrayerCard';
import { loadPrayers } from '../actions/prayers';


class Prayer extends Component {

  componentDidMount() {
    this.props.loadPrayers()
  }

  render() {
    return (
      <div className='center-align'>
        <PrayerForm />
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
