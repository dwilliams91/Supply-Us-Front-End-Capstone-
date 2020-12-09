import React from "react"

export const TeacherSupplyTable=({myItem})=>{
    

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
                       console.log(myItem)
                   }
               }>delete</button>
            </td>
        </tr>
        </>
    )
}