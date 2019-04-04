import React from 'react';
import PropTypes from 'prop-types';
const Header = (props) => {
  return(
      <div>
        <header>
          <div className="nav-wrapper light-blue darken-2">
            <div className="brand-logo"><h2>{props.titulo}</h2></div>
          </div>
        </header>
      </div>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired
}

export default Header;
