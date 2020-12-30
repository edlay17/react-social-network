import React from "react"
import s from "./UserInfoItem.module.css"

function UserInfoItem(props) {
    if(props.infoItem) return (
        <li>
            <span>{props.infoItemName}:</span> {props.infoItem}
        </li>
    )
    else return '';
}
export default UserInfoItem;



