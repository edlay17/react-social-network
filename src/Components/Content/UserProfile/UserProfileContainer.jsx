import React from "react"
import s from "./UserProfile.module.css"
import UserProfile from "./UserProfile";
import {connect} from "react-redux";
import {
    addPost,
    postTextareaChange,
    getProfile
} from "../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../HOK/withAuthRedirect";
import {compose} from "redux";

class UserProfileAPIContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId=this.props.authId;
        this.props.getProfile(userId);
    }
    render(){
        return (
            <div>
                {
                    <UserProfile
                                authId={this.props.authId} profileId={this.props.profileId}
                                 isFetching={this.props.isFetching} profileData={this.props.profileData}
                                 postData={this.props.postData} newPostText={this.props.newPostText}
                                 addPost={this.props.addPost} postTextareaChange={this.props.postTextareaChange}/>
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
        authId: state.auth.userId
    }
}

const mapStateToPropsForLoginRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {
        addPost,
        postTextareaChange,
        getProfile
    }),
    withRouter,
    connect(mapStateToPropsForLoginRedirect),
    withAuthRedirect
)(UserProfileAPIContainer);
