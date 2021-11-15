import React, { useState } from 'react'

export const VehiculoComponent = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = ( e ) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault()

        if ( inputValue.trim().length > 2) {
            setCategories( vehNombre => [...vehNombre, inputValue]);
            setinputValue('');
        }
       
}

    return (
        <>
         <form onSubmit={handleSubmit}>
             <p> Patente
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            /> </p>
        </form>
        
                        
        </>            
        )
        
}
