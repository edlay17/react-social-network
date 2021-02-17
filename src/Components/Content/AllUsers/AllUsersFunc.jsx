import React, {useEffect} from "react"
import s from "./AllUsers.module.css"
import User from "./User/User";

const AllUsersFunc = (props) => {
    useEffect(() => {
        props.showPage(1);
    }, [props.pageSize]);

    let convertUserData = () => {
        return props.usersData.map((user) => <User id={user.id} name={user.name} status={user.status}
                                                   lastVisit={user.lastVisit}
                                                   photo={user.photos} sub={user.followed}
                                                   isInProgress={props.isInProgress}
                                                   setSubscribe={props.setSubscribe}
                                                   setUnsubscribe={props.setUnsubscribe}
                                                   key={user.id}
                                                   isAuth={props.isAuth}
                                                   authId={props.authId}
                                                    />)
    }

    let pages = [];
    let pageCount = props.usersPageCount();
    for(let i=1;i<=props.usersPageCount();i++){
        pages.push(i);
    }
    let onChangeCountUsersOnPage = (event) => {
        props.setCountUsersOnPage(event.target.value);
    }
    let pagesConvert = pages.map(function(page) {
        if(page===1 && props.page > 2) return <span><button disabled={props.isFetching} onClick={()=>{props.showPage(page)}}>{page}</button> ... </span>
        if(page===props.page) return <button disabled={props.isFetching}className={'notAvailable'}>{page}</button>
        if(page===props.page+1 || page===props.page-1) return <button disabled={props.isFetching}onClick={()=>{props.showPage(page)}}>{page}</button>
        if(page===pageCount && props.page <= pageCount-2) return <span> ... <button disabled={props.isFetching}onClick={()=>{props.showPage(page)}}>{page}</button></span>
    });

    return (
        <div className={s.allUsers}>
            <h1>Users</h1>
            <select className={s.selectCount} value={props.pageSize} onChange={onChangeCountUsersOnPage}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
            <div className={s.userList}>
                { convertUserData() }
            </div>
            <div className={s.showMoreButtonArea}>
                <button disabled={(props.page>=props.usersPageCount()) ||  (props.isFetching)} className={props.page>=props.usersPageCount() && 'notAvailable'} onClick={!(props.page>=props.usersPageCount()) && props.showMore}>{props.page>=props.usersPageCount() ? 'all users are displayed' : 'Show more'}</button>
                <br></br>
                { pagesConvert }
            </div>
        </div>
    );
}

export default AllUsersFunc;
