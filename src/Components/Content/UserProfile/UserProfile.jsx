import React from "react"
import s from "./UserProfile.module.css"
import UserPostsContainer from "./UserPosts/UserPostsContainer";
import UserHeader from "./UserHeader/UserHeader";
import UserInfo from "./UserInfo/UserInfo";

function UserProfile(props) {
    return (
        <div>
            <UserHeader profileHeader={props.profileHeader}/>
            <UserInfo profileInfoData={props.profileInfoData} profileAvatar={props.profileAvatar} profileName={props.profileName}/>
            <UserPostsContainer store={props.store}/>
        </div>
    );
}

export default UserProfile;

