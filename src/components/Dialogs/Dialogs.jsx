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

    let dialogs = [
        {id: 1, name: 'Sirius'},
        {id: 2, name: 'Aragorn'},
        {id: 3, name: 'Criss'},
        {id: 4, name: 'Veronica'},
        {id: 5, name: 'Nick'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;