import React from 'react';
export const Footer = () => {

  return (
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">LAMP</h5>
            <p class="grey-text text-lighten-4">The grass withers and the flowers fall, but the word of our God endures forever. - Isaiah 40:8</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="/verses">All Verses</a></li>
              <li><a class="grey-text text-lighten-3" href='/myverses'>Search Verses</a></li>
              <li><a class="grey-text text-lighten-3" href="/verses/random">Random Verses</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        © 2018 Copyright Joanne Lee
        <a class="grey-text text-lighten-4 right" href="/about">About</a>
        </div>
      </div>
    </footer>
  )
}
