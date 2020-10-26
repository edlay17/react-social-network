import React from "react"
import s from "./Messages.module.css"
import Message from "./Message/Message";
import {messageTextareaChangeActionCreator, addMessageActionCreator} from "../../../../redux/messagesReducer";


function Messages(props) {
    let messagesDataConvert = props.messages.map((message) => <Message inbox={message.inbox} message={message.text}/>);
    let message = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let messageTextAreaChanged = (e) => {
        let text = e.target.value;
        props.dispatch(messageTextareaChangeActionCreator(text));
    }

    return (
        <div className={s.messages}>
            {messagesDataConvert}
            <textarea placeholder="enter your message..."  value={props.newMessageText} onChange={messageTextAreaChanged} ref={message}></textarea>
            <div className={s.button}>
                <button onClick={addMessage}>Send</button>
            </div>

        </div>
    );
}

export default Messages;
