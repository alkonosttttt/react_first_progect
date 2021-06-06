import React from 'react';
import '../../App.css';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts.jsx";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img alt={'Background_photo'}
                     src={'https://i.pinimg.com/originals/cb/20/bd/cb20bd8cc6af60363e3b11e72856a75a.jpg'}/>
            </div>
            <div>
                Avatar + description
            </div>

            <MyPosts/>
        </div>
    );
}

export default Profile;