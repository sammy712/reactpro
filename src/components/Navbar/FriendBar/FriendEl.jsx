import React from "react";

const FriendEl = (props) => {
    return (
        <div>
            <div>
                <img src={"13795968221598811050-48.png"} alt="icon"/>
            </div>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export default FriendEl;