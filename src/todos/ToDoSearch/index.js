import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../../App/TodoContext';



function ToDoSearch()
{
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return(
    <div className='todo-Search'>
      <input className="input" placeholder="Type your text" required="" type="text"
        value={searchValue}
        onChange={
          (event)=>{
            setSearchValue(event.target.value)
          }
        }
      />
      <span className="input-border"></span>
    </div>
  );
}




export {ToDoSearch}