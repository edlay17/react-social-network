import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";
import headerReducer from "./headerReducer";
import footerReducer from "./footerReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    sidebar: sidebarReducer,
    header: headerReducer,
    footer: footerReducer,
    users: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;