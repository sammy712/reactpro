import React from "react";
import d from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <nav>
            <div className={d.dialog}>
                <NavLink to={path} activeClassName={d.activeLink}>{props.name}</NavLink>
            </div>
        </nav>
    )
}

export default DialogItem;