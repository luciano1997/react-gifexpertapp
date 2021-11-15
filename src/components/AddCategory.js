import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({ setCategories }) => {
    const [inputValue, setinputValue] = useState('')
    
    //const data = fetch('https://cors-anywhere.herokuapp.com/https://localhost:44343/weatherforecast');


    //data.then(console.log(JSON.stringify(data)));
    const handleInputChange = ( e ) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = ( e ) => {
            e.preventDefault()

            if ( inputValue.trim().length > 2) {
                setCategories( cat => [ inputValue, ...cat ]);
                setinputValue('');
            }
           
    }
    return (
 
        <form onSubmit={handleSubmit} >
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            /> 
        </form>

    )

        
}
 AddCategory.propTypes ={
    setCategories : PropTypes.func.isRequired,

 }
