import {
  INCREMENT_TIMER,
  REFRESH_TIMER_ID,
  STOP_TIMER,
  RESET_TIMER,
  REFRESH_OPERATION_SYMBOL,
  INCREMENT_QUESTION_COUNT,
  REFRESH_RESULT
} from '../constants/index';

const initialState = {
  timer: 0,
  questionCount: 0
};

export default function uiReducer(state = initialState, action) {
  if (action.type === INCREMENT_TIMER) {
    return Object.assign({}, state, {
      timer: state.timer + 1
    });
  }

  if (action.type === RESET_TIMER) {
    return Object.assign({}, state, {
      timer: 0
    });
  }

  if (action.type === REFRESH_TIMER_ID) {
    return { ...state, ...{ timerId: action.payload.timerId } }
  }

  if (action.type === STOP_TIMER) {
    return { ...state };
  }

  if (action.type === REFRESH_OPERATION_SYMBOL) {
    return { ...state, ...{ operationSymbol: action.payload.operationSymbol } }
  }

  if (action.type === INCREMENT_QUESTION_COUNT) {
    return Object.assign({}, state, {
      questionCount: state.questionCount + 1
    });
  }

  if (action.type === REFRESH_RESULT) {
    return { ...state, result: action.payload.result }
  }

  return state;
}
