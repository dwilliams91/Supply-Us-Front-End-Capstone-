import React from "react"

export const TeacherSupplyTable=({myItem})=>{
    return(
        <>
        <tr className="TableRow">
            <td className="tableColumn Name">
                {myItem.supplyItemId}
            </td>
            <td className="tableColumn Number">
               {myItem.number}
            </td>
            <td className="tableColumn Description">
               {myItem.description}
            </td>
        </tr>
        </>
    )
}