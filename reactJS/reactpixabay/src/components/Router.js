import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

// Component
import Index from './Index/index';
import Error404 from './Error/Error404';

class Router extends Component {
  state = {
    termino: '',
    isActi: true,
    response: []
  }

  getApi = async() => {
    const data  = `https://pixabay.com/api/?key=11599365-766c778c0fe64fe36bd1cbed2&q=${this.state.termino}`;
    await axios.get(data)
      .then((response) => {
        this.setState({response});
      }).catch((err) => {console.log(err);});

  }

  getSearch = (e) => {
    this.setState({termino:e}, () => {this.getApi()})
  }

  render(){
    return(
      <BrowserRouter>
        <section className="section">
          <div className="container">
            <Route>
              <Switch>
                <Route exact path='/' render={()=>{ return (<Index getSearch={this.getSearch} activeM={this.state.isActi} response={this.state.response}/>)}}></Route>
                <Route component={Error404}></Route>
              </Switch>
            </Route>
          </div>
        </section>
      </BrowserRouter>
    )
  }
}

export default Router;
