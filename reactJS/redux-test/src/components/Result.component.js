import React, {Component} from 'react';
import {connect} from 'react-redux';
import Page, {Pagination} from './Page';
class Result extends Component {
    render() {
        const {suggestions} = this.props;
        console.log(this.props);
        
        return(
            <div>
                <Page/>
                <Pagination/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        suggestions: state.suggestions
    }
}

const wrapper = connect(mapStateToProps);
const component = wrapper(Result);

export default component;