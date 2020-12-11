import React, { useContext } from "react"
import { UserClassesContext } from "../DataProviders/UserClassesProvider"


export const CustomerClassCards=({myClass, props})=>{
    const {deleteUserClasses} = useContext(UserClassesContext)
    return(
    <div className="CustomerClassesCard">
    <p>{myClass.classList.name}</p>  
    <button onClick={()=>deleteUserClasses(myClass.id).then(props.history.push("./customers"))}>Delete</button>
    <button> Show Individual Class List</button>
    </div>
    )
}