let InitialState = {
    sidebarMenu: [
        {id: 1, name: 'Profile', route: '/profile'},
        {id: 2, name: 'Messages', route: '/dialogs'},
        {id: 6, name: 'Users', route: '/users'},
        {id: 3, name: 'News', route: '/news'},
        {id: 4, name: 'Settings', route: '/settings'},
        {id: 5, name: 'test', route: '/test'},
    ]
}

const sidebarReducer = (state = InitialState, action) => {
    let copyState = {...state};
    return copyState;
}

export default sidebarReducer;