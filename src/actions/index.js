import {
  INCREMENT_TIMER,
  REFRESH_TIMER_ID,
  RESET_TIMER,
  REFRESH_OPERATION_SYMBOL,
  INCREMENT_QUESTION_COUNT,
  REFRESH_RESULT,
  REFRESH_SUM
} from '../constants/index';

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
      result: getState().ui.result
    }));
  }
}
