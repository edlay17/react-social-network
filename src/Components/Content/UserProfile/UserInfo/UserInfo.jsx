import React from "react"
import s from "./UserInfo.module.css"
import UserInfoItem from "./UserInfoItem/UserInfoItem";

function UserInfo(props) {
    //let infoData = props.profileInfoData.contacts;
    //let infoDataConvert = infoData.map((description) => <UserInfoItem infoItemName={'item '} infoItem={description} key={description.id}/>);

    return (
        <div className={s.info}>
            <div className={s.photo}>
                {props.profileAvatar ? <img src={props.profileAvatar}/> : <img src='https://uploads.hb.cldmail.ru/geekbrains/public/ckeditor_assets/pictures/6933/content-dc09a3cb592ac82b7ce0522a7e7eb882.png'/>}
            </div>
            <div className={s.description}>
                <h1>{props.profileName}</h1>
                <ul>
                    <UserInfoItem infoItemName={'github'} infoItem={props.profileContacts.github}/>
                    <UserInfoItem infoItemName={'twitter'} infoItem={props.profileContacts.twitter}/>
                    <UserInfoItem infoItemName={'instagram'} infoItem={props.profileContacts.instagram}/>
                </ul>
            </div>
        </div>
    );
}

export default UserInfo;

