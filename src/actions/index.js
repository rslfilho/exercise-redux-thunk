export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';
export const GET_ERROR = 'GET_ERROR';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export const getError = (error) => ({ type: GET_ERROR, error });

export const fetchAPI = () => async (dispatch) => {
  dispatch(requestAPI());
  try {
    const response = await fetch('https://aws.random.cat/meow');
    const result = await response.json();
    dispatch(getPicture(result));
  } catch (error) {
    dispatch(getError(error))
  }
}
