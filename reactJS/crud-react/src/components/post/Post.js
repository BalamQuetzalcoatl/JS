import React, {Component} from 'react';
import List from './List';

class Post extends Component{
  render(){
    return(
      <section className="section">
        <div className="container">
          <h1 className="title">
            List of Posts
          </h1>
          <p className="subtitle">
            Create, Reload, Update and Delete <strong>CRUD</strong>!
          </p>
          <List lista={this.props.post} det={this.props.det}/>
        </div>
      </section>
    )
  }
}

export default Post;
