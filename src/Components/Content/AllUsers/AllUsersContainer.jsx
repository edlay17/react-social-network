import React from "react";
import {connect} from "react-redux";
import AllUsers from "./AllUsers";
import AllUsersC from "./AllUsersC";
import {setUsersActionCreator, subscribeActionCreator, unsubscribeActionCreator, showMoreActionCreator} from "../../../redux/usersReducer";

const mapStateToProps = (state) => {
    return{
        usersData: state.users.usersData
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        subscribe: (id) => {
            dispatch(subscribeActionCreator(id));
        },
        unsubscribe: (id) => {
            dispatch(unsubscribeActionCreator(id));
        },
        showMore: () => {
            dispatch(showMoreActionCreator());
        },
        setUsers: (users) => {
          dispatch(setUsersActionCreator(users));
        },
    }
}

const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps)(AllUsersC);
export default AllUsersContainer;