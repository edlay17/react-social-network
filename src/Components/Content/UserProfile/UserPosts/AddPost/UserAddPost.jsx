import React from "react";
import s from "./UserAddPost.module.css";
import {postTextareaChangeActionCreator, addPostActionCreator} from "../../../../../redux/profileReducer";



function UserAddPost(props) {

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let textareaChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(postTextareaChangeActionCreator(text));
    }

    return (
        <div className={s.addPost}>
            <h3>New post</h3>
            <textarea placeholder="enter your message..." value={props.newPostText} onChange={textareaChange} ref={newPostElement} />
            <button onClick={addPost}>Add</button>
        </div>
    );
}

export default UserAddPost;

