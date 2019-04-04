import React from 'react';
import { Link } from 'react-router-dom';

class Commitment extends React.Component {

    state = {message: '', title: ''}

    componentWillMount(){
        const {message1, message2, title1, title2} = this.props.commitment;
        const {contact} = this.props;
        if(!contact){
            this.setState({message: message1, title: title1})
        }else{
            this.setState({message: message2, title: title2})
        }    
    }

    contact = () => {
        const {contact} = this.props;
        if(contact){
            return(
                <Link to={'/contact'} className="btn btn-main contec">Contactanos</Link>
            )
        }
        else{ return(null) }
    }

    render(){
        return (
            <section className="call-to-action section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>{this.state.title}</h2>
                        <p>{this.state.message}</p>
                        {this.contact()}
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Commitment;