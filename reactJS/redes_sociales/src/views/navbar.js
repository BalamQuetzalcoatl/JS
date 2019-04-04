import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

class Navbar extends Component{

    state = {picture:'', name:'', social:'', isLogout: false}
    componentWillMount = () => {
        const facebook = JSON.parse(localStorage.getItem('fbData'));
        const google = JSON.parse(localStorage.getItem('googledata'));
        if (facebook) {
            const {picture, name, social} = facebook;
            this.setState({picture,name, social});
        } 
        else if(google){
            const {name, picture, social} = google;
            this.setState({name, picture, social});
        }
        else {
            this.onLogout();
        }

    }

    onLogout = () => {
        localStorage.clear();
        this.setState({isLogout: true});
    }

    render(){  

        if(this.state.isLogout){
            return(
                <Redirect to="/" />
            )
        }

        return(
            <nav>
               <div className="nav-wrapper red lighten-1">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                        <li>{this.state.name}</li>
                        <li><img className="right avatar circle" src={this.state.picture} alt={this.state.picture}/></li>
                        <li><i className="fas fa-sign-out-alt" onClick={this.onLogout}></i></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;