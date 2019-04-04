import  React  from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <section className="about-2 section" id="about">
        <div className="container">
            <div className="row">
                <div className="text-center"  >
                    <h2>Acerca de nosotros</h2>
                    <p>Somos una empresa que se compone por varias aréas</p>
                    <div className="border"></div>
                </div>
            <div className="row">
              <div className="col-md-4 text-center">
                <div className="card bg-white mb-bottom service-item box">
                  <img className="card-img-top onfit" src="https://it.umd.edu/sites/divisionofit.umd.edu/files/UMDimages/homepage/Ideas-and-Projects-%28lightbulb%292.png" alt={'np images'}/>
                  <div className="card-body">
                    <h5 className="card-title font-t">Gráfica</h5>
                    <p className="card-text m-buttom">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="sistemas" className="btn btn-info buttom-fot">Ver más</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
              <div className="card bg-white mb-bottom service-item box">
                  <img className="card-img-top onfit" src="https://pngimage.net/wp-content/uploads/2018/06/laborat%C3%B3rio-png.png" alt={'no images'}/>
                  <div className="card-body">
                    <h5 className="card-title font-t">Laboratorio</h5>
                    <p className="card-text m-buttom">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="sistemas" className="btn btn-warning buttom-fot">Ver más</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
              <div className="card bg-white mb-bottom service-item box">
                  <img className="card-img-top onfit" src="https://userscontent2.emaze.com/images/24564855-3710-4196-bd21-692749e61ebb/9269cff4c06f729c6effdabcd6319e90.png" alt={'np images'}/>
                  <div className="card-body">
                    <h5 className="card-title font-t">Tecnología</h5>
                    <p className="card-text m-buttom">Aréa que se encarga de diseñar y crear aplicaciones de alta tecnología, donde estas se adapten a las necesidades del cliente</p>
                    <Link to="sistemas" className="btn btn-danger buttom-fot">Ver más</Link>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    </section>
    )
}

export default About;
