import React, { useContext } from "react"
import { ClassListSupplyItemContext } from "../../DataProviders/ClassListSupplyItemProvider"

export const TeacherSupplyTable=({myItem})=>{
    const {deleteItem} = useContext(ClassListSupplyItemContext)  


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
               <button onClick={
                   ()=>{
                       deleteItem(myItem.id)
                   }
               }>delete</button>
            </td>
        </tr>
        </>
    )
}