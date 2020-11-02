import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";
import headerReducer from "./headerReducer";
import footerReducer from "./footerReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    sidebar: sidebarReducer,
    header: headerReducer,
    footer: footerReducer,
    users: usersReducer
});

let store = createStore(reducers);
export default store;