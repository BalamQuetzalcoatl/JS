import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Products from './Products';
import Header from './Header';
import Us from './Us';
import Error from './Error';
import infoData from '../data/datos.json';
import SinglePage from './SinglePage';

class Router extends Component{
  state = {
    products: [],
    search: ''
  }

  componentWillMount(){
    this.setState({
      products: infoData
    })
  }

  search = (e) => {
      this.setState({search: (e.length > 2) ? e:''})
  }

  render(){
    let productos = [...this.state.products];
    let busqueda = this.state.search;
    let response;
    (busqueda !== '') ?
      response = productos.filter(e => (e.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1))
    : response = productos;

    return(
        <BrowserRouter>
          <div className="container">
            <Header />
          <Switch>
            <Route exact={true} path="/" render={() => <Products products={response} search={this.search} />}/>
            <Route exact={true} path="/us" component={Us}/>
          <Route exact={true} path='/product/:id' render={(e) => {
              return (
                  <SinglePage product={this.state.products[e.location.pathname.replace('/product/', '')]}/>
              )
            }} />
            <Route component={Error}/>
          </Switch>
        </div>
        </BrowserRouter>
    )
  }
}

export default Router;
