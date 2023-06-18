import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './TodoItem';
import CreateToDoButton from './CreateToDoButton';
import './App.css';
import React from 'react';

/*const defaultTodos = [
  {
    text:'Cortar cebolla', completed: true,
  },
  {
    text:'Tomar el curso de React', completed: true,
  },
  {
    text:'LALALAALALA', completed: false,
  },

];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
localStorage.removeItem('TODOS_V1');
*/

function App() {

  //ALMACENAMIENTO LOCAL -----------------------------------------------------
  

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  
  let parsedTodos; //se utiliza let, ya que la variable de reasignarse

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos=[];
  }
  else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  //ESTADOS--------------------------------------------------------------------

  const [todos, setTodos]= React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo=> !!todo.completed).length;
  const totalTodos= todos.length;
  console.log('Se busca todo '+searchValue)


  //EVENTOS --------------------------------------------------------------------  

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
  };

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

  return (
    <>

    <div className='container'>
      <div className='todo-register'>
          <ToDoCounter 
            completed={completedTodos} total={totalTodos} />

          <ToDoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          /> 
        </div>

      <div className='todo-items'>
        <ToDoList>
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


    <CreateToDoButton />   
 
 
    </>
  );
}



export default App;
