import React, { Component } from 'react'
import Verse from '../containers/Verse'
import axios from 'axios'
class VerseContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      verses: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/verses.json')
    .then(res => {
      console.log(res)
      this.setState({
        verses: res.data
      })
    }).catch(error => console.log(error))
  }

  render() {
    return (
      <div className="verse-container">
      {this.state.verses.map( verse => {
        return (<Verse verse={verse} key={verse.id}/>)
      })}
      </div>
    )
  }
}
export default VerseContainer
