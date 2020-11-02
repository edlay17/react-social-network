import React from "react";
import {postTextareaChangeActionCreator, addPostActionCreator} from "../../../../../redux/profileReducer";
import UserAddPost from "./UserAddPost";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        postData: state.profile.postData
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {
            dispatch(addPostActionCreator());
            },
        textareaChange: (text) => {
            dispatch(postTextareaChangeActionCreator(text));
        }
    }
}

const UserAddPostContainer = connect(mapStateToProps, mapDispatchToProps)(UserAddPost);
export default UserAddPostContainer;

