import React, { Component, Fragment} from 'react'
import Navbar from './navbar';

class Home extends Component {
  render(){
    return(
      <Fragment>
        <Navbar/>
        <div className="container">
          <h2>Home</h2>
        </div>
      </Fragment>
    );
  }
}

export default Home;
