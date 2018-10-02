import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrayerForm from './PrayerForm';
import PrayerShow from './PrayerShow';
import { loadPrayer } from '../actions/prayers';


class Prayer extends Component {

  componentDidMount() {
    this.props.loadPrayer()
  }

  render() {
    return (
      <div>
        <PrayerForm />
        { this.props.prayers !== [] ? this.props.prayers.map( prayer =>
        <PrayerShow key={prayer.id} index={prayer.id} prayer={prayer} /> ) : null}
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
  loadPrayer
})(Prayer);
