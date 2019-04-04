import React, {Component} from 'react';

class Form_create extends Component{
  titleRef = React.createRef();
  commentRef = React.createRef();
  generateForm = (e) => {
    e.preventDefault();
    const respo = {
      title: this.titleRef.current.value,
      body: this.commentRef.current.value,
      userId: 1,
      id: 1
    }
    this.props.create(respo);
  }

  render(){
    return(
        <div className="container">
          <div className="title is-1">Formulario</div>
        <form onSubmit={this.generateForm}>
            <div className="columns">
              <div className="column">
                <div className="field">
                    <label className="label">Title the post</label>
                  <div className="control">
                      <input className="input" ref={this.titleRef} type="text" placeholder="Text input"/>
                    </div>
                  </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label">Comment</label>
                <div className="control">
                  <textarea className="input" ref={this.commentRef} type="text" placeholder="Comment"></textarea>
                </div>
                </div>
              </div>
              <div className="column">
                <label className="label">Clic para guadar</label>
              <button type="submit" className="button is-info is-fullwidth">Guardar</button>
              </div>
            </div>
          </form>
        </div>
    )
  }
}

export default Form_create;
