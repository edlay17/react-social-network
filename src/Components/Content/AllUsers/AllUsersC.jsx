import React from "react"
import s from "./AllUsers.module.css"
import User from "./User/User";
import * as axios from 'axios';

class AllUsersC extends React.Component{
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
            debugger;
            this.props.setUsers(response.data.items);
        })
        alert('up');
    }

    showMore = () => {
        return this.props.showMore();
    }


    convertUserData = () => {
        return this.props.usersData.map((user) =>
            <User id={user.id} name={user.name} status={user.status} lastVisit={user.lastVisit}
                  photo={user.photos} sub={user.followed} subscribe={this.props.subscribe} unsubscribe={this.props.unsubscribe} key={user.id}/>)
    }


    render(){
        return <div className={s.allUsers}>
                <h1>Users</h1>
                <div className={s.userList}>
                    { this.convertUserData() }
                </div>
                <div className={s.showMoreButtonArea}>
                    <button onClick={this.showMore}>Show more</button>
                </div>
            </div>
    }
}

export default AllUsersC;