import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Verse } from '../components/Verse'

export default class MyVerses extends React.Component {
  render() {
    return (
      <h1>the word of God</h1>
    )
    // I want to have Verses as cards that can be flipped over and pressed
  }
}