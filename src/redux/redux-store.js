import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
})
const store = legacy_createStore(reducers)

export default store