import React, {Component} from 'react';
import axios from 'axios';

class SeeJSON extends Component {

  state = {seeData:{}}

  async componentDidMount(){
    this.getData();
  }

  getData = async() => {
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.data}`)
      .then((e)=>{
        this.setState({seeData:e.data})
      })
      .catch((err) => {console.error(err)});
  }

  show = () => {
    const {body, title, id} = this.state.seeData;
    return(
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt={id}/>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>
        <div className="content">
          {body}
        <br/>
        </div>
      </div>
    )
  }

  render(){

    return(
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt={'imag'}/>
          </figure>
        </div>
        {this.show()}
      </div>
    )
  }
}

export default SeeJSON;
