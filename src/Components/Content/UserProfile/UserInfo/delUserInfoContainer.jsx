import React from "react"
import s from "./UserInfo.module.css"
import UserInfoItem from "./UserInfoItem/UserInfoItem";
import UserInfo from "./UserInfo";

function DelUserInfoContainer(props) {
    let infoData = props.store.getState().profile.profileInfoData;
    let infoDataConvert = infoData.map((description) => <UserInfoItem infoItemName={description.descItemName} infoItem={description.descItem}/>);

    return (
        <UserInfo infoDataConvert={infoDataConvert}
                  profileName={props.store.getState().profile.profileName}
                  profileAvatar={props.store.getState().profile.profileAvatar}
        />
    );
}

export default DelUserInfoContainer;

