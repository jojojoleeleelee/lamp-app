import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Verse } from '../components/Verse'
import { loadRandomVerse } from '../actions/verses'
import { unloadVerse } from '../actions/verses'

class VerseRandom extends React.Component {

  handleRandom = () => {
    this.props.loadRandomVerse()
  }

  componentWillUnmount() {
    this.props.unloadVerse()
  }

  render() {
    return (
      <div className='center-align'>
      <h4>Surprise me!</h4>

        <button className="waves-effect waves-light btn" onClick={this.handleRandom}>Random Verse</button>
        <br />
        <br />
        <hr />
        {this.props.verse !== '' ? <Verse verse={this.props.verse} /> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    verse: state.verses.verse
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadRandomVerse: loadRandomVerse,
    unloadVerse: unloadVerse
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(VerseRandom)
