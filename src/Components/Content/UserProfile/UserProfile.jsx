import React from "react"
import s from "./UserProfile.module.css"
import UserPosts from "./UserPosts/UserPosts";
import UserHeader from "./UserHeader/UserHeader";
import UserInfo from "./UserInfo/UserInfo";
import Preloader from "../../Common/Preloader";

function UserProfile(props) {
    return (
        <div>
            {props.isFetching && <Preloader/>}
            <UserHeader profileHeader={props.profileData.photos.large}/>
            <UserInfo profileInfoData={props.profileData.aboutMe} profileAvatar={props.profileData.photos.small} profileName={props.profileData.fullName} profileContacts={props.profileData.contacts}/>
            <UserPosts isAuth={props.isAuth} authId={props.authId} profileId={props.profileId} postData={props.postData} profileAvatar={props.profileData.photos.small} addPost={props.addPost} newPostText={props.newPostText} postTextareaChange={props.postTextareaChange}/>
        </div>
    );
}

export default UserProfile;