import React from "react"
import s from "./UserProfile.module.css"
import UserProfile from "./UserProfile";
import NeedToLogin from "../../Common/NeedToLogin";
import {connect} from "react-redux";
import {
    addPost,
    postTextareaChange,
    getProfile
} from "../../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class UserProfileAPIContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (this.props.isAuth && !userId) userId=this.props.authId;
        this.props.getProfile(userId);
    }
    render(){
        return (
            <div>
                {
                    (!this.props.isAuth && !this.props.match.params.userId)
                    ? <NeedToLogin/>
                    : <UserProfile authId={this.props.authId} profileId={this.props.profileId} isAuth={this.props.isAuth} isFetching={this.props.isFetching} profileData={this.props.profileData} postData={this.props.postData} newPostText={this.props.newPostText} addPost={this.props.addPost} postTextareaChange={this.props.postTextareaChange}/>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profile.profileData,
        postData: state.profile.postData,
        newPostText: state.profile.newPostText,
        isFetching: state.profile.isFetching,
        profileId: state.profile.currentUserId,
        authId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(UserProfileAPIContainer);

const UserProfileContainer = connect(mapStateToProps, {
    addPost,
    postTextareaChange,
    getProfile
})(WithUrlDataContainerComponent);
export default UserProfileContainer;
