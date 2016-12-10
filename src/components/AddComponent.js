import React, { Component } from 'react';
import { random } from 'lodash';

class AddComponent extends Component {
  componentDidUpdate() {
    this.refs.resultValue.focus();
  }

  render() {
    const {
      asyncTimer, timer, disabled, onBack, onSubmit, operationSymbol, onChangeResult, result
    } = { ...this.props };

    const countDown = timer <= 59 ? timer : 'Time\'s Up!';

    return (
    <div>
      <div className="row pad-top pad-bottom">
        <div className="col-sm-10 float-sm-left">
          <h2>Addition</h2>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-primary float-sm-right" onClick={onBack}>Back</button>
        </div>
      </div>
      <div className="row pad-top pad-bottom">
        <div className="col-sm-2">
          <button className="btn btn-primary" disabled={disabled} onClick={asyncTimer}>
            Start Timer
          </button>
        </div>
        <div className="col-sm-10 pad-top-5"><h4><span className="tag tag-danger align-middle">{countDown}</span></h4></div>
      </div>
      <div className="row pad-top">
        <div className="col-sm-10 pad-top">
          <form className="form-inline" onSubmit={(e) => onSubmit(e)}>
            <div className="form-group pad-right"> {random(0, 9)} </div>
            <div className="form-group pad-right"> {operationSymbol} </div>
            <div className="form-group pad-right"> 5 </div>
            <div className="form-group pad-right"> = </div>
            <div className="form-group pad-right">
              <input autoFocus={true} ref="resultValue" type="text" className="form-control-sm" id="result" value={result} onChange={onChangeResult} />
            </div>
            <button type="submit" className="btn btn-sm btn-warning" disabled={!disabled}>Submit</button>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

export default AddComponent;
