import {
  REFRESH_DIFFERENCE,
  RESET_DIFF_MAP
} from '../constants/index';

const initialState = {};

export default function resultReducer(state = initialState, action) {
  if (action.type === REFRESH_DIFFERENCE) {
    return { ...state, [action.payload.questionCount]: action.payload.result }
  }

  if (action.type === RESET_DIFF_MAP) {
    return initialState;
  }

  return state;
}
