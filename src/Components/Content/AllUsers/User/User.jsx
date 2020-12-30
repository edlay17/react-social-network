import React from "react"
import s from "./User.module.css";
import avatar from "../../../../include/images/avatar.png"
import {NavLink} from "react-router-dom";

function User(props) {
    let onSubscribe = () => {
        props.setSubscribe(props.id)
    }
    let onUnSubscribe = () => {
        props.setUnsubscribe(props.id)
    }
    return (
        <div className={s.userListItem}>
            <div className={s.avatar}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={(props.photo.small != null) ? props.photo.small : avatar} />
                </NavLink>
            </div>
            <div className={s.userPanel}>
                <div className={s.userInfo}>
                    <NavLink to={`/profile/${props.id}`}>
                        <span className={s.name}>{props.name}</span><br/>
                    </NavLink>
                    <span>Status: {props.status != null ? props.status : 'none'}</span><br/>
                    <span>Last visit: {props.lastVisit != null ? props.lastVisit : 'none'}</span><br/>
                </div>
                <div className={s.buttonArea}>
                    <button disabled={props.isInProgress.some(id => id === props.id)} className={props.sub && s.unSub} onClick={props.sub ? onUnSubscribe : onSubscribe}>{props.sub ? 'Unsubscribe' : 'Subscribe'}</button>
                </div>
            </div>
        </div>

    );
}

export default User;