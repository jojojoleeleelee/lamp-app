import React from 'react'

class LikeButton extends React.Component {

  constructor() {
    super();
    this.state = {
      likes: 0
    }
    // this
    // this.addLikes = this.addLikes.bind(this)
  }

  addLikes = () => {
    console.log("Likes!")
    let add = this.state.likes + 1;
    this.setState(prevState => {
      return {likes: prevState.likes + 1}
    })
  }
  render() {
    return (
      <div>
        <p>Add Likes:  --
        <btn className="waves-effect waves-light btn" onClick={this.addLikes}>{this.state.likes}</btn></p>
      </div>
    )
  }
}


export default LikeButton

// Promise, async function, orders of function calls
