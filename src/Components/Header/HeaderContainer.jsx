import React from "react"
import {connect} from "react-redux";
import {compose} from "redux";
import {authMe} from "../../../src/redux/authReducer";
import {withRouter} from "react-router-dom";
import Header from "./Header";
import {toggleDisplayMobileMenu} from "../../redux/sidebarReducer";

class HeaderAPIContainer extends React.Component{

    render(){
        return (
            <div>
                <Header toggleDisplayMobileMenu={this.props.toggleDisplayMobileMenu} isDisplayMobileMenu={this.props.isDisplayMobileMenu} isFetching={this.props.isFetching} isAuth={this.props.isAuth} userId={this.props.userId} login={this.props.login}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        userId: state.auth.userId,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth,
        authId: state.auth.id,
        isDisplayMobileMenu: state.sidebar.isDisplayMobileMenu
    }
}

export default compose(
    connect(mapStateToProps, {
        toggleDisplayMobileMenu,
        authMe
    }),
    withRouter,
)(HeaderAPIContainer);
