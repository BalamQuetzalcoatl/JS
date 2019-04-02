import React from 'react';
import {primeraMayuscula} from '../Helper';
import Result from '../components/Result';
class Resumen extends React.Component {

ShowResumen = () => {
  const {marca, plan, year } = this.props.datos;
  if (!marca || !plan || !year) return null;
    return(
      <div className="resumen">
        <h2>Resumen </h2>
        <li>Marca: {primeraMayuscula(marca)}</li>
        <li>Plan: {primeraMayuscula(plan)}</li>
        <li>Año: {primeraMayuscula(year)}</li>
      </div>
    );

}

  render() {
    return (
      <div>{this.ShowResumen()} <Result resfull = {this.props.resfull}/></div>
    );
  }
}

export default Resumen;
