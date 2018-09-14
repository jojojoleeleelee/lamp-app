import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Verse } from '../components/Verse'
class VerseRandom extends React.Component {

  state = {
    verses: ''
  }

  handleRandom() {
    
  }

  render() {
    return (
      <div className='center-align'>
      <h4>Surprise me!</h4>

        <button className="waves-effect waves-light btn" onClick={this.handleRandom}>Random Verse</button>

      </div>
    )
  }
}
// also need connect(maDispatchToProps and state for REDUX!)
export default VerseRandom
// connect(mapStateToProps, mapDispatchToProps)(VerseRandom)
