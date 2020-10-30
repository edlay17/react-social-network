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
    let stateCopy = {...state};
    if(action.type === CHANGE_MESSAGE_TEXTAREA){
        stateCopy.newMessageText = action.text;
    }
    else if(action.type === ADD_MESSAGE){
        if(stateCopy.newMessageText != ''){
            let newMessage = {
                inbox: false,
                text: stateCopy.newMessageText
            }
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageText = '';
        }
    }
    return stateCopy;
}

export default messagesReducer;