import React from "react"
import s from "./UserInfo.module.css"
import UserPost from "../UserPosts/Post/UserPost";
import UserInfoItem from "./UserInfoItem/UserInfoItem";

function UserProfile(props) {
    let infoData = props.profileInfoData;
    let infoDataConvert = infoData.map((description) => <UserInfoItem infoItemName={description.descItemName} infoItem={description.descItem}/>);

    return (
        <div className={s.info}>
            <div className={s.photo}>
                <img src={props.profileAvatar}/>
            </div>
            <div className={s.description}>
                <h1>{props.profileName}</h1>
                <ul>
                    {infoDataConvert}
                </ul>
            </div>
        </div>
    );
}

export default UserProfile;

