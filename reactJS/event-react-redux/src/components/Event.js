import React from 'react';
import PropTypes from 'prop-types';

const Event = (e) => {
  let data = '';
if(e.info.logo){data=e.info.logo.url}else {data='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMbpAS0aE6EarF9R9VWvTUpZjSvAqKQ1E79eBaAl1AIxg3d5aH'}
  return(
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          <img src={data} />
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{e.info.name.text}</h3>
          <p>{e.info.description.text}</p>
        </div>
      </div>
      <div className="uk-card-footer">
        <a href ={e.info.url}  className="uk-button" target="_blank">Ver más</a>
      </div>
    </div>
  )
}
Event.PropTypes = {
  info: PropTypes.object.isRequired
}
export default Event;
