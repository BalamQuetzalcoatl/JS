import React, { Component } from 'react';
import '../css/App.css';
import Header from '../components/Header';
import AddCites from '../components/AddCites';
import ListCities from '../components/ListCities';
class App extends Component {

componentDidMount() {
  const citeLS = localStorage.getItem('cites');
  if(citeLS){
    this.setState({
      cites: JSON.parse(citeLS)
    })
  }
}

componentDidUpdate(){
  localStorage.setItem('cite', JSON.stringify(this.state.cite))
}

  state = {
    cite: []
  }

  createCite = (newCite) => {
    // console.log(cite);
    const cite = [...this.state.cite, newCite];
    console.log(cite);
    this.setState({
      cite
    });

  }

  deleteCite = (id) =>
  {
    //console.log(id);
    //Get copy this.state.
    const citeActual = [...this.state.cite]
    //console.log(citeActual);
    const citas = citeActual.filter(cite => cite.id !== id);
    console.log(citas);
    this.setState({
      cite: citas
    })
  }

  render() {
    return (
      <div className="container">
        <Header title="Administrator about pacients" />
        <div className="row">
          <div className="col-md-8">
            <AddCites createCite={this.createCite}/>
          </div>
          <div className="col-md-4">
            <ListCities cite = {this.state.cite} deleteCite={this.deleteCite}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
