import React from "react";
import s from './Header.module.css';
import reactLogo from "../../include/images/logo_minimalizm_gray.png"

function Header(props) {
    //<img src={props.header.headerLogo}/>
    return (
        <header>
            <img src={reactLogo}/>
            <div className={s.menu}>
                    <span className={s.hamburgerLine}></span>
                    <span className={s.hamburgerLine}></span>
                    <span className={s.hamburgerLine}></span>
            </div>
        </header>
    );
}

export default Header;
