import React, {Component} from 'react';

class SinglePage extends Component{

  render(){
    const {nombre, precio, imagen, descripcion} = this.props.product;
    return(
      <div className="row">
        <div className="col-md-4">
          <img src={`/images/${imagen}`} alt={imagen} />
        </div>
        <div className="col-md-8">
          <h3>{nombre} <span className="badge badge-secondary">${precio}</span></h3>
        {descripcion}
        </div>
      </div>
    )
  }
}

export default SinglePage;
