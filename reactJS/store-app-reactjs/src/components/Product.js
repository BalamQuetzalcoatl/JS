import React from 'react';
import {Link} from 'react-router-dom';

const Product = (e) => {
  const {id, imagen, precio, nombre} = e.info;
  return(
    <div className="card">
      <img className="card-img-top" src={`/images/${imagen}`} alt={imagen}/>
      <div className="card-body">
        <h5 className="card-title">{nombre} <span className="badge badge-secondary">${precio}</span>
        </h5>
        <p className="card-text"><Link to={`/product/${id}`} className="btn btn-warning btn-block">See more</Link> </p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  )
}

export default Product;
