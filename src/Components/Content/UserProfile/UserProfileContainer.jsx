import React, {useEffect} from "react"
import s from "./UserProfile.module.css"
import UserProfile from "./UserProfile";
import {connect} from "react-redux";
import {
    addPost,
    postTextareaChange,
    getProfile,
    getStatus,
    changeStatus,
    changeProfileData,
    changeProfileName
} from "../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


let UserProfileAPIContainer = (props) => {
    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId=props.authId;
            if(!userId){
                props.history.push("/login");
            }
            else{
                props.getProfile(userId);
                props.getStatus(userId);
            }
        }
        else{
            props.getProfile(userId);
            props.getStatus(userId);
        }
    }, []);


    return (
            <div>
                {
                    <UserProfile
                        changeProfileName={props.changeProfileName}
                        changeProfileData={props.changeProfileData}
                                changeStatus={props.changeStatus}
                                status={props.status} myPostData={props.myPostData}
                                authId={props.authId} profileId={props.profileId}
                                 isFetching={props.isFetching} profileData={props.profileData}
                                 postData={props.postData} newPostText={props.newPostText}
                                 addPost={props.addPost} postTextareaChange={props.postTextareaChange}/>
                }
            </div>
    );
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profile.profileData,
        postData: state.profile.postData,
        myPostData: state.profile.myPostData,
        newPostText: state.profile.newPostText,
        isFetching: state.profile.isFetching,
        profileId: state.profile.currentUserId,
        status: state.profile.status
    }
}

const mapStateToPropsForLoginRedirect = (state) => {
    return {
        authId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {
        addPost,
        postTextareaChange,
        getProfile,
        getStatus,
        changeStatus,
        changeProfileData,
        changeProfileName
    }),
    withRouter,
    connect(mapStateToPropsForLoginRedirect),
)(UserProfileAPIContainer);
