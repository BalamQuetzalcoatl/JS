import React, {Component} from 'react';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';

import { FaFacebookF, FaGoogle } from 'react-icons/fa';

import FacebookLogin from 'react-facebook-login';
import {Redirect} from 'react-router-dom';

import GoogleLogin from 'react-google-login';

class Login extends Component {

    state = {
        isLogged: false,
    }

    componentDidMount = () => {
        if (localStorage.getItem('fbData') || localStorage.getItem('googledata')) {
            this.setState({isLogged: true});
        }
    }

    responseFacebook = (response) => {
        console.log(response);
        localStorage.setItem('fbData', JSON.stringify(
            {
                token: response.token,
                email: response.email,
                name: response.name,
                picture: response.picture.data.url,
                social: 'fb'
            })
        );
        this.setState({isLogged: true});
    }

    onFailure = (error) => {
        console.error(error);

    }

    responseGoogle = (response) => {
        console.log(response);
           localStorage.setItem('googledata', JSON.stringify({
               token: response.token,
               email: response.profileObj.email,
               name: response.profileObj.name,
               picture: response.profileObj.imageUrl,
               social: 'google'
           }));
           this.setState({isLogged: true});
    }

    render(){

        if (this.state.isLogged) {
            return <Redirect to="/home/"/>
        }        
        return(
            <div className="login">
                <div className="card">
                    <div className="login-box">
                        <div className="card-content">
                        <h3> Lets go for a <FaFacebookF />? </h3>
                            <FacebookLogin 
                                appId="348155642469495"
                                autoLoad={false}
                                fields="name, email, picture.width(120)"
                                callback={this.responseFacebook}
                                onFailure={this.onFailure}
                                textButton=" Facebook"
                                cssClass="waves-effect waves-light btn blue darken-2"
                                icon="fab fa-facebook-f"
                            />
                            <br/>
                            <GoogleLogin
                                clientId="781351470807-uqc85264db3djf545qg9esbr18ps43qq.apps.googleusercontent.com"
                                autoLoad={false}
                                onSuccess={this.responseGoogle}
                                onFailure={this.onFailure}
                                className="waves-effect waves-light btn red lighten-1">
                                <FaGoogle/><span>Google</span> 
                            </GoogleLogin>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Login;