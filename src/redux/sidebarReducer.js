const TOGGLE_DISPLAY_MOBILE_MENU = 'toggleDisplayMobileMenu';

export const toggleDisplayMobileMenu = (isDisplay) => ({
    type: TOGGLE_DISPLAY_MOBILE_MENU,
    isDisplay
})

let InitialState = {
    sidebarMenu: [
        {id: 1, name: 'Profile', route: '/profile', isExact: true},
        {id: 2, name: 'Messages', route: '/dialogs', isExact: false},
        {id: 6, name: 'Users', route: '/users', isExact: false},
        {id: 3, name: 'News', route: '/news', isExact: false},
        {id: 4, name: 'Settings', route: '/settings', isExact: false},
        {id: 5, name: 'test', route: '/test', isExact: false},
    ],
    isDisplayMobileMenu: false
}

const sidebarReducer = (state = InitialState, action) => {
    let copyState = {...state};
    if(action.type === "TOGGLE_DISPLAY_MOBILE_MENU"){
        copyState.isDisplayMobileMenu = action.isDisplay;
    }
    else{
        copyState.sidebarMenu = [...state.sidebarMenu];
    }
    return copyState;
}

export default sidebarReducer;