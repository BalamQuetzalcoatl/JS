import React, { Component } from 'react';
import '../css/App.css';
import Header from '../components/Header';
import Form from '../components/Form';
import Error from '../components/ErrorForm';
import Weather from '../components/Weather';

class App extends Component {
  state = { emptier: false, consult:{}, response: {} }

  componentDidUpdate(prevProps, prevState){
    console.log('props');
      if (prevState.consult !== this.state.consult) {
        this.consultAPI();
      }
  }

  dataConsultinge = (e) => {
    if(e.city === '' || e.country === ''){
      console.log('Error dataConsulting');
      this.setState({ emptier: true });
    }
    else{
      console.log('All right, dataConsulting');
      this.setState({ emptier: false, consult: e });
    }
  }

  consultAPI = () => {
    const {city, country} = this.state.consult;
    if(!city || !country) {return null};
    const appID = '60db8390ca88f9cb9671c2bbcf734e40';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appID}`;
    console.log(url);
    fetch(url).then(response =>{
        return response.json(); // console.log(response.json());
    }).then(data=>{
      // console.log(data + 'data');
      this.setState({response: data, emptier: false});
    }).catch(error =>{
      console.log(error);
    });
  }

    render() {
      let result;
      console.log(this.state.response.cod + " code");
      if(this.state.response.cod === 404 || this.state.response.cod === '404'){
        result = <Error message="Error country not found"/>
      }
      else if(this.state.emptier){
         result = <Error message="Error complete this fields"/>
      }
      else {
        result = <Weather response={this.state.response}/>
      }

        return (
          <div className = "App" >
              <Header titulo="Weather"/>
              <Form dataConsulting={this.dataConsultinge}/>
              {result}
          </div>
        );
    }
}

export default App;
