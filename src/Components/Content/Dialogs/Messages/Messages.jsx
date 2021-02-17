import React from "react"
import s from "./Messages.module.css"
import Message from "./Message/Message";
import {useForm} from "react-hook-form";

export default function Messages(props) {

    let messagesDataConvert = props.messagesData.map((message) => <Message inbox={message.inbox} message={message.text} key={message.id}/>);


    return (
        <div className={s.messages}>
            {messagesDataConvert}
            <AddMessageForm messageTextAreaChanged={props.messageTextAreaChanged} addMessage={props.addMessage}/>
        </div>
    );
}

const AddMessageForm = (props) => {
    const {register, handleSubmit, errors} = useForm({
        mode: "onChange"
    });

    const onSubmit = (data, e) => {
        props.addMessage(data.newMessage);
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea  aria-invalid={errors.newMessage ? "true" : "false"} name="newMessage" placeholder="enter your message..."  ref={register({ required: true, maxLength: 300  })}></textarea>
            <div className={s.button}>
                {errors.newMessage && (
                    <span className={s.error} role="alert">
                        {"Some errors. "}
                        {errors.newMessage && errors.newMessage.type === "required" && "Message is required. "}
                        {errors.newMessage && errors.newMessage.type === "maxLength" && "Max length is 300. "}
                    </span>
                )}
                <button name="send" type="submit" ref={register}>Send</button>
            </div>
        </form>
    );
}