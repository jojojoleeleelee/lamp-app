import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  return (
    <nav className="blue-grey darken-4">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo center">LAMP</Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><Link to="/myverses" exact="true">My Verses</Link></li>
          <li><Link to="/verses" exact="true">All Verses</Link></li>
          <li><Link to="/verses/random" exact="true">Random</Link></li>
          <li><Link to="/about" exact="true">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}
