import React from 'react';
import '../css/header.css';
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <nav aria-label="breadcrumb" className="pad-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <p className="navbar-brand" href="#">
        <img src="images/logo.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
      </p>
      <p className="navbar-brand" >Experl</p>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link to={'/'} className="nav-link">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link to={'/us'} className="nav-link">About <span className="sr-only">(current)</span></Link>
          </li>
        </ul>
      </div>
    </nav>
  </nav>
  )
}

export default Header;
