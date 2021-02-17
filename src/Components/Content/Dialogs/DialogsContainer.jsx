import React from "react"
import {addMessageActionCreator} from "../../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import withAuthRedirect from "../../HOK/withAuthRedirect"

const mapStateToProps = (state) => {
    return{
        messagesData: state.messages.messagesData,
        newMessageText: state.messages.newMessageText,
        contactsData: state.messages.contactsData,
    }
}

const mapStateToPropsForLoginRedirect = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMes) => {
            dispatch(addMessageActionCreator(newMes));
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    connect(mapStateToPropsForLoginRedirect),
    withAuthRedirect,
)(Dialogs)