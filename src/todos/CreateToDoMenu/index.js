import React from "react";
import './CreateTodoMenu.css'
import { TodoContext } from "../../App/TodoContext";

function CreateToDO(){
    const {
        addTodo,
        setOpenModal,

    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = ()=>{
        setOpenModal(false);
    }

    const onChange = (event)=>{
        setNewTodoValue(event.target.value)
    }
    return(
        <div className="create-todo-menu--container">
            <form
                onSubmit={onSubmit}
            className="input__container">
                <label className="input__label">CREA UN NUEVO TO DO</label>
                <textarea placeholder="Crea una nueva Tarea..." className="input-menu" 
                value={newTodoValue}
                onChange={onChange}/>
                    <div className="button-container">
                        <button 
                        type="button"
                        className="button-cancel"
                        onClick={onCancel}> Cancelar</button>
                        <button
                        type=""
                        className="button-accept"> Añadir</button>
                    </div>

                <p className="input__description">Tienes pendientes por hacer?</p>
            </form>
        </div>
    )
}

export {CreateToDO};