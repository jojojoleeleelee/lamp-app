import React from 'react';
import { connect } from 'react-redux';
import { loadPrayer } from '../actions/prayers'

import Prayer from '../components/Prayer';

class PrayerShow extends React.Component {
  componentDidMount() {
    this.props.loadPrayer(this.props.match.params.id)
  }

  render() {
    return (
      <div>

      {this.props.prayer.prayer !== [] ? <Prayer key={this.props.prayer.id} index={this.props.prayer.id} prayer={this.props.prayer} /> : null }
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    prayer: state.prayers
  }
}

export default connect(mapStateToProps, {
  loadPrayer
})(PrayerShow)
