import React, { Component } from 'react';
import '../css/App.css';
import Header from '../components/Header';
import Form from '../components/Form';
import Response from '../components/Response';
import axios from 'axios';

class App extends Component {
state = {coin: [], quote: {}, cointMoney: null, loading: false};
async componentDidMount(){
  this.getMoney();
}
getMoney = async() => {
   await axios.get(`https://api.coinmarketcap.com/v2/listings/`).then(e => {
    this.setState({coin: e.data.data});
  })
  .catch(e => {
    console.error(e);
  });
}

getValue =  async(e) => {
  this.setState({loading: true});
  const {coin, crip} = e;
  await axios.get(`https://api.coinmarketcap.com/v2/ticker/${crip}/?convert=${coin}`)
    .then(response => {
      setTimeout(() =>{
        this.setState({quote:response.data.data, cointMoney:coin, loading: false});
      }, 3000);
    })
    .catch(response=> {
      console.log(response);
    });
}
  render() {
    const loader = (this.state.loading) ? <div className="spinner"></div>: '';
    return (
      <div className="container">
        <Header title="CryptoMoney System" />
        <Form coin={this.state.coin} getValue={this.getValue}/>
      {loader}
        <Response quote={this.state.quote} cointMoney={this.state.cointMoney} />
      </div>
    );
  }
}

export default App;
