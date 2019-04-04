import React from 'react';
import {Link} from 'react-router-dom';

class Posts extends React.Component{
  render(){
    const {body, id, title} = this.props.info;
    return(
      <tr>
        <td>{id}</td>
      <td>{title.substring(0,45).toUpperCase().concat('...')}</td>
    <td>{body.substring(0,15).concat('...')}</td>
        <td><div className="field is-grouped is-grouped-centered">
              <p className="control">
                <Link className="button is-primary" to={`/edit/${id}`}>
                  Edit
                </Link>
              </p>
              <p className="control">
                <button className="button is-danger" onClick={()=>{this.props.det(id)}}>
                  delete
                </button>
              </p>
              <p className="control">
                <Link className="button is-ligth" to={`/view/${id}`}>
                  View
                </Link>
              </p>
            </div>
          </td>
      </tr>
    )
  }
}

export default Posts;
