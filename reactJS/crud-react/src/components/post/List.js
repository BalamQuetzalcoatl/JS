import React,{Component} from 'react';
import Posts from './Posts';

class List extends Component{
    showList = () => {
        const data = this.props.lista;
        if(data.length === 0) return null;
        return (
          <React.Fragment>
            {Object.keys(data).map((e) => (
              <Posts key={e} info={this.props.lista[e]} det={this.props.det}/>
            ))}
          </React.Fragment>
        )
    }

  render(){
    return(
      <table className="table is-responsive">
         <thead>
           <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
            <th>BODY</th>
           </tr>
         </thead>
         <tbody>
           {this.showList()}
        </tbody>
      </table>
    )
  }
}

export default List;
