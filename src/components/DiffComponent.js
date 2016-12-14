import React, { Component } from 'react';
import { map } from 'lodash';
import CalcFormComponent from './CalcFormComponent';

class DiffComponent extends Component {
  render() {
    let calcDisplay;

    const {
      asyncTimer, timer, disabled, onBack, onSubmit, operationSymbol, onChangeResult, result,
      operandLeft, operandRight, sumMap
    } = { ...this.props };

    const title = 'Subtraction';

    const countDown = timer <= 59 ? timer : 'Time\'s Up!';

    calcDisplay = map(sumMap, (sum, key) => {
      const resultDisplay = sum[0] - sum[1] === sum[2]
        ? sum[2]
        : (<span><del className="text-danger">{sum[2]}</del> {sum[0] - sum[1]}</span>);
      return (
        <a href="#" key={key} className="list-group-item list-group-item-action list-group-item-info">
          {`${key}) `} {sum[0]} {operationSymbol} {sum[1]} = {resultDisplay}
        </a>
      );
    });

    return (
      <CalcFormComponent
        asyncTimer={asyncTimer}
        countDown={countDown}
        disabled={disabled}
        onBack={onBack}
        onSubmit={onSubmit}
        operationSymbol={operationSymbol}
        onChangeResult={onChangeResult}
        result={result}
        operandLeft={operandLeft}
        operandRight={operandRight}
        calcDisplay={calcDisplay}
        title={title}
      />
    );
  }
}

export default DiffComponent;
