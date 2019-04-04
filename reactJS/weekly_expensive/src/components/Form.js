import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {

 nameRef = React.createRef();
 countRef = React.createRef();

  cretedExpensive = (e) =>{
    e.preventDefault();

    // Created Object
    const gastos = {
      nameRef : this.nameRef.current.value,
      countRef: this.countRef.current.value
    }

    console.log(gastos);

    // Added and post

    this.props.addedGastos(gastos);

    // Reset form
    e.currentTarget.reset();


  }
  render() {
    return (
      <form onSubmit={this.cretedExpensive}>
        <h2>Agrega tus gastos aquí</h2>
          <div className="campo">
            <label>Nombre Gasto</label>
            <input className="u-full-width" type="text" placeholder="Ej. Transporte" ref={this.nameRef} />
          </div>
          <div className="campo">
              <label>Cantidad</label>
              <input className="u-full-width" type="text" placeholder="Ej. 300" ref={this.countRef}/>
          </div>
        <input className="button-primary u-full-width" type="submit" value="Agregar" />
      </form>
    );
  }
}

Form.PropTypes= {
  addedGastos: PropTypes.func.isRequired
}

export default Form;
