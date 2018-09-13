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
          <h1><strong>LAMP</strong></h1>
          <h5>You word is a light unto my feet</h5>
          <h5>And a guide to my path</h5>
          <br /><br />
          <Link to="/myverses">
            <span>
              <img src={logo} alt="lamp-logo" height="300" /><br /><br />
              <h5>Find Verses</h5>
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
