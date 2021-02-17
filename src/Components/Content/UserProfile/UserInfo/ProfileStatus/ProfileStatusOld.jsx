import React from "react";
import s from "./ProfileStatus.module.css";
import {useForm} from "react-hook-form";


export default class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        showErrors: false,
        errors: ""
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
            errors: ""
        });
        this.toggleShowErrorMessage(false);
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
            errors: ""
        });
    }
    toggleShowErrorMessage = (toggle, errors = "") => {
        this.setState({
            showErrors: toggle
        });
    }
    addError = (error) => {
        this.setState({
            errors: this.state.errors+" "+error
        })
    }

    render(){
        return (
            <>
                {!this.state.editMode &&
                <div onClick={((this.props.authId === this.props.profileId)) && this.activateEditMode}
                     className={(this.props.authId === this.props.profileId) ? s.canChangeStatus : s.status}>
                    <span>{this.props.status || 'change status...'}</span>
                </div>
                }
                {this.state.editMode &&
                <div className={s.status}>
                    <StatusForm addError={this.addError} deactivateEditMode={this.deactivateEditMode} toggleShowErrorMessage={this.toggleShowErrorMessage} status={this.props.status} changeStatus={this.props.changeStatus}/>
                </div>
                }
                {this.state.showErrors && <ErrorMessage errors={this.state.errors}/>}
            </>
        );
    }

}

const StatusForm = (props) => {
    const {register, handleSubmit, errors} = useForm({
        defaultValues: {
            newStatus: props.status
        }
    });

    const onSubmit = (data) => {
        if(data.newStatus !== props.status) props.changeStatus(data.newStatus, props.addError, props.toggleShowErrorMessage);
        props.deactivateEditMode();
    };
    let isErrors;
    if(errors.newStatus) isErrors = true;
    return (
        <form onBlur={handleSubmit(onSubmit)} onSubmit={handleSubmit(onSubmit)}>
            <input aria-invalid={errors.newStatus ? "true" : "false"} autoFocus={true} type="text" name="newStatus" ref={register({ required: true, maxLength: 300 })}/>
            {isErrors && props.toggleShowErrorMessage(true)}
            {isErrors && props.deactivateEditMode()}
            {(isErrors && errors.newStatus.type === "required") && props.addError("Status is required!")}
            {(isErrors && errors.newStatus.type === "maxLength") && props.addError("Maximum length is 300!")}
        </form>
    );
}

const ErrorMessage = (props) => {
    return(
        <span className={s.error} role="alert">{props.errors}</span>
    )
}