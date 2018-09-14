import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadVerse } from '../actions/verses'
import { Verse } from '../components/Verse'

class VerseShow extends React.Component {
  componentDidMount() {
    this.props.loadVerse(this.props.match.params.id)
  }

  render() {
    return (
      <div>
      {this.props.verse !== ''} ? <Verse verse={this.props.verse} /> : null}
      </div>
    )
    // I want to have Verses as cards that can be flipped over and pressed
  }
}


const mapStateToProps = (state) => {
  return {
    verse: state.verses.verse
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadVerse: loadVerse
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(VerseShow)
