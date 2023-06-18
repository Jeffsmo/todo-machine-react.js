import './TodoList.css'

function ToDoList(props)
{
  return(
    <ul className="ListBox">
        {props.children}
    </ul>
  );
}

export {ToDoList}