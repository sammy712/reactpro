import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', countLike: 25},
        {id: 2, message: 'It`s my first post?', countLike: 32}
    ]

    let postsElements = posts.map(p => <Post message={p.message} countlike={p.countLike + " " + "likes"}/>)


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
            {postsElements}


        </div>
    </div>


}

export default MyPosts;