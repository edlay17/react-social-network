import React from "react"
import s from "./AllUsers.module.css"
import User from "./User/User";
import * as axios from 'axios';

function AllUsers(props) {
    let showMore = () => {
        return props.showMore();
    }

    let getUsers = () => {
        if(props.usersData.length === 0 ){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
                debugger;
                props.setUsers(response.data.items);
            })
        }
    }

        /*
        props.setUsers([
            {id: 1, name:'Vasya3', surname:'Ivanov', photoUrl: 'https://uploads.hb.cldmail.ru/geekbrains/public/ckeditor_assets/pictures/6933/content-dc09a3cb592ac82b7ce0522a7e7eb882.png', status: 'react is my life', lastVisit: '56 min ago', sub: false},
            {id: 2, name:'Vasya4', surname:'Ivanov', photoUrl: 'https://smmis.ru/wp-content/uploads/2015/01/ava.jpg', status: 'react is my life', lastVisit: '56 min ago', sub: false},
            {id: 3, name:'Vasya', surname:'Ivanov', photoUrl: 'https://smmis.ru/wp-content/uploads/2015/01/ava.jpg', status: 'react is my life', lastVisit: '56 min ago', sub: true},
            {id: 4, name:'Vasya1', surname:'Ivanov', photoUrl: 'https://january.ua/upload/iblock/385/385bb35130b05204a12ff073a6de3ea3.png', status: 'react is my life', lastVisit: '56 min ago', sub: false},
        ]);
         */

    let usersData = props.usersData;
    let usersDataConvert = usersData.map((user) =>
        <User id={user.id} name={user.name} status={user.status} lastVisit={user.lastVisit}
              photo={user.photos} sub={user.followed} subscribe={props.subscribe} unsubscribe={props.unsubscribe} key={user.id}/>)
    return (
        <div className={s.allUsers}>
            <button onClick={getUsers}>Get users</button>
            <h1>Users</h1>
            <div className={s.userList}>
                {usersDataConvert}
            </div>
            <div className={s.showMoreButtonArea}>
                <button onClick={showMore}>Show more</button>
            </div>
        </div>
    );
}

export default AllUsers;

