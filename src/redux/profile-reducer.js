const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'

const profileReducer = (state,action) => {

   

switch (action.type) {
    case ADD_POST:
        const newPost = {
            id: '4', message: state.newText, likesCount: 0
        }
        state.postsData.push(newPost)
        state.newText= ''
        return state
    case UPDATE_NEW_POST:
        state.newText = action.text
        return state

    default:
        return state
}

   
}

export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostAC = (text) => ({type: UPDATE_NEW_POST, text: text})

export default profileReducer