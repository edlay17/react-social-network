import React from "react";
import s from "./UserAddPost.module.css";

function UserAddPost(props) {

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onTextareaChange = () => {
        let text = newPostElement.current.value;
        props.textareaChange(text);
    }

    return (
        <div className={s.addPost}>
            <h3>New post</h3>
            <textarea placeholder="enter your message..." value={props.newPostText} onChange={onTextareaChange} ref={newPostElement} />
            <button onClick={onAddPost}>Add</button>
        </div>
    );
}

export default UserAddPost;

