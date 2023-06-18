import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompleteIcon(props){
    return (
        <TodoIcon
            type="CompleteItem"
            color={props.completed ? 'purple': 'black'}
            onClick={props.onCheck}
        />
    );
}

export {CompleteIcon};