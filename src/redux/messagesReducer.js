const ADD_MESSAGE = 'addMessage';

export const addMessageActionCreator = (newMes) => ({
    type: ADD_MESSAGE,
    newMes
})

let InitialState = {
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
    if(action.type === ADD_MESSAGE){
        if(action.newMes !== ''){
            let newMessage = {
                inbox: false,
                text: action.newMes
            }
            stateCopy.messagesData = [...state.messagesData, newMessage];
        }
    }
    return stateCopy;
}

export default messagesReducer;