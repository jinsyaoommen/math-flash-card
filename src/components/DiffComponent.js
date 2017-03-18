import React, { Component } from 'react';
import { map } from 'lodash';
import CalcFormComponent from './CalcFormComponent';

class DiffComponent extends Component {
  render() {
    let calcDisplay;

    const {
      asyncTimer, timer, disabled, onBack, onSubmit, operationSymbol, onChangeResult, result,
      operandLeft, operandRight, diffMap, questionCount, score
    } = { ...this.props };

    const title = 'Subtraction';

    const countDown = timer <= 59 ? timer : 'Time\'s Up!';

    calcDisplay = map(diffMap, (diff, key) => {
      const resultDisplay = diff[0] - diff[1] === diff[2]
        ? diff[2]
        : (<span><del className="text-danger">{diff[2]}</del> {diff[0] - diff[1]}</span>);
      return (
        <a href="#" key={key} className="list-group-item list-group-item-action list-group-item-info">
          {`${key}) `} {diff[0]} {operationSymbol} {diff[1]} = {resultDisplay}
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
        questionCount={questionCount}
        score={score}
      />
    );
  }
}

export default DiffComponent;
