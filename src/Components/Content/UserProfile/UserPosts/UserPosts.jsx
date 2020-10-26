import React from "react";
import s from "./UserPosts.module.css";
import UserAddPost from "./AddPost/UserAddPost";
import UserPost from "./Post/UserPost";

function UserPosts(props) {
    let postData = props.postData;
    let postDataConvert = postData.map((post) => <UserPost profileAvatar={props.profileAvatar} message={post.message} likesCount={post.likesCount}/>)

    return (
        <div>
            <UserAddPost newPostText={props.newPostText} dispatch={props.dispatch}/>
            <div className={s.posts}>
                {postDataConvert.reverse()}
            </div>
        </div>
    );
}
export default UserPosts;

