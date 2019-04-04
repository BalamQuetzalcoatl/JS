import React, {Component} from 'react';
import Product from './Product';
import Search from './Search/Search';

class Products extends Component {
  render()
  {
    return(
      <div>
      <div className="h1 text-center">List products</div>
    <Search  search={this.props.search}/>
      <div className="card-columns">
        {Object.keys(this.props.products).map((e) => (<Product info = {this.props.products[e]} key={e}/>))}
      </div>
      </div>
    )
  }
}

export default Products;
