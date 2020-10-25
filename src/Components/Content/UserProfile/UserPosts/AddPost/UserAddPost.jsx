import React from "react";
import "./ProfileAddPost.css";

function ProfileAddPost() {
    return (
        <div className='userAddPost'>
            <h3 className='posts-title'>New post</h3>
            <textarea name="comment"></textarea>
            <button>Add</button>
        </div>
    );
}

export default ProfileAddPost;

