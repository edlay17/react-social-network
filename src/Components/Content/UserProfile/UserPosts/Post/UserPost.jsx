import React from "react"
import s from "./UserPost.module.css"

function UserPost(props) {
    return (
            <div className={s.post}>
                {props.profileAvatar ? <img className={s.avatar} src={props.profileAvatar}/> : <img className={s.avatar} src='https://uploads.hb.cldmail.ru/geekbrains/public/ckeditor_assets/pictures/6933/content-dc09a3cb592ac82b7ce0522a7e7eb882.png'/>}
                <div className={s.message}>{ props.message }</div>
            </div>
    );
}
export default UserPost;

