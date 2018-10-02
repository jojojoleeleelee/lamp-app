import React from 'react';
import { connect } from 'react-redux';

import { Verse } from '../components/Verse'
import VerseCard from '../components/VerseCard';

import { loadRandomVerse } from '../actions/verses'

class VerseRandom extends React.Component {

  handleRandom = () => {
    this.props.loadRandomVerse()
  }

  render() {

    return (
      <div className='center-align'>
      <h4>Surprise me!</h4>

        <button className="waves-effect waves-light btn" onClick={this.handleRandom}>Random Verse</button>
        <br />
        <br />
        <hr />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    verse: state.verses
  }
}

export default connect(mapStateToProps, {
  loadRandomVerse
})(VerseRandom)
