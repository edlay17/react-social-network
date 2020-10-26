import React from "react";
import s from "./SidebarMenu.module.css";
import {NavLink} from "react-router-dom";

function SidebarMenu(props) {
    //debugger;
    let menuItems = props.menuItems;
    let sidebarMenu = menuItems.map((elem) => {
        return <li><NavLink activeClassName={s.active} to={elem.route}>{elem.name}</NavLink></li>
    })

    return (
        <nav>
            <ul>
                {sidebarMenu}
            </ul>
        </nav>
    );
}
export default SidebarMenu;

