import React from 'react';

class Cita extends React.Component {
  state = {  }
  deleteCite = (id) => {
    // read state
    this.props.deleteCite(this.props.info.id);
    // delete state
  }
  render() {
    const {datePet, hourRef, id, nameMascotRef, noteRef} = this.props.info;
    return (
      <div className="media mt-3">
        <div className="media-body">
          <h3 className="mt-0">Pet name: {nameMascotRef}</h3>
          <p className="card-text"><span>Name of owner: {datePet}</span></p>
          <p className="card-text"><span>Date: {datePet}</span></p>
          <p className="card-text"><span>Hour: {hourRef}</span></p>
          <p className="card-text"><span>symptom: {noteRef ?  noteRef:'No there are'}</span></p>
          <p className="card-text"><span>Id: {id}</span></p>
          <p><button className="btn btn-danger" onClick={this.deleteCite}>Delete &times;</button></p>
        </div>
      </div>
    );
  }
}

export default Cita;
