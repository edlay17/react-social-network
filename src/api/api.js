import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        //"API-KEY": "3c4af070-a13a-4041-b427-a119370884c0"
        "API-KEY": "30bd9f75-e6c2-4b2d-9801-8aff255975ef"
    }
});

export const UsersAPI = {
    getUsers: (pageSize = 10, page = 1) =>{
        return instance.get(`users?count=${pageSize}&page=${page}`).then(response => response.data);
    },
    getProfile: (userId) => {
        console.warn("please use profileAPI object");
        return ProfileAPI.getProfile(userId);
    },
    onFollow: (userId) => {
        return instance.post(`follow/${userId}`).then(response => response.data);
    },
    onUnFollow: (userId) => {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    },
    authMe: () => {
        return instance.get('auth/me').then(response => response.data);
    }
}

export const ProfileAPI = {
    getProfile: (userId) => {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    setStatus: (status) => {
        return instance.put(`profile/status`, {status: status}).then(response => response.data);
    },
    setProfileData: (aboutMe, lookingForAJob, lookingForAJobDescription, fullName, github, instagram, twitter) => {
        let contactsObj = {
            github,
            instagram,
            twitter
        }
        return instance.put(`profile`,
            {
                aboutMe,
                lookingForAJob,
                lookingForAJobDescription,
                fullName,
                contacts: contactsObj,
            }).then(response => response.data);
    }
}

export const AuthAPI = {
    authMe: () => {
        return instance.get('auth/me').then(response => response.data);
    },
    login: (email, password, rememberMe, captcha) => {
        if(captcha === "") return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data);
        return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data);
    },
    logout: () => {
        return instance.delete(`auth/login`).then(response => response.data);
    },
    getCaptchaUrl: () => {
        return instance.get(`security/get-captcha-url`).then(response => response.data);
    }
}