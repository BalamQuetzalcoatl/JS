import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <Link className="navbar-item" to={'https://bulma.io'}>
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
      </Link>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <Link className="navbar-item" to={'/'}>
        Home
      </Link>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
          Docs
        </a>
        <div className="navbar-dropdown is-boxed">
          <Link className="navbar-item" to={'create_new'}>
            Create a new
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header;
