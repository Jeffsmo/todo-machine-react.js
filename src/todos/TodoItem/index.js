import React from 'react';
import { CompleteIcon } from '../../icons/checkIcon';
import { CloseIcon } from '../../icons/deleteIcon';
import './TodoItem.css';

/*<span className={`list-Todo__item--CompleteItem ${props.completed && "list-Todo__item--active"}`}
onClick={props.onCheck}
>V</span>*/
//<BiBadgeCheck className={`list-Todo__item--CompleteItem ${props.completed && "list-Todo__item--active"}`}
//onClick={props.onCheck} />
function ToDoItem(props)
{
  return(
    <li className={`list-Todo__item ${props.completed && "list-Todo__item--completed"}`}>
        <CompleteIcon 
          completed={props.completed}
          onCheck = {props.onCheck}
        />
        <p className='list-Todo__item--text'>{props.text}</p>
        {/*<span className='list-Todo__item--CloseItem'
        onClick={props.onDelete}
        >X</span>*/}
        <CloseIcon 
          onDelete={props.onDelete}
        />
    </li>
  );
}


export {ToDoItem};