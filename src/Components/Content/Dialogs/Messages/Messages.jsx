import React from "react"
import s from "./Messages.module.css"
import Message from "./Message/Message";

function Messages(props) {
    let message = React.createRef();
    let messagesDataConvert = props.messagesData.map((message) => <Message inbox={message.inbox} message={message.text}/>);
    let onMessageTextAreaChanged = () => {
        let text = message.current.value;
        props.messageTextAreaChanged(text);
    }
    let onAddMessage = () => {
        props.addMessage();
    }

    return (
        <div className={s.messages}>
            {messagesDataConvert}
            <textarea placeholder="enter your message..."  value={props.newMessageText} onChange={onMessageTextAreaChanged} ref={message}></textarea>
            <div className={s.button}>
                <button onClick={onAddMessage}>Send</button>
            </div>
        </div>
    );
}

export default Messages;
