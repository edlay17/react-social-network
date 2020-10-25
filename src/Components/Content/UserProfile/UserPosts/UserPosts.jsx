import React from "react"
import ProfileAddPost from "./ProfileAddPost"

function UserPosts() {
    return (
        <div className='userPosts'>
            <h2 className='posts-title'>My posts</h2>
            <ProfileAddPost/>
            <div className='userPost'></div>
        </div>
    );
}
export default UserPosts;

