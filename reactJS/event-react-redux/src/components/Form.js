import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {

    eventRef = React.createRef();
    categoryRef = React.createRef();

    searchEvents = (e) => {
        e.preventDefault();
        const dataSearch = {
            event: this.eventRef.current.value,
            category: this.categoryRef.current.value
        }

        this.props.getEvents(dataSearch);
    }

    showMessages = (key) => {
        const {id, name_localized } = this.props.categories[key];
        if(!id | !name_localized) return null;
        return ( <option value={id} key={id}>{name_localized}</option> );
    }


    state = {}


    render(){
        const categories = Object.keys(this.props.categories);
        return(
            <form onSubmit={this.searchEvents}>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Search by event, name or class
                    </legend>
                    <div className="uk-column-1-3œm uk-margin">
                        <div className="uk-margin" uk-margin="true">
                            <input className="uk-input" type="text" ref={this.eventRef} placeholder="Name the event or city"/>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <select className="uk-select" ref={this.categoryRef}>
                               {categories.map(this.showMessages)}
                            </select>
                         </div>
                         <div className="uk-margin" uk-margin="true">
                            <button className="uk-button uk-button-danger">Search</button>
                         </div>
                    </div>
                </fieldset>
            </form>
        )
    }
}

Form.PropTypes = {
  getEvents: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
}

export default Form;
