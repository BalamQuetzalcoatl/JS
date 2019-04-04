import React from 'react';

const SatisfiedsCustomers = () => {
    return (
        <section  className="counter-wrapper section-sm" >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="title">
                  <h2>Nuestro historial</h2>
                  <p>Conocenos, nuestra empresa está creciendo y cada vez más clientes confian en nosotros ya que complimos con la espectativa que cliente esperaba.</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 text-center " >
                <div className="counters-item">
                  <i className="tf-ion-ios-alarm-outline"></i>
                  <div>
                      <span className="counter" data-count="150">150</span>
                  </div>
                  <h3>Clientes felices</h3>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-6 text-center " >
                <div className="counters-item">
                  <i className="tf-ion-ios-analytics-outline"></i>
                  <div>
                      <span className="counter" data-count="130">130</span>
                  </div>
                  <h3>Proyectos finalizados</h3>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-6 text-center "  >
                <div className="counters-item">
                  <i className="tf-ion-ios-compose-outline"></i>
                  <div>
                      <span className="counter" data-count="99">99</span>
                  </div>
                        <h3>Clientes satisfechos</h3>
                </div>
              </div>
                  <div className="col-md-3 col-sm-6 col-xs-6 text-center ">
                <div className="counters-item kill-border">
                  <i className="tf-ion-ios-bolt-outline"></i>
                  <div>
                      <span className="counter" data-count="250">250</span>
                  </div>
                  <h3>Tazas de café</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default SatisfiedsCustomers;