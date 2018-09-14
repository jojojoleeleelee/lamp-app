import React from 'react';
// Don't connect to Redux yet - want to do some testing
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import axios from 'axios';

import VerseCard from '../components/VerseCard'

export default class VerseIndex extends React.Component {
  constructor(props){
        super(props)
        this.state = {
            verses: []
        }
    }
  componentDidMount() {
      axios.get('http://localhost:3001/api/v1/verses.json')
      .then(response => {
          console.log(response)
          this.setState({
              verses: response.data
          })
      })
      .catch(error => console.log(error))
  }

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
