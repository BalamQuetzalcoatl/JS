import React from 'react';
import SliderClient from './Slider';

class Companies extends React.Component{
    render(){
        return(
        <section className="team-skills section-sm" id="skills">
        <div className="container">
          <div className="row">

            <div className="text-center">
              <h2>Nuestros clientes</h2>
              <p>No llevamos mucho tiempo en el marcado, a pesar de eso ya contamos con clientes que nos han brindado</p>
              <div className="border"></div>
            </div>
          </div>
            <SliderClient/>
        </div>
      </section>
        )
    }
}

export default Companies;