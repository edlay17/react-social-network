import React from "react";
import './Header.module.css';

function Header(props) {
    return (
        <header>
            <img src={props.header.headerLogo}/>
        </header>
    );
}

export default Header;
