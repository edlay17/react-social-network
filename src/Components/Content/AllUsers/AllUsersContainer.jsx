import React, {useEffect} from 'react';
import AllUsersFunc from './AllUsersFunc';
import {connect} from 'react-redux';
import {
    setUsers,
    addUsers,
    getUsers,
    setSubscribe,
    setUnsubscribe,
    setCountUsersOnPage
} from "../../../redux/usersReducer";
import Preloader from '../../Common/Preloader'
import {compose} from "redux";
import {getUsersSuperSelector} from "../../../redux/usersSelectors";


function AllUsersAPIContainer(props){
    useEffect(() => {
        props.getUsers(1,1, "SET", props.pageSize);
    }, []);

    let showMore = () => {
        props.getUsers(props.page+1, props.page+1, "ADD", props.pageSize)
    }
    let showPage = (pageNum) => {
        props.getUsers(pageNum, pageNum, "SET", props.pageSize);
    }

    let usersPageCount = () => {
        return Math.ceil(props.totalCount / props.pageSize);
    }
    return (
        <>
        <AllUsersFunc page={props.page}
                      pageSize={props.pageSize}
                      usersPageCount={usersPageCount}
                      showPage={showPage}
                      showMore={showMore}
                      usersData={props.usersData}
                      isFetching={props.isFetching}
                      isInProgress={props.isInProgress}
                      setSubscribe={props.setSubscribe}
                      setUnsubscribe={props.setUnsubscribe}
                      isAuth={props.isAuth}
                      setCountUsersOnPage={props.setCountUsersOnPage}
                      authId={props.authId}
        />
        {props.isFetching && <Preloader />}
        </>
    );
}


const mapStateToProps = (state) => {
    return{
        usersData: getUsersSuperSelector(state),
        totalCount: state.users.totalCount,
        page: state.users.page,
        pageSize: state.users.pageSize,
        isFetching: state.users.isFetching,
        isInProgress: state.users.followingInProgress,
    }
}

const mapStateToPropsForLoginRedirect = (state) => {
    return{
        isAuth: state.auth.isAuth,
        authId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, {
        setUsers,
        addUsers,
        getUsers,
        setSubscribe,
        setUnsubscribe,
        setCountUsersOnPage
    }),
    connect(mapStateToPropsForLoginRedirect),
)(AllUsersAPIContainer);