import React, { useState } from 'react';
import './CreateTodobutton.css';

function CreateToDoButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);

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