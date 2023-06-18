import React from "react";
import { TodoIcon } from "./TodoIcon";

function CloseIcon(props){
    return (
        <TodoIcon
            type="CloseItem"
            color=" #6c00f8"
            onClick= {props.onDelete}
        />
    );
}

export {CloseIcon};