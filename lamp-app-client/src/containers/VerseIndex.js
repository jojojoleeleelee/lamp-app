import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import VerseCard from '../components/VerseCard'

export default class VerseIndex extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="center-align">
          <h4>Verses Collection</h4>
          <hr />
        </div>
        {this.props.verses !== [] ? <VerseCard/> : null}
      </div>
    )
  }
}
