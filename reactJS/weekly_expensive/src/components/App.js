import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Form from './Form';
import Listado from './Listado';
import {validarPresupuesto} from '../helper';
import ControlPresupuesto from './ControlPresupuesto';


class App extends Component {


  state = {
    presupuesto: '',
    restantes: '',
    gastos: {  }
  }

  addedGastos = gasto => {
    // copy state actual
    const gastos = {...this.state.gastos};
    // added gastos to this.state.
    gastos[`gasto${Date.now()}`] = gasto;
    this.restPresupuesto(gasto.countRef)
    // put in state
    this.setState({
      gastos
    })
  }

  componentDidMount(){
    this.getPresopuesto(false);
  }

  getPresopuesto = (i = false) => {
    let presupuesto = prompt((i) ? 'Por favor ingresa la cantidad':'¿Cuál es tu presupuesto?');
    let resultado = (validarPresupuesto(presupuesto));
    if (resultado) {
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      });
    } else {
      this.getPresopuesto(true);
    }
  }

  restPresupuesto = cantidad => {
    let restar = Number(cantidad);
    let restante = this.state.restante;
    restante -= restar;
    console.log(restante);
    this.setState({
      restante: restante
    })
  }

  render() {
    return (
      <div className="App container">
        <Header title="Weekly Expensive" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Form addedGastos={this.addedGastos}/>
            </div>
            <div className="one-half column">
              <Listado gastos={this.state.gastos}/>
            <ControlPresupuesto presupuesto={this.state.presupuesto} restante={this.state.restante}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
