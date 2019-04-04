import React, {Component} from 'react';
import Result from '../response/Result';

class Index extends Component{
  state = ({res: []});
  searchRef = React.createRef();

  state = ({isActi:this.props.activeM})

  chect = (e) => {
    e.preventDefault();
    this.setState({isActi:false});
    this.props.getSearch(this.searchRef.current.value);
    setTimeout(()=>{ this.setState({res: this.props.response}, ()=>{this.resData()}) }, 1500);
  }

  render(){
      const data = (!this.state.isActi)  ? 'button is-info is-loading':'button is-info';
    return(
      <div className="container">
        <form onSubmit={this.chect}>
          <div className="columns">
              <div className="column">
                <h1 className="title">
                  Hello World
                </h1>
                <p className="subtitle">
                  My first website with <strong>Bulma</strong>!
                </p>
              </div>
              <div className="column">
                <input type="text" ref={this.searchRef} className="input" placeholder="Search your image"/>
              </div>
              <div className="column">
                <button type="submit" className={data}>Seach</button>
              </div>
          </div>
        </form>
        <Result result={this.state.res}/>
      </div>
    )
  }
}

export default Index;
