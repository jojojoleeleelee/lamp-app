import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Verse } from '../components/Verse'

export default class VerseRandom extends React.Component {
  handleOnClick = () => {
    // need to create a function to load random verse
    // this.props.loadRandomVerse()
  }

  render() {
    return (
      <div className='center-align'>
      <h4>Surprise me!</h4>

        <button className="waves-effect waves-light btn" onClick={this.handleOnClick}>Random Verse</button>

      </div>
    )
  }
}
