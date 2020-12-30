import React from 'react';
import AllUsersFunc from './AllUsersFunc';
import {connect} from 'react-redux';
import {
    setUsers,
    showMore,
    addUsers,
    getUsers,
    setSubscribe,
    setUnsubscribe
} from "../../../redux/usersReducer";
import Preloader from '../../Common/Preloader'


class AllUsersAPIContainer extends React.Component{

    componentDidMount() {
        if(this.props.usersData.length === 0 || this.props.page !== 1){
           this.props.getUsers(1,1, "SET");
        }
    }

    showMore = () => {
        this.props.getUsers(this.props.page+1, this.props.page+1, "ADD")
    }

    showPage = (pageNum) => {
        this.props.getUsers(pageNum,pageNum, "SET");
    }

    usersPageCount = () => {
        return Math.ceil(this.props.totalCount / this.props.pageSize);
    }

    render(){
        return <>
            {this.props.isFetching && <Preloader />}
            <AllUsersFunc page={this.props.page}
                          convertUserData={this.convertUserData}
                          usersPageCount={this.usersPageCount}
                          showPage={this.showPage}
                          showMore={this.showMore}
                          usersData={this.props.usersData}
                          isFetching={this.props.isFetching}
                          isInProgress={this.props.isInProgress}
                          setSubscribe={this.props.setSubscribe}
                          setUnsubscribe={this.props.setUnsubscribe}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return{
        usersData: state.users.usersData,
        totalCount: state.users.totalCount,
        page: state.users.page,
        pageSize: state.users.pageSize,
        isFetching: state.users.isFetching,
        isInProgress: state.users.followingInProgress
    }
}

const AllUsersContainer = connect(mapStateToProps, {
    showMore,
    setUsers,
    addUsers,
    getUsers,
    setSubscribe,
    setUnsubscribe
})(AllUsersAPIContainer);
export default AllUsersContainer;