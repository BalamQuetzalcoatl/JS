import React from 'react';
import './error.css';

const Error = () => {
  return (
    <section className="page-404 section text-center body-error">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img className="svg-error" src="images/error/404.svg" alt=""/>
            <div class="message-box">
              <h1>404</h1>
              <p>Page not found</p>
              <div class="buttons-con">
                <div class="action-link-wrap">
                  <a href="index.html" class="link-button">Go to Home Page</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Error;
