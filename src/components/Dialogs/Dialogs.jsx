import React from "react";
import d from "./Dialogs.module.css";


const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <div className={d.dialog + ' ' + d.active}>
                    Sirius
                </div>
                <div className={d.dialog}>
                    Aragorn
                </div>
                <div className={d.dialog}>
                    Criss
                </div>
                <div className={d.dialog}>
                    Veronica
                </div>
                <div className={d.dialog}>
                    Nick
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