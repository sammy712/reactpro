import React from 'react';
import s from './Post.module.css';

const Post = () => {

    return (
        <div className={s.item}>
            <img
                src='https://upload.wikimedia.org/wikipedia/ru/thumb/d/da/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg/210px-%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg'/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;