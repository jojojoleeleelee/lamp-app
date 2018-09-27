import React from 'react';
import { connect } from 'react-redux';
import VerseCard from '../components/VerseCard';
import { loadNewVerses } from '../actions/verses';
// import { loadVerses } from '../actions/verses';
// import { bindActionCreators } from 'redux';

class VerseIndex extends React.Component {

  componentDidMount() {
    this.props.loadNewVerses()
    }


  render() {
    return(
      <div className="row">
      <h4>Browse All Verses</h4>
          <div className="center-align">
            <hr />
            
            {this.props.verses.map(verse =>
            <VerseCard key={verse.id} index={verse.id} verse={verse}/>)}

          </div>
        </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    verses: state.verses
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getVerses: bindActionCreators(loadVerses, dispatch),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(VerseIndex)

export default connect(mapStateToProps, {
  loadNewVerses
})(VerseIndex)
