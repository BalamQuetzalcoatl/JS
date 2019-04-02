import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="card-panel red darken-4 error">
          {props.message}
        </div>
      </div>
    </div>
  )
}

Error.propTypes = {
  message: PropTypes.string.isRequired
}

export default Error;
