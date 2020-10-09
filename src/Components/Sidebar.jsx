import React from "react";

function Sidebar() {
    return (
        <aside>
            <nav>
                <ul>
                    <li>
                        <a className='active' href='#'>Profile</a>
                    </li>
                    <li>
                        <a href='#'>Messages</a>
                    </li>
                    <li>
                        <a href='#'>Settings</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
