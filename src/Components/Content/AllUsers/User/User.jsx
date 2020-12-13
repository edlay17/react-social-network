import React from "react"
import s from "./User.module.css";
import avatar from "../../../../include/images/avatar.png"

function User(props) {
    let onSubscribe = () => {
        props.subscribe(props.id);
    }
    let onUnSubscribe = () => {
        props.unsubscribe(props.id);
    }
    return (
        <div className={s.userListItem}>
            <div className={s.avatar}>
                <img src={(props.photo.small != null) ? props.photo.small : avatar} />
            </div>
            <div className={s.userPanel}>
                <div className={s.userInfo}>
                    <span className={s.name}>{props.name}</span><br/>
                    <span>Status: {props.status != null ? props.status : 'none'}</span><br/>
                    <span>Last visit: {props.lastVisit != null ? props.lastVisit : 'none'}</span><br/>
                </div>
                <div className={s.buttonArea}>
                    <button className={props.sub ? s.unSub : ''} onClick={props.sub ? onUnSubscribe : onSubscribe}>{props.sub ? 'Unsubscribe' : 'Subscribe'}</button>
                </div>
            </div>
        </div>
    );
}

export default User;