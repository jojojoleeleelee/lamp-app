import React from 'react';
import { connect } from 'react-redux';
import VerseCard from '../components/VerseCard';
import { loadVerses } from '../actions/verses';

class VerseIndex extends React.Component {

  componentDidMount() {
    this.props.loadVerses()
    }


  render() {
    return(
      <div>
        { this.props.verses.map( verse =>
        <VerseCard key={verse.id} index={verse.id} verse={verse} /> )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    verses: state.verses
  }
}

export default connect(mapStateToProps, {
  loadVerses
})(VerseIndex)
