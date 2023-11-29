import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  postsData: [
    { id: "1", message: "Хорошая погода", likesCount: 7 },
    { id: "2", message: "Как дела?", likesCount: 0 },
    { id: "3", message: "Василий, привет", likesCount: 18 },
  ],
  newText: "",
  profile: null,
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
    
    default:
      return state;
  }
};

//action creator
export const addPostAC = () => ({ type: ADD_POST });
 const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
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

export default profileReducer;
