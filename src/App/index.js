import { AppUI } from './AppUI';
import './App.css';
import React from 'react';
import { TodoProvider } from './TodoContext';
import { useLocalStorage } from './useLocalStorage';

function App() {
/*
        //ESTADOS--------------------------------------------------------------------

        const {item: todos, saveItem: saveTodos, loading, error}= useLocalStorage('TODOS_V1', [])
        const [searchValue, setSearchValue] = React.useState('');
        const completedTodos = todos.filter(todo => !!todo.completed).length;
        const totalTodos= todos.length;


        //EVENTOS --------------------------------------------------------------------  


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
        );*/
  return(
    <TodoProvider>
      <AppUI
    //   loading = {loading}
    //   error = {error}
    //   completedTodos = {completedTodos}
    //   totalTodos = {totalTodos}
    //   searchValue = {searchValue}
    //   setSearchValue = {setSearchValue}
    //   searchedTodos = {searchedTodos}
    //   uncheckTodo = {uncheckTodo}
    //   checkTodo = {checkTodo}
    //   deleteTodo = {deleteTodo}
        
      />

    </TodoProvider>

  )

}



export default App;
