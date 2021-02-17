import React from "react";
import s from "./UserAddPost.module.css";
import {useForm} from "react-hook-form";

function UserAddPost(props) {

    return (
        <div className={s.addPost}>
            <h3>New post</h3>
            <UserAddPostForm postTextareaChange={props.postTextareaChange} addPost={props.addPost}/>
        </div>
    );
}

function UserAddPostForm (props) {
    const {register, handleSubmit, errors} = useForm({
        mode: "onChange"
    });

    const onSubmit = (data,e) => {
        props.postTextareaChange(data.text);
        props.addPost();
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea name="text" placeholder="enter your message..." ref={register({ required: true, maxLength: 500 })}/>
            {errors.text && (
                <span className={s.error} role="alert">
                    {"Some errors. "}
                    {errors.text && errors.text.type === "required" && "Message is required. "}
                    {errors.text && errors.text.type === "maxLength" && "Max length is 300. "}
                </span>
            )}
            <button className={s.button}  type="submit" ref={register}>Add</button>
        </form>
    );
}
export default UserAddPost;

