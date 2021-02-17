import React from "react";
import s from "./SidebarMenu.module.css";
import {NavLink} from "react-router-dom";

function SidebarMenu(props) {
    let menuItems = props.menuItems;
    let sidebarMenu = menuItems.map((elem) => {
        if(elem.isExact) return <li key={elem.id}><NavLink exact activeClassName={s.active} to={elem.route}>{elem.name}</NavLink></li>
        else return <li key={elem.id}><NavLink activeClassName={s.active} to={elem.route}>{elem.name}</NavLink></li>
    })

    return (
        <>
        <nav className={s.desktop}>
            <ul>
                {sidebarMenu}
            </ul>
        </nav>
        <nav className={`${s.mobile} ${!props.isDisplayMobileMenu && s.noneDisplay}`}>
            <ul>
                {sidebarMenu}
            </ul>
        </nav>
        </>
    );
}
export default SidebarMenu;

