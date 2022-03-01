import {UPDATE_COUNTER} from './constant'

export const updateCounter = (counter) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_COUNTER,
      payload: {
        counter,
      },
    });
  };
};