import React,{Component} from 'react';

class Response extends Component {

  showP = () => {
    const {name, quotes} = this.props.quote;
    const mney = this.props.cointMoney;
    if(!quotes) return null;
    const {market_cap, percent_change_1h, percent_change_7d,
      percent_change_24h, price, volume_24h} = quotes[mney];
    return(
      <div className="card animated fadeIn">
        <div className="card-header h2">
          {name} {mney}
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">market_cap : {market_cap}</p>
          <p className="card-text">percent_change_1h : {percent_change_1h}</p>
          <p className="card-text">percent_change_7d : {percent_change_7d}</p>
          <p className="card-text">percent_change_24h : {percent_change_24h}</p>
          <p className="card-text">price : {price}</p>
        <p className="card-text">volume_24h : {volume_24h}</p>
        </div>
      </div>
    )
  }

  render(){
    console.log(this.props.quote);
    return(
      <React.Fragment>
        {this.showP()}
      </React.Fragment>
    )
  }
}

export default Response;
