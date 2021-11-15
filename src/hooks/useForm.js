import { useState } from "react"

export const UseForm = ( initialState = {}) => {
  
  const [values, setvalue] = useState(initialState)

  const handleInputChange = ({ target }) => {
    
    setvalue({
        ...values,
        [target.name]: target.value
        
    })
  }

       
    return  [values, handleInputChange];



}
