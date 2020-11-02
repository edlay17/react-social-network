const CHANGE_POST_TEXTAREA = 'changePostTextarea';
const ADD_POST = 'addPost';

export const addPostActionCreator = () => ({ type: ADD_POST })
export const postTextareaChangeActionCreator = (text) => ({
    type: CHANGE_POST_TEXTAREA,
    text: text
})

let InitialState = {
    profileName: 'Ivan Ivanov',
    profileAvatar: 'https://uploads.hb.cldmail.ru/geekbrains/public/ckeditor_assets/pictures/6933/content-dc09a3cb592ac82b7ce0522a7e7eb882.png',
    profileHeader: 'https://www.paragyte.com/img/React_Banner.png',
    profileInfoData: [
        {id: 1, descItemName:'Exp', descItem:'HTML, CSS, JS, ReactJs, VueJs, PHP, Wordpress, SQL, GIT.'},
        {id: 2, descItemName:'Last visit', descItem:'11:09 01.01.1970'}
    ],
    newPostText: '',
    postData: [
        {id: 1, message:'hello, how are you?', likesCount: 27},
        {id: 2, message:'hello, how are you? hello, how are you? hello, how are you? hello, how are you? hello, how are you? hello, how are you? hello, how are you? hello, how are you? hello, how are you? hello, how are you? hello, how are you? hello, how are you?', likesCount: 27},
        {id: 3, message:'hello, how are you m?', likesCount: 54}
    ]
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
    return stateCopy;
}

export default profileReducer;