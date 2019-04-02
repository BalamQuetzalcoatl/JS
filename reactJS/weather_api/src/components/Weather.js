import React from 'react';
import PropTypes from 'prop-types';

class Weather extends React.Component {

  showWeather =  () => {
    const {name, weather, main} = this.props.response;
    if(!name || !main) return null; //console.error('Error weather');
    return (
      <div className="row">
        <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
          <div className="card-panel ligth-blue aling-center">
            <span className="black-text">
              <h2>City weather: {name}</h2>
              <p className="temperatura">Actual: {(main.temp - 273.15).toFixed(2)} &deg;C
              <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt={`${weather[0].icon}`}/>
              </p>
              <p className="temperatura">Max: {(main.temp_max - 273.15).toFixed(2)} &deg;C</p>
              <p className="temperatura">Actual: {(main.temp_min - 273.15).toFixed(2)} &deg;C</p>
            </span>
          </div>
        </div>
      </div>
    );
  }

  render(){
    // console.log(this.props.response);
    return(
      <div className="container">
        Weather
        <div>
          {this.showWeather()}
        </div>
      </div>
    );
  }
}

Weather.propTypes = {
  response: PropTypes.object.isRequired
}

export default Weather;
