import React from 'react';
import { connect } from 'react-redux';

import Verse from '../components/Verse';
import { loadRandomVerse } from '../actions/verses'

class VerseRandom extends React.Component {

  handleRandom = () => {
    this.props.loadRandomVerse()
  }

  render() {

    return (
      <div className='center-align'>
        <br/>
        <br/>
        <br/>
        <button className="waves-effect waves-light btn" onClick={this.handleRandom}>Random Verse</button>
        <br />
        <br />
        <br />
        <hr />
        {this.props.verse.verse !== '' ? <Verse key={this.props.verse.id} index={this.props.verse.id} verse={this.props.verse} /> : null }
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
