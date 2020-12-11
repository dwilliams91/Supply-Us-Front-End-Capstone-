import React, { useContext } from "react"
import {Link} from "react-router-dom"
import { UserClassesContext } from "../DataProviders/UserClassesProvider"


export const CustomerClassCards=({myClass, props})=>{
    const {deleteUserClasses} = useContext(UserClassesContext)
    return(
    <div className="CustomerClassesCard">
    <p>{myClass.classList.name}</p>  
    <button onClick={()=>deleteUserClasses(myClass.id).then(props.history.push("./customers"))}>Delete</button>
    <button > <Link to={{
                pathname:`/customers/{myClass.id}`,
                state:{
                chosenClassName:myClass.name,
                chosenClass:myClass
            }
                }}>
            </Link>Show Individual Class List</button>
    <h2> </h2>
    </div>
    )
}