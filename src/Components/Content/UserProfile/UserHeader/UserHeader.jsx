import React from "react";
import s from "./UserHeader.module.css";

function UserHeader(props) {
    return (
        <div className={s.headImage}>
            <img src={props.profileHeader} />
        </div>
    );
}

export default UserHeader;

