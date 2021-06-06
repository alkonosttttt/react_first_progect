import React from 'react';
import '../../../../App.css';
import s from './Post.module.css';


const Post = () => {
    return (
        <div className={s.item}>
            <img alt={'avatar'} src={'https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=681&h=383&crop=1'}/>
            Post 1
            <div>
                like
            </div>
        </div>

    );
}

export default Post;