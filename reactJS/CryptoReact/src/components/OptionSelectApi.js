import React from 'react';

class OptionSelectApi extends React.Component {
  render(){
    const {id, name} = this.props.coin;
    return(
      <option value={id}>{name}</option>
    )
  }
}

export default OptionSelectApi;
