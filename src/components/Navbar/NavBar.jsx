import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import FriendBar from "./FriendBar/FriendBar";


const NavBar = (props) => {

    return (
        <nav className={s.nav}>
            {/*<div className={'${s.item} ${s.active}'}>*/}
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/setting' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div>
                <FriendBar friends={props.state.friends}/>
            </div>

        </nav>
    )
}

export default NavBar;