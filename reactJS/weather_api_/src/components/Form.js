import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

citiesRef = React.createRef();
countriesRef = React.createRef();


searchWeather = (e) => {
  e.preventDefault();
  const resp = {
    city: this.citiesRef.current.value,
    country: this.countriesRef.current.value
  }
  this.props.dataConsulting(resp);
}

  render() {
    return (
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <form onSubmit={this.searchWeather}>
            <div className="input-field col s12 m8 l4 offset-m2">
              <input id="city" type="text" ref={this.citiesRef} autoComplete="off"/>
              <label htmlFor="city">City</label>
            </div>
            <div className="input-field col s12 m8 l4 offset-m2">
              <select ref={this.countriesRef}>
                <option value="" defaultValue>choose option</option>
                <option value="AR">ARGENTINA</option>
                <option value="CO">COLOMBIA</option>
                <option value="CR">COSTA RICA</option>
                <option value="ES">ESPAÑA</option>
                <option value="US">ESTADOS UNIDOS</option>
                <option value="MX">MÉXICO</option>
                <option value="PE">PERÚ</option>
              </select>
              <label htmlFor="country"></label>
            </div>
            <div className="input-field col s12 m8 l4 offset-2 buscador">
              <button type="submit" className="waves-effect waves-light btn-large yellow accent-4">Buscar</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  dataConsulting: PropTypes.func.isRequired
}

export default Form;
