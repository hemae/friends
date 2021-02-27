import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messengerReducer from "./messengerReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
    profileData: profileReducer,
    messengerData: messengerReducer,
    usersData: usersReducer
});

let store = createStore(reducers);

window.store = store;


export default store;
