import React from "react"
import s from "./Dialogs.module.css"
import Contacts from "./Contacts/Contacts";
import MessagesContainer from "./Messages/MessagesContainer";


function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <h1>Dialogs</h1>
            <div className={s.content}>
                <Contacts contacts={props.messages.contactsData}/>
                <MessagesContainer store={props.store}/>
            </div>
        </div>
    );
}

export default Dialogs;
