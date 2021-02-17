import React, {useState} from "react";
import s from "./ProfileStatus.module.css";
import {useForm} from "react-hook-form";
import ErrorMessage from "../../../../Common/ErrorMessage"


export const ProfileStatus = (props) => {
    let [editMode, changeEditMode] = useState(false);
    let [showErrors, changeShowErrors] = useState(false);
    let [errors, changeErrors] = useState("");

    let activateEditMode = () => {
        changeEditMode(true);
        changeErrors("");
        changeShowErrors(false);
    }
    let toggleShowErrorMessage = (toggle, errors = "") => {
        changeShowErrors(toggle);
    }
    let addError = (error) => {
        changeErrors(errors+" "+error)
    }

    return (
            <>
                {!editMode &&
                <div onClick={((props.authId === props.profileId)) && activateEditMode}
                     className={(props.authId === props.profileId) ? s.canChangeStatus : s.status}>
                    <span>{props.status || 'change status...'}</span>
                </div>
                }
                {editMode &&
                <div className={s.status}>
                    <StatusForm addError={addError} changeEditMode={changeEditMode} toggleShowErrorMessage={toggleShowErrorMessage} status={props.status} changeStatus={props.changeStatus}/>
                </div>
                }
                {showErrors && <ErrorMessage errors={errors}/>}
            </>
    );

}

const StatusForm = (props) => {
    const {register, handleSubmit, errors} = useForm({
        defaultValues: {
            newStatus: props.status
        },
    });

    const onSubmit = (data) => {
        if(data.newStatus !== props.status) props.changeStatus(data.newStatus, props.addError, props.toggleShowErrorMessage);
        props.changeEditMode(false);
    };
    return (
        <form onBlur={handleSubmit(onSubmit)} onSubmit={handleSubmit(onSubmit)}>
            <input aria-invalid={errors.newStatus} autoFocus={true} type="text" name="newStatus" ref={register({ required: true, maxLength: 900 })}/>
            {errors.newStatus && props.toggleShowErrorMessage(true)}
            {errors.newStatus && props.changeEditMode(false)}
            {(errors.newStatus && errors.newStatus.type === "required") && props.addError("Status is required!")}
            {(errors.newStatus && errors.newStatus.type === "maxLength") && props.addError("Maximum length is 300!")}
        </form>
    );
}



export default ProfileStatus;