import {
  REFRESH_SUM,
  RESET_SUM_MAP
} from '../constants/index';

const initialState = {};

export default function resultReducer(state = initialState, action) {
  if (action.type === REFRESH_SUM) {
    return { ...state, [action.payload.questionCount]: action.payload.result }
  }

  if (action.type === RESET_SUM_MAP) {
    return initialState;
  }

  return state;
}
