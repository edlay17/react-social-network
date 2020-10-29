let InitialState = {
    sidebarMenu: [
        {name: 'Profile', route: '/profile'},
        {name: 'Messages', route: '/dialogs'},
        {name: 'News', route: '/news'},
        {name: 'Settings', route: '/settings'},
        {name: 'test', route: '/test'},
    ]
}

const sidebarReducer = (state = InitialState, action) => {
    let copyState = {...state};
    return copyState;
}

export default sidebarReducer;