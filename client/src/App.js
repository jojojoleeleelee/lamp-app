import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar'

import Home from './containers/Home'
import MyVerses from './containers/MyVerses'
import VerseShow from './containers/VerseShow'
import VerseRandom from './containers/VerseRandom'
import VerseIndex from './containers/VerseIndex'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <Navbar />
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
      </Router>
      </div>
    );
  }
}

export default App;
