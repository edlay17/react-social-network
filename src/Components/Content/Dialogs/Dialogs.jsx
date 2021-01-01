import React from "react"
import s from "./Dialogs.module.css"
import Contacts from "./Contacts/Contacts";
import Messages from "./Messages/Messages";
import Redirect from "react-router-dom/es/Redirect";


function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <h1>Dialogs</h1>
            <div className={s.content}>
                <Contacts contacts={props.contactsData}/>
                <Messages messagesData={props.messagesData} messageTextAreaChanged={props.messageTextAreaChanged} addMessage={props.addMessage} newMessageText={props.newMessageText}/>
            </div>
        </div>
    );
}

export default Dialogs;
