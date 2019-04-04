import React, { Component, Fragment } from 'react';

// Redux
 import {Provider} from 'react-redux';
 import store from './../../store';

// React-Router-DOM
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Header
import Header from './../Header/index';

// Products
import Products from './../Products/index';
import EditProduct from './../Products/Edit';
import NewProduct from './../Products/New';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <Fragment>
              <Header/>
                <div className="container">
                  <Switch>
                      <Route exact path="/" component={Products}/>
                      <Route exaxct path="/products/edit/:id" component={EditProduct} />
                      <Route exact path="/products/new" component={NewProduct}/>
                  </Switch>
                </div>
            </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
