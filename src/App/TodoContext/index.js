import React from "react";
import { useLocalStorage } from "../useLocalStorage";


const TodoContext = React.createContext();

    function TodoProvider({children}){

        //ESTADOS--------------------------------------------------------------------

        const {item: todos, saveItem: saveTodos, loading, error}= useLocalStorage('TODOS_V1', [])
        const [searchValue, setSearchValue] = React.useState('');
        const [openModal, setOpenModal] = React.useState(false);
        const completedTodos = todos.filter(todo => !!todo.completed).length;
        const totalTodos= todos.length;


        //EVENTOS --------------------------------------------------------------------  

        const addTodo = (text)=>{
            const newTodos = [...todos];
            newTodos.push({
                text,
                completed:false,
            });
            saveTodos(newTodos);
        }

        const checkTodo = (text) => {
            const newTodos = [...todos];
            const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
            );
            newTodos[todoIndex].completed = true;
            saveTodos(newTodos)
        };

        const uncheckTodo = (text) => {
            const newTodos = [...todos];
            const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
            );
            newTodos[todoIndex].completed = false;
            saveTodos(newTodos)
        }

        const deleteTodo = (text) => {
            const newTodos = [...todos];
            const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
            );
            newTodos.splice(todoIndex, 1);
            saveTodos(newTodos)
        }

        const searchedTodos = todos.filter(
            (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
            }
        );


        return(
            <TodoContext.Provider value={{
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                uncheckTodo,
                checkTodo,
                deleteTodo,
                openModal,
                setOpenModal,
                addTodo               
            }}>
                {children}
            </TodoContext.Provider>
        );
    }

export {TodoContext, TodoProvider};