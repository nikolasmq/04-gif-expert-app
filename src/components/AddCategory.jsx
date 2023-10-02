import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');
    const onInputChange = (e) => {
        setinputValue(e.target.value);
    }
    const onSubmit = ( e ) => {
        e.preventDefault();
        if ( inputValue.trim().length <= 2 ) return;
        // setCategories( categories => [ inputValue, ...categories ])
        setinputValue('');
        onNewCategory( inputValue.trim() );
    }
    
    return ( 
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Ingrese una categoría"
                value={ inputValue }
                onChange={ onInputChange }
                />
        </form>
     );
}