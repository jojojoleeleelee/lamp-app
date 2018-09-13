import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { navbar } from '../actions/site'
import logo from '../lamp-logo.png'

class Landing extends React.Component {
  componentWillMount() {
    this.props.navbar(false)
  }

  componentWillUnmount(){
    this.props.navbar(true)
  }

  render(){
    return (
      <div>
        <div className="center-align">
        <br /><br />
        <br /><br />
          <h5>"Thy word is a <emp>LAMP</emp> unto my feet</h5>
          <h5>And a light unto my path"</h5>
          <h5> - Psalm 119:105</h5>
          <br /><br />
          <Link to="/myverses">
            <span>
              <img src={logo} alt="lamp-logo" height="300" /><br /><br />
              <br /><br />
              <h1><strong>LAMP</strong></h1>
              <br /><br />
              <h5>My Verses</h5>
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


export default connect(mapStateToProps, mapDispatchToProps)(Landing)
