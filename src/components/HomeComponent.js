import React, { Component } from 'react';

class HomeComponent extends Component {
  render() {
    const {
      onAdd, onSub, onMult, onDiv
    } = { ...this.props };

    return (
      <div className="btn-group">
          <button className="btn btn-warning" onClick={onAdd}>
            Addition
          </button>
          <button className="btn btn-info" onClick={onSub}>
            Subtraction
          </button>
          <button className="btn btn-success" onClick={onMult}>
            Multiplication
          </button>
          <button className="btn btn-primary" onClick={onDiv}>
            Division
          </button>
      </div>
    );
  }
}

export default HomeComponent;
