import { REQUEST_API, GET_PICTURE, GET_ERROR } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  imgURL: '',
  defaultImg: true,
};

function gallery(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
      defaultImg: true,
    };
  case GET_PICTURE:
    return {
      ...state,
      isLoading: false,
      imgURL: action.data,
      defaultImg: false,
    };
  case GET_ERROR:
    return {
      ...state,
      isLoading: false,
      imgURL: '',
      defaultImg: true,
      error: action.error,
    } 
  default:
    return state;
  }
}

export default gallery;
