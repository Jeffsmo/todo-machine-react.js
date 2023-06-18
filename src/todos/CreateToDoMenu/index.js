import React from "react";
import './CreateTodoMenu.css'

function CreateToDO(){
    return(
        <div className="create-todo-menu--container">
            <div className="input__container">
                <label className="input__label">CreateToDO</label>
                <input placeholder="Enter your username" className="input" name="text" type="text"/>
                <p className="input__description">What do you want to call yourself?</p>
            </div>
        </div>
    )
}

export {CreateToDO};