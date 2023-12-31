import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    

    default:
      return state;
  }
};

//action creator
export const setAuthUserData = (id, login, email) => ({ type: SET_AUTH_USER_DATA, data: {id, login, email} });

//thunk
export const getAuthUserData= () => {
  return (dispatch) => {
    authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email))
      }
    })
  }
  
}

export default authReducer;
