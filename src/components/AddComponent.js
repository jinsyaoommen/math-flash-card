import React, { Component } from 'react';
import { map } from 'lodash';

class AddComponent extends Component {
  componentDidUpdate() {
    this.refs.resultValue.focus();
  }

  render() {
    let calcDisplay;

    const {
      asyncTimer, timer, disabled, onBack, onSubmit, operationSymbol, onChangeResult, result,
      operandLeft, operandRight, sumMap
    } = { ...this.props };
    const countDown = timer <= 59 ? timer : 'Time\'s Up!';

    calcDisplay = map(sumMap, (sum, key) => {
      const resultDisplay = sum[0] + sum[1] === sum[2]
        ? sum[2]
        : (<span><del className="text-danger">{sum[2]}</del> {sum[0] + sum[1]}</span>);
      return (
        <a href="#" key={key} className="list-group-item list-group-item-action list-group-item-info">
          {`${key}) `} {sum[0]} {operationSymbol} {sum[1]} = {resultDisplay}
        </a>
      );
    });

    return (
    <div>
      <div className="row pad-top pad-bottom">
        <div className="col-md-10 float-sm-left">
          <h2>Addition</h2>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary float-sm-right" onClick={onBack}>Back</button>
        </div>
      </div>
      <div className="row pad-top pad-bottom">
        <div className="col-md-2">
          <button className="btn btn-primary" disabled={disabled} onClick={asyncTimer}>
            Start Timer
          </button>
          </div>
        <div className="col-md-10 pad-top-5"><h4><span className="tag tag-danger align-middle">{countDown}</span></h4></div>
      </div>
      <div className="row pad-top">
        <div className="col-md-6 pad-top">
          <form className="form-inline" onSubmit={(e) => onSubmit(e)}>
            <div className="form-group pad-right">
              <div className="card card-inverse card-warning text-sm-center">
                <div className="card-block">
                  <h1>{operandLeft}</h1>
                </div>
              </div>
            </div>
            <div className="form-group pad-right"><h1>{operationSymbol}</h1></div>
            <div className="form-group pad-right">
              <div className="card card-inverse card-warning text-sm-center">
                <div className="card-block">
                  <h1>{operandRight}</h1>
                </div>
              </div>
            </div>
            <div className="form-group pad-right"> <h1>=</h1> </div>
            <div className="form-group pad-right">
              <input autoFocus={true} ref="resultValue" type="text" className="form-control-lg col-sm-1 result-form-80" id="result" value={result} onChange={onChangeResult} />
            </div>
            <button type="submit" className="btn btn-sm btn-warning" disabled={!disabled}>Submit</button>
          </form>
        </div>
      </div>
      <div className="row pad-top">
        <hr />
        <div className="col-sm-10">
          <br />
          <div className="list-group">
            {calcDisplay}
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default AddComponent;
