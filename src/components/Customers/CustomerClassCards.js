import React, { useContext } from "react"
import { UserClassesContext } from "../DataProviders/UserClassesProvider"


export const CustomerClassCards=({myClass, props})=>{
    const {deleteUserClasses} = useContext(UserClassesContext)
    return(
    <div className="CustomerClassesCard">
    <h5>{myClass.classList.name}</h5>  
    <button onClick={()=>deleteUserClasses(myClass.id).then(props.history.push("./customers"))}>Delete</button>
    </div>
    )
}