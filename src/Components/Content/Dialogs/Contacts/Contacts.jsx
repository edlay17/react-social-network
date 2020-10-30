import React from "react"
import s from "./Contacts.module.css"
import Contact from "./Contact/Contact";

function Contacts(props) {
    let contactsDataConvert = props.contacts.map((contact) =>
        <div className={s.list}>
            <Contact name={contact.name} id={contact.id} key={contact.id}/>
        </div>
    )

    return (
        <div className={s.contactsBar}>
            {contactsDataConvert}
        </div>
    );
}

export default Contacts;
