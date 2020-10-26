import React from "react"
import s from "./Contact.module.css"
import {NavLink} from "react-router-dom";

function Contact(props) {
    return (
        <div>
            <div>
                <NavLink activeClassName={s.active} to={`/dialogs/${props.id}`}><img src="https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png"/>{ props.name }</NavLink>
            </div>
        </div>
    );
}

export default Contact;
