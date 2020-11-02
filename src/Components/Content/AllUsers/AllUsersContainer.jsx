import React from "react";
import {connect} from "react-redux";
import AllUsers from "./AllUsers";

const mapStateToProps = (state) => {
    return{
        usersData: state.users.usersData
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
    }
}

const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps)(AllUsers);
export default AllUsersContainer;