import React from "react"
import {connect} from "react-redux";
import Login from "../Login/Login";
import {loginMe, logOutMe} from "../../redux/authReducer";

function LoginContainer(props) {
    return (
        <Login captchaUrl={props.captchaUrl} login={props.login} isAuth={props.isAuth} logOutMe={props.logOutMe} loginMe={props.loginMe} isFetching={props.isFetching}/>
    );
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {
        loginMe,
        logOutMe
    })(LoginContainer);