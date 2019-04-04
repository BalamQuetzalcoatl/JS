import React from 'react';

const SingleHeader = ({e}) => {
  return(
    <section className="single-page-header ">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>{(e.length === 0) ? 'No hay dato':e}</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleHeader;
