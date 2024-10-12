import { useState } from "react"

//Funcional COmponent
export const AddCategory = ({onNewCategory}) => {
//Cada componente puede tener su propio estado
const [inputValue, setinputValue] = useState('')
const onInputChange = (event) =>{
    console.log(event.target.value)
    setinputValue(event.target.value)
}
const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue)
    if(inputValue.trim().length<=1) return;
    // Callback
    // Por que uso un callback en categories?revisar
    // setCategories(categories => [inputValue, ...categories])
    onNewCategory(inputValue.trim());
    setinputValue('')
    //Llamar set categories
    
}
  return (
    <form onSubmit={ (event) => onSubmit(event)}>
        {/* //puedo acortar el envio del event como en el caso del onchange */}
        <input 
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
        ></input>
    </form>
    
  )
}


