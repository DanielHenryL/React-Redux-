import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])
    
    const addCategory = (NewCategory) =>{
        if(categories.includes(NewCategory)) return;
        setCategories([NewCategory,...categories])
        // setCategories((cat)=>[NewCategory,...cat])
    }
    const Elimnar = (categoria) => {
        setCategories(categories.filter(cat => cat != categoria) )
    }
    

    return (
        <div className="p-4">
            <h1>Gifs anime</h1>
            <AddCategory 
                onNewCateg = { (event)=>addCategory(event) }
            />
            {
                categories.map((category)=>(
                    <GifGrid 
                        key={category} 
                        category = {category}
                        Elimnar={(categoria)=>Elimnar(categoria)}
                    />
                ))
            }            
        </div>
    )
}
