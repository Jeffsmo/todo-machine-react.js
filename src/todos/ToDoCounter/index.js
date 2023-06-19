import './TodoCounter.css';
import Logo from '../../imagenes/logo.jpg'
import React from 'react';
import { TodoContext } from '../../App/TodoContext';

function ToDoCounter()
{
   const {
    completedTodos,
    totalTodos,

   } = React.useContext(TodoContext);
  return(
    <div className='title-container__counter-container'>
     <div className='counter-container'>
      <div>
        <img src={Logo} alt='' className='Logo'/> 

        </div>
        <label>Bienvenido a TODO MACHINE :D!!</label>
      <h1 >
  
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>
    </h1>      
    </div>
    </div>


  );
}

export {ToDoCounter};