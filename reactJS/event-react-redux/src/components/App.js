import React, { Component } from 'react';
import '../css/App.css';
import '../css/uikit.css';
import Header from '../components/Header';
import Form from '../components/Form';
import Events from '../components/Events';

class App extends Component {

    token = 'OEVGGOVDL4QMHGEJXY4K';

    state = {
        categories: [],
        event: []
    }

   componentDidMount(){
      this.getCategories();
   }

    getCategories = async() => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

        await fetch(url)
        .then(response => {
            return response.json();
        }).then(category => {
            this.setState({ categories: category.categories });
        });
    }

    getEvents = async(e) => {
        let url = `https://www.eventbriteapi.com/v3/events/?q=${e.event}&locale=es_ES&token=${this.token}&categories=${e.category}&sort_by=date`;
        await fetch(url)
        .then(response => {
            return response.json();
        })
        .then(res => {
        console.log(res, 'nonu');
            this.setState({ event: res.events })
        })
    }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="uk-container">
            <Form categories={this.state.categories} getEvents={this.getEvents}/>
            <Events event={this.state.event} />
        </div>
      </div>
    );
  }
}

export default App;
