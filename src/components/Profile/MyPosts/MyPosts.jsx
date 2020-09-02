import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', countLike: 25},
        {id: 2, message: 'It`s my first post?', countLike: 32}
    ]

    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <div className={s.posts}>
            <Post message={postData[0].message} countlike={postData[0].countLike + " " + "likes"}/>
            <Post message={postData[1].message} countlike={postData[1].countLike + " " + "likes"}/>


        </div>
    </div>


}

export default MyPosts;