import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

const reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    auth: authReducer,
    form: formReducer
})
const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

export default store