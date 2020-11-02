import React from "react"
import s from "./User.module.css";

function User(props) {
    return (
        <div className={s.userListItem}>
            <div className={s.avatar}>
                <img src={'https://uploads.hb.cldmail.ru/geekbrains/public/ckeditor_assets/pictures/6933/content-dc09a3cb592ac82b7ce0522a7e7eb882.png'} />
            </div>
            <div className={s.userPanel}>
                <div className={s.userInfo}>
                    <span className={s.name}>{props.name} {props.sname}</span><br/>
                    <span>Status: {props.status}</span><br/>
                    <span>Last visit: {props.lastVisit}</span><br/>
                </div>
                <div className={s.buttonArea}>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default User;