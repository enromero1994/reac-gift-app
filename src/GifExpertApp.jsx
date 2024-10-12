import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = (newCategory) =>{
    

    if(categories.includes(newCategory)) return;
    setCategories([...categories,newCategory])
  }
  console.log(categories)
  return (
    //Fragmento <h></h>
    <>  
    
        <h1>Gif Expert App</h1>
 
        <AddCategory 
        // setCategories={setCategories}
        onNewCategory={value => onAddCategory(value)}
        />
          { 
          categories.map( (category) =>(
            <GifGrid
             key={category} 
             category={category}>

             </GifGrid>
    
            )
          )
          }
         
     

    </>
  )
}

export default GifExpertApp
