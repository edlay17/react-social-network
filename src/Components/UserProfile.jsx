import React from "react";

function UserProfile() {
    return (
        <div className='userProfile'>
            <div className='headImage'>
                <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
            </div>
            <div className='userInfo'>
                <div className='userPhoto'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOfqBBnGW-ntm2BhRJQQJupmw5Gh5drIDnvA&usqp=CAU'/>
                </div>
                <div className='userDescription'>
                    <h2>Dmitry Ivanov</h2>
                    <ul>
                        <li><span>Exp:</span> HTML, CSS, JS, ReactJs, PHP, Wordpress, SQL, GIT.</li>
                        <li>Date of Birth: </li>
                        <li>Date of Birth: </li>
                        <li>Date of Birth: </li>
                    </ul>
                </div>
            </div>
            <div className='userPosts'>
                <div className='userAddPost'></div>
                <div className='userPost'></div>
            </div>
        </div>
    );
}

export default UserProfile;

