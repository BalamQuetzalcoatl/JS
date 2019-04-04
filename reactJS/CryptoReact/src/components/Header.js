import React from 'react';

const Header = (e) => {
  return(
    <header>
      <h1 className="text-center">{e.title}</h1>
    </header>
  );
}

export default Header;
