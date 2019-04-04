import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Form from './Form';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../Helper'; // using {} where this a function
import Resumen from '../components/Resumen';

class App extends Component {

  state = {
    resfull : '',
    datos: {}
  }

  cotizarSeguro = (datos) => {
    const {marca, plan, year } = datos;
    let resfull = 2000;
    // get difference between year
    let difference = obtenerDiferenciaAnio(year);
      resfull -= ((difference * 3) * resfull) / 100;
      resfull = calcularMarca(marca) * resfull;
      let incremento = obtenerPlan(plan);
      resfull = parseFloat(incremento * resfull).toFixed(2);

      const datosAuto = {
        marca: marca,
        plan: plan,
        year: year
      };

      this.setState({
        resfull : resfull,
        datos: datos
      });
      console.log(resfull);

  }

  render() {
    return (
      <div className="contenedor">
        <Header title="Cotizador de auto (auto quote)"/>
        <div className="contenedor-formulario">
          <Form cotizarSeguro={this.cotizarSeguro}/>
          <Resumen datos= {this.state.datos} resfull= {this.state.resfull}/>
        </div>
      </div>
    );
  }
}

export default App;
