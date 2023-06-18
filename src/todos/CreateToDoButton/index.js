import React, { useState } from 'react';
import './CreateTodobutton.css';
import { TodoContext } from '../../App/TodoContext';


function CreateToDoButton() {
  const {openModal, setOpenModal} = React.useContext(TodoContext)
  const [clicked, setClicked] = useState(false);
  

  const handleClick = () => {
    setClicked(!clicked);
    setOpenModal(!openModal)

  };

  return (
    <button
      className={`addButton ${clicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      +
    </button>
  );
}

export default CreateToDoButton;