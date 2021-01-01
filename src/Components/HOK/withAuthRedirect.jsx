import React from "react"
import Redirect from "react-router-dom/es/Redirect";

const withAuthRedirect = (InputComponent) => {
    let RedirectComp = (props) => {
        if(!props.isAuth) return <Redirect to={'/Login'}/>;
        return <InputComponent {...props}/>;
    }
    return RedirectComp;
}

export default withAuthRedirect;