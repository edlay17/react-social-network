import React from "react"
import s from "./AllUsers.module.css"
import User from "./User/User";

function AllUsers(props) {
    let usersData = props.store.getState().users.usersData;
    let usersDataConvert = usersData.map((user) => <User name={user.name} sname={user.surname} status={user.status} lastVisit={user.lastVisit} key={user.id}/>)
    return (
        <div className={s.allUsers}>
            <h1>Users</h1>
            <div className={s.userList}>
                {usersDataConvert}
            </div>
        </div>
    );
}

export default AllUsers;

