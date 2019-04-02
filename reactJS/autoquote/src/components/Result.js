import React from 'react';
// import {TransitionGroup, CSSTransition } from 'react-transition-group';

class Result extends React.Component {
  getResFull() {
    if (!this.props.resfull) {
      return null;
    }
    else {
      return (
        <div className="gran-total">
            {this.props.resfull}
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.getResFull()}
      </div>
    );
  }
}

export default Result;
