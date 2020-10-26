import React from "react"
import s from "./Dialogs.module.css"
import Contacts from "./Contacts/Contacts";
import Messages from "./Messages/Messages";


function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <h1>Dialogs</h1>
            <div className={s.content}>
                <Contacts contacts={props.messages.contactsData}/>
                <Messages messages={props.messages.messagesData} newMessageText={props.messages.newMessageText} dispatch={props.dispatch}/>
            </div>
        </div>
    );
}

export default Dialogs;
