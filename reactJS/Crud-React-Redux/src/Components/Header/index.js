import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">
        <Link to={'/'} className="text-light">CRUD - React, Redux, REST & Axios</Link>
        <Link to={'/products/new'} className="btn btn-danger nuevo-post">Add product &#43;</Link>
      </nav>
    )
  }
}

export default Header;
