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
            <UserInfo changeProfileName={props.changeProfileName} changeProfileData={props.changeProfileData} authId={props.authId} profileId={props.profileId} status={props.status} changeStatus={props.changeStatus} profileAvatar={props.profileData.photos.small} profileName={props.profileData.fullName} profileContacts={props.profileData.contacts}/>
            <UserPosts authId={props.authId} profileId={props.profileId} myPostData={props.myPostData} postData={props.postData} profileAvatar={props.profileData.photos.small} addPost={props.addPost} newPostText={props.newPostText} postTextareaChange={props.postTextareaChange}/>
        </div>
    );
}

export default UserProfile;