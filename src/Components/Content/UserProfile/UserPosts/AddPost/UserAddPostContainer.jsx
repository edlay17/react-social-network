import React from "react";
import s from "./UserAddPost.module.css";
import {postTextareaChangeActionCreator, addPostActionCreator} from "../../../../../redux/profileReducer";
import UserAddPost from "./UserAddPost";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        newPostText: state.profile.newPostText
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

