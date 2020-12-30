import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        //"API-KEY": "086baecb-98fe-4030-bbed-baba8705956e"
        "API-KEY": "3c4af070-a13a-4041-b427-a119370884c0"
    }
});

export const UsersAPI = {
    getUsers: (pageSize = 10, page = 1) =>{
        return instance.get(`users?count=${pageSize}&page=${page}`).then(response => response.data);
    },
    getProfile: (userId) => {
        return instance.get(`profile/${userId}`).then(response => response.data);
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