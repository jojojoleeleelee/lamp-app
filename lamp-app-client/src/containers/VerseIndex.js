import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VerseCard from '../components/VerseCard'

import { loadVerses } from '../actions/verses'

class VerseIndex extends React.Component {

  componentDidMount() {
    this.props.getVerses()
    console.log(this.props)
    }

  render() {
    return(
      <div>
      <VerseCard />
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
    getVerses: bindActionCreators(loadVerses, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(VerseIndex)
