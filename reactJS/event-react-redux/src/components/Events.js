import React from 'react';
import Event from './Event';
import PropTypes from 'prop-types';

class Events extends React.Component {
    render(){
        return(
            <div className="uk-child-width-1-4œm" uk-grid="true">
                {Object.keys(this.props.event).map((item) => (
                  <Event info={this.props.event[item]}  key={item}/>
                ))}
            </div>
        )
    }
}
Events.PropTypes = {
  event: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
}
export default Events;
