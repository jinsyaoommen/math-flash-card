import {
  REFRESH_SUM
} from '../constants/index';

const initialState = {};

export default function resultReducer(state = initialState, action) {
  if (action.type === REFRESH_SUM) {
    return { ...state, ...{ [state.questionCount]: action.payload.result } }
  }

  return state;
}
