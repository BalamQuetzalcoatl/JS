import React from 'react';
import Presupuesto from './Presupuesto';
import Restante from './Restante';
import PropTypes from 'prop-types';

class ControlPresupuesto extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Presupuesto presupuesto={this.props.presupuesto}/>
      <Restante restante={this.props.restante} prosupuesto={this.props.presupuesto} />
      </React.Fragment>
    );
  }
}

ControlPresupuesto.PropTypes = {
  presupuesto: PropTypes.string.isRequired,
  restante: PropTypes.string.isRequired
}

export default ControlPresupuesto;
