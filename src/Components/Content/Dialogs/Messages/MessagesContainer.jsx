import React from "react"
import {messageTextareaChangeActionCreator, addMessageActionCreator} from "../../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        messagesData: state.messages.messagesData,
        newMessageText: state.messages.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        messageTextAreaChanged: (text) => {
            dispatch(messageTextareaChangeActionCreator(text));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer;
