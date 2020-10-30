const CHANGE_POST_TEXTAREA = 'changePostTextarea';
const ADD_POST = 'addPost';

export const addPostActionCreator = () => ({ type: ADD_POST })
export const postTextareaChangeActionCreator = (text) => ({
    type: CHANGE_POST_TEXTAREA,
    text: text
})

let InitialState = {
    profileName: 'Ivan Ivanov',
    profileAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOfqBBnGW-ntm2BhRJQQJupmw5Gh5drIDnvA&usqp=CAU',
    profileHeader: 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
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
    let stateCopy = {
            ...state,
            postData: [...state.postData]
    };
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
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
        }
    }
    return stateCopy;
}

export default profileReducer;