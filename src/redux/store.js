import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
const store = {
    _state : {
        profilePage: {
            postsData : [
                { id: '1', message: "Хорошая погода", likesCount: 7 },
                { id: '2', message: "Как дела?", likesCount: 0 },
                { id: '3', message: "Василий, привет", likesCount: 18 },
              ],
              newText: 'hoho'
        },
        dialogsPage: {
            dialogsData: [
                { id: '1', name: "Дмитрий" },
                { id: '2', name: "Петр" },
                { id: '3', name: "Василий" },
              ],
            messagesData: [
                { id: '1', message: "Hi" },
                { id: '2', message: "Yo" },
                { id: '3', message: "Yo" },
              ],
              newMessageText: ''
        }
    },
    getState(){
        return this._state
    },
    _callSubscriber() {},
    dispatch(action){
       this._state.profilePage = profileReducer(this._state.profilePage, action)
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    },
    
    subscribe (observer)  {
        this._callSubscriber = observer
    }
}


export default store