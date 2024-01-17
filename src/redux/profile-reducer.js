import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

const initialState = {
  postsData: [
    { id: "1", message: "Хорошая погода", likesCount: 7 },
    { id: "2", message: "Как дела?", likesCount: 0 },
    { id: "3", message: "Василий, привет", likesCount: 18 },
  ],
  newText: "",
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
      return {
        ...state,
        newText: "",
        postsData: [
          ...state.postsData,
          { id: "4", message: state.newText, likesCount: 0 },
        ],
      };
    
    case UPDATE_NEW_POST: 
      return {
        ...state,
        newText: action.text,
      };
    case SET_USER_PROFILE: 
      return {
        ...state,
        profile: action.profile,
      };
    case SET_USER_STATUS: 
      return {
        ...state,
        status: action.status,
      };
    
    default:
      return state;
  }
};

//action creator
export const addPostAC = () => ({ type: ADD_POST });
 const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
 const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const updateNewPostAC = (text) => ({
  type: UPDATE_NEW_POST,
  text: text,
});

//thunk
export const getUserProfile= (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response.data))
    })
  }
}

export const getUserStatus= (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setUserStatus(response.data))
    })
  }
}
export const updateStatus= (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
      }
    })
  }
}

export default profileReducer;
