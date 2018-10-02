import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { navbar } from '../actions/site'
import logo from '../lamp-logo.png'

class About extends React.Component {

  render(){
    return (
      <div>
        <div className="center-align">
        <br />
        <br />
          <Link to="/verses">
            <span>
            <h3><strong>About L A M P:</strong></h3>
            <br />
            <br />
              <img src={logo} alt="lamp-logo" height="300" /><br />
              <h3><strong>The unfolding of your words gives light;
it gives understanding to the simple. </strong></h3>
              <h5>- Psalm 119:130</h5>
              <br />
              <br /><br />
              <br /><br />
              <h6>Seek, read and treasure words of truth.</h6>
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    navbar: navbar,
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(About)
