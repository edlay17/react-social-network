const CHANGE_MESSAGE_TEXTAREA = 'changeMessageTextarea';
const ADD_MESSAGE = 'addMessage';

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const messageTextareaChangeActionCreator = (text) => ({
    type: CHANGE_MESSAGE_TEXTAREA,
    text: text
})

let InitialState = {
    newMessageText: '',
    messagesData: [
        {inbox: true, text: 'hello how are you?'},
        {inbox: true, text: 'hello how are you?'},
        {inbox: false, text: 'hello how are you?'},
        {inbox: true, text: 'hello how are you?'},
        {inbox: true, text: 'hello how are you?'},
        {inbox: false, text: 'hello how are you?'}
    ],
    contactsData: [
        {name: 'Masha', id: 1},
        {name: 'Sveta', id: 2},
        {name: 'Katya', id: 3},
        {name: 'Olya', id: 4},
        {name: 'Nastya', id: 5}
    ]
}


const messagesReducer = (state = InitialState, action) => {
    let copyState = {...state};
    if(action.type === CHANGE_MESSAGE_TEXTAREA){
        copyState.newMessageText = action.text;
    }
    else if(action.type === ADD_MESSAGE){
        if(copyState.newMessageText != ''){
            let newMessage = {
                inbox: false,
                text: copyState.newMessageText
            }
            copyState.messagesData = [...state.messagesData];
            copyState.messagesData.push(newMessage);
            copyState.newMessageText = '';
        }
    }
    return copyState;
}

export default messagesReducer;