const FOLLOW ='FOLLOW'
const UNFOLLOW ='UNFOLLOW'
const SET_USERS ='SET_USERS'

const initialState = {
    users: [
      { id: "1", name: 'Dmitry', followed: true},
      { id: "2", name: 'Diana', followed: false},
      
    ],
  };
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FOLLOW:
        return {
            ...state,
            users: state.users.map(user => {
                if (user.id === action.userID) {
                    return {...user, followed:true}
                }
                return user
            })
        }
      case UNFOLLOW:
        return {
            ...state,
            users: state.users.map(user => {
                if (user.id === action.userID) {
                    return {...user, followed: false}
                }
                return user
            })
        }
        case SET_USERS: 
        return {
            ...state,
            users: [ ...state.users, ...action.users]
        }
      default:
        return state;
    }
  };

  export const followedAC = (userID) => ({type: FOLLOW, userID})
  export const unfollowedAC = (userId) => ({type: UNFOLLOW, userId})
  export const setUsersAC = (users) => ({type: SET_USERS, users})

  export default usersReducer