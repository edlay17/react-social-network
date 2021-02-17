import React, {useState} from "react";
import s from "./UserInfo.module.css";
import UserInfoItems from "./UserInfoItems/UserInfoItems";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {useForm} from "react-hook-form";
import ErrorMessage from "../../../Common/ErrorMessage";

function UserInfo(props) {
    let [isNameEditMode, toggleIsNameEditMode] = useState(false);
    let [showErrors, changeShowErrors] = useState(false);
    let [errors, changeErrors] = useState("");
    let addError = (error) => {
        changeErrors(errors+" "+error)
    }
    let activateEditMode = () => {
        toggleIsNameEditMode(true);
        changeErrors("");
        changeShowErrors(false);
    }

    return (
        <>
        <div className={s.info}>
            <div className={s.photo}>
                {props.profileAvatar ? <img src={props.profileAvatar}/>
                : <img src='https://uploads.hb.cldmail.ru/geekbrains/public/ckeditor_assets/pictures/6933/content-dc09a3cb592ac82b7ce0522a7e7eb882.png'/>}
            </div>
            <div className={s.description}>
                {!isNameEditMode ? <h1 onClick={activateEditMode}>{props.profileName}</h1>
                    : <NameEditMode authId={props.authId} changeProfileName={props.changeProfileName} toggleShowErrorMessage={(toggle) => {changeShowErrors(toggle)}}
                                    addError={addError} name={props.profileName} toggleEdit={toggleIsNameEditMode}/>}
                {showErrors && <ErrorMessage errors={errors}/>}
                <UserInfoItems changeProfileData={props.changeProfileData} authId={props.authId} profileId={props.profileId} infoItem={props.profileContacts}/>
            </div>
        </div>
        <ProfileStatus authId={props.authId} profileId={props.profileId} status={props.status} changeStatus={props.changeStatus}/>
        </>
    );
}

let NameEditMode = (props) => {
    const [isReturnError, changeIsReturnError] = useState(false);
    const {register, handleSubmit, errors, setError} = useForm({
        defaultValues: {
            name: props.name
        },
    });
    const onSubmit = (data) => {
        if(data.name !== props.name) props.changeProfileName(data.name, props.authId, (error) => {
            setError("queryResult", {
                type: "manual",
                message: error
        })}, (toggle)=>{
            changeIsReturnError(toggle);
        });
        if(!isReturnError)props.toggleEdit(false)
    };
    debugger;
    return (
            <form className={s.changeName} onBlur={handleSubmit(onSubmit)} onSubmit={handleSubmit(onSubmit)}>
                <input aria-invalid={errors.name} autoFocus={true} type="text" name="name" ref={register({ required: true, maxLength: 50 })}/>
                {((errors.name || errors.queryResult) && props.toggleShowErrorMessage(true))}
                {((errors.name) && props.toggleEdit(false))}
                {(errors.name && errors.name.type === "required") && props.addError("Name is required!")}
                {(errors.name && errors.name.type === "maxLength") && props.addError("Maximum length is 50!")}
                {errors.queryResult && props.addError(errors.queryResult.message)}
                {((errors.name || errors.queryResult) && props.toggleEdit(false))}
            </form>
    )
}

export default UserInfo;