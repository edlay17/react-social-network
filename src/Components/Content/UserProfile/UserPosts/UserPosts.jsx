import React from "react";
import s from "./UserPosts.module.css";
import UserPost from "./Post/UserPost";
import UserAddPostContainer from "./AddPost/UserAddPostContainer";

function UserPosts(props) {
    let postData = props.store.getState().profile.postData;
    let postDataConvert = postData.map((post) => <UserPost profileAvatar={props.store.getState().profile.profileAvatar} message={post.message} likesCount={post.likesCount} key={post.id}/>)
    return (
        <div>
            <UserAddPostContainer store={props.store}/>
            <div className={s.posts}>
                {postDataConvert.reverse()}
            </div>
        </div>
    );
}
export default UserPosts;

