import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'One Punch' ]);
    
    const onAddCategory = (newCategory) =>{
      if(categories.includes(newCategory)) return;
      setCategories([newCategory, ...categories]);
    }
    const cleanGifs=()=>{
      setCategories([]);
    }
  return (
    <>
        <h1>Gif Generator</h1>

        <AddCategory onNewCategory={onAddCategory}/>
        <br />
        <button className="mi-boton" onClick={cleanGifs} >Clean</button>
          {categories.map( ( cat )=>
            <GifGrid
            key={cat} 
            category={cat}/>
          )}

    </>
  )
}
