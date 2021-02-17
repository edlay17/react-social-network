import {AuthAPI} from "../api/api";

const SET_USER_DATA = 'setUserData';
const TOGGLE_IS_FETCHING = 'toggleIsFetching';
const SET_CAPTCHA_URL = 'setCaptchaUrl';

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login,
        isAuth
    }
})
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const setCaptchaUrl = (url) => ({
    type: SET_CAPTCHA_URL,
    url
})

export const authMe = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    return AuthAPI.authMe().then(data=>{
        if(data.resultCode === 0){
            let {id, email, login} = data.data;
            dispatch(setUserData(id, email, login, true));
        }
        dispatch(toggleIsFetching(false));
    })
}

export const loginMe = (email, password, rememberMe, setError, captcha= "") => (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCaptchaUrl(""));
    AuthAPI.login(email, password, rememberMe, captcha).then(data=>{
        if(data.resultCode === 0){
            dispatch(authMe());
        }
        else if(data.resultCode === 10){
            setError(data.messages);
            dispatch(getCaptcha());
        }
        else{
            setError(data.messages);
        }
        dispatch(toggleIsFetching(false));
    })
}

export const getCaptcha = () => (dispatch) => {
    AuthAPI.getCaptchaUrl().then(data=>{
        dispatch(setCaptchaUrl(data.url));
    })
}

export const logOutMe = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    AuthAPI.logout().then(data=>{
        if(data.resultCode === 0){
            dispatch(setUserData(null,null,null,false));
        }
        else{
            alert(data.messages);
        }
        dispatch(toggleIsFetching(false));
    })
}


let InitialState = {
    isFetching: false,
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: "",
}

export const authReducer = (state = InitialState, action) => {
   switch(action.type){
       case SET_USER_DATA:
           return {
               ...state,
               ...action.data
           }
           break;
       case TOGGLE_IS_FETCHING:
           return{
               ...state,
               isFetching: action.isFetching
           }
           break;
       case SET_CAPTCHA_URL:
           return{
               ...state,
               captchaUrl: action.url
           }
           break;
       default: return {...state}
   }
}
export default authReducer;
