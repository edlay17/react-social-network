import {ProfileAPI} from "../api/api";

const CHANGE_POST_TEXTAREA = 'changePostTextarea';
const ADD_POST = 'addPost';
const SET_PROFILE = 'setProfile';
const TOGGLE_IS_FETCHING = 'profileToggleIsFetching';
const SET_CURRENT_PROFILE_ID = 'setCurrentProfileId';
const SET_STATUS = 'setStatus';

export const addPost = () => ({ type: ADD_POST })
export const postTextareaChange = (text) => ({
    type: CHANGE_POST_TEXTAREA,
    text: text
})
const setProfile = (profileData) => ({
    type: SET_PROFILE,
    profileData
})
export const profileToggleIsFetching = (isFetching) =>({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const setCurrentProfileId = (id) =>({
    type: SET_CURRENT_PROFILE_ID,
    id
})
const setStatus = (status) =>({
    type: SET_STATUS,
    status
})
export const getProfile = (userId) => (dispatch) => {
    dispatch(setCurrentProfileId(userId));
    dispatch(profileToggleIsFetching(true));
    ProfileAPI.getProfile(userId).then(data=>{
        dispatch(setProfile(data));
        dispatch(profileToggleIsFetching(false));
    })
}
export const getStatus = (userId) => (dispatch) => {
    dispatch(profileToggleIsFetching(true));
    ProfileAPI.getStatus(userId).then(data=>{
        dispatch(setStatus(data));
        dispatch(profileToggleIsFetching(false));
    })
}
export const changeStatus = (status, setError, toggleShowErrorMessage) => (dispatch) => {
    dispatch(profileToggleIsFetching(true));
    ProfileAPI.setStatus(status).then(data=>{
        if(data.resultCode === 0){
            dispatch(setStatus(status));
            dispatch(profileToggleIsFetching(false));
        }
        else{
            toggleShowErrorMessage(true);
            setError(data.messages);
            dispatch(profileToggleIsFetching(false));
        }
    })
}
export const changeProfileData = (github, twitter, instagram, profileId, setError, changeIsReturnErrors) => (dispatch, getState) => {
    dispatch(profileToggleIsFetching(true));
    let profileData = getState().profile.profileData;
    let aboutMe = profileData.aboutMe;
    let lookingForAJob = profileData.lookingForAJob;
    let lookingForAJobDescription = profileData.lookingForAJobDescription;
    let fullName = profileData.fullName;
    ProfileAPI.setProfileData(aboutMe,lookingForAJob,lookingForAJobDescription,fullName,github,instagram,twitter).then(data=>{
        if(data.resultCode === 0){
            dispatch(getProfile(profileId));
            changeIsReturnErrors(false);
            dispatch(profileToggleIsFetching(false));
        }
        else{
            setError(data.messages);
            changeIsReturnErrors(true);
            dispatch(profileToggleIsFetching(false));
        }
    })
}

export const changeProfileName = (name, profileId, setError, isReturnError) => (dispatch, getState) => {
    dispatch(profileToggleIsFetching(true));
    let profileData = getState().profile.profileData;
    let aboutMe = profileData.aboutMe;
    let lookingForAJob = profileData.lookingForAJob;
    let lookingForAJobDescription = profileData.lookingForAJobDescription;
    let github = profileData.contacts.github;
    let twitter = profileData.contacts.twitter;
    let instagram = profileData.contacts.instagram;

    if(!aboutMe) aboutMe = "about me";
    if(!lookingForAJobDescription) lookingForAJobDescription = "looking great job";
    if(!github) github = "github.com";
    if(!twitter) twitter = "twitter.com";
    if(!instagram) instagram = "instagram.com";

    let fullName = name;
    ProfileAPI.setProfileData(aboutMe,lookingForAJob,lookingForAJobDescription,fullName,github,instagram,twitter).then(data=>{
        if(data.resultCode === 0){
            isReturnError(false);
            dispatch(getProfile(profileId));
            dispatch(profileToggleIsFetching(false));
        }
        else{
            setError(data.messages);
            isReturnError(true);
            dispatch(profileToggleIsFetching(false));
        }
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
    myPostData: [
        {id: 1, message:'i love react so much', likesCount: 27},
        {id: 2, message:'learning react is very interesting', likesCount: 27},
        {id: 3, message:'Simplicity is the key to reliability.', likesCount: 54}
    ],
    currentUserId: null,
    status: ""
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

            stateCopy.myPostData = [...state.myPostData, newPost];
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
    else if(action.type === SET_STATUS){
        stateCopy.status = action.status;
    }
    return stateCopy;
}
export default profileReducer;
