import React, {Component, Fragment} from 'react';
import SingleHeader from './../../SingleHeader/Header';

class surgery extends Component{
    render(){
        return(
          <Fragment>
            <SingleHeader e={'Aréa de cirugía'}/>
            <section className="team-skills section-sm" id="skills">
              <div className="container">
                <div className="row">
                  <div className="title text-center">
                    <h2><img src="images/GGS-Laboratorio.png" alt={'no images'} /></h2>
                    <p>
                      Está aréa se encuentra dentro de aréa de Laboratorios
                    </p>
                  </div>
                </div>

                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <img src={'https://www.quironsalud.es/idcsalud-client/cm/images?locale=es_ES&idMmedia=384425'} alt={'no images'}/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <p>
                        La práctica de la cirugía transcurre paralela al desarrollo de la evolucón humana, siendo en
                        sus inicios traumáticas, dolorosas y vulnerables a los gérmenes. En los últimos 100 años ha tenido
                        un avance extraordinario abriendo un campo de investigación con nuevos senderos.
                        <p>  </p>

                        GRODIVERI interpreta la cirugía y los quirófanos como sistemas altamente complejos y
                        dentro de este universo participa ofreciendo a las clínicas y hospitales equipos para visualizar
                        imágenes complejas durante toda la intervención en el quirófano. <p>  </p>
                        
                        Formamos parte de esa técnica futurista que permite penetrar en todos los órganos del
                        cuerpo con nuevos abordajes, desde cirugía mini-invasiva hasta abordajes virtuales a través de
                        cirugía robótica.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    
                  </div>
              </div>
            </section>
          </Fragment>
        )
    }
}

export default surgery;
