import React from "react";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import headerReducer from "./headerReducer";
import footerReducer from "./footerReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profile: {
            profileName: 'Ivan Ivanov',
            profileAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOfqBBnGW-ntm2BhRJQQJupmw5Gh5drIDnvA&usqp=CAU',
            profileHeader: 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
            profileInfoData: [
                {descItemName:'Exp', descItem:'HTML, CSS, JS, ReactJs, VueJs, PHP, Wordpress, SQL, GIT.'},
                {descItemName:'Last visit', descItem:'11:09 01.01.1970'}
            ],
            newPostText: '',
            postData: [
                {id: 1, message:'hello, how are you?', likesCount: 27},
                {id: 2, message:'hello, how are you? hello, how are you? hello, how are you? hello, how are you? hello, how are you? hello, how are you? hello, how are you? hello, how are you? hello, how are you? hello, how are you? hello, how are you? hello, how are you?', likesCount: 27},
                {id: 3, message:'hello, how are you m?', likesCount: 54}
            ],
        },
        messages: {
            newMessageText: '',
            messagesData: [
                {inbox: true, text: 'hello how are you?'},
                {inbox: true, text: 'hello how are you?'},
                {inbox: false, text: 'hello how are you?'},
                {inbox: true, text: 'hello how are you?'},
                {inbox: true, text: 'hello how are you?'},
                {inbox: false, text: 'hello how are you?'}
            ],
            contactsData: [
                {name: 'Masha', id: 1},
                {name: 'Sveta', id: 2},
                {name: 'Katya', id: 3},
                {name: 'Olya', id: 4},
                {name: 'Nastya', id: 5}
            ]
        },
        sidebar: {
            sidebarMenu: [
                {name: 'Profile', route: '/profile'},
                {name: 'Messages', route: '/dialogs'},
                {name: 'News', route: '/news'},
                {name: 'Settings', route: '/settings'},
                {name: 'test', route: '/test'},
            ]
        },
        header: {
            headerLogo: 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg'
        },
        footer: {
            footerCopyright: 'edlayweb@gmail.com'
        }
    },
    getState(){
        return this._state;
    },
    callSubscriber() {
    },
    subscribe(observer){
        this.callSubscriber = observer;
    },
    dispatch(action){
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messages = messagesReducer(this._state.messages, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.header = headerReducer(this._state.header, action);
        this._state.footer = footerReducer(this._state.footer, action);
        this.callSubscriber(this._state);
    }
}

export default store;