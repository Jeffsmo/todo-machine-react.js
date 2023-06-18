import './TodoCounter.css';
import Logo from '../../imagenes/logo.jpeg'

function ToDoCounter(props)
{
  return(
    <div className='title-container__counter-container'>
     <div className='counter-container'>
      <div>
        <img src={Logo} alt='' className='Logo'/> </div>
      <h1 >
  
        Has completado <span>{props.completed}</span> de <span>{props.total}</span>
    </h1>      
    </div>
    </div>


  );
}

export {ToDoCounter};