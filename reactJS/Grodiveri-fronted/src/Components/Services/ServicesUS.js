import React from 'react';
import './Services.css';

class ServicesUs extends React.Component{
  render(){
    return(
      <div>
        <section className="single-page-header ">
        	<div className="container">
        		<div className="row">
        			<div className="col-md-12">
        				<h2>Servicios</h2>
        			</div>
        		</div>
        	</div>
        </section>

        <section className="team-skills section-sm" id="skills">
    			<div className="container">
    				<div className="row">
    					<div className="title text-center">
    						<h2>Que ofrecemos</h2>
    						<p>
                  Somos una empresa que se compone por varias aréas y en cada una de ellas se compone por otrás
                </p>
              </div>
    				</div>
    			</div>
    		</section>

        <section className="pricing-table images-parallax" id="pricing">
		<div className="container">
			<div className="row">
				<div className="col-md-4 col-sm-6 col-xs-12">
					<div className="pricing-item">
						<div className="price-title">
              <div className="text-center">
                <img src="./images/GGS-Grafica.png" alt={'no images'} />
              </div>
						</div>
						<ul>
							<li><i className="tf-ion-ios-arrow-forward"></i> 1GB Disk Space</li>
							<li><i className="tf-ion-ios-arrow-forward"></i> 10 Email Account</li>
							<li><i className="tf-ion-ios-arrow-forward"></i> Script Installer</li>
							<li><i className="tf-ion-ios-arrow-forward"></i> 1 GB Storage</li>
							<li><i className="tf-ion-ios-arrow-forward"></i> 10 GB Bandwidth</li>
							<li><i className="tf-ion-ios-arrow-forward"></i> 24/7 Tech Support</li>
						</ul>
						<a className="btn btn-main" href="/">Ver detalles</a>
					</div>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-12  ">
					<div className="pricing-item">
						<div className="price-title">
              <div className="text-center">
                <img src="./images/GGS-Laboratorio.png" alt={'no images'} />
              </div>
						</div>
						<ul>
							<li><i className="tf-ion-ios-arrow-forward"></i> 1GB Disk Space</li>
							<li><i className="tf-ion-ios-arrow-forward"></i> 10 Email Account</li>
							<li><i className="tf-ion-ios-arrow-forward"></i> Script Installer</li>
							<li><i className="tf-ion-ios-arrow-forward"></i> 1 GB Storage</li>
							<li><i className="tf-ion-ios-arrow-forward"></i> 10 GB Bandwidth</li>
							<li><i className="tf-ion-ios-arrow-forward"></i> 24/7 Tech Support</li>
						</ul>
						<a className="btn btn-main" href="/">Ver detalles</a>
					</div>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-12 ">
					<div className="pricing-item">
						<div className="price-title">
              <div className="text-center">
                <img src="./images/GGS-Tecnologia.png" alt={'no images'} />
              </div>
						</div>
						<ul>
							<li><i className="tf-ion-ios-arrow-forward"></i> Venta de equipos</li>
              <li><i className="tf-ion-ios-arrow-forward"></i> Apps</li>
              <li><i className="tf-ion-ios-arrow-forward"></i> Páginas web</li>
              <li><i className="tf-ion-ios-arrow-forward"></i> Diseño de logos</li>
              <li><i className="tf-ion-ios-arrow-forward"></i> Publicidad</li>
						</ul>
						<a className="btn btn-main" href="/">Ver detalles</a>
					</div>
				</div>
			</div>
		</div>
	</section>
      </div>
    )
  }
}

export default ServicesUs;
