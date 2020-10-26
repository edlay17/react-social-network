import React from "react"
import s from "./UserPost.module.css"

function UserPost(props) {
    return (
            <div className={s.post}>
                <img className={s.avatar} src={props.profileAvatar}/>
                <div className={s.message}>{ props.message }</div>
            </div>
    );
}
export default UserPost;

