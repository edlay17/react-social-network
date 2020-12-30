import {UsersAPI} from "../api/api";

const CHANGE_POST_TEXTAREA = 'changePostTextarea';
const ADD_POST = 'addPost';
const SET_PROFILE = 'setProfile';
const TOGGLE_IS_FETCHING = 'toggleIsFetching';
const SET_CURRENT_PROFILE_ID = 'setCurrentProfileId';

export const addPost = () => ({ type: ADD_POST })
export const postTextareaChange = (text) => ({
    type: CHANGE_POST_TEXTAREA,
    text: text
})
export const setProfile = (profileData) => ({
    type: SET_PROFILE,
    profileData
})
export const toggleIsFetching = (isFetching) =>({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const setCurrentProfileId = (id) =>({
    type: SET_CURRENT_PROFILE_ID,
    id
})
export const getProfile = (userId) => (dispatch) => {
    dispatch(setCurrentProfileId(userId));
    dispatch(toggleIsFetching(true));
    UsersAPI.getProfile(userId).then(data=>{
        dispatch(toggleIsFetching(false));
        dispatch(setProfile(data));
    })
}

let InitialState = {
    profileData: {
        contacts: {
        },
        photos: {
        }
    },
    isFetching: false,
    newPostText: '',
    postData: [
        {id: 1, message:'i love react so much', likesCount: 27},
        {id: 2, message:'learning react is very interesting', likesCount: 27},
        {id: 3, message:'Simplicity is the key to reliability.', likesCount: 54}
    ],
    currentUserId: null
}

export const profileReducer = (state = InitialState, action) => {
    let stateCopy = {...state};
    if(action.type === CHANGE_POST_TEXTAREA){
        stateCopy.newPostText = action.text;
    }
    else if(action.type === ADD_POST){
        if(stateCopy.newPostText != ''){
            let newPost = {
                id: 5,
                message: stateCopy.newPostText,
                likesCount: 0,
            }

            stateCopy.postData = [...state.postData, newPost];
            stateCopy.newPostText = '';
        }
    }
    else if(action.type === SET_PROFILE){
        stateCopy.profileData = {...action.profileData, contacts: {...action.profileData.contacts}, photos: {...action.profileData.photos}};
    }
    else if(action.type === TOGGLE_IS_FETCHING){
        stateCopy.isFetching = action.isFetching;
    }
    else if(action.type === SET_CURRENT_PROFILE_ID){
        stateCopy.currentUserId = action.id;
    }
    return stateCopy;
}
export default profileReducer;