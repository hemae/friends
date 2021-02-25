import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messengerReducer from "./messengerReducer";


let reducers = combineReducers({
    profileData: profileReducer,
    messengerData: messengerReducer,
});

let store = createStore(reducers);

window.store = store;


export default store;
