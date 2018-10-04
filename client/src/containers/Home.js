import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../lamp-logo.png'

class Home extends React.Component {

  render(){
    return (
      <div>
        <div className="center-align">
        <br /><br />
        <br /><br />
          <h5>"Thy word is a LAMP unto my feet</h5>
          <h5>And a light unto my path"</h5>
          <h5> - Psalm 119:105</h5>
          <br /><br />
          <Link to="/verses">
            <span>

            <h1>L A M P</h1>
              <img src={logo} alt="lamp-logo" height="300" className="blink_me"/><br /><br />

              <br />
              <br /><br />
              <br /><br />
              <br /><br />
              <br /><br />
            </span>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    site: state.site
  }
}



export default connect(mapStateToProps)(Home)
