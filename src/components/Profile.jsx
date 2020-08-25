import React from 'react';
import s from './Profile.module.css';
const Profile = () => {

    return <div className='content'>
        <div>
            <img src='https://img3.goodfon.ru/wallpaper/nbig/e/32/yaponiya-fudziyama-gora-vulkan.jpg'/>
        </div>
        <div>
            <img src='https://vip-pitomec.ru/upload/iblock/9ad/9ad8b19543549bded6f032ef4e3b6b50.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>

}

export default Profile;