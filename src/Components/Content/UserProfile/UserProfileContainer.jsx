import React from "react"
import s from "./UserProfile.module.css"
import UserProfile from "./UserProfile";

function UserProfileContainer(props) {
    return (
        <div>
            <UserProfile
                profileHeader={props.store.getState().profile.profileHeader}
                profileAvatar={props.store.getState().profile.profileAvatar}
                profileName={props.store.getState().profile.profileName}
                profileInfoData={props.store.getState().profile.profileInfoData}
                postData={props.store.getState().profile.postData}
                store={props.store}
            />
        </div>
    );
}

export default UserProfileContainer;

