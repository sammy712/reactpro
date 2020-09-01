import React from "react";
import d from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;
    return (
        <div>
            <div className={d.dialog}>
                <NavLink to={path} activeClassName={d.activeLink}>{props.name}</NavLink>
            </div>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={d.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <DialogItem name="Sirius" id="1"/>
                <DialogItem name="Aragorn" id="2"/>
                <DialogItem name="Criss" id="3"/>
                <DialogItem name="Veronica" id="4"/>
                <DialogItem name="Nick" id="5"/>
            </div>
            <div className={d.messages}>
                <Message message="Hi"/>
                <Message message="How are you"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
            </div>

        </div>
    )
}

export default Dialogs;