import React from 'react'
import './Todostart.css'


function TodoStart()
{
  return(
    <div className='TodoStar-container'>
      <div className="card">
        <div className="card-details">
          <p className="text-title">Bienvenido a TODO-MACHINE!!</p>
          <p className="text-body">Para escribir tu primer TODO presiona "+" </p>
        </div>
        <a className="card-button" href="https://github.com/Jeffsmo">Más información</a>
      </div>
    </div>
  );
}




export {TodoStart }