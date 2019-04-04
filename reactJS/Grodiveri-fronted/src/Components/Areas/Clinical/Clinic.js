import React, {Component, Fragment} from 'react';
import SingleHeader from './../../SingleHeader/Header';

import './ClinicCSS.css';

class Clinic extends Component{
    render(){
        return(
    <Fragment>
        <SingleHeader e={'Aréa clínica'}/>
        <section className="team-skills section-sm" id="skills">
          <div className="container">
            <div className="row">
              <div className="title text-center">
                <h2>Analisis Clinicos</h2>
               
                <div className="col-md-12 col-sm-12">
                <p>
                 GRODIVERI entiende que un paciente acude a realizarse un estudio clínico buscando un
                 resultado que le dé tranquilidad para su salud. <p> </p>
                 Los análisis clínicos han evolucionado a paquetes combo, donde el paciente puede elegir
                 todos aquellos estudios que le permitan anticiparse a una posible enfermedad.
                 GRODIVERI se involucra con los laboratorios clínicos para humanos y animales,
                 ofreciéndoles consumibles y reactivos que con seguridad y confianza los profesionales podrán
                 utilizar para realizar sus pruebas.<p></p>
                 Compartimos la idea de promover una cultura de prevención y cuidado de nuestro cuerpo,
                 hábitos y estilos de vida.
                </p>
             </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
      )
    }
}

export default Clinic;
