import React, { useContext } from "react"
import {Link} from "react-router-dom"
import { UserClassesContext } from "../DataProviders/UserClassesProvider"
import {Button} from "react-bootstrap"

export const CustomerClassCards=({myClass, props})=>{
    const {deleteUserClasses} = useContext(UserClassesContext)

    return(
    <div className="CustomerClassesCard">
    <p>{myClass.classList.name}</p>  
    <Button variant="outline-warning" size="sm" onClick={()=>deleteUserClasses(myClass.id).then(props.history.push("./customers"))}>Delete</Button>
    {/* {    console.log("myclass",myClass.classList.name)
} */}
    <Link to={{
                pathname:`/customers/class${myClass.id}`,
                state:{
                chosenClassName: myClass.classList.name,
                chosenClass:myClass
            }
                }}>
                    <Button variant="outline-primary" size="sm">See only {myClass.classList.name}</Button>
            </Link>
    </div>
    )
}