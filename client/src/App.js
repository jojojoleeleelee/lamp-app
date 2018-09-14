import React, { Component } from 'react';
import logo from './lamp-logo.png'
import './App.css';
import VerseContainer from './components/VerseContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <div className="center-align">
        <br /><br />
        <br /><br />
          <h5>"Thy word is a LAMP unto my feet</h5>
          <h5>And a light unto my path"</h5>
          <h5> - Psalm 119:105</h5>
          <br /><br />

            <span>
              <img src={logo} alt="lamp-logo" height="300" /><br /><br />
              <VerseContainer />
              <br /><br />
              <h1><strong>LAMP</strong></h1>
              <br /><br />
              <h5>My Verses</h5>
              <br /><br />

              <br /><br />
              <br /><br />
            </span>

        </div>
      </div>
      </div>
    );
  }
}

export default App;
