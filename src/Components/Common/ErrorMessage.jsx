import s from "../Content/UserProfile/UserInfo/ProfileStatus/ProfileStatus.module.css";
import React from "react";

export const ErrorMessage = (props) => {
    return(
        <span className={s.error} role="alert">{props.errors}</span>
    )
}

export default ErrorMessage;