import React from "react";

import Logo from '../../images/logo.png'

function Header() {
  return (
    <>
      <nav className="navbar is-black  is-fixed-top">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src={Logo}
              alt="Bulma: a modern CSS framework based on Flexbox"
            />
          </a>
          <div
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navBar" className="navbar-menu">

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a
                    className="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="https://bulma.io"
                    target="_blank"
                    href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms"
                  >
                    <span className="icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                    <span>Github</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
