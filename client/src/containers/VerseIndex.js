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
      <br />
      { this.props.verses[3] !== undefined ? this.props.verses.map( verse =>
      <VerseCard key={verse.id} index={verse.id} verse={verse} /> ) : null}
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
