import React from "react"
import s from "./UserProfile.module.css"
import UserPosts from "./UserPosts/UserPosts";
import UserHeader from "./UserHeader/UserHeader";
import UserInfo from "./UserInfo/UserInfo";

function UserProfile(props) {
    return (
        <div>
            <UserHeader profileHeader={props.profileHeader}/>
            <UserInfo profileInfoData={props.profileInfoData} profileAvatar={props.profileAvatar} profileName={props.profileName}/>
            <UserPosts store={props.store}/>
        </div>
    );
}

export default UserProfile;

