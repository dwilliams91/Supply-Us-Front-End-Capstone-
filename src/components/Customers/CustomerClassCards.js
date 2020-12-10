import React, { useContext } from "react"
import { UserClassesContext } from "../DataProviders/UserClassesProvider"

export const CustomerClassCards=({myClass})=>{
    const {deleteUserClasses} = useContext(UserClassesContext)
    return(
    <div>
    <h5>{myClass.classList.name}</h5>  
    <button onClick={()=>deleteUserClasses(myClass.id)}>Delete</button>
    </div>
    )
}