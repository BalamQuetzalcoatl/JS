import React, {Component} from 'react';
import uuid from 'uuid';

class AddCites extends Component {

  // REfs
  nameMascotRef =  React.createRef();
  ownerPet = React.createRef();
  datePet = React.createRef();
  hourRef = React.createRef();
  noteRef = React.createRef();


  state = {
    error: false
  }

  createNewCite = (e) => {
    e.preventDefault();

    if (this.nameMascotRef.current.value === '' || this.ownerPet.current.value === '' || this.datePet.current.value === ''
      || this.hourRef.current.value === '' || this.noteRef.current.value === '') {
      this.setState({
        error: true
      });
    } else {
      const newCite = {
          id: uuid(),
          nameMascotRef: this.nameMascotRef.current.value,
          datePet: this.datePet.current.value,
          hourRef: this.hourRef.current.value,
          noteRef: this.noteRef.current.value
        }
      this.props.createCite(newCite);
      e.currentTarget.reset();
      this.setState({
        error: false
      });
    }
  }

  render() {

    return (
      <div className="card mt-5">
        <div className="card-body">
          <div className="text-center mb-5">
            <p className="h1">Add cites</p>
              <form onSubmit={this.createNewCite}>
                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                    <div className="col-sm-8 col-lg-10">
                        <input type="text" className="form-control" placeholder="Nombre Mascota" ref={this.nameMascotRef} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                    <div className="col-sm-8 col-lg-10">
                        <input type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" ref={this.ownerPet} />
                    </div>
                </div>

                 <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                    <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                      <input type="date" className="form-control" ref={this.datePet} />
                   </div>

                   <label className="col-sm-4 col-lg-2 col-form-label" >Hora</label>
                   <div className="col-sm-8 col-lg-4">
                      <input type="time" className="form-control" ref={this.hourRef}/>
                   </div>
                 </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                    <div className="col-sm-8 col-lg-10">
                        <textarea  className="form-control" ref={this.noteRef}></textarea>
                    </div>
                </div>
                <div className="form-group row justify-content-end">
                    <div className="col-sm-3">
                        <button type="submit" className="btn btn-success w-100">Agregar</button>
                    </div>
                </div>
              </form>
              {this.state.error ? <div className="alert alert-danger text-center">Todos los campos deben de ser obligatorios</div>:null}
          </div>
        </div>
      </div>
    );
  }
}

export default AddCites;
