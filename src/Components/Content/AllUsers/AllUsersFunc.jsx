import React from "react"
import s from "./AllUsers.module.css"
import User from "./User/User";


function AllUsersFunc(props) {

    let convertUserData = () => {
        return props.usersData.map((user) => <User id={user.id} name={user.name} status={user.status}
                                                   lastVisit={user.lastVisit}
                                                   photo={user.photos} sub={user.followed}
                                                   isInProgress={props.isInProgress}
                                                   setSubscribe={props.setSubscribe}
                                                   setUnsubscribe={props.setUnsubscribe}
                                                   key={user.id}
                                                    />)
    }

    let pages = [];
    for(let i=1;i<=props.usersPageCount();i++){
        pages.push(i);
    }
    let pagesConvert = pages.map((page) =>
        <button onClick={()=>{props.showPage(page)}} className={page===props.page && 'notAvailable'}>{page}</button>)

    return (
        <div className={s.allUsers}>
            <h1>Users</h1>
            <div className={s.userList}>
                { convertUserData() }
            </div>
            <div className={s.showMoreButtonArea}>
                <button disabled={props.page>=props.usersPageCount()} className={props.page>=props.usersPageCount() ? 'notAvailable' : ''} onClick={props.page>=props.usersPageCount() ? '' : props.showMore}>{props.page>=props.usersPageCount() ? 'all users are displayed' : 'Show more'}</button>
                <br></br>
                { pagesConvert }
                <p>Отображено страниц: { props.page } из { props.usersPageCount() }</p>
            </div>
        </div>
    );
}

export default AllUsersFunc;
