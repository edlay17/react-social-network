import React, {useState} from "react"
import s from "./UserInfoItem.module.css"
import {useForm} from "react-hook-form";
import UserInfo from "../UserInfo";

export const UserInfoItems = (props) => {
    const [editMode, changeEditMode] = useState(false);
    let setEditMode = (toggle) =>{
        changeEditMode(toggle);
    }

    return (
        <>
            {!editMode
                ? <UserInfoItemsShowMode infoItem={props.infoItem} setEditMode={setEditMode} authId={props.authId} profileId={props.profileId} />
                : <UserInfoItemsEditMode changeProfileData={props.changeProfileData} infoItem={props.infoItem} setEditMode={setEditMode} authId={props.authId} profileId={props.profileId} />
            }
        </>
    )
}

const UserInfoItemsShowMode = (props) => {
    return(
        <ul className={(props.authId === props.profileId) && s.info} onClick={(props.authId === props.profileId) && (() => {props.setEditMode(true)})}>
            <li>
                <span>github:</span> {props.infoItem.github ? props.infoItem.github : 'none'}
            </li>
            <li>
                <span>twitter:</span> {props.infoItem.twitter ? props.infoItem.twitter : 'none'}
            </li>
            <li>
                <span>instagram:</span> {props.infoItem.instagram ? props.infoItem.instagram : 'none'}
            </li>
        </ul>
    )
}

const UserInfoItemsEditMode = (props) => {
    const [isReturnErrors, changeIsReturnErrors] = useState(false);
    const {register, handleSubmit, errors, setError, clearErrors} = useForm({
        defaultValues: {
            github: props.infoItem.github,
            twitter: props.infoItem.twitter,
            instagram: props.infoItem.instagram,
        },
        mode: "onChange",
    });
    const onSubmit = (data) => {
        if((data.github !== props.infoItem.github) || (data.twitter !== props.infoItem.twitter) || (data.instagram !== props.infoItem.instagram))
            props.changeProfileData(data.github, data.twitter, data.instagram, props.authId, (error) => {setError("queryResult", {
                type: "manual",
                message: error
            })}, (toggle) => {
                changeIsReturnErrors(toggle);
            }
        );
        if(!isReturnErrors)props.setEditMode(false);
    };

    return(
        <form className={s.changeData} onSubmit={handleSubmit(onSubmit)} onChange={() => {clearErrors('queryResult');}}>
            <ul>

                <li>
                    <span>github:</span>
                    <input aria-invalid={errors.github} autoFocus={true} type="text" name="github" ref={register({ required: true, maxLength: 100 })}/>
                    {(errors.github && errors.github.type === "required") && <span>github is required!</span>}
                    {(errors.github && errors.github.type === "maxLength") && <span>Maximum length is 100!</span>}
                </li>
                <li>
                    <span>twitter:</span>
                    <input aria-invalid={errors.twitter} autoFocus={true} type="text" name="twitter" ref={register({ required: true, maxLength: 100 })}/>
                    {(errors.twitter && errors.twitter.type === "required") && <span>twitter is required!</span>}
                    {(errors.twitter && errors.twitter.type === "maxLength") && <span>Maximum length is 100!</span>}
                </li>
                <li>
                    <span>instagram:</span>
                    <input aria-invalid={errors.instagram} autoFocus={true} type="text" name="instagram" ref={register({ required: true, maxLength: 100 })}/>
                    {(errors.instagram && errors.instagram.type === "required") && <span>instagram is required!</span>}
                    {(errors.instagram && errors.instagram.type === "maxLength") && <span>Maximum length is 100!</span>}
                </li>
                <button type="submit" name="button">Save</button>
                <button onClick={() => {props.setEditMode(false)}}>Close</button>
                {(errors.queryResult) && <span>{errors.queryResult.message}</span>}
            </ul>
        </form>
    )
}

export default UserInfoItems;



