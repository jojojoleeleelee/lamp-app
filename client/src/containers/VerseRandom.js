import React from 'react';
import { connect } from 'react-redux';

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
        {this.props.verse.verse !== '' ? <VerseCard key={this.props.verse.id} index={this.props.verse.id} verse={this.props.verse} /> : null }
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
