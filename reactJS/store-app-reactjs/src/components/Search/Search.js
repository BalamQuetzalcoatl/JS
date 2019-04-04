import React, {Component} from 'react';

class Search extends Component{
  readData = (e) => {
    this.props.search(e.target.value);
  }
  render(){
    return(
      <div className="row">
        <div className="col-md-12">
          <input input="text" className="form-control App-search" placeholder="Search form" onChange={this.readData}/>
        </div>
      </div>
    )
  }
}

export default Search;
