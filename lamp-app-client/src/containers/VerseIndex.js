import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VerseCard from '../components/VerseCard'

import { loadVerses } from '../actions/verses'
import axios from 'axios'

class VerseIndex extends React.Component {

  componentDidMount() {
    this.props.getVerses()
    }

  render() {
    return(
      <div>
      Hello
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    verses: state.verses,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVerses: bindActionCreators(loadVerses, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(VerseIndex)
