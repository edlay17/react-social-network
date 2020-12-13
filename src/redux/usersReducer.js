const SUBSCRIBE = 'subscribe';
const UNSUBSCRIBE = 'unsubscribe';
const SHOW_MORE = 'showMore';
const SET_USERS = 'setUsers';

export const subscribeActionCreator = (userId) => ({ type: SUBSCRIBE, id: userId })
export const unsubscribeActionCreator = (userId) => ({ type: UNSUBSCRIBE, id: userId })
export const showMoreActionCreator = () => ({ type: SHOW_MORE })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users: users})

let InitialState = {
    usersData: []
}

export const usersReducer = (state = InitialState, action) => {


    if(action.type === SUBSCRIBE){
        let stateCopy = {
            ...state,
            usersData: state.usersData.map(u => {
                if(action.id===u.id){
                    return {...u, followed: true};
                }
                return u;
            })
        };
        return stateCopy;
    }
    else if(action.type === UNSUBSCRIBE){
        let stateCopy = {
            ...state,
            usersData: state.usersData.map(u => {
                if(action.id===u.id){
                    return {...u, followed: false};
                }
                return u;
            })
        };
        return stateCopy;
    }
    else if(action.type === SHOW_MORE){
        let stateCopy = {
            ...state,
            userData: [...state.usersData]
        }
        alert('show more');
        return stateCopy;
    }
    else if(action.type === SET_USERS){
        let stateCopy = {...state, usersData: [...state.usersData, ...action.users]};
        return stateCopy;
    }
    else{
        let stateCopy = {
            ...state,
            userData: [...state.usersData]
        }
        return stateCopy;
    }
    //return stateCopy;
}

export default usersReducer;