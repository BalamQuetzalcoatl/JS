import React, {Component} from 'react';
import OptionSelectApi from './OptionSelectApi';

class Form extends Component {
  state = {};

  coinRef = React.createRef();
  criptRef = React.createRef();

  quoteCoin = (e) => {
    e.preventDefault();
    const reactData = {
      coin: this.coinRef.current.value,
      crip: this.criptRef.current.value
    }
    this.props.getValue(reactData);
  }

  render(){
    return(
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Fluid jumbotron</h1>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      <div className="col-md-12">
        <form onSubmit={this.quoteCoin}>
          <div className="form-row">
            <div className="col">
              <label>Choose type coin</label>
            <select className="form-control" ref={this.coinRef}>
                  <option value="0" disabled defaultValue>Choose your prefer option</option>
                  <option value="USD">United State</option>
                  <option value="MXN">Libras</option>
                  <option value="EUR">Euro</option>
                </select>
            </div>
            <div className="col-sm">
              <label>Criptomney</label>
            <select className="form-control" ref={this.criptRef}>
              {Object.keys(this.props.coin).map(e => (
                <OptionSelectApi coin={this.props.coin[e]} key={e}/>
              ))}
            </select>
            </div>
            <div className="col-sm">
              <label></label>
            <button className="btn btn-danger btn-block" type="submit" >Cotizar</button>
            </div>
          </div>
        </form>
      </div>
        </div>
      </div>

    );
  }
}

export default Form;
