import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { Navbar } from './components/Navbar'

import Home from './containers/Home'
import MyVerses from './containers/MyVerses'
import VerseShow from './containers/VerseShow'
import VerseRandom from './containers/VerseRandom'
import VersesIndex from './containers/VersesIndex'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>LAMP</h1>
        <Router>
        <div>
          {this.props.site.navbar ? <Navbar /> : null}
          <div className={this.props.site.myBar ? "" : "container"}>
            <div className="col s-12">
            <Switch>
              <Route exact path ="/" component={Home} />
              <Route exact path ='/myverses' component={MyVerses} />
              <Route exact path="/verses" component={VerseIndex} />
              <Route exact path="/verses/random" component={VerseRandom} />
              <Route exact path='/verses/:id' component={VerseShow} />
            </Switch>
            </div>
          </div>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
