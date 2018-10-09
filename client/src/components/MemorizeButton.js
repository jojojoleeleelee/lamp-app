import React from 'react';
import { connect } from 'react-redux'
import { memorizeVerse } from '../actions/verses'

class MemorizeButton extends React.Component {

  handleMemorized = () => {
    console.log(this.props.verse)
    this.props.memorizeVerse(this.props.verse)
  }
  render() {
    return (
      <div>
        <h5> M E M O R I Z E D ? </h5>
          <br />
          <btn className="waves-effect waves-light btn" onClick={this.handleMemorized} id="memorize">{this.props.verse.memorized ? "Y E S" : "N O"}</btn>
      </div>
    )
  }
}

const mapStateToProps = state => {
  verse: state.verses
}


export default connect(mapStateToProps, {
  memorizeVerse
})(MemorizeButton)
