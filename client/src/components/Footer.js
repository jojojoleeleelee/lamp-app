import React from 'react';
export const Footer = () => {

  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">LAMP</h5>
            <p className="grey-text text-lighten-4">The grass withers and the flowers fall, but the word of our God endures forever. - Isaiah 40:8</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="/verses">All Verses</a></li>
              <li><a className="grey-text text-lighten-3" href='/myverses'>Search Verses</a></li>
              <li><a className="grey-text text-lighten-3" href="/verses/random">Random Verses</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2018 Copyright Joanne Lee
        <a className="grey-text text-lighten-4 right" href="/about">About</a>
        </div>
      </div>
    </footer>
  )
}
