import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
const [inputValue, setInputValue] = useState('One punch');

    const OnInputChange = ({ target })=>{
        
        setInputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length<=1) return;
        //aquí hacemos un callback
        setInputValue('');
        onNewCategory(inputValue.trim());
        
    }

  return (
    <form onSubmit={event => onSubmit(event)}>
         <input 
            type="text"
            placeholder="Search Gifs "
            value={inputValue}
            onChange={OnInputChange}
         />   
    </form>
  )
}
