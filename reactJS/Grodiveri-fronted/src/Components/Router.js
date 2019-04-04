import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './Header/Header';
import Home from './Home/Home';

class Router extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="clearfix">
          <Header/>
        <Route>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default Router;
