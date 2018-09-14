import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VerseCard from '../components/VerseCard'
import { loadVerses } from '../actions/verses'
import axios from 'axios'

export default class VerseIndex extends React.Component {

  createCards = () => {

  }
  componentDidMount() {
    this.props.getVerses()
    }


  render() {
    return(
      {this.state.verses}
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
