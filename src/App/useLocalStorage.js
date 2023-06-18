import React from "react";

//localStorage.removeItem('TODOS_V1');
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



function useLocalStorage(itemName, initalValue){

    //ALMACENAMIENTO LOCAL -----------------------------------------------------
  
    
    const [ item, setItem ] =React.useState(initalValue);
    const [ loading, setLoading ] =React.useState(true);
    const [ error, setError ] =React.useState(false);   


    React.useEffect(()=> {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem; //se utiliza let, ya que la variable de reasignarse
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initalValue));
          parsedItem=[];
        }
        else{
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem)
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }}, 2000);
    }, [] );
  
      
      const saveItem = (newItem) => {
        setItem(newItem);
        localStorage.setItem( itemName, JSON.stringify(newItem))
      };

      return {
        item, 
        saveItem,
        loading,
        error,
      };
    };

  

export {useLocalStorage};