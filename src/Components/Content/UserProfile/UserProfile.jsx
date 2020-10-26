import React from "react"
import s from "./UserProfile.module.css"
import UserPosts from "./UserPosts/UserPosts";
import UserHeader from "./UserHeader/UserHeader";
import UserInfo from "./UserInfo/UserInfo";

function UserProfile(props) {
    return (
        <div>
            <UserHeader profileHeader={props.profile.profileHeader}/>
            <UserInfo profileAvatar={props.profile.profileAvatar} profileName={props.profile.profileName} profileInfoData={props.profile.profileInfoData}/>
            <UserPosts profileAvatar={props.profile.profileAvatar} postData={props.profile.postData} newPostText={props.profile.newPostText} dispatch={props.dispatch}/>
        </div>
    );
}

export default UserProfile;

