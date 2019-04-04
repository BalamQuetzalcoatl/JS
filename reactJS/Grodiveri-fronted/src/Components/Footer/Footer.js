import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
  render(){
    return(
      <footer id="footer" className="bg-one">
        <div className="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-lg-4">
                <ul>
                  <li><h3>Nuestros servicios</h3></li>
                  <li><Link to={'index.html'}>Gráfica</Link></li>
                  <li><Link to={'index.html'}>Laboratorio</Link></li>
                  <li><Link to={'index.html'}>Tecnología</Link></li>
                </ul>
              </div>

              <div className="col-sm-4 col-md-4 col-lg-4">
                <ul>
                  <li><h3>Enlaces rápidos</h3></li>
                  <li><Link to={'index.html'}>Nosotros</Link></li>
                  <li><Link to={'index.html'}>Servicios</Link></li>
                  <li><Link to={'index.html'}>Contactanos</Link></li>
                </ul>
              </div>

              <div className="col-sm-4 col-md-4 col-lg-4">
                <ul>
                  <li><h3>Siguenos en redes sociales</h3></li>
                  <li><a href="https://www.facebook.com/grodiveri.graphics">Facebook</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <h6>Copyright 2016. All rights reserved. | Design and Developed by <a href="index.html">Themefisher</a></h6>
        </div>
      </footer>
    )
  }
}

export default Footer;
