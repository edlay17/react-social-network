import React from "react";
import s from './Header.module.css';
import reactLogo from "../../include/images/logo_minimalizm_gray.png"
import Preloader from "../Common/Preloader";

function Header(props) {
    let onClickMenu = () => {
        props.toggleDisplayMobileMenu(true);
    }

    return (
        <header>
            <img src={reactLogo}/>
            <div onClick={onClickMenu} className={s.menu}>
                    <span onClick={onClickMenu} className={s.hamburgerLine}></span>
                    <span className={s.hamburgerLine}></span>
                    <span className={s.hamburgerLine}></span>
            </div>
            <div className={s.login}>{props.isFetching ? <Preloader/> : ''}<a href={'/'}>{props.isAuth ? `hello, ${props.login}` : 'login'}</a></div>

        </header>
    );
}

export default Header;
