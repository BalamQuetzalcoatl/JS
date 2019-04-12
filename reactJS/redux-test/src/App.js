import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import store from './redux/store';

import Result from './components/Result.component';
import Default from './components/Detail.component';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Switch>
              <Route path="/results" component={Result} />
              <Route path="/details/:itemId" component={Default} />
              <Redirect from='/' to='/results' />
            </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
