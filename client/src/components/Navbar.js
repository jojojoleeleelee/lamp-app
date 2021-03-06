import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  return (
    <nav className="brown lighten-2">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo center">LAMP</Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><Link to="/myverses" exact="true">Search</Link></li>
          <li><Link to="/verses" exact="true">All Verses</Link></li>
          <li><Link to="/verses/random" exact="true">Random Verse</Link></li>
          <li><Link to="/prayers" exact="true">Prayer</Link></li>
          <li><Link to="/about" exact="true">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}
