import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Verse } from '../components/Verse'
export default class VerseRandom extends React.Component {

  state = {
    verses: ''
  }

  componentDidMount() {
    this.handleSubmit()
  }


  handleSubmit = (search = 'joy') => {
    console.log(search)
    'Authorization: Token 10f7a096a5e8fca1ddab7cc693473e6968b7aa4f'
    
    fetch(`https://api.esv.org/v3/passage/text/search?=${search}`)
    .then(res => res.json())
    .then(({data}) => this.setState({
      verses: data.map(verse => ({
        verse
      }))
    }))
  }

  render() {
    return (
      <div className='center-align'>
      <h4>Surprise me!</h4>

        <button className="waves-effect waves-light btn" onClick={this.handle}>Random Verse</button>

      </div>
    )
  }
}
// also need connect(mapStateToProps for REDUX!)
