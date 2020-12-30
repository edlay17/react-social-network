import {UsersAPI} from "../api/api";

const SUBSCRIBE = 'subscribe';
const UNSUBSCRIBE = 'unsubscribe';
const SHOW_MORE = 'showMore';
const SET_USERS = 'setUsers';
const SET_COUNT = 'setCount';
const SET_PAGE_NUM = 'setPageNum';
const ADD_USERS = 'addUsers';
const TOGGLE_IS_FETCHING = 'toggleIsFetching';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'toggleFollowingInProgress';

export const subscribe = (userId) => ({ type: SUBSCRIBE, id: userId })
export const unsubscribe = (userId) => ({ type: UNSUBSCRIBE, id: userId })
export const showMore = () => ({ type: SHOW_MORE })
export const setUsers = (users) => ({ type: SET_USERS, users: users})
export const setCount = (count) => ({ type: SET_COUNT, count: count})
export const setPageNum = (num) => ({ type: SET_PAGE_NUM, num: num})
export const addUsers = (users) => ({ type: ADD_USERS, users: users})
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isInProgress, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isInProgress, userId})

export const getUsers = (pageNum, setPage, typeOfGet) => {
    return (dispatch) =>{
            dispatch(toggleIsFetching(true));
            UsersAPI.getUsers(InitialState.pageSize, pageNum).then(data=>{
                dispatch(toggleIsFetching(false));
                if(typeOfGet==="SET") dispatch(setUsers(data.items));
                else if(typeOfGet==="ADD") dispatch(addUsers(data.items));
                dispatch(setCount(data.totalCount));
            })
            dispatch(setPageNum(setPage));
        }
}

export const setSubscribe = (id) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, id));
    UsersAPI.onFollow(id).then(data=>{
        dispatch(toggleFollowingInProgress(false, id));
        if(data.resultCode == 0) dispatch(subscribe(id));
    })
}

export const setUnsubscribe = (id) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, id));
    UsersAPI.onUnFollow(id).then(data=>{
        dispatch(toggleFollowingInProgress(false, id));
        if(data.resultCode == 0) dispatch(unsubscribe(id));
    })
}

let InitialState = {
    usersData: [],
    page: 1,
    totalCount: 0,
    pageSize: 5,
    isFetching: false,
    followingInProgress: []
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
        let stateCopy = {...state, usersData: [...action.users]};
        return stateCopy;
    }
    else if(action.type === ADD_USERS){
        let stateCopy = {...state, usersData: [...state.usersData, ...action.users]};
        return stateCopy;
    }
    else if(action.type === SET_COUNT){
        let stateCopy = {...state, totalCount: action.count};
        return stateCopy;
    }
    else if(action.type === SET_PAGE_NUM){
        let stateCopy = {...state, page: action.num};
        return stateCopy;
    }
    else if(action.type === TOGGLE_IS_FETCHING){
        let stateCopy = {...state, isFetching: action.isFetching};
        return stateCopy;
    }
    else if(action.type === TOGGLE_FOLLOWING_IN_PROGRESS){
        let stateCopy = {...state};
        action.isInProgress ? stateCopy.followingInProgress = [...state.followingInProgress, action.userId]
            : stateCopy.followingInProgress = state.followingInProgress.filter(id => id != action.userId);
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