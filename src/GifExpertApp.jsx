import { useState } from "react";
import {AddCategory, GifGrid} from "./components";

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                onNewCategory={e => onAddCategory(e)} 
            />
            
            {
            categories.map(category => (
                <GifGrid key={category} category={ category }/>
            ))
            }
            
        </>
    );
}