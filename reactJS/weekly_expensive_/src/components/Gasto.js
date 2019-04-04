import React, {Component} from 'react';
import PropTypes from 'prop-types';
class  Gasto extends Component {
  render() {
    const {nameRef, countRef} = this.props.gasto;
    return (
          <li className="gastos">
            <p>{nameRef} <span className="gasto">$ {countRef}</span></p>
          </li>
    );
  }
}

Gasto.PropTypes = {
  gasto : PropTypes.object.isRequired
}

export default Gasto;
