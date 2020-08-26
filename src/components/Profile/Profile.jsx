import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {

    return <div>
        <div className={s.mainimg}>
            <img src='https://img3.goodfon.ru/wallpaper/nbig/e/32/yaponiya-fudziyama-gora-vulkan.jpg'/>
        </div>
        <div className={s.postimg}>
            <img src='https://vip-pitomec.ru/upload/iblock/9ad/9ad8b19543549bded6f032ef4e3b6b50.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>

}

export default Profile;