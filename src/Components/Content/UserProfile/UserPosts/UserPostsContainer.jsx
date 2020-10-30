import React from "react";
import UserPosts from "./UserPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        postData: state.profile.postData,
        newPostText: state.profile.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
    }
}

const UserPostsContainer = connect(mapStateToProps, mapDispatchToProps)(UserPosts);
export default UserPostsContainer;

