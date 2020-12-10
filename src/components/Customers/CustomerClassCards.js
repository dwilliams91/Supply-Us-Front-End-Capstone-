import React, { useContext } from "react"
import { UserClassesContext } from "../DataProviders/UserClassesProvider"

export const CustomerClassCards=({myClass})=>{
    const {deleteUserClasses} = useContext(UserClassesContext)
    return(
    <div>
    <h3>{myClass.classList.name}</h3>  
    <button onClick={()=>deleteUserClasses(myClass.id)}>Delete</button>
    </div>
    )
}