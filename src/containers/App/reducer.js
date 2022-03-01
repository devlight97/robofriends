import { UPDATE_COUNTER } from './constant'

const initialState = {
  counter: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_COUNTER:
      return { ...state, ...payload };

    default:
      return state;
  }
};