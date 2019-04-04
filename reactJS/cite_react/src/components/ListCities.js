import React from 'react';
import Cita from './Cita';

class ListCities extends React.Component {
  render() {
    return (
      <div className="card mt-5">
        <div className="body">
          <h2 className="card-title text-center">{!Object.keys(this.props.cite).length ? 'There aren´t any quotes': 'List about of cities'}</h2>
          <div className="lista-citas">
            {Object.keys(this.props.cite).map(cita => (<Cita key={cita} info={this.props.cite[cita]} deleteCite={this.props.deleteCite} />))}
          </div>
        </div>
      </div>
    );
  }
}

export default ListCities;
