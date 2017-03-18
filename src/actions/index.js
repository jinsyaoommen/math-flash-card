import {
  INCREMENT_TIMER,
  REFRESH_TIMER_ID,
  RESET_TIMER,
  REFRESH_OPERATION_SYMBOL,
  INCREMENT_QUESTION_COUNT,
  REFRESH_RESULT,
  REFRESH_SUM,
  REFRESH_OPERAND_LEFT,
  REFRESH_OPERAND_RIGHT,
  RESET_SUM_MAP,
  REFRESH_DIFFERENCE,
  RESET_DIFF_MAP,
  RESET_QUESTION_COUNT
} from '../constants/index';
import { random } from 'lodash';

export function refreshTimerId(timerId) {
  return {
    type: REFRESH_TIMER_ID,
    payload: { timerId }
  }
}

export function resetTimer() {
  return {
    type: RESET_TIMER
  }
}

export function stopTimer() {
  return (dispatch, getState) => {
    if (getState().ui.timer > 59) {
      clearInterval(getState().ui.timerId);
      dispatch(refreshTimerId(null));
    }
  };
}

export function incrementTimer() {
  return {
    type: INCREMENT_TIMER
  }
}

export function incrementAsync() {
  return (dispatch) => {
    dispatch(resetTimer());
    const timerId = setInterval(
      () => {
        dispatch(incrementTimer());
        dispatch(refreshTimerId(timerId));
        dispatch(stopTimer());
      },
      1000
    );
  };
}

export function refreshOperationSymbol(symbol) {
  return {
    type: REFRESH_OPERATION_SYMBOL,
    payload: { operationSymbol: symbol }
  };
}

export function incrementQuestionCount() {
  return {
    type: INCREMENT_QUESTION_COUNT
  }
}

export function refreshResult(value) {
  return {
    type: REFRESH_RESULT,
    payload: { result: value }
  };
}

export function refreshSum(sumMap) {
  return {
    type: REFRESH_SUM,
    payload: sumMap
  };
}

export function refreshSumMap() {
  return (dispatch, getState) => {
    dispatch(refreshSum({
      questionCount: getState().ui.questionCount,
      result: [getState().ui.operandLeft, getState().ui.operandRight, Number(getState().ui.result)]
    }));
  }
}

export function refreshDiff(diffMap) {
  return {
    type: REFRESH_DIFFERENCE,
    payload: diffMap
  };
}

export function refreshDiffMap() {
  return (dispatch, getState) => {
    dispatch(refreshDiff({
      questionCount: getState().ui.questionCount,
      result: [getState().ui.operandLeft, getState().ui.operandRight, Number(getState().ui.result)]
    }));
  }
}

export function refreshInput(input, payloadInput) {
  return {
    type: input,
    payload: payloadInput
  }
}

export function refreshOperandLeft() {
  return (dispatch) => {
    dispatch(refreshInput(REFRESH_OPERAND_LEFT, { operandLeft: random(0, 19) }));
  };
}

export function refreshOperandRight(type = null) {
  return (dispatch, getState) => {
    let limit = 20 - getState().ui.operandLeft;
    console.log(getState().ui.operationSymbol);
    if (getState().ui.operationSymbol === '-') {
      limit = getState().ui.operandLeft;
    }
    dispatch(refreshInput(
      REFRESH_OPERAND_RIGHT,
      { operandRight: random(0, limit) }
    ));
  };
}

export function resetSumMap() {
  return {
    type: RESET_SUM_MAP
  };
}

export function resetDiffMap() {
  return {
    type: RESET_DIFF_MAP
  }
}

export function resetQuestionCount() {
  return {
    type: RESET_QUESTION_COUNT
  }
};
