import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Redux
import {connect} from 'react-redux';
import {deletedProducts} from './../../Actions/ProductsAction';

class Products extends Component {

  deleteProduct = () => {
    const {id} = this.props.product;
    this.props.deletedProducts(id);
  }

  render(){
    const {nombre,precio, id} = this.props.product;
    return(
      <li className="list-group-item">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 text-dark">
             {nombre}
          </div>
          <div className="col-md-1 text-dark">
            <span className="badge badge-warning text-dark">${precio}</span>
          </div>
          <div className="col-md-5 d-flex justify-content-end text-dark">
            <Link to={`/products/edit/${id}`} className="btn btn-primary text-center mr-2">edit</Link>
          <button onClick={this.deleteProduct} type="button" className="btn btn-danger text-center">delete</button>
          </div>
        </div>
      </li>
    )
  }
}


export default connect(null, {deletedProducts})(Products);
