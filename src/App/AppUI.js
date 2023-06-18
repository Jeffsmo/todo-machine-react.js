import { ToDoCounter } from '../todos/ToDoCounter';
import { ToDoSearch } from '../todos/ToDoSearch';
import { ToDoList } from '../todos/ToDoList';
import { ToDoItem } from '../todos/TodoItem';
import { TodosLoading} from './TodosLoading';
import { TodosError} from './TodosError';
import { TodoStart} from './TodoStart';
import CreateToDoButton from '../todos/CreateToDoButton';
import { TodoContext } from './TodoContext';
import { Modal } from '../Modal';
import { CreateToDO } from '../todos/CreateToDoMenu';
import React from 'react';

function AppUI(){
    const{
    loading,
    error,
    searchedTodos,
    uncheckTodo,
    checkTodo,
    deleteTodo,
    openModal,
    setOpenModal   
    }=React.useContext(TodoContext)
    return (
        <>
            <div className='container'>
            <div className='todo-register'>
                <ToDoCounter 
                        // completed={completedTodos}
                        // total={totalTodos}  
                        />

                <ToDoSearch
                        // searchValue={searchValue}
                        // setSearchValue={setSearchValue}
                />
                </div>

            <div className='todo-items'>

            <ToDoList>
            {loading && <TodosLoading/>}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <TodoStart/>}
            {searchedTodos.map(todo => (
                <ToDoItem
                key={todo.text}
                text= {todo.text}
                completed={todo.completed}
                onCheck = {() => {
                if (todo.completed)
                    return uncheckTodo(todo.text)
                else
                    return checkTodo(todo.text)
                }}

                onDelete = {() => deleteTodo(todo.text)}
                />
            ))}
            </ToDoList>

            </div>
            </div>

            {openModal && (
                <Modal>
                    <CreateToDO></CreateToDO>
                </Modal>
            )}
            <CreateToDoButton />
        </>
      );
}

export {AppUI};