import React from "react";
import d from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/1" activeClassName={d.activeLink}>Sirius</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={d.activeLink}>Aragorn</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={d.activeLink}>Criss</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={d.activeLink}>Veronica</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/5" activeClassName={d.activeLink}>Nick</NavLink>
                </div>
            </div>
            <div className={d.messages}>
                <div className={d.messages}>Hi</div>
                <div className={d.messages}>How are you</div>
                <div className={d.messages}>Yo</div>
            </div>

        </div>
    )
}

export default Dialogs;