import React from 'react';
import '../../../App.css';
import s from './MyPosts.module.css';
import Post from "./Post/Post.jsx";

const MyPosts = () => {
    return (
            <div>My post
                <div>
                    <textarea> </textarea>
                    <button>Add post</button>
                </div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
    );
}

export default MyPosts;