import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Post from './post/Post';
import Error from './Error/Error404';
import SeeJson from './post/SeeJSON';
import Form_Create_New from './Form/Form_create';


class Router extends Component {
  state = {
    posts: []
  }

  componentDidMount(){
    this.getPost();
  }

  getPost = () => {
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
          this.setState({posts: response.data});
        })
        .catch((response) => {
          console.error(response)
        });
  }

  det = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        if(response.status === 200) {
            const deleted = [...this.state.posts];
            let res = deleted.filter(deleted => (
              deleted.id !== id
            ));
            this.setState({posts: res});
        }
      })
      .catch((err) => {console.error(err);})
  }

  create = (e) => {
    console.log(e);
    axios.post(`https://jsonplaceholder.typicode.com/posts`, {e})
      .then(respose => {
        console.log(respose);
        if(respose === 201){
          let postId = {id: respose.data.id};
          const newPost = Object.assign({}, respose.data.e, postId);
          console.log(newPost);
          this.setState=(prevState => ({posts: [...prevState.posts, newPost]}));
        }
      })
      .catch((err) => {console.error(err);})
  }

  render(){
    return(
      <BrowserRouter>
        <div className="container">
          <Header/>
        <Route>
          <Switch>
            <Route exact path="/" render={() => {return(<Post post={this.state.posts} det={this.det}/>)}}/>
            <Route exact path="/view/:id" render={(props)=>{return(<SeeJson data={props.location.pathname.replace('/view/','')}/>)}}  />
            <Route exact path='/create_new' render={()=>{return( <Form_Create_New create={this.create} />)}}/>
            <Route component={Error}/>
          </Switch>
        </Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default Router;
