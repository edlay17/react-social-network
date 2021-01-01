import React from "react";
import s from "./UserPosts.module.css";
import UserPost from "./Post/UserPost";
import UserAddPost from "./AddPost/UserAddPost";

function UserPosts(props) {
    let postData = props.postData;
    let postDataConvert = postData.map((post) => <UserPost profileAvatar={props.profileAvatar} message={post.message} likesCount={post.likesCount} key={post.id}/>)
    return (
        <div>
            {(props.authId === props.profileId) && <UserAddPost addPost={props.addPost} postTextareaChange={props.postTextareaChange} newPostText={props.newPostText}/>}
            <div className={s.posts}>
                {postDataConvert.reverse()}
            </div>
        </div>
    );
}
export default UserPosts;

