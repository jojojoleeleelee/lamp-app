import React from 'react';
import { connect } from 'react-redux';
import { loadVerse } from '../actions/verses'

import Verse from '../components/Verse';

class VerseShow extends React.Component {
  componentDidMount() {
    this.props.loadVerse(this.props.match.params.id)
  }

  render() {
    return (
      <div>
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
  loadVerse
})(VerseShow)
