import React from "react";
import { TodoIcon } from "./TodoIcon";

function CloseIcon(props){
    return (
        <TodoIcon
            type="CloseItem"
            color=" rgba(229, 91, 153,0.5)"
            onClick= {props.onDelete}
        />
    );
}

export {CloseIcon};