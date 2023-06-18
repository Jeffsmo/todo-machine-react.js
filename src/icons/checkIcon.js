import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompleteIcon(props){
    return (
        <TodoIcon
            type="CompleteItem"
            color={props.completed ? '#6c00f8': 'black'}
            onClick={props.onCheck}
        />
    );
}

export {CompleteIcon};