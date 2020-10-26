import React from "react";
import s from "./Footer.module.css";

function Footer(props) {
    return (
        <footer>
            {props.footer.footerCopyright}
        </footer>
    );
}

export default Footer;
