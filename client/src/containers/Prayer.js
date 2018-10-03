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
