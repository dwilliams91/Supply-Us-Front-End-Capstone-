import React, { useContext } from "react"
import { UserClassesContext } from "../DataProviders/UserClassesProvider"

export const CustomerClassCards=({myClass})=>{
    const {deleteUserClass} = useContext(UserClassesContext)
    return(
    <div>
    <h3>{myClass.classList.name}</h3>  
    <button onClick={()=>deleteUserClass(myClass.classList.id)}>Delete</button>
    </div>
    )
}