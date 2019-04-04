import React, {Component} from 'react';

//Redux

import {connect} from 'react-redux';

import {showProducts, updateProducts} from './../../Actions/ProductsAction';

class EditProduct extends Component{

  state = {
    nombre: '',
    precio: 0,
    error: false
  }

  componentDidMount(){
    this.props.showProducts(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps, nextState){
    const {nombre, precio} = nextProps.product;
    this.setState({nombre, precio});

  }

  nameProduct = (e) => {
    this.setState({nombre: e.target.value});
  }

  priceProduct = (e) => {
    this.setState({precio: e.target.value});
  }


  updateProducto = (e) => {
    e.preventDefault();
    const {id} = this.props.match.params;
    const {nombre, precio} = this.state;
    if(nombre.length === 0 || precio.length === 0){
      this.setState({error:true});
    }else{
      this.setState({error:false});
      this.props.updateProducts({nombre, precio, id});
      this.props.history.push('/');
    }
  }

  render(){
    const {error, nombre, precio} = this.state;

    return(
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center">Agregar Nuevo Producto</h2>
                  <form onSubmit={this.updateProducto}>
                        <div className="form-group">
                            <label>Titulo</label>
                          <input onChange={this.nameProduct} value={nombre} type="text" className="form-control" placeholder="Titulo" />
                        </div>
                        <div className="form-group">
                            <label>Precio del Producto</label>
                          <input onChange={this.priceProduct} value={precio} type="text" className="form-control" placeholder="Precio" />
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
const mapSateToProps = state => ({
  product: state.products.product
})

export default connect(mapSateToProps, {showProducts, updateProducts})(EditProduct);
