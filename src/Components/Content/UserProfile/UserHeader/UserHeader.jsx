import React from "react";
import s from "./UserHeader.module.css";

function UserHeader(props) {
    return (
        <div className={s.headImage}>
            {props.profileHeader ? <img src={props.profileHeader} /> : <img src='https://www.paragyte.com/img/React_Banner.png' />}
        </div>
    );
}

export default UserHeader;

