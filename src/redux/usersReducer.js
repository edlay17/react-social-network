let InitialState = {
    usersData: [
        {id: 1, name:'Vasya', surname:'Ivanov', status: 'Status: react is my life', lastVisit: '56 min ago'},
        {id: 2, name:'Vasya', surname:'Ivanov', status: 'Status: react is my life', lastVisit: '56 min ago'},
        {id: 3, name:'Vasya', surname:'Ivanov', status: 'Status: react is my life', lastVisit: '56 min ago'},
        {id: 4, name:'Vasya1', surname:'Ivanov', status: 'Status: react is my life', lastVisit: '56 min ago'},
    ]
}

export const usersReducer = (state = InitialState, action) => {
    let stateCopy = {...state};

    return stateCopy;
}

export default usersReducer;