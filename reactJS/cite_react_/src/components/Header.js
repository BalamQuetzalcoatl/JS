import React from 'react';

const Header = props => {
    return (
      <header>
        <div className="h1 text-center">
          <p>{props.title}</p>
        </div>
      </header>
    );
}

export default Header;
