import {UsersAPI} from "../api/api";

const SET_USER_DATA = 'setUserData';
const TOGGLE_IS_FETCHING = 'toggleIsFetching';

export const setUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login
    }
})
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})


export const authMe = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    UsersAPI.authMe().then(data=>{
        if(data.resultCode === 0){
            let {id, email, login} = data.data;
            dispatch(setUserData(id, email, login));
            dispatch(toggleIsFetching(false));
        }
    })
}

let InitialState = {
    isFetching: false,
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = InitialState, action) => {
   switch(action.type){
       case SET_USER_DATA:
           return {
               ...state,
               ...action.data,
               isAuth: true
           }
           break;
       case TOGGLE_IS_FETCHING:
           return{
               ...state,
               isFetching: action.isFetching
           }
           break;
       default: return {...state}
   }
}
export default authReducer;