import React from "react"
import s from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";
import SidebarMenu from "./SidebarMenu/SidebarMenu";

function Sidebar(props) {

    return (
        <aside>
            <SidebarMenu menuItems={props.sidebar.sidebarMenu}/>
        </aside>
    );
}

export default Sidebar;
