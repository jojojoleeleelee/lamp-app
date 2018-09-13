import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

  return (
    <nav className="blue-grey darken-4">
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo center">LAMP</NavLink>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><NavLink to="/myverses" exact="true">My Verses</NavLink></li>
          <li><NavLink to="/verses" exact="true">All Verses</NavLink></li>
          <li><NavLink to="/verses/random" exact="true">Random</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
