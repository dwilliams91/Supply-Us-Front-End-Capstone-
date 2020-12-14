import React, { useContext } from "react"
import {Link} from "react-router-dom"
import { UserClassesContext } from "../DataProviders/UserClassesProvider"


export const CustomerClassCards=({myClass, props})=>{
    const {deleteUserClasses} = useContext(UserClassesContext)

    return(
    <div className="CustomerClassesCard">
    <p>{myClass.classList.name}</p>  
    <button onClick={()=>deleteUserClasses(myClass.id).then(props.history.push("./customers"))}>Delete</button>
    {/* {    console.log("myclass",myClass.classList.name)
} */}
    <Link to={{
                pathname:`/customers/class${myClass.id}`,
                state:{
                chosenClassName: myClass.classList.name,
                chosenClass:myClass
            }
                }}>
                    <button>click me</button>
            </Link>
    </div>
    )
}