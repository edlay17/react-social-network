import React from "react"
import s from "./UserInfoItem.module.css"

function UserInfoItem(props) {
    return (
        <li>
            <span>{props.infoItemName}:</span> {props.infoItem}
        </li>
    );
}
export default UserInfoItem;



