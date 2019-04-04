import React, {Component} from 'react';
import {revisarPresupuesto} from '../helper';
class Restante extends Component{
  render() {
    const presupuesto = Number(this.props.prosupuesto);
    const restante = Number(this.props.restante);
    return (
      <div className={revisarPresupuesto(presupuesto, restante)}>
        <p>Restante: ${this.props.restante}</p>
      </div>
    );
  }
}

export default Restante;
