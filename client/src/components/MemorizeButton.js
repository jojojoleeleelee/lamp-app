import React from 'react';

export default class MemorizeButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleMemorize = this.handleMemorize.bind(this);
    this.state={
      memorized: false
    }
  }
  handleMemorize() {
    this.setState({
      memorized : !this.state.memorized
    })
  }

  render() {
    return (
      <div>
        <h5> M E M O R I Z E D ? </h5>
          <br />
          <btn className="waves-effect waves-light btn" onClick={this.handleMemorize} id="memorize">{this.state.memorized ? "N O" : "Y E S"}</btn>
      </div>
    )
  }
}
