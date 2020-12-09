import React, { useContext } from "react"
import { ClassListSupplyItemContext } from "../../DataProviders/ClassListSupplyItemProvider"
import { TeacherSupplyTableList } from "./TeacherSupplyTableList"

export const TeacherSupplyTable=({myItem, props})=>{
    const {deleteItem} = useContext(ClassListSupplyItemContext)  
    // console.log(props.history.location)
    return(
        <>
        <tr className="TableRow">
            <td className="tableColumn Name">
                {myItem.supplyItem.name}
            </td>
            <td className="tableColumn Number">
               {myItem.number}
            </td>
            <td className="tableColumn Description">
               {myItem.description}
            </td>
            <td className="tableColumn DeleteButton">
               <button onClick={ ()=>
               deleteItem(myItem.id)
               }
               >delete</button>
            </td>
        </tr>
        </>
    )
}