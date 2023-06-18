import React from 'react'
import './TodoSearch.css'


/*      <input className="todo-Search__input" 
placeholder="Cortar Cebolla"
value={searchValue}
onChange={
  (event)=>{
    setSearchValue(event.target.value)
  }
}
/>*/
// event.target nos obtiene el elemento html, del cual podemos tomar las característica de manejo del DOM
// input.value ==== event.target.value

function ToDoSearch({
  searchValue,
  setSearchValue
})
{
  //const [state, setState] = React.useState();
  //console.log(state);




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