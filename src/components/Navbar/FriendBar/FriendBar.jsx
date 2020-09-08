import React from "react";
import FriendEl from "./FriendEl";
import f from './FriendBar.module.css'


const FriendBar = (props) => {

    let friendElements = props.friends.map(f => <FriendEl name={f.name} id={f.id}/>)

    return (
        <div className={f.sidebarblock}>
            <h3>Friends</h3>
            <div>
                {friendElements}
            </div>
        </div>
    )
}

export default FriendBar;