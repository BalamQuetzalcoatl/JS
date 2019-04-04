import React from 'react';
import Gasto from './Gasto';

class Listado extends React.Component {
  render() {
    return (
      <div className="gastos-realizados">
        <h2>Gastos lista</h2>
        {console.log(this.props.gastos)}
        {Object.keys(this.props.gastos).map(key=>(<Gasto key={key} gasto={this.props.gastos[key]} />))}
      </div>
    );
  }
}

export default Listado;
