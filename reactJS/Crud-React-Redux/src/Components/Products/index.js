import React, {Component, Fragment} from 'react';

//Redux
import {connect} from 'react-redux';
import {SHOW_PRODUCTOS} from './../../Actions/ProductsAction';

// Products
import Product from './Products';

class Products extends Component {

  componentDidMount(){
      this.props.SHOW_PRODUCTOS();
      //console.log(this.props.SHOW_PRODUCTOS());
  }


  render(){
  //  console.log(this.props);
    const {products} = this.props;
    return(
      <Fragment>
        <h2 className="text-center my-5">Listado de Productos</h2>
        <div className="row justify-content-center">
            <div className="col-md-8">
              <ul>
                {products.map(key => (
                  <Product
                    key={key.id}
                    product={key}
                  />
                ))}
              </ul>
            </div>
          </div>
      </Fragment>
    )
  }
}

const mapSateToProps = state => ({
  products: state.products.products
})

export default connect(mapSateToProps, {SHOW_PRODUCTOS})(Products);
