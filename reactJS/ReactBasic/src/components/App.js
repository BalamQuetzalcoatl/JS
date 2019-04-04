import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Form from './Form';

class App extends Component {
    render() {
        return (
          <div className="contenedor">
            <Header title = "Cotizador de auto (auto quote)"/>
            <div className="contenedor-formulario">
              <Form/>
            </div>
          </div>
        );
    }
}

export default App;
