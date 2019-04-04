import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import {addedProducts} from './../../Actions/ProductsAction';

class NewProduct extends Component{

  state = {
    nombre: '',
    precio: 0,
    error: false
  }

  nameProduct = (e) => {
    this.setState({nombre: e.target.value})
  }

  priceProduct = (e) => {
    this.setState({precio: e.target.value})
  }


  newProducto = (e) => {
    e.preventDefault();

    const {nombre, precio} = this.state;
    if(nombre.length === 0 || precio.length === 0){
      this.setState({error:true});
    }else{
      this.setState({error:false});
      this.props.addedProducts({nombre: this.state.nombre, precio: this.state.precio});
      this.props.history.push('/');
    }
  }

  render(){
    const {error} = this.state;
    return(
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center">Agregar Nuevo Producto</h2>
                  <form onSubmit={this.newProducto}>
                        <div className="form-group">
                            <label>Titulo</label>
                          <input onChange={this.nameProduct} type="text" className="form-control" placeholder="Titulo" />
                        </div>
                        <div className="form-group">
                            <label>Precio del Producto</label>
                          <input onChange={this.priceProduct} type="text" className="form-control" placeholder="Precio" />
                        </div>
                        {(error) ? <div className="form-group">
                                      <button type="button" className="btn btn-danger font-weight-bold text-uppercase d-block w-100" placeholder="Precio">Completa todos los campos</button>
                                   </div>: null}
                        <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default connect(null, {addedProducts})(NewProduct);
